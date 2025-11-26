"""LLM service for meeting assistant - supports OpenAI, Ollama, and Anthropic."""
import os
import json
import uuid
import aiohttp
from typing import Optional, List, Dict, Any
from abc import ABC, abstractmethod
from datetime import datetime


class LLMProvider(ABC):
    """Abstract base class for LLM providers."""

    @abstractmethod
    async def generate(self, prompt: str, system_prompt: str = "") -> str:
        pass

    @abstractmethod
    async def chat(self, messages: List[Dict[str, str]], system_prompt: str = "") -> str:
        pass


class OpenAIProvider(LLMProvider):
    """OpenAI API provider."""

    def __init__(self):
        self.api_key = os.getenv("OPENAI_API_KEY", "")
        self.model = os.getenv("OPENAI_MODEL", "gpt-4-turbo-preview")
        self.base_url = "https://api.openai.com/v1"

    async def generate(self, prompt: str, system_prompt: str = "") -> str:
        messages = []
        if system_prompt:
            messages.append({"role": "system", "content": system_prompt})
        messages.append({"role": "user", "content": prompt})
        return await self.chat(messages)

    async def chat(self, messages: List[Dict[str, str]], system_prompt: str = "") -> str:
        if system_prompt and (not messages or messages[0].get("role") != "system"):
            messages = [{"role": "system", "content": system_prompt}] + messages

        async with aiohttp.ClientSession() as session:
            async with session.post(
                f"{self.base_url}/chat/completions",
                headers={
                    "Authorization": f"Bearer {self.api_key}",
                    "Content-Type": "application/json"
                },
                json={
                    "model": self.model,
                    "messages": messages,
                    "temperature": 0.3,
                    "max_tokens": 4096
                }
            ) as response:
                if response.status != 200:
                    error = await response.text()
                    raise Exception(f"OpenAI API error: {error}")
                data = await response.json()
                return data["choices"][0]["message"]["content"]


class OllamaProvider(LLMProvider):
    """Ollama local LLM provider."""

    def __init__(self):
        self.base_url = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")
        self.model = os.getenv("OLLAMA_MODEL", "llama2:13b")

    async def generate(self, prompt: str, system_prompt: str = "") -> str:
        full_prompt = f"{system_prompt}\n\n{prompt}" if system_prompt else prompt

        async with aiohttp.ClientSession() as session:
            async with session.post(
                f"{self.base_url}/api/generate",
                json={
                    "model": self.model,
                    "prompt": full_prompt,
                    "stream": False,
                    "options": {"temperature": 0.3, "num_predict": 4096}
                }
            ) as response:
                if response.status != 200:
                    error = await response.text()
                    raise Exception(f"Ollama API error: {error}")
                data = await response.json()
                return data["response"]

    async def chat(self, messages: List[Dict[str, str]], system_prompt: str = "") -> str:
        if system_prompt and (not messages or messages[0].get("role") != "system"):
            messages = [{"role": "system", "content": system_prompt}] + messages

        async with aiohttp.ClientSession() as session:
            async with session.post(
                f"{self.base_url}/api/chat",
                json={"model": self.model, "messages": messages, "stream": False}
            ) as response:
                if response.status != 200:
                    error = await response.text()
                    raise Exception(f"Ollama API error: {error}")
                data = await response.json()
                return data["message"]["content"]


class AnthropicProvider(LLMProvider):
    """Anthropic Claude API provider."""

    def __init__(self):
        self.api_key = os.getenv("ANTHROPIC_API_KEY", "")
        self.model = os.getenv("ANTHROPIC_MODEL", "claude-3-sonnet-20240229")
        self.base_url = "https://api.anthropic.com/v1"

    async def generate(self, prompt: str, system_prompt: str = "") -> str:
        messages = [{"role": "user", "content": prompt}]
        return await self.chat(messages, system_prompt)

    async def chat(self, messages: List[Dict[str, str]], system_prompt: str = "") -> str:
        filtered_messages = [m for m in messages if m.get("role") != "system"]

        async with aiohttp.ClientSession() as session:
            payload = {"model": self.model, "max_tokens": 4096, "messages": filtered_messages}
            if system_prompt:
                payload["system"] = system_prompt

            async with session.post(
                f"{self.base_url}/messages",
                headers={
                    "x-api-key": self.api_key,
                    "anthropic-version": "2023-06-01",
                    "Content-Type": "application/json"
                },
                json=payload
            ) as response:
                if response.status != 200:
                    error = await response.text()
                    raise Exception(f"Anthropic API error: {error}")
                data = await response.json()
                return data["content"][0]["text"]


class LLMService:
    """Main LLM service for meeting assistant."""

    _instance = None
    _provider: Optional[LLMProvider] = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        if self._provider is None:
            self._initialize_provider()

    def _initialize_provider(self):
        provider_name = os.getenv("LLM_PROVIDER", "openai").lower()
        if provider_name == "ollama":
            self._provider = OllamaProvider()
        elif provider_name == "anthropic":
            self._provider = AnthropicProvider()
        else:
            self._provider = OpenAIProvider()

    async def summarize_meeting(self, transcript: str, meeting_type: str = None,
                                participants: List[str] = None) -> Dict[str, Any]:
        """Summarize meeting transcript and extract action items."""
        system_prompt = self._get_summary_system_prompt()
        prompt = self._build_summary_prompt(transcript, meeting_type, participants)

        response = await self._provider.generate(prompt, system_prompt)
        return self._parse_summary_response(response)

    async def generate_agenda(self, topic: str, meeting_type: str, duration: int,
                              participants: List[str], goals: List[str]) -> Dict[str, Any]:
        """Generate meeting agenda."""
        system_prompt = self._get_agenda_system_prompt()
        prompt = self._build_agenda_prompt(topic, meeting_type, duration, participants, goals)

        response = await self._provider.generate(prompt, system_prompt)
        return self._parse_agenda_response(response)

    async def chat(self, message: str, context: Optional[str] = None,
                   history: List[Dict[str, str]] = None, ui_language: str = "en") -> str:
        """Chat about meetings with context awareness."""
        system_prompt = self._get_chat_system_prompt(ui_language)

        messages = []
        if history:
            messages.extend(history)

        user_message = message
        if context:
            user_message = f"Meeting context:\n{context}\n\nQuestion: {message}"

        messages.append({"role": "user", "content": user_message})

        return await self._provider.chat(messages, system_prompt)

    def _get_summary_system_prompt(self) -> str:
        return """You are an expert meeting assistant. Analyze meeting transcripts and extract:
1. A brief summary (2-3 sentences)
2. Key discussion points
3. Decisions made
4. Action items with assignees and deadlines
5. Next steps

Return JSON in this format:
{
    "title": "Meeting title inferred from content",
    "date": "YYYY-MM-DD",
    "summary": "Brief summary",
    "key_points": ["point1", "point2"],
    "decisions": ["decision1", "decision2"],
    "action_items": [
        {
            "id": "uuid",
            "title": "Action item",
            "assignee": "Person name or null",
            "due_date": "YYYY-MM-DD or null",
            "priority": "high|medium|low"
        }
    ],
    "next_steps": ["step1", "step2"]
}

Return ONLY valid JSON."""

    def _get_agenda_system_prompt(self) -> str:
        return """You are an expert meeting facilitator. Create professional meeting agendas.

Return JSON in this format:
{
    "title": "Meeting title",
    "duration": <minutes>,
    "agenda_items": [
        {
            "title": "Item title",
            "duration": <minutes>,
            "description": "Brief description",
            "presenter": "Person or null",
            "type": "discussion|presentation|decision|brainstorm"
        }
    ],
    "preparation": ["What attendees should prepare"],
    "objectives": ["Meeting objectives"]
}

Return ONLY valid JSON."""

    def _get_chat_system_prompt(self, ui_language: str) -> str:
        language_instructions = {
            "en": "Respond in English.",
            "ko": "한국어로 응답해주세요.",
            "ja": "日本語で応答してください。"
        }

        return f"""You are an expert meeting assistant. Help users with:
- Meeting preparation and planning
- Understanding meeting content
- Following up on action items
- Improving meeting effectiveness

Be concise and actionable.
{language_instructions.get(ui_language, language_instructions['en'])}"""

    def _build_summary_prompt(self, transcript: str, meeting_type: str,
                              participants: List[str]) -> str:
        context = ""
        if meeting_type:
            context += f"Meeting type: {meeting_type}\n"
        if participants:
            context += f"Participants: {', '.join(participants)}\n"

        return f"""{context}
Meeting transcript:
{transcript}

Please analyze this meeting and provide a structured summary in JSON format."""

    def _build_agenda_prompt(self, topic: str, meeting_type: str, duration: int,
                             participants: List[str], goals: List[str]) -> str:
        return f"""Create a meeting agenda for:
Topic: {topic}
Type: {meeting_type}
Duration: {duration} minutes
Participants: {', '.join(participants) if participants else 'To be determined'}
Goals: {', '.join(goals) if goals else 'General discussion'}

Please create a professional agenda in JSON format."""

    def _parse_summary_response(self, response: str) -> Dict[str, Any]:
        try:
            response = response.strip()
            if response.startswith("```"):
                lines = response.split("\n")
                response = "\n".join(lines[1:-1] if lines[-1] == "```" else lines[1:])
            data = json.loads(response)

            # Ensure action items have IDs
            for item in data.get("action_items", []):
                if "id" not in item:
                    item["id"] = str(uuid.uuid4())[:8]

            return data
        except json.JSONDecodeError:
            return {
                "title": "Meeting Summary",
                "date": datetime.now().strftime("%Y-%m-%d"),
                "summary": response[:500],
                "key_points": [],
                "decisions": [],
                "action_items": [],
                "next_steps": []
            }

    def _parse_agenda_response(self, response: str) -> Dict[str, Any]:
        try:
            response = response.strip()
            if response.startswith("```"):
                lines = response.split("\n")
                response = "\n".join(lines[1:-1] if lines[-1] == "```" else lines[1:])
            return json.loads(response)
        except json.JSONDecodeError:
            return {
                "title": "Meeting Agenda",
                "duration": 60,
                "agenda_items": [],
                "preparation": [],
                "objectives": []
            }


llm_service = LLMService()

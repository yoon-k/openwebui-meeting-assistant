# AI Meeting Assistant

> 📅 AI-powered meeting management tool with summarization, action item extraction, and agenda generation

**[Live Demo](https://yoon-k.github.io/openwebui-meeting-assistant/)** | [한국어](#한국어) | [日本語](#日本語)

---

## 📚 About This Project

> **🎓 Reference & Study Project**
>
> This project is created for **learning and reference purposes**. It's a "**Fullstack with AI**" collaboration project - not built by a traditional fullstack developer, but through partnership with AI assistance.
>
> Use this as a reference for:
> - NLP-based text summarization
> - Entity extraction from unstructured text
> - Calendar integration (ICS format)
> - Meeting workflow automation
>
> 🚀 **Continuous Improvement**: This project is under active development with ongoing enhancements planned.

---

## Overview

AI Meeting Assistant is a production-ready tool that leverages Large Language Models to transform how you handle meetings. From summarizing transcripts to extracting action items and generating agendas, it automates the tedious parts of meeting management.

## Features

- **📝 Meeting Summarization**: Convert transcripts into concise, actionable summaries
- **✅ Action Item Extraction**: Automatically identify tasks with assignees, deadlines, and priorities
- **📋 Agenda Generation**: Create professional meeting agendas from topics and goals
- **💬 Interactive Chat**: Ask questions about your meetings in natural language
- **📅 Calendar Export**: Export to ICS format for calendar integration
- **🌐 Multi-language UI**: English, Korean, Japanese support

## Quick Start

### Docker (Recommended)

```bash
git clone https://github.com/yoon-k/openwebui-meeting-assistant.git
cd openwebui-meeting-assistant

cp .env.example .env
# Edit .env with your API keys

docker-compose up -d
# Access at http://localhost:5000
```

### Local Installation

```bash
git clone https://github.com/yoon-k/openwebui-meeting-assistant.git
cd openwebui-meeting-assistant

python -m venv venv
source venv/bin/activate

pip install -r requirements.txt

cp .env.example .env
# Edit .env with your API keys

python -m app.api
```

## Architecture

```
openwebui-meeting-assistant/
├── app/
│   ├── api.py                    # Flask API endpoints
│   ├── models/
│   │   └── meeting.py            # Pydantic data models
│   ├── services/
│   │   └── llm_service.py        # LLM provider abstraction
│   └── utils/
│       └── calendar_utils.py     # Calendar utilities
├── static/
│   ├── css/style.css
│   └── js/app.js
├── templates/
│   └── index.html
├── docs/
│   └── index.html                # GitHub Pages demo
├── Dockerfile
├── docker-compose.yml
└── requirements.txt
```

## API Reference

### POST /api/summarize

Summarize meeting transcript.

```bash
curl -X POST http://localhost:5000/api/summarize \
  -H "Content-Type: application/json" \
  -d '{
    "transcript": "John: Let'\''s discuss Q4 roadmap...",
    "meeting_type": "planning",
    "participants": ["John", "Sarah"]
  }'
```

### POST /api/agenda

Generate meeting agenda.

```bash
curl -X POST http://localhost:5000/api/agenda \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "Q4 Planning",
    "meeting_type": "planning",
    "duration": 60,
    "goals": ["Define roadmap", "Assign responsibilities"]
  }'
```

### POST /api/chat

Interactive chat about meetings.

### POST /api/export/ics

Export meeting to ICS calendar format.

## Meeting Types

| Type | Description |
|------|-------------|
| `standup` | Daily standup meetings |
| `planning` | Sprint/project planning |
| `retrospective` | Team retrospectives |
| `brainstorm` | Brainstorming sessions |
| `one_on_one` | 1:1 meetings |
| `interview` | Job interviews |
| `client` | Client meetings |
| `general` | General meetings |

## Technical Deep Dive

### Transcript Processing Pipeline

1. **Input Parsing**: Transcript is parsed to identify speakers and content
2. **LLM Analysis**: Sent to the configured LLM with structured prompts
3. **Entity Extraction**: Action items, decisions, and key points are extracted
4. **Priority Assignment**: AI assigns priorities based on context and urgency
5. **Output Formatting**: Results are structured as JSON for frontend consumption

### Action Item Schema

```json
{
  "id": "unique-id",
  "title": "Task description",
  "assignee": "Person name",
  "due_date": "2024-12-31",
  "priority": "high|medium|low",
  "status": "todo|in_progress|done|blocked"
}
```

### Calendar Integration

The ICS export feature uses the `icalendar` library to generate RFC 5545 compliant calendar events:

```python
from app.utils import create_ics_event

ics = create_ics_event(
    title="Team Meeting",
    start_time=datetime.now(),
    duration_minutes=60,
    description="Q4 Planning Discussion",
    attendees=["john@example.com", "sarah@example.com"]
)
```

---

## 한국어

### 개요

AI 회의 도우미는 대규모 언어 모델을 활용하여 회의 처리 방식을 혁신하는 프로덕션 준비 도구입니다. 녹취록 요약부터 액션 아이템 추출, 안건 생성까지 회의 관리의 지루한 부분을 자동화합니다.

### 주요 기능

- **📝 회의 요약**: 녹취록을 간결하고 실행 가능한 요약으로 변환
- **✅ 액션 아이템 추출**: 담당자, 마감일, 우선순위가 포함된 작업 자동 식별
- **📋 안건 생성**: 주제와 목표에서 전문적인 회의 안건 생성
- **💬 대화형 채팅**: 자연어로 회의에 대해 질문
- **📅 캘린더 내보내기**: 캘린더 연동을 위한 ICS 형식 내보내기

### 빠른 시작

```bash
git clone https://github.com/yoon-k/openwebui-meeting-assistant.git
cd openwebui-meeting-assistant
cp .env.example .env
docker-compose up -d
```

---

## 日本語

### 概要

AIミーティングアシスタントは、大規模言語モデルを活用して会議の処理方法を変革するプロダクションレディなツールです。議事録の要約からアクションアイテムの抽出、アジェンダの生成まで、会議管理の面倒な部分を自動化します。

### 主な機能

- **📝 会議要約**: 議事録を簡潔で実用的な要約に変換
- **✅ アクションアイテム抽出**: 担当者、期限、優先度を含むタスクを自動識別
- **📋 アジェンダ生成**: トピックと目標からプロフェッショナルな会議アジェンダを生成
- **💬 インタラクティブチャット**: 自然言語で会議について質問
- **📅 カレンダーエクスポート**: カレンダー連携のためのICS形式でエクスポート

### クイックスタート

```bash
git clone https://github.com/yoon-k/openwebui-meeting-assistant.git
cd openwebui-meeting-assistant
cp .env.example .env
docker-compose up -d
```

---

---

## 🔬 Technical Study Guide

### Key Technologies Explained

#### 1. Text Summarization with LLMs
LLMs excel at understanding context and extracting key information from text.

```python
async def summarize_transcript(self, transcript: str, meeting_type: str) -> dict:
    system_prompt = """You are a meeting analyst. Summarize the transcript and extract:
    - Key discussion points
    - Decisions made
    - Action items with assignees"""

    response = await self.provider.generate(
        messages=[{"role": "user", "content": transcript}],
        system=system_prompt
    )
    return parse_summary_response(response)
```

**Key Concepts:**
- **Prompt Engineering**: Structuring prompts to guide LLM output
- **JSON Response Parsing**: Extracting structured data from text
- **Context Window Management**: Handling long transcripts

#### 2. Entity Extraction
Identifying specific entities (people, dates, tasks) from unstructured text.

```python
class ActionItem(BaseModel):
    title: str
    assignee: Optional[str] = None
    due_date: Optional[datetime] = None
    priority: Priority = Priority.MEDIUM

    @validator('due_date', pre=True)
    def parse_date(cls, v):
        if isinstance(v, str):
            return dateutil.parser.parse(v)
        return v
```

**Pattern Recognition:**
- Named Entity Recognition (NER) concepts
- Date/time parsing
- Priority classification

#### 3. ICS Calendar Format
The iCalendar standard (RFC 5545) for calendar data exchange.

```python
from icalendar import Calendar, Event
from datetime import datetime, timedelta

def create_ics_event(title, start, duration_minutes, description):
    cal = Calendar()
    cal.add('prodid', '-//Meeting Assistant//EN')
    cal.add('version', '2.0')

    event = Event()
    event.add('summary', title)
    event.add('dtstart', start)
    event.add('dtend', start + timedelta(minutes=duration_minutes))
    event.add('description', description)
    event.add('uid', str(uuid.uuid4()))

    cal.add_component(event)
    return cal.to_ical()
```

**ICS Structure:**
- `VCALENDAR`: Container for events
- `VEVENT`: Individual event
- `DTSTART/DTEND`: Start and end times
- `UID`: Unique identifier

#### 4. Meeting Type Classification
Different meeting types require different summarization approaches.

```python
MEETING_PROMPTS = {
    "standup": "Focus on: blockers, progress, plans for today",
    "planning": "Focus on: goals, timelines, resource allocation",
    "retrospective": "Focus on: what went well, improvements, action items",
    "brainstorm": "Focus on: ideas generated, evaluation criteria, next steps"
}

def get_summarization_prompt(meeting_type: str) -> str:
    base_prompt = "Summarize this meeting transcript."
    specific = MEETING_PROMPTS.get(meeting_type, "")
    return f"{base_prompt} {specific}"
```

#### 5. Real-time Processing Architecture
Handling long transcripts efficiently.

```python
async def process_long_transcript(transcript: str, chunk_size: int = 4000):
    # Split into manageable chunks
    chunks = [transcript[i:i+chunk_size] for i in range(0, len(transcript), chunk_size)]

    # Process chunks in parallel
    summaries = await asyncio.gather(*[
        summarize_chunk(chunk) for chunk in chunks
    ])

    # Merge summaries
    return merge_summaries(summaries)
```

### Learning Path Recommendations

1. **Beginner**: Understand text processing and API basics
2. **Intermediate**: Implement entity extraction and ICS export
3. **Advanced**: Add real-time transcription support
4. **Expert**: Build multi-language translation and team analytics

---

## License

MIT License

## Author

**yoon-k** - [GitHub Profile](https://github.com/yoon-k)

---

⭐ If this project helps you learn, please give it a star!

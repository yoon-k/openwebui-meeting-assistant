# AI Meeting Assistant

> 📅 AI-powered meeting management tool with summarization, action item extraction, and agenda generation

**[Live Demo](https://yoon-k.github.io/openwebui-meeting-assistant/)** | [한국어](#한국어) | [日本語](#日本語)

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

## License

MIT License

## Support

- 📧 Issues: [GitHub Issues](https://github.com/yoon-k/openwebui-meeting-assistant/issues)
- 📖 Docs: [GitHub Pages](https://yoon-k.github.io/openwebui-meeting-assistant/)

"""Data models for meeting assistant."""
from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
from enum import Enum


class MeetingType(str, Enum):
    """Types of meetings."""
    STANDUP = "standup"
    PLANNING = "planning"
    RETROSPECTIVE = "retrospective"
    BRAINSTORM = "brainstorm"
    ONE_ON_ONE = "one_on_one"
    INTERVIEW = "interview"
    CLIENT = "client"
    GENERAL = "general"


class ActionItemStatus(str, Enum):
    """Status of action items."""
    TODO = "todo"
    IN_PROGRESS = "in_progress"
    DONE = "done"
    BLOCKED = "blocked"


class ActionItem(BaseModel):
    """Represents a single action item from a meeting."""
    id: str = Field(..., description="Unique identifier")
    title: str = Field(..., description="Action item title")
    description: Optional[str] = Field(None, description="Detailed description")
    assignee: Optional[str] = Field(None, description="Person responsible")
    due_date: Optional[str] = Field(None, description="Due date")
    priority: str = Field("medium", description="Priority: high, medium, low")
    status: ActionItemStatus = Field(ActionItemStatus.TODO, description="Current status")


class MeetingParticipant(BaseModel):
    """Meeting participant information."""
    name: str = Field(..., description="Participant name")
    role: Optional[str] = Field(None, description="Role in the meeting")
    email: Optional[str] = Field(None, description="Email address")


class MeetingSummary(BaseModel):
    """Structured meeting summary."""
    title: str = Field(..., description="Meeting title")
    date: str = Field(..., description="Meeting date")
    duration: Optional[int] = Field(None, description="Duration in minutes")
    meeting_type: MeetingType = Field(MeetingType.GENERAL, description="Type of meeting")
    participants: List[MeetingParticipant] = Field(default_factory=list)
    summary: str = Field(..., description="Brief summary")
    key_points: List[str] = Field(default_factory=list, description="Key discussion points")
    decisions: List[str] = Field(default_factory=list, description="Decisions made")
    action_items: List[ActionItem] = Field(default_factory=list, description="Action items")
    next_steps: List[str] = Field(default_factory=list, description="Next steps")


class TranscriptRequest(BaseModel):
    """Request model for transcript processing."""
    transcript: str = Field(..., description="Meeting transcript or notes")
    meeting_type: Optional[MeetingType] = Field(None, description="Type of meeting")
    participants: List[str] = Field(default_factory=list, description="Participant names")
    context: Optional[str] = Field(None, description="Additional context")


class AgendaRequest(BaseModel):
    """Request model for agenda generation."""
    topic: str = Field(..., description="Meeting topic")
    meeting_type: MeetingType = Field(MeetingType.GENERAL, description="Type of meeting")
    duration: int = Field(60, description="Planned duration in minutes")
    participants: List[str] = Field(default_factory=list, description="Expected participants")
    goals: List[str] = Field(default_factory=list, description="Meeting goals")


class ChatMessage(BaseModel):
    """Chat message model."""
    role: str = Field(..., description="Message role: user or assistant")
    content: str = Field(..., description="Message content")


class ChatRequest(BaseModel):
    """Request model for chat endpoint."""
    message: str = Field(..., description="User message")
    context: Optional[str] = Field(None, description="Meeting context or transcript")
    language: str = Field("en", description="UI language: en, ko, ja")
    history: List[ChatMessage] = Field(default_factory=list, description="Chat history")

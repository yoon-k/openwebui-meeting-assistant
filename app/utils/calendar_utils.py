"""Calendar utilities for meeting management."""
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from icalendar import Calendar, Event
import uuid


def create_ics_event(
    title: str,
    start_time: datetime,
    duration_minutes: int,
    description: str = "",
    location: str = "",
    attendees: List[str] = None
) -> str:
    """Create an ICS calendar event."""
    cal = Calendar()
    cal.add('prodid', '-//AI Meeting Assistant//EN')
    cal.add('version', '2.0')
    cal.add('calscale', 'GREGORIAN')
    cal.add('method', 'REQUEST')

    event = Event()
    event.add('summary', title)
    event.add('dtstart', start_time)
    event.add('dtend', start_time + timedelta(minutes=duration_minutes))
    event.add('dtstamp', datetime.now())
    event['uid'] = str(uuid.uuid4())

    if description:
        event.add('description', description)
    if location:
        event.add('location', location)

    if attendees:
        for attendee in attendees:
            event.add('attendee', f'mailto:{attendee}')

    cal.add_component(event)
    return cal.to_ical().decode('utf-8')


def parse_meeting_time(time_str: str) -> Optional[datetime]:
    """Parse various time string formats."""
    formats = [
        "%Y-%m-%d %H:%M",
        "%Y-%m-%dT%H:%M",
        "%Y-%m-%d %I:%M %p",
        "%m/%d/%Y %H:%M",
        "%d/%m/%Y %H:%M",
    ]

    for fmt in formats:
        try:
            return datetime.strptime(time_str, fmt)
        except ValueError:
            continue

    return None


def format_duration(minutes: int) -> str:
    """Format duration in human-readable format."""
    if minutes < 60:
        return f"{minutes} min"
    hours = minutes // 60
    mins = minutes % 60
    if mins == 0:
        return f"{hours}h"
    return f"{hours}h {mins}min"


def get_meeting_time_slots(
    start_hour: int = 9,
    end_hour: int = 18,
    duration: int = 30,
    date: datetime = None
) -> List[Dict[str, str]]:
    """Generate available time slots for a day."""
    if date is None:
        date = datetime.now()

    slots = []
    current = date.replace(hour=start_hour, minute=0, second=0, microsecond=0)
    end = date.replace(hour=end_hour, minute=0, second=0, microsecond=0)

    while current + timedelta(minutes=duration) <= end:
        slot_end = current + timedelta(minutes=duration)
        slots.append({
            "start": current.strftime("%H:%M"),
            "end": slot_end.strftime("%H:%M"),
            "label": f"{current.strftime('%I:%M %p')} - {slot_end.strftime('%I:%M %p')}"
        })
        current = slot_end

    return slots


def generate_meeting_notes_template(meeting_type: str) -> Dict[str, any]:
    """Generate meeting notes template based on meeting type."""
    templates = {
        "standup": {
            "sections": [
                {"title": "Yesterday's Progress", "items": []},
                {"title": "Today's Plan", "items": []},
                {"title": "Blockers", "items": []}
            ],
            "time_per_person": 2
        },
        "planning": {
            "sections": [
                {"title": "Sprint Goals", "items": []},
                {"title": "Backlog Items", "items": []},
                {"title": "Capacity Planning", "items": []},
                {"title": "Risks & Dependencies", "items": []}
            ],
            "time_per_person": 5
        },
        "retrospective": {
            "sections": [
                {"title": "What Went Well", "items": []},
                {"title": "What Could Be Improved", "items": []},
                {"title": "Action Items", "items": []}
            ],
            "time_per_person": 5
        },
        "brainstorm": {
            "sections": [
                {"title": "Problem Statement", "items": []},
                {"title": "Ideas Generated", "items": []},
                {"title": "Voted Ideas", "items": []},
                {"title": "Next Steps", "items": []}
            ],
            "time_per_person": 10
        },
        "one_on_one": {
            "sections": [
                {"title": "Updates", "items": []},
                {"title": "Challenges", "items": []},
                {"title": "Goals & Development", "items": []},
                {"title": "Feedback", "items": []}
            ],
            "time_per_person": 15
        },
        "general": {
            "sections": [
                {"title": "Agenda Items", "items": []},
                {"title": "Discussion Points", "items": []},
                {"title": "Decisions", "items": []},
                {"title": "Action Items", "items": []}
            ],
            "time_per_person": 5
        }
    }

    return templates.get(meeting_type, templates["general"])

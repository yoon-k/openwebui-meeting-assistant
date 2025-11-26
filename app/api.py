"""Flask API for meeting assistant."""
import os
import asyncio
from flask import Flask, request, jsonify, render_template, Response
from flask_cors import CORS
from dotenv import load_dotenv
from datetime import datetime

from app.models import TranscriptRequest, AgendaRequest, ChatRequest, MeetingType
from app.services import llm_service
from app.utils import create_ics_event, format_duration, get_meeting_time_slots, generate_meeting_notes_template

load_dotenv()

app = Flask(__name__,
            template_folder="../templates",
            static_folder="../static")
CORS(app)


def run_async(coro):
    """Run async function in sync context."""
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    try:
        return loop.run_until_complete(coro)
    finally:
        loop.close()


@app.route("/")
def index():
    """Serve the main page."""
    return render_template("index.html")


@app.route("/api/health", methods=["GET"])
def health():
    """Health check endpoint."""
    return jsonify({
        "status": "healthy",
        "provider": os.getenv("LLM_PROVIDER", "openai")
    })


@app.route("/api/summarize", methods=["POST"])
def summarize_meeting():
    """Summarize meeting transcript."""
    try:
        data = request.get_json()
        req = TranscriptRequest(**data)

        summary = run_async(
            llm_service.summarize_meeting(
                req.transcript,
                req.meeting_type.value if req.meeting_type else None,
                req.participants
            )
        )

        return jsonify(summary)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/agenda", methods=["POST"])
def generate_agenda():
    """Generate meeting agenda."""
    try:
        data = request.get_json()
        req = AgendaRequest(**data)

        agenda = run_async(
            llm_service.generate_agenda(
                req.topic,
                req.meeting_type.value,
                req.duration,
                req.participants,
                req.goals
            )
        )

        return jsonify(agenda)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/chat", methods=["POST"])
def chat():
    """Chat endpoint for meeting discussions."""
    try:
        data = request.get_json()
        req = ChatRequest(**data)

        history = [{"role": m.role, "content": m.content} for m in req.history]

        response = run_async(
            llm_service.chat(
                req.message,
                req.context,
                history,
                req.language
            )
        )

        return jsonify({
            "response": response,
            "role": "assistant"
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/export/ics", methods=["POST"])
def export_ics():
    """Export meeting to ICS calendar format."""
    try:
        data = request.get_json()
        title = data.get("title", "Meeting")
        start_time = datetime.fromisoformat(data.get("start_time"))
        duration = data.get("duration", 60)
        description = data.get("description", "")
        location = data.get("location", "")
        attendees = data.get("attendees", [])

        ics_content = create_ics_event(
            title, start_time, duration, description, location, attendees
        )

        return Response(
            ics_content,
            mimetype='text/calendar',
            headers={'Content-Disposition': f'attachment;filename={title.replace(" ", "_")}.ics'}
        )

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/meeting-types", methods=["GET"])
def get_meeting_types():
    """Get available meeting types."""
    return jsonify({
        "types": [
            {"code": t.value, "name": t.value.replace("_", " ").title()}
            for t in MeetingType
        ]
    })


@app.route("/api/time-slots", methods=["GET"])
def get_time_slots():
    """Get available time slots."""
    duration = request.args.get("duration", 30, type=int)
    slots = get_meeting_time_slots(duration=duration)
    return jsonify({"slots": slots})


@app.route("/api/template/<meeting_type>", methods=["GET"])
def get_template(meeting_type: str):
    """Get meeting notes template."""
    template = generate_meeting_notes_template(meeting_type)
    return jsonify(template)


if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    debug = os.getenv("FLASK_DEBUG", "false").lower() == "true"
    app.run(host="0.0.0.0", port=port, debug=debug)

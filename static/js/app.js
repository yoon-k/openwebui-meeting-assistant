/**
 * OpenWebUI Meeting Assistant - Frontend Application
 */

const i18n = {
    en: {
        title: "AI Meeting Assistant",
        subtitle: "Summarize meetings, extract action items, generate agendas",
        inputPanel: "MEETING INPUT",
        resultsPanel: "RESULTS",
        tabSummarize: "Summarize",
        tabAgenda: "Agenda",
        tabChat: "Chat",
        transcriptPlaceholder: "Paste your meeting transcript or notes here...\n\nExample:\nJohn: Let's discuss the Q4 roadmap.\nSarah: I think we should prioritize the mobile app.\nJohn: Good point. Let's aim for launch by end of November.\nSarah: I'll prepare the technical spec by Friday.",
        meetingType: "Meeting Type",
        participants: "Participants",
        participantsPlaceholder: "Enter names separated by commas",
        summarizeBtn: "Summarize Meeting",
        summarizing: "Analyzing...",
        topic: "Meeting Topic",
        topicPlaceholder: "Enter the main topic",
        duration: "Duration (minutes)",
        goals: "Meeting Goals",
        goalsPlaceholder: "Enter goals separated by commas",
        generateAgenda: "Generate Agenda",
        generating: "Generating...",
        chatPlaceholder: "Ask about meetings...",
        send: "Send",
        emptyTitle: "No Results Yet",
        emptyDesc: "Enter your meeting content and click the button to get started",
        summary: "Summary",
        keyPoints: "Key Points",
        decisions: "Decisions Made",
        actionItems: "Action Items",
        nextSteps: "Next Steps",
        assignee: "Assignee",
        dueDate: "Due Date",
        priority: "Priority",
        high: "High",
        medium: "Medium",
        low: "Low",
        agendaItems: "Agenda Items",
        preparation: "Preparation",
        objectives: "Objectives",
        exportIcs: "Export to Calendar",
        welcome: "Hello! I'm your meeting assistant. I can help you:\n\n• Summarize meeting transcripts\n• Extract action items\n• Generate meeting agendas\n• Answer questions about meetings\n\nHow can I help you today?",
        standup: "Daily Standup",
        planning: "Sprint Planning",
        retrospective: "Retrospective",
        brainstorm: "Brainstorm",
        one_on_one: "1-on-1",
        interview: "Interview",
        client: "Client Meeting",
        general: "General",
    },
    ko: {
        title: "AI 회의 도우미",
        subtitle: "회의 요약, 액션 아이템 추출, 안건 생성",
        inputPanel: "회의 입력",
        resultsPanel: "결과",
        tabSummarize: "요약",
        tabAgenda: "안건",
        tabChat: "채팅",
        transcriptPlaceholder: "회의 녹취록이나 메모를 여기에 붙여넣으세요...\n\n예시:\n김철수: Q4 로드맵에 대해 논의합시다.\n이영희: 모바일 앱을 우선시해야 할 것 같아요.\n김철수: 좋은 의견이네요. 11월 말까지 출시를 목표로 합시다.\n이영희: 금요일까지 기술 스펙을 준비하겠습니다.",
        meetingType: "회의 유형",
        participants: "참석자",
        participantsPlaceholder: "쉼표로 구분하여 이름 입력",
        summarizeBtn: "회의 요약",
        summarizing: "분석 중...",
        topic: "회의 주제",
        topicPlaceholder: "주요 주제 입력",
        duration: "소요 시간 (분)",
        goals: "회의 목표",
        goalsPlaceholder: "쉼표로 구분하여 목표 입력",
        generateAgenda: "안건 생성",
        generating: "생성 중...",
        chatPlaceholder: "회의에 대해 질문하세요...",
        send: "전송",
        emptyTitle: "아직 결과가 없습니다",
        emptyDesc: "회의 내용을 입력하고 버튼을 클릭하세요",
        summary: "요약",
        keyPoints: "핵심 포인트",
        decisions: "결정 사항",
        actionItems: "액션 아이템",
        nextSteps: "다음 단계",
        assignee: "담당자",
        dueDate: "마감일",
        priority: "우선순위",
        high: "높음",
        medium: "보통",
        low: "낮음",
        agendaItems: "안건 항목",
        preparation: "준비 사항",
        objectives: "목표",
        exportIcs: "캘린더로 내보내기",
        welcome: "안녕하세요! 저는 회의 도우미입니다. 다음을 도와드릴 수 있습니다:\n\n• 회의 녹취록 요약\n• 액션 아이템 추출\n• 회의 안건 생성\n• 회의에 관한 질문 답변\n\n무엇을 도와드릴까요?",
        standup: "데일리 스탠드업",
        planning: "스프린트 플래닝",
        retrospective: "회고",
        brainstorm: "브레인스토밍",
        one_on_one: "1:1 미팅",
        interview: "인터뷰",
        client: "고객 미팅",
        general: "일반",
    },
    ja: {
        title: "AIミーティングアシスタント",
        subtitle: "会議の要約、アクションアイテムの抽出、アジェンダの生成",
        inputPanel: "会議入力",
        resultsPanel: "結果",
        tabSummarize: "要約",
        tabAgenda: "アジェンダ",
        tabChat: "チャット",
        transcriptPlaceholder: "会議の議事録やメモをここに貼り付けてください...\n\n例:\n田中: Q4のロードマップについて話し合いましょう。\n鈴木: モバイルアプリを優先すべきだと思います。\n田中: いい意見ですね。11月末のローンチを目指しましょう。\n鈴木: 金曜日までに技術仕様を準備します。",
        meetingType: "会議タイプ",
        participants: "参加者",
        participantsPlaceholder: "カンマ区切りで名前を入力",
        summarizeBtn: "会議を要約",
        summarizing: "分析中...",
        topic: "会議のトピック",
        topicPlaceholder: "メイントピックを入力",
        duration: "所要時間（分）",
        goals: "会議の目標",
        goalsPlaceholder: "カンマ区切りで目標を入力",
        generateAgenda: "アジェンダ生成",
        generating: "生成中...",
        chatPlaceholder: "会議について質問...",
        send: "送信",
        emptyTitle: "まだ結果がありません",
        emptyDesc: "会議内容を入力してボタンをクリックしてください",
        summary: "要約",
        keyPoints: "キーポイント",
        decisions: "決定事項",
        actionItems: "アクションアイテム",
        nextSteps: "次のステップ",
        assignee: "担当者",
        dueDate: "期限",
        priority: "優先度",
        high: "高",
        medium: "中",
        low: "低",
        agendaItems: "アジェンダ項目",
        preparation: "準備事項",
        objectives: "目標",
        exportIcs: "カレンダーにエクスポート",
        welcome: "こんにちは！ミーティングアシスタントです。以下のお手伝いができます：\n\n• 会議議事録の要約\n• アクションアイテムの抽出\n• 会議アジェンダの生成\n• 会議に関する質問への回答\n\n何かお手伝いしましょうか？",
        standup: "デイリースタンドアップ",
        planning: "スプリントプランニング",
        retrospective: "振り返り",
        brainstorm: "ブレインストーミング",
        one_on_one: "1on1",
        interview: "インタビュー",
        client: "クライアントミーティング",
        general: "一般",
    }
};

let currentLang = 'en';
let currentTab = 'summarize';
let summaryResult = null;
let agendaResult = null;
let chatHistory = [];

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en');
    loadMeetingTypes();
    addWelcomeMessage();
});

function setLanguage(lang) {
    currentLang = lang;
    const t = i18n[lang];

    document.getElementById('title').textContent = t.title;
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('inputPanelTitle').textContent = t.inputPanel;
    document.getElementById('resultsPanelTitle').textContent = t.resultsPanel;
    document.getElementById('tabSummarize').textContent = t.tabSummarize;
    document.getElementById('tabAgenda').textContent = t.tabAgenda;
    document.getElementById('tabChat').textContent = t.tabChat;
    document.getElementById('transcriptEditor').placeholder = t.transcriptPlaceholder;
    document.getElementById('meetingTypeLabel').textContent = t.meetingType;
    document.getElementById('participantsLabel').textContent = t.participants;
    document.getElementById('participantsInput').placeholder = t.participantsPlaceholder;
    document.getElementById('summarizeBtnText').textContent = t.summarizeBtn;
    document.getElementById('topicLabel').textContent = t.topic;
    document.getElementById('topicInput').placeholder = t.topicPlaceholder;
    document.getElementById('durationLabel').textContent = t.duration;
    document.getElementById('goalsLabel').textContent = t.goals;
    document.getElementById('goalsInput').placeholder = t.goalsPlaceholder;
    document.getElementById('generateAgendaBtnText').textContent = t.generateAgenda;
    document.getElementById('chatInput').placeholder = t.chatPlaceholder;
    document.getElementById('sendBtnText').textContent = t.send;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    updateMeetingTypeOptions();
    updateResults();
}

function loadMeetingTypes() {
    updateMeetingTypeOptions();
}

function updateMeetingTypeOptions() {
    const t = i18n[currentLang];
    const types = ['standup', 'planning', 'retrospective', 'brainstorm', 'one_on_one', 'interview', 'client', 'general'];
    const selectHtml = types.map(type =>
        `<option value="${type}">${t[type]}</option>`
    ).join('');

    document.getElementById('meetingTypeSelect').innerHTML = selectHtml;
    document.getElementById('agendaMeetingType').innerHTML = selectHtml;
}

function showTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

    document.getElementById('summarizeForm').style.display = tab === 'summarize' ? 'block' : 'none';
    document.getElementById('agendaForm').style.display = tab === 'agenda' ? 'block' : 'none';

    updateResults();
}

async function summarizeMeeting() {
    const transcript = document.getElementById('transcriptEditor').value.trim();
    if (!transcript) return;

    const t = i18n[currentLang];
    const btn = document.getElementById('summarizeBtn');
    const btnText = document.getElementById('summarizeBtnText');

    btn.disabled = true;
    btnText.textContent = t.summarizing;
    showLoading();

    try {
        const response = await fetch('/api/summarize', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                transcript: transcript,
                meeting_type: document.getElementById('meetingTypeSelect').value,
                participants: document.getElementById('participantsInput').value.split(',').map(p => p.trim()).filter(p => p)
            })
        });

        if (!response.ok) throw new Error('Summarization failed');

        summaryResult = await response.json();
        updateResults();

    } catch (error) {
        console.error('Error:', error);
        showError(error.message);
    } finally {
        btn.disabled = false;
        btnText.textContent = t.summarizeBtn;
    }
}

async function generateAgenda() {
    const topic = document.getElementById('topicInput').value.trim();
    if (!topic) return;

    const t = i18n[currentLang];
    const btn = document.getElementById('generateAgendaBtn');
    const btnText = document.getElementById('generateAgendaBtnText');

    btn.disabled = true;
    btnText.textContent = t.generating;
    showLoading();

    try {
        const response = await fetch('/api/agenda', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                topic: topic,
                meeting_type: document.getElementById('agendaMeetingType').value,
                duration: parseInt(document.getElementById('durationInput').value) || 60,
                participants: document.getElementById('participantsInput').value.split(',').map(p => p.trim()).filter(p => p),
                goals: document.getElementById('goalsInput').value.split(',').map(g => g.trim()).filter(g => g)
            })
        });

        if (!response.ok) throw new Error('Agenda generation failed');

        agendaResult = await response.json();
        updateResults();

    } catch (error) {
        console.error('Error:', error);
        showError(error.message);
    } finally {
        btn.disabled = false;
        btnText.textContent = t.generateAgenda;
    }
}

function updateResults() {
    const resultsContainer = document.getElementById('resultsContainer');
    const t = i18n[currentLang];

    if (currentTab === 'summarize') {
        if (summaryResult) {
            resultsContainer.innerHTML = renderSummary(summaryResult, t);
        } else {
            resultsContainer.innerHTML = renderEmptyState(t);
        }
    } else if (currentTab === 'agenda') {
        if (agendaResult) {
            resultsContainer.innerHTML = renderAgenda(agendaResult, t);
        } else {
            resultsContainer.innerHTML = renderEmptyState(t);
        }
    } else if (currentTab === 'chat') {
        resultsContainer.innerHTML = renderChat(t);
    }
}

function renderSummary(data, t) {
    const actionItemsHtml = (data.action_items || []).map(item => `
        <div class="action-item">
            <div class="action-header">
                <span class="action-title">${item.title}</span>
                <span class="action-priority ${item.priority}">${t[item.priority] || item.priority}</span>
            </div>
            <div class="action-meta">
                ${item.assignee ? `<span>👤 ${item.assignee}</span>` : ''}
                ${item.due_date ? `<span>📅 ${item.due_date}</span>` : ''}
            </div>
        </div>
    `).join('');

    return `
        <div class="summary-section">
            <h2 class="summary-title">${data.title || 'Meeting Summary'}</h2>
            <div class="summary-meta">
                <span>📅 ${data.date || new Date().toLocaleDateString()}</span>
            </div>
            <p class="summary-text">${data.summary}</p>
        </div>

        ${data.key_points?.length ? `
            <div class="section-header"><span class="icon">💡</span> ${t.keyPoints}</div>
            ${data.key_points.map(p => `<div class="list-item">${p}</div>`).join('')}
        ` : ''}

        ${data.decisions?.length ? `
            <div class="section-header"><span class="icon">✅</span> ${t.decisions}</div>
            ${data.decisions.map(d => `<div class="list-item">${d}</div>`).join('')}
        ` : ''}

        ${data.action_items?.length ? `
            <div class="section-header"><span class="icon">📋</span> ${t.actionItems}</div>
            ${actionItemsHtml}
        ` : ''}

        ${data.next_steps?.length ? `
            <div class="section-header"><span class="icon">➡️</span> ${t.nextSteps}</div>
            ${data.next_steps.map(s => `<div class="list-item">${s}</div>`).join('')}
        ` : ''}
    `;
}

function renderAgenda(data, t) {
    const agendaItemsHtml = (data.agenda_items || []).map(item => `
        <div class="agenda-item">
            <div class="agenda-time">${item.duration} min</div>
            <div class="agenda-content">
                <h4>${item.title}</h4>
                <p>${item.description || ''}</p>
            </div>
        </div>
    `).join('');

    return `
        <div class="summary-section">
            <h2 class="summary-title">${data.title || 'Meeting Agenda'}</h2>
            <div class="summary-meta">
                <span>⏱️ ${data.duration} minutes</span>
            </div>
        </div>

        ${data.objectives?.length ? `
            <div class="section-header"><span class="icon">🎯</span> ${t.objectives}</div>
            ${data.objectives.map(o => `<div class="list-item">${o}</div>`).join('')}
        ` : ''}

        <div class="section-header"><span class="icon">📝</span> ${t.agendaItems}</div>
        ${agendaItemsHtml}

        ${data.preparation?.length ? `
            <div class="section-header"><span class="icon">📚</span> ${t.preparation}</div>
            ${data.preparation.map(p => `<div class="list-item">${p}</div>`).join('')}
        ` : ''}
    `;
}

function renderChat(t) {
    return `
        <div class="chat-container">
            <div id="chatMessages" class="chat-messages"></div>
            <div class="chat-input-container">
                <input type="text" id="chatInputField" class="chat-input" placeholder="${t.chatPlaceholder}" onkeypress="if(event.key==='Enter')sendChatMessage()">
                <button class="btn btn-primary" onclick="sendChatMessage()">
                    <span id="sendChatBtnText">${t.send}</span>
                </button>
            </div>
        </div>
    `;
}

function renderEmptyState(t) {
    return `
        <div class="empty-state">
            <div class="empty-state-icon">📝</div>
            <h3>${t.emptyTitle}</h3>
            <p>${t.emptyDesc}</p>
        </div>
    `;
}

function showLoading() {
    const t = i18n[currentLang];
    document.getElementById('resultsContainer').innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <span>${currentTab === 'summarize' ? t.summarizing : t.generating}</span>
        </div>
    `;
}

function showError(message) {
    document.getElementById('resultsContainer').innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">⚠️</div>
            <h3>Error</h3>
            <p>${message}</p>
        </div>
    `;
}

function addWelcomeMessage() {
    chatHistory = [{ role: 'assistant', content: i18n[currentLang].welcome }];
}

async function sendChatMessage() {
    const input = document.getElementById('chatInputField');
    const message = input.value.trim();
    if (!message) return;

    input.value = '';
    chatHistory.push({ role: 'user', content: message });
    renderChatMessages();

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: message,
                context: document.getElementById('transcriptEditor').value || null,
                language: currentLang,
                history: chatHistory.slice(-10)
            })
        });

        if (!response.ok) throw new Error('Chat failed');

        const data = await response.json();
        chatHistory.push({ role: 'assistant', content: data.response });
        renderChatMessages();

    } catch (error) {
        console.error('Chat error:', error);
        chatHistory.push({ role: 'assistant', content: 'Sorry, an error occurred. Please try again.' });
        renderChatMessages();
    }
}

function renderChatMessages() {
    const container = document.getElementById('chatMessages');
    if (!container) return;

    container.innerHTML = chatHistory.map(msg => `
        <div class="message ${msg.role}">
            ${msg.content.replace(/\n/g, '<br>')}
        </div>
    `).join('');

    container.scrollTop = container.scrollHeight;
}

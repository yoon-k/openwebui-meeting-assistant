/**
 * OpenWebUI Meeting Assistant - Frontend Application
 * Production-level with 7 languages, templates, history, and export features
 */

const i18n = {
    en: {
        title: "AI Meeting Assistant",
        subtitle: "Summarize meetings, extract action items, generate agendas",
        inputPanel: "MEETING INPUT",
        resultsPanel: "RESULTS",
        tabSummarize: "Summarize",
        tabAgenda: "Agenda",
        tabTemplates: "Templates",
        tabChat: "Chat",
        tabHistory: "History",
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
        exportPdf: "Export PDF",
        exportMarkdown: "Export Markdown",
        copyToClipboard: "Copy to Clipboard",
        copied: "Copied!",
        welcome: "Hello! I'm your meeting assistant. I can help you:\n\n• Summarize meeting transcripts\n• Extract action items\n• Generate meeting agendas\n• Answer questions about meetings\n\nHow can I help you today?",
        standup: "Daily Standup",
        planning: "Sprint Planning",
        retrospective: "Retrospective",
        brainstorm: "Brainstorm",
        one_on_one: "1-on-1",
        interview: "Interview",
        client: "Client Meeting",
        general: "General",
        kickoff: "Project Kickoff",
        review: "Code Review",
        templates: "Meeting Templates",
        templateDesc: "Quick start with predefined templates",
        useTemplate: "Use Template",
        history: "Meeting History",
        historyDesc: "View and manage past analyses",
        noHistory: "No history yet",
        noHistoryDesc: "Your meeting analyses will appear here",
        clearHistory: "Clear History",
        viewDetails: "View Details",
        deleteItem: "Delete",
        savedAt: "Saved",
        quickActions: "Quick Actions",
        emailSummary: "Email Summary",
        shareLink: "Share Link",
        notification: "Notification",
        meetingNotes: "Meeting Notes",
        followUp: "Follow-up Required",
        attendees: "Attendees",
        timeAllocated: "Time Allocated",
        presenter: "Presenter",
        typing: "AI is thinking...",
    },
    ko: {
        title: "AI 회의 도우미",
        subtitle: "회의 요약, 액션 아이템 추출, 안건 생성",
        inputPanel: "회의 입력",
        resultsPanel: "결과",
        tabSummarize: "요약",
        tabAgenda: "안건",
        tabTemplates: "템플릿",
        tabChat: "채팅",
        tabHistory: "히스토리",
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
        exportPdf: "PDF 내보내기",
        exportMarkdown: "마크다운 내보내기",
        copyToClipboard: "클립보드에 복사",
        copied: "복사됨!",
        welcome: "안녕하세요! 저는 회의 도우미입니다. 다음을 도와드릴 수 있습니다:\n\n• 회의 녹취록 요약\n• 액션 아이템 추출\n• 회의 안건 생성\n• 회의에 관한 질문 답변\n\n무엇을 도와드릴까요?",
        standup: "데일리 스탠드업",
        planning: "스프린트 플래닝",
        retrospective: "회고",
        brainstorm: "브레인스토밍",
        one_on_one: "1:1 미팅",
        interview: "인터뷰",
        client: "고객 미팅",
        general: "일반",
        kickoff: "프로젝트 킥오프",
        review: "코드 리뷰",
        templates: "회의 템플릿",
        templateDesc: "미리 정의된 템플릿으로 빠르게 시작",
        useTemplate: "템플릿 사용",
        history: "회의 히스토리",
        historyDesc: "과거 분석 보기 및 관리",
        noHistory: "히스토리가 없습니다",
        noHistoryDesc: "회의 분석 결과가 여기에 표시됩니다",
        clearHistory: "히스토리 삭제",
        viewDetails: "자세히 보기",
        deleteItem: "삭제",
        savedAt: "저장 시간",
        quickActions: "빠른 작업",
        emailSummary: "이메일로 요약 보내기",
        shareLink: "링크 공유",
        notification: "알림",
        meetingNotes: "회의록",
        followUp: "후속 조치 필요",
        attendees: "참석자",
        timeAllocated: "할당 시간",
        presenter: "발표자",
        typing: "AI가 생각하는 중...",
    },
    ja: {
        title: "AIミーティングアシスタント",
        subtitle: "会議の要約、アクションアイテムの抽出、アジェンダの生成",
        inputPanel: "会議入力",
        resultsPanel: "結果",
        tabSummarize: "要約",
        tabAgenda: "アジェンダ",
        tabTemplates: "テンプレート",
        tabChat: "チャット",
        tabHistory: "履歴",
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
        exportPdf: "PDFエクスポート",
        exportMarkdown: "Markdownエクスポート",
        copyToClipboard: "クリップボードにコピー",
        copied: "コピーしました！",
        welcome: "こんにちは！ミーティングアシスタントです。以下のお手伝いができます：\n\n• 会議議事録の要約\n• アクションアイテムの抽出\n• 会議アジェンダの生成\n• 会議に関する質問への回答\n\n何かお手伝いしましょうか？",
        standup: "デイリースタンドアップ",
        planning: "スプリントプランニング",
        retrospective: "振り返り",
        brainstorm: "ブレインストーミング",
        one_on_one: "1on1",
        interview: "インタビュー",
        client: "クライアントミーティング",
        general: "一般",
        kickoff: "プロジェクトキックオフ",
        review: "コードレビュー",
        templates: "会議テンプレート",
        templateDesc: "定義済みテンプレートで素早く開始",
        useTemplate: "テンプレートを使用",
        history: "会議履歴",
        historyDesc: "過去の分析を表示・管理",
        noHistory: "履歴がありません",
        noHistoryDesc: "会議分析がここに表示されます",
        clearHistory: "履歴を削除",
        viewDetails: "詳細を見る",
        deleteItem: "削除",
        savedAt: "保存日時",
        quickActions: "クイックアクション",
        emailSummary: "要約をメール送信",
        shareLink: "リンクを共有",
        notification: "通知",
        meetingNotes: "議事録",
        followUp: "フォローアップ必要",
        attendees: "出席者",
        timeAllocated: "割当時間",
        presenter: "発表者",
        typing: "AIが考え中...",
    },
    zh: {
        title: "AI会议助手",
        subtitle: "总结会议、提取行动项、生成议程",
        inputPanel: "会议输入",
        resultsPanel: "结果",
        tabSummarize: "总结",
        tabAgenda: "议程",
        tabTemplates: "模板",
        tabChat: "聊天",
        tabHistory: "历史",
        transcriptPlaceholder: "在此粘贴会议记录或笔记...\n\n示例:\n张三：我们来讨论一下Q4路线图。\n李四：我认为我们应该优先考虑移动应用。\n张三：好建议。让我们以11月底发布为目标。\n李四：我会在周五之前准备技术规格。",
        meetingType: "会议类型",
        participants: "参与者",
        participantsPlaceholder: "输入姓名，用逗号分隔",
        summarizeBtn: "总结会议",
        summarizing: "分析中...",
        topic: "会议主题",
        topicPlaceholder: "输入主要话题",
        duration: "时长（分钟）",
        goals: "会议目标",
        goalsPlaceholder: "输入目标，用逗号分隔",
        generateAgenda: "生成议程",
        generating: "生成中...",
        chatPlaceholder: "询问关于会议的问题...",
        send: "发送",
        emptyTitle: "暂无结果",
        emptyDesc: "输入会议内容并点击按钮开始",
        summary: "摘要",
        keyPoints: "要点",
        decisions: "决定事项",
        actionItems: "行动项",
        nextSteps: "下一步",
        assignee: "负责人",
        dueDate: "截止日期",
        priority: "优先级",
        high: "高",
        medium: "中",
        low: "低",
        agendaItems: "议程项目",
        preparation: "准备事项",
        objectives: "目标",
        exportIcs: "导出到日历",
        exportPdf: "导出PDF",
        exportMarkdown: "导出Markdown",
        copyToClipboard: "复制到剪贴板",
        copied: "已复制！",
        welcome: "你好！我是会议助手。我可以帮助你：\n\n• 总结会议记录\n• 提取行动项\n• 生成会议议程\n• 回答关于会议的问题\n\n我能帮你什么？",
        standup: "每日站会",
        planning: "冲刺计划",
        retrospective: "回顾会议",
        brainstorm: "头脑风暴",
        one_on_one: "一对一",
        interview: "面试",
        client: "客户会议",
        general: "常规",
        kickoff: "项目启动",
        review: "代码评审",
        templates: "会议模板",
        templateDesc: "使用预定义模板快速开始",
        useTemplate: "使用模板",
        history: "会议历史",
        historyDesc: "查看和管理过去的分析",
        noHistory: "暂无历史",
        noHistoryDesc: "会议分析将显示在这里",
        clearHistory: "清除历史",
        viewDetails: "查看详情",
        deleteItem: "删除",
        savedAt: "保存时间",
        quickActions: "快速操作",
        emailSummary: "通过邮件发送摘要",
        shareLink: "分享链接",
        notification: "通知",
        meetingNotes: "会议记录",
        followUp: "需要跟进",
        attendees: "与会者",
        timeAllocated: "分配时间",
        presenter: "演讲者",
        typing: "AI正在思考...",
    },
    es: {
        title: "Asistente de Reuniones IA",
        subtitle: "Resume reuniones, extrae acciones, genera agendas",
        inputPanel: "ENTRADA DE REUNIÓN",
        resultsPanel: "RESULTADOS",
        tabSummarize: "Resumir",
        tabAgenda: "Agenda",
        tabTemplates: "Plantillas",
        tabChat: "Chat",
        tabHistory: "Historial",
        transcriptPlaceholder: "Pega la transcripción de tu reunión aquí...\n\nEjemplo:\nJuan: Discutamos la hoja de ruta del Q4.\nMaría: Creo que deberíamos priorizar la app móvil.\nJuan: Buen punto. Apuntemos al lanzamiento a finales de noviembre.\nMaría: Prepararé las especificaciones técnicas para el viernes.",
        meetingType: "Tipo de Reunión",
        participants: "Participantes",
        participantsPlaceholder: "Ingresa nombres separados por comas",
        summarizeBtn: "Resumir Reunión",
        summarizing: "Analizando...",
        topic: "Tema de Reunión",
        topicPlaceholder: "Ingresa el tema principal",
        duration: "Duración (minutos)",
        goals: "Objetivos de la Reunión",
        goalsPlaceholder: "Ingresa objetivos separados por comas",
        generateAgenda: "Generar Agenda",
        generating: "Generando...",
        chatPlaceholder: "Pregunta sobre reuniones...",
        send: "Enviar",
        emptyTitle: "Sin Resultados Aún",
        emptyDesc: "Ingresa el contenido de tu reunión y haz clic en el botón para comenzar",
        summary: "Resumen",
        keyPoints: "Puntos Clave",
        decisions: "Decisiones Tomadas",
        actionItems: "Elementos de Acción",
        nextSteps: "Próximos Pasos",
        assignee: "Asignado a",
        dueDate: "Fecha Límite",
        priority: "Prioridad",
        high: "Alta",
        medium: "Media",
        low: "Baja",
        agendaItems: "Elementos de Agenda",
        preparation: "Preparación",
        objectives: "Objetivos",
        exportIcs: "Exportar a Calendario",
        exportPdf: "Exportar PDF",
        exportMarkdown: "Exportar Markdown",
        copyToClipboard: "Copiar al Portapapeles",
        copied: "¡Copiado!",
        welcome: "¡Hola! Soy tu asistente de reuniones. Puedo ayudarte a:\n\n• Resumir transcripciones de reuniones\n• Extraer elementos de acción\n• Generar agendas de reuniones\n• Responder preguntas sobre reuniones\n\n¿Cómo puedo ayudarte hoy?",
        standup: "Standup Diario",
        planning: "Planificación de Sprint",
        retrospective: "Retrospectiva",
        brainstorm: "Lluvia de Ideas",
        one_on_one: "Uno a Uno",
        interview: "Entrevista",
        client: "Reunión con Cliente",
        general: "General",
        kickoff: "Inicio de Proyecto",
        review: "Revisión de Código",
        templates: "Plantillas de Reunión",
        templateDesc: "Comienza rápido con plantillas predefinidas",
        useTemplate: "Usar Plantilla",
        history: "Historial de Reuniones",
        historyDesc: "Ver y gestionar análisis anteriores",
        noHistory: "Sin historial",
        noHistoryDesc: "Tus análisis de reuniones aparecerán aquí",
        clearHistory: "Limpiar Historial",
        viewDetails: "Ver Detalles",
        deleteItem: "Eliminar",
        savedAt: "Guardado",
        quickActions: "Acciones Rápidas",
        emailSummary: "Enviar Resumen por Email",
        shareLink: "Compartir Enlace",
        notification: "Notificación",
        meetingNotes: "Notas de Reunión",
        followUp: "Seguimiento Requerido",
        attendees: "Asistentes",
        timeAllocated: "Tiempo Asignado",
        presenter: "Presentador",
        typing: "IA está pensando...",
    },
    fr: {
        title: "Assistant de Réunion IA",
        subtitle: "Résumez les réunions, extrayez les actions, générez des agendas",
        inputPanel: "ENTRÉE DE RÉUNION",
        resultsPanel: "RÉSULTATS",
        tabSummarize: "Résumer",
        tabAgenda: "Agenda",
        tabTemplates: "Modèles",
        tabChat: "Chat",
        tabHistory: "Historique",
        transcriptPlaceholder: "Collez la transcription de votre réunion ici...\n\nExemple:\nJean: Discutons de la feuille de route Q4.\nMarie: Je pense qu'on devrait prioriser l'app mobile.\nJean: Bon point. Visons le lancement fin novembre.\nMarie: Je préparerai les spécifications techniques pour vendredi.",
        meetingType: "Type de Réunion",
        participants: "Participants",
        participantsPlaceholder: "Entrez les noms séparés par des virgules",
        summarizeBtn: "Résumer la Réunion",
        summarizing: "Analyse en cours...",
        topic: "Sujet de la Réunion",
        topicPlaceholder: "Entrez le sujet principal",
        duration: "Durée (minutes)",
        goals: "Objectifs de la Réunion",
        goalsPlaceholder: "Entrez les objectifs séparés par des virgules",
        generateAgenda: "Générer l'Agenda",
        generating: "Génération en cours...",
        chatPlaceholder: "Posez des questions sur les réunions...",
        send: "Envoyer",
        emptyTitle: "Pas de Résultats",
        emptyDesc: "Entrez le contenu de votre réunion et cliquez sur le bouton pour commencer",
        summary: "Résumé",
        keyPoints: "Points Clés",
        decisions: "Décisions Prises",
        actionItems: "Éléments d'Action",
        nextSteps: "Prochaines Étapes",
        assignee: "Assigné à",
        dueDate: "Date Limite",
        priority: "Priorité",
        high: "Haute",
        medium: "Moyenne",
        low: "Basse",
        agendaItems: "Éléments de l'Agenda",
        preparation: "Préparation",
        objectives: "Objectifs",
        exportIcs: "Exporter vers le Calendrier",
        exportPdf: "Exporter PDF",
        exportMarkdown: "Exporter Markdown",
        copyToClipboard: "Copier dans le Presse-papiers",
        copied: "Copié!",
        welcome: "Bonjour! Je suis votre assistant de réunion. Je peux vous aider à:\n\n• Résumer les transcriptions de réunions\n• Extraire les éléments d'action\n• Générer des agendas de réunions\n• Répondre aux questions sur les réunions\n\nComment puis-je vous aider aujourd'hui?",
        standup: "Standup Quotidien",
        planning: "Planification de Sprint",
        retrospective: "Rétrospective",
        brainstorm: "Brainstorming",
        one_on_one: "Tête-à-tête",
        interview: "Entretien",
        client: "Réunion Client",
        general: "Général",
        kickoff: "Lancement de Projet",
        review: "Revue de Code",
        templates: "Modèles de Réunion",
        templateDesc: "Démarrez rapidement avec des modèles prédéfinis",
        useTemplate: "Utiliser le Modèle",
        history: "Historique des Réunions",
        historyDesc: "Voir et gérer les analyses passées",
        noHistory: "Pas d'historique",
        noHistoryDesc: "Vos analyses de réunions apparaîtront ici",
        clearHistory: "Effacer l'Historique",
        viewDetails: "Voir les Détails",
        deleteItem: "Supprimer",
        savedAt: "Enregistré",
        quickActions: "Actions Rapides",
        emailSummary: "Envoyer le Résumé par Email",
        shareLink: "Partager le Lien",
        notification: "Notification",
        meetingNotes: "Notes de Réunion",
        followUp: "Suivi Requis",
        attendees: "Participants",
        timeAllocated: "Temps Alloué",
        presenter: "Présentateur",
        typing: "L'IA réfléchit...",
    },
    de: {
        title: "KI-Meeting-Assistent",
        subtitle: "Meetings zusammenfassen, Aktionen extrahieren, Agenden generieren",
        inputPanel: "MEETING-EINGABE",
        resultsPanel: "ERGEBNISSE",
        tabSummarize: "Zusammenfassen",
        tabAgenda: "Agenda",
        tabTemplates: "Vorlagen",
        tabChat: "Chat",
        tabHistory: "Verlauf",
        transcriptPlaceholder: "Fügen Sie Ihr Meeting-Transkript hier ein...\n\nBeispiel:\nHans: Lass uns die Q4-Roadmap besprechen.\nAnna: Ich denke, wir sollten die Mobile-App priorisieren.\nHans: Guter Punkt. Lass uns den Launch Ende November anpeilen.\nAnna: Ich bereite die technischen Spezifikationen bis Freitag vor.",
        meetingType: "Meeting-Typ",
        participants: "Teilnehmer",
        participantsPlaceholder: "Namen durch Kommas getrennt eingeben",
        summarizeBtn: "Meeting zusammenfassen",
        summarizing: "Analysiere...",
        topic: "Meeting-Thema",
        topicPlaceholder: "Hauptthema eingeben",
        duration: "Dauer (Minuten)",
        goals: "Meeting-Ziele",
        goalsPlaceholder: "Ziele durch Kommas getrennt eingeben",
        generateAgenda: "Agenda generieren",
        generating: "Generiere...",
        chatPlaceholder: "Fragen Sie zu Meetings...",
        send: "Senden",
        emptyTitle: "Noch keine Ergebnisse",
        emptyDesc: "Geben Sie Meeting-Inhalte ein und klicken Sie auf den Button, um zu starten",
        summary: "Zusammenfassung",
        keyPoints: "Kernpunkte",
        decisions: "Getroffene Entscheidungen",
        actionItems: "Aktionspunkte",
        nextSteps: "Nächste Schritte",
        assignee: "Zugewiesen an",
        dueDate: "Fälligkeitsdatum",
        priority: "Priorität",
        high: "Hoch",
        medium: "Mittel",
        low: "Niedrig",
        agendaItems: "Agenda-Punkte",
        preparation: "Vorbereitung",
        objectives: "Ziele",
        exportIcs: "In Kalender exportieren",
        exportPdf: "PDF exportieren",
        exportMarkdown: "Markdown exportieren",
        copyToClipboard: "In Zwischenablage kopieren",
        copied: "Kopiert!",
        welcome: "Hallo! Ich bin Ihr Meeting-Assistent. Ich kann Ihnen helfen:\n\n• Meeting-Transkripte zusammenfassen\n• Aktionspunkte extrahieren\n• Meeting-Agenden generieren\n• Fragen zu Meetings beantworten\n\nWie kann ich Ihnen heute helfen?",
        standup: "Tägliches Standup",
        planning: "Sprint-Planung",
        retrospective: "Retrospektive",
        brainstorm: "Brainstorming",
        one_on_one: "Einzelgespräch",
        interview: "Interview",
        client: "Kundenmeeting",
        general: "Allgemein",
        kickoff: "Projekt-Kickoff",
        review: "Code-Review",
        templates: "Meeting-Vorlagen",
        templateDesc: "Schnellstart mit vordefinierten Vorlagen",
        useTemplate: "Vorlage verwenden",
        history: "Meeting-Verlauf",
        historyDesc: "Vergangene Analysen anzeigen und verwalten",
        noHistory: "Kein Verlauf",
        noHistoryDesc: "Ihre Meeting-Analysen erscheinen hier",
        clearHistory: "Verlauf löschen",
        viewDetails: "Details anzeigen",
        deleteItem: "Löschen",
        savedAt: "Gespeichert",
        quickActions: "Schnellaktionen",
        emailSummary: "Zusammenfassung per E-Mail senden",
        shareLink: "Link teilen",
        notification: "Benachrichtigung",
        meetingNotes: "Meeting-Notizen",
        followUp: "Nachverfolgung erforderlich",
        attendees: "Teilnehmer",
        timeAllocated: "Zugewiesene Zeit",
        presenter: "Präsentator",
        typing: "KI denkt nach...",
    }
};

// Meeting templates
const meetingTemplates = {
    standup: {
        icon: '🌅',
        duration: 15,
        structure: ['yesterday', 'today', 'blockers'],
        goals: ['sync', 'identify_blockers', 'align_priorities']
    },
    planning: {
        icon: '📋',
        duration: 60,
        structure: ['backlog_review', 'sprint_goal', 'task_estimation', 'commitment'],
        goals: ['define_scope', 'estimate_effort', 'team_commitment']
    },
    retrospective: {
        icon: '🔄',
        duration: 60,
        structure: ['went_well', 'improve', 'action_items'],
        goals: ['continuous_improvement', 'team_learning', 'process_optimization']
    },
    brainstorm: {
        icon: '💡',
        duration: 45,
        structure: ['problem_statement', 'idea_generation', 'grouping', 'voting'],
        goals: ['generate_ideas', 'creative_solutions', 'consensus']
    },
    one_on_one: {
        icon: '👥',
        duration: 30,
        structure: ['check_in', 'progress', 'challenges', 'growth', 'action_items'],
        goals: ['feedback', 'support', 'development']
    },
    kickoff: {
        icon: '🚀',
        duration: 90,
        structure: ['vision', 'scope', 'roles', 'timeline', 'risks', 'next_steps'],
        goals: ['alignment', 'clarity', 'commitment']
    },
    client: {
        icon: '🤝',
        duration: 60,
        structure: ['introductions', 'agenda', 'discussion', 'decisions', 'next_steps'],
        goals: ['relationship', 'requirements', 'agreement']
    },
    review: {
        icon: '👀',
        duration: 45,
        structure: ['context', 'walkthrough', 'feedback', 'decisions'],
        goals: ['quality', 'knowledge_sharing', 'improvement']
    }
};

let currentLang = 'en';
let currentTab = 'summarize';
let summaryResult = null;
let agendaResult = null;
let chatHistory = [];
let meetingHistory = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    setLanguage('en');
    loadMeetingTypes();
    addWelcomeMessage();
});

function loadFromLocalStorage() {
    try {
        const saved = localStorage.getItem('meetingHistory');
        if (saved) meetingHistory = JSON.parse(saved);

        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && i18n[savedLang]) currentLang = savedLang;
    } catch (e) {
        console.error('Failed to load from localStorage:', e);
    }
}

function saveToLocalStorage() {
    try {
        localStorage.setItem('meetingHistory', JSON.stringify(meetingHistory.slice(-50)));
        localStorage.setItem('preferredLanguage', currentLang);
    } catch (e) {
        console.error('Failed to save to localStorage:', e);
    }
}

function setLanguage(lang) {
    currentLang = lang;
    const t = i18n[lang];

    // Update all text elements
    const elements = {
        'title': t.title,
        'subtitle': t.subtitle,
        'inputPanelTitle': t.inputPanel,
        'resultsPanelTitle': t.resultsPanel,
        'tabSummarize': t.tabSummarize,
        'tabAgenda': t.tabAgenda,
        'tabTemplates': t.tabTemplates,
        'tabChat': t.tabChat,
        'tabHistory': t.tabHistory,
        'meetingTypeLabel': t.meetingType,
        'participantsLabel': t.participants,
        'summarizeBtnText': t.summarizeBtn,
        'topicLabel': t.topic,
        'durationLabel': t.duration,
        'goalsLabel': t.goals,
        'generateAgendaBtnText': t.generateAgenda,
    };

    Object.entries(elements).forEach(([id, text]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    });

    // Update placeholders
    const placeholders = {
        'transcriptEditor': t.transcriptPlaceholder,
        'participantsInput': t.participantsPlaceholder,
        'topicInput': t.topicPlaceholder,
        'goalsInput': t.goalsPlaceholder,
        'chatInput': t.chatPlaceholder,
    };

    Object.entries(placeholders).forEach(([id, placeholder]) => {
        const el = document.getElementById(id);
        if (el) el.placeholder = placeholder;
    });

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    updateMeetingTypeOptions();
    updateResults();
    saveToLocalStorage();
}

function loadMeetingTypes() {
    updateMeetingTypeOptions();
}

function updateMeetingTypeOptions() {
    const t = i18n[currentLang];
    const types = ['standup', 'planning', 'retrospective', 'brainstorm', 'one_on_one', 'interview', 'client', 'general', 'kickoff', 'review'];
    const selectHtml = types.map(type =>
        `<option value="${type}">${t[type] || type}</option>`
    ).join('');

    const meetingTypeSelect = document.getElementById('meetingTypeSelect');
    const agendaMeetingType = document.getElementById('agendaMeetingType');
    if (meetingTypeSelect) meetingTypeSelect.innerHTML = selectHtml;
    if (agendaMeetingType) agendaMeetingType.innerHTML = selectHtml;
}

function showTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`[data-tab="${tab}"]`)?.classList.add('active');

    const forms = ['summarizeForm', 'agendaForm', 'templatesForm', 'chatForm'];
    forms.forEach(form => {
        const el = document.getElementById(form);
        if (el) el.style.display = 'none';
    });

    if (tab === 'summarize') {
        const el = document.getElementById('summarizeForm');
        if (el) el.style.display = 'block';
    } else if (tab === 'agenda') {
        const el = document.getElementById('agendaForm');
        if (el) el.style.display = 'block';
    } else if (tab === 'templates') {
        const el = document.getElementById('templatesForm');
        if (el) el.style.display = 'block';
    }

    updateResults();
}

async function summarizeMeeting() {
    const transcript = document.getElementById('transcriptEditor').value.trim();
    if (!transcript) {
        showNotification('Please enter a meeting transcript', 'warning');
        return;
    }

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
                participants: document.getElementById('participantsInput').value.split(',').map(p => p.trim()).filter(p => p),
                language: currentLang
            })
        });

        if (!response.ok) throw new Error('Summarization failed');

        summaryResult = await response.json();

        // Save to history
        saveToHistory('summary', summaryResult);

        updateResults();
        showNotification('Meeting summarized successfully!', 'success');

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
    if (!topic) {
        showNotification('Please enter a meeting topic', 'warning');
        return;
    }

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
                goals: document.getElementById('goalsInput').value.split(',').map(g => g.trim()).filter(g => g),
                language: currentLang
            })
        });

        if (!response.ok) throw new Error('Agenda generation failed');

        agendaResult = await response.json();

        // Save to history
        saveToHistory('agenda', agendaResult);

        updateResults();
        showNotification('Agenda generated successfully!', 'success');

    } catch (error) {
        console.error('Error:', error);
        showError(error.message);
    } finally {
        btn.disabled = false;
        btnText.textContent = t.generateAgenda;
    }
}

function saveToHistory(type, data) {
    const historyItem = {
        id: Date.now(),
        type: type,
        data: data,
        timestamp: new Date().toISOString(),
        language: currentLang
    };

    meetingHistory.unshift(historyItem);
    if (meetingHistory.length > 50) meetingHistory.pop();
    saveToLocalStorage();
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
    } else if (currentTab === 'templates') {
        resultsContainer.innerHTML = renderTemplates(t);
    } else if (currentTab === 'chat') {
        resultsContainer.innerHTML = renderChat(t);
        renderChatMessages();
    } else if (currentTab === 'history') {
        resultsContainer.innerHTML = renderHistory(t);
    }
}

function renderSummary(data, t) {
    const actionItemsHtml = (data.action_items || []).map(item => `
        <div class="action-item">
            <div class="action-header">
                <span class="action-title">${item.title || item.task || item}</span>
                ${item.priority ? `<span class="action-priority ${item.priority}">${t[item.priority] || item.priority}</span>` : ''}
            </div>
            <div class="action-meta">
                ${item.assignee ? `<span>👤 ${item.assignee}</span>` : ''}
                ${item.due_date ? `<span>📅 ${item.due_date}</span>` : ''}
            </div>
        </div>
    `).join('');

    return `
        <div class="result-content">
            <div class="result-header">
                <h2 class="result-title">${data.title || 'Meeting Summary'}</h2>
                <div class="result-actions">
                    <button class="action-btn" onclick="copyToClipboard('summary')" title="${t.copyToClipboard}">
                        <span>📋</span>
                    </button>
                    <button class="action-btn" onclick="exportMarkdown('summary')" title="${t.exportMarkdown}">
                        <span>📝</span>
                    </button>
                </div>
            </div>

            <div class="summary-meta">
                <span>📅 ${data.date || new Date().toLocaleDateString()}</span>
                ${data.meeting_type ? `<span>📌 ${t[data.meeting_type] || data.meeting_type}</span>` : ''}
            </div>

            <div class="summary-section">
                <h3><span class="icon">📝</span> ${t.summary}</h3>
                <p class="summary-text">${data.summary}</p>
            </div>

            ${data.key_points?.length ? `
                <div class="summary-section">
                    <h3><span class="icon">💡</span> ${t.keyPoints}</h3>
                    <ul class="styled-list">
                        ${data.key_points.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            ${data.decisions?.length ? `
                <div class="summary-section">
                    <h3><span class="icon">✅</span> ${t.decisions}</h3>
                    <ul class="styled-list decisions">
                        ${data.decisions.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            ${data.action_items?.length ? `
                <div class="summary-section">
                    <h3><span class="icon">📋</span> ${t.actionItems}</h3>
                    <div class="action-items-list">
                        ${actionItemsHtml}
                    </div>
                </div>
            ` : ''}

            ${data.next_steps?.length ? `
                <div class="summary-section">
                    <h3><span class="icon">➡️</span> ${t.nextSteps}</h3>
                    <ul class="styled-list next-steps">
                        ${data.next_steps.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    `;
}

function renderAgenda(data, t) {
    const agendaItemsHtml = (data.agenda_items || []).map((item, index) => `
        <div class="agenda-item">
            <div class="agenda-number">${index + 1}</div>
            <div class="agenda-time">${item.duration || item.time || '10'} min</div>
            <div class="agenda-content">
                <h4>${item.title || item.topic}</h4>
                <p>${item.description || ''}</p>
                ${item.presenter ? `<span class="presenter">👤 ${item.presenter}</span>` : ''}
            </div>
        </div>
    `).join('');

    return `
        <div class="result-content">
            <div class="result-header">
                <h2 class="result-title">${data.title || 'Meeting Agenda'}</h2>
                <div class="result-actions">
                    <button class="action-btn" onclick="copyToClipboard('agenda')" title="${t.copyToClipboard}">
                        <span>📋</span>
                    </button>
                    <button class="action-btn" onclick="exportMarkdown('agenda')" title="${t.exportMarkdown}">
                        <span>📝</span>
                    </button>
                    <button class="action-btn" onclick="exportIcs()" title="${t.exportIcs}">
                        <span>📅</span>
                    </button>
                </div>
            </div>

            <div class="summary-meta">
                <span>⏱️ ${data.duration || 60} ${t.duration?.replace(' (minutes)', '') || 'minutes'}</span>
                ${data.meeting_type ? `<span>📌 ${t[data.meeting_type] || data.meeting_type}</span>` : ''}
            </div>

            ${data.objectives?.length ? `
                <div class="summary-section">
                    <h3><span class="icon">🎯</span> ${t.objectives}</h3>
                    <ul class="styled-list objectives">
                        ${data.objectives.map(o => `<li>${o}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            <div class="summary-section">
                <h3><span class="icon">📝</span> ${t.agendaItems}</h3>
                <div class="agenda-list">
                    ${agendaItemsHtml}
                </div>
            </div>

            ${data.preparation?.length ? `
                <div class="summary-section">
                    <h3><span class="icon">📚</span> ${t.preparation}</h3>
                    <ul class="styled-list preparation">
                        ${data.preparation.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    `;
}

function renderTemplates(t) {
    const templatesHtml = Object.entries(meetingTemplates).map(([key, template]) => `
        <div class="template-card" onclick="useTemplate('${key}')">
            <div class="template-icon">${template.icon}</div>
            <div class="template-info">
                <h4>${t[key] || key}</h4>
                <p>${template.duration} min</p>
            </div>
            <button class="template-use-btn">${t.useTemplate}</button>
        </div>
    `).join('');

    return `
        <div class="templates-container">
            <div class="templates-header">
                <h3><span class="icon">📋</span> ${t.templates}</h3>
                <p>${t.templateDesc}</p>
            </div>
            <div class="templates-grid">
                ${templatesHtml}
            </div>
        </div>
    `;
}

function renderChat(t) {
    return `
        <div class="chat-container">
            <div id="chatMessages" class="chat-messages"></div>
            <div class="chat-input-container">
                <input type="text" id="chatInputField" class="chat-input" placeholder="${t.chatPlaceholder}" onkeypress="if(event.key==='Enter')sendChatMessage()">
                <button class="btn btn-primary" onclick="sendChatMessage()">
                    <span>${t.send}</span>
                </button>
            </div>
        </div>
    `;
}

function renderHistory(t) {
    if (!meetingHistory.length) {
        return `
            <div class="empty-state">
                <div class="empty-state-icon">📜</div>
                <h3>${t.noHistory}</h3>
                <p>${t.noHistoryDesc}</p>
            </div>
        `;
    }

    const historyHtml = meetingHistory.map(item => {
        const date = new Date(item.timestamp).toLocaleString();
        const icon = item.type === 'summary' ? '📝' : '📋';
        const title = item.data.title || (item.type === 'summary' ? 'Meeting Summary' : 'Meeting Agenda');

        return `
            <div class="history-item" data-id="${item.id}">
                <div class="history-icon">${icon}</div>
                <div class="history-info">
                    <h4>${title}</h4>
                    <p>${t.savedAt}: ${date}</p>
                </div>
                <div class="history-actions">
                    <button class="action-btn small" onclick="viewHistoryItem(${item.id})" title="${t.viewDetails}">
                        <span>👁️</span>
                    </button>
                    <button class="action-btn small danger" onclick="deleteHistoryItem(${item.id})" title="${t.deleteItem}">
                        <span>🗑️</span>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="history-container">
            <div class="history-header">
                <h3><span class="icon">📜</span> ${t.history}</h3>
                <button class="btn btn-secondary small" onclick="clearHistory()">
                    <span>🗑️</span> ${t.clearHistory}
                </button>
            </div>
            <div class="history-list">
                ${historyHtml}
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
        <div class="empty-state error">
            <div class="empty-state-icon">⚠️</div>
            <h3>Error</h3>
            <p>${message}</p>
        </div>
    `;
}

function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span class="notification-icon">${type === 'success' ? '✅' : type === 'warning' ? '⚠️' : type === 'error' ? '❌' : 'ℹ️'}</span>
        <span class="notification-message">${message}</span>
    `;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Template functions
function useTemplate(templateKey) {
    const template = meetingTemplates[templateKey];
    if (!template) return;

    // Switch to agenda tab
    showTab('agenda');

    // Fill in template data
    const topicInput = document.getElementById('topicInput');
    const durationInput = document.getElementById('durationInput');
    const agendaMeetingType = document.getElementById('agendaMeetingType');

    if (topicInput) topicInput.value = i18n[currentLang][templateKey] || templateKey;
    if (durationInput) durationInput.value = template.duration;
    if (agendaMeetingType) agendaMeetingType.value = templateKey;

    showNotification(`Template "${i18n[currentLang][templateKey]}" applied!`, 'success');
}

// History functions
function viewHistoryItem(id) {
    const item = meetingHistory.find(h => h.id === id);
    if (!item) return;

    if (item.type === 'summary') {
        summaryResult = item.data;
        showTab('summarize');
    } else {
        agendaResult = item.data;
        showTab('agenda');
    }
}

function deleteHistoryItem(id) {
    meetingHistory = meetingHistory.filter(h => h.id !== id);
    saveToLocalStorage();
    updateResults();
    showNotification('Item deleted', 'success');
}

function clearHistory() {
    if (confirm('Are you sure you want to clear all history?')) {
        meetingHistory = [];
        saveToLocalStorage();
        updateResults();
        showNotification('History cleared', 'success');
    }
}

// Export functions
function copyToClipboard(type) {
    const data = type === 'summary' ? summaryResult : agendaResult;
    if (!data) return;

    const text = generateMarkdown(type, data);
    navigator.clipboard.writeText(text).then(() => {
        showNotification(i18n[currentLang].copied, 'success');
    });
}

function exportMarkdown(type) {
    const data = type === 'summary' ? summaryResult : agendaResult;
    if (!data) return;

    const markdown = generateMarkdown(type, data);
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${type}-${new Date().toISOString().split('T')[0]}.md`;
    a.click();
    URL.revokeObjectURL(url);
}

function generateMarkdown(type, data) {
    const t = i18n[currentLang];
    let md = '';

    if (type === 'summary') {
        md = `# ${data.title || 'Meeting Summary'}\n\n`;
        md += `**Date:** ${data.date || new Date().toLocaleDateString()}\n\n`;
        md += `## ${t.summary}\n${data.summary}\n\n`;

        if (data.key_points?.length) {
            md += `## ${t.keyPoints}\n`;
            data.key_points.forEach(p => md += `- ${p}\n`);
            md += '\n';
        }

        if (data.decisions?.length) {
            md += `## ${t.decisions}\n`;
            data.decisions.forEach(d => md += `- ${d}\n`);
            md += '\n';
        }

        if (data.action_items?.length) {
            md += `## ${t.actionItems}\n`;
            data.action_items.forEach(item => {
                const title = item.title || item.task || item;
                md += `- [ ] ${title}`;
                if (item.assignee) md += ` (@${item.assignee})`;
                if (item.due_date) md += ` - Due: ${item.due_date}`;
                md += '\n';
            });
            md += '\n';
        }

        if (data.next_steps?.length) {
            md += `## ${t.nextSteps}\n`;
            data.next_steps.forEach(s => md += `- ${s}\n`);
        }
    } else {
        md = `# ${data.title || 'Meeting Agenda'}\n\n`;
        md += `**Duration:** ${data.duration || 60} minutes\n\n`;

        if (data.objectives?.length) {
            md += `## ${t.objectives}\n`;
            data.objectives.forEach(o => md += `- ${o}\n`);
            md += '\n';
        }

        md += `## ${t.agendaItems}\n`;
        (data.agenda_items || []).forEach((item, i) => {
            md += `### ${i + 1}. ${item.title || item.topic} (${item.duration || 10} min)\n`;
            if (item.description) md += `${item.description}\n`;
            if (item.presenter) md += `**Presenter:** ${item.presenter}\n`;
            md += '\n';
        });

        if (data.preparation?.length) {
            md += `## ${t.preparation}\n`;
            data.preparation.forEach(p => md += `- ${p}\n`);
        }
    }

    return md;
}

function exportIcs() {
    if (!agendaResult) return;

    const now = new Date();
    const start = now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const end = new Date(now.getTime() + (agendaResult.duration || 60) * 60000)
        .toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    const description = (agendaResult.agenda_items || [])
        .map((item, i) => `${i + 1}. ${item.title || item.topic}`)
        .join('\\n');

    const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//AI Meeting Assistant//EN
BEGIN:VEVENT
UID:${Date.now()}@meeting-assistant
DTSTAMP:${start}
DTSTART:${start}
DTEND:${end}
SUMMARY:${agendaResult.title || 'Meeting'}
DESCRIPTION:${description}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([ics], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'meeting.ics';
    a.click();
    URL.revokeObjectURL(url);
}

// Chat functions
function addWelcomeMessage() {
    chatHistory = [{ role: 'assistant', content: i18n[currentLang].welcome }];
}

async function sendChatMessage() {
    const input = document.getElementById('chatInputField');
    if (!input) return;

    const message = input.value.trim();
    if (!message) return;

    input.value = '';
    chatHistory.push({ role: 'user', content: message });
    renderChatMessages();

    // Show typing indicator
    showTypingIndicator();

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: message,
                context: document.getElementById('transcriptEditor')?.value || null,
                language: currentLang,
                history: chatHistory.slice(-10)
            })
        });

        hideTypingIndicator();

        if (!response.ok) throw new Error('Chat failed');

        const data = await response.json();
        chatHistory.push({ role: 'assistant', content: data.response });
        renderChatMessages();

    } catch (error) {
        hideTypingIndicator();
        console.error('Chat error:', error);
        chatHistory.push({ role: 'assistant', content: 'Sorry, an error occurred. Please try again.' });
        renderChatMessages();
    }
}

function showTypingIndicator() {
    const container = document.getElementById('chatMessages');
    if (!container) return;

    const typing = document.createElement('div');
    typing.className = 'message assistant typing-indicator';
    typing.id = 'typingIndicator';
    typing.innerHTML = `
        <div class="typing-dots">
            <span></span><span></span><span></span>
        </div>
        <span class="typing-text">${i18n[currentLang].typing}</span>
    `;
    container.appendChild(typing);
    container.scrollTop = container.scrollHeight;
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
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

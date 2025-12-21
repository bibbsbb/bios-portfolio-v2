module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
// Resume data
const resumeData = {
    name: 'Brandon Bibbins',
    title: 'IT Director',
    email: 'brandonbibbins@gmail.com',
    phone: '(310) 749-0728',
    linkedin: 'linkedin.com/in/brandonbibbins',
    location: 'Los Angeles, CA',
    summary: 'IT Support & Operations leader with 12+ years transforming employee technology experiences at high-growth SaaS and technology companies. Proven track record building and scaling IT teams through hypergrowth, shifting operations from reactive support to proactive, AI-powered service delivery. Expert in designing frictionless systems where security enables productivity. Deep expertise in Jamf Pro, Okta, Google Workspace, and Jira Service Management. Currently pioneering AI agent workflows using Claude, GPT, and Gemini to automate provisioning, triage, and employee support.',
    experience: [
        {
            company: 'Liquid I.V. (Unilever)',
            role: 'IT Director',
            years: '2022-Present'
        },
        {
            company: 'Princess Polly',
            role: 'IT Manager',
            years: '2020-2022'
        },
        {
            company: 'Drinks.com',
            role: 'IT Manager',
            years: '2017-2020'
        },
        {
            company: 'Playtika',
            role: 'IT Administrator',
            years: '2016-2017'
        },
        {
            company: 'David & Goliath',
            role: 'IT Administrator',
            years: '2014-2016'
        }
    ],
    achievements: [
        {
            label: 'Phishing Reduction',
            value: '73%'
        },
        {
            label: 'Zero-Touch Resolution',
            value: '40-60%'
        },
        {
            label: 'Efficiency Improvement',
            value: '30%'
        },
        {
            label: 'Devices Managed',
            value: '500+'
        },
        {
            label: 'Locations Supported',
            value: '14+'
        },
        {
            label: 'SOC 2 Compliance',
            value: 'Achieved'
        }
    ],
    skills: {
        'Endpoint Mgmt': 'Jamf Pro, Intune, Hexnode, Kandji, JumpCloud, Apple Business Manager',
        'Identity/Access': 'Okta, OneLogin, Azure AD/Entra ID, 1Password, SSO/SAML, SCIM, MFA',
        'Productivity': 'Google Workspace, Microsoft 365, Slack, Notion, Confluence, Zoom',
        'Security': 'CrowdStrike, Mimecast, Proofpoint, KnowBe4, SOC 2, NIST, ISO 27001',
        'ITSM': 'Jira Service Management, ServiceNow, Zendesk, Freshservice, ITIL',
        'AI/Automation': 'Claude Code, OpenAI GPT-4, Codex, Gemini, Workflow Automation',
        'Project Mgmt': 'Wrike, Asana, Monday.com, Trello, Linear',
        'Infrastructure': 'AWS, Azure, Windows Server, Active Directory, Cisco Meraki, Palo Alto, Fortinet, Ubiquiti'
    },
    competencies: [
        'IT Strategy & Leadership',
        'Team Building & Management',
        'Vendor Management',
        'Budget Planning',
        'Security Awareness',
        'SOC 2 / GDPR Compliance',
        'AI Governance',
        'Cross-functional Leadership'
    ],
    education: [
        {
            degree: 'B.S. Information Technology',
            school: 'Colorado State University',
            years: '2012-2014'
        },
        {
            degree: 'B.S. Computer Science',
            school: 'The Masters College',
            years: '2010-2012'
        }
    ],
    certs: [
        'CISSP (In Progress)',
        'Jamf Certified',
        'Okta Administrator',
        'Google Workspace Administrator'
    ]
};
// Boot sequence messages (~4 seconds)
const bootMessages = [
    {
        text: 'BibbinsTech BIOS v2.0',
        delay: 0
    },
    {
        text: 'Copyright (C) 2014-2025, Brandon Bibbins Inc.',
        delay: 250
    },
    {
        text: '',
        delay: 500
    },
    {
        text: 'CPU: Brandon Core i7-12700K @ 3.6GHz... OK',
        delay: 700
    },
    {
        text: 'Memory Test: ',
        delay: 900,
        counter: true
    },
    {
        text: '',
        delay: 1500
    },
    {
        text: 'Detecting Primary IDE Master... Career Drive [500GB]',
        delay: 1700
    },
    {
        text: 'Detecting Secondary IDE... Skills Module [256GB]',
        delay: 1950
    },
    {
        text: 'Initializing Network... LinkedIn Connected',
        delay: 2200
    },
    {
        text: 'CMOS Checksum... OK',
        delay: 2450
    },
    {
        text: '',
        delay: 2700
    },
    {
        text: 'Loading Experience Data... OK',
        delay: 2900
    },
    {
        text: '',
        delay: 3100
    },
    {
        text: 'All systems operational.',
        delay: 3300
    },
    {
        text: '',
        delay: 3500
    },
    {
        text: 'Press any key to continue or wait...',
        delay: 3700,
        blink: true
    }
];
// Sound utility using Web Audio API
const createBeep = (type, enabled)=>{
    if (!enabled) return;
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        switch(type){
            case 'boot':
                osc.frequency.value = 800;
                gain.gain.value = 0.1;
                osc.start();
                setTimeout(()=>osc.stop(), 150);
                break;
            case 'click':
                osc.frequency.value = 1200;
                gain.gain.value = 0.05;
                osc.start();
                setTimeout(()=>osc.stop(), 30);
                break;
            case 'enter':
                osc.frequency.value = 1000;
                gain.gain.value = 0.08;
                osc.start();
                setTimeout(()=>osc.stop(), 80);
                break;
            case 'error':
                osc.frequency.value = 200;
                gain.gain.value = 0.1;
                osc.start();
                setTimeout(()=>osc.stop(), 200);
                break;
        }
    } catch  {
    // Audio not supported or blocked
    }
};
function Home() {
    const [selectedMenu, setSelectedMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('main');
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [focusArea, setFocusArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('menu');
    const [contentIndex, setContentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('blue');
    const [bootPhase, setBootPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('booting');
    const [bootText, setBootText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [memoryCount, setMemoryCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showCursor, setShowCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [terminalOpen, setTerminalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [terminalHistory, setTerminalHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [terminalInput, setTerminalInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [commandHistory, setCommandHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [historyIndex, setHistoryIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [soundEnabled, setSoundEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [pongActive, setPongActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pongStarted, setPongStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pongWinner, setPongWinner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pongScore, setPongScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        player: 0,
        cpu: 0
    });
    const [playerY, setPlayerY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(50);
    const [cpuY, setCpuY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(50);
    const [ballPos, setBallPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 50
    });
    const [ballVel, setBallVel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const terminalInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pongRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Wrapper for sound that checks enabled state
    const playBeep = (type)=>createBeep(type, soundEnabled);
    // Load sound preference from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedSound = localStorage.getItem('bios-sound');
        if (savedSound !== null) {
            setSoundEnabled(savedSound === 'true');
        }
    }, []);
    const toggleSound = ()=>{
        const newValue = !soundEnabled;
        setSoundEnabled(newValue);
        localStorage.setItem('bios-sound', String(newValue));
        if (newValue) createBeep('click', true); // Play click when enabling
    };
    // Load theme from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedTheme = localStorage.getItem('bios-theme');
        if (savedTheme && [
            'blue',
            'amber',
            'green',
            'white'
        ].includes(savedTheme)) {
            setTheme(savedTheme);
        }
    }, []);
    // Save theme to localStorage when it changes
    const handleThemeChange = (newTheme)=>{
        setTheme(newTheme);
        localStorage.setItem('bios-theme', newTheme);
        playBeep('click');
    };
    const menuItems = [
        {
            id: 'main',
            label: 'Profile Overview'
        },
        {
            id: 'experience',
            label: 'Professional History'
        },
        {
            id: 'skills',
            label: 'Technical Expertise'
        },
        {
            id: 'achievements',
            label: 'Performance Metrics'
        },
        {
            id: 'contact',
            label: 'Connect'
        }
    ];
    // Boot sequence effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (bootPhase !== 'booting') return;
        let currentText = '';
        let messageIndex = 0;
        const processNextMessage = ()=>{
            if (messageIndex >= bootMessages.length) return;
            const msg = bootMessages[messageIndex];
            setTimeout(()=>{
                if (msg.counter) {
                    // Memory counter animation
                    let count = 0;
                    playBeep('click');
                    const counterInterval = setInterval(()=>{
                        count += 8192;
                        setMemoryCount(count);
                        if (count >= 65536) {
                            clearInterval(counterInterval);
                            currentText += msg.text + '65536 KB OK\n';
                            setBootText(currentText);
                            playBeep('enter');
                            messageIndex++;
                            processNextMessage();
                        }
                    }, 50);
                } else if (msg.text.includes('OK') || msg.text.includes('Connected')) {
                    // Play beep for status messages
                    currentText += msg.text + '\n';
                    setBootText(currentText);
                    playBeep('click');
                    messageIndex++;
                    processNextMessage();
                } else if (msg.text.includes('operational')) {
                    // Success beep for final message
                    currentText += msg.text + '\n';
                    setBootText(currentText);
                    playBeep('enter');
                    messageIndex++;
                    processNextMessage();
                } else {
                    currentText += msg.text + '\n';
                    setBootText(currentText);
                    messageIndex++;
                    processNextMessage();
                }
            }, msg.delay);
        };
        processNextMessage();
        // Skip boot on any key press
        const handleSkip = ()=>{
            setBootPhase('ready');
            playBeep('boot');
        };
        window.addEventListener('keydown', handleSkip);
        window.addEventListener('click', handleSkip);
        // Auto-advance after boot completes
        const autoAdvance = setTimeout(()=>{
            setBootPhase('ready');
            playBeep('boot');
        }, 4500);
        return ()=>{
            window.removeEventListener('keydown', handleSkip);
            window.removeEventListener('click', handleSkip);
            clearTimeout(autoAdvance);
        };
    }, [
        bootPhase
    ]);
    // Clock update
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateTime = ()=>{
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', {
                hour12: false
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return ()=>clearInterval(interval);
    }, []);
    // Cursor blink
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>setShowCursor((prev)=>!prev), 500);
        return ()=>clearInterval(interval);
    }, []);
    // Pong game loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!pongActive || !pongStarted || pongWinner) return;
        const gameLoop = setInterval(()=>{
            setBallPos((prev)=>{
                // Don't move if velocity is 0
                if (ballVel.x === 0 && ballVel.y === 0) return prev;
                let newX = prev.x + ballVel.x;
                let newY = prev.y + ballVel.y;
                let newVelX = ballVel.x;
                let newVelY = ballVel.y;
                // Top/bottom wall bounce
                if (newY <= 5 || newY >= 95) {
                    newVelY = -ballVel.y;
                    newY = newY <= 5 ? 5 : 95;
                    playBeep('click');
                }
                // Player paddle (left side)
                if (newX <= 8 && newX > 5 && prev.x > 8) {
                    if (newY >= playerY - 12 && newY <= playerY + 12) {
                        newVelX = Math.abs(ballVel.x) * 1.05;
                        newX = 8;
                        playBeep('enter');
                    }
                }
                // CPU paddle (right side)
                if (newX >= 92 && newX < 95 && prev.x < 92) {
                    if (newY >= cpuY - 12 && newY <= cpuY + 12) {
                        newVelX = -Math.abs(ballVel.x) * 1.05;
                        newX = 92;
                        playBeep('enter');
                    }
                }
                // Score - ball goes past paddles
                if (newX <= 0) {
                    // CPU scores
                    const newCpuScore = pongScore.cpu + 1;
                    setPongScore((s)=>({
                            ...s,
                            cpu: newCpuScore
                        }));
                    playBeep('error');
                    if (newCpuScore >= 5) {
                        setPongWinner('CPU');
                        setBallVel({
                            x: 0,
                            y: 0
                        });
                        return {
                            x: 50,
                            y: 50
                        };
                    }
                    setBallVel({
                        x: 2,
                        y: (Math.random() - 0.5) * 2
                    });
                    return {
                        x: 50,
                        y: 50
                    };
                }
                if (newX >= 100) {
                    // Player scores
                    const newPlayerScore = pongScore.player + 1;
                    setPongScore((s)=>({
                            ...s,
                            player: newPlayerScore
                        }));
                    playBeep('boot');
                    if (newPlayerScore >= 5) {
                        setPongWinner('You');
                        setBallVel({
                            x: 0,
                            y: 0
                        });
                        return {
                            x: 50,
                            y: 50
                        };
                    }
                    setBallVel({
                        x: -2,
                        y: (Math.random() - 0.5) * 2
                    });
                    return {
                        x: 50,
                        y: 50
                    };
                }
                setBallVel({
                    x: newVelX,
                    y: newVelY
                });
                return {
                    x: newX,
                    y: newY
                };
            });
            // Simple CPU AI - follow the ball with some lag
            setCpuY((prev)=>{
                const diff = ballPos.y - prev;
                return prev + diff * 0.08;
            });
        }, 30);
        return ()=>clearInterval(gameLoop);
    }, [
        pongActive,
        pongStarted,
        pongWinner,
        ballVel,
        playerY,
        cpuY,
        ballPos.y,
        pongScore,
        playBeep
    ]);
    // Pong keyboard controls
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!pongActive) return;
        const handlePongKeys = (e)=>{
            // Start game on Space
            if ((e.key === ' ' || e.key === 'Enter') && !pongStarted && !pongWinner) {
                e.preventDefault();
                setPongStarted(true);
                setBallVel({
                    x: 2,
                    y: (Math.random() - 0.5) * 2
                });
                return;
            }
            // Restart after win
            if ((e.key === ' ' || e.key === 'Enter') && pongWinner) {
                e.preventDefault();
                setPongWinner(null);
                setPongStarted(false);
                setPongScore({
                    player: 0,
                    cpu: 0
                });
                setPlayerY(50);
                setCpuY(50);
                setBallPos({
                    x: 50,
                    y: 50
                });
                setBallVel({
                    x: 0,
                    y: 0
                });
                return;
            }
            if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp') {
                e.preventDefault();
                setPlayerY((prev)=>Math.max(12, prev - 5));
            } else if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') {
                e.preventDefault();
                setPlayerY((prev)=>Math.min(88, prev + 5));
            } else if (e.key === 'q' || e.key === 'Q' || e.key === 'Escape') {
                e.preventDefault();
                setPongActive(false);
                setPongStarted(false);
                setPongWinner(null);
                setPongScore({
                    player: 0,
                    cpu: 0
                });
                setPlayerY(50);
                setCpuY(50);
                setBallPos({
                    x: 50,
                    y: 50
                });
                setBallVel({
                    x: 0,
                    y: 0
                });
            }
        };
        window.addEventListener('keydown', handlePongKeys);
        return ()=>window.removeEventListener('keydown', handlePongKeys);
    }, [
        pongActive,
        pongStarted,
        pongWinner
    ]);
    // Unified keyboard navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (bootPhase === 'booting') return;
        const handleKeyDown = (e)=>{
            // Don't handle any navigation when pong is active (pong has its own handler)
            if (pongActive) return;
            // Terminal toggle with ~ or `
            if ((e.key === '`' || e.key === '~') && !terminalOpen) {
                e.preventDefault();
                setTerminalOpen(true);
                playBeep('enter');
                setTimeout(()=>terminalInputRef.current?.focus(), 50);
                return;
            }
            // Close terminal with Escape
            if (e.key === 'Escape' && terminalOpen) {
                e.preventDefault();
                setTerminalOpen(false);
                playBeep('click');
                return;
            }
            // Don't handle navigation when terminal is open
            if (terminalOpen) return;
            if (focusArea === 'menu') {
                if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const newIndex = selectedIndex > 0 ? selectedIndex - 1 : menuItems.length - 1;
                    setSelectedIndex(newIndex);
                    setSelectedMenu(menuItems[newIndex].id);
                    playBeep('click');
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const newIndex = selectedIndex < menuItems.length - 1 ? selectedIndex + 1 : 0;
                    setSelectedIndex(newIndex);
                    setSelectedMenu(menuItems[newIndex].id);
                    playBeep('click');
                } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
                    if (selectedMenu === 'experience') {
                        e.preventDefault();
                        setFocusArea('content');
                        setContentIndex(0);
                        playBeep('enter');
                    }
                }
            } else if (focusArea === 'content') {
                if (e.key === 'ArrowLeft' || e.key === 'Escape') {
                    e.preventDefault();
                    setFocusArea('menu');
                    playBeep('click');
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        selectedIndex,
        selectedMenu,
        focusArea,
        menuItems,
        bootPhase,
        terminalOpen,
        pongActive
    ]);
    // Fortune messages
    const fortunes = [
        '"Have you tried turning it off and on again?" - IT Proverb',
        '"It works on my machine." - Every Developer Ever',
        '"The cloud is just someone else\'s computer." - Ancient Wisdom',
        '"sudo make me a sandwich" - XKCD',
        '"There are only 10 types of people: those who understand binary and those who don\'t."',
        '"To err is human, to really mess up requires root access."',
        '"A user interface is like a joke. If you have to explain it, it\'s not that good."',
        '"Software is like entropy: difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics."'
    ];
    // Terminal command processor
    const processCommand = (cmd)=>{
        const trimmed = cmd.trim().toLowerCase();
        const parts = cmd.trim().split(' ');
        const command = parts[0].toLowerCase();
        const args = parts.slice(1).join(' ');
        let output = '';
        // Handle echo command
        if (command === 'echo') {
            output = args || '';
            setTerminalHistory((prev)=>[
                    ...prev,
                    {
                        cmd,
                        output
                    }
                ]);
            setCommandHistory((prev)=>[
                    cmd,
                    ...prev
                ]);
            setTerminalInput('');
            setHistoryIndex(-1);
            return;
        }
        // Handle cat with different files
        if (command === 'cat') {
            const file = args.toLowerCase();
            switch(file){
                case 'resume.txt':
                    output = `┌─────────────────────────────────────┐
│         BRANDON BIBBINS             │
│      IT Director | 12+ Years        │
├─────────────────────────────────────┤
│ ✓ AI-Powered IT Operations          │
│ ✓ Team Building & Leadership        │
│ ✓ Jamf Pro, Okta, CrowdStrike       │
│ ✓ SOC 2 Compliance                  │
│ ✓ 73% Phishing Reduction            │
├─────────────────────────────────────┤
│ Email: brandonbibbins@gmail.com     │
│ Phone: (310) 749-0728               │
└─────────────────────────────────────┘`;
                    break;
                case 'skills.dat':
                    output = `# skills.dat - Technical Proficiencies
ENDPOINT_MGMT=["Jamf Pro", "Intune", "Hexnode", "Kandji", "JumpCloud", "Apple Business Manager"]
IDENTITY=["Okta", "OneLogin", "Azure AD/Entra ID", "1Password", "SSO/SAML", "SCIM", "MFA"]
PRODUCTIVITY=["Google Workspace", "Microsoft 365", "Slack", "Notion", "Confluence", "Zoom"]
SECURITY=["CrowdStrike", "Mimecast", "Proofpoint", "KnowBe4", "SOC 2", "NIST"]
ITSM=["Jira Service Management", "ServiceNow", "Zendesk", "Freshservice", "ITIL"]
AI_TOOLS=["Claude Code", "OpenAI GPT-4", "Codex", "Gemini", "Workflow Automation"]
INFRASTRUCTURE=["AWS", "Azure", "Windows Server", "Cisco Meraki", "Palo Alto", "Fortinet", "Ubiquiti"]
# EOF`;
                    break;
                case 'experience.log':
                    output = `[2022-present] IT Director @ Liquid I.V. (Unilever)
  → Built team delivering 30% efficiency gains
  → 73% phishing reduction via 1Password rollout
  → AI Governance Board member

[2020-2022] IT Director @ Princess Polly
  → Scaled IT from 1 to multi-person team
  → 14+ global retail locations supported
  → 45% resolution time improvement

[2017-2020] IT Manager @ Drinks.com
  → 50% faster new hire onboarding
  → 20+ SaaS apps with Okta SSO

[2016-2017] Senior IT Tech @ Playtika
[2014-2016] IT Support @ David & Goliath`;
                    break;
                case 'contact.cfg':
                    output = `[contact]
name = Brandon Bibbins
email = brandonbibbins@gmail.com
phone = (310) 749-0728
linkedin = linkedin.com/in/brandonbibbins
location = Los Angeles, CA
status = Open to opportunities
relocate = Yes`;
                    break;
                case 'certs.bin':
                    output = `CERT_DATA [DECODED]:
├── CISSP.............. [IN PROGRESS]
├── Jamf Certified..... [ACTIVE]
├── Okta Administrator. [ACTIVE]
└── Google Workspace... [ACTIVE]

EDUCATION:
├── B.S. Information Technology
│   └── Colorado State University (2012-2014)
└── B.S. Computer Science
    └── The Masters College (2010-2012)`;
                    break;
                default:
                    output = `cat: ${args}: No such file or directory`;
                    playBeep('error');
            }
            setTerminalHistory((prev)=>[
                    ...prev,
                    {
                        cmd,
                        output
                    }
                ]);
            setCommandHistory((prev)=>[
                    cmd,
                    ...prev
                ]);
            setTerminalInput('');
            setHistoryIndex(-1);
            return;
        }
        switch(trimmed){
            case 'help':
                output = `Available commands:
  help        - Show this help message
  whoami      - Display user info
  skills      - List technical skills
  contact     - Show contact info
  experience  - List work experience
  neofetch    - Display system info
  ls          - List files
  cat <file>  - View file contents
  pwd         - Print working directory
  date        - Show current date/time
  uptime      - Show system uptime
  echo <text> - Print text
  history     - Show command history
  fortune     - IT wisdom
  pong        - Play Pong! 🏓
  clear       - Clear terminal
  exit        - Close terminal
  reboot      - Restart system
  sudo hire brandon - ???`;
                break;
            case 'whoami':
                output = 'Brandon Bibbins - IT Director @ Liquid I.V. (Unilever)\n12+ years of IT leadership experience';
                break;
            case 'skills':
                output = `Technical Skills:
  Endpoint Mgmt: Jamf Pro, Intune, Hexnode, Kandji, JumpCloud
  Identity/Access: Okta, OneLogin, Azure AD/Entra ID, 1Password
  Productivity: Google Workspace, Microsoft 365, Slack, Notion
  Security: CrowdStrike, Mimecast, Proofpoint, KnowBe4
  ITSM: Jira Service Management, ServiceNow, Zendesk
  AI/Automation: Claude Code, OpenAI GPT-4, Codex, Gemini
  Infrastructure: AWS, Azure, Cisco Meraki, Palo Alto, Fortinet`;
                break;
            case 'contact':
                output = `Contact Information:
  Email: brandonbibbins@gmail.com
  Phone: (310) 749-0728
  LinkedIn: linkedin.com/in/brandonbibbins
  Location: Los Angeles, CA`;
                break;
            case 'experience':
                output = `Work Experience:
  2022-Present: IT Director @ Liquid I.V. (Unilever)
  2020-2022: IT Director @ Princess Polly
  2017-2020: IT Manager @ Drinks.com
  2016-2017: Senior IT Tech @ Playtika
  2014-2016: IT Support @ David & Goliath`;
                break;
            case 'neofetch':
                output = `
       ____  ____
      / __ )/ __ )    guest@bibbins
     / __  / __  |    --------------
    / /_/ / /_/ /     OS: BibbinsTech BIOS v2.0
   /_____/_____/      Host: Portfolio System
                      Kernel: React 19.0
   ┌──────────────┐   Uptime: 12+ years
   │  IT DIRECTOR │   Shell: Terminal v1.0
   │   ┌──────┐   │   Theme: ${theme}
   │   │ ▓▓▓▓ │   │   CPU: Brandon Core i7
   │   │ ▓▓▓▓ │   │   Memory: 65536 KB
   │   └──────┘   │
   └──────────────┘   Contact: brandonbibbins@gmail.com`;
                break;
            case 'ls':
                output = `resume.txt    skills.dat    experience.log
contact.cfg   certs.bin     games/`;
                break;
            case 'ls games':
            case 'ls games/':
                output = `pong.exe`;
                break;
            case 'pwd':
                output = '/home/brandon';
                break;
            case 'date':
                output = new Date().toString();
                break;
            case 'uptime':
                output = `System uptime: 12+ years
  Started: 2014 @ David & Goliath
  Current: IT Director @ Liquid I.V.
  Status: Actively seeking new opportunities`;
                break;
            case 'history':
                output = commandHistory.length > 0 ? commandHistory.slice(0, 10).map((c, i)=>`  ${commandHistory.length - i}  ${c}`).reverse().join('\n') : 'No commands in history';
                break;
            case 'fortune':
                output = fortunes[Math.floor(Math.random() * fortunes.length)];
                break;
            case 'pong':
            case './games/pong.exe':
            case 'games/pong.exe':
                // Reset all game state
                setPongScore({
                    player: 0,
                    cpu: 0
                });
                setPlayerY(50);
                setCpuY(50);
                setBallPos({
                    x: 50,
                    y: 50
                });
                setBallVel({
                    x: 0,
                    y: 0
                }); // Ball doesn't move until space is pressed
                setPongStarted(false);
                setPongWinner(null);
                setPongActive(true);
                setTerminalHistory((prev)=>[
                        ...prev,
                        {
                            cmd,
                            output: 'Starting Pong... Press SPACE to begin!'
                        }
                    ]);
                setCommandHistory((prev)=>[
                        cmd,
                        ...prev
                    ]);
                setTerminalInput('');
                return;
            case 'clear':
                setTerminalHistory([]);
                setTerminalInput('');
                return;
            case 'exit':
                setTerminalOpen(false);
                setTerminalInput('');
                playBeep('click');
                return;
            case 'reboot':
                setTerminalOpen(false);
                setTerminalInput('');
                setTerminalHistory([]);
                setBootPhase('booting');
                setBootText('');
                setMemoryCount(0);
                return;
            case 'sudo hire brandon':
                output = `
  ╔════════════════════════════════════════╗
  ║  ACCESS GRANTED                        ║
  ║                                        ║
  ║  Excellent choice! Brandon would be    ║
  ║  a great addition to your team.        ║
  ║                                        ║
  ║  Initiating hiring sequence...         ║
  ║  Contact: brandonbibbins@gmail.com     ║
  ╚════════════════════════════════════════╝`;
                playBeep('boot');
                break;
            default:
                if (trimmed) {
                    output = `Command not found: ${cmd}\nType 'help' for available commands.`;
                    playBeep('error');
                }
        }
        if (trimmed && trimmed !== 'clear') {
            setTerminalHistory((prev)=>[
                    ...prev,
                    {
                        cmd,
                        output
                    }
                ]);
            setCommandHistory((prev)=>[
                    cmd,
                    ...prev
                ]);
        }
        setTerminalInput('');
        setHistoryIndex(-1);
    };
    // Terminal input handler
    const handleTerminalKeyDown = (e)=>{
        if (e.key === 'Enter') {
            processCommand(terminalInput);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setTerminalInput(commandHistory[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setTerminalInput(commandHistory[newIndex]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setTerminalInput('');
            }
        }
    };
    // Theme colors mapping
    const themeColors = {
        blue: {
            bg: '#0000aa',
            text: '#aaaaaa',
            highlight: '#ffff55',
            accent: '#55ffff'
        },
        amber: {
            bg: '#1a1000',
            text: '#ffaa00',
            highlight: '#ffff00',
            accent: '#ffcc00'
        },
        green: {
            bg: '#001a00',
            text: '#33ff33',
            highlight: '#00ff00',
            accent: '#55ff55'
        },
        white: {
            bg: '#0a0a0a',
            text: '#ffffff',
            highlight: '#00ffff',
            accent: '#ffff00'
        }
    };
    const colors = themeColors[theme];
    // Boot screen
    if (bootPhase === 'booting') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen font-mono text-sm p-4 crt-screen crt-flicker",
            style: {
                background: colors.bg,
                color: colors.text
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    className: "boot-text",
                    children: bootText
                }, void 0, false, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                    lineNumber: 791,
                    columnNumber: 9
                }, this),
                memoryCount > 0 && memoryCount < 65536 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        memoryCount,
                        " KB"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                    lineNumber: 793,
                    columnNumber: 11
                }, this),
                showCursor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "typing-cursor",
                    style: {
                        background: colors.text
                    }
                }, void 0, false, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                    lineNumber: 795,
                    columnNumber: 24
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
            lineNumber: 787,
            columnNumber: 7
        }, this);
    }
    // Main BIOS interface
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen font-mono text-sm p-2 select-none crt-screen crt-flicker",
        style: {
            background: colors.bg,
            color: colors.text
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-1 font-bold",
                style: {
                    background: colors.text,
                    color: colors.bg
                },
                children: "CMOS Setup Utility - Copyright (C) 2014-2025, Brandon Bibbins Inc."
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 807,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex mt-2 gap-2",
                style: {
                    height: 'calc(100vh - 120px)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-64 border-2 flex flex-col",
                        style: {
                            borderColor: colors.text
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 py-1 font-bold text-center",
                                style: {
                                    background: colors.text,
                                    color: colors.bg
                                },
                                children: "▼ Main Menu ▼"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 817,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 p-1",
                                children: menuItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>{
                                            setFocusArea('menu');
                                            setSelectedIndex(index);
                                            setSelectedMenu(item.id);
                                        },
                                        onMouseEnter: ()=>{
                                            setFocusArea('menu');
                                            setSelectedIndex(index);
                                            setSelectedMenu(item.id);
                                        },
                                        className: "px-2 py-1 cursor-pointer",
                                        style: selectedIndex === index && focusArea === 'menu' ? {
                                            background: colors.text,
                                            color: colors.bg
                                        } : selectedIndex === index ? {
                                            background: colors.bg,
                                            filter: 'brightness(1.5)'
                                        } : {},
                                        children: item.label
                                    }, item.id, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 825,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 823,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 816,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 border-2 flex flex-col",
                        style: {
                            borderColor: colors.text
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 py-1 font-bold",
                                style: {
                                    background: colors.text,
                                    color: colors.bg
                                },
                                children: menuItems.find((m)=>m.id === selectedMenu)?.label
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 854,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 p-3 overflow-auto",
                                children: [
                                    selectedMenu === 'main' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MainPanel, {
                                        data: resumeData
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 861,
                                        columnNumber: 41
                                    }, this),
                                    selectedMenu === 'experience' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExperiencePanel, {
                                        data: resumeData,
                                        focusArea: focusArea,
                                        setFocusArea: setFocusArea,
                                        contentIndex: contentIndex,
                                        setContentIndex: setContentIndex
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 863,
                                        columnNumber: 15
                                    }, this),
                                    selectedMenu === 'skills' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillsPanel, {
                                        data: resumeData
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 871,
                                        columnNumber: 43
                                    }, this),
                                    selectedMenu === 'achievements' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AchievementsPanel, {
                                        data: resumeData
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 872,
                                        columnNumber: 49
                                    }, this),
                                    selectedMenu === 'contact' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactPanel, {
                                        data: resumeData
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 873,
                                        columnNumber: 44
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 860,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 853,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-48 border-2 flex flex-col",
                        style: {
                            borderColor: colors.text
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 py-1 font-bold text-center",
                                style: {
                                    background: colors.text,
                                    color: colors.bg
                                },
                                children: "Item Help"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 879,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 p-2 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: colors.highlight
                                        },
                                        children: "Navigation:"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 886,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1",
                                        children: "↑↓ Select Item"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 887,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Enter: Select"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 888,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Esc: Back"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 889,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3",
                                        style: {
                                            color: colors.highlight
                                        },
                                        children: "Quick Info:"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 890,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1",
                                        children: "Experience: 12+ yrs"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 891,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Current: IT Director"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 892,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Location: Los Angeles"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 893,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3",
                                        style: {
                                            color: colors.accent
                                        },
                                        children: "Currently @ Liquid I.V."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 894,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 border-t pt-2 group cursor-pointer",
                                        style: {
                                            borderColor: colors.text
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: colors.highlight
                                                },
                                                className: "flex items-center gap-1",
                                                children: [
                                                    "▸ Shortcuts ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] opacity-60",
                                                        children: "(hover)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 902,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 901,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden group-hover:block mt-2 space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "~"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 905,
                                                                columnNumber: 20
                                                            }, this),
                                                            " Open Terminal"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 905,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "↑↓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 906,
                                                                columnNumber: 20
                                                            }, this),
                                                            " Navigate Menu"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 906,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 907,
                                                                columnNumber: 20
                                                            }, this),
                                                            " Enter Section"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 907,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "←"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 908,
                                                                columnNumber: 20
                                                            }, this),
                                                            " Go Back"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 908,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "Esc"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 909,
                                                                columnNumber: 20
                                                            }, this),
                                                            " Close/Back"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 909,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 opacity-70",
                                                        children: "Terminal Commands:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 910,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "help"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 911,
                                                                columnNumber: 20
                                                            }, this),
                                                            " List commands"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 911,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "ls"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 912,
                                                                columnNumber: 20
                                                            }, this),
                                                            " List files"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 912,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "neofetch"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 913,
                                                                columnNumber: 20
                                                            }, this),
                                                            " System info"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 913,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "pong"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 914,
                                                                columnNumber: 20
                                                            }, this),
                                                            " Play game!"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 914,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "reboot"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 915,
                                                                columnNumber: 20
                                                            }, this),
                                                            " Restart"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 915,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 904,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 897,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setTerminalOpen(true);
                                            playBeep('enter');
                                            setTimeout(()=>terminalInputRef.current?.focus(), 50);
                                        },
                                        className: "mt-3 w-full py-1 text-center cursor-pointer hover:opacity-80",
                                        style: {
                                            background: colors.accent,
                                            color: colors.bg
                                        },
                                        children: "[ TERMINAL ]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 920,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 885,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 878,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 814,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 border-2",
                style: {
                    borderColor: colors.text
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center px-2 py-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: colors.highlight
                                                },
                                                children: "↑↓"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 939,
                                                columnNumber: 19
                                            }, this),
                                            ":Select"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 939,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: colors.highlight
                                                },
                                                children: "Enter"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 940,
                                                columnNumber: 19
                                            }, this),
                                            ":Select"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 940,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: colors.highlight
                                                },
                                                children: "Esc"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 941,
                                                columnNumber: 19
                                            }, this),
                                            ":Menu"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 941,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: colors.accent
                                                },
                                                children: "~"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 942,
                                                columnNumber: 19
                                            }, this),
                                            ":Terminal"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 942,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 938,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleSound,
                                        className: "cursor-pointer hover:opacity-80",
                                        title: soundEnabled ? 'Mute sounds' : 'Enable sounds',
                                        style: {
                                            color: colors.text
                                        },
                                        children: soundEnabled ? '🔊' : '🔇'
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 946,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "theme-selector",
                                        children: [
                                            'blue',
                                            'amber',
                                            'green',
                                            'white'
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleThemeChange(t),
                                                className: `theme-btn theme-btn-${t} ${theme === t ? 'active' : ''}`,
                                                title: `${t.charAt(0).toUpperCase() + t.slice(1)} theme`
                                            }, t, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 957,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 955,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: colors.highlight
                                        },
                                        children: "Time:"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 965,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    time
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 944,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 937,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 py-1 text-center",
                        style: {
                            background: colors.text,
                            color: colors.bg
                        },
                        children: "▲▼ Select Menu Item │ Email: brandonbibbins@gmail.com │ Phone: (310) 749-0728"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 968,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 936,
                columnNumber: 7
            }, this),
            terminalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center",
                style: {
                    background: 'rgba(0, 0, 0, 0.9)'
                },
                onClick: (e)=>{
                    if (e.target === e.currentTarget) {
                        setTerminalOpen(false);
                        playBeep('click');
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-2xl h-96 mx-4 p-4 font-mono text-sm overflow-hidden flex flex-col terminal-window",
                    style: {
                        background: '#0a0a0a',
                        border: '2px solid #33ff33',
                        boxShadow: '0 0 20px rgba(51, 255, 51, 0.3)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-2 pb-2 border-b border-[#33ff33]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#33ff33]",
                                    children: "BibbinsTech Terminal v1.0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                    lineNumber: 997,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setTerminalOpen(false);
                                        playBeep('click');
                                    },
                                    className: "text-[#ff5555] hover:text-[#ff8888] cursor-pointer",
                                    children: "[X] Close"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                    lineNumber: 998,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 996,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto text-[#33ff33]",
                            children: pongActive ? /* Pong Game */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: pongRef,
                                className: "h-full flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#ffff55]",
                                                children: "PONG"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1013,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mx-4",
                                                children: [
                                                    "You: ",
                                                    pongScore.player
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1014,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "CPU: ",
                                                    pongScore.cpu
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1015,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-4 text-[#888888] text-xs",
                                                children: "(W/S or ↑/↓ to move, Q to quit)"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1016,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1012,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 relative border border-[#33ff33]",
                                        style: {
                                            minHeight: '200px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 bottom-0 left-1/2 w-px",
                                                style: {
                                                    background: '#333333',
                                                    borderStyle: 'dashed'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1023,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute w-2 bg-[#33ff33]",
                                                style: {
                                                    left: '3%',
                                                    top: `${playerY - 12}%`,
                                                    height: '24%'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1028,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute w-2 bg-[#ff5555]",
                                                style: {
                                                    right: '3%',
                                                    top: `${cpuY - 12}%`,
                                                    height: '24%'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1037,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute w-3 h-3 bg-[#ffff55] rounded-full",
                                                style: {
                                                    left: `${ballPos.x}%`,
                                                    top: `${ballPos.y}%`,
                                                    transform: 'translate(-50%, -50%)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1046,
                                                columnNumber: 21
                                            }, this),
                                            !pongStarted && !pongWinner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex items-center justify-center bg-black/50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[#ffff55] text-xl mb-2",
                                                            children: "PONG"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 1058,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[#33ff33]",
                                                            children: "Press SPACE to Start"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 1059,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                    lineNumber: 1057,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1056,
                                                columnNumber: 23
                                            }, this),
                                            pongWinner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex items-center justify-center bg-black/50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-xl mb-2 ${pongWinner === 'You' ? 'text-[#33ff33]' : 'text-[#ff5555]'}`,
                                                            children: pongWinner === 'You' ? '🎉 YOU WIN! 🎉' : 'CPU WINS!'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 1067,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[#888888]",
                                                            children: "Press SPACE to Play Again"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 1070,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[#888888] text-xs mt-1",
                                                            children: "or Q to quit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 1071,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                    lineNumber: 1066,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1065,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1018,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mt-2 text-[#888888] text-xs",
                                        children: "First to 5 wins! Press Q or Esc to quit."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1076,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 1011,
                                columnNumber: 17
                            }, this) : /* Normal Terminal */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 text-[#888888]",
                                        children: "Type 'help' for available commands. Press Esc to close."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1083,
                                        columnNumber: 19
                                    }, this),
                                    terminalHistory.map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#55ff55]",
                                                            children: "guest@bibbins"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 1087,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#ffffff]",
                                                            children: ":"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 1088,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#5555ff]",
                                                            children: "~"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 1089,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#ffffff]",
                                                            children: "$ "
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 1090,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: entry.cmd
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 1091,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                    lineNumber: 1086,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                    className: "whitespace-pre-wrap text-[#aaaaaa] ml-0",
                                                    children: entry.output
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                    lineNumber: 1093,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                            lineNumber: 1085,
                                            columnNumber: 21
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#55ff55]",
                                                children: "guest@bibbins"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1097,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#ffffff]",
                                                children: ":"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1098,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#5555ff]",
                                                children: "~"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1099,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#ffffff]",
                                                children: "$ "
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1100,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: terminalInputRef,
                                                type: "text",
                                                value: terminalInput,
                                                onChange: (e)=>setTerminalInput(e.target.value),
                                                onKeyDown: handleTerminalKeyDown,
                                                className: "flex-1 bg-transparent border-none outline-none text-[#33ff33] font-mono",
                                                autoFocus: true,
                                                spellCheck: false,
                                                autoComplete: "off"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1101,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "terminal-cursor",
                                                children: "▌"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1112,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1096,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1008,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                    lineNumber: 988,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 978,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
        lineNumber: 802,
        columnNumber: 5
    }, this);
}
function MainPanel({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                            label: "Candidate Name",
                            value: data.name,
                            highlight: true
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                            label: "Current Position",
                            value: data.title
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                            label: "Years Experience",
                            value: "12+ Years",
                            highlight: true
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1132,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                            label: "Current Employer",
                            value: "Liquid I.V. (Unilever)"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                            label: "Location",
                            value: data.location
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                            label: "Education",
                            value: `${data.education[0].degree} - ${data.education[0].school}`
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                    lineNumber: 1129,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#aaaaaa] pt-3 mt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#ffff55] mb-2",
                        children: "▸ Professional Summary"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 1140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#aaaaaa] leading-relaxed text-sm",
                        children: data.summary
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 1141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#aaaaaa] pt-3 mt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#ffff55] mb-2",
                        children: "▸ Core Competencies"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 1147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-1",
                        children: data.competencies.map((comp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[#55ffff]",
                                children: [
                                    "• ",
                                    comp
                                ]
                            }, i, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 1150,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 1148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#aaaaaa] pt-3 mt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#ffff55] mb-2",
                        children: "▸ Certifications"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 1156,
                        columnNumber: 9
                    }, this),
                    data.certs.map((cert, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#55ffff]",
                            children: [
                                "  [",
                                i + 1,
                                "] ",
                                cert
                            ]
                        }, i, true, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1158,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
        lineNumber: 1126,
        columnNumber: 5
    }, this);
}
function ExperiencePanel({ data, focusArea, setFocusArea, contentIndex, setContentIndex }) {
    const [selectedExp, setSelectedExp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const detailRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const details = [
        {
            company: 'Liquid I.V. (Unilever)',
            role: 'IT Director, Employee Technology & Experience',
            years: '2022-Present',
            description: 'Lead IT Support & Operations across helpdesk, systems operations, and asset management for health & wellness brand.',
            bullets: [
                'Built high-performing team delivering 30% operational efficiency gains',
                'Transformed IT from reactive to proactive, data-driven experience management',
                'Built self-service IT Hub achieving 40-60% zero-touch resolutions',
                'Design AI-first workflows with Claude, GPT for provisioning & triage',
                'Serve on AI Governance Board, guiding responsible AI adoption',
                'Spearheaded 1Password rollout, reducing phishing susceptibility by 73%',
                'Authored 350+ pages of policies and playbooks',
                'Built employee experience metrics tracking reliability & performance'
            ],
            tools: [
                'Jamf Pro',
                'Okta',
                '1Password',
                'CrowdStrike',
                'Claude Code',
                'Jira Service Management'
            ]
        },
        {
            company: 'Princess Polly (International E-Commerce)',
            role: 'IT Director, Employee Experience Lead',
            years: '2020-2022',
            description: 'Built and scaled IT organization from one-person to multi-person team during hypergrowth.',
            bullets: [
                'Led global IT transformation across 14+ retail locations',
                'Improved resolution times by 45% with scalable hybrid support',
                'Implemented Okta identity management with role-based provisioning',
                'Delivered day-one access through automated onboarding workflows',
                'Created standardized global helpdesk framework with self-service',
                'Collaborated with C-suite contributing to 50%+ e-commerce expansion'
            ],
            tools: [
                'Jamf Pro',
                'Okta',
                'Google Workspace',
                'Zendesk',
                'Hexnode'
            ]
        },
        {
            company: 'Drinks.com (E-Commerce Startup)',
            role: 'IT Manager',
            years: '2017-2020',
            description: 'Established IT infrastructure foundation for rapidly scaling e-commerce startup.',
            bullets: [
                'Reduced new hire time-to-productivity by 50%',
                'Deployed Okta with SSO across 20+ SaaS applications',
                'Built asset management and ticketing systems from scratch',
                'Developed self-service knowledge base deflecting 30% of tickets'
            ],
            tools: [
                'Okta',
                'Google Workspace',
                'Slack',
                'Jamf',
                'AWS',
                'Wrike'
            ]
        },
        {
            company: 'Playtika (Mobile Gaming)',
            role: 'Senior IT Technician',
            years: '2016-2017',
            description: 'Managed enterprise helpdesk operations for 200+ employee gaming company.',
            bullets: [
                'Maintained 95%+ SLA compliance with high-volume tickets',
                'Supported rapid company scaling through standardized IT processes',
                'Administered Google Workspace and endpoint management tools'
            ],
            tools: [
                'Google Workspace',
                'Jamf',
                'Active Directory',
                'Zendesk'
            ]
        },
        {
            company: 'David & Goliath (Advertising Agency)',
            role: 'IT Support Technician',
            years: '2014-2016',
            description: 'Delivered IT support for award-winning creative agency.',
            bullets: [
                'Managed Mac-heavy environment with Adobe Creative Suite',
                'Maintained hybrid Windows/macOS for 100+ creative professionals',
                'Created training materials improving technology adoption'
            ],
            tools: [
                'macOS',
                'Adobe Creative Suite',
                'Windows Server',
                'Dropbox'
            ]
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            // Only handle if focus is on content area
            if (focusArea !== 'content') return;
            if (selectedExp !== null) {
                // In detail view - allow scrolling and back navigation
                if (e.key === 'Escape' || e.key === 'Backspace' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    setSelectedExp(null);
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    detailRef.current?.scrollBy({
                        top: 60,
                        behavior: 'smooth'
                    });
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    detailRef.current?.scrollBy({
                        top: -60,
                        behavior: 'smooth'
                    });
                }
                return;
            }
            // In list view - navigate between items
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                setContentIndex(contentIndex > 0 ? contentIndex - 1 : details.length - 1);
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                setContentIndex(contentIndex < details.length - 1 ? contentIndex + 1 : 0);
            } else if (e.key === 'Enter' || e.key === 'ArrowRight') {
                e.preventDefault();
                setSelectedExp(contentIndex);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        details.length,
        contentIndex,
        selectedExp,
        focusArea,
        setContentIndex
    ]);
    // Detail View
    if (selectedExp !== null) {
        const exp = details[selectedExp];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>setSelectedExp(null),
                            className: "bg-[#aaaaaa] text-[#0000aa] px-3 py-1 cursor-pointer hover:bg-[#cccccc] inline-block",
                            children: "◄ Back to List (Esc)"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1292,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#888888] text-xs",
                            children: "Use ↑↓ to scroll"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1298,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                    lineNumber: 1291,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: detailRef,
                    className: "border border-[#aaaaaa] p-4 overflow-y-auto",
                    style: {
                        maxHeight: 'calc(100vh - 220px)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#aaaaaa] text-[#0000aa] px-2 py-1 text-xl font-bold mb-1 inline-block",
                            children: exp.company
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1306,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#55ffff] text-lg mt-2",
                            children: exp.role
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1309,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#ffff55] mb-4",
                            children: exp.years
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1310,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#aaaaaa] mb-4 leading-relaxed",
                            children: exp.description
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1312,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#ffff55] mb-2",
                            children: "▸ Key Accomplishments"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1314,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 space-y-1",
                            children: exp.bullets.map((b, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#55ffff]",
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                            lineNumber: 1318,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#aaaaaa]",
                                            children: b
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                            lineNumber: 1319,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, j, true, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                    lineNumber: 1317,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1315,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#ffff55] mb-2",
                            children: "▸ Tools & Technologies"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1324,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: exp.tools.map((tool, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-[#000088] border border-[#aaaaaa] px-2 py-1 text-[#55ffff]",
                                    children: tool
                                }, j, false, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                    lineNumber: 1327,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1325,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                    lineNumber: 1301,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
            lineNumber: 1290,
            columnNumber: 7
        }, this);
    }
    // List View
    const isHighlighted = (i)=>contentIndex === i && focusArea === 'content';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[#ffff55]",
                children: "▸ Professional Experience Timeline"
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1345,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[#888888] text-xs mb-2",
                children: focusArea === 'content' ? 'Use ↑↓ to navigate, Enter to select' : '← Arrow right or hover to navigate'
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1346,
                columnNumber: 7
            }, this),
            details.map((exp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: ()=>{
                        setFocusArea('content');
                        setContentIndex(i);
                        setSelectedExp(i);
                    },
                    onMouseEnter: ()=>{
                        setFocusArea('content');
                        setContentIndex(i);
                    },
                    className: `border p-2 cursor-pointer transition-colors ${isHighlighted(i) ? 'bg-[#aaaaaa] text-[#0000aa] border-[#aaaaaa]' : 'border-[#555555]'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: isHighlighted(i) ? 'text-[#0000aa] font-bold' : 'text-[#55ffff]',
                                    children: [
                                        isHighlighted(i) ? '► ' : '  ',
                                        exp.company
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                    lineNumber: 1368,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: isHighlighted(i) ? 'text-[#000088]' : 'text-[#ffff55]',
                                    children: exp.years
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                    lineNumber: 1371,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1367,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: isHighlighted(i) ? 'text-[#000066] ml-4' : 'text-[#aaaaaa] ml-4',
                            children: exp.role
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1375,
                            columnNumber: 11
                        }, this),
                        isHighlighted(i) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#000088] text-xs mt-1 ml-4",
                            children: "Press Enter to view details →"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1377,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                    lineNumber: 1350,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
        lineNumber: 1344,
        columnNumber: 5
    }, this);
}
function SkillsPanel({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[#ffff55]",
                children: "▸ Technical Skills & Tools"
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1388,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: Object.entries(data.skills).map(([category, tools], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "border-b border-[#333388]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "py-1 text-[#55ffff] w-32",
                                    children: category
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                    lineNumber: 1393,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "py-1",
                                    children: tools
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                    lineNumber: 1394,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1392,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                    lineNumber: 1390,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1389,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#aaaaaa] pt-3 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#ffff55] mb-2",
                        children: "▸ Leadership Capabilities"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 1401,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-1",
                        children: data.competencies.map((comp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ff55]",
                                        children: "[✓]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1405,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    comp
                                ]
                            }, i, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 1404,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 1402,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1400,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#aaaaaa] pt-3 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#ffff55] mb-2",
                        children: "▸ Specializations"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 1412,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#55ffff]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "• AI-Powered IT Operations"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 1414,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "• Zero-Touch Deployment & Automation"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 1415,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "• Security Awareness & Compliance"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 1416,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "• Employee Experience Optimization"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 1417,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 1413,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1411,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
        lineNumber: 1387,
        columnNumber: 5
    }, this);
}
function AchievementsPanel({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[#ffff55]",
                children: "▸ Key Performance Metrics"
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1427,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: data.achievements.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "border-b border-[#333388]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "py-2 text-[#aaaaaa]",
                                    children: a.label
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                    lineNumber: 1432,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "py-2 text-right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-[#005500] text-[#55ff55] px-2 py-1",
                                        children: a.value
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1434,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                    lineNumber: 1433,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1431,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                    lineNumber: 1429,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1428,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#aaaaaa] pt-3 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#ffff55] mb-2",
                        children: "▸ Notable Accomplishments"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 1444,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ff55]",
                                        children: "[✓]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1446,
                                        columnNumber: 14
                                    }, this),
                                    " Built AI-powered provisioning using Claude & GPT"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 1446,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ff55]",
                                        children: "[✓]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1447,
                                        columnNumber: 14
                                    }, this),
                                    " Scaled IT from 1-person to full team"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 1447,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ff55]",
                                        children: "[✓]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1448,
                                        columnNumber: 14
                                    }, this),
                                    " Achieved SOC 2 compliance"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 1448,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ff55]",
                                        children: "[✓]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1449,
                                        columnNumber: 14
                                    }, this),
                                    " Member of AI Governance Board"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 1449,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ff55]",
                                        children: "[✓]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1450,
                                        columnNumber: 14
                                    }, this),
                                    " Deployed Jamf Pro for 500+ devices"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 1450,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ff55]",
                                        children: "[✓]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1451,
                                        columnNumber: 14
                                    }, this),
                                    " Implemented Okta SSO for 20+ apps"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 1451,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 1445,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1443,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#aaaaaa] pt-3 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#ffff55] mb-2",
                        children: "▸ Impact Summary"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 1456,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#000055] border border-[#5555ff] p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Transformed IT operations at multiple high-growth companies,"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 1458,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "reducing friction and enabling business scale through"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 1459,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "automation, security, and AI-powered workflows."
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 1460,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 1457,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1455,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
        lineNumber: 1426,
        columnNumber: 5
    }, this);
}
function ContactPanel({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[#ffff55]",
                children: "▸ Contact Information"
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1470,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                            label: "Full Name",
                            value: data.name,
                            highlight: true
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1473,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                            label: "Email Address",
                            value: data.email,
                            link: `mailto:${data.email}`
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1474,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                            label: "Phone Number",
                            value: data.phone,
                            link: `tel:${data.phone.replace(/[^0-9]/g, '')}`
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1475,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                            label: "LinkedIn",
                            value: data.linkedin,
                            link: `https://${data.linkedin}`,
                            external: true
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1476,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                            label: "Location",
                            value: data.location
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1477,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                            label: "Current Role",
                            value: "IT Director @ Liquid I.V.",
                            highlight: true
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1478,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                    lineNumber: 1472,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1471,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#aaaaaa] pt-3 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#ffff55] mb-2",
                        children: "▸ Location"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 1483,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#000055] border border-[#5555ff] p-3 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#55ffff] text-lg",
                            children: "Los Angeles, CA"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 1485,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 1484,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1482,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#aaaaaa] pt-3 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#ffff55] mb-2",
                        children: "▸ Preferred Contact Method"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 1490,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ffff]",
                                        children: "[1]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1493,
                                        columnNumber: 13
                                    }, this),
                                    " Email:",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `mailto:${data.email}`,
                                        className: "text-[#55ffff] hover:text-[#ffffff] underline cursor-pointer",
                                        children: data.email
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1494,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 1492,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ffff]",
                                        children: "[2]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1499,
                                        columnNumber: 13
                                    }, this),
                                    " Phone:",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `tel:${data.phone.replace(/[^0-9]/g, '')}`,
                                        className: "text-[#55ffff] hover:text-[#ffffff] underline cursor-pointer",
                                        children: data.phone
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1500,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 1498,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ffff]",
                                        children: "[3]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1505,
                                        columnNumber: 13
                                    }, this),
                                    " LinkedIn:",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://${data.linkedin}`,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-[#55ffff] hover:text-[#ffffff] underline cursor-pointer",
                                        children: data.linkedin
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1506,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 1504,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 1491,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1489,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex justify-center gap-4 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `mailto:${data.email}`,
                        className: "bg-[#aaaaaa] text-[#0000aa] px-6 py-2 font-bold hover:bg-[#ffffff] cursor-pointer inline-block",
                        children: "[ SEND EMAIL - CONNECT NOW ]"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 1514,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/Brandon_Bibbins_Resume.pdf",
                        download: true,
                        className: "bg-[#55ff55] text-[#000000] px-6 py-2 font-bold hover:bg-[#88ff88] cursor-pointer inline-block",
                        children: "[ DOWNLOAD RESUME.PDF ]"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 1520,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1513,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
        lineNumber: 1469,
        columnNumber: 5
    }, this);
}
function Row({ label, value, highlight = false, link, external }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "border-b border-[#333388]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-1 text-[#aaaaaa] w-40",
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1535,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: `py-1 ${highlight ? 'text-[#55ff55]' : 'text-[#ffffff]'}`,
                children: link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: link,
                    target: external ? '_blank' : undefined,
                    rel: external ? 'noopener noreferrer' : undefined,
                    className: "text-[#55ffff] hover:text-[#ffffff] underline cursor-pointer",
                    children: value
                }, void 0, false, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                    lineNumber: 1538,
                    columnNumber: 11
                }, this) : value
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 1536,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
        lineNumber: 1534,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4ba7f5ea._.js.map
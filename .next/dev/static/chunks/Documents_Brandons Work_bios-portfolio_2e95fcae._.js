(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Brandons Work/bios-portfolio/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bootMessages",
    ()=>bootMessages,
    "fortunes",
    ()=>fortunes,
    "menuItems",
    ()=>menuItems,
    "resumeData",
    ()=>resumeData,
    "themeColors",
    ()=>themeColors
]);
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
            years: '2020-2025'
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
            label: 'IT Budget Managed',
            value: '$500K+'
        },
        {
            label: 'Team Growth',
            value: '1 → 5+'
        },
        {
            label: 'Global Locations',
            value: '14+'
        },
        {
            label: 'Employees Supported',
            value: '500+'
        },
        {
            label: 'Operational Efficiency',
            value: '+30%'
        },
        {
            label: 'Security Risk Reduction',
            value: '73%'
        },
        {
            label: 'Vendor Cost Savings',
            value: '20%+'
        },
        {
            label: 'Resolution Time Improvement',
            value: '45%'
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
const bootMessages = [
    {
        text: 'BibbinsTech BIOS v2.0',
        delay: 0
    },
    {
        text: 'Copyright (C) 2014-2025, Brandon Bibbins Inc.',
        delay: 120
    },
    {
        text: '',
        delay: 200
    },
    {
        text: 'CPU: Brandon Core i7-12700K @ 3.6GHz... OK',
        delay: 280
    },
    {
        text: 'Memory Test: ',
        delay: 360,
        counter: true
    },
    {
        text: '',
        delay: 900
    },
    {
        text: 'Detecting Primary IDE Master... Career Drive [500GB]',
        delay: 980
    },
    {
        text: 'Detecting Secondary IDE... Skills Module [256GB]',
        delay: 1060
    },
    {
        text: 'Detecting Tertiary IDE... Projects Archive [128GB]',
        delay: 1140
    },
    {
        text: '',
        delay: 1220
    },
    {
        text: 'PCI Device Listing:',
        delay: 1300
    },
    {
        text: '  Bus 00 Device 01: Jamf Pro Controller v11.0',
        delay: 1360
    },
    {
        text: '  Bus 00 Device 02: Okta Identity Module v2024.1',
        delay: 1420
    },
    {
        text: '  Bus 00 Device 03: Google Workspace Adapter',
        delay: 1480
    },
    {
        text: '  Bus 00 Device 04: CrowdStrike Falcon Sensor',
        delay: 1540
    },
    {
        text: '  Bus 00 Device 05: Claude AI Coprocessor',
        delay: 1600
    },
    {
        text: '',
        delay: 1680
    },
    {
        text: 'USB Devices:',
        delay: 1760
    },
    {
        text: '  Port 1: Leadership Module [Active]',
        delay: 1820
    },
    {
        text: '  Port 2: Problem Solving Unit [Active]',
        delay: 1880
    },
    {
        text: '  Port 3: Communication Interface [Active]',
        delay: 1940
    },
    {
        text: '',
        delay: 2020
    },
    {
        text: 'Initializing Network... LinkedIn Connected',
        delay: 2100
    },
    {
        text: 'Initializing Portfolio... brandonbibbins.io',
        delay: 2180
    },
    {
        text: 'CMOS Checksum... OK',
        delay: 2260
    },
    {
        text: 'NVRAM Integrity... OK',
        delay: 2340
    },
    {
        text: '',
        delay: 2420
    },
    {
        text: 'Loading Experience Data...',
        delay: 2500
    },
    {
        text: '',
        delay: 2580,
        progressBar: true
    },
    {
        text: '',
        delay: 3400
    },
    {
        text: 'All systems operational.',
        delay: 3480
    },
    {
        text: '',
        delay: 3560
    },
    {
        text: 'Press any key to continue or wait...',
        delay: 3640,
        blink: true
    }
];
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Brandons Work/bios-portfolio/lib/sounds.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBeep",
    ()=>createBeep
]);
const createBeep = (type, enabled)=>{
    if (!enabled) return;
    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContextClass();
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Brandons Work/bios-portfolio/components/Row.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Row",
    ()=>Row
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Row({ label, value, highlight = false, link, external }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "border-b border-[#333388]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-1 text-[#aaaaaa] w-40",
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/Row.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: `py-1 ${highlight ? 'text-[#55ff55]' : 'text-[#ffffff]'}`,
                children: link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: link,
                    target: external ? '_blank' : undefined,
                    rel: external ? 'noopener noreferrer' : undefined,
                    className: "text-[#55ffff] hover:text-[#ffffff] underline cursor-pointer",
                    children: value
                }, void 0, false, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/Row.tsx",
                    lineNumber: 15,
                    columnNumber: 11
                }, this) : value
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/Row.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/Row.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Row;
var _c;
__turbopack_context__.k.register(_c, "Row");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainPanel",
    ()=>MainPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$Row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/components/Row.tsx [app-client] (ecmascript)");
;
;
function MainPanel({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$Row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                            label: "Candidate Name",
                            value: data.name,
                            highlight: true
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$Row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                            label: "Current Position",
                            value: data.title
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$Row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                            label: "Years Experience",
                            value: "12+ Years",
                            highlight: true
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$Row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                            label: "Current Employer",
                            value: "Liquid I.V. (Unilever)"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$Row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                            label: "Location",
                            value: data.location
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$Row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                            label: "Education",
                            value: `${data.education[0].degree} - ${data.education[0].school}`
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#aaaaaa] pt-3 mt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#ffff55] mb-2",
                        children: "▸ Professional Summary"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#aaaaaa] leading-relaxed text-sm",
                        children: data.summary
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#aaaaaa] pt-3 mt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#ffff55] mb-2",
                        children: "▸ Core Competencies"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-1",
                        children: data.competencies.map((comp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[#55ffff]",
                                children: [
                                    "• ",
                                    comp
                                ]
                            }, i, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#aaaaaa] pt-3 mt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#ffff55] mb-2",
                        children: "▸ Certifications"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    data.certs.map((cert, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#55ffff]",
                            children: [
                                "  [",
                                i + 1,
                                "] ",
                                cert
                            ]
                        }, i, true, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = MainPanel;
var _c;
__turbopack_context__.k.register(_c, "MainPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExperiencePanel",
    ()=>ExperiencePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const experienceDetails = [
    {
        company: 'Liquid I.V. (Unilever)',
        role: 'IT Director, Employee Technology & Experience',
        years: '2022-Present',
        description: 'Lead IT Support & Operations across helpdesk, systems operations, and asset management for rapidly growing health & wellness brand acquired by Unilever. Oversee end-to-end employee technology experience from onboarding through daily operations.',
        bullets: [
            'Built and lead high-performing IT team delivering 30% operational efficiency gains while improving employee satisfaction scores across all touchpoints',
            'Transformed IT from reactive ticket-based support to proactive, data-driven experience management with predictive issue resolution',
            'Architected and own roadmap for company self-service IT Hub, achieving 40-60% zero-touch resolutions and significantly reducing employee friction',
            'Pioneer AI-first workflows where LLM agents (Claude, GPT, Gemini) handle provisioning, triage, policy interpretation, and tier-1 troubleshooting',
            'Serve on AI Governance Board, developing frameworks for responsible AI adoption that enable productivity without compromising security',
            'Spearheaded enterprise-wide 1Password rollout and security awareness training program, reducing phishing susceptibility by 73%',
            'Authored 350+ pages of IT policies, runbooks, and playbooks with design-first mindset ensuring compliance feels intuitive',
            'Built comprehensive employee experience metrics tracking reliability, performance, and effort, using data to identify friction before escalation',
            'Partner cross-functionally with Security, Engineering, HR, and Workplace teams to ensure seamless platform deployments',
            'Regularly brief executives on experience trends, operational risk, and strategic technology investments',
            'Manage $500K+ annual IT budget including hardware, software licensing, and vendor contracts',
            'Lead vendor evaluation and negotiations for enterprise tools, achieving 20%+ cost savings on key renewals',
            'Implemented CrowdStrike EDR across all endpoints, achieving 99.9% deployment coverage and real-time threat visibility',
            'Designed zero-touch Mac deployment pipeline reducing new hire setup time from 4 hours to under 30 minutes'
        ],
        tools: [
            'Jamf Pro',
            'Okta',
            '1Password',
            'CrowdStrike',
            'Claude Code',
            'Jira Service Management',
            'Google Workspace',
            'Slack',
            'Notion'
        ]
    },
    {
        company: 'Princess Polly (International E-Commerce)',
        role: 'IT Director, Employee Experience Lead',
        years: '2020-2025',
        description: 'Built and scaled IT organization from one-person operation to multi-person global team during explosive hypergrowth. Established IT as strategic partner to business expansion across retail, e-commerce, and international operations.',
        bullets: [
            'Scaled IT department from solo operator to multi-person team, hiring and developing future leaders with deep empathy for employee needs',
            'Led global IT transformation across 14+ retail locations and distribution centers spanning US, Australia, and international markets',
            'Improved mean time to resolution by 45% through scalable hybrid workforce support models and automated workflows',
            'Implemented Okta identity management with role-based provisioning and SCIM, enabling seamless access management at scale',
            'Delivered day-one productivity for new hires through fully automated onboarding workflows and zero-touch device deployment',
            'Created standardized global helpdesk framework with self-service capabilities, reducing recurring tickets by 35%',
            'Collaborated directly with C-suite leadership to align technology strategy with business growth, contributing to 50%+ e-commerce expansion',
            'Unified global procurement and hardware lifecycle operations, maintaining accurate asset tracking across international operations',
            'Designed and implemented network infrastructure for new retail locations, ensuring PCI compliance and reliable POS operations',
            'Built IT knowledge base with 200+ articles enabling employee self-service and reducing support dependency',
            'Managed relationships with 30+ technology vendors, negotiating contracts and ensuring SLA compliance',
            'Led SOC 2 Type II compliance initiatives for IT controls, security policies, and access management',
            'Implemented Hexnode MDM for BYOD program, balancing security requirements with employee flexibility',
            'Established IT metrics and reporting dashboards providing visibility into team performance and operational health'
        ],
        tools: [
            'Jamf Pro',
            'Okta',
            'Google Workspace',
            'Zendesk',
            'Hexnode',
            'Slack',
            'Shopify',
            'NetSuite'
        ]
    },
    {
        company: 'Drinks.com (E-Commerce Startup)',
        role: 'IT Manager',
        years: '2017-2020',
        description: 'Established IT infrastructure foundation for rapidly scaling e-commerce startup. Built all IT systems and processes from the ground up to support hypergrowth and positioned IT as strategic business partner.',
        bullets: [
            'Reduced new hire time-to-productivity by 50% through streamlined onboarding workflows and pre-configured systems',
            'Deployed Okta identity management platform with SSO integrations across 20+ SaaS applications, eliminating password fatigue',
            'Built asset management and ticketing systems from scratch, creating full visibility into hardware lifecycle and procurement needs',
            'Developed self-service knowledge base that deflected 30% of incoming tickets and empowered employees to resolve common issues',
            'Managed all IT operations as sole IT team member, supporting 50+ employees across Engineering, Sales, Marketing, and Operations',
            'Implemented endpoint management and security policies for Mac and Windows fleet ensuring compliance and data protection',
            'Established IT budget tracking and vendor management processes, optimizing software licensing costs by 15%',
            'Designed and deployed conference room AV systems and collaboration tools improving meeting efficiency',
            'Created IT onboarding and offboarding checklists ensuring consistent employee experience and security compliance',
            'Partnered with HR to automate provisioning workflows, reducing manual IT tasks by 40%',
            'Managed AWS infrastructure and cloud resources supporting e-commerce platform operations',
            'Led security awareness initiatives including phishing simulations and best practices training'
        ],
        tools: [
            'Okta',
            'Google Workspace',
            'Slack',
            'Jamf',
            'AWS',
            'Wrike',
            'Zendesk'
        ]
    },
    {
        company: 'Playtika (Mobile Gaming)',
        role: 'Senior IT Technician',
        years: '2016-2017',
        description: 'Managed enterprise helpdesk operations for 200+ employee mobile gaming company during rapid growth phase. Served as escalation point for complex technical issues and VIP support.',
        bullets: [
            'Maintained 95%+ SLA compliance while handling high-volume ticket queues across Engineering, Design, Marketing, and Executive teams',
            'Supported rapid company scaling through standardized IT processes and comprehensive documentation',
            'Administered Google Workspace and endpoint management tools ensuring consistent employee experience across departments',
            'Provided white-glove VIP support for executive team and high-priority escalations requiring immediate resolution',
            'Managed new hire onboarding including hardware provisioning, account setup, and orientation training',
            'Configured and maintained developer workstations with specialized software for mobile game development',
            'Supported audio/visual equipment for all-hands meetings, product demos, and company events',
            'Collaborated with Security team on access reviews, offboarding procedures, and compliance audits',
            'Maintained inventory tracking for 200+ devices including laptops, monitors, and peripherals',
            'Troubleshot network connectivity issues and coordinated with facilities on infrastructure needs'
        ],
        tools: [
            'Google Workspace',
            'Jamf',
            'Active Directory',
            'Zendesk',
            'Slack',
            'JIRA'
        ]
    },
    {
        company: 'David & Goliath (Advertising Agency)',
        role: 'IT Support Technician',
        years: '2014-2016',
        description: 'Delivered IT support for award-winning creative advertising agency with demanding technical requirements. Supported high-pressure creative workflows and client-facing presentations.',
        bullets: [
            'Managed Mac-heavy environment supporting Adobe Creative Suite, video editing, 3D rendering, and motion graphics workflows',
            'Maintained hybrid Windows/macOS infrastructure for 100+ creative professionals including designers, copywriters, and producers',
            'Created training materials and conducted workshops improving technology adoption and reducing repeat support requests',
            'Supported high-profile client presentations and live production events with zero downtime and immediate on-site response',
            'Configured specialized creative workstations with high-performance specs for video editing and rendering projects',
            'Managed file server infrastructure and backup systems ensuring creative assets were protected and accessible',
            'Coordinated with external vendors for print production, broadcast delivery, and media asset management',
            'Supported remote shoots and off-site productions with mobile technology kits and connectivity solutions',
            'Maintained studio equipment including cameras, lighting, and audio gear for in-house production capabilities',
            'Provided after-hours support for critical campaign deadlines and client deliverables',
            'Troubleshot Adobe Creative Cloud licensing and plugin compatibility issues across creative teams',
            'Assisted with office relocations and buildouts including network infrastructure and workstation setup'
        ],
        tools: [
            'macOS',
            'Adobe Creative Suite',
            'Windows Server',
            'Dropbox',
            'Final Cut Pro',
            'After Effects',
            'Cinema 4D'
        ]
    }
];
function ExperiencePanel({ data, focusArea, setFocusArea, contentIndex, setContentIndex }) {
    _s();
    // Start with Liquid I.V. (index 0) expanded
    const [expandedIndex, setExpandedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLocked, setIsLocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const detailRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Handle keyboard navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExperiencePanel.useEffect": ()=>{
            const handleKeyDown = {
                "ExperiencePanel.useEffect.handleKeyDown": (e)=>{
                    if (focusArea !== 'content') return;
                    if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        const newIndex = expandedIndex > 0 ? expandedIndex - 1 : experienceDetails.length - 1;
                        setExpandedIndex(newIndex);
                        setContentIndex(newIndex);
                    } else if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        const newIndex = expandedIndex < experienceDetails.length - 1 ? expandedIndex + 1 : 0;
                        setExpandedIndex(newIndex);
                        setContentIndex(newIndex);
                    } else if (e.key === 'Enter') {
                        e.preventDefault();
                        setIsLocked(true);
                    } else if (e.key === 'Escape') {
                        e.preventDefault();
                        setIsLocked(false);
                    }
                }
            }["ExperiencePanel.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "ExperiencePanel.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["ExperiencePanel.useEffect"];
        }
    }["ExperiencePanel.useEffect"], [
        expandedIndex,
        focusArea,
        setContentIndex
    ]);
    const handleMouseEnter = (index)=>{
        if (!isLocked) {
            setExpandedIndex(index);
            setContentIndex(index);
            setFocusArea('content');
        }
    };
    const handleClick = (index)=>{
        setExpandedIndex(index);
        setContentIndex(index);
        setFocusArea('content');
        setIsLocked(true);
    };
    const exp = experienceDetails[expandedIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col md:flex-row gap-3 h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:w-1/3 space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#ffff55] text-sm mb-2",
                        children: "▸ Experience"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    experienceDetails.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>handleClick(i),
                            onMouseEnter: ()=>handleMouseEnter(i),
                            className: `border p-2 cursor-pointer transition-all text-sm ${expandedIndex === i ? 'bg-[#aaaaaa] text-[#0000aa] border-[#aaaaaa]' : 'border-[#555555] hover:border-[#888888]'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: expandedIndex === i ? 'text-[#0000aa] font-bold' : 'text-[#55ffff]',
                                        children: [
                                            expandedIndex === i ? '► ' : '  ',
                                            item.company.split(' (')[0]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `text-xs ${expandedIndex === i ? 'text-[#000088]' : 'text-[#ffff55]'}`,
                                    children: item.years
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#888888] text-xs mt-2",
                        children: isLocked ? '🔒 Locked (Esc to unlock)' : 'Hover to preview, click to lock'
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:w-2/3 border border-[#aaaaaa] p-3 overflow-y-auto",
                style: {
                    maxHeight: 'calc(100vh - 200px)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: detailRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#aaaaaa] text-[#0000aa] px-2 py-1 text-lg font-bold mb-1 inline-block",
                            children: exp.company
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#55ffff] mt-2",
                            children: exp.role
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#ffff55] text-sm mb-3",
                            children: exp.years
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#aaaaaa] mb-3 text-sm leading-relaxed",
                            children: exp.description
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#ffff55] text-sm mb-2",
                            children: "▸ Key Accomplishments"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 space-y-1",
                            children: exp.bullets.map((b, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#55ffff]",
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#aaaaaa]",
                                            children: b
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, j, true, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#ffff55] text-sm mb-2",
                            children: "▸ Tools & Technologies"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: exp.tools.map((tool, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-[#000088] border border-[#aaaaaa] px-2 py-1 text-[#55ffff] text-xs",
                                    children: tool
                                }, j, false, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                                    lineNumber: 230,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_s(ExperiencePanel, "tJg+qPqUHngE5YQ5+mxDqCz8qTQ=");
_c = ExperiencePanel;
var _c;
__turbopack_context__.k.register(_c, "ExperiencePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkillsPanel",
    ()=>SkillsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SkillsPanel({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[#ffff55]",
                children: "▸ Technical Skills & Tools"
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: Object.entries(data.skills).map(([category, tools], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "border-b border-[#333388]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "py-1 text-[#55ffff] w-32",
                                    children: category
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx",
                                    lineNumber: 15,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "py-1",
                                    children: tools
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx",
                                    lineNumber: 16,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx",
                            lineNumber: 14,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#aaaaaa] pt-3 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#ffff55] mb-2",
                        children: "▸ Leadership Capabilities"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-1",
                        children: data.competencies.map((comp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ff55]",
                                        children: "[✓]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    comp
                                ]
                            }, i, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#aaaaaa] pt-3 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#ffff55] mb-2",
                        children: "▸ Specializations"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#55ffff]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "• AI-Powered IT Operations"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "• Zero-Touch Deployment & Automation"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "• Security Awareness & Compliance"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "• Employee Experience Optimization"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = SkillsPanel;
var _c;
__turbopack_context__.k.register(_c, "SkillsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AchievementsPanel",
    ()=>AchievementsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function AchievementsPanel({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[#ffff55]",
                children: "▸ Key Performance Metrics"
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: data.achievements.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "border-b border-[#333388]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "py-2 text-[#aaaaaa]",
                                    children: a.label
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                    lineNumber: 15,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "py-2 text-right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-[#005500] text-[#55ff55] px-2 py-1",
                                        children: a.value
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                        lineNumber: 17,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                    lineNumber: 16,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                            lineNumber: 14,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#aaaaaa] pt-3 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#ffff55] mb-2",
                        children: "▸ Leadership & Strategic Impact"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ff55]",
                                        children: "[✓]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                        lineNumber: 29,
                                        columnNumber: 14
                                    }, this),
                                    " Executive Leadership: Regular briefings to C-suite on technology strategy, risk, and investment priorities"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ff55]",
                                        children: "[✓]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                        lineNumber: 30,
                                        columnNumber: 14
                                    }, this),
                                    " Team Development: Built and scaled IT organizations from ground up, mentoring future leaders"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ff55]",
                                        children: "[✓]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                        lineNumber: 31,
                                        columnNumber: 14
                                    }, this),
                                    " AI Governance: Founding member of enterprise AI Governance Board, shaping responsible adoption policies"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ff55]",
                                        children: "[✓]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                        lineNumber: 32,
                                        columnNumber: 14
                                    }, this),
                                    " Vendor Strategy: Managed 30+ vendor relationships, negotiating enterprise contracts and SLAs"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ff55]",
                                        children: "[✓]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                        lineNumber: 33,
                                        columnNumber: 14
                                    }, this),
                                    " Compliance Leadership: Led SOC 2 Type II and PCI DSS compliance initiatives across organizations"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ff55]",
                                        children: "[✓]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                        lineNumber: 34,
                                        columnNumber: 14
                                    }, this),
                                    " Cross-Functional Partnership: Aligned IT strategy with HR, Security, Finance, and Operations stakeholders"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ff55]",
                                        children: "[✓]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                        lineNumber: 35,
                                        columnNumber: 14
                                    }, this),
                                    " Global Operations: Standardized IT delivery across US, Australia, and international markets"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ff55]",
                                        children: "[✓]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                        lineNumber: 36,
                                        columnNumber: 14
                                    }, this),
                                    " Digital Transformation: Pioneered AI-first IT service delivery using Claude, GPT, and automation"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#aaaaaa] pt-3 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#ffff55] mb-2",
                        children: "▸ Executive Summary"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#000055] border border-[#5555ff] p-3 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2",
                                children: "Strategic IT leader with proven ability to scale technology operations"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2",
                                children: "through hypergrowth while driving measurable business outcomes."
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2",
                                children: "Expert in building high-performing teams, optimizing vendor investments,"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "and transforming IT from cost center to strategic enabler."
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = AchievementsPanel;
var _c;
__turbopack_context__.k.register(_c, "AchievementsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactPanel",
    ()=>ContactPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$Row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/components/Row.tsx [app-client] (ecmascript)");
;
;
function ContactPanel({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[#ffff55]",
                children: "▸ Contact Information"
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$Row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                            label: "Full Name",
                            value: data.name,
                            highlight: true
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$Row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                            label: "Email Address",
                            value: data.email,
                            link: `mailto:${data.email}`
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$Row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                            label: "Phone Number",
                            value: data.phone,
                            link: `tel:${data.phone.replace(/[^0-9]/g, '')}`
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$Row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                            label: "LinkedIn",
                            value: data.linkedin,
                            link: `https://${data.linkedin}`,
                            external: true
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$Row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                            label: "Location",
                            value: data.location
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$Row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                            label: "Current Role",
                            value: "IT Director @ Liquid I.V.",
                            highlight: true
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#aaaaaa] pt-3 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#ffff55] mb-2",
                        children: "▸ Location"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#000055] border border-[#5555ff] p-3 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#55ffff] text-lg",
                            children: "Los Angeles, CA"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#aaaaaa] pt-3 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#ffff55] mb-2",
                        children: "▸ Preferred Contact Method"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ffff]",
                                        children: "[1]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    " Email:",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `mailto:${data.email}`,
                                        className: "text-[#55ffff] hover:text-[#ffffff] underline cursor-pointer",
                                        children: data.email
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ffff]",
                                        children: "[2]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    " Phone:",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `tel:${data.phone.replace(/[^0-9]/g, '')}`,
                                        className: "text-[#55ffff] hover:text-[#ffffff] underline cursor-pointer",
                                        children: data.phone
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#55ffff]",
                                        children: "[3]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    " LinkedIn:",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://${data.linkedin}`,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-[#55ffff] hover:text-[#ffffff] underline cursor-pointer",
                                        children: data.linkedin
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex justify-center gap-4 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `mailto:${data.email}`,
                        className: "bg-[#aaaaaa] text-[#0000aa] px-6 py-2 font-bold hover:bg-[#ffffff] cursor-pointer inline-block",
                        children: "[ SEND EMAIL - CONNECT NOW ]"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/Brandon_Bibbins_Resume.pdf",
                        download: true,
                        className: "bg-[#55ff55] text-[#000000] px-6 py-2 font-bold hover:bg-[#88ff88] cursor-pointer inline-block",
                        children: "[ DOWNLOAD RESUME.PDF ]"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = ContactPanel;
var _c;
__turbopack_context__.k.register(_c, "ContactPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Brandons Work/bios-portfolio/components/panels/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$MainPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$ExperiencePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$SkillsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$AchievementsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$ContactPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx [app-client] (ecmascript)");
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Brandons Work/bios-portfolio/components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$Row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/components/Row.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/components/panels/index.ts [app-client] (ecmascript) <locals>");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Brandons Work/bios-portfolio/components/panels/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AchievementsPanel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$AchievementsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AchievementsPanel"],
    "ContactPanel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$ContactPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactPanel"],
    "ExperiencePanel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$ExperiencePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExperiencePanel"],
    "MainPanel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$MainPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainPanel"],
    "SkillsPanel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$SkillsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillsPanel"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/components/panels/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$MainPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/components/panels/MainPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$ExperiencePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/components/panels/ExperiencePanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$SkillsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/components/panels/SkillsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$AchievementsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/components/panels/AchievementsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$ContactPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/components/panels/ContactPanel.tsx [app-client] (ecmascript)");
}),
"[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/lib/sounds.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Brandons Work/bios-portfolio/components/panels/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Home() {
    _s();
    const [selectedMenu, setSelectedMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('main');
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [focusArea, setFocusArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('menu');
    const [contentIndex, setContentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('blue');
    const [bootPhase, setBootPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('booting');
    const [bootText, setBootText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [memoryCount, setMemoryCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [progressBar, setProgressBar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showProgressBar, setShowProgressBar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCursor, setShowCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [terminalOpen, setTerminalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [terminalHistory, setTerminalHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [terminalInput, setTerminalInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [commandHistory, setCommandHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [historyIndex, setHistoryIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [soundEnabled, setSoundEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [pongActive, setPongActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pongStarted, setPongStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pongWinner, setPongWinner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pongScore, setPongScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        player: 0,
        cpu: 0
    });
    const [playerY, setPlayerY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [cpuY, setCpuY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [ballPos, setBallPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 50
    });
    const [ballVel, setBallVel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const terminalInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pongRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Wrapper for sound that checks enabled state
    const playBeep = (type)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBeep"])(type, soundEnabled);
    // Load sound preference from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const savedSound = localStorage.getItem('bios-sound');
            if (savedSound !== null) {
                setSoundEnabled(savedSound === 'true');
            }
        }
    }["Home.useEffect"], []);
    const toggleSound = ()=>{
        const newValue = !soundEnabled;
        setSoundEnabled(newValue);
        localStorage.setItem('bios-sound', String(newValue));
        if (newValue) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBeep"])('click', true);
    };
    // Load theme from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const savedTheme = localStorage.getItem('bios-theme');
            if (savedTheme && [
                'blue',
                'amber',
                'green',
                'white'
            ].includes(savedTheme)) {
                setTheme(savedTheme);
            }
        }
    }["Home.useEffect"], []);
    // Save theme to localStorage when it changes
    const handleThemeChange = (newTheme)=>{
        setTheme(newTheme);
        localStorage.setItem('bios-theme', newTheme);
        playBeep('click');
    };
    // Boot sequence effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (bootPhase !== 'booting') return;
            let currentText = '';
            let messageIndex = 0;
            const processNextMessage = {
                "Home.useEffect.processNextMessage": ()=>{
                    if (messageIndex >= __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bootMessages"].length) return;
                    const msg = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bootMessages"][messageIndex];
                    setTimeout({
                        "Home.useEffect.processNextMessage": ()=>{
                            if (msg.counter) {
                                let count = 0;
                                playBeep('click');
                                const counterInterval = setInterval({
                                    "Home.useEffect.processNextMessage.counterInterval": ()=>{
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
                                    }
                                }["Home.useEffect.processNextMessage.counterInterval"], 50);
                            } else if (msg.progressBar) {
                                setShowProgressBar(true);
                                setProgressBar(0);
                                let progress = 0;
                                const progressInterval = setInterval({
                                    "Home.useEffect.processNextMessage.progressInterval": ()=>{
                                        progress += 5;
                                        setProgressBar(progress);
                                        if (progress >= 100) {
                                            clearInterval(progressInterval);
                                            setShowProgressBar(false);
                                            currentText += '[####################] 100% Complete\n';
                                            setBootText(currentText);
                                            playBeep('enter');
                                            messageIndex++;
                                            processNextMessage();
                                        }
                                    }
                                }["Home.useEffect.processNextMessage.progressInterval"], 30);
                            } else if (msg.text.includes('OK') || msg.text.includes('Connected') || msg.text.includes('Active]')) {
                                currentText += msg.text + '\n';
                                setBootText(currentText);
                                playBeep('click');
                                messageIndex++;
                                processNextMessage();
                            } else if (msg.text.includes('operational')) {
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
                        }
                    }["Home.useEffect.processNextMessage"], msg.delay);
                }
            }["Home.useEffect.processNextMessage"];
            processNextMessage();
            const handleSkip = {
                "Home.useEffect.handleSkip": ()=>{
                    setBootPhase('ready');
                    playBeep('boot');
                }
            }["Home.useEffect.handleSkip"];
            window.addEventListener('keydown', handleSkip);
            window.addEventListener('click', handleSkip);
            const autoAdvance = setTimeout({
                "Home.useEffect.autoAdvance": ()=>{
                    setBootPhase('ready');
                    playBeep('boot');
                }
            }["Home.useEffect.autoAdvance"], 5000);
            return ({
                "Home.useEffect": ()=>{
                    window.removeEventListener('keydown', handleSkip);
                    window.removeEventListener('click', handleSkip);
                    clearTimeout(autoAdvance);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        bootPhase
    ]);
    // Clock update
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const updateTime = {
                "Home.useEffect.updateTime": ()=>{
                    const now = new Date();
                    setTime(now.toLocaleTimeString('en-US', {
                        hour12: false
                    }));
                }
            }["Home.useEffect.updateTime"];
            updateTime();
            const interval = setInterval(updateTime, 1000);
            return ({
                "Home.useEffect": ()=>clearInterval(interval)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    // Cursor blink
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const interval = setInterval({
                "Home.useEffect.interval": ()=>setShowCursor({
                        "Home.useEffect.interval": (prev)=>!prev
                    }["Home.useEffect.interval"])
            }["Home.useEffect.interval"], 500);
            return ({
                "Home.useEffect": ()=>clearInterval(interval)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    // Pong game loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!pongActive || !pongStarted || pongWinner) return;
            const gameLoop = setInterval({
                "Home.useEffect.gameLoop": ()=>{
                    setBallPos({
                        "Home.useEffect.gameLoop": (prev)=>{
                            if (ballVel.x === 0 && ballVel.y === 0) return prev;
                            let newX = prev.x + ballVel.x;
                            let newY = prev.y + ballVel.y;
                            let newVelX = ballVel.x;
                            let newVelY = ballVel.y;
                            if (newY <= 5 || newY >= 95) {
                                newVelY = -ballVel.y;
                                newY = newY <= 5 ? 5 : 95;
                                playBeep('click');
                            }
                            if (newX <= 8 && newX > 5 && prev.x > 8) {
                                if (newY >= playerY - 12 && newY <= playerY + 12) {
                                    newVelX = Math.abs(ballVel.x) * 1.05;
                                    newX = 8;
                                    playBeep('enter');
                                }
                            }
                            if (newX >= 92 && newX < 95 && prev.x < 92) {
                                if (newY >= cpuY - 12 && newY <= cpuY + 12) {
                                    newVelX = -Math.abs(ballVel.x) * 1.05;
                                    newX = 92;
                                    playBeep('enter');
                                }
                            }
                            if (newX <= 0) {
                                const newCpuScore = pongScore.cpu + 1;
                                setPongScore({
                                    "Home.useEffect.gameLoop": (s)=>({
                                            ...s,
                                            cpu: newCpuScore
                                        })
                                }["Home.useEffect.gameLoop"]);
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
                                const newPlayerScore = pongScore.player + 1;
                                setPongScore({
                                    "Home.useEffect.gameLoop": (s)=>({
                                            ...s,
                                            player: newPlayerScore
                                        })
                                }["Home.useEffect.gameLoop"]);
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
                        }
                    }["Home.useEffect.gameLoop"]);
                    setCpuY({
                        "Home.useEffect.gameLoop": (prev)=>{
                            const diff = ballPos.y - prev;
                            return prev + diff * 0.08;
                        }
                    }["Home.useEffect.gameLoop"]);
                }
            }["Home.useEffect.gameLoop"], 30);
            return ({
                "Home.useEffect": ()=>clearInterval(gameLoop)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!pongActive) return;
            const handlePongKeys = {
                "Home.useEffect.handlePongKeys": (e)=>{
                    if ((e.key === ' ' || e.key === 'Enter') && !pongStarted && !pongWinner) {
                        e.preventDefault();
                        setPongStarted(true);
                        setBallVel({
                            x: 2,
                            y: (Math.random() - 0.5) * 2
                        });
                        return;
                    }
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
                        setPlayerY({
                            "Home.useEffect.handlePongKeys": (prev)=>Math.max(12, prev - 5)
                        }["Home.useEffect.handlePongKeys"]);
                    } else if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') {
                        e.preventDefault();
                        setPlayerY({
                            "Home.useEffect.handlePongKeys": (prev)=>Math.min(88, prev + 5)
                        }["Home.useEffect.handlePongKeys"]);
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
                }
            }["Home.useEffect.handlePongKeys"];
            window.addEventListener('keydown', handlePongKeys);
            return ({
                "Home.useEffect": ()=>window.removeEventListener('keydown', handlePongKeys)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        pongActive,
        pongStarted,
        pongWinner
    ]);
    // Unified keyboard navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (bootPhase === 'booting') return;
            const handleKeyDown = {
                "Home.useEffect.handleKeyDown": (e)=>{
                    if (pongActive) return;
                    if ((e.key === '`' || e.key === '~') && !terminalOpen) {
                        e.preventDefault();
                        setTerminalOpen(true);
                        playBeep('enter');
                        setTimeout({
                            "Home.useEffect.handleKeyDown": ()=>terminalInputRef.current?.focus()
                        }["Home.useEffect.handleKeyDown"], 50);
                        return;
                    }
                    if (e.key === 'Escape' && terminalOpen) {
                        e.preventDefault();
                        setTerminalOpen(false);
                        playBeep('click');
                        return;
                    }
                    if (terminalOpen) return;
                    if (focusArea === 'menu') {
                        if (e.key === 'ArrowUp') {
                            e.preventDefault();
                            const newIndex = selectedIndex > 0 ? selectedIndex - 1 : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuItems"].length - 1;
                            setSelectedIndex(newIndex);
                            setSelectedMenu(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuItems"][newIndex].id);
                            playBeep('click');
                        } else if (e.key === 'ArrowDown') {
                            e.preventDefault();
                            const newIndex = selectedIndex < __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuItems"].length - 1 ? selectedIndex + 1 : 0;
                            setSelectedIndex(newIndex);
                            setSelectedMenu(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuItems"][newIndex].id);
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
                }
            }["Home.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "Home.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        selectedIndex,
        selectedMenu,
        focusArea,
        bootPhase,
        terminalOpen,
        pongActive
    ]);
    // Terminal command processor
    const processCommand = (cmd)=>{
        const trimmed = cmd.trim().toLowerCase();
        const parts = cmd.trim().split(' ');
        const command = parts[0].toLowerCase();
        const args = parts.slice(1).join(' ');
        let output = '';
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

[2020-2025] IT Director @ Princess Polly
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
  pong        - Play Pong!
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
  2020-2025: IT Director @ Princess Polly
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
                output = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fortunes"][Math.floor(Math.random() * __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fortunes"].length)];
                break;
            case 'pong':
            case './games/pong.exe':
            case 'games/pong.exe':
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
                setProgressBar(0);
                setShowProgressBar(false);
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
    const colors = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColors"][theme];
    // Boot screen
    if (bootPhase === 'booting') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen font-mono text-sm crt-screen crt-flicker relative",
            style: {
                background: colors.bg,
                color: colors.text
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "boot-text",
                            children: bootText
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 650,
                            columnNumber: 11
                        }, this),
                        memoryCount > 0 && memoryCount < 65536 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                memoryCount,
                                " KB"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 652,
                            columnNumber: 13
                        }, this),
                        !showProgressBar && showCursor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "typing-cursor",
                            style: {
                                background: colors.text
                            }
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 654,
                            columnNumber: 46
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                    lineNumber: 649,
                    columnNumber: 9
                }, this),
                showProgressBar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2",
                                style: {
                                    color: colors.highlight
                                },
                                children: "Initializing System..."
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 661,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-2 relative overflow-hidden",
                                style: {
                                    borderColor: colors.text,
                                    width: '300px',
                                    height: '24px',
                                    background: colors.bg
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full transition-all duration-75",
                                    style: {
                                        width: `${progressBar}%`,
                                        background: colors.highlight
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                    lineNumber: 671,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 662,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2",
                                style: {
                                    color: colors.text
                                },
                                children: [
                                    progressBar,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 679,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 660,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                    lineNumber: 659,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
            lineNumber: 644,
            columnNumber: 7
        }, this);
    }
    // Main BIOS interface
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen font-mono text-sm p-2 select-none crt-screen crt-flicker",
        style: {
            background: colors.bg,
            color: colors.text
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-1 font-bold text-xs sm:text-sm",
                style: {
                    background: colors.text,
                    color: colors.bg
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline",
                        children: "CMOS Setup Utility - Copyright (C) 2014-2025, Brandon Bibbins Inc."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 698,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sm:hidden",
                        children: "BIOS Setup - Brandon Bibbins"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 699,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 694,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row mt-2 gap-2",
                style: {
                    minHeight: 'calc(100vh - 140px)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-64 border-2 flex flex-col",
                        style: {
                            borderColor: colors.text
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 py-1 font-bold text-center",
                                style: {
                                    background: colors.text,
                                    color: colors.bg
                                },
                                children: "▼ Main Menu ▼"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 705,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 p-1",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuItems"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>{
                                            setFocusArea('menu');
                                            setSelectedIndex(index);
                                            setSelectedMenu(item.id);
                                            playBeep('click');
                                        },
                                        onMouseEnter: ()=>{
                                            setFocusArea('menu');
                                            setSelectedIndex(index);
                                            setSelectedMenu(item.id);
                                        },
                                        className: "px-2 py-2 md:py-1 cursor-pointer active:opacity-80 transition-opacity",
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
                                        lineNumber: 713,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 711,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 704,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 border-2 flex flex-col order-first md:order-none",
                        style: {
                            borderColor: colors.text
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 py-1 font-bold",
                                style: {
                                    background: colors.text,
                                    color: colors.bg
                                },
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuItems"].find((m)=>m.id === selectedMenu)?.label
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 743,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 p-3 overflow-auto",
                                children: [
                                    selectedMenu === 'main' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainPanel"], {
                                        data: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"]
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 750,
                                        columnNumber: 41
                                    }, this),
                                    selectedMenu === 'experience' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExperiencePanel"], {
                                        data: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"],
                                        focusArea: focusArea,
                                        setFocusArea: setFocusArea,
                                        contentIndex: contentIndex,
                                        setContentIndex: setContentIndex
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 752,
                                        columnNumber: 15
                                    }, this),
                                    selectedMenu === 'skills' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillsPanel"], {
                                        data: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"]
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 760,
                                        columnNumber: 43
                                    }, this),
                                    selectedMenu === 'achievements' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AchievementsPanel"], {
                                        data: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"]
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 761,
                                        columnNumber: 49
                                    }, this),
                                    selectedMenu === 'contact' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$components$2f$panels$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactPanel"], {
                                        data: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"]
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 762,
                                        columnNumber: 44
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 749,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 742,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex w-48 border-2 flex-col",
                        style: {
                            borderColor: colors.text
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 py-1 font-bold text-center",
                                style: {
                                    background: colors.text,
                                    color: colors.bg
                                },
                                children: "Item Help"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 768,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 p-2 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: colors.highlight
                                        },
                                        children: "Navigation:"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 775,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1",
                                        children: "↑↓ Select Item"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 776,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Enter: Select"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 777,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Esc: Back"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 778,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3",
                                        style: {
                                            color: colors.highlight
                                        },
                                        children: "Quick Info:"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 779,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1",
                                        children: "Experience: 12+ yrs"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 780,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Current: IT Director"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 781,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Location: Los Angeles"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 782,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3",
                                        style: {
                                            color: colors.accent
                                        },
                                        children: "Currently @ Liquid I.V."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 783,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 border-t pt-2 group cursor-pointer",
                                        style: {
                                            borderColor: colors.text
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: colors.highlight
                                                },
                                                className: "flex items-center gap-1",
                                                children: [
                                                    "▸ Shortcuts ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] opacity-60",
                                                        children: "(hover)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 791,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 790,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden group-hover:block mt-2 space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "~"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 794,
                                                                columnNumber: 20
                                                            }, this),
                                                            " Open Terminal"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 794,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "↑↓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 795,
                                                                columnNumber: 20
                                                            }, this),
                                                            " Navigate Menu"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 795,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 796,
                                                                columnNumber: 20
                                                            }, this),
                                                            " Enter Section"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 796,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "←"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 797,
                                                                columnNumber: 20
                                                            }, this),
                                                            " Go Back"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 797,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "Esc"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 798,
                                                                columnNumber: 20
                                                            }, this),
                                                            " Close/Back"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 798,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 opacity-70",
                                                        children: "Terminal Commands:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 799,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "help"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 800,
                                                                columnNumber: 20
                                                            }, this),
                                                            " List commands"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 800,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "ls"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 801,
                                                                columnNumber: 20
                                                            }, this),
                                                            " List files"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 801,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "neofetch"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 802,
                                                                columnNumber: 20
                                                            }, this),
                                                            " System info"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 802,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "pong"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 803,
                                                                columnNumber: 20
                                                            }, this),
                                                            " Play game!"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 803,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: colors.accent
                                                                },
                                                                children: "reboot"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                                lineNumber: 804,
                                                                columnNumber: 20
                                                            }, this),
                                                            " Restart"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                        lineNumber: 804,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 793,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 786,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        lineNumber: 809,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
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
                                            setPongStarted(false);
                                            setPongWinner(null);
                                            setPongActive(true);
                                            setTerminalOpen(true);
                                            playBeep('enter');
                                        },
                                        className: "mt-2 w-full py-1 text-center cursor-pointer hover:opacity-80",
                                        style: {
                                            background: colors.highlight,
                                            color: colors.bg
                                        },
                                        children: "[ PLAY PONG ]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 822,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 774,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 767,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 702,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 border-2",
                style: {
                    borderColor: colors.text
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-between items-center px-2 py-1 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: colors.highlight
                                                },
                                                children: "↑↓"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 848,
                                                columnNumber: 19
                                            }, this),
                                            ":Select"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 848,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: colors.highlight
                                                },
                                                children: "Enter"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 849,
                                                columnNumber: 19
                                            }, this),
                                            ":Select"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 849,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: colors.highlight
                                                },
                                                children: "Esc"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 850,
                                                columnNumber: 19
                                            }, this),
                                            ":Menu"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 850,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: colors.accent
                                                },
                                                children: "~"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 851,
                                                columnNumber: 19
                                            }, this),
                                            ":Terminal"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 851,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 847,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setTerminalOpen(true);
                                    playBeep('enter');
                                    setTimeout(()=>terminalInputRef.current?.focus(), 50);
                                },
                                className: "md:hidden px-2 py-1 cursor-pointer",
                                style: {
                                    background: colors.accent,
                                    color: colors.bg
                                },
                                children: "[ TERMINAL ]"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 854,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 md:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleSound,
                                        className: "cursor-pointer hover:opacity-80",
                                        title: soundEnabled ? 'Mute sounds' : 'Enable sounds',
                                        style: {
                                            color: colors.text
                                        },
                                        children: soundEnabled ? '🔊' : '🔇'
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 866,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "theme-selector",
                                        children: [
                                            'blue',
                                            'amber',
                                            'green',
                                            'white'
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleThemeChange(t),
                                                className: `theme-btn theme-btn-${t} ${theme === t ? 'active' : ''}`,
                                                title: `${t.charAt(0).toUpperCase() + t.slice(1)} theme`
                                            }, t, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 876,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 874,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: colors.highlight
                                                },
                                                children: "Time:"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 884,
                                                columnNumber: 48
                                            }, this),
                                            " ",
                                            time
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 884,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 865,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 846,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 py-1 text-center text-xs sm:text-sm",
                        style: {
                            background: colors.text,
                            color: colors.bg
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "▲▼ Select Menu Item │ "
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 891,
                                columnNumber: 11
                            }, this),
                            "Email: brandonbibbins@gmail.com",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: " │ Phone: (310) 749-0728"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 891,
                                columnNumber: 106
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                        lineNumber: 887,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 845,
                columnNumber: 7
            }, this),
            terminalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-2xl h-[80vh] md:h-96 mx-2 md:mx-4 p-3 md:p-4 font-mono text-xs md:text-sm overflow-hidden flex flex-col terminal-window",
                    style: {
                        background: '#0a0a0a',
                        border: '2px solid #33ff33',
                        boxShadow: '0 0 20px rgba(51, 255, 51, 0.3)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-2 pb-2 border-b border-[#33ff33]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#33ff33]",
                                    children: "BibbinsTech Terminal v1.0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                    lineNumber: 916,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setTerminalOpen(false);
                                        playBeep('click');
                                    },
                                    className: "text-[#ff5555] hover:text-[#ff8888] cursor-pointer",
                                    children: "[X] Close"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                    lineNumber: 917,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 915,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto text-[#33ff33]",
                            children: pongActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: pongRef,
                                className: "h-full flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#ffff55]",
                                                children: "PONG"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 931,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mx-4",
                                                children: [
                                                    "You: ",
                                                    pongScore.player
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 932,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "CPU: ",
                                                    pongScore.cpu
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 933,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-4 text-[#888888] text-xs",
                                                children: "(W/S or ↑/↓ to move, Q to quit)"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 934,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 930,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 relative border border-[#33ff33]",
                                        style: {
                                            minHeight: '200px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 bottom-0 left-1/2 w-px",
                                                style: {
                                                    background: '#333333',
                                                    borderStyle: 'dashed'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 940,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute w-2 bg-[#33ff33]",
                                                style: {
                                                    left: '3%',
                                                    top: `${playerY - 12}%`,
                                                    height: '24%'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 944,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute w-2 bg-[#ff5555]",
                                                style: {
                                                    right: '3%',
                                                    top: `${cpuY - 12}%`,
                                                    height: '24%'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 952,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute w-3 h-3 bg-[#ffff55] rounded-full",
                                                style: {
                                                    left: `${ballPos.x}%`,
                                                    top: `${ballPos.y}%`,
                                                    transform: 'translate(-50%, -50%)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 960,
                                                columnNumber: 21
                                            }, this),
                                            !pongStarted && !pongWinner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex items-center justify-center bg-black/50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[#ffff55] text-xl mb-2",
                                                            children: "PONG"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 971,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[#33ff33]",
                                                            children: "Press SPACE to Start"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 972,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                    lineNumber: 970,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 969,
                                                columnNumber: 23
                                            }, this),
                                            pongWinner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex items-center justify-center bg-black/50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-xl mb-2 ${pongWinner === 'You' ? 'text-[#33ff33]' : 'text-[#ff5555]'}`,
                                                            children: pongWinner === 'You' ? 'YOU WIN!' : 'CPU WINS!'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 979,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[#888888]",
                                                            children: "Press SPACE to Play Again"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 982,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[#888888] text-xs mt-1",
                                                            children: "or Q to quit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 983,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                    lineNumber: 978,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 977,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 936,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mt-2 text-[#888888] text-xs",
                                        children: "First to 5 wins! Press Q or Esc to quit."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 988,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                lineNumber: 929,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 text-[#888888]",
                                        children: "Type 'help' for available commands. Press Esc to close."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 994,
                                        columnNumber: 19
                                    }, this),
                                    terminalHistory.map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#55ff55]",
                                                            children: "guest@bibbins"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 998,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#ffffff]",
                                                            children: ":"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 999,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#5555ff]",
                                                            children: "~"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 1000,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#ffffff]",
                                                            children: "$ "
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 1001,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: entry.cmd
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                            lineNumber: 1002,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                    lineNumber: 997,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                    className: "whitespace-pre-wrap text-[#aaaaaa] ml-0",
                                                    children: entry.output
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                    lineNumber: 1004,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                            lineNumber: 996,
                                            columnNumber: 21
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#55ff55]",
                                                children: "guest@bibbins"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1008,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#ffffff]",
                                                children: ":"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1009,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#5555ff]",
                                                children: "~"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1010,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#ffffff]",
                                                children: "$ "
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1011,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                lineNumber: 1012,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Brandons__Work$2f$bios$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "terminal-cursor",
                                                children: "▌"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                                lineNumber: 1023,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                                        lineNumber: 1007,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                            lineNumber: 927,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                    lineNumber: 907,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
                lineNumber: 897,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Brandons Work/bios-portfolio/app/page.tsx",
        lineNumber: 689,
        columnNumber: 5
    }, this);
}
_s(Home, "DuBEgS71H+8DRYNUonIb2GBkba4=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Brandons%20Work_bios-portfolio_2e95fcae._.js.map
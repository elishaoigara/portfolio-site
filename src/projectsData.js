// src/projectsData.js
// Add new projects here — Projects.js reads this array directly.
// Each entry needs at minimum: id, title, description, tech, category, code.
// live is optional (omit if there's no deployed demo).

const projects = [
  {
    id: 'finlog',
    title: 'FinLog',
    tagline: 'Expense tracker with visual budgeting',
    year: '2025',
    category: 'Finance',
    problem:
      'Most free budgeting tools are either too simple to be useful or too complex to stick with day to day.',
    description:
      'A personal finance app for logging income and expenses, setting budgets per category, and seeing spending patterns through charts instead of spreadsheets.',
    outcome:
      'Deployed and in daily personal use for tracking real monthly spending.',
    tech: ['React', 'Bootstrap', 'Chart.js', 'Firebase'],
    code: 'https://github.com/elishaoigara/finlog',
    live: 'https://finlog-three.vercel.app/',
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    tagline: 'Live forecast lookup by city',
    year: '2024',
    category: 'Utilities',
    problem:
      'Wanted a fast, no-clutter way to check current conditions and short-term forecast for any city.',
    description:
      'A lightweight weather lookup built on the OpenWeatherMap API, showing current conditions, a multi-day forecast, and background treatment that shifts with the weather.',
    outcome:
      'Live on GitHub Pages; used as a reference build for working with third-party REST APIs and async state.',
    tech: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API'],
    code: 'https://github.com/elishaoigara/weather-app',
    live: 'https://elishaoigara.github.io/weather-app/',
  },
  {
    id: 'portfolio-site',
    title: 'This Portfolio',
    tagline: 'Rebuilt from the ground up',
    year: '2026',
    category: 'Personal',
    problem:
      'The first version of this site had a broken projects grid, mismatched data, and a generic dark-gradient look that didn\u2019t stand out to recruiters.',
    description:
      'A full redesign and rebuild: fixed the underlying data/render bugs, moved to a warm editorial visual system, and restructured the content around what hiring managers actually scan for.',
    outcome:
      'What you\u2019re looking at right now.',
    tech: ['React', 'Bootstrap', 'Framer Motion', 'AOS'],
    code: 'https://github.com/elishaoigara/portfolio-site',
    live: null,
  },
  {
    id: 'nia',
    title: 'Nia',
    tagline: 'Pan-African social platform — Feed, Circles, Flicks & DMs',
    year: '2026',
    category: 'AI Products',
    problem:
      'African youth (18–35) are underserved by social platforms built for Western data speeds and single-language, single-country assumptions — and existing apps don\u2019t plug into local payment rails like M-Pesa.',
    description:
      'A full pan-African social network: ranked feed, community Circles, short-form video (Flicks), and real-time DMs — built mobile-first for metered data. The AI layer runs on the Claude API for two production features: caption suggestions tuned to sound like real youth voice (not corporate copy), and live Swahili↔English translation baked directly into the feed. Custom ranking algorithms (loosely modeled on X\u2019s open-sourced approach) weight engagement, language, and country match differently for text posts vs. short video, where completion rate and watch time dominate. M-Pesa STK Push is wired in as a first-class payment path, not an afterthought.',
    outcome:
      'Shipped as a working multi-feature platform with AI-assisted captioning/translation, custom feed-ranking logic, and native mobile money integration.',
    tech: ['Next.js 16', 'React 19', 'Supabase', 'Claude API', 'M-Pesa Daraja API', 'Tailwind v4'],
    code: 'https://github.com/elishaoigara/Nia',
    live: null,
  },
  {
    id: 'ora-coding-agent',
    title: 'ORA Coding Agent',
    tagline: 'Personal AI coding agent, deployable anywhere',
    year: '2026',
    category: 'AI Products',
    problem:
      'Wanted the power of an in-editor AI pair programmer without being locked into one model vendor or one machine — most coding assistants tie you to a single provider and a single desktop install.',
    description:
      'A password-protected, browser-based AI coding agent with streaming chat, GitHub repo browsing, and one-line provider swapping across Groq, DeepSeek, OpenAI, and Anthropic — architected so adding a new model or a brand-new provider is a small, isolated change in one config file rather than a rewrite. Runs locally in VS Code during development and deploys to Vercel for access from any device.',
    outcome:
      'Live personal tool: switches AI providers/models with a single environment variable change, no code redeploy required.',
    tech: ['Next.js', 'TypeScript', 'Groq', 'DeepSeek', 'OpenAI', 'Anthropic API', 'Vercel'],
    code: 'https://github.com/elishaoigara/ORA-coding-agent',
    live: null,
  },
  {
    id: 'ora-assistant',
    title: 'ORA',
    tagline: 'Personal AI assistant with memory and real-world actions',
    year: '2026',
    category: 'AI Products',
    problem:
      'Chat-only AI assistants forget everything between sessions and can\u2019t actually do anything — they can\u2019t check a calendar, send a message, or learn a person\u2019s routines over time.',
    description:
      'A FastAPI-backed personal assistant reachable through Telegram, built around an intent-parsing engine that routes natural-language requests to the right tool (calendar, tasks, briefings, M-Pesa) instead of just replying in chat. Long-term memory and context recall run on ChromaDB for retrieval-augmented generation, with Groq powering fast LLM inference and a pattern engine that learns recurring user habits over time to proactively surface daily briefings.',
    outcome:
      'Running as a personal daily-use assistant with persistent memory, scheduled briefings, and tool-calling across calendar and payments.',
    tech: ['Python', 'FastAPI', 'Groq', 'ChromaDB (RAG)', 'Telegram Bot API', 'M-Pesa API'],
    code: 'https://github.com/elishaoigara/ORA',
    live: null,
  },
  {
    id: 'noveltyscholars',
    title: 'NoveltyScholars',
    tagline: 'Academic writing order platform',
    year: '2026',
    category: 'Business Platforms',
    problem:
      'Academic writing services typically run on scattered email threads and manual invoicing, with no real-time visibility for either the student or the writer once an order is placed.',
    description:
      'A full-stack order management platform for academic writing services: students submit orders with subject, academic level, page/word count and deadline, track status end-to-end, and message assigned writers in real time. Admins get a dedicated dashboard to manage orders, assign work, and handle file delivery. Built on Supabase Realtime for live order-status and messaging updates, with Zod-validated forms end to end.',
    outcome:
      'Complete order-to-delivery workflow: real-time status tracking, in-order messaging, and file handoff between student and writer.',
    tech: ['Next.js 15', 'TypeScript', 'Supabase', 'React Hook Form', 'Zod', 'shadcn/ui'],
    code: 'https://github.com/elishaoigara/Noveltyscholars',
    live: null,
  },
  {
    id: 'pos-manager',
    title: 'POS Manager Platform',
    tagline: 'Multi-branch point-of-sale system for Kenyan retail kiosks',
    year: '2026',
    category: 'Business Platforms',
    problem:
      'Small multi-branch retail operators need real POS functionality — shifts, cash counters, staff roles, multi-branch inventory — without paying for bloated enterprise POS software.',
    description:
      'A complete POS platform covering checkout, sales history, shift and cash-counter management, staff roles, product/inventory tracking, and per-branch settings, all from a single admin dashboard. Started life as a v0-generated scaffold and was taken through a full bug-audit-and-fix pass to get it production-ready — sales dialogs, shift handoffs, and admin settings all hardened for real kiosk use.',
    outcome:
      'Production-ready POS covering the full retail floor workflow: sales, shifts, counters, staff, and multi-branch admin.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'shadcn/ui', 'Tailwind CSS'],
    code: 'https://github.com/elishaoigara/ora-pos-manager-platform',
    live: null,
  },
  // Add more projects here as needed
];

export default projects;
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
      'Most free budgeting tools lack intuitive visualization, making daily expense tracking feel like a chore rather than an actionable habit.',
    description:
      'Engineered a React-based personal finance dashboard that replaces static spreadsheets with interactive Chart.js visualizations. Implemented Firebase for secure, real-time data synchronization across devices, allowing users to log transactions and monitor budget thresholds instantly.',
    outcome:
      'Delivered a production-ready application that successfully handles daily transaction logging and visual budget tracking with zero data-loss incidents.',
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
      'Existing social platforms ignore African infrastructure realities—such as metered data constraints and multi-lingual user bases—and fail to integrate with dominant local payment rails like M-Pesa.',
    description:
      'Architected a mobile-first, Next.js 16 social platform optimized for low-bandwidth environments. Integrated the Claude API to power context-aware caption generation and real-time Swahili↔English feed translation. Designed a custom engagement-based ranking algorithm for the feed and implemented seamless M-Pesa STK Push payments to support local creator monetization.',
    outcome:
      'Successfully shipped a scalable, multi-feature platform that bridges the gap between modern social networking and localized African infrastructure requirements.',
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
      'Commercial AI coding assistants lock developers into specific vendors and local desktop environments, limiting flexibility and cross-device access.',
    description:
      'Developed a highly modular, browser-based AI coding agent supporting streaming chat and GitHub repository traversal. Architected an abstraction layer that allows instant switching between Groq, DeepSeek, OpenAI, and Anthropic models via a single configuration change, completely decoupling the UI from the underlying LLM provider.',
    outcome:
      'Deployed a secure, cloud-accessible coding assistant that eliminates vendor lock-in and allows seamless model swapping without code redeployment.',
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
      'Small, multi-branch retail operators require robust POS features—like shift management and multi-location inventory—but are priced out of bloated enterprise solutions.',
    description:
      'Engineered a comprehensive, Next.js-based POS platform tailored for Kenyan retail kiosks. Developed secure workflows for shift handoffs, cash-counter reconciliation, and multi-branch inventory tracking via Supabase. Conducted rigorous security and bug audits to harden the system for high-volume, real-world retail environments.',
    outcome:
      'Delivered a production-ready, scalable POS system that successfully digitizes the entire retail floor workflow across multiple physical locations.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'shadcn/ui', 'Tailwind CSS'],
    code: 'https://github.com/elishaoigara/9-pos-manager-platform',
    live: null,
  },
  // Add more projects here as needed
];

export default projects;
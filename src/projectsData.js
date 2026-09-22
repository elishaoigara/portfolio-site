// Curated against repository documentation and metadata on 22 September 2026.
// Private source stays private; no user metrics or launch claims are inferred.
const projects = [
  {
    id: "ora-coding-agent",
    title: "ORA Coding Agent",
    label: "AI developer tools",
    category: "AI systems",
    tagline: "From an idea to a reviewable code change.",
    description:
      "A browser-based coding workspace that connects AI reasoning with GitHub repositories, structured plans, and human-reviewed changes.",
    problem:
      "AI-generated code needs context, clear boundaries, and a review process before it belongs in a repository.",
    implementation:
      "Built repository exploration, streaming conversations, plan approval, staged diffs, and branch-based commits. A provider abstraction supports multiple model services, with bounded execution and validation around file changes.",
    value:
      "Demonstrates agent orchestration, API integration, streaming interfaces, and thoughtful human-in-the-loop product design.",
    scope:
      "Personal developer tool. Terminal workspaces are ephemeral; changes still need verification before merging.",
    tech: ["Next.js", "TypeScript", "LLM APIs", "GitHub API"],
    code: "https://github.com/elishaoigara/ORA-coding-agent",
    status: "Public source",
    visual: "agent",
  },
  {
    id: "ora-pos",
    title: "ORA POS",
    label: "Retail operations",
    category: "Business platforms",
    tagline: "One connected workflow for the retail floor.",
    description:
      "Cashier tills, self-checkout, branch inventory, and manager reporting brought into one retail platform for the Kenyan market.",
    problem:
      "Retail teams need checkout, stock, shifts, and branch reporting to stay consistent as sales move through the store.",
    implementation:
      "Built role-based cashier and manager workflows, branch-scoped inventory, atomic sale operations, shift reconciliation, and M-Pesa payment integration.",
    value:
      "Demonstrates transactional workflows, payment integration, access control, and software designed around real business operations.",
    scope:
      "Commercial checkout foundation. Production integrations and acceptance testing remain release gates. Source is private.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "M-Pesa"],
    status: "Private source · in development",
    visual: "pos",
  },
  {
    id: "nia",
    title: "Nia",
    label: "Social & community",
    category: "Web experiences",
    tagline: "An African perspective on staying connected.",
    description:
      "A mobile-first social platform with feeds, Circles, short videos, stories, and direct messaging, with AI caption and translation assistance.",
    problem:
      "A community product needs to make discovery, expression, and conversation feel connected across different devices and network conditions.",
    implementation:
      "Built a ranked feed, Circles, Flicks, direct messages, profiles, and media workflows. Connected authentication, realtime updates, and storage with caption and translation assistance.",
    value:
      "Demonstrates complex frontend state, realtime features, media handling, and a coherent product experience across many user journeys.",
    scope:
      "Independent product in active development. No adoption or revenue metrics are claimed.",
    tech: ["Next.js", "TypeScript", "Realtime", "AI integration"],
    code: "https://github.com/elishaoigara/Nia",
    live: "https://nia-rho.vercel.app",
    status: "Public source",
    visual: "nia",
  },
  {
    id: "samaritan",
    title: "Samaritan AI",
    label: "Business & brand",
    category: "Web experiences",
    tagline: "Making business automation easier to understand.",
    description:
      "A complete business website that turns a broad AI services offering into clear solutions, approachable explanations, and a structured enquiry journey.",
    problem:
      "Businesses need to understand where automation fits before they can scope a useful project.",
    implementation:
      "Built a searchable solutions catalogue, individual service pages, a clearly labelled interactive workflow demonstration, pricing filters, and a validated enquiry flow.",
    value:
      "Demonstrates product positioning, responsive visual design, content architecture, and conversion-focused frontend development.",
    scope:
      "Business website with illustrative demos. Enquiry delivery depends on configured email credentials.",
    tech: ["Next.js", "React", "TypeScript", "CSS"],
    code: "https://github.com/elishaoigara/samaritanai",
    live: "https://samaritanai-nine.vercel.app",
    status: "Public source",
    visual: "samaritan",
  },
  {
    id: "callcare",
    title: "CallCare BPO",
    label: "Business & recruitment",
    category: "Business platforms",
    tagline: "A business presence with a practical hiring workflow.",
    description:
      "A BPO company website paired with job applications and recruitment tools, connecting a public-facing brand with day-to-day operations.",
    problem:
      "A recruitment website has to do more than describe vacancies: it needs a usable application journey and a reliable way to review submissions.",
    implementation:
      "Built business pages and recruitment flows with application submission, CV file validation, and recruiter access. The repository includes tests around submission and recruitment workflows.",
    value:
      "Demonstrates business website delivery, form design, file handling, and attention to the operational details behind a public interface.",
    scope:
      "Client website and recruitment workflow. Applicant information is never included in this portfolio.",
    tech: ["React", "TypeScript", "Forms", "Access control"],
    code: "https://github.com/elishaoigara/callcare-bpo-website",
    live: "https://callcare-bpo-website.vercel.app",
    status: "Public source",
    visual: "callcare",
  },
  {
    id: "ora-assistant",
    title: "ORA Personal AI",
    label: "AI & cross-device",
    category: "AI systems",
    tagline: "Personal context, brought into one workspace.",
    description:
      "A personal AI workspace spanning web and Android, with conversations, tasks, reminders, memory, document context, and reviewable actions.",
    problem:
      "Useful personal assistance needs persistent context and practical tools that remain understandable and under the user’s control.",
    implementation:
      "Connected a React web client and Android companion to a FastAPI backend, with synchronized workspace data, voice transcription, task proposals, and local Android reminders.",
    value:
      "Demonstrates Python API development, AI integration, cross-device state, and privacy-conscious interaction design.",
    scope:
      "The current Mini rebuild is in development and is not presented as a deployed upgrade. Source is private.",
    tech: ["Python", "FastAPI", "React", "Android / Expo"],
    status: "Private source · in development",
    visual: "assistant",
  },
];
export default projects;

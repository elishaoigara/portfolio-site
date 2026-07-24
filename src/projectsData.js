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
  // Add more projects here as needed
];

export default projects;

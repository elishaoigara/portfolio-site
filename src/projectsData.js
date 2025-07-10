// src/projectsData.js

const projects = [
  {
    title: 'FinLog – Expense Tracker',
    description:
      'A modern personal finance app to track income, expenses, and budgets with visual charts.',
    tech: ['React', 'Bootstrap', 'Chart.js', 'Firebase'],
    github: 'https://github.com/elishaoigara/finlog',
    demo: 'https://finlog-three.vercel.app/',
    image: '/assets/finlog-thumb.png', // optional
    category: 'Finance',
  },
  {
    title: 'Portfolio Website',
    description:
      'My personal developer portfolio featuring animations, particle background, and responsive sections.',
    tech: ['React', 'Bootstrap', 'Framer Motion', 'Vercel'],
    github: 'https://github.com/elishaoigara/portfolio-site',
    demo: 'https://elisha-portfolio.vercel.app/',
    category: 'Personal',
  },
  {
    title: 'Weather App',
    description:
      'Weather app using OpenWeatherMap API to show current weather, forecasts, and dynamic backgrounds.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    github: 'https://github.com/elishaoigara/weather-app',
    demo: 'https://elishaoigara.github.io/weather-app/',
    category: 'Utilities',
  },
  // Add more projects here as needed
];

export default projects;

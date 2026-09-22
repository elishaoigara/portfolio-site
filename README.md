# Elisha Oigara — Portfolio

A responsive React portfolio for a Nairobi-based full-stack developer and AI product builder. The site leads with six selected projects, useful capabilities, and clear ways to start a conversation.

## Run locally

```sh
npm ci
npm start
```

## Quality checks

```sh
CI=true npm test -- --watchAll=false --runInBand
CI=true npm run build
npx playwright install chromium
npm run test:e2e
```

Playwright starts the development server automatically. Set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` only when using an existing Chromium installation. Browser checks cover project filters, dialogs and focus restoration, private source boundaries, keyboard tabs, contact validation, mobile navigation, section links, overflow at 320/375/768/1440 pixels, and automated accessibility scans.

## Contact

The existing contact email is `elishaoigara50@gmail.com`.

By default, the form validates the visitor's details and prepares a `mailto:` draft. It explicitly asks the visitor to send that draft in their email app; it does not claim delivery. A direct email link is always visible.

To enable EmailJS delivery, configure these build-time environment variables:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

The template receives `name`, `email`, and `message`. Configure your EmailJS allowed origins and provider anti-abuse settings. Verify real delivery on the deployed domain with a test you authorize. These checks do not send messages. Errors preserve the visitor's input.

## Content maintenance

- `src/projectsData.js`: project order, categories, copy, stack, source links, optional website links, and development scope.
- `src/components/ProjectVisual.js`: original CSS/HTML product illustrations. They are labelled as illustrative previews, not screenshots or live customer data.
- `src/index.css`: responsive design system, focus styling, reduced motion, and self-hosted fonts.
- `public/index.html`: description, canonical URL, social sharing and Person structured data.
- `public/social-card.png`, favicon and app icons: matching personal branding.

Project selection was checked against current GitHub documentation and metadata on 22 September 2026. ORA Coding Agent, ORA POS, Nia, Samaritan AI, CallCare BPO, and ORA Personal AI demonstrate complementary capabilities. ORA and ORA POS source remains private. Their production status is qualified in the case studies. No adoption, revenue, client-results, or uptime figures are invented.

Samaritan AI, Nia and CallCare website links were checked for an HTTP 200 response and matching page title. This does not establish that every deployed product workflow is production-ready. The other projects use source or enquiry links rather than unverified live demos.

This portfolio intentionally curates high-value work instead of fetching every repository at runtime. Updating GitHub alone does not change the project list. Revisit the content file when adding a project or changing its status.

The old skills inventory, older exercises and self-referential portfolio card were replaced with current, capability-focused content. Source review also corrected an outdated POS URL and unsupported architecture/payment/production claims.

## Deployment

Run `npm run build` and deploy `build/` using the existing Create React App hosting configuration. The canonical URL is currently `https://portfolio-site-jade-phi.vercel.app/`; update `public/index.html`, `public/sitemap.xml`, and `public/robots.txt` together if the domain changes.

Fonts are self-hosted. Their SIL Open Font Licenses are in `public/fonts/`. The site does not fetch Google Fonts or run an analytics script.

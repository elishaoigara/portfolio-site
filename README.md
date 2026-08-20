# Elisha Oigara - Portfolio Site

This repository contains the source code for my personal portfolio website. It showcases my projects, skills, and experience as a Full-Stack Software Engineer.

## Tech Stack

*   **Frontend:** React.js
*   **Styling:** Custom CSS with CSS Variables
*   **Animations:** Framer Motion, AOS (Animate On Scroll)
*   **Form Handling:** EmailJS

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/elishaoigara/portfolio-site.git
    cd portfolio-site
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    To enable the contact form, you will need to set up an EmailJS account and provide the following environment variables. Create a `.env` file in the root directory:
    ```env
    REACT_APP_EMAILJS_SERVICE_ID=your_service_id
    REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
    REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
    ```
    *Note: The contact form will gracefully fall back to a direct `mailto:` link if these variables are not present.*

4.  **Start the development server:**
    ```bash
    npm start
    ```
    The application will be available at `http://localhost:3000`.

## Deployment

This project is configured as a standard Create React App. To build the project for production:

```bash
npm run build
```

The output will be generated in the `build/` directory, ready to be deployed to platforms like Vercel, Netlify, or GitHub Pages.

## Author

Developed by Elisha Oigara.

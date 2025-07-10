import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ Bootstrap JS for toggles, modals, etc.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome icons

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/bootstrap.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/custom.css';
import './i18n.js';
import App from './App.jsx';

// Mode maintenance (client-side, comme l'original)
fetch(`${import.meta.env.BASE_URL}maintenance.json`, { cache: 'no-store' })
  .then((r) => (r.ok ? r.json() : null))
  .then((cfg) => {
    if (cfg && cfg.enabled === true) {
      window.location.replace(`${import.meta.env.BASE_URL}maintenance.html`);
    }
  })
  .catch(() => {});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
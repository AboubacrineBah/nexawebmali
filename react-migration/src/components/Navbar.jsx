import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LANGS = ['fr', 'en', 'bm', 'zh', 'ru'];

export default function Navbar({ lang = 'fr' }) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg fixed-top nx-navbar" data-bs-theme="dark" aria-label="Navigation principale">
      <div className="container">
        <Link className="navbar-brand" to={`/${lang === 'fr' ? '' : lang + '/'}`}>NexaWeb Mali</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Ouvrir le menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to={`/${lang === 'fr' ? '' : lang + '/'}a-propos`}>À propos</Link></li>
            <li className="nav-item"><Link className="nav-link" to={`/${lang === 'fr' ? '' : lang + '/'}services`}>{t('nav.services')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to={`/${lang === 'fr' ? '' : lang + '/'}realisations`}>{t('nav.realisations')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to={`/${lang === 'fr' ? '' : lang + '/'}contact`}>{t('nav.contact')}</Link></li>
          </ul>
          <select className="form-select form-select-sm ms-3" style={{ width: 'auto' }} defaultValue={lang} aria-label="Choisir la langue" onChange={(e) => {
            const target = e.target.value;
            const path = location.pathname.replace(/^\/(fr|en|bm|zh|ru)\//, '/').replace(/^\/(fr|en|bm|zh|ru)$/, '/');
            const prefix = target === 'fr' ? '' : `/${target}`;
            window.location.hash = `#${prefix}${path === '/' ? '' : path}`;
            i18n.changeLanguage(target);
          }}>
            {LANGS.map((l) => <option key={l} value={l}>{l.toUpperCase()}</option>)}
          </select>
        </div>
      </div>
    </nav>
  );
}
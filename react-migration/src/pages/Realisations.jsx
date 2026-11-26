import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { PROJECTS } from '../data/projects.js';

const BASE = import.meta.env.BASE_URL;
const CATS = ['all', 'wordpress', 'vitrine', 'ecommerce', 'react', 'gestion'];
const PER_PAGE = 6;

const IMG_MAP = {
  'nexaweb-mali-wordpress': 'assets/images/nexaweb-mali-wordpress/NexaWeb Mali.png',
  'nexaweb-mali-bootstrap': "assets/images/nexaweb-mali-bootstrap/Page d'acceuil section hero.jpeg",
  'afrique-artisanat': 'assets/images/afrique-artisanat/public/accueil.png',
  'association-jigi': 'assets/images/jigi-dons/desktop/1 · Tableau de bord (desktop)@1x.png',
  'nexastock': 'assets/images/nexastock/dashboard.png',
  'nexagestion': 'assets/images/nexagestion/tableau-de-bord.png',
};

export default function Realisations({ lang = 'fr' }) {
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [preview, setPreview] = useState(null);
  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const list = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);
  const prefix = lang === 'fr' ? '' : `/${lang}`;

  return (
    <Layout lang={lang}>
      <section className="nx-dark nx-hero py-5">
        <div className="container py-lg-5">
          <h1>Nos réalisations</h1>
          <p className="lead nx-muted">Un aperçu de notre travail.</p>
        </div>
      </section>
      <section className="py-5 nx-alt">
        <div className="container">
          <ul className="list-group nx-muted mb-4">
            <li className="list-group-item">Les projets marqués <span className="badge text-bg-primary mb-2">Projet de démonstration</span> ont été conçus par NexaWeb Mali pour montrer notre méthode et notre niveau de finition.</li>
            <li className="list-group-item">Les projets marqués <span className="badge text-bg-warning mb-2">Projet en production</span> sont des réalisations en cours de développement.</li>
          </ul>
          <div className="mb-3">
            {CATS.map((c) => (
              <button key={c} type="button" className={`btn btn-sm me-2 mb-2 ${filter === c ? 'btn-nx' : 'btn-outline-nx'}`} onClick={() => { setFilter(c); setPage(1); }} aria-pressed={filter === c}>
                {c}
              </button>
            ))}
          </div>
          <div className="row g-4">
            {list.map((p) => {
              const img = IMG_MAP[p.slug];
              return (
                <div className="col-md-6 col-lg-4" key={p.slug} data-cat={p.category}>
                  <article className="nx-card h-100 overflow-hidden">
                    {img && (
                      <div className="ratio" style={{ '--bs-aspect-ratio': '62.5%' }}>
                        <img className="w-100 h-100 object-fit-cover" src={`${BASE}${img}`} alt={p.title} />
                      </div>
                    )}
                    <div className="p-4">
                      <span className="badge text-bg-primary mb-2">Projet de démonstration</span>
                      <h3 className="h5">{p.title}</h3>
                      <p>{p.desc}</p>
                      <p>{p.tags.map((t) => <span key={t} className="badge text-bg-light border me-1">{t}</span>)}</p>
                      <Link to={`${prefix}/realisations/${p.slug}`} className="btn btn-sm btn-outline-nx">Lire l’étude de cas</Link>
                      <button type="button" className="btn btn-sm btn-outline-nx ms-2" onClick={() => setPreview(p)}>Aperçu</button>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
          {totalPages > 1 && (
            <nav className="mt-4" aria-label="Pagination">
              <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link btn-outline-nx" onClick={() => setPage((p) => Math.max(1, p - 1))}>Précédent</button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <li key={n} className={`page-item ${n === currentPage ? 'active' : ''}`}>
                    <button className={`page-link ${n === currentPage ? 'btn-nx' : 'btn-outline-nx'}`} onClick={() => setPage(n)}>{n}</button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button className="page-link btn-outline-nx" onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>Suivant</button>
                </li>
              </ul>
            </nav>
          )}
          {preview && (
            <div className="modal d-block" tabIndex="-1" role="dialog" onClick={() => setPreview(null)}>
              <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{preview.title}</h5>
                    <button type="button" className="btn-close" onClick={() => setPreview(null)} aria-label="Fermer"></button>
                  </div>
                  <div className="modal-body">
                    {IMG_MAP[preview.slug] && (
                      <div className="ratio mb-3" style={{ '--bs-aspect-ratio': '62.5%' }}>
                        <img className="w-100 h-100 object-fit-cover rounded" src={`${BASE}${IMG_MAP[preview.slug]}`} alt={preview.title} />
                      </div>
                    )}
                    <p>{preview.desc}</p>
                    <div>
                      <strong>Technologies :</strong>{' '}
                      {preview.tags.map((t) => (
                        <span key={t} className="badge text-bg-light border me-1">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-nx" onClick={() => setPreview(null)}>Fermer</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="py-5 nx-alt">
        <div className="container">
          <div className="nx-card p-4 p-lg-5">
            <div className="row g-4 align-items-center">
              <div className="col-lg-7">
                <h2>Parlons de votre projet</h2>
                <p className="nx-muted">Un devis clair, un interlocuteur unique, des coûts annoncés à l'avance.</p>
                <div className="d-flex flex-wrap gap-3 mt-3">
                  <Link to="/contact" className="btn btn-nx btn-lg">Demander un devis</Link>
                  <a className="btn btn-outline-nx btn-lg" href="https://wa.me/22382890992" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-whatsapp me-2"></i>WhatsApp
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><i className="bi bi-envelope me-2"></i><a href="mailto:aboubacrinebah@nexawebmali.com">aboubacrinebah@nexawebmali.com</a></li>
                  <li className="mb-2"><i className="bi bi-telephone me-2"></i><a href="tel:+22382890992">+223 82 89 09 92</a></li>
                  <li className="mb-2"><i className="bi bi-geo-alt me-2"></i>Bamako, Mali</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
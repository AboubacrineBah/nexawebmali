import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { PROJECTS } from '../data/projects.js';

const CATS = ['all', 'wordpress', 'vitrine', 'ecommerce', 'react', 'gestion'];

export default function Realisations({ lang = 'fr' }) {
  const [filter, setFilter] = useState('all');
  const [preview, setPreview] = useState(null);
  const list = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const prefix = lang === 'fr' ? '' : `/${lang}`;
  return (
    <Layout lang={lang}>
      <section className="py-5 nx-alt">
        <div className="container">
          <h1>Nos réalisations</h1>
          <p className="nx-muted mb-4">Un aperçu de notre travail.</p>
          <ul className="list-group nx-muted mb-4">
            <li className="list-group-item">Les projets marqués <span className="badge text-bg-primary mb-2">Projet de démonstration</span> ont été conçus par NexaWeb Mali pour montrer notre méthode et notre niveau de finition.</li>
          </ul>
          <div className="mb-3">
            {CATS.map((c) => (
              <button key={c} type="button" className={`btn btn-sm me-2 ${filter === c ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setFilter(c)} aria-pressed={filter === c}>
                {c}
              </button>
            ))}
          </div>
          <div className="row g-4">
            {list.map((p) => (
              <div className="col-md-6 col-lg-4" key={p.slug} data-cat={p.category}>
                <article className="nx-card h-100 overflow-hidden">
                  <div className="p-4">
                    <span className="badge text-bg-primary mb-2">Projet de démonstration</span>
                    <h3 className="h5">{p.title}</h3>
                    <p>{p.desc}</p>
                    <p>
                      {p.tags.map((t) => (
                        <span key={t} className="badge text-bg-light border me-1">{t}</span>
                      ))}
                    </p>
                    <Link to={`${prefix}/realisations/${p.slug}`} className="btn btn-sm btn-outline-nx">Lire l’étude de cas</Link>
                    <button type="button" className="btn btn-sm btn-outline-secondary ms-2" onClick={() => setPreview(p)}>Aperçu</button>
                  </div>
                </article>
              </div>
            ))}
          </div>
          {preview && (
            <div className="modal d-block" tabIndex="-1" role="dialog" onClick={() => setPreview(null)}>
              <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{preview.title}</h5>
                    <button type="button" className="btn-close" onClick={() => setPreview(null)} aria-label="Fermer"></button>
                  </div>
                  <div className="modal-body">
                    <p>{preview.desc}</p>
                    <p>{preview.tags.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
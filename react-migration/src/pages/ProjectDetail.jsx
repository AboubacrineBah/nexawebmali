import { useParams, Navigate } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { PROJECTS } from '../data/projects.js';

const BASE = import.meta.env.BASE_URL;

export default function ProjectDetail({ lang }) {
  const params = useParams();
  const l = lang || (params.lang && ['fr','en','bm','zh','ru'].includes(params.lang) ? params.lang : 'fr');
  const slug = params.slug;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return <Navigate to="/" replace />;
  return (
    <Layout lang={l}>
      <section className="nx-dark nx-hero py-5">
        <div className="container py-lg-5">
          <h1>{project.title}</h1>
          <p className="lead nx-muted">{project.desc}</p>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              {project.image && (
                <div className="ratio mb-4" style={{ '--bs-aspect-ratio': '62.5%' }}>
                  <img className="w-100 h-100 object-fit-cover rounded" src={`${BASE}${project.image}`} alt={project.title} />
                </div>
              )}
              <h2>Étude de cas</h2>
              <p>{project.longDesc}</p>
            </div>
            <div className="col-lg-5">
              <div className="nx-card p-4">
                <span className={`badge ${project.badge === 'demo' ? 'text-bg-primary' : 'text-bg-warning'} mb-3`}>
                  {project.badge === 'demo' ? 'Projet de démonstration' : 'Projet en production'}
                </span>
                <h3 className="h5">Catégorie</h3>
                <p>{project.category}</p>
                <h3 className="h5">Technologies</h3>
                <p>{project.tags.map((t) => <span key={t} className="badge text-bg-light border me-1">{t}</span>)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
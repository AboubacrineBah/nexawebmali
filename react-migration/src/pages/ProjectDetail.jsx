import { useParams, Navigate } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { PROJECTS } from '../data/projects.js';

export default function ProjectDetail({ lang }) {
  const params = useParams();
  const l = lang || (params.lang && ['fr','en','bm','zh','ru'].includes(params.lang) ? params.lang : 'fr');
  const slug = params.slug;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return <Navigate to="/" replace />;
  return (
    <Layout lang={l}>
      <div className="container py-5">
        <h1>{project.title}</h1>
        <p>{project.desc}</p>
        <p className="text-muted">Catégorie : {project.category}</p>
      </div>
    </Layout>
  );
}
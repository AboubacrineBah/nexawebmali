import { HashRouter, Routes, Route, useParams } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Realisations = lazy(() => import('./pages/Realisations.jsx'));
const APropos = lazy(() => import('./pages/APropos.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const Legal = lazy(() => import('./pages/Legal.jsx'));
const Maintenance = lazy(() => import('./pages/Maintenance.jsx'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'));

const LANGS = ['fr', 'en', 'bm', 'zh', 'ru'];

function Page() {
  const { lang, '*': splat } = useParams();
  const l = lang && LANGS.includes(lang) ? lang : 'fr';
  const path = splat || '';
  if (path === 'services') return <Services lang={l} />;
  if (path.startsWith('realisations/')) return <ProjectDetail lang={l} />;
  if (path === 'realisations') return <Realisations lang={l} />;
  if (path === 'contact') return <Contact lang={l} />;
  if (path === 'a-propos') return <APropos lang={l} />;
  if (path === 'mentions-legales') return <Legal lang={l} type="mentions" />;
  if (path === 'confidentialite') return <Legal lang={l} type="confidentialite" />;
  if (path === 'maintenance') return <Maintenance />;
  return <NotFound lang={l} />;
}

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div className="container py-5">Chargement…</div>}>
        <Routes>
          <Route path="/" element={<Home lang="fr" />} />
          <Route path="/realisations/:slug" element={<ProjectDetail lang="fr" />} />
          <Route path="/:lang/realisations/:slug" element={<ProjectDetail />} />
          <Route path="/:lang/*" element={<Page />} />
          <Route path="*" element={<NotFound lang="fr" />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
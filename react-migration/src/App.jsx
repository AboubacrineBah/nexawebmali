import { HashRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Realisations from './pages/Realisations.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import APropos from './pages/APropos.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Legal from './pages/Legal.jsx';
import Maintenance from './pages/Maintenance.jsx';

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
      <Routes>
        <Route path="/" element={<Home lang="fr" />} />
        <Route path="/realisations/:slug" element={<ProjectDetail lang="fr" />} />
        <Route path="/:lang/realisations/:slug" element={<ProjectDetail />} />
        <Route path="/:lang/*" element={<Page />} />
        <Route path="*" element={<NotFound lang="fr" />} />
      </Routes>
    </HashRouter>
  );
}
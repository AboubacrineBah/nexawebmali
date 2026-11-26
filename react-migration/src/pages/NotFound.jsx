import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
export default function NotFound({ lang = 'fr' }) {
  return (
    <Layout lang={lang}>
      <div className="container py-5 text-center">
        <h1>404</h1>
        <p>Page introuvable.</p>
        <Link to="/" className="btn btn-primary">Accueil</Link>
      </div>
    </Layout>
  );
}
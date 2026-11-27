import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function Layout({ lang = 'fr', children }) {
  return (
    <>
      <a className="visually-hidden-focusable" href="#main">Aller au contenu</a>
      <Navbar lang={lang} />
      <main id="main" tabIndex="-1">{children}</main>
      <Footer />
    </>
  );
}
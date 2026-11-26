import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function Layout({ lang = 'fr', children }) {
  return (
    <>
      <Navbar lang={lang} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
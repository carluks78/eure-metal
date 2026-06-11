import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWidget } from './components/FloatingWidget';

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        /* Global reset for box-sizing & images */
        *, *::before, *::after { box-sizing: border-box; }
        img { max-width: 100%; }

        /* Responsive padding top for header offset
           top-bar 32px + main-header 68px + border 2px = 102px */
        .page-offset { padding-top: 102px; }

        /* Ensure body doesn't scroll when mobile menu is open */
        body.menu-open { overflow: hidden; }

        /* Smooth scroll */
        html { scroll-behavior: smooth; }
      `}</style>
      <Header />
      <main style={{ flex: 1, paddingTop: '102px' }}>
        <Outlet />
      </main>
      <Footer />
      <FloatingWidget />
    </div>
  );
}

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { Phone, Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import logoImg from '../../imports/LOGO-EM.png';

const GREEN = '#3A8C3E';
const DARK = '#111827';

const marqueeItems = [
  '📞 02 32 37 29 86 — Réponse rapide',
  '🚗 Enlèvement épave GRATUIT sous 24h',
  '✅ Centre VHU Agréé PR2700026D — ICPE 2712 & 2713',
  '💰 Rachat métaux — Paiement comptant après pesée certifiée',
  '🗺️ Normandie & Île-de-France — 5 Départements couverts',
  '🏭 EURE MÉTAL RECYCLAGE — Ferrailleur depuis 1994',
  "⚡ Débarras d'usine · Location bennes · Démolition sur site",
  '📍 Chavigny-Bailleul (Eure 27) — Ouverts du Lun. au Sam.',
];

const navLinks = [
  { label: 'Accueil', to: '/' },
  {
    label: 'Achat',
    to: '/achats',
    children: [
      { label: 'Fer et Métaux au détail', to: '/achats#fer-metaux', desc: 'Paiement comptant, pesée certifiée' },
      { label: 'Poids Lourds, TP & Agricole', to: '/achats#poids-lourds', desc: 'Roulants ou non roulants' },
    ],
  },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: "Enlèvement d'épave", to: '/services/enlevement-epave', desc: '100% gratuit, centre VHU agréé' },
      { label: 'Démolition & Découpage', to: '/services/demolition-decoupe', desc: 'Structures métalliques sur site' },
      { label: 'Location de Bennes', to: '/services/location-bennes', desc: 'Livraison chantiers & industries' },
      { label: "Débarras d'usine", to: '/services/debarras-usine', desc: 'Évacuation industrielle complète' },
    ],
  },
  { label: 'Zones', to: '/zones' },
  { label: 'Contact', to: '/contact' },
];

// HEADER HEIGHT: top bar 32px + main 68px + border 2px = 102px
const HEADER_H = 102;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenSub, setMobileOpenSub] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileOpenSub(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  const marqueeText = [...marqueeItems, ...marqueeItems].join('   ·   ');

  function handleDropdownEnter(label: string) {
    if (dropdownRef.current) clearTimeout(dropdownRef.current);
    setOpenDropdown(label);
  }
  function handleDropdownLeave() {
    dropdownRef.current = setTimeout(() => setOpenDropdown(null), 120);
  }

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, fontFamily: "'Inter', sans-serif" }}>

      {/* ── MARQUEE TOP BAR ── */}
      <div style={{ backgroundColor: GREEN, height: '32px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'ticker 55s linear infinite' }}>
          <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 500, paddingRight: '5rem' }}>{marqueeText}</span>
          <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 500, paddingRight: '5rem' }}>{marqueeText}</span>
        </div>
        <style>{`
          @keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        `}</style>
      </div>

      {/* ── MAIN NAV BAR ── */}
      <div style={{ backgroundColor: DARK, borderBottom: `2px solid ${GREEN}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
<Link
  to="/"
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    textDecoration: 'none',
    flexShrink: 0,
  }}
>
  <div
    style={{
      position: 'relative',
      width: '52px',
      height: '52px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: `2px solid ${GREEN}`,
      flexShrink: 0,
    }}
  >
    <img
      src={logoImg}
      alt="Eure Métal Recyclage"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  </div>

  <div>
    <div
      style={{
        fontSize: '1.1rem',
        fontWeight: 700,
        color: '#fff',
        lineHeight: 1.1,
        letterSpacing: '0.05em',
        fontFamily: "'Oswald', sans-serif",
      }}
    >
      EURE <span style={{ color: GREEN }}>MÉTAL</span>
    </div>

    <div
      style={{
        fontSize: '0.65rem',
        color: '#9CA3AF',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
      }}
    >
      Recyclage • Centre VHU Agréé
    </div>
  </div>
</Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '0' }} className="lg:flex" id="desktop-nav">
            <style>{`
              #desktop-nav { display: none }
              @media(min-width:1024px){ #desktop-nav { display:flex !important } }
            `}</style>
            {navLinks.map((link) => (
              <div
                key={link.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => link.children && handleDropdownEnter(link.label)}
                onMouseLeave={() => link.children && handleDropdownLeave()}
              >
                <Link
                  to={link.to}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.25rem',
                    color: isActive(link.to) ? GREEN : '#D1D5DB',
                    fontSize: '0.875rem', fontWeight: 500,
                    padding: '0.625rem 1rem',
                    borderBottom: isActive(link.to) ? `2px solid ${GREEN}` : '2px solid transparent',
                    textDecoration: 'none', transition: 'color 0.15s, border-color 0.15s',
                    marginBottom: '-2px',
                  }}
                  onMouseEnter={(e) => { if (!isActive(link.to)) (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={(e) => { if (!isActive(link.to)) (e.currentTarget as HTMLElement).style.color = '#D1D5DB'; }}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown size={13} style={{ transition: 'transform 0.2s', transform: openDropdown === link.label ? 'rotate(180deg)' : 'none' }} />
                  )}
                </Link>

                {link.children && openDropdown === link.label && (
                  <div
                    onMouseEnter={() => handleDropdownEnter(link.label)}
                    onMouseLeave={() => handleDropdownLeave()}
                    style={{
                      position: 'absolute', top: 'calc(100% + 2px)', left: 0,
                      backgroundColor: '#0F172A', border: `1px solid #1F2937`,
                      borderTop: `2px solid ${GREEN}`, minWidth: '260px', zIndex: 300,
                      boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                    }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        style={{ display: 'block', padding: '0.875rem 1.125rem', borderBottom: '1px solid #1F2937', textDecoration: 'none', transition: 'background 0.12s, padding 0.12s' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#1E293B'; (e.currentTarget as HTMLElement).style.paddingLeft = '1.375rem'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.paddingLeft = '1.125rem'; }}
                      >
                        <span style={{ color: '#F1F5F9', fontSize: '0.875rem', fontWeight: 500, display: 'block' }}>{child.label}</span>
                        <span style={{ color: '#64748B', fontSize: '0.75rem', display: 'block', marginTop: '0.125rem' }}>{child.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div style={{ display: 'none', alignItems: 'center', gap: '0.5rem' }} id="desktop-ctas">
            <style>{`
              #desktop-ctas { display:none }
              @media(min-width:1024px){ #desktop-ctas { display:flex !important } }
            `}</style>
            <a
              href="https://wa.me/33675888408"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', backgroundColor: '#25D366', color: '#fff', padding: '0.5rem 0.875rem', fontSize: '0.8125rem', fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#1DAA52'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#25D366'; }}
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
            <a
              href="tel:0232372986"
              style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', backgroundColor: GREEN, color: '#fff', padding: '0.5rem 1.125rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.9375rem', letterSpacing: '0.05em', textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#2D7031'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = GREEN; }}
            >
              <Phone size={15} /> 02 32 37 29 86
            </a>
          </div>

          {/* Mobile: call shortcut + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }} id="mobile-controls">
            <style>{`
              #mobile-controls { display:flex }
              @media(min-width:1024px){ #mobile-controls { display:none !important } }
            `}</style>
            <a
              href="tel:0232372986"
              aria-label="Appeler"
              style={{ backgroundColor: GREEN, color: '#fff', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', borderRadius: '4px' }}
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
              style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: menuOpen ? '#1F2937' : 'transparent', border: '1px solid #374151', borderRadius: '4px', cursor: 'pointer', color: '#F1F5F9', transition: 'background 0.2s' }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* ── MOBILE MENU OVERLAY ── */}
      <div
        id="mobile-menu"
        style={{
          position: 'fixed',
          top: `${HEADER_H}px`,
          left: 0, right: 0, bottom: 0,
          backgroundColor: '#0B0F17',
          overflowY: 'auto',
          zIndex: 190,
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          borderTop: `1px solid #1F2937`,
        }}
      >
        <style>{`
          #mobile-menu { display:block }
          @media(min-width:1024px){ #mobile-menu { display:none !important } }
        `}</style>

        {/* Nav items */}
        <div style={{ padding: '0.5rem 0' }}>
          {navLinks.map((link) => (
            <div key={link.label} style={{ borderBottom: '1px solid #1F2937' }}>
              <div style={{ display: 'flex', alignItems: 'stretch' }}>
                <Link
                  to={link.to}
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center',
                    padding: '1rem 1.25rem',
                    color: isActive(link.to) ? GREEN : '#E2E8F0',
                    fontFamily: "'Oswald', sans-serif", fontWeight: 500,
                    fontSize: 'clamp(1rem, 4vw, 1.125rem)', letterSpacing: '0.05em',
                    textDecoration: 'none', backgroundColor: isActive(link.to) ? '#0F1A12' : 'transparent',
                    borderLeft: isActive(link.to) ? `3px solid ${GREEN}` : '3px solid transparent',
                  }}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <button
                    onClick={() => setMobileOpenSub(mobileOpenSub === link.label ? null : link.label)}
                    style={{ padding: '0 1.25rem', background: 'none', border: 'none', borderLeft: '1px solid #1F2937', color: mobileOpenSub === link.label ? GREEN : '#64748B', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                    aria-label={`Sous-menu ${link.label}`}
                  >
                    <ChevronDown size={18} style={{ transition: 'transform 0.25s', transform: mobileOpenSub === link.label ? 'rotate(180deg)' : 'none' }} />
                  </button>
                )}
              </div>

              {/* Sub-items */}
              {link.children && mobileOpenSub === link.label && (
                <div style={{ backgroundColor: '#060A10', paddingBottom: '0.5rem' }}>
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.to}
                      style={{ display: 'block', padding: '0.75rem 1.25rem 0.75rem 2rem', textDecoration: 'none', borderBottom: '1px solid #151C28' }}
                    >
                      <span style={{ color: '#94A3B8', fontSize: '0.9375rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: GREEN, fontSize: '0.75rem' }}>▸</span>
                        {child.label}
                      </span>
                      <span style={{ color: '#475569', fontSize: '0.75rem', display: 'block', marginTop: '0.125rem', paddingLeft: '1rem' }}>{child.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTAs */}
        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a
            href="tel:0232372986"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem', backgroundColor: GREEN, color: '#fff', padding: '0.9375rem', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.125rem', letterSpacing: '0.05em', textDecoration: 'none', borderRadius: '2px' }}
          >
            <Phone size={20} /> 02 32 37 29 86
          </a>
          <a
            href="https://wa.me/33675888408?text=Bonjour%20EURE%20MÉTAL%2C%20je%20souhaite%20un%20renseignement."
            target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem', backgroundColor: '#25D366', color: '#fff', padding: '0.9375rem', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.125rem', textDecoration: 'none', borderRadius: '2px' }}
          >
            <MessageCircle size={20} /> WhatsApp
          </a>
          <Link
            to="/contact"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem', backgroundColor: 'transparent', color: '#94A3B8', padding: '0.9375rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1rem', border: '1px solid #1F2937', textDecoration: 'none', borderRadius: '2px' }}
          >
            Formulaire de contact →
          </Link>
        </div>

        {/* Groupe notice */}
        <div style={{ margin: '0 1.25rem 1.25rem', padding: '1rem', backgroundColor: '#0F1A12', borderLeft: `3px solid ${GREEN}`, borderRadius: '2px' }}>
          <p style={{ color: '#6B7280', fontSize: '0.75rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.1em', marginBottom: '0.375rem' }}>GROUPE EURE MÉTAL RECYCLAGE</p>
          <p style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.6 }}>
            <strong style={{ color: GREEN }}>EURE MÉTAL</strong> — 30 Rue du Bois de la Vigne, 27220 Chavigny-Bailleul<br />
            <strong style={{ color: '#6EE7B7' }}>SNR</strong> — Chemin des Vignes, 27120 Chaignes
          </p>
        </div>
      </div>
    </header>
  );
}

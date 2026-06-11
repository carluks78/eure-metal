import { Link } from 'react-router';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import logoImg from '../../imports/LOGO-EM.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#0F1117', fontFamily: "'Inter', sans-serif" }}>
      {/* SNR Group band */}
      <div style={{ backgroundColor: '#1A1A1A', borderTop: '2px solid #3A8C3E', borderBottom: '1px solid #2D2D2D' }}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div style={{ backgroundColor: '#3A8C3E', width: '3px', height: '40px', flexShrink: 0 }} />
              <div>
                <p style={{ color: '#3A8C3E', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.1em' }}>
                  LA SNR — MEMBRE DU GROUPE EURE MÉTAL RECYCLAGE
                </p>
                <p style={{ color: '#9CA3AF', fontSize: '0.8125rem' }}>
                  Ferrailleur — Chemin des Vignes, 27120 Chaignes · ☎ 02 32 38 60 09
                </p>
              </div>
            </div>
            <a
              href="https://s-n-r-societe-normande-de-recyclage.vercel.app/contact"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                color: '#3A8C3E',
                fontSize: '0.875rem',
                fontWeight: 500,
                border: '1px solid #3A8C3E',
                padding: '0.5rem 1rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#3A8C3E';
                (e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.color = '#3A8C3E';
              }}
            >
              Visiter le site du groupe <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo + Contact */}
          <div>
            <img src={logoImg} alt="Eure Métal" style={{ height: '52px', width: 'auto', marginBottom: '1.25rem' }} />
            <p style={{ color: '#6B7280', fontSize: '0.8125rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Ferrailleur agréé et centre VHU dans l'Eure depuis 1994. Rachat de métaux, enlèvement d'épaves, location de bennes et débarras industriel.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={14} style={{ color: '#3A8C3E', marginTop: '3px', flexShrink: 0 }} />
                <p style={{ color: '#9CA3AF', fontSize: '0.8125rem', lineHeight: 1.5 }}>
                  30 Rue du Bois de la Vigne<br />27220 Chavigny-Bailleul
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} style={{ color: '#3A8C3E', flexShrink: 0 }} />
                <a href="tel:0232372986" style={{ color: '#9CA3AF', fontSize: '0.8125rem' }} className="hover:text-orange-400 transition-colors">
                  02 32 37 29 86
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} style={{ color: '#3A8C3E', flexShrink: 0 }} />
                <a href="tel:0675888408" style={{ color: '#9CA3AF', fontSize: '0.8125rem' }} className="hover:text-orange-400 transition-colors">
                  06 75 88 84 08
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} style={{ color: '#3A8C3E', flexShrink: 0 }} />
                <a href="mailto:eure.metal494@orange.fr" style={{ color: '#9CA3AF', fontSize: '0.8125rem' }} className="hover:text-orange-400 transition-colors">
                  eure.metal494@orange.fr
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} style={{ color: '#3A8C3E', marginTop: '3px', flexShrink: 0 }} />
                <p style={{ color: '#9CA3AF', fontSize: '0.8125rem', lineHeight: 1.5 }}>
                  Lun–Ven : 8h30–12h / 13h30–17h30<br />Sam : 9h00–12h00
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.9375rem', letterSpacing: '0.1em', marginBottom: '1rem', paddingBottom: '0.625rem', borderBottom: '1px solid #2D2D2D' }}>
              NOS SERVICES
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Enlèvement d\'épave gratuit', to: '/services#enlevement' },
                { label: 'Démolition & Découpage', to: '/services#demolition' },
                { label: 'Location de Bennes', to: '/services#bennes' },
                { label: 'Débarras d\'usine', to: '/services#debarras' },
                { label: 'Rachat Fer & Métaux', to: '/achats#fer-metaux' },
                { label: 'Poids Lourds & TP', to: '/achats#poids-lourds' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    style={{ color: '#6B7280', fontSize: '0.8125rem', display: 'flex', alignItems: 'center', gap: '0.375rem', transition: 'color 0.2s' }}
                    className="hover:text-orange-400"
                  >
                    <span style={{ color: '#3A8C3E' }}>›</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Zones */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.9375rem', letterSpacing: '0.1em', marginBottom: '1rem', paddingBottom: '0.625rem', borderBottom: '1px solid #2D2D2D' }}>
              ZONES D'INTERVENTION
            </h4>
            <ul className="space-y-2">
              {[
                { dept: 'Eure (27)', villes: 'Évreux, Vernon, Louviers, Bernay' },
                { dept: 'Seine-Maritime (76)', villes: 'Rouen, Le Havre, Dieppe' },
                { dept: 'Orne (61)', villes: 'Alençon, Flers, Argentan' },
                { dept: 'Calvados (14)', villes: 'Caen, Lisieux' },
                { dept: 'Eure-et-Loir (28)', villes: 'Chartres, Dreux' },
                { dept: 'Île-de-France', villes: 'PL/TP uniquement' },
              ].map((zone) => (
                <li key={zone.dept}>
                  <Link to="/zones" style={{ display: 'block', transition: 'color 0.2s' }} className="hover:text-orange-400">
                    <span style={{ color: '#D1D5DB', fontSize: '0.8125rem', fontWeight: 500 }}>{zone.dept}</span>
                    <span style={{ color: '#4B5563', fontSize: '0.75rem', display: 'block' }}>{zone.villes}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal + Agréments */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.9375rem', letterSpacing: '0.1em', marginBottom: '1rem', paddingBottom: '0.625rem', borderBottom: '1px solid #2D2D2D' }}>
              AGRÉMENTS & LÉGAL
            </h4>
            <div className="space-y-3 mb-6">
              {[
                { label: 'Centre VHU Agréé', value: 'PR2700026D' },
                { label: 'ICPE Classée', value: '2712 & 2713' },
                { label: 'Agrément Préfectoral', value: 'Eure (27)' },
              ].map((item) => (
                <div key={item.label} style={{ backgroundColor: '#1A1A1A', padding: '0.625rem', borderLeft: '2px solid #3A8C3E' }}>
                  <p style={{ color: '#6B7280', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</p>
                  <p style={{ color: '#D1D5DB', fontSize: '0.8125rem', fontWeight: 500 }}>{item.value}</p>
                </div>
              ))}
            </div>
            <ul className="space-y-2">
              {[
                { label: 'Accueil', to: '/' },
                { label: 'Contact', to: '/contact' },
                { label: 'Zones d\'intervention', to: '/zones' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    style={{ color: '#6B7280', fontSize: '0.8125rem', display: 'flex', alignItems: 'center', gap: '0.375rem', transition: 'color 0.2s' }}
                    className="hover:text-orange-400"
                  >
                    <span style={{ color: '#3A8C3E' }}>›</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ backgroundColor: '#080A0E', borderTop: '1px solid #1F2937' }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p style={{ color: '#374151', fontSize: '0.75rem' }}>
            © {currentYear} EURE MÉTAL RECYCLAGE — Groupe SNR | Tous droits réservés
          </p>
          <div className="flex items-center gap-4">
            <a href="#" style={{ color: '#374151', fontSize: '0.75rem' }} className="hover:text-gray-400 transition-colors">Mentions légales</a>
            <a href="#" style={{ color: '#374151', fontSize: '0.75rem' }} className="hover:text-gray-400 transition-colors">Politique de confidentialité</a>
            <a href="#" style={{ color: '#374151', fontSize: '0.75rem' }} className="hover:text-gray-400 transition-colors">Agrément PR2700026D</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

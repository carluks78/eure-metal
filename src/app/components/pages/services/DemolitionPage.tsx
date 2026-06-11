import { Link } from 'react-router';
import { Phone, CheckCircle, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

const GREEN = '#3A8C3E';
const heroImg = 'https://images.unsplash.com/photo-1616551569669-b60598758c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNhdmF0b3IlMjBkZW1vbGl0aW9uJTIwY3JhbmUlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzgxMTMxNzcxfDA&ixlib=rb-4.1.0&q=80&w=1080';

const zones = [
  { dept: '27', title: 'Eure', villes: 'Évreux, Vernon, Louviers, Bernay, Gisors, Les Andelys, Val-de-Reuil, Pont-Audemer, Gaillon, Pacy-sur-Eure, Conches, Brionne, Nonancourt, Breteuil, Le Neubourg, Bourg-Achard, Bourgtheroulde, Beuzeville, Ivry-la-Bataille, Damville, La Couture-Boussey, Rugles, Saint-André-de-l\'Eure' },
  { dept: '76', title: 'Seine-Maritime', villes: 'Rouen, Le Havre, Dieppe, Fécamp, Elbeuf, Yvetot, Barentin, Mont-Saint-Aignan, Sotteville-lès-Rouen, Lillebonne, Caudebec-en-Caux' },
  { dept: '61', title: 'Orne', villes: 'Alençon, Flers, Argentan, L\'Aigle, Mortagne-au-Perche, Domfront, Briouze, Vimoutiers, Sées' },
  { dept: '14', title: 'Calvados', villes: 'Caen, Lisieux, Bayeux, Hérouville-Saint-Clair, Honfleur, Vire, Falaise, Trouville-sur-Mer, Deauville' },
  { dept: '28', title: 'Eure-et-Loir', villes: 'Chartres, Dreux, Nogent-le-Rotrou, Vernouillet, Châteaudun, Lucé, Maintenon, Anet, Bonneval' },
  { dept: 'IDF', title: 'Île-de-France', villes: 'Paris, Versailles, Nanterre, Saint-Denis, Créteil, Meaux, Évry, Cergy, Pontoise, Melun, Mantes-la-Jolie' },
];

const prestations = [
  { title: 'Découpe au chalumeau', desc: 'Sectionnement de structures en acier, poutrelles, profilés métalliques sur site, selon plans ou à la demande.' },
  { title: 'Démolition de charpentes', desc: 'Dépose et démolition de charpentes métalliques industrielles, hangars, halles et bâtiments techniques.' },
  { title: 'Dépose de cuves & silos', desc: 'Découpe et évacuation de cuves industrielles, silos à grains, réservoirs, citernes — dépollution incluse si nécessaire.' },
  { title: 'Structures béton armé', desc: 'Retrait de ferraillage, découpe et évacuation d\'armatures métalliques dans structures béton.' },
  { title: 'Équipements industriels', desc: 'Dépose de machines, convoyeurs, rails, pont roulant, racks de stockage et équipements fixes.' },
  { title: 'Clôtures & portails', desc: 'Dépose de grillages, palissades, portails et toutes structures de clôture métalliques.' },
];

export function DemolitionPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <section style={{ backgroundColor: '#1A1A1A', padding: 'clamp(2rem, 5vw, 4rem) 1.25rem', borderBottom: `3px solid ${GREEN}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#6B7280', fontSize: '0.8125rem', textDecoration: 'none' }}>Accueil</Link>
            <span style={{ color: '#4B5563' }}>›</span>
            <Link to="/services" style={{ color: '#6B7280', fontSize: '0.8125rem', textDecoration: 'none' }}>Services</Link>
            <span style={{ color: '#4B5563' }}>›</span>
            <span style={{ color: GREEN, fontSize: '0.8125rem' }}>Démolition & Découpage</span>
          </nav>
          <span style={{ display: 'inline-block', backgroundColor: GREEN, color: '#FFF', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', padding: '0.25rem 0.625rem', marginBottom: '1rem', fontWeight: 600 }}>DÉMOLITION & DÉCOUPAGE</span>
          <h1 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.625rem, 5vw, 3rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Démolition & Découpage — <span style={{ color: GREEN }}>Structures Métalliques sur Site</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: 'clamp(0.9rem, 2vw, 1.0625rem)', lineHeight: 1.7, maxWidth: '700px', marginBottom: '1.75rem' }}>
            EURE MÉTAL intervient pour la découpe au chalumeau, la dépose et la démolition de structures métalliques industrielles en Normandie et Île-de-France. Devis gratuit sur site pour particuliers, professionnels, collectivités et industriels.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="tel:0232372986" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: GREEN, color: '#FFF', padding: 'clamp(0.75rem, 2vw, 0.9375rem) clamp(1.25rem, 3vw, 1.75rem)', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)', textDecoration: 'none' }}>
              <Phone size={18} /> Devis gratuit
            </a>
            <a href="https://wa.me/33675888408" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#25D366', color: '#FFF', padding: 'clamp(0.75rem, 2vw, 0.9375rem) clamp(1.25rem, 3vw, 1.75rem)', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)', textDecoration: 'none' }}>
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* IMAGE HERO */}
      <ImageWithFallback src={heroImg} alt="Démolition structures métalliques — Eure Métal ferrailleur" style={{ width: '100%', height: 'clamp(200px, 35vw, 420px)', objectFit: 'cover' }} />

      {/* PRESTATIONS */}
      <section style={{ backgroundColor: '#F8F8F8', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ display: 'inline-block', backgroundColor: '#F0FAF0', color: GREEN, fontSize: '0.75rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', padding: '0.25rem 0.875rem', marginBottom: '0.75rem', border: `1px solid #BBF7C0` }}>NOS PRESTATIONS</span>
            <h2 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>Ce que nous découpons et démolissons</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {prestations.map((p) => (
              <div key={p.title} style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', border: '1px solid #E5E7EB', borderTop: `3px solid ${GREEN}` }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', marginBottom: '0.625rem' }}>
                  <CheckCircle size={16} style={{ color: GREEN, flexShrink: 0, marginTop: '2px' }} />
                  <h3 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1rem' }}>{p.title}</h3>
                </div>
                <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.6, paddingLeft: '1.375rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section style={{ backgroundColor: '#1A1A1A', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '2rem', textAlign: 'center' }}>
            Zones d'intervention — <span style={{ color: GREEN }}>Démolition & Découpage</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {zones.map((z) => (
              <div key={z.dept} style={{ backgroundColor: '#242424', padding: '1.25rem', borderLeft: `3px solid ${GREEN}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.625rem' }}>
                  <span style={{ backgroundColor: GREEN, color: '#FFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '0.875rem', padding: '0.125rem 0.5rem' }}>{z.dept}</span>
                  <span style={{ color: '#D1D5DB', fontWeight: 600, fontSize: '0.9375rem' }}>{z.title}</span>
                </div>
                <p style={{ color: '#6B7280', fontSize: '0.8125rem', lineHeight: 1.6 }}>{z.villes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: GREEN, padding: 'clamp(2rem, 5vw, 3.5rem) 1.25rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.375rem, 4vw, 2rem)', marginBottom: '1rem' }}>Devis gratuit — Déplacement sur site inclus</h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <a href="tel:0232372986" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FFFFFF', color: GREEN, padding: '0.9375rem 2rem', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.0625rem', textDecoration: 'none' }}>
              <Phone size={18} /> 02 32 37 29 86
            </a>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services/enlevement-epave" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', textDecoration: 'none' }}>→ Enlèvement d'épave</Link>
            <Link to="/services/location-bennes" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', textDecoration: 'none' }}>→ Location de bennes</Link>
            <Link to="/services/debarras-usine" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', textDecoration: 'none' }}>→ Débarras d'usine</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

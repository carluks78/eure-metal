import { Link } from 'react-router';
import { Phone, MapPin, CheckCircle } from 'lucide-react';
import { FranceMap } from '../FranceMap';

const GREEN = '#3A8C3E';



// Deduplicated city lists
const allCities27 = [
  'Évreux', 'Vernon', 'Louviers', 'Bernay', 'Gisors', 'Les Andelys', 'Gaillon', 'Pacy-sur-Eure',
  'Conches-en-Ouche', 'Brionne', 'Pont-Audemer', "Pont-de-l'Arche", 'Val-de-Reuil', 'Nonancourt',
  'Chavigny-Bailleul', 'Ivry-la-Bataille', 'Damville', 'Beaumont-le-Roger', 'La Couture-Boussey',
  'Rugles', "Saint-André-de-l'Eure", 'Breteuil', 'Hécourt', 'Brosville', 'Arnières-sur-Iton',
  'Bourgtheroulde-Infreville', 'Bourg-Achard', 'Le Neubourg', 'Beuzeville', 'Hardencourt-Cocherel',
  'Fleury-sur-Andelle', 'Elbeuf-sur-Andelle', 'Lisors', 'Thiberville', 'Le Vieil-Évreux',
  'Saint-Sébastien-de-Morsent',
];
const allCities76 = [
  'Rouen', 'Le Havre', 'Dieppe', 'Fécamp', 'Elbeuf', 'Yvetot', 'Barentin', 'Mont-Saint-Aignan',
  'Sotteville-lès-Rouen', 'Lillebonne', 'Caudebec-en-Caux', 'Saint-Romain-de-Colbosc', 'Bolbec',
  'Eu', 'Aumale', 'Neufchâtel-en-Bray', 'Forges-les-Eaux',
];
const allCities61 = [
  'Alençon', 'Flers', 'Argentan', "L'Aigle", 'Mortagne-au-Perche', 'Domfront', 'Briouze',
  'Vimoutiers', 'Sées', 'Carrouges', 'La Ferté-Macé', 'Bellême',
];
const allCities14 = [
  'Caen', 'Lisieux', 'Bayeux', 'Hérouville-Saint-Clair', 'Honfleur', 'Vire', 'Falaise',
  'Trouville-sur-Mer', 'Deauville', "Pont-l'Évêque", 'Condé-en-Normandie',
];
const allCities28 = [
  'Chartres', 'Dreux', 'Nogent-le-Rotrou', 'Vernouillet', 'Châteaudun', 'Lucé', 'Maintenon',
  'Anet', 'Bonneval', 'Brezolles', 'La Loupe', 'Illiers-Combray', 'Janville', 'Voves',
];
const idfDepts = [
  'Paris (75)', 'Yvelines (78)', 'Seine-et-Marne (77)', 'Essonne (91)',
  'Hauts-de-Seine (92)', 'Seine-Saint-Denis (93)', 'Val-de-Marne (94)', "Val-d'Oise (95)",
];

const zones = [
  { dept: '27', title: 'Eure', services: ['VHU · Épaves', 'Rachat Métaux', 'Location Bennes', 'Débarras', 'Poids Lourds & TP'], cities: allCities27, note: 'Zone principale — Siège à Chavigny-Bailleul. Enlèvement sous 24h.' },
  { dept: '76', title: 'Seine-Maritime', services: ['VHU · Épaves', 'Rachat Métaux', 'Location Bennes', 'Débarras', 'Poids Lourds & TP'], cities: allCities76, note: 'Tous services disponibles.' },
  { dept: '61', title: 'Orne', services: ['VHU · Épaves', 'Rachat Métaux', 'Débarras', 'Poids Lourds & TP'], cities: allCities61, note: 'Tous services sauf location de bennes.' },
  { dept: '14', title: 'Calvados', services: ['VHU · Épaves', 'Rachat Métaux', 'Débarras', 'Poids Lourds & TP'], cities: allCities14, note: 'Tous services sauf location de bennes.' },
  { dept: '28', title: 'Eure-et-Loir', services: ['VHU · Épaves', 'Rachat Métaux', 'Location Bennes', 'Poids Lourds & TP'], cities: allCities28, note: 'Services principaux disponibles.' },
  { dept: 'IDF', title: 'Île-de-France', services: ['Poids Lourds & TP', 'Bus & Cars'], cities: idfDepts, note: 'Poids lourds, engins TP et bus uniquement.', isIdf: true },
];

export function ZonesPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* HERO */}
      <section style={{ backgroundColor: '#1A1A1A', padding: 'clamp(2rem, 5vw, 4rem) 1.25rem', borderBottom: `3px solid ${GREEN}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#6B7280', fontSize: '0.8125rem', textDecoration: 'none' }}>Accueil</Link>
            <span style={{ color: '#4B5563' }}>›</span>
            <span style={{ color: GREEN, fontSize: '0.8125rem' }}>Zones d'intervention</span>
          </nav>
          <span style={{ display: 'inline-block', backgroundColor: GREEN, color: '#FFF', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', padding: '0.25rem 0.75rem', marginBottom: '1rem', fontWeight: 600 }}>
            FERRAILLEUR · VHU AGRÉÉ · NORMANDIE & ÎLE-DE-FRANCE
          </span>
          <h1 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.625rem, 5vw, 3rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Zones d'intervention — <span style={{ color: GREEN }}>Ferrailleur et centre VHU agréé</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: 'clamp(0.9rem, 2vw, 1.0625rem)', lineHeight: 1.6, maxWidth: '700px', marginBottom: '2rem' }}>
            EURE MÉTAL assure le rachat de métaux ferreux et non ferreux, l'enlèvement d'épaves et la location de bennes en Normandie et en Île-de-France.
          </p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {[{ val: '5+', label: 'Départements normands' }, { val: '13', label: 'Départements couverts' }, { val: '24h', label: 'Délai intervention Eure' }, { val: '100%', label: 'Recyclage conforme' }].map((s) => (
              <div key={s.label}>
                <div style={{ color: GREEN, fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2rem)', lineHeight: 1 }}>{s.val}</div>
                <div style={{ color: '#6B7280', fontSize: '0.8125rem', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SVG MAP */}
      <section style={{ backgroundColor: '#1A1A1A', padding: '2rem 1.25rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ color: '#9CA3AF', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            NOS ZONES SUR LA CARTE
          </p>
          <FranceMap />
          <div style={{ marginTop: '0.75rem', textAlign: 'center' }}>
            <a
              href="https://maps.google.com/?q=30+Rue+du+Bois+de+la+Vigne,+27220+Chavigny-Bailleul"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: GREEN, fontSize: '0.875rem', textDecoration: 'none' }}
            >
              Voir EURE MÉTAL sur Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* ZONES DETAIL */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ display: 'inline-block', backgroundColor: '#F0FAF0', color: GREEN, fontSize: '0.75rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', padding: '0.25rem 0.875rem', marginBottom: '0.875rem', border: `1px solid #BBF7C0` }}>
              SERVICES & ZONES
            </span>
            <h2 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', lineHeight: 1.2 }}>
              Ferrailleur Eure — Nos activités par secteur géographique
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {zones.map((zone) => (
              <div key={zone.dept} style={{ backgroundColor: '#F8F8F8', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
                <div style={{ backgroundColor: zone.isIdf ? '#555' : GREEN, padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#FFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1rem', padding: '0.25rem 0.625rem' }}>
                    {zone.dept}
                  </div>
                  <h3 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1.0625rem', margin: 0 }}>{zone.title}</h3>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <p style={{ color: '#6B7280', fontSize: '0.75rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.1em', marginBottom: '0.5rem' }}>SERVICES DISPONIBLES</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1rem' }}>
                    {zone.services.map((s) => (
                      <span key={s} style={{ backgroundColor: '#F0FAF0', color: GREEN, fontSize: '0.6875rem', padding: '0.2rem 0.5rem', border: `1px solid #BBF7C0`, fontWeight: 500 }}>{s}</span>
                    ))}
                  </div>
                  <p style={{ color: '#6B7280', fontSize: '0.75rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                    {zone.isIdf ? 'DÉPARTEMENTS' : 'VILLES COUVERTES'}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '1rem' }}>
                    {zone.cities.map((city, idx) => (
                      <span key={`${zone.dept}-${city}-${idx}`} style={{ backgroundColor: '#FFFFFF', color: '#374151', fontSize: '0.75rem', padding: '0.125rem 0.375rem', border: '1px solid #E5E7EB' }}>{city}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', backgroundColor: '#FFFFFF', padding: '0.625rem', border: '1px solid #E5E7EB' }}>
                    <CheckCircle size={14} style={{ color: zone.isIdf ? '#888' : GREEN, flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ color: '#6B7280', fontSize: '0.8125rem', lineHeight: 1.5 }}>{zone.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Normandie / IDF split + SNR */}
      <section style={{ backgroundColor: '#1A1A1A', padding: 'clamp(3rem, 6vw, 4rem) 1.25rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#242424', padding: '1.75rem', borderTop: `3px solid ${GREEN}` }}>
              <h3 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.75rem' }}>Normandie & Centre</h3>
              <p style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>Eure (27) · Seine-Maritime (76) · Orne (61) · Calvados (14) · Eure-et-Loir (28)</p>
              <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                {['VHU · Épaves', 'Métaux', 'Bennes', 'PL/TP', 'Débarras'].map((s) => (
                  <span key={s} style={{ backgroundColor: GREEN, color: '#FFF', fontSize: '0.6875rem', padding: '0.2rem 0.5rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.05em' }}>{s}</span>
                ))}
              </div>
            </div>
            <div style={{ backgroundColor: '#242424', padding: '1.75rem', borderTop: '3px solid #888' }}>
              <h3 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.75rem' }}>Île-de-France</h3>
              <p style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                Paris (75) · Yvelines (78) · Seine-et-Marne (77) · Essonne (91) · Hauts-de-Seine (92) · Seine-Saint-Denis (93) · Val-de-Marne (94) · Val-d'Oise (95)
              </p>
              <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                {['Poids lourds', 'TP', 'Bus uniquement'].map((s) => (
                  <span key={s} style={{ backgroundColor: '#555', color: '#FFF', fontSize: '0.6875rem', padding: '0.2rem 0.5rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.05em' }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: '1.5rem', backgroundColor: '#242424', padding: '1.25rem', borderLeft: `3px solid ${GREEN}` }}>
            <p style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: 1.6 }}>
              🏭 La <strong style={{ color: '#D1D5DB' }}>SNR — Société Normande de Recyclage</strong> (Chemin des Vignes, 27120 Chaignes · ☎ 02 32 38 60 09) est membre du Groupe <strong style={{ color: GREEN }}>EURE MÉTAL RECYCLAGE</strong>.{' '}
              <a href="https://s-n-r-societe-normande-de-recyclage.vercel.app/contact" target="_blank" rel="noopener noreferrer" style={{ color: GREEN }}>Visiter le site SNR →</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#F8F8F8', padding: 'clamp(2.5rem, 5vw, 3.5rem) 1.25rem', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <MapPin size={28} style={{ color: GREEN, margin: '0 auto 1rem' }} />
          <h2 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.375rem, 3vw, 1.75rem)', marginBottom: '0.875rem' }}>
            Votre commune n'apparaît pas ?
          </h2>
          <p style={{ color: '#6B7280', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            Contactez-nous — nous étudions toutes les demandes autour de Chavigny-Bailleul et dans les zones limitrophes.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:0232372986" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: GREEN, color: '#FFF', padding: '0.9375rem 1.75rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1rem', letterSpacing: '0.05em', textDecoration: 'none' }}>
              <Phone size={16} /> 02 32 37 29 86
            </a>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'transparent', color: '#1A1A1A', padding: '0.9375rem 1.75rem', border: '2px solid #1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1rem', letterSpacing: '0.05em', textDecoration: 'none' }}>
              Nous écrire →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

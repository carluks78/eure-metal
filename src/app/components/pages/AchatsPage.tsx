import { Link } from 'react-router';
import { Phone, CheckCircle, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const metalImage = 'https://images.unsplash.com/photo-1606337321936-02d1b1a4d5ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzY3JhcCUyMG1ldGFsJTIwcmVjeWNsaW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3ODExMzE3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080';
const truckImage = 'https://images.unsplash.com/photo-1603655534191-ea4d80072bf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxleGNhdmF0b3IlMjBkZW1vbGl0aW9uJTIwY3JhbmUlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzgxMTMxNzcxfDA&ixlib=rb-4.1.0&q=80&w=1080';

const metals = [
  { name: 'Fer & Acier', icon: '⚙️', desc: 'Chutes de fer, ferrailles, profilés acier, tôles, limailles' },
  { name: 'Cuivre', icon: '🔶', desc: 'Câbles, tubes, chutes cuivre, moteurs électriques' },
  { name: 'Aluminium', icon: '⬜', desc: 'Profilés, plaques, copeaux, fenêtres, emballages' },
  { name: 'Inox', icon: '✨', desc: 'Inox 304, 316, cuisine professionnelle, équipements' },
  { name: 'Laiton', icon: '🟡', desc: 'Robinetterie, douilles, pièces mécaniques' },
  { name: 'Plomb & Zinc', icon: '🔷', desc: 'Batteries, gouttières, tuiles de couverture' },
  { name: 'Nickel & Fonte', icon: '⚫', desc: 'Pièces industrielles, moteurs, radiateurs fonte' },
  { name: 'Câbles électriques', icon: '🔌', desc: 'Tous types de câbles électriques, cuivre récupéré' },
];

const heavyEquip = [
  { name: 'Poids lourds', desc: 'Camions, tracteurs routiers, porteurs, bennes' },
  { name: 'Remorques', desc: 'Semi-remorques, remorques plateau, bétaillères' },
  { name: 'Engins TP', desc: 'Pelles, chargeuses, bulldozers, tombereaux' },
  { name: 'Matériels agricoles', desc: 'Tracteurs, moissonneuses, épandeurs, pulvérisateurs' },
  { name: 'Bus & cars', desc: 'Véhicules de transport, minibus, autobus' },
  { name: 'Groupes électrogènes', desc: 'Groupes électrogènes industriels et de chantier' },
];

function PageHero({ title, subtitle, badge }: { title: React.ReactNode; subtitle: string; badge: string }) {
  return (
    <section style={{ backgroundColor: '#1A1A1A', padding: '4rem 1.5rem', borderBottom: '3px solid #3A8C3E' }}>
      <div className="max-w-7xl mx-auto">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Link to="/" style={{ color: '#6B7280', fontSize: '0.8125rem', textDecoration: 'none' }}>Accueil</Link>
          <span style={{ color: '#4B5563' }}>›</span>
          <span style={{ color: '#3A8C3E', fontSize: '0.8125rem' }}>Achat</span>
        </div>
        <span style={{ display: 'inline-block', backgroundColor: '#3A8C3E', color: '#FFF', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', padding: '0.25rem 0.75rem', marginBottom: '1rem', fontWeight: 600 }}>
          {badge}
        </span>
        <h1 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: 1.15, marginBottom: '1rem' }}>
          {title}
        </h1>
        <p style={{ color: '#9CA3AF', fontSize: '1rem', lineHeight: 1.6, maxWidth: '680px' }}>{subtitle}</p>
      </div>
    </section>
  );
}

export function AchatsPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <PageHero
        badge="ACHAT & RACHAT"
        title={<>Rachat de Métaux & <span style={{ color: '#3A8C3E' }}>Engins de Chantier</span></>}
        subtitle="Particuliers et professionnels — apportez vos métaux ferreux et non ferreux sur notre site ou demandez une intervention sur place. Paiement comptant après pesée certifiée."
      />

      {/* FER & MÉTAUX */}
      <section id="fer-metaux" style={{ backgroundColor: '#F8F8F8', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1.5rem, 4vw, 4rem)', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'inline-block', backgroundColor: '#F0FAF0', color: '#3A8C3E', fontSize: '0.75rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.1em', padding: '0.25rem 0.75rem', marginBottom: '1rem', fontWeight: 600, border: '1px solid #BBF7C0' }}>
                ACHAT AU DÉTAIL
              </span>
              <h2 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                Rachat de Fer & Métaux au Détail
              </h2>
              <p style={{ color: '#4B5563', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Apportez vos métaux <strong>sans rendez-vous</strong> sur notre site de Chavigny-Bailleul. Après pesée sur pont-bascule certifié, nous vous réglons <strong>comptant immédiatement</strong>. Professionnels et particuliers bienvenus. Rachat au cours du jour affiché.
              </p>

              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', padding: '1.25rem', marginBottom: '1.75rem', borderLeft: '3px solid #3A8C3E' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <MapPin size={16} style={{ color: '#3A8C3E', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <p style={{ color: '#1A1A1A', fontSize: '0.875rem', fontWeight: 600 }}>Sans rendez-vous — Dépôt direct sur site</p>
                    <p style={{ color: '#6B7280', fontSize: '0.8125rem', marginTop: '0.25rem' }}>30 Rue du Bois de la Vigne, 27220 Chavigny-Bailleul<br />Lun–Ven : 8h30–17h30 · Sam : 9h–12h</p>
                  </div>
                </div>
              </div>

              <a
                href="tel:0232372986"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#3A8C3E', color: '#FFF', padding: '0.875rem 1.75rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1rem', letterSpacing: '0.05em', textDecoration: 'none' }}
              >
                <Phone size={16} /> 02 32 37 29 86
              </a>
            </div>
            <div>
              <ImageWithFallback
                src={metalImage}
                alt="Rachat de métaux ferreux et non ferreux — Eure Métal"
                style={{ width: '100%', height: 'clamp(220px, 40vw, 380px)', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Metals grid */}
          <div style={{ marginTop: '3rem' }}>
            <h3 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1.375rem', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '2px solid #3A8C3E', display: 'inline-block' }}>
              Métaux rachetés
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
              {metals.map((m) => (
                <div key={m.name} style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                  <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{m.icon}</span>
                  <div>
                    <div style={{ color: '#1A1A1A', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.25rem' }}>{m.name}</div>
                    <div style={{ color: '#6B7280', fontSize: '0.8125rem', lineHeight: 1.5 }}>{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POIDS LOURDS */}
      <section id="poids-lourds" style={{ backgroundColor: '#1A1A1A', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1.5rem, 4vw, 4rem)', alignItems: 'center' }}>
            <div>
              <ImageWithFallback
                src={truckImage}
                alt="Rachat poids lourds et engins TP — Normandie et Île-de-France"
                style={{ width: '100%', height: '380px', objectFit: 'cover', order: -1 }}
              />
            </div>
            <div>
              <span style={{ display: 'inline-block', backgroundColor: '#3A8C3E', color: '#FFF', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', padding: '0.25rem 0.75rem', marginBottom: '1rem', fontWeight: 600 }}>
                VÉHICULES INDUSTRIELS
              </span>
              <h2 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                Rachat Poids Lourds, TP & <span style={{ color: '#3A8C3E' }}>Matériel Agricole</span>
              </h2>
              <p style={{ color: '#9CA3AF', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Qu'ils soient roulants ou non roulants, nous rachetons vos camions, remorques, engins de chantier, tracteurs et matériels agricoles. Intervention possible sur site pour les entreprises, exploitants et transporteurs. Couverture <strong style={{ color: '#D1D5DB' }}>Normandie + Île-de-France</strong>.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                {heavyEquip.map((eq) => (
                  <div key={eq.name} style={{ backgroundColor: '#242424', padding: '1rem', borderLeft: '2px solid #3A8C3E' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <CheckCircle size={14} style={{ color: '#3A8C3E', flexShrink: 0 }} />
                      <span style={{ color: '#D1D5DB', fontSize: '0.875rem', fontWeight: 500 }}>{eq.name}</span>
                    </div>
                    <p style={{ color: '#6B7280', fontSize: '0.75rem', paddingLeft: '1.25rem' }}>{eq.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="tel:0232372986"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#3A8C3E', color: '#FFF', padding: '0.875rem 1.75rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1rem', letterSpacing: '0.05em', textDecoration: 'none' }}
                >
                  <Phone size={16} /> Appeler maintenant
                </a>
                <Link
                  to="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'transparent', color: '#D1D5DB', padding: '0.875rem 1.75rem', border: '1px solid #4B5563', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1rem', letterSpacing: '0.05em', textDecoration: 'none' }}
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA footer band */}
      <section style={{ backgroundColor: '#3A8C3E', padding: '3rem 1.5rem' }}>
        <div className="max-w-7xl mx-auto" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', textAlign: 'center' }}>
          <h2 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
            Paiement comptant · Pesée certifiée · Cours du jour
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
            Aucun intermédiaire — vous traitez directement avec notre équipe.
          </p>
          <a
            href="tel:0232372986"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FFFFFF', color: '#3A8C3E', padding: '0.875rem 2rem', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.125rem', letterSpacing: '0.05em', textDecoration: 'none' }}
          >
            <Phone size={18} /> 02 32 37 29 86
          </a>
        </div>
      </section>
    </div>
  );
}

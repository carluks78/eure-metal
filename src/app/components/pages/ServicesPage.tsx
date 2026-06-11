import { Link } from 'react-router';
import { Phone, CheckCircle, Clock } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const heroImg = 'https://images.unsplash.com/photo-1664312616511-81fe2e745cb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxleGNhdmF0b3IlMjBkZW1vbGl0aW9uJTIwY3JhbmUlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzgxMTMxNzcxfDA&ixlib=rb-4.1.0&q=80&w=1080';
const junkyardImg = 'https://images.unsplash.com/photo-1687867455818-0701641199c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdW5reWFyZCUyMGNhcnMlMjB3cmVja2VkJTIwdmVoaWNsZXMlMjByZWN5Y2xpbmd8ZW58MXx8fHwxNzgxMTMxNzcxfDA&ixlib=rb-4.1.0&q=80&w=1080';
const metalScrapImg = 'https://images.unsplash.com/photo-1722695510527-cc033e43be1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3JhcCUyMG1ldGFsJTIwcmVjeWNsaW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3ODExMzE3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080';

function ServiceBlock({
  id,
  badge,
  tag,
  title,
  desc,
  points,
  extra,
  image,
  imageAlt,
  dark,
  reverse,
}: {
  id: string;
  badge: string;
  tag: string;
  title: React.ReactNode;
  desc: string;
  points: string[];
  extra?: string;
  image: string;
  imageAlt: string;
  dark?: boolean;
  reverse?: boolean;
}) {
  const bg = dark ? '#1A1A1A' : '#F8F8F8';
  const textColor = dark ? '#FFFFFF' : '#1A1A1A';
  const bodyColor = dark ? '#9CA3AF' : '#4B5563';

  return (
    <section id={id} style={{ backgroundColor: bg, padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
      <div className="max-w-7xl mx-auto">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            direction: reverse ? 'rtl' : 'ltr',
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          <div style={{ direction: 'ltr' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.875rem' }}>
              <span style={{ backgroundColor: '#3A8C3E', color: '#FFF', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', padding: '0.25rem 0.625rem', fontWeight: 600 }}>
                {badge}
              </span>
              <span style={{ backgroundColor: dark ? '#242424' : '#FFFFFF', color: '#6B7280', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.1em', padding: '0.25rem 0.625rem', border: '1px solid #E5E7EB' }}>
                {tag}
              </span>
            </div>
            <h2 style={{ color: textColor, fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
              {title}
            </h2>
            <p style={{ color: bodyColor, fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{desc}</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.75rem' }}>
              {points.map((p) => (
                <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle size={15} style={{ color: '#3A8C3E', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: dark ? '#D1D5DB' : '#374151', fontSize: '0.875rem' }}>{p}</span>
                </div>
              ))}
            </div>

            {extra && (
              <div style={{ backgroundColor: dark ? '#242424' : '#FFFFFF', border: '1px solid', borderColor: dark ? '#333' : '#E5E7EB', padding: '1rem', borderLeft: '3px solid #3A8C3E', marginBottom: '1.75rem' }}>
                <p style={{ color: bodyColor, fontSize: '0.875rem', lineHeight: 1.6 }}>{extra}</p>
              </div>
            )}

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href="tel:0232372986"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#3A8C3E', color: '#FFF', padding: '0.875rem 1.75rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1rem', letterSpacing: '0.05em', textDecoration: 'none' }}
              >
                <Phone size={16} /> 02 32 37 29 86
              </a>
              <Link
                to="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'transparent', color: dark ? '#D1D5DB' : '#374151', padding: '0.875rem 1.75rem', border: `1px solid ${dark ? '#4B5563' : '#D1D5DB'}`, fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1rem', letterSpacing: '0.05em', textDecoration: 'none' }}
              >
                Demander un devis
              </Link>
            </div>
          </div>

          <div style={{ direction: 'ltr', position: 'relative' }}>
            <ImageWithFallback
              src={image}
              alt={imageAlt}
              style={{ width: '100%', height: 'clamp(220px, 40vw, 420px)', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* PAGE HERO */}
      <section style={{ backgroundColor: '#1A1A1A', padding: '4rem 1.5rem', borderBottom: '3px solid #3A8C3E' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#6B7280', fontSize: '0.8125rem', textDecoration: 'none' }}>Accueil</Link>
            <span style={{ color: '#4B5563' }}>›</span>
            <span style={{ color: '#3A8C3E', fontSize: '0.8125rem' }}>Services</span>
          </div>
          <span style={{ display: 'inline-block', backgroundColor: '#3A8C3E', color: '#FFF', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', padding: '0.25rem 0.75rem', marginBottom: '1rem', fontWeight: 600 }}>
            NOS SERVICES
          </span>
          <h1 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: 1.15, marginBottom: '1rem' }}>
            Enlèvement, Démolition, Bennes &{' '}
            <span style={{ color: '#3A8C3E' }}>Débarras Industriel</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '1rem', lineHeight: 1.6, maxWidth: '680px' }}>
            Ferrailleur agréé depuis 1994, EURE MÉTAL propose des services complets de gestion des déchets métalliques en Normandie et Île-de-France.
          </p>
        </div>
      </section>

      {/* Navigation rapide */}
      <div style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB', position: 'sticky', top: '80px', zIndex: 30 }}>
        <div className="max-w-7xl mx-auto px-4">
          <div style={{ display: 'flex', gap: '0', overflowX: 'auto' }}>
            {[
              { label: 'Enlèvement épave', anchor: '#enlevement' },
              { label: 'Démolition & Découpe', anchor: '#demolition' },
              { label: 'Location de Bennes', anchor: '#bennes' },
              { label: 'Débarras d\'usine', anchor: '#debarras' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.anchor}
                style={{
                  padding: '1rem 1.25rem',
                  color: '#6B7280',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  borderBottom: '2px solid transparent',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s',
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#3A8C3E';
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = '#3A8C3E';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#6B7280';
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent';
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ENLÈVEMENT D'ÉPAVE */}
      <ServiceBlock
        id="enlevement"
        badge="100% GRATUIT"
        tag="VHU AGRÉÉ PR2700026D"
        title={<>Enlèvement d'Épave Gratuit — <span style={{ color: '#3A8C3E' }}>Centre VHU Agréé</span></>}
        desc="En tant que centre VHU agréé PR2700026D, nous assurons la prise en charge complète de votre véhicule hors d'usage : enlèvement, transport, destruction réglementaire et remise du certificat officiel — sans aucun frais pour vous."
        points={[
          'Voitures & utilitaires', 'Motos & scooters', 'Sans carte grise possible', 'Certificat de destruction',
          'Prise en charge administrative', 'Sous 24h dans l\'Eure', 'Eure, Seine-Maritime, Orne', 'Calvados, Eure-et-Loir',
        ]}
        extra="Sans carte grise ? On s'occupe de tout — contactez-nous pour étudier votre situation. Nous intervenons du lundi au samedi dans toute la zone Normandie."
        image={junkyardImg}
        imageAlt="Enlèvement épave VHU agréé — Eure Métal"
        dark={false}
      />

      {/* DEMOLITION */}
      <ServiceBlock
        id="demolition"
        badge="SUR SITE"
        tag="NORMANDIE & ÎLE-DE-FRANCE"
        title={<>Démolition & Découpage — <span style={{ color: '#3A8C3E' }}>Structures Métalliques</span></>}
        desc="Découpe au chalumeau, dépose et démolition de structures métalliques, cuves, charpentes et installations techniques — sur l'ensemble de notre zone d'intervention en Normandie et Île-de-France."
        points={[
          'Découpe au chalumeau', 'Charpentes métalliques', 'Cuves industrielles', 'Structures en acier',
          'Matériel de levage', 'Dépose & évacuation', 'Devis sur mesure', 'Professionnels & collectivités',
        ]}
        image={heroImg}
        imageAlt="Démolition et découpe métallique — Eure Métal"
        dark
        reverse
      />

      {/* BENNES */}
      <ServiceBlock
        id="bennes"
        badge="LIVRAISON RAPIDE"
        tag="NORMANDIE"
        title={<>Location de Bennes — <span style={{ color: '#3A8C3E' }}>Chantiers & Industries</span></>}
        desc="Bennes livrées directement sur votre site (chantier, atelier, usine), récupérées à votre convenance. Le contenu est ensuite valorisé dans notre centre de recyclage. Solution rapide et économique pour vos déchets métalliques."
        points={[
          'Livraison sur site', 'Toutes tailles disponibles', 'Chantiers BTP', 'Ateliers industriels',
          'Récupération à la demande', 'Valorisation garantie', 'Eure (27)', 'Eure-et-Loir (28)',
        ]}
        extra="La pose et l'enlèvement de la benne sont inclus. Nous adaptons le volume de la benne à vos besoins. Contactez-nous pour connaître les disponibilités et tarifs."
        image={metalScrapImg}
        imageAlt="Location de bennes pour métaux — Eure Métal"
        dark={false}
      />

      {/* DÉBARRAS */}
      <section id="debarras" style={{ backgroundColor: '#1A1A1A', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1.5rem, 4vw, 4rem)', alignItems: 'center' }}>
            <div>
              <ImageWithFallback
                src={heroImg}
                alt="Débarras d'usine — Eure Métal ferrailleur"
                style={{ width: '100%', height: 'clamp(220px, 40vw, 460px)', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.875rem' }}>
                <span style={{ backgroundColor: '#3A8C3E', color: '#FFF', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', padding: '0.25rem 0.625rem', fontWeight: 600 }}>DÉBARRAS INDUSTRIEL</span>
                <span style={{ backgroundColor: '#242424', color: '#6B7280', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.1em', padding: '0.25rem 0.625rem', border: '1px solid #333' }}>DEVIS SUR MESURE</span>
              </div>
              <h2 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                Débarras d'Usine & <span style={{ color: '#3A8C3E' }}>Démolition Industrielle</span>
              </h2>
              <p style={{ color: '#9CA3AF', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Évacuation complète de sites industriels, découpe sur site, démolition de structures métalliques et gestion des déchets ferreux. <strong style={{ color: '#D1D5DB' }}>Devis sur mesure</strong> pour les professionnels, collectivités et industriels.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  { title: 'Débarras d\'usine complet', desc: 'Machines, stocks, racks, mobilier industriel — évacuation totale du site' },
                  { title: 'Démolition & découpe', desc: 'Structures acier, charpentes, cuves, silos — travaux sur site avec nos équipes' },
                  { title: 'Gestion administrative', desc: 'Traçabilité des déchets, bordereaux de suivi, certificats de valorisation' },
                ].map((item) => (
                  <div key={item.title} style={{ backgroundColor: '#242424', padding: '1rem', borderLeft: '3px solid #3A8C3E', display: 'flex', gap: '0.75rem' }}>
                    <CheckCircle size={16} style={{ color: '#3A8C3E', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ color: '#D1D5DB', fontSize: '0.9375rem', fontWeight: 600, marginBottom: '0.25rem' }}>{item.title}</div>
                      <div style={{ color: '#6B7280', fontSize: '0.8125rem', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.75rem', padding: '0.75rem', backgroundColor: '#242424', border: '1px solid #333' }}>
                <Clock size={16} style={{ color: '#3A8C3E', flexShrink: 0 }} />
                <p style={{ color: '#9CA3AF', fontSize: '0.8125rem' }}>
                  Déplacement gratuit pour étude de chantier — Devis sous 48h
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="tel:0232372986"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#3A8C3E', color: '#FFF', padding: '0.875rem 1.75rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1rem', letterSpacing: '0.05em', textDecoration: 'none' }}
                >
                  <Phone size={16} /> 02 32 37 29 86
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

      {/* CTA band */}
      <section style={{ backgroundColor: '#3A8C3E', padding: '3rem 1.5rem' }}>
        <div className="max-w-7xl mx-auto" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
          <h2 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.375rem, 3vw, 2rem)' }}>
            Un besoin ? Un seul interlocuteur pour tous vos services
          </h2>
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

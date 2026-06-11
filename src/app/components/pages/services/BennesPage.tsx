import { Link } from 'react-router';
import { Phone, CheckCircle, MessageCircle, Package } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

const GREEN = '#3A8C3E';
const metalImg = 'https://images.unsplash.com/photo-1606337321936-02d1b1a4d5ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzY3JhcCUyMG1ldGFsJTIwcmVjeWNsaW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3ODExMzE3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080';

const bennes = [
  { size: '7 m³', usage: 'Particuliers, jardinage, tri ménager', idéal: 'Petits travaux, vide-grenier' },
  { size: '10 m³', usage: 'Artisans, chantiers BTP légers', idéal: 'Maçonnerie, plâtrerie, menuiserie' },
  { size: '15 m³', usage: 'Chantiers moyens, ferrailles', idéal: 'Rénovation, découpe métaux' },
  { size: '20 m³', usage: 'Industries, débarras usines', idéal: 'Évacuation massive, gros volumes' },
];

const zones = [
  { dept: '27', villes: 'Évreux, Vernon, Louviers, Bernay, Gisors, Les Andelys, Gaillon, Pacy-sur-Eure, Val-de-Reuil, Pont-Audemer, Conches-en-Ouche, Brionne, Nonancourt, Ponte-de-l\'Arche, Bourg-Achard, Bourgtheroulde, Beuzeville, Le Neubourg, Breteuil, Ivry-la-Bataille, Damville, La Couture-Boussey, Saint-André-de-l\'Eure, Rugles, Chavigny-Bailleul' },
  { dept: '76', villes: 'Rouen, Le Havre, Elbeuf, Yvetot, Barentin, Mont-Saint-Aignan, Sotteville-lès-Rouen, Lillebonne, Dieppe' },
  { dept: '28', villes: 'Chartres, Dreux, Vernouillet, Nogent-le-Rotrou, Châteaudun, Lucé, Maintenon, Anet, Bonneval' },
];

export function BennesPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <section style={{ backgroundColor: '#1A1A1A', padding: 'clamp(2rem, 5vw, 4rem) 1.25rem', borderBottom: `3px solid ${GREEN}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#6B7280', fontSize: '0.8125rem', textDecoration: 'none' }}>Accueil</Link>
            <span style={{ color: '#4B5563' }}>›</span>
            <Link to="/services" style={{ color: '#6B7280', fontSize: '0.8125rem', textDecoration: 'none' }}>Services</Link>
            <span style={{ color: '#4B5563' }}>›</span>
            <span style={{ color: GREEN, fontSize: '0.8125rem' }}>Location de Bennes</span>
          </nav>
          <span style={{ display: 'inline-block', backgroundColor: GREEN, color: '#FFF', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', padding: '0.25rem 0.625rem', marginBottom: '1rem', fontWeight: 600 }}>LOCATION DE BENNES</span>
          <h1 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.625rem, 5vw, 3rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Location de Bennes — <span style={{ color: GREEN }}>Chantiers & Industries en Normandie</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: 'clamp(0.9rem, 2vw, 1.0625rem)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '1.75rem' }}>
            EURE MÉTAL livre vos bennes directement sur site — chantier, atelier, entrepôt ou domicile. Livraison, pose et enlèvement inclus. Déchets ferreux valorisés dans notre centre de recyclage agréé.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="tel:0232372986" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: GREEN, color: '#FFF', padding: 'clamp(0.75rem, 2vw, 0.9375rem) clamp(1.25rem, 3vw, 1.75rem)', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)', textDecoration: 'none' }}>
              <Phone size={18} /> Demander un devis
            </a>
            <a href="https://wa.me/33675888408" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#25D366', color: '#FFF', padding: 'clamp(0.75rem, 2vw, 0.9375rem) clamp(1.25rem, 3vw, 1.75rem)', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)', textDecoration: 'none' }}>
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section style={{ backgroundColor: '#F8F8F8', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>Comment fonctionne la location ?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {[
              { num: '1', icon: <Phone size={22} />, title: 'Devis & Commande', desc: 'Appelez-nous ou envoyez un message. Nous définissons le volume adapté à votre besoin.' },
              { num: '2', icon: <Package size={22} />, title: 'Livraison sur site', desc: 'Votre benne est livrée et posée à l\'adresse souhaitée dans les meilleurs délais.' },
              { num: '3', icon: <CheckCircle size={22} />, title: 'Remplissage', desc: 'Remplissez votre benne à votre rythme avec vos déchets ferreux et métaux.' },
              { num: '4', icon: <CheckCircle size={22} />, title: 'Enlèvement & Valorisation', desc: 'Appelez-nous, nous récupérons la benne. Le contenu est valorisé dans notre centre.' },
            ].map((step) => (
              <div key={step.num} style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', border: '1px solid #E5E7EB', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: GREEN, color: '#FFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  {step.icon}
                </div>
                <h3 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Bennes sizes */}
          <h3 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1.375rem', marginBottom: '1.25rem', textAlign: 'center' }}>
            Volumes disponibles
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {bennes.map((b) => (
              <div key={b.size} style={{ backgroundColor: '#FFFFFF', border: `2px solid ${GREEN}`, padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '2rem', color: GREEN, marginBottom: '0.5rem' }}>{b.size}</div>
                <p style={{ color: '#374151', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>{b.usage}</p>
                <p style={{ color: '#9CA3AF', fontSize: '0.8125rem' }}>Idéal : {b.idéal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE + AVANTAGES */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <ImageWithFallback src={metalImg} alt="Location bennes ferrailles métaux — Eure Métal" style={{ width: '100%', height: 'clamp(220px, 35vw, 380px)', objectFit: 'cover' }} />
            <div>
              <h2 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '1.25rem' }}>
                Pourquoi choisir EURE MÉTAL pour vos bennes ?
              </h2>
              {[
                'Livraison rapide sur toute la zone Normandie',
                'Récupération à la demande — sans contrainte de délai',
                'Déchets ferreux valorisés : zéro déchet en décharge',
                'Certificat de valorisation remis',
                'Tarif compétitif, pas de frais cachés',
                'Professionnels & particuliers bienvenus',
                'Bennes adaptées à tous volumes',
                'Expérience de 30 ans dans le recyclage',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.625rem' }}>
                  <CheckCircle size={15} style={{ color: GREEN, flexShrink: 0 }} />
                  <span style={{ color: '#374151', fontSize: '0.875rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section style={{ backgroundColor: '#1A1A1A', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '2rem', textAlign: 'center' }}>
            Zones de livraison — <span style={{ color: GREEN }}>Bennes métalliques</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {zones.map((z) => (
              <div key={z.dept} style={{ backgroundColor: '#242424', padding: '1.25rem', borderLeft: `3px solid ${GREEN}` }}>
                <div style={{ backgroundColor: GREEN, color: '#FFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '0.9375rem', padding: '0.25rem 0.625rem', display: 'inline-block', marginBottom: '0.625rem' }}>Dept. {z.dept}</div>
                <p style={{ color: '#9CA3AF', fontSize: '0.8125rem', lineHeight: 1.7 }}>{z.villes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: GREEN, padding: 'clamp(2rem, 5vw, 3.5rem) 1.25rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.375rem, 4vw, 2rem)', marginBottom: '1.25rem' }}>Besoin d'une benne ? Appelez-nous !</h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            <a href="tel:0232372986" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FFFFFF', color: GREEN, padding: '0.9375rem 2rem', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.0625rem', textDecoration: 'none' }}>
              <Phone size={18} /> 02 32 37 29 86
            </a>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services/enlevement-epave" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', textDecoration: 'none' }}>→ Enlèvement d'épave</Link>
            <Link to="/services/debarras-usine" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', textDecoration: 'none' }}>→ Débarras d'usine</Link>
            <Link to="/zones" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', textDecoration: 'none' }}>→ Zones d'intervention</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router';
import {
  Phone, Mail, MapPin, ChevronDown, ChevronUp, Star,
  Truck, Recycle, Wrench, Package, Shield, Clock, Award, Users
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const heroImage = 'https://images.unsplash.com/photo-1616551569669-b60598758c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNhdmF0b3IlMjBkZW1vbGl0aW9uJTIwY3JhbmUlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzgxMTMxNzcxfDA&ixlib=rb-4.1.0&q=80&w=1920';
const metalImage = 'https://images.unsplash.com/photo-1606337321936-02d1b1a4d5ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzY3JhcCUyMG1ldGFsJTIwcmVjeWNsaW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3ODExMzE3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080';
const junkImage = 'https://images.unsplash.com/photo-1645216755684-c946ce202427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxqdW5reWFyZCUyMGNhcnMlMjB3cmVja2VkJTIwdmVoaWNsZXMlMjByZWN5Y2xpbmd8ZW58MXx8fHwxNzgxMTMxNzcxfDA&ixlib=rb-4.1.0&q=80&w=1080';

const services = [
  {
    icon: <Truck size={28} />,
    title: "Enlèvement d'épave gratuit",
    label: '100% Gratuit',
    desc: 'Centre VHU agréé PR2700026D. Prise en charge complète : enlèvement, transport, destruction réglementaire et remise du certificat officiel. Sans frais pour vous.',
    to: '/services#enlevement',
    color: '#3A8C3E',
  },
  {
    icon: <Wrench size={28} />,
    title: 'Démolition & Découpage',
    label: 'Sur site',
    desc: 'Découpe au chalumeau, dépose et démolition de structures métalliques, cuves, charpentes et installations techniques sur toute notre zone.',
    to: '/services#demolition',
    color: '#2D6A4F',
  },
  {
    icon: <Package size={28} />,
    title: 'Location de Bennes',
    label: 'Livraison rapide',
    desc: 'Bennes livrées sur votre site (chantier, atelier, usine), récupérées à votre convenance. Le contenu est ensuite valorisé dans notre centre de recyclage.',
    to: '/services#bennes',
    color: '#3A8C3E',
  },
  {
    icon: <Recycle size={28} />,
    title: 'Débarras d\'usine',
    label: 'Devis sur mesure',
    desc: 'Machines, structures et stocks métalliques évacués en totalité — solution globale incluant débarras complet et valorisation des métaux.',
    to: '/services#debarras',
    color: '#2D6A4F',
  },
  {
    icon: <Award size={28} />,
    title: 'Rachat Fer & Métaux',
    label: 'Paiement comptant',
    desc: 'Apportez vos métaux sans RDV sur notre site. Après pesée sur pont-bascule certifié, règlement comptant immédiat. Fer, cuivre, aluminium, inox, laiton…',
    to: '/achats#fer-metaux',
    color: '#3A8C3E',
  },
  {
    icon: <Truck size={28} />,
    title: 'Poids Lourds & TP',
    label: 'Normandie + IDF',
    desc: 'Rachat et enlèvement de poids lourds, engins de chantier, tracteurs et matériels agricoles. Roulants ou non roulants — intervention sur site.',
    to: '/achats#poids-lourds',
    color: '#2D6A4F',
  },
];

const whyUs = [
  { icon: <Shield size={22} />, title: 'Centre Agréé VHU', desc: 'Agrément PR2700026D — Préfecture de l\'Eure. ICPE classée 2712 & 2713. Vous traitez avec un professionnel réglementé.' },
  { icon: <Clock size={22} />, title: '30 ans d\'expérience', desc: 'Depuis 1994, nous intervenons auprès des particuliers, artisans, exploitants et industries de l\'Eure et ses alentours.' },
  { icon: <Award size={22} />, title: 'Tarifs Transparents', desc: 'Pesée certifiée, rachat au cours du jour affiché. Règlement immédiat. Aucune surprise sur la transaction.' },
  { icon: <MapPin size={22} />, title: 'Couverture Locale', desc: 'Eure (27), Seine-Maritime (76), Orne (61), Calvados (14), Eure-et-Loir (28) et Île-de-France pour les poids lourds.' },
  { icon: <Users size={22} />, title: 'Un seul interlocuteur', desc: 'Ferraille, métaux, épaves, bennes, débarras : un seul contact pour tous vos besoins. Devis personnalisé.' },
];

const testimonials = [
  { name: 'Jérôme Van De Putte', date: 'Mai 2025 · Google', text: 'Une équipe très sympathique et toujours disponible. Intervention soignée, je recommande vivement — que vous soyez professionnel ou particulier.' },
  { name: 'Chris Charb', date: 'Mars 2026 · Google', text: 'Service impeccable et amabilité au top. Réactivité exemplaire, rien à redire. Je recommande sans hésitation.' },
  { name: 'Pascal', date: 'Février 2026 · Google', text: 'Parfait de A à Z : accueil excellent, personnel professionnel et attentionné. Bravo à toute l\'équipe pour le sérieux et le bon rapport communicatif.' },
];

const faqs = [
  {
    cat: 'Rachat de métaux',
    items: [
      { q: 'Quels métaux rachetez-vous ?', a: 'Nous rachetons tous les métaux ferreux (fer, acier, fonte) et non ferreux (cuivre, aluminium, inox, laiton, plomb, zinc, nickel). Particuliers et professionnels bienvenus.' },
      { q: 'Rachetez-vous les poids lourds et engins TP ?', a: 'Oui. Camions, remorques, engins de chantier, tracteurs et matériels agricoles, roulants ou non roulants. Intervention sur site possible sur toute la Normandie et l\'Île-de-France.' },
      { q: 'Comment se déroule un dépôt de métaux ?', a: 'Amenez vos métaux sur notre site de Chavigny-Bailleul sans rendez-vous. Nous procédons à la pesée sur pont-bascule certifié et vous réglons comptant immédiatement.' },
    ],
  },
  {
    cat: 'Enlèvement d\'épave',
    items: [
      { q: 'L\'enlèvement d\'épave est-il vraiment gratuit ?', a: 'Oui, l\'enlèvement est 100% gratuit dans l\'Eure (27) et les départements couverts. En tant que centre VHU agréé, nous valorisons le véhicule une fois recyclé. Aucun frais de déplacement ni de prise en charge.' },
      { q: 'Quels documents faut-il pour un enlèvement d\'épave ?', a: 'Idéalement la carte grise du véhicule. Sans carte grise, nous pouvons également intervenir — contactez-nous pour étudier votre situation. Nous remettons le certificat de destruction officiel.' },
    ],
  },
  {
    cat: 'Horaires & Zones',
    items: [
      { q: 'Quels sont vos horaires d\'ouverture ?', a: 'Lundi au vendredi : 8h30–12h00 / 13h30–17h30. Samedi : 9h00–12h00. Fermé le dimanche.' },
      { q: 'Intervenez-vous en dehors de l\'Eure ?', a: 'Oui ! Nous intervenons sur 5 départements normands : Eure (27), Seine-Maritime (76), Orne (61), Calvados (14), Eure-et-Loir (28). Pour les poids lourds, nous couvrons également toute l\'Île-de-France.' },
      { q: 'Proposez-vous la location de bennes ?', a: 'Oui, nous livrons des bennes directement sur votre site (chantier, atelier, usine) dans l\'Eure et les départements limitrophes. Le contenu est valorisé dans notre centre de recyclage.' },
    ],
  },
];

type FaqItem = { q: string; a: string };

function FaqItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 0',
          textAlign: 'left',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <span style={{ color: '#1A1A1A', fontSize: '0.9375rem', fontWeight: 500, paddingRight: '1rem' }}>{item.q}</span>
        {open
          ? <ChevronUp size={18} style={{ color: '#3A8C3E', flexShrink: 0 }} />
          : <ChevronDown size={18} style={{ color: '#6B7280', flexShrink: 0 }} />
        }
      </button>
      {open && (
        <p style={{ color: '#4B5563', fontSize: '0.875rem', lineHeight: 1.7, paddingBottom: '1rem', fontFamily: "'Inter', sans-serif" }}>
          {item.a}
        </p>
      )}
    </div>
  );
}

function SectionTitle({ label, title, subtitle }: { label?: string; title: string; subtitle?: string }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      {label && (
        <span style={{
          display: 'inline-block',
          backgroundColor: '#F0FAF0',
          color: '#3A8C3E',
          fontSize: '0.75rem',
          fontFamily: "'Oswald', sans-serif",
          letterSpacing: '0.15em',
          padding: '0.25rem 0.875rem',
          marginBottom: '0.875rem',
          border: '1px solid #BBF7C0',
        }}>
          {label}
        </span>
      )}
      <h2 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, marginBottom: subtitle ? '0.875rem' : 0 }}>
        {title}
      </h2>
      {subtitle && <p style={{ color: '#6B7280', fontSize: '1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>{subtitle}</p>}
    </div>
  );
}

export function HomePage() {
  const [activeFaqCat, setActiveFaqCat] = useState(0);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: 'clamp(520px, 85vh, 900px)', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <ImageWithFallback
          src={heroImage}
          alt="Ferrailleur Eure — Enlèvement épave et rachat métaux"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,10,10,0.90) 0%, rgba(10,10,10,0.70) 60%, rgba(10,10,10,0.50) 100%)' }} />

        <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1280px', margin: '0 auto', padding: 'clamp(1.5rem, 4vw, 3rem) 1.25rem' }}>
          <div style={{ maxWidth: '700px' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              {['FERRAILLEUR AGRÉÉ', 'CENTRE VHU PR2700026D', 'NORMANDIE & ÎLE-DE-FRANCE'].map((badge) => (
                <span key={badge} style={{ backgroundColor: '#3A8C3E', color: '#FFF', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.12em', padding: '0.25rem 0.625rem', fontWeight: 600 }}>
                  {badge}
                </span>
              ))}
            </div>

            <h1 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem, 6vw, 3.75rem)', lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.01em' }}>
              Ferrailleur Agréé dans l'Eure —{' '}
              <span style={{ color: '#3A8C3E' }}>Rachat de Métaux</span>{' '}
              & Centre VHU
            </h1>

            <p style={{ color: '#D1D5DB', fontSize: 'clamp(0.9rem, 2vw, 1.125rem)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '600px' }}>
              Spécialiste du recyclage métallique dans l'Eure depuis 1994. Enlèvement d'épave gratuit, rachat de ferraille et métaux non ferreux, location de bennes et débarras industriel sur 5 départements.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a
                href="tel:0232372986"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  backgroundColor: '#3A8C3E', color: '#FFF',
                  padding: '0.875rem 1.75rem',
                  fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1.0625rem', letterSpacing: '0.05em',
                  transition: 'background 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2D7031'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#3A8C3E'; }}
              >
                <Phone size={18} /> 02 32 37 29 86
              </a>
              <Link
                to="/contact"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  backgroundColor: 'transparent', color: '#FFF',
                  padding: '0.875rem 1.75rem',
                  border: '2px solid #FFFFFF',
                  fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1.0625rem', letterSpacing: '0.05em',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#FFF';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#1A1A1A';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#FFF';
                }}
              >
                <Mail size={18} /> Obtenir un devis
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {[
                { val: '1994', label: 'Fondation' },
                { val: '5', label: 'Depts couverts' },
                { val: '24h', label: 'Délai intervention' },
                { val: '100%', label: 'Recyclage conforme' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ color: '#3A8C3E', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.75rem', lineHeight: 1 }}>{stat.val}</div>
                  <div style={{ color: '#9CA3AF', fontSize: '0.75rem', letterSpacing: '0.05em', marginTop: '0.25rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scrolldown cue */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', animation: 'bounce 2s infinite' }}>
          <ChevronDown size={28} style={{ color: 'rgba(255,255,255,0.4)' }} />
          <style>{`@keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }`}</style>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section style={{ backgroundColor: '#1A1A1A', padding: '1.5rem 0', borderBottom: '3px solid #3A8C3E' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {[
              { icon: '🛡️', text: 'Épaviste Agréé VHU' },
              { icon: '⚡', text: 'Paiement Instantané' },
              { icon: '📍', text: '5 Départements couverts' },
              { icon: '⏰', text: 'Lun–Ven 8h30–17h30' },
              { icon: '🔖', text: 'Agrément PR2700026D' },
            ].map((item) => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.125rem' }}>{item.icon}</span>
                <span style={{ color: '#D1D5DB', fontSize: '0.875rem', fontWeight: 500 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ backgroundColor: '#F8F8F8', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="NOS SERVICES"
            title="Enlèvement, Démolition, Bennes & Débarras"
            subtitle="Ferrailleur agréé depuis 30 ans, nous proposons une gamme complète de services de recyclage et de valorisation métallique en Normandie."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '1.5rem' }}>
            {services.map((svc) => (
              <div
                key={svc.title}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  padding: '1.75rem',
                  transition: 'all 0.2s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'translateY(-4px)';
                  el.style.boxShadow = '0 12px 32px rgba(0,0,0,0.10)';
                  el.style.borderColor = '#3A8C3E';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = 'none';
                  el.style.borderColor = '#E5E7EB';
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: '3px', height: '100%', backgroundColor: svc.color }} />
                <div style={{ paddingLeft: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ color: svc.color }}>{svc.icon}</div>
                    <span style={{ backgroundColor: svc.color === '#3A8C3E' ? '#F0FAF0' : '#F0FAF5', color: svc.color, fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.1em', padding: '0.2rem 0.625rem', fontWeight: 600 }}>
                      {svc.label}
                    </span>
                  </div>
                  <h3 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1.125rem', letterSpacing: '0.02em', marginBottom: '0.625rem' }}>
                    {svc.title}
                  </h3>
                  <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {svc.desc}
                  </p>
                  <Link
                    to={svc.to}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
                      color: svc.color, fontSize: '0.8125rem', fontWeight: 600,
                      textDecoration: 'none', transition: 'gap 0.2s',
                    }}
                  >
                    En savoir plus →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RACHAT METAUX — Split section */}
      <section style={{ backgroundColor: '#1A1A1A', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1.5rem, 4vw, 4rem)', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'inline-block', backgroundColor: '#3A8C3E', color: '#FFF', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', padding: '0.25rem 0.75rem', marginBottom: '1rem', fontWeight: 600 }}>
                RACHAT DE MÉTAUX
              </span>
              <h2 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                Rachat Fer, Métaux,<br />
                <span style={{ color: '#3A8C3E' }}>Poids Lourds & Engins</span>
              </h2>
              <p style={{ color: '#9CA3AF', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Apportez vos métaux sans rendez-vous sur notre site de Chavigny-Bailleul. Après pesée sur pont-bascule certifié, nous vous réglons comptant immédiatement. Professionnels et particuliers bienvenus.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                {['Fer & Acier', 'Cuivre', 'Aluminium', 'Inox', 'Laiton', 'Plomb & Zinc', 'Nickel & Fonte', 'Poids lourds'].map((metal) => (
                  <div key={metal} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '6px', height: '6px', backgroundColor: '#3A8C3E', flexShrink: 0 }} />
                    <span style={{ color: '#D1D5DB', fontSize: '0.875rem' }}>{metal}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="tel:0232372986"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#3A8C3E', color: '#FFF', padding: '0.75rem 1.5rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.9375rem', letterSpacing: '0.05em', textDecoration: 'none' }}
                >
                  <Phone size={16} /> Appeler maintenant
                </a>
                <Link
                  to="/achats"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'transparent', color: '#D1D5DB', padding: '0.75rem 1.5rem', border: '1px solid #4B5563', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.9375rem', letterSpacing: '0.05em', textDecoration: 'none' }}
                >
                  Voir nos tarifs →
                </Link>
              </div>
            </div>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <ImageWithFallback
                src={metalImage}
                alt="Rachat de métaux — ferraille et cuivre"
                style={{ width: '100%', height: 'clamp(240px, 40vw, 420px)', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: '#3A8C3E', color: '#FFF', padding: '0.75rem 1rem', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1rem', lineHeight: 1.2 }}>
                Rachat au<br />cours du jour
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="POURQUOI NOUS CHOISIR"
            title="Votre Ferrailleur dans l'Eure depuis 30 ans"
            subtitle="Agréé, Local, Fiable — EURE MÉTAL, c'est une expertise reconnue au service des particuliers et des professionnels."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {whyUs.map((item) => (
              <div key={item.title} style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', backgroundColor: '#F0FAF0', color: '#3A8C3E', marginBottom: '1rem' }}>
                  {item.icon}
                </div>
                <h3 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1.0625rem', marginBottom: '0.625rem' }}>{item.title}</h3>
                <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONES BAND */}
      <section style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)', padding: '4rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
          <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', backgroundColor: '#3A8C3E' }} />
        </div>
        <div className="max-w-7xl mx-auto" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center' }} className="grid-cols-1 md:grid-cols-2">
            <div>
              <span style={{ display: 'inline-block', backgroundColor: '#3A8C3E', color: '#FFF', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', padding: '0.25rem 0.75rem', marginBottom: '1rem', fontWeight: 600 }}>
                ZONES D'INTERVENTION
              </span>
              <h2 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem' }}>
                Une Présence Terrain sur 5 Départements Normands + Île-de-France
              </h2>
              <p style={{ color: '#9CA3AF', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Basé à Chavigny-Bailleul, nous couvrons l'Eure (27), l'Eure-et-Loir (28), la Seine-Maritime (76), les Yvelines (78) et l'Orne (61). Voir nos secteurs d'intervention.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Eure (27)', 'Seine-Maritime (76)', 'Orne (61)', 'Calvados (14)', 'Eure-et-Loir (28)', 'Île-de-France (PL/TP)'].map((z) => (
                  <span key={z} style={{ backgroundColor: '#2C2C2C', color: '#D1D5DB', fontSize: '0.8125rem', padding: '0.375rem 0.75rem', border: '1px solid #404040' }}>{z}</span>
                ))}
              </div>
            </div>
            <Link
              to="/zones"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#3A8C3E', color: '#FFF', padding: '1rem 2rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1.0625rem', letterSpacing: '0.05em', textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              Voir toutes nos zones →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ GROUPE EURE MÉTAL — SNR ═══ */}
      <section style={{ backgroundColor: '#0B0F17', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <span style={{ display: 'inline-block', backgroundColor: '#3A8C3E', color: '#fff', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.18em', padding: '0.3rem 1rem', marginBottom: '1rem', fontWeight: 700 }}>
              GROUPE EURE MÉTAL RECYCLAGE
            </span>
            <h2 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', lineHeight: 1.15, marginBottom: '0.875rem' }}>
              Deux sites, <span style={{ color: '#3A8C3E' }}>une expertise commune</span>
            </h2>
            <p style={{ color: '#64748B', fontSize: 'clamp(0.9rem, 2vw, 1rem)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              EURE MÉTAL RECYCLAGE et la SNR forment ensemble un réseau de ferraillage et recyclage de métaux ancré en Normandie depuis 1994.
            </p>
          </div>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(1rem, 3vw, 1.75rem)', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            {/* EURE MÉTAL — siège principal */}
            <div style={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderTop: '3px solid #3A8C3E', padding: 'clamp(1.5rem, 3vw, 2rem)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '80px', height: '80px', background: 'radial-gradient(circle at top right, rgba(58,140,62,0.12), transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#3A8C3E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.25rem' }}>🏭</div>
                <div>
                  <p style={{ color: '#3A8C3E', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.0625rem', letterSpacing: '0.05em' }}>EURE MÉTAL RECYCLAGE</p>
                  <p style={{ color: '#475569', fontSize: '0.75rem', marginTop: '0.125rem' }}>Siège principal — Centre VHU agréé</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {[
                  { icon: '📍', label: 'Adresse', val: '30 Rue du Bois de la Vigne\n27220 Chavigny-Bailleul — Eure (27)' },
                  { icon: '📞', label: 'Fixe', val: '02 32 37 29 86' },
                  { icon: '📱', label: 'Portable', val: '06 75 88 84 08' },
                  { icon: '✉️', label: 'Email', val: 'eure.metal494@orange.fr' },
                  { icon: '🕐', label: 'Horaires', val: 'Lun–Ven 8h30–12h / 13h30–17h30\nSam 9h–12h' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
                    <div>
                      <span style={{ color: '#475569', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.08em', display: 'block' }}>{item.label.toUpperCase()}</span>
                      {item.val.split('\n').map((line, i) => (
                        <span key={i} style={{ color: '#CBD5E1', fontSize: '0.875rem', display: 'block' }}>{line}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
                <a href="tel:0232372986" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', backgroundColor: '#3A8C3E', color: '#fff', padding: '0.625rem 1.125rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', flex: 1, justifyContent: 'center' }}>
                  📞 Appeler
                </a>
                <a href="https://maps.google.com/?q=30+Rue+du+Bois+de+la+Vigne,+27220+Chavigny-Bailleul" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', backgroundColor: 'transparent', color: '#94A3B8', padding: '0.625rem 1.125rem', border: '1px solid #1E293B', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', flex: 1, justifyContent: 'center' }}>
                  🗺️ Itinéraire
                </a>
              </div>

              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                {['Centre VHU PR2700026D', 'ICPE 2712', 'ICPE 2713', 'Depuis 1994'].map((tag) => (
                  <span key={tag} style={{ backgroundColor: '#1E293B', color: '#64748B', fontSize: '0.6875rem', padding: '0.2rem 0.5rem' }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* SNR — membre du groupe */}
            <div style={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderTop: '3px solid #2D7031', padding: 'clamp(1.5rem, 3vw, 2rem)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '80px', height: '80px', background: 'radial-gradient(circle at top right, rgba(45,112,49,0.10), transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#2D7031', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.25rem' }}>🔄</div>
                <div>
                  <p style={{ color: '#4ADE80', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.0625rem', letterSpacing: '0.05em' }}>LA SNR</p>
                  <p style={{ color: '#475569', fontSize: '0.75rem', marginTop: '0.125rem' }}>Société Normande de Recyclage — membre du Groupe EURE MÉTAL</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {[
                  { icon: '📍', label: 'Adresse', val: 'Chemin des Vignes\n27120 Chaignes — Eure (27)' },
                  { icon: '📞', label: 'Téléphone', val: '02 32 38 60 09' },
                  { icon: '🔧', label: 'Activité', val: 'Ferrailleur — Rachat de métaux\nNormandie' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
                    <div>
                      <span style={{ color: '#475569', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.08em', display: 'block' }}>{item.label.toUpperCase()}</span>
                      {item.val.split('\n').map((line, i) => (
                        <span key={i} style={{ color: '#CBD5E1', fontSize: '0.875rem', display: 'block' }}>{line}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ color: '#475569', fontSize: '0.8125rem', lineHeight: 1.6, marginBottom: '1.5rem', backgroundColor: '#060A10', padding: '0.875rem', borderLeft: '2px solid #2D7031' }}>
                La SNR — Société Normande de Recyclage est membre du Groupe <strong style={{ color: '#4ADE80' }}>EURE MÉTAL RECYCLAGE</strong>. Deux implantations en Normandie pour mieux vous servir.
              </p>

              <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
                <a href="tel:0232386009" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', backgroundColor: '#2D7031', color: '#fff', padding: '0.625rem 1.125rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', flex: 1, justifyContent: 'center' }}>
                  📞 02 32 38 60 09
                </a>
                <a href="https://s-n-r-societe-normande-de-recyclage.vercel.app/contact" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', backgroundColor: 'transparent', color: '#94A3B8', padding: '0.625rem 1.125rem', border: '1px solid #1E293B', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', flex: 1, justifyContent: 'center' }}>
                  Site SNR →
                </a>
              </div>
            </div>
          </div>

          {/* Distance between sites */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ height: '1px', flex: 1, maxWidth: '120px', backgroundColor: '#1E293B' }} />
            <div style={{ display: 'flex', align: 'center', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { val: '2', label: 'Sites en Normandie' },
                { val: '30+', label: "Ans d'expérience" },
                { val: '100%', label: 'Recyclage conforme' },
                { val: '24h', label: 'Délai intervention' },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: 'center', padding: '0 1rem' }}>
                  <div style={{ color: '#3A8C3E', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', lineHeight: 1 }}>{s.val}</div>
                  <div style={{ color: '#475569', fontSize: '0.75rem', marginTop: '0.25rem', whiteSpace: 'nowrap' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ height: '1px', flex: 1, maxWidth: '120px', backgroundColor: '#1E293B' }} />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ backgroundColor: '#F8F8F8', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="TÉMOIGNAGES"
            title="Ils Nous Font Confiance"
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t) => (
              <div key={t.name} style={{ backgroundColor: '#FFFFFF', padding: '2rem', border: '1px solid #E5E7EB', position: 'relative' }}>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} style={{ color: '#F59E0B', fill: '#F59E0B' }} />
                  ))}
                </div>
                <p style={{ color: '#374151', fontSize: '0.9375rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  « {t.text} »
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '36px', height: '36px', backgroundColor: '#3A8C3E', color: '#FFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.875rem' }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ color: '#1A1A1A', fontSize: '0.875rem', fontWeight: 600 }}>{t.name}</div>
                    <div style={{ color: '#9CA3AF', fontSize: '0.75rem' }}>{t.date}</div>
                  </div>
                </div>
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', color: '#3A8C3E', opacity: 0.15, fontFamily: "'Oswald', sans-serif", fontSize: '4rem', lineHeight: 1 }}>"</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>★ Avis Google vérifiés</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            label="FAQ"
            title="Les Réponses Essentielles"
            subtitle="Avant de nous contacter, retrouvez ici les réponses aux questions les plus fréquentes."
          />

          {/* Category tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem', justifyContent: 'center' }}>
            {faqs.map((cat, i) => (
              <button
                key={cat.cat}
                onClick={() => setActiveFaqCat(i)}
                style={{
                  padding: '0.5rem 1.25rem',
                  fontFamily: "'Oswald', sans-serif", fontWeight: 500, fontSize: '0.875rem', letterSpacing: '0.05em',
                  backgroundColor: activeFaqCat === i ? '#3A8C3E' : '#F3F4F6',
                  color: activeFaqCat === i ? '#FFF' : '#6B7280',
                  border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                {cat.cat}
              </button>
            ))}
          </div>

          <div>
            {faqs[activeFaqCat].items.map((item) => (
              <FaqItem key={item.q} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section style={{ backgroundColor: '#1A1A1A', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem', borderTop: '3px solid #3A8C3E' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', marginBottom: '3rem' }}>
            <h2 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
              Contactez <span style={{ color: '#3A8C3E' }}>EURE MÉTAL</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1rem', lineHeight: 1.6 }}>
              Ferrailleur, recycleur et centre VHU agréé — un seul appel pour tous vos besoins en métaux et recyclage.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {[
              { icon: <Phone size={22} />, label: 'Téléphone', value: '02 32 37 29 86', href: 'tel:0232372986' },
              { icon: <Phone size={22} />, label: 'Portable', value: '06 75 88 84 08', href: 'tel:0675888408' },
              { icon: <Mail size={22} />, label: 'Email', value: 'eure.metal494@orange.fr', href: 'mailto:eure.metal494@orange.fr' },
              { icon: <MapPin size={22} />, label: 'Adresse', value: '30 Rue du Bois de la Vigne, 27220 Chavigny-Bailleul', href: '#' },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.5rem', backgroundColor: '#242424', border: '1px solid #333', textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#3A8C3E'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#333'; }}
              >
                <div style={{ color: '#3A8C3E', marginBottom: '0.75rem' }}>{c.icon}</div>
                <div style={{ color: '#6B7280', fontSize: '0.75rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.1em', marginBottom: '0.375rem' }}>{c.label.toUpperCase()}</div>
                <div style={{ color: '#D1D5DB', fontSize: '0.9rem', fontWeight: 500 }}>{c.value}</div>
              </a>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              to="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#3A8C3E', color: '#FFF', padding: '1rem 2.5rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1.125rem', letterSpacing: '0.05em', textDecoration: 'none' }}
            >
              Appeler maintenant — 02 32 37 29 86
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

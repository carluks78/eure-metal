import { useState } from 'react';
import { Link } from 'react-router';
import { Phone, CheckCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

const GREEN = '#3A8C3E';
const junkImg = 'https://images.unsplash.com/photo-1687867455818-0701641199c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdW5reWFyZCUyMGNhcnMlMjB3cmVja2VkJTIwdmVoaWNsZXMlMjByZWN5Y2xpbmd8ZW58MXx8fHwxNzgxMTMxNzcxfDA&ixlib=rb-4.1.0&q=80&w=1080';
const abandonedImg = 'https://images.unsplash.com/photo-1557149584-d52885dcab62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxqdW5reWFyZCUyMGNhcnMlMjB3cmVja2VkJTIwdmVoaWNsZXMlMjByZWN5Y2xpbmd8ZW58MXx8fHwxNzgxMTMxNzcxfDA&ixlib=rb-4.1.0&q=80&w=1080';

const cities27 = ['Évreux', 'Vernon', 'Louviers', 'Bernay', 'Gisors', 'Les Andelys', 'Gaillon', 'Pacy-sur-Eure', 'Conches-en-Ouche', 'Brionne', 'Pont-Audemer', 'Pont-de-l\'Arche', 'Val-de-Reuil', 'Nonancourt', 'Chavigny-Bailleul', 'Ivry-la-Bataille', 'Damville', 'Beaumont-le-Roger', 'La Couture-Boussey', 'Rugles', 'Saint-André-de-l\'Eure', 'Breteuil', 'Hécourt', 'Brosville', 'Arnières-sur-Iton', 'Bourgtheroulde', 'Bourg-Achard', 'Le Neubourg', 'Beuzeville', 'Hardencourt-Cocherel', 'Fleury-sur-Andelle'];
const cities76 = ['Rouen', 'Le Havre', 'Dieppe', 'Fécamp', 'Elbeuf', 'Yvetot', 'Barentin', 'Mont-Saint-Aignan', 'Sotteville-lès-Rouen', 'Lillebonne'];
const cities61 = ['Alençon', 'Flers', 'Argentan', 'L\'Aigle', 'Mortagne-au-Perche', 'Domfront', 'Briouze', 'Vimoutiers'];
const cities14 = ['Caen', 'Lisieux', 'Bayeux', 'Hérouville-Saint-Clair', 'Honfleur', 'Vire', 'Falaise', 'Trouville-sur-Mer'];
const cities28 = ['Chartres', 'Dreux', 'Nogent-le-Rotrou', 'Vernouillet', 'Châteaudun', 'Lucé', 'Maintenon', 'Anet'];

const faqItems = [
  { q: 'L\'enlèvement d\'épave est-il vraiment gratuit dans l\'Eure ?', a: 'Oui, l\'enlèvement est 100% gratuit dans l\'Eure (27) et les départements couverts. En tant que centre VHU agréé PR2700026D, nous valorisons le véhicule une fois recyclé. Aucun frais de déplacement ni de prise en charge.' },
  { q: 'Quels types de véhicules enlevez-vous ?', a: 'Nous enlevons toutes les épaves : voitures particulières, utilitaires, camionnettes, motos, scooters, caravanes et même certains engins agricoles légers. Roulants ou non roulants.' },
  { q: 'Que faut-il comme documents pour l\'enlèvement ?', a: 'Idéalement la carte grise. Sans carte grise, nous pouvons intervenir — contactez-nous pour étudier votre situation. Nous remettons le certificat de destruction officiel dans les 24h.' },
  { q: 'Combien de temps après l\'appel intervenez-vous ?', a: 'Dans l\'Eure (27) : intervention possible sous 24h selon disponibilité. Pour les autres départements couverts, délai de 24 à 72h. Appelez le 02 32 37 29 86 pour caler un rendez-vous.' },
  { q: 'Peut-on être rémunéré pour la récupération d\'un véhicule ?', a: 'Dans certains cas, si le véhicule présente une valeur en métaux suffisante (valeur en cuivre, aluminium, etc.), nous pouvons proposer un rachat. Contactez-nous avec une description du véhicule pour obtenir une estimation.' },
  { q: 'Intervenez-vous pour des poids lourds hors d\'usage ?', a: 'Oui, nous enlevons aussi les poids lourds, bus et engins hors d\'usage dans toute la Normandie et l\'Île-de-France. Tarif et rachat éventuel selon état.' },
  { q: 'Qu\'est-ce qu\'un centre VHU agréé ?', a: 'Un centre VHU (Véhicule Hors d\'Usage) agréé est un établissement autorisé par la préfecture pour prendre en charge les véhicules en fin de vie conformément à la réglementation environnementale. Notre agrément est le PR2700026D, délivré par la Préfecture de l\'Eure.' },
  { q: 'La dépollution est-elle incluse ?', a: 'Oui. La dépollution complète (vidange des huiles, liquides, carburant, batteries) est effectuée dans notre centre selon les normes ICPE 2712 et 2713. Elle est incluse dans la prise en charge gratuite.' },
];

function FaqItem({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}
      >
        <span style={{ color: '#1A1A1A', fontSize: '0.9375rem', fontWeight: 500, paddingRight: '1rem' }}>{item.q}</span>
        {open ? <ChevronUp size={18} style={{ color: GREEN, flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: '#6B7280', flexShrink: 0 }} />}
      </button>
      {open && <p style={{ color: '#4B5563', fontSize: '0.875rem', lineHeight: 1.7, paddingBottom: '1rem', fontFamily: "'Inter', sans-serif" }}>{item.a}</p>}
    </div>
  );
}

function CityGrid({ title, cities, dept }: { title: string; cities: string[]; dept: string }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h3 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ backgroundColor: GREEN, color: '#FFF', fontSize: '0.6875rem', padding: '0.15rem 0.5rem', fontFamily: "'Oswald', sans-serif" }}>{dept}</span>
        {title}
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
        {cities.map((city) => (
          <span key={city} style={{ backgroundColor: '#F8F8F8', color: '#374151', fontSize: '0.8125rem', padding: '0.25rem 0.625rem', border: '1px solid #E5E7EB' }}>{city}</span>
        ))}
      </div>
    </div>
  );
}

export function EnlevementEpavePage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* HERO */}
      <section style={{ backgroundColor: '#1A1A1A', padding: 'clamp(2rem, 5vw, 4rem) 1.25rem', borderBottom: `3px solid ${GREEN}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#6B7280', fontSize: '0.8125rem', textDecoration: 'none' }}>Accueil</Link>
            <span style={{ color: '#4B5563' }}>›</span>
            <Link to="/services" style={{ color: '#6B7280', fontSize: '0.8125rem', textDecoration: 'none' }}>Services</Link>
            <span style={{ color: '#4B5563' }}>›</span>
            <span style={{ color: GREEN, fontSize: '0.8125rem' }}>Enlèvement d'épave</span>
          </nav>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <span style={{ backgroundColor: GREEN, color: '#FFF', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', padding: '0.25rem 0.625rem', fontWeight: 600 }}>100% GRATUIT</span>
            <span style={{ backgroundColor: '#242424', color: '#9CA3AF', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.1em', padding: '0.25rem 0.625rem', border: '1px solid #333' }}>VHU AGRÉÉ PR2700026D</span>
            <span style={{ backgroundColor: '#242424', color: '#9CA3AF', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.1em', padding: '0.25rem 0.625rem', border: '1px solid #333' }}>ICPE 2712 & 2713</span>
          </div>
          <h1 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.625rem, 5vw, 3rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Enlèvement d'Épave Gratuit dans l'Eure (27)<br />
            <span style={{ color: GREEN }}>Centre VHU Agréé — Intervention sous 24h</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: 'clamp(0.9rem, 2vw, 1.0625rem)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '1.75rem' }}>
            EURE MÉTAL, ferrailleur et épaviste agréé dans l'Eure depuis 1994, assure l'enlèvement gratuit de vos voitures, utilitaires et motos hors d'usage avec remise du certificat de destruction officiel. Voiture, camionnette, moto — roulante ou non roulante.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="tel:0232372986" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: GREEN, color: '#FFF', padding: 'clamp(0.75rem, 2vw, 0.9375rem) clamp(1.25rem, 3vw, 1.75rem)', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)', letterSpacing: '0.05em', textDecoration: 'none' }}>
              <Phone size={18} /> 02 32 37 29 86
            </a>
            <a href="https://wa.me/33675888408?text=Bonjour%2C%20je%20souhaite%20un%20enlèvement%20d'épave%20gratuit." target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#25D366', color: '#FFF', padding: 'clamp(0.75rem, 2vw, 0.9375rem) clamp(1.25rem, 3vw, 1.75rem)', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)', textDecoration: 'none' }}>
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section style={{ backgroundColor: '#F8F8F8', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ display: 'inline-block', backgroundColor: '#F0FAF0', color: GREEN, fontSize: '0.75rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', padding: '0.25rem 0.875rem', marginBottom: '0.75rem', border: `1px solid #BBF7C0` }}>COMMENT ÇA MARCHE</span>
            <h2 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', lineHeight: 1.2 }}>Enlèvement en 3 étapes simples</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { num: '01', title: 'Contactez-nous', desc: 'Appelez le 02 32 37 29 86 ou envoyez un message WhatsApp. Décrivez votre véhicule (marque, modèle, état) et votre localisation.' },
              { num: '02', title: 'On vient chez vous', desc: 'Nos équipes se déplacent directement à votre adresse dans l\'Eure (27) et les départements couverts. Sous 24h dans l\'Eure.' },
              { num: '03', title: 'Enlèvement gratuit', desc: 'Votre épave est enlevée sans frais. Vous recevez le certificat de destruction officiel sous 24h. Toutes les démarches administratives sont prises en charge.' },
            ].map((step) => (
              <div key={step.num} style={{ backgroundColor: '#FFFFFF', padding: 'clamp(1.25rem, 3vw, 2rem)', border: '1px solid #E5E7EB', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem, 8vw, 4.5rem)', color: '#F0F0F0', position: 'absolute', top: '-0.5rem', right: '0.75rem', lineHeight: 1, userSelect: 'none' }}>{step.num}</div>
                <div style={{ width: '40px', height: '4px', backgroundColor: GREEN, marginBottom: '1.25rem' }} />
                <h3 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.625rem' }}>{step.title}</h3>
                <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE TAKE + IMAGE */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2.125rem)', marginBottom: '1.25rem' }}>
                Quels véhicules <span style={{ color: GREEN }}>acceptons-nous ?</span>
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.75rem' }}>
                {['Voitures particulières', 'Utilitaires & fourgons', 'Motos & scooters', 'Camionnettes', 'Caravanes', 'Sans carte grise OK', 'Roulants ou non', 'Dépollution incluse'].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={15} style={{ color: GREEN, flexShrink: 0 }} />
                    <span style={{ color: '#374151', fontSize: '0.875rem' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ backgroundColor: '#F0FAF0', border: `1px solid #BBF7C0`, borderLeft: `3px solid ${GREEN}`, padding: '1rem' }}>
                <p style={{ color: '#1A4B1E', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  <strong>Sans carte grise ?</strong> Pas de problème — contactez-nous, nous trouverons une solution administrative. L'essentiel est que le véhicule soit votre propriété.
                </p>
              </div>
            </div>
            <ImageWithFallback src={junkImg} alt="Enlèvement épave gratuit — centre VHU agréé Eure Métal" style={{ width: '100%', height: 'clamp(250px, 40vw, 420px)', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ZONES — VILLES */}
      <section style={{ backgroundColor: '#1A1A1A', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ display: 'inline-block', backgroundColor: GREEN, color: '#FFF', fontSize: '0.75rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', padding: '0.25rem 0.875rem', marginBottom: '0.75rem', fontWeight: 600 }}>ZONES D'INTERVENTION</span>
            <h2 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', lineHeight: 1.2 }}>
              Enlèvement d'épave sur 5 départements normands
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { dept: '27', title: 'Eure', cities: cities27 },
              { dept: '76', title: 'Seine-Maritime', cities: cities76 },
              { dept: '61', title: 'Orne', cities: cities61 },
              { dept: '14', title: 'Calvados', cities: cities14 },
              { dept: '28', title: 'Eure-et-Loir', cities: cities28 },
            ].map((zone) => (
              <div key={zone.dept} style={{ backgroundColor: '#242424', border: '1px solid #333', overflow: 'hidden' }}>
                <div style={{ backgroundColor: GREEN, padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <span style={{ color: '#FFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.125rem' }}>{zone.dept}</span>
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem', fontWeight: 500 }}>{zone.title}</span>
                </div>
                <div style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                    {zone.cities.map((city) => (
                      <span key={city} style={{ color: '#9CA3AF', fontSize: '0.75rem', padding: '0.125rem 0.375rem', backgroundColor: '#1A1A1A', border: '1px solid #374151' }}>{city}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ color: '#6B7280', fontSize: '0.875rem', textAlign: 'center', marginTop: '1.5rem' }}>
            Votre commune n'apparaît pas ? Appelez-nous — nous étudions toutes les demandes.
          </p>
        </div>
      </section>

      {/* VHU IMAGE */}
      <section style={{ padding: 0 }}>
        <ImageWithFallback src={abandonedImg} alt="Épave voiture abandonnée — enlèvement gratuit Eure" style={{ width: '100%', height: 'clamp(200px, 35vw, 400px)', objectFit: 'cover', objectPosition: 'center 60%' }} />
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ display: 'inline-block', backgroundColor: '#F0FAF0', color: GREEN, fontSize: '0.75rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', padding: '0.25rem 0.875rem', marginBottom: '0.75rem', border: `1px solid #BBF7C0` }}>FAQ ENLÈVEMENT ÉPAVE</span>
            <h2 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2rem)', lineHeight: 1.2 }}>Questions fréquentes</h2>
          </div>
          {faqItems.map((item) => <FaqItem key={item.q} item={item} />)}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: GREEN, padding: 'clamp(2rem, 5vw, 3.5rem) 1.25rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.375rem, 4vw, 2rem)', marginBottom: '0.75rem' }}>
            Enlèvement gratuit sous 24h — Eure & Normandie
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', marginBottom: '1.5rem' }}>Centre VHU agréé PR2700026D · Certificat de destruction officiel · 100% sans frais</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:0232372986" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FFFFFF', color: GREEN, padding: '0.9375rem 2rem', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.0625rem', textDecoration: 'none' }}>
              <Phone size={18} /> 02 32 37 29 86
            </a>
            <a href="https://wa.me/33675888408?text=Bonjour%2C%20je%20souhaite%20un%20enlèvement%20d'épave%20gratuit." target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#25D366', color: '#FFFFFF', padding: '0.9375rem 2rem', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.0625rem', textDecoration: 'none' }}>
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services/demolition-decoupe" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', textDecoration: 'none' }}>→ Démolition & Découpage</Link>
            <Link to="/services/location-bennes" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', textDecoration: 'none' }}>→ Location de Bennes</Link>
            <Link to="/zones" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', textDecoration: 'none' }}>→ Zones d'intervention</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

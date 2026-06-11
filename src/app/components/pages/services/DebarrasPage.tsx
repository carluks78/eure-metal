import { Link } from 'react-router';
import { Phone, CheckCircle, MessageCircle, Clock } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

const GREEN = '#3A8C3E';
const heroImg = 'https://images.unsplash.com/photo-1603655534191-ea4d80072bf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxleGNhdmF0b3IlMjBkZW1vbGl0aW9uJTIwY3JhbmUlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzgxMTMxNzcxfDA&ixlib=rb-4.1.0&q=80&w=1080';

const clientTypes = [
  { title: 'Industriels', items: ['Usines en fermeture', 'Ateliers mécaniques', 'Fonderies', 'Agroalimentaire', 'Imprimeries'] },
  { title: 'Professionnels', items: ['Artisans et PME', 'Transporteurs', 'Agriculteurs', 'Garages automobiles', 'Négociants'] },
  { title: 'Collectivités', items: ['Communes & EPCI', 'Écoles et établissements', 'Centres techniques', 'Marchés municipaux', 'Services voirie'] },
  { title: 'Particuliers', items: ['Maisons à vider', 'Héritages & successions', 'Granges et dépendances', 'Caves et greniers', 'Jardins & remises'] },
];

const zones = [
  { dept: '27', label: 'Eure', villes: 'Évreux, Vernon, Louviers, Bernay, Gisors, Les Andelys, Gaillon, Pacy-sur-Eure, Val-de-Reuil, Pont-Audemer, Conches-en-Ouche, Brionne, Nonancourt, Pont-de-l\'Arche, Bourg-Achard, Bourgtheroulde, Beuzeville, Le Neubourg, Breteuil, Ivry-la-Bataille, Damville, La Couture-Boussey, Rugles, Saint-André-de-l\'Eure, Chavigny-Bailleul' },
  { dept: '76', label: 'Seine-Maritime', villes: 'Rouen, Le Havre, Dieppe, Fécamp, Elbeuf, Yvetot, Barentin, Mont-Saint-Aignan, Sotteville-lès-Rouen' },
  { dept: '61', label: 'Orne', villes: 'Alençon, Flers, Argentan, L\'Aigle, Mortagne-au-Perche, Domfront, Sées' },
  { dept: '14', label: 'Calvados', villes: 'Caen, Lisieux, Bayeux, Hérouville-Saint-Clair, Honfleur, Vire, Falaise' },
  { dept: '28', label: 'Eure-et-Loir', villes: 'Chartres, Dreux, Nogent-le-Rotrou, Vernouillet, Châteaudun, Lucé, Maintenon' },
  { dept: 'IDF', label: 'Île-de-France', villes: 'Paris, Versailles, Nanterre, Saint-Denis, Créteil, Meaux, Évry, Cergy, Melun, Mantes-la-Jolie et agglomérations' },
];

export function DebarrasPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <section style={{ backgroundColor: '#1A1A1A', padding: 'clamp(2rem, 5vw, 4rem) 1.25rem', borderBottom: `3px solid ${GREEN}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#6B7280', fontSize: '0.8125rem', textDecoration: 'none' }}>Accueil</Link>
            <span style={{ color: '#4B5563' }}>›</span>
            <Link to="/services" style={{ color: '#6B7280', fontSize: '0.8125rem', textDecoration: 'none' }}>Services</Link>
            <span style={{ color: '#4B5563' }}>›</span>
            <span style={{ color: GREEN, fontSize: '0.8125rem' }}>Débarras d'usine</span>
          </nav>
          <span style={{ display: 'inline-block', backgroundColor: GREEN, color: '#FFF', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', padding: '0.25rem 0.625rem', marginBottom: '1rem', fontWeight: 600 }}>DÉBARRAS INDUSTRIEL</span>
          <h1 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.625rem, 5vw, 3rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Débarras d'Usine & <span style={{ color: GREEN }}>Démolition Industrielle</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: 'clamp(0.9rem, 2vw, 1.0625rem)', lineHeight: 1.7, maxWidth: '700px', marginBottom: '1.75rem' }}>
            Évacuation complète de sites industriels en Normandie et Île-de-France. Machines, structures métalliques, stocks ferreux — EURE MÉTAL assure la prise en charge totale avec traçabilité et valorisation garanties. Devis sur mesure professionnel, collectivités et particuliers.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="tel:0232372986" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: GREEN, color: '#FFF', padding: 'clamp(0.75rem, 2vw, 0.9375rem) clamp(1.25rem, 3vw, 1.75rem)', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)', textDecoration: 'none' }}>
              <Phone size={18} /> Devis sur mesure
            </a>
            <a href="https://wa.me/33675888408" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#25D366', color: '#FFF', padding: 'clamp(0.75rem, 2vw, 0.9375rem) clamp(1.25rem, 3vw, 1.75rem)', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)', textDecoration: 'none' }}>
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <ImageWithFallback src={heroImg} alt="Débarras d'usine et démolition industrielle — Eure Métal" style={{ width: '100%', height: 'clamp(200px, 35vw, 420px)', objectFit: 'cover' }} />

      {/* CE QUE NOUS FAISONS */}
      <section style={{ backgroundColor: '#F8F8F8', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
              Débarras & évacuation — <span style={{ color: GREEN }}>Tout type de site</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {[
              { title: 'Débarras d\'usine complet', desc: 'Machines, racks, convoyeurs, mobilier industriel — évacuation totale du site avec valorisation des métaux.' },
              { title: 'Démolition & découpe sur site', desc: 'Structures acier, charpentes, cuves, silos découpés et évacués par nos équipes spécialisées.' },
              { title: 'Gestion administrative', desc: 'Traçabilité BSDD, bordereaux de suivi, certificats de valorisation remis selon la réglementation.' },
              { title: 'Vide-grange & dépendances', desc: 'Ferrailles, machines agricoles, outils — débarras complet des granges, remises et hangars.' },
              { title: 'Succession & héritage', desc: 'Prise en charge discrète et rapide pour les particuliers. Débarras de maison avec tri des métaux.' },
              { title: 'Dépollution incluse', desc: 'Vidange des huiles, retrait batteries, dépollution des équipements avant évacuation.' },
            ].map((item) => (
              <div key={item.title} style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', border: '1px solid #E5E7EB', borderTop: `3px solid ${GREEN}` }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={16} style={{ color: GREEN, flexShrink: 0, marginTop: '2px' }} />
                  <h3 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1rem' }}>{item.title}</h3>
                </div>
                <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.6, paddingLeft: '1.375rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Client types */}
          <h3 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.375rem', marginBottom: '1.5rem', textAlign: 'center' }}>Nous intervenons pour</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {clientTypes.map((type) => (
              <div key={type.title} style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', border: '1px solid #E5E7EB' }}>
                <h4 style={{ color: GREEN, fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.75rem', borderBottom: `1px solid ${GREEN}`, paddingBottom: '0.375rem' }}>{type.title}</h4>
                {type.items.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.375rem' }}>
                    <div style={{ width: '5px', height: '5px', backgroundColor: GREEN, flexShrink: 0 }} />
                    <span style={{ color: '#374151', fontSize: '0.8125rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DÉLAI + PROCESS */}
      <section style={{ backgroundColor: '#1A1A1A', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.75rem' }}>
            <Clock size={20} style={{ color: GREEN }} />
            <span style={{ color: GREEN, fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.1em' }}>PROCESSUS & DÉLAIS</span>
          </div>
          <h2 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '2rem' }}>
            Un devis en 48h, une intervention sur mesure
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { step: '1', title: 'Contact & Description', desc: 'Appelez ou écrivez. Décrivez le site, les volumes et l\'accès. Photos bienvenues.' },
              { step: '2', title: 'Visite & Devis', desc: 'Déplacement gratuit pour étude de chantier. Devis détaillé sous 48h.' },
              { step: '3', title: 'Planification', desc: 'Nous définissons ensemble les dates et la durée d\'intervention selon vos contraintes.' },
              { step: '4', title: 'Intervention & Livraison', desc: 'Nos équipes interviennent. Remise des certificats et documents à l\'issue du chantier.' },
            ].map((step) => (
              <div key={step.step} style={{ backgroundColor: '#242424', padding: '1.5rem', borderLeft: `3px solid ${GREEN}` }}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '2rem', color: GREEN, marginBottom: '0.625rem', lineHeight: 1 }}>{step.step}</div>
                <h3 style={{ color: '#F3F4F6', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section style={{ backgroundColor: '#F8F8F8', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '2rem', textAlign: 'center' }}>
            Zones d'intervention — Débarras d'usine
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {zones.map((z) => (
              <div key={z.dept} style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', border: '1px solid #E5E7EB', borderLeft: `3px solid ${GREEN}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.625rem' }}>
                  <span style={{ backgroundColor: GREEN, color: '#FFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '0.875rem', padding: '0.125rem 0.5rem' }}>{z.dept}</span>
                  <span style={{ color: '#1A1A1A', fontWeight: 600, fontSize: '0.9375rem' }}>{z.label}</span>
                </div>
                <p style={{ color: '#6B7280', fontSize: '0.8125rem', lineHeight: 1.6 }}>{z.villes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: GREEN, padding: 'clamp(2rem, 5vw, 3.5rem) 1.25rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.375rem, 4vw, 2rem)', marginBottom: '0.75rem' }}>Déplacement gratuit · Devis sous 48h</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', marginBottom: '1.5rem' }}>Un seul interlocuteur de la visite à la remise des certificats.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <a href="tel:0232372986" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FFFFFF', color: GREEN, padding: '0.9375rem 2rem', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.0625rem', textDecoration: 'none' }}>
              <Phone size={18} /> 02 32 37 29 86
            </a>
            <a href="https://wa.me/33675888408" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#25D366', color: '#FFF', padding: '0.9375rem 2rem', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.0625rem', textDecoration: 'none' }}>
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services/demolition-decoupe" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', textDecoration: 'none' }}>→ Démolition & Découpage</Link>
            <Link to="/services/location-bennes" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', textDecoration: 'none' }}>→ Location de bennes</Link>
            <Link to="/zones" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', textDecoration: 'none' }}>→ Zones d'intervention</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

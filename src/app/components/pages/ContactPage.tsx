import { useState } from 'react';
import { Link } from 'react-router';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

type FormData = {
  nom: string;
  telephone: string;
  email: string;
  ville: string;
  service: string;
  message: string;
  rgpd: boolean;
};

const services = [
  'Enlèvement d\'épave (VHU)',
  'Rachat de fer & métaux',
  'Location de bennes',
  'Débarras d\'usine',
  'Démolition & découpe',
  'Rachat poids lourds / TP',
  'Autre demande',
];

function OpenIndicator() {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const time = hours * 60 + minutes;

  let isOpen = false;
  if (day >= 1 && day <= 5) {
    const morningOpen = 8 * 60 + 30;
    const morningClose = 12 * 60;
    const afteOpen = 13 * 60 + 30;
    const afteClose = 17 * 60 + 30;
    isOpen = (time >= morningOpen && time < morningClose) || (time >= afteOpen && time < afteClose);
  } else if (day === 6) {
    isOpen = time >= 9 * 60 && time < 12 * 60;
  }

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: isOpen ? '#F0FAF5' : '#FEF2F2', border: `1px solid ${isOpen ? '#BBF7D0' : '#FECACA'}`, padding: '0.375rem 0.875rem' }}>
      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: isOpen ? '#22C55E' : '#EF4444', animation: isOpen ? 'blink 1.5s ease infinite' : 'none' }} />
      <span style={{ color: isOpen ? '#166534' : '#991B1B', fontSize: '0.8125rem', fontWeight: 600 }}>
        {isOpen ? 'Actuellement ouvert' : 'Actuellement fermé'}
      </span>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </div>
  );
}

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    nom: '', telephone: '', email: '', ville: '', service: '', message: '', rgpd: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* HERO */}
      <section style={{ backgroundColor: '#1A1A1A', padding: '4rem 1.5rem', borderBottom: '3px solid #3A8C3E' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#6B7280', fontSize: '0.8125rem', textDecoration: 'none' }}>Accueil</Link>
            <span style={{ color: '#4B5563' }}>›</span>
            <span style={{ color: '#3A8C3E', fontSize: '0.8125rem' }}>Contact</span>
          </div>
          <span style={{ display: 'inline-block', backgroundColor: '#3A8C3E', color: '#FFF', fontSize: '0.6875rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', padding: '0.25rem 0.75rem', marginBottom: '1rem', fontWeight: 600 }}>
            NOUS CONTACTER
          </span>
          <h1 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: 1.15, marginBottom: '1rem' }}>
            Contactez <span style={{ color: '#3A8C3E' }}>EURE MÉTAL</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '1rem', lineHeight: 1.6, maxWidth: '620px' }}>
            Ferrailleur, recycleur et centre VHU agréé — un seul appel pour tous vos besoins en métaux et recyclage.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <OpenIndicator />
          </div>
        </div>
      </section>

      {/* COORDONNÉES + FORMULAIRE */}
      <section style={{ backgroundColor: '#F8F8F8', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(1.5rem, 4vw, 3rem)', alignItems: 'start' }}>
            {/* Left: coordonnées */}
            <div>
              <h2 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.5rem', marginBottom: '1.75rem', paddingBottom: '0.75rem', borderBottom: '2px solid #3A8C3E', display: 'inline-block' }}>
                Nos coordonnées
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  {
                    icon: <MapPin size={18} style={{ color: '#3A8C3E' }} />,
                    label: 'Adresse & Horaires',
                    content: (
                      <>
                        <p style={{ color: '#1A1A1A', fontWeight: 500 }}>30 Rue du Bois de la Vigne</p>
                        <p style={{ color: '#1A1A1A', fontWeight: 500 }}>27220 Chavigny-Bailleul — Eure (27)</p>
                        <p style={{ color: '#6B7280', fontSize: '0.8125rem', marginTop: '0.5rem' }}>Lun – Ven : 08h30 – 12h00 · 13h30 – 17h30</p>
                        <p style={{ color: '#6B7280', fontSize: '0.8125rem' }}>Sam : 09h00 – 12h00</p>
                        <a
                          href="https://maps.google.com/?q=30+Rue+du+Bois+de+la+Vigne,+27220+Chavigny-Bailleul"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#3A8C3E', fontSize: '0.8125rem', marginTop: '0.5rem', display: 'inline-block', textDecoration: 'none' }}
                        >
                          Voir sur Google Maps →
                        </a>
                      </>
                    ),
                  },
                  {
                    icon: <Phone size={18} style={{ color: '#3A8C3E' }} />,
                    label: 'Téléphone',
                    content: (
                      <>
                        <a href="tel:0232372986" style={{ color: '#1A1A1A', fontWeight: 600, fontSize: '1.125rem', display: 'block', textDecoration: 'none' }}>02 32 37 29 86</a>
                        <span style={{ color: '#6B7280', fontSize: '0.75rem' }}>Fixe</span>
                        <a href="tel:0675888408" style={{ color: '#1A1A1A', fontWeight: 600, fontSize: '1.0625rem', display: 'block', marginTop: '0.25rem', textDecoration: 'none' }}>06 75 88 84 08</a>
                        <span style={{ color: '#6B7280', fontSize: '0.75rem' }}>Portable</span>
                      </>
                    ),
                  },
                  {
                    icon: <Mail size={18} style={{ color: '#3A8C3E' }} />,
                    label: 'E-mail',
                    content: (
                      <a href="mailto:eure.metal494@orange.fr" style={{ color: '#1A1A1A', fontWeight: 500, textDecoration: 'none' }}>
                        eure.metal494@orange.fr
                      </a>
                    ),
                  },
                  {
                    icon: <Clock size={18} style={{ color: '#3A8C3E' }} />,
                    label: 'Délai de réponse',
                    content: <p style={{ color: '#4B5563' }}>Réponse sous 24h en jours ouvrés — ou appelez directement.</p>,
                  },
                ].map((item) => (
                  <div key={item.label} style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', border: '1px solid #E5E7EB', display: 'flex', gap: '1rem' }}>
                    <div style={{ flexShrink: 0, marginTop: '2px' }}>{item.icon}</div>
                    <div>
                      <p style={{ color: '#6B7280', fontSize: '0.75rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.08em', marginBottom: '0.375rem' }}>{item.label.toUpperCase()}</p>
                      <div style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* SNR group */}
              <div style={{ backgroundColor: '#1A1A1A', padding: '1.25rem', borderLeft: '3px solid #3A8C3E' }}>
                <p style={{ color: '#3A8C3E', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  🏭 GROUPE LA SNR
                </p>
                <p style={{ color: '#9CA3AF', fontSize: '0.8125rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                  Société Normande de Recyclage<br />
                  Ferrailleur — Chemin des Vignes, 27120 Chaignes<br />
                  ☎ 02 32 38 60 09
                </p>
                <a
                  href="https://s-n-r-societe-normande-de-recyclage.vercel.app/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#3A8C3E', fontSize: '0.8125rem', textDecoration: 'none' }}
                >
                  Visiter le site du groupe →
                </a>
              </div>

              {/* Quick CTAs */}
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="tel:0232372986"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#3A8C3E', color: '#FFF', padding: '0.875rem 1.25rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.9375rem', letterSpacing: '0.05em', textDecoration: 'none', flex: 1, justifyContent: 'center' }}
                >
                  <Phone size={16} /> Appeler maintenant
                </a>
                <a
                  href="https://maps.google.com/?q=30+Rue+du+Bois+de+la+Vigne,+27220+Chavigny-Bailleul"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'transparent', color: '#1A1A1A', padding: '0.875rem 1.25rem', border: '2px solid #1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.9375rem', letterSpacing: '0.05em', textDecoration: 'none', flex: 1, justifyContent: 'center' }}
                >
                  <MapPin size={16} /> Itinéraire
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '2.5rem', border: '1px solid #E5E7EB' }}>
              <h2 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.375rem', marginBottom: '0.5rem' }}>
                Envoyez-nous un message
              </h2>
              <p style={{ color: '#6B7280', fontSize: '0.875rem', marginBottom: '2rem' }}>
                Réponse sous 24h en jours ouvrés — ou appelez directement le <a href="tel:0232372986" style={{ color: '#3A8C3E', fontWeight: 600 }}>02 32 37 29 86</a>
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                  <CheckCircle size={48} style={{ color: '#22C55E', margin: '0 auto 1rem' }} />
                  <h3 style={{ color: '#1A1A1A', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1.375rem', marginBottom: '0.75rem' }}>
                    Message envoyé !
                  </h3>
                  <p style={{ color: '#6B7280', lineHeight: 1.6 }}>
                    Nous vous répondrons dans les plus brefs délais. Pour une réponse immédiate, appelez le <a href="tel:0232372986" style={{ color: '#3A8C3E', fontWeight: 600 }}>02 32 37 29 86</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="grid-cols-1 sm:grid-cols-2">
                    <div>
                      <label style={{ display: 'block', color: '#374151', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.375rem' }}>
                        Nom & Prénom <span style={{ color: '#3A8C3E' }}>*</span>
                      </label>
                      <input
                        name="nom"
                        type="text"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Votre nom complet"
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', fontSize: '0.9375rem', backgroundColor: '#F9FAFB', outline: 'none', fontFamily: "'Inter', sans-serif" }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = '#3A8C3E'; e.currentTarget.style.backgroundColor = '#FFF'; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = '#D1D5DB'; e.currentTarget.style.backgroundColor = '#F9FAFB'; }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#374151', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.375rem' }}>
                        Téléphone <span style={{ color: '#3A8C3E' }}>*</span>
                      </label>
                      <input
                        name="telephone"
                        type="tel"
                        required
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="06 00 00 00 00"
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', fontSize: '0.9375rem', backgroundColor: '#F9FAFB', outline: 'none', fontFamily: "'Inter', sans-serif" }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = '#3A8C3E'; e.currentTarget.style.backgroundColor = '#FFF'; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = '#D1D5DB'; e.currentTarget.style.backgroundColor = '#F9FAFB'; }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="grid-cols-1 sm:grid-cols-2">
                    <div>
                      <label style={{ display: 'block', color: '#374151', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.375rem' }}>
                        Email <span style={{ color: '#3A8C3E' }}>*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.fr"
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', fontSize: '0.9375rem', backgroundColor: '#F9FAFB', outline: 'none', fontFamily: "'Inter', sans-serif" }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = '#3A8C3E'; e.currentTarget.style.backgroundColor = '#FFF'; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = '#D1D5DB'; e.currentTarget.style.backgroundColor = '#F9FAFB'; }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#374151', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.375rem' }}>
                        Ville / Code postal <span style={{ color: '#3A8C3E' }}>*</span>
                      </label>
                      <input
                        name="ville"
                        type="text"
                        required
                        value={formData.ville}
                        onChange={handleChange}
                        placeholder="Ex: Évreux 27000"
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', fontSize: '0.9375rem', backgroundColor: '#F9FAFB', outline: 'none', fontFamily: "'Inter', sans-serif" }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = '#3A8C3E'; e.currentTarget.style.backgroundColor = '#FFF'; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = '#D1D5DB'; e.currentTarget.style.backgroundColor = '#F9FAFB'; }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: '#374151', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.375rem' }}>
                      Service souhaité <span style={{ color: '#3A8C3E' }}>*</span>
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', fontSize: '0.9375rem', backgroundColor: '#F9FAFB', outline: 'none', fontFamily: "'Inter', sans-serif" }}
                    >
                      <option value="">— Choisissez un service —</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: '#374151', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.375rem' }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre besoin : type de métaux, quantité, adresse d'intervention..."
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', fontSize: '0.9375rem', backgroundColor: '#F9FAFB', outline: 'none', fontFamily: "'Inter', sans-serif", resize: 'vertical', minHeight: '100px' }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#3A8C3E'; e.currentTarget.style.backgroundColor = '#FFF'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#D1D5DB'; e.currentTarget.style.backgroundColor = '#F9FAFB'; }}
                    />
                  </div>

                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      name="rgpd"
                      checked={formData.rgpd}
                      onChange={handleChange}
                      required
                      style={{ marginTop: '3px', accentColor: '#3A8C3E', width: '16px', height: '16px', flexShrink: 0 }}
                    />
                    <span style={{ color: '#6B7280', fontSize: '0.8125rem', lineHeight: 1.5 }}>
                      J'accepte que mes données soient utilisées pour traiter ma demande conformément à la politique de confidentialité d'EURE MÉTAL. <span style={{ color: '#3A8C3E' }}>*</span>
                    </span>
                  </label>

                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#3A8C3E',
                      color: '#FFFFFF',
                      padding: '1rem',
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 700,
                      fontSize: '1.0625rem',
                      letterSpacing: '0.05em',
                      border: 'none',
                      cursor: 'pointer',
                      width: '100%',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2D7031'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#3A8C3E'; }}
                  >
                    ENVOYER MA DEMANDE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAP EMBED */}
      <section style={{ backgroundColor: '#1A1A1A', padding: '3rem 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <p style={{ color: '#3A8C3E', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
            NOUS TROUVER
          </p>
          <div style={{ position: 'relative', backgroundColor: '#242424', border: '1px solid #333', overflow: 'hidden' }}>
            <iframe
              title="EURE MÉTAL — 30 Rue du Bois de la Vigne, 27220 Chavigny-Bailleul"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.0!2d1.177!3d49.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z30+Rue+du+Bois+de+la+Vigne%2C+27220+Chavigny-Bailleul!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="350"
              style={{ border: 0, display: 'block', filter: 'grayscale(0.3)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p style={{ color: '#6B7280', fontSize: '0.8125rem', marginTop: '0.75rem' }}>
            30 Rue du Bois de la Vigne, 27220 Chavigny-Bailleul — Accès par la D316, parking sur place.
            <a href="https://maps.google.com/?q=30+Rue+du+Bois+de+la+Vigne,+27220+Chavigny-Bailleul" target="_blank" rel="noopener noreferrer" style={{ color: '#3A8C3E', marginLeft: '0.5rem' }}>
              Ouvrir dans Google Maps →
            </a>
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: '#3A8C3E', padding: '2.5rem 1.5rem' }}>
        <div className="max-w-7xl mx-auto" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
          <p style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.25rem' }}>
            Besoin d'un devis ou d'un enlèvement ? Notre équipe se déplace dans l'Eure (27) et les départements limitrophes.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="tel:0232372986" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FFF', color: '#3A8C3E', padding: '0.75rem 1.5rem', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
              <Phone size={16} /> 02 32 37 29 86
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', alignSelf: 'center' }}>Enlèvement épave gratuit · Achat ferraille & métaux</span>
          </div>
        </div>
      </section>
    </div>
  );
}

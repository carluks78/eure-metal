import { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, Mail, X } from 'lucide-react';

const GREEN = '#3A8C3E';

const actions = [
  {
    id: 'email',
    icon: <Mail size={18} />,
    label: 'Email',
    href: 'mailto:eure.metal494@orange.fr',
    bg: '#1E293B',
    hover: '#334155',
    external: false,
  },
  {
    id: 'whatsapp',
    icon: <MessageCircle size={18} />,
    label: 'WhatsApp',
    href: 'https://wa.me/33675888408?text=Bonjour%20EURE%20MÉTAL%2C%20je%20souhaite%20un%20renseignement.',
    bg: '#25D366',
    hover: '#1DAA52',
    external: true,
  },
  {
    id: 'phone',
    icon: <Phone size={18} />,
    label: '02 32 37 29 86',
    href: 'tel:0232372986',
    bg: GREEN,
    hover: '#2D7031',
    external: false,
  },
];

export function FloatingWidget() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handler(e: KeyboardEvent) { if (e.key === 'Escape') setOpen(false); }
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <div
      ref={ref}
      style={{ position: 'fixed', bottom: '1.5rem', right: '1.25rem', zIndex: 500, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.625rem' }}
    >
      {/* Action items — slide up when open */}
      {actions.map((action, i) => (
        <div
          key={action.id}
          style={{
            display: 'flex', alignItems: 'center', gap: '0', // gap handled by inner elements
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.92)',
            transition: `opacity 0.22s ease ${i * 0.06}s, transform 0.22s ease ${i * 0.06}s`,
            pointerEvents: open ? 'auto' : 'none',
          }}
        >
          {/* Label pill */}
          <span style={{
            backgroundColor: '#0F172A',
            color: '#CBD5E1',
            fontSize: '0.8125rem',
            fontWeight: 600,
            padding: '0.3125rem 0.75rem',
            borderRadius: '100px 0 0 100px',
            border: '1px solid #1E293B',
            borderRight: 'none',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            fontFamily: "'Inter', sans-serif",
          }}>
            {action.label}
          </span>
          {/* Icon button */}
          <a
            href={action.href}
            target={action.external ? '_blank' : undefined}
            rel={action.external ? 'noopener noreferrer' : undefined}
            aria-label={action.label}
            style={{
              width: '42px', height: '42px',
              backgroundColor: action.bg,
              color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              textDecoration: 'none',
              borderRadius: '0 100px 100px 0',
              boxShadow: '0 4px 14px rgba(0,0,0,0.35)',
              transition: 'background 0.15s, transform 0.15s',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = action.hover;
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = action.bg;
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
            }}
          >
            {action.icon}
          </a>
        </div>
      ))}

      {/* Main toggle — chat bubble */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Fermer le contact rapide' : 'Nous contacter'}
        aria-expanded={open}
        style={{
          width: '56px', height: '56px',
          backgroundColor: open ? '#1E293B' : GREEN,
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: open
            ? '0 4px 16px rgba(0,0,0,0.4)'
            : `0 4px 20px rgba(58,140,62,0.55)`,
          transition: 'background 0.2s, box-shadow 0.2s, transform 0.2s',
          animation: open ? 'none' : 'pulseGreen 2.5s ease infinite',
          position: 'relative',
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
      >
        {/* Chat bubble icon (custom SVG for closed state) */}
        {open
          ? <X size={22} />
          : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <line x1="9" y1="10" x2="15" y2="10" />
              <line x1="9" y1="14" x2="12" y2="14" />
            </svg>
          )
        }

        {/* Notification dot (only when closed) */}
        {!open && (
          <span style={{
            position: 'absolute', top: '4px', right: '4px',
            width: '10px', height: '10px',
            backgroundColor: '#EF4444',
            borderRadius: '50%',
            border: '2px solid #0B0F17',
          }} />
        )}
      </button>

      <style>{`
        @keyframes pulseGreen {
          0%   { box-shadow: 0 0 0 0   rgba(58,140,62,0.6); }
          70%  { box-shadow: 0 0 0 14px rgba(58,140,62,0); }
          100% { box-shadow: 0 0 0 0   rgba(58,140,62,0); }
        }
      `}</style>
    </div>
  );
}

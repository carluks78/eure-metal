import { Phone } from 'lucide-react';

export function FloatingCallButton() {
  return (
    <a
      href="tel:0232372986"
      aria-label="Appeler Eure Métal"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        backgroundColor: '#E85D04',
        color: '#FFFFFF',
        borderRadius: '50%',
        width: '56px',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(232, 93, 4, 0.5)',
        zIndex: 200,
        transition: 'all 0.2s',
        animation: 'pulse-ring 2s ease infinite',
      }}
      className="lg:hidden hover:scale-110"
    >
      <Phone size={24} />
      <style>{`
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(232, 93, 4, 0.6); }
          70% { box-shadow: 0 0 0 12px rgba(232, 93, 4, 0); }
          100% { box-shadow: 0 0 0 0 rgba(232, 93, 4, 0); }
        }
      `}</style>
    </a>
  );
}

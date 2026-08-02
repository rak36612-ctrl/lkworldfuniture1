import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [tooltipOpen, setTooltipOpen] = useState(true);

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '0.75rem'
    }}>
      
      {/* Tooltip Popup matching Promax Floating Widget style */}
      {tooltipOpen && (
        <div style={{
          background: '#FFFFFF',
          padding: '0.85rem 1.15rem',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          border: '1px solid rgba(37, 211, 102, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          maxWidth: '280px',
          animation: 'fadeInUp 0.3s ease'
        }}>
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--color-primary-dark)' }}>
              Need Custom Furniture?
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
              Chat with our Bengaluru team now!
            </div>
          </div>

          <button 
            onClick={() => setTooltipOpen(false)}
            style={{ background: 'none', color: '#999', padding: '0.2rem', cursor: 'pointer' }}
            aria-label="Close WhatsApp Callout"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Floating Green Circle Action Button */}
      <a 
        href="https://wa.me/918884487020?text=Hi%20LK%20Furniture%20World1%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20inquire%20about%20custom%20furniture."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat"
        className="pulse-whatsapp whatsapp-float"
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'var(--color-whatsapp)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
          transition: 'transform 0.25s ease'
        }}
      >
        <MessageCircle size={34} fill="#FFFFFF" color="#25D366" />
      </a>

      {/* Small label for accessibility and visibility on narrow screens */}
      <div className="whatsapp-label" style={{ fontSize: '0.85rem', color: 'var(--color-primary-dark)', background: 'transparent', marginTop: '0.2rem' }} aria-hidden="true">Chat</div>
    </div>
  );
}

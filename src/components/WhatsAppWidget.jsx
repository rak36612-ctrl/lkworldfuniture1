import React from 'react';
import { MessageCircle, BookOpen } from 'lucide-react';

export default function WhatsAppWidget() {
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
      {/* Catalogue shortcut button (above WhatsApp) */}
      <a
        href="/LK Furnitures-2024.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Catalogue"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 0.9rem',
          borderRadius: '999px',
          background: 'var(--color-primary)',
          color: '#fff',
          boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
          textDecoration: 'none',
          fontWeight: 700,
          fontSize: '0.95rem'
        }}
      >
        <BookOpen size={18} color="#FFFFFF" />
        <span>Catalogue</span>
      </a>

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
    </div>
    </div>
  );
}

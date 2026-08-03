import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  return (
    <div 
      className="whatsapp-widget-wrap"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Floating Green Circle Action Button */}
      <a 
        href="https://wa.me/918884487020?text=Hi%20LK%20Furniture%20World1%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20inquire%20about%20custom%20furniture."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat"
        className="pulse-whatsapp whatsapp-float"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          transition: 'transform 0.25s ease',
          textDecoration: 'none'
        }}
      >
        <MessageCircle size={32} fill="#FFFFFF" color="#25D366" />
      </a>

      <style>{`
        @media (max-width: 991px) {
          .whatsapp-widget-wrap {
            bottom: 4.8rem !important;
            right: 1.25rem !important;
          }
        }
      `}</style>
    </div>
  );
}

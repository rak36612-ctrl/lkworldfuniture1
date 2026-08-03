import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div style={{
      background: '#121917',
      color: 'rgba(255, 255, 255, 0.85)',
      fontSize: '0.78rem',
      fontWeight: '600',
      padding: '0.45rem 1.25rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
      zIndex: 1001
    }}>
      <a 
        href="tel:+918884487020" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.4rem', 
          color: 'rgba(255, 255, 255, 0.9)', 
          textDecoration: 'none' 
        }}
      >
        <Phone size={13} color="#C5A075" />
        <span>+91 88844 87020</span>
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255, 255, 255, 0.85)' }}>
        <MapPin size={13} color="#C5A075" />
        <span>Bengaluru, Karnataka</span>
      </div>
    </div>
  );
}

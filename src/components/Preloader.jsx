import React, { useEffect, useState } from 'react';

export default function Preloader({ onLoaded }) {
  const [percent, setPercent] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              if (onLoaded) onLoaded();
            }, 700);
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <div className={`preloader-overlay ${isFading ? 'hidden' : ''}`}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ 
          width: '90px', 
          height: '90px', 
          margin: '0 auto 1.5rem', 
          background: 'rgba(197, 160, 117, 0.12)', 
          border: '1.5px solid #C5A075', 
          borderRadius: '24px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          boxShadow: '0 0 35px rgba(197, 160, 117, 0.25)'
        }}>
          <svg width="50" height="50" viewBox="0 0 100 100" fill="none">
            <rect width="100" height="100" rx="20" fill="#183B35"/>
            <path d="M30 75V25H40V65H65V75H30Z" fill="#C5A075"/>
            <path d="M55 25L70 45L85 25H73.5L65 37L56.5 25H55Z" fill="#FFFFFF"/>
          </svg>
        </div>
        
        <h1 style={{ color: '#FFFFFF', fontSize: '2rem', letterSpacing: '0.05em', fontWeight: '700', marginBottom: '0.25rem' }}>
          LK FURNITURE WORLD<span style={{ color: '#C5A075' }}>1</span>
        </h1>
        <p style={{ color: '#A0B4B0', fontSize: '0.85rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
          Commercial & Residential Custom Seating
        </p>

        {/* Progress Bar Container matching Template Screenshot 2 */}
        <div style={{ 
          width: '260px', 
          height: '4px', 
          background: 'rgba(255, 255, 255, 0.15)', 
          borderRadius: '10px', 
          margin: '0 auto 1.25rem', 
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{ 
            width: `${percent}%`, 
            height: '100%', 
            background: 'linear-gradient(90deg, #C5A075, #E8D3BA)', 
            borderRadius: '10px',
            transition: 'width 0.1s ease'
          }} />
        </div>

        <span style={{ color: '#C5A075', fontSize: '0.9rem', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>
          {percent}%
        </span>
      </div>
    </div>
  );
}

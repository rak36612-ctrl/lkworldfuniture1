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
        return Math.min(prev + Math.floor(Math.random() * 8) + 4, 100);
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <div className={`preloader-overlay ${isFading ? 'hidden' : ''}`}>
      <div style={{ textAlign: 'center', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Real gold LK logo — centred, glowing */}
        <div style={{
          width: 'clamp(90px, 20vw, 120px)',
          height: 'clamp(90px, 20vw, 120px)',
          marginBottom: '1.5rem',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Glow ring behind logo */}
          <div style={{
            position: 'absolute',
            inset: '-10px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(197,160,117,0.25) 0%, transparent 70%)',
          }} />
          <img
            src="/images/lk_logo.png"
            alt="LK Furniture World1"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 18px rgba(197,160,117,0.6))',
              animation: 'logoPulse 2s ease-in-out infinite',
            }}
          />
        </div>

        {/* Brand text */}
        <h1 style={{
          color: '#FFFFFF',
          fontSize: 'clamp(1.3rem, 5vw, 2rem)',
          letterSpacing: '0.04em',
          fontWeight: '800',
          fontFamily: 'var(--font-heading)',
          marginBottom: '0.2rem',
          lineHeight: 1.2,
        }}>
          LK FURNITURE <span style={{ color: '#C5A075' }}>WORLD1</span>
        </h1>
        <p style={{
          color: '#A0B4B0',
          fontSize: 'clamp(0.65rem, 2.5vw, 0.8rem)',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          marginBottom: '2.5rem',
          fontWeight: '600',
        }}>
          Commercial &amp; Residential Custom Seating
        </p>

        {/* Progress bar */}
        <div style={{
          width: 'clamp(200px, 55vw, 280px)',
          height: '4px',
          background: 'rgba(255, 255, 255, 0.12)',
          borderRadius: '10px',
          overflow: 'hidden',
          marginBottom: '1rem',
        }}>
          <div style={{
            width: `${percent}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #C5A075, #E8D3BA)',
            borderRadius: '10px',
            transition: 'width 0.1s ease',
          }} />
        </div>

        <span style={{
          color: '#C5A075',
          fontSize: '0.9rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: '700',
        }}>
          {percent}%
        </span>
      </div>

      <style>{`
        @keyframes logoPulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 18px rgba(197,160,117,0.6)); }
          50%       { transform: scale(1.06); filter: drop-shadow(0 0 28px rgba(197,160,117,0.9)); }
        }
      `}</style>
    </div>
  );
}

import React, { useEffect, useState } from 'react';

export default function Preloader({ onLoaded }) {
  const [isExit, setIsExit] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Elegant 1.4s timer matching the warm beige preloader design
    const timer = setTimeout(() => {
      setIsExit(true);
      setTimeout(() => {
        setIsMounted(false);
        if (onLoaded) onLoaded();
      }, 650);
    }, 1400);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  if (!isMounted) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        background: '#F4EFE6', // Soft luxury warm beige matching screenshot
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        opacity: isExit ? 0 : 1,
        transform: isExit ? 'scale(1.02)' : 'scale(1)',
        transition: 'opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1), transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: isExit ? 'none' : 'auto',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '460px',
          width: '100%',
        }}
      >
        {/* Monogram Logo with Rotating Gold Ring & Traveling Spark */}
        <div
          style={{
            position: 'relative',
            width: 'clamp(110px, 26vw, 150px)',
            height: 'clamp(110px, 26vw, 150px)',
            marginBottom: '1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'introScale 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
        >
          {/* Animated Gold Arc Ring */}
          <svg
            viewBox="0 0 160 160"
            style={{
              position: 'absolute',
              inset: '-10px',
              width: 'calc(100% + 20px)',
              height: 'calc(100% + 20px)',
              animation: 'ringRotate 3s linear infinite',
              pointerEvents: 'none',
            }}
          >
            <circle
              cx="80"
              cy="80"
              r="72"
              fill="none"
              stroke="rgba(197, 160, 117, 0.35)"
              strokeWidth="1.5"
            />
            <circle
              cx="80"
              cy="80"
              r="72"
              fill="none"
              stroke="url(#goldRingGlow)"
              strokeWidth="2.5"
              strokeDasharray="100 350"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="goldRingGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="40%" stopColor="#D4AF37" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#C5A075" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central Logo Image */}
          <img
            src="/images/Final_Logo.png"
            alt="LK Furniture World1"
            style={{
              width: '78%',
              height: '78%',
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 12px 28px rgba(180, 140, 95, 0.3))',
            }}
          />
        </div>

        {/* Brand Name matching screenshot */}
        <h1
          style={{
            color: '#2B2319',
            fontSize: 'clamp(1.4rem, 4.5vw, 2rem)',
            letterSpacing: '0.1em',
            fontWeight: '800',
            fontFamily: 'var(--font-heading)',
            marginBottom: '0.2rem',
            lineHeight: 1.15,
            textTransform: 'uppercase',
            animation: 'fadeInUp 0.8s ease 0.15s forwards',
            opacity: 0,
          }}
        >
          LK FURNITURE
        </h1>

        <div
          style={{
            color: '#C5A075',
            fontSize: 'clamp(1.2rem, 4vw, 1.7rem)',
            letterSpacing: '0.12em',
            fontWeight: '800',
            fontFamily: 'var(--font-heading)',
            marginBottom: '0.65rem',
            textTransform: 'uppercase',
            animation: 'fadeInUp 0.8s ease 0.25s forwards',
            opacity: 0,
          }}
        >
          WORLD1
        </div>

        {/* Subtitle */}
        <p
          style={{
            color: '#756755',
            fontSize: 'clamp(0.62rem, 2vw, 0.72rem)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            marginBottom: '2.5rem',
            fontWeight: '700',
            animation: 'fadeInUp 0.8s ease 0.35s forwards',
            opacity: 0,
          }}
        >
          CRAFTED FOR EXCELLENCE &bull; BENGALURU
        </p>

        {/* Gold Pill Loading Bar with Moving Light Spark */}
        <div
          style={{
            width: 'clamp(180px, 50vw, 260px)',
            height: '4px',
            background: 'rgba(197, 160, 117, 0.22)',
            borderRadius: '999px',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: '0.85rem',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, #B08C5B 0%, #E8D3BA 50%, #C5A075 100%)',
              animation: 'expandBar 1.3s cubic-bezier(0.4, 0, 0.2, 1) forwards',
              transformOrigin: 'left',
              borderRadius: '999px',
            }}
          />
        </div>

        {/* Loading text under bar */}
        <div
          style={{
            color: '#8C7B68',
            fontSize: '0.68rem',
            letterSpacing: '0.2em',
            fontWeight: '700',
            textTransform: 'uppercase',
            animation: 'fadeInUp 0.8s ease 0.45s forwards',
            opacity: 0,
          }}
        >
          CRAFTING EXCELLENCE...
        </div>
      </div>

      <style>{`
        @keyframes ringRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes introScale {
          0% {
            opacity: 0;
            transform: scale(0.88);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes expandBar {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
}

import React, { useEffect, useState } from 'react';

export default function Preloader({ onLoaded }) {
  const [isExit, setIsExit] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Elegant 1.3s timer for a smooth, non-intrusive brand entrance
    const timer = setTimeout(() => {
      setIsExit(true);
      setTimeout(() => {
        setIsMounted(false);
        if (onLoaded) onLoaded();
      }, 650); // duration of smooth slide/fade exit
    }, 1300);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  if (!isMounted) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        background: '#0C1715',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        opacity: isExit ? 0 : 1,
        transform: isExit ? 'translateY(-12px)' : 'translateY(0)',
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
          maxWidth: '420px',
        }}
      >
        {/* Luxury Gold Logo Container */}
        <div
          style={{
            position: 'relative',
            width: 'clamp(90px, 22vw, 120px)',
            height: 'clamp(90px, 22vw, 120px)',
            marginBottom: '1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'introScale 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
        >
          {/* Subtle Ambient Radial Gold Glow */}
          <div
            style={{
              position: 'absolute',
              inset: '-15px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(197, 160, 117, 0.35) 0%, transparent 70%)',
              animation: 'glowPulse 2s ease-in-out infinite alternate',
            }}
          />

          <img
            src="/images/Final_Logo.png"
            alt="LK Furniture World1"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 4px 20px rgba(197, 160, 117, 0.5))',
            }}
          />
        </div>

        {/* Brand Name */}
        <h1
          style={{
            color: '#FFFFFF',
            fontSize: 'clamp(1.4rem, 4.5vw, 1.9rem)',
            letterSpacing: '0.06em',
            fontWeight: '800',
            fontFamily: 'var(--font-heading)',
            marginBottom: '0.35rem',
            lineHeight: 1.15,
            animation: 'fadeInUp 0.8s ease 0.15s forwards',
            opacity: 0,
          }}
        >
          LK FURNITURE <span style={{ color: '#C5A075' }}>WORLD1</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: 'rgba(255, 255, 255, 0.65)',
            fontSize: 'clamp(0.62rem, 2vw, 0.72rem)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            marginBottom: '2rem',
            fontWeight: '600',
            animation: 'fadeInUp 0.8s ease 0.3s forwards',
            opacity: 0,
          }}
        >
          Crafted for Excellence &bull; Bengaluru
        </p>

        {/* Ultra-Fine Minimalist Gold Line Progress */}
        <div
          style={{
            width: '140px',
            height: '1.5px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '999px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, #C5A075, #E8D3BA)',
              animation: 'expandLine 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
              transformOrigin: 'left',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes introScale {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(8px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes glowPulse {
          0% {
            opacity: 0.5;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1.08);
          }
        }
        @keyframes expandLine {
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

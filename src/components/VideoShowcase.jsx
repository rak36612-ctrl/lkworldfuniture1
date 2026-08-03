import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function VideoShowcase() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="workshop" className="section-padding" style={{ background: '#121917', color: '#FFFFFF', padding: '2.5rem 0' }}>
      <div className="container">
        
        {/* Header matching exact user screenshot */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.78rem',
            fontWeight: '700',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#B08C5B',
            marginBottom: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem'
          }}>
            <span style={{ width: '28px', height: '1.5px', background: '#B08C5B' }}></span>
            DIRECT FROM OUR BENGALURU WORKSHOP
            <span style={{ width: '28px', height: '1.5px', background: '#B08C5B' }}></span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
            fontWeight: '800',
            color: '#FFFFFF',
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            marginBottom: '0.85rem'
          }}>
            Meet Your New <br /> Command Center
          </h2>

          <p style={{
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.78)',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontFamily: 'var(--font-body)'
          }}>
            Designed for long hours, built for big decisions. Take an exclusive look inside our custom manufacturing workflow.
          </p>
        </div>

        {/* Video Container matching screenshot */}
        <div style={{
          position: 'relative',
          maxWidth: '560px',
          margin: '0 auto',
          borderRadius: '32px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          border: '1px solid rgba(197, 160, 117, 0.25)',
          background: '#0B1B18'
        }}>
          <video 
            ref={videoRef}
            src="/video/command_center_video.mp4"
            poster="/images/custom_workstation.jpg"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'cover'
            }}
          />

          {/* Top Floating Badges matching screenshot */}
          <div style={{
            position: 'absolute',
            top: '1.25rem',
            left: '1.25rem',
            right: '1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 10,
            pointerEvents: 'none'
          }}>
            <div style={{
              background: 'rgba(197, 160, 117, 0.9)',
              color: '#102824',
              padding: '0.45rem 0.95rem',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: '800',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              letterSpacing: '0.04em',
              backdropFilter: 'blur(6px)'
            }}>
              <Sparkles size={15} /> CUSTOM DESIGNS 💎
            </div>

            <button 
              onClick={toggleMute} 
              style={{
                pointerEvents: 'auto',
                background: 'rgba(0, 0, 0, 0.55)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(6px)'
              }}
              aria-label="Toggle Sound"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

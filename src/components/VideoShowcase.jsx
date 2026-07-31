import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, PhoneCall } from 'lucide-react';

export default function VideoShowcase() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="workshop" className="section-padding" style={{ background: 'var(--color-primary-dark)', color: '#FFFFFF' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow-tag" style={{ justifyContent: 'center', color: 'var(--color-gold)' }}>
            DIRECT FROM OUR BENGALURU WORKSHOP
          </div>
          
          <h2 className="section-title" style={{ color: '#FFFFFF', fontSize: 'clamp(2.2rem, 4vw, 3.25rem)' }}>
            Meet Your New Command Center
          </h2>

          <p className="section-subtitle" style={{ color: '#A0B4B0', margin: '0 auto' }}>
            Designed for long hours, built for big decisions. Take an exclusive look inside our custom manufacturing workflow.
          </p>
        </div>

        {/* Video Player Box */}
        <div style={{
          position: 'relative',
          maxWidth: '960px',
          margin: '0 auto',
          borderRadius: '32px',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
          border: '1px solid rgba(197, 160, 117, 0.25)',
          background: '#0B1B18'
        }}>
          <video 
            ref={videoRef}
            src="/video/command_center_video.mp4"
            poster="/images/custom_workstation.jpg"
            loop
            muted={isMuted}
            playsInline
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '560px',
              display: 'block',
              objectFit: 'cover'
            }}
            onClick={togglePlay}
          />

          {/* Overlay Controls & Captions */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: isPlaying ? 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)' : 'rgba(16, 40, 36, 0.65)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2rem',
            pointerEvents: 'none',
            transition: 'background 0.3s ease'
          }}>
            
            {/* Top Badge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{
                background: 'rgba(197, 160, 117, 0.9)',
                color: '#102824',
                padding: '0.5rem 1rem',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Sparkles size={16} /> CUSTOM DESIGNS 💎
              </div>

              <button 
                onClick={toggleMute} 
                style={{
                  pointerEvents: 'auto',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#FFFFFF',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Toggle Sound"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>

            {/* Play Button Overlay */}
            {!isPlaying && (
              <div style={{ alignSelf: 'center', pointerEvents: 'auto' }}>
                <button 
                  onClick={togglePlay}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'var(--color-gold)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 35px rgba(197, 160, 117, 0.6)',
                    transition: 'transform 0.2s ease',
                    cursor: 'pointer'
                  }}
                  className="play-btn-hover"
                  aria-label="Play Video"
                >
                  <Play size={36} style={{ marginLeft: '4px' }} fill="#FFFFFF" />
                </button>
              </div>
            )}

            {/* Bottom Caption & Action */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '1rem'
            }}>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: '700', fontFamily: 'var(--font-heading)', color: '#FFFFFF' }}>
                  Custom Command Center & Executive Desk Builds
                </div>
                <div style={{ fontSize: '0.85rem', color: '#C5A075' }}>
                  Hand-crafted at #1, 1st Main Rd, Mysore Rd, Bapuji Nagar
                </div>
              </div>

              <a 
                href="tel:+918884487020" 
                style={{
                  pointerEvents: 'auto',
                  background: '#FFFFFF',
                  color: 'var(--color-primary-dark)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '999px',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}
              >
                <PhoneCall size={16} color="var(--color-gold)" /> CALL 88844 87020
              </a>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .play-btn-hover:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}

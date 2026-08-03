import React from 'react';
import { Award, Users, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function OwnerStory() {
  return (
    <section id="about" style={{ background: '#FAF8F5', padding: '2.5rem 0', borderTop: '1px solid rgba(24, 59, 53, 0.06)' }}>
      <div className="container">
        
        {/* Section Eyebrow Header */}
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
            <span style={{ width: '32px', height: '1.5px', background: '#B08C5B' }}></span>
            THE OWNER'S STORY
            <span style={{ width: '32px', height: '1.5px', background: '#B08C5B' }}></span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
            fontWeight: '700',
            color: '#162220',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '0.5rem'
          }}>
            From Corporate Roots to <br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: '500', color: '#B08C5B' }}>
              Crafting Excellence
            </span>
          </h2>
        </div>

        {/* Story Card Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          background: '#FFFFFF',
          borderRadius: '28px',
          padding: 'clamp(1.75rem, 4vw, 3.5rem)',
          boxShadow: '0 8px 30px rgba(24, 59, 53, 0.06)',
          border: '1px solid rgba(24, 59, 53, 0.08)'
        }}>

          {/* Left Column: Workshop Photo with 400+ Orders Badge */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 12px 36px rgba(0,0,0,0.12)',
              position: 'relative',
              height: '350px'
            }}>
              <img
                src="/images/craftsmanship_stage.jpg"
                alt="LK Furniture World1 Founders Workshop"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 50%, rgba(24, 59, 53, 0.75) 100%)'
              }} />
            </div>

            {/* Floating Gold Milestone Badge */}
            <div style={{
              position: 'absolute',
              bottom: '-1.25rem',
              right: '1.25rem',
              background: '#162220',
              color: '#FFFFFF',
              borderRadius: '20px',
              padding: '0.85rem 1.35rem',
              boxShadow: '0 10px 28px rgba(0,0,0,0.25)',
              border: '1.5px solid #C5A075',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem'
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(197, 160, 117, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#C5A075',
                flexShrink: 0
              }}>
                <Award size={24} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '900', color: '#C5A075', lineHeight: 1 }}>
                  400+
                </div>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.8)', fontWeight: '600' }}>
                  Orders Delivered
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Crisp 4-Line Founder Story */}
          <div>
            
            <div style={{
              fontSize: '1.05rem',
              color: '#3A4D48',
              lineHeight: 1.75,
              fontFamily: 'var(--font-body)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <p style={{ margin: 0 }}>
                Driven by a shared vision, two close friends left their corporate jobs to revolutionize Bengaluru’s furniture market with direct factory quality.
              </p>

              <p style={{ margin: 0 }}>
                Uniting their passion for craftsmanship, they founded <strong>LK Furniture World1</strong> on Mysore Road to eliminate middleman markups.
              </p>

              <p style={{ margin: 0 }}>
                Today, with over <strong>400+ custom commercial and residential orders successfully delivered</strong>, their core promise remains unchanged.
              </p>

              <p style={{ margin: 0 }}>
                Every piece is engineered with uncompromised ergonomic quality, direct factory pricing, and built to exceed every client expectation.
              </p>
            </div>

            {/* Feature Highlights Strip */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '0.85rem',
              marginTop: '1.75rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(24, 59, 53, 0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '700', color: '#162220' }}>
                <HeartHandshake size={17} color="#B08C5B" /> 2 Friends, 1 Dream
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '700', color: '#162220' }}>
                <ShieldCheck size={17} color="#B08C5B" /> 100% Quality Guaranteed
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '700', color: '#162220' }}>
                <CheckCircle2 size={17} color="#B08C5B" /> 400+ Happy Clients
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '700', color: '#162220' }}>
                <Users size={17} color="#B08C5B" /> Mysore Rd Showroom
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

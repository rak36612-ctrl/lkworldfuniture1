import React from 'react';
import { Award, CheckCircle2, ShieldCheck, HeartHandshake, Calendar } from 'lucide-react';

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
            OUR STORY & JOURNEY
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
            Built on Determination. <br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: '500', color: '#B08C5B' }}>
              Driven by Trust.
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
              height: '380px'
            }}>
              <img
                src="/images/craftsmanship_stage.jpg"
                alt="LK Furniture World1 Founders Mr. Dilip Raj and Mr. Harsha"
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
                background: 'linear-gradient(180deg, transparent 40%, rgba(24, 59, 53, 0.85) 100%)'
              }} />

              {/* Founders Tag */}
              <div style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                color: '#FFFFFF',
                zIndex: 2
              }}>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C5A075', fontWeight: '700' }}>
                  FOUNDERS
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: '800' }}>
                  Mr. Dilip Raj & Mr. Harsha
                </div>
              </div>
            </div>

            {/* Floating Gold Milestone Badge */}
            <div style={{
              position: 'absolute',
              top: '-1.25rem',
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
                  Projects Completed
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: User's Authentic Founder Story */}
          <div>
            
            <div style={{
              fontSize: '0.98rem',
              color: '#3A4D48',
              lineHeight: 1.75,
              fontFamily: 'var(--font-body)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <p style={{ margin: 0 }}>
                Every successful business begins with a dream. <strong>LK Furniture World1</strong> was born from the determination of two close friends, <strong>Mr. Dilip Raj</strong> and <strong>Mr. Harsha</strong>, who believed that true success comes to those willing to take risks and work relentlessly.
              </p>

              <p style={{ margin: 0 }}>
                In <strong>October 2023</strong>, after working as Sales Executives in a well-known company, they made the bold decision to build something of their own. Growing up in a Bengaluru neighborhood connected to the furniture industry, crafting quality seating wasn’t just a business—it was part of their everyday lives.
              </p>

              <p style={{ margin: 0 }}>
                The beginning was far from easy. They personally printed visiting cards, traveled across every corner of Bengaluru, and met interior designers, schools, corporate offices, restaurants, and cafés to establish trust.
              </p>

              <p style={{ margin: 0 }}>
                What began by supplying a few cafeteria chairs has today grown into a trusted furniture brand offering <strong>10 major product categories</strong> with <strong>400+ completed projects</strong>. Like the Phoenix, every challenge made them stronger—and this is only the beginning.
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
                <Calendar size={17} color="#B08C5B" /> Est. October 2023
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '700', color: '#162220' }}>
                <HeartHandshake size={17} color="#B08C5B" /> Mr. Dilip & Mr. Harsha
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '700', color: '#162220' }}>
                <CheckCircle2 size={17} color="#B08C5B" /> 400+ Successful Projects
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '700', color: '#162220' }}>
                <ShieldCheck size={17} color="#B08C5B" /> 10 Major Categories
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

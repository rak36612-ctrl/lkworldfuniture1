import React from 'react';
import { Armchair, Gem, Wrench, Headset } from 'lucide-react';

export default function CraftedForExcellence() {
  return (
    <section style={{ background: '#FAF8F5', padding: '2.5rem 0', borderBottom: '1px solid rgba(24, 59, 53, 0.06)' }}>
      <div className="container">
        
        {/* Section Header matching screenshot */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
            CRAFTED FOR EXCELLENCE
            <span style={{ width: '32px', height: '1.5px', background: '#B08C5B' }}></span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
            fontWeight: '700',
            color: '#162220',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem'
          }}>
            Where Design Meets <br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: '500', color: '#B08C5B' }}>
              Performance
            </span>
          </h2>

          <p style={{
            fontSize: '1.5rem',
            color: '#B08C5B',
            maxWidth: '520px',
            margin: '0 auto',
            fontFamily: 'var(--font-subtitle)',
            lineHeight: 1.3
          }}>
            Order a design today
          </p>
        </div>

        {/* 4 Feature Columns matching screenshot */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1.5rem',
          textAlign: 'center'
        }}>
          
          {/* Feature 1 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem 0.5rem',
            borderRight: '1px solid rgba(176, 140, 91, 0.2)'
          }} className="feature-col-border">
            <div style={{ color: '#B08C5B', marginBottom: '0.75rem' }}>
              <Armchair size={34} strokeWidth={1.4} />
            </div>
            <div style={{ fontSize: '0.85rem', color: '#687A76', fontWeight: '600', marginBottom: '0.15rem' }}>
              Ergonomic
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '1rem', color: '#162220' }}>
              Design
            </div>
          </div>

          {/* Feature 2 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem 0.5rem',
            borderRight: '1px solid rgba(176, 140, 91, 0.2)'
          }} className="feature-col-border">
            <div style={{ color: '#B08C5B', marginBottom: '0.75rem' }}>
              <Gem size={34} strokeWidth={1.4} />
            </div>
            <div style={{ fontSize: '0.85rem', color: '#687A76', fontWeight: '600', marginBottom: '0.15rem' }}>
              Premium
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '1rem', color: '#162220' }}>
              Quality
            </div>
          </div>

          {/* Feature 3 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem 0.5rem',
            borderRight: '1px solid rgba(176, 140, 91, 0.2)'
          }} className="feature-col-border">
            <div style={{ color: '#B08C5B', marginBottom: '0.75rem' }}>
              <Wrench size={34} strokeWidth={1.4} />
            </div>
            <div style={{ fontSize: '0.85rem', color: '#687A76', fontWeight: '600', marginBottom: '0.15rem' }}>
              Custom
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '1rem', color: '#162220' }}>
              Solutions
            </div>
          </div>

          {/* Feature 4 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem 0.5rem'
          }}>
            <div style={{ color: '#B08C5B', marginBottom: '0.75rem' }}>
              <Headset size={34} strokeWidth={1.4} />
            </div>
            <div style={{ fontSize: '0.85rem', color: '#687A76', fontWeight: '600', marginBottom: '0.15rem' }}>
              Dedicated
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '1rem', color: '#162220' }}>
              Support
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 600px) {
          .feature-col-border {
            border-right: none !important;
            border-bottom: 1px solid rgba(176, 140, 91, 0.15);
            padding-bottom: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}

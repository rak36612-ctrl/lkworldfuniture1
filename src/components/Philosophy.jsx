import React from 'react';
import { ArrowRight, Check, Award, Layers } from 'lucide-react';

export default function Philosophy() {
  return (
    <section id="about" className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container">
        
        {/* Top Header Section matching Template Screenshot 3 */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="eyebrow-tag" style={{ justifyContent: 'center' }}>
            PHILOSOPHY OF DESIGN
          </div>
          
          <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', color: 'var(--color-primary-dark)' }}>
            LK: Ergonomic Mastery.
          </h2>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            color: 'var(--color-text-muted)',
            fontSize: '1rem',
            fontStyle: 'italic'
          }}>
            <span style={{ height: '1px', width: '40px', background: 'var(--color-gold)' }}></span>
            Precision comfort for every seating posture.
            <span style={{ height: '1px', width: '40px', background: 'var(--color-gold)' }}></span>
          </div>
        </div>

        {/* Split Content matching Template Screenshot 3 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left Side: Executive Chair Showcase Image */}
          <div style={{
            background: 'var(--color-primary-subtle)',
            borderRadius: '28px',
            padding: '1.25rem',
            boxShadow: 'var(--shadow-md)',
            position: 'relative'
          }}>
            <img 
              src="/images/boardroom_chair.jpg" 
              alt="LK Furniture World1 Boardroom Executive Ergonomic Chair" 
              style={{
                width: '100%',
                height: '460px',
                objectFit: 'cover',
                borderRadius: '20px',
                display: 'block'
              }}
            />
            
            <div style={{
              position: 'absolute',
              top: '2.5rem',
              right: '2.5rem',
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '0.75rem 1.25rem',
              boxShadow: 'var(--shadow-sm)',
              fontWeight: '700',
              fontSize: '0.85rem',
              color: 'var(--color-primary-dark)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Award size={18} color="var(--color-gold)" /> Executive Series
            </div>
          </div>

          {/* Right Side: Copy narrative matching Template Screenshot 3 */}
          <div>
            <h3 style={{ fontSize: '2.2rem', color: 'var(--color-primary-dark)', marginBottom: '1.25rem', lineHeight: 1.25 }}>
              Redefining the Executive & Workplace Experience
            </h3>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Our chairs are more than just furniture; they are precision instruments designed to keep executives, team members, and students supported through intense focus hours. From ergonomic lumbar curves to high-density foam density, every detail is engineered with intention.
            </p>

            {/* Pillar Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ background: 'var(--color-bg-light)', padding: '1.25rem', borderRadius: '16px', borderLeft: '4px solid var(--color-gold)' }}>
                <div style={{ fontWeight: '700', color: 'var(--color-primary-dark)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                  Synchronized Tilt
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                  Multi-angle locking mechanism for relaxed tension.
                </div>
              </div>

              <div style={{ background: 'var(--color-bg-light)', padding: '1.25rem', borderRadius: '16px', borderLeft: '4px solid var(--color-primary)' }}>
                <div style={{ fontWeight: '700', color: 'var(--color-primary-dark)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                  Custom Upholstery
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                  Breathable mesh, leatherette, and cane options.
                </div>
              </div>
            </div>

            <a href="https://wa.me/918884487020?text=Hi%20LK%20Furniture%20World1%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Ergonomic%20Executive%20Chairs." target="_blank" rel="noopener noreferrer" className="btn-gold">
              ENQUIRE ON WHATSAPP <ArrowRight size={18} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

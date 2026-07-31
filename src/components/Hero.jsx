import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Award, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section id="home" style={{ paddingTop: '7.5rem', paddingBottom: '4rem', background: 'linear-gradient(180deg, #F5F7F6 0%, #FFFFFF 100%)' }}>
      <div className="container">
        
        {/* Split Layout inspired by Template Screenshot 1 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Rounded Image Card matching Screenshot 1 */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: '#EAEFEF',
              borderRadius: '32px',
              padding: '1.75rem',
              boxShadow: '0 20px 50px rgba(24, 59, 53, 0.08)',
              border: '1px solid rgba(24, 59, 53, 0.06)',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img 
                src="/images/hero_chairs.jpg" 
                alt="LK Furniture World1 Ergonomic Executive & Office Chairs Showcase"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
                className="hero-img-hover"
              />

              {/* Floating Floating Accent Badge */}
              <div style={{
                position: 'absolute',
                bottom: '2.5rem',
                left: '2.5rem',
                background: 'rgba(24, 59, 53, 0.92)',
                backdropFilter: 'blur(10px)',
                color: '#FFFFFF',
                padding: '0.85rem 1.25rem',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                maxWidth: 'calc(100% - 5rem)'
              }}>
                <div style={{ 
                  background: 'var(--color-gold)', 
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '10px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0 
                }}>
                  <Sparkles size={20} color="#FFFFFF" />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: '700', fontFamily: 'var(--font-heading)', color: 'var(--color-gold-light)' }}>
                    Comfort in Every Color
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#A0B4B0' }}>
                    Commercial & Residential Custom Seating
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Accent */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              width: '120px',
              height: '120px',
              background: 'radial-gradient(circle, rgba(197, 160, 117, 0.15) 0%, rgba(255,255,255,0) 70%)',
              zIndex: -1
            }} />
          </div>

          {/* Right Column: Copy & Actions matching Screenshot 1 text style */}
          <div>
            <div className="eyebrow-tag">
              LK FURNITURE WORLD1 BENGALURU
            </div>
            
            <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', color: 'var(--color-primary-dark)' }}>
              Engineered for <span style={{ color: 'var(--color-primary)', position: 'relative' }}>
                Perpetual Comfort
                <svg style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '8px' }} viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20 100 10" stroke="var(--color-gold)" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.65,
              marginBottom: '2rem'
            }}>
              Experience the science of sitting. Our multi-dimensional lumbar support, synchronized tilt mechanisms, and hand-built custom furniture transform workplaces, classrooms, lounges, and luxury homes across Bengaluru.
            </p>

            {/* Feature list pills */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-primary-dark)' }}>
                <CheckCircle2 size={18} color="var(--color-gold)" /> Direct Factory Pricing
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-primary-dark)' }}>
                <CheckCircle2 size={18} color="var(--color-gold)" /> Custom Sizes & Fabrics
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-primary-dark)' }}>
                <CheckCircle2 size={18} color="var(--color-gold)" /> Mysore Rd Storefront
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-primary-dark)' }}>
                <CheckCircle2 size={18} color="var(--color-gold)" /> School & Commercial Bulk
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <button onClick={onOpenQuoteModal} className="btn-primary">
                GET CUSTOM QUOTE <ArrowRight size={18} />
              </button>
              <a href="#collection" className="btn-outline">
                EXPLORE CATALOG
              </a>
            </div>

            {/* Quick stats strip */}
            <div style={{ 
              marginTop: '3rem', 
              paddingTop: '1.5rem', 
              borderTop: '1px solid rgba(24, 59, 53, 0.1)',
              display: 'flex',
              gap: '2.5rem'
            }}>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>100%</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>Custom Built</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>500+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>Offices & Schools</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Mysore Rd</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>Bapuji Nagar Showroom</div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .hero-img-hover:hover {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
}

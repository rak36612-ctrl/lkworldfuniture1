import React from 'react';
import { Award, CheckCircle2, ShieldCheck, HeartHandshake, Calendar, Sparkles } from 'lucide-react';

export default function OwnerStory() {
  return (
    <section id="about" style={{ background: '#FAF8F5', padding: '3.5rem 0', borderTop: '1px solid rgba(24, 59, 53, 0.06)' }}>
      <div className="container">
        
        {/* Section Eyebrow Header */}
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
            OUR STORY
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

        {/* Main Content Layout: Card Container */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '32px',
          padding: 'clamp(2rem, 5vw, 4rem)',
          boxShadow: '0 12px 40px rgba(24, 59, 53, 0.06)',
          border: '1px solid rgba(24, 59, 53, 0.08)'
        }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'flex-start'
          }}>

            {/* Left Column: Workshop & Founders Image with Floating Badges */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(0,0,0,0.14)',
                position: 'relative',
                height: '460px'
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
                  background: 'linear-gradient(180deg, transparent 35%, rgba(16, 40, 36, 0.9) 100%)'
                }} />

                {/* Founders Overlay Tag */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  color: '#FFFFFF',
                  zIndex: 2
                }}>
                  <div style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C5A075', fontWeight: '700', marginBottom: '0.2rem' }}>
                    THE FOUNDERS
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: '800' }}>
                    Mr. Dilip Raj & Mr. Harsha
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.85)', marginTop: '0.2rem' }}>
                    Est. October 2023 • Bengaluru
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
                padding: '0.9rem 1.4rem',
                boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                border: '1.5px solid #C5A075',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
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
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: '900', color: '#C5A075', lineHeight: 1 }}>
                    400+
                  </div>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.85)', fontWeight: '600' }}>
                    Orders Completed
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: User's Complete Authentic Founder Narrative */}
            <div style={{
              fontSize: '1rem',
              color: '#3A4D48',
              lineHeight: 1.8,
              fontFamily: 'var(--font-body)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}>

              <p style={{ margin: 0 }}>
                Every successful business begins with a dream. <strong>LK Furniture World1</strong> was born from the determination of two friends, <strong>Mr. Dilip Raj</strong> and <strong>Mr. Harsha</strong>, who believed that success comes to those willing to take risks and work relentlessly.
              </p>

              <p style={{ margin: 0 }}>
                In <strong>October 2023</strong>, after working as Sales Executives in a well-known company, they made one of the biggest decisions of their lives. Although they gained valuable industry experience, they realized that the opportunities for growth, recognition, and financial success they aspired to were beyond their reach. Instead of settling, they chose to build something of their own.
              </p>

              <p style={{ margin: 0 }}>
                Growing up in a neighborhood where almost every street was connected to the furniture industry, furniture wasn't just a business to them—it was a part of their everyday lives. From childhood, they had watched how the industry operated, understood customer needs, and learned the importance of quality and trust. That familiarity inspired a simple yet life-changing thought:
              </p>

              {/* Callout Quote */}
              <div style={{
                background: '#FAF8F5',
                borderLeft: '4px solid #B08C5B',
                padding: '1.1rem 1.5rem',
                borderRadius: '0 16px 16px 0',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.15rem',
                fontWeight: '700',
                color: '#162220',
                fontStyle: 'italic'
              }}>
                "Why not build our own furniture brand?"
              </div>

              <p style={{ margin: 0 }}>
                With courage, commitment, and a shared vision, <strong>LK Furniture World1</strong> was established.
              </p>

              <p style={{ margin: 0 }}>
                The beginning was far from easy. They waited for months just to receive their first order. There were moments of uncertainty, but giving up was never an option.
              </p>

              <p style={{ margin: 0, fontWeight: '700', color: '#162220' }}>
                Instead, they worked harder.
              </p>

              <p style={{ margin: 0 }}>
                They personally printed visiting cards, traveled across every corner of Bengaluru, met interior designers, schools, corporate offices, restaurants, cafés, and countless business owners. Every meeting, every introduction, and every conversation became another step toward building their dream.
              </p>

              <p style={{ margin: 0 }}>
                Their journey began with supplying a few cafeteria chairs. Today, that small beginning has grown into a trusted furniture brand offering <strong>8–10 major product categories</strong>, including:
              </p>

              {/* Product Categories Bullet Grid */}
              <div style={{
                background: '#F5F7F6',
                borderRadius: '20px',
                padding: '1.25rem 1.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '0.75rem',
                border: '1px solid rgba(24, 59, 53, 0.08)'
              }}>
                {[
                  'Executive & Boss Chairs',
                  'Ergonomic Office Chairs',
                  'School Desks & Institutional Furniture',
                  'Workstation Setups',
                  'Restaurant & Café Furniture',
                  'Cafeteria Seating',
                  'Office Furniture Solutions',
                  'Custom Commercial Furniture'
                ].map((cat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', fontWeight: '700', color: '#162220' }}>
                    <CheckCircle2 size={16} color="#B08C5B" style={{ flexShrink: 0 }} />
                    <span>{cat}</span>
                  </div>
                ))}
              </div>

              <p style={{ margin: 0 }}>
                With an unwavering commitment to quality, customer satisfaction, and timely service, <strong>LK Furniture World1</strong> has successfully completed <strong>400+ orders</strong> and continues to serve businesses, educational institutions, and commercial spaces with pride.
              </p>

              <p style={{ margin: 0 }}>
                Like the Phoenix, every challenge only made them stronger. What started as a dream between two friends has become a growing brand built on perseverance, integrity, and trust.
              </p>

              <p style={{ margin: 0 }}>
                Today, <strong>LK Furniture World1</strong> continues its journey with the same passion that started it all—creating quality furniture solutions while building lasting relationships with every customer.
              </p>

              {/* Highlight Conclusion Banner */}
              <div style={{
                background: 'linear-gradient(135deg, #162220 0%, #233734 100%)',
                color: '#FFFFFF',
                borderRadius: '20px',
                padding: '1.25rem 1.75rem',
                marginTop: '0.5rem',
                border: '1px solid #C5A075',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <Sparkles size={28} color="#C5A075" style={{ flexShrink: 0 }} />
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: '#FFFFFF', lineHeight: 1.4 }}>
                  From a dream in 2023 to 400+ successful projects—and this is only the beginning.
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Feature Badges Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(24, 59, 53, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', fontWeight: '700', color: '#162220' }}>
              <Calendar size={20} color="#B08C5B" /> Est. October 2023
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', fontWeight: '700', color: '#162220' }}>
              <HeartHandshake size={20} color="#B08C5B" /> Mr. Dilip Raj & Mr. Harsha
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', fontWeight: '700', color: '#162220' }}>
              <CheckCircle2 size={20} color="#B08C5B" /> 400+ Orders Completed
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', fontWeight: '700', color: '#162220' }}>
              <ShieldCheck size={20} color="#B08C5B" /> 8–10 Major Categories
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

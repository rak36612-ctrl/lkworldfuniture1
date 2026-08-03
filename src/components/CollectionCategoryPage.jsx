import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

const CATEGORIES_DATA = {
  barstool: {
    title: 'BARSTOOL',
    sections: [
      {
        title: 'BAR STOOLS',
        items: [
          { id: 'b1', image: '/images/barstool1.jpeg', tag: 'Woven Cane & Metal' },
          { id: 'b2', image: '/images/barstool2.jpeg', tag: 'Contoured Cushion' },
          { id: 'b3', image: '/images/barstool3.jpeg', tag: 'Gold Accent Frame' },
          { id: 'b4', image: '/images/barstool4.jpeg', tag: 'Powder-Coated Steel' },
          { id: 'b5', image: '/images/barstool5.jpeg', tag: 'Pneumatic Swivel' },
          { id: 'b6', image: '/images/barstool6.jpeg', tag: 'Solid Wood Finish' },
          { id: 'b7', image: '/images/barstool7.jpeg', tag: 'Full Back Support' },
          { id: 'b8', image: '/images/barstool8.jpeg', tag: 'Compact Counter' }
        ]
      },
      {
        title: 'BAR TABLES',
        items: [
          { id: 'bt1', image: '/images/bartable1.jpeg', tag: 'Solid Wood & Steel' },
          { id: 'bt2', image: '/images/bartable2.jpeg', tag: 'Compact Round' },
          { id: 'bt3', image: '/images/bartable3.jpeg', tag: 'Heavy Duty Metal' },
          { id: 'bt4', image: '/images/bartable4.jpeg', tag: 'Sleek Modern Profile' },
          { id: 'bt5', image: '/images/bartable5.jpeg', tag: 'Hardwood Finish' }
        ]
      }
    ]
  },
  workstations: {
    title: 'WORKSTATION CHAIRS',
    sections: [
      {
        title: 'WORKSTATION & TASK SEATING',
        items: [
          { id: 'wc1', image: '/images/workstationchair1.jpeg', tag: 'High-Tensile Mesh' },
          { id: 'wc2', image: '/images/workstationchair2.jpeg', tag: 'Ergonomic Lumbar Support' },
          { id: 'wc3', image: '/images/workstationchair3.jpeg', tag: 'Synchronized Tilt' },
          { id: 'wc4', image: '/images/workstationchair4.jpeg', tag: 'Adjustable Armrests' },
          { id: 'wc5', image: '/images/workstationchair5.jpeg', tag: 'Breathable Backrest' },
          { id: 'wc6', image: '/images/workstationchair6.jpeg', tag: 'Chrome Base Swivel' },
          { id: 'wc7', image: '/images/workstationchair7.jpeg', tag: 'Task & Computer Seating' },
          { id: 'wc8', image: '/images/workstationchair8.jpeg', tag: 'Executive Workstation Chair' }
        ]
      }
    ]
  },
  'executive-chairs': {
    title: 'EXECUTIVE CHAIRS',
    sections: [
      {
        title: 'EXECUTIVE & BOARDROOM SEATING',
        items: [
          { id: 'e1', image: '/images/boardroom_chair.jpg', tag: 'Leatherette High-Back' },
          { id: 'e2', image: '/images/hero_chairs.jpg', tag: 'Ergonomic Lumbar' },
          { id: 'e3', image: '/images/ergonomic_lumbar.webp', tag: 'Memory Foam Cushion' },
          { id: 'e4', image: '/images/boardroom_chair.jpg', tag: 'Chrome Base Swivel' }
        ]
      }
    ]
  },
  'boardroom-tables': {
    title: 'BOARDROOM TABLES',
    sections: [
      {
        title: 'CONFERENCE & STRATEGY TABLES',
        items: [
          { id: 't1', image: '/images/collaborative_desk.jpg', tag: 'Pre-laminated Wood' },
          { id: 't2', image: '/images/custom_workstation.jpg', tag: 'Wireway Cable System' }
        ]
      }
    ]
  },
  lounge: {
    title: 'LOUNGE FURNITURE',
    sections: [
      {
        title: 'RECEPTION & LOUNGE SETS',
        items: [
          { id: 'l1', image: '/images/ergonomic_lumbar.webp', tag: 'Stain-Resistant Fabric' }
        ]
      }
    ]
  },
  'school-desks': {
    title: 'SCHOOL DESKS',
    sections: [
      {
        title: 'CLASSROOM & INSTITUTIONAL SEATING',
        items: [
          { id: 's1', image: '/images/school_desks.jpg', tag: 'Heavy Duty Steel Bench' }
        ]
      }
    ]
  }
};

export default function CollectionCategoryPage({ categoryKey, onNavigateBack }) {
  const category = CATEGORIES_DATA[categoryKey] || CATEGORIES_DATA.barstool;

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', paddingBottom: '1.5rem', paddingTop: '2rem' }}>
      <div className="container">
        
        {/* Top Header — Clean title, no product count indicator */}
        <div style={{
          marginTop: '1.5rem',
          marginBottom: '3.5rem',
          borderBottom: '1px solid rgba(24, 59, 53, 0.1)',
          paddingBottom: '1.5rem'
        }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--color-gold)', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            LK FURNITURE WORLD1 COLLECTIONS
          </div>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '900',
            color: '#183B35',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            margin: 0
          }}>
            {category.title}
          </h1>
        </div>

        {/* Render Each Section */}
        {category.sections.map((section, idx) => (
          <div key={idx} style={{ marginBottom: '4.5rem' }}>
            
            {section.title && (
              <div style={{
                fontSize: '1.2rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: '800',
                color: '#183B35',
                letterSpacing: '0.08em',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                borderBottom: '2px solid #C5A075',
                paddingBottom: '0.5rem',
                maxWidth: '320px'
              }}>
                {section.title}
              </div>
            )}

            {/* 3 Cards Each Row Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
              gap: '2rem'
            }}>
              {section.items.map((item) => (
                <a
                  key={item.id}
                  href={`https://wa.me/918884487020?text=Hi%20LK%20Furniture%20World1%2C%20I%20am%20interested%20in%20an%20item%20from%3A%20${encodeURIComponent(category.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer'
                  }}
                  className="promax-card-wrap"
                >
                  {/* Soft Rounded Off-White Card (border-radius: 28px, background: #F0F4F2) */}
                  <div style={{
                    background: '#F0F4F2',
                    borderRadius: '28px',
                    height: '360px',
                    padding: '1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(24, 59, 53, 0.04)',
                    transition: 'transform 0.35s ease, boxShadow 0.35s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }} className="promax-card-bg">
                    
                    {/* Full Product Image — 100% full view without cropping! */}
                    <img 
                      src={item.image} 
                      alt={category.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        display: 'block',
                        transition: 'transform 0.4s ease'
                      }}
                      className="promax-img-zoom"
                    />

                    {/* Spec Tag */}
                    {item.tag && (
                      <span style={{
                        position: 'absolute',
                        top: '1.25rem',
                        left: '1.25rem',
                        background: 'rgba(24, 59, 53, 0.9)',
                        color: '#FFFFFF',
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '999px',
                        backdropFilter: 'blur(6px)'
                      }}>
                        {item.tag}
                      </span>
                    )}

                    {/* Circular Action Arrow Button */}
                    <div style={{
                      position: 'absolute',
                      bottom: '1.25rem',
                      right: '1.25rem',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      boxShadow: '0 4px 14px rgba(24, 59, 53, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.25s ease, background 0.25s ease'
                    }} className="card-arrow-circle">
                      <ArrowRight size={20} color="#C5A075" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </div>
        ))}

        {/* AT LAST: VIEW ENTIRE CATALOGUE BUTTON */}
        <div style={{ textAlign: 'center', paddingTop: '2.5rem', borderTop: '1px solid rgba(24, 59, 53, 0.1)' }}>
          <a
            href="https://wa.me/918884487020?text=Hi%20LK%20Furniture%20World1%2C%20please%20send%20me%20your%20complete%202024%20PDF%20catalogue%20for%20all%20collections."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.85rem',
              padding: '1.1rem 2.75rem',
              fontSize: '1rem',
              fontWeight: '800',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: '999px',
              boxShadow: '0 10px 30px rgba(197, 160, 117, 0.4)',
              textDecoration: 'none'
            }}
          >
            <BookOpen size={22} /> VIEW ENTIRE CATALOGUE <ArrowRight size={20} />
          </a>
        </div>

      </div>

      <style>{`
        .promax-card-wrap:hover .promax-card-bg {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(24, 59, 53, 0.12) !important;
        }
        .promax-card-wrap:hover .promax-img-zoom {
          transform: scale(1.06);
        }
        .promax-card-wrap:hover .card-arrow-circle {
          background: #C5A075 !important;
          transform: scale(1.1);
        }
        .promax-card-wrap:hover .card-arrow-circle svg {
          stroke: #FFFFFF !important;
        }
      `}</style>
    </div>
  );
}

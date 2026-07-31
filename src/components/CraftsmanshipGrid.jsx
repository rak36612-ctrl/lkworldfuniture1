import React from 'react';
import { ShieldCheck, Compass, CheckCircle } from 'lucide-react';

export default function CraftsmanshipGrid() {
  return (
    <section id="craftsmanship" className="section-padding" style={{ background: 'var(--color-bg-light)' }}>
      <div className="container">
        
        {/* Split Layout matching Template Screenshot 4 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left Text Block */}
          <div>
            <div className="eyebrow-tag">
              PRECISION MANUFACTURING
            </div>

            <h2 className="section-title" style={{ color: 'var(--color-primary-dark)', fontSize: 'clamp(2rem, 3.8vw, 3rem)' }}>
              Uncompromising Craftsmanship
            </h2>

            <p style={{
              fontSize: '1.08rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.7,
              marginBottom: '2rem'
            }}>
              From the selection of high-tensile breathable meshes to precision-welded steel frames and woven natural cane, LK Furniture World1 guarantees structural integrity built for long hours and high-traffic heavy duty use.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: '#FFFFFF', padding: '0.6rem', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', color: 'var(--color-gold)' }}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--color-primary-dark)' }}>
                    Commercial Grade Durability
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                    Engineered for schools, IT office hubs, cafes, and residential estates with heavy-gauge materials.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: '#FFFFFF', padding: '0.6rem', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', color: 'var(--color-primary)' }}>
                  <Compass size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--color-primary-dark)' }}>
                    Bespoke Dimension Customization
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                    Custom table lengths, chair heights, fabric colors, and frame colors tailored to your floor plan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: 2x2 Grid Collage matching Screenshot 4 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.25rem'
          }}>
            
            {/* Card 1 */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '0.75rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid rgba(24, 59, 53, 0.05)'
            }}>
              <img 
                src="/images/collaborative_desk.jpg" 
                alt="LK Collaborative Zone Desks" 
                style={{ width: '100%', height: '170px', objectFit: 'cover', borderRadius: '18px' }}
              />
              <div style={{ padding: '0.75rem 0.5rem 0.25rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-primary-dark)' }}>Collaborative Zones</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Modern minimalist forms</div>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '0.75rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid rgba(24, 59, 53, 0.05)'
            }}>
              <img 
                src="/images/woven_barstool.jpg" 
                alt="LK Woven Cane and Metal Barstools" 
                style={{ width: '100%', height: '170px', objectFit: 'cover', borderRadius: '18px' }}
              />
              <div style={{ padding: '0.75rem 0.5rem 0.25rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-primary-dark)' }}>Woven Cane & Metal</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Textured aesthetic barstools</div>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '0.75rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid rgba(24, 59, 53, 0.05)'
            }}>
              <img 
                src="/images/school_desks.jpg" 
                alt="LK 4-Seater School Desks" 
                style={{ width: '100%', height: '170px', objectFit: 'cover', borderRadius: '18px' }}
              />
              <div style={{ padding: '0.75rem 0.5rem 0.25rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-primary-dark)' }}>4-Seater School Desks</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Classroom durability</div>
              </div>
            </div>

            {/* Card 4 */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '0.75rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid rgba(24, 59, 53, 0.05)'
            }}>
              <img 
                src="/images/ergonomic_lumbar.webp" 
                alt="LK Ergonomic Lumbar Support Cushion" 
                style={{ width: '100%', height: '170px', objectFit: 'cover', borderRadius: '18px' }}
              />
              <div style={{ padding: '0.75rem 0.5rem 0.25rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-primary-dark)' }}>Soft Lumbar Cushioning</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Long-lasting comfort</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

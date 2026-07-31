import React, { useState } from 'react';
import { Layers, Scissors, Cpu, Award, CheckCircle2, ChevronRight } from 'lucide-react';

const STAGES = [
  {
    id: '01',
    icon: <Scissors size={28} />,
    title: 'Material Selection',
    desc: 'We source premium-grade tensile mesh, leatherette, solid hardwood, and powder-coated steel frames from vetted suppliers.',
    detail: 'MATERIAL SOURCED',
  },
  {
    id: '02',
    icon: <Cpu size={28} />,
    title: 'Masterful Assembly',
    desc: 'Precision-fused components are assembled with surgical accuracy. Every joint, weld, and stitch is inspected for tolerance.',
    detail: 'QUALITY GUARANTEED',
  },
  {
    id: '03',
    icon: <Layers size={28} />,
    title: 'Custom Finishing',
    desc: 'Upholstery is stretched and stitched by hand. Frame finishes — chrome, matte, or powder-coat — applied uniformly.',
    detail: 'HAND-CRAFTED FINISH',
  },
  {
    id: '04',
    icon: <Award size={28} />,
    title: 'Factory QC & Delivery',
    desc: 'Every piece passes our 12-point quality checklist before dispatch. Delivered to Bengaluru offices, schools, and homes.',
    detail: 'BENGALURU DELIVERED',
  },
];

export default function CraftsmanshipCycle() {
  const [activeStage, setActiveStage] = useState(1);

  const stage = STAGES[activeStage];

  return (
    <section
      id="engineering"
      className="section-padding"
      style={{ background: '#FAFBFA', overflow: 'hidden' }}
    >
      <div className="container">
        {/* Header matching Screenshot 2: gold eyebrow + bold two-line headline */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div
            className="eyebrow-tag"
            style={{ justifyContent: 'center', color: 'var(--color-gold)' }}
          >
            ✦ THE CRAFTSMANSHIP CYCLE
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: '900',
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              color: 'var(--color-primary-dark)',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              marginBottom: '0.2rem',
            }}
          >
            ENGINEERING
          </h2>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: '400',
              fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
              color: 'var(--color-primary-dark)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              fontStyle: 'italic',
              marginBottom: '1.5rem',
            }}
          >
            IN MOTION.
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--color-text-muted)',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Inside every LK Furniture World1 piece is a rigorous four-stage manufacturing
            cycle built for commercial durability and residential elegance.
          </p>
        </div>

        {/* Main Interactive Stage Panel — matching Screenshot 2 split layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Large Chair Illustration / Image with grid-paper background */}
          <div
            style={{
              position: 'relative',
              background: '#FFFFFF',
              borderRadius: '28px',
              padding: '2.5rem',
              border: '1px solid rgba(24,59,53,0.08)',
              boxShadow: 'var(--shadow-sm)',
              minHeight: '420px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            {/* Grid paper dots background */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'radial-gradient(circle, rgba(24,59,53,0.06) 1.5px, transparent 1.5px)',
                backgroundSize: '28px 28px',
                borderRadius: '28px',
              }}
            />

            {/* Chair Image */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <img
                src="/images/craftsmanship_stage.jpg"
                alt={`LK Furniture World1 craftsmanship stage ${stage.id} - ${stage.title}`}
                style={{
                  width: '100%',
                  maxHeight: '340px',
                  objectFit: 'contain',
                  borderRadius: '20px',
                  transition: 'opacity 0.4s ease',
                }}
              />
            </div>

            {/* Stage badge bottom-left */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                background: 'var(--color-primary-dark)',
                color: '#FFFFFF',
                padding: '0.5rem 1rem',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '0.1em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <CheckCircle2 size={14} color="#C5A075" />
              STAGE {stage.id} — {stage.detail}
            </div>
          </div>

          {/* Right: Stage Selector Cards — stacked list like Screenshot 2 right panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {STAGES.map((s, i) => {
              const isActive = i === activeStage;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveStage(i)}
                  style={{
                    background: isActive ? 'var(--color-primary-dark)' : '#FFFFFF',
                    borderRadius: '20px',
                    padding: '1.5rem 1.75rem',
                    border: isActive
                      ? '2px solid var(--color-primary)'
                      : '1px solid rgba(24,59,53,0.10)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isActive ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                    }}
                  >
                    {/* Icon */}
                    <div
                      style={{
                        color: isActive ? '#C5A075' : 'var(--color-primary)',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      {s.icon}
                    </div>

                    <div style={{ flex: 1 }}>
                      {/* Stage label */}
                      <div
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: '700',
                          letterSpacing: '0.15em',
                          color: isActive ? '#C5A075' : 'var(--color-gold)',
                          marginBottom: '0.3rem',
                        }}
                      >
                        STAGE {s.id}
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: '700',
                          fontFamily: 'var(--font-heading)',
                          color: isActive ? '#FFFFFF' : 'var(--color-primary-dark)',
                          marginBottom: isActive ? '0.65rem' : 0,
                          lineHeight: 1.3,
                        }}
                      >
                        {s.title}
                      </h3>

                      {/* Expanded description when active */}
                      {isActive && (
                        <p
                          style={{
                            fontSize: '0.88rem',
                            color: 'rgba(255,255,255,0.7)',
                            lineHeight: 1.6,
                            marginBottom: '0.75rem',
                          }}
                        >
                          {s.desc}
                        </p>
                      )}

                      {isActive && (
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.78rem',
                            fontWeight: '700',
                            color: '#C5A075',
                            letterSpacing: '0.1em',
                          }}
                        >
                          <CheckCircle2 size={14} /> {s.detail}
                        </div>
                      )}
                    </div>

                    {!isActive && (
                      <ChevronRight
                        size={18}
                        color="var(--color-text-light)"
                        style={{ marginTop: '4px', flexShrink: 0 }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

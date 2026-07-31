import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, ArrowRight as ArrowRightIcon } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: '/images/carousel_slide_1.jpg',
    eyebrow: 'COMFORT IN EVERY COLOR',
    headline: 'Style in Every Space',
    sub: 'From bold reds to classic blacks and warm woods — our custom chair collection defines your environment.',
    cta: 'Explore Collection',
    ctaHref: '#collection',
  },
  {
    id: 2,
    image: '/images/carousel_slide_2.jpg',
    eyebrow: 'EXECUTIVE COMMAND CENTRES',
    headline: 'Built for Big Decisions',
    sub: 'High-back ergonomic executive chairs for boardrooms, C-suites, and corporate hubs across Bengaluru.',
    cta: 'Get Office Quote',
    ctaHref: '#solutions',
  },
  {
    id: 3,
    image: '/images/carousel_slide_3.jpg',
    eyebrow: 'BAR STOOLS & LOUNGE SEATING',
    headline: 'Textured Aesthetic Living',
    sub: 'Handwoven cane, velvet, and metal fusion barstools for cafes, restaurants, and luxury home lounges.',
    cta: 'View Barstools',
    ctaHref: '#collection',
  },
  {
    id: 4,
    image: '/images/carousel_slide_4.jpg',
    eyebrow: 'INSTITUTIONAL FURNITURE',
    headline: 'Upgrade Your Classrooms',
    sub: 'Heavy-duty 4-seater school desks and benches built to last for schools and institutions across Karnataka.',
    cta: 'Bulk Pricing',
    ctaHref: '#solutions',
  },
  {
    id: 5,
    image: '/images/craftsmanship_stage.jpg',
    eyebrow: 'THE CRAFTSMANSHIP CYCLE',
    headline: 'Engineering in Motion.',
    sub: 'Every LK Furniture World1 piece undergoes a rigorous design-to-delivery process engineered for perfection.',
    cta: 'Our Craftsmanship',
    ctaHref: '#craftsmanship',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 400);
  }, [isTransitioning]);

  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);
  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = SLIDES[current];

  return (
    <section
      id="carousel-hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '92vh',
        minHeight: '560px',
        overflow: 'hidden',
        background: '#0e2420',
      }}
    >
      {/* Background Image */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${s.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === current ? (isTransitioning ? 0 : 1) : 0,
            transition: 'opacity 0.65s cubic-bezier(0.4,0,0.2,1)',
            zIndex: 0,
          }}
        />
      ))}

      {/* Dark Gradient Overlay — mimics the Promax screenshot gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(14,36,32,0.85) 0%, rgba(14,36,32,0.35) 55%, rgba(14,36,32,0.10) 100%)',
          zIndex: 1,
        }}
      />

      {/* LK Brand Watermark (top-left like Promax logo position) */}
      <div
        style={{
          position: 'absolute',
          top: '6.5rem',
          left: '3rem',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem',
          opacity: 0.92,
        }}
      >
        <div
          style={{
            width: '52px',
            height: '52px',
            background: 'rgba(197,160,117,0.15)',
            border: '1.5px solid #C5A075',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              color: '#C5A075',
              fontWeight: '900',
              fontSize: '1.4rem',
              fontFamily: 'var(--font-heading)',
            }}
          >
            LK
          </span>
        </div>
        <div>
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: '900',
              fontSize: '1.15rem',
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}
          >
            LK FURNITURE<span style={{ color: '#C5A075' }}> WORLD1</span>
          </div>
          <div
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)',
              fontWeight: '600',
            }}
          >
            The Custom Destination
          </div>
        </div>
      </div>

      {/* Main Slide Copy — positioned like Promax left-aligned headline */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          zIndex: 5,
          padding: '0 3rem',
          paddingTop: '4rem',
        }}
      >
        <div style={{ maxWidth: '640px' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.78rem',
              fontWeight: '700',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#C5A075',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
              transition: 'all 0.5s ease 0.1s',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '28px',
                height: '2px',
                background: '#C5A075',
              }}
            />
            {slide.eyebrow}
          </div>

          {/* Headline — bold like Promax "Furniture is meant to be used and enjoyed" */}
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
              fontWeight: '800',
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? 'translateY(18px)' : 'translateY(0)',
              transition: 'all 0.55s ease 0.18s',
            }}
          >
            {slide.headline}
          </h1>

          {/* Sub-description */}
          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.65,
              marginBottom: '2rem',
              maxWidth: '520px',
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? 'translateY(14px)' : 'translateY(0)',
              transition: 'all 0.55s ease 0.26s',
            }}
          >
            {slide.sub}
          </p>

          {/* CTA */}
          <a
            href={slide.ctaHref}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: '#C5A075',
              color: '#FFFFFF',
              padding: '0.95rem 2rem',
              borderRadius: '999px',
              fontWeight: '700',
              fontSize: '0.9rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              boxShadow: '0 8px 24px rgba(197,160,117,0.35)',
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? 'translateY(12px)' : 'translateY(0)',
              transition: 'all 0.55s ease 0.32s, background 0.2s ease, box-shadow 0.2s ease',
            }}
            className="carousel-cta-hover"
          >
            {slide.cta}
            <ArrowRightIcon size={18} />
          </a>
        </div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        style={{
          position: 'absolute',
          left: '1.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.25)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backdropFilter: 'blur(6px)',
          transition: 'background 0.2s ease',
        }}
        className="carousel-arrow-hover"
      >
        <ArrowLeft size={22} />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        style={{
          position: 'absolute',
          right: '1.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.25)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backdropFilter: 'blur(6px)',
          transition: 'background 0.2s ease',
        }}
        className="carousel-arrow-hover"
      >
        <ArrowRight size={22} />
      </button>

      {/* Dot indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          gap: '0.5rem',
        }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? '28px' : '8px',
              height: '8px',
              borderRadius: '999px',
              background: i === current ? '#C5A075' : 'rgba(255,255,255,0.35)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.35s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Slide counter — bottom right like editorial style */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          zIndex: 10,
          fontFamily: 'var(--font-heading)',
          color: 'rgba(255,255,255,0.55)',
          fontSize: '0.8rem',
          fontWeight: '700',
          letterSpacing: '0.1em',
        }}
      >
        <span style={{ color: '#C5A075', fontSize: '1rem' }}>
          {String(current + 1).padStart(2, '0')}
        </span>{' '}
        / {String(SLIDES.length).padStart(2, '0')}
      </div>

      <style>{`
        .carousel-cta-hover:hover {
          background: #B38E63 !important;
          box-shadow: 0 12px 32px rgba(197,160,117,0.45) !important;
          transform: translateY(-2px) !important;
        }
        .carousel-arrow-hover:hover {
          background: rgba(255,255,255,0.25) !important;
        }
      `}</style>
    </section>
  );
}

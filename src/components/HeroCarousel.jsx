import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowRight as ArrowRightIcon } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: '/images/carousel_slide_1.jpg',
    eyebrow: 'COMFORT IN EVERY COLOR',
    headline: 'Style in Every Space',
    sub: 'From bold reds to classic blacks — our custom chair collection defines your environment.',
    cta: 'Explore Collection',
    ctaHref: '#collection',
  },
  {
    id: 2,
    image: '/images/carousel_slide_2.jpg',
    eyebrow: 'EXECUTIVE COMMAND CENTRES',
    headline: 'Built for Big Decisions',
    sub: 'Ergonomic executive chairs for boardrooms and corporate hubs across Bengaluru.',
    cta: 'Get Office Quote',
    ctaHref: '#solutions',
  },
  {
    id: 3,
    image: '/images/carousel_slide_3.jpg',
    eyebrow: 'BAR STOOLS & LOUNGE',
    headline: 'Textured Aesthetic Living',
    sub: 'Woven cane, velvet, and metal fusion barstools for cafes and luxury home lounges.',
    cta: 'View Barstools',
    ctaHref: '#collection',
  },
  {
    id: 4,
    image: '/images/carousel_slide_4.jpg',
    eyebrow: 'INSTITUTIONAL FURNITURE',
    headline: 'Upgrade Your Classrooms',
    sub: 'Heavy-duty 4-seater school desks built to last for schools across Karnataka.',
    cta: 'Bulk Pricing',
    ctaHref: '#solutions',
  },
  {
    id: 5,
    image: '/images/craftsmanship_stage.jpg',
    eyebrow: 'THE CRAFTSMANSHIP CYCLE',
    headline: 'Engineering in Motion.',
    sub: 'Every LK Furniture World1 piece undergoes a rigorous design-to-delivery process.',
    cta: 'Our Craftsmanship',
    ctaHref: '#craftsmanship',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Touch swipe state
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const goTo = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 380);
    },
    [isTransitioning]
  );

  const next = useCallback(
    () => goTo((current + 1) % SLIDES.length),
    [current, goTo]
  );

  const prev = useCallback(
    () => goTo((current - 1 + SLIDES.length) % SLIDES.length),
    [current, goTo]
  );

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Touch handlers for swipe navigation
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }
  };

  const slide = SLIDES[current];

  return (
    <section
      id="carousel-hero"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'relative',
        width: '100%',
        /* Responsive height: taller on mobile, shorter viewport on desktop */
        height: 'min(92vh, 680px)',
        minHeight: '460px',
        overflow: 'hidden',
        background: '#0e2420',
        userSelect: 'none',
      }}
    >
      {/* Background images — preloaded via CSS, crossfade on active */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          aria-hidden={i !== current}
          style={{
            position: 'absolute',
            inset: 0,
            /* Use will-change for GPU compositing — avoids repaints */
            willChange: 'opacity',
            backgroundImage: `url(${s.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            opacity: i === current ? (isTransitioning ? 0 : 1) : 0,
            transition: 'opacity 0.6s cubic-bezier(0.4,0,0.2,1)',
            zIndex: 0,
          }}
        />
      ))}

      {/* Bottom-heavy dark gradient — text always readable on mobile */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(14,36,32,0.45) 0%, rgba(14,36,32,0.62) 45%, rgba(14,36,32,0.92) 100%)',
          zIndex: 1,
        }}
      />

      {/* LK Logo watermark — top-left corner over all slides */}
      <div style={{
        position: 'absolute',
        top: 'clamp(4.5rem, 12vw, 6.5rem)',
        left: 'clamp(1rem, 4vw, 2.5rem)',
        zIndex: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(0.4rem, 1.5vw, 0.75rem)',
        opacity: 0.95,
        pointerEvents: 'none',
      }}>
        <img
          src="/images/lk_logo.png"
          alt="LK Furniture World1"
          style={{
            width: 'clamp(36px, 9vw, 56px)',
            height: 'clamp(36px, 9vw, 56px)',
            objectFit: 'contain',
            filter: 'drop-shadow(0 2px 10px rgba(197,160,117,0.5))',
            flexShrink: 0,
          }}
        />
        <div>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: '900',
            fontSize: 'clamp(0.75rem, 3vw, 1.1rem)',
            color: '#FFFFFF',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            textShadow: '0 1px 6px rgba(0,0,0,0.4)',
          }}>
            LK FURNITURE<span style={{ color: '#C5A075' }}> WORLD1</span>
          </div>
          <div style={{
            fontSize: 'clamp(0.52rem, 1.6vw, 0.65rem)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
            fontWeight: '600',
          }}>
            The Custom Destination
          </div>
        </div>
      </div>

      {/* Slide Copy — bottom-anchored for mobile readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          zIndex: 5,
          padding: 'clamp(1.25rem, 5vw, 3rem)',
          paddingBottom: 'clamp(4rem, 10vw, 5.5rem)',
        }}
      >
        {/* Eyebrow tag */}
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(0.68rem, 2.2vw, 0.8rem)',
            fontWeight: '700',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#C5A075',
            marginBottom: 'clamp(0.5rem, 1.5vw, 0.85rem)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? 'translateY(8px)' : 'translateY(0)',
            transition: 'all 0.45s ease 0.08s',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '20px',
              height: '2px',
              background: '#C5A075',
              flexShrink: 0,
            }}
          />
          {slide.eyebrow}
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.9rem, 7vw, 4rem)',
            fontWeight: '800',
            color: '#FFFFFF',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            marginBottom: 'clamp(0.6rem, 2vw, 1rem)',
            maxWidth: '600px',
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? 'translateY(14px)' : 'translateY(0)',
            transition: 'all 0.5s ease 0.15s',
          }}
        >
          {slide.headline}
        </h1>

        {/* Sub-description — hidden on very small heights to avoid overflow */}
        <p
          style={{
            fontSize: 'clamp(0.88rem, 2.8vw, 1rem)',
            color: 'rgba(255,255,255,0.78)',
            lineHeight: 1.6,
            marginBottom: 'clamp(1.25rem, 3.5vw, 1.75rem)',
            maxWidth: '520px',
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
            transition: 'all 0.5s ease 0.22s',
          }}
        >
          {slide.sub}
        </p>

        {/* CTA Button */}
        <div>
          <a
            href={slide.ctaHref}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: '#C5A075',
              color: '#FFFFFF',
              padding: 'clamp(0.7rem, 2.5vw, 0.95rem) clamp(1.25rem, 4vw, 2rem)',
              borderRadius: '999px',
              fontWeight: '700',
              fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              boxShadow: '0 6px 20px rgba(197,160,117,0.4)',
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? 'translateY(8px)' : 'translateY(0)',
              transition:
                'all 0.5s ease 0.28s, background 0.2s ease, box-shadow 0.2s ease',
            }}
            className="carousel-cta-hover"
          >
            {slide.cta}
            <ArrowRightIcon size={16} />
          </a>
        </div>
      </div>

      {/* Dot indicators — centered, bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(1rem, 3vw, 1.5rem)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          gap: '0.45rem',
          alignItems: 'center',
        }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? '26px' : '8px',
              height: '8px',
              borderRadius: '999px',
              background:
                i === current ? '#C5A075' : 'rgba(255,255,255,0.40)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.35s ease',
              padding: 0,
              /* Larger tap target without visual change */
              WebkitTapHighlightColor: 'transparent',
            }}
          />
        ))}
      </div>

      {/* Slide counter bottom-right — desktop only */}
      <div
        className="carousel-counter-desktop"
        style={{
          position: 'absolute',
          bottom: 'clamp(1rem, 3vw, 1.5rem)',
          right: 'clamp(1rem, 3vw, 2rem)',
          zIndex: 10,
          fontFamily: 'var(--font-heading)',
          color: 'rgba(255,255,255,0.50)',
          fontSize: '0.78rem',
          fontWeight: '700',
          letterSpacing: '0.1em',
          pointerEvents: 'none',
        }}
      >
        <span style={{ color: '#C5A075', fontSize: '0.95rem' }}>
          {String(current + 1).padStart(2, '0')}
        </span>{' '}
        / {String(SLIDES.length).padStart(2, '0')}
      </div>

      <style>{`
        .carousel-cta-hover:hover {
          background: #B38E63 !important;
          box-shadow: 0 10px 28px rgba(197,160,117,0.5) !important;
        }
        /* Hide slide counter on narrow screens */
        @media (max-width: 480px) {
          .carousel-counter-desktop {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

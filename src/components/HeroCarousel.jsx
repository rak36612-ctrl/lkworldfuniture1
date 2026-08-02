import React, { useState, useEffect, useCallback, useRef } from 'react';

const SLIDES = [
  { id: 1, image: '/images/HeroImage1.png', alt: 'LK Furniture World1 Hero 1' },
  { id: 2, image: '/images/HeroImage2.png', alt: 'LK Furniture World1 Hero 2' },
  { id: 3, image: '/images/HeroImage3.png', alt: 'LK Furniture World1 Hero 3' },
  { id: 4, image: '/images/HeroImage4.png', alt: 'LK Furniture World1 Hero 4' },
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
      }, 350);
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

  // Auto-advance slideshow every 3 seconds
  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  // Touch handlers for mobile swipe navigation
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

  return (
    <section
      id="carousel-hero"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'relative',
        width: '100%',
        marginTop: '70px', /* space below fixed navbar */
        background: '#FAF9F5',
        userSelect: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Sizing Container: Height naturally scales with 100% width image */}
      <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Transparent layout spacer to reserve a responsive height so images are not cropped */}
        <div style={{ width: '100%', height: 'clamp(360px, 56vh, 720px)', visibility: 'hidden', pointerEvents: 'none' }} aria-hidden="true" />

        {/* Slides rendering 100% of the image (contain & 100% width height auto) so branding is NEVER cropped */}
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            aria-hidden={i !== current}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: i === current ? (isTransitioning ? 0 : 1) : 0,
              transition: 'opacity 0.45s ease',
              zIndex: i === current ? 1 : 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#FAF9F5',
            }}
          >
            <img
              src={s.image}
              alt={s.alt}
              style={{
                width: 'auto',
                height: 'clamp(360px, 56vh, 720px)',
                maxWidth: '100%',
                objectFit: 'contain',
                objectPosition: 'center',
                display: 'block',
              }}
            />
          </div>
        ))}

        {/* Minimalist Dot indicators */}
        <div
          style={{
            position: 'absolute',
            bottom: '0.75rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
            background: 'rgba(0, 0, 0, 0.45)',
            padding: '0.3rem 0.7rem',
            borderRadius: '999px',
            backdropFilter: 'blur(6px)',
          }}
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === current ? '22px' : '7px',
                height: '7px',
                borderRadius: '999px',
                background: i === current ? '#C5A075' : 'rgba(255, 255, 255, 0.6)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.35s ease',
                padding: 0,
                WebkitTapHighlightColor: 'transparent',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

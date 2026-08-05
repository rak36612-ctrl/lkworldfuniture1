import React, { useState, useEffect, useCallback, useRef } from 'react';

const HERO_IMAGES = [
  { id: 1, image: '/images/HeroImage1.png?v=3', alt: 'LK Furniture World1 Hero 1' },
  { id: 2, image: '/images/HeroImage2.png?v=3', alt: 'LK Furniture World1 Hero 2' },
  { id: 3, image: '/images/HeroImage3.png?v=3', alt: 'LK Furniture World1 Hero 3' },
  { id: 4, image: '/images/HeroImage4.jpeg?v=3', alt: 'LK Furniture World1 Hero 4' },
  { id: 5, image: '/images/HeroImage5.png?v=3', alt: 'LK Furniture World1 Hero 5' },
  { id: 6, image: '/images/HeroImage6.png?v=3', alt: 'LK Furniture World1 Hero 6' },
  { id: 7, image: '/images/HeroImage7.png?v=3', alt: 'LK Furniture World1 Hero 7' },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Touch swipe state
  const touchStartX = useRef(null);

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
    () => goTo((current + 1) % HERO_IMAGES.length),
    [current, goTo]
  );

  const prev = useCallback(
    () => goTo((current - 1 + HERO_IMAGES.length) % HERO_IMAGES.length),
    [current, goTo]
  );

  // Auto-advance slideshow every 3 seconds (3000ms)
  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  // Touch handlers for mobile swipe navigation
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 35) {
      diff > 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  // Click handler allowing user to click right side (next) or left side (prev)
  const handleContainerClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (clickX > rect.width / 2) {
      next();
    } else {
      prev();
    }
  };

  return (
    <section
      id="carousel-hero"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleContainerClick}
      style={{
        position: 'relative',
        width: '100%',
        margin: 0,
        padding: 0,
        background: '#FAF9F5',
        cursor: 'pointer',
        userSelect: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Container aspect ratio naturally matched to 100% width image so no cropping or dark bars occur */}
      <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Natural layout spacer so section height matches image perfectly on laptop and mobile */}
        <img
          src={HERO_IMAGES[0].image}
          alt=""
          aria-hidden="true"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            visibility: 'hidden',
            pointerEvents: 'none',
          }}
        />

        {/* Full stretched, uncropped Hero Images slideshow */}
        {HERO_IMAGES.map((item, index) => (
          <div
            key={item.id}
            aria-hidden={index !== current}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: index === current ? (isTransitioning ? 0 : 1) : 0,
              transition: 'opacity 0.45s ease',
              zIndex: index === current ? 1 : 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#FAF9F5',
            }}
          >
            <img
              src={item.image}
              alt={item.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        ))}

        {/* Minimalist Dot indicators */}
        <div
          style={{
            position: 'absolute',
            bottom: '0.85rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            display: 'flex',
            gap: '0.45rem',
            alignItems: 'center',
            background: 'rgba(0, 0, 0, 0.35)',
            padding: '0.3rem 0.75rem',
            borderRadius: '999px',
            backdropFilter: 'blur(6px)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === current ? '24px' : '7px',
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

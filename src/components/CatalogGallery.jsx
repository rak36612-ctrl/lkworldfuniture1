import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Download, BookOpen, MessageCircle } from 'lucide-react';

// All 18 catalog pages
const TOTAL_PAGES = 18;
const PAGES = Array.from({ length: TOTAL_PAGES }, (_, i) => ({
  id: i + 1,
  src: `/images/catalog/catalog_page_${String(i + 1).padStart(2, '0')}.jpg`,
  label: `Page ${i + 1}`,
}));

export default function CatalogGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const touchStartX = useRef(null);
  const lightboxRef = useRef(null);

  // Keyboard navigation in lightbox
  const handleKey = useCallback(
    (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') { setLightboxOpen(false); setZoomed(false); }
      if (e.key === 'ArrowRight') setActivePage((p) => Math.min(p + 1, TOTAL_PAGES - 1));
      if (e.key === 'ArrowLeft') setActivePage((p) => Math.max(p - 1, 0));
    },
    [lightboxOpen]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  // Touch swipe in lightbox
  const onTouchStart = (e) => { touchStartX.current = e.changedTouches[0].clientX; };
  const onTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0
        ? setActivePage((p) => Math.min(p + 1, TOTAL_PAGES - 1))
        : setActivePage((p) => Math.max(p - 1, 0));
    }
  };

  const openPage = (index) => {
    setActivePage(index);
    setZoomed(false);
    setLightboxOpen(true);
  };

  return (
    <section id="catalog-gallery" className="section-padding" style={{ background: '#FAFBFA' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow-tag" style={{ justifyContent: 'center' }}>
            OFFICIAL PRODUCT CATALOGUE 2024
          </div>
          <h2 className="section-title" style={{ color: 'var(--color-primary-dark)', fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Browse Our Complete Collection
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
            All {TOTAL_PAGES} pages of the LK Furniture World1 product catalogue — click any page for full 4K preview.
          </p>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/918884487020?text=Hi%20LK%20Furniture%20World1%2C%20I%20saw%20your%202024%20catalogue%20and%20would%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ display: 'inline-flex' }}
          >
            <MessageCircle size={18} /> Order from Catalogue
          </a>
        </div>

        {/* Masonry-style Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.25rem',
        }}>
          {PAGES.map((page, index) => (
            <button
              key={page.id}
              onClick={() => openPage(index)}
              aria-label={`Open catalog page ${page.id}`}
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(24,59,53,0.08)',
                borderRadius: '18px',
                overflow: 'hidden',
                padding: 0,
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(24,59,53,0.06)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                WebkitTapHighlightColor: 'transparent',
              }}
              className="catalog-card-hover"
            >
              {/* Page Thumbnail */}
              <div style={{ position: 'relative', overflow: 'hidden', flex: 1 }}>
                <img
                  src={page.src}
                  alt={`LK Furniture World1 Catalogue 2024 - Page ${page.id}`}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    aspectRatio: '2382 / 3368',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  className="catalog-img-zoom"
                />
                {/* Hover overlay */}
                <div className="catalog-overlay">
                  <div style={{
                    background: 'rgba(24,59,53,0.75)',
                    color: '#FFFFFF',
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(6px)',
                  }}>
                    <ZoomIn size={22} />
                  </div>
                </div>
              </div>

              {/* Label bar */}
              <div style={{
                padding: '0.65rem 0.9rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid rgba(24,59,53,0.06)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: 'var(--color-primary-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}>
                  <BookOpen size={14} color="var(--color-gold)" />
                  Page {page.id} / {TOTAL_PAGES}
                </div>
                <div style={{
                  fontSize: '0.68rem',
                  fontWeight: '700',
                  color: 'var(--color-gold)',
                  background: 'var(--color-gold-light)',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '999px',
                  letterSpacing: '0.05em',
                }}>
                  4K
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* ─────────── LIGHTBOX ─────────── */}
      {lightboxOpen && (
        <div
          ref={lightboxRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(10, 24, 22, 0.96)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Top bar */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'linear-gradient(180deg, rgba(10,24,22,0.9) 0%, transparent 100%)',
            zIndex: 10,
          }}>
            {/* Title with logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <img
                src="/images/lk_logo.png"
                alt="LK Furniture World1"
                style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'drop-shadow(0 0 6px rgba(197,160,117,0.6))', flexShrink: 0 }}
              />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)', color: '#FFFFFF' }}>
                  LK Furniture World1 — 2024 Catalogue
                </div>
                <div style={{ fontSize: '0.75rem', color: '#C5A075', fontWeight: '600' }}>
                  Page {activePage + 1} of {TOTAL_PAGES} &nbsp;·&nbsp; 4K Quality
                </div>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              {/* Zoom toggle */}
              <button
                onClick={() => setZoomed(!zoomed)}
                title={zoomed ? 'Fit to screen' : 'Zoom in'}
                style={{
                  background: zoomed ? '#C5A075' : 'rgba(255,255,255,0.12)',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '0.55rem 0.85rem',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <ZoomIn size={16} /> {zoomed ? 'Fit' : 'Zoom'}
              </button>

              {/* Download current page */}
              <a
                href={PAGES[activePage].src}
                download={`LK_Catalogue_Page_${activePage + 1}.jpg`}
                title="Download this page"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '0.55rem 0.85rem',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  textDecoration: 'none',
                }}
              >
                <Download size={16} /> Save
              </a>

              {/* Close */}
              <button
                onClick={() => { setLightboxOpen(false); setZoomed(false); }}
                aria-label="Close lightbox"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '38px',
                  height: '38px',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Page Image */}
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: zoomed ? 'auto' : 'hidden',
            padding: '5rem 1rem 4.5rem',
            boxSizing: 'border-box',
          }}>
            <img
              key={activePage}
              src={PAGES[activePage].src}
              alt={`LK Furniture World1 Catalogue Page ${activePage + 1}`}
              style={{
                maxWidth: zoomed ? 'none' : '100%',
                maxHeight: zoomed ? 'none' : '100%',
                width: zoomed ? 'auto' : 'auto',
                height: zoomed ? 'auto' : '100%',
                objectFit: 'contain',
                borderRadius: zoomed ? '0' : '12px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                display: 'block',
                transition: 'box-shadow 0.3s ease',
                cursor: zoomed ? 'zoom-out' : 'zoom-in',
              }}
              onClick={() => setZoomed(!zoomed)}
            />
          </div>

          {/* Prev / Next Buttons */}
          <button
            onClick={() => { setZoomed(false); setActivePage((p) => Math.max(p - 1, 0)); }}
            disabled={activePage === 0}
            aria-label="Previous page"
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: activePage === 0 ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              color: activePage === 0 ? 'rgba(255,255,255,0.25)' : '#FFFFFF',
              cursor: activePage === 0 ? 'default' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              backdropFilter: 'blur(6px)',
              transition: 'background 0.2s ease',
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => { setZoomed(false); setActivePage((p) => Math.min(p + 1, TOTAL_PAGES - 1)); }}
            disabled={activePage === TOTAL_PAGES - 1}
            aria-label="Next page"
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: activePage === TOTAL_PAGES - 1 ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              color: activePage === TOTAL_PAGES - 1 ? 'rgba(255,255,255,0.25)' : '#FFFFFF',
              cursor: activePage === TOTAL_PAGES - 1 ? 'default' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              backdropFilter: 'blur(6px)',
              transition: 'background 0.2s ease',
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Bottom thumbnail strip */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '0.75rem 1rem',
            background: 'linear-gradient(0deg, rgba(10,24,22,0.95) 0%, transparent 100%)',
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            zIndex: 10,
            justifyContent: 'center',
          }}>
            {PAGES.map((p, i) => (
              <button
                key={p.id}
                onClick={() => { setZoomed(false); setActivePage(i); }}
                aria-label={`Jump to page ${p.id}`}
                style={{
                  flexShrink: 0,
                  width: i === activePage ? '44px' : '36px',
                  height: i === activePage ? '58px' : '48px',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  border: i === activePage ? '2.5px solid #C5A075' : '1.5px solid rgba(255,255,255,0.15)',
                  cursor: 'pointer',
                  padding: 0,
                  background: 'none',
                  transition: 'all 0.25s ease',
                  opacity: i === activePage ? 1 : 0.55,
                  boxShadow: i === activePage ? '0 0 12px rgba(197,160,117,0.5)' : 'none',
                }}
              >
                <img
                  src={p.src}
                  alt={`Page ${p.id}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </button>
            ))}
          </div>

        </div>
      )}

      <style>{`
        .catalog-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 36px rgba(24,59,53,0.13) !important;
        }
        .catalog-card-hover:hover .catalog-img-zoom {
          transform: scale(1.04);
        }
        .catalog-card-hover:hover .catalog-overlay {
          opacity: 1;
        }
        .catalog-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(24,59,53,0.18);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        @media (max-width: 600px) {
          #catalog-gallery [style*='minmax(260px'] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

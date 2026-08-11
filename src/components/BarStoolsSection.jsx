import React, { useState } from 'react';
import { Wine, Coffee, MessageCircle, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

const BAR_STOOLS = [
  { id: 1, title: 'LK Woven Cane Bar Stool 01', image: '/images/barstool1.jpeg', tag: 'Woven Cane & Metal', price: '₹2,799' },
  { id: 2, title: 'LK Ergonomic High Stool 02', image: '/images/barstool2.jpeg', tag: 'Contoured Cushion', price: '₹2,999' },
  { id: 3, title: 'LK Luxury Velvet Bar Stool 03', image: '/images/barstool3.jpeg', tag: 'Gold Accent Frame', price: '₹3,499' },
  { id: 4, title: 'LK Modern Minimalist Stool 04', image: '/images/barstool4.jpeg', tag: 'Powder-Coated Steel', price: '₹2,499' },
  { id: 5, title: 'LK Executive Swivel Bar Stool 05', image: '/images/barstool5.jpeg', tag: 'Pneumatic Lift', price: '₹3,899' },
  { id: 6, title: 'LK Classic Hardwood Cafe Stool 06', image: '/images/barstool6.jpeg', tag: 'Solid Wood Finish', price: '₹3,199' },
  { id: 7, title: 'LK High-Back Dining Bar Stool 07', image: '/images/barstool7.jpeg', tag: 'Full Back Support', price: '₹3,699' },
  { id: 8, title: 'LK Minimalist Cafe Counter Stool 08', image: '/images/barstool8.jpeg', tag: 'Compact Design', price: '₹2,299' },
];

const BAR_TABLES = [
  { id: 1, title: 'LK High-Counter Bar Table 01', image: '/images/bartable1.jpeg', tag: 'Solid Wood Top & Steel', price: '₹6,499' },
  { id: 2, title: 'LK Round Cafe Standing Table 02', image: '/images/bartable2.jpeg', tag: 'Compact Round Design', price: '₹5,299' },
  { id: 3, title: 'LK Commercial Pub Bar Table 03', image: '/images/bartable3.jpeg', tag: 'Heavy Duty Metal Frame', price: '₹7,899' },
  { id: 4, title: 'LK Minimalist High Dining Table 04', image: '/images/bartable4.jpeg', tag: 'Sleek Modern Profile', price: '₹5,999' },
  { id: 5, title: 'LK Executive Lounge Bar Table 05', image: '/images/bartable5.jpeg', tag: 'Premium Hardwood Finish', price: '₹8,499' },
];

export default function BarStoolsSection({ onOpenQuoteModal }) {
  return (
    <section id="barstools" className="section-padding" style={{ background: '#FAF8F5', borderTop: '1px solid rgba(24, 59, 53, 0.08)' }}>
      <div className="container">
        
        {/* Section Main Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow-tag" style={{ justifyContent: 'center' }}>
            <Wine size={16} color="var(--color-gold)" style={{ verticalAlign: 'middle', marginRight: '6px' }} />
            BAR STOOLS & CAFE COLLECTION
          </div>
          
          <h2 className="section-title" style={{ color: 'var(--color-primary-dark)', fontSize: 'clamp(2.2rem, 4vw, 3.25rem)' }}>
            Bar Stools & Table Showcase
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Hand-crafted seating and high-counter tables for cafes, bars, luxury home lounges, and executive hubs in Bengaluru.
          </p>
        </div>

        {/* ==================== SUBSECTION 1: BAR STOOLS ==================== */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
            borderBottom: '2px solid var(--color-gold)',
            paddingBottom: '0.75rem',
            maxWidth: '320px'
          }}>
            <Wine size={22} color="var(--color-gold)" />
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              fontWeight: '800',
              color: 'var(--color-primary-dark)',
              letterSpacing: '0.05em'
            }}>
              BAR STOOLS
            </h3>
          </div>

          {/* 3 Cards Each Row Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}>
            {BAR_STOOLS.map(stool => (
              <div 
                key={stool.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 6px 20px rgba(24, 59, 53, 0.06)',
                  border: '1px solid rgba(24, 59, 53, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                className="product-card-hover"
              >
                <div>
                  {/* Card Image */}
                  <div style={{ position: 'relative', overflow: 'hidden', height: '260px', background: '#F5F7F6' }}>
                    <img 
                      src={stool.image} 
                      alt={stool.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease'
                      }}
                      className="card-img-zoom"
                    />
                    <span style={{
                      position: 'absolute',
                      top: '0.85rem',
                      left: '0.85rem',
                      background: 'rgba(24, 36, 33, 0.85)',
                      color: '#C5A075',
                      fontSize: '0.72rem',
                      fontWeight: '700',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '999px',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(197, 160, 117, 0.3)'
                    }}>
                      {stool.tag}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '1.25rem 1.25rem 0.5rem' }}>
                    <h4 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      color: 'var(--color-primary-dark)',
                      marginBottom: '0.4rem'
                    }}>
                      {stool.title}
                    </h4>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '0.85rem' }}>
                      Custom dimensions, seat cushion & leg finishes available.
                    </div>
                  </div>
                </div>

                {/* Card Footer Row */}
                <div style={{
                  padding: '1rem 1.25rem',
                  borderTop: '1px solid #EFF2F1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: '700' }}>Factory Estimate</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
                      Starting {stool.price}
                    </div>
                  </div>

                  <a 
                    href={`https://wa.me/918884487020?text=Hi%20LK%20Furniture%20World1%2C%20I%20am%20interested%20in%3A%20${encodeURIComponent(stool.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'var(--color-whatsapp)',
                      color: '#FFFFFF',
                      padding: '0.55rem 0.95rem',
                      borderRadius: '999px',
                      fontSize: '0.78rem',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      textDecoration: 'none'
                    }}
                    className="whatsapp-btn-hover"
                  >
                    <MessageCircle size={15} /> Inquire
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ==================== SUBSECTION 2: BAR TABLES ==================== */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
            borderBottom: '2px solid var(--color-gold)',
            paddingBottom: '0.75rem',
            maxWidth: '320px'
          }}>
            <Coffee size={22} color="var(--color-gold)" />
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              fontWeight: '800',
              color: 'var(--color-primary-dark)',
              letterSpacing: '0.05em'
            }}>
              BAR TABLES
            </h3>
          </div>

          {/* 3 Cards Each Row Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}>
            {BAR_TABLES.map(table => (
              <div 
                key={table.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 6px 20px rgba(24, 59, 53, 0.06)',
                  border: '1px solid rgba(24, 59, 53, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                className="product-card-hover"
              >
                <div>
                  {/* Card Image */}
                  <div style={{ position: 'relative', overflow: 'hidden', height: '260px', background: '#F5F7F6' }}>
                    <img 
                      src={table.image} 
                      alt={table.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease'
                      }}
                      className="card-img-zoom"
                    />
                    <span style={{
                      position: 'absolute',
                      top: '0.85rem',
                      left: '0.85rem',
                      background: 'rgba(24, 36, 33, 0.85)',
                      color: '#C5A075',
                      fontSize: '0.72rem',
                      fontWeight: '700',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '999px',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(197, 160, 117, 0.3)'
                    }}>
                      {table.tag}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '1.25rem 1.25rem 0.5rem' }}>
                    <h4 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      color: 'var(--color-primary-dark)',
                      marginBottom: '0.4rem'
                    }}>
                      {table.title}
                    </h4>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '0.85rem' }}>
                      Bespoke tabletop sizes, wood grains, and powder-coated steel bases.
                    </div>
                  </div>
                </div>

                {/* Card Footer Row */}
                <div style={{
                  padding: '1rem 1.25rem',
                  borderTop: '1px solid #EFF2F1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: '700' }}>Factory Estimate</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
                      Starting {table.price}
                    </div>
                  </div>

                  <a 
                    href={`https://wa.me/918884487020?text=Hi%20LK%20Furniture%20World1%2C%20I%20am%20interested%20in%3A%20${encodeURIComponent(table.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'var(--color-whatsapp)',
                      color: '#FFFFFF',
                      padding: '0.55rem 0.95rem',
                      borderRadius: '999px',
                      fontSize: '0.78rem',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      textDecoration: 'none'
                    }}
                    className="whatsapp-btn-hover"
                  >
                    <MessageCircle size={15} /> Inquire
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ==================== AT LAST: VIEW ENTIRE CATALOGUE BUTTON ==================== */}
        <div style={{ textAlign: 'center', paddingTop: '1.5rem' }}>
          <a
            href="/lk_catalogue.pdf"
            target="_blank"
            rel="noopener noreferrer"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              fontWeight: '800',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              boxShadow: '0 8px 24px rgba(197, 160, 117, 0.4)',
              textDecoration: 'none'
            }}
          >
            <BookOpen size={20} /> VIEW ENTIRE CATALOGUE <ArrowRight size={18} />
          </a>
        </div>

      </div>

      <style>{`
        .product-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(24, 59, 53, 0.12) !important;
        }
        .product-card-hover:hover .card-img-zoom {
          transform: scale(1.05);
        }
        .whatsapp-btn-hover:hover {
          background-color: var(--color-whatsapp-hover) !important;
        }
      `}</style>
    </section>
  );
}

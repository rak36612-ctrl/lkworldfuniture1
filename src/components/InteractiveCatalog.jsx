import React, { useState } from 'react';
import { MessageCircle, Eye, ArrowUpRight, Check, Filter } from 'lucide-react';

const CATALOG_ITEMS = [
  {
    id: 1,
    category: 'office',
    title: 'Ergonomic Command Center Executive Chair',
    image: '/images/hero_chairs.jpg',
    specs: 'Multi-dimensional lumbar support, synchronized tilt, 360 rotation, high-density cushion.',
    price: '₹4,999 - ₹12,500',
    tag: 'Best Seller'
  },
  {
    id: 2,
    category: 'office',
    title: 'Boardroom Leatherette High-Back Chair',
    image: '/images/boardroom_chair.jpg',
    specs: 'Premium stitched leatherette, chrome armrests, pneumatic height control.',
    price: '₹6,499 - ₹14,999',
    tag: 'Executive Choice'
  },
  {
    id: 3,
    category: 'workstation',
    title: 'Collaborative Open-Plan Workstation Table',
    image: '/images/collaborative_desk.jpg',
    specs: 'Pre-laminated engineered wood top, cable management wireway, powder-coated legs.',
    price: '₹8,999 - ₹24,999',
    tag: 'Corporate Spec'
  },
  {
    id: 4,
    category: 'workstation',
    title: 'Custom Modular Office Workstation System',
    image: '/images/custom_workstation.jpg',
    specs: 'Privacy screen dividers, drawer pedestals, custom size dimensions available.',
    price: '₹11,500 - ₹35,000',
    tag: 'Customizable'
  },
  {
    id: 5,
    category: 'school',
    title: 'Heavy Duty 4-Seater Classroom Desk & Bench',
    image: '/images/school_desks.jpg',
    specs: 'Heavy-gauge steel frame, durable laminated wooden top, book shelf racks.',
    price: '₹4,499 - ₹9,999',
    tag: 'Institutional'
  },
  {
    id: 6,
    category: 'barstool',
    title: 'Woven Cane & Metal Cafe Bar Stool',
    image: '/images/woven_barstool.jpg',
    specs: 'Handwoven natural cane back, solid wood accent, sleek metal frame legs.',
    price: '₹2,799 - ₹6,500',
    tag: 'Trending Design'
  },
  {
    id: 7,
    category: 'lounge',
    title: 'Luxury Reception & Lounge Couch Set',
    image: '/images/ergonomic_lumbar.webp',
    specs: 'Deep memory foam cushioning, stain-resistant fabric upholstery, solid wood legs.',
    price: '₹14,999 - ₹42,000',
    tag: 'Luxury Comfort'
  },
  {
    id: 8,
    category: 'bunkbed',
    title: 'Custom Heavy Duty Commercial Bunk Bed',
    image: '/images/custom_workstation.jpg',
    specs: 'Reinforced tubular steel frame, safety guardrails, built-in ladder, hostel grade.',
    price: '₹7,999 - ₹18,500',
    tag: 'Heavy Duty'
  },
  {
    id: 9,
    category: 'waiting',
    title: '3-Seater Stainless Steel Airport & Waiting Chair',
    image: '/images/hero_chairs.jpg',
    specs: 'Perforated stainless steel seats, chrome armrests & beam support, anti-rust coating.',
    price: '₹5,999 - ₹12,999',
    tag: 'High Traffic'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'office', label: 'Office & Executive Chairs' },
  { id: 'workstation', label: 'Workstations' },
  { id: 'school', label: 'School Desks' },
  { id: 'barstool', label: 'Bar Stools & Cafe' },
  { id: 'lounge', label: 'Lounge Sets' },
  { id: 'bunkbed', label: 'Bunk Beds' },
  { id: 'waiting', label: 'Waiting Chairs' }
];

export default function InteractiveCatalog({ onOpenQuoteModal }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === 'all' 
    ? CATALOG_ITEMS 
    : CATALOG_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="collection" className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow-tag" style={{ justifyContent: 'center' }}>
            PRODUCT CATALOGUE
          </div>
          
          <h2 className="section-title" style={{ color: 'var(--color-primary-dark)', fontSize: 'clamp(2.2rem, 4vw, 3.25rem)' }}>
            Explore Our Custom Collections
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Handcrafted commercial & residential furniture built to exact specifications at our Mysore Road factory in Bengaluru.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '3rem'
        }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.75rem 1.4rem',
                borderRadius: '999px',
                fontWeight: '600',
                fontSize: '0.88rem',
                transition: 'all var(--transition-fast)',
                background: activeCategory === cat.id ? 'var(--color-primary)' : 'var(--color-bg-light)',
                color: activeCategory === cat.id ? '#FFFFFF' : 'var(--color-primary-dark)',
                border: activeCategory === cat.id ? '1px solid var(--color-primary)' : '1px solid rgba(24, 59, 53, 0.08)',
                cursor: 'pointer'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className="card-container"
              style={{
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '24px'
              }}
            >
              <div>
                {/* Image Wrap */}
                <div style={{ position: 'relative', borderRadius: '18px', overflow: 'hidden', marginBottom: '1.25rem' }}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '240px',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease'
                    }}
                    className="catalog-img-scale"
                  />
                  <span style={{
                    position: 'absolute',
                    top: '0.85rem',
                    left: '0.85rem',
                    background: 'var(--color-gold)',
                    color: '#FFFFFF',
                    fontSize: '0.72rem',
                    fontWeight: '700',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '999px',
                    letterSpacing: '0.05em'
                  }}>
                    {item.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                  {item.specs}
                </p>
              </div>

              {/* Price & Action Row */}
              <div style={{
                paddingTop: '1rem',
                borderTop: '1px solid #EFF2F1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: '700' }}>Factory Estimate</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
                    {item.price}
                  </div>
                </div>

                <a 
                  href={`https://wa.me/918884487020?text=Hi%20LK%20Furniture%20World1%2C%20I%20am%20interested%20in%3A%20${encodeURIComponent(item.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'var(--color-whatsapp)',
                    color: '#FFFFFF',
                    padding: '0.65rem 1rem',
                    borderRadius: '999px',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.2s ease'
                  }}
                  className="whatsapp-btn-hover"
                >
                  <MessageCircle size={16} /> Inquire
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .catalog-img-scale:hover {
          transform: scale(1.05);
        }
        .whatsapp-btn-hover:hover {
          background-color: var(--color-whatsapp-hover);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}

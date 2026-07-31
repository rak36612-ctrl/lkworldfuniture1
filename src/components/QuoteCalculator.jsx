import React, { useState } from 'react';
import { Calculator, MessageCircle, Check, ArrowRight, Shield } from 'lucide-react';

const ITEM_BASE_PRICES = {
  office: { name: 'Ergonomic Office Chair', base: 4999 },
  workstation: { name: 'Modular Workstation Desk', base: 8999 },
  school: { name: '4-Seater School Desk & Bench', base: 4499 },
  lounge: { name: 'Lounge Couch / Reception Set', base: 14999 },
  barstool: { name: 'Woven Cane Bar Stool', base: 2799 },
  bunkbed: { name: 'Heavy Duty Steel Bunk Bed', base: 7999 },
  waiting: { name: '3-Seater Stainless Steel Waiting Chair', base: 5999 }
};

const MATERIALS = [
  { id: 'mesh', name: 'High-Tensile Breathable Mesh', extra: 500 },
  { id: 'leatherette', name: 'Premium Stitched Leatherette', extra: 1200 },
  { id: 'cane', name: 'Handwoven Natural Cane + Wood', extra: 1500 },
  { id: 'steel', name: 'Heavy-Gauge Steel Powder Coated', extra: 0 }
];

export default function QuoteCalculator() {
  const [category, setCategory] = useState('office');
  const [quantity, setQuantity] = useState(10);
  const [material, setMaterial] = useState('mesh');
  const [hasLumbar, setHasLumbar] = useState(true);
  const [hasChromeBase, setHasChromeBase] = useState(true);

  const itemInfo = ITEM_BASE_PRICES[category];
  const matInfo = MATERIALS.find(m => m.id === material) || MATERIALS[0];

  const unitBase = itemInfo.base + matInfo.extra + (hasLumbar ? 400 : 0) + (hasChromeBase ? 600 : 0);
  
  // Bulk discount
  let discountPct = 0;
  if (quantity >= 50) discountPct = 0.15;
  else if (quantity >= 20) discountPct = 0.10;
  else if (quantity >= 10) discountPct = 0.05;

  const unitPrice = Math.round(unitBase * (1 - discountPct));
  const totalPrice = unitPrice * quantity;

  const whatsappMessage = `Hi LK Furniture World1! I generated a custom estimate on your website:
- Item: ${itemInfo.name}
- Quantity: ${quantity} units
- Material: ${matInfo.name}
- Options: ${hasLumbar ? 'Lumbar Support Included' : ''} ${hasChromeBase ? '| Heavy Base Included' : ''}
- Approx Estimated Total: ₹${totalPrice.toLocaleString('en-IN')}

Please share your best factory quote and catalog details.`;

  return (
    <section id="solutions" className="section-padding" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F7F6 100%)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow-tag" style={{ justifyContent: 'center' }}>
            INSTANT ESTIMATOR
          </div>
          
          <h2 className="section-title" style={{ color: 'var(--color-primary-dark)', fontSize: 'clamp(2.2rem, 4vw, 3.25rem)' }}>
            Custom Furniture Quote Calculator
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Configure your commercial or residential specs and receive direct factory pricing instantly.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          background: '#FFFFFF',
          borderRadius: '32px',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid rgba(24, 59, 53, 0.08)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          
          {/* Controls Column */}
          <div>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calculator size={22} color="var(--color-gold)" /> Select Specifications
            </h3>

            {/* Product Category Selector */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                FURNITURE CATEGORY
              </label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  border: '1.5px solid #DCE3E1',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: 'var(--color-primary-dark)',
                  backgroundColor: 'var(--color-bg-light)',
                  outline: 'none'
                }}
              >
                {Object.keys(ITEM_BASE_PRICES).map(key => (
                  <option key={key} value={key}>{ITEM_BASE_PRICES[key].name}</option>
                ))}
              </select>
            </div>

            {/* Material Finish */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                MATERIAL & UPHOLSTERY
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                {MATERIALS.map(m => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMaterial(m.id)}
                    style={{
                      padding: '0.65rem 0.85rem',
                      borderRadius: '10px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      textAlign: 'left',
                      border: material === m.id ? '2px solid var(--color-primary)' : '1px solid #E2E8E6',
                      background: material === m.id ? 'var(--color-primary-subtle)' : '#FFFFFF',
                      color: material === m.id ? 'var(--color-primary-dark)' : 'var(--color-text-muted)'
                    }}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Slider */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-text-muted)' }}>
                  ORDER QUANTITY (UNITS)
                </label>
                <span style={{ fontWeight: '800', color: 'var(--color-primary)', fontSize: '1rem' }}>
                  {quantity} units {discountPct > 0 && <span style={{ fontSize: '0.75rem', color: 'var(--color-gold)' }}>({discountPct*100}% Bulk Saver)</span>}
                </span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="150" 
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-primary)' }}
              />
            </div>

            {/* Custom Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', fontWeight: '600', color: 'var(--color-primary-dark)', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={hasLumbar} 
                  onChange={(e) => setHasLumbar(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: 'var(--color-gold)' }}
                />
                Include Ergonomic Lumbar Support (+₹400)
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', fontWeight: '600', color: 'var(--color-primary-dark)', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={hasChromeBase} 
                  onChange={(e) => setHasChromeBase(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: 'var(--color-gold)' }}
                />
                Heavy-Duty Chrome / Aluminum Reinforced Base (+₹600)
              </label>
            </div>

          </div>

          {/* Results Column */}
          <div style={{
            background: 'var(--color-primary-dark)',
            color: '#FFFFFF',
            borderRadius: '24px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 12px 30px rgba(16, 40, 36, 0.25)'
          }}>
            <div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold)', marginBottom: '0.5rem', fontWeight: '700' }}>
                ESTIMATED SUMMARY
              </div>
              <h4 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                {itemInfo.name} ({quantity} Units)
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', fontSize: '0.9rem', color: '#A0B4B0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Est. Unit Price:</span>
                  <strong style={{ color: '#FFFFFF' }}>₹{unitPrice.toLocaleString('en-IN')} / unit</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Bulk Discount:</span>
                  <strong style={{ color: 'var(--color-gold)' }}>{discountPct * 100}% OFF</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Factory Location:</span>
                  <strong style={{ color: '#FFFFFF' }}>Mysore Rd, Bengaluru</strong>
                </div>
              </div>
            </div>

            <div>
              <div style={{ padding: '1rem 0', borderTop: '1px solid rgba(255,255,255,0.15)', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#A0B4B0', textTransform: 'uppercase', fontWeight: '600' }}>
                  Estimated Total Investment
                </div>
                <div style={{ fontSize: '2.2rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--color-gold)' }}>
                  ₹{totalPrice.toLocaleString('en-IN')}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#809B96' }}>*Excludes GST & transportation</div>
              </div>

              <a 
                href={`https://wa.me/918884487020?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}
              >
                <MessageCircle size={18} /> SEND SPEC TO WHATSAPP
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

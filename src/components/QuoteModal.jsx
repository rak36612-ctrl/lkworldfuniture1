import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Ergonomic Office Chairs',
    quantity: '10-25 units',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi LK Furniture World1! I am requesting a formal quote:
Name: ${formData.name}
Phone: ${formData.phone}
Category: ${formData.category}
Quantity: ${formData.quantity}
Notes: ${formData.notes || 'N/A'}`;

    window.open(`https://wa.me/918884487020?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      background: 'rgba(16, 40, 36, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div style={{
        background: '#FFFFFF',
        borderRadius: '28px',
        padding: '2.5rem',
        maxWidth: '520px',
        width: '100%',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
        animation: 'fadeInUp 0.3s ease'
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'var(--color-bg-light)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-primary-dark)',
            cursor: 'pointer'
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="eyebrow-tag">DIRECT FACTORY QUOTE</div>
        <h3 style={{ fontSize: '1.6rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
          Request Custom Pricing
        </h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
          Get immediate bulk pricing and catalog specs for your commercial or residential project.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-primary-dark)', marginBottom: '0.35rem' }}>
              FULL NAME *
            </label>
            <input 
              type="text" 
              required
              placeholder="e.g. Anand Sharma"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '12px',
                border: '1.5px solid #DCE3E1',
                fontFamily: 'var(--font-body)',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-primary-dark)', marginBottom: '0.35rem' }}>
              PHONE / WHATSAPP NUMBER *
            </label>
            <input 
              type="tel" 
              required
              placeholder="+91 88844 87020"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '12px',
                border: '1.5px solid #DCE3E1',
                fontFamily: 'var(--font-body)',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-primary-dark)', marginBottom: '0.35rem' }}>
              FURNITURE CATEGORY
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '12px',
                border: '1.5px solid #DCE3E1',
                fontFamily: 'var(--font-body)',
                backgroundColor: '#FFFFFF',
                outline: 'none'
              }}
            >
              <option value="Ergonomic Office Chairs">Ergonomic Office Chairs</option>
              <option value="Modular Workstations">Modular Workstations</option>
              <option value="School Desks & Benches">School Desks & Benches</option>
              <option value="Lounge Sets & Couches">Lounge Sets & Couches</option>
              <option value="Bar Stools & Cafe Seating">Bar Stools & Cafe Seating</option>
              <option value="Custom Heavy Duty Bunk Beds">Custom Heavy Duty Bunk Beds</option>
              <option value="Waiting Room Chairs">Waiting Room Chairs</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-primary-dark)', marginBottom: '0.35rem' }}>
              ESTIMATED QUANTITY
            </label>
            <select
              value={formData.quantity}
              onChange={(e) => setFormData({...formData, quantity: e.target.value})}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '12px',
                border: '1.5px solid #DCE3E1',
                fontFamily: 'var(--font-body)',
                backgroundColor: '#FFFFFF',
                outline: 'none'
              }}
            >
              <option value="1-5 units (Single / Home)">1-5 units (Single / Home)</option>
              <option value="6-20 units (Small Office)">6-20 units (Small Office)</option>
              <option value="21-50 units (Mid-size Hub)">21-50 units (Mid-size Hub)</option>
              <option value="50+ units (Commercial / School Bulk)">50+ units (Commercial / School Bulk)</option>
            </select>
          </div>

          <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
            <MessageCircle size={18} /> SUBMIT TO WHATSAPP
          </button>
        </form>
      </div>
    </div>
  );
}

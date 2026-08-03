import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export default function ContactAndLocation() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: 'office',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);

    // Build WhatsApp quick link
    const text = `Inquiry from Website:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Type: ${formData.requirement}
Message: ${formData.message}`;

    window.open(`https://wa.me/918884487020?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" style={{ background: '#FFFFFF', paddingTop: '3rem', paddingBottom: '1.5rem' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow-tag" style={{ justifyContent: 'center' }}>
            VISIT OUR BENGALURU SHOWROOM
          </div>
          
          <h2 className="section-title" style={{ color: 'var(--color-primary-dark)', fontSize: 'clamp(2.2rem, 4vw, 3.25rem)' }}>
            Get In Touch & Visit Us
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Visit our workshop and experience our chairs, desks, barstools, and custom lounge sets in person.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem'
        }}>
          
          {/* Left Column: Contact Cards & Info */}
          <div>
            <div style={{
              background: 'var(--color-primary-dark)',
              color: '#FFFFFF',
              borderRadius: '28px',
              padding: '2.25rem',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                LK Furniture World1
              </h3>

              {/* Address */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(197, 160, 117, 0.15)', padding: '0.6rem', borderRadius: '12px', color: 'var(--color-gold)', flexShrink: 0 }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: '700', letterSpacing: '0.1em' }}>
                    SHOWROOM & FACTORY ADDRESS
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#E2ECE9', lineHeight: 1.5, marginTop: '0.25rem' }}>
                    #1, 1st Main Road, Mysore Rd, opposite Beereshwara Temple, Bapuji Nagar, Bengaluru, Karnataka 560026
                  </div>
                </div>
              </div>

              {/* Phones */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(197, 160, 117, 0.15)', padding: '0.6rem', borderRadius: '12px', color: 'var(--color-gold)', flexShrink: 0 }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: '700', letterSpacing: '0.1em' }}>
                    CALL / WHATSAPP US
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginTop: '0.25rem' }}>
                    <a href="tel:+916362642688" style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '1rem' }}>
                      +91 63626 42688
                    </a>
                    <a href="tel:+918884487020" style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '1rem' }}>
                      +91 88844 87020
                    </a>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(197, 160, 117, 0.15)', padding: '0.6rem', borderRadius: '12px', color: 'var(--color-gold)', flexShrink: 0 }}>
                  <Instagram size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: '700', letterSpacing: '0.1em' }}>
                    INSTAGRAM PROFILE
                  </div>
                  <a 
                    href="https://www.instagram.com/lkfurnitureworld1/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#E1306C', fontWeight: '700', fontSize: '0.95rem', display: 'inline-block', marginTop: '0.25rem' }}
                  >
                    @lkfurnitureworld1
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(197, 160, 117, 0.15)', padding: '0.6rem', borderRadius: '12px', color: 'var(--color-gold)', flexShrink: 0 }}>
                  <Clock size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: '700', letterSpacing: '0.1em' }}>
                    WORKING HOURS
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#E2ECE9', marginTop: '0.25rem' }}>
                    Monday - Sunday: 9:30 AM - 9:00 PM
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Map Frame */}
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
              height: '240px',
              border: '1px solid rgba(24, 59, 53, 0.1)'
            }}>
              <iframe 
                title="LK Furniture World1 Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3512863953556!2d77.5385!3d12.9558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzIwLjkiTiA3N8KwMzInMTguNiJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              />
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Web Form */}
          <div style={{
            background: 'var(--color-bg-light)',
            borderRadius: '28px',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid rgba(24, 59, 53, 0.06)'
          }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
              Send Direct Message
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              Fill in your details below to request catalog samples or custom pricing from our Mysore Road team.
            </p>

            {formSubmitted ? (
              <div style={{
                background: '#FFFFFF',
                padding: '2.5rem 1.5rem',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ background: 'var(--color-whatsapp)', color: '#FFFFFF', width: '56px', height: '56px', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>Inquiry Prepared!</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                  Your details have been redirected to our WhatsApp desk (+91 88844 87020). We will respond promptly.
                </p>
                <button onClick={() => setFormSubmitted(false)} className="btn-outline">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--color-primary-dark)', marginBottom: '0.4rem' }}>
                    YOUR FULL NAME *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1.5px solid #DCE3E1',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--color-primary-dark)', marginBottom: '0.4rem' }}>
                    PHONE NUMBER *
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1.5px solid #DCE3E1',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--color-primary-dark)', marginBottom: '0.4rem' }}>
                    PRIMARY FURNITURE REQUIREMENT
                  </label>
                  <select
                    value={formData.requirement}
                    onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1.5px solid #DCE3E1',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      backgroundColor: '#FFFFFF'
                    }}
                  >
                    <option value="Ergonomic Office Chairs">Ergonomic Office Chairs</option>
                    <option value="Modular Workstations">Modular Workstations</option>
                    <option value="School Desks & Benches">School Desks & Benches</option>
                    <option value="Lounge & Reception Sets">Lounge & Reception Sets</option>
                    <option value="Bar Stools & Cafe Furniture">Bar Stools & Cafe Furniture</option>
                    <option value="Custom Bunk Beds">Custom Bunk Beds</option>
                    <option value="Waiting Room Chairs">Waiting Room Chairs</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--color-primary-dark)', marginBottom: '0.4rem' }}>
                    MESSAGE / QUANTITY / CUSTOM NOTES
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your project or bulk quantity needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1.5px solid #DCE3E1',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  SEND INQUIRY VIA WHATSAPP <MessageCircle size={18} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

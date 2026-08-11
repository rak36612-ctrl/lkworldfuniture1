import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

const executiveChairsCollection = {
  title: 'EXECUTIVE CHAIRS',
  sections: [
    {
      title: 'EXECUTIVE SEATING',
      items: [
        { id: 'og_ec1', image: '/images/og-executivechair1.jpeg', tag: 'High-Back Executive Leather' },
        { id: 'og_ec2', image: '/images/og-executivechair2.jpeg', tag: 'Ergonomic Command Chair' },
        { id: 'og_ec3', image: '/images/og-executivechair3.jpeg', tag: 'Synchronized Tilt Mechanism' },
        { id: 'og_ec4', image: '/images/og-executivechair4.jpeg', tag: 'Chrome Base Swivel' },
        { id: 'og_ec5', image: '/images/og-executivechair5.jpeg', tag: 'High-Tensile Mesh Backrest' },
        { id: 'og_ec6', image: '/images/og-executivechair6.jpeg', tag: 'Padded Armrest Executive' },
        { id: 'og_ec7', image: '/images/og-executivechair7.jpeg', tag: 'Premium Leatherette High-Back' },
        { id: 'og_ec8', image: '/images/og-executivechair8.jpeg', tag: 'Contoured Lumbar Support' },
        { id: 'og_ec9', image: '/images/og-executivechair9.jpeg', tag: 'Executive Office Command' }
      ]
    }
  ]
};

const bossChairsCollection = {
  title: 'BOSS CHAIRS',
  sections: [
    {
      title: 'PREMIUM BOSS & COMMAND SEATING',
      items: [
        { id: 'bch1', image: '/images/BossChair1.jpeg', tag: 'Luxury Leatherette Boss Chair' },
        { id: 'bch2', image: '/images/BossChair2.jpeg', tag: 'High-Back Command Boss Chair' },
        { id: 'bch3', image: '/images/BossChair3.jpeg', tag: 'Ergonomic Recline Boss Chair' },
        { id: 'bch4', image: '/images/BossChair4.jpeg', tag: 'Chrome Base Swivel Boss' },
        { id: 'bch5', image: '/images/BossChair5.jpeg', tag: 'Padded Cushion Boss Seat' },
        { id: 'bch6', image: '/images/BossChair6.jpeg', tag: 'Executive Office Boss Chair' },
        { id: 'bch7', image: '/images/BossChair7.jpeg', tag: 'High-Tensile Mesh Boss' },
        { id: 'bch8', image: '/images/BossChair8.jpeg', tag: 'Synchronized Tilt Boss' },
        { id: 'bch9', image: '/images/BossChair9.jpeg', tag: 'Premium Leather Boss Armchair' },
        { id: 'bch10', image: '/images/BossChair10.jpeg', tag: 'Minimalist Command Boss Chair' },
        { id: 'bch12', image: '/images/bosschair12.jpeg', tag: 'Ergonomic Executive Boss' },
        { id: 'bch13', image: '/images/bosschair13.jpeg', tag: 'Ultra-Comfort Boss Swivel' },
        { id: 'bch14', image: '/images/bosschair14.jpeg', tag: 'Solid Base Reclining Boss' },
        { id: 'bch15', image: '/images/bosschair15.jpeg', tag: 'Plush Leather Boss Seat' },
        { id: 'bch16', image: '/images/bosschair16.jpeg', tag: 'Contemporary Command Boss' },
        { id: 'bch17', image: '/images/bosschair17.jpeg', tag: 'Premium Custom Boss Chair' }
      ]
    }
  ]
};

const visitorChairsCollection = {
  title: 'VISITOR CHAIRS',
  sections: [
    {
      title: 'VISITOR & GUEST SEATING',
      items: [
        { id: 'vc1', image: '/images/visitingchair1.jpeg', tag: 'Sleek Cantilever Visitor Chair' },
        { id: 'vc2', image: '/images/visitingchair2.jpeg', tag: 'Padded Armrest Guest Chair' },
        { id: 'vc3', image: '/images/visitingchair3.jpeg', tag: 'Ergonomic Mesh Visitor Chair' },
        { id: 'vc4', image: '/images/visitingchair4.jpeg', tag: 'Leatherette Executive Guest Chair' },
        { id: 'vc5', image: '/images/visitingchair5.jpeg', tag: 'Heavy Duty Metal Frame Chair' },
        { id: 'vc6', image: '/images/visitingchair6.jpeg', tag: 'Compact Office Visitor Chair' },
        { id: 'vc7', image: '/images/visitingchair7.jpeg', tag: 'Premium Reception Guest Seating' }
      ]
    }
  ]
};

const waitingChairsCollection = {
  title: 'WAITING CHAIRS',
  sections: [
    {
      title: 'PUBLIC & LOBBY WAITING SEATING',
      items: [
        { id: 'wc_w1', image: '/images/waitingchair1.jpeg', tag: '3-Seater Steel Waiting Bench' },
        { id: 'wc_w2', image: '/images/waitingchair2.jpeg', tag: 'Padded Airport & Hospital Bench' },
        { id: 'wc_w3', image: '/images/waitingchair3.jpeg', tag: 'Perforated Metal Lobby Bench' },
        { id: 'wc_w4', image: '/images/waitingchair4.jpeg', tag: 'Commercial Reception Waiting Seat' },
        { id: 'wc_w5', image: '/images/waitingchair5.jpeg', tag: 'Heavy-Duty Institutional Bench' }
      ]
    }
  ]
};

const boardstationChairsCollection = {
  title: 'BOARDSTATION CHAIRS',
  sections: [
    {
      title: 'BOARDSTATION & BOARDROOM SEATING',
      items: [
        { id: 'bc1', image: '/images/BoardstationChair1.jpeg', tag: 'Leatherette High-Back' },
        { id: 'bc2', image: '/images/BoardstationChair2.jpeg', tag: 'Ergonomic Lumbar Command' },
        { id: 'bc3', image: '/images/BoardstationChair3.jpeg', tag: 'Synchronized Tilt Mechanism' },
        { id: 'bc4', image: '/images/BoardstationChair4.jpeg', tag: 'Chrome Base Swivel' },
        { id: 'bc5', image: '/images/BoardstationChair5.jpeg', tag: 'High-Tensile Mesh' },
        { id: 'bc6', image: '/images/BoardstationChair6.jpeg', tag: 'Padded Armrest Task Chair' },
        { id: 'bc7', image: '/images/BoardstationChair7.jpeg', tag: 'High-Back Conference Chair' },
        { id: 'bc8', image: '/images/BoardstationChair8.jpeg', tag: 'Minimalist Boardroom Chair' },
        { id: 'bc9', image: '/images/BoardstationChair9.jpeg', tag: 'Premium Executive Leather' },
        { id: 'bc10', image: '/images/BoardstationChair10.jpeg', tag: 'Ergonomic Task Seating' }
      ]
    }
  ]
};

const barstoolCollection = {
  title: 'BAR STOOLS',
  sections: [
    {
      title: 'BAR STOOLS',
      items: [
        { id: 'b3', image: '/images/barstool3.jpeg', tag: 'Gold Accent Frame Bar Stool' },
        { id: 'b4', image: '/images/barstool4.jpeg', tag: 'Powder-Coated Steel Stool' },
        { id: 'b5', image: '/images/barstool5.jpeg', tag: 'Pneumatic Swivel Bar Stool' },
        { id: 'b6', image: '/images/barstool6.jpeg', tag: 'Solid Wood Finish Stool' },
        { id: 'b7', image: '/images/barstool7.jpeg', tag: 'Full Back Support Bar Stool' },
        { id: 'b8', image: '/images/barstool8.jpeg', tag: 'Compact Counter Stool' },
        { id: 'b9', image: '/images/barstool9.jpeg', tag: 'Modern Ergonomic Bar Stool' },
        { id: 'b10', image: '/images/barstool10.jpeg', tag: 'Contemporary High-Counter Seat' },
        { id: 'b11', image: '/images/barstool11.jpeg', tag: 'Padded Upholstered Bar Stool' },
        { id: 'b12', image: '/images/barstool12.jpeg', tag: 'Industrial Metal Bar Stool' },
        { id: 'b13', image: '/images/barstool13.jpeg', tag: 'Swivel Gas-Lift Counter Seat' },
        { id: 'b14', image: '/images/barstool14.jpeg', tag: 'Executive High-Back Bar Stool' },
        { id: 'b15', image: '/images/barstool15.jpeg', tag: 'Minimalist Bistro Bar Stool' },
        { id: 'b16', image: '/images/barstool16.jpeg', tag: 'Soft Cushion Cafe Counter Seat' },
        { id: 'b17', image: '/images/barstool17.jpeg', tag: 'Heavy Duty Steel Base Stool' },
        { id: 'b18', image: '/images/barstool18.jpeg', tag: 'Premium Commercial Bar Stool' }
      ]
    },
    {
      title: 'BAR TABLES',
      items: [
        { id: 'bt1', image: '/images/bartable1.jpeg', tag: 'Solid Wood & Steel' },
        { id: 'bt2', image: '/images/bartable2.jpeg', tag: 'Compact Round' },
        { id: 'bt3', image: '/images/bartable3.jpeg', tag: 'Heavy Duty Metal' },
        { id: 'bt4', image: '/images/bartable4.jpeg', tag: 'Sleek Modern Profile' },
        { id: 'bt5', image: '/images/bartable5.jpeg', tag: 'Hardwood Finish' }
      ]
    }
  ]
};

const officeWorkstationCollection = {
  title: 'OFFICE / WORKSTATION CHAIRS',
  sections: [
    {
      title: 'ERGONOMIC OFFICE & WORKSTATION SEATING',
      items: [
        { id: 'ow1', image: '/images/workstationchair1.jpeg', tag: 'High-Tensile Ergonomic Mesh' },
        { id: 'ow2', image: '/images/workstationchair2.jpeg', tag: 'Adjustable Lumbar Workstation' },
        { id: 'ow3', image: '/images/workstationchair3.jpeg', tag: 'Synchronized Tilt Task Chair' },
        { id: 'ow4', image: '/images/workstationchair4.jpeg', tag: '3D Armrest Office Chair' },
        { id: 'ow5', image: '/images/workstationchair5.jpeg', tag: 'Breathable Backrest Chair' },
        { id: 'ow6', image: '/images/workstationchair6.jpeg', tag: 'Chrome Base Swivel Task' },
        { id: 'ow7', image: '/images/workstationchair7.jpeg', tag: 'Computer & Office Seating' },
        { id: 'ow8', image: '/images/workstationchair8.jpeg', tag: 'Executive Workstation Chair' }
      ]
    }
  ]
};

const loungeCollection = {
  title: 'LOUNGE CHAIRS',
  sections: [
    {
      title: 'LUXURY LOUNGE & RECEPTION CHAIRS',
      items: [
        { id: 'lc1', image: '/images/loungechair1.jpeg', tag: 'Accent Lounge Chair' },
        { id: 'lc2', image: '/images/loungechair2.jpeg', tag: 'Soft Velvet Reception Chair' },
        { id: 'lc3', image: '/images/loungechair3.jpeg', tag: 'High-Back Luxury Armchair' },
        { id: 'lc4', image: '/images/loungechair4.jpeg', tag: 'Modern Minimalist Club Chair' },
        { id: 'lc5', image: '/images/loungechair5.jpeg', tag: 'Stain-Resistant Upholstered' },
        { id: 'lc6', image: '/images/loungechair6.jpeg', tag: 'Ergonomic Soft Cushion' },
        { id: 'lc7', image: '/images/loungechair7.jpeg', tag: 'Executive Reception Seating' },
        { id: 'lc8', image: '/images/loungechair8.jpeg', tag: 'Solid Wood Accent Chair' },
        { id: 'lc9', image: '/images/loungechair9.jpeg', tag: 'Contemporary Cafe Lounge' },
        { id: 'lc10', image: '/images/loungechair10.jpeg', tag: 'Plush Comfort Armchair' },
        { id: 'lc11', image: '/images/loungechair11.jpeg', tag: 'Luxury Velvet Lounge Chair' },
        { id: 'lc12', image: '/images/loungechair12.jpeg', tag: 'High-Back Executive Lounge' },
        { id: 'lc13', image: '/images/loungechair13.jpeg', tag: 'Contoured Accent Armchair' },
        { id: 'lc14', image: '/images/loungechair14.jpeg', tag: 'Modern Minimalist Lounge' },
        { id: 'lc15', image: '/images/loungechair15.jpeg', tag: 'Premium Leatherette Lounge' },
        { id: 'lc16', image: '/images/loungechair16.jpeg', tag: 'Compact Lobby Lounge Chair' },
        { id: 'lc17', image: '/images/loungechair17.jpeg', tag: 'Soft Cushion Reception Seat' },
        { id: 'lc18', image: '/images/loungechair18.jpeg', tag: 'Contemporary Comfort Chair' }
      ]
    }
  ]
};

const schoolDesksCollection = {
  title: 'SCHOOL DESKS',
  sections: [
    {
      title: 'CLASSROOM & INSTITUTIONAL DESKS',
      items: [
        { id: 'sd1', image: '/images/SchoolDesk1.jpeg', tag: 'Dual-Seater School Desk' },
        { id: 'sd2', image: '/images/SchoolDesk2.jpeg', tag: 'Ergonomic Student Bench' },
        { id: 'sd3', image: '/images/SchoolDesk3.jpeg', tag: 'Heavy Duty Steel Frame' },
        { id: 'sd4', image: '/images/SchoolDesk4.jpeg', tag: 'Classroom Desk & Bench' },
        { id: 'sd5', image: '/images/SchoolDesk5.jpeg', tag: 'Pre-laminated Board Top' },
        { id: 'sd6', image: '/images/SchoolDesk6.jpeg', tag: 'Institutional Bench Setup' },
        { id: 'sd7', image: '/images/SchoolDesk7.jpeg', tag: 'Storage Rack Student Desk' },
        { id: 'sd8', image: '/images/SchoolDesk8.jpeg', tag: '4-Seater Heavy Duty Desk' }
      ]
    }
  ]
};

const cafeteriaChairsCollection = {
  title: 'CAFETERIA CHAIRS',
  sections: [
    {
      title: 'COMMERCIAL CAFE & DINING SEATING',
      items: [
        { id: 'cc1', image: '/images/cafeteriachair1.jpeg', tag: 'Ergonomic Cafe Shell Chair' },
        { id: 'cc2', image: '/images/cafeteriachair2.jpeg', tag: 'Contoured Dining Chair' },
        { id: 'cc3', image: '/images/cafeteriachair3.jpeg', tag: 'Stackable Cafeteria Chair' },
        { id: 'cc4', image: '/images/cafeteriachair4.jpeg', tag: 'Modern Food Court Chair' },
        { id: 'cc5', image: '/images/cafeteriachair5.jpeg', tag: 'Padded Cushion Cafe Seating' },
        { id: 'cc6', image: '/images/cafeteriachair6.jpeg', tag: 'Minimalist Dining Shell' },
        { id: 'cc9', image: '/images/cafeteriachair9.jpeg', tag: 'Industrial Dining Chair' },
        { id: 'cc10', image: '/images/cafeteriachair10.jpeg', tag: 'Premium Cafeteria Chair' },
        { id: 'cc11', image: '/images/cafeteriachair11.jpeg', tag: 'High-Density Shell Cafe Chair' },
        { id: 'cc12', image: '/images/cafeteriachair12.jpeg', tag: 'Modern Molded Dining Seat' },
        { id: 'cc13', image: '/images/cafeteriachair13.jpeg', tag: 'Ergonomic Food Court Chair' },
        { id: 'cc14', image: '/images/cafeteriachair14.jpeg', tag: 'Stackable Commercial Chair' },
        { id: 'cc15', image: '/images/cafeteriachair15.jpeg', tag: 'Padded Upholstered Cafe Chair' },
        { id: 'cc16', image: '/images/cafeteriachair16.jpeg', tag: 'Contemporary Bistro Dining' },
        { id: 'cc17', image: '/images/cafeteriachair17.jpeg', tag: 'Heavy Duty Steel Base Shell' }
      ]
    }
  ]
};

const writingPadChairsCollection = {
  title: 'WRITING PAD CHAIRS',
  sections: [
    {
      title: 'TRAINING & SEMINAR SEATING',
      items: [
        { id: 'wp1', image: '/images/writingpadchair1.jpeg?v=2', tag: 'Attached Folding Pad' },
        { id: 'wp2', image: '/images/writingpadchair2.jpeg?v=2', tag: 'Institutional Training Chair' },
        { id: 'wp3', image: '/images/writingpadchair3.jpeg?v=2', tag: 'Seminar Room Pad Chair' },
        { id: 'wp4', image: '/images/writingpadchair4.jpeg?v=2', tag: 'Ergonomic Mesh Pad Chair' },
        { id: 'wp5', image: '/images/writingpadchair5.jpeg?v=2', tag: 'Classroom Lecture Chair' },
        { id: 'wp6', image: '/images/writingpadchair6.jpeg?v=2', tag: 'Padded Arm Pad Chair' }
      ]
    }
  ]
};

const bunkerCotBedsCollection = {
  title: 'BUNKER COT BEDS',
  sections: [
    {
      title: 'COMMERCIAL HEAVY-DUTY BUNK BEDS',
      items: [
        { id: 'bb1', image: '/images/Bunkercot1.jpeg', tag: 'Dual-Tier Steel Bunk Bed' },
        { id: 'bb2', image: '/images/Bunkercot2.jpeg', tag: 'Hostel & PG Heavy Duty Bed' },
        { id: 'bb3', image: '/images/Bunkercot3.jpeg', tag: 'Reinforced Metal Bunk Cot' },
        { id: 'bb4', image: '/images/Bunkercot4.jpeg', tag: 'Commercial Dormitory Bed' },
        { id: 'bb5', image: '/images/Bunkercot5.jpeg', tag: 'Double Deck Steel Cot' },
        { id: 'bb6', image: '/images/Bunkercot6.jpeg', tag: 'Heavy Duty Metal Frame Bunk' },
        { id: 'bb7', image: '/images/Bunkercot7.jpeg', tag: 'Compact Space-Saving Bunk' },
        { id: 'bb8', image: '/images/Bunkercot8.jpeg', tag: 'Industrial Strength Cot Bed' },
        { id: 'bb9', image: '/images/Bunkercot9.jpeg', tag: 'Premium Commercial Bunk Bed' }
      ]
    }
  ]
};

const restaurantTablesCollection = {
  title: 'RESTAURANT TABLES',
  sections: [
    {
      title: 'COMMERCIAL DINING & RESTAURANT TABLES',
      items: [
        { id: 'rt1', image: '/images/restauranttable1.jpeg', tag: 'Solid Hardwood Dining Table' },
        { id: 'rt2', image: '/images/restauranttable2.jpeg', tag: 'Compact Cafe Round Table' },
        { id: 'rt3', image: '/images/restauranttable3.jpeg', tag: 'Heavy Metal Base Table' },
        { id: 'rt4', image: '/images/restauranttable4.jpeg', tag: 'Commercial Restaurant Table' },
        { id: 'rt5', image: '/images/restauranttable5.jpeg', tag: 'Contemporary Cafe Table' },
        { id: 'rt6', image: '/images/restauranttable6.jpeg', tag: 'Square Dining Table' },
        { id: 'rt7', image: '/images/restauranttable7.jpeg', tag: 'Granite Top Dining Table' },
        { id: 'rt8', image: '/images/restauranttable8.jpeg', tag: 'Modern Bar & Restaurant Table' },
        { id: 'rt9', image: '/images/restauranttable9.jpeg', tag: 'Industrial Dining Table' },
        { id: 'rt10', image: '/images/restauranttable10.jpeg', tag: 'Premium Bistro Dining Table' }
      ]
    }
  ]
};

const CATEGORIES_DATA = {
  barstool: barstoolCollection,
  'bar-stools': barstoolCollection,

  // Combined Office & Workstation Chairs
  'office-workstation': officeWorkstationCollection,
  'office-workstations': officeWorkstationCollection,
  'office/workstation': officeWorkstationCollection,
  workstations: officeWorkstationCollection,
  workstation: officeWorkstationCollection,
  'workstation-chairs': officeWorkstationCollection,
  'office-chairs': officeWorkstationCollection,
  office: officeWorkstationCollection,

  // Executive Chairs (Strictly og-executivechair1-9)
  executive: executiveChairsCollection,
  'executive-chair': executiveChairsCollection,
  'executive-chairs': executiveChairsCollection,
  executivechairs: executiveChairsCollection,

  // Boss Chairs (Strictly BossChair1-10 + bosschair11-17)
  boss: bossChairsCollection,
  'boss-chairs': bossChairsCollection,
  bosschairs: bossChairsCollection,

  // Visitor Chairs (Strictly visitingchair1-7)
  'visitor-chairs': visitorChairsCollection,
  visitor: visitorChairsCollection,
  visiting: visitorChairsCollection,
  visitorchairs: visitorChairsCollection,
  'visiting-chairs': visitorChairsCollection,

  // Waiting Chairs (Strictly waitingchair1-5)
  'waiting-chairs': waitingChairsCollection,
  waiting: waitingChairsCollection,
  waitingchairs: waitingChairsCollection,

  // Boardstation Chairs
  boardstation: boardstationChairsCollection,
  'boardstation-chair': boardstationChairsCollection,
  'boardstation-chairs': boardstationChairsCollection,
  boardstationchairs: boardstationChairsCollection,
  boardroom: boardstationChairsCollection,
  'boardroom-tables': boardstationChairsCollection,

  // Lounge Chairs
  lounge: loungeCollection,
  'lounge-chairs': loungeCollection,

  // School desks (Strictly SchoolDesk1-8)
  'school-desks': schoolDesksCollection,
  schooldesks: schoolDesksCollection,
  school: schoolDesksCollection,

  // Bunker Cot Beds (Strictly Bunkercot1-9)
  'bunker-cot-beds': bunkerCotBedsCollection,
  bunkercotbeds: bunkerCotBedsCollection,
  bunker: bunkerCotBedsCollection,
  bunkercot: bunkerCotBedsCollection,

  // Writing Pad Chairs (Strictly writingpadchair1-6)
  'writing-pad-chairs': writingPadChairsCollection,
  writingpadchairs: writingPadChairsCollection,
  writingpad: writingPadChairsCollection,

  // Restaurant Tables (Strictly restauranttable1-10)
  'restaurant-tables': restaurantTablesCollection,
  restauranttables: restaurantTablesCollection,
  restaurant: restaurantTablesCollection,

  // Cafeteria Chairs (Strictly cafeteriachair1-10)
  'cafeteria-chairs': cafeteriaChairsCollection,
  cafeteriachairs: cafeteriaChairsCollection,
  cafeteria: cafeteriaChairsCollection
};

export default function CollectionCategoryPage({ categoryKey, onNavigateBack }) {
  const normalizedKey = (categoryKey || '').toLowerCase().trim();
  const category = CATEGORIES_DATA[normalizedKey] || CATEGORIES_DATA['executive-chairs'];

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', paddingBottom: '1.5rem', paddingTop: '2rem' }}>
      <div className="container">
        
        {/* Top Header — Clean title, no product count indicator */}
        <div style={{
          marginTop: '1.5rem',
          marginBottom: '3.5rem',
          borderBottom: '1px solid rgba(24, 59, 53, 0.1)',
          paddingBottom: '1.5rem'
        }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--color-gold)', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            LK FURNITURE WORLD1 COLLECTIONS
          </div>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '900',
            color: '#183B35',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            margin: 0
          }}>
            {category.title}
          </h1>
        </div>

        {/* Render Each Section */}
        {category.sections.map((section, idx) => (
          <div key={idx} style={{ marginBottom: '4.5rem' }}>
            
            {section.title && (
              <div style={{
                fontSize: '1.2rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: '800',
                color: '#183B35',
                letterSpacing: '0.08em',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                borderBottom: '2px solid #C5A075',
                paddingBottom: '0.5rem',
                maxWidth: '380px'
              }}>
                {section.title}
              </div>
            )}

            {/* 3 Cards Each Row Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
              gap: '2rem'
            }}>
              {section.items.map((item) => (
                <a
                  key={item.id}
                  href={`https://wa.me/918884487020?text=Hi%20LK%20Furniture%20World1%2C%20I%20am%20interested%20in%20an%20item%20from%3A%20${encodeURIComponent(category.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer'
                  }}
                  className="promax-card-wrap"
                >
                  {/* Soft Rounded Off-White Card (border-radius: 28px, background: #F0F4F2) */}
                  <div style={{
                    background: '#F0F4F2',
                    borderRadius: '28px',
                    height: '360px',
                    padding: '1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(24, 59, 53, 0.04)',
                    transition: 'transform 0.35s ease, boxShadow 0.35s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }} className="promax-card-bg">
                    
                    {/* Full Product Image — 100% full view without cropping! */}
                    <img 
                      src={item.image} 
                      alt={category.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        display: 'block',
                        transition: 'transform 0.4s ease'
                      }}
                      className="promax-img-zoom"
                    />

                    {/* Spec Tag */}
                    {item.tag && (
                      <span style={{
                        position: 'absolute',
                        top: '1.25rem',
                        left: '1.25rem',
                        background: 'rgba(24, 59, 53, 0.9)',
                        color: '#FFFFFF',
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '999px',
                        backdropFilter: 'blur(6px)'
                      }}>
                        {item.tag}
                      </span>
                    )}

                    {/* Circular Action Arrow Button */}
                    <div style={{
                      position: 'absolute',
                      bottom: '1.25rem',
                      right: '1.25rem',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      boxShadow: '0 4px 14px rgba(24, 59, 53, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.25s ease, background 0.25s ease'
                    }} className="card-arrow-circle">
                      <ArrowRight size={20} color="#C5A075" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </div>
        ))}

        {/* AT LAST: VIEW ENTIRE CATALOGUE BUTTON */}
        <div style={{ textAlign: 'center', paddingTop: '2.5rem', borderTop: '1px solid rgba(24, 59, 53, 0.1)' }}>
          <a
            href="/lk_catalogue.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.85rem',
              padding: '1.1rem 2.75rem',
              fontSize: '1rem',
              fontWeight: '800',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: '999px',
              boxShadow: '0 10px 30px rgba(197, 160, 117, 0.4)',
              textDecoration: 'none'
            }}
          >
            <BookOpen size={22} /> VIEW ENTIRE CATALOGUE <ArrowRight size={20} />
          </a>
        </div>

      </div>

      <style>{`
        .promax-card-wrap:hover .promax-card-bg {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(24, 59, 53, 0.12) !important;
        }
        .promax-card-wrap:hover .promax-img-zoom {
          transform: scale(1.06);
        }
        .promax-card-wrap:hover .card-arrow-circle {
          background: #C5A075 !important;
          transform: scale(1.1);
        }
        .promax-card-wrap:hover .card-arrow-circle svg {
          stroke: #FFFFFF !important;
        }
      `}</style>
    </div>
  );
}

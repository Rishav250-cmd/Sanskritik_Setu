import React, { useState } from 'react';

// Demo Data
const heritageData = [
  {
    id: 1,
    name: 'Taj Mahal',
    location: 'Agra, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500',
    shortDesc: 'An iconic ivory-white marble mausoleum on the Yamuna river.',
    fullDesc: 'Built between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, Mumtaz Mahal. It is one of the Seven Wonders of the World.'
  },
  {
    id: 2,
    name: 'Qutub Minar',
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=500',
    shortDesc: 'A 73-metre tall minaret that forms part of the Qutb complex.',
    fullDesc: 'Built in 1192 by Qutb-ud-din Aibak and later completed by his successor Iltutmish. It is a UNESCO World Heritage Site made of red sandstone and marble.'
  },
  {
    id:3,
    name:'Redfort',
    location:'Delhi',
    image: 'https://media.istockphoto.com/id/510444127/photo/lal-qila-red-fort-in-delhi.jpg?s=170667a&w=0&k=20&c=zl-FDuLArRkgbzUSwVui1d8zl5zKrzwwwYgdLB2dpnw=',
    shortDesc:'A historic 17th-century Mughal fortress built in red sandstone.',
    fullDesc:'Commissioned by Emperor Shah Jahan in 1638 when he decided to shift his capital from Agra to delhi.It serves as the main venue for Independence day celebrations of India.'
  },
  {
    id:4,
    name:'Hawa Mahal',
    location :'Rajasthan',
    image: 'https://tse3.mm.bing.net/th/id/OIP.YCVmaDpiatW3-mfOgZ3P4QHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    shortDesc:'The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone.',
    fullDesc:'Hawa Mahal, also known as the "palace of winds" was built in 1799 by the Maharaja Sawai Pratap Singh. It is considered unique as it has many small windows.'
  },
  
{
  id: 5,
  name: 'Sun Temple',
  location: 'Konark, Odisha',
  image: 'https://revelationholidays.com/wp-content/uploads/2023/12/Sun-Temple-Konark-UNESCO-World-Heritage-Site.webp',
  shortDesc: 'A 13th-century Sun Temple shaped like a gigantic stone chariot.',
   fullDesc: 'Built by King Narasimhadeva I of the Eastern Ganga dynasty. Dedicated to the Hindu Sun God Surya, it features 24 elaborately carved stone wheels.'
},
{
  id: 6,
  name: 'Gateway of India',
  location: 'Mumbai, Maharashtra',
  image: 'https://pohcdn.com/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Gateway-to-India_0.jpg',
  shortDesc: 'An arch monument erected to commemorate the landing of King George V in India.',
  fullDesc: 'Constructed in Indo-Saracenic style, its foundation stone was laid in March 1911. It stands right on the waterfront overlooking the Arabian Sea.'
},
{
  id: 7,
  name: 'Golden Temple',
  location: 'Amritsar, Punjab',
  image: 'https://tse4.mm.bing.net/th/id/OIP.8UxGSy06FYyz22N6LWPKEAHaFP?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  shortDesc: 'The holiest shrine of Sikhism, famous for its gold-covered dome and holy sarovar.',
  fullDesc: 'Also known as Sri Harmandir Sahib, it was designed by Guru Arjan Sahib in the 16th century. It is surrounded by a sacred pool and accepts people from all walks of life.'
},
{
  id: 8,
  name: 'Ajanta Caves',
  location: 'Sambhaji Nagar, Maharashtra',
  image: 'https://c8.alamy.com/comp/DA1WPD/cave-26-ajanta-buddhist-caves-india-DA1WPD.jpg',
  shortDesc: 'Ancient rock-cut Buddhist cave monuments featuring masterclass murals and sculptures.',
  fullDesc: 'Dating from the 2nd century BCE to about 480 CE, these 30 rock-cut caves depict the Jataka tales and fine classical Indian art masterpieces.'
},
{
  id: 9,
  name: 'Meenakshi Temple',
  location: 'Madurai, Tamil Nadu',
  image:'https://media.istockphoto.com/id/598169324/photo/north-and-west-gopuram-of-meenakshi-temple.jpg?s=612x612&w=0&k=20&c=IUq8px_L5YHTfT41mmeYIyASCSQkrvoJCG4p118esfw=',
  shortDesc: 'A historic Dravidian-style temple known for its towering, colorful Gopurams.',
  fullDesc: 'Dedicated to Goddess Meenakshi (a form of Parvati) and Sundareswarar (Shiva). The complex holds 14 gateway towers covered in thousands of painted stone figures.'
}
];

export default function HeritageSites() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSite, setSelectedSite] = useState(null);

  // Filter sites according to search term
  const filteredSites = heritageData.filter(
    (site) =>
      site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      site.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

 return (
    <div
      style={{
        padding: '100px 20px 60px',
        maxWidth: '1100px',
        margin: '0 auto',
        color: '#ffffff',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Category Tag Line */}
      <div style={{ textAlign: 'center', marginBottom: '12px' }}>
        <span
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            letterSpacing: '2px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            textTransform: 'uppercase',
            color: '#cbd5e1'
          }}
        >
          EXPLORE HERITAGE
        </span>
      </div>

      {/* Main Title*/}
  
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          fontWeight: '800',
          fontSize: '2.2rem',
          letterSpacing: '1px'
        }}
      >
        
      </h1>

      {/* Search Bar */}
      <div style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
        <input
          type="text"
          placeholder="Search site by name or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '14px 20px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            color: '#ffffff',
            fontSize: '0.95rem',
            outline: 'none',
            boxSizing: 'border-box',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}
        />
      </div>

      {/* Cards Grid Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px'
        }}
      >
        {filteredSites.map((site) => (
          <div
            key={site.id}
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
          >
            {/* Top Image Banner */}
            <div style={{ height: '180px', width: '100%', position: 'relative' }}>
              <img
                src={site.image}
                alt={site.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/300x180?text=Heritage+Site';
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {/* Location Tag */}
              <span
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  color: '#38bdf8',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  backdropFilter: 'blur(4px)'
                }}
              >
                {site.location}
              </span>
            </div>

            {/* Card Content */}
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3
                style={{
                  margin: '0 0 8px 0',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                {site.name}
              </h3>

              <p
                style={{
                  margin: '0 0 20px 0',
                  fontSize: '0.85rem',
                  color: '#94a3b8',
                  lineHeight: '1.5',
                  flexGrow: 1
                }}
               
              >
                {site.shortDesc}
              </p>

              {/* Explore Now Button */}
              <button
                onClick={() => setSelectedSite(site)}
                style={{
                  width: '100%',
                  padding: '11px 0',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  transition: 'background 0.2s'
                }}
              >
                EXPLORE NOW
              </button>
            </div>
          </div>
       
        ))}
      </div>

      {/* Expanded Modal / Details Box */}
      {selectedSite && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
          onClick={() => setSelectedSite(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#0f172a',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              borderRadius: '16px',
              maxWidth: '550px',
              width: '100%',
              padding: '28px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              position: 'relative'
            }}
          >
            <h2 style={{ margin: '0 0 6px 0', color: '#38bdf8' }}>{selectedSite.name}</h2>
            <p style={{ margin: '0 0 16px 0', color: '#94a3b8', fontSize: '0.9rem' }}>
              📍 {selectedSite.location}
            </p>
            <p style={{ lineHeight: '1.6', color: '#cbd5e1', fontSize: '0.95rem', marginBottom: '24px' }}>
              {selectedSite.fullDesc}
            </p>
            <button
              onClick={() => setSelectedSite(null)}
              style={{
                backgroundColor: '#38bdf8',
                color: '#090d16',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: '700',
                cursor: 'pointer',
                float: 'right'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    );
  }
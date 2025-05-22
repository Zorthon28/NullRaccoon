import React from 'react';

const Certifications = ({ t }) => {
  return (
    <section className="certifications-section" style={{ padding: '2rem' }}>
      <h2 className="text-4xl font-bold mb-6 text-white">{t.certificationsTitle}</h2>
      <div
        className="cert-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {t.certificationsList.map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '1rem',
              textAlign: 'center',
              background: '#fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease',
            }}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={cert.imgSrc}
              alt={cert.name}
              style={{ width: '100%', height: 'auto', objectFit: 'contain', maxHeight: '150px' }}
            />
            <h3 style={{ marginTop: '1rem', color: '#333' }}>{cert.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

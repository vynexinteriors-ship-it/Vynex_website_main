import React from 'react';

const items = [
  {
    title: 'Flat 10‑year warranty',
    desc: 'Interiors built with superior hardware and core materials, covered for a decade.'
  },
  {
    title: '45‑days delivery*',
    desc: 'Standard modular projects executed from design lock to installation in 45 days.'
  },
  {
    title: '600+ design experts',
    desc: 'Pan‑India network of experienced Vynex designers to guide every decision.'
  },
  {
    title: 'Post‑installation service',
    desc: 'Dedicated care team for snag fixes, maintenance queries and warranty support.'
  }
];

const ValueStrip = () => (
  <section className="section light">
    <div className="container grid-4">
      {items.map((item) => (
        <div key={item.title}>
          <h3 style={{ fontSize: '1rem' }}>{item.title}</h3>
          <p style={{ fontSize: '0.9rem', color: '#555' }}>{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ValueStrip;

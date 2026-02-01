import React from 'react';

const TrustBand = () => (
  <section className="section light">
    <div className="container">
      <h2>Why homeowners trust Vynex</h2>
      <div className="grid-4" style={{ marginTop: '1.5rem' }}>
        <div>
          <h3 style={{ fontSize: '1rem' }}>Flat 10‑year warranty</h3>
          <p style={{ fontSize: '0.9rem' }}>
            Long‑term assurance on core products and workmanship.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: '1rem' }}>45‑day delivery promise</h3>
          <p style={{ fontSize: '0.9rem' }}>
            Strict timelines from design lock to final handover.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: '1rem' }}>600+ design experts</h3>
          <p style={{ fontSize: '0.9rem' }}>
            Specialists across styles, budgets and configurations.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: '1rem' }}>Dedicated post‑install care</h3>
          <p style={{ fontSize: '0.9rem' }}>
            Responsive support team for any service or warranty queries.
          </p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <button className="btn-primary">Book Free Design Session</button>
      </div>
    </div>
  </section>
);

export default TrustBand;

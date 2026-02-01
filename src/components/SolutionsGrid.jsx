import React from 'react';
import { solutions } from '../data/solutions';

const SolutionsGrid = () => (
  <section className="section light" id="cities">
    <div className="container">
      <h2>End‑to‑end interior solutions</h2>
      <div className="grid-4" style={{ marginTop: '1.5rem' }}>
        {solutions.map((name) => (
          <div key={name} className="card" style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                margin: '0 auto 0.5rem',
                border: '1px dashed #ccc'
              }}
            ></div>
            <p style={{ fontSize: '0.9rem' }}>{name}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '1.75rem' }}>
        <button className="btn-primary">Book Free Design Session</button>
      </div>
    </div>
  </section>
);

export default SolutionsGrid;

import React from 'react';

const steps = [
  'Meet your Vynex designer',
  'Walkthrough of a Vynex Studio or virtual tour',
  'Free personalised 3D designs on Vynex design tool',
  'Get an instant quote for your interiors'
];

const DesignSession = () => (
  <section className="section light" id="guides">
    <div className="container">
      <h2>What is a Design Session?</h2>
      <div className="grid-4" style={{ marginTop: '1.5rem' }}>
        {steps.map((text, idx) => (
          <div key={idx} className="card">
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'var(--vynex-red)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.75rem'
              }}
            >
              {idx + 1}
            </div>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DesignSession;

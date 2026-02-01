import React, { useState } from 'react';
import { journeySteps } from '../data/journeySteps';

const JourneySteps = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section" id="offerings">
      <div className="container">
        <h2>From Design to Move‑In</h2>
        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '1rem',
            paddingBottom: '1rem',
            marginTop: '1rem'
          }}
        >
          {journeySteps.map((step, idx) => (
            <div
              key={step.title}
              className="card"
              style={{
                minWidth: 260,
                border:
                  idx === active ? '2px solid var(--vynex-red)' : '1px solid #eeeeee',
                cursor: 'pointer'
              }}
              onClick={() => setActive(idx)}
            >
              <div style={{ fontSize: 13, color: '#999', marginBottom: 4 }}>
                Step {idx + 1}
              </div>
              <h3 style={{ fontSize: '1rem' }}>{step.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>{step.desc}</p>
            </div>
          ))}
        </div>
        <button className="btn-primary">Book Free Design Session</button>
      </div>
    </section>
  );
};

export default JourneySteps;

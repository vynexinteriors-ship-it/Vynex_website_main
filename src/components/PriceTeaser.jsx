import React from 'react';

const PriceTeaser = () => (
  <section className="section light" id="pricing">
    <div className="container">
      <h2>Get an estimate for your home.</h2>
      <p style={{ maxWidth: 540 }}>
        Use Vynex calculators to understand indicative price ranges for your
        kitchen or full‑home interiors before you start.
      </p>
      <div className="grid-3" style={{ marginTop: '1.5rem' }}>
        <div className="card">
          <h3>Full Home Interiors</h3>
          <p>Estimate the cost of doing up your complete home with Vynex.</p>
          <button className="btn-primary">Get Free Estimate</button>
        </div>
        <div className="card">
          <h3>Kitchen</h3>
          <p>Know the ballpark budget for your modular kitchen layout.</p>
          <button className="btn-primary">Get Free Estimate</button>
        </div>
      </div>
    </div>
  </section>
);

export default PriceTeaser;

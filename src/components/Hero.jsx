import React from 'react';
import heroImg from '../assets/hero-livingroom.jpg';

const Hero = () => {
  return (
    <section id="hero" className="section">
      <div className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.6fr) minmax(0, 1fr)',
          gap: '2rem',
          alignItems: 'center'
        }}
      >
        <div>
          <h1>Interiors you’ll love. Without the stress.</h1>
          <p>
            Vynex blends design expertise and smart technology to deliver
            modular kitchens, wardrobes and full‑home interiors in just 45 days.
          </p>
          <p>
            Experience transparent pricing, visualise every corner in 3D and
            move in on time with our dedicated project team.
          </p>
          <button
            className="btn-outline"
            onClick={() =>
              document
                .getElementById('hero-form')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Meet a Vynex Designer
          </button>
        </div>

        <div id="hero-form" className="card" style={{ maxWidth: 420, marginLeft: 'auto' }}>
          <h3>Meet a Vynex Designer</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label>
              Name
              <input type="text" required placeholder="Full name"
                style={{ width: '100%', marginTop: 4, marginBottom: 12 }} />
            </label>
            <label>
              Phone
              <input type="tel" required placeholder="+91‑XXXXXXXXXX"
                style={{ width: '100%', marginTop: 4, marginBottom: 12 }} />
            </label>
            <label>
              City
              <select style={{ width: '100%', marginTop: 4, marginBottom: 12 }}>
                <option>Choose your city</option>
                <option>Mumbai</option>
                <option>Thane</option>
                <option>Bengaluru</option>
              </select>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" /> Send me updates on WhatsApp
            </label>
            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: 16 }}>
              Book 3D Design Session
            </button>
            <p style={{ fontSize: 12, color: '#757575', marginTop: 8 }}>
              By submitting, you agree to Vynex’s privacy policy and terms of use.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import logo from '../assets/logo-vynex.svg';

const Footer = () => (
  <footer style={{ background: '#111', color: '#eee', paddingTop: '3rem' }}>
    <div className="container">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1.5fr 1.5fr 1.5fr',
          gap: '2rem'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src={logo} alt="Vynex logo" style={{ height: 32 }} />
            <strong>Vynex</strong>
          </div>
          <p style={{ marginTop: '0.75rem', fontSize: 13 }}>
            Vynex makes home interiors easy with expert designers, factory‑made
            modules and transparent pricing.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem' }}>
            <span>IG</span>
            <span>YT</span>
            <span>PT</span>
            <span>IN</span>
            <span>FB</span>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '1rem' }}>Vynex</h3>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: 13 }}>
            <li>Team</li>
            <li>Join Us</li>
            <li>Design Journal</li>
            <li>Get Estimate</li>
            <li>Privacy Policy</li>
            <li>Refer and Earn</li>
            <li>Press Release</li>
            <li>Book Virtual Meeting</li>
            <li>Modular Kitchen Cost Calculator</li>
            <li>Business Interiors</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: '1rem' }}>Customer Support</h3>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: 13 }}>
            <li>Raise Issue</li>
            <li>My Issues</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Terms &amp; Conditions</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: '1rem' }}>The Design Journal</h3>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: 13 }}>
            <li>Buying Guides</li>
            <li>Home Décor Ideas</li>
            <li>Interior Design Ideas</li>
            <li>Interiors by Vynex</li>
            <li>Interior Design Tips</li>
          </ul>
        </div>
      </div>

      <div
        style={{
          marginTop: '2rem',
          padding: '1rem 0',
          borderTop: '1px solid #333',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '0.75rem',
          fontSize: 13
        }}
      >
        <span>© Vynex Decor and Furnishings Pvt. Ltd.</span>
        <span>Email: hello@vynex.com · Phone: 1800‑102‑XXXX</span>
        <span>WhatsApp</span>
      </div>
    </div>
  </footer>
);

export default Footer;

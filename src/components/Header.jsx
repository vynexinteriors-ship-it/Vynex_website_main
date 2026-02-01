import React, { useState } from 'react';
import logo from '../assets/logo-vynex.svg';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container"
        style={{
          height: 'var(--header-height-desktop)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src={logo} alt="Vynex logo" style={{ height: 32 }} />
          <strong>Vynex</strong>
        </div>

        {/* desktop nav */}
        <nav className="nav-desktop">
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '1.25rem',
              margin: 0,
              padding: 0,
              alignItems: 'center'
            }}
          >
            <li><a href="#gallery">Design Gallery</a></li>
            <li><a href="#guides">Guides</a></li>
            <li><a href="#cities">Cities</a></li>
            <li><a href="#offerings">Offerings</a></li>
            <li><a href="#pricing">Price Calculators</a></li>
            <li><a href="#more">More</a></li>
            <li>
              <button className="btn-primary" onClick={() => {
                document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Get Free Estimate
              </button>
            </li>
          </ul>
        </nav>

        {/* mobile hamburger */}
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          <ul style={{ listStyle: 'none', margin: 0, padding: '0.75rem 1.25rem' }}>
            {['Design Gallery', 'Guides', 'Cities', 'Offerings', 'Price Calculators', 'More'].map(
              (item) => (
                <li key={item} style={{ padding: '0.5rem 0' }}>
                  <a href="#hero">{item}</a>
                </li>
              )
            )}
            <li style={{ padding: '0.75rem 0' }}>
              <button className="btn-primary" style={{ width: '100%' }}>
                Get Free Estimate
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

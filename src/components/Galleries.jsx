import React from 'react';
import {
  livingRoomDesigns,
  bedroomDesigns,
  wardrobeDesigns,
  kitchenDesigns,
  tvUnitDesigns,
  kidsRoomDesigns,
  e2eDesigns
} from '../data/galleries';

const renderCarousel = (title, items, galleryLink) => (
  <div style={{ marginBottom: '2rem' }}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0.75rem'
      }}
    >
      <h3 style={{ fontSize: '1.1rem' }}>{title}</h3>
      <a href={galleryLink} target="_blank" style={{ fontSize: '0.9rem', color: 'var(--vynex-red)' }}>
        See All
      </a>
    </div>
    <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto' }}>
      {items.map((name) => (
        <div key={name} className="card" style={{ minWidth: 260 }}>
          <div
            style={{
              background: '#ddd',
              height: 150,
              borderRadius: 8,
              marginBottom: 8
            }}
          ></div>
          <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{name}</div>
        </div>
      ))}
    </div>
  </div>
);

const Galleries = () => (
  <section className="section" id="gallery">
    <div className="container">
      <h2>Design Gallery</h2>
      {renderCarousel('Living Room Designs', livingRoomDesigns, 'galleries/living-rooms.html')}
      {renderCarousel('Bedroom Designs', bedroomDesigns, 'galleries/bedrooms.html')}
      {renderCarousel('Wardrobe Designs', wardrobeDesigns, 'galleries/wardrobes.html')}
      {renderCarousel('Modular Kitchen Designs', kitchenDesigns, 'galleries/modular-kitchens.html')}
      {renderCarousel('TV Unit Designs', tvUnitDesigns, 'galleries/tv-units.html')}
      {renderCarousel('Kids Room Designs', kidsRoomDesigns, 'galleries/kids-rooms.html')}
      {renderCarousel('End‑to‑end Offerings', e2eDesigns, '#gallery')}
    </div>
  </section>
);

export default Galleries;

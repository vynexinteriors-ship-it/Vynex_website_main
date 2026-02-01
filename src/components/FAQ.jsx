import React, { useState } from 'react';
import { faqs } from '../data/faqs';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div style={{ marginTop: '1rem' }}>
          {faqs.map((item, idx) => (
            <div key={item.q} className="faq-item">
              <div
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <span>{item.q}</span>
                <span>{openIndex === idx ? '−' : '+'}</span>
              </div>
              {openIndex === idx && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

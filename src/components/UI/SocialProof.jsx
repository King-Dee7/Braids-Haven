import React from 'react';
import { translations } from '../../utils/translations';
import './SocialProof.css';

const testimonials = [
  {
    id: 1,
    name: 'Amara K.',
    age: 24,
    city: 'Helsinki',
    style: 'Knotless Braids',
    text: 'Absolutely in love with my hair. The parts are so clean, and it didn’t hurt at all. Best braider I’ve found since moving to Finland.'
  },
  {
    id: 2,
    name: 'Sofia M.',
    age: 22,
    city: 'Espoo',
    style: 'Fulani Braids',
    text: 'She understood exactly what I wanted from a single reference photo. The atmosphere in the studio was so relaxing too.'
  },
  {
    id: 3,
    name: 'Nia T.',
    age: 27,
    city: 'Helsinki',
    style: 'Cornrows',
    text: 'My go-to place now. Fast, professional, and my natural hair feels so healthy and protected after every visit.'
  }
];

const SocialProof = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="social-proof">
      <div className="container">
        <h2 className="sp-header">Client Stories</h2>
        <div className="sp-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="sp-text">"{testimonial.text}"</p>
              <div className="sp-author">
                <strong>{testimonial.name}</strong>, {testimonial.age}
              </div>
              <div className="sp-meta">
                {testimonial.city} • {testimonial.style}
              </div>
            </div>
          ))}
        </div>
        
        <div className="sp-stats-strip">
          <div className="stat-item">
            <h3>{t.stat1}</h3>
          </div>
          <div className="stat-item">
            <h3>{t.stat2}</h3>
          </div>
          <div className="stat-item">
            <h3>{t.stat3}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

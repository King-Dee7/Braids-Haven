import React from 'react';
import { translations } from '../../utils/translations';
import './Loyalty.css';

const Loyalty = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="loyalty-loop">
      <div className="container">
        <h2 className="loyalty-title">{t.loyaltyTitle}</h2>
        <div className="loyalty-grid">
          <div className="loyalty-card">
            <span className="loyalty-number">1</span>
            <p>{t.loyalty1}</p>
          </div>
          <div className="loyalty-card">
            <span className="loyalty-number">2</span>
            <p>{t.loyalty2}</p>
          </div>
          <div className="loyalty-card">
            <span className="loyalty-number">3</span>
            <p>{t.loyalty3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loyalty;

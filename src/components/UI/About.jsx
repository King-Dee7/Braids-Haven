import React from 'react';
import { translations } from '../../utils/translations';
import './About.css';

const About = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="container about-container">
        <div className="about-image-wrapper">
          <img 
            src="/abena.jpg" 
            alt={`${t.founderName}, founder and lead braider at Braids Haven Helsinki`} 
            className="about-image"
            loading="lazy"
            width="400"
            height="500"
          />
        </div>
        <div className="about-content">
          <span className="about-eyebrow">{t.aboutEyebrow || 'Meet the Founder'}</span>
          <h2 className="about-title" id="about-title">Meet {t.founderName}</h2>
          <div className="about-bio">
            <p>{t.bio1}</p>
            <p>{t.bio2}</p>
            <p>{t.bio3}</p>
          </div>
          <p className="about-signature">- {t.founderName}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

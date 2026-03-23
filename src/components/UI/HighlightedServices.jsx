import React from 'react';
import { translations } from '../../utils/translations';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import './HighlightedServices.css';

const topServices = [
  {
    id: 1,
    title: 'Knotless Braids',
    price: 'from €120',
    duration: '4-6 hours',
    image: '/knotless%20braids.jpg',
    imageAlt: 'Knotless braids — lightweight, pain-free protective braiding style',
    scarcity: '2 slots left'
  },
  {
    id: 2,
    title: 'Cornrows / Feed-ins',
    price: 'from €60',
    duration: '1-3 hours',
    image: '/feed%20ins.jpg',
    imageAlt: 'Cornrows and feed-in braids — classic African braiding pattern',
    scarcity: null
  },
  {
    id: 3,
    title: 'Passion Twists',
    price: 'from €140',
    duration: '5-7 hours',
    image: '/Passion-Twist-Braids.jpeg',
    imageAlt: 'Passion twist braids — bohemian textured protective style',
    scarcity: 'High demand'
  }
];

const HighlightedServices = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="highlighted-services" aria-labelledby="hs-title">
      <div className="container">
        <div className="hs-header hidden-observer">
          <h2 id="hs-title">{t.servicesTitle}</h2>
          <Link to="/services" className="hs-link" aria-label="View all braiding services and pricing">
            View All Services →
          </Link>
        </div>
      </div>
      <div className="hs-grid">
        {topServices.map((service) => (
          <ServiceCard 
            key={service.id} 
            {...service} 
            hidePrice={true}
            lang={lang} 
          />
        ))}
      </div>
    </section>
  );
};

export default HighlightedServices;

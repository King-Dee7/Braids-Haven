import React from 'react';
import { translations } from '../../utils/translations';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ title, price, duration, image, imageAlt, scarcity, hidePrice, lang }) => {
  const t = translations[lang];

  return (
    <div className="service-card">
      <div className="card-image-wrapper">
        <img 
          src={image} 
          alt={imageAlt || `${title} — African braiding style by Braids Haven`} 
          className="card-image" 
          loading="lazy"
          width="400"
          height="300"
        />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          {!hidePrice && <span className="card-price">{price}</span>}
        </div>
        <Link to="/booking" className="btn-primary card-btn">
          {t.navBookNow}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

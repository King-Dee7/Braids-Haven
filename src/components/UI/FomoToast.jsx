import React, { useState, useEffect } from 'react';
import { translations } from '../../utils/translations';
import './FomoToast.css';

const FomoToast = ({ lang }) => {
  const t = translations[lang];
  const items = [t.fomoToastLimited, ...t.fomoToastExamples];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay before showing first message
    const initialTimer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    // Rotate messages every 8 seconds
    const interval = setInterval(() => {
      setIsVisible(false); // trigger exit animation
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setIsVisible(true); // trigger entrance animation
      }, 500); // 500ms to hide
      
    }, 8000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className={`fomo-toast ${isVisible ? 'show' : ''}`}>
      <div className="fomo-content">
        <span className="pulse-indicator"></span>
        <p>{items[currentIndex]}</p>
      </div>
    </div>
  );
};

export default FomoToast;

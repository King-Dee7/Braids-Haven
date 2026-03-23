import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../../utils/translations';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import './Hero.css';

const images = [
  '/1st%20hero.jpg',
  '/hero.webp',
  '/hero%202.png'
];

const Hero = ({ lang }) => {
  const t = translations[lang];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroRef = useRef(null);

  useLayoutEffect(() => {
    // Delay timeline initiation natively if the splash screen is aggressively blocking the view
    const isFirstLoad = !sessionStorage.getItem('hasSeenSplash');
    
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1.0 },
        delay: isFirstLoad ? 2.6 : 0 // Wait seamlessly for splash unlock
      });

      // Clear initial pre-render hide logic
      gsap.set('.hero-content', { opacity: 1 });

      tl.from('.hero-headline-1', { opacity: 0, y: 60 })
        .from('.hero-headline-2', { opacity: 0, y: 60 }, '-=0.6') /* Standard 60% overlap hook */
        .from('.hero-sub', { opacity: 0, y: 60 }, '-=0.6')
        .from('.hero-ctas', { opacity: 0, y: 60 }, '-=0.6');
        
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const headlineParts = t.heroHeadline.split('. ');
  const line1 = headlineParts[0] + (headlineParts.length > 1 ? '.' : '');
  const line2 = headlineParts.slice(1).join('. ');

  return (
    <section className="hero" id="home" ref={heroRef}>
      {images.map((img, index) => (
        <div 
          key={img}
          className={`hero-bg ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content" style={{ opacity: 0 }}>
          <h1 className="hero-headline">
            <span className="hero-headline-1" style={{ display: 'block' }}>{line1}</span>
            <span className="hero-headline-2" style={{ display: 'block' }}>{line2}</span>
          </h1>
          <p className="hero-sub">{t.heroSub}</p>
          
          <div className="hero-ctas">
            <Link to="/booking" className="btn-primary hero-btn">
              {t.heroPrimaryCta} <ArrowRight size={18} strokeWidth={2} />
            </Link>
            <a href="#style-finder" className="btn-secondary hero-btn">
              {t.heroSecondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

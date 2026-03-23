import React, { useEffect } from 'react';
import { translations } from '../utils/translations';
import PageMeta from '../components/SEO/PageMeta';
import ServiceCard from '../components/UI/ServiceCard';
import Loyalty from '../components/UI/Loyalty';
import ScrollReveal from '../components/UI/ScrollReveal';

const allServices = [
  {
    id: 1,
    title: 'Knotless Braids',
    price: 'from €120',
    duration: '4-6 hours',
    image: '/knotless%20braids.jpg',
    imageAlt: 'Knotless braids hairstyle — pain-free, lightweight braids by Braids Haven Helsinki',
    scarcity: '2 slots left'
  },
  {
    id: 2,
    title: 'Cornrows / Feed-ins',
    price: 'from €60',
    duration: '1-3 hours',
    image: '/feed%20ins.jpg',
    imageAlt: 'Cornrows and feed-in braids — classic African braiding style in Helsinki',
    scarcity: null
  },
  {
    id: 3,
    title: 'Passion Twists',
    price: 'from €140',
    duration: '5-7 hours',
    image: '/Passion-Twist-Braids.jpeg',
    imageAlt: 'Passion twist braids — bohemian textured protective hairstyle',
    scarcity: 'High demand'
  },
  {
    id: 4,
    title: 'Fulani Braids',
    price: 'from €110',
    duration: '4-5 hours',
    image: '/fulani-braids.jpg',
    imageAlt: 'Fulani braids with intricate patterns and beads — traditional African style',
    scarcity: null
  },
  {
    id: 5,
    title: 'Senegalese Twists',
    price: 'from €130',
    duration: '5-6 hours',
    image: '/Senegalese%20twists.png',
    imageAlt: 'Senegalese twists — sleek rope-like protective hairstyle',
    scarcity: 'Popular'
  }
];

const Services = ({ lang }) => {
  const t = translations[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page">
      <PageMeta
        title="Our Braiding Services & Pricing"
        description="Explore Braids Haven's full menu of African braiding services in Helsinki. Knotless braids from €120, cornrows from €60, passion twists from €140, fulani braids from €110, and senegalese twists from €130."
        path="/services"
      />
      <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <ScrollReveal duration={1}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '16px' }}>{t.servicesTitle}</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--secondary-dark)' }}>{t.servicesPricingNote}</p>
          </div>
        </ScrollReveal>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginBottom: '80px'
        }}>
          {allServices.map((service, index) => (
            <ScrollReveal key={service.id} delay={0.1 * index}>
              <ServiceCard {...service} lang={lang} />
            </ScrollReveal>
          ))}
        </div>
      </div>
      
      <ScrollReveal delay={0.2}>
        <Loyalty lang={lang} />
      </ScrollReveal>
    </div>
  );
};

export default Services;

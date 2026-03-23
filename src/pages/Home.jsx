import React, { useEffect } from 'react';
import { translations } from '../utils/translations';
import PageMeta from '../components/SEO/PageMeta';
import Hero from '../components/UI/Hero';
import OriginStory from '../components/UI/OriginStory';
import HighlightedServices from '../components/UI/HighlightedServices';
import SocialProof from '../components/UI/SocialProof';
import Quiz from '../components/UI/Quiz';
import About from '../components/UI/About';
import FomoToast from '../components/UI/FomoToast';
import ScrollReveal from '../components/UI/ScrollReveal';

const Home = ({ lang }) => {
  const t = translations[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <PageMeta
        title="Premium African Braiding in Helsinki"
        description="Braids Haven offers premium African braiding in Helsinki & Espoo. Knotless braids, cornrows, passion twists, fulani braids & more. Rooted in Accra, brought to Finland. Book your style today."
        path="/"
      />
      
      <Hero lang={lang} />
      
      <ScrollReveal>
        <OriginStory lang={lang} />
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <HighlightedServices lang={lang} />
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <Quiz lang={lang} />
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <SocialProof lang={lang} />
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <About lang={lang} />
      </ScrollReveal>
      
      <FomoToast lang={lang} />
    </div>
  );
};

export default Home;

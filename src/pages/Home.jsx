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
      <OriginStory lang={lang} />
      <HighlightedServices lang={lang} />
      <Quiz lang={lang} />
      <SocialProof lang={lang} />
      <About lang={lang} />
      <FomoToast lang={lang} />
    </div>
  );
};

export default Home;

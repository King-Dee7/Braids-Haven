import { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import LanguageWidget from './components/UI/LanguageWidget';
import SplashScreen from './components/UI/SplashScreen';
import SkipLink from './components/UI/SkipLink';
import SchemaMarkup from './components/SEO/SchemaMarkup';

// Lazy-loaded pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Booking = lazy(() => import('./pages/Booking'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'fi' : 'en'));
  };

  return (
    <div className="app-wrapper">
      <SkipLink />
      <SchemaMarkup />
      <SplashScreen />
      <Navbar lang={lang} toggleLanguage={toggleLanguage} />
      <LanguageWidget lang={lang} toggleLanguage={toggleLanguage} />
      
      <main className="main-content" id="main-content">
        <Suspense fallback={<div className="page-loader" aria-label="Loading page…" />}>
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/services" element={<Services lang={lang} />} />
            <Route path="/booking" element={<Booking lang={lang} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default App;

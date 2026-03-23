import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // Check session storage to only play once per browser session
    if (sessionStorage.getItem('hasSeenSplash')) {
      setShowSplash(false);
      setIsRendered(false);
      return;
    }

    // Lock body scrolling immediately
    document.body.style.overflow = 'hidden';

    // Sequence: 1.2s fade-in + 0.8s hold = 2000ms total
    const timer = setTimeout(() => {
      // Trigger the slide-up fade out sequence via splash-exit class
      setShowSplash(false);
      sessionStorage.setItem('hasSeenSplash', 'true');
      document.body.style.overflow = 'auto'; // Restore scroll

      
      // Physically unmount dom element 600ms later to permit smooth transition
      setTimeout(() => {
        setIsRendered(false);
      }, 600); 
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isRendered) return null;

  return (
    <div className={`splash-overlay ${!showSplash ? 'splash-exit' : ''}`}>
      <div className="splash-content-wrapper">
         <img src="/logo.png" alt="Braids Haven" className="splash-logo" />
         <div className="splash-loading-bar-container">
           <div className="splash-loading-bar-fill"></div>
         </div>
      </div>
    </div>
  );
};

export default SplashScreen;

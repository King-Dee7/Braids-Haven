import React from 'react';
import './LanguageWidget.css';

const LanguageWidget = ({ lang, toggleLanguage }) => {
  return (
    <div className="lang-widget-container">
      <div className="lang-widget-pill">
        <button 
          className={`lang-widget-btn ${lang === 'en' ? 'active' : ''}`}
          onClick={() => { if (lang !== 'en') toggleLanguage(); }}
        >
          EN
        </button>
        <button 
          className={`lang-widget-btn ${lang === 'fi' ? 'active' : ''}`}
          onClick={() => { if (lang !== 'fi') toggleLanguage(); }}
        >
          FI
        </button>
      </div>
    </div>
  );
};

export default LanguageWidget;

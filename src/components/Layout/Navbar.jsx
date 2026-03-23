import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { translations } from '../../utils/translations';
import './Navbar.css';

const Navbar = ({ lang }) => {
  const t = translations[lang];
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navClass = `${isScrolled ? 'scrolled' : 'at-top'} ${location.pathname === '/' ? 'is-home' : 'is-inner'}`;

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar-pill ${navClass}`} role="navigation" aria-label="Main navigation">
        <div className="nav-left">
          <Link to="/" className="brand-text" aria-label="Braids Haven — Home">
            Braids Haven
          </Link>
        </div>

        <div className="nav-center hidden-mobile">
          {location.pathname === '/' ? (
             <a href="#about" className="nav-link">{t.navHome}</a>
          ) : (
             <Link to="/#about" className="nav-link">{t.navHome}</Link>
          )}
          <Link to="/services" className="nav-link">{t.navServices}</Link>
          {location.pathname === '/' ? (
             <a href="#contact" className="nav-link">{t.navContact}</a>
          ) : (
             <Link to="/#contact" className="nav-link">{t.navContact}</Link>
          )}
        </div>

        <div className="nav-right hidden-mobile">
          <Link to="/booking" className="btn-primary">
            {t.navBookNow}
          </Link>
        </div>

        <button 
          className="menu-btn mobile-only" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} className="menu-icon" aria-hidden="true" /> : <Menu size={24} className="menu-icon" aria-hidden="true" />}
        </button>

        <div 
          className={`mobile-menu-panel ${isMobileMenuOpen ? 'open' : ''}`}
          id="mobile-nav-panel"
          role="menu"
          aria-hidden={!isMobileMenuOpen}
        >
          {location.pathname === '/' ? (
            <a href="#about" className="mob-link" role="menuitem" onClick={() => setIsMobileMenuOpen(false)}>{t.navHome}</a>
          ) : (
            <Link to="/#about" className="mob-link" role="menuitem" onClick={() => setIsMobileMenuOpen(false)}>{t.navHome}</Link>
          )}
          <Link to="/services" className="mob-link" role="menuitem" onClick={() => setIsMobileMenuOpen(false)}>{t.navServices}</Link>
          {location.pathname === '/' ? (
            <a href="#contact" className="mob-link" role="menuitem" onClick={() => setIsMobileMenuOpen(false)}>{t.navContact}</a>
          ) : (
            <Link to="/#contact" className="mob-link" role="menuitem" onClick={() => setIsMobileMenuOpen(false)}>{t.navContact}</Link>
          )}
          <Link to="/booking" className="mob-link" role="menuitem" onClick={() => setIsMobileMenuOpen(false)}>{t.navBookNow}</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../../utils/translations';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = ({ lang }) => {
  const t = translations[lang];

  return (
    <footer className="footer" id="contact" role="contentinfo">
      <div className="container footer-content">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-col brand-col">
            <img 
              src="/logo.png" 
              alt="Braids Haven — Premium African Braiding logo" 
              className="footer-logo-mark"
              width="60"
              height="60"
              loading="lazy"
            />
            <div className="footer-brand-name">BRAIDS HAVEN</div>
            <p className="footer-tagline">{t.footerTagline || 'Premium African Braiding'}</p>
          </div>

          {/* Column 2: Contact */}
          <div className="footer-col">
            <h4>{lang === 'fi' ? 'YHTEYSTIETO' : 'CONTACT'}</h4>
            <a href="mailto:hello@braidshaven.fi">Email</a>
            <a href="https://wa.me/358123456789" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>

          {/* Column 3: Socials */}
          <div className="footer-col">
            <h4>{lang === 'fi' ? 'SOME' : 'SOCIALS'}</h4>
            <a href="https://instagram.com/braidshaven.fi" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          </div>

          {/* Column 4: Navigate */}
          <nav className="footer-col" aria-label="Footer navigation">
            <h4>{lang === 'fi' ? 'SIIRRY' : 'NAVIGATE'}</h4>
            <Link to="/">{t.navHome}</Link>
            <Link to="/services">{t.navServices}</Link>
            <Link to="/booking">{t.navBookNow}</Link>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="footer-social-circs" role="list" aria-label="Social media links">
            <a href="https://instagram.com/braidshaven.fi" className="social-circ" aria-label="Follow us on Instagram" target="_blank" rel="noreferrer" role="listitem">
              <Instagram size={18} aria-hidden="true" />
            </a>
            <a href="https://facebook.com" className="social-circ" aria-label="Follow us on Facebook" target="_blank" rel="noreferrer" role="listitem">
              <Facebook size={18} aria-hidden="true" />
            </a>
            <a href="mailto:hello@braidshaven.fi" className="social-circ" aria-label="Send us an email" role="listitem">
              <Mail size={18} aria-hidden="true" />
            </a>
            <a href="https://wa.me/358123456789" className="social-circ" aria-label="Message us on WhatsApp" target="_blank" rel="noreferrer" role="listitem">
              <Phone size={18} aria-hidden="true" />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Braids Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

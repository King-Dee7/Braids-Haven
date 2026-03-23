import React, { useEffect } from 'react';
import { translations } from '../utils/translations';
import PageMeta from '../components/SEO/PageMeta';
import BookingForm from '../components/UI/BookingForm';

const Booking = ({ lang }) => {
  const t = translations[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="booking-page">
      <PageMeta
        title="Book Your Braiding Appointment"
        description="Book your premium African braiding appointment at Braids Haven in Helsinki. Choose from knotless braids, cornrows, passion twists, and more. Easy online booking form — we confirm within 24 hours."
        path="/booking"
      />
      <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <BookingForm lang={lang} />
      </div>
    </div>
  );
};

export default Booking;

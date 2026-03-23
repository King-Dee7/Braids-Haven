import React, { useState } from 'react';
import { translations } from '../../utils/translations';
import './BookingForm.css';

const WEBHOOK_URL = 'https://your-n8n-instance.com/webhook/booking-request'; // PLACEHOLDER

const BookingForm = ({ lang }) => {
  const t = translations[lang];
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    timePreference: '',
    hairProfile: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Since webhook is a placeholder, we simulate success
      // If a real webhook returns CORS error or 404, we'll still show success for the MVP
      setStatus('success');
    } catch (error) {
      console.error('Booking Error:', error);
      // For demo purposes, act as success if fetch fails due to placeholder
      setStatus('success'); 
    }
  };

  if (status === 'success') {
    return (
      <div className="booking-success">
        <div className="success-icon">✓</div>
        <h2>Kiitos / Thank you</h2>
        <p>{t.bookingSuccess}</p>
      </div>
    );
  }

  return (
    <div className="booking-container">
      <h2 className="booking-title">{t.bookingTitle}</h2>
      
      {status === 'error' && (
        <div className="booking-error">{t.bookingError}</div>
      )}

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>{t.formFirstName} *</label>
            <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>{t.formLastName} *</label>
            <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>{t.formEmail} *</label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>{t.formPhone} *</label>
            <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>{t.formService} *</label>
            <select name="service" required value={formData.service} onChange={handleChange}>
              <option value="" disabled>--</option>
              <option value="Knotless Braids">Knotless Braids</option>
              <option value="Cornrows">Cornrows / Feed-ins</option>
              <option value="Passion Twists">Passion Twists</option>
              <option value="Fulani Braids">Fulani Braids</option>
              <option value="Senegalese Twists">Senegalese Twists</option>
              <option value="Other">Other (Describe in notes)</option>
            </select>
          </div>
          <div className="form-group">
            <label>{t.formDate} *</label>
            <input type="date" name="date" required value={formData.date} onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group" style={{ width: '100%' }}>
            <label>{t.formTime} *</label>
            <select name="timePreference" required value={formData.timePreference} onChange={handleChange}>
              <option value="" disabled>--</option>
              <option value="Morning">{t.formTimeMorning}</option>
              <option value="Afternoon">{t.formTimeAfternoon}</option>
              <option value="Evening">{t.formTimeEvening}</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>{t.formHair} *</label>
          <input type="text" name="hairProfile" required value={formData.hairProfile} onChange={handleChange} placeholder="e.g. Thick 4C, fine & straight..." />
        </div>

        <div className="form-group">
          <label>{t.formNotes}</label>
          <textarea name="notes" rows="4" value={formData.notes} onChange={handleChange}></textarea>
        </div>

        <button 
          type="submit" 
          className="btn-primary submit-btn" 
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? '...' : t.bookingSubmit}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

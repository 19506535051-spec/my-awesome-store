import React from 'react';

const ContactForm = () => {
  return (
    <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '12px' }}>
      <h3>Get in Touch</h3>
      <p>Have questions? Fill out the form below and we'll get back to you within 24 hours.</p>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <input type="text" placeholder="Your Name" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        <input type="email" placeholder="Your Email" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        <textarea placeholder="Your Message" rows={4} style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
        <button type="submit" style={{ backgroundColor: '#333', color: '#fff', border: 'none', padding: '1rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;

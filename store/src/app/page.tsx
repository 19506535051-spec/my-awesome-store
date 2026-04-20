import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div>
      <h2>Welcome to our Independent Station!</h2>
      <p>Discover high-quality products curated just for you.</p>
      <section style={{ marginTop: '2rem' }}>
        <h3>Featured Products</h3>
        <p>Check out our latest arrivals below.</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', width: '200px' }}>
                <h4>Smart Watch</h4>
                <p>$299.99</p>
                <button style={{ backgroundColor: '#0070f3', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>View Details</button>
            </div>
            <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', width: '200px' }}>
                <h4>Wireless Headphones</h4>
                <p>$199.50</p>
                <button style={{ backgroundColor: '#0070f3', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>View Details</button>
            </div>
        </div>
      </section>
      <ContactForm />
    </div>
  );
}

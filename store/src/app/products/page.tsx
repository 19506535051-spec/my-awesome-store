import React from 'react';
import productsData from '../../data/products.json';

export default function Products() {
  const { products } = productsData;

  return (
    <div>
      <h2>Our Catalog</h2>
      <p>Browse our extensive range of high-quality items.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3 style={{ margin: '0.5rem 0' }}>{product.name}</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', minHeight: '3rem' }}>{product.description}</p>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#333' }}>${product.price.toFixed(2)}</p>
            <button style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '6px', cursor: 'pointer', transition: 'background-color 0.2s' }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

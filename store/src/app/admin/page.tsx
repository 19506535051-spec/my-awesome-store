import React from 'react';
import productsData from '../../../data/products.json';
export default function Admin() {
  const { products } = productsData;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>Admin Dashboard - Product Management</h2>
      
      <section style={{ marginBottom: '3rem', padding: '2rem', border: '1px solid #eee', borderRadius: '8px' }}>
        <h3>Add New Product</h3>
        <form style={{ display: 'grid', gap: '1rem' }}>
          <input type="text" placeholder="Product Name" style={{ padding: '0.8rem', border: '1px solid #ddd' }} />
          <input type="number" placeholder="Price" style={{ padding: '0.8rem', border: '1px solid #ddd' }} />
          <textarea placeholder="Description" style={{ padding: '0.8rem', border: '1px solid #ddd' }}></textarea>
          <input type="text" placeholder="Category" style={{ padding: '0.8rem', border: '1px solid #ddd' }} />
          <button type="button" style={{ backgroundColor: '#0070f3', color: '#fff', border: 'none', padding: '1rem', borderRadius: '6px', cursor: 'not-allowed' }}>Add Product (Demo Mode)</button>
        </form>
      </section>

      <section>
        <h3>Current Inventory</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#f4f4f4' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>ID</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Price</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>{product.id}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{product.name}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'right' }}>${product.price.toFixed(2)}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                  <button style={{ marginRight: '5px' }}>Edit</button>
                  <button style={{ color: 'red' }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

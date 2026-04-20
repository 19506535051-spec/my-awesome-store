import React from 'react';
import ChatWidget from '../components/ChatWidget';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        <header style={{ backgroundColor: '#333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
          <h1>My Awesome Store</h1>
          <nav>
            <a href="/" style={{ color: '#fff', marginRight: '1rem', textDecoration: 'none' }}>Home</a>
            <a href="/products" style={{ color: '#fff', textDecoration: 'none' }}>Products</a>
          </nav>
        </header>
        <main style={{ padding: '2rem' }}>
          {children}
        </main>
        <ChatWidget />
        <footer style={{ backgroundColor: '#f4f4f4', padding: '1rem', textAlign: 'center', marginTop: '2rem' }}>
          <p>© 2026 My Awesome Store. All rights reserved.</p>
          <p>Contact: support@example.com</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;

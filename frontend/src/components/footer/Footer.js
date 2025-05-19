// src/components/Footer/Footer.js
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ textAlign: 'center', marginTop: '50px', padding: '2rem 0', background: 'var(--dark-color)', color: 'var(--light-color)' }}>
      <p>&copy; {currentYear} Mares Conscientes. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
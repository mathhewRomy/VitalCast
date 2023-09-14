// src/components/Header.js

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <img src="/images/VitalCast.png" alt="Vitalcast Logo" className="app-logo" />
      <h1 className="app-title">Vitalcast</h1>
    </header>
  );
};

export default Header;

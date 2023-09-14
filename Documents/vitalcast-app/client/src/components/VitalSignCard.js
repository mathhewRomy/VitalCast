// src/components/VitalSignCard.js

import React from 'react';
import './VitalSignCard.css';

const VitalSignCard = ({ title, value }) => {
  return (
    <div className="vital-sign-card">
      <h2>{title}</h2>
      <p className="heart-rate-value">{value}</p>
    </div>
  );
};

export default VitalSignCard;

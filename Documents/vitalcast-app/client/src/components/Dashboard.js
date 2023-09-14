// src/components/Dashboard.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import VitalSignCard from './VitalSignCard';
import Header from './Header'; // Import the Header component
import './Dashboard.css';

const Dashboard = () => {
  const [heartRate, setHeartRate] = useState(65);

  const generateHeartRate = () => {
    setHeartRate((prevHeartRate) => (prevHeartRate === 65 ? 80 : 65));
  };

  useEffect(() => {
    const intervalId = setInterval(generateHeartRate, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const oxygenRate = 98;
  const bloodPressure = '120/80';
  const ecgData = 'Normal';

  return (
    <div>
      {/* Include the Header component */}
      <Header />
      <div className="dashboard">
        {/* Wrap each VitalSignCard in a Link component */}
        <Link to="/heart-rate">
          <VitalSignCard title="Heart Rate" value={heartRate} />
        </Link>
        <Link to="/oxygen-rate">
          <VitalSignCard title="Oxygen Rate" value={oxygenRate} />
        </Link>
        <Link to="/blood-pressure">
          <VitalSignCard title="Blood Pressure" value={bloodPressure} />
        </Link>
        <Link to="/ecg">
          <VitalSignCard title="ECG" value={ecgData} />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

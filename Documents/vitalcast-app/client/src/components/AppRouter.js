// src/components/AppRouter.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import HeartRateComponent from './HeartRateComponent';
import OxygenRateComponent from './OxygenRateComponent';
import BloodPressureComponent from './BloodPressureComponent';
import ECGComponent from './ECGComponent'; // Import other route components

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/heart-rate" element={<HeartRateComponent />} />
      <Route path="/oxygen-rate" element={<OxygenRateComponent />} />
      <Route path="/blood-pressure" element={<BloodPressureComponent />} />
      <Route path="/ecg" element={<ECGComponent />} />
      {/* Define additional routes as needed */}
    </Routes>
  );
};

export default AppRouter;

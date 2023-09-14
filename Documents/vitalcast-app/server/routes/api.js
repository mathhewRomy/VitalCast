// server/routes/api.js

const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// Fetch all patients
router.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Add a new patient
router.post('/patients', async (req, res) => {
  const { heartRate, oxygenRate, bloodPressure, ecgData } = req.body;

  try {
    const newPatient = new Patient({
      heartRate,
      oxygenRate,
      bloodPressure,
      ecgData,
    });

    await newPatient.save();
    res.json(newPatient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Define other CRUD operations as needed

module.exports = router;

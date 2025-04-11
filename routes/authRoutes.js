const express = require('express');
const router = express.Router();
const user = require('../models/user');

// Register new user
router.post('/register', async (req, res) => {
  const { fullName, city, pinCode, email, mobile, password } = req.body;

  try {
    // Check if email already exists
    const existinguser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const newUser = new user({ fullName, city, pinCode, email, mobile, password });
    await newuser.save();

    res.status(201).json({ message: 'user registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await user.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const { password: pwd, ...userWithoutPassword } = user._doc;

    res.status(200).json({ message: 'Login successful', user: userWithoutPassword });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;

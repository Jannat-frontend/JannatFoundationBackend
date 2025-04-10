const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();
const Payment = require('../models/Payment'); // New model
const User = require("../models/user");

require('dotenv').config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// ✅ Create Order
router.post('/create-order', async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // Convert to paise
    currency: "INR",
    receipt: `receipt_order_${Math.floor(Math.random() * 1000000)}`
  };

  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Order creation failed', error: err.message });
  }
});

router.post('/save-payment', async (req, res) => {
  try {
    const { paymentId, orderId, email, mobile } = req.body;


    // 🔍 Find user in DB by email to fetch UPI ID
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const upiId = user.upi || ""; // fallback if not present

    const payment = new Payment({
      paymentId,
      orderId,
      email,
      mobile,
      upiId
    });

    await payment.save();
    res.status(201).json({ message: 'Payment details saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to save payment details', error: err.message });
  }
});

module.exports = router;

const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  paymentId: String,
  orderId: String,
  email: String,
  mobile: String,
  upiId: String, // ✅ Required for storing UPI
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', paymentSchema);


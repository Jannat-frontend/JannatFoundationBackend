const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: String,
  city: String,
  pinCode: String,
  email: String,
  mobile: String,
  password: String,
  score: Number,
  status: String,
});

// Prevent OverwriteModelError
module.exports = mongoose.models.user || mongoose.model('user', userSchema);

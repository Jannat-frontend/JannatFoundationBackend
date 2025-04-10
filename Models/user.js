// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: String,
  city: String,
  pinCode: String,
  email: String,
  mobile: String,
  password: String,
  score: Number,
  status: String
});

module.exports = mongoose.model('User', userSchema);

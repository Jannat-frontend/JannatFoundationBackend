const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  pinCode: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  upi: {
    type: String,
    required: true
  }
}, { timestamps: true }); // ✅ put this after all fields are done

// ✅ Prevent model overwrite error
module.exports = mongoose.models.User || mongoose.model("User", userSchema);

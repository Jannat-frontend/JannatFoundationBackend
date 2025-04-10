const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['Paid', 'Pending'],
    default: 'Pending'
  },
  upiId: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.models.Leaderboard || mongoose.model('Leaderboard', leaderboardSchema);

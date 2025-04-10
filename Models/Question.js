const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [
    {
      option: { type: String },
      isCorrect: { type: Boolean, default: false }
    }
  ],
  difficulty: { type: String, enum: ['easy', 'hard'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);

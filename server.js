
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const questionRoutes = require('./routes/questionRoutes');
const paymentRoutes = require('./routes/paymentRoutes');


 
const app = express();

app.use(cors({
  origin: 'https://jannatfoundationquiz.vercel.app', // your frontend Vercel domain
  credentials: true
}));


 
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/payment', paymentRoutes);



// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {console.log('✅ MongoDB connected successfully');})
.catch((err) => {console.error('❌ MongoDB connection error:', err);});


const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

const leaderboardRoutes = require('./routes/leaderboardRoutes');
app.use('/api/leaderboard', leaderboardRoutes);










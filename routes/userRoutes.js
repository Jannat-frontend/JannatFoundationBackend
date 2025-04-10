const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  res.send('User routes working!');
});

module.exports = router;

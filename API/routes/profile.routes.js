const express = require('express');
const router = express.Router();

// Mocked data 
router.get('/', (req, res) => {

  const profile = {
    name: "tim",
    role: "user",
    phone: "0612345678",
  }

  res.json(profile)
});

module.exports = router;
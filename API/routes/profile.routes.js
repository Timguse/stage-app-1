const express = require("express");
const router = express.Router();

// Mocked data 
router.get("/tim", (req, res) => {

    const profile = {
        name: "Tim Guse",
        role: "user",
        email: "tguse@gmail.com",
        phone: "0612345678",
    };

    res.json(profile);
});

module.exports = router;
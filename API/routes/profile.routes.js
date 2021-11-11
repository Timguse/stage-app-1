const express = require("express");
const router = express.Router();

// Mocked data 
router.get("/tim", (req, res) => {

    const profile = {
        name: "Tim Guse",
        role: "user",
        email: "tguse@gmail.com",
        phone: "0612345678",
        address: "Lambertus hortensiuslaan",
        postcode: "1402 sw",
        city: "Bussum",
    };

    res.json(profile);
});

module.exports = router;

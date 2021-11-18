const express = require("express");
const router = express.Router();

// Mocked data 
router.get("/shop", (req, res) => {

    const product = {
        Product1: "shirt",
        Prijs: "19,95",
       
    };

    res.json(product);
});

module.exports = router;


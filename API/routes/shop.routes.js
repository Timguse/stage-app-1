const productList = require("../producten/productlist");

const express = require("express");
const router = express.Router();


// Mocked data 
router.get("/:category", (req, res) => {

    const category = req.params.category;

    const output = productList[category]; 

    res.json(output);
});

module.exports = router;                   


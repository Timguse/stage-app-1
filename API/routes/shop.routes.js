const productList = require("../producten/productlist");

const express = require("express");
const router = express.Router();


// all products
router.get("/products", (req, res) => {

    const products = productList;

    res.json(products);
});

// date per category
router.get("/:category", (req, res) => {

    const category = req.params.category;

    const output = productList[category]; 

    res.json(output);
});


module.exports = router;                   


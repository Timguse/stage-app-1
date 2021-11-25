const express = require("express");
const router = express.Router();

router.use("/profile", require("./routes/profile.routes.js"));
router.use("/shop", require("./routes/shop.routes.js"));

module.exports = router;
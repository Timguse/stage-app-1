const express = require("express");
const router = express.Router();

router.use("/profile", require("./routes/profile.routes.js"));

module.exports = router;
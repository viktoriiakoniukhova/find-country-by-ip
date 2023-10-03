const express = require("express");
const getCountryByIP = require("../controller/ipCtrl");
const router = express.Router();

router.get("/country", getCountryByIP);

module.exports = router;

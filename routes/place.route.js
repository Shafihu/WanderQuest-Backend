const express = require("express");
const router = express.Router();

const getPlaces = require("../controllers/place.controller.js");

router.get("/", getPlaces);

module.exports = router;

const Place = require("../models/place.model");

const getPlaces = async (req, res) => {
  try {
    const places = await Place.find({});
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getPlaces;

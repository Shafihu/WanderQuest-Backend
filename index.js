require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const placeRoute = require("./routes/place.route.js");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

//Middleware allow use of forms with express
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/places", placeRoute);

// Basic API route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;

// Connect to mongodb
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database Connected!");

    // Initialize Server
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(() => console.log("Connection Failed!"));

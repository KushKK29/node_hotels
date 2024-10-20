var mongoose = require("mongoose");
require('dotenv').config();
var mongooseUrl = process.env.DB_URL;

// Set up MongoDB connection without deprecated options
mongoose.connect(mongooseUrl);

// Get the default connection
const db = mongoose.connection;

// Define event listeners
db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("MongoDB connection error: ", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

module.exports = db;

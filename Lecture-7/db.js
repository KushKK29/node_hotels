const mongoose = require("mongoose");

// MongoDB URL
const mongooseUrl = "mongodb://127.0.0.1:27017/hotels";

// Set up MongoDB connection
mongoose.connect(mongooseUrl);

// Get the default connection
const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("MongoDb connection error: ", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Export the database connection
module.exports = db;

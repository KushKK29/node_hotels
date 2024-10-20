var mongoose = require("mongoose");
var mongooseUrl = "mongodb://127.0.0.1:27017/mydatabase";

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

// Disconnect after 5 seconds (for demonstration)
// setTimeout(() => {
//   console.log("Disconnecting from MongoDB...");
//   mongoose.disconnect();
// }, 5000);



// Export the db connection for use in other modules
module.exports = db;

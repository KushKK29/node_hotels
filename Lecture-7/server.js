const express = require("express");
const app = express();
const db = require("./db"); // Ensure database connection is imported
const Person = require("./models/person"); // Import the Person model

// Root route
app.get("/", function (req, res) {
  res.send("Hello ji, backend ki duniya me swagat hai");
});

// Example route to retrieve all Persons (from MongoDB)
app.get("/persons", async (req, res) => {
  try {
    const persons = await Person.find(); // Fetch all persons from DB
    res.json(persons); // Send data as JSON
  } catch (err) {
    res.status(500).send("Error retrieving persons: " + err.message);
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// Error handling middleware (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

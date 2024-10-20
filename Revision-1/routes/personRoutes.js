const express = require("express");
const router = express.Router();
const Person = require("../models/person");
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data saved");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// parameterised url
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; // it mainly extracts the work type form the url
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid Work Type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internet Server Error" });
  }
});

// ab ye update ke liye
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;

    // yaha 2 versions hote hai ek update hone se phelee
    // doosra update hone ke baad

    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, // iska matlab ye ki ye update hone ke baad chalega
        runValidators: true, // iska mtlb ye ki mongoose khud se hi check karega saari validations
      }
    );
    // ye case batata hai ki person ki hi found nahi hui
    // person not found
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internet Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personID = req.params.id;
    const response = await Person.findByIdAndDelete(personID); // Corrected method name

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("data is deleted");
    res.status(200).json({ message: "Person data deleted successfully" }); // Corrected response status and message
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" }); // Corrected typo
  }
});

module.exports = router;

// console.log(22);
// var add = function (a, b) {
//   return a + b;
// };

// function add(a, b) {
//     return a + b;
// }

// const add = (a, b) => {
//     return a + b;
// }

// var add = (a, b) => a + b;

// console.log(add(2, 3));

// call-back function kya hota hai
// vo function jisko koi kaam poora hone ke baad bulaya jata hai

// function callback() {
//   console.log("Work is done");
// }

// const add = (a, b, callback) => {
//   var result = a + b;
//   console.log(result);
//   callback();
// };

// add(2, 5, callback);

// add(2, 3, () => {
//   console.log("Mere parent ka kaam ho gaya");
// });

const express = require("express");
const app = express();
const db = require("./db");
const Person = require("./models/person");

require('dotenv').config();

const Menu = require("./models/menu");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body

app.get("/", function (req, res) {
  res.send("Hello duniya");
});

// this is the complete [POST] route to add aperson
// app.post("/person", (req, res) => {
//   const data = req.body; // assuming that the rquest body contais the person data

//   // create a new person documnet using the mongoose model
//   const newPerson = new Person(data); // aise yaha data ko directly paas kar sakte hai

//   // newPerson.name = data.name;
//   // newPerson.age = data.age;
//   // newPerson.mobile = data.mobile;
//   // newPerson.email = data.email;
//   // newPerson.address = data.address;
//   // newPerson.salary = data.salary;

//   // save the new person to the database
//   newPerson.save((error, savedPerson) => {
//     if (error) {
//       console.log("error on saving person data");
//       res.status(500).json({ error: "internet server error" });
//     } else {
//       console.log("data saved successfully");
//       res.status(200).json(savedPerson);
//     }
//   });
// });

//  AB yahi sab karenge using async-n-await
// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body;
//     const newPerson = new Person(data);
//     const response = await newPerson.save();
//     console.log("data saved");
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // now ab nikalna hai data database mese
// app.get("/person", async (req, res) => {
//   try {
//     const data = await Person.find();
//     console.log("data saved");
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// creating the request for the menu
// app.post("/menu", async (req, res) => {
//   try {
//     const data = req.body;
//     const newitem = new Menu(data);
//     const response = await newitem.save();
//     console.log("data saved");
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.get("/menu", async (req, res) => {
//   try {
//     const data = await Menu.find();
//     console.log("data saved");
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// parameterised url
// router.get("/person/:workType", async (req, res) => {
//   try {
//     const workType = req.params.workType; // it mainly extracts the work type form the url
//     if (workType == "chef" || workType == "manager" || workType == "waiter") {
//       const response = await Person.find({ work: workType });
//       console.log("response fetched");
//       res.status(200).json(response);
//     } else {
//       res.status(404).json({ error: "Invalid Work Type" });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internet Server Error" });
//   }
// });

// import the router files
const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

const menuRoutes = require("./routes/menuRoutes");
app.use("/menu", menuRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

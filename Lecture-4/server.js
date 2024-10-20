const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello ji backend ki duniya me swagat hai");
});

app.get("/chicken", function (req, res) {
  res.send("sure sir, i will serve a delightful piece of chicken");
});

app.post("/info", (req, res) => {
  res.send("daata is saved");
});

app.listen(3000, () => {
  console.log("port listening");
});

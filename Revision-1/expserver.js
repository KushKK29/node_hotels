const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello duniya");
});

app.listen(5000);

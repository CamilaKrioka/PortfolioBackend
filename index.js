const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server on : ${port}`);
});
app.get("/", (req, res) => {
  res.json(about);
});

app.get("/about", (req, res) => {
  res.send("funciona");
});

app.get("/portfolio", (req, res) => {
  res.json(portfolio);
});

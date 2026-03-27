const bodyParser = require("body-parser");
const express = require("express");

const fs = require("fs");
const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

const readData = () => {
  const data = fs.readFileSync("./data.json");
  return JSON.parse(data)
};

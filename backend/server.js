const express = require("express");
const dotenv = require("dotenv");

const products = require("./data/products");

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Naqsh, your husband ji loves you more than anything!");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  console.log(req.params.id);
  const product = products.find((product) => product._id === req.params.id);
  console.log(product);
  res.json(product);
});

const PORT = process.env.PORT || 4100;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);

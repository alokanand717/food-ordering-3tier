const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// Get all orders
app.get("/orders", (req, res) => {
  db.query("SELECT * FROM orders", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Place an order
app.post("/orders", (req, res) => {
  const { item } = req.body;
  db.query(
    "INSERT INTO orders (item) VALUES (?)",
    [item],
    () => res.send("Order placed")
  );
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});



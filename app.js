"use strict";

// Setup
const express = require("express");
const app = express();
const port = 3000;

// App settings
app.use(express.json());

// Routes

app.post("/", (req, res) => {
  const numbers = req.body.totalNums;
  const pool = req.body.totalPool;
  let generatedNumbers = [];

  while (generatedNumbers.length < numbers) {
    const randomNumber = Math.floor(Math.random() * pool) + 1; // Generates an integer based on size of pool
    if (!generatedNumbers.includes(randomNumber)) {
      generatedNumbers.push(randomNumber);
    }
  }

  console.log(generatedNumbers);
  res.json({
    generatedNumbers: generatedNumbers,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

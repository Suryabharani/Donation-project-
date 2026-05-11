
// server.js
const express = require('express');
const app = express();

app.use(express.json());

let campaigns = [];

app.get('/campaigns', (req, res) => {
  res.json(campaigns);
});

app.post('/campaigns', (req, res) => {
  campaigns.push(req.body);
  res.send("Added");
});

app.listen(5000);

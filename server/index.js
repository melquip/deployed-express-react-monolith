
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const friends = [
  { id: 1, name: 'Shaun' },
  { id: 2, name: 'Megan' },
  { id: 3, name: 'Pere' },
];

const reactApp = path.resolve('./client/build/index.html');
const reactAppAssets = path.resolve('./client/build');
app.use(express.static(reactAppAssets));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(reactApp);
});
app.get('/api/friends', (req, res) => {
  res.json(friends);
});

module.exports = app;

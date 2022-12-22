const express = require('express');
const path = require('path');

const app = express();

app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, '/form.html'));
});

app.get('/another-page', (req, res) => {
  res.sendFile(path.join(__dirname, '/another-page.html'));
});

app.get('/site-tracking', (req, res) => {
  res.sendFile(path.join(__dirname, '/site-tracking.html'));
});

app.get('/some-page', (req, res) => {
  res.sendFile(path.join(__dirname, '/some-page.html'));
});

app.listen(3000, () => {
  console.log('Server started on 3000');
});

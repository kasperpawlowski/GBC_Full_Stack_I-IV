var express = require('express');
var app = express();

app.get('/html', (req, res) => {
  res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/json', (req, res) => {
  res.json({firstname: 'John', lastname: 'Smith'});
});

app.get('/toronto*team', (req, res) => {
  res.send('<html><head></head><body><h1>Go Toronto!</h1></body></html>');
});

app.listen(3000, () => {
  console.log('listening on *:3000');
});

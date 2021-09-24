var express = require('express');
var app = express();

app.listen(3000);

var requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
}

app.use(requestTime);

app.get('/greet', (req, res) => {
    console.log('GET received: ', req.requestTime);
    res.send('GET: hello world!');
});

app.post('/greet', (req, res) => {
    console.log('POST received: ', req.requestTime);
    res.send('POST: hello world!');
});

app.put('/greet', (req, res) => {
    console.log('PUT received: ', req.requestTime);
    res.send('PUT: hello world!');
});

app.delete('/greet', (req, res) => {
    console.log('DELETE received: ', req.requestTime);
    res.send('DELETE: hello world!');
});
const http = require('http');
const URL = require('url').URL;

const hostname = '127.0.0.1';
const port = 3000;
let amount = 0;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('OK!');

    const url = new URL(req.url, `http://${hostname}:${port}/`);

    if(url.pathname === "/") {
        console.log('Please play or spin');
    } else if(url.pathname === "/play") {
        amount = url.searchParams.get('amount');
        console.log(`playing... amount: ${amount}`);
    } else if(url.pathname === "/spin") {
        console.log('spinning...');

        if(amount !== 'max') {
            console.log(`amount lost: ${amount}`);
        } else {
            server.emit('jackpot');
        }
    }
});

server.on('jackpot', () => {
    console.log('Jackpot!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
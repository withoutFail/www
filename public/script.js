const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

//let data = fs.readFileSync('index.html');
let textContent = fs.readFileSync('input.txt');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text');
  res.end(textContent);
  console.log('worked');
});

server.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}!`);
});


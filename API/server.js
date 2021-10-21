const http = require('http');
const express = require('express');
const app = express();

const router = require('./router.js');

const hostname = 'localhost';
const port = 9999 || 12000;

app.use('/', router);

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

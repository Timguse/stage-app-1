const http = require("http");
const express = require("express");
const app = express();
const cors = require('cors');

const router = require("./router.js");

const hostname = "localhost";
const port = 9999 || 12000;

const corsConfig = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsConfig));

app.use("/", router);

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

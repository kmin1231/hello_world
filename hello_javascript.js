// hello_javascript.js

const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, world!");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

// node hello_javascript.js
// curl localhost:3000

// [version info] node v20.12.2; npm 10.5.0
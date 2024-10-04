"use strict";
// hello_typescript_ts.js
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var hostname = "localhost";
var port = 3000;
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, world!");
});
server.listen(port, hostname, function () {
    console.log("Server running at http://".concat(hostname, ":").concat(port));
});

// node hello_typescript_ts.js
// curl localhost:3000
// [version info] node v20.12.2; npm 10.5.0; express@4.21.0; typescript@5.6.2
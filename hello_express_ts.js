"use strict";
// hello_express_ts.js
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
app.get("/", function (req, res) {
    res.send("Hello, world!");
});
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});

// node hello_express_ts.js
// curl localhost:3000

// [version info] node v20.12.2; npm 10.5.0; npx 10.5.0; express@4.21.0
// [version info] typescript@5.6.2; ts-node@10.9.2; @types/express@5.0.0
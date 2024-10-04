// hello_typescript_ts.ts

import * as http from "http";

const hostname: string = "localhost";
const port: number = 3000;

const server: http.Server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, world!")
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

// ts-node hello_typescript_ts.ts
// curl localhost:3000

// [version info] node v20.12.2; npm 10.5.0; typescript@5.6.2; ts-node@10.9.2

// tsc hello_typescript_ts.ts -> hello_typescript_ts.js
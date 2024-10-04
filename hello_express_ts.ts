// hello_express_ts.ts

import express, { Request, Response } from "express";
// import * as express from "express";
// import { Request, Response } from "express";

const app = express();
const port: number = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, world!")
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// npm install @types/express
// ts-node hello_express_ts.ts
// curl localhost:3000

// npx ts-node hello_express_ts.ts

// [version info] node v20.12.2; npm 10.5.0; npx 10.5.0; express@4.21.0
// [version info] typescript@5.6.2; ts-node@10.9.2; @types/express@5.0.0
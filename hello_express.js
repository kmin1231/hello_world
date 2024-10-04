// hello_express.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// npm install express
// node hello_javascript.js
// curl localhost:3000

// [version info] node v20.12.2; npm 10.5.0; express@4.21.0
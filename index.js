// console.log("Morgen WDG#004");

//CommonJS
// const os = require("os");
// console.log(os.freemem());

//ES Modules --> erfordert type: module im package.json
import os from "os";
console.log(os.freemem());

import fs from "fs";
fs.writeFile("mynewfile3.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

import http from "http";
const port = process.env.PORT || 5000;

const requestListener = function (req, res) {
  res.writeHead(200);   
  res.end("<h1>Hello, World!</h1>");
};

const server = http.createServer(requestListener);
server.listen(port);

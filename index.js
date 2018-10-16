const express = require("express");

//The express function creates express app
const app = express();

//specifies port and type of server
const port = "3000";
var http = require("http");

// app.get() creates a route, sends a responsie
app.get("/", (req, res) => res.json({ name: "Cian" }));

// Create a http server on localhost:3000
http
  .createServer(app)
  .listen(port, () => console.log(`app is running on ${port}`));

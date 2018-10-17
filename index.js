//Import and create express app
const express = require("express"),
  bodyParser = require("body-parser"),
  todoRoutes = require("./routes/todo"),
  app = express(),
  port = "3000";

// Grants access to the content of a POST request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Grants access to the views folder in the directory (__dirname)
app.use(express.static(__dirname + "/views"));

// Grants access to the public folder in the directory (__dirname)
app.use(express.static(__dirname + "/public"));

// app.get() creates a route, sends a responsie
app.get("/", (req, res) => res.sendfile("index.html"));

// The base url for the routes imported in the todoroutes variable
app.use("/api/todos", todoRoutes);

// Start server on localhost:3000
app.listen(port, () => console.log(`app is running on ${port}`));

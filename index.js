//Import and create express app
const express = require("express"),
  bodyParser = require("body-parser"),
  todoRoutes = require("./routes/todo"),
  app = express(),
  port = "3000";

// Grants access to the content of a POST request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get() creates a route, sends a responsie
app.get("/", (req, res) => res.json({ name: "Cian" }));

// The base url for the routes imported in the todoroutes variable
app.use("/api/todos", todoRoutes);

// Start server on localhost:3000
app.listen(port, () => console.log(`app is running on ${port}`));

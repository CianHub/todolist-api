//Import Mongoose
let mongoose = require("mongoose");

// Create a schema for data to follow
let todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name cannot be blank"
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

// Define the Todo model and assign it the todoSchema
let Todo = mongoose.model("Todo", todoSchema);

//Allow the Todo model to be accessed by other js files
module.exports = Todo;

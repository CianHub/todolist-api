//Import Mongoose
let mongoose = require("mongoose");

//Enable debug mode
mongoose.set("debug", true);

//Connect to MongoDB database
mongoose.connect("mongodb://admin:Komplete8@ds044787.mlab.com:44787/todo");

//Enable promises to be used with Mongoose
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");

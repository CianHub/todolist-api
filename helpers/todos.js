//Import models folder
const db = require("../models");

//Get instances of Todo model
exports.getToDos = (req, res) => {
  db.Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.send(err));
};

// Create Instance of Todo Model
exports.addToDo = (req, res) => {
  db.Todo.create(req.body)
    .then(newTodo => res.status(201).json(newTodo))
    .catch(err => res.send(err));
};

// Find a Todo
exports.findToDo = (req, res) => {
  db.Todo.findById(req.params.todoId)
    .then(foundtodo => res.json(foundtodo))
    .catch(err => res.send(err));
};

//Update a Todo
exports.updateToDo = (req, res) => {
  db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
    .then(todo => res.json(todo))
    .catch(err => res.send(err));
};

//Delete a Todo
exports.deleteTodo = (req, res) => {
  db.Todo.deleteOne({ _id: req.params.todoId })
    .then(() => res.send("Successfully Deleted"))
    .catch(err => res.send(err));
};

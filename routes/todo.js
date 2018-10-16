//Import and create router
const express = require("express"),
  db = require("../models"),
  helpers = require("../helpers/todos"),
  router = express.Router();

//Routes
router
  .route("/")
  .get(helpers.getToDos)
  .post(helpers.addToDo);

router
  .route("/:todoId")
  .put(helpers.updateToDo)
  .delete(helpers.deleteTodo);

//Basically exports the routes in this file
module.exports = router;

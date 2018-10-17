const getData = () => {
  // Retrieves API data and displays it on page
  axios("/api/todos")
    .then(req => ReadTodos(req.data))
    .catch(err => console.log(err));
};

// Read Functionality
const ReadTodos = req => {
  //displays the retrieved data
  req.forEach(todo => {
    addTodo(todo);
  });
};

// Create Functionality
document.getElementById("todoInput").addEventListener("keypress", () => {
  if (event.which === 13) {
    createTodo();
  }
});

//Update and Delete Functionality
document.addEventListener(
  "click",
  event => {
    //Prevent accidents :)
    event.stopPropagation();

    // If delete
    if (event.target.matches("span")) {
      deleteTodo(event);

      //If update
    } else if (event.target.matches("li")) {
      updateTodo(event);
    }
  },
  false
);

const addTodo = todo => {
  // Create elements

  const item = document.createElement(`li`),
    delBtn = document.createElement(`span`),
    x = document.createTextNode("x"),
    node = document.createTextNode(todo.name),
    list = document.getElementById("list");
  id = todo._id;

  // Assign data id and put item together
  delBtn.setAttribute("data-id", id);
  item.appendChild(delBtn).appendChild(x);
  item.classList.add("task");

  // Check how item should display
  if (todo.completed) {
    item.classList.add("done");
  }

  //Add item to page
  list.appendChild(item).appendChild(node);
};

const createTodo = () => {
  //Creates a new item

  //Get name of item
  let userInput = document.getElementById("todoInput").value;

  //Create Item
  axios
    .post("/api/todos", { name: userInput })
    .then(response => addTodo(response.data))
    .then((document.getElementById("todoInput").value = ""))
    .catch(err => console.log(err));
};

const updateTodo = event => {
  //Get URL to send request to
  url = "api/todos/" + event.target.firstChild.dataset.id;

  //Toggle the done class
  event.target.classList.toggle("done");

  //Update database
  if (event.target.classList.contains("done")) {
    axios.put(url, { completed: "true" });
  } else {
    axios.put(url, { completed: "false" });
  }
};

const deleteTodo = event => {
  //Get URL to send request to
  url = "api/todos/" + event.target.dataset.id;

  //Doublecheck if user wants to delete item and delete
  if (confirm("Are you sure you want to delete this?")) {
    axios.delete((url = "api/todos/" + event.target.dataset.id));
    event.target.parentNode.remove();
  }
};
getData();

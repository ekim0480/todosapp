var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];



// Initially emptying the list every time we run "renderTodos"
function renderTodos() {
  todoList.innerHTML = "";
// todoCountSpan should show the total count of todos on the page.
  todoCountSpan.textContent = todos.length;
// Inside of your render function you will also need a for loop.
  for (var i = 0; i < todos.length; i++) {
    // Create an 'li' element for each index of the array.
    var li = document.createElement("li");
    // Creat an 'li' element for each index of the array.
    li.innerText = todos[i];  //  can also do li.textContent
    
    //   * When a new todo is created, add a `data-index` for each `li`.
    li.setAttribute("data-index", i);

    //   * Generate a button that says "Complete" and append it to your `li`.
    var button = document.createElement("button");  // creating new button element.
    button.textContent = "Complete";  // Set button text to the string "Complete"
    li.appendChild(button);  // Adding the button variable to end of each li item.

    // * Add an event listener so that when a user clicks the Complete button, it accesses the `data-index` value and removes that todo element from the list.
    button.addEventListener("click", function(event) {
      // Listen for clicks on each button... then...
      // access the data-index value
    var todoIndex = parseInt(event.target.parentElement.getAttribute("data-index"));
      // creating new variable todoIndex where the button click will target the PARENT element (which contains the data-index value, not the button itself, it has no data-index value) and retrieving its attribute "data-index".
    todos.splice(todoIndex, 1)  // google splice for syntax =D
    
    renderTodos();  // rerun to update the list display
    });
    // ## Hint

    // * You can use `setAttribute` for `data-index` and `splice` to remove your todo from the list.

    // The new 'li' should be appended to the 'ul' provided.

    todoList.appendChild(li);
  }
};

// Add an event listener so that when a user hits enter, the value from the todo input field is pushed to our todo array.
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();  // preventing auto refresh on submit
  var newTodoText = todoInput.value;  // setting a new variable for todoinput.value to recall more easily, also optimizes performance

  // Make sure that empty values are not pushed to the array.
  if (todoInput.value === "") {
    return;  // if input is blank.. return aka do nothing
  }
  todos.push(newTodoText);  // add todoInput.value, now revariabled to newTodoText, to the todos array

  // Once the value has been added to the array, clear the input field and re-render the todo list.
  todoInput.value = "";
  // rerender
  renderTodos();  // renderTodos() refers to initial function at beginning.
});

renderTodos();
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
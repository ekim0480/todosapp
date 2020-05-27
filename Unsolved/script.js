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

renderTodos();
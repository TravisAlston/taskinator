let taskItemEl = document.createElement("li");
taskItemEl.textContent = "hello";
taskItemEl.appendChild(taskItemEl);
taskItemEl.className = "task-item";

let tasksToDoEl = document.querySelector('#tasks-to-do');

var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

buttonEl.addEventListener("click, createTaskHandler");
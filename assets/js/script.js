let taskItemEl = document.createElement("li");
taskItemEl.textContent = "hello";
taskItemEl.appendChild(taskItemEl);
taskItemEl.className = "task-item";

let tasksToDoEl = document.querySelector('#tasks-to-do');

let formEl= document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("click, createTaskHandler");
let formEl= document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();
    let taskNameInput= doncument.querySelector("input[name= 'task-name']").value;
    let taskTypeInput= document.querySelector("select[name='task-type']").value;

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    let taskInfoEl= document.createElement("div");
    taskInforEl.className= "task-info";

    taskInfoEl.innerHTML= "<h3 class= 'task-name'>" + taskNameInput + "</h3><span class= 'task-type'>" + taskTypeINput + "</span>";
    listItemEl.appendChild(taskInfoEl);

    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("click, createTaskHandler");
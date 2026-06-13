let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }
    tasks.push(task);
localStorage.setItem("tasks", JSON.stringify(tasks));

    let li = document.createElement("li");
    li.textContent = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = " Delete";
    deleteBtn.onclick = function() {
        li.remove();
    };

    let editBtn = document.createElement("button");
    editBtn.textContent = " Edit";
    editBtn.onclick = function() {
        let newTask = prompt("Edit Task", task);
        if (newTask) {
            li.firstChild.textContent = newTask;
        }
    };

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
window.onload = function() {
    tasks.forEach(function(task) {
        let li = document.createElement("li");
        li.textContent = task;
        document.getElementById("taskList").appendChild(li);
    });
};
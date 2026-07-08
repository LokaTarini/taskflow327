let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask() {
  let title = document.getElementById("title").value.trim();
  let description = document.getElementById("description").value.trim();
  let dueDate = document.getElementById("dueDate").value;
  let status = document.getElementById("status").value;

  if (title === "") {
    alert("Please enter task title");
    return;
  }

  let task = {
    title: title,
    description: description,
    dueDate: dueDate,
    status: status,
  };

  tasks.push(task);

  saveTasks();

  displayTasks();

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("dueDate").value = "";
  document.getElementById("status").value = "Todo";
}

function displayTasks() {
  let taskList = document.getElementById("taskList");

  taskList.innerHTML = "";

  tasks.forEach(function (task, index) {
    let div = document.createElement("div");

    div.className = "task";

    div.innerHTML =
      "<h3>" +
      task.title +
      "</h3>" +
      "<p><b>Description:</b> " +
      task.description +
      "</p>" +
      "<p><b>Due Date:</b> " +
      task.dueDate +
      "</p>" +
      "<p><b>Status:</b> " +
      task.status +
      "</p>" +
      "<button onclick='updateTask(" +
      index +
      ")'>Update Status</button>" +
      "<button onclick='deleteTask(" +
      index +
      ")'>Delete</button>";

    taskList.appendChild(div);
  });
}

function updateTask(index) {
  if (tasks[index].status === "Todo") tasks[index].status = "In Progress";
  else if (tasks[index].status === "In Progress") tasks[index].status = "Done";
  else tasks[index].status = "Todo";

  saveTasks();

  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);

  saveTasks();

  displayTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

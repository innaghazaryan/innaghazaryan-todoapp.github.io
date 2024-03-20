const plus = document.querySelector(".plus-icon");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
function addTask() {
  if (taskInput.value === "") {
    alert("The task is empty");
  } else {
    const taskText = taskInput.value.trim();
    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    taskList.append(newTask);
    newTask.classList.add("task");
    // <input type="checkbox"></input>;
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    newTask.prepend(checkbox);
    checkbox.classList.add("task-square");
    const newTrash = document.createElement("i");
    newTask.append(newTrash);
    newTrash.classList.add("fi", "fi-rs-trash", "trash-icon");
    taskInput.value = "";
  }
}
plus.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("trash-icon")) {
    e.target.parentElement.remove();
  }
});
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("task")) {
    const checkbox = e.target.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    if (checkbox.checked) {
      e.target.classList.add("checked-task");
    } else {
      e.target.classList.remove("checked-task");
    }
  }
});

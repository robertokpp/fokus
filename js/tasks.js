const addTask = document.querySelector(".add-task");

// button
const btnAddTask = document.getElementById("btn-addtask");
const btnDelete = document.getElementById("btn-delete");
const btnCancel = document.getElementById("btn-cancel");
const btnSave = document.getElementById("btn-save");

//Textarea
const textTask = document.getElementById("text-task");

const listTask = [];

function listCreation(task) {
  listTask.push(task);
  console.log(listTask);
}

btnAddTask.addEventListener("click", () => {
  addTask.style.display = "flex";
});

btnCancel.addEventListener("click", () => {
  addTask.style.display = "none";
});

btnSave.addEventListener("click", () => {
  listCreation(textTask.value);
  textTask.value = "";
});

const addTask = document.querySelector(".add-task");

// button
const btnAddTask = document.getElementById("btn-addtask");
const btnDelete = document.getElementById("btn-delete");
const btnCancel = document.getElementById("btn-cancel");
const btnSave = document.getElementById("btn-save");
const taskEdit = document.querySelectorAll(".task-edit")

//Textarea
const textTask = document.getElementById("text-task");
const ul = document.querySelector("ul");

const listTask = [];
let numId = 1;


function listCreation(task) {
  listTask.push(task);
  const li = document.createElement("li");
  li.id = numId;
  ul.append(li);
  li.innerHTML = `<div>
  <img src="assets/Ícones/Check_branco.svg" alt="" />
  <p>${task}</p>
  </div>
  <img value="${numId}" src="assets/Ícones/edit.svg" alt="" />
  `;
  numId++;
}

function listEdit(task){
  
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


taskEdit.addEventListener("click", () => {
  listEdit();
});
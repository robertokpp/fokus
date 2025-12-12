const addTask = document.querySelector(".add-task");

// button
const btnAddTask = document.getElementById("btn-addtask");
const btnDelete = document.getElementById("btn-delete");
const btnCancel = document.getElementById("btn-cancel");
const btnSave = document.getElementById("btn-save");
const taskEdit = document.querySelectorAll(".task-edit");

//Textarea
const textTask = document.getElementById("text-task");
const ul = document.querySelector("ul");
const textEdit = document.querySelector(".task-edit");

const listTask = [];
let listTaskCompleted = [];
let checkEdit = false;
let editId = null;

function listCreation(task) {
  if (checkEdit === true) {
    listTask[editId] = task;
    checkEdit = false;
    editId = null;
  } else {
    listTask.push(task);
  }
  renderDisplay();
}

function renderDisplay() {
  ul.innerHTML = "";
  listTask.forEach((item, index) => {
    const li = document.createElement("li");
    li.id = index;
    li.innerHTML = `<div>
    <img class="check-icons" src="assets/Ícones/Check_branco.svg" alt="" />
    <p>${item}</p>
    </div>
    <img value="${index}"class="task-edit" src="assets/Ícones/edit.svg" alt="" />
    `;
    if(listTaskCompleted.includes(index)){
      li.classList.add("task-completed")
    }
    ul.append(li);
  });
}

function listEdit(task) {
  textTask.value = listTask[task];
  listTask.splice(task, 1);
  renderDisplay();
}

function listDelete(item) {
  listTask.splice(item, 1);
  renderDisplay();
  editId = null;
  textTask.value = "";
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
  addTask.style.display = "none";
});

btnDelete.addEventListener("click", () => {
  listDelete(editId);
});

//EDITAR
ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("task-edit")) {
    addTask.style.display = "flex";
    checkEdit = true;
    const li = event.target.closest("li");
    editId = li.id;
    textTask.value = listTask[editId];
  }
});

//TAREFA CONCLUIDA
ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("check-icons")) {
    const li = event.target.closest("li");
    let liId = Number(li.id)
    if (li.classList.contains("task-completed")) {
      let listAux = listTaskCompleted
      listTaskCompleted = listAux.filter(n => n != liId)
      li.classList.remove("task-completed");
    } else {
      li.classList.add("task-completed");
      listTaskCompleted.push(liId);
    }
  }
});

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

function listCreation(task) {
  listTask.push(task);
  renderDisplay();
}

function renderDisplay() {
  ul.innerHTML = "";
  listTask.forEach((item, index) => {
    const li = document.createElement("li");
    li.id = index;
    ul.append(li);
    li.innerHTML = `<div>
  <img class="check-icons" src="assets/Ícones/Check_branco.svg" alt="" />
  <p>${item}</p>
  </div>
  <img value="${index}"class="task-edit" src="assets/Ícones/edit.svg" alt="" />
  `;
  });
}

function listEdit(task) {
  textTask.value = listTask[task];
  listTask.splice(task, 1);
  renderDisplay();
}

function listDelete() {
  listTask.splice(task, 1);
  renderDisplay();
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
  textTask.value = ""
});


ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("task-edit")) {
    addTask.style.display = "flex";
    const li = event.target.closest("li");
    const id = li.id;
    console.log(id);
    listEdit(id);
  }
});

ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("check-icons")) {
    const li = event.target.closest("li");
    li.classList.add("task-completed");
  }
});

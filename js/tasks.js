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
  <img value="${numId}"class="task-edit" src="assets/Ícones/edit.svg" alt="" />
  `;
  numId++;
}

function renderDisplay(){

}

function listEdit(task) {
  textTask.value = listTask[task];
  
}

btnAddTask.addEventListener("click", () => {
  addTask.style.display = "flex";
});

btnCancel.addEventListener("click", () => {
  addTask.style.display = "none";
});


// função que verifique se é editado ou novo
// editado alterar o value da li
// novo inclui no final da lista
btnSave.addEventListener("click", () => {
  listCreation(textTask.value);
  textTask.value = "";
  addTask.style.display = "none";
});

ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("task-edit")) {
    addTask.style.display = "flex";
    const li = event.target.closest("li");
    const id = li.id - 1
    listEdit(id)
  }
});


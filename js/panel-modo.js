const focos = document.getElementById("foco");
//BUTTON DO PAINEL
const panelHour = document.getElementById("panel-hour");
const shortRest = document.getElementById("short-rest");
const longeRest = document.getElementById("longe-rest");

export const timeTeste = "25:00"


function timePanel(){
  
}

focos.addEventListener("click", () => {
  // panelHour.style.display = "none";
  focos.style.background = "#144480";
});

shortRest.addEventListener("click", () => {
  shortRest.style.background = "#144480";
});

longeRest.addEventListener("click", () => {
  longeRest.style.background = "#144480";
});

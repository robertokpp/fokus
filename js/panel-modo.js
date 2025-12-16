import { renderHour, interval, renderIsRunnig } from "./time.js";
const bgGradient = document.getElementById("bg-gradient");
const btnPrimary = document.getElementById("btn-primary");
const btnPause = document.getElementById("btn-pause");
const focos = document.getElementById("foco");
const shortRest = document.getElementById("short-rest");
const longeRest = document.getElementById("longe-rest");

let mmPainel;
let ssPainel;

focos.style.background = "#144480";

function clickModo(element) {
  if (element === focos) {
    mmPainel = 25;
    bgGradient.className = "body-gradient-one";
  }else if (element === shortRest) {
    mmPainel = 5;
    bgGradient.className = "body-gradient-two";
  }else{
    mmPainel = 15;
    bgGradient.className = "body-gradient-thee";
  }
  ssPainel = 0;
  clearInterval(interval);
  renderIsRunnig(true);
  renderHour(mmPainel, ssPainel);
  btnPrimary.classList.remove("display-none");
  btnPause.classList.add("display-none");
}

focos.addEventListener("click", () => {
  focos.style.background = "#144480";
  shortRest.style.background = "none";
  longeRest.style.background = "none";
  clickModo(focos);
});

shortRest.addEventListener("click", () => {
  focos.style.background = "none";
  shortRest.style.background = "#144480";
  longeRest.style.background = "none";
  clickModo(shortRest);
});

longeRest.addEventListener("click", () => {
  focos.style.background = "none";
  shortRest.style.background = "none";
  longeRest.style.background = "#144480";
  clickModo();
});

import { renderHour, interval, renderIsRunnig } from "./time.js";
const btnPrimary = document.getElementById("btn-primary");
const btnPause = document.getElementById("btn-pause");
const focos = document.getElementById("foco");
const shortRest = document.getElementById("short-rest");
const longeRest = document.getElementById("longe-rest");

let mmPainel = 25;
let ssPainel = 0;

focos.style.background = "#144480";



focos.addEventListener("click", () => {
  focos.style.background = "#144480";
  shortRest.style.background = "none";
  longeRest.style.background = "none";
  clearInterval(interval);
  renderIsRunnig(true);
  mmPainel = 25;
  ssPainel = 0;
  renderHour(mmPainel, ssPainel);
  btnPrimary.classList.remove("display-none");
  btnPause.classList.add("display-none");
});

shortRest.addEventListener("click", () => {
  focos.style.background = "none";
  shortRest.style.background = "#144480";
  longeRest.style.background = "none";
  mmPainel = 5;
  ssPainel = 0;
  clearInterval(interval);
  renderIsRunnig(true);
  renderHour(mmPainel, ssPainel);
  btnPrimary.classList.remove("display-none");
  btnPause.classList.add("display-none");
});

longeRest.addEventListener("click", () => {
  focos.style.background = "none";
  shortRest.style.background = "none";
  longeRest.style.background = "#144480";
  mmPainel = 15;
  ssPainel = 0;
  clearInterval(interval);
  renderIsRunnig(true);
  renderHour(mmPainel, ssPainel);
  btnPrimary.classList.remove("display-none");
  btnPause.classList.add("display-none");
});

const panelTime = document.getElementById("time-id");
const btnprimary = document.getElementById("btn-primary");
panelTime.textContent = "25:00";

function contagem(){
  let mm = 25;
  let s = 0;
  setInterval(() => {
    if (s === 0) {
      mm--;
      s = 60;
    }
    s--;
    if (s < 10) {
      panelTime.textContent = `${mm}:0${s}`;
    } else {
      panelTime.textContent = `${mm}:${s}`;
    }
  }, 1000);
}

btnprimary.addEventListener("click", () => {
  contagem();
});

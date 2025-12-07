const time = document.getElementById("time");
const btnPrimary = document.getElementById("btn-primary");
const btnPause = document.getElementById("btn-pause");
let isRunning = true;
time.textContent = "25:00";

let interval = null;
let mm = 0;
let s = 0;
let sPause = 0;
let mmPause = 0;

function count() {
  if (isRunning === false) {
    mm = mmPause;
    s = sPause;
    console.log("entrando no laço");
  } else {
    mm = 25;
    s = 0;
  }

  // if (interval !== null) return;

  interval = setInterval(() => {
    if (mm === 0 && s === 0) {
      clearInterval(interval);
      interval = null;
      time.textContent = "00:00";
      return;
    }

    if (s === 0) {
      mm--;
      s = 60;
    }
    s--;

    if (mm < 10 && s < 10) {
      time.textContent = `0${mm}:0${s}`;
    } else if (s < 10) {
      time.textContent = `${mm}:0${s}`;
    } else if (mm < 10) {
      time.textContent = `0${mm}:${s}`;
    } else {
      time.textContent = `${mm}:${s}`;
    }
  }, 1000);
}

btnPause.addEventListener("click", function () {
  sPause = s;
  mmPause = mm;
  clearInterval(interval);
  btnPrimary.classList.remove("display-none");
  btnPause.classList.add("display-none");
  isRunning = false;
});

btnPrimary.addEventListener("click", function () {
  btnPrimary.classList.add("display-none");
  btnPause.classList.remove("display-none");
  count();
  isRunning = true;
});

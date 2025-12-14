const time = document.getElementById("time-focos");
const btnPrimary = document.getElementById("btn-primary");
const btnPause = document.getElementById("btn-pause");

let mm = null;
let s = null;
export function renderHour(mmNew, ssNew) {
  if (mmNew < 10) {
    time.textContent = `0${mmNew}:0${ssNew}`;
  } else {
    time.textContent = `${mmNew}:0${ssNew}`;
  }
  mm = mmNew;
  s = ssNew;
}

renderHour(25, 0);

let isRunning = true;

export function renderIsRunnig(item) {
  isRunning = item;
}

export let interval = null;

let sPause = null;
let mmPause = null;

function count() {
  if (isRunning === false) {
    mm = mmPause;
    s = sPause;
  }

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
  renderIsRunnig(false);
});

btnPrimary.addEventListener("click", function () {
  btnPrimary.classList.add("display-none");
  btnPause.classList.remove("display-none");
  count();
  renderIsRunnig(true);
});

const time = document.getElementById("time");
time.textContent = "25:00";

function count() {
  let mm = 25;
  let s = 0;
  setInterval(() => {
    if (s === 0) {
      mm--;
      s= 60
    }
    time.textContent = `${mm}:${s}`;
    s--
  }, 1000);
}

count();

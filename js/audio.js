const idMusic = document.getElementById("music");
const audioFoco = document.getElementById("audio-foco");

idMusic.addEventListener("input", () => {
  console.log("teste");
  if (idMusic.checked) {
    audioFoco.play();
  }else{
    audioFoco.pause()
  }
});

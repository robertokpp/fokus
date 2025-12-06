const idMsuic = document.getElementById("music")
const idmusicFoco = document.getElementById("music-Foco")



idMsuic.addEventListener("input",() =>{
if(idMsuic.checked){
  idmusicFoco.play()
}else{
  idmusicFoco.pause()
}
})
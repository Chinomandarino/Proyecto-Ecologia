const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const clous=doc.querySelector(".Cerrar");
const equis=doc.getElementById('equisona');
const img1=doc.getElementById('img1');
const img2=doc.getElementById('img2');
const img3=doc.getElementById('img3');
const img4=doc.getElementById('img4');
const img5=doc.getElementById('img5');
const header1=doc.getElementById('ache1');
const divOverlay= doc.querySelector(".descrFotos");
const novertext=doc.querySelector(".Novertexto");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

img1.addEventListener("click", () =>{
  divOverlay.classList.add("imgO")
  novertext.classList.remove("Novertexto")
  header1.innerHTML=" Omar destrozo la cabeza de 5 niños iranies y acabo con el cartel de culiacan el solo con una mano mientras creaba google"
  equis.innerHTML="&times;" 
})

img2.addEventListener("click", () =>{
  divOverlay.classList.add("imgO")
  novertext.classList.remove("Novertexto")
  header1.innerHTML=" Jeyli amante de las patas aceitadas de nahida "
  equis.innerHTML="&times;"
})

img3.addEventListener("click", () =>{
  divOverlay.classList.add("imgO")
  novertext.classList.remove("Novertexto")
  header1.innerHTML=" Lasaña si le avientas a los lobos se los cojera a todos"
  equis.innerHTML="&times;"
})

img4.addEventListener("click", () =>{
  divOverlay.classList.add("imgO")
  novertext.classList.remove("Novertexto")
  header1.innerHTML=" axelsito el creador del sexo"
  equis.innerHTML="&times;"
})

img5.addEventListener("click", () =>{
  divOverlay.classList.add("imgO")
  novertext.classList.remove("Novertexto")
  header1.innerHTML=" Cesar<br>OÑA"
  equis.innerHTML="&times;"
})

equis.addEventListener("click", () =>{
  divOverlay.classList.remove("imgO")
  novertext.classList.add("Novertexto")
  header1.innerHTML=""
  equis.innerHTML=""
})

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


function cambiar(){

}
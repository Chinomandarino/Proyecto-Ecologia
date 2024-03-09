const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const clous = doc.querySelector(".Cerrar");
const equis = doc.getElementById("equisona");
const divOverlay = doc.querySelector(".descrFotos");
const novertext = doc.querySelector(".Novertexto");
const imgElements = [
  doc.getElementById("img1"),
  doc.getElementById("img2"),
  doc.getElementById("img3"),
  doc.getElementById("img4"),
  doc.getElementById("img5"),
];
const header1 = doc.getElementById("ache1");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

<<<<<<< HEAD
<<<<<<< HEAD
//ESTA MADRE HACE QUE CUANDO LE PRESIONES A UNA CARA SE PONGA EL OVERLAY CON EL TEXTO CORRESPONDIENTE
img1.addEventListener("click", () => {
  divOverlay.classList.add("imgO");
  novertext.classList.remove("Novertexto");
  header1.innerHTML = " Omar";
  equis.innerHTML = "&times;";
});

img2.addEventListener("click", () => {
  divOverlay.classList.add("imgO");
  novertext.classList.remove("Novertexto");
  header1.innerHTML = " Jeylu";
  equis.innerHTML = "&times;";
});

img3.addEventListener("click", () => {
  divOverlay.classList.add("imgO");
  novertext.classList.remove("Novertexto");
  header1.innerHTML = " Lasaña";
  equis.innerHTML = "&times;";
});

img4.addEventListener("click", () => {
  divOverlay.classList.add("imgO");
  novertext.classList.remove("Novertexto");
  header1.innerHTML = " axelsito";
  equis.innerHTML = "&times;";
});

img5.addEventListener("click", () => {
  divOverlay.classList.add("imgO");
  novertext.classList.remove("Novertexto");
  header1.innerHTML = " Cesar<br>OÑA";
  equis.innerHTML = "&times;";
=======
=======
>>>>>>> 8c81304f7aa2dcf8e82b86695fa097265ec8ba51
imgElements.forEach((img, index) => {
  img.addEventListener("click", () => {
    divOverlay.classList.add("imgO");
    novertext.classList.remove("Novertexto");
    const names = ["Omar", "Jeylu", "Lasaña", "axelsito", "Cesar<br>OÑA"];
    header1.innerHTML = names[index];
    equis.innerHTML = "&times;";
  });
<<<<<<< HEAD
>>>>>>> 8c81304f7aa2dcf8e82b86695fa097265ec8ba51
=======
>>>>>>> 8c81304f7aa2dcf8e82b86695fa097265ec8ba51
});

equis.addEventListener("click", () => {
  divOverlay.classList.remove("imgO");
  novertext.classList.add("Novertexto");
  header1.innerHTML = "";
  equis.innerHTML = "";
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

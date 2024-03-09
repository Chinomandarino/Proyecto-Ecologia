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

imgElements.forEach((img, index) => {
  img.addEventListener("click", () => {
    divOverlay.classList.add("imgO");
    novertext.classList.remove("Novertexto");
    const names = ["Omar", "Jeylu", "Lasaña", "axelsito", "Cesar<br>OÑA"];
    header1.innerHTML = names[index];
    equis.innerHTML = "&times;";
  });
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

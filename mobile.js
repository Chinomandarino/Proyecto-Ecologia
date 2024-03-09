// Referencia al objeto global document
const doc = document;

// Elementos del DOM
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
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

// Evento de clic para abrir el menú
menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

// Evento de clic para cada imagen
imgElements.forEach((img, index) => {
  img.addEventListener("click", () => {
    // Mostrar overlay de imágenes
    divOverlay.classList.add("imgO");
    // Ocultar texto
    novertext.classList.remove("Novertexto");
    // Nombres asociados a las imágenes
    const names = ["Omar", "Jeylu", "Lasaña", "axelsito", "César<br>Murio poco despues de hacer la página porque se chingo un taco de hubre y le callo pesado"];
    // Cambiar el encabezado con el nombre correspondiente
    header1.innerHTML = names[index];
    // Mostrar símbolo de cerrar (X)
    equis.innerHTML = "&times;";
  });
});

// Evento de clic para cerrar la overlay de imágenes
equis.addEventListener("click", () => {
  // Ocultar overlay de imágenes
  divOverlay.classList.remove("imgO");
  // Mostrar texto nuevamente
  novertext.classList.add("Novertexto");
  // Limpiar contenido del encabezado y símbolo de cerrar
  header1.innerHTML = "";
  equis.innerHTML = "";
});

// Evento de clic para cerrar el menú
menuClose.addEventListener("click", () => {
  // Ocultar el menú
  overlay.classList.remove("overlay--active");
});

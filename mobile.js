const doc = document;
const menuOpen = doc.querySelector(".menu");
const closeButton = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const closeIcon = doc.getElementById("equisona");
const images = [
  doc.getElementById("img1"),
  doc.getElementById("img2"),
  doc.getElementById("img3"),
  doc.getElementById("img4"),
  doc.getElementById("img5"),
];
const header1 = doc.getElementById("ache1");
const divOverlay = doc.querySelector(".descrFotos");
const novertext = doc.querySelector(".Novertexto");

// Check if menuOpen element exists before adding event listeners

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

if (img1) {
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      handleImageClick(index);
    });
  });

  closeButton.addEventListener("click", () => {
    closeOverlay();
    console.log("OLAS");
  });

  closeIcon.addEventListener("click", () => {
    closeOverlay();
    console.log("OLAS");
  });
}

function handleImageClick(index) {
  divOverlay.classList.add("imgO");
  novertext.classList.remove("Novertexto");

  const imageDetails = getImageDetails(index);
  header1.innerHTML = imageDetails.text;
  closeIcon.innerHTML = "&times;";
}

function closeOverlay() {
  divOverlay.classList.remove("imgO");
  novertext.classList.add("Novertexto");
  header1.innerHTML = "";
  closeIcon.innerHTML = "";
  overlay.classList.remove("overlay--active");
}

function getImageDetails(index) {
  const details = [
    "Omar destrozo la cabeza de 5 niños iranies y acabo con el cartel de culiacan el solo con una mano mientras creaba google",
    "Jeyli amante de las patas aceitadas de nahida",
    "Lasaña si le avientas a los lobos se los cojera a todos",
    "Axelsito el creador del sexo",
    "Cesar<br>El creador de los culos aceitados y gorditos. *cada noche piensa en furina aceitada*<br>:3",
  ];
  return { text: details[index] };
}
// Obtén referencias a los botones y al contenedor de texto
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var textoContainer = document.getElementById("textoContainer");

function changeText(buttonId) {
  var textContent = document.getElementById("textcontent");
  switch (buttonId) {
    case "btn1":
      textContent.innerHTML =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
      break;
    case "btn2":
      textContent.innerHTML = "Texto para ¿Dónde?";
      break;
    case "btn3":
      textContent.innerHTML = "Texto para ¿Cuándo?";
      break;
    case "btn4":
      textContent.innerHTML = "Texto para Casa valentina";
      break;
    case "btn5":
      textContent.innerHTML = "Texto para ¿Quién?";
      break;
  }
}
console.log("Script loaded");

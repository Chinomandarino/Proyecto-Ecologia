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
if (menuOpen) {
  menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
  });

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      handleImageClick(index);
    });
  });

  closeButton.addEventListener("click", () => {
    closeOverlay();
  });

  closeIcon.addEventListener("click", () => {
    closeOverlay();
  });
} else {
  console.error("Element with class 'menu' not found on the page.");
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

console.log("Script loaded");

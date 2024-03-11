const doc = document;
const menuOpen = doc.querySelector(".menu");
const closeButton = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const closeIcon = doc.getElementById("equisona");
const overlay1 =doc.getElementById("overlay1");

images=[
  img1=doc.getElementById("img1"),
  img2=doc.getElementById("img2"),
  img3= doc.getElementById("img3"),
  img4=doc.getElementById("img4"),
  img5=doc.getElementById("img5")
]

btns=[
  btn1=doc.getElementById("btn1"),
  btn2=doc.getElementById("btn2"),
  btn3= doc.getElementById("btn3"),
  btn4=doc.getElementById("btn4"),
  btn5=doc.getElementById("btn5")
]


const header1 = doc.getElementById("ache1");
const divOverlay = doc.querySelector(".descrFotos");
const novertext = doc.querySelector(".Novertexto");

// Check if menuOpen element exists before adding event listeners

  menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
  });

   if(img1){
    images.forEach((img, index) => {
      img.addEventListener("click", () => {
        handleImageClick(index);
      });
    });

    closeButton.addEventListener("click", () => {
      closeOverlay();
      console.log("OLAS")
    });

    closeIcon.addEventListener("click", () => {
      closeOverlay();
      console.log("OLAS")
    });
  



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
}

if(overlay1){
  closeButton.addEventListener("click", () =>{
    overlay.classList.remove("overlay--active");
  })

  btns.forEach((btn,index) => {
    btn.addEventListener("click", () =>{
      if(index==0){
        overlay1.style.width="600px"
        overlay1.style.height="400px"
      }
    })
  });
}




console.log("Script loaded");

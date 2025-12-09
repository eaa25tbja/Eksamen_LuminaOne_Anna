//opretter forbindelse til mit body element i html
const body = document.body;

//henter mine elementer/billeder med klassen "color" og definerer dem som en liste/"slides"
const slides = document.querySelectorAll(".color");

//henter mine knapper (farve ellipser)
const whiteBtn = document.getElementById("white");
const blackBtn = document.getElementById("black");
const silverBtn = document.getElementById("silver");
const brownBtn = document.getElementById("brown");

//opretter en variabel med navnet "activeSlide", og fortæller at der er 4 aktive slides i den (0 til 3)

let activeSlide = 3;

function setActiveSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

whiteBtn.addEventListener("click", () => setActiveSlide(0));
blackBtn.addEventListener("click", () => setActiveSlide(1));
silverBtn.addEventListener("click", () => setActiveSlide(2));
brownBtn.addEventListener("click", () => setActiveSlide(3));

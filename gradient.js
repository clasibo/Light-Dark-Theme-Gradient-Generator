const gradientText = document.querySelector("h4");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const gradient = document.getElementById("gradient");

function setGradient() {
	gradient.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	gradientText.textContent = gradient.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".button");

function gradientColorChange() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+  color2.value 
	+ ")";

	css.textContent = body.style.background + ";"
}

css.textContent = "linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+  color2.value 
	+ ")";

function randomColor() {
	var randColor1 = Math.floor(Math.random()*16777215).toString(16);
	var randColor2 = Math.floor(Math.random()*16777215).toString(16);
	color1.value = "#" + randColor1;
	color2.value = "#" + randColor2;

	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+  color2.value 
	+ ")";

	css.textContent = body.style.background + ";"
}

color1.addEventListener('input', gradientColorChange);

color2.addEventListener('input', gradientColorChange);

random.addEventListener('click', randomColor);

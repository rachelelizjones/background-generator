var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); // have to use "." with querySelector
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

css.textContent = body.style.background + ";";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	// textContent - the text inside the h3 tag, like createTextNode or innerHTML
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// This gives a random no. between 0 and 255
// Math.round(Math.random() * 255)

button.addEventListener("click", function() {
	body.style.background = 
	"linear-gradient(to right, rgb(" 
	+ Math.round(Math.random() * 255)
	+ ", " 
	+ Math.round(Math.random() * 255)
	+ ", "
	+ Math.round(Math.random() * 255)
	+ "), rgb("
	+ Math.round(Math.random() * 255)
	+ ", "
	+ Math.round(Math.random() * 255)
	+ ", "
	+ Math.round(Math.random() * 255)
	+ "))";

	css.textContent = body.style.background + ";";
})


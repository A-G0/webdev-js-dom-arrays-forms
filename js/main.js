// IIFE
(function() {
  // code starts here
document.getElementById("myHeading").innerHTML = "Abdusalam";
document.querySelector("nav ul li").setAttribute("class", "currentPage");
// example
document
.querySelector("nav ul li a")
.setAttribute("href", "https://www.google.co.uk/");
 // adding events
 let colourButtons = document.querySelectorAll(".colPicker")
console.dir(colourButtons)
for(let i=0; i < colourButtons.length; i++){
  colourButtons[i].addEventListener("click", chgColour)
 }
 function chgColour(ev){
  console.dir(ev.target.classList);
  let colourPicked = ev.target.classlist[0] + "Back";
  bodyElement.setAttribute("class", colourPicked);
 }
// code ends here
})();

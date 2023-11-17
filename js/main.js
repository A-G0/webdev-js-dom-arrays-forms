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
 document.querySelector(".red").addEventListener('click', function(ev){
  document.querySelector('body').setAttribute('class', "redBack");
  })
  document.querySelector(".blue").addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', "blueBack");
    })
    document.querySelector(".green").addEventListener('click', function(ev){
      document.querySelector('body').setAttribute('class', "greenBack");
      })
     
// code ends here
})();

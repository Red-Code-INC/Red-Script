import "./css.js"
import "./red.js"
import "./shortcuts/AllClass.js"
import "./time/RelativeScript.js"
import "./time/Formatsetdate.js"
import "./shortcuts/AllTag.js"
import "./shortcuts/AllName.js"
import "./search.js"
import "./time/timer.js"
import "./tabs.js"
let dfault = document.getElementsByName('defaultOpen')
for (let i = 0 ; i < dfault.length ; i++){
dfault[i].click();
}
var buttons = document.getElementsByClassName("button");
var activeSheet = document.getElementById("active-stylesheet");
var clearStorageButton = document.getElementById("clear-storage");

// Test to see if localStorage already has a value stored
if (localStorage.getItem("lastActiveSheet")) {
     activeSheet.setAttribute("href", localStorage.getItem("lastActiveSheet"));
} else {
    activeSheet.setAttribute("href", "https://cdn.jsdelivr.net/gh/Sideswipe5/Red-CSS@1.0.7/themes/main/default.css")
} 

// Assign the event lister to each button
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", switchStyle);  
}
// Create a button to clear localStorage
clearStorageButton.addEventListener("click", clearStorage);

// Set the #active-stylesheet to be the light or dark stylesheet
function switchStyle() {
   var selectedSheet = this.getAttribute("data-stylesheet");
   activeSheet.setAttribute("href", selectedSheet);
   localStorage.setItem("lastActiveSheet", selectedSheet);
}

// Wrapper function to localStorage.clear
function clearStorage() {
  localStorage.clear();
}

var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

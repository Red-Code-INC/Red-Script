var buttons = document.getElementsByClassName("button");
var activeSheet = document.getElementById("active-stylesheet");
var clearStorageButton = document.getElementById("clear-storage");
var dfaulttheme = document.getElementById("dflttheme).innerHTML


// Test to see if localStorage already has a value stored
if (localStorage.getItem("lastActiveSheet")) {
     activeSheet.setAttribute("href", localStorage.getItem("lastActiveSheet"));
} else {
    activeSheet.setAttribute("href", dfaulttheme)
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

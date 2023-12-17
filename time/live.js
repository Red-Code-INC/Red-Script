function live(){
  var display = new Date().toLocaleTimeString();
  document.getElementById('live1').innerHTML = display;
  setTimeout(displayClock, 1000); 
}
live()

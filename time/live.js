function live(){
  var display = new Date().toLocaleTimeString();
  let output = document.getElementsByClassName('live1')
  for (let i = 0 ; i < output.length ; i++){
    output[i].innerHTML = display;
  }
  setTimeout(displayClock, 1000); 
}
live()

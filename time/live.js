function live(){
  var display = new Date().toLocaleTimeString();
  let output = document.getElementsByTagName('live')
  for (let i = 0 ; i < output.length ; i++){
    output[i].innerHTML = display;
  }
  setTimeout(live, 1000); 
}
live()

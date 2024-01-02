function timer(timeset, location) {
  var myTimer = setInterval(myClock, 1000);
  var c = (timeset); //Initially set to 1 hour



  function myClock() {
    --c
    var seconds = c % 60; // Seconds that cannot be written in minutes
    var minutes = (c - seconds) / 60; // Gives the seconds that COULD be given in minutes
    var minutesLeft = minutes % 60; // Minutes that cannot be written in hours
    var hours = (minutes - minutesLeft) % 60;
    // Now in hours, minutes and seconds, you have the time you need.
    
    document.getElementById(location).innerHTML =hours + ":" + minutes + ":" + seconds
    if (c == 0) {
      clearInterval(myTimer);
    }
  }
}

let $TR = timer

window.$TR = $TR

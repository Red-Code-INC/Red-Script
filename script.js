import "./css.js"
import "./red.js"
import "./shortcuts/AllClass.js"
import "./time/Tags.js"
import "./shortcuts/AllTag.js"
import "./shortcuts/AllName.js"
import "./search.js"
import "./time/timer.js"
import "./tabs.js"
import "./shortcuts/AllAttribute.js"
import "./time/live.js"

let outpts = document.querySelectorAll("[date]")

for (let i = 0 ; i < outpts.length ; i++){
let time = outpts[i].getAttribute("date")
$R(time)
}

let dfault = document.getElementsByName('defaultOpen')
for (let i = 0 ; i < dfault.length ; i++){
dfault[i].click();
}
var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(){
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
  }
  );
}

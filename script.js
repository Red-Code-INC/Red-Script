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

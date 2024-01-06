import "./RelativeScript.js"
import "./FormatSetDate.js"
import "./live.js"
import "./timer.js"
import "./FormatSetDate24.js"


let outpts = document.querySelectorAll("[date]")

for (let i = 0 ; i < outpts.length ; i++){
let time = outpts[i].getAttribute("date")
$R(time)
}

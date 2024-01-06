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
let tme = ""
let dted = document.getElementsByTagName("time")
for(let i = 0 ; i < dted.length ; i++){
    tme = dted[i].getAttribute("time")
    $D(tme)
}
let ct = ""
let cut = document.getElementsByTagName("chrono")
for (let i = 0 ; i < cut.length ; i++){
    $CD()
}

let z4 = ""
let Z4 = document.getElementsByTagName("T24")
for (let i = 0 ; i < Z4.length ; i++){
    z4 = Z4[i].getAttribute("hour")
    $24(z4)
}

let CZ4 = document.getElementsByTagName('C24')
for (let i = 0 ; i < CZ4.length ; i++){
    $C24()
}


import "./time.js"
let outpts = document.querySelectorAll("[date]")

for (let i = 0 ; i < outpts.length ; i++){
let time = outpts[i].getAttribute("date")
$R(time)
}

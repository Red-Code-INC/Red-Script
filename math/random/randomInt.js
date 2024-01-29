import "./random.js"

function randomInt(min,max){
    return $round(Math.random()*(max - min) + min)
}
let $RDI = randomInt

window.$RDI = $RDI

function formatSetDate(timestated){
const dt = new Date(timestated);
let dtes =  "[time= " + "'" + timestated + "'" +"]"
    let dates = document.querySelectorAll(dtes)
const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);
let hours = dt.getHours()
let ampm = ""
if (hours > 12){
    hours = hours -= 12
     ampm = 'pm'
} else {
    ampm = 'am'
}
if (hours < 1){
    hours = hours += 12
}


let time =(`${
    padL(dt.getMonth()+1)}/${
    padL(dt.getDate())}/${
    dt.getFullYear()} ${
    padL(hours)}:${
    padL(dt.getMinutes())}:${
    padL(dt.getSeconds())} ${
    padL(ampm)}`
);

for (let i = 0 ; i < dates.length ; i++){
    dates[i].innerHTML = time
}
}
let $D = formatSetDate

window.$D = $D


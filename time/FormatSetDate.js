function formatSetDate(timestated){
const dt = new Date(timestated);
let dtes =  "[time= " + "'" + timestated + "'" +"]"
    let dates = document.querySelectorAll(dtes)
const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);
let hours = dt.getHours()
let day = dt.getDate()
let month = dt.getMonth()+1
let year = dt.getFullYear()
let ampm = ""
if (hours > 12){
    hours = hours -= 12
     ampm = 'pm'
} else if (hours > 11 && hours < 13){
    ampm = 'pm'
} else if (hours < 12){
    ampm = 'am'
}
if (hours < 1){
    hours = hours += 12
}

let time =(`${
    padL(month)}/${
    padL(day)}/${
    padL(year)} ${
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

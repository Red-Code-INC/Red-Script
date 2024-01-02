function formatSetDate(timestated){
const dt = new Date(timestated);
let dates = document.getElementsByClassName(timestated)
const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);
let time =(`${
    padL(dt.getMonth()+1)}/${
    padL(dt.getDate())}/${
    dt.getFullYear()} ${
    padL(dt.getHours())}:${
    padL(dt.getMinutes())}:${
    padL(dt.getSeconds())} ${
    padL(dt.getHours() >= 12 ? 'am' : 'pm')}`
);

for (let i = 0 ; i < dates.length ; i++){
    dates[i].innerHTML = time
}
}
let $D = formatSetDate

window.$D = $D

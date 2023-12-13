const month=1000*60*60*24*7*4.34524;
const year = 1000*60*60*24*7*4.34524*12;
const times = 4;
const day = 1000*60*60*24;
const hour = 1000*60*60;
const min = 1000*60;
const sec = 1000;
const week = 1000*60*60*24*7;
const current = new Date();
let isam = ""
let amorpm = " AM"
let out = ""

//functions go here
//relTime('December 6, 2023 12:30:00')
relTime(new Date())
//formatSetDate('December 6, 2023 12:00:00')

export function relTime(timestated){
    let dates = document.getElementsByClassName(timestated)
    //let datetext = document.getElementsByClassName(timestated).innerHTML
    let time = ""
    let x = Math.round(current - new Date(timestated))
    console.log(Math.round(x/day))
    let sv = Math.round(x/sec)
    let mv = Math.round(x/min)
    let hv = Math.round(x/hour)
    let dv = Math.round(x/day)
    let wv = Math.round(x/week)
    let Mv = Math.round(x/month)
    let yv = Math.round(x/year)
    if (dv < 1 && hv < 1 && mv < 1){
        if (sv < 60){
                if (sv == 1){
                    time = "Just Now"
                } else if (sv < 60)
                time = sv + " seconds ago"
            }
        } else if (dv < 1 && hv < 1 && mv >= 1 && sv >= 60){
                if (mv == 1){
                time = "1 min ago"
                } else {
                time = mv + " mins ago"
                }
        } else if (dv < 1 && hv >= 1 && mv >= 60){
                if (hv == 1){
                    time = "1 hour ago"
        } else {
                    time = hv + " hours ago"
                }
        } else if (dv >= 1 && dv < 7){
                if (dv == 1){
                    time = "1 day ago"
                } else if (dv > 1){
                    time = dv + " days ago"
                }
        } else if (wv >= 1 && Mv < 1){ 
                if (wv == 1){
                    time ="1 week ago"
                } else if (wv == 2 || wv == 3){
                    time = wv + " weeks ago"
                }
        }else if (Mv >= 1 && Mv < 12){
                if (Mv == 1){
                    time = "1 month ago"
                } else {
                    time = Mv+ " months ago"
                }
        } else if (yv >= 1){
                if (yv == 1){
                    time = "1 year ago"
                } else {
                    time = yv+" years ago"
                }
            }
            for (let i = 0 ; i < dates.length ; i++){
                dates[i].innerHTML = time;
                //console.log(time);
            }
}
window.relTime = relTime

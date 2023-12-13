function formatSetDate(timestated){
const date = new Date(timestated)

let dates = document.getElementsByClassName(timestated)

const formatData = (input) => { 
  if (input > 9) { 
    return input; 
  } else return `0${input}`; 
}; 

// Function to convert 
// 24 Hour to 12 Hour clock 
const formatHour = (input) => { 
  if (input > 12) { 
    return input - 12; 
  }
  return input; 
}; 

// Data about date 
const format = { 
  dd: formatData(date.getDate()), 
  mm: formatData(date.getMonth() + 1), 
  yyyy: date.getFullYear(), 
  HH: formatData(date.getHours()), 
  hh: formatData(formatHour(date.getHours())), 
  MM: formatData(date.getMinutes()), 
  SS: formatData(date.getSeconds()), 
};
let hours = date.getHours()
let ampm = hours >= 12 ? 'pm' : 'am' 
const format12Hour = ({ dd, mm, yyyy, hh, MM, SS,}) => { 
   out = (`${mm}/${dd}/${yyyy} ${hh}:${MM}:${SS}${ampm}`); 
}; 
// Time in 12 Hour format 
format12Hour(format);
 
for (let i = 0 ; i < dates.length ; i++){
    dates[i].innerHTML = out
}
}
window.formatSetDate = formatSetDate

function allName(name, change){
    let x = document.getElementsByName(name)
  for (let i = 0 ; i < x.length ; i++){
      x[i].innerHTML = change
  }  
}
window.allName = allName

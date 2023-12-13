function allTag(tag, change){
    let x = document.getElementsByTagName(tag)
  for (let i = 0 ; i < x.length ; i++){
      x[i].innerHTML = change
  }  
}
window.allTag = allTag

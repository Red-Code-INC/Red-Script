function allClass(clas, change){
    let x = document.getElementsByClassName(clas)
    for (let i = 0 ; i < x.length ; i++){
            x[i].innerHTML = change
    }
}
window.allClass = allClass

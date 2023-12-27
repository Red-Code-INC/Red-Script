function allClass(clas,mthod,change){
    let x = document.getElementsByClassName(clas)
    for (let i = 0 ; i < x.length ; i++){
        if (mthod == "innerHTML"){
            x[i].innerHTML = change
        } else if (mthod == "appendChild"){
        x[i].appendChild(change)
        } else if (mthod == "display"){
            x[i].style.display = change
        } else if (mthod == "color"){
            x[i].style.color = change
        } else if (mthod == "backgroundColor"){
            x[i].style.backgroundColor = change
        } else if (mthod == "fontSize"){
            x[i].style.fontSize = change
        } else if (mthod == "href"){
            x[i].setAttribute("href", change)
        } else if (mthod == "append"){
            x[i].append(change)
        } else if (mthod == "innerText"){
            x[i].innerText = change
        } else if (mthod == "fontFamily"){
            x[i].style.fontFamily = change
        } else if (mthod == "fontWeight"){
            x[i].style.fontWeight = change
        }
    }
}
let $C =  allClass

window.$C = $C

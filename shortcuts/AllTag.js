function allTag(tag,effect ,change){
    let x = document.getElementsByClassName(tag)
    for (let i = 0 ; i < x.length ; i++){
        if (effect == "innerHTML"){
            x[i].innerHTML = change
        } else if (effect == "appendChild"){
        x[i].appendChild(change)
        } else if (effect == "display"){
            x[i].style.display = change
        } else if (effect == "color"){
            x[i].style.color = change
        } else if (effect == "backgroundColor"){
            x[i].style.backgroundColor = change
        } else if (effect == "fontSize"){
            x[i].style.fontSize = change
        } else if (effect == "href"){
            x[i].setAttribute("href", change)
        } else if (effect == "append"){
            x[i].append(change)
        } else if (effect == "innerText"){
            x[i].innerText = change
        } else if (effect == "fontFamily"){
            x[i].style.fontFamily = change
        }
    }
}
window.allYag = allTag

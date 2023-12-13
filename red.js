function red(){
    red = document.getElementsByTagName("html")
    for (let i = 0 ; i < red.length ; i++){
    red[i].style.color = "darkred"
    red[i].style.backgroundColor = "red"
    }
}
window.red = red

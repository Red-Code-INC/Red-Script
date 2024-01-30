function $round(x){
    return Math.round(x)
}
function $RD(value){
    if (value == undefined){
        return $round(Math.random())
    } else {
        return $round(Math.random()*value)
    }
}

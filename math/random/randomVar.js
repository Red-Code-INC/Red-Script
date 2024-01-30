import "./random.js"

function $RDV(...vars){
    let x = $RD((vars.length-1))
    // if (x < 0){
    //     x = 0
    // }
    return vars[x]
}

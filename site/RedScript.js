function back(){
    document.getElementById("backlink").click();
}
function search(search) {
    let input = document.getElementById(search).value
    input=input.toLowerCase();
    let x = document.getElementsByClassName(search);
    for (i = 0; i < x.length; i++) {
        if (x[i].innerText.toLowerCase().includes(input)) {
            x[i].style.display="list-item";
        } else {
            x[i].style.display="none";                 
        }
    }
}

function tosearch(){
    document.getElementById("reference").focus()
}
let tri = document.getElementsByTagName("werf")
for (let i = 0 ; i < tri.length ; i++){
    tri[i].innerHTML = new Date()
}

function notification(){
    let x = document.get('div')
    div.className = "alert"
    x.innerHTML = "<span class='closebtn' onclick='this.parentElement.style.display='none';'>&times;</span> <strong>Hey</strong> need A CSS framwork or are looking for something else? checkout our other sites down in the banner below"
    document.getElementsByTagName("body")[0].appendChild(div)
    setTimeout("notification",100000)
}
notification()
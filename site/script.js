async function populate() {
  const requestURL = "https://red-code-inc.github.io/Red-Vault/links.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const Red = await response.json();
//   let Red_Icons = "1.3.6"
    let LINKS = document.querySelectorAll("[data-link]")
    LINKS.forEach((link) =>{
        if (link.getAttribute("data-link") == "red-code"){
            link.setAttribute("href",Red.Code)
        } else if (link.getAttribute("data-link") == "red-script"){
            link.setAttribute("href",Red.Script)
        } else if (link.getAttribute("data-link") == "red-css"){
            link.setAttribute("href",Red.CSS)
        } else if (link.getAttribute("data-link") == "red-html"){
            link.setAttribute("href",Red.HTML)
        } else if (link.getAttribute("data-link") == "red-icons"){
            link.setAttribute("href",Red.Icons)
        }
    })
  }
populate()
// let body = document.getElementsByTagName("body")[0]
// let tabbar = document.getElementById("tabs")
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


import "./css.js"
import "./red.js"
import "./shortcuts/AllClass.js"
import "./time/RelativeScript.js"
import "./time/Formatsetdate.js"
import "./shortcuts/AllTag.js"
import "./shortcuts/AllName.js"
import "./search.js"
import "./time/timer.js"
import "./dropdown.js"
import "./tabs.js"
import "./defaulttab.js"

let dtab = document.getElementsByName("defaultOpen")
for (let i = 0 ; i < dtab.length ; i++){
  dtab[i].click();
}


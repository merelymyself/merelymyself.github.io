import {
  gen_sentence
  init
} from './pkg/cgisf.js';
init();
let s = gen_sentence();
function func() { document.getElementById("my_para").innerHTML = s; }
document.getElementById("button").addEventListener("click", func(), false);

/*  Created by: Truzz Blogg  */
/*  Youtube Link: https://youtu.be/l7W5pHSr1w0  */

let elem_preloader = document.getElementById("preloader");
let elem_loader = document.getElementById("loader");
console.log("Testing... Ok");


setTimeout(function() {
  elem_preloader.classList.remove("preloader");
  elem_loader.classList.remove("loader");
  }, 1280);
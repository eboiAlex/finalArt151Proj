// JavaScript Document
var obj = null; // object

function doMove() {
  obj.style.left = parseInt(obj.style.left)+1+'px';
  setTimeout(doMove,1); // call doMove in 20msec
}

function init() {
  obj = document.getElementById('practiceObject'); // get the "foo" object
  obj.style.left = '0px'; // set its initial position to 0px
  doMove(); // start animating
}
window.onload = init;
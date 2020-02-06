
// true is rectangle
var drawType = true;


// ===================================================================================
var toggle = function(e){
  // grabs the text that shows which mode we in
  var text = document.getElementById("toggletext");
  // change the boolean to the opposite and change the text correspendingly
  // false = dot | true = rectangle
  if (drawType == true){
    drawType = false;
    text.innerHTML = "Dot";
  }
  else{
    drawType = true;
    text.innerHTML = "Rectangle";
  }
}
// assigns the button for toggling with the previous function
var togglebutton = document.getElementById('toggle');
togglebutton.addEventListener('click', toggle);
// ===================================================================================

// ===================================================================================
var clearScreen = function(e){
  // gets the canvas
  var c = document.getElementById("slate");
  var ctx = c.getContext("2d");
  // adds white rectangle to clear it
  ctx.clearRect(0,0,c.width,c.height);
};

var clearbutton = document.getElementById('clear');
clearbutton.addEventListener('click', clearScreen)
// ===================================================================================

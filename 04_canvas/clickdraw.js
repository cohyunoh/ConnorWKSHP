var togglebutton = document.getElementById("toggle");

// true is rectangle
var drawType = true;

var toggle = function(e){
  var text = document.getElementById("toggletext");
  if (drawType == true){
    drawType = false;
    text.innerHTML = "Dot";
  }
  else{
    drawType = true;
    text.innerHTML = "Rectangle";
  }

togglebutton.addEventListener('click', toggle)

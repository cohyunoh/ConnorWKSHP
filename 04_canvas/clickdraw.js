
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
}
var togglebutton = document.getElementById('toggle');
togglebutton.addEventListener('click', toggle);

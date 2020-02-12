

var startPath = true;
var xcoord = null;
var ycoord = null;

var clearCanvas = function(e){ //clears the canvas
  var c = document.getElementById('playground');
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);
}

var clearbutton = document.getElementById('clear');
clearbutton.addEventListener('click', clearCanvas);

var draw = function(e){
  var c = document.getElementById('playground');
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#ff0000";
  ctx.beginPath(); //this begins the path for the arc to draw and clears the other paths drawn already
  ctx.arc(e.clientX - c.offsetLeft - 2.5, e.clientY - c.offsetTop - 2.5, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  if(startPath){
    ctx.fillStyle = "#ff0000";;
    ctx.moveTo(e.clientX - c.offsetLeft, e.clientY - c.offsetTop);
    startPath = false;
  }else{
    ctx.lineTo(e.clientX - c.offsetLeft, e.clientY - c.offsetTop);
    startPath = true;
  }
  ctx.stroke();
}

var pen = document.getElementById("playground");
pen.onmousedown = draw;

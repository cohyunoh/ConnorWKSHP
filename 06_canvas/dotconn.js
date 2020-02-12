//Connor Oh & Leia Park
//SoftDev1 pd9
//K06 -- Dot Dot Dot
//2020-02-11

var xcoord = null;
var ycoord = null;

var clearCanvas = function(e){ //clears the canvas
  var c = document.getElementById('playground');
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);
  xcoord = null;
  ycoord = null;
}

var clearbutton = document.getElementById('clear');
clearbutton.addEventListener('click', clearCanvas);

var draw = function(event){
  var c = document.getElementById('playground');
  var ctx = c.getContext("2d");
  var snapx = event.offsetX //takes a snapshot the current mousecoordinates when it was first pressed
  var snapy = event.offsetY
  ctx.fillStyle = "#ff0000";
  ctx.beginPath(); //this begins the path for the arc to draw and clears the other paths drawn already
  ctx.arc(event.offsetX, event.offsetY, 5, 0, 2 * Math.PI); //creates dot
  ctx.fill();
  ctx.moveTo(snapx, snapy); //moves drawing cursor to the starting coordinates
  if(xcoord != null && ycoord != null){ //if this is not the first dot then
    ctx.lineTo(xcoord, ycoord);//draw a line to current coordinates
    ctx.stroke();//make a stroke
  }
  xcoord = event.offsetX;//always replace the last x and y coords
  ycoord = event.offsetY;

}

var pen = document.getElementById("playground");
pen.addEventListener('click', draw);

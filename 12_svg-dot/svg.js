//Connor Oh & Leia Park
//SoftDev2 pd9
//K12 -- Connect the Dots
//2020-03-38

var xmlns = "http://www.w3.org/2000/svg"
var svg = document.getElementById('vimage'); //gets the svg element
var clearbutton = document.getElementById("clear"); //gets the clear button element
var drawLine = false; //checks if we drawing yet
var prevX, prevY; //the previous coordinates

var clearSvg = function(e){ //clears the canvas
  var clearedVimage = document.createElementNS(xmlns,"rect");
  clearedVimage.setAttribute("width", 500);
  clearedVimage.setAttribute("height", 500);
  clearedVimage.setAttribute("style", "fill:white");
  svg.append(clearedVimage);
  draw = false;
};

var drawCircle = function(e){
  x=e.offsetX;
  y=e.offsetY;
  
}

clearbutton.addEventListener('click', clearSvg);

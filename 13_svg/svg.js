//Connor Oh & Jeff Lin & Biraj Chowdhury -- SweetandSourGrapes
//SoftDev2 pd9
//K13 --  Ask Circles [Change || Die]
//2020-03-30

var xmlns = "http://www.w3.org/2000/svg"
var svg = document.getElementById('vimage'); //gets the svg element
var clearbutton = document.getElementById("clear"); //gets the clear button element


var clearSvg = function(e){ //clears the canvas
  /*
  var clearedVimage = document.createElementNS(xmlns,"rect");
  clearedVimage.setAttribute("width", 500);
  clearedVimage.setAttribute("height", 500);
  clearedVimage.setAttribute("style", "fill:white");
  svg.append(clearedVimage);
  */
  while(svg.firstChild){
	   svg.removeChild(svg.firstChild); //same as last time
  }
};



var drawCircle = function(e){
  if(e.target == svg){
      x=e.offsetX;
      y=e.offsetY;
      var circle = document.createElementNS(xmlns,"circle");
      circle.setAttribute ("r",30);
      circle.setAttribute("cx",x);
      circle.setAttribute("cy",y);
      circle.setAttribute("fill", "blue");
      //big brain move to add event listeners to the circles themselves
      circle.addEventListener('click', changeColor);
      circle.addEventListener('click', move);
      svg.appendChild(circle);
    }
};

var changeColor = function(e){
  //simply just replace the color
  if(e.target.getAttribute("fill") == "blue"){
    //pro tip: .target holds the attributes
    e.target.setAttribute("fill", "aqua");
  }
};

var move = function(e){
  if(e.target.getAttribute("fill") == "aqua"){
    e.target.setAttribute("fill", "blue");
    var x = Math.floor(Math.random() * 500);
    var y = Math.floor(Math.random() * 500);
    e.target.setAttribute("cx", x);
    e.target.setAttribute("cy", y);
  }
};



clearbutton.addEventListener('click', clearSvg);
svg.addEventListener('click',drawCircle);
svg.addEventListener('click',changeColor);

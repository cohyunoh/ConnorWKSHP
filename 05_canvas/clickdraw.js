//Connor Oh and Leia Park
//SoftDev1 pd9
//K05 -- ...and I want to Paint It Better
//2020-02-06
function makeRect() { //makes rectangle test
	ctx.fillRect( 50, 50, 100, 200);
}

function clearCanvas() { //clears the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//=============GLOBAL VARIABLES=============================
var canvas, ctx,
	mousePoint = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0
    ;
var mode = "";
var startX, startY = 0;
var mousedown = false;
//==========================================================

// sets up the canvas to get all the elements, the mode, the locations, based on user preference
function setup() {
    canvas = document.getElementById('slate');
    ctx = canvas.getContext("2d");
		mode = document.getElementById("mode").value;

    canvas.addEventListener("mousemove", function (e) {
      // if line
				if (mode == "line") {
					ctx.fillstyle = "#5799EC";
					findxy('move', e); //draws the actual line
				} else if (mode == "rect" && mousedown) { //when mouse moves and is rectangle and user is holding down click, then it draws the rectangle
					ctx.fillStyle = "#DFB3EA";
					console.log("making rect. start: "+startX+", "+startY); //debug purposes
					ctx.clearRect(startX, startY, prevX-startX, prevY-startY);  //this clears the area behind the rectangle
					prevX = e.clientX - canvas.offsetLeft; //offset gives the coordinates of the canvas so the mouse can start its coordinates at far left or top, etc.
					prevY = e.clientY - canvas.offsetTop;
					ctx.fillRect(startX, startY, prevX-startX, prevY-startY);
					console.log("width: " + (prevX-startX).toString())
				}
				console.log("move");
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        //findxy('down', e)
				mousedown = true;
				mode = document.getElementById("mode").value;

				if (mode == "dot") {
					ctx.fillStyle = "#FF0000";
          ctx.beginPath(); //this begins the path for the arc to draw and clears the other paths drawn already
					ctx.arc(e.clientX - canvas.offsetLeft - 2.5, e.clientY - canvas.offsetTop - 2.5, 5, 0, 2 * Math.PI);
          ctx.fill();
        } else if (mode == "rect"){
					startX = e.clientX - canvas.offsetLeft;
					prevX = e.clientX - canvas.offsetLeft;
					startY = e.clientY - canvas.offsetTop;
					prevY = e.clientY - canvas.offsetTop;
					console.log("start: "+ startX+", "+startY);
				} else {
					findxy('down', e);
				}
    }, false);
    canvas.addEventListener("mouseup", function (e) {
				mousedown = false;
        findxy('up', e)
				console.log("up");
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY); // start point of line
    ctx.lineTo(currX, currY); // draw line to current point
    // ctx.strokeStyle = 'black';
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.closePath();
}

function findxy(mouseMove, e) {
    if (mouseMove == 'down') {
        prevX = currX; // make new starting point at where mouse is down
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft; // mouse coordinate made current point
        currY = e.clientY - canvas.offsetTop;

        mousePoint = true;
    }
    if (mouseMove == 'up' || mouseMove == "out") {
        mousePoint = false;
    }
    if (mouseMove == 'move') {
        if (mousePoint) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}

// Simple Paint

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Vairables
let mouseIsPressed = false;
let mouseX, mouseY, pmouseX, pmouseY;
let size = 5;
let penColor = "black";

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {
  // Update Variable

  // Draw a circle if mouseIsPressed
  if (mouseIsPressed) {
    ctx.strokeStyle = penColor;
    ctx.lineWidth = size;
    ctx.beginPath();
    ctx.moveTo(pmouseX, pmouseY);
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
  }

  requestAnimationFrame(loop);
}

// Document Event Stuff
document.addEventListener("mousedown", mouseDownHandler);
document.addEventListener("mouseup", mouseUpHandler);
document.addEventListener("mousemove", mousemovehandler);
document.addEventListener("keydown", keyDownHandler);

function mouseDownHandler(event) {
  mouseIsPressed = true;
}

function mouseUpHandler() {
  mouseIsPressed = false;
}

function mousemovehandler(event) {
  // Save previous mouseX and mouseY
  pmouseX = mouseX;
  pmouseY = mouseY;
  // Update mouseX and mouseY
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}

function keyDownHandler(event) {
  if (event.code == "Space") {
    // Draw a background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
  } else if (event.code == "ArrowUp") {
    size++;
  } else if (event.code == "ArrowDown") {
    size--;
  } else if (event.code == "Digit1") {
    penColor = "red";
  } else if (event.code == "Digit2") {
    penColor = "green";
  } else if (event.code == "Digit3") {
    penColor = "blue";
  }
}

// Color Events
document.getElementById("redBtn").addEventListener("click", setRed);
document.getElementById("greenBtn").addEventListener("click", setGreen);
document.getElementById("blueBtn").addEventListener("click", setBlue);
document.getElementById("colorPicker").addEventListener("change", changeColor);

function setRed() {
  penColor = "red";
}

function setGreen() {
  penColor = "green";
}

function setBlue() {
  penColor = "blue";
}

function changeColor() {
  penColor = document.getElementById("colorPicker").value;
}

const dragItem = document.getElementById("planet");
const container = document.getElementById("element");
const ABSORBEZONE = document.getElementById("absorbe");
const HOLE = document.getElementById("hole");
const RESET = document.getElementById("reset");
const mouth = document.getElementById("mouth");

let active = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

RESET.onclick = resetAll;
container.onmousedown = dragStart;
container.onmouseup = dragEnd;
container.onmousemove = drag;

function dragStart(e) {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  if (e.target === dragItem) {
    active = true;
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  active = false;
}

function drag(e) {
  if (active) {
    e.preventDefault();
    let absorbe = ABSORBEZONE.getBoundingClientRect();
    let hole = HOLE.getBoundingClientRect();

    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;
    
    if(currentX >= absorbe.left) {
      mouth.classList.remove("smile");
      mouth.classList.add("sad");
      active = false;
      dragItem.classList.add("eatUp");
      RESET.style.display = "block";
    } else {
      setTranslate(currentX, currentY, dragItem);
    }

  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate(" + xPos + "px, " + yPos + "px)";
}

function resetAll (e) {
  dragItem.classList.remove("eatUp");
  setTranslate(50, 0, dragItem);
  currentX = null;
  currentY = null;
  initialX = null;
  initialY = null;
  xOffset = 0;
  yOffset = 0;
  RESET.style.display = "none";
  mouth.classList.remove("sad");
  mouth.classList.add("smile");
}

const winner = document.getElementById("winner");
const pow = document.getElementById("pow");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const options = ["rock", "paper", "scissors"];
let currentId, responseId;

function generateRandomOption() {
  return options[Math.floor(Math.random() * options.length)];
}

function reset () {
  document.querySelector("#left ." + currentId).style.display = "none";
  document.querySelector(`#right .${responseId}`).style.display = "none";
  pow.style.display = "none";
}

function checkWinner() {
  let isWinner = "false";
  isWinner = (currentId === "rock" && responseId === "scissors") ||
             (currentId === "paper" && responseId === "rock") ||
             (currentId === "scissors" && responseId === "paper");
  
  if(isWinner) {
    pow.style.display = "block";
    winner.innerText = "Yeah I'll give you this one up"
  } else if(currentId === responseId) {
    winner.innerText = "Lets call it a tie..."
  } else {
    winner.innerText = "All I do is win win no matter what!"
  }
}

function startGame(e) {
  if(currentId)
    reset();
  
  responseId = generateRandomOption();
  currentId = e.target.parentNode.id;

  document.querySelector(`#left .${currentId}`).style.display = "block";
  document.querySelector(`#right .${responseId}`).style.display = "block";
  
  
  checkWinner();
}

rock.onclick = startGame;
paper.onclick = startGame;
scissors.onclick = startGame;
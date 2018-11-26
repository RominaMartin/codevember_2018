const buttonRed = document.querySelector(".button.red");
const buttonGreen = document.querySelector(".button.green");
const warning = document.getElementById("warning");

const WARNINGS = [
  "Yeah, I'll just keep printing",
  "I'm unstopabble!",
  "You can't beat me",
  "So... are you in a hurry?",
  "Yeah keep pushing the buttons",
  "You should avoid wasting paper",
  "I just hate you so I wont stop this!",
  "Woops no ink mate"
]

function changeWarning() {
    warning.innerText = WARNINGS[Math.floor(Math.random() * WARNINGS.length)];
}

buttonRed.onclick = changeWarning;
buttonGreen.onclick = changeWarning;
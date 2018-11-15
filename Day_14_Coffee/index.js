document.getElementById("left_letter").onclick = changeLetter
document.getElementById("right_letter").onclick = changeLetter

function changeLetter(event) {
  let selected = prompt("Please enter name:", "Name");
  if(selected)
    event.target.innerHTML = selected[0].toUpperCase();
}
function setTime() {
  const date = new Date();

  setValue("second", obtainDegreesFrom("seconds", date));
  setValue("minute", obtainDegreesFrom("minutes", date));
  setValue("hour", obtainDegreesFrom("hour", date));
}

function obtainDegreesFrom(unit, value) {
  if (unit === "seconds") 
    return ((value.getSeconds() / 60) * 360) + 90;
  else if (unit === "minutes") 
    return ((value.getMinutes() / 60) * 360) + (value.getSeconds()/60 * 6) + 90;
  return ((value.getHours() / 12) * 360) + ((value.getMinutes()/60) * 30) + 90;
}

function setValue(selector, value) {
  
  document.querySelector(`.${selector}`).style.transform = `rotate(${value}deg)`;
}

setInterval(setTime, 1000);

setTime();

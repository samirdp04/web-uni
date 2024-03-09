var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

// contador

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");

const ofert = '10 May 2024';

function countTimer(){
  const newOfertDate = new Date(ofert);
  const currentDate = new Date();

  const totalSeconds = (newOfertDate - currentDate) / 1000;

  const daysCalc = Math.floor(totalSeconds / 3600 / 24);
  const hoursCalc = Math.floor(totalSeconds / 3600) % 24;
  const minsCalc = Math.floor(totalSeconds / 60) % 60;
  const secondsCalc = Math.floor(totalSeconds % 60);

  days.innerHTML = daysCalc;
  hours.innerHTML = hoursCalc;
  mins.innerHTML = minsCalc;
  seconds.innerHTML = secondsCalc;

}

countTimer();

setInterval(countTimer, 1000);
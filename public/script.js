const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");

const newYears = "1 Jan 2022";

var wallpapers = [
  "url('ironman.jpg')",
  "url('ironman1.jpg')",
  "url('ironman20.jpg')",
  "url('ironman46.jpg')",
];

function countdown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;

  const daysCount = Math.floor(totalSeconds / 3600 / 24);
  const hoursCount = Math.floor(totalSeconds / 3600) % 24;
  const minsCount = Math.floor(totalSeconds / 60) % 60;
  const secondsCount = Math.floor(totalSeconds) % 60;

  days.innerHTML = daysCount;
  hours.innerHTML = formatTime(hoursCount);
  mins.innerHTML = formatTime(minsCount);
  seconds.innerHTML = formatTime(secondsCount);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function setBackground() {
  let rand = Math.floor(Math.random() * 4);
  document.body.style.backgroundImage = `${wallpapers[rand]}`;

  document.body.style.transition = "3s";

  console.log(document.body.style.backgroundImage);
}

setBackground();
setInterval(setBackground, 5000);

countdown();
setInterval(countdown, 1000);

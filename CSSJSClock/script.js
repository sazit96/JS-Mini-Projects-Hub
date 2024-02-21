const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const second = now.getSeconds();
  const secondDegree = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  const mins = now.getMinutes();
  const minsDegree = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDegree}deg)`;

  const hours = now.getHours();
  const hoursDegree = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);
setDate();

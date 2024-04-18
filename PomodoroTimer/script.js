let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');

let workTime = 25;
let breaktTime = 5;
let seconds = '00';

window.onload = () => {
  document.getElementById('minutes').innerHTML = workTime;
  document.getElementById('seconds').innerHTML = seconds;
  workTittle.classList.add('active');
};

function start() {
  document.getElementById('start').style.display = 'none';
  document.getElementById('reset').style.display = 'block';

  seconds = 59;

  let workMinutes = workTime - 1;
  let breakMinutes = breaktTime - 1;

  breakCount = 0;

  let timerFuction = () => {
    document.getElementById('minutes').innerHTML = workMinutes;
    document.getElementById('seconds').innerHTML = seconds;

    seconds = seconds - 1;

    if (seconds == 0) {
      workMinutes = workMinutes - 1;
      if (workMinutes === -1) {
        if (breakCount % 2 === 0) {
          workMinutes = breakMinutes;
          breakCount++;

          breakTittle.classList.remove('active');
          workTittle.classList.add('active');
        }
      }
      seconds = 59;
    }
  };

  setInterval(timerFuction, 1000);
}

const hour = document.querySelector('hour');

function addZero(h) {
  if (h < 10) {
    h = '0' + h;
  }
  return h;
}

function digiTime() {
  const now = new Date();

  const showHour = addZero(now.getHours());
  document.getElementById('hours').innerHTML = showHour + ':';

  const showMin = addZero(now.getMinutes());
  document.getElementById('minutes').innerHTML = showMin + ':';

  const showSec = addZero(now.getSeconds());
  document.getElementById('seconds').innerHTML = showSec;

  // const showMil = now.getMilliseconds();
  // document.getElementById('milli').innerHTML = showMil;

  setInterval('digiTime()', 1000);
}
digiTime();

function addZero(h) { //this function checks if time (h) is less then 10. If so it will add a zero infront of the time.
  if (h < 10) {
    h = '0' + h;
  }
  return h;
}

function digiTime() {
  const now = new Date();

  const showHour = addZero(now.getHours());                     // addZero wraps all the get functions
  document.getElementById('hours').innerHTML = showHour + ':';

  const showMin = addZero(now.getMinutes());
  document.getElementById('minutes').innerHTML = showMin + ':';

  const showSec = addZero(now.getSeconds());
  document.getElementById('seconds').innerHTML = showSec;

  // const showMil = now.getMilliseconds();                     // The font had some trouble to update miliseconds fast enough
  // document.getElementById('milli').innerHTML = showMil;

  setInterval('digiTime()', 1000);
}

digiTime();


/**
 * two functions working together to generate a random color.
 */
function changeColor() {
  document.getElementById('container').style.color = randomColor();
}

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
} // This function is created by Paul Irish https://www.paulirish.com/2009/random-hex-color-code-snippets/



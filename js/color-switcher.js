const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnOpen = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
const bodyEl = document.querySelector('body');
const NOTIFICATION_DELAY = 1000;
let intervalId = undefined;
    

btnOpen.addEventListener('click', onButtonOpen);
btnStop.addEventListener('click', onButtonStop);

function onButtonOpen(evt) {
    showChangebackgroundColor();
}

function showChangebackgroundColor() {
    intervalId = setInterval(() => {
        console.log("меняем фон",randomIntegerFromInterval(0, colors.length));
        bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)]; 
    }, NOTIFICATION_DELAY);
    btnOpen.setAttribute('disabled', true);
}
 
function onButtonStop() {
    clearInterval(intervalId);
    btnOpen.removeAttribute('disabled');
}

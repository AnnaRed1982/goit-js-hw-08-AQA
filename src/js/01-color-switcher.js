function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
// console.log('startBtn', startBtn);

const stopBtn = document.querySelector('button[data-stop]');
stopBtn.setAttribute("disabled", "true")
// console.log('stopBtn', stopBtn);

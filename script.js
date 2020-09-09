const score = document.querySelector('.score')
const start = document.querySelector('.start')
const gameArea = document.querySelector('.game-area')
const car = document.createElement('div')

car.classList.add('car')

const key = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false
}

const setting = {
  start: false,
  score: 0,
  speed: 3
}

start.addEventListener('click', startGame)
document.addEventListener('keydown', startRun)
document.addEventListener('keyup', stopRun)

function startGame() {
  start.classList.add('hide')
  setting.start = true
  gameArea.appendChild(car)
  requestAnimationFrame(playGame)
}

function playGame() {
  if (setting.start) {
    requestAnimationFrame(playGame)
  }
}

function startRun(event) {
  event.preventDefault()
  key[event.key] = true
}

function stopRun(event) {
  event.preventDefault()
  key[event.key] = false
}





const timer = document.querySelector('#timerDisplay')
const btnInit = document.querySelector('#init')
const btnPause = document.querySelector('#pause')
const btnZero = document.querySelector('#zero')
let timeValue = new Date('01-01-1970 00:00:00')
let timeatual = new Date('01-01-1970 00:00:01')
let seconds = 0
let newTimerA
function updateTime(seconds) {
  const newTimer = new Date(seconds * 1000)
  return newTimer.toLocaleTimeString('pt-BR', {
    hourn12: false,
    timeZone: 'GMT'
  })
}

function updateTimer() {
  newTimerA = setInterval(function () {
    seconds++
    timer.innerHTML = updateTime(seconds)
  }, 1000)
}

btnInit.addEventListener('click', () => {
  clearInterval(newTimerA)
  timer.style.color = 'black'
  updateTimer()
})

btnPause.addEventListener('click', () => {
  clearInterval(newTimerA)
  timer.style.color = 'red'
})

btnZero.addEventListener('click', () => {
  clearInterval(newTimerA)
  timer.innerHTML = '00:00:00'
  seconds = 0
})

document.addEventListener('keyup', e => {
  switch (e.key) {
    case 'i':
      clearInterval(newTimerA)
      timer.style.color = 'black'
      updateTimer()
      break
    case 'p':
      clearInterval(newTimerA)
      timer.style.color = 'red'
      break
    case 'z':
      clearInterval(newTimerA)
      timer.innerHTML = '00:00:00'
      seconds = 0
      break
  }
})

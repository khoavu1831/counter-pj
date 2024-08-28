const startBtn = document.querySelector('.start-btn')
const changeBtn = document.querySelector('.change-btn')
const dpNum = document.querySelector('.number')
const defaultNum = document.querySelector('.num-random')
let counterInterval
let isRunning = false
let rdNum = parseInt(defaultNum.innerText)
let num = 0

function runCounter() {
    if (defaultNum.innerText === '?') {
        changeRandomDefaultNumber()
    }
    if (isRunning) {
        clearInterval(counterInterval)
        isRunning = false
        startBtn.innerText = 'Start'
        changeBtn.style.display = 'block'
        checkResult()
    } else {
        counterInterval = setInterval(() => {
            num++
            dpNum.innerText = `${num}`
        }, 100)
        isRunning = true
        changeBtn.style.display = 'none'
        startBtn.innerText = 'Stop'
    }
}

function changeRandomDefaultNumber() {
    rdNum = Math.floor(Math.random() * 100 + 1)
    defaultNum.innerText = `${rdNum}`
}

function checkResult() {
    if (num === rdNum) {
        changeRandomDefaultNumber()
        win()
    } else {
        lose()
    }
    num = 0
}

const feedback = document.querySelector('.container-feedback')
const feedbackBtn = document.querySelector('.ans-btn')
const feedbackCtx = document.querySelector('.feedback-ctx')

function win() {
    feedback.style.display = 'flex'
    feedbackCtx.style.color = 'rgb(18, 160, 18)'
    feedbackCtx.innerText = 'you win'
    feedbackBtn.innerText = 'Yeah :3'
    feedbackBtn.style.color = 'black'
    feedbackBtn.style.backgroundColor = 'chartreuse'
}

function lose() {
    feedback.style.display = 'flex'
    feedbackCtx.style.color = 'red'
    feedbackCtx.innerText = 'you lose'
    feedbackBtn.innerText = 'Try :('
    feedbackBtn.style.color = 'white'
    feedbackBtn.style.backgroundColor = 'purple'
}

function closeFeedback() {
    feedback.style.display = 'none'
}

startBtn.addEventListener('click', runCounter)
changeBtn.addEventListener('click', changeRandomDefaultNumber)
feedbackBtn.addEventListener('click',closeFeedback)

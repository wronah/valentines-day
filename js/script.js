const frontPocket = document.querySelector('.pocket')
const frontFlap = document.querySelector('.flap')
const envelope = document.querySelector('#envelope')
const btnOpen = document.querySelector('#open')
const btnReset = document.querySelector('#reset')
const btnYes = document.querySelector('#yes')
const btnNo = document.querySelector('#no')
const letter = document.querySelector('.letter')
const question = document.querySelector('.question')
const counterDisplay = document.querySelector('#counter-display')
const popup = document.querySelector('.popup')
const closePopup = document.querySelector('.close-popup')

const letterRect = letter.getBoundingClientRect();
const btnNoRect = btnNo.getBoundingClientRect();

let isOpen = false;
let isVisible = false;

frontFlap.addEventListener('click', (e) => {
    e.target.textContext = !isOpen ? open() : close();
    isOpen = !isOpen 
})
frontPocket.addEventListener('click', (e) => {
    e.target.textContext = !isOpen ? open() : close();
    isOpen = !isOpen 
})
btnYes.addEventListener('click', () => {
    !isVisible ? popup.classList.remove('hidden') : popup.classList.add('hidden')
    isVisible = !isVisible
})
closePopup.addEventListener('click', () => {
    !isVisible ? popup.classList.remove('hidden') : popup.classList.add('hidden')
    isVisible = !isVisible
})
btnNo.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (letterRect.width - btnNoRect.width)) + 1
    const j = Math.floor(Math.random() * (letterRect.height - btnNoRect.height)) + 1

    btnNo.style.left = i + 'px'
    btnNo.style.top = j + 'px'
})
btnNo.addEventListener('click', () => {
    const i = Math.floor(Math.random() * (letterRect.width - btnNoRect.width)) + 1
    const j = Math.floor(Math.random() * (letterRect.height - btnNoRect.height)) + 1

    btnNo.style.left = i + 'px'
    btnNo.style.top = j + 'px'
})


function open() {
    envelope.classList.add('open')
    envelope.classList.remove('close')
}

function close() {
    envelope.classList.add('close')
    envelope.classList.remove('open')
}
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
    if (!isVisible) {
        popup.classList.remove('hidden');
        const randomHeadingText = getRandomElementWeighted(headingTexts);
        const randomBottomText = getRandomElementWeighted(bottomTexts);
        const randomGif = getRandomElementWeighted(gifs);
        document.querySelector('#heading-text').innerHTML = randomHeadingText.text;
        document.querySelector('#bottom-text').innerHTML = randomBottomText.text;
        document.querySelector('.popup img').src = randomGif.src;

        confetti({
            particleCount: 300,
            spread: 150,
            origin: { y: 0.5 }
        });
    } else {
        popup.classList.add('hidden');
    }
    isVisible = !isVisible;
});
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

const headingTexts = [
    { text: "I LOVE YOU MY LITTLE GINGERBREAD", weight: 5 },
    { text: "YOU ARE MY SWEETEST LOVE", weight: 2 },
    { text: "MY HEART BEATS FOR YOU", weight: 2 },
    { text: "FOREVER MY LOVE, FOREVER MY HOME", weight: 3 },
    { text: "MY DARLING, MY EVERYTHING", weight: 1 },
    { text: "HUGS, KISSES, AND ENDLESS LOVE", weight: 1 },
    { text: "YOU ARE MY GREATEST GIFT", weight: 2 },
    { text: "MY LOVE STORY BEGINS WITH YOU", weight: 3 },
    { text: "MY HEART BELONGS TO YOU", weight: 1 },
    { text: "YOU ARE MY SALLY", weight: 5 }
];

const bottomTexts = [
    { text: "YOU COMPLETE ME IN EVERY WAY", weight: 3 },
    { text: "YOU ARE THE BEST IN THE WORLD", weight: 5 },
    { text: "YOU ARE MY HAPPINESS EVERY DAY", weight: 1 },
    { text: "LIFE IS BEAUTIFUL BECAUSE OF YOU", weight: 5 },
    { text: "MY LOVE FOR YOU IS ENDLESS", weight: 3 },
    { text: "EVERY DAY WITH YOU IS A BLESSING", weight: 5 },
    { text: "YOU ARE MY ONE AND ONLY", weight: 5 },
    { text: "THANK YOU FOR BEING YOU", weight: 2 },
    { text: "I LOVE YOU MORE THAN WORDS CAN SAY", weight: 2 },
    { text: "THERE’S NO ONE ELSE LIKE YOU", weight: 1 }
];

const gifs = [
    { src: "./gifs/mua.gif", weight: 10 },
    { src: "./gifs/mewing.gif", weight: 1 },
    { src: "./gifs/sally-mcqueen.gif", weight: 10 },
    { src: "./gifs/kitty-love.gif", weight: 5 },
    { src: "./gifs/patrick-star.gif", weight: 5 },
    { src: "./gifs/love-you.gif", weight: 5 }
];

function getRandomElementWeighted(arr) {
    const totalWeight = arr.reduce((sum, item) => sum + item.weight, 0);
    let random = Math.random() * totalWeight;
    for (const item of arr) {
        if (random < item.weight) {
            return item;
        }
        random -= item.weight;
    }
}
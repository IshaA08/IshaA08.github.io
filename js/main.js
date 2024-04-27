/***********************
 Set Header
************************/
var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

/***********************
 Display Mode
************************/
function dayMode() {
    document.documentElement.style.setProperty('--bg', '#e5eef4');
    document.documentElement.style.setProperty('--font', '#1F2232');
    document.documentElement.style.setProperty('--primary', '#62c5ff');
    document.documentElement.style.setProperty('--secondary', '#77c8ff');
    document.documentElement.style.setProperty('--headline', '#fff');
    document.documentElement.style.setProperty('--sky-top', '#00b3ff');
    document.documentElement.style.setProperty('--sky-bottom', '#b1e8ff');
    document.documentElement.style.setProperty('--stars-bright', '#00b3ff');
    document.documentElement.style.setProperty('--stars-normal', '#b1e8ff');
    document.documentElement.style.setProperty('--stars-variation', '#ffffffb3');
    document.documentElement.style.setProperty('--cards', '#b5bfc4');
    document.documentElement.style.setProperty('--shadow-primary', '#006ba1');
    document.documentElement.style.setProperty('--shadow-cards', '#616466');
}

function eveningMode() {
    document.documentElement.style.setProperty('--bg', '#F1DAC4');
    document.documentElement.style.setProperty('--font', '#1F2232');
    document.documentElement.style.setProperty('--primary', '#FFB7C5');
    document.documentElement.style.setProperty('--secondary', '#f8bec8');
    document.documentElement.style.setProperty('--headline', '#fff');
    document.documentElement.style.setProperty('--sky-top', '#ff879f');
    document.documentElement.style.setProperty('--sky-bottom', '#ffe3e9');
    document.documentElement.style.setProperty('--stars-bright', '#ffafc7');
    document.documentElement.style.setProperty('--stars-normal', '#ffbbd4e1');
    document.documentElement.style.setProperty('--stars-variation', '#ffffffb3');
    document.documentElement.style.setProperty('--cards', '#f0e2d2');
    document.documentElement.style.setProperty('--shadow-primary', '#fa96ae');
    document.documentElement.style.setProperty('--shadow-cards', '#f0bf84');
}

function nightMode() {
    document.documentElement.style.setProperty('--bg', '#6873a5');
    document.documentElement.style.setProperty('--font', '#f8ebf6');
    document.documentElement.style.setProperty('--primary', '#224597');
    document.documentElement.style.setProperty('--secondary', '#21335b');
    document.documentElement.style.setProperty('--headline', '#240d4f');
    document.documentElement.style.setProperty('--sky-top', '#040f19');
    document.documentElement.style.setProperty('--sky-bottom', '#152247');
    document.documentElement.style.setProperty('--stars-bright', '#fff692');
    document.documentElement.style.setProperty('--stars-normal', '#f1eba6');
    document.documentElement.style.setProperty('--stars-variation', '#d8fcff');
    document.documentElement.style.setProperty('--cards', '#766c89');
    document.documentElement.style.setProperty('--shadow-primary', '#080311');
    document.documentElement.style.setProperty('--shadow-cards', '#151517');
}

/***********************
 Analog Wall Clock
************************/
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
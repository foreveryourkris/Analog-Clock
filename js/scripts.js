const secondHand = document.querySelector('.s-hand');
const minsHand = document.querySelector('.m-hand');
const hoursHand = document.querySelector('.h-hand');

function setDate() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000)

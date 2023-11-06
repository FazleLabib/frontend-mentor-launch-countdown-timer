const topDay = document.getElementById('top-day');
const topHour = document.getElementById('top-hour');
const topMinute = document.getElementById('top-minute');
const topSecond = document.getElementById('top-second');

const bottomDay = document.getElementById('bottom-day');
const bottomHour = document.getElementById('bottom-hour');
const bottomMinute = document.getElementById('bottom-minute');
const bottomSecond = document.getElementById('bottom-second');


const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 14);


const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {

        clearInterval(countdownInterval);
        alert('Countdown has ended');
        
    } else {

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        topDay.innerHTML = days;
        topHour.innerHTML = hours;
        topDay.innerHTML = minutes;
        topSecond.innerHTML = seconds;

        bottomDay.innerHTML = days;
        bottomHour.innerHTML = hours;
        bottomDay.innerHTML = minutes;
        bottomSecond.innerHTML = seconds;

    }
}


updateCountdown();
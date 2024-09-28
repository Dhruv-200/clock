function updateAnalogClock() {
    var currentDate = new Date();

    var hours = currentDate.getHours() % 12 || 12; // Convert to 12-hour format
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var hourHand = document.getElementById("hour-hand");
    var minuteHand = document.getElementById("minute-hand");
    var secondHand = document.getElementById("second-hand");

    var hourRotation = 30 * (hours % 12) + (minutes / 60) * 30;
    var minuteRotation = 6 * minutes + (seconds / 60) * 6;
    var secondRotation = 6 * seconds;

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

function updateDigitalClock() {
    var currentDate = new Date();

    var hours = currentDate.getHours() % 12 || 12; // Convert to 12-hour format
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var hoursSpan = document.getElementById("hours");
    var minutesSpan = document.getElementById("minutes");
    var secondsSpan = document.getElementById("seconds");

    hoursSpan.textContent = padZero(hours);
    minutesSpan.textContent = padZero(minutes);
    secondsSpan.textContent = padZero(seconds);
}

function padZero(number) {
    return (number < 10) ? `0${number}` : number;
}

// Update the analog clock every second
setInterval(updateAnalogClock, 1000);

// Update the digital clock every second
setInterval(updateDigitalClock, 1000);

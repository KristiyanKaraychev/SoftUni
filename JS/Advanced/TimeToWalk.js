function timeToWalk(steps, footLength, speed) {
    let distance = steps * footLength;
    let speedMetersPerSec = (speed * 1000) / (60 * 60);

    let time = distance / speedMetersPerSec;
    let rests = Math.floor(distance / 500) * 60;

    time += rests;

    console.log(time);

    let seconds = Math.round(time % 60);
    let minutes = Math.floor(time / 60);
    let hours = Math.floor(minutes / 60);

    let secondsPrint = `${seconds}`;
    if (seconds < 10) {
        secondsPrint = "0" + secondsPrint;
    }

    let minutesPrint = `${minutes}`;
    if (minutes < 10) {
        minutesPrint = "0" + minutesPrint;
    }

    let hoursPrint = `${hours}`;
    if (hours < 10) {
        hoursPrint = "0" + hoursPrint;
    }

    console.log(`${hoursPrint}:${minutesPrint}:${secondsPrint}`);
}

timeToWalk(2564, 0.7, 5.5);

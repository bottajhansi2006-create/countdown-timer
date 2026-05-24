let timer;
let totalSeconds = 0;

function updateDisplay() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    document.getElementById("time").innerText = minutes + ":" + seconds;
}

function startTimer() {
    let min = parseInt(document.getElementById("minutes").value) || 0;
    let sec = parseInt(document.getElementById("seconds").value) || 0;

    totalSeconds = min * 60 + sec;

    if (totalSeconds <= 0) {
        alert("Enter valid time");
        return;
    }

    clearInterval(timer);

    timer = setInterval(function () {
        if (totalSeconds > 0) {
            totalSeconds--;
            updateDisplay();
        } else {
            clearInterval(timer);
            alert("Time's up!");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    totalSeconds = 0;
    document.getElementById("time").innerText = "00:00";
}
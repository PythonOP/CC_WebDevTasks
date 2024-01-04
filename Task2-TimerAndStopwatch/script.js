let timerInterval;
let stopwatchInterval;
let timerSeconds;
let stopwatchSeconds;
let lapCount = 1;

function toggle(view) {
    document.getElementById('timer').style.display = view === 'timer' ? 'block' : 'none';
    document.getElementById('stopwatch').style.display = view === 'stopwatch' ? 'block' : 'none';
}

function startTimer() {
    const inputSeconds = parseInt(document.getElementById('timerInput').value, 10);
    if (isNaN(inputSeconds) || inputSeconds <= 0) {
    alert('Please enter a valid number greater than 0.');
    return;
    }

    timerSeconds = inputSeconds;
    updateTimerDisplay();

    timerInterval = setInterval(function() {
    timerSeconds--;
    updateTimerDisplay();

    if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        alert('Timer has ended!');
    }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    document.getElementById('timerDisplay').innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('timerInput').value = '';
    document.getElementById('timerDisplay').innerText = '00:00';
}

function startStopwatch() {
    stopwatchSeconds = 0;
    updateStopwatchDisplay();

    stopwatchInterval = setInterval(function() {
    stopwatchSeconds++;
    updateStopwatchDisplay();
    }, 1000);
}

function updateStopwatchDisplay() {
    const minutes = Math.floor(stopwatchSeconds / 60);
    const seconds = stopwatchSeconds % 60;
    document.getElementById('stopwatchDisplay').innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function recordLap() {
    const lapTime = document.getElementById('stopwatchDisplay').innerText;
    const lapItem = document.createElement('li');
    lapItem.innerText = `Lap ${lapCount}: ${lapTime}`;
    document.getElementById('laps').appendChild(lapItem);
    lapCount++;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    document.getElementById('stopwatchDisplay').innerText = '00:00';
    document.getElementById('laps').innerHTML = '';
    lapCount = 1;
}
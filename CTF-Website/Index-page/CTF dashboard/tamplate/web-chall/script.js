document.addEventListener('DOMContentLoaded', () => {
    startTimer(1); // Start the timer for the first challenge
});

function startTimer(challengeNumber) {
    const timerElement = document.getElementById(`timer-${challengeNumber}`);
    let timeLeft = 6 * 60 * 60; // 6 hours in seconds

    const updateTimer = () => {
        let hours = Math.floor(timeLeft / 3600);
        let minutes = Math.floor((timeLeft % 3600) / 60);
        let seconds = timeLeft % 60;

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerElement.textContent = `Time Left: ${hours}:${minutes}:${seconds}`;
        
        if (timeLeft > 0) {
            timeLeft--;

            // Custom warning pop-ups
            if (timeLeft === 60 * 60) {
                alert(`Challenge ${challengeNumber}: Only 1 hour left!`);
            } else if (timeLeft === 30 * 60) {
                alert(`Challenge ${challengeNumber}: Only 30 minutes left!`);
            } else if (timeLeft === 10 * 60) {
                alert(`Challenge ${challengeNumber}: Only 10 minutes left!`);
            }
        } else {
            clearInterval(timerInterval);
            timerElement.textContent = 'Time is up!';
            alert(`Challenge ${challengeNumber} time is up! You cannot submit the answer anymore.`);
            disableSubmission(challengeNumber);
        }
    };

    updateTimer(); // Initial call to set the timer right away
    const timerInterval = setInterval(updateTimer, 1000);
}

function disableSubmission(challengeNumber) {
    const inputField = document.getElementById(`challenge-answer-${challengeNumber}`);
    const submitButton = inputField.nextElementSibling;

    inputField.disabled = true;
    submitButton.disabled = true;
}

function submitChallenge(challengeNumber) {
    const answer = document.getElementById(`challenge-answer-${challengeNumber}`).value;

    // Validate the answer
    if (!answer.startsWith("https://")) {
        alert("Invalid answer. It should start with 'https://{User-name}.github.io'.");
        return;
    }

    alert(`Your answer for Challenge ${challengeNumber}: ${answer} Submitted Successfully !!!`);
    
    // Proceed to the next challenge or show completion message if it's the last challenge
    if (challengeNumber < 4) {
        const currentChallenge = document.getElementById(`challenge-${challengeNumber}`);
        const nextChallenge = document.getElementById(`challenge-${challengeNumber + 1}`);
        
        currentChallenge.style.display = "none";
        nextChallenge.style.display = "flex";
        
        startTimer(challengeNumber + 1); // Start the timer for the next challenge
    } else {
        alert("Congratulations! You have completed all challenges.");
        window.location.href = 'thanku/thank-you.html';  // Adjust to your actual challenge page URL
    }
}

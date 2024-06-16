let currentChallenge = '';

function openDetails(challengeId) {
    currentChallenge = challengeId;
    document.getElementById('detailsModal').style.display = 'flex';
    // Set modal content based on challengeId
    document.getElementById('modal-title').textContent = `Challenge ${challengeId.replace('challenge', '')} Title`;
    document.getElementById('modal-description').textContent = `Detailed description of Challenge ${challengeId.replace('challenge', '')}.`;
    document.getElementById('modal-info').textContent = `Level: Difficulty | Points: X`;
}

function closeDetails() {
    document.getElementById('detailsModal').style.display = 'none';
}

function submitChallenge() {
    const input = document.getElementById('challengeInput').value;
    if (input.startsWith('https://')) {
        alert('Answer submitted successfully!');
        closeDetails();
    } else {
        alert('Invalid answer. Please make sure it starts with "https://".');
    }
}

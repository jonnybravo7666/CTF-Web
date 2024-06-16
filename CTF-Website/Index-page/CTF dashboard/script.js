document.addEventListener('DOMContentLoaded', () => {
    fetchSolvedCounts();
});

function fetchSolvedCounts() {
    fetch('get_solved_counts.php')
        .then(response => response.json())
        .then(data => {
            document.getElementById('web-dev-solved').textContent = 'Students Solved: ' + data.webDevSolved;
            document.getElementById('web-sec-solved').textContent = 'Students Solved: ' + data.webSecSolved;
        })
        .catch(error => console.error('Error fetching solved counts:', error));
}

function goToChallenges(type) {
    if (type === 'web-dev') {
        window.location.href = 'tamplate/transparent_page.html';
    } else if (type === 'web-sec') {
        window.location.href = 'WebApp Security Challenges/transparent_page.html';
    }
}

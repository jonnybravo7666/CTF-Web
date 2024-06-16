document.addEventListener('DOMContentLoaded', () => {
    const attemptsLeftElement = document.getElementById('remaining-attempts');
    let attemptsLeft = 5;

    function updateAttemptsLeft() {
        attemptsLeftElement.innerText = attemptsLeft;
        if (attemptsLeft <= 0) {
            document.querySelector('.cta-button').disabled = true;
            alert('You have been locked out. Please try again later.');
        }
    }

    document.getElementById('login-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember-me').checked;

        if (validateLoginForm(email, password)) {
            attemptsLeft--;
            updateAttemptsLeft();
            if (attemptsLeft > 0) {
                if (rememberMe) {
                    localStorage.setItem('email', email);
                }
                alert('Login successful!');
                window.location.href = '../Index-page/CTF dashboard/dashboard.html';
            } else {
                alert(`Invalid credentials. Attempts left: ${attemptsLeft}`);
            }
        }
    });

    function validateLoginForm(email, password) {
        if (!email || !password) {
            alert('Please fill out both fields.');
            return false;
        }
        if (!email.includes('@') || !email.includes('.')) {
            alert('Please enter a valid email address.');
            return false;
        }
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return false;
        }
        return true;
    }

    // Event listeners for redirecting to other pages
    document.getElementById('forgot-password-link').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '../Forget/forgot-password.html';
    });

    document.getElementById('register-link').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '../Registration/registration.html';
    });

    // Restore email from localStorage if "Remember Me" was checked
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
        document.getElementById('email').value = storedEmail;
        document.getElementById('remember-me').checked = true;
    }
});

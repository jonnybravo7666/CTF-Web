function validateForgotPasswordForm() {
    const email = document.getElementById('email').value;

    if (!email) {
        alert('Please enter your email address.');
        return false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Simulate sending the password reset link
    setTimeout(() => {
        alert('Password reset link has been sent to your email.');
        window.location.href = 'login.html';
    }, 1000);

    return false; // Prevent form from submitting normally
}

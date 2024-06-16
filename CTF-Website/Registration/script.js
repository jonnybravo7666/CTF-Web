function validateForm() {
    const email = document.getElementById('email').value;
    const receiptid = document.getElementById('receiptid').value;
    const teamname = document.getElementById('teamname').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;
    const terms = document.getElementById('terms').checked;

    if (!email || !receiptid || !teamname || !password || !confirmpassword || !terms) {
        alert('Please fill out all fields and agree to the terms and conditions.');
        return false;
    }

    if (password !== confirmpassword) {
        alert('Passwords do not match.');
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

    if (!document.getElementById('avatar').value) {
        alert('Please select an avatar.');
        return false;
    }

    alert('Registration successful! Redirecting to login page...');
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);

    return false;
}

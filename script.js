document.getElementById('loginButton').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            throw new Error('Invalid username or password');
        }
    })
    .then(data => {
        // Successful login, handle data as needed
        console.log('Login successful:', data);
        window.location.href = '/profile'; // Redirect to profile page
    })
    .catch(error => {
        // Unsuccessful login, display error message
        document.getElementById('error').textContent = error.message;
        console.error('Error:', error);
    });
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Make fetch request to your API endpoint
    fetch('https://auth-provider-production.up.railway.app/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
        .then(response => {
            if (response.ok) {
                // Login successful, redirect or do something else
                console.log('Login successful');
            } else {
                // Login failed, handle the error
                console.error('Login failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    try {
        const response = await fetch('https://auth-provider-production.up.railway.app/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        });

        const resData = await response.text();
        document.body.innerhtml = resData

        if (response.ok) {
            // Login successful, display the received HTML content in the current tab
            document.open(); // Clear the current document
            document.write(resData); // Write the received HTML content to the document
            document.close(); // Close the document
        } else {
            // Login failed, handle the error
            console.error('Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

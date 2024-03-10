document.getElementById('signupForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    var formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        age: parseInt(document.getElementById('age').value),
        email: document.getElementById('email').value,
        password: document.getElementById('create_password').value
    };
    try {
        const response = await fetch('https://auth-provider-production.up.railway.app/api/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (response.ok) {
            const resData = await response.json()
            console.log(resData)
            window.location.href = './signupwelc.html';
        } else {
            console.error('Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
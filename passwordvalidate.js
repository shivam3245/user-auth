function validateForm() {
    var createPassword = document.getElementById("create_password").value;
    var confirmPassword = document.getElementById("confirm_password").value;

    if (createPassword != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}
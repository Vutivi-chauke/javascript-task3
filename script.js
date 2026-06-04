
const form = document.getElementById("signupForm");
//const messageError = document.getElementByIdById("messageError");



form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");


    let isValid = true;

    if (username === "") {
        usernameError.textContent = "Username is required";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } 


    if (password === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else if (password.length < 8) {
        passwordError.textContent =
            "Password must be at least 8 characters";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        console.log("Form submitted successfully!");
    }
});

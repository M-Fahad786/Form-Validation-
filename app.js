let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let number = document.getElementById("number");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success")
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = '';
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
};

const validateInputs = () => {
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let numberValue = number.value.trim();

    if(usernameValue === '') {
        setError(username, "Username is required");
    } 
    else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, "Email is required");
    } 
    else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address");
    } 
    else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, "Password is required");
    } 
    else if (passwordValue.length <=8 ) {
        setError(password, "Password must be at least 8 character.")
    } 
    else {
        setSuccess(password);
    }

    if(numberValue === '') {
        setError(number, "Please enter a number.");
    } 
    else {
        setSuccess(number);
    }
};



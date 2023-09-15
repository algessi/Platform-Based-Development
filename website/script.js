const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});


// calculator.js

let currentInput = '';
let result = 0;
let operator = '';

function appendToResult(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function clearResult() {
    currentInput = '';
    result = 0;
    operator = '';
    document.getElementById('result').value = '';
}

function calculateResult() {
    if (operator === '+') {
        result += parseFloat(currentInput);
    } else if (operator === '-') {
        result -= parseFloat(currentInput);
    } else if (operator === '*') {
        result *= parseFloat(currentInput);
    } else if (operator === '/') {
        result /= parseFloat(currentInput);
    } else {
        result = parseFloat(currentInput);
    }

    currentInput = '';
    operator = '';
    document.getElementById('result').value = result;
}



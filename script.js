const navbarMenu = document.querySelector('.navbar .links');
const hamburgerBtn = document.querySelector('.hamburger-btn');
const hideMenuBtn = navbarMenu.querySelector('.close-btn');
const showPopupBtn = document.querySelector('.login-btn');
const formPopup = document.querySelector('.form-popup');
const hidePopupBtn = formPopup.querySelector('.close-btn');
const signupLoginLink = formPopup.querySelectorAll('.bottom-link a');

// Show mobile menu
hamburgerBtn.addEventListener('click', () => {
	navbarMenu.classList.toggle('show-menu');
});

// Hide mobile menu
hideMenuBtn.addEventListener('click', () => hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener('click', () => {
	document.body.classList.toggle('show-popup');
});

// Hide login popup
hidePopupBtn.addEventListener('click', () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove'](
			'show-signup'
		);
	});
});

// calculator.js

const display = document.getElementById('display');

const appendToResult = (value) => (display.value += value);
const clearDisplay = () => (display.value = '');

const calculateResult = () => {
	try {
		//? eval method to calculate displayed input
		const result = eval(display.value);

		//? return result value
		display.value = result;
	} catch (error) {
		display.value = 'Math Error';
	}
};

const updateResult = () => {
	try {
		eval(display.value);
	} catch (error) {
		display.value = 'Math Error';
	}
};

//!------------------- Old Functions ----------------------

// let currentInput = '';
// let result = 0;
// let operator = '';

// function appendToResult(value) {
// 	currentInput += value;
// 	document.getElementById('result').value = currentInput;
// }

// function clearResult() {
// 	currentInput = '';
// 	result = 0;
// 	operator = '';
// 	document.getElementById('result').value = '';
// }

// function calculateResult() {
// 	// Validate the input.
// 	if (!currentInput || isNaN(parseFloat(currentInput))) {
// 		alert('Invalid input. Please enter a number.');
// 		return;
// 	}

// 	// Perform the calculation.
// 	switch (operator) {
// 		case '+':
// 			result += parseFloat(currentInput);
// 			break;
// 		case '-':
// 			result -= parseFloat(currentInput);
// 			break;
// 		case '*':
// 			result *= parseFloat(currentInput);
// 			break;
// 		case '/':
// 			result /= parseFloat(currentInput);
// 			break;
// 		default:
// 			result = parseFloat(currentInput);
// 	}

// 	// Update the displayed result.
// 	document.getElementById('result').value = result;

// 	// Reset the current input and operator.
// 	currentInput = '';
// 	operator = '';
// }

// // Add a button click listener to each math operation button.
// document.getElementById('plus').addEventListener('click', () => {
// 	operator = '+';
// 	calculateResult();
// });

// document.getElementById('minus').addEventListener('click', () => {
// 	operator = '-';
// 	calculateResult();
// });

// document.getElementById('multiply').addEventListener('click', () => {
// 	operator = '*';
// 	calculateResult();
// });

// document.getElementById('divide').addEventListener('click', () => {
// 	operator = '/';
// 	calculateResult();
// });

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


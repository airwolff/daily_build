const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateElement = document.getElementById('date-picker');

// set date input minimum with todays date
const today = new Date().toISOString().split('T')[0];
dateElement.setAttribute('min', today);
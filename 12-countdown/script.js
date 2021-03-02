const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateElement = document.getElementById('date-picker');

// set date input minimum with todays date
const today = new Date().toISOString().split('T')[0];
dateElement.setAttribute('min', today);

// Update Values in Form Input
function updateCountdown(event) {
    event.preventDefault();
    console.log('event = ', event);
}

// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);
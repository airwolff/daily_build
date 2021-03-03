const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateElement = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = '';

// set date input minimum with todays date
const today = new Date().toISOString().split('T')[0];
dateElement.setAttribute('min', today);

// Update Values in Form Input
function updateCountdown(event) {
    event.preventDefault();
    countdownTitle = event.srcElement[0].value;
    countdownDate = event.srcElement[1].value;
    console.log(countdownTitle, countdownDate);
}

// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);
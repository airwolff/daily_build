const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateElement = document.getElementById('date-picker');
const countdownElement = document.getElementById('countdown');
const countdownElementTitle = document.getElementById('countdown-title');
const countdownButton = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;


let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;

// Set date input minimum with todays date
const today = new Date().toISOString().split('T')[0];
dateElement.setAttribute('min', today);

// Populate countdown and complete UI 
function updateDOM() {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log('distance: ', distance);
    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    console.log(days, hours, minutes, seconds);

    // Populate Countdown
    countdownElementTitle.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;


    // Hide Input
    inputContainer.hidden = true;
    // Show Countdown
    countdownElement.hidden = false;
}

// Update Values in Form Input
function updateCountdown(event) {
    event.preventDefault();
    countdownTitle = event.srcElement[0].value;
    countdownDate = event.srcElement[1].value;
    console.log(countdownTitle, countdownDate);
    // Get # Version of current date to update Dom
    countdownValue = new Date(countdownDate).getTime();
    console.log('countdownValue = ', countdownValue);
    updateDOM();
}

// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);
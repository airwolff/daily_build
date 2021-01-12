const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

function toggleNav() {
    // Toggle Menu Bars Open/Closed
    //.classList read-only property that returns a collection of class attributes of the element. This will add 'change' class
    menuBars.classList.toggle('change');
    // Toggle Menu Active/Not-Active
    overlay.classList.toggle('overlay-active');
    // set the class as a boolean
    if (overlay.classList.contains('overlay-active')) {
        // Animate Overlay
        overlay.classList.toggle('overlay-slide-right');
    } else {
        overlay.classList.toggle('overlay-slide-left');
        // reset to
        overlay.classList.toggle('overlay-active');
    };


}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);

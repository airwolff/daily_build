// Scroll event to trigger at the bottom of the page
window.addEventListener('scroll', () => {
    // window.innerheight = browser window
    // window.scrollY = how high we are from the top of the page
    // document.body.offsetHeight - 1000 = 
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        console.log('load more');
    }
})

// alternative to getElementById
document.querySelector('input[type="checkbox"]');

// Dark Mode Function
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    console.log(toggleIcon.children);
}


// Switches Theme Dynamically
function switchTheme(event) {
    let checked = event.target.checked;
    if (checked === true) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}
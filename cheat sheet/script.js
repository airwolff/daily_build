// Scroll event to trigger at the bottom of the page
window.addEventListener('scroll', () => {
    // window.innerheight = browser window
    // window.scrollY = how high we are from the top of the page
    // document.body.offsetHeight - 1000 = 
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        console.log('load more');
    }
})
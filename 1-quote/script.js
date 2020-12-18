const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const quoteNew = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show Load
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Load
function complete() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

// Get Quote API
async function getQuote() {
    loading();
    const proxyUrl = 'https://protected-caverns-93145.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        // if author blank make unknown
        if (data.quoteAuthor === '') {
            quoteAuthor.innerText = 'Unknown';
        } else {
            quoteAuthor.innerText = data.quoteAuthor;
        }
        // Reduce font size for long quotes
        if (data.quoteText.length > 120) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.quoteText;
        console.log('data = ', data);
        // stop loader
        complete();
    } catch (error) {
        // get another quote if you catch an error such as an unexpected token
        getQuote();
        console.log('Quote Error', error);
    }
}

// Tweet Quote
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = quoteAuthor.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank')
}

// Event Listeners
quoteNew.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);


//  On Load
getQuote();
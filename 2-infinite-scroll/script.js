const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
const count = 30;
const apiKey = config.unsplashApi;
const secretKey = config.unsplashSecretKey;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Check if images loaded
function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
    }
}

// Set attributes on DOM elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create Elements to use on DOM
function displayPhotos() {
    totalImages = photosArray.length;
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a></a> to link back to Unsplash
        const link = document.createElement('a');
        setAttributes(link, {
            href: photo.links.html,
            target: '_blank',
        });
        // Create <img>
        const image = document.createElement('img');
        setAttributes(image, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // Event listener checks when <img> is finished loading
        image.addEventListener('load', imageLoaded);
        // Put <img> in <a></a>, then both in imageContainer
        link.appendChild(image);
        imageContainer.appendChild(link);
    });
}

// Get photos using Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch error here
    }
}

// Scroll trigger api
window.addEventListener('scroll', () => {
    // window.innerheight = browser window
    // window.scrollY = how far we are from the top of the page
    // document.body.offsetHeight - 1000 = 
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        imagesLoaded = 0;
        getPhotos();
    }
})

// On Load
getPhotos();
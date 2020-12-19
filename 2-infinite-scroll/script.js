const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = config.unsplashApi;
const secretKey = config.unsplashSecretKey;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Set attributes on DOM elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create Elements to use on DOM
function displayPhotos() {
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
        console.log('data here ', photosArray);
    } catch (error) {
        // Catch error here
    }
}

// Scroll trigger api
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - )
})

// On Load
getPhotos();
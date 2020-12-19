// Unsplash API
const count = 10;
const apiKey = config.unsplashApi;
const secretKey = config.unsplashSecretKey;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
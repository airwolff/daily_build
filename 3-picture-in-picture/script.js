const videoElement = document.getElementById('video');
const button = document.getElementById('button'); 

// Select media stream, pass to element, then play
async function selectMediaStream() {
    try {
        // getDisplayMedia is what user chooses to assign to mediaStream 
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // passing mediaStream into videoElement as it's source object
        videoElement.srcObject = mediaStream;
        // once the video has loaded it's metadata it will call a function to play video
        videoElement.onloadedmetadata = () => {
            videoElement.onplay();
        }
    } catch (error) {
        // Catch error here
        console.log('error in media stream ', error);
    }
}

button.addEventListener('click', async() => {
    // Disable button 
    button.diabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On Load
selectMediaStream();
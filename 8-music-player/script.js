const albumArt = document.getElementById('albumArt');
const songTitle = document.getElementById('songTitle');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
    {
        name: '02_Kick_Over_the_Statues',
        displayName: 'Kick Over the Statues',
        artist: 'The Redskins',
    },
    {
        name: '01_Mirror_In_the_Bathroom',
        displayName: 'Mirror In the Bathroom',
        artist: 'English Beat',
    },
    {
        name: '01_The_Power_Is_Yours',
        displayName: 'The Power Is Yours',
        artist: 'The Redskins',
    },
    {
        name: '01_Wild_Creatures',
        displayName: 'Wild Creatures',
        artist: 'Neko Case',
    },
    {
        name: '02_Night_Still_Comes',
        displayName: 'Night Still Comes',
        artist: 'Neko Case',
    },
    {
        name: '03_Go_Get_Organised',
        displayName: 'Go Get Organised',
        artist: 'The Redskins',
    }
]

// Check if Playing
let isPlaying = false;

// Play Music
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

// Pause Music
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

// Play or Pause Event Listener 
// isPlaying ? asks is it's true
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
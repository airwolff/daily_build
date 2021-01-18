const albumArt = document.getElementById('albumArt');
const songTitle = document.getElementById('songTitle');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
    {
        name: '01-Mirror-In-the-Bathroom',
        displayName: 'Mirror In the Bathroom',
        artist: 'English Beat',
        album: 'i-just-cant-stop-it',
    },
    {
        name: '01-The-Power-Is-Yours',
        displayName: 'The Power Is Yours',
        artist: 'The Redskins',
        album: 'neither-washington-nor-moscow',
    },
    {
        name: '01-Wild-Creatures',
        displayName: 'Wild Creatures',
        artist: 'Neko Case',
        album: 'the-worse-things-get',
    },
    {
        name: '02-Night-Still-Comes',
        displayName: 'Night Still Comes',
        artist: 'Neko Case',
        album: 'the-worse-things-get',
    },
    {
        name: '03-Go-Get-Organised',
        displayName: 'Go Get Organised',
        artist: 'The Redskins',
        album: 'neither-washington-nor-moscow',
    },
    {
        name: '09-Self-Portrait-With-Electric-Brain',
        displayName: 'Self Portrait With Electric Brain',
        artist: 'Stereolab',
        album: 'chemical-chords',
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

// Update DOM
function loadSong(song) {
    songTitle.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    albumArt.src = `img/${song.album}.jpg`;
}


// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Next Song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// On Load - First Song
loadSong(songs[songIndex]);

// Update Progress Bar
function updateProgressBar(event) {
    if (isPlaying) {
        const { duration, currentTime } = event.srcElement;
        // Update progress bar
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        // Calculate duration
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if (durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`;
        }
        // Delay to avoid NaN
        if (durationSeconds) {
            durationElement.textContent = `${durationMinutes}:${durationSeconds}`;
        }
    }
}

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
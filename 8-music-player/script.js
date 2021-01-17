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
        name: 'jacinto-1',
        displayName: 'Jacinto 1',
        artist: 'Jacinto',
        album: 'chemical_chords',
    },
    {
        name: '02_Kick_Over_the_Statues',
        displayName: 'Kick Over the Statues',
        artist: 'The Redskins',
        album: 'neither_washington_nor_moscow',
    },
    {
        name: '01_Mirror_In_the_Bathroom',
        displayName: 'Mirror In the Bathroom',
        artist: 'English Beat',
        album: 'i_just_cant_stop_it',
    },
    {
        name: '01_The_Power_Is_Yours',
        displayName: 'The Power Is Yours',
        artist: 'The Redskins',
        album: 'neither_washington_nor_moscow',
    },
    {
        name: '01_Wild_Creatures',
        displayName: 'Wild Creatures',
        artist: 'Neko Case',
        album: 'the_worse_things_get',
    },
    {
        name: '02_Night_Still_Comes',
        displayName: 'Night Still Comes',
        artist: 'Neko Case',
        album: 'the_worse_things_get',
    },
    {
        name: '03_Go_Get_Organised',
        displayName: 'Go Get Organised',
        artist: 'The Redskins',
        album: 'neither_washington_nor_moscow',
    },
    {
        name: '09_Self_Portrait_With_Electric_Brain',
        displayName: 'Self Portrait With Electric Brain',
        artist: 'Stereolab',
        album: 'chemical_chords',
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
    songTitle.textContent = songs.displayName;
    artist.textContent = songs.artist;
    music.src = `music/${songs.name}.mp3`;
    albumArt.src = `img/${songs.album}.jpg`;
}

// On Load - First Song
loadSong(songs[0]);
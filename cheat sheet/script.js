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


// Logic for moving through song array
// Previous Song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length -1;
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

// Update DOM from objects in an array 
//songTitle = id in h2
function loadSong(song) {
    songTitle.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    albumArt.src = `img/${song.album}.jpg`;
}

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
    }
}

// IF we have a value, than run
if (durationSeconds) {
    durationElement.textContent = `${durationMinutes}:${durationSeconds}`;
}
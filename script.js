const backgrounds = [
    "https://static.myfigurecollection.net/upload/pictures/2023/02/05/3449724.gif",
    "https://media.giphy.com/media/lr2HUBZYqdFvHozNVh/giphy.gif", 
    "https://24.media.tumblr.com/55459c7225f4f0537d0b45279767cb33/tumblr_mtrefvmmjq1qedb29o1_500.gif" // Replace with a valid direct image URL
];

// Array of music URLs
const songs = [
    "https://files.catbox.moe/475l99.mp3",
    "https://files.catbox.moe/qvyqfh.mp3",
    "https://files.catbox.moe/puzzey.mp3"
];

// Function to change the background and play a song
function updateProfile() {
    let randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    let randomSong = songs[Math.floor(Math.random() * songs.length)];

    // Set the background
    document.body.style.backgroundImage = `url('${randomBg}')`;
    document.body.style.backgroundSize = "cover"; // Ensure it covers the full screen
    document.body.style.backgroundPosition = "center";

    // Create and play the audio
    let audio = document.createElement("audio");
    audio.src = randomSong;
    audio.autoplay = true;
    audio.loop = true;
    audio.style.display = "none"; // Hide the audio player
    document.body.appendChild(audio);
}

// Run function when the page loads
window.onload = updateProfile;

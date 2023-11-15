const audioFiles = {
    'A': 'sounds/leftCrash.mp3',
    'S': 'sounds/tom1.mp3',
    'D': 'sounds/snare.mp3',
    'G': 'sounds/kickbass.mp3',
    'J': 'sounds/tom2.mp3',
    'K': 'sounds/tom3.mp3',
    'L': 'sounds/rightCrash.mp3'
};

function playAudio(key) {
    const audio = new Audio(audioFiles[key]);
    audio.play();
}
document.addEventListener('keydown', function(event) {
    const keyPressed = event.key.toUpperCase();

    if (audioFiles[keyPressed]) {
        playAudio(keyPressed);
    }
});

// Sound Variables 
export const soundButton = document.getElementById("soundbackground");
const muteButtonImage = document.getElementById("sound_button")
	
// Sound EL (start sound, mute and unmute). Default is muted. 
soundButton.addEventListener("click", () => {
	if (startingAudio.muted === false) {
		startingAudio.muted = true;
		muteButtonImage.style.backgroundImage = "url('./assets/mute/mute.png')"
	} else {
		startingAudio.muted = false;
		startingAudio.play();
		muteButtonImage.style.backgroundImage = "url('./assets/mute/sound_on.png')"
	}
	soundButton.appendChild(startingAudio);
})

// Sound - Introduction variables. 
const startingAudio = document.createElement("AUDIO");
startingAudio.src = "./assets/music/intro_music.mp3"
startingAudio.loop = true; 
startingAudio.autoplay = true; 
startingAudio.muted = true;
soundButton.appendChild(startingAudio);

export default soundButton;
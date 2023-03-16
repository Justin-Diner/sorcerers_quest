import Sorcerer from './scripts/sorcerer';
import Castle from './scripts/castle';
import Game from './scripts/game';

document.addEventListener("DOMContentLoaded", () => {
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");
	canvas.height = 576; // Setting pixel height of canvas. 
	canvas.width = 1024; // Setting pixel width of canvas. 

	// Starting Modal Variables
	const startingModal = document.getElementById("starting-modal")
	const start_buttons = document.getElementsByClassName("start_button")
	const allModals = document.getElementsByClassName('modal')

	// Sound Variables 
	const muteButton = document.getElementById("soundbackground");
	const muteButtonImage = document.getElementById("sound_button")

	// Main game, sorcerer, and castle variables. 
	const castle = new Castle({position: {x: 680, y: 480}});
	const sorcerer = new Sorcerer({x: 180, y: 280});
	const game = new Game(sorcerer, castle);

	// Sound - Introduction  variables. 
	let startingAudio = document.createElement("AUDIO");
	startingAudio.src = "./assets/music/intro_music.mp3"
	startingAudio.loop = true; 
	startingAudio.autoplay = true; 
	startingAudio.muted = true;
	muteButton.appendChild(startingAudio);
	
	// Game Started state flag. 
	let gameStarted = false;

	// Preloads the background. Setting the color of canvas to gray, etc.
	// Sound EL (start sound, mute and unmute). Default is muted. 
	muteButton.addEventListener("click", () => {
		if (startingAudio.muted === false) {
			startingAudio.muted = true;
			muteButtonImage.style.backgroundImage = "url('./assets/mute/mute.png')"
		} else {
			startingAudio.muted = false;
			startingAudio.play();
			muteButtonImage.style.backgroundImage = "url('./assets/mute/sound_on.png')"
		}
		muteButton.appendChild(startingAudio);
	})

	// Setting the start button on the starting Modal. 
	for (let i = 0; i < start_buttons.length; i++) {
		start_buttons[i].addEventListener("click", () => {
			// Once clicked the animate() loop will run and hide display. 
			gameStarted = true;
			changeDisplay(allModals);
			game.start(ctx); 
			animate();
	})}

	// When this is called below, if started, the game animates. 
	function animate() { 
		if (gameStarted) {
			// If the game.animate() ever returns true, the game is over. 
			const gameFlag = game.animate(ctx);
			if (gameFlag) {
				gameStarted = false;
				return
			}
		}
		// Repeats the method inside it 60 times per second. 
		requestAnimationFrame(animate);
	}
});

function changeDisplay(modals) {
	for (let i = 0; i < modals.length; i++) {
		console.log(modals);
		modals[i].style.display = "none";
	}
}


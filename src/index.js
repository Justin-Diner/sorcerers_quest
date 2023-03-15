import Sorcerer from './scripts/sorcerer';
import Game from './scripts/game'
import Castle from './scripts/castle';



document.addEventListener("DOMContentLoaded", () => {
	// Game
	const title = document.getElementById("title");
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");
	canvas.height = 576; // height and width are this to fit most browsers. 
	canvas.width = 1024;

	const castle = new Castle({position: {x: 680, y: 480}})
	const sorcerer = new Sorcerer({x: 180, y: 280});
	const game = new Game(sorcerer, castle);
	
	let started = false;
	game.start(ctx);

	let startingModal = document.getElementById("starting-modal")
	let start_buttons = document.getElementsByClassName("start_button")
	console.log(startingModal);

	for (let i = 0; i < start_buttons.length; i++) {
		start_buttons[i].addEventListener("click", () => {
		started = true;
		startingModal.style.display = "none";
	})}


	function animate() { // Call this to animate anything inside. 
		if (started) {
			let endingFlag = game.animate(ctx);
			startingModal.style.display = "none"
			if (endingFlag === true) {
				return
			}
		}
		requestAnimationFrame(animate);
	}

	animate();
});




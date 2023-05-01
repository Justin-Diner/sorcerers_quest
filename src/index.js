import Sorcerer from './scripts/sorcerer';
import Castle from './scripts/castle';
import Game from './scripts/game';

export const CANVAS_HEIGHT = 576;
export const CANVAS_WIDTH = 1024;

document.addEventListener("DOMContentLoaded", () => {
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");
	canvas.height = CANVAS_HEIGHT; // Setting pixel height of canvas. 
	canvas.width = CANVAS_WIDTH; // Setting pixel width of canvas. 
	ctx.fillStyle = "gray"; // Turns the fillstyle to Gray
	ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	console.log(`Canvas Height: ${canvas.clientHeight}`);
	console.log(`Canvas Width: ${canvas.clientWidth}`);

	// Starting Modal Variables
	const start_buttons = document.getElementsByClassName("start_button")
	const allModals = document.getElementsByClassName('modal')
	closeAllModals(allModals)

	// Main game, sorcerer, and castle variables. 
	const castle = new Castle({position: {x: 680, y: 480}});
	const sorcerer = new Sorcerer({x: 180, y: 280});
	const game = new Game(sorcerer, castle);
	
	// Game Started state flag. 
	//let gameStarted = false;
	let gameStarted = true;
	animate();

	// Preloads the background. Setting the color of canvas to gray, etc.
	// Setting the start button on the starting Modal. 
	for (let i = 0; i < start_buttons.length; i++) {
		start_buttons[i].addEventListener("click", () => {
			// Once clicked the animate() loop will run and hide display. 
			gameStarted = true;
			closeAllModals(allModals);
			game.start(ctx); 
			animate();
	})}

	function closeAllModals(modals) {
		for (let i = 0; i < modals.length; i++) {
			modals[i].style.display = "none";
		}
	}

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




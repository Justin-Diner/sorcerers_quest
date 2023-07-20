import Sorcerer from './scripts/sorcerer';
import Game from './scripts/game';
import LevelOne from './scripts/levels/level_one';

export const CANVAS_HEIGHT = 576;
export const CANVAS_WIDTH = 1024;

document.addEventListener("DOMContentLoaded", () => {
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");
	canvas.height = CANVAS_HEIGHT; 
	canvas.width = CANVAS_WIDTH; 
	ctx.fillStyle = "gray"; 
	ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	// Modals and Buttons 
	const allModals = document.getElementsByClassName('modal');
	const startingModal = document.getElementById('starting-modal');
	const startGameButton = document.getElementById("start_game_button");
	const replayButton = document.getElementById("replay_button");
	const losingButton = document.getElementById("losing_button");
	const winningModal = document.getElementById("winning-modal");

	closeAllModals(allModals)

	// Main game, initial sorcerer, and initial castle variables. These reset on replay.
	let gameStarted = false;
	let levelOne = new LevelOne();
	let sorcerer = new Sorcerer({x: 180, y: 280});
	let game = new Game(sorcerer, levelOne.castle);

	// Event Listeners for Buttons
	startGameButton.addEventListener("click", () => {
		closeAllModals(allModals);
		gameStarted = true;
		animate();
	})

	losingButton.addEventListener("click", () => {
		restartGame();
	})

	replayButton.addEventListener("click", () => {
		restartGame();
	})
	
	// Display Initial Start Modal On Game Start
	startingModal.style.display = "flex";

	// Helper Functions
	function closeAllModals(modals) {
		for (let i = 0; i < modals.length; i++) {
			modals[i].style.display = "none";
		}
	}

	function restartGame() {
		levelOne = new LevelOne();
		sorcerer = new Sorcerer({x: 180, y: 280});
		game = new Game(sorcerer, levelOne.castle);
		closeAllModals(allModals);
		gameStarted = true;
		animate();
	}

	// Main Animate Function 
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
        setTimeout(() => {
            requestAnimationFrame(animate);
        }, 1000/120)
		
	}
})




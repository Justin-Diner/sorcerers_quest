import Sorcerer from './scripts/sorcerer';
import Game from './scripts/game'

document.addEventListener("DOMContentLoaded", () => {
	// Game
	const title = document.getElementById("title");
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");
	canvas.height = 576; // height and width are this to fit most browsers. 
	canvas.width = 1024;

	const sorcerer = new Sorcerer({x: 180, y: 280})
	const game = new Game(sorcerer);

	function animate() { // Call this to animate anything inside. 
		game.start(ctx);
		requestAnimationFrame(animate);
	}

	animate();
});




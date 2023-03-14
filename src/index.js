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
	const sorcerer = new Sorcerer({x: 180, y: 280})
;
	const game = new Game(sorcerer, castle);
	

	game.start(ctx);

	function animate() { // Call this to animate anything inside. 
		game.animate(ctx);
		requestAnimationFrame(animate);
	}

	animate();
});




import Sorcerer from './sorcerer';
import StillObject from './still_object'
import FireArrow from './fire_arrow';

let background = new StillObject({
	position : { x: 2, y: 2 },
	imageSrc: '../assets/background/sunnybackground.jpg'}
);

const scaledCanvas = {
	width:  1024/ 4,
	height: 576 / 4
}

const acceptableKeys = {
	d: {
		pressed: false
	},
	a: {
		pressed: false
	}, 
	space: {
		pressed: false
	}
}

export default class Game {
	
	constructor(sorcerer) {
		this.sorcerer = sorcerer;

		window.addEventListener("keydown", (e) => {
			if (e.key === "d") {
				acceptableKeys.d.pressed = true; 
				sorcerer.moveRight();
			} else if (e.key === "a") {
				acceptableKeys.a.pressed = true; 
				sorcerer.moveLeft();
			} else if (e.key === " ") {
				acceptableKeys.space.pressed = true; 
				sorcerer.jump();
			}
		})

		window.addEventListener("keyup", (e) => {
			if (e.key === "d") {
				acceptableKeys.d.pressed = false; 
				this.sorcerer.status = "idle";
			} else if (e.key === "a") {
				acceptableKeys.a.pressed = false; 
				this.sorcerer.status = "idle";
			} else if (e.key === " ") {
				this.sorcerer.status = "idle";
				acceptableKeys.space.pressed = false; 
			}
		})

	}

	start(ctx) {
		let arrow = new FireArrow({position: {
			x: 900, 
			y: 40
		}})
		ctx.fillStyle = "white"; // canvas is white
		ctx.fillRect(10, 10, canvas.width, canvas.height); // filling the canvas background
		// Background (scaled to bottom left)
		
		ctx.save(); // image is 688 x 432
		ctx.scale(4, 4) // Enlarges by 4 times on x and y axis
		ctx.translate(0, -background.image.height + scaledCanvas.height)
		background.draw(ctx);
		ctx.restore();
		
		this.sorcerer.draw(ctx);
		arrow.draw(ctx);
	

		// Initial velocity = 0 
		this.sorcerer.velocity.x = 0; 
		// Increase velocity based on what's pressed
		if (acceptableKeys.d.pressed) {
			this.sorcerer.velocity.x = 5;
		} else if (acceptableKeys.a.pressed) {
			this.sorcerer.velocity.x = -5
		}
	}
}
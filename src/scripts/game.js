import Sorcerer from './sorcerer';
import StillObject from './still_object'
import FireArrow from './fire_arrow';
import { Util } from './dist';

let background = new StillObject({
	position : { x: 0, y: 0 },
	imageSrc: './assets/background/sunnybackground.jpg'}
);

const scaledCanvas = {
	width:  1024 / 4,
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

function randomShootingPosition() {
	let height = Math.floor(576 / 2.5)
	let width = 1024
	return { position: {
		x: height * Math.random(),
		y: width * Math.random()
		}
	}

}

let arrow = new FireArrow({position: {
	x: 900,
	y: 80
	}
})

export default class Game {
	
	constructor(sorcerer) {
		this.sorcerer = sorcerer;
		this.arrow = [];

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

		window.addEventListener('keydown', function(e) {
			if(e.key == " " && e.target == document.body) {
				e.preventDefault();
			}
		});
	}

	start(ctx) {
		ctx.fillStyle = "white"; // canvas is white
		ctx.fillRect(0, 30, canvas.width, canvas.height); // filling the canvas background

		// Background (scaled to bottom left)
		ctx.save(); // image is 688 x 432
		ctx.scale(4, 4) // Enlarges by 4 times on x and y axis
		ctx.translate(0, -background.image.height + scaledCanvas.height)
		background.draw(ctx);
		ctx.restore();
		setInterval(() => {
			arrow.reset();
		}, 4000)
		this.arrow.push(arrow);
		
	}

	animate(ctx) {
		ctx.fillStyle = "white"; // canvas is white
		ctx.fillRect(0, 30, canvas.width, canvas.height); // filling the canvas background
		
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
		this.isCollided();
	}

	isOutOfBounds(pos) {
		let xPos = pos[0]
		let yPos = pos[y]
		return (xPos < 0) || (xPos > 1024) || (yPos > 576)
		//|| || (yPos < 0) 
	}

	isCollided() {
		let arrow = this.arrow[0]
		let sorcerer = this.sorcerer

		let sorcererHitBox = sorcerer.hitboxDims();
		let topLeft = sorcererHitBox.topLeft;
		//console.log(`TopLeft: ${topLeft}`)
		let topRight = sorcererHitBox.topRight;
		//console.log(`TopRight: ${topRight}`)
		let bottomLeft = sorcererHitBox.bottomLeft;
		//console.log(`BottomLeft: ${bottomLeft}`)
		let bottomRight = sorcererHitBox.bottomRight;
		let topDist = Util.dist(topLeft, topRight);

		
		if ((arrow.hitbox.position.x > topLeft[0] && arrow.hitbox.position.x < topRight[0]) && (arrow.hitbox.position.y < bottomRight[1] && arrow.hitbox.position.y > topRight[1])) {
			sorcerer.health -= 10;
		}
	}

}

// if arrow x is between top left x and top right x 
// AND 
// if arrow y is between top right and bottom right y position (HIT)
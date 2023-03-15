import Sorcerer from './sorcerer';
import StillObject from './still_object'
import FireArrow from './fire_arrow';
import { Util } from './dist';
import HealthBar from './health_bar'
import Camera from './camera'
import Castle from './castle';


const castle = new Castle({position: {x: 680, y: 480}})
const sorcerer = new Sorcerer({x: 180, y: 280});

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
	}, 
	c: {
		pressed: false
	}
}

let cLocked = false;

export default class Game {
	
	constructor(sorcerer, castle) {
		this.sorcerer = sorcerer;
		this.castle = castle;
		this.arrow = [];
		this.camera = new Camera({
			position: {
				x: this.sorcerer.position.x, 
				y: this.sorcerer.position.y
			}}
		)

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
			} else if (e.key === "c" && !(cLocked)) {
				this.lockC();
				sorcerer.cast();
				
				this.castle.health -=10
				this.castle.healthbar.decrease();
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
				acceptableKeys.space.pressed = false; 
			} else if (e.key === "c") {
				acceptableKeys.c.pressed = false;
			}
		})

		window.addEventListener('keydown', function(e) {
			if(e.key == " " && e.target == document.body) {
				e.preventDefault();
			}
		});
	}

	start(ctx) {
		ctx.fillStyle = "gray"; // canvas is white
		ctx.fillRect(0, 30, canvas.width, canvas.height); // filling the canvas background

		// Background (scaled to bottom left)
		ctx.save(); // image is 688 x 432
		ctx.scale(4, 4) // Enlarges by 4 times odn x and y axis
		ctx.translate(this.camera.position.x, -background.image.height + scaledCanvas.height)
		background.draw(ctx);
		ctx.restore();
		let arrow = new FireArrow({position: {
			x: 900,
			y: 80
			}
		})
		this.arrow.push(arrow);
		setInterval(() => {
			this.arrow[0].reset();
			console.log("Start Timer")
		}, 2000)
		this.camera = new Camera({
			position: {
				x: 0, 
				y: 0
			}
		})
	}

	animate(ctx) {
		ctx.fillStyle = "white"; // canvas is white
		ctx.fillRect(0, 30, canvas.width, canvas.height); // filling the canvas background
		
		// Background (scaled to bottom left)
		ctx.save(); // image is 688 x 432
		ctx.scale(4, 4) // Enlarges by 4 times on x and y axis
		ctx.translate(-this.camera.position.x, -background.image.height + scaledCanvas.height)
		background.draw(ctx);
		ctx.restore();

		// HEALTH BAR
		this.sorcerer.healthBar.draw(ctx);
		this.castle.draw(ctx);
		this.castle.healthbar.draw(ctx);

		this.sorcerer.draw(ctx);
		this.arrow[0].draw(ctx);

		// Initial velocity = 0 
		this.sorcerer.velocity.x = 0; 
		// Increase velocity based on what's pressed
		if (acceptableKeys.d.pressed) {
			this.sorcerer.velocity.x = 5;
		} else if (acceptableKeys.a.pressed) {
			this.sorcerer.velocity.x = -5
		}
		this.isCollided();
		if (this.isVictory() === true) {
			return true;
		}
		
		if (this.isGameOver(ctx) === true) {
			return true; 
		}
		//this.shouldPanCameraToTheRight();
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
		let topRight = sorcererHitBox.topRight;
		let bottomRight = sorcererHitBox.bottomRight;

		if (this.arrow[0].hit === false) {
			if ((arrow.hitbox.position.x > topLeft[0] && arrow.hitbox.position.x < topRight[0]) && (arrow.hitbox.position.y < bottomRight[1] && arrow.hitbox.position.y > topRight[1])) {
				this.hit();
				this.arrow[0].ifHit();
				sorcerer.health -= 10;
				this.sorcerer.healthBar.decrease();
			}
		}
	}

	shouldPanCameraToTheRight() {
		const cameraboxRightSide = this.sorcerer.camerabox.position.x + this.sorcerer.camerabox.width;

		if (cameraboxRightSide >= 1026) {
			console.log(`Socerer Vel: ${this.sorcerer.velocity.x} Camera Vel: ${this.camera.position.x}`)
			console.log(this.camera)
			this.camera.position.x += this.sorcerer.velocity.x
		}
	}

	hit() {
		this.arrow[0].hit = true; 
		this.arrow.slice(0, 1)
	}

	isGameOver(ctx) {
		if (this.sorcerer.health < 1) {
			let losingModal = document.getElementById("losing-modal")
			let losing_button = document.getElementById("losing_button")
			losing_button.addEventListener("click", () => {
				losingModal.style.display = "none";
				location.reload();
			})
			losingModal.style.display = "flex";
			return true;
		} 
	}

	isVictory() {
		if (this.castle.health < 1) {
			let winningModal = document.getElementById("winning-modal")
			let winning_button = document.getElementById("winning_button")
			winning_button.addEventListener("click", () => {
				winningModal.style.display = "none";
				location.reload();
			})
			winningModal.style.display = "flex";
			return true; 
		}
	}

	lockC() {
		if (!cLocked) {
			cLocked = true; 
			setTimeout(this.unlockC, 3000);
		} 
	}

	unlockC() {
		cLocked = false;
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

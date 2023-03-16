import Sorcerer from './sorcerer';
import StillObject from './still_object'
import FireArrow from './fire_arrow';
import { Util } from './dist';
import HealthBar from './health_bar'
import Camera from './camera'
import Castle from './castle';

let backgroundImage = new StillObject({
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

function randomShootingPosition() {
	let spawnHeight = Math.floor(576 / 3)
	let spawnWidth = 1024
	let xPosition = spawnWidth * Math.random();
	let yPosition = spawnHeight * Math.random()
	let newDirection; 
	let velocity = {
		x: 0, 
		y: 0
	};

	if (xPosition < 512) {
		newDirection = "left";
	} else {
		newDirection = "right";
	}

	if (newDirection = "left") {
		velocity.x = 3;
	} else {
		velocity.x = -3;
	}

	return { position: {
		x: xPosition,
		y: yPosition
		},
		currentDirection : newDirection, 
		velocity : {
			x: velocity.x,
			y: velocity.y
		}
	}
}

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
		),
		this.gameStarted = true;

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
		ctx.fillStyle = "gray"; // Turns the fillstyle to Gray
		ctx.fillRect(0, 30, canvas.width, canvas.height); // Filling the canvas background on start. 

		// Background (scaled to bottom left)
		ctx.save(); // image is 688 x 432
		ctx.scale(4, 4) // Enlarges by 4 times odn x and y axis
		ctx.translate(this.camera.position.x, -backgroundImage.image.height + scaledCanvas.height)
		backgroundImage.draw(ctx);
		ctx.restore();

		// Initial Arrows
		let initialArrowOne = new FireArrow({
			position: { x: 900, y: 80}, 
			currentDirection: "right",
			velocity: {
				x: -3,
				y: 2
			}
		}); 
		let initialArrowTwo = new FireArrow({
			position: { x: 20, y: 80}, 
			currentDirection: "left",
			velocity: {
				x: 3,
				y: 2
			}
		});
		this.arrow.push(initialArrowOne);
		this.arrow.push(initialArrowTwo);
		this.arrowInterval = setInterval(() => {
			for (let i = 0; i < this.arrow.length; i++) {
			this.arrow[i].draw(ctx);
			this.arrow[i].reset();
			}
		}, 2000)
		
		// Sets the background in the right spot (need to adjust this).
		this.camera = new Camera({
			position: { 
				x: 0, 
				y: 0
			}
		})
	}

	animate(ctx) {
		// Background (scaled to bottom left)
		ctx.save(); // Saving context. Pushes current stack onto state. 
		ctx.scale(4, 4) // Enlarges  by 4 times on x and y axis
		ctx.translate(-this.camera.position.x, -backgroundImage.image.height + scaledCanvas.height)
		backgroundImage.draw(ctx);
		ctx.restore();
	
		// Drawing Socerer and Castle Healthbars
		// Sorcerer must be drawn 2nd for fireball animation to be in front of castle. 
		this.castle.draw(ctx);
		this.castle.healthbar.draw(ctx);
		this.sorcerer.draw(ctx);
		this.sorcerer.healthBar.draw(ctx);

		// Initial Arrow drawn begins moving. 
		for (let i = 0; i < this.arrow.length; i++) {
			this.arrow[i].draw(ctx);
		}
		
		// Initial Socerer Velocity  
		this.sorcerer.velocity.x = 0;

		// Increase velocity based on what's pressed
		if (acceptableKeys.d.pressed) {
			this.sorcerer.velocity.x = 5;
		} else if (acceptableKeys.a.pressed) {
			this.sorcerer.velocity.x = -5
		}

		// Collision Detection
		this.isCollided();

		if (this.isVictory()) {
			return true;
		}
		
		if (this.isGameOver(ctx)) {
			return true; 
		}
	}

	isOutOfBounds(pos) {
		let xPos = pos[0]
		let yPos = pos[y]
		return (xPos < 0) || (xPos > 1024) || (yPos > 576)
	}

	isCollided() {
		let sorcerer = this.sorcerer
		let sorcererHitBox = sorcerer.hitboxDims();
		let topLeft = sorcererHitBox.topLeft;
		let topRight = sorcererHitBox.topRight;
		let bottomRight = sorcererHitBox.bottomRight;

		for (let i = 0; i < this.arrow.length; i++) {
			if (this.arrow[i].recentlyHit === false) {
				if ((this.arrow[i].hitbox.position.x > topLeft[0] && this.arrow[i].hitbox.position.x < topRight[0]) && (this.arrow[i].hitbox.position.y < bottomRight[1] && this.arrow[i].hitbox.position.y > topRight[1])) {
					this.stopArrowDamage(i);
					this.arrow[i].ifHit();
					sorcerer.health -= 10;
					this.sorcerer.healthBar.decrease();
					this.arrow.push(
						new FireArrow(
							randomShootingPosition()), 
							);
				}
			}
		i++;
		}
	}

	// Feature not Implemented. 
	//shouldPanCameraToTheRight() {
	//	const cameraboxRightSide = this.sorcerer.camerabox.position.x + this.sorcerer.camerabox.width;

	//	if (cameraboxRightSide >= 1026) {
	//		console.log(`Socerer Vel: ${this.sorcerer.velocity.x} Camera Vel: ${this.camera.position.x}`)
	//		console.log(this.camera)
	//		this.camera.position.x += this.sorcerer.velocity.x
	//	}
	//}

	stopArrowDamage(i) {
			this.arrow[i].recentlyHit = true; 
			this.arrow.slice(i, 1)
	}

	isGameOver(ctx) {
		if (this.sorcerer.health < 1) {
			let losingModal = document.getElementById("losing-modal");
			let losing_button = document.getElementById("losing_button");
			clearInterval(this.arrowInterval);
			this.gameStarted = false;
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
			clearInterval(this.arrowInterval);
			winning_button.addEventListener("click", () => {
				winningModal.style.display = "none";
				location.reload();
			})
			
			setTimeout(() => {
			winningModal.style.display = "flex";
			return true; 
		}, 500)}
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


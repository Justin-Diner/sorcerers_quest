import Sorcerer from './sorcerer';
import StillObject from './still_object'
import FireArrow from './fire_arrow';
import Camera from './camera'
import utilities from './dist';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '..';
import { ARROW_HEIGHT } from './fire_arrow';
import LevelIndicator from './level_indicator';
import levelOne from './levels/level_one';

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

export default class Game {
	constructor(sorcerer, castle) {
		this.sorcerer = sorcerer;
		this.castle = castle;
		this.inGameArrows = [];
		this.lastFiredArrowIndex = 0;
		this.gameStarted = true;
		this.level = 1;
		this.inGameArrows = [];


		this.camera = new Camera({
			position: {
				x: this.sorcerer.position.x, 
				y: this.sorcerer.position.y
			}}
		);
		this.levelIndicator = new LevelIndicator(1);

		if (this.level = 1) {
			this.inGameArrows = levelOne();
		}


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

	animate(ctx) {
		// Background (scaled to bottom left)
		ctx.save(); // Saving context. Pushes current stack onto state. image is 688 x 432
		ctx.scale(4, 4) // Enlarges by 4 times on x and y axis
		ctx.translate(-this.camera.position.x, -backgroundImage.image.height + scaledCanvas.height)
		backgroundImage.draw(ctx);
		ctx.restore();
		this.drawLevelIndicator(ctx);
		this.drawCastleSorcererAndHealthBars(ctx);

		//// Initial Arrow drawn begins moving. 
		//if (this.inGameArrows[0].outsideCanvas) {
		//	this.inGameArrows[0].velocity.x = 0;
		//}

		//for (let i = 0; i < this.inGameArrows.length; i++) {
		//	this.inGameArrows[i].draw(ctx);
		//}
		const currentArrow = this.inGameArrows[this.lastFiredArrowIndex];
		if (!currentArrow.moving) {
			currentArrow.moving = true; 
		}
		currentArrow.draw(ctx);

		if (currentArrow.outsideCanvas) {
			this.lastFiredArrowIndex++;

			if (this.lastFiredArrowIndex >= this.inGameArrows.length) {
				this.lastFiredArrowIndex = 0;
				this.inGameArrows = levelOne();
			}
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

	//fireCurentLevelsArrows(ctx) {
	//	if (!this.inGameArrows[0].moving) {
	//		this.inGameArrows[0].draw(ctx);
	//		this.inGameArrows[0].moving = true;
	//	}
		
	//	//for (let i = 0; i < this.inGameArrows.length; i++) {
	//	//	const nextArrow = this.inGameArrows[i + 1];
	//	//	const currentArrow = this.inGameArrows[i];

	//	//	if (currentArrow.outsideCanvas) {
	//	//		nextArrow.draw(ctx);
	//	//	}
	//	//}
	//	//if (this.inGameArrows.every(arrow => arrow.outsideCanvas)) {
	//	//	this.inGameArrows = levelOne();
	//	//} 
	//} 

	drawLevelIndicator(ctx) {
		this.levelIndicator.draw(ctx);
	}

	drawCastleSorcererAndHealthBars(ctx) {
		// Drawing Socerer, Castle, and Healthbars
		// Sorcerer must be drawn 2nd for fireball animation to be in front of castle. 
		this.castle.draw(ctx);
		this.castle.healthbar.draw(ctx);
		this.sorcerer.draw(ctx);
		this.sorcerer.healthBar.draw(ctx);
	}

	isCollided() {
		let sorcerer = this.sorcerer
		let sorcererHitBox = sorcerer.hitboxDims();
		let topLeft = sorcererHitBox.topLeft;
		let topRight = sorcererHitBox.topRight;
		let bottomRight = sorcererHitBox.bottomRight;

		for (let i = 0; i < this.inGameArrows.length; i++) {
			if (this.inGameArrows[i].recentlyHit === false) {
				if ((this.inGameArrows[i].hitbox.position.x > topLeft[0] && this.inGameArrows[i].hitbox.position.x < topRight[0]) && (this.inGameArrows[i].hitbox.position.y < bottomRight[1] && this.inGameArrows[i].hitbox.position.y > topRight[1])) {
					this.stopArrowDamage(i);
					this.inGameArrows[i].ifHit();
					sorcerer.health -= 10;
					this.sorcerer.healthBar.decrease();
					this.inGameArrows.push(
						new FireArrow(
							utilities.randomShootingPosition()), 
					);
				}
			}
		i++;
		}
	}

	// Helper for OutOfBounds Boolean
	isOutOfBounds(pos) {
		let xPos = pos[0]
		let yPos = pos[1]
		return (xPos < 0) || (xPos > 1024) || (yPos > 576)
	}

	stopArrowDamage(i) {
			this.inGameArrows[i].recentlyHit = true; 
			this.inGameArrows.slice(i, 1)
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


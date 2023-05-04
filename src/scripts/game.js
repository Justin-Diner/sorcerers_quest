import StillObject from './still_object'
import FireArrow from './fire_arrow';
import Camera from './camera'
import utilities from './dist';
import LevelIndicator from './level_indicator';
import LevelOne from './levels/level_one';
import LevelTwo from './levels/level_two';
import LevelThree from './levels/level_three';
import Castle from './castle';

let levelThreeSecondWaveSpawned = false;
let levelTreeThirdWaveSpawned = false; 

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
		this.gameStarted = true;
		this.levelStarted = false;
		this.sorcerer = sorcerer;
		this.castle = castle;
		this.inGameArrows = [];
		this.lastFiredRightArrowIndex = 0;
		this.lastFiredLeftArrowIndex = 0;
		this.currentLevel = 1;
		this.level = new LevelOne();
		this.newlyGeneratedArrows = [];

		this.camera = new Camera({
			position: {
				x: this.sorcerer.position.x, 
				y: this.sorcerer.position.y
			}}
		);
	
		this.levelIndicator = new LevelIndicator(1);

		if (this.currentLevel === 1) {
			this.level = new LevelOne;
			this.level.generateArrows();
			this.inGameArrows = this.level.levelArrows;
			this.levelStarted = true;
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
			} else if (e.key === "c" && !cLocked) {
				acceptableKeys.c.pressed = true;
				this.lockC();
				sorcerer.cast();
				this.castle.health -=10
				this.castle.healthbar.decrease();
			}
		})

		window.addEventListener("keyup", (e) => {
			if (e.key === "d") {
				acceptableKeys.d.pressed = false; 
				this.sorcerer.velocity.x = 0
				if (this.sorcerer.velocity.x === 0 && this.sorcerer.status != "jumping") {
					this.sorcerer.status = "idle";
				}
			} else if (e.key === "a") {
				acceptableKeys.a.pressed = false; 
				this.sorcerer.velocity.x = 0
				if (this.sorcerer.velocity.x === 0 && this.sorcerer.status != "jumping") {
					this.sorcerer.status = "idle";
				}
			} else if (e.key === " ") {
				acceptableKeys.space.pressed = false; 
			} else if (e.key === "c" && !cLocked) {
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
		if (this.isGameOver(ctx)) {
			return true; 
		}
		// Background (scaled to bottom left)
		ctx.save(); // Saving context. Pushes current stack onto state. image is 688 x 432
		ctx.scale(4, 4) // Enlarges by 4 times on x and y axis
		ctx.translate(-this.camera.position.x, -backgroundImage.image.height + scaledCanvas.height)
		backgroundImage.draw(ctx);
		ctx.restore();
		this.drawLevelIndicator(ctx);
		this.drawCastleSorcererAndHealthBars(ctx);
		if (this.currentLevel === 3 && !this.levelStarted) {
			this.levelStarted = true;
			this.level.generateArrows();
		}
		if (this.levelStarted === true) {
			this.beginCurrentLevel(ctx)
		}
		if (this.sorcerer.status != "dead") {
			this.checkIdleStatus();
		}

		// Collision Detection
		this.isCollided(ctx);
		//if (this.newlyGeneratedArrows) {
		//	for (let i = 0; i < this.newlyGeneratedArrows.length; i++){
		//		this.newlyGeneratedArrows[i].draw(ctx);
		//	}
		//}

		// Initial Socerer Velocity  
		this.sorcerer.velocity.x = 0;
		// Increase velocity based on what's pressed
		if (acceptableKeys.d.pressed) {
			this.sorcerer.velocity.x = 5;
		} else if (acceptableKeys.a.pressed) {
			this.sorcerer.velocity.x = -5
		}

		// Level Progression or Victory Checks
		if (this.currentLevel === 1 || this.currentLevel === 2) {
			this.beatLevel();
		}

		if (this.currentLevel === 3) {
			if (this.isVictory()) {
				return true;
			}
		}
	}

	drawLevelIndicator(ctx) {
		if (this.currentLevel === 1) {
			this.levelIndicator.draw(ctx);
		} else if (this.currentLevel === 2) {
			this.levelIndicator = new LevelIndicator(2);
			this.levelIndicator.draw(ctx)
		} else {
			this.levelIndicator = new LevelIndicator(3);
			this.levelIndicator.draw(ctx);
		}
	}
	

	drawCastleSorcererAndHealthBars(ctx) {
		// Drawing Socerer, Castle, and Healthbars
		// Sorcerer must be drawn 2nd for fireball animation to be in front of castle. 
		this.castle.draw(ctx);
		this.castle.healthbar.draw(ctx);
		this.sorcerer.draw(ctx);
		this.sorcerer.healthBar.draw(ctx);
	}

	beginCurrentLevel(ctx) {
		if (this.sorcerer.status === "dead") {
			return;
		}
		if (this.currentLevel === 1) {
			this.playLevelOne(ctx);
		}

		if (this.currentLevel === 2) {
			this.playLevelTwo(ctx);
		}

		if (this.currentLevel === 3) {
			this.playLevelThree(ctx);
		}
	}

	playLevelOne(ctx) {
		const currentArrow = this.inGameArrows[this.lastFiredRightArrowIndex];
		currentArrow.draw(ctx);
		if (!currentArrow.moving) {
			this.lastFiredRightArrowIndex++;
		}
		if (this.lastFiredRightArrowIndex >= this.inGameArrows.length) {
			this.level.generateArrows();
			this.inGameArrows = this.level.levelArrows;
			this.lastFiredRightArrowIndex = 0;
		}
	}

	playLevelTwo(ctx) {
		let allPossibleArrows = this.level.levelArrows;

		if (!this.inGameArrows.length) {
			this.inGameArrows.push(allPossibleArrows[0][this.lastFiredRightArrowIndex]);
			this.inGameArrows.push(allPossibleArrows[1][this.lastFiredLeftArrowIndex]);
		}

		for (let i = 0; i < this.inGameArrows.length; i++) {
			this.inGameArrows[i].draw(ctx);
		}

		if (!this.inGameArrows[0].moving) {
			this.lastFiredRightArrowIndex++;
			if (this.lastFiredRightArrowIndex >= allPossibleArrows[0].length) {
				this.level.clearLevelArrows();
				this.level.generateArrows();
				allPossibleArrows = this.level.levelArrows
				this.lastFiredRightArrowIndex = 0;
			}	
			this.inGameArrows.push(allPossibleArrows[0][this.lastFiredRightArrowIndex])
			this.inGameArrows.shift();
		}

		if (!this.inGameArrows[1].moving) {
			this.lastFiredLeftArrowIndex++;
			if (this.lastFiredLeftArrowIndex >= allPossibleArrows[1].length) {
				this.level.clearLevelArrows();
				this.level.generateArrows();
				allPossibleArrows = this.level.levelArrows
				this.lastFiredLeftArrowIndex = 0;
			}
			this.inGameArrows.push(allPossibleArrows[1][this.lastFiredLeftArrowIndex])
			this.inGameArrows.shift();
		}	
	}

	playLevelThree(ctx) {
		const allPossibleArrows = this.level.levelArrows;
		
		if (this.inGameArrows.length > 6) {
			this.inGameArrows.splice(6)
		}

		if (!this.inGameArrows.length) {
			this.inGameArrows.push(allPossibleArrows[0][0]);
			this.inGameArrows.push(allPossibleArrows[1][0]);
		}

		this.inGameArrows[0].draw(ctx);
		this.inGameArrows[1].draw(ctx);

		if (!this.inGameArrows[0].moving) {
			this.inGameArrows[0].position.x = 900;
			this.inGameArrows[0].moving = true;
			this.inGameArrows[0].outSideCanvas = false;
			this.inGameArrows[0].velocity.x = -10;
			this.inGameArrows[0].draw(ctx);
		}

		if (!this.inGameArrows[1].moving) {
			this.inGameArrows[1].position.x = 20;
			this.inGameArrows[1].moving = true;
			this.inGameArrows[1].outSideCanvas = false;
			this.inGameArrows[1].velocity.x = 10;
			this.inGameArrows[1].draw(ctx);
		}

		if (!levelThreeSecondWaveSpawned) {
			levelThreeSecondWaveSpawned = true;
			setTimeout(() => {
				this.inGameArrows.push(allPossibleArrows[0][5]);
				this.inGameArrows.push(allPossibleArrows[1][5]);
			}, 1000)
		}

		if (this.inGameArrows[2]) {
			if (!this.inGameArrows[2].moving) {
				this.inGameArrows[2].position.x = 900;
				this.inGameArrows[2].moving = true;
				this.inGameArrows[2].outSideCanvas = false;
				this.inGameArrows[2].velocity.x = -10;
				this.inGameArrows[2].draw(ctx);
			}

			this.inGameArrows[2].draw(ctx);
		}
		if (this.inGameArrows[3]) {
		if (!this.inGameArrows[3].moving) {
			this.inGameArrows[3].position.x = 20;
			this.inGameArrows[3].moving = true;
			this.inGameArrows[3].outSideCanvas = false;
			this.inGameArrows[3].velocity.x = 10;
			this.inGameArrows[3].draw(ctx);
		}
			this.inGameArrows[3].draw(ctx);
		}

		if (!levelTreeThirdWaveSpawned) {
			setTimeout(() => {
				levelTreeThirdWaveSpawned = true;
				this.inGameArrows.push(allPossibleArrows[0][2]);
				this.inGameArrows.push(allPossibleArrows[1][2]);
				console.log(allPossibleArrows);
			}, 2500)
		}

		if (this.inGameArrows[4]) {
			if (!this.inGameArrows[4].moving) {
				this.inGameArrows[4].position.x = 900;
				this.inGameArrows[4].moving = true;
				this.inGameArrows[4].outSideCanvas = false;
				this.inGameArrows[4].velocity.x = -10;
				this.inGameArrows[4].draw(ctx);
			}

			this.inGameArrows[4].draw(ctx);
		}
		if (this.inGameArrows[5]) {
		if (!this.inGameArrows[5].moving) {
			this.inGameArrows[5].position.x = 20;
			this.inGameArrows[5].moving = true;
			this.inGameArrows[5].outSideCanvas = false;
			this.inGameArrows[5].velocity.x = 10;
			this.inGameArrows[5].draw(ctx);
		}
			this.inGameArrows[5].draw(ctx);
			console.log(this.inGameArrows);
		}

		if (this.newlyGeneratedArrows.length) {
			for (let i = 0; i < this.newlyGeneratedArrows.length; i++){
				this.newlyGeneratedArrows[i].draw(ctx);
			}
		}
	}

	isCollided() {
		const sorcererHitBox = this.sorcerer.hitboxDims();
		const topLeft = sorcererHitBox.topLeft;
		const topRight = sorcererHitBox.topRight;
		const bottomRight = sorcererHitBox.bottomRight;

		for (let i = 0; i < this.inGameArrows.length; i++) { 
			if (!this.inGameArrows[i].recentlyHit && this.inGameArrows[i].moving) {
				const arrowPosX = this.inGameArrows[i].hitbox.position.x;
				const arrowPosY = this.inGameArrows[i].hitbox.position.y

				if (
					(arrowPosX > topLeft[0] && 
					arrowPosX < topRight[0]) &&
					(arrowPosY < bottomRight[1] && 
						arrowPosY > topRight[1])
				) {
						this.stopArrowInGameArrowDamage(i);
						this.inGameArrows[i].ifHit();
						this.sorcerer.health -= 10;
						this.sorcerer.healthBar.decrease();
						this.newlyGeneratedArrows.push(utilities.randomShootingPosition());
				}
			}
		}

		if (this.newlyGeneratedArrows.length) {
			for (let i = 0; i < this.newlyGeneratedArrows.length; i++) { 
				if (!this.newlyGeneratedArrows[i].recentlyHit && this.newlyGeneratedArrows[i].moving) {
					const arrowPosX = this.newlyGeneratedArrows[i].hitbox.position.x;
					const arrowPosY = this.newlyGeneratedArrows[i].hitbox.position.y
	
					if (
						(arrowPosX > topLeft[0] && 
						arrowPosX < topRight[0]) &&
						(arrowPosY < bottomRight[1] && 
							arrowPosY > topRight[1])
					) {
							this.stopNewlyGeneratedArrowDamage(i) ;
							this.newlyGeneratedArrows[i].ifHit();
							this.sorcerer.health -= 10;
							this.sorcerer.healthBar.decrease();
							this.newlyGeneratedArrows.push(utilities.randomShootingPosition());
					}
				}
			}
		}
	}

	// Helper for OutOfBounds Boolean
	isOutOfBounds(pos) {
		let xPos = pos[0]
		let yPos = pos[1]
		return (xPos < 0) || (xPos > 1024) || (yPos > 576)
	}

	stopArrowInGameArrowDamage(i) {
			this.inGameArrows[i].recentlyHit = true; 
			this.inGameArrows.slice(i, 1)
	}

	stopNewlyGeneratedArrowDamage(i) {
		this.newlyGeneratedArrows[i].recentlyHit = true; 
		this.newlyGeneratedArrows.slice(i, 1)
	}

	isGameOver() {
		if (this.sorcerer.health < 1) {
			this.sorcerer.status = "dead";
			const losingModal = document.getElementById("losing-modal");
			const losingButton = document.getElementById("losing_button");
			this.gameStarted = false;
			this.levelStarted = false;
			losingButton.addEventListener("click", () => {
				losingModal.style.display = "none";
				location.reload();
			})
			setTimeout(() => {
				losingModal.style.display = "flex";
				return true;
			}, 800)
		} 
	}

	beatLevel() {
		if (this.castle.health < 1) {
			this.levelStarted = false;
			if (this.currentLevel === 1) {
				this.castle = new Castle({health: 10})
				this.resetForNewLevel();
				const levelTwoModal = document.getElementById("level_two_start_modal");
				const levelTwoStartButton = document.getElementById("level_two_start_button");
				levelTwoStartButton.addEventListener('click', () => {
					levelTwoModal.style.display = "none";
					this.startLevelTwo();
				})
				levelTwoModal.style.display = "flex";
			}

			if (this.currentLevel === 2) {
				this.castle = new Castle({health: 100});
				this.resetForNewLevel();
				const levelThreeModal = document.getElementById("level_three_start_modal")
				const levelThreeStartButton = document.getElementById("level_three_start_button");
				levelThreeStartButton.addEventListener('click', () => {
					levelThreeModal.style.display = "none";
					this.startLevelThree();
				})
				levelThreeModal.style.display = "flex";
			}
		}
	}

	resetForNewLevel() {
		if (this.levelStarted === false) {
			this.inGameArrows = [];
			this.lastFiredLeftArrowIndex = 0;
			this.lastFiredRightArrowIndex = 0;
		}
	}

	startLevelTwo() {
		this.currentLevel = 2;
		this.level = new LevelTwo();
		this.level.generateArrows();
		this.inGameArrows = [this.level.levelArrows[0][0], this.level.levelArrows[1][0]]
		this.castle = this.level.castle;
		this.levelStarted = true;
	}

	startLevelThree() {
		this.currentLevel = 3;
		this.level = new LevelThree();
		this.level.generateArrows();
		this.inGameArrows = [this.level.levelArrows[0][0], this.level.levelArrows[1][0]]
		this.castle = this.level.castle;
		this.levelStarted = true; 
	}

	isVictory() {
		if (this.currentLevel === 3 && this.castle.health < 1) {
			let winningModal = document.getElementById("winning-modal")
			let winning_button = document.getElementById("winning_button")
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

	checkIdleStatus() {
		const noKeysPressed = Object.values(acceptableKeys).every(key => !key.pressed)
		if (noKeysPressed && (this.sorcerer.status != "jumping") && this.sorcerer.velocity.x != 0) {
			if (acceptableKeys.d.pressed || acceptableKeys.a.pressed) {
				this.sorcerer.status = "moving"
			} else if (this.sorcerer.status != "jumping" || this.sorcerer.status != "dead") {
			this.sorcerer.status = "idle";
			}
		}
	}
}


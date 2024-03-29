import HealthBar from "./health_bar";
import { sorcererRightIdle, sorcererLeftIdle, sorcererRunRight, sorcererRunLeft, sorcererJump, leftSorcererJump, sorcererCast, explosionOne, sorcererDeath } from "../animations/animations";
import ManaBar from "./mana_bar";

const SORCERER_WIDTH = 231
const SORCERER_HEIGHT = 164
const GRAVITY = 0.4;

// Animation Constants 
const slowDownAnimationRate = 5;
const idleFrameSize = 5;
const runFrameSize = 7;
const jumpingFrameSize = 1;
const deathFrameSize = 6;

// Animation Flags and Changing Variables
let leftFrames = {}
let deathAnimationCount = 0;

let frame = 0;
let gameFrame = 0;
let frameSize = 0;
let oneLoopFrame = 0;
let castLoopCounter = 0;
let deathLoopCounter = 0;
let explosionLoopCounter = 0;

export default class Sorcerer {
	constructor(position) {
		this.position = position;
		this.health = 50;
		this.status = "idle"
		this.direction = "right";
		this.leftMovementStopped = false; 
		this.rightMovementStopped = false;
		this.velocity = {
			x: 0, 
			y: 1
		}
		this.hitbox = {
			position: {
				x: this.position.x, 
				y: this.position.y
			}, 
			width: 69, 
			height: 100
		}
		this.healthBar = new HealthBar({
			position: { x: 54, y: 14},
			value: this.health,
			textPosition: 160
		})
		this.spellReady = true; 
		this.manaBar = new ManaBar({
			text: "Spell Ready",
			position: { x: 54, y: 42},
			textPosition: 148
		})
	}

	hitboxDims() {
		return {
			topLeft: [this.hitbox.position.x, this.hitbox.position.y],
			topRight: [this.hitbox.position.x + this.hitbox.width, this.hitbox.position.y],
			bottomLeft: [this.hitbox.position.x, this.hitbox.position.y + this.hitbox.height],
			bottomRight: [this.hitbox.position.x + this.hitbox.width, this.hitbox.position.y + this.hitbox.height]
		}	
	}

	draw(ctx) {
		let currentAnimation;
		const alive = (this.status != "dead");
		const dead = (this.status === "dead");
		const facingRight = (this.direction === "right");
		const facingLeft = (this.direction === "left");
		const idle = (this.status === "idle");
		const moving = this.status === "moving";
		const jumping = this.status === "jumping"
		const casting = this.status === "casting"

		// Choosing Correct Sprite Sheet For All Sorcerer Status's. 
		if (facingRight && idle && alive) {
			currentAnimation = sorcererRightIdle;
			frameSize = idleFrameSize;
		} else if (facingLeft && idle && alive) {
			currentAnimation = sorcererLeftIdle;
			frameSize = idleFrameSize;
			leftFrames = {
				0: 5, 
				1: 4, 
				2: 3,
				3: 2, 
				4: 1, 
				5: 0 
			}
		} else if (facingLeft && moving && alive) {
			currentAnimation = sorcererRunLeft;
			frameSize = runFrameSize;
			leftFrames = {
				0: 7, 
				1: 6, 
				2: 5, 
				3: 4,
				4: 3, 
				5: 2,
				6: 1, 
				7: 0
			}
		} else if (facingRight && moving && alive) {
			currentAnimation = sorcererRunRight;
			frameSize = runFrameSize;
		} else if (facingRight && jumping && alive) {
			currentAnimation = sorcererJump;
			frameSize = jumpingFrameSize;
		} else if (facingLeft && jumping && alive) {
			currentAnimation = leftSorcererJump;
			frameSize = jumpingFrameSize;
			leftFrames = {
				0:1, 
				1:0
			}
		} else if (facingRight && casting && alive) {
			currentAnimation = sorcererCast;
			frameSize = 7;
		} else if (dead) {
			currentAnimation = sorcererDeath;
			frameSize = deathFrameSize;
		}

		// Animate Correct Image based on Correct Sprite Sheet
 		if (dead) {
			this.death(ctx, currentAnimation);
		} else if (casting) {
			this.oneCast(ctx, currentAnimation);
			this.explosion(ctx, explosionOne);
		} else if(facingRight && alive) {
			frame = Math.floor(gameFrame/slowDownAnimationRate) % frameSize;
			ctx.drawImage(currentAnimation, frame * SORCERER_WIDTH, 56, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y, 231, 190)
		} else if (facingLeft && alive) {
			frame = leftFrames[Math.floor(gameFrame/slowDownAnimationRate) % frameSize];
			ctx.drawImage(currentAnimation, frame * SORCERER_WIDTH, 56, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y, 231, 190)
		} 

		// Gravity 
		this.update(); 
		this.updateHitBox();
		if (gameFrame > 99) {
			gameFrame = 0;
		}
		gameFrame++;
	}

	update() {
		// Gravity (continuously adds over time)
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;

		// Ensuring he does not go past bottom of screen
		if (this.position.y + SORCERER_HEIGHT + this.velocity.y < 576) {
			this.velocity.y += GRAVITY;
		} else {
			this.velocity.y = 0;
		}

		if (this.position.y + this.velocity.y < 0) {
			this.velocity.y += GRAVITY;
		}
	}

	updateHitBox() {
		this.hitbox = {
			position: {
				x: this.position.x + 81, 
				y: this.position.y
			}, 
			width: 69, 
			height: 100
		}
	}

	idle() {
		this.status = "idle";
	}
  
	// Velocity 
	moveRight() {
		this.resetCastingCounters()
		if (this.position.x >= 600) {
			this.rightMovementStopped = true; 
		} else {
			this.rightMovementStopped = false; 
			this.velocity.x += 1
		}

		if (this.status === "jumping") {
			this.status = "jumping";
			this.direction = "right";
		} else if (this.velocity.x != 0 && this.status != "jumping"){
			this.status = "moving"
			this.direction = "right"
		} else {
			this.direction = "right";
			this.status = "idle"
		}
	}

	moveLeft() {
		this.resetCastingCounters()
		if (this.position.x < -98) {
			this.velocity.x = 0
			this.leftMovementStopped = true; 
		} else {
			this.leftMovementStopped = false;
			this.velocity.x += 1
		}

		if (this.status === "jumping") {
			this.status = "jumping";
			this.direction = "left";
		} else if (this.velocity.x != 0 && this.status != "jumping") {
			this.direction = "left";
			this.status = "moving"
		} else {
			this.direction = "left";
			this.status = "idle"
		}
	}

	jump() {
		if (this.status === "casting") {
			this.status === "casting"
		} else {
			this.status = "jumping"
		}
		if (this.position.y < 10) {
			this.velocity.y = 0;
		} else {
			this.velocity.y = -10
		}

		let idleCheck = setInterval(() => {
			if (this.status === "dead") {
				clearInterval(idleCheck);
				return; 
			}
			if (this.status === "jumping") {
				if (this.velocity.y === 0 && this.velocity.x === 0) {
					this.status = "idle";
					clearInterval(idleCheck)
				} else if (this.velocity.y ===  0 && this.velocity.x != 0) {
					this.status = "moving";
					clearInterval(idleCheck);
				}
			}
		}, 100);
	}

	cast() {
		this.status = "casting";
		this.direction = "right";
		this.spellReady = false
		this.velocity.x = 0;
		this.manaBar.recharge();
	}

	death(ctx, image) {
		if (deathAnimationCount > 0) {
			ctx.drawImage(image, 6 * SORCERER_WIDTH, 0, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y - 64, 240, 190);
			return;
		}

		if (deathLoopCounter <= 42) {
			frame = Math.floor(oneLoopFrame / 7) % (deathFrameSize +1);
			ctx.drawImage(image, frame * SORCERER_WIDTH, 0, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y - 64, 240, 190);
			deathLoopCounter++;
			oneLoopFrame++;
		} else {
			deathAnimationCount += 1
			ctx.drawImage(image, 6 * SORCERER_WIDTH, 0, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y - 64, 240, 190);
		}
	}

	oneCast(ctx, image) {
		let animationCount = 0;
	
		if (animationCount > 0) {
			return;
		}

		if (castLoopCounter <= 54) {
			frame = Math.floor(oneLoopFrame / 7) % 8;
			ctx.drawImage(image, frame * SORCERER_WIDTH, 0, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y - 64, 240, 190)
			castLoopCounter++
			oneLoopFrame++ 
		} else {
			animationCount += 1;
			castLoopCounter = 0;
			oneLoopFrame = 0;
			frame = 0;
			this.idle();
		}
	}

	resetCastingCounters() {
		oneLoopFrame = 0;
		castLoopCounter = 0;
	}

	explosion(ctx, image) {
		let animationCount = 0;
		if (animationCount > 0 ) {
			return;
		}

		if (explosionLoopCounter <= 60) {
			frame = Math.floor(oneLoopFrame / 4) % 16;
			ctx.drawImage(image, frame * (image.width / 16), 0, image.width / 14, image.height, 680, 200, 400, 300)
			explosionLoopCounter++
		} else {
			animationCount += 1;
			frame = 0;
			explosionLoopCounter = 0;
		}
	}
}


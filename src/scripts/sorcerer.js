import HealthBar from "./health_bar";

// Idle Animations 
const sorcererRightIdle = new Image();
sorcererRightIdle.src = './assets/sorcerer/Idle.png'
const sorcererLeftIdle = new Image();
sorcererLeftIdle.src = './assets/sorcerer/idle_left.png'

// Run Animations
const sorcererRunRight = new Image();
sorcererRunRight.src = './assets/sorcerer/Run.png'
const sorcererRunLeft = new Image(); 
sorcererRunLeft.src = './assets/sorcerer/sorcerer_run_left.png'
let leftFrames = {}

// Jumping Animations
const sorcererJump = new Image();
sorcererJump.src = './assets/sorcerer/Jump.png'

//Jumping Left 
const leftSorcererJump = new Image();
leftSorcererJump.src = './assets/sorcerer/leftJump.png';

// Casting 
const sorcererCast = new Image();
sorcererCast.src = './assets/sorcerer/Attack1.png'

// Explosion
const explosionOne = new Image();
explosionOne.src = './assets/explosion/Explosion1_long.png'

// Animation Variables 
let frame = 0;
let gameFrame = 0;
const slowDownAnimationRate = 5;
let idleFrameSize = 5;
let runFrameSize = 7;
let jumpingFrameSize = 1;
let frameSize = 0;
let casting = true;
let oneLoopFrame = 0;
let castLoopCounter = 0;
let explosionLoopCounter = 0;

const SORCERER_WIDTH = 231
const SORCERER_HEIGHT = 164
const GRAVITY = 0.4;

export default class Sorcerer {
	constructor(position) {
		this.position = position;
		this.velocity = {
			x: 0, 
			y: 1
		}
		this.status = "idle"
		this.direction = "right";
		this.hitbox = {
			position: {
				x: this.position.x, 
				y: this.position.y
			}, 
			width: 69, 
			height: 100
		}

		// Sorcerer Health
		this.health = 30;
		this.healthBar = new HealthBar({position: 
			{
			x: 54, 
			y: 14
			},
			value: 30,
			textPosition: 160
		})


		this.camerabox = {
			position: {
				x: this.position.x, 
				y: this.position.y
			},
			width: 150, 
			height: 100
		}

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
		let currentAnimation = sorcererRightIdle;

		if (this.direction === "right" && this.status == "idle") {
			currentAnimation = sorcererRightIdle;
			frameSize = idleFrameSize;
		} else if (this.direction === "left" && this.status === "idle") {
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
		} else if (this.direction === "left" && this.status === "moving") {
			currentAnimation = sorcererRunLeft;
			runFrameSize;
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
		} else if (this.direction === "right" && this.status === "moving") {
			currentAnimation = sorcererRunRight;
			runFrameSize;
		} else if (this.direction === "right" && this.status === "jumping") {
			currentAnimation = sorcererJump;
			frameSize = jumpingFrameSize;
		} else if (this.direction === "left" && this.status === "jumping") {
			currentAnimation = leftSorcererJump;
			frameSize = jumpingFrameSize;
			leftFrames = {
				0:1, 
				1:0
			}
		} else if (this.direction === "right" && this.status === "casting") {
			currentAnimation = sorcererCast;
			frameSize = 7;
		}
		
		// Chooses the frame based on cycles of the animation loop. Increases every 5 frames. Once Math.floor hits 1, it increments. Example (0.2, 0.4, 0.6, 0.8, 1.0, etc.)
		// Draws the Sorcerer with the above frame in line 2
		// ctx.drawImage(image, sx,sy,sw, sh, dx, dy, dw, dh)
		if (this.status === "casting" && casting === true) {
			this.oneCast(ctx, sorcererCast);
			this.explosion(ctx, explosionOne)
		} else if(this.direction === "right") {
			frame = Math.floor(gameFrame/slowDownAnimationRate) % frameSize;
			ctx.drawImage(currentAnimation, frame * SORCERER_WIDTH, 56, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y, 231, 190)
		} else if (this.direction === "left") {
			frame = leftFrames[Math.floor(gameFrame/slowDownAnimationRate) % frameSize];
			ctx.drawImage(currentAnimation, frame * SORCERER_WIDTH, 56, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y, 231, 190)
		}
		// Gravity 
		this.update(); 
		this.updateHitBox();
		//this.updateCameraBox();
		

		//ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
		//ctx.fillRect(
		//	this.camerabox.position.x, 
		//	this.camerabox.position.y, 
		//	this.camerabox.width + 60, 
		//	this.camerabox.height)

		//ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
		//ctx.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height)
		gameFrame++;
	}

	update() {
		// Gravity (continuously adds over time)
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;

		// Ensuring he does not go past bottom of screen
		//  	y position 			 190								y = 1 
		if (this.position.y + SORCERER_HEIGHT + this.velocity.y < 576) {
			this.velocity.y += GRAVITY;
		} else {
			this.velocity.y = 0;
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

	//updateCameraBox() {
	//	this.camerabox = {
	//		position: {
	//			x: this.position.x - 25, 
	//			y: this.position.y
	//		},
	//		width: 250, 
	//		height: 100
	//	}
	//}

	idle() {
		this.status = "idle";
	}
  
	// Velocity 
	moveRight() {
		this.status = "moving";
		if (this.status !== "jumping") {
			this.status = "moving"
			this.direction = "right"
		} else {
		this.direction = "right";
		}
	}

	moveLeft() {
		this.velocity.x -= 1
		if (this.status !== "jumping") {
			this.status = "moving";
			this.direction = "left";
		} else {
			this.direction = "left";
		}
	}

	jump() {
		this.velocity.y = -10
		this.status = "jumping"
		setTimeout( () => {
			this.status = "idle"
		}, 900);
	}

	cast() {
		
		this.status = "casting";
		this.direction = "right";
		this.velocity.x = 0;
	}

	death() {

	}

	
	oneCast(ctx, image) {
		if (castLoopCounter <= 54) {
		frame = Math.floor(oneLoopFrame/7) % 7;
		ctx.drawImage(image, frame * SORCERER_WIDTH, 0, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y - 64, 240, 190)
		castLoopCounter++
		oneLoopFrame++
		} else {
			oneLoopFrame = 0;
			castLoopCounter = 0;
			this.idle();
		}
	}

	explosion(ctx, image) {
		if (explosionLoopCounter <= 150) {
			frame = Math.floor(oneLoopFrame/8) % 15;
			ctx.drawImage(image, frame * (image.width / 16), 0, image.width / 14, image.height, 680, 200, 400, 300)
			explosionLoopCounter++
			} else {
				explosionLoopCounter = 0;
			}
	}

}


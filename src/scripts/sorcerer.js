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
leftSorcererJump.src = './assets/sorcerer/leftJump.png'

// Animation Variables 
let frame = 0;
let gameFrame = 0;
const slowDownAnimationRate = 5;
let idleFrameSize = 5;
let runFrameSize = 7;
let jumpingFrameSize = 1;
let frameSize = 0;

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
		this.health = 100;
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
		}
		
		// Chooses the frame based on cycles of the animation loop. Increases every 5 frames. Once Math.floor hits 1, it increments. Example (0.2, 0.4, 0.6, 0.8, 1.0, etc.)
		// Draws the Sorcerer with the above frame in line 2
		// ctx.drawImage(image, sx,sy,sw, sh, dx, dy, dw, dh)
		if (this.direction === "right") {
			frame = Math.floor(gameFrame/slowDownAnimationRate) % frameSize;
			ctx.drawImage(currentAnimation, frame * SORCERER_WIDTH, 56, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y, 231, 190)
		} else if (this.direction === "left") {
			frame = leftFrames[Math.floor(gameFrame/slowDownAnimationRate) % frameSize];
			ctx.drawImage(currentAnimation, frame * SORCERER_WIDTH, 56, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y, 231, 190)
		}
		// Gravity 
		this.update(); 
		this.updateHitBox();
		this.updateCameraBox();
		

		ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
		ctx.fillRect(
			this.camerabox.position.x, 
			this.camerabox.position.y, 
			this.camerabox.width + 60, 
			this.camerabox.height)

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

	updateCameraBox() {
		this.camerabox = {
			position: {
				x: this.position.x - 25, 
				y: this.position.y
			},
			width: 250, 
			height: 100
		}
	}

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

	death() {

	}
}


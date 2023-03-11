// Idle Animations 
const sorcererRightIdle = new Image();
sorcererRightIdle.src = '../assets/sorcerer/Idle.png'
const sorcererLeftIdle = new Image();
sorcererLeftIdle.src = '../assets/sorcerer/idle_left.png'

// Run Animations
const sorcererRunRight = new Image();
sorcererRunRight.src = '../assets/sorcerer/Run.png'
const sorcererRunLeft = new Image(); 
sorcererRunLeft.src = '../assets/sorcerer/sorcerer_run_left.png'

// Animation Variables 
let frame = 0;
let gameFrame = 0;
const slowDownAnimationRate = 5;
let idleFrameSize = 5;
let runFrameSize = 7;
let frameSize = 0;

const SORCERER_WIDTH = 231
const SORCERER_HEIGHT = 190

export default class Sorcerer {
	constructor(position) {
		this.position = position;
		this.status = "idle"
		this.direction = "right";
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, 50, 0, 2 * Math.PI);
		ctx.stroke();

		let currentAnimation = sorcererRightIdle;

		if (this.direction === "right" && this.status == "idle") {
			currentAnimation = sorcererRightIdle;
			frameSize = idleFrameSize;
		} else if (this.direction === "left" && this.status === "idle") {
			currentAnimation = sorcererLeftIdle;
			frameSize = idleFrameSize;
		} else if (this.direction === "left" && this.status === "moving") {
			currentAnimation = sorcererRunLeft;
			runFrameSize;
		} else if (this.direction === "right" && this.status === "moving") {
			currentAnimation = sorcererRunRight;
			runFrameSize;
		} else {
			currentAnimation = sorcererRightIdle;
		}
		
		// Chooses the frame based on cycles of the animation loop. Increases every 5 frames. Once Math.floor hits 1, it increments. Example (0.2, 0.4, 0.6, 0.8, 1.0, etc.)
		// Draws the Sorcerer with the above frame in line 2
		// ctx.drawImage(image, sx,sy,sw, sh, dx, dy, dw, dh)
		if (this.direction === "right") {
			frame = Math.floor(gameFrame/slowDownAnimationRate) % frameSize;
			ctx.drawImage(currentAnimation, frame * SORCERER_WIDTH, 0, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y, 231, 190)
		} else if (this.direction === "left") {
			let currentFrame = Math.floor(gameFrame/slowDownAnimationRate) % frameSize;
			frame = slowDownAnimationRate - currentFrame; 
			ctx.drawImage(currentAnimation, frame * SORCERER_WIDTH, 0, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y, 231, 190)
		}
		gameFrame++;
	}

	idle() {
		this.status = "idle";
	}
  
	// Velocity 
	moveRight() {
		this.position.x += 8;
		this.status = "moving";
		this.direction = "right";
	}

	moveLeft() {
		this.position.x -= 8;
		this.status = "moving";
		this.direction = "left";
		
	}
}


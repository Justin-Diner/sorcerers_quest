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

const SORCERER_WIDTH = 231
const SORCERER_HEIGHT = 190

// Animation Variables 
let frame = 0;
let gameFrame = 0;
const slowDownAnimationRate = 5;


export default class Sorcerer {
	constructor(position) {
		this.position = position;
		this.status = "idle"
		this.direction = "right";
	}

	draw(ctx) {
		let currentAnimation = sorcererRightIdle;

		if (this.direction === "right" && this.status == "idle") {
			currentAnimation = sorcererRightIdle;
		} else if (this.direction === "left" && this.status === "idle") {
			currentAnimation = sorcererLeftIdle;
		} else if (this.direction === "left" && this.status === "moving") {
			currentAnimation = sorcererRunLeft;
		} else if (this.direction === "right" && this.status === "moving") {
			currentAnimation = sorcererRunRight;
		} else {
			currentAnimation = sorcererRightIdle;
		}
		
		// Chooses the frame based on cycles of the animation loop. Increases every 5 frames. Once Math.floor hits 1, it increments. Example (0.2, 0.4, 0.6, 0.8, 1.0, etc.)
		// Draws the Sorcerer with the above frame in line 2
		// ctx.drawImage(image, sx,sy,sw, sh, dx, dy, dw, dh)
		if (this.direction === "right") {
			frame = Math.floor(gameFrame/slowDownAnimationRate) % 5;
			ctx.drawImage(currentAnimation, frame * SORCERER_WIDTH, 0, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y, 231, 190)
		
		} else if (this.direction === "left") {
			let currentFrame = Math.floor(gameFrame/slowDownAnimationRate) % 5;
			console.log(`Current Frame: ${currentFrame}`)
			frame = slowDownAnimationRate - currentFrame; 
			console.log(`Frame: ${frame}`);
			ctx.drawImage(currentAnimation, frame * SORCERER_WIDTH, 0, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y, 231, 190)
		}
		gameFrame++;
	}

	idle() {
		this.status = "idle";
	}
  
	// Velocity 
	moveRight() {
		this.status = "moving";
		this.direction = "right";
		this.position.x += 6;
	}

	moveLeft() {
		this.status = "moving";
		this.direction = "left";
		this.position.x -= 6;
	}
}


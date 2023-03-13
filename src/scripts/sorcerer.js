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

// Jumping Animations
const sorcererJump = new Image();
sorcererJump.src = './assets/sorcerer/Jump.png'

// Animation Variables 
let frame = 0;
let gameFrame = 0;
const slowDownAnimationRate = 10;
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
			width: 10, 
			height: 10
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
		} else if (this.direction === "left" && this.status === "moving") {
			currentAnimation = sorcererRunLeft;
			runFrameSize;
		} else if (this.direction === "right" && this.status === "moving") {
			currentAnimation = sorcererRunRight;
			runFrameSize;
		} else if (this.status === "jumping") {
			currentAnimation = sorcererJump;
			frameSize = jumpingFrameSize;
		}
		
		// Chooses the frame based on cycles of the animation loop. Increases every 5 frames. Once Math.floor hits 1, it increments. Example (0.2, 0.4, 0.6, 0.8, 1.0, etc.)
		// Draws the Sorcerer with the above frame in line 2
		// ctx.drawImage(image, sx,sy,sw, sh, dx, dy, dw, dh)
		if (this.direction === "right") {
			frame = Math.floor(gameFrame/slowDownAnimationRate) % frameSize;
			ctx.drawImage(currentAnimation, frame * SORCERER_WIDTH, 56, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y, 231, 190)
		} else if (this.direction === "left") {
			let currentFrame = Math.floor(gameFrame/slowDownAnimationRate) % frameSize;
			frame = slowDownAnimationRate - currentFrame; 
			ctx.drawImage(currentAnimation, frame * SORCERER_WIDTH, 56, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y, 231, 190)
		}
		// Gravity 
		this.update(); 
		this.updateHitBox();

		ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
		ctx.fillRect(this.position.x, this.position.y, sorcererRightIdle.width, sorcererRightIdle.height)

		ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
		ctx.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height)
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

	idle() {
		this.status = "idle";
	}
  
	// Velocity 
	moveRight() {
		this.velocity.x += 1
		this.status = "moving";
		this.direction = "right";
	}

	moveLeft() {
		this.velocity.x -= 1
		this.status = "moving";
		this.direction = "left";
	}

	jump() {
		this.velocity.y = -10
		this.status = "jumping"
	}
}


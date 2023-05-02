import { CANVAS_HEIGHT, CANVAS_WIDTH } from "..";

// Base Dimensions of each arrow. 
export const ARROW_HEIGHT = 70;
const ARROW_WIDTH = 76;
const RIGHT_ARROW_X_OFFSET = 30;
const LEFT_ARROW_X_OFFSET = 17

const ARROW_FRAME_HEIGHT = 70;
const ARROW_FRAME_WIDTH = 100; 
let currentframe = 0;
let animationFrame = 0;
let slowDownAnimationRate = 5;

export const rightPositions = {
	1: {x: 900, y: 60},
	2: {x: 900, y: (60 + ARROW_HEIGHT) },
	3: {x: 900, y: (60 + (2 * ARROW_HEIGHT)) }, 
	4: {x: 900, y: (60 + (3 * ARROW_HEIGHT)) },
	5: {x: 900, y: (60 + (4 * ARROW_HEIGHT)) },
	6: {x: 900, y: (60 + (5 * ARROW_HEIGHT)) }
}

export const leftPositions = {
	1: {x: 20, y: 60 },
	2: {x: 20, y: (60 + ARROW_HEIGHT) },
	3: {x: 20, y: (60 + (2 * ARROW_HEIGHT)) },
	4: {x: 20, y: (60 + (3 * ARROW_HEIGHT)) },
	5: {x: 20, y: (60 + (4 * ARROW_HEIGHT)) },
	6: {x: 20, y: (60 + (5 * ARROW_HEIGHT)) },
}

export default class FireArrow {

	constructor(options) {
		this.image = new Image();
		this.image.src = './assets/fire_arrow/fire.png'
		this.totalAnimationFrames = 29;
		this.position = options.position
		this.width = ARROW_WIDTH;
		this.height = ARROW_HEIGHT;
		this.velocity = {
			x: options.velocity.x, 
			y: options.velocity.y
		}
		this.hitbox = {
			position: {
				x: this.position.x, 
				y: this.position.y
			}, 
			width: 10, 
			height: 10
		}
		this.recentlyHit = false; 
		this.outsideCanvas = false;
		this.moving = false; 
		this.currentDirection = options.currentDirection;
	}

	draw(ctx) {
		this.moving = true;
		this.outsideCanvasCheck();
		if (this.currentDirection === "right") {
			this.drawRightArrow(ctx);
		} else {
			this.drawLeftArrow(ctx);
		}
		this.updateHitBox();	//Moves the arrow hitbox as the arrow moves. 

		ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
		ctx.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height)
		this.move(); 		// Increases the position in accordance with the arrows velocity. 
		this.animate(ctx, ARROW_FRAME_WIDTH, ARROW_FRAME_HEIGHT);

	}

	move() {
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
	}

	animate(ctx, width, height) {
		currentframe = Math.floor(animationFrame/slowDownAnimationRate) % this.totalAnimationFrames;
		ctx.drawImage(
			this.image,
			currentframe * width, 
			0, 
			width, 
			height, 
			this.position.x, 
			this.position.y, 
			width, 
			height
		)
		animationFrame++;
	}

	reset() {
		if (this.currentDirection === "right") {
			this.position.x = 10;
			this.position.y = this.generateRandomNumber(0, 501);
			this.velocity.x = this.generateRandomNumber(2, 6);
			this.currentDirection = "left";
		} else {
			this.position.x = 900;
			this.position.y = this.generateRandomNumber(0, 500)
			this.velocity.x = this.generateRandomNumber(2, 6);
			this.velocity.x = -3;
			this.currentDirection = "right";
		}
		this.position.y = 40; 
	}

	updateHitBox() {
		this.hitbox = {
			position: {
				x: this.position.x + 37, 
				y: this.position.y + 57
			}, 
			width: 63, 
			height: 6
		}
	}

	ifHit() {
		setTimeout( () => {
			this.recentlyHit = false
			//this.reset();
		}, 1000)
	}

	generateRandomNumber(max, min) {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	drawLeftArrow(ctx) {
		ctx.beginPath();
		ctx.strokeStyle = '#964B00';
		ctx.lineWidth = 3;
		ctx.moveTo(this.position.x + 50, this.position.y + 60);
		ctx.lineTo(this.position.x -12, this.position.y + 60);
		ctx.stroke();

		// Creates Left facing arrow end
		ctx.beginPath();
		ctx.fillStyle = "#5A5A5A"
		ctx.moveTo(this.position.x, this.position.y + 60);
		ctx.lineTo(this.position.x - 12, this.position.y + 60 + 4);
		ctx.lineTo(this.position.x - 12, this.position.y + 60 - 4);
		ctx.fill();
	}

	drawRightArrow(ctx) {
		// Creates Right facing Arrow Shaft
		ctx.beginPath();
		ctx.strokeStyle = '#964B00';
		ctx.lineWidth = 3;
		ctx.moveTo(this.position.x + 50, this.position.y + 60);
		ctx.lineTo(this.position.x + 100, this.position.y + 60);
		ctx.stroke();

		// Creates Right facing arrow end
		ctx.beginPath();
		ctx.fillStyle = "#5A5A5A"
		ctx.moveTo(this.position.x + 96, this.position.y + 60);
		ctx.lineTo(this.position.x + 97 + 5, this.position.y + 60 + 4);
		ctx.lineTo(this.position.x + 97 + 5, this.position.y + 60 - 4);
		ctx.fill();
	}

	outsideCanvasCheck() {
		if (this.currentDirection === "right" && this.moving) {
			if (this.position.x < (0 -(RIGHT_ARROW_X_OFFSET + ARROW_WIDTH))) {
				this.outsideCanvas = true; 
				this.velocity.x = 0;
				this.moving = false; 
			}
		} 
			if (this.currentDirection === "left" && this.moving) {
				if (this.position.x > CANVAS_WIDTH + LEFT_ARROW_X_OFFSET) {
					this.outsideCanvas = true;
					this.velocity.x = 0;
					this.moving = false; 
				}
			}
		if (this.position.y > (CANVAS_HEIGHT + 1)) {
			this.outsideCanvas = true; 
			this.velocity.y = 0;
			this.moving = false; 
		} 
	}
}

import AnimatedObject from "./animated_object";

const ARROW_HEIGHT = 110;
const ARROW_WIDTH = 100;

export default class FireArrow extends AnimatedObject {
	constructor(options) {
		options.imageSrc = './assets/fire_arrow/fire.png'
		options.amountOfFrames = 29;
		super(options) // position
		this.position = options.position
		this.width = ARROW_WIDTH;
		this.height = ARROW_HEIGHT;
		this.velocity = {
			x: -3, 
			y: 2, 
		}
		this.hitbox = {
			position: {
				x: this.position.x, 
				y: this.position.y
			}, 
			width: 10, 
			height: 10
		}
		this.target = options.target;
		this.hit = false; 
		this.direction = "right";
	}

	draw(ctx) {

		if (this.direction === "right") {
			// Creates Arrow Shaft
			ctx.beginPath();
			ctx.strokeStyle = '#964B00';
			ctx.lineWidth = 3;
			ctx.moveTo(this.position.x + 50, this.position.y + 60);
			ctx.lineTo(this.position.x + 100, this.position.y + 60);
			ctx.stroke();

			// Creates end of Arrow
			ctx.beginPath();
			ctx.fillStyle = "#5A5A5A"
			ctx.moveTo(this.position.x + 96, this.position.y + 60);
			ctx.lineTo(this.position.x + 97 + 5, this.position.y + 60 + 4);
			ctx.lineTo(this.position.x + 97 + 5, this.position.y + 60 - 4);
			ctx.fill();
		} else {
			ctx.beginPath();
			ctx.strokeStyle = '#964B00';
			ctx.lineWidth = 3;
			ctx.moveTo(this.position.x + 50, this.position.y + 60);
			ctx.lineTo(this.position.x -12, this.position.y + 60);
			ctx.stroke();

			// Creates end of Arrow
			ctx.beginPath();
			ctx.fillStyle = "#5A5A5A"
			ctx.moveTo(this.position.x, this.position.y + 60);
			ctx.lineTo(this.position.x - 12, this.position.y + 60 + 4);
			ctx.lineTo(this.position.x - 12, this.position.y + 60 - 4);
			ctx.fill();
		}

		this.updateHitBox();

		this.move()
		this.animate(ctx, this.width, this.height);

		// Hitbox Representations 
		//ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
		//ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
		//ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
		//ctx.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height)

	}

	move() {
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
	}

	reset() {
		if (this.direction === "right") {
			this.direction = "left";
			this.position.x = 10;
			this.position.y = this.generateRandomNumber(0, 501)
			this.velocity.x = this.generateRandomNumber(2, 6);
			console.log(this.velocity.x)
		} else {
			this.direction = "right";
			this.position.x = 900;
			this.position.y = this.generateRandomNumber(0, 500)
			this.velocity.x = this.generateRandomNumber(2, 6);
			this.velocity.x = -3;
			
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
			this.hit = false
		}, 1000)
	}

	generateRandomNumber(max, min) {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

}
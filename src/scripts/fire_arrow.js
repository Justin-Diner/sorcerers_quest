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
			x: -4, 
			y: 2, 
		}
		this.target = options.target;
	}

	draw(ctx) {

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

		this.move()
		this.animate(ctx, this.width, this.height);
	}

	move() {
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
	}
}
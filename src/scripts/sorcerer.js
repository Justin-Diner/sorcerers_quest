export default class Sorcerer {
	constructor(position) {
		this.position = position
	}

	draw(ctx) {
		ctx.fillStyle = "red";
		ctx.fillRect(this.position.y, this.position.x, 100, 100)
	}

	// Velocity 
	moveRight() {
		this.position.y +=3
	}

	moveLeft() {
		this.position.y--
	}
}


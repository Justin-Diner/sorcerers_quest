export default class Sorcerer {
	constructor() {
		this.position = {
			x: 360, 
			y: 0
		}
	}

	draw(ctx) {
		ctx.fillStyle = "red";
		ctx.fillRect(this.position.y, this.position.x, 100, 100)
	}

	move() {
		this.position.y++
	}
}


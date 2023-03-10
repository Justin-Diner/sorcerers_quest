const sorcererRun = new Image();
sorcererRun.src = '../assets/sorcerer/Run.png'


export default class Sorcerer {
	constructor(position) {
		this.position = position
	}

	draw(ctx) {
		ctx.fillStyle = "red";
		ctx.fillRect(this.position.x, this.position.y, 100, 100)
		ctx.drawImage(sorcererRun, 0, 0)
	}

	// Velocity 
	moveRight() {
		this.position.x +=3
	}

	moveLeft() {
		this.position.x--
	}
}


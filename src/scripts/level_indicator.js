export default class LevelIndicator {
	constructor(level) {
		this.level = level
	}

	draw(ctx) {
		ctx.font = "bold 36px serif"
		ctx.fillStyle = "white";
		ctx.fillText(`Level: ${this.level} / 3`, 428, 39)
		ctx.stroke();
	}
}
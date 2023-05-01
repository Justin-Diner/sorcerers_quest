export default class LevelIndicator {
	constructor(level) {
		this.level = level
	}

	draw(ctx) {
		ctx.font = "bold 36px serif"
		ctx.fillStyle = "red";
		ctx.fillText(`Level: ${this.level}`, 440, 39)
		ctx.stroke();
	}
}
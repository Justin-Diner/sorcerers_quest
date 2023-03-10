export default class HealthBar {
	constructor(options) {
	this.position = options.position
 	this.value = 100;
	this.backgroundColor = "green";
	this.innerSize = 254;
	this.textPosition = options.textPosition;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.rect(this.position.x, this.position.y, 254, 24);
		ctx.fillStyle = "red";
		ctx.strokeStyle = "black";
		ctx.stroke();
		ctx.fill()
	
		// Inner Rect 
		ctx.beginPath();
		ctx.rect(this.position.x, this.position.y, this.innerSize, 24);
		ctx.strokeStyle = "transparent";
		ctx.fillStyle = this.backgroundColor;
		ctx.fill()
	
		// Text
		ctx.fillStyle = "white";
		ctx.fillText(`${this.value} / 100`, this.textPosition, 29)
		ctx.stroke();
		
	}

	decrease() {
		if (this.value >= 1) {
		this.value -= 10;
		this.innerSize -= 25.4;
		}
	}

}
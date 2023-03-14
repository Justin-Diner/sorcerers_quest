export default class HealthBar {
	constructor() {
 	this.value = 100;
	this.backgroundColor = "green";
	this.innerSize = 254;
	}

	draw(ctx) {

		ctx.beginPath();
		ctx.rect(50, 14, 254, 24);
		ctx.fillStyle = "red";
		ctx.strokeStyle = "black";
		ctx.stroke();
		ctx.fill()
	
		// Inner Rect 
		ctx.beginPath();
		ctx.rect(50, 14, this.innerSize, 24);
		ctx.strokeStyle = "transparent";
		ctx.fillStyle = this.backgroundColor;
		ctx.fill()
	
		// Text
		ctx.fillStyle = "white";
		ctx.fillText(`${this.value} / 100`, 155, 29)
		ctx.stroke();
		
	
		
	}

	decrease() {
		let hits = 10;

		this.value -= 10;
		this.innerSize -= 25.4;

	}

}
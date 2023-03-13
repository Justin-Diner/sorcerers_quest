export default class HealthBar {
	constructor() {
 	this.value = 100;
	this.backgroundColor = "green";
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.rect(50, 14, 250, 20);
		
		// Inner Rect 
		ctx.rect(50, 14, 250, 20);
		ctx.strokeStyle = "black";
		ctx.fillStyle = this.backgroundColor;
		ctx.fill()
	
		// Text
		ctx.fillStyle = "white";
		ctx.fillText(`${this.value} / 100`, 155, 28)
		ctx.stroke();
		
	
		
	}

	decrease() {
		this.value -= 10;
	}

}
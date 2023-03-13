export default class HealthBar {
	constructor() {
 	this.value = 100;
	this.backgroundColor = "green";
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.strokeStyle = "black"
		ctx.rect(50, 14, 250, 20);
		ctx.fillStyle = this.backgroundColor;
		ctx.fill()
		ctx.stroke();
		ctx.fillStyle = "white";
		ctx.fillText(`${this.value} / 100`, 155, 28)
		ctx.stroke();
	
		
	}

	decrease() {
		this.value -= 10;
	}

}
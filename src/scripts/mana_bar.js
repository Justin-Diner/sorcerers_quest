export default class ManaBar {
	constructor(options) {
		this.position = options.position;
		this.text = options.text;
		this.backgroundColor = "blue";
		this.innerSize = 254;
		this.textPosition = options.textPosition;
		this.recharging = false; 
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.rect(this.position.x, this.position.y, 254, 24);
		ctx.fillStyle = "black";
		ctx.strokeStyle = "black";
		ctx.stroke();
		ctx.fill();

		ctx.beginPath(); 
		ctx.rect(this.position.x, this.position.y, this.innerSize, 23);
		ctx.strokeStyle = "transparent";
		ctx.fillStyle = this.backgroundColor;
		ctx.fill(); 

		// Text
		ctx.fillStyle = "white";
		ctx.font = "14px serif";
		ctx.fillText(`${this.text}`, 148, 58);
		ctx.stroke();
	}

	recharge() {
		const total = 254;

		if (this.recharging) {
			this.text = "Recharging..";
			this.innerSize = 0;
			const recharge = setInterval(() => {
				if (this.innerSize < 254) {
					this.innerSize += .8
				}
				if (this.innerSize >= 254) {
					clearInterval(recharge);
				}
			}, 9);
		} else {
			this.text = "Spell Ready";
			this.innerSize = 254;
		}
	}
}
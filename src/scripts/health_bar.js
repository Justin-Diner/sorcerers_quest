import { ContextExclusionPlugin } from "webpack";

class HealthBar {
	constructor() {
 	this.value = 100;
	this.backgroundColor = "green";
	}

	draw() {
		//ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
		//ctx.fillRect(this.position.x, this.position.y, sorcererRightIdle.width, sorcererRightIdle.height)
	}

	decrease() {
		this.value -= 10;
	}

}
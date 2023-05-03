import HealthBar from "./health_bar";

const castleImg = new Image();
castleImg.src = './assets/castle/castle.png'

export default class Castle {
	constructor(options){
		this.position = {x: 680, y: 480}
		this.width = 400;
		this.height =  600; 
		this.health = options.health; 
		this.healthbar = new HealthBar({position: {
			x: 700, 
			y: 14
		},
		value: options.health,
		textPosition: 805})
	}

	draw(ctx) {
		ctx.drawImage(castleImg, this.position.x, 0, this.width, this.height)
	}

	drawHealthBar(ctx) {
		this.healthbar.draw(ctx);
	}
}
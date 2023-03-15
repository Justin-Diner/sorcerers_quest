import HealthBar from "./health_bar";

const castleImg = new Image();
castleImg.src = './assets/castle/castle.png'

export default class Castle {
	constructor(options){
		this.position = options.position;
		this.width = 400;
		this.height =  600; 
		this.health = 100; 
		this.healthbar = new HealthBar({position: {
			x: 700, 
			y: 14
		},
		value: 100,
		textPosition: 810})
	}

	draw(ctx) {
		ctx.drawImage(castleImg, this.position.x, 0, this.width, this.height)
	}

	drawHealthBar(ctx) {
		this.healthbar.draw(ctx);
	}
}
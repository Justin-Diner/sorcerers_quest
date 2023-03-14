const scaledCanvas = {
	width:  1024 / 4,
	height: 576 / 4
}

export default class StillObject {
	constructor(object) {
		this.position = object.position;
		this.image = new Image();
		this.image.src = object.imageSrc;
	}

	draw(ctx) {
		if (!this.image) return;
		ctx.scale(4, 4) 
		ctx.drawImage(this.image, this.position.x, this.position.y)
	}

}
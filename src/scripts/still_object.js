export default class StillObject {
	constructor(object) {
		this.position = object.position;
		this.image = new Image();
		this.image.src = object.imageSrc;
	}

	draw(ctx) {
		if (!this.image) return;
		ctx.drawImage(this.image, this.position.x, this.position.y)
	}

}
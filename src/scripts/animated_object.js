let frame = 0;
let animationFrame = 0;
let slowDownAnimationRate = 5;

export default class AnimatedObject {
	constructor(options) {
		this.position = options.position;
		this.image = new Image();
		this.image.src = options.imageSrc;
		this.amountOfFrames = options.amountOfFrames
	}

	animate(ctx, width, height) {
		// ctx.drawImage(image, sx,sy,sw, sh, dx, dy, dw, dh)
		frame = Math.floor(animationFrame/slowDownAnimationRate) % this.amountOfFrames;
		ctx.drawImage(this.image, frame * width, 0, width, height, this.position.x, this.position.y, width, height)
		animationFrame ++;
	}
}
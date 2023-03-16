let currentframe = 0;
let animationFrame = 0;
let slowDownAnimationRate = 5;

export default class AnimatedObject {
	constructor(options) {
		this.image = new Image();
		this.image.src = options.imageSrc;
		this.amountOfFrames = options.amountOfFrames
	}

	// Makes the animation for the animated object. 
	// ctx.drawImage(
		//	image, 
		//	sx - x-axis coordinate of the top left of the image. 
		//	sy - y-axis coordinate of the top left corner of the image. 
		//	sWidth -  Width of the source image to draw. 
		//	sHeight - Height of the image to draw. 
		//	dx - x-axis coodinate to plae top left corner of source
		//	dy - y-axis coordinate to place top-left corner of sounrce. 
		//	dWidth - The width to draw the image in the destination canvas. 
		//	dHeight - The height to draw the image in the canvas.  
		//)
	animate(ctx, width, height) {
		currentframe = Math.floor(animationFrame/slowDownAnimationRate) % this.amountOfFrames;
		ctx.drawImage(
			this.image, 
			currentframe * width, 
			0, 
			width, 
			height, 
			this.position.x, 
			this.position.y, 
			width, 
			height
		)
		
		animationFrame++;
	}

}
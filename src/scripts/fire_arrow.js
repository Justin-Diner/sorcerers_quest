import AnimatedObject from "./animated_object";

const ARROW_HEIGHT = 110;
const ARROW_WIDTH = 100;

export default class FireArrow extends AnimatedObject {
	constructor(options) {
		options.imageSrc = '../assets/fire_arrow/fire.png'
		options.amountOfFrames = 29;
		super(options)
		this.width = ARROW_WIDTH;
		this.height = ARROW_HEIGHT;
	}

	
}
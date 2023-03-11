export default class MovingObject {
	constructor(options) {
		this.position = options.position;
		this.velocity = {
			x: -1, 
			y: 0
		}
		this.target = options.target;
	}
}
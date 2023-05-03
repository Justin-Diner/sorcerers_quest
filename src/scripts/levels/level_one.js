import { rightPositions, leftPositions } from "../fire_arrow";
import FireArrow from "../fire_arrow";

export class LevelOne {
	constructor() {
		this.levelArrows = [];
		this.loopFunction;
		this.generateArrows();
	}

	generateArrows() {
		for (let i = 1; i < 7; i++) {
			this.levelArrows.push(
				new FireArrow({
					position: {x: leftPositions[i].x, y: leftPositions[i].y},
					currentDirection: "left",
					velocity: {
						x: 10, 
						y: 0
					}
				})
			)
		}
	}
}


export default LevelOne;
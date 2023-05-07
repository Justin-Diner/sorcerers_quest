import { rightPositions } from "../fire_arrow";
import FireArrow from "../fire_arrow";
import Castle from "../castle";

export class LevelOne {
	constructor() {
		this.level = 1;
		this.levelArrows = [];
		this.castle = new Castle({health: 10})
	}

	generateArrows() {
		for (let i = 5; i < 6; i++) {
			this.levelArrows.push(
				new FireArrow({
					position: {x: rightPositions[i].x, y: rightPositions[i].y},
					currentDirection: "right",
					velocity: {
						x: -6, 
						y: 0
					}
				})
			)
		}
	}
}


export default LevelOne;
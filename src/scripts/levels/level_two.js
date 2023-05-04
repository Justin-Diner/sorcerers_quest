import { rightPositions, leftPositions } from "../fire_arrow";
import FireArrow from "../fire_arrow";
import Castle from "../castle";

export class LevelTwo {
	constructor() {
		this.level = 2;
		this.levelArrows = [[], []];
		this.castle = new Castle({health: 70})
	}

	clearLevelArrows() {
		this.levelArrows = [[], []];
	}

	generateArrows() {
		for (let i = 6; i > 0; i--) {
			this.levelArrows[0].push(
				new FireArrow({
					position: {x: rightPositions[i].x, y: rightPositions[i].y},
					currentDirection: "right",
					velocity: {
						x: -10,
						y: 0
					}
				})
			)
			this.levelArrows[1].push(
				new FireArrow({
					position: {x:leftPositions[i].x, y: leftPositions[i].y},
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

export default LevelTwo
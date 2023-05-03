import { rightPositions, leftPositions } from "../fire_arrow";
import FireArrow from "../fire_arrow";
import Castle from "../castle";

export class LevelThree {
	constructor(sorcerer) {
		this.level = 3;
		this.levelArrows = [[], []];
		this.sorcerer = sorcerer;
		this.castle = new Castle ({health: 100})
	}

	generateArroww() {
		for (let i = 0; i < 7; i++) {
			this.levelArrows[0].push(
				new FireArrow({
					position: {x:rightPositions[i].x, y: rightPositions[i].y},
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
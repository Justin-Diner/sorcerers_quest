import { rightPositions, leftPositions } from "../fire_arrow";
import FireArrow from "../fire_arrow";


export const levelOneArrows = () => {
	let arrows = [];

	for (let i = 1; i < 7; i++) {
		arrows.push(
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
	return arrows;
}


export default levelOneArrows;
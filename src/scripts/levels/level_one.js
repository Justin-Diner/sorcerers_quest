import { rightPositions } from "../fire_arrow";
import FireArrow from "../fire_arrow";


export const levelOneArrows = () => {
	let arrows = [];

	for (let i = 1; i < 2; i++) {
		arrows.push(
			new FireArrow({
				position: {x: rightPositions[i].x, y: rightPositions[i].y},
				currentDirection: "right",
				velocity: {
					x: -10, 
					y: 0
				}
			})
		)
	}
	return arrows;
}


export default levelOneArrows;
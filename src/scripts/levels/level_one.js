import FireArrow from "../fire_arrow";
//let firstArrow = new FireArrow({
//	position: FireArrow.leftPositions[1], 
//	currentDirection: "right",
//	velocity: {
//		x: 3, 
//		y: 0
//	}
//});

export const levelOneArrows = () => {
	let arrows = [];

	for (let i = 1; i < 7; i++) {
		arrows.push(
			new FireArrow({
				position: FireArrow.rightPositions[i],
				currentDirection: "right",
				velocity: {
					x: -8, 
					y: 0
				}
			})
		)
	}
	return arrows;
}


export default levelOneArrows;
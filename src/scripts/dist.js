import FireArrow from "./fire_arrow";
import { rightPositions, leftPositions } from "./fire_arrow";

export const utilities = {
	randomShootingPosition() {
		const choices = ["right", "left"]
		let arrowDirection = choices[Math.floor(Math.random() * choices.length)]; 
		let xPosition;
		let yPosition;

		if (arrowDirection === "right") {
			xPosition = rightPositions[1].x;
			yPosition = rightPositions[1].y;
		} else {
			xPosition = leftPositions[1].x
			yPosition = leftPositions[1].y
		}

		let velocity = {
			x: 0, 
			y: 4
		}; 
	
		if (arrowDirection === "left") {
			velocity.x = 5;
		} else {
			velocity.x = -5;
		}
	
		return new FireArrow({
			position: {x: xPosition, y: yPosition},
			currentDirection: arrowDirection,
			velocity: {
				x: velocity.x, 
				y: velocity.y
			}
		})
	},
	  // Normalize the length of the vector to 1, maintaining direction.
	  dir(vec) {
			const norm = Util.norm(vec);
			return Util.scale(vec, 1 / norm);
	  },
	  // Find distance between two points.
	  dist(pos1, pos2) {
			return Math.sqrt(
				Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
			);
	  },
	  // Find the length of the vector.
	  norm(vec) {
			return Util.dist([0, 0], vec);
	  },
	  // Return a randomly oriented vector with the given length.
	  randomVec(length) {
			const deg = 2 * Math.PI * Math.random();
			return Util.scale([Math.sin(deg), Math.cos(deg)], length);
	  },
}

export default utilities;
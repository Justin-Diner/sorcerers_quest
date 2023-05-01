export const utilities = {
	randomShootingPosition() {
		let spawnHeight = Math.floor(576 / 3)
		let spawnWidth = 1024
		let xPosition = spawnWidth * Math.random();
		let yPosition = spawnHeight * Math.random()
		let arrowDirection; 
		let velocity = {
			x: 0, 
			y: 0
		};
	
		if (xPosition < 512) {
			arrowDirection = "left";
		} else {
			arrowDirection = "right";
		}
	
		if (arrowDirection = "left") {
			velocity.x = 3;
		} else {
			velocity.x = -3;
		}
	
		return { position: {
			x: xPosition,
			y: yPosition
			},
			currentDirection : arrowDirection, 
			velocity : {
				x: velocity.x,
				y: velocity.y
			}
		}
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
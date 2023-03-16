# Sorcerer's Quest

![Screenshot](./strategy/screenshot.png)

## Description

Sorcerer's Quest is a vanilla JavaScript fantasy adventure game! You begin as a Sorcerer whose quest is simple, defeat the King hiding in Castlevania. It's not a simple quest, as the King's men will be defending the Castle with fire arrows. 

![Introduction](./strategy/introduction.png)

## Technologies 

The project uses vanilla JavaScript, HTML, and CSS. The game utilizes the HTML Canvas API to create animations, fire arrows, and complete collision detection. 

## User Controls

 1 - Accept(Start) Your Quest
 2 - Move the character left and right by using A-D. (Jump functionality may also be added if time permitted)
 3 - Dogde, Duck, Dive, Dip, Dive, and Dodge. 
 4 - Battle by casting your spell by using C.  
 5 - Defat the castle.
 6 - Profit! (Save the people and become their leader!)

## Feature Implementation 

1. Control the Sorcerer Character and Dodging Arrows  

```javascript		

	window.addEventListener("keydown", (e) => {
		if (e.key === "d") {
			acceptableKeys.d.pressed = true; 
			sorcerer.moveRight();
		} else if (e.key === "a") {
			acceptableKeys.a.pressed = true; 
			sorcerer.moveLeft();
		} else if (e.key === " ") {
			acceptableKeys.space.pressed = true; 
			sorcerer.jump();
		} else if (e.key === "c" && !(cLocked)) {
			this.lockC();
			sorcerer.cast();
			
			this.castle.health -=10
			this.castle.healthbar.decrease();
		}
	})
```

 2. Hit Detection was completed by the animation loop checking whether or not each arrow's hitbox is within the sorcerer's hitbox pixel boundaries. If it is, the arrow is timed out from doing damage for 1 second (which causes only one instancce of damage).  
 
```javascript 
	isCollided() {
		let sorcerer = this.sorcerer
		let sorcererHitBox = sorcerer.hitboxDims();
		let topLeft = sorcererHitBox.topLeft;
		let topRight = sorcererHitBox.topRight;
		let bottomRight = sorcererHitBox.bottomRight;

		for (let i = 0; i < this.arrow.length; i++) {
			if (this.arrow[i].recentlyHit === false) {
				if ((this.arrow[i].hitbox.position.x > topLeft[0] && this.arrow[i].hitbox.position.x < topRight[0]) && (this.arrow[i].hitbox.position.y < bottomRight[1] && this.arrow[i].hitbox.position.y > topRight[1])) {
					this.stopArrowDamage(i);
					this.arrow[i].ifHit();
					sorcerer.health -= 10;
					this.sorcerer.healthBar.decrease();
					this.arrow.push(
						new FireArrow(
							randomShootingPosition()), 
							);
				}
			}
		i++;
		}
	}
```

## Features in Development
* Difficulty incease by having levels. Each level increases the amount of arrows fired.  
* Smoother animations for my sprites 
* Healing on the castle. 
* More terrain 
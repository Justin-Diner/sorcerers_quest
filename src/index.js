import Sorcerer from './scripts/sorcerer';

document.addEventListener("DOMContentLoaded", () => {

	// Game
	document.body.style.backgroundColor = "black";
	const title = document.getElementById("title");
	title.style.color = "white";
	title.style.textAlign = "center";

	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");
	canvas.height = 576; // height and width are this to fit most browsers. 
	canvas.width = 1024;
	ctx.fillRect(10, 10, canvas.width, canvas.height);

	const sorcerer = new Sorcerer({
		x: 360, 
		y: 40
	})
	sorcerer.draw(ctx);

	function animate() { // Call this to animate anything inside. 
		ctx.fillStyle = "white";
		ctx.fillRect(10, 10, canvas.width, canvas.height);
		sorcerer.draw(ctx);	
		console.log("hello")
		requestAnimationFrame(animate);
	}

	window.addEventListener("keydown", (e) => {
		if (e.key === "d") {
			console.log("Hitting d")
			sorcerer.moveRight();
		} else if (e.key === "a") {
			sorcerer.moveLeft();
		}
	})
	
	animate();
});



//const background = new Image();
//background.src = "./assets/background/castlebackground.jpg"
//ctx.drawImage(background, 0, 0)
//background.onload = function(){
//    ctx.drawImage(background,0,0);   
//}




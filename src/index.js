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

	const sorcerer = new Sorcerer({x: 180, y: 340})

	function animate() { // Call this to animate anything inside. 
		ctx.fillStyle = "white";
		ctx.fillRect(10, 10, canvas.width, canvas.height);
		sorcerer.draw(ctx);	
		requestAnimationFrame(animate);
	}

	animate();

	window.addEventListener("keydown", (e) => {
		if (e.key === "d") {
			sorcerer.moveRight();
		} else if (e.key === "a") {
			sorcerer.moveLeft();
		} 
	})

	window.addEventListener("keyup", (e) => {
		sorcerer.idle();
	})
});



//const background = new Image();
//background.src = "./assets/background/castlebackground.jpg"
//ctx.drawImage(background, 0, 0)
//background.onload = function(){
//    ctx.drawImage(background,0,0);   
//}




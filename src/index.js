document.addEventListener("DOMContentLoaded", () => {
	console.log("Hello World")
	const main = document.getElementById("main");
	console.log("testing2")
	new Example(main);
});

import Example from "../scripts/example.js";


import Sorcerer from './sorcerer';
// Game
document.body.style.backgroundColor = "white";
const title = document.getElementById("title");
title.style.color = "white";
title.style.textAlign = "center";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.height = 576;
canvas.width = 1024;

ctx.fillStyle = "white";
ctx.fillRect(10, 10, canvas.width, canvas.height);

const sorcerer = new Sorcerer
sorcerer.draw(ctx);

function animate() { // Call this to animate anything inside. 
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	sorcerer.draw(ctx);
	sorcerer.move();
	requestAnimationFrame(animate);
	
}


//const background = new Image();
//background.src = "./assets/background/castlebackground.jpg"
//ctx.drawImage(background, 0, 0)
//background.onload = function(){
//    ctx.drawImage(background,0,0);   
//}




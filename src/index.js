// Title 
const titleCanvas = document.getElementById("title-canvas");
const tctx = titleCanvas.getContext("2d");

// Game
const gameCanvas = document.getElementById("game-canvas");
gameCanvas.height = window.innerHeight;
gameCanvas.width = window.innerWidth;
const gctx = gameCanvas.getContext("2d");

tctx.fillStyle ="blue"
tctx.fillRect(10, 10, 600, 100);
gctx.fillStyle = "green";
gctx.fillRect(60, 20, 640, 360);



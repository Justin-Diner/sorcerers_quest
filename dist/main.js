/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_sorcerer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/sorcerer */ \"./src/scripts/sorcerer.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // Game\n  document.body.style.backgroundColor = \"black\";\n  const title = document.getElementById(\"title\");\n  title.style.color = \"white\";\n  title.style.textAlign = \"center\";\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  canvas.height = 576; // height and width are this to fit most browsers. \n  canvas.width = 1024;\n  const sorcerer = new _scripts_sorcerer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    x: 180,\n    y: 340\n  });\n  function animate() {\n    // Call this to animate anything inside. \n    ctx.fillStyle = \"white\";\n    ctx.fillRect(10, 10, canvas.width, canvas.height);\n    sorcerer.draw(ctx);\n    requestAnimationFrame(animate);\n  }\n  animate();\n  window.addEventListener(\"keydown\", e => {\n    if (e.key === \"d\") {\n      sorcerer.moveRight();\n    } else if (e.key === \"a\") {\n      sorcerer.moveLeft();\n    }\n  });\n  window.addEventListener(\"keyup\", e => {\n    sorcerer.idle();\n  });\n});\n\n//const background = new Image();\n//background.src = \"./assets/background/castlebackground.jpg\"\n//ctx.drawImage(background, 0, 0)\n//background.onload = function(){\n//    ctx.drawImage(background,0,0);   \n//}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEM7QUFFMUNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUVuRDtFQUNBRCxRQUFRLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxlQUFlLEdBQUcsT0FBTztFQUM3QyxNQUFNQyxLQUFLLEdBQUdMLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUM5Q0QsS0FBSyxDQUFDRixLQUFLLENBQUNJLEtBQUssR0FBRyxPQUFPO0VBQzNCRixLQUFLLENBQUNGLEtBQUssQ0FBQ0ssU0FBUyxHQUFHLFFBQVE7RUFFaEMsTUFBTUMsTUFBTSxHQUFHVCxRQUFRLENBQUNNLGNBQWMsQ0FBQyxRQUFRLENBQUM7RUFDaEQsTUFBTUksR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDbkNGLE1BQU0sQ0FBQ0csTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0VBQ3JCSCxNQUFNLENBQUNJLEtBQUssR0FBRyxJQUFJO0VBRW5CLE1BQU1DLFFBQVEsR0FBRyxJQUFJZix5REFBUSxDQUFDO0lBQUNnQixDQUFDLEVBQUUsR0FBRztJQUFFQyxDQUFDLEVBQUU7RUFBRyxDQUFDLENBQUM7RUFFL0MsU0FBU0MsT0FBT0EsQ0FBQSxFQUFHO0lBQUU7SUFDcEJQLEdBQUcsQ0FBQ1EsU0FBUyxHQUFHLE9BQU87SUFDdkJSLEdBQUcsQ0FBQ1MsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUVWLE1BQU0sQ0FBQ0ksS0FBSyxFQUFFSixNQUFNLENBQUNHLE1BQU0sQ0FBQztJQUNqREUsUUFBUSxDQUFDTSxJQUFJLENBQUNWLEdBQUcsQ0FBQztJQUNsQlcscUJBQXFCLENBQUNKLE9BQU8sQ0FBQztFQUMvQjtFQUVBQSxPQUFPLEVBQUU7RUFFVEssTUFBTSxDQUFDckIsZ0JBQWdCLENBQUMsU0FBUyxFQUFHc0IsQ0FBQyxJQUFLO0lBQ3pDLElBQUlBLENBQUMsQ0FBQ0MsR0FBRyxLQUFLLEdBQUcsRUFBRTtNQUNsQlYsUUFBUSxDQUFDVyxTQUFTLEVBQUU7SUFDckIsQ0FBQyxNQUFNLElBQUlGLENBQUMsQ0FBQ0MsR0FBRyxLQUFLLEdBQUcsRUFBRTtNQUN6QlYsUUFBUSxDQUFDWSxRQUFRLEVBQUU7SUFDcEI7RUFDRCxDQUFDLENBQUM7RUFFRkosTUFBTSxDQUFDckIsZ0JBQWdCLENBQUMsT0FBTyxFQUFHc0IsQ0FBQyxJQUFLO0lBQ3ZDVCxRQUFRLENBQUNhLElBQUksRUFBRTtFQUNoQixDQUFDLENBQUM7QUFDSCxDQUFDLENBQUM7O0FBSUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29yY2VyZXJzX3F1ZXN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNvcmNlcmVyIGZyb20gJy4vc2NyaXB0cy9zb3JjZXJlcic7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuXHQvLyBHYW1lXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XG5cdHRpdGxlLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuXHR0aXRsZS5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG5cdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuXHRjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRjYW52YXMuaGVpZ2h0ID0gNTc2OyAvLyBoZWlnaHQgYW5kIHdpZHRoIGFyZSB0aGlzIHRvIGZpdCBtb3N0IGJyb3dzZXJzLiBcblx0Y2FudmFzLndpZHRoID0gMTAyNDtcblxuXHRjb25zdCBzb3JjZXJlciA9IG5ldyBTb3JjZXJlcih7eDogMTgwLCB5OiAzNDB9KVxuXG5cdGZ1bmN0aW9uIGFuaW1hdGUoKSB7IC8vIENhbGwgdGhpcyB0byBhbmltYXRlIGFueXRoaW5nIGluc2lkZS4gXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcblx0XHRjdHguZmlsbFJlY3QoMTAsIDEwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXHRcdHNvcmNlcmVyLmRyYXcoY3R4KTtcdFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcblx0fVxuXG5cdGFuaW1hdGUoKTtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcblx0XHRpZiAoZS5rZXkgPT09IFwiZFwiKSB7XG5cdFx0XHRzb3JjZXJlci5tb3ZlUmlnaHQoKTtcblx0XHR9IGVsc2UgaWYgKGUua2V5ID09PSBcImFcIikge1xuXHRcdFx0c29yY2VyZXIubW92ZUxlZnQoKTtcblx0XHR9IFxuXHR9KVxuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcblx0XHRzb3JjZXJlci5pZGxlKCk7XG5cdH0pXG59KTtcblxuXG5cbi8vY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuLy9iYWNrZ3JvdW5kLnNyYyA9IFwiLi9hc3NldHMvYmFja2dyb3VuZC9jYXN0bGViYWNrZ3JvdW5kLmpwZ1wiXG4vL2N0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMClcbi8vYmFja2dyb3VuZC5vbmxvYWQgPSBmdW5jdGlvbigpe1xuLy8gICAgY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLDAsMCk7ICAgXG4vL31cblxuXG5cbiJdLCJuYW1lcyI6WyJTb3JjZXJlciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInRpdGxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb2xvciIsInRleHRBbGlnbiIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsInNvcmNlcmVyIiwieCIsInkiLCJhbmltYXRlIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2luZG93IiwiZSIsImtleSIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwiaWRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/sorcerer.js":
/*!*********************************!*\
  !*** ./src/scripts/sorcerer.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sorcerer; }\n/* harmony export */ });\n// Idle Animations \nconst sorcererRightIdle = new Image();\nsorcererRightIdle.src = '../assets/sorcerer/Idle.png';\nconst sorcererLeftIdle = new Image();\nsorcererLeftIdle.src = '../assets/sorcerer/idle_left.png';\n\n// Run Animations\nconst sorcererRunRight = new Image();\nsorcererRunRight.src = '../assets/sorcerer/Run.png';\nconst sorcererRunLeft = new Image();\nsorcererRunLeft.src = '../assets/sorcerer/sorcerer_run_left.png';\n\n// Animation Variables \nlet frame = 0;\nlet gameFrame = 0;\nconst slowDownAnimationRate = 5;\nlet idleFrameSize = 5;\nlet runFrameSize = 7;\nlet frameSize = 0;\nconst SORCERER_WIDTH = 231;\nconst SORCERER_HEIGHT = 190;\nclass Sorcerer {\n  constructor(position) {\n    this.position = position;\n    this.status = \"idle\";\n    this.direction = \"right\";\n  }\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.position.x, this.position.y, 50, 0, 2 * Math.PI);\n    ctx.stroke();\n    let currentAnimation = sorcererRightIdle;\n    if (this.direction === \"right\" && this.status == \"idle\") {\n      currentAnimation = sorcererRightIdle;\n      frameSize = idleFrameSize;\n    } else if (this.direction === \"left\" && this.status === \"idle\") {\n      currentAnimation = sorcererLeftIdle;\n      frameSize = idleFrameSize;\n    } else if (this.direction === \"left\" && this.status === \"moving\") {\n      currentAnimation = sorcererRunLeft;\n      runFrameSize;\n    } else if (this.direction === \"right\" && this.status === \"moving\") {\n      currentAnimation = sorcererRunRight;\n      runFrameSize;\n    } else {\n      currentAnimation = sorcererRightIdle;\n    }\n\n    // Chooses the frame based on cycles of the animation loop. Increases every 5 frames. Once Math.floor hits 1, it increments. Example (0.2, 0.4, 0.6, 0.8, 1.0, etc.)\n    // Draws the Sorcerer with the above frame in line 2\n    // ctx.drawImage(image, sx,sy,sw, sh, dx, dy, dw, dh)\n    if (this.direction === \"right\") {\n      frame = Math.floor(gameFrame / slowDownAnimationRate) % frameSize;\n      ctx.drawImage(currentAnimation, frame * SORCERER_WIDTH, 0, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y, 231, 190);\n    } else if (this.direction === \"left\") {\n      let currentFrame = Math.floor(gameFrame / slowDownAnimationRate) % frameSize;\n      frame = slowDownAnimationRate - currentFrame;\n      ctx.drawImage(currentAnimation, frame * SORCERER_WIDTH, 0, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y, 231, 190);\n    }\n    gameFrame++;\n  }\n  idle() {\n    this.status = \"idle\";\n  }\n\n  // Velocity \n  moveRight() {\n    this.position.x += 8;\n    this.status = \"moving\";\n    this.direction = \"right\";\n  }\n  moveLeft() {\n    this.position.x -= 8;\n    this.status = \"moving\";\n    this.direction = \"left\";\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNHLFFBQVEsQ0FBQ08sQ0FBQyxFQUFFLElBQUksQ0FBQ1AsUUFBUSxDQUFDUSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUN4SSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNOLFNBQVMsS0FBSyxNQUFNLEVBQUU7TUFDckMsSUFBSWEsWUFBWSxHQUFHTixJQUFJLENBQUNJLEtBQUssQ0FBQ3RCLFNBQVMsR0FBQ0MscUJBQXFCLENBQUMsR0FBR0csU0FBUztNQUMxRUwsS0FBSyxHQUFHRSxxQkFBcUIsR0FBR3VCLFlBQVk7TUFDNUNYLEdBQUcsQ0FBQ1UsU0FBUyxDQUFDRixnQkFBZ0IsRUFBRXRCLEtBQUssR0FBR00sY0FBYyxFQUFFLENBQUMsRUFBRUEsY0FBYyxFQUFFQyxlQUFlLEVBQUUsSUFBSSxDQUFDRyxRQUFRLENBQUNPLENBQUMsRUFBRSxJQUFJLENBQUNQLFFBQVEsQ0FBQ1EsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDeEk7SUFDQWpCLFNBQVMsRUFBRTtFQUNaO0VBRUF5QixJQUFJQSxDQUFBLEVBQUc7SUFDTixJQUFJLENBQUNmLE1BQU0sR0FBRyxNQUFNO0VBQ3JCOztFQUVBO0VBQ0FnQixTQUFTQSxDQUFBLEVBQUc7SUFDWCxJQUFJLENBQUNqQixRQUFRLENBQUNPLENBQUMsSUFBSSxDQUFDO0lBQ3BCLElBQUksQ0FBQ04sTUFBTSxHQUFHLFFBQVE7SUFDdEIsSUFBSSxDQUFDQyxTQUFTLEdBQUcsT0FBTztFQUN6QjtFQUVBZ0IsUUFBUUEsQ0FBQSxFQUFHO0lBQ1YsSUFBSSxDQUFDbEIsUUFBUSxDQUFDTyxDQUFDLElBQUksQ0FBQztJQUNwQixJQUFJLENBQUNOLE1BQU0sR0FBRyxRQUFRO0lBQ3RCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLE1BQU07RUFFeEI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NvcmNlcmVyc19xdWVzdC8uL3NyYy9zY3JpcHRzL3NvcmNlcmVyLmpzP2U3NmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSWRsZSBBbmltYXRpb25zIFxuY29uc3Qgc29yY2VyZXJSaWdodElkbGUgPSBuZXcgSW1hZ2UoKTtcbnNvcmNlcmVyUmlnaHRJZGxlLnNyYyA9ICcuLi9hc3NldHMvc29yY2VyZXIvSWRsZS5wbmcnXG5jb25zdCBzb3JjZXJlckxlZnRJZGxlID0gbmV3IEltYWdlKCk7XG5zb3JjZXJlckxlZnRJZGxlLnNyYyA9ICcuLi9hc3NldHMvc29yY2VyZXIvaWRsZV9sZWZ0LnBuZydcblxuLy8gUnVuIEFuaW1hdGlvbnNcbmNvbnN0IHNvcmNlcmVyUnVuUmlnaHQgPSBuZXcgSW1hZ2UoKTtcbnNvcmNlcmVyUnVuUmlnaHQuc3JjID0gJy4uL2Fzc2V0cy9zb3JjZXJlci9SdW4ucG5nJ1xuY29uc3Qgc29yY2VyZXJSdW5MZWZ0ID0gbmV3IEltYWdlKCk7IFxuc29yY2VyZXJSdW5MZWZ0LnNyYyA9ICcuLi9hc3NldHMvc29yY2VyZXIvc29yY2VyZXJfcnVuX2xlZnQucG5nJ1xuXG4vLyBBbmltYXRpb24gVmFyaWFibGVzIFxubGV0IGZyYW1lID0gMDtcbmxldCBnYW1lRnJhbWUgPSAwO1xuY29uc3Qgc2xvd0Rvd25BbmltYXRpb25SYXRlID0gNTtcbmxldCBpZGxlRnJhbWVTaXplID0gNTtcbmxldCBydW5GcmFtZVNpemUgPSA3O1xubGV0IGZyYW1lU2l6ZSA9IDA7XG5cbmNvbnN0IFNPUkNFUkVSX1dJRFRIID0gMjMxXG5jb25zdCBTT1JDRVJFUl9IRUlHSFQgPSAxOTBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29yY2VyZXIge1xuXHRjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcblx0XHR0aGlzLnN0YXR1cyA9IFwiaWRsZVwiXG5cdFx0dGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG5cdH1cblxuXHRkcmF3KGN0eCkge1xuXHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRjdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCA1MCwgMCwgMiAqIE1hdGguUEkpO1xuXHRcdGN0eC5zdHJva2UoKTtcblxuXHRcdGxldCBjdXJyZW50QW5pbWF0aW9uID0gc29yY2VyZXJSaWdodElkbGU7XG5cblx0XHRpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwicmlnaHRcIiAmJiB0aGlzLnN0YXR1cyA9PSBcImlkbGVcIikge1xuXHRcdFx0Y3VycmVudEFuaW1hdGlvbiA9IHNvcmNlcmVyUmlnaHRJZGxlO1xuXHRcdFx0ZnJhbWVTaXplID0gaWRsZUZyYW1lU2l6ZTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImxlZnRcIiAmJiB0aGlzLnN0YXR1cyA9PT0gXCJpZGxlXCIpIHtcblx0XHRcdGN1cnJlbnRBbmltYXRpb24gPSBzb3JjZXJlckxlZnRJZGxlO1xuXHRcdFx0ZnJhbWVTaXplID0gaWRsZUZyYW1lU2l6ZTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImxlZnRcIiAmJiB0aGlzLnN0YXR1cyA9PT0gXCJtb3ZpbmdcIikge1xuXHRcdFx0Y3VycmVudEFuaW1hdGlvbiA9IHNvcmNlcmVyUnVuTGVmdDtcblx0XHRcdHJ1bkZyYW1lU2l6ZTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInJpZ2h0XCIgJiYgdGhpcy5zdGF0dXMgPT09IFwibW92aW5nXCIpIHtcblx0XHRcdGN1cnJlbnRBbmltYXRpb24gPSBzb3JjZXJlclJ1blJpZ2h0O1xuXHRcdFx0cnVuRnJhbWVTaXplO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50QW5pbWF0aW9uID0gc29yY2VyZXJSaWdodElkbGU7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIENob29zZXMgdGhlIGZyYW1lIGJhc2VkIG9uIGN5Y2xlcyBvZiB0aGUgYW5pbWF0aW9uIGxvb3AuIEluY3JlYXNlcyBldmVyeSA1IGZyYW1lcy4gT25jZSBNYXRoLmZsb29yIGhpdHMgMSwgaXQgaW5jcmVtZW50cy4gRXhhbXBsZSAoMC4yLCAwLjQsIDAuNiwgMC44LCAxLjAsIGV0Yy4pXG5cdFx0Ly8gRHJhd3MgdGhlIFNvcmNlcmVyIHdpdGggdGhlIGFib3ZlIGZyYW1lIGluIGxpbmUgMlxuXHRcdC8vIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHN4LHN5LHN3LCBzaCwgZHgsIGR5LCBkdywgZGgpXG5cdFx0aWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcblx0XHRcdGZyYW1lID0gTWF0aC5mbG9vcihnYW1lRnJhbWUvc2xvd0Rvd25BbmltYXRpb25SYXRlKSAlIGZyYW1lU2l6ZTtcblx0XHRcdGN0eC5kcmF3SW1hZ2UoY3VycmVudEFuaW1hdGlvbiwgZnJhbWUgKiBTT1JDRVJFUl9XSURUSCwgMCwgU09SQ0VSRVJfV0lEVEgsIFNPUkNFUkVSX0hFSUdIVCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDIzMSwgMTkwKVxuXHRcdH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG5cdFx0XHRsZXQgY3VycmVudEZyYW1lID0gTWF0aC5mbG9vcihnYW1lRnJhbWUvc2xvd0Rvd25BbmltYXRpb25SYXRlKSAlIGZyYW1lU2l6ZTtcblx0XHRcdGZyYW1lID0gc2xvd0Rvd25BbmltYXRpb25SYXRlIC0gY3VycmVudEZyYW1lOyBcblx0XHRcdGN0eC5kcmF3SW1hZ2UoY3VycmVudEFuaW1hdGlvbiwgZnJhbWUgKiBTT1JDRVJFUl9XSURUSCwgMCwgU09SQ0VSRVJfV0lEVEgsIFNPUkNFUkVSX0hFSUdIVCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDIzMSwgMTkwKVxuXHRcdH1cblx0XHRnYW1lRnJhbWUrKztcblx0fVxuXG5cdGlkbGUoKSB7XG5cdFx0dGhpcy5zdGF0dXMgPSBcImlkbGVcIjtcblx0fVxuICBcblx0Ly8gVmVsb2NpdHkgXG5cdG1vdmVSaWdodCgpIHtcblx0XHR0aGlzLnBvc2l0aW9uLnggKz0gODtcblx0XHR0aGlzLnN0YXR1cyA9IFwibW92aW5nXCI7XG5cdFx0dGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG5cdH1cblxuXHRtb3ZlTGVmdCgpIHtcblx0XHR0aGlzLnBvc2l0aW9uLnggLT0gODtcblx0XHR0aGlzLnN0YXR1cyA9IFwibW92aW5nXCI7XG5cdFx0dGhpcy5kaXJlY3Rpb24gPSBcImxlZnRcIjtcblx0XHRcblx0fVxufVxuXG4iXSwibmFtZXMiOlsic29yY2VyZXJSaWdodElkbGUiLCJJbWFnZSIsInNyYyIsInNvcmNlcmVyTGVmdElkbGUiLCJzb3JjZXJlclJ1blJpZ2h0Iiwic29yY2VyZXJSdW5MZWZ0IiwiZnJhbWUiLCJnYW1lRnJhbWUiLCJzbG93RG93bkFuaW1hdGlvblJhdGUiLCJpZGxlRnJhbWVTaXplIiwicnVuRnJhbWVTaXplIiwiZnJhbWVTaXplIiwiU09SQ0VSRVJfV0lEVEgiLCJTT1JDRVJFUl9IRUlHSFQiLCJTb3JjZXJlciIsImNvbnN0cnVjdG9yIiwicG9zaXRpb24iLCJzdGF0dXMiLCJkaXJlY3Rpb24iLCJkcmF3IiwiY3R4IiwiYmVnaW5QYXRoIiwiYXJjIiwieCIsInkiLCJNYXRoIiwiUEkiLCJzdHJva2UiLCJjdXJyZW50QW5pbWF0aW9uIiwiZmxvb3IiLCJkcmF3SW1hZ2UiLCJjdXJyZW50RnJhbWUiLCJpZGxlIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/sorcerer.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3JjZXJlcnNfcXVlc3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;
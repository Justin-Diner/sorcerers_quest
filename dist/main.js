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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_sorcerer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/sorcerer */ \"./src/scripts/sorcerer.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // Game\n  document.body.style.backgroundColor = \"black\";\n  const title = document.getElementById(\"title\");\n  title.style.color = \"white\";\n  title.style.textAlign = \"center\";\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  canvas.height = 576; // height and width are this to fit most browsers. \n  canvas.width = 1024;\n  ctx.fillRect(10, 10, canvas.width, canvas.height);\n  const sorcerer = new _scripts_sorcerer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    x: 180,\n    y: 340\n  });\n  sorcerer.draw(ctx);\n  function animate() {\n    // Call this to animate anything inside. \n    ctx.fillStyle = \"white\";\n    ctx.fillRect(10, 10, canvas.width, canvas.height);\n    sorcerer.draw(ctx);\n    requestAnimationFrame(animate);\n  }\n  window.addEventListener(\"keydown\", e => {\n    if (e.key === \"d\") {\n      sorcerer.moveRight();\n    } else if (e.key === \"a\") {\n      sorcerer.moveLeft();\n    } else {\n      sorcerer.idle();\n    }\n  });\n  window.addEventListener(\"keyup\", e => {\n    sorcerer.idle();\n  });\n  animate();\n});\n\n//const background = new Image();\n//background.src = \"./assets/background/castlebackground.jpg\"\n//ctx.drawImage(background, 0, 0)\n//background.onload = function(){\n//    ctx.drawImage(background,0,0);   \n//}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEM7QUFFMUNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUVuRDtFQUNBRCxRQUFRLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxlQUFlLEdBQUcsT0FBTztFQUM3QyxNQUFNQyxLQUFLLEdBQUdMLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUM5Q0QsS0FBSyxDQUFDRixLQUFLLENBQUNJLEtBQUssR0FBRyxPQUFPO0VBQzNCRixLQUFLLENBQUNGLEtBQUssQ0FBQ0ssU0FBUyxHQUFHLFFBQVE7RUFFaEMsTUFBTUMsTUFBTSxHQUFHVCxRQUFRLENBQUNNLGNBQWMsQ0FBQyxRQUFRLENBQUM7RUFDaEQsTUFBTUksR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDbkNGLE1BQU0sQ0FBQ0csTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0VBQ3JCSCxNQUFNLENBQUNJLEtBQUssR0FBRyxJQUFJO0VBQ25CSCxHQUFHLENBQUNJLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFTCxNQUFNLENBQUNJLEtBQUssRUFBRUosTUFBTSxDQUFDRyxNQUFNLENBQUM7RUFFakQsTUFBTUcsUUFBUSxHQUFHLElBQUloQix5REFBUSxDQUFDO0lBQzdCaUIsQ0FBQyxFQUFFLEdBQUc7SUFDTkMsQ0FBQyxFQUFFO0VBQ0osQ0FBQyxDQUFDO0VBQ0ZGLFFBQVEsQ0FBQ0csSUFBSSxDQUFDUixHQUFHLENBQUM7RUFFbEIsU0FBU1MsT0FBT0EsQ0FBQSxFQUFHO0lBQUU7SUFDcEJULEdBQUcsQ0FBQ1UsU0FBUyxHQUFHLE9BQU87SUFDdkJWLEdBQUcsQ0FBQ0ksUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUVMLE1BQU0sQ0FBQ0ksS0FBSyxFQUFFSixNQUFNLENBQUNHLE1BQU0sQ0FBQztJQUNqREcsUUFBUSxDQUFDRyxJQUFJLENBQUNSLEdBQUcsQ0FBQztJQUNsQlcscUJBQXFCLENBQUNGLE9BQU8sQ0FBQztFQUMvQjtFQUVBRyxNQUFNLENBQUNyQixnQkFBZ0IsQ0FBQyxTQUFTLEVBQUdzQixDQUFDLElBQUs7SUFDekMsSUFBSUEsQ0FBQyxDQUFDQyxHQUFHLEtBQUssR0FBRyxFQUFFO01BQ2xCVCxRQUFRLENBQUNVLFNBQVMsRUFBRTtJQUNyQixDQUFDLE1BQU0sSUFBSUYsQ0FBQyxDQUFDQyxHQUFHLEtBQUssR0FBRyxFQUFFO01BQ3pCVCxRQUFRLENBQUNXLFFBQVEsRUFBRTtJQUNwQixDQUFDLE1BQU07TUFDTlgsUUFBUSxDQUFDWSxJQUFJLEVBQUU7SUFDaEI7RUFDRCxDQUFDLENBQUM7RUFFRkwsTUFBTSxDQUFDckIsZ0JBQWdCLENBQUMsT0FBTyxFQUFHc0IsQ0FBQyxJQUFLO0lBQ3ZDUixRQUFRLENBQUNZLElBQUksRUFBRTtFQUNoQixDQUFDLENBQUM7RUFHRlIsT0FBTyxFQUFFO0FBQ1YsQ0FBQyxDQUFDOztBQUlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NvcmNlcmVyc19xdWVzdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTb3JjZXJlciBmcm9tICcuL3NjcmlwdHMvc29yY2VyZXInO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cblx0Ly8gR2FtZVxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpO1xuXHR0aXRsZS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcblx0dGl0bGUuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuXHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcblx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0Y2FudmFzLmhlaWdodCA9IDU3NjsgLy8gaGVpZ2h0IGFuZCB3aWR0aCBhcmUgdGhpcyB0byBmaXQgbW9zdCBicm93c2Vycy4gXG5cdGNhbnZhcy53aWR0aCA9IDEwMjQ7XG5cdGN0eC5maWxsUmVjdCgxMCwgMTAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cblx0Y29uc3Qgc29yY2VyZXIgPSBuZXcgU29yY2VyZXIoe1xuXHRcdHg6IDE4MCwgXG5cdFx0eTogMzQwXG5cdH0pXG5cdHNvcmNlcmVyLmRyYXcoY3R4KTtcblxuXHRmdW5jdGlvbiBhbmltYXRlKCkgeyAvLyBDYWxsIHRoaXMgdG8gYW5pbWF0ZSBhbnl0aGluZyBpbnNpZGUuIFxuXHRcdGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5cdFx0Y3R4LmZpbGxSZWN0KDEwLCAxMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblx0XHRzb3JjZXJlci5kcmF3KGN0eCk7XHRcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG5cdH1cblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcblx0XHRpZiAoZS5rZXkgPT09IFwiZFwiKSB7XG5cdFx0XHRzb3JjZXJlci5tb3ZlUmlnaHQoKTtcblx0XHR9IGVsc2UgaWYgKGUua2V5ID09PSBcImFcIikge1xuXHRcdFx0c29yY2VyZXIubW92ZUxlZnQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c29yY2VyZXIuaWRsZSgpO1xuXHRcdH1cblx0fSlcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG5cdFx0c29yY2VyZXIuaWRsZSgpO1xuXHR9KVxuXG5cblx0YW5pbWF0ZSgpO1xufSk7XG5cblxuXG4vL2NvbnN0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbi8vYmFja2dyb3VuZC5zcmMgPSBcIi4vYXNzZXRzL2JhY2tncm91bmQvY2FzdGxlYmFja2dyb3VuZC5qcGdcIlxuLy9jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDApXG4vL2JhY2tncm91bmQub25sb2FkID0gZnVuY3Rpb24oKXtcbi8vICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwwLDApOyAgIFxuLy99XG5cblxuXG4iXSwibmFtZXMiOlsiU29yY2VyZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJib2R5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aXRsZSIsImdldEVsZW1lbnRCeUlkIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJmaWxsUmVjdCIsInNvcmNlcmVyIiwieCIsInkiLCJkcmF3IiwiYW5pbWF0ZSIsImZpbGxTdHlsZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndpbmRvdyIsImUiLCJrZXkiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsImlkbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/sorcerer.js":
/*!*********************************!*\
  !*** ./src/scripts/sorcerer.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sorcerer; }\n/* harmony export */ });\n// Idle Animations \nconst sorcererRightIdle = new Image();\nsorcererRightIdle.src = '../assets/sorcerer/Idle.png';\nconst sorcererLeftIdle = new Image();\nsorcererLeftIdle.src = '../assets/sorcerer/idle_left.png';\n\n// Run Animations\nconst sorcererRunRight = new Image();\nsorcererRunRight.src = '../assets/sorcerer/Run.png';\nconst sorcererRunLeft = new Image();\nsorcererRunLeft.src = '../assets/sorcerer/sorcerer_run_left.png';\nconst SORCERER_WIDTH = 231;\nconst SORCERER_HEIGHT = 190;\n\n// Animation Variables \nlet frame = 0;\nlet gameFrame = 0;\nconst slowDownAnimationRate = 5;\nclass Sorcerer {\n  constructor(position) {\n    this.position = position;\n    this.status = \"idle\";\n    this.direction = \"right\";\n  }\n  draw(ctx) {\n    let currentAnimation = sorcererRightIdle;\n    if (this.direction === \"right\" && this.status == \"idle\") {\n      currentAnimation = sorcererRightIdle;\n    } else if (this.direction === \"left\" && this.status === \"idle\") {\n      currentAnimation = sorcererLeftIdle;\n    } else if (this.direction === \"left\" && this.status === \"moving\") {\n      currentAnimation = sorcererRunLeft;\n    } else if (this.direction === \"right\" && this.status === \"moving\") {\n      currentAnimation = sorcererRunRight;\n    } else {\n      currentAnimation = sorcererRightIdle;\n    }\n\n    // Chooses the frame based on cycles of the animation loop. Increases every 5 frames. Once Math.floor hits 1, it increments. Example (0.2, 0.4, 0.6, 0.8, 1.0, etc.)\n    // Draws the Sorcerer with the above frame in line 2\n    // ctx.drawImage(image, sx,sy,sw, sh, dx, dy, dw, dh)\n    if (this.direction === \"right\") {\n      frame = Math.floor(gameFrame / slowDownAnimationRate) % 5;\n      ctx.drawImage(currentAnimation, frame * SORCERER_WIDTH, 0, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y, 231, 190);\n    } else if (this.direction === \"left\") {\n      let currentFrame = Math.floor(gameFrame / slowDownAnimationRate) % 5;\n      frame = slowDownAnimationRate - currentFrame;\n      ctx.drawImage(currentAnimation, frame * SORCERER_WIDTH, 0, SORCERER_WIDTH, SORCERER_HEIGHT, this.position.x, this.position.y, 231, 190);\n    }\n    gameFrame++;\n  }\n  idle() {\n    this.status = \"idle\";\n  }\n\n  // Velocity \n  moveRight() {\n    this.status = \"moving\";\n    this.direction = \"right\";\n    this.position.x += 6;\n  }\n  moveLeft() {\n    this.status = \"moving\";\n    this.direction = \"left\";\n    this.position.x -= 6;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNTLENBQUMsRUFBRSxJQUFJLENBQUNULFFBQVEsQ0FBQ1UsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDeEk7SUFDQWQsU0FBUyxFQUFFO0VBQ1o7RUFFQWdCLElBQUlBLENBQUEsRUFBRztJQUNOLElBQUksQ0FBQ1gsTUFBTSxHQUFHLE1BQU07RUFDckI7O0VBRUE7RUFDQVksU0FBU0EsQ0FBQSxFQUFHO0lBQ1gsSUFBSSxDQUFDWixNQUFNLEdBQUcsUUFBUTtJQUN0QixJQUFJLENBQUNDLFNBQVMsR0FBRyxPQUFPO0lBQ3hCLElBQUksQ0FBQ0YsUUFBUSxDQUFDUyxDQUFDLElBQUksQ0FBQztFQUNyQjtFQUVBSyxRQUFRQSxDQUFBLEVBQUc7SUFDVixJQUFJLENBQUNiLE1BQU0sR0FBRyxRQUFRO0lBQ3RCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLE1BQU07SUFDdkIsSUFBSSxDQUFDRixRQUFRLENBQUNTLENBQUMsSUFBSSxDQUFDO0VBQ3JCO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3JjZXJlcnNfcXVlc3QvLi9zcmMvc2NyaXB0cy9zb3JjZXJlci5qcz9lNzZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIElkbGUgQW5pbWF0aW9ucyBcbmNvbnN0IHNvcmNlcmVyUmlnaHRJZGxlID0gbmV3IEltYWdlKCk7XG5zb3JjZXJlclJpZ2h0SWRsZS5zcmMgPSAnLi4vYXNzZXRzL3NvcmNlcmVyL0lkbGUucG5nJ1xuY29uc3Qgc29yY2VyZXJMZWZ0SWRsZSA9IG5ldyBJbWFnZSgpO1xuc29yY2VyZXJMZWZ0SWRsZS5zcmMgPSAnLi4vYXNzZXRzL3NvcmNlcmVyL2lkbGVfbGVmdC5wbmcnXG5cbi8vIFJ1biBBbmltYXRpb25zXG5jb25zdCBzb3JjZXJlclJ1blJpZ2h0ID0gbmV3IEltYWdlKCk7XG5zb3JjZXJlclJ1blJpZ2h0LnNyYyA9ICcuLi9hc3NldHMvc29yY2VyZXIvUnVuLnBuZydcbmNvbnN0IHNvcmNlcmVyUnVuTGVmdCA9IG5ldyBJbWFnZSgpOyBcbnNvcmNlcmVyUnVuTGVmdC5zcmMgPSAnLi4vYXNzZXRzL3NvcmNlcmVyL3NvcmNlcmVyX3J1bl9sZWZ0LnBuZydcblxuY29uc3QgU09SQ0VSRVJfV0lEVEggPSAyMzFcbmNvbnN0IFNPUkNFUkVSX0hFSUdIVCA9IDE5MFxuXG4vLyBBbmltYXRpb24gVmFyaWFibGVzIFxubGV0IGZyYW1lID0gMDtcbmxldCBnYW1lRnJhbWUgPSAwO1xuY29uc3Qgc2xvd0Rvd25BbmltYXRpb25SYXRlID0gNTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3JjZXJlciB7XG5cdGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXHRcdHRoaXMuc3RhdHVzID0gXCJpZGxlXCJcblx0XHR0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcblx0fVxuXG5cdGRyYXcoY3R4KSB7XG5cdFx0bGV0IGN1cnJlbnRBbmltYXRpb24gPSBzb3JjZXJlclJpZ2h0SWRsZTtcblxuXHRcdGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiICYmIHRoaXMuc3RhdHVzID09IFwiaWRsZVwiKSB7XG5cdFx0XHRjdXJyZW50QW5pbWF0aW9uID0gc29yY2VyZXJSaWdodElkbGU7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgJiYgdGhpcy5zdGF0dXMgPT09IFwiaWRsZVwiKSB7XG5cdFx0XHRjdXJyZW50QW5pbWF0aW9uID0gc29yY2VyZXJMZWZ0SWRsZTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImxlZnRcIiAmJiB0aGlzLnN0YXR1cyA9PT0gXCJtb3ZpbmdcIikge1xuXHRcdFx0Y3VycmVudEFuaW1hdGlvbiA9IHNvcmNlcmVyUnVuTGVmdDtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInJpZ2h0XCIgJiYgdGhpcy5zdGF0dXMgPT09IFwibW92aW5nXCIpIHtcblx0XHRcdGN1cnJlbnRBbmltYXRpb24gPSBzb3JjZXJlclJ1blJpZ2h0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50QW5pbWF0aW9uID0gc29yY2VyZXJSaWdodElkbGU7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIENob29zZXMgdGhlIGZyYW1lIGJhc2VkIG9uIGN5Y2xlcyBvZiB0aGUgYW5pbWF0aW9uIGxvb3AuIEluY3JlYXNlcyBldmVyeSA1IGZyYW1lcy4gT25jZSBNYXRoLmZsb29yIGhpdHMgMSwgaXQgaW5jcmVtZW50cy4gRXhhbXBsZSAoMC4yLCAwLjQsIDAuNiwgMC44LCAxLjAsIGV0Yy4pXG5cdFx0Ly8gRHJhd3MgdGhlIFNvcmNlcmVyIHdpdGggdGhlIGFib3ZlIGZyYW1lIGluIGxpbmUgMlxuXHRcdC8vIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHN4LHN5LHN3LCBzaCwgZHgsIGR5LCBkdywgZGgpXG5cdFx0aWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcblx0XHRcdGZyYW1lID0gTWF0aC5mbG9vcihnYW1lRnJhbWUvc2xvd0Rvd25BbmltYXRpb25SYXRlKSAlIDU7XG5cdFx0XHRjdHguZHJhd0ltYWdlKGN1cnJlbnRBbmltYXRpb24sIGZyYW1lICogU09SQ0VSRVJfV0lEVEgsIDAsIFNPUkNFUkVSX1dJRFRILCBTT1JDRVJFUl9IRUlHSFQsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAyMzEsIDE5MClcblx0XHR9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuXHRcdFx0bGV0IGN1cnJlbnRGcmFtZSA9IE1hdGguZmxvb3IoZ2FtZUZyYW1lL3Nsb3dEb3duQW5pbWF0aW9uUmF0ZSkgJSA1O1xuXHRcdFx0ZnJhbWUgPSBzbG93RG93bkFuaW1hdGlvblJhdGUgLSBjdXJyZW50RnJhbWU7IFxuXHRcdFx0Y3R4LmRyYXdJbWFnZShjdXJyZW50QW5pbWF0aW9uLCBmcmFtZSAqIFNPUkNFUkVSX1dJRFRILCAwLCBTT1JDRVJFUl9XSURUSCwgU09SQ0VSRVJfSEVJR0hULCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgMjMxLCAxOTApXG5cdFx0fVxuXHRcdGdhbWVGcmFtZSsrO1xuXHR9XG5cblx0aWRsZSgpIHtcblx0XHR0aGlzLnN0YXR1cyA9IFwiaWRsZVwiO1xuXHR9XG4gIFxuXHQvLyBWZWxvY2l0eSBcblx0bW92ZVJpZ2h0KCkge1xuXHRcdHRoaXMuc3RhdHVzID0gXCJtb3ZpbmdcIjtcblx0XHR0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcblx0XHR0aGlzLnBvc2l0aW9uLnggKz0gNjtcblx0fVxuXG5cdG1vdmVMZWZ0KCkge1xuXHRcdHRoaXMuc3RhdHVzID0gXCJtb3ZpbmdcIjtcblx0XHR0aGlzLmRpcmVjdGlvbiA9IFwibGVmdFwiO1xuXHRcdHRoaXMucG9zaXRpb24ueCAtPSA2O1xuXHR9XG59XG5cbiJdLCJuYW1lcyI6WyJzb3JjZXJlclJpZ2h0SWRsZSIsIkltYWdlIiwic3JjIiwic29yY2VyZXJMZWZ0SWRsZSIsInNvcmNlcmVyUnVuUmlnaHQiLCJzb3JjZXJlclJ1bkxlZnQiLCJTT1JDRVJFUl9XSURUSCIsIlNPUkNFUkVSX0hFSUdIVCIsImZyYW1lIiwiZ2FtZUZyYW1lIiwic2xvd0Rvd25BbmltYXRpb25SYXRlIiwiU29yY2VyZXIiLCJjb25zdHJ1Y3RvciIsInBvc2l0aW9uIiwic3RhdHVzIiwiZGlyZWN0aW9uIiwiZHJhdyIsImN0eCIsImN1cnJlbnRBbmltYXRpb24iLCJNYXRoIiwiZmxvb3IiLCJkcmF3SW1hZ2UiLCJ4IiwieSIsImN1cnJlbnRGcmFtZSIsImlkbGUiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/sorcerer.js\n");

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
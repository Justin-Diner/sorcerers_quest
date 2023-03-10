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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_sorcerer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/sorcerer */ \"./src/scripts/sorcerer.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // Game\n  document.body.style.backgroundColor = \"black\";\n  const title = document.getElementById(\"title\");\n  title.style.color = \"white\";\n  title.style.textAlign = \"center\";\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  canvas.height = 576; // height and width are this to fit most browsers. \n  canvas.width = 1024;\n  ctx.fillRect(10, 10, canvas.width, canvas.height);\n  const sorcerer = new _scripts_sorcerer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    x: 360,\n    y: 40\n  });\n  sorcerer.draw(ctx);\n  function animate() {\n    // Call this to animate anything inside. \n    ctx.fillStyle = \"white\";\n    ctx.fillRect(10, 10, canvas.width, canvas.height);\n    sorcerer.draw(ctx);\n    console.log(\"hello\");\n    requestAnimationFrame(animate);\n  }\n  window.addEventListener(\"keydown\", e => {\n    if (e.key === \"d\") {\n      console.log(\"Hitting d\");\n      sorcerer.moveRight();\n    } else if (e.key === \"a\") {\n      sorcerer.moveLeft();\n    }\n  });\n  animate();\n});\n\n//const background = new Image();\n//background.src = \"./assets/background/castlebackground.jpg\"\n//ctx.drawImage(background, 0, 0)\n//background.onload = function(){\n//    ctx.drawImage(background,0,0);   \n//}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEM7QUFFMUNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUVuRDtFQUNBRCxRQUFRLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxlQUFlLEdBQUcsT0FBTztFQUM3QyxNQUFNQyxLQUFLLEdBQUdMLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUM5Q0QsS0FBSyxDQUFDRixLQUFLLENBQUNJLEtBQUssR0FBRyxPQUFPO0VBQzNCRixLQUFLLENBQUNGLEtBQUssQ0FBQ0ssU0FBUyxHQUFHLFFBQVE7RUFFaEMsTUFBTUMsTUFBTSxHQUFHVCxRQUFRLENBQUNNLGNBQWMsQ0FBQyxRQUFRLENBQUM7RUFDaEQsTUFBTUksR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDbkNGLE1BQU0sQ0FBQ0csTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0VBQ3JCSCxNQUFNLENBQUNJLEtBQUssR0FBRyxJQUFJO0VBQ25CSCxHQUFHLENBQUNJLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFTCxNQUFNLENBQUNJLEtBQUssRUFBRUosTUFBTSxDQUFDRyxNQUFNLENBQUM7RUFFakQsTUFBTUcsUUFBUSxHQUFHLElBQUloQix5REFBUSxDQUFDO0lBQzdCaUIsQ0FBQyxFQUFFLEdBQUc7SUFDTkMsQ0FBQyxFQUFFO0VBQ0osQ0FBQyxDQUFDO0VBQ0ZGLFFBQVEsQ0FBQ0csSUFBSSxDQUFDUixHQUFHLENBQUM7RUFFbEIsU0FBU1MsT0FBT0EsQ0FBQSxFQUFHO0lBQUU7SUFDcEJULEdBQUcsQ0FBQ1UsU0FBUyxHQUFHLE9BQU87SUFDdkJWLEdBQUcsQ0FBQ0ksUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUVMLE1BQU0sQ0FBQ0ksS0FBSyxFQUFFSixNQUFNLENBQUNHLE1BQU0sQ0FBQztJQUNqREcsUUFBUSxDQUFDRyxJQUFJLENBQUNSLEdBQUcsQ0FBQztJQUNsQlcsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3BCQyxxQkFBcUIsQ0FBQ0osT0FBTyxDQUFDO0VBQy9CO0VBRUFLLE1BQU0sQ0FBQ3ZCLGdCQUFnQixDQUFDLFNBQVMsRUFBR3dCLENBQUMsSUFBSztJQUN6QyxJQUFJQSxDQUFDLENBQUNDLEdBQUcsS0FBSyxHQUFHLEVBQUU7TUFDbEJMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztNQUN4QlAsUUFBUSxDQUFDWSxTQUFTLEVBQUU7SUFDckIsQ0FBQyxNQUFNLElBQUlGLENBQUMsQ0FBQ0MsR0FBRyxLQUFLLEdBQUcsRUFBRTtNQUN6QlgsUUFBUSxDQUFDYSxRQUFRLEVBQUU7SUFDcEI7RUFDRCxDQUFDLENBQUM7RUFFRlQsT0FBTyxFQUFFO0FBQ1YsQ0FBQyxDQUFDOztBQUlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NvcmNlcmVyc19xdWVzdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTb3JjZXJlciBmcm9tICcuL3NjcmlwdHMvc29yY2VyZXInO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cblx0Ly8gR2FtZVxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpO1xuXHR0aXRsZS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcblx0dGl0bGUuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuXHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcblx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0Y2FudmFzLmhlaWdodCA9IDU3NjsgLy8gaGVpZ2h0IGFuZCB3aWR0aCBhcmUgdGhpcyB0byBmaXQgbW9zdCBicm93c2Vycy4gXG5cdGNhbnZhcy53aWR0aCA9IDEwMjQ7XG5cdGN0eC5maWxsUmVjdCgxMCwgMTAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cblx0Y29uc3Qgc29yY2VyZXIgPSBuZXcgU29yY2VyZXIoe1xuXHRcdHg6IDM2MCwgXG5cdFx0eTogNDBcblx0fSlcblx0c29yY2VyZXIuZHJhdyhjdHgpO1xuXG5cdGZ1bmN0aW9uIGFuaW1hdGUoKSB7IC8vIENhbGwgdGhpcyB0byBhbmltYXRlIGFueXRoaW5nIGluc2lkZS4gXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcblx0XHRjdHguZmlsbFJlY3QoMTAsIDEwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXHRcdHNvcmNlcmVyLmRyYXcoY3R4KTtcdFxuXHRcdGNvbnNvbGUubG9nKFwiaGVsbG9cIilcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG5cdH1cblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcblx0XHRpZiAoZS5rZXkgPT09IFwiZFwiKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkhpdHRpbmcgZFwiKVxuXHRcdFx0c29yY2VyZXIubW92ZVJpZ2h0KCk7XG5cdFx0fSBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIpIHtcblx0XHRcdHNvcmNlcmVyLm1vdmVMZWZ0KCk7XG5cdFx0fVxuXHR9KVxuXHRcblx0YW5pbWF0ZSgpO1xufSk7XG5cblxuXG4vL2NvbnN0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbi8vYmFja2dyb3VuZC5zcmMgPSBcIi4vYXNzZXRzL2JhY2tncm91bmQvY2FzdGxlYmFja2dyb3VuZC5qcGdcIlxuLy9jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDApXG4vL2JhY2tncm91bmQub25sb2FkID0gZnVuY3Rpb24oKXtcbi8vICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwwLDApOyAgIFxuLy99XG5cblxuXG4iXSwibmFtZXMiOlsiU29yY2VyZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJib2R5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aXRsZSIsImdldEVsZW1lbnRCeUlkIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJmaWxsUmVjdCIsInNvcmNlcmVyIiwieCIsInkiLCJkcmF3IiwiYW5pbWF0ZSIsImZpbGxTdHlsZSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3aW5kb3ciLCJlIiwia2V5IiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/sorcerer.js":
/*!*********************************!*\
  !*** ./src/scripts/sorcerer.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sorcerer; }\n/* harmony export */ });\nclass Sorcerer {\n  constructor(position) {\n    this.position = position;\n  }\n  draw(ctx) {\n    ctx.fillStyle = \"red\";\n    ctx.fillRect(this.position.y, this.position.x, 100, 100);\n  }\n\n  // Velocity \n  moveRight() {\n    this.position.y += 3;\n  }\n  moveLeft() {\n    this.position.y--;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zb3JjZXJlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsUUFBUSxDQUFDO0VBQzdCQyxXQUFXQSxDQUFDQyxRQUFRLEVBQUU7SUFDckIsSUFBSSxDQUFDQSxRQUFRLEdBQUdBLFFBQVE7RUFDekI7RUFFQUMsSUFBSUEsQ0FBQ0MsR0FBRyxFQUFFO0lBQ1RBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLEtBQUs7SUFDckJELEdBQUcsQ0FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQ0osUUFBUSxDQUFDSyxDQUFDLEVBQUUsSUFBSSxDQUFDTCxRQUFRLENBQUNNLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0VBQ3pEOztFQUVBO0VBQ0FDLFNBQVNBLENBQUEsRUFBRztJQUNYLElBQUksQ0FBQ1AsUUFBUSxDQUFDSyxDQUFDLElBQUcsQ0FBQztFQUNwQjtFQUVBRyxRQUFRQSxDQUFBLEVBQUc7SUFDVixJQUFJLENBQUNSLFFBQVEsQ0FBQ0ssQ0FBQyxFQUFFO0VBQ2xCO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3JjZXJlcnNfcXVlc3QvLi9zcmMvc2NyaXB0cy9zb3JjZXJlci5qcz9lNzZlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvcmNlcmVyIHtcblx0Y29uc3RydWN0b3IocG9zaXRpb24pIHtcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cblx0fVxuXG5cdGRyYXcoY3R4KSB7XG5cdFx0Y3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG5cdFx0Y3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueSwgdGhpcy5wb3NpdGlvbi54LCAxMDAsIDEwMClcblx0fVxuXG5cdC8vIFZlbG9jaXR5IFxuXHRtb3ZlUmlnaHQoKSB7XG5cdFx0dGhpcy5wb3NpdGlvbi55ICs9M1xuXHR9XG5cblx0bW92ZUxlZnQoKSB7XG5cdFx0dGhpcy5wb3NpdGlvbi55LS1cblx0fVxufVxuXG4iXSwibmFtZXMiOlsiU29yY2VyZXIiLCJjb25zdHJ1Y3RvciIsInBvc2l0aW9uIiwiZHJhdyIsImN0eCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwieSIsIngiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/sorcerer.js\n");

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
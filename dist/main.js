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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_sorcerer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/sorcerer */ \"./src/scripts/sorcerer.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // Game\n  document.body.style.backgroundColor = \"black\";\n  const title = document.getElementById(\"title\");\n  title.style.color = \"white\";\n  title.style.textAlign = \"center\";\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  canvas.height = 576; // height and width are this to fit most browsers. \n  canvas.width = 1024;\n  ctx.fillRect(10, 10, canvas.width, canvas.height);\n  const sorcerer = new _scripts_sorcerer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    x: 180,\n    y: 340\n  });\n  sorcerer.draw(ctx);\n  function animate() {\n    // Call this to animate anything inside. \n    ctx.fillStyle = \"white\";\n    ctx.fillRect(10, 10, canvas.width, canvas.height);\n    sorcerer.draw(ctx);\n    console.log(\"hello\");\n    requestAnimationFrame(animate);\n  }\n  window.addEventListener(\"keydown\", e => {\n    if (e.key === \"d\") {\n      console.log(\"Hitting d\");\n      sorcerer.moveRight();\n    } else if (e.key === \"a\") {\n      sorcerer.moveLeft();\n    }\n  });\n  animate();\n});\n\n//const background = new Image();\n//background.src = \"./assets/background/castlebackground.jpg\"\n//ctx.drawImage(background, 0, 0)\n//background.onload = function(){\n//    ctx.drawImage(background,0,0);   \n//}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEM7QUFFMUNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUVuRDtFQUNBRCxRQUFRLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxlQUFlLEdBQUcsT0FBTztFQUM3QyxNQUFNQyxLQUFLLEdBQUdMLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUM5Q0QsS0FBSyxDQUFDRixLQUFLLENBQUNJLEtBQUssR0FBRyxPQUFPO0VBQzNCRixLQUFLLENBQUNGLEtBQUssQ0FBQ0ssU0FBUyxHQUFHLFFBQVE7RUFFaEMsTUFBTUMsTUFBTSxHQUFHVCxRQUFRLENBQUNNLGNBQWMsQ0FBQyxRQUFRLENBQUM7RUFDaEQsTUFBTUksR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDbkNGLE1BQU0sQ0FBQ0csTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0VBQ3JCSCxNQUFNLENBQUNJLEtBQUssR0FBRyxJQUFJO0VBQ25CSCxHQUFHLENBQUNJLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFTCxNQUFNLENBQUNJLEtBQUssRUFBRUosTUFBTSxDQUFDRyxNQUFNLENBQUM7RUFFakQsTUFBTUcsUUFBUSxHQUFHLElBQUloQix5REFBUSxDQUFDO0lBQzdCaUIsQ0FBQyxFQUFFLEdBQUc7SUFDTkMsQ0FBQyxFQUFFO0VBQ0osQ0FBQyxDQUFDO0VBQ0ZGLFFBQVEsQ0FBQ0csSUFBSSxDQUFDUixHQUFHLENBQUM7RUFFbEIsU0FBU1MsT0FBT0EsQ0FBQSxFQUFHO0lBQUU7SUFDcEJULEdBQUcsQ0FBQ1UsU0FBUyxHQUFHLE9BQU87SUFDdkJWLEdBQUcsQ0FBQ0ksUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUVMLE1BQU0sQ0FBQ0ksS0FBSyxFQUFFSixNQUFNLENBQUNHLE1BQU0sQ0FBQztJQUNqREcsUUFBUSxDQUFDRyxJQUFJLENBQUNSLEdBQUcsQ0FBQztJQUNsQlcsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3BCQyxxQkFBcUIsQ0FBQ0osT0FBTyxDQUFDO0VBQy9CO0VBRUFLLE1BQU0sQ0FBQ3ZCLGdCQUFnQixDQUFDLFNBQVMsRUFBR3dCLENBQUMsSUFBSztJQUN6QyxJQUFJQSxDQUFDLENBQUNDLEdBQUcsS0FBSyxHQUFHLEVBQUU7TUFDbEJMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztNQUN4QlAsUUFBUSxDQUFDWSxTQUFTLEVBQUU7SUFDckIsQ0FBQyxNQUFNLElBQUlGLENBQUMsQ0FBQ0MsR0FBRyxLQUFLLEdBQUcsRUFBRTtNQUN6QlgsUUFBUSxDQUFDYSxRQUFRLEVBQUU7SUFDcEI7RUFDRCxDQUFDLENBQUM7RUFFRlQsT0FBTyxFQUFFO0FBQ1YsQ0FBQyxDQUFDOztBQUlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NvcmNlcmVyc19xdWVzdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTb3JjZXJlciBmcm9tICcuL3NjcmlwdHMvc29yY2VyZXInO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cblx0Ly8gR2FtZVxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpO1xuXHR0aXRsZS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcblx0dGl0bGUuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuXHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcblx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0Y2FudmFzLmhlaWdodCA9IDU3NjsgLy8gaGVpZ2h0IGFuZCB3aWR0aCBhcmUgdGhpcyB0byBmaXQgbW9zdCBicm93c2Vycy4gXG5cdGNhbnZhcy53aWR0aCA9IDEwMjQ7XG5cdGN0eC5maWxsUmVjdCgxMCwgMTAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cblx0Y29uc3Qgc29yY2VyZXIgPSBuZXcgU29yY2VyZXIoe1xuXHRcdHg6IDE4MCwgXG5cdFx0eTogMzQwXG5cdH0pXG5cdHNvcmNlcmVyLmRyYXcoY3R4KTtcblxuXHRmdW5jdGlvbiBhbmltYXRlKCkgeyAvLyBDYWxsIHRoaXMgdG8gYW5pbWF0ZSBhbnl0aGluZyBpbnNpZGUuIFxuXHRcdGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5cdFx0Y3R4LmZpbGxSZWN0KDEwLCAxMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblx0XHRzb3JjZXJlci5kcmF3KGN0eCk7XHRcblx0XHRjb25zb2xlLmxvZyhcImhlbGxvXCIpXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuXHR9XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG5cdFx0aWYgKGUua2V5ID09PSBcImRcIikge1xuXHRcdFx0Y29uc29sZS5sb2coXCJIaXR0aW5nIGRcIilcblx0XHRcdHNvcmNlcmVyLm1vdmVSaWdodCgpO1xuXHRcdH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiYVwiKSB7XG5cdFx0XHRzb3JjZXJlci5tb3ZlTGVmdCgpO1xuXHRcdH1cblx0fSlcblx0XG5cdGFuaW1hdGUoKTtcbn0pO1xuXG5cblxuLy9jb25zdCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4vL2JhY2tncm91bmQuc3JjID0gXCIuL2Fzc2V0cy9iYWNrZ3JvdW5kL2Nhc3RsZWJhY2tncm91bmQuanBnXCJcbi8vY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwKVxuLy9iYWNrZ3JvdW5kLm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4vLyAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmQsMCwwKTsgICBcbi8vfVxuXG5cblxuIl0sIm5hbWVzIjpbIlNvcmNlcmVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYm9keSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidGl0bGUiLCJnZXRFbGVtZW50QnlJZCIsImNvbG9yIiwidGV4dEFsaWduIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImhlaWdodCIsIndpZHRoIiwiZmlsbFJlY3QiLCJzb3JjZXJlciIsIngiLCJ5IiwiZHJhdyIsImFuaW1hdGUiLCJmaWxsU3R5bGUiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2luZG93IiwiZSIsImtleSIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/sorcerer.js":
/*!*********************************!*\
  !*** ./src/scripts/sorcerer.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sorcerer; }\n/* harmony export */ });\nconst sorcererRun = new Image();\nsorcererRun.src = '../assets/sorcerer/Run.png';\nclass Sorcerer {\n  constructor(position) {\n    this.position = position;\n  }\n  draw(ctx) {\n    ctx.fillStyle = \"red\";\n    ctx.fillRect(this.position.x, this.position.y, 100, 100);\n    ctx.drawImage(sorcererRun, 0, 0);\n  }\n\n  // Velocity \n  moveRight() {\n    this.position.x += 3;\n  }\n  moveLeft() {\n    this.position.x--;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zb3JjZXJlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsV0FBVyxHQUFHLElBQUlDLEtBQUssRUFBRTtBQUMvQkQsV0FBVyxDQUFDRSxHQUFHLEdBQUcsNEJBQTRCO0FBRy9CLE1BQU1DLFFBQVEsQ0FBQztFQUM3QkMsV0FBV0EsQ0FBQ0MsUUFBUSxFQUFFO0lBQ3JCLElBQUksQ0FBQ0EsUUFBUSxHQUFHQSxRQUFRO0VBQ3pCO0VBRUFDLElBQUlBLENBQUNDLEdBQUcsRUFBRTtJQUNUQSxHQUFHLENBQUNDLFNBQVMsR0FBRyxLQUFLO0lBQ3JCRCxHQUFHLENBQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUNKLFFBQVEsQ0FBQ0ssQ0FBQyxFQUFFLElBQUksQ0FBQ0wsUUFBUSxDQUFDTSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUN4REosR0FBRyxDQUFDSyxTQUFTLENBQUNaLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ2pDOztFQUVBO0VBQ0FhLFNBQVNBLENBQUEsRUFBRztJQUNYLElBQUksQ0FBQ1IsUUFBUSxDQUFDSyxDQUFDLElBQUcsQ0FBQztFQUNwQjtFQUVBSSxRQUFRQSxDQUFBLEVBQUc7SUFDVixJQUFJLENBQUNULFFBQVEsQ0FBQ0ssQ0FBQyxFQUFFO0VBQ2xCO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3JjZXJlcnNfcXVlc3QvLi9zcmMvc2NyaXB0cy9zb3JjZXJlci5qcz9lNzZlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNvcmNlcmVyUnVuID0gbmV3IEltYWdlKCk7XG5zb3JjZXJlclJ1bi5zcmMgPSAnLi4vYXNzZXRzL3NvcmNlcmVyL1J1bi5wbmcnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29yY2VyZXIge1xuXHRjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuXHR9XG5cblx0ZHJhdyhjdHgpIHtcblx0XHRjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcblx0XHRjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDEwMCwgMTAwKVxuXHRcdGN0eC5kcmF3SW1hZ2Uoc29yY2VyZXJSdW4sIDAsIDApXG5cdH1cblxuXHQvLyBWZWxvY2l0eSBcblx0bW92ZVJpZ2h0KCkge1xuXHRcdHRoaXMucG9zaXRpb24ueCArPTNcblx0fVxuXG5cdG1vdmVMZWZ0KCkge1xuXHRcdHRoaXMucG9zaXRpb24ueC0tXG5cdH1cbn1cblxuIl0sIm5hbWVzIjpbInNvcmNlcmVyUnVuIiwiSW1hZ2UiLCJzcmMiLCJTb3JjZXJlciIsImNvbnN0cnVjdG9yIiwicG9zaXRpb24iLCJkcmF3IiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ4IiwieSIsImRyYXdJbWFnZSIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/sorcerer.js\n");

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
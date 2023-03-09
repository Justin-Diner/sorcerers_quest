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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_sorcerer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/sorcerer */ \"./src/scripts/sorcerer.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // Game\n  document.body.style.backgroundColor = \"black\";\n  const title = document.getElementById(\"title\");\n  title.style.color = \"white\";\n  title.style.textAlign = \"center\";\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  canvas.height = 576; // height and width are this to fit most browsers. \n  canvas.width = 1024;\n  ctx.fillStyle = \"white\";\n  ctx.fillRect(10, 10, canvas.width, canvas.height);\n  const sorcerer = new _scripts_sorcerer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    x: 360,\n    y: 0\n  });\n  sorcerer.draw(ctx);\n  function animate() {\n    // Call this to animate anything inside. \n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    sorcerer.draw(ctx);\n    sorcerer.move();\n    requestAnimationFrame(animate);\n  }\n});\n\n//const background = new Image();\n//background.src = \"./assets/background/castlebackground.jpg\"\n//ctx.drawImage(background, 0, 0)\n//background.onload = function(){\n//    ctx.drawImage(background,0,0);   \n//}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEM7QUFFMUNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUVwRDtFQUNBRCxRQUFRLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxlQUFlLEdBQUcsT0FBTztFQUM3QyxNQUFNQyxLQUFLLEdBQUdMLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUM5Q0QsS0FBSyxDQUFDRixLQUFLLENBQUNJLEtBQUssR0FBRyxPQUFPO0VBQzNCRixLQUFLLENBQUNGLEtBQUssQ0FBQ0ssU0FBUyxHQUFHLFFBQVE7RUFFaEMsTUFBTUMsTUFBTSxHQUFHVCxRQUFRLENBQUNNLGNBQWMsQ0FBQyxRQUFRLENBQUM7RUFDaEQsTUFBTUksR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDbkNGLE1BQU0sQ0FBQ0csTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0VBQ3JCSCxNQUFNLENBQUNJLEtBQUssR0FBRyxJQUFJO0VBQ25CSCxHQUFHLENBQUNJLFNBQVMsR0FBRyxPQUFPO0VBQ3ZCSixHQUFHLENBQUNLLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFTixNQUFNLENBQUNJLEtBQUssRUFBRUosTUFBTSxDQUFDRyxNQUFNLENBQUM7RUFFakQsTUFBTUksUUFBUSxHQUFHLElBQUlqQix5REFBUSxDQUFDO0lBQzdCa0IsQ0FBQyxFQUFFLEdBQUc7SUFDTkMsQ0FBQyxFQUFFO0VBQ0osQ0FBQyxDQUFDO0VBQ0ZGLFFBQVEsQ0FBQ0csSUFBSSxDQUFDVCxHQUFHLENBQUM7RUFFbEIsU0FBU1UsT0FBT0EsQ0FBQSxFQUFHO0lBQUU7SUFDcEJWLEdBQUcsQ0FBQ1csU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVaLE1BQU0sQ0FBQ0ksS0FBSyxFQUFFSixNQUFNLENBQUNHLE1BQU0sQ0FBQztJQUNoREksUUFBUSxDQUFDRyxJQUFJLENBQUNULEdBQUcsQ0FBQztJQUNsQk0sUUFBUSxDQUFDTSxJQUFJLEVBQUU7SUFDZkMscUJBQXFCLENBQUNILE9BQU8sQ0FBQztFQUUvQjtBQUNBLENBQUMsQ0FBQzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3JjZXJlcnNfcXVlc3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU29yY2VyZXIgZnJvbSAnLi9zY3JpcHRzL3NvcmNlcmVyJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG4vLyBHYW1lXG5kb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcbnRpdGxlLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xudGl0bGUuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY2FudmFzLmhlaWdodCA9IDU3NjsgLy8gaGVpZ2h0IGFuZCB3aWR0aCBhcmUgdGhpcyB0byBmaXQgbW9zdCBicm93c2Vycy4gXG5jYW52YXMud2lkdGggPSAxMDI0O1xuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbmN0eC5maWxsUmVjdCgxMCwgMTAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbmNvbnN0IHNvcmNlcmVyID0gbmV3IFNvcmNlcmVyKHtcblx0eDogMzYwLCBcblx0eTogMFxufSlcbnNvcmNlcmVyLmRyYXcoY3R4KTtcblxuZnVuY3Rpb24gYW5pbWF0ZSgpIHsgLy8gQ2FsbCB0aGlzIHRvIGFuaW1hdGUgYW55dGhpbmcgaW5zaWRlLiBcblx0Y3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG5cdHNvcmNlcmVyLmRyYXcoY3R4KTtcblx0c29yY2VyZXIubW92ZSgpO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG5cdFxufVxufSk7XG5cblxuLy9jb25zdCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4vL2JhY2tncm91bmQuc3JjID0gXCIuL2Fzc2V0cy9iYWNrZ3JvdW5kL2Nhc3RsZWJhY2tncm91bmQuanBnXCJcbi8vY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwKVxuLy9iYWNrZ3JvdW5kLm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4vLyAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmQsMCwwKTsgICBcbi8vfVxuXG5cblxuIl0sIm5hbWVzIjpbIlNvcmNlcmVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYm9keSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidGl0bGUiLCJnZXRFbGVtZW50QnlJZCIsImNvbG9yIiwidGV4dEFsaWduIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImhlaWdodCIsIndpZHRoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzb3JjZXJlciIsIngiLCJ5IiwiZHJhdyIsImFuaW1hdGUiLCJjbGVhclJlY3QiLCJtb3ZlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/sorcerer.js":
/*!*********************************!*\
  !*** ./src/scripts/sorcerer.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sorcerer; }\n/* harmony export */ });\nclass Sorcerer {\n  constructor(position) {\n    this.position = position;\n  }\n  draw(ctx) {\n    ctx.fillStyle = \"red\";\n    ctx.fillRect(this.position.y, this.position.x, 100, 100);\n  }\n  move() {\n    this.position.y++;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zb3JjZXJlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsUUFBUSxDQUFDO0VBQzdCQyxXQUFXQSxDQUFDQyxRQUFRLEVBQUU7SUFDckIsSUFBSSxDQUFDQSxRQUFRLEdBQUdBLFFBQVE7RUFDekI7RUFFQUMsSUFBSUEsQ0FBQ0MsR0FBRyxFQUFFO0lBQ1RBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLEtBQUs7SUFDckJELEdBQUcsQ0FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQ0osUUFBUSxDQUFDSyxDQUFDLEVBQUUsSUFBSSxDQUFDTCxRQUFRLENBQUNNLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0VBQ3pEO0VBRUFDLElBQUlBLENBQUEsRUFBRztJQUNOLElBQUksQ0FBQ1AsUUFBUSxDQUFDSyxDQUFDLEVBQUU7RUFDbEI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NvcmNlcmVyc19xdWVzdC8uL3NyYy9zY3JpcHRzL3NvcmNlcmVyLmpzP2U3NmUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29yY2VyZXIge1xuXHRjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuXHR9XG5cblx0ZHJhdyhjdHgpIHtcblx0XHRjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcblx0XHRjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi55LCB0aGlzLnBvc2l0aW9uLngsIDEwMCwgMTAwKVxuXHR9XG5cblx0bW92ZSgpIHtcblx0XHR0aGlzLnBvc2l0aW9uLnkrK1xuXHR9XG59XG5cbiJdLCJuYW1lcyI6WyJTb3JjZXJlciIsImNvbnN0cnVjdG9yIiwicG9zaXRpb24iLCJkcmF3IiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ5IiwieCIsIm1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/sorcerer.js\n");

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
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

/***/ "./scripts/example.js":
/*!****************************!*\
  !*** ./scripts/example.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1> It's Alive!</h1>\";\n    this.myHandleClick = this.handleClick.bind(this);\n    this.ele.addEventListener(\"click\", this.myHandleClick);\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"Ouch\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL2V4YW1wbGUuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLE9BQU8sQ0FBQztFQUNiQyxXQUFXQSxDQUFDQyxHQUFHLEVBQUU7SUFDaEIsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLHVCQUF1QjtJQUM1QyxJQUFJLENBQUNDLGFBQWEsR0FBRyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNoRCxJQUFJLENBQUNKLEdBQUcsQ0FBQ0ssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0gsYUFBYSxDQUFDO0VBQ3ZEO0VBRUFDLFdBQVdBLENBQUEsRUFBRztJQUNiLElBQUksQ0FBQ0gsR0FBRyxDQUFDTSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRyxNQUFNO0VBQ3hDO0FBQ0Q7QUFFQSwrREFBZVQsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvcmNlcmVyc19xdWVzdC8uL3NjcmlwdHMvZXhhbXBsZS5qcz9mMzcxIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV4YW1wbGUge1xuXHRjb25zdHJ1Y3RvcihlbGUpIHtcblx0XHR0aGlzLmVsZSA9IGVsZVxuXHRcdHRoaXMuZWxlLmlubmVySFRNTCA9IFwiPGgxPiBJdCdzIEFsaXZlITwvaDE+XCJcblx0XHR0aGlzLm15SGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMubXlIYW5kbGVDbGljaylcblx0fVxuXG5cdGhhbmRsZUNsaWNrKCkge1xuXHRcdHRoaXMuZWxlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IFwiT3VjaFwiO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7Il0sIm5hbWVzIjpbIkV4YW1wbGUiLCJjb25zdHJ1Y3RvciIsImVsZSIsImlubmVySFRNTCIsIm15SGFuZGxlQ2xpY2siLCJoYW5kbGVDbGljayIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hpbGRyZW4iLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./scripts/example.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/example.js */ \"./scripts/example.js\");\n/* harmony import */ var _sorcerer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sorcerer */ \"./src/sorcerer.js\");\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log(\"Hello World\");\n  const main = document.getElementById(\"main\");\n  console.log(\"testing2\");\n  new _scripts_example_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n});\n\n\n// Game\ndocument.body.style.backgroundColor = \"white\";\nconst title = document.getElementById(\"title\");\ntitle.style.color = \"white\";\ntitle.style.textAlign = \"center\";\nconst canvas = document.getElementById(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\ncanvas.height = 576;\ncanvas.width = 1024;\nctx.fillStyle = \"white\";\nctx.fillRect(10, 10, canvas.width, canvas.height);\nconst sorcerer = new _sorcerer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nsorcerer.draw(ctx);\nfunction animate() {\n  // Call this to animate anything inside. \n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  sorcerer.draw(ctx);\n  sorcerer.move();\n  requestAnimationFrame(animate);\n}\n\n//const background = new Image();\n//background.src = \"./assets/background/castlebackground.jpg\"\n//ctx.drawImage(background, 0, 0)\n//background.onload = function(){\n//    ctx.drawImage(background,0,0);   \n//}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUFBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNuREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0VBQzFCLE1BQU1DLElBQUksR0FBR0osUUFBUSxDQUFDSyxjQUFjLENBQUMsTUFBTSxDQUFDO0VBQzVDSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7RUFDdkIsSUFBSUcsMkRBQU8sQ0FBQ0YsSUFBSSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUUwQztBQUdWO0FBQ2xDO0FBQ0FKLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDQyxLQUFLLENBQUNDLGVBQWUsR0FBRyxPQUFPO0FBQzdDLE1BQU1DLEtBQUssR0FBR1gsUUFBUSxDQUFDSyxjQUFjLENBQUMsT0FBTyxDQUFDO0FBQzlDTSxLQUFLLENBQUNGLEtBQUssQ0FBQ0csS0FBSyxHQUFHLE9BQU87QUFDM0JELEtBQUssQ0FBQ0YsS0FBSyxDQUFDSSxTQUFTLEdBQUcsUUFBUTtBQUVoQyxNQUFNQyxNQUFNLEdBQUdkLFFBQVEsQ0FBQ0ssY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUNoRCxNQUFNVSxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsVUFBVSxDQUFDLElBQUksQ0FBQztBQUNuQ0YsTUFBTSxDQUFDRyxNQUFNLEdBQUcsR0FBRztBQUNuQkgsTUFBTSxDQUFDSSxLQUFLLEdBQUcsSUFBSTtBQUVuQkgsR0FBRyxDQUFDSSxTQUFTLEdBQUcsT0FBTztBQUN2QkosR0FBRyxDQUFDSyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRU4sTUFBTSxDQUFDSSxLQUFLLEVBQUVKLE1BQU0sQ0FBQ0csTUFBTSxDQUFDO0FBRWpELE1BQU1JLFFBQVEsR0FBRyxJQUFJZCxpREFBUTtBQUM3QmMsUUFBUSxDQUFDQyxJQUFJLENBQUNQLEdBQUcsQ0FBQztBQUVsQixTQUFTUSxPQUFPQSxDQUFBLEVBQUc7RUFBRTtFQUNwQlIsR0FBRyxDQUFDUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRVYsTUFBTSxDQUFDSSxLQUFLLEVBQUVKLE1BQU0sQ0FBQ0csTUFBTSxDQUFDO0VBQ2hESSxRQUFRLENBQUNDLElBQUksQ0FBQ1AsR0FBRyxDQUFDO0VBQ2xCTSxRQUFRLENBQUNJLElBQUksRUFBRTtFQUNmQyxxQkFBcUIsQ0FBQ0gsT0FBTyxDQUFDO0FBRS9COztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NvcmNlcmVyc19xdWVzdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblx0Y29uc29sZS5sb2coXCJIZWxsbyBXb3JsZFwiKVxuXHRjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXHRjb25zb2xlLmxvZyhcInRlc3RpbmcyXCIpXG5cdG5ldyBFeGFtcGxlKG1haW4pO1xufSk7XG5cbmltcG9ydCBFeGFtcGxlIGZyb20gXCIuLi9zY3JpcHRzL2V4YW1wbGUuanNcIjtcblxuXG5pbXBvcnQgU29yY2VyZXIgZnJvbSAnLi9zb3JjZXJlcic7XG4vLyBHYW1lXG5kb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcbnRpdGxlLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xudGl0bGUuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY2FudmFzLmhlaWdodCA9IDU3NjtcbmNhbnZhcy53aWR0aCA9IDEwMjQ7XG5cbmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5jdHguZmlsbFJlY3QoMTAsIDEwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG5jb25zdCBzb3JjZXJlciA9IG5ldyBTb3JjZXJlclxuc29yY2VyZXIuZHJhdyhjdHgpO1xuXG5mdW5jdGlvbiBhbmltYXRlKCkgeyAvLyBDYWxsIHRoaXMgdG8gYW5pbWF0ZSBhbnl0aGluZyBpbnNpZGUuIFxuXHRjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcblx0c29yY2VyZXIuZHJhdyhjdHgpO1xuXHRzb3JjZXJlci5tb3ZlKCk7XG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcblx0XG59XG5cblxuLy9jb25zdCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4vL2JhY2tncm91bmQuc3JjID0gXCIuL2Fzc2V0cy9iYWNrZ3JvdW5kL2Nhc3RsZWJhY2tncm91bmQuanBnXCJcbi8vY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwKVxuLy9iYWNrZ3JvdW5kLm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4vLyAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmQsMCwwKTsgICBcbi8vfVxuXG5cblxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJFeGFtcGxlIiwiU29yY2VyZXIiLCJib2R5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aXRsZSIsImNvbG9yIiwidGV4dEFsaWduIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImhlaWdodCIsIndpZHRoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzb3JjZXJlciIsImRyYXciLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwibW92ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/sorcerer.js":
/*!*************************!*\
  !*** ./src/sorcerer.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sorcerer; }\n/* harmony export */ });\nclass Sorcerer {\n  constructor() {\n    this.position = {\n      x: 360,\n      y: 0\n    };\n  }\n  draw(ctx) {\n    ctx.fillStyle = \"red\";\n    ctx.fillRect(this.position.y, this.position.x, 100, 100);\n  }\n  move() {\n    this.position.y++;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc29yY2VyZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLFFBQVEsQ0FBQztFQUM3QkMsV0FBV0EsQ0FBQSxFQUFHO0lBQ2IsSUFBSSxDQUFDQyxRQUFRLEdBQUc7TUFDZkMsQ0FBQyxFQUFFLEdBQUc7TUFDTkMsQ0FBQyxFQUFFO0lBQ0osQ0FBQztFQUNGO0VBRUFDLElBQUlBLENBQUNDLEdBQUcsRUFBRTtJQUNUQSxHQUFHLENBQUNDLFNBQVMsR0FBRyxLQUFLO0lBQ3JCRCxHQUFHLENBQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUNOLFFBQVEsQ0FBQ0UsQ0FBQyxFQUFFLElBQUksQ0FBQ0YsUUFBUSxDQUFDQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztFQUN6RDtFQUVBTSxJQUFJQSxDQUFBLEVBQUc7SUFDTixJQUFJLENBQUNQLFFBQVEsQ0FBQ0UsQ0FBQyxFQUFFO0VBQ2xCO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3JjZXJlcnNfcXVlc3QvLi9zcmMvc29yY2VyZXIuanM/OTY1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTb3JjZXJlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMucG9zaXRpb24gPSB7XG5cdFx0XHR4OiAzNjAsIFxuXHRcdFx0eTogMFxuXHRcdH1cblx0fVxuXG5cdGRyYXcoY3R4KSB7XG5cdFx0Y3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG5cdFx0Y3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueSwgdGhpcy5wb3NpdGlvbi54LCAxMDAsIDEwMClcblx0fVxuXG5cdG1vdmUoKSB7XG5cdFx0dGhpcy5wb3NpdGlvbi55Kytcblx0fVxufVxuXG4iXSwibmFtZXMiOlsiU29yY2VyZXIiLCJjb25zdHJ1Y3RvciIsInBvc2l0aW9uIiwieCIsInkiLCJkcmF3IiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sorcerer.js\n");

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
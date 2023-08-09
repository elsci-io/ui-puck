(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["elsciPuck"] = factory();
	else
		root["elsciPuck"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Puck.js":
/*!************************!*\
  !*** ./src/js/Puck.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CLASS_DISABLED": () => (/* binding */ CLASS_DISABLED),
/* harmony export */   "default": () => (/* binding */ Puck)
/* harmony export */ });
/* harmony import */ var _PuckCellCoords_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PuckCellCoords.js */ "./src/js/PuckCellCoords.js");

const CLASS_DISABLED = 'puck__cell--disabled';

class Puck {
    #puckElement;
    #cellElements = [];

    /** @type {[PuckCell]} */
    #puckCells = [];
    #rowLengths;
    #selectedCellIndexes;
    #onCellClickCb = [];
    #onCellHoverCb = [];

    constructor(puckElement,rowLengths, selectedCellIndexes){
        this.#puckElement = puckElement;
        this.#rowLengths = rowLengths;
        this.#selectedCellIndexes = selectedCellIndexes;
    }
    addCell(cellIdx, puckCell){
        this.#puckCells[cellIdx] = puckCell;
        const cellElement = this.#cellElements[cellIdx];
        if(!puckCell.disabled)
            cellElement.classList.remove(CLASS_DISABLED)
        cellElement.classList.add(puckCell.cssClass);
        cellElement.disabled = puckCell.disabled;
    }
    draw() {
        let currentCellNumber = 1;
        this.#drawPuckCircle();
        const center = this.#getPuckCenter();
        for (let rowNumber = 0; rowNumber < this.#rowLengths.length; rowNumber++) {
            for (let cellNumber = this.#rowLengths[rowNumber]; cellNumber >= 1; cellNumber--) {
                // by default if it's empty, then it's disabled, then if someone fills the cell, it becomes enabled
                this.#puckElement.insertAdjacentHTML('beforeend',
                    `<button class = "puck__cell ${CLASS_DISABLED}">${currentCellNumber}</button>`);
                const lastElement = this.#puckElement.lastElementChild;
                lastElement.disabled = true;

                this.#cellElements.push(lastElement);
                if(this.#selectedCellIndexes.includes(currentCellNumber)){
                    lastElement.classList.toggle('puck__cell--selected');
                }
                lastElement.addEventListener("mouseover", (event) => {
                    this.#callCallbacks(this.#onCellHoverCb, event);
                });
                lastElement.addEventListener("click", (event) => {
                    event.target.classList.toggle('puck__cell--selected');
                    this.#callCallbacks(this.#onCellClickCb, event);
                });
                const coords = this.#getCellCoords(rowNumber, this.#rowLengths[rowNumber], cellNumber, center);
                lastElement.style.left = coords.x - 15 + 'px'; // or can be bottom
                lastElement.style.top = coords.y - 15 + 'px'; // or can be right
                currentCellNumber++;
            }
        }
    }
    onCellHover(cb) {
        this.#onCellHoverCb.push(cb);
    }
    onCellClick(cb) {
        this.#onCellClickCb.push(cb);
    }

    #callCallbacks(callbacks, event) {
        const cellIdx = parseInt(event.target.textContent) - 1;
        for (const cb of callbacks) {
            const puckCell = this.#puckCells[cellIdx];
            cb(cellIdx, puckCell);
        }
    }
    #degreesToRadians(degree) {
        return degree * Math.PI / 180;
    }
    #calcCellAngleStep(numberOfCellsInRow) {
        return (360 / numberOfCellsInRow)
    }
    #getCellCoords(rowNumber, numberOfCells, cellNumber, center) {
        const cellAngle = this.#calcCellAngleStep(numberOfCells) * cellNumber;
        const cellRadius = 15;
        const rowRadius = cellRadius * 2 + 3 + (cellRadius * rowNumber * 2.2);
        const xCoords = center.x + Math.cos(this.#degreesToRadians(cellAngle - 90)) * rowRadius;
        const yCoords = center.y + Math.sin(this.#degreesToRadians(cellAngle - 90)) * rowRadius;
        return new _PuckCellCoords_js__WEBPACK_IMPORTED_MODULE_0__["default"](xCoords, yCoords, cellRadius)
    }
    #getPuckCenter(){
        const rect = this.#puckElement.getBoundingClientRect();
        return {x: rect.width / 2, y: rect.height / 2}
    }
    #drawPuckCircle(){
        const diameter = this.#rowLengths.length* 60+30+(6*this.#rowLengths.length)+5;
        const size = diameter + "px"
        this.#puckElement.style.width = size;
        this.#puckElement.style.height = size;
    }
}

/***/ }),

/***/ "./src/js/PuckCell.js":
/*!****************************!*\
  !*** ./src/js/PuckCell.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PuckCell)
/* harmony export */ });
class PuckCell {
    disabled = false;
    cssClass;
    title;
    additionalInfo;

    constructor(disabled, cssClass, title, additionalInfo){
        this.disabled = disabled;
        this.cssClass = cssClass;
        this.title = title;
        this.additionalInfo = additionalInfo;     
    }
}

/***/ }),

/***/ "./src/js/PuckCellCoords.js":
/*!**********************************!*\
  !*** ./src/js/PuckCellCoords.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PuckCellCoords)
/* harmony export */ });
class PuckCellCoords {
    x;
    y;
    radius;

    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
}

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Puck": () => (/* reexport safe */ _Puck_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "PuckCell": () => (/* reexport safe */ _PuckCell_js__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _Puck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Puck.js */ "./src/js/Puck.js");
/* harmony import */ var _PuckCell_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PuckCell.js */ "./src/js/PuckCell.js");






})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.bundle.js.map
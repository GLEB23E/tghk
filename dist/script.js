/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modal = () => {
  const modal = document.getElementById('mymodal');
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const f = document.getElementById('f');
  const s = document.getElementById('s');
  const t = document.getElementById('fo');
  const fi = document.getElementById('fi');
  const si = document.getElementById('si');
  const e = document.getElementById('e');
  const n = document.getElementById('n');
  const ten = document.getElementById('ten');
  const el = document.getElementById('el');
  const tw = document.getElementById('tw');
  const th = document.getElementById('th');
  const fort = document.getElementById('fort');
  const fifteen = document.getElementById('fifteen');
  const sixteen = document.getElementById('sixteen');
  const seventeen = document.getElementById('seventeen');
  const eighteen = document.getElementById('eighteen');
  const nineteen = document.getElementById('nineteen');
  const twenty = document.getElementById('twenty');
  const twenty1 = document.getElementById('twenty1');
  const seventeen2 = document.getElementById('seventeen2');
  const eighteen2 = document.getElementById('eighteen2');
  const nineteen2 = document.getElementById('nineteen2');
  const twenty2 = document.getElementById('twenty2');
  open.addEventListener('click', () => {
    modal.style.display = 'block';
  });
  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  f.addEventListener('click', () => {
    window.location.href = 'index2.html';
  });
  s.addEventListener('click', () => {
    window.location.href = 'index3.html';
  });
  t.addEventListener('click', () => {
    window.location.href = 'index4.html';
  });
  fi.addEventListener('click', () => {
    window.location.href = 'index5.html';
  });
  si.addEventListener('click', () => {
    window.location.href = 'index6.html';
  });
  se.addEventListener('click', () => {
    window.location.href = 'index7.html';
  });
  e.addEventListener('click', () => {
    window.location.href = 'index8.html';
  });
  n.addEventListener('click', () => {
    window.location.href = 'index9.html';
  });
  ten.addEventListener('click', () => {
    window.location.href = 'index10.html';
  });
  el.addEventListener('click', () => {
    window.location.href = 'index11.html';
  });
  tw.addEventListener('click', () => {
    window.location.href = 'index12.html';
  });
  th.addEventListener('click', () => {
    window.location.href = 'index13.html';
  });
  fort.addEventListener('click', () => {
    window.location.href = 'index14.html';
  });
  fifteen.addEventListener('click', () => {
    window.location.href = 'index15.html';
  });
  sixteen.addEventListener('click', () => {
    window.location.href = 'index16.html';
  });
  seventeen.addEventListener('click', () => {
    window.location.href = 'index21.html';
  });
  eighteen.addEventListener('click', () => {
    window.location.href = 'index19.html';
  });
  nineteen.addEventListener('click', () => {
    window.location.href = 'index17.html';
  });
  twenty.addEventListener('click', () => {
    window.location.href = 'index18.html';
  });
  twenty1.addEventListener('click', () => {
    window.location.href = 'index20.html';
  });
  seventeen2.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
  eighteen2.addEventListener('click', () => {
    window.location.href = 'index19.html';
  });
  nineteen2.addEventListener('click', () => {
    window.location.href = 'index17.html';
  });
  twenty2.addEventListener('click', () => {
    window.location.href = 'index18.html';
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

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
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");

document.addEventListener("DOMContentLoaded", function () {
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map
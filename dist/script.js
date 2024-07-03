/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/coookie.js":
/*!***********************************!*\
  !*** ./src/js/modules/coookie.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cookie = () => {
  console.log('Initializing download script...');
  const button52 = document.getElementById("do");
  if (!button52) {
    console.error('Button with ID "do" not found.');
    return;
  }
  const urls = ["./assets/files/ГОСТ Р 54802-2011, Компрессоры поршневые.pdf", "./assets/files/ГОСТ 32569-2013, Технологический трубопровод.pdf", "./assets/files/Градостроительный кодекс.pdf", "./assets/files/ФЗ N 384, ТР безопасности зданий и сооружений.pdf", "./assets/files/ФЗ №116, Пром безопасность ОПО.pdf", "./assets/files/ФЗ №123, ТР Пожарн безопасность.pdf", "./assets/files/Постановление N 870 ТР о безопасности сетей газа.pdf", "./assets/files/Постановление №74, СанПиН.pdf", "./assets/files/Приказ МЧС №221, АЗС Пож. безопасность.pdf", "./assets/files/Постановление N 87 Разделы проектной документации.pdf", "./assets/files/ГОСТ 5542-2014, метан.pdf", "./assets/files/Приказ Ростехнадзор N 784 Утверждении Руководства ПБ тех трубопроводов.pdf", "./assets/files/ВРД 39-2.5-082-2003. Правила эксплуатации АГНКС..pdf", "./assets/files/СНиП 3.05.05-84, Технологическое оборудование и трубопроводы.pdf", "./assets/files/РД-3112199-1069-98 Автотр предп КПГ.pdf", "./assets/files/Ростехнадзор ФНП, ПБ АГНКС.pdf", "./assets/files/ФНП ПБ «ПРАВИЛА ПБ ОПО ОБОРУДОВАНИЕ, РАБОТАЮЩЕЕ ПОД ИЗБЫТОЧНЫМ ДАВЛЕНИ.pdf", "./assets/files/ГОСТ 27577-2000, метан КПГ.pdf"];
  const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
  const downloadFiles = async () => {
    for (const url of urls) {
      const link = document.createElement("a");
      link.href = url;
      link.download = url.split('/').pop(); // Extract file name from URL
      document.body.appendChild(link); // Append link to body
      link.click(); // Trigger download
      document.body.removeChild(link); // Remove link from body
      await delay(); // Wait for 1 second before next download
    }
  };
  button52.addEventListener('click', () => {
    console.log('Download button clicked.');
    downloadFiles();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cookie);

/***/ }),

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
  const nome = document.getElementById('home');
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
  nome.addEventListener('click', () => {
    window.location.href = 'index.html';
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
/* harmony import */ var _modules_coookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/coookie */ "./src/js/modules/coookie.js");


document.addEventListener("DOMContentLoaded", function () {
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_coookie__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map
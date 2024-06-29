/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/callback.js":
/*!************************************!*\
  !*** ./src/js/modules/callback.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const callback = () => {
  const form = document.getElementById('application-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {
      firstName: formData.get('first-name'),
      lastName: formData.get('last-name'),
      phoneNumber: formData.get('phone-number'),
      email: formData.get('email'),
      preferredTime: formData.get('preferred-time')
    };
    console.log('Form submitted:', data);

    // Here you can add code to send data to the server, display a success message, etc.

    alert('Спасибо за вашу заявку!');
    form.reset();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callback);

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
  const modal2 = document.getElementById('cartModal');
  const modal3 = document.getElementById('deliveryModal');
  const modal4 = document.getElementById('paymentModal');
  document.getElementById('modal').addEventListener('click', () => {
    modal.style.display = 'block';
  });
  document.getElementById('modal2').addEventListener('click', () => {
    modal2.style.display = 'block';
  });
  document.getElementById('delivery').addEventListener('click', () => {
    modal3.style.display = 'block';
  });
  document.getElementById('payment').addEventListener('click', () => {
    modal4.style.display = 'block';
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./src/js/modules/swiper.js":
/*!**********************************!*\
  !*** ./src/js/modules/swiper.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const swiper = () => {
  const sl1 = document.getElementById('sl1');
  const sl2 = document.getElementById('sl2');
  const sl3 = document.getElementById('sl3');
  const sl4 = document.getElementById('sl4');
  const sl5 = document.getElementById('sl5');
  const sl6 = document.getElementById('sl6');
  const sl7 = document.getElementById('sl7');
  const sl8 = document.getElementById('sl8');
  const sl9 = document.getElementById('sl9');
  const lopik = () => {
    if (sl1.style.display === 'block') {
      sl1.style.display = 'none';
      sl2.style.display = 'block';
    } else if (sl2.style.display === 'block') {
      sl2.style.display = 'none';
      sl3.style.display = 'block';
    } else if (sl3.style.display === 'block') {
      sl3.style.display = 'none';
      sl1.style.display = 'block';
    }
    console.log('lop');
  };
  const lopik2 = () => {
    if (sl4.style.display === 'block') {
      sl4.style.display = 'none';
      sl5.style.display = 'block';
    } else if (sl5.style.display === 'block') {
      sl5.style.display = 'none';
      sl6.style.display = 'block';
    } else if (sl6.style.display === 'block') {
      sl6.style.display = 'none';
      sl4.style.display = 'block';
    }
    console.log('lop');
  };
  const lopik3 = () => {
    if (sl7.style.display === 'block') {
      sl7.style.display = 'none';
      sl8.style.display = 'block';
    } else if (sl8.style.display === 'block') {
      sl8.style.display = 'none';
      sl9.style.display = 'block';
    } else if (sl9.style.display === 'block') {
      sl9.style.display = 'none';
      sl7.style.display = 'block';
    }
    console.log('lop');
  };
  setInterval(lopik, 3000);
  setInterval(lopik2, 3000);
  setInterval(lopik3, 3000);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiper);

/***/ }),

/***/ "./src/js/modules/wind.js":
/*!********************************!*\
  !*** ./src/js/modules/wind.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const wind = () => {
  function handleProductClick(event) {
    const slide = event.currentTarget;
    const name = slide.getAttribute('data-name');
    const price = slide.getAttribute('data-price');
    const img = slide.getAttribute('data-img');
    const description = slide.getAttribute('data-description');
    const productDetails = {
      name,
      price,
      img,
      description
    };
    sessionStorage.setItem('productDetails', JSON.stringify(productDetails));
    window.location.href = 'product.html';
  }
  document.querySelectorAll('.slide').forEach(slide => {
    slide.addEventListener('click', handleProductClick);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wind);

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
/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/swiper */ "./src/js/modules/swiper.js");
/* harmony import */ var _modules_callback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/callback */ "./src/js/modules/callback.js");
/* harmony import */ var _modules_wind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/wind */ "./src/js/modules/wind.js");




document.addEventListener("DOMContentLoaded", function () {
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_swiper__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_callback__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_wind__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map
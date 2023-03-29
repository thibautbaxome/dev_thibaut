/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./_dev/js/components/card-product.js":
/*!********************************************!*\
  !*** ./_dev/js/components/card-product.js ***!
  \********************************************/
/***/ (() => {

eval("var cartProductMiniatures = document.querySelectorAll('.product-miniature .card__content [data-img]');\ncartProductMiniatures.forEach(function (miniature) {\n  var imgBlock = miniature.closest('.product-miniature').querySelector('.media img');\n  var miniatureUrl = miniature.dataset.img;\n  var originalImgUrl = imgBlock.src;\n  miniature.addEventListener('mouseenter', function () {\n    imgBlock.srcset = miniatureUrl;\n  });\n  miniature.addEventListener('mouseleave', function () {\n    imgBlock.srcset = originalImgUrl;\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9fZGV2L2pzL2NvbXBvbmVudHMvY2FyZC1wcm9kdWN0LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2F4b21lLy4vX2Rldi9qcy9jb21wb25lbnRzL2NhcmQtcHJvZHVjdC5qcz9jNjM1Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBjYXJ0UHJvZHVjdE1pbmlhdHVyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1taW5pYXR1cmUgLmNhcmRfX2NvbnRlbnQgW2RhdGEtaW1nXScpO1xuY2FydFByb2R1Y3RNaW5pYXR1cmVzLmZvckVhY2goZnVuY3Rpb24gKG1pbmlhdHVyZSkge1xuICB2YXIgaW1nQmxvY2sgPSBtaW5pYXR1cmUuY2xvc2VzdCgnLnByb2R1Y3QtbWluaWF0dXJlJykucXVlcnlTZWxlY3RvcignLm1lZGlhIGltZycpO1xuICB2YXIgbWluaWF0dXJlVXJsID0gbWluaWF0dXJlLmRhdGFzZXQuaW1nO1xuICB2YXIgb3JpZ2luYWxJbWdVcmwgPSBpbWdCbG9jay5zcmM7XG4gIG1pbmlhdHVyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xuICAgIGltZ0Jsb2NrLnNyY3NldCA9IG1pbmlhdHVyZVVybDtcbiAgfSk7XG4gIG1pbmlhdHVyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuICAgIGltZ0Jsb2NrLnNyY3NldCA9IG9yaWdpbmFsSW1nVXJsO1xuICB9KTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./_dev/js/components/card-product.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./_dev/js/components/card-product.js"]();
/******/ 	
/******/ })()
;
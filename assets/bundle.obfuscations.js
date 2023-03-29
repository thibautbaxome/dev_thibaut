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

/***/ "./_dev/js/components/obfuscations.js":
/*!********************************************!*\
  !*** ./_dev/js/components/obfuscations.js ***!
  \********************************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function (_) {\n  var obflink = document.querySelectorAll('span[data-obflink]');\n  obflink.forEach(function (link) {\n    link.addEventListener('click', function (event) {\n      var encoded_link = link.dataset.obflink;\n      if (event.ctrlKey) {\n        var newWindow = window.open(decodeURIComponent(escape(window.atob(encoded_link))), '_blank');\n        newWindow.focus();\n      } else {\n        document.location.href = decodeURIComponent(escape(window.atob(encoded_link)));\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9fZGV2L2pzL2NvbXBvbmVudHMvb2JmdXNjYXRpb25zLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9heG9tZS8uL19kZXYvanMvY29tcG9uZW50cy9vYmZ1c2NhdGlvbnMuanM/NjZkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKF8pIHtcbiAgdmFyIG9iZmxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuW2RhdGEtb2JmbGlua10nKTtcbiAgb2JmbGluay5mb3JFYWNoKGZ1bmN0aW9uIChsaW5rKSB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGVuY29kZWRfbGluayA9IGxpbmsuZGF0YXNldC5vYmZsaW5rO1xuICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgdmFyIG5ld1dpbmRvdyA9IHdpbmRvdy5vcGVuKGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUod2luZG93LmF0b2IoZW5jb2RlZF9saW5rKSkpLCAnX2JsYW5rJyk7XG4gICAgICAgIG5ld1dpbmRvdy5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUod2luZG93LmF0b2IoZW5jb2RlZF9saW5rKSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./_dev/js/components/obfuscations.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./_dev/js/components/obfuscations.js"]();
/******/ 	
/******/ })()
;
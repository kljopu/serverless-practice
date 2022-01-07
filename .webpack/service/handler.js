(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./handler.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./handler.ts":
/*!********************!*\
  !*** ./handler.ts ***!
  \********************/
/*! exports provided: hello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hello\", function() { return hello; });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n\nconst hello = async (event, context) => {\n    return {\n        statusCode: 200,\n        body: JSON.stringify({\n            message: \"Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!\",\n            input: event,\n        }, null, 2),\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oYW5kbGVyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaGFuZGxlci50cz8zNmI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgfSBmcm9tIFwiYXdzLWxhbWJkYVwiO1xuaW1wb3J0IFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCI7XG4vLyBjb25zdCBzd2FnZ2VyX2pzb24gPSByZXF1aXJlKFwiLi9zd2FnZ2VyL3N3YWdnZXJfYnVpbGRcIik7XG4vLyBpbXBvcnQgeyBodHRwX3Jlc3BvbnNlLCBzZW5kX2Vycm9yLCBIVFRQRXJyb3IgfSBmcm9tIFwiQHV0aWxzL2h0dHAudXRpbFwiO1xuXG5leHBvcnQgY29uc3QgaGVsbG86IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgPSBhc3luYyAoZXZlbnQsIGNvbnRleHQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoXG4gICAgICB7XG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgXCJHbyBTZXJ2ZXJsZXNzIFdlYnBhY2sgKFR5cGVzY3JpcHQpIHYxLjAhIFlvdXIgZnVuY3Rpb24gZXhlY3V0ZWQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgICBpbnB1dDogZXZlbnQsXG4gICAgICB9LFxuICAgICAgbnVsbCxcbiAgICAgIDJcbiAgICApLFxuICB9O1xufTtcblxuLy8gZXhwb3J0IGNvbnN0IGdldF9zd2FnZ2VyX2pzb246IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgPSBhc3luYyAoXG4vLyAgIGV2ZW50LFxuLy8gICBjb250ZXh0XG4vLyApID0+IHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBzdGF0dXNDb2RlOiAyMDAsXG4vLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoXG4vLyAgICAgICB7XG4vLyAgICAgICAgIC4uLnN3YWdnZXJfanNvbixcbi8vICAgICAgIH0sXG4vLyAgICAgICBudWxsLFxuLy8gICAgICAgMlxuLy8gICAgICksXG4vLyAgIH07XG4vLyB9O1xuXG4vLyBleHBvcnQgY29uc3QgYXBpX2RvY3MgPSBhc3luYyAoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKSA9PiB7XG4vLyAgIHRyeSB7XG4vLyAgICAgbGV0IHVybFxuLy8gICAgIGlmIChldmVudC5xdWVyeVN0cmluZ1BhcmFtZXRlcnMpIHtcbi8vICAgICAgIGNvbnN0IHN0YWdlOiBcImRldlwiIHwgXCJzdGFnZVwiIHwgXCJsaXZlXCIgPSBldmVudC5xdWVyeVN0cmluZ1BhcmFtZXRlcnMudlxuLy8gICAgICAgdXJsID0gYGh0dHBzOi8vc2VvbHRhYi1zbHMtYXBpLWRvY3MuczMtYXAtc291dGhlYXN0LTIuYW1hem9uYXdzLmNvbS9pbmRleF8ke3N0YWdlfS5odG1sYFxuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICB1cmwgPSBgaHR0cHM6Ly9zZW9sdGFiLXNscy1hcGktZG9jcy5zMy1hcC1zb3V0aGVhc3QtMi5hbWF6b25hd3MuY29tL2luZGV4X2xpdmUuaHRtbGBcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGV2ZW50KVxuLy8gICAgICAgLnRoZW4oKCkgPT4gY2FsbGJhY2sobnVsbCwge1xuLy8gICAgICAgICBzdGF0dXNDb2RlOiAzMDIsXG4vLyAgICAgICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICAgICBMb2NhdGlvbjogdXJsXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICB9KSlcbi8vICAgICAgIC5jYXRjaChjYWxsYmFjayk7XG5cbi8vICAgfSBjYXRjaCAoZXJyKSB7XG4vLyAgICAgICByZXR1cm4gc2VuZF9lcnJvcihlcnIsIGV2ZW50LCBjb250ZXh0KVxuLy8gICB9XG4vLyB9XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./handler.ts\n");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"source-map-support/register\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCI/ZGExNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///source-map-support/register\n");

/***/ })

/******/ })));
/* eslint-disable */
module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/videocontext.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Definitions/aaf_video_crop/aaf_video_crop.frag":
/*!************************************************************!*\
  !*** ./src/Definitions/aaf_video_crop/aaf_video_crop.frag ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float cropLeft;\nuniform float cropRight;\nuniform float cropTop;\nuniform float cropBottom;\nvarying vec2 v_texCoord;\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    if (v_texCoord[0] < (cropLeft+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\n    if (v_texCoord[0] > (cropRight+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\n    if (v_texCoord[1] < (-cropBottom+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\n    if (v_texCoord[1] > (-cropTop+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/aaf_video_crop/aaf_video_crop.js":
/*!**********************************************************!*\
  !*** ./src/Definitions/aaf_video_crop/aaf_video_crop.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./aaf_video_crop.vert */ "./src/Definitions/aaf_video_crop/aaf_video_crop.vert"), __webpack_require__(/*! ./aaf_video_crop.frag */ "./src/Definitions/aaf_video_crop/aaf_video_crop.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _aaf_video_crop, _aaf_video_crop3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _aaf_video_crop2 = _interopRequireDefault(_aaf_video_crop);

    var _aaf_video_crop4 = _interopRequireDefault(_aaf_video_crop3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var aaf_video_crop = {
        title: "AAF Video Crop Effect",
        description: "A crop effect based on the AAF spec.",
        vertexShader: _aaf_video_crop2.default,
        fragmentShader: _aaf_video_crop4.default,
        properties: {
            cropLeft: { type: "uniform", value: -1.0 },
            cropRight: { type: "uniform", value: 1.0 },
            cropTop: { type: "uniform", value: -1.0 },
            cropBottom: { type: "uniform", value: 1.0 }
        },
        inputs: ["u_image"]
    };

    exports.default = aaf_video_crop;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/aaf_video_crop/aaf_video_crop.vert":
/*!************************************************************!*\
  !*** ./src/Definitions/aaf_video_crop/aaf_video_crop.vert ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/aaf_video_flip/aaf_video_flip.frag":
/*!************************************************************!*\
  !*** ./src/Definitions/aaf_video_flip/aaf_video_flip.frag ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvoid main(){\n    vec2 coord = vec2(v_texCoord[0] ,1.0 - v_texCoord[1]);\n    vec4 color = texture2D(u_image, coord);\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/aaf_video_flip/aaf_video_flip.js":
/*!**********************************************************!*\
  !*** ./src/Definitions/aaf_video_flip/aaf_video_flip.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./aaf_video_flip.vert */ "./src/Definitions/aaf_video_flip/aaf_video_flip.vert"), __webpack_require__(/*! ./aaf_video_flip.frag */ "./src/Definitions/aaf_video_flip/aaf_video_flip.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _aaf_video_flip, _aaf_video_flip3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _aaf_video_flip2 = _interopRequireDefault(_aaf_video_flip);

    var _aaf_video_flip4 = _interopRequireDefault(_aaf_video_flip3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var aaf_video_flip = {
        title: "AAF Video Flip Effect",
        description: "A flip effect based on the AAF spec. Mirrors the image in the x-axis",
        vertexShader: _aaf_video_flip2.default,
        fragmentShader: _aaf_video_flip4.default,
        properties: {},
        inputs: ["u_image"]
    };

    exports.default = aaf_video_flip;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/aaf_video_flip/aaf_video_flip.vert":
/*!************************************************************!*\
  !*** ./src/Definitions/aaf_video_flip/aaf_video_flip.vert ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/aaf_video_flop/aaf_video_flop.frag":
/*!************************************************************!*\
  !*** ./src/Definitions/aaf_video_flop/aaf_video_flop.frag ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvoid main(){\n    vec2 coord = vec2(1.0 - v_texCoord[0] ,v_texCoord[1]);\n    vec4 color = texture2D(u_image, coord);\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/aaf_video_flop/aaf_video_flop.js":
/*!**********************************************************!*\
  !*** ./src/Definitions/aaf_video_flop/aaf_video_flop.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./aaf_video_flop.vert */ "./src/Definitions/aaf_video_flop/aaf_video_flop.vert"), __webpack_require__(/*! ./aaf_video_flop.frag */ "./src/Definitions/aaf_video_flop/aaf_video_flop.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _aaf_video_flop, _aaf_video_flop3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _aaf_video_flop2 = _interopRequireDefault(_aaf_video_flop);

    var _aaf_video_flop4 = _interopRequireDefault(_aaf_video_flop3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var aaf_video_flop = {
        title: "AAF Video Flop Effect",
        description: "A flop effect based on the AAF spec. Mirrors the image in the y-axis",
        vertexShader: _aaf_video_flop2.default,
        fragmentShader: _aaf_video_flop4.default,
        properties: {},
        inputs: ["u_image"]
    };

    exports.default = aaf_video_flop;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/aaf_video_flop/aaf_video_flop.vert":
/*!************************************************************!*\
  !*** ./src/Definitions/aaf_video_flop/aaf_video_flop.vert ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/aaf_video_position/aaf_video_position.frag":
/*!********************************************************************!*\
  !*** ./src/Definitions/aaf_video_position/aaf_video_position.frag ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float positionOffsetX;\nuniform float positionOffsetY;\nvarying vec2 v_texCoord;\nvarying float v_progress;\nvoid main(){\n    vec2 pos = vec2(v_texCoord[0] - positionOffsetX/2.0, v_texCoord[1] -  positionOffsetY/2.0);\n    vec4 color = texture2D(u_image, pos);\n    if (pos[0] < 0.0 || pos[0] > 1.0 || pos[1] < 0.0 || pos[1] > 1.0){\n        color = vec4(0.0,0.0,0.0,0.0);\n    }\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/aaf_video_position/aaf_video_position.js":
/*!******************************************************************!*\
  !*** ./src/Definitions/aaf_video_position/aaf_video_position.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./aaf_video_position.vert */ "./src/Definitions/aaf_video_position/aaf_video_position.vert"), __webpack_require__(/*! ./aaf_video_position.frag */ "./src/Definitions/aaf_video_position/aaf_video_position.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _aaf_video_position, _aaf_video_position3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _aaf_video_position2 = _interopRequireDefault(_aaf_video_position);

    var _aaf_video_position4 = _interopRequireDefault(_aaf_video_position3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var aaf_video_position = {
        title: "AAF Video Position Effect",
        description: "A position effect based on the AAF spec.",
        vertexShader: _aaf_video_position2.default,
        fragmentShader: _aaf_video_position4.default,
        properties: {
            positionOffsetX: { type: "uniform", value: 0.0 },
            positionOffsetY: { type: "uniform", value: 0.0 }
        },
        inputs: ["u_image"]
    };

    exports.default = aaf_video_position;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/aaf_video_position/aaf_video_position.vert":
/*!********************************************************************!*\
  !*** ./src/Definitions/aaf_video_position/aaf_video_position.vert ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/aaf_video_scale/aaf_video_scale.frag":
/*!**************************************************************!*\
  !*** ./src/Definitions/aaf_video_scale/aaf_video_scale.frag ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float scaleX;\nuniform float scaleY;\nvarying vec2 v_texCoord;\nvarying float v_progress;\nvoid main(){\n    vec2 pos = vec2(v_texCoord[0]*1.0/scaleX - (1.0/scaleX/2.0 -0.5), v_texCoord[1]*1.0/scaleY - (1.0/scaleY/2.0 -0.5));\n    vec4 color = texture2D(u_image, pos);\n    if (pos[0] < 0.0 || pos[0] > 1.0 || pos[1] < 0.0 || pos[1] > 1.0){\n        color = vec4(0.0,0.0,0.0,0.0);\n    }\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/aaf_video_scale/aaf_video_scale.js":
/*!************************************************************!*\
  !*** ./src/Definitions/aaf_video_scale/aaf_video_scale.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./aaf_video_scale.vert */ "./src/Definitions/aaf_video_scale/aaf_video_scale.vert"), __webpack_require__(/*! ./aaf_video_scale.frag */ "./src/Definitions/aaf_video_scale/aaf_video_scale.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _aaf_video_scale, _aaf_video_scale3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _aaf_video_scale2 = _interopRequireDefault(_aaf_video_scale);

    var _aaf_video_scale4 = _interopRequireDefault(_aaf_video_scale3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var aaf_video_scale = {
        title: "AAF Video Scale Effect",
        description: "A scale effect based on the AAF spec.",
        vertexShader: _aaf_video_scale2.default,
        fragmentShader: _aaf_video_scale4.default,
        properties: {
            scaleX: { type: "uniform", value: 1.0 },
            scaleY: { type: "uniform", value: 1.0 }
        },
        inputs: ["u_image"]
    };

    exports.default = aaf_video_scale;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/aaf_video_scale/aaf_video_scale.vert":
/*!**************************************************************!*\
  !*** ./src/Definitions/aaf_video_scale/aaf_video_scale.vert ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/adjust/adjust.frag":
/*!********************************************!*\
  !*** ./src/Definitions/adjust/adjust.frag ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\nvarying vec2 textureCoordinate;\nuniform sampler2D u_image_a;\nuniform vec4 u_rect;\nuniform vec3 u_bgColor;\nuniform float u_width_view;\nuniform float u_height_view;\nuniform float u_width_image;\nuniform float u_height_image;\nbool inRect(vec4 rect, vec2 pos) {\n    if (pos.x >= rect.x && pos.x <= rect.x + rect.z && pos.y <= 1.0 - rect.y && pos.y >= 1.0 - (rect.y + rect.w)) {\n        return true;\n    } else {\n        return false;\n    }\n}\nvec4 adjust_video(vec2 xy) {\n    float X = u_rect.x * u_width_view;\n    float Y = u_rect.y * u_height_view;\n    float W = u_rect.z * u_width_view;\n    float H = u_rect.w * u_height_view;\n    float W0 = W;\n    float H0 = H;\n    if (W * u_height_image > H * u_width_image) {\n        H = W * u_height_image / u_width_image;\n        Y = Y - (H - H0) * 0.5;\n    } else {\n        W = H * u_width_image / u_height_image;\n        X = X - (W - W0) * 0.5;\n    }\n    X /= u_width_view;\n    Y /= u_height_view;\n    W /= u_width_view;\n    H /= u_height_view;\n    xy.x = (xy.x - X) / W;\n    xy.y = 1.0 - (1.0 - xy.y - Y) / H;\n    return texture2D(u_image_a, xy);\n}\n\nvoid main()\n{\n    vec2 xy = textureCoordinate;\n    if (inRect(u_rect, xy)) {\n        gl_FragColor = adjust_video(xy);\n    } else {\n        gl_FragColor = vec4(u_bgColor, 1.0);\n    }\n}"

/***/ }),

/***/ "./src/Definitions/adjust/adjust.js":
/*!******************************************!*\
  !*** ./src/Definitions/adjust/adjust.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./adjust.vert */ "./src/Definitions/adjust/adjust.vert"), __webpack_require__(/*! ./adjust.frag */ "./src/Definitions/adjust/adjust.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _adjust, _adjust3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _adjust2 = _interopRequireDefault(_adjust);

    var _adjust4 = _interopRequireDefault(_adjust3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var adjust = {
        title: "adjust",
        description: "adjust",
        vertexShader: _adjust2.default,
        fragmentShader: _adjust4.default,
        properties: {
            u_rect: { type: "uniform", value: [0.0, 0.0, 1.0, 1.0] },
            u_bgColor: { type: "uniform", value: [0.5, 0.5, 0.5] },
            u_width_view: { type: "uniform", value: 16 },
            u_height_view: { type: "uniform", value: 9 },
            u_width_image: { type: "uniform", value: 16 },
            u_height_image: { type: "uniform", value: 9 }
        },
        inputs: ["u_image_a"]
    };

    exports.default = adjust;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/adjust/adjust.vert":
/*!********************************************!*\
  !*** ./src/Definitions/adjust/adjust.vert ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 textureCoordinate;\nvoid main() {\n\tgl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);;\n\ttextureCoordinate = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/bgAdjust/bgAdjust.frag":
/*!************************************************!*\
  !*** ./src/Definitions/bgAdjust/bgAdjust.frag ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\nvarying vec2 textureCoordinate;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform vec4 u_rect;\nuniform vec3 u_bgColor;\nuniform float u_image_b_valid;\nuniform float u_alpha;\nuniform float u_width_view;\nuniform float u_height_view;\nuniform float u_width_image;\nuniform float u_height_image;\n\nuniform float start;\nuniform float end;\nuniform float currentTime;\n\nbool inRect(vec4 rect, vec2 pos) {\n    if (pos.x >= rect.x && pos.x <= rect.x + rect.z && pos.y <= 1.0 - rect.y && pos.y >= 1.0 - (rect.y + rect.w)) {\n        return true;\n    } else {\n        return false;\n    }\n}\nvec4 adjust_video_picture(vec2 xy) {\n    float X = u_rect.x * u_width_view;\n    float Y = u_rect.y * u_height_view;\n    float W = u_rect.z * u_width_view;\n    float H = u_rect.w * u_height_view;\n    float W0 = W;\n    float H0 = H;\n    if (W * u_height_image > H * u_width_image) {\n        H = W * u_height_image / u_width_image;\n        Y = Y - (H - H0) * 0.5;\n    } else {\n        W = H * u_width_image / u_height_image;\n        X = X - (W - W0) * 0.5;\n    }\n    X /= u_width_view;\n    Y /= u_height_view;\n    W /= u_width_view;\n    H /= u_height_view;\n    xy.x = (xy.x - X) / W;\n    xy.y = 1.0 - (1.0 - xy.y - Y) / H;\n    return texture2D(u_image_a, xy);\n}\nvoid main()\n{\n    vec2 xy = textureCoordinate;\n    vec3 bgColor = u_bgColor;\n    if (u_image_b_valid > 0.0) {\n        bgColor = texture2D(u_image_b, xy).rgb;\n    }\n\n    if (inRect(u_rect, xy) && (start < 0.0 || (currentTime >= start && currentTime <= end))) {\n        vec4 fgColor = adjust_video_picture(xy);\n        gl_FragColor = vec4(fgColor.rgb * u_alpha + bgColor * (1.0 - u_alpha), 1.0);\n    } else {\n        gl_FragColor = vec4(bgColor, 1.0);\n    }\n}"

/***/ }),

/***/ "./src/Definitions/bgAdjust/bgAdjust.js":
/*!**********************************************!*\
  !*** ./src/Definitions/bgAdjust/bgAdjust.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./bgAdjust.vert */ "./src/Definitions/bgAdjust/bgAdjust.vert"), __webpack_require__(/*! ./bgAdjust.frag */ "./src/Definitions/bgAdjust/bgAdjust.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _bgAdjust, _bgAdjust3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _bgAdjust2 = _interopRequireDefault(_bgAdjust);

    var _bgAdjust4 = _interopRequireDefault(_bgAdjust3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var bgAdjust = {
        title: "adjust with background",
        description: "adjust with background",
        vertexShader: _bgAdjust2.default,
        fragmentShader: _bgAdjust4.default,
        properties: {
            u_rect: { type: "uniform", value: [0.0, 0.0, 1.0, 1.0] },
            u_bgColor: { type: "uniform", value: [0.5, 0.5, 0.5] },
            u_image_b_valid: { type: "uniform", value: 1.0 },
            u_alpha: { type: "uniform", value: 1.0 },
            u_width_view: { type: "uniform", value: 16 },
            u_height_view: { type: "uniform", value: 9 },
            u_width_image: { type: "uniform", value: 16 },
            u_height_image: { type: "uniform", value: 9 },
            start: { type: "uniform", value: -1.0 },
            end: { type: "uniform", value: -1.0 }
        },
        inputs: ["u_image_a", "u_image_b"]
    };

    exports.default = bgAdjust;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/bgAdjust/bgAdjust.vert":
/*!************************************************!*\
  !*** ./src/Definitions/bgAdjust/bgAdjust.vert ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 textureCoordinate;\nvoid main() {\n\tgl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n\ttextureCoordinate = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/blurRect/blurRect.frag":
/*!************************************************!*\
  !*** ./src/Definitions/blurRect/blurRect.frag ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\n\nvarying vec2 textureCoordinate;\nuniform sampler2D u_image;\nuniform vec2 u_direction;\nuniform vec4 u_mosaic;\nconst float maxStep = 15.0;\n\nuniform float start;\nuniform float end;\nuniform float currentTime;\n\nbool inRect(vec4 rect, vec2 pos) {\n  if (pos.x >= rect.x && pos.x <= rect.x + rect.z && pos.y >= rect.y && pos.y <= rect.y + rect.w) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\nvec4 mosaic(sampler2D image, vec2 uv) {\n  vec4 color = vec4(0.0);\n  float weight = 0.0;\n  for (float step = -maxStep; step <= maxStep; step += 1.0) {\n    color += texture2D(image, uv + u_direction * step);\n    weight += 1.0;\n  }\n  color /= weight;\n  return color;\n}\n\nvoid main() {\n  if (currentTime < start || (currentTime > end && end > 0.0)) {\n    gl_FragColor = texture2D(u_image, textureCoordinate);\n    return;\n  }\n\n\n  vec4 rect = u_mosaic;\n  rect.y = 1.0 - u_mosaic.y - u_mosaic.w;\n  vec2 xy = textureCoordinate;\n  \n  if (inRect(rect, xy)) {\n    gl_FragColor = mosaic(u_image, xy);\n  } else {\n    gl_FragColor = texture2D(u_image, xy);\n  }\n}\n"

/***/ }),

/***/ "./src/Definitions/blurRect/blurRect.js":
/*!**********************************************!*\
  !*** ./src/Definitions/blurRect/blurRect.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./blurRect.vert */ "./src/Definitions/blurRect/blurRect.vert"), __webpack_require__(/*! ./blurRect.frag */ "./src/Definitions/blurRect/blurRect.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _blurRect, _blurRect3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _blurRect2 = _interopRequireDefault(_blurRect);

    var _blurRect4 = _interopRequireDefault(_blurRect3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var blurRect = {
        title: "blurRect",
        description: "blurRect",
        vertexShader: _blurRect2.default,
        fragmentShader: _blurRect4.default,
        properties: {
            u_mosaic: { type: "uniform", value: [0.0, 0.0, 0.0, 0.0] },
            u_direction: { type: "uniform", value: [0.0, 0.0] },
            start: { type: "uniform", value: -1.0 },
            end: { type: "uniform", value: -1.0 }
        },
        inputs: ["u_image"]
    };

    exports.default = blurRect;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/blurRect/blurRect.vert":
/*!************************************************!*\
  !*** ./src/Definitions/blurRect/blurRect.vert ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 textureCoordinate;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    textureCoordinate = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/burn/burn.frag":
/*!****************************************!*\
  !*** ./src/Definitions/burn/burn.frag ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec3 color;\n\nvoid main() {\n  vec2 p = gl_FragCoord.xy / resolution.xy;\n  gl_FragColor = mix(\n    texture2D(from, p) + vec4(progress*color, 1.0),\n    texture2D(to, p) + vec4((1.0-progress)*color, 1.0),\n    progress);\n}\n"

/***/ }),

/***/ "./src/Definitions/burn/burn.js":
/*!**************************************!*\
  !*** ./src/Definitions/burn/burn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./burn.vert */ "./src/Definitions/burn/burn.vert"), __webpack_require__(/*! ./burn.frag */ "./src/Definitions/burn/burn.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _burn, _burn3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _burn2 = _interopRequireDefault(_burn);

    var _burn4 = _interopRequireDefault(_burn3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var burn = {
        title: "burn",
        description: "A burn effect. Typically used as a transition.",
        vertexShader: _burn2.default,
        fragmentShader: _burn4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] },
            color: { type: "uniform", value: [0.9, 0.4, 0.2] }
        },
        inputs: ["from", "to"]
    };

    exports.default = burn;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/burn/burn.vert":
/*!****************************************!*\
  !*** ./src/Definitions/burn/burn.vert ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/colorPhase/colorPhase.frag":
/*!****************************************************!*\
  !*** ./src/Definitions/colorPhase/colorPhase.frag ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\n\nuniform vec4 fromStep;\nuniform vec4 toStep;\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution.xy;\n  vec4 a = texture2D(from, uv);\n  vec4 b = texture2D(to, uv);\n  gl_FragColor = mix(a, b, smoothstep(fromStep, toStep, vec4(progress)));\n}\n"

/***/ }),

/***/ "./src/Definitions/colorPhase/colorPhase.js":
/*!**************************************************!*\
  !*** ./src/Definitions/colorPhase/colorPhase.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./colorPhase.vert */ "./src/Definitions/colorPhase/colorPhase.vert"), __webpack_require__(/*! ./colorPhase.frag */ "./src/Definitions/colorPhase/colorPhase.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _colorPhase, _colorPhase3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _colorPhase2 = _interopRequireDefault(_colorPhase);

    var _colorPhase4 = _interopRequireDefault(_colorPhase3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var colorPhase = {
        title: "color phase",
        description: "A color phase effect. Typically used as a transition.",
        vertexShader: _colorPhase2.default,
        fragmentShader: _colorPhase4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] },
            fromStep: { type: "uniform", value: [0.0, 0.2, 0.4, 0.0] },
            toStep: { type: "uniform", value: [0.6, 0.8, 1.0, 1.0] }
        },
        inputs: ["from", "to"]
    };

    exports.default = colorPhase;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/colorPhase/colorPhase.vert":
/*!****************************************************!*\
  !*** ./src/Definitions/colorPhase/colorPhase.vert ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/colorThreshold/colorThreshold.frag":
/*!************************************************************!*\
  !*** ./src/Definitions/colorThreshold/colorThreshold.frag ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float a;\nuniform vec3 colorAlphaThreshold;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    if (color[0] > colorAlphaThreshold[0] && color[1]> colorAlphaThreshold[1] && color[2]> colorAlphaThreshold[2]){\n        color = vec4(0.0,0.0,0.0,0.0);\n    }\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/colorThreshold/colorThreshold.js":
/*!**********************************************************!*\
  !*** ./src/Definitions/colorThreshold/colorThreshold.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./colorThreshold.vert */ "./src/Definitions/colorThreshold/colorThreshold.vert"), __webpack_require__(/*! ./colorThreshold.frag */ "./src/Definitions/colorThreshold/colorThreshold.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _colorThreshold, _colorThreshold3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _colorThreshold2 = _interopRequireDefault(_colorThreshold);

    var _colorThreshold4 = _interopRequireDefault(_colorThreshold3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var colorThreshold = {
        title: "Color Threshold",
        description: "Turns all pixels with a greater value than the specified threshold transparent.",
        vertexShader: _colorThreshold2.default,
        fragmentShader: _colorThreshold4.default,
        properties: {
            a: { type: "uniform", value: 0.0 },
            colorAlphaThreshold: { type: "uniform", value: [0.0, 0.55, 0.0] }
        },
        inputs: ["u_image"]
    };

    exports.default = colorThreshold;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/colorThreshold/colorThreshold.vert":
/*!************************************************************!*\
  !*** ./src/Definitions/colorThreshold/colorThreshold.vert ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/combine/combine.frag":
/*!**********************************************!*\
  !*** ./src/Definitions/combine/combine.frag ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float a;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/combine/combine.js":
/*!********************************************!*\
  !*** ./src/Definitions/combine/combine.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./combine.vert */ "./src/Definitions/combine/combine.vert"), __webpack_require__(/*! ./combine.frag */ "./src/Definitions/combine/combine.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _combine, _combine3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _combine2 = _interopRequireDefault(_combine);

    var _combine4 = _interopRequireDefault(_combine3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var combine = {
        title: "Combine",
        description: "A basic effect which renders the input to the output, Typically used as a combine node for layering up media with alpha transparency.",
        vertexShader: _combine2.default,
        fragmentShader: _combine4.default,
        properties: {
            a: { type: "uniform", value: 0.0 }
        },
        inputs: ["u_image"]
    };

    exports.default = combine;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/combine/combine.vert":
/*!**********************************************!*\
  !*** ./src/Definitions/combine/combine.vert ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/crop/crop.frag":
/*!****************************************!*\
  !*** ./src/Definitions/crop/crop.frag ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform vec4 rect;\nvarying vec2 v_texCoord;\nvoid main(){\n    vec2 pos = (((v_texCoord)*vec2(rect.z, rect.w)) + vec2(0, 1.0-rect.w)) + vec2(rect.x,-rect.y);\n    vec4 color = texture2D(u_image, pos);\n    if (pos[0] < 0.0 || pos[0] > 1.0 || pos[1] < 0.0 || pos[1] > 1.0){\n        color = vec4(0.0,0.0,0.0,0.0);\n    }\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/crop/crop.js":
/*!**************************************!*\
  !*** ./src/Definitions/crop/crop.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./crop.vert */ "./src/Definitions/crop/crop.vert"), __webpack_require__(/*! ./crop.frag */ "./src/Definitions/crop/crop.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _crop, _crop3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _crop2 = _interopRequireDefault(_crop);

    var _crop4 = _interopRequireDefault(_crop3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var crop = {
        title: "Primer Simple Crop",
        description: "A simple crop processors for primer",
        vertexShader: _crop2.default,
        fragmentShader: _crop4.default,
        properties: {
            rect: { type: "uniform", value: [0.0, 0.0, 1.0, 1.0] }
        },
        inputs: ["u_image"]
    };

    exports.default = crop;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/crop/crop.vert":
/*!****************************************!*\
  !*** ./src/Definitions/crop/crop.vert ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/crossWarp/crossWarp.frag":
/*!**************************************************!*\
  !*** ./src/Definitions/crossWarp/crossWarp.frag ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\n\nvoid main () {\n  vec2 p = gl_FragCoord.xy / resolution.xy;\n  float x = progress;\n\n  vec4 a = texture2D(from, (p-.5)*(1.-x)+.5);\n  vec4 b = texture2D(to, (p-.5)*x+.5);\n  x=smoothstep(.0,1.0,(x*2.0+p.x-1.0));\n\n  gl_FragColor = mix(a, b, x);\n}\n"

/***/ }),

/***/ "./src/Definitions/crossWarp/crossWarp.js":
/*!************************************************!*\
  !*** ./src/Definitions/crossWarp/crossWarp.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./crossWarp.vert */ "./src/Definitions/crossWarp/crossWarp.vert"), __webpack_require__(/*! ./crossWarp.frag */ "./src/Definitions/crossWarp/crossWarp.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _crossWarp, _crossWarp3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _crossWarp2 = _interopRequireDefault(_crossWarp);

    var _crossWarp4 = _interopRequireDefault(_crossWarp3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var crossWarp = {
        title: "cross warp",
        description: "A cross warp effect. Typically used as a transition.",
        vertexShader: _crossWarp2.default,
        fragmentShader: _crossWarp4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] }
        },
        inputs: ["from", "to"]
    };

    exports.default = crossWarp;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/crossWarp/crossWarp.vert":
/*!**************************************************!*\
  !*** ./src/Definitions/crossWarp/crossWarp.vert ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/crossZoom/crossZoom.frag":
/*!**************************************************!*\
  !*** ./src/Definitions/crossZoom/crossZoom.frag ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\n\nuniform float strength;\n\nconst float PI = 3.141592653589793;\n\nfloat Linear_ease(in float begin, in float change, in float duration, in float time) {\n    return change * time / duration + begin;\n}\n\nfloat Exponential_easeInOut(in float begin, in float change, in float duration, in float time) {\n    if (time == 0.0)\n        return begin;\n    else if (time == duration)\n        return begin + change;\n    time = time / (duration / 2.0);\n    if (time < 1.0)\n        return change / 2.0 * pow(2.0, 10.0 * (time - 1.0)) + begin;\n    return change / 2.0 * (-pow(2.0, -10.0 * (time - 1.0)) + 2.0) + begin;\n}\n\nfloat Sinusoidal_easeInOut(in float begin, in float change, in float duration, in float time) {\n    return -change / 2.0 * (cos(PI * time / duration) - 1.0) + begin;\n}\n\nfloat random(in vec3 scale, in float seed) {\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvec3 crossFade(in vec2 uv, in float dissolve) {\n    return mix(texture2D(from, uv).rgb, texture2D(to, uv).rgb, dissolve);\n}\n\nvoid main() {\n    vec2 texCoord = gl_FragCoord.xy / resolution.xy;\n\n    vec2 center = vec2(Linear_ease(0.25, 0.5, 1.0, progress), 0.5);\n    float dissolve = Exponential_easeInOut(0.0, 1.0, 1.0, progress);\n\n    float strength = Sinusoidal_easeInOut(0.0, strength, 0.5, progress);\n\n    vec3 color = vec3(0.0);\n    float total = 0.0;\n    vec2 toCenter = center - texCoord;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    for (float t = 0.0; t <= 40.0; t++) {\n        float percent = (t + offset) / 40.0;\n        float weight = 4.0 * (percent - percent * percent);\n        color += crossFade(texCoord + toCenter * percent * strength, dissolve) * weight;\n        total += weight;\n    }\n    gl_FragColor = vec4(color / total, 1.0);\n}\n"

/***/ }),

/***/ "./src/Definitions/crossZoom/crossZoom.js":
/*!************************************************!*\
  !*** ./src/Definitions/crossZoom/crossZoom.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./crossZoom.vert */ "./src/Definitions/crossZoom/crossZoom.vert"), __webpack_require__(/*! ./crossZoom.frag */ "./src/Definitions/crossZoom/crossZoom.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _crossZoom, _crossZoom3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _crossZoom2 = _interopRequireDefault(_crossZoom);

    var _crossZoom4 = _interopRequireDefault(_crossZoom3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var crossZoom = {
        title: "cross zoom",
        description: "A cross zoom effect. Typically used as a transition.",
        vertexShader: _crossZoom2.default,
        fragmentShader: _crossZoom4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] },
            strength: { type: "uniform", value: 0.4 }
        },
        inputs: ["from", "to"]
    };

    exports.default = crossZoom;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/crossZoom/crossZoom.vert":
/*!**************************************************!*\
  !*** ./src/Definitions/crossZoom/crossZoom.vert ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/crossfade/crossfade.frag":
/*!**************************************************!*\
  !*** ./src/Definitions/crossfade/crossfade.frag ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    color_a[0] *= (1.0 - mix);\n    color_a[1] *= (1.0 - mix);\n    color_a[2] *= (1.0 - mix);\n    color_a[3] *= (1.0 - mix);\n    color_b[0] *= mix;\n    color_b[1] *= mix;\n    color_b[2] *= mix;\n    color_b[3] *= mix;\n    gl_FragColor = color_a + color_b;\n}\n"

/***/ }),

/***/ "./src/Definitions/crossfade/crossfade.js":
/*!************************************************!*\
  !*** ./src/Definitions/crossfade/crossfade.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./crossfade.vert */ "./src/Definitions/crossfade/crossfade.vert"), __webpack_require__(/*! ./crossfade.frag */ "./src/Definitions/crossfade/crossfade.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _crossfade, _crossfade3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _crossfade2 = _interopRequireDefault(_crossfade);

    var _crossfade4 = _interopRequireDefault(_crossfade3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var crossfade = {
        title: "Cross-Fade",
        description: "A cross-fade effect. Typically used as a transistion.",
        vertexShader: _crossfade2.default,
        fragmentShader: _crossfade4.default,
        properties: {
            mix: { type: "uniform", value: 0.0 }
        },
        inputs: ["u_image_a", "u_image_b"]
    };

    exports.default = crossfade;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/crossfade/crossfade.vert":
/*!**************************************************!*\
  !*** ./src/Definitions/crossfade/crossfade.vert ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/cube/cube.frag":
/*!****************************************!*\
  !*** ./src/Definitions/cube/cube.frag ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\n\nuniform float persp;\nuniform float unzoom;\nuniform float reflection;\nuniform float floating;\n\nvec2 project (vec2 p) {\n  return p * vec2(1.0, -1.2) + vec2(0.0, -floating/100.);\n}\n\nbool inBounds (vec2 p) {\n  return all(lessThan(vec2(0.0), p)) && all(lessThan(p, vec2(1.0)));\n}\n\nvec4 bgColor (vec2 p, vec2 pfr, vec2 pto) {\n  vec4 c = vec4(0.0, 0.0, 0.0, 1.0);\n  pfr = project(pfr);\n  if (inBounds(pfr)) {\n    c += mix(vec4(0.0), texture2D(from, pfr), reflection * mix(1.0, 0.0, pfr.y));\n  }\n  pto = project(pto);\n  if (inBounds(pto)) {\n    c += mix(vec4(0.0), texture2D(to, pto), reflection * mix(1.0, 0.0, pto.y));\n  }\n  return c;\n}\n\nvec2 xskew (vec2 p, float persp, float center) {\n  float x = mix(p.x, 1.0-p.x, center);\n  return (\n    (\n      vec2( x, (p.y - 0.5*(1.0-persp) * x) / (1.0+(persp-1.0)*x) )\n      - vec2(0.5-distance(center, 0.5), 0.0)\n    )\n    * vec2(0.5 / distance(center, 0.5) * (center<0.5 ? 1.0 : -1.0), 1.0)\n    + vec2(center<0.5 ? 0.0 : 1.0, 0.0)\n  );\n}\n\nvoid main() {\n  vec2 op = gl_FragCoord.xy / resolution.xy;\n  float uz = unzoom * 2.0*(0.5-distance(0.5, progress));\n  vec2 p = -uz*0.5+(1.0+uz) * op;\n  vec2 fromP = xskew(\n    (p - vec2(progress, 0.0)) / vec2(1.0-progress, 1.0),\n    1.0-mix(progress, 0.0, persp),\n    0.0\n  );\n  vec2 toP = xskew(\n    p / vec2(progress, 1.0),\n    mix(pow(progress, 2.0), 1.0, persp),\n    1.0\n  );\n  float fromAlpha = 1.0;\n  float toAlpha = 1.0;\n  const float radius = 6.0;\n  vec2 step = vec2(1.0)/resolution.xy;\n  if (progress < 1.0 && progress > 0.0) {\n    if (fromP.y < step.y*radius && fromP.y > 0.0) {\n      fromAlpha = fromP.y/(step.y*radius);\n    }\n    else if (fromP.y < 1.0 && fromP.y > 1.0-step.y*radius) {\n      fromAlpha = (1.0-fromP.y)/(step.y*radius);\n    }\n\n    if (toP.y < step.y*radius && toP.y > 0.0) {\n      toAlpha = toP.y/(step.y*radius);\n    }\n    else if (toP.y < 1.0 && toP.y > 1.0-step.y*radius) {\n      toAlpha = (1.0-toP.y)/(step.y*radius);\n    }\n  }\n  if (inBounds(fromP)) {\n    gl_FragColor = texture2D(from, fromP)*fromAlpha;\n  }\n  else if (inBounds(toP)) {\n    gl_FragColor = texture2D(to, toP)*toAlpha;\n  }\n  else {\n    gl_FragColor = bgColor(op, fromP, toP);\n  }\n}\n"

/***/ }),

/***/ "./src/Definitions/cube/cube.js":
/*!**************************************!*\
  !*** ./src/Definitions/cube/cube.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./cube.vert */ "./src/Definitions/cube/cube.vert"), __webpack_require__(/*! ./cube.frag */ "./src/Definitions/cube/cube.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _cube, _cube3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _cube2 = _interopRequireDefault(_cube);

    var _cube4 = _interopRequireDefault(_cube3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var cube = {
        title: "cube",
        description: "A cube effect. Typically used as a transition.",
        vertexShader: _cube2.default,
        fragmentShader: _cube4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] },
            persp: { type: "uniform", value: 0.7 },
            unzoom: { type: "uniform", value: 0.3 },
            reflection: { type: "uniform", value: 0.4 },
            floating: { type: "uniform", value: 3.0 }
        },
        inputs: ["from", "to"]
    };

    exports.default = cube;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/cube/cube.vert":
/*!****************************************!*\
  !*** ./src/Definitions/cube/cube.vert ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/definitions.js":
/*!****************************************!*\
  !*** ./src/Definitions/definitions.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./aaf_video_scale */ "./src/Definitions/aaf_video_scale/aaf_video_scale.js"), __webpack_require__(/*! ./crossfade */ "./src/Definitions/crossfade/crossfade.js"), __webpack_require__(/*! ./cube */ "./src/Definitions/cube/cube.js"), __webpack_require__(/*! ./horizontalWipe */ "./src/Definitions/horizontalWipe/horizontalWipe.js"), __webpack_require__(/*! ./verticalWipe */ "./src/Definitions/verticalWipe/verticalWipe.js"), __webpack_require__(/*! ./randomDissolve */ "./src/Definitions/randomDissolve/randomDissolve.js"), __webpack_require__(/*! ./toColorAndBackFade */ "./src/Definitions/toColorAndBackFade/toColorAndBackFade.js"), __webpack_require__(/*! ./starWipe */ "./src/Definitions/starWipe/starWipe.js"), __webpack_require__(/*! ./combine */ "./src/Definitions/combine/combine.js"), __webpack_require__(/*! ./colorThreshold */ "./src/Definitions/colorThreshold/colorThreshold.js"), __webpack_require__(/*! ./monochrome */ "./src/Definitions/monochrome/monochrome.js"), __webpack_require__(/*! ./horizontalBlur */ "./src/Definitions/horizontalBlur/horizontalBlur.js"), __webpack_require__(/*! ./verticalBlur */ "./src/Definitions/verticalBlur/verticalBlur.js"), __webpack_require__(/*! ./aaf_video_flop */ "./src/Definitions/aaf_video_flop/aaf_video_flop.js"), __webpack_require__(/*! ./aaf_video_flip */ "./src/Definitions/aaf_video_flip/aaf_video_flip.js"), __webpack_require__(/*! ./aaf_video_position */ "./src/Definitions/aaf_video_position/aaf_video_position.js"), __webpack_require__(/*! ./aaf_video_crop */ "./src/Definitions/aaf_video_crop/aaf_video_crop.js"), __webpack_require__(/*! ./staticDissolve */ "./src/Definitions/staticDissolve/staticDissolve.js"), __webpack_require__(/*! ./staticEffect */ "./src/Definitions/staticEffect/staticEffect.js"), __webpack_require__(/*! ./dreamfade */ "./src/Definitions/dreamfade/dreamfade.js"), __webpack_require__(/*! ./opacity */ "./src/Definitions/opacity/opacity.js"), __webpack_require__(/*! ./crop */ "./src/Definitions/crop/crop.js"), __webpack_require__(/*! ./dissolve */ "./src/Definitions/dissolve/dissolve.js"), __webpack_require__(/*! ./lookup */ "./src/Definitions/lookup/lookup.js"), __webpack_require__(/*! ./glassBlur */ "./src/Definitions/glassBlur/glassBlur.js"), __webpack_require__(/*! ./glassFill */ "./src/Definitions/glassFill/glassFill.js"), __webpack_require__(/*! ./invertedPageCurl */ "./src/Definitions/invertedPageCurl/invertedPageCurl.js"), __webpack_require__(/*! ./luminanceMelt */ "./src/Definitions/luminanceMelt/luminanceMelt.js"), __webpack_require__(/*! ./dreamyZoom */ "./src/Definitions/dreamyZoom/dreamyZoom.js"), __webpack_require__(/*! ./linearBlur */ "./src/Definitions/linearBlur/linearBlur.js"), __webpack_require__(/*! ./fade */ "./src/Definitions/fade/fade.js"), __webpack_require__(/*! ./pixelize */ "./src/Definitions/pixelize/pixelize.js"), __webpack_require__(/*! ./fadeColor */ "./src/Definitions/fadeColor/fadeColor.js"), __webpack_require__(/*! ./squaresWire */ "./src/Definitions/squaresWire/squaresWire.js"), __webpack_require__(/*! ./burn */ "./src/Definitions/burn/burn.js"), __webpack_require__(/*! ./crossZoom */ "./src/Definitions/crossZoom/crossZoom.js"), __webpack_require__(/*! ./crossWarp */ "./src/Definitions/crossWarp/crossWarp.js"), __webpack_require__(/*! ./glitchMemories */ "./src/Definitions/glitchMemories/glitchMemories.js"), __webpack_require__(/*! ./windowBlinds */ "./src/Definitions/windowBlinds/windowBlinds.js"), __webpack_require__(/*! ./windowSlice */ "./src/Definitions/windowSlice/windowSlice.js"), __webpack_require__(/*! ./fadeGrayScale */ "./src/Definitions/fadeGrayScale/fadeGrayScale.js"), __webpack_require__(/*! ./slide */ "./src/Definitions/slide/slide.js"), __webpack_require__(/*! ./wind */ "./src/Definitions/wind/wind.js"), __webpack_require__(/*! ./colorPhase */ "./src/Definitions/colorPhase/colorPhase.js"), __webpack_require__(/*! ./stereoViewer */ "./src/Definitions/stereoViewer/stereoViewer.js"), __webpack_require__(/*! ./mosaic */ "./src/Definitions/mosaic/mosaic.js"), __webpack_require__(/*! ./blurRect */ "./src/Definitions/blurRect/blurRect.js"), __webpack_require__(/*! ./adjust */ "./src/Definitions/adjust/adjust.js"), __webpack_require__(/*! ./bgAdjust */ "./src/Definitions/bgAdjust/bgAdjust.js"), __webpack_require__(/*! ./hsvc */ "./src/Definitions/hsvc/hsvc.js"), __webpack_require__(/*! ./flip */ "./src/Definitions/flip/flip.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _aaf_video_scale, _crossfade, _cube, _horizontalWipe, _verticalWipe, _randomDissolve, _toColorAndBackFade, _starWipe, _combine, _colorThreshold, _monochrome, _horizontalBlur, _verticalBlur, _aaf_video_flop, _aaf_video_flip, _aaf_video_position, _aaf_video_crop, _staticDissolve, _staticEffect, _dreamfade, _opacity, _crop, _dissolve, _lookup, _glassBlur, _glassFill, _invertedPageCurl, _luminanceMelt, _dreamyZoom, _linearBlur, _fade, _pixelize, _fadeColor, _squaresWire, _burn, _crossZoom, _crossWarp, _glitchMemories, _windowBlinds, _windowSlice, _fadeGrayScale, _slide, _wind, _colorPhase, _stereoViewer, _mosaic, _blurRect, _adjust, _bgAdjust, _hsvc, _flip) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _aaf_video_scale2 = _interopRequireDefault(_aaf_video_scale);

    var _crossfade2 = _interopRequireDefault(_crossfade);

    var _cube2 = _interopRequireDefault(_cube);

    var _horizontalWipe2 = _interopRequireDefault(_horizontalWipe);

    var _verticalWipe2 = _interopRequireDefault(_verticalWipe);

    var _randomDissolve2 = _interopRequireDefault(_randomDissolve);

    var _toColorAndBackFade2 = _interopRequireDefault(_toColorAndBackFade);

    var _starWipe2 = _interopRequireDefault(_starWipe);

    var _combine2 = _interopRequireDefault(_combine);

    var _colorThreshold2 = _interopRequireDefault(_colorThreshold);

    var _monochrome2 = _interopRequireDefault(_monochrome);

    var _horizontalBlur2 = _interopRequireDefault(_horizontalBlur);

    var _verticalBlur2 = _interopRequireDefault(_verticalBlur);

    var _aaf_video_flop2 = _interopRequireDefault(_aaf_video_flop);

    var _aaf_video_flip2 = _interopRequireDefault(_aaf_video_flip);

    var _aaf_video_position2 = _interopRequireDefault(_aaf_video_position);

    var _aaf_video_crop2 = _interopRequireDefault(_aaf_video_crop);

    var _staticDissolve2 = _interopRequireDefault(_staticDissolve);

    var _staticEffect2 = _interopRequireDefault(_staticEffect);

    var _dreamfade2 = _interopRequireDefault(_dreamfade);

    var _opacity2 = _interopRequireDefault(_opacity);

    var _crop2 = _interopRequireDefault(_crop);

    var _dissolve2 = _interopRequireDefault(_dissolve);

    var _lookup2 = _interopRequireDefault(_lookup);

    var _glassBlur2 = _interopRequireDefault(_glassBlur);

    var _glassFill2 = _interopRequireDefault(_glassFill);

    var _invertedPageCurl2 = _interopRequireDefault(_invertedPageCurl);

    var _luminanceMelt2 = _interopRequireDefault(_luminanceMelt);

    var _dreamyZoom2 = _interopRequireDefault(_dreamyZoom);

    var _linearBlur2 = _interopRequireDefault(_linearBlur);

    var _fade2 = _interopRequireDefault(_fade);

    var _pixelize2 = _interopRequireDefault(_pixelize);

    var _fadeColor2 = _interopRequireDefault(_fadeColor);

    var _squaresWire2 = _interopRequireDefault(_squaresWire);

    var _burn2 = _interopRequireDefault(_burn);

    var _crossZoom2 = _interopRequireDefault(_crossZoom);

    var _crossWarp2 = _interopRequireDefault(_crossWarp);

    var _glitchMemories2 = _interopRequireDefault(_glitchMemories);

    var _windowBlinds2 = _interopRequireDefault(_windowBlinds);

    var _windowSlice2 = _interopRequireDefault(_windowSlice);

    var _fadeGrayScale2 = _interopRequireDefault(_fadeGrayScale);

    var _slide2 = _interopRequireDefault(_slide);

    var _wind2 = _interopRequireDefault(_wind);

    var _colorPhase2 = _interopRequireDefault(_colorPhase);

    var _stereoViewer2 = _interopRequireDefault(_stereoViewer);

    var _mosaic2 = _interopRequireDefault(_mosaic);

    var _blurRect2 = _interopRequireDefault(_blurRect);

    var _adjust2 = _interopRequireDefault(_adjust);

    var _bgAdjust2 = _interopRequireDefault(_bgAdjust);

    var _hsvc2 = _interopRequireDefault(_hsvc);

    var _flip2 = _interopRequireDefault(_flip);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var DEFINITIONS = {
        AAF_VIDEO_SCALE: _aaf_video_scale2.default,
        CROSSFADE: _crossfade2.default,
        DREAMFADE: _dreamfade2.default,
        HORIZONTAL_WIPE: _horizontalWipe2.default,
        VERTICAL_WIPE: _verticalWipe2.default,
        RANDOM_DISSOLVE: _randomDissolve2.default,
        STATIC_DISSOLVE: _staticDissolve2.default,
        STATIC_EFFECT: _staticEffect2.default,
        TO_COLOR_AND_BACK: _toColorAndBackFade2.default,
        STAR_WIPE: _starWipe2.default,
        COMBINE: _combine2.default,
        COLORTHRESHOLD: _colorThreshold2.default,
        MONOCHROME: _monochrome2.default,
        HORIZONTAL_BLUR: _horizontalBlur2.default,
        VERTICAL_BLUR: _verticalBlur2.default,
        AAF_VIDEO_CROP: _aaf_video_crop2.default,
        AAF_VIDEO_POSITION: _aaf_video_position2.default,
        AAF_VIDEO_FLIP: _aaf_video_flip2.default,
        AAF_VIDEO_FLOP: _aaf_video_flop2.default,
        OPACITY: _opacity2.default,
        CROP: _crop2.default,

        LOOKUP: _lookup2.default,
        GLASSBLUR: _glassBlur2.default,
        GLASSFILL: _glassFill2.default,
        MOSAIC: _mosaic2.default,
        BLURRECT: _blurRect2.default,
        ADJUST: _adjust2.default,
        BGADJUST: _bgAdjust2.default,
        HSVC: _hsvc2.default,
        FLIP: _flip2.default,

        CUBE: _cube2.default,
        DISSOLVE: _dissolve2.default,
        INVERTEDPAGECURL: _invertedPageCurl2.default,
        LUMINANCEMELT: _luminanceMelt2.default,
        DREAMYZOOM: _dreamyZoom2.default,
        LINEARBLUR: _linearBlur2.default,
        FADE: _fade2.default,
        PIXELIZE: _pixelize2.default,
        FADECOLOR: _fadeColor2.default,
        SQUARESWIRE: _squaresWire2.default,
        BURN: _burn2.default,
        CROSSZOOM: _crossZoom2.default,
        CROSSWARP: _crossWarp2.default,
        GLITCHMEMORIES: _glitchMemories2.default,
        WINDOWBLINDS: _windowBlinds2.default,
        WINDOWSLICE: _windowSlice2.default,
        FADEGRAYSCALE: _fadeGrayScale2.default,
        SLIDE: _slide2.default,
        WIND: _wind2.default,
        COLORPHASE: _colorPhase2.default,
        STEREOVIEWER: _stereoViewer2.default
    };

    exports.default = DEFINITIONS;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/dissolve/dissolve.frag":
/*!************************************************!*\
  !*** ./src/Definitions/dissolve/dissolve.frag ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\nuniform float blocksize;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main() {\n  vec2 p = gl_FragCoord.xy / resolution.xy;\n  if (progress == 0.0) {\n      gl_FragColor = texture2D(from, p);\n      return;\n  }\n  gl_FragColor = mix(texture2D(from, p), texture2D(to, p), step(rand(floor(gl_FragCoord.xy/blocksize)), progress));\n}\n"

/***/ }),

/***/ "./src/Definitions/dissolve/dissolve.js":
/*!**********************************************!*\
  !*** ./src/Definitions/dissolve/dissolve.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./dissolve.vert */ "./src/Definitions/dissolve/dissolve.vert"), __webpack_require__(/*! ./dissolve.frag */ "./src/Definitions/dissolve/dissolve.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _dissolve, _dissolve3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _dissolve2 = _interopRequireDefault(_dissolve);

    var _dissolve4 = _interopRequireDefault(_dissolve3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var dissolve = {
        title: "dissolve",
        description: "A dissolve effect. Typically used as a transistion.",
        vertexShader: _dissolve2.default,
        fragmentShader: _dissolve4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] },
            blocksize: { type: "uniform", value: 1.0 }
        },
        inputs: ["from", "to"]
    };

    exports.default = dissolve;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/dissolve/dissolve.vert":
/*!************************************************!*\
  !*** ./src/Definitions/dissolve/dissolve.vert ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/dreamfade/dreamfade.frag":
/*!**************************************************!*\
  !*** ./src/Definitions/dreamfade/dreamfade.frag ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    float wobble = 1.0 - abs((mix*2.0)-1.0);\n    vec2 pos = vec2(v_texCoord[0] + ((sin(v_texCoord[1]*(10.0*wobble*3.14) + wobble*10.0)/13.0)), v_texCoord[1]);\n    vec4 color_a = texture2D(u_image_a, pos);\n    vec4 color_b = texture2D(u_image_b, pos);\n    color_a[0] *= (1.0 - mix);\n    color_a[1] *= (1.0 - mix);\n    color_a[2] *= (1.0 - mix);\n    color_a[3] *= (1.0 - mix);\n    color_b[0] *= mix;\n    color_b[1] *= mix;\n    color_b[2] *= mix;\n    color_b[3] *= mix;\n    gl_FragColor = color_a + color_b;\n}\n"

/***/ }),

/***/ "./src/Definitions/dreamfade/dreamfade.js":
/*!************************************************!*\
  !*** ./src/Definitions/dreamfade/dreamfade.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./dreamfade.vert */ "./src/Definitions/dreamfade/dreamfade.vert"), __webpack_require__(/*! ./dreamfade.frag */ "./src/Definitions/dreamfade/dreamfade.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _dreamfade, _dreamfade3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _dreamfade2 = _interopRequireDefault(_dreamfade);

    var _dreamfade4 = _interopRequireDefault(_dreamfade3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var dreamfade = {
        title: "Dream-Fade",
        description: "A wobbly dream effect. Typically used as a transistion.",
        vertexShader: _dreamfade2.default,
        fragmentShader: _dreamfade4.default,
        properties: {
            mix: { type: "uniform", value: 0.0 }
        },
        inputs: ["u_image_a", "u_image_b"]
    };

    exports.default = dreamfade;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/dreamfade/dreamfade.vert":
/*!**************************************************!*\
  !*** ./src/Definitions/dreamfade/dreamfade.vert ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/dreamyZoom/dreamyZoom.frag":
/*!****************************************************!*\
  !*** ./src/Definitions/dreamyZoom/dreamyZoom.frag ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nconst float DEG2RAD = 0.03926990816987241548078304229099;\n\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\nuniform float rotation;\nuniform float scale;\n\nvoid main() {\n  float phase = progress < 0.5 ? progress * 2.0 : (progress - 0.5) * 2.0;\n  float angleOffset = progress < 0.5 ? mix(0.0, rotation * DEG2RAD, phase) : mix(-rotation * DEG2RAD, 0.0, phase);\n  float newScale = progress < 0.5 ? mix(1.0, scale, phase) : mix(scale, 1.0, phase);\n  \n  vec2 center = vec2(0, 0);\n  vec2 maxRes = resolution;\n  float resX = 0.5;\n  float resY = 0.5;\n  vec2 p = (gl_FragCoord.xy / maxRes - vec2(resX, resY)) / newScale;\n\n  float angle = atan(p.y, p.x) + angleOffset;\n  float dist = distance(center, p);\n  p.x = cos(angle) * dist + resX;\n  p.y = sin(angle) * dist + resY;\n  vec4 c = progress < 0.5 ? texture2D(from, p) : texture2D(to, p);\n\n  gl_FragColor = c + (progress < 0.5 ? mix(0.0, 1.0, phase) : mix(1.0, 0.0, phase));\n}"

/***/ }),

/***/ "./src/Definitions/dreamyZoom/dreamyZoom.js":
/*!**************************************************!*\
  !*** ./src/Definitions/dreamyZoom/dreamyZoom.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./dreamyZoom.vert */ "./src/Definitions/dreamyZoom/dreamyZoom.vert"), __webpack_require__(/*! ./dreamyZoom.frag */ "./src/Definitions/dreamyZoom/dreamyZoom.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _dreamyZoom, _dreamyZoom3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _dreamyZoom2 = _interopRequireDefault(_dreamyZoom);

    var _dreamyZoom4 = _interopRequireDefault(_dreamyZoom3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var dreamyZoom = {
        title: "dreamy zoom",
        description: "A dreamy zoom effect. Typically used as a transition.",
        vertexShader: _dreamyZoom2.default,
        fragmentShader: _dreamyZoom4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] },
            rotation: { type: "uniform", value: 6.0 },
            scale: { type: "uniform", value: 1.2 }
        },
        inputs: ["from", "to"]
    };

    exports.default = dreamyZoom;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/dreamyZoom/dreamyZoom.vert":
/*!****************************************************!*\
  !*** ./src/Definitions/dreamyZoom/dreamyZoom.vert ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/fade/fade.frag":
/*!****************************************!*\
  !*** ./src/Definitions/fade/fade.frag ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\nvoid main() {\n  vec2 p = gl_FragCoord.xy / resolution.xy;\n  gl_FragColor = mix(texture2D(from, p, 0.0), texture2D(to, p, 0.0), progress);\n}\n"

/***/ }),

/***/ "./src/Definitions/fade/fade.js":
/*!**************************************!*\
  !*** ./src/Definitions/fade/fade.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./fade.vert */ "./src/Definitions/fade/fade.vert"), __webpack_require__(/*! ./fade.frag */ "./src/Definitions/fade/fade.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _fade, _fade3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _fade2 = _interopRequireDefault(_fade);

    var _fade4 = _interopRequireDefault(_fade3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var fade = {
        title: "fade",
        description: "A fade effect. Typically used as a transition.",
        vertexShader: _fade2.default,
        fragmentShader: _fade4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] }
        },
        inputs: ["from", "to"]
    };

    exports.default = fade;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/fade/fade.vert":
/*!****************************************!*\
  !*** ./src/Definitions/fade/fade.vert ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/fadeColor/fadeColor.frag":
/*!**************************************************!*\
  !*** ./src/Definitions/fadeColor/fadeColor.frag ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D from;\nuniform sampler2D to;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec3 color;\nuniform float colorPhase; \n \nvoid main() {\n  vec2 p = gl_FragCoord.xy / resolution.xy;\n  gl_FragColor = mix(\n    mix(vec4(color, 1.0), texture2D(from, p), smoothstep(1.0-colorPhase, 0.0, progress)),\n    mix(vec4(color, 1.0), texture2D(to,   p), smoothstep(    colorPhase, 1.0, progress)),\n    progress);\n}\n"

/***/ }),

/***/ "./src/Definitions/fadeColor/fadeColor.js":
/*!************************************************!*\
  !*** ./src/Definitions/fadeColor/fadeColor.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./fadeColor.vert */ "./src/Definitions/fadeColor/fadeColor.vert"), __webpack_require__(/*! ./fadeColor.frag */ "./src/Definitions/fadeColor/fadeColor.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _fadeColor, _fadeColor3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _fadeColor2 = _interopRequireDefault(_fadeColor);

    var _fadeColor4 = _interopRequireDefault(_fadeColor3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var fadeColor = {
        title: "fade color",
        description: "A fade color effect. Typically used as a transition.",
        vertexShader: _fadeColor2.default,
        fragmentShader: _fadeColor4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] },
            color: { type: "uniform", value: [0.0, 0.0, 0.0] },
            colorPhase: { type: "uniform", value: 0.4 }
        },
        inputs: ["from", "to"]
    };

    exports.default = fadeColor;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/fadeColor/fadeColor.vert":
/*!**************************************************!*\
  !*** ./src/Definitions/fadeColor/fadeColor.vert ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/fadeGrayScale/fadeGrayScale.frag":
/*!**********************************************************!*\
  !*** ./src/Definitions/fadeGrayScale/fadeGrayScale.frag ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\n\nconst float intensity = 0.3;\n\nvec3 grayscale (vec3 color) {\n  return vec3(0.2126*color.r + 0.7152*color.g + 0.0722*color.b);\n}\n\nvoid main () {\n  vec2 uv = gl_FragCoord.xy / resolution.xy;\n  vec4 fc = texture2D(from, uv);\n  vec4 tc = texture2D(to, uv);\n\n  gl_FragColor = mix(\n    mix(vec4(grayscale(fc.rgb), 1.0), fc, smoothstep(1.0-intensity, 0.0, progress)),\n    mix(vec4(grayscale(tc.rgb), 1.0), tc, smoothstep(    intensity, 1.0, progress)),\n    progress);\n}\n"

/***/ }),

/***/ "./src/Definitions/fadeGrayScale/fadeGrayScale.js":
/*!********************************************************!*\
  !*** ./src/Definitions/fadeGrayScale/fadeGrayScale.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./fadeGrayScale.vert */ "./src/Definitions/fadeGrayScale/fadeGrayScale.vert"), __webpack_require__(/*! ./fadeGrayScale.frag */ "./src/Definitions/fadeGrayScale/fadeGrayScale.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _fadeGrayScale, _fadeGrayScale3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _fadeGrayScale2 = _interopRequireDefault(_fadeGrayScale);

    var _fadeGrayScale4 = _interopRequireDefault(_fadeGrayScale3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var fadeGrayScale = {
        title: "fade gray scale",
        description: "A fade gray scale effect. Typically used as a transition.",
        vertexShader: _fadeGrayScale2.default,
        fragmentShader: _fadeGrayScale4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] }
        },
        inputs: ["from", "to"]
    };

    exports.default = fadeGrayScale;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/fadeGrayScale/fadeGrayScale.vert":
/*!**********************************************************!*\
  !*** ./src/Definitions/fadeGrayScale/fadeGrayScale.vert ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/flip/flip.frag":
/*!****************************************!*\
  !*** ./src/Definitions/flip/flip.frag ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n\nuniform sampler2D u_image;\nuniform float\tu_hv;\nvarying vec2 textureCoordinate;\n\nvoid main()\n{\n    vec2 xy = textureCoordinate;\n    if (u_hv >= 0.0 && u_hv < 1.0) {\n        xy.y = 1.0 - textureCoordinate.y;\n    }\n\n    if (u_hv >= 1.0) {\n        xy.x = 1.0 - textureCoordinate.x;\n    }\n\n    gl_FragColor = texture2D(u_image, xy);\n}\n"

/***/ }),

/***/ "./src/Definitions/flip/flip.js":
/*!**************************************!*\
  !*** ./src/Definitions/flip/flip.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./flip.vert */ "./src/Definitions/flip/flip.vert"), __webpack_require__(/*! ./flip.frag */ "./src/Definitions/flip/flip.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _flip, _flip3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _flip2 = _interopRequireDefault(_flip);

    var _flip4 = _interopRequireDefault(_flip3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var flip = {
        title: "Video Flip Effect",
        description: "A flip effect",
        vertexShader: _flip2.default,
        fragmentShader: _flip4.default,
        properties: {
            u_hv: { type: "uniform", value: 0.0 }
        },
        inputs: ["u_image"]
    };

    exports.default = flip;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/flip/flip.vert":
/*!****************************************!*\
  !*** ./src/Definitions/flip/flip.vert ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 textureCoordinate;\nvoid main() {\n\tgl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);;\n\ttextureCoordinate = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/glassBlur/glassBlur.frag":
/*!**************************************************!*\
  !*** ./src/Definitions/glassBlur/glassBlur.frag ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\nvarying vec2 textureCoordinate;\nuniform sampler2D u_image;\nuniform vec2 u_direction;\nconst float maxStep = 15.0;\nvec4 getColor(sampler2D image, vec2 uv) {\n\tvec4 color = vec4(0.0);\n\tfloat weight = 0.0;\n\tfor (float step = -maxStep; step <= maxStep; step += 1.0) {\n\t\tcolor += texture2D(image, uv + u_direction * step);\n\t\tweight += 1.0;\n\t}\n\tcolor /= weight;\n\treturn color;\n}\nvoid main()\n{\n\tgl_FragColor = getColor(u_image, textureCoordinate);\n}\n"

/***/ }),

/***/ "./src/Definitions/glassBlur/glassBlur.js":
/*!************************************************!*\
  !*** ./src/Definitions/glassBlur/glassBlur.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./glassBlur.vert */ "./src/Definitions/glassBlur/glassBlur.vert"), __webpack_require__(/*! ./glassBlur.frag */ "./src/Definitions/glassBlur/glassBlur.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _glassBlur, _glassBlur3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _glassBlur2 = _interopRequireDefault(_glassBlur);

    var _glassBlur4 = _interopRequireDefault(_glassBlur3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var glassBlur = {
        title: "Glass Blur",
        description: "Glass Blur",
        vertexShader: _glassBlur2.default,
        fragmentShader: _glassBlur4.default,
        properties: {
            u_direction: { type: "uniform", value: [0.0, 0.0] }
        },
        inputs: ["u_image"]
    };

    exports.default = glassBlur;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/glassBlur/glassBlur.vert":
/*!**************************************************!*\
  !*** ./src/Definitions/glassBlur/glassBlur.vert ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 textureCoordinate;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    textureCoordinate = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/glassFill/glassFill.frag":
/*!**************************************************!*\
  !*** ./src/Definitions/glassFill/glassFill.frag ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nvarying vec2 textureCoordinate;\nuniform float u_fx;\nuniform float u_fy;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nfloat getXY(float x, float fx) {\n    if (x < fx) {\n        x = x * 0.5 / fx;\n    } else if (x > 1.0 - fx) {\n        x = 1.0 - (1.0 - x) * 0.5 / fx;\n    } else {\n        x = (x - fx) / (1.0 - fx * 2.0);\n    }\n    return x;\n}\nvec4 getColorX(sampler2D image, vec2 pos) {\n    pos.x = getXY(pos.x, u_fx);\n    return texture2D(image, pos);\n}\nvec4 getColorY(sampler2D image, vec2 pos) {\n    pos.y = getXY(pos.y, u_fy);\n    return texture2D(image, pos);\n}\nvoid main()\n{\n    vec2 pos = textureCoordinate;\n    if (u_fx > 0.0) {\n        if (pos.x < u_fx || pos.x > 1.0 - u_fx) {\n            gl_FragColor = texture2D(u_image_b, pos);\n        } else {\n            gl_FragColor = getColorX(u_image_a, pos);\n        }\n    } else if (u_fy > 0.0) {\n        if (pos.y < u_fy || pos.y > 1.0 - u_fy) {\n            gl_FragColor = texture2D(u_image_b, pos);\n        } else {\n            gl_FragColor = getColorY(u_image_a, pos);\n        }\n    } else {\n        gl_FragColor = texture2D(u_image_a, pos);\n    }\n}\n"

/***/ }),

/***/ "./src/Definitions/glassFill/glassFill.js":
/*!************************************************!*\
  !*** ./src/Definitions/glassFill/glassFill.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./glassFill.vert */ "./src/Definitions/glassFill/glassFill.vert"), __webpack_require__(/*! ./glassFill.frag */ "./src/Definitions/glassFill/glassFill.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _glassFill, _glassFill3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _glassFill2 = _interopRequireDefault(_glassFill);

    var _glassFill4 = _interopRequireDefault(_glassFill3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var glassFill = {
        title: "Glass Fill",
        description: "Glass Fill",
        vertexShader: _glassFill2.default,
        fragmentShader: _glassFill4.default,
        properties: {
            u_fx: { type: "uniform", value: 0.0 },
            u_fy: { type: "uniform", value: 0.0 },
            calPadding: function calPadding(ow, oh, vw, vh) {
                var u_fx = 0.0,
                    u_fy = 0.0;

                if (ow / oh > vw / vh) {
                    u_fx = (ow - oh * vw / vh) / 2 / ow;
                    u_fy = 0.0;
                } else {
                    u_fx = 0.0;
                    u_fy = (oh - ow * vh / vw) / 2 / oh;
                }

                return {
                    u_fx: u_fx,
                    u_fy: u_fy
                };
            }
        },
        inputs: ["u_image_a", "u_image_b"]
    };

    exports.default = glassFill;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/glassFill/glassFill.vert":
/*!**************************************************!*\
  !*** ./src/Definitions/glassFill/glassFill.vert ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 textureCoordinate;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    textureCoordinate = a_texCoord;\n}"

/***/ }),

/***/ "./src/Definitions/glitchMemories/glitchMemories.frag":
/*!************************************************************!*\
  !*** ./src/Definitions/glitchMemories/glitchMemories.frag ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\n\nvoid glitch_memories(sampler2D pic) {\n  vec2 p = gl_FragCoord.xy / resolution.xy;\n  vec2 block = floor(gl_FragCoord.xy / vec2(16));\n  vec2 uv_noise = block / vec2(64);\n  uv_noise += floor(vec2(progress) * vec2(1200.0, 3500.0)) / vec2(64);\n  \n  float block_thresh = pow(fract(progress * 1200.0), 2.0) * 0.2;\n  float line_thresh = pow(fract(progress * 2200.0), 3.0) * 0.7;\n  vec2 red = p, green = p, blue = p, o = p;\n  vec2 dist = (fract(uv_noise) - 0.5) * 0.3;\n  red += dist * 0.1;\n  green += dist * 0.2;\n  blue += dist * 0.125;\n  \n  gl_FragColor.r = texture2D(pic, red).r;\n  gl_FragColor.g = texture2D(pic, green).g;\n  gl_FragColor.b = texture2D(pic, blue).b;\n  gl_FragColor.a = 1.0;\n\n}\n\nvoid main(void)\n{\n  float smoothed = smoothstep(0., 1., progress);\n  if( ( smoothed < 0.4 && smoothed > 0.1) ) {\n      glitch_memories(from);\n  } else if ((smoothed > 0.6 && smoothed < 0.9) ) {\n      glitch_memories(to);\n  } else {\n    vec2 p = gl_FragCoord.xy / resolution.xy;\n    gl_FragColor = mix(texture2D(from, p), texture2D(to, p), progress);\n  }\n}\n"

/***/ }),

/***/ "./src/Definitions/glitchMemories/glitchMemories.js":
/*!**********************************************************!*\
  !*** ./src/Definitions/glitchMemories/glitchMemories.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./glitchMemories.vert */ "./src/Definitions/glitchMemories/glitchMemories.vert"), __webpack_require__(/*! ./glitchMemories.frag */ "./src/Definitions/glitchMemories/glitchMemories.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _glitchMemories, _glitchMemories3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _glitchMemories2 = _interopRequireDefault(_glitchMemories);

    var _glitchMemories4 = _interopRequireDefault(_glitchMemories3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var glitchMemories = {
        title: "glitch memories",
        description: "A glitch memories effect. Typically used as a transition.",
        vertexShader: _glitchMemories2.default,
        fragmentShader: _glitchMemories4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] }
        },
        inputs: ["from", "to"]
    };

    exports.default = glitchMemories;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/glitchMemories/glitchMemories.vert":
/*!************************************************************!*\
  !*** ./src/Definitions/glitchMemories/glitchMemories.vert ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/horizontalBlur/horizontalBlur.frag":
/*!************************************************************!*\
  !*** ./src/Definitions/horizontalBlur/horizontalBlur.frag ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvarying vec2 v_blurTexCoords[14];\nvoid main(){\n    gl_FragColor = vec4(0.0);\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 0])*0.0044299121055113265;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 1])*0.00895781211794;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 2])*0.0215963866053;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 3])*0.0443683338718;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 4])*0.0776744219933;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 5])*0.115876621105;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 6])*0.147308056121;\n    gl_FragColor += texture2D(u_image, v_texCoord         )*0.159576912161;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 7])*0.147308056121;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 8])*0.115876621105;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 9])*0.0776744219933;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[10])*0.0443683338718;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[11])*0.0215963866053;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[12])*0.00895781211794;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[13])*0.0044299121055113265;\n}\n"

/***/ }),

/***/ "./src/Definitions/horizontalBlur/horizontalBlur.js":
/*!**********************************************************!*\
  !*** ./src/Definitions/horizontalBlur/horizontalBlur.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./horizontalBlur.vert */ "./src/Definitions/horizontalBlur/horizontalBlur.vert"), __webpack_require__(/*! ./horizontalBlur.frag */ "./src/Definitions/horizontalBlur/horizontalBlur.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _horizontalBlur, _horizontalBlur3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _horizontalBlur2 = _interopRequireDefault(_horizontalBlur);

    var _horizontalBlur4 = _interopRequireDefault(_horizontalBlur3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var horizontal_blur = {
        title: "Horizontal Blur",
        description: "A horizontal blur effect. Adpated from http://xissburg.com/faster-gaussian-blur-in-glsl/",
        vertexShader: _horizontalBlur2.default,
        fragmentShader: _horizontalBlur4.default,
        properties: {
            blurAmount: { type: "uniform", value: 1.0 }
        },
        inputs: ["u_image"]
    };

    exports.default = horizontal_blur;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/horizontalBlur/horizontalBlur.vert":
/*!************************************************************!*\
  !*** ./src/Definitions/horizontalBlur/horizontalBlur.vert ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nuniform float blurAmount;\nvarying vec2 v_texCoord;\nvarying vec2 v_blurTexCoords[14];\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n    v_blurTexCoords[ 0] = v_texCoord + vec2(-0.028 * blurAmount, 0.0);\n    v_blurTexCoords[ 1] = v_texCoord + vec2(-0.024 * blurAmount, 0.0);\n    v_blurTexCoords[ 2] = v_texCoord + vec2(-0.020 * blurAmount, 0.0);\n    v_blurTexCoords[ 3] = v_texCoord + vec2(-0.016 * blurAmount, 0.0);\n    v_blurTexCoords[ 4] = v_texCoord + vec2(-0.012 * blurAmount, 0.0);\n    v_blurTexCoords[ 5] = v_texCoord + vec2(-0.008 * blurAmount, 0.0);\n    v_blurTexCoords[ 6] = v_texCoord + vec2(-0.004 * blurAmount, 0.0);\n    v_blurTexCoords[ 7] = v_texCoord + vec2( 0.004 * blurAmount, 0.0);\n    v_blurTexCoords[ 8] = v_texCoord + vec2( 0.008 * blurAmount, 0.0);\n    v_blurTexCoords[ 9] = v_texCoord + vec2( 0.012 * blurAmount, 0.0);\n    v_blurTexCoords[10] = v_texCoord + vec2( 0.016 * blurAmount, 0.0);\n    v_blurTexCoords[11] = v_texCoord + vec2( 0.020 * blurAmount, 0.0);\n    v_blurTexCoords[12] = v_texCoord + vec2( 0.024 * blurAmount, 0.0);\n    v_blurTexCoords[13] = v_texCoord + vec2( 0.028 * blurAmount, 0.0);\n}\n"

/***/ }),

/***/ "./src/Definitions/horizontalWipe/horizontalWipe.frag":
/*!************************************************************!*\
  !*** ./src/Definitions/horizontalWipe/horizontalWipe.frag ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    if (v_texCoord[0] > mix){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n"

/***/ }),

/***/ "./src/Definitions/horizontalWipe/horizontalWipe.js":
/*!**********************************************************!*\
  !*** ./src/Definitions/horizontalWipe/horizontalWipe.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./horizontalWipe.vert */ "./src/Definitions/horizontalWipe/horizontalWipe.vert"), __webpack_require__(/*! ./horizontalWipe.frag */ "./src/Definitions/horizontalWipe/horizontalWipe.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _horizontalWipe, _horizontalWipe3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _horizontalWipe2 = _interopRequireDefault(_horizontalWipe);

    var _horizontalWipe4 = _interopRequireDefault(_horizontalWipe3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var horizontal_wipe = {
        title: "Horizontal Wipe",
        description: "A horizontal wipe effect. Typically used as a transistion.",
        vertexShader: _horizontalWipe2.default,
        fragmentShader: _horizontalWipe4.default,
        properties: {
            mix: { type: "uniform", value: 0.0 }
        },
        inputs: ["u_image_a", "u_image_b"]
    };

    exports.default = horizontal_wipe;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/horizontalWipe/horizontalWipe.vert":
/*!************************************************************!*\
  !*** ./src/Definitions/horizontalWipe/horizontalWipe.vert ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/hsvc/hsvc.frag":
/*!****************************************!*\
  !*** ./src/Definitions/hsvc/hsvc.frag ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\nvarying highp vec2 v_texCoord;\nuniform sampler2D u_image_a;\nuniform float u_hue;\nuniform float u_saturation;\nuniform float u_value;\nuniform float u_contrast;\nvec3 rgbtohsv(vec3 rgb)\n{\n    float R = rgb.x;\n    float G = rgb.y;\n    float B = rgb.z;\n    vec3 hsv;\n    float max1 = max(R, max(G, B));\n    float min1 = min(R, min(G, B));\n    if (R == max1) {\n        hsv.x = (G - B) / (max1 - min1);\n    }\n    if (G == max1) {\n        hsv.x = 2.0 + (B - R) / (max1 - min1);\n    }\n    if (B == max1){\n        hsv.x = 4.0 + (R - G) / (max1 - min1);\n    }\n    hsv.x = hsv.x * 60.0;\n    if (hsv.x  < 0.0) {\n        hsv.x = hsv.x + 360.0;\n    }\n    hsv.z = max1;\n    hsv.y = (max1 - min1) / max1;\n    return hsv;\n}\nvec3 hsvtorgb(vec3 hsv)\n{\n    float R;\n    float G;\n    float B;\n    if (hsv.y == 0.0) {\n        R = G = B = hsv.z;\n    } else {\n        hsv.x = hsv.x / 60.0;\n        float i = hsv.x;\n        float f = hsv.x - float(i);\n        float a = hsv.z * (1.0 - hsv.y);\n        float b = hsv.z * (1.0 - hsv.y * f);\n        float c = hsv.z * (1.0 - hsv.y * (1.0 - f));\n        if (i <= 0.0){\n            R = hsv.z;\n            G = c;\n            B = a;\n        } else if (i <= 1.0){\n            R = b;\n            G = hsv.z;\n            B = a;\n        } else if (i <= 2.0){\n            R = a;\n            G = hsv.z;\n            B = c;\n        } else if (i <= 3.0){\n            R = a;\n            G = b;\n            B = hsv.z;\n        } else if (i <= 4.0){\n            R = c;\n            G = a;\n            B = hsv.z;\n        } else {\n            R = hsv.z;\n            G = a;\n            B = b;\n        }\n    }\n    return vec3(R, G, B);\n}\nvoid main()\n{\n    vec4 pixColor = texture2D(u_image_a, v_texCoord);\n    vec3 hsv;\n    hsv.xyz = rgbtohsv(pixColor.rgb);\n    hsv.x += u_hue;\n    hsv.x = mod(hsv.x, 360.0);\n    hsv.y *= u_saturation;\n    hsv.z *= u_value;\n    vec3 f_color = hsvtorgb(hsv);\n    f_color = ((f_color - 0.5) * max(u_contrast+1.0, 0.0)) + 0.5;\n\n    gl_FragColor = vec4(f_color, pixColor.a);\n}\n"

/***/ }),

/***/ "./src/Definitions/hsvc/hsvc.js":
/*!**************************************!*\
  !*** ./src/Definitions/hsvc/hsvc.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./hsvc.vert */ "./src/Definitions/hsvc/hsvc.vert"), __webpack_require__(/*! ./hsvc.frag */ "./src/Definitions/hsvc/hsvc.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _hsvc, _hsvc3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _hsvc2 = _interopRequireDefault(_hsvc);

    var _hsvc4 = _interopRequireDefault(_hsvc3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var hsvc = {
        title: "hsvc",
        description: "hsvc",
        vertexShader: _hsvc2.default,
        fragmentShader: _hsvc4.default,
        properties: {
            u_hue: { type: "uniform", value: 0.0 }, //色调
            u_saturation: { type: "uniform", value: 1.0 }, //饱和度
            u_value: { type: "uniform", value: 1.0 }, //亮度
            u_contrast: { type: "uniform", value: 0.0 //对比度
            } },
        inputs: ["u_image_a"]
    };

    exports.default = hsvc;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/hsvc/hsvc.vert":
/*!****************************************!*\
  !*** ./src/Definitions/hsvc/hsvc.vert ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/invertedPageCurl/invertedPageCurl.frag":
/*!****************************************************************!*\
  !*** ./src/Definitions/invertedPageCurl/invertedPageCurl.frag ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\n\nconst float MIN_AMOUNT = -0.16;\nconst float MAX_AMOUNT = 1.5;\nconst float PI = 3.141592653589793;\nconst float scale = 512.0;\nconst float sharpness = 3.0;\nconst float cylinderRadius = 1.0 / PI / 2.0;\n\nvec3 hitPoint(float hitAngle, float yc, vec3 point, mat3 rrotation)\n{\n\tfloat hitPoint = hitAngle / (2.0 * PI);\n\tpoint.y = hitPoint;\n\treturn rrotation * point;\n}\n\nvec4 antiAlias(vec4 color1, vec4 color2, float distanc)\n{\n\tdistanc *= scale;\n\tif (distanc < 0.0) return color2;\n\tif (distanc > 2.0) return color1;\n\tfloat dd = pow(1.0 - distanc / 2.0, sharpness);\n\treturn ((color2 - color1) * dd) + color1;\n}\n\nfloat distanceToEdge(vec3 point)\n{\n\tfloat dx = abs(point.x > 0.5 ? 1.0 - point.x : point.x);\n\tfloat dy = abs(point.y > 0.5 ? 1.0 - point.y : point.y);\n\tif (point.x < 0.0) dx = -point.x;\n\tif (point.x > 1.0) dx = point.x - 1.0;\n\tif (point.y < 0.0) dy = -point.y;\n\tif (point.y > 1.0) dy = point.y - 1.0;\n\tif ((point.x < 0.0 || point.x > 1.0) && (point.y < 0.0 || point.y > 1.0)) return sqrt(dx * dx + dy * dy);\n\treturn min(dx, dy);\n}\n\nvec4 seeThrough(float yc, vec2 p, mat3 rotation, mat3 rrotation)\n{\n\tfloat amount = progress * (MAX_AMOUNT - MIN_AMOUNT) + MIN_AMOUNT;\n\tfloat cylinderAngle = 2.0 * PI * amount;\n\tfloat hitAngle = PI - (acos(yc / cylinderRadius) - cylinderAngle);\n\tvec3 point = hitPoint(hitAngle, yc, rotation * vec3(p, 1.0), rrotation);\n\tif (yc <= 0.0 && (point.x < 0.0 || point.y < 0.0 || point.x > 1.0 || point.y > 1.0))\n\t{\n        vec2 texCoord = gl_FragCoord.xy / resolution.xy;\n        return texture2D(to, texCoord);\n\t}\n\n\tif (yc > 0.0) return texture2D(from, p);\n\n\tvec4 color = texture2D(from, point.xy);\n\tvec4 tcolor = vec4(0.0);\n\n\treturn antiAlias(color, tcolor, distanceToEdge(point));\n}\n\nvec4 seeThroughWithShadow(float yc, vec2 p, vec3 point, mat3 rotation, mat3 rrotation)\n{\n\tfloat amount = progress * (MAX_AMOUNT - MIN_AMOUNT) + MIN_AMOUNT;\n\tfloat shadow = distanceToEdge(point) * 30.0;\n\tshadow = (1.0 - shadow) / 3.0;\n\n\tif (shadow < 0.0) shadow = 0.0; else shadow *= amount;\n\n\tvec4 shadowColor = seeThrough(yc, p, rotation, rrotation);\n\tshadowColor.r -= shadow;\n\tshadowColor.g -= shadow;\n\tshadowColor.b -= shadow;\n\n\treturn shadowColor;\n}\n\nvec4 backside(float yc, vec3 point)\n{\n\tvec4 color = texture2D(from, point.xy);\n\tfloat gray = (color.r + color.b + color.g) / 15.0;\n\tgray += (8.0 / 10.0) * (pow(1.0 - abs(yc / cylinderRadius), 2.0 / 10.0) / 2.0 + (5.0 / 10.0));\n\tcolor.rgb = vec3(gray);\n\treturn color;\n}\n\nvec4 behindSurface(float yc, vec3 point, mat3 rrotation)\n{\n\tfloat amount = progress * (MAX_AMOUNT - MIN_AMOUNT) + MIN_AMOUNT;\n\tfloat cylinderAngle = 2.0 * PI * amount;\n\tfloat shado = (1.0 - ((-cylinderRadius - yc) / amount * 7.0)) / 6.0;\n\tshado *= 1.0 - abs(point.x - 0.5);\n\n\tyc = (-cylinderRadius - cylinderRadius - yc);\n\n\tfloat hitAngle = (acos(yc / cylinderRadius) + cylinderAngle) - PI;\n\tpoint = hitPoint(hitAngle, yc, point, rrotation);\n\n\tif (yc < 0.0 && point.x >= 0.0 && point.y >= 0.0 && point.x <= 1.0 && point.y <= 1.0 && (hitAngle < PI || amount > 0.5))\n\t{\n\t\tshado = 1.0 - (sqrt(pow(point.x - 0.5, 2.0) + pow(point.y - 0.5, 2.0)) / (71.0 / 100.0));\n\t\tshado *= pow(-yc / cylinderRadius, 3.0);\n\t\tshado *= 0.5;\n\t}\n\telse\n\t{\n\t\tshado = 0.0;\n\t}\n\t\n\tvec2 texCoord = gl_FragCoord.xy / resolution.xy;\n\n\treturn vec4(texture2D(to, texCoord).rgb - shado, 1.0);\n}\n\nvoid main()\n{\n\tfloat amount = progress * (MAX_AMOUNT - MIN_AMOUNT) + MIN_AMOUNT;\n\tfloat cylinderCenter = amount;\n\tfloat cylinderAngle = 2.0 * PI * amount;\n  vec2 texCoord = gl_FragCoord.xy / resolution.xy;\n  if (progress == 0.0) {\n      gl_FragColor = texture2D(from, texCoord);\n      return;\n  }\n  \n  const float angle = 100.0 * PI / 180.0;\n\tfloat c = cos(-angle);\n\tfloat s = sin(-angle);\n\n\tmat3 rotation = mat3( c, s, 0,\n\t\t\t\t\t\t\t\t-s, c, 0,\n\t\t\t\t\t\t\t\t-0.801, 0.8900, 1\n\t\t\t\t\t\t\t\t);\n\tc = cos(angle);\n\ts = sin(angle);\n\n\tmat3 rrotation = mat3(\tc, s, 0,\n\t\t\t\t\t\t\t\t\t-s, c, 0,\n\t\t\t\t\t\t\t\t\t0.98500, 0.985, 1\n\t\t\t\t\t\t\t\t);\n\n\tvec3 point = rotation * vec3(texCoord, 1.0);\n\n\tfloat yc = point.y - cylinderCenter;\n\n\tif (yc < -cylinderRadius)\n\t{\n\t\tgl_FragColor = behindSurface(yc, point, rrotation);\n\t\treturn;\n\t}\n\n\tif (yc > cylinderRadius)\n\t{\n\t\tgl_FragColor = texture2D(from, texCoord);\n\t\treturn;\n\t}\n\n\tfloat hitAngle = (acos(yc / cylinderRadius) + cylinderAngle) - PI;\n\n\tfloat hitAngleMod = mod(hitAngle, 2.0 * PI);\n\tif ((hitAngleMod > PI && amount < 0.5) || (hitAngleMod > PI/2.0 && amount < 0.0))\n\t{\n\t\tgl_FragColor = seeThrough(yc, texCoord, rotation, rrotation);\n\t\treturn;\n\t}\n\n\tpoint = hitPoint(hitAngle, yc, point, rrotation);\n\n\tif (point.x < 0.0 || point.y < 0.0 || point.x > 1.0 || point.y > 1.0)\n\t{\n\t\tgl_FragColor = seeThroughWithShadow(yc, texCoord, point, rotation, rrotation);\n\t\treturn;\n\t}\n\n\tvec4 color = backside(yc, point);\n\n\tvec4 otherColor;\n\tif (yc < 0.0)\n\t{\n\t\tfloat shado = 1.0 - (sqrt(pow(point.x - 0.5, 2.0) + pow(point.y - 0.5, 2.0)) / 0.71);\n\t\tshado *= pow(-yc / cylinderRadius, 3.0);\n\t\tshado *= 0.5;\n\t\totherColor = vec4(0.0, 0.0, 0.0, shado);\n\t}\n\telse\n\t{\n\t\totherColor = texture2D(from, texCoord);\n\t}\n\n\tcolor = antiAlias(color, otherColor, cylinderRadius - abs(yc));\n\n\tvec4 cl = seeThroughWithShadow(yc, texCoord, point, rotation, rrotation);\n\tfloat dist = distanceToEdge(point);\n\n\tgl_FragColor = antiAlias(color, cl, dist);\n}"

/***/ }),

/***/ "./src/Definitions/invertedPageCurl/invertedPageCurl.js":
/*!**************************************************************!*\
  !*** ./src/Definitions/invertedPageCurl/invertedPageCurl.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./invertedPageCurl.vert */ "./src/Definitions/invertedPageCurl/invertedPageCurl.vert"), __webpack_require__(/*! ./invertedPageCurl.frag */ "./src/Definitions/invertedPageCurl/invertedPageCurl.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _invertedPageCurl, _invertedPageCurl3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _invertedPageCurl2 = _interopRequireDefault(_invertedPageCurl);

    var _invertedPageCurl4 = _interopRequireDefault(_invertedPageCurl3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var invertedPageCurl = {
        title: "inverted page curl",
        description: "A inverted page curl effect. Typically used as a transition.",
        vertexShader: _invertedPageCurl2.default,
        fragmentShader: _invertedPageCurl4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] }
        },
        inputs: ["from", "to"]
    };

    exports.default = invertedPageCurl;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/invertedPageCurl/invertedPageCurl.vert":
/*!****************************************************************!*\
  !*** ./src/Definitions/invertedPageCurl/invertedPageCurl.vert ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/linearBlur/linearBlur.frag":
/*!****************************************************!*\
  !*** ./src/Definitions/linearBlur/linearBlur.frag ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\n\nuniform float intensity;\n\nconst int PASSES = 8;\nvoid main() {\n  vec2 p = gl_FragCoord.xy / resolution.xy;\n  vec4 c1 = vec4(0.0), c2 = vec4(0.0);\n  float disp = intensity*(0.5-distance(0.5, progress));\n  for (int xi=0; xi<PASSES; ++xi) {\n    float x = float(xi) / float(PASSES) - 0.5;\n    for (int yi=0; yi<PASSES; ++yi) {\n      float y = float(yi) / float(PASSES) - 0.5;\n      vec2 v = vec2(x,y);\n      float d = disp;\n      c1 += texture2D(from, p + d*v);\n      c2 += texture2D(to, p + d*v);\n    }\n  }\n  c1 /= float(PASSES*PASSES);\n  c2 /= float(PASSES*PASSES);\n  gl_FragColor = mix(c1, c2, progress);\n}\n"

/***/ }),

/***/ "./src/Definitions/linearBlur/linearBlur.js":
/*!**************************************************!*\
  !*** ./src/Definitions/linearBlur/linearBlur.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./linearBlur.vert */ "./src/Definitions/linearBlur/linearBlur.vert"), __webpack_require__(/*! ./linearBlur.frag */ "./src/Definitions/linearBlur/linearBlur.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _linearBlur, _linearBlur3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _linearBlur2 = _interopRequireDefault(_linearBlur);

    var _linearBlur4 = _interopRequireDefault(_linearBlur3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var linearBlur = {
        title: "linear blur",
        description: "A linear blur effect. Typically used as a transition.",
        vertexShader: _linearBlur2.default,
        fragmentShader: _linearBlur4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] }
        },
        inputs: ["from", "to"]
    };

    exports.default = linearBlur;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/linearBlur/linearBlur.vert":
/*!****************************************************!*\
  !*** ./src/Definitions/linearBlur/linearBlur.vert ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/lookup/lookup.frag":
/*!********************************************!*\
  !*** ./src/Definitions/lookup/lookup.frag ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n\nvarying vec2 textureCoordinate;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float intensity;\n\nvoid main()\n{\n    vec4 textureColor = texture2D(u_image_a, textureCoordinate);\n    float blueColor = textureColor.b * 63.0;\n    \n    vec2 quad1;\n    quad1.y = floor(floor(blueColor) / 8.0);\n    quad1.x = floor(blueColor) - (quad1.y * 8.0);\n    \n    vec2 quad2;\n    quad2.y = floor(ceil(blueColor) / 8.0);\n    quad2.x = ceil(blueColor) - (quad2.y * 8.0);\n    \n    vec2 texPos1;\n    texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.r);\n    texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.g);\n    \n    vec2 texPos2;\n    texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.r);\n    texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.g);\n    \n    vec4 newColor1 = texture2D(u_image_b, texPos1);\n    vec4 newColor2 = texture2D(u_image_b, texPos2);\n    \n    vec4 newColor = mix(newColor1, newColor2, fract(blueColor));\n    gl_FragColor = mix(textureColor, vec4(newColor.rgb, textureColor.w), intensity);\n}"

/***/ }),

/***/ "./src/Definitions/lookup/lookup.js":
/*!******************************************!*\
  !*** ./src/Definitions/lookup/lookup.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./lookup.vert */ "./src/Definitions/lookup/lookup.vert"), __webpack_require__(/*! ./lookup.frag */ "./src/Definitions/lookup/lookup.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _lookup, _lookup3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _lookup2 = _interopRequireDefault(_lookup);

    var _lookup4 = _interopRequireDefault(_lookup3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var lookup = {
        title: "lookup",
        description: "lookup",
        vertexShader: _lookup2.default,
        fragmentShader: _lookup4.default,
        properties: {
            intensity: { type: "uniform", value: 1.0 }
        },
        inputs: ["u_image_a", "u_image_b"]
    };

    exports.default = lookup;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/lookup/lookup.vert":
/*!********************************************!*\
  !*** ./src/Definitions/lookup/lookup.vert ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 textureCoordinate;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    textureCoordinate = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/luminanceMelt/luminanceMelt.frag":
/*!**********************************************************!*\
  !*** ./src/Definitions/luminanceMelt/luminanceMelt.frag ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\nuniform bool direction;\nuniform float l_threshold;\nuniform bool above;\n\nfloat rand(vec2 co){\n  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat snoise(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,\n                      0.366025403784439,\n                     -0.577350269189626,\n                      0.024390243902439);\n\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n  vec2 i1;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n  i = mod289(i);\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n\t\t+ i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nfloat luminance(vec4 color){\n  return color.r*0.299+color.g*0.587+color.b*0.114;\n}\n\nvec2 center = vec2(1.0, direction);\n\nvoid main() {\n  vec2 p = gl_FragCoord.xy / resolution.xy;\n  if (progress == 0.0) {\n    gl_FragColor = texture2D(from, p);\n  } else if (progress == 1.0) {\n    gl_FragColor = texture2D(to, p);\n  } else {\n    float x = progress;\n    float dist = distance(center, p)- progress*exp(snoise(vec2(p.x, 0.0)));\n    float r = x - rand(vec2(p.x, 0.1));\n    float m;\n    if(above){\n     m = dist <= r && luminance(texture2D(from, p))>l_threshold ? 1.0 : (progress*progress*progress);\n    }\n    else{\n     m = dist <= r && luminance(texture2D(from, p))<l_threshold ? 1.0 : (progress*progress*progress);  \n    }\n    gl_FragColor = mix(texture2D(from, p), texture2D(to, p), m);    \n  }\n}"

/***/ }),

/***/ "./src/Definitions/luminanceMelt/luminanceMelt.js":
/*!********************************************************!*\
  !*** ./src/Definitions/luminanceMelt/luminanceMelt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./luminanceMelt.vert */ "./src/Definitions/luminanceMelt/luminanceMelt.vert"), __webpack_require__(/*! ./luminanceMelt.frag */ "./src/Definitions/luminanceMelt/luminanceMelt.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _luminanceMelt, _luminanceMelt3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _luminanceMelt2 = _interopRequireDefault(_luminanceMelt);

    var _luminanceMelt4 = _interopRequireDefault(_luminanceMelt3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var luminanceMelt = {
        title: "luminance melt",
        description: "A luminance melt effect. Typically used as a transition.",
        vertexShader: _luminanceMelt2.default,
        fragmentShader: _luminanceMelt4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] },
            direction: { type: "uniform", value: 1.0 },
            l_threshold: { type: "uniform", value: 0.5 },
            above: { type: "uniform", value: 0.0 }
        },
        inputs: ["from", "to"]
    };

    exports.default = luminanceMelt;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/luminanceMelt/luminanceMelt.vert":
/*!**********************************************************!*\
  !*** ./src/Definitions/luminanceMelt/luminanceMelt.vert ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/monochrome/monochrome.frag":
/*!****************************************************!*\
  !*** ./src/Definitions/monochrome/monochrome.frag ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform vec3 inputMix;\nuniform vec3 outputMix;\nuniform float start;\nuniform float end;\nuniform float currentTime;\n\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    if (currentTime < start || (currentTime > end && end > 0.0)) {\n        gl_FragColor = texture2D(u_image, v_texCoord);\n        return;\n    }\n\n    vec4 color = texture2D(u_image, v_texCoord);\n    float mono = color[0]*inputMix[0] + color[1]*inputMix[1] + color[2]*inputMix[2];\n    color[0] = mono * outputMix[0];\n    color[1] = mono * outputMix[1];\n    color[2] = mono * outputMix[2];\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/monochrome/monochrome.js":
/*!**************************************************!*\
  !*** ./src/Definitions/monochrome/monochrome.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./monochrome.vert */ "./src/Definitions/monochrome/monochrome.vert"), __webpack_require__(/*! ./monochrome.frag */ "./src/Definitions/monochrome/monochrome.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _monochrome, _monochrome3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _monochrome2 = _interopRequireDefault(_monochrome);

    var _monochrome4 = _interopRequireDefault(_monochrome3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var monochrome = {
        title: "Monochrome",
        description: "Change images to a single chroma (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
        vertexShader: _monochrome2.default,
        fragmentShader: _monochrome4.default,
        properties: {
            inputMix: { type: "uniform", value: [0.4, 0.6, 0.2] },
            outputMix: { type: "uniform", value: [1.0, 1.0, 1.0] },
            start: { type: "uniform", value: -1.0 },
            end: { type: "uniform", value: -1.0 }
        },
        inputs: ["u_image"]
    };

    exports.default = monochrome;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/monochrome/monochrome.vert":
/*!****************************************************!*\
  !*** ./src/Definitions/monochrome/monochrome.vert ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/mosaic/mosaic.frag":
/*!********************************************!*\
  !*** ./src/Definitions/mosaic/mosaic.frag ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nvarying vec2 textureCoordinate;\nconst float box = 35.0;\nuniform sampler2D u_image_a;\nuniform vec4 u_mosaic;\n\nuniform float start;\nuniform float end;\nuniform float currentTime;\n\nbool inRect(vec4 rect, vec2 pos) {\n    if (pos.x >= rect.x && pos.x <= rect.x + rect.z && pos.y >= rect.y && pos.y <= rect.y + rect.w) {\n        return true;\n    } else {\n        return false;\n    }\n}\nvec4 mosaic(vec2 xy) {\n    xy.x = floor(xy.x * box) / box;\n    xy.y = floor(xy.y * box) / box;\n    return texture2D(u_image_a, xy);\n}\nvoid main()\n{\n    if (currentTime < start || (currentTime > end && end > 0.0)) {\n        gl_FragColor = texture2D(u_image_a, textureCoordinate);\n        return;\n    }\n\n    vec4 rect = u_mosaic;\n    rect.y = 1.0 - u_mosaic.y - u_mosaic.w;\n    vec2 xy = textureCoordinate;\n\n    if (inRect(rect, xy)) {\n        gl_FragColor = mosaic(xy); \n    } else {\n        gl_FragColor = texture2D(u_image_a, xy);\n    }\n}"

/***/ }),

/***/ "./src/Definitions/mosaic/mosaic.js":
/*!******************************************!*\
  !*** ./src/Definitions/mosaic/mosaic.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./mosaic.vert */ "./src/Definitions/mosaic/mosaic.vert"), __webpack_require__(/*! ./mosaic.frag */ "./src/Definitions/mosaic/mosaic.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _mosaic, _mosaic3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _mosaic2 = _interopRequireDefault(_mosaic);

    var _mosaic4 = _interopRequireDefault(_mosaic3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var mosaic = {
        title: "mosaic",
        description: "mosaic effect",
        vertexShader: _mosaic2.default,
        fragmentShader: _mosaic4.default,
        properties: {
            u_mosaic: { type: "uniform", value: [0.0, 0.0, 0.0, 0.0] },
            start: { type: "uniform", value: -1.0 },
            end: { type: "uniform", value: -1.0 }
        },
        inputs: ["u_image_a"]
    };

    exports.default = mosaic;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/mosaic/mosaic.vert":
/*!********************************************!*\
  !*** ./src/Definitions/mosaic/mosaic.vert ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 textureCoordinate;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    textureCoordinate = a_texCoord;\n}"

/***/ }),

/***/ "./src/Definitions/opacity/opacity.frag":
/*!**********************************************!*\
  !*** ./src/Definitions/opacity/opacity.frag ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float opacity;\nvarying vec2 v_texCoord;\nvarying float v_opacity;\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    color[3] *= opacity;\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/opacity/opacity.js":
/*!********************************************!*\
  !*** ./src/Definitions/opacity/opacity.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./opacity.vert */ "./src/Definitions/opacity/opacity.vert"), __webpack_require__(/*! ./opacity.frag */ "./src/Definitions/opacity/opacity.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _opacity, _opacity3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _opacity2 = _interopRequireDefault(_opacity);

    var _opacity4 = _interopRequireDefault(_opacity3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var opacity = {
        title: "Opacity",
        description: "Sets the opacity of an input.",
        vertexShader: _opacity2.default,
        fragmentShader: _opacity4.default,
        properties: {
            opacity: { type: "uniform", value: 0.7 }
        },
        inputs: ["u_image"]
    };

    exports.default = opacity;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/opacity/opacity.vert":
/*!**********************************************!*\
  !*** ./src/Definitions/opacity/opacity.vert ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/pixelize/pixelize.frag":
/*!************************************************!*\
  !*** ./src/Definitions/pixelize/pixelize.frag ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\n\nfloat rand(vec2 co){\n  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvoid main() {\n  float revProgress = (1.0 - progress);\n  float distFromEdges = min(progress, revProgress);\n  float squareSize = (50.0 * distFromEdges) + 1.0;  \n  \n  vec2 p = (floor((gl_FragCoord.xy + squareSize * 0.5) / squareSize) * squareSize) / resolution.xy;\n  vec4 fromColor = texture2D(from, p);\n  vec4 toColor = texture2D(to, p);\n  \n  gl_FragColor = mix(fromColor, toColor, progress);\n}"

/***/ }),

/***/ "./src/Definitions/pixelize/pixelize.js":
/*!**********************************************!*\
  !*** ./src/Definitions/pixelize/pixelize.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./pixelize.vert */ "./src/Definitions/pixelize/pixelize.vert"), __webpack_require__(/*! ./pixelize.frag */ "./src/Definitions/pixelize/pixelize.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _pixelize, _pixelize3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _pixelize2 = _interopRequireDefault(_pixelize);

    var _pixelize4 = _interopRequireDefault(_pixelize3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var pixelize = {
        title: "pixelize",
        description: "A pixelize effect. Typically used as a transition.",
        vertexShader: _pixelize2.default,
        fragmentShader: _pixelize4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] }
        },
        inputs: ["from", "to"]
    };

    exports.default = pixelize;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/pixelize/pixelize.vert":
/*!************************************************!*\
  !*** ./src/Definitions/pixelize/pixelize.vert ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/randomDissolve/randomDissolve.frag":
/*!************************************************************!*\
  !*** ./src/Definitions/randomDissolve/randomDissolve.frag ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nfloat rand(vec2 co){\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    if (clamp(rand(v_texCoord),  0.01, 1.001) > mix){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n"

/***/ }),

/***/ "./src/Definitions/randomDissolve/randomDissolve.js":
/*!**********************************************************!*\
  !*** ./src/Definitions/randomDissolve/randomDissolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./randomDissolve.vert */ "./src/Definitions/randomDissolve/randomDissolve.vert"), __webpack_require__(/*! ./randomDissolve.frag */ "./src/Definitions/randomDissolve/randomDissolve.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _randomDissolve, _randomDissolve3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _randomDissolve2 = _interopRequireDefault(_randomDissolve);

    var _randomDissolve4 = _interopRequireDefault(_randomDissolve3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var randomDissolve = {
        title: "Random Dissolve",
        description: "A random dissolve effect. Typically used as a transistion.",
        vertexShader: _randomDissolve2.default,
        fragmentShader: _randomDissolve4.default,
        properties: {
            mix: { type: "uniform", value: 0.0 }
        },
        inputs: ["u_image_a", "u_image_b"]
    };

    exports.default = randomDissolve;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/randomDissolve/randomDissolve.vert":
/*!************************************************************!*\
  !*** ./src/Definitions/randomDissolve/randomDissolve.vert ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/slide/slide.frag":
/*!******************************************!*\
  !*** ./src/Definitions/slide/slide.frag ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\nuniform float translateX;\nuniform float translateY;\nvoid main() {\n    vec2 texCoord = gl_FragCoord.xy / resolution.xy;\n    float x = progress * translateX;\n    float y = progress * translateY;\n    if (x >= 0.0 && y >= 0.0) {\n        if (texCoord.x >= x && texCoord.y >= y) {\n            gl_FragColor = texture2D(from, texCoord - vec2(x, y));\n        }\n        else {\n            vec2 uv;\n            if (x > 0.0)\n                uv = vec2(x - 1.0, y);\n            else if (y > 0.0)\n                uv = vec2(x, y - 1.0);\n            gl_FragColor = texture2D(to, texCoord - uv);\n        }\n    }\n    else if (x <= 0.0 && y <= 0.0) {\n        if (texCoord.x <= (1.0 + x) && texCoord.y <= (1.0 + y))\n            gl_FragColor = texture2D(from, texCoord - vec2(x, y));\n        else {\n            vec2 uv;\n            if (x < 0.0)\n                uv = vec2(x + 1.0, y);\n            else if (y < 0.0)\n                uv = vec2(x, y + 1.0);\n            gl_FragColor = texture2D(to, texCoord - uv);\n        }\n    }\n    else\n        gl_FragColor = vec4(0.0);\n}"

/***/ }),

/***/ "./src/Definitions/slide/slide.js":
/*!****************************************!*\
  !*** ./src/Definitions/slide/slide.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./slide.vert */ "./src/Definitions/slide/slide.vert"), __webpack_require__(/*! ./slide.frag */ "./src/Definitions/slide/slide.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _slide, _slide3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _slide2 = _interopRequireDefault(_slide);

    var _slide4 = _interopRequireDefault(_slide3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var slide = {
        title: "slide",
        description: "A slide effect. Typically used as a transition.",
        vertexShader: _slide2.default,
        fragmentShader: _slide4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] },
            translateX: { type: "uniform", value: 1.0 },
            translateY: { type: "uniform", value: 0.0 }
        },
        inputs: ["from", "to"]
    };

    exports.default = slide;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/slide/slide.vert":
/*!******************************************!*\
  !*** ./src/Definitions/slide/slide.vert ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/squaresWire/squaresWire.frag":
/*!******************************************************!*\
  !*** ./src/Definitions/squaresWire/squaresWire.frag ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\n\nuniform vec2 squares;\nuniform vec2 direction;\nuniform float smoothness;\n\nconst vec2 center = vec2(0.5, 0.5);\n\nvoid main() {\n  vec2 p = gl_FragCoord.xy / resolution.xy;\n  vec2 v = normalize(direction);\n  if (v != vec2(0.0))\n    v /= abs(v.x)+abs(v.y);\n  float d = v.x * center.x + v.y * center.y;\n  float offset = smoothness;\n  float pr = smoothstep(-offset, 0.0, v.x * p.x + v.y * p.y - (d-0.5+progress*(1.+offset)));\n  vec2 squarep = fract(p*squares);\n  vec2 squaremin = vec2(pr/2.0);\n  vec2 squaremax = vec2(1.0 - pr/2.0);\n  float a = all(lessThan(squaremin, squarep)) && all(lessThan(squarep, squaremax)) ? 1.0 : 0.0;\n  \n  const float radius = 3.0;\n  vec2 step = vec2(1.0)/resolution.xy;\n  float alpha = 1.0;\n  if (progress > 0.0 && progress < 1.0) {\n    float max_pr = smoothstep(-offset, 0.0, v.x * p.x + v.y * p.y - (d-0.5+1.0*(1.+offset)));\n    vec2 max_squaremin = vec2(max_pr/2.0);\n    vec2 max_squaremax = vec2(1.0 - max_pr/2.0);\n\n    if ( squaremax.x < max_squaremax.x ) {\n      if (squarep.x > squaremin.x && squarep.x < squaremin.x+step.x*radius) {\n        alpha = 1.0-(squaremin.x+step.x*radius - squarep.x)/(step.x*radius);\n      }\n      else if (squarep.x > (squaremax.x-step.x*radius) && squarep.x < squaremax.x) {\n        alpha = (squaremax.x - squarep.x)/(step.x*radius);\n      }\n    }\n    \n    if ( squaremax.y < max_squaremax.y ) {\n      if (squarep.y > squaremin.y && squarep.y < squaremin.y+step.y*radius) {\n        alpha = 1.0-(squaremin.y+step.y*radius - squarep.y)/(step.y*radius);\n      }\n      else if (squarep.y > (squaremax.y-step.y*radius) && squarep.y < squaremax.y) {\n        alpha = (squaremax.y - squarep.y)/(step.y*radius);\n      }\n    }\n  }\n  gl_FragColor = mix(texture2D(from, p), texture2D(to, p), a*alpha);\n}\n"

/***/ }),

/***/ "./src/Definitions/squaresWire/squaresWire.js":
/*!****************************************************!*\
  !*** ./src/Definitions/squaresWire/squaresWire.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./squaresWire.vert */ "./src/Definitions/squaresWire/squaresWire.vert"), __webpack_require__(/*! ./squaresWire.frag */ "./src/Definitions/squaresWire/squaresWire.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _squaresWire, _squaresWire3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _squaresWire2 = _interopRequireDefault(_squaresWire);

    var _squaresWire4 = _interopRequireDefault(_squaresWire3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var squaresWire = {
        title: "squares wire",
        description: "A squares wipe effect. Typically used as a transition.",
        vertexShader: _squaresWire2.default,
        fragmentShader: _squaresWire4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] },
            squares: { type: "uniform", value: [10.0, 10.0] },
            direction: { type: "uniform", value: [1.0, -0.4] },
            smoothness: { type: "uniform", value: 1.6 }
        },
        inputs: ["from", "to"]
    };

    exports.default = squaresWire;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/squaresWire/squaresWire.vert":
/*!******************************************************!*\
  !*** ./src/Definitions/squaresWire/squaresWire.vert ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/starWipe/starWipe.frag":
/*!************************************************!*\
  !*** ./src/Definitions/starWipe/starWipe.frag ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nfloat sign (vec2 p1, vec2 p2, vec2 p3){\n    return (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1]);\n}\nbool pointInTriangle(vec2 pt, vec2 v1, vec2 v2, vec2 v3){\n    bool b1, b2, b3;\n    b1 = sign(pt, v1, v2) < 0.0;\n    b2 = sign(pt, v2, v3) < 0.0;\n    b3 = sign(pt, v3, v1) < 0.0;\n    return ((b1 == b2) && (b2 == b3));\n}\nvec2 rotatePointAboutPoint(vec2 point, vec2 pivot, float angle){\n    float s = sin(angle);\n    float c = cos(angle);\n    float x = point[0] - pivot[0];\n    float y = point[1] - pivot[1];\n    float new_x = x * c - y * s;\n    float new_y = x * s + y * c;\n    return vec2(new_x + pivot[0], new_y+pivot[1]);\n}\n\nvoid main(){\n    vec4 color_a = texture2D(u_image_b, v_texCoord);\n    vec4 color_b = texture2D(u_image_a, v_texCoord);\n    vec2 t0_p0,t0_p1,t0_p2,t1_p0,t1_p1,t1_p2,t2_p0,t2_p1,t2_p2,t3_p0,t3_p1,t3_p2;\n    vec2 t4_p0,t4_p1,t4_p2,t5_p0,t5_p1,t5_p2,t6_p0,t6_p1,t6_p2,t7_p0,t7_p1,t7_p2;\n\n\n    t0_p0 = vec2(0.0, 0.25) * clamp(mix,0.0,1.0) * 2.0 + vec2(0.5,0.5);\n    t0_p1 = vec2(0.0, -0.25) * clamp(mix,0.0,1.0) * 2.0 + vec2(0.5,0.5);\n    t0_p2 = vec2(1.0, 0.0) * clamp(mix,0.0,1.0) * 2.0 + vec2(0.5,0.5);\n\n    t1_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854);\n    t1_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854);\n    t1_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854);\n\n    t2_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 2.0);\n    t2_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 2.0);\n    t2_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 2.0);\n\n    t3_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 3.0);\n    t3_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 3.0);\n    t3_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 3.0);\n\n    t4_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 4.0);\n    t4_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 4.0);\n    t4_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 4.0);\n\n    t5_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 5.0);\n    t5_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 5.0);\n    t5_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 5.0);\n\n    t6_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 6.0);\n    t6_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 6.0);\n    t6_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 6.0);\n\n    t7_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 7.0);\n    t7_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 7.0);\n    t7_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 7.0);\n\n    if(mix > 0.99){\n        gl_FragColor = color_a;\n        return;\n    }\n    if(mix < 0.01){\n        gl_FragColor = color_b;\n        return;\n    }\n    if(pointInTriangle(v_texCoord, t0_p0, t0_p1, t0_p2) || pointInTriangle(v_texCoord, t1_p0, t1_p1, t1_p2) || pointInTriangle(v_texCoord, t2_p0, t2_p1, t2_p2) || pointInTriangle(v_texCoord, t3_p0, t3_p1, t3_p2) || pointInTriangle(v_texCoord, t4_p0, t4_p1, t4_p2) || pointInTriangle(v_texCoord, t5_p0, t5_p1, t5_p2) || pointInTriangle(v_texCoord, t6_p0, t6_p1, t6_p2) || pointInTriangle(v_texCoord, t7_p0, t7_p1, t7_p2)){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n"

/***/ }),

/***/ "./src/Definitions/starWipe/starWipe.js":
/*!**********************************************!*\
  !*** ./src/Definitions/starWipe/starWipe.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./starWipe.vert */ "./src/Definitions/starWipe/starWipe.vert"), __webpack_require__(/*! ./starWipe.frag */ "./src/Definitions/starWipe/starWipe.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _starWipe, _starWipe3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _starWipe2 = _interopRequireDefault(_starWipe);

    var _starWipe4 = _interopRequireDefault(_starWipe3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var starWipe = {
        title: "Star Wipe Fade",
        description: "A classic star wipe transistion. Typically used as a transistion.",
        vertexShader: _starWipe2.default,
        fragmentShader: _starWipe4.default,
        properties: {
            mix: { type: "uniform", value: 1.0 }
        },
        inputs: ["u_image_a", "u_image_b"]
    };

    exports.default = starWipe;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/starWipe/starWipe.vert":
/*!************************************************!*\
  !*** ./src/Definitions/starWipe/starWipe.vert ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/staticDissolve/staticDissolve.frag":
/*!************************************************************!*\
  !*** ./src/Definitions/staticDissolve/staticDissolve.frag ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nuniform float currentTime;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nfloat rand(vec2 co, float currentTime){\n    return fract(sin(dot(co.xy,vec2(12.9898,78.233))+currentTime) * 43758.5453);\n}\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    if (clamp(rand(v_texCoord, currentTime),  0.01, 1.001) > mix){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n"

/***/ }),

/***/ "./src/Definitions/staticDissolve/staticDissolve.js":
/*!**********************************************************!*\
  !*** ./src/Definitions/staticDissolve/staticDissolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./staticDissolve.vert */ "./src/Definitions/staticDissolve/staticDissolve.vert"), __webpack_require__(/*! ./staticDissolve.frag */ "./src/Definitions/staticDissolve/staticDissolve.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _staticDissolve, _staticDissolve3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _staticDissolve2 = _interopRequireDefault(_staticDissolve);

    var _staticDissolve4 = _interopRequireDefault(_staticDissolve3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var staticDissolve = {
        title: "Static Dissolve",
        description: "A static dissolve effect. Typically used as a transistion.",
        vertexShader: _staticDissolve2.default,
        fragmentShader: _staticDissolve4.default,
        properties: {
            mix: { type: "uniform", value: 0.0 }
        },
        inputs: ["u_image_a", "u_image_b"]
    };

    exports.default = staticDissolve;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/staticDissolve/staticDissolve.vert":
/*!************************************************************!*\
  !*** ./src/Definitions/staticDissolve/staticDissolve.vert ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/staticEffect/staticEffect.frag":
/*!********************************************************!*\
  !*** ./src/Definitions/staticEffect/staticEffect.frag ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float currentTime;\nuniform float amount;\nvarying vec2 v_texCoord;\nuniform vec3 weight;\nfloat rand(vec2 co, float currentTime){\n    return fract(sin(dot(co.xy,vec2(12.9898,78.233))+currentTime) * 43758.5453);\n}\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    color[0] = color[0] + (2.0*(clamp(rand(v_texCoord, currentTime),  0.01, 1.001)-0.5)) * weight[0] * amount;\n    color[1] = color[1] + (2.0*(clamp(rand(v_texCoord, currentTime),  0.01, 1.001)-0.5)) * weight[1] * amount;\n    color[2] = color[2] + (2.0*(clamp(rand(v_texCoord, currentTime),  0.01, 1.001)-0.5)) * weight[2] *amount;\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/staticEffect/staticEffect.js":
/*!******************************************************!*\
  !*** ./src/Definitions/staticEffect/staticEffect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./staticEffect.vert */ "./src/Definitions/staticEffect/staticEffect.vert"), __webpack_require__(/*! ./staticEffect.frag */ "./src/Definitions/staticEffect/staticEffect.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _staticEffect, _staticEffect3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _staticEffect2 = _interopRequireDefault(_staticEffect);

    var _staticEffect4 = _interopRequireDefault(_staticEffect3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var staticEffect = {
        title: "Static",
        description: "A static effect to add pseudo random noise to a video",
        vertexShader: _staticEffect2.default,
        fragmentShader: _staticEffect4.default,
        properties: {
            weight: { type: "uniform", value: [1.0, 1.0, 1.0] },
            amount: { type: "uniform", value: 1.0 }
        },
        inputs: ["u_image"]
    };

    exports.default = staticEffect;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/staticEffect/staticEffect.vert":
/*!********************************************************!*\
  !*** ./src/Definitions/staticEffect/staticEffect.vert ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/stereoViewer/stereoViewer.frag":
/*!********************************************************!*\
  !*** ./src/Definitions/stereoViewer/stereoViewer.frag ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\nuniform float zoom;\nuniform float corner_radius;\n\nconst vec4 black = vec4(0.0, 0.0, 0.0, 1.0);\nconst vec2 c00 = vec2(0.0, 0.0);\nconst vec2 c01 = vec2(0.0, 1.0);\nconst vec2 c11 = vec2(1.0, 1.0);\nconst vec2 c10 = vec2(1.0, 0.0);\n\nbool in_corner(vec2 p, vec2 corner, vec2 radius) {\n  vec2 axis = (c11 - corner) - corner;\n  p = p - (corner + axis * radius);\n  p *= axis / radius;\n  return (p.x > 0.0 && p.y > -1.0) || (p.y > 0.0 && p.x > -1.0) || dot(p, p) < 1.0;\n}\n\nbool test_rounded_mask(vec2 p, vec2 corner_size) {\n  return\n      in_corner(p, c00, corner_size) &&\n      in_corner(p, c01, corner_size) &&\n      in_corner(p, c10, corner_size) &&\n      in_corner(p, c11, corner_size);\n}\n\nfloat dis_corner(vec2 p, vec2 corner, vec2 radius) {\n  vec2 axis = (c11 - corner) - corner;\n  p = p - (corner + axis * radius);\n  p *= axis / radius;\n\n  const float blur = 16.0;\n  vec2 step = vec2(1.0)/resolution;\n  float sblur = min(step.x, step.y)*blur;\n  float alpha = ((p.x > 0.0 && p.y > -1.0) || (p.y > 0.0 && p.x > -1.0) || dot(p, p) < 1.0)?1.0:-1.0;\n  if (p.x > 0.0 && p.y > -1.0 && p.y < -(1.0-sblur)) {\n    alpha = (1.0 + p.y)/sblur;\n  }\n\n  if (p.y > 0.0 && p.x > -1.0 && p.x < -(1.0-sblur)) {\n    alpha = (1.0 + p.x)/(sblur);\n  }\n\n  const float PI = 3.14159265358979323846;\n\n  float d = dot(p, p);\n  float m = sblur/1.41421356;\n  float angle = atan(p.y, p.x);\n  if (d < 1.0 && d > (1.0-m) && angle < -PI/2.0) {\n    alpha = (1.0-d)/m;\n  }\n\n  return alpha;\n}\n\nfloat test_rounded(vec2 p, vec2 corner_size) {\n      float alpha0 = dis_corner(p, c00, corner_size);\n      float alpha1 = dis_corner(p, c01, corner_size);\n      float alpha2 = dis_corner(p, c10, corner_size);\n      float alpha3 = dis_corner(p, c11, corner_size);\n      if (alpha0 < 0.0 || alpha1 < 0.0 || alpha2 < 0.0 || alpha3 < 0.0) {\n        return -1.0;\n      }\n\n      return alpha0*alpha1*alpha2*alpha3;\n}\n\nvec4 screen(vec4 a, vec4 b) {\n  return 1.0 - (1.0 - a) * (1.0 -b);\n}\n\nvec4 unscreen(vec4 c) {\n  return 1.0 - sqrt(1.0 - c);\n}\n\nvec4 sample_with_corners(sampler2D tex, vec2 p, vec2 corner_size) {\n  p = (p - 0.5) / zoom + 0.5;\n  \n  float alpha = test_rounded(p, corner_size);\n  if (alpha < 0.0) {\n    return black;\n  }\n  vec4 color = mix(black, texture2D(tex, p), alpha);\n  return unscreen(color);\n}\n\nvec4 simple_sample_with_corners(sampler2D tex, vec2 p, vec2 corner_size, float zoom_amt) {\n  p = (p - 0.5) / (1.0 - zoom_amt + zoom * zoom_amt) + 0.5;\n  \n  float alpha = test_rounded(p, corner_size);\n  if (alpha < 0.0) {\n    return black;\n  }\n  return mix(black, texture2D(tex, p), alpha);\n}\n\nmat3 rotate2d(float angle, float aspect) {\n  float s = sin(angle);\n  float c = cos(angle);\n  return mat3(\n    c, s ,0.0,\n    -s, c, 0.0,\n    0.0, 0.0, 1.0);\n}\n\nmat3 translate2d(float x, float y) {\n  return mat3(\n    1.0, 0.0, 0,\n    0.0, 1.0, 0,\n    -x, -y, 1.0);\n}\n\nmat3 scale2d(float x, float y) {\n  return mat3(\n    x, 0.0, 0,\n    0.0, y, 0,\n    0, 0, 1.0);\n}\n\nvec4 get_cross_rotated(vec3 p3, float angle, vec2 corner_size, float aspect) {\n  angle = angle * angle;\n  angle /= 2.4;\n\n  mat3 center_and_scale = translate2d(-0.5, -0.5) * scale2d(1.0, aspect);\n  mat3 unscale_and_uncenter = scale2d(1.0, 1.0/aspect) * translate2d(0.5,0.5);\n  mat3 slide_left = translate2d(-2.0,0.0);\n  mat3 slide_right = translate2d(2.0,0.0);\n  mat3 rotate = rotate2d(angle, aspect);\n\n  mat3 op_a = center_and_scale * slide_right * rotate * slide_left * unscale_and_uncenter;\n  mat3 op_b = center_and_scale * slide_left * rotate * slide_right * unscale_and_uncenter;\n\n  vec4 a = sample_with_corners(from, (op_a * p3).xy, corner_size);\n  vec4 b = sample_with_corners(from, (op_b * p3).xy, corner_size);\n\n  return screen(a, b);\n}\n\nvec4 get_cross_masked(vec3 p3, float angle, vec2 corner_size, float aspect) {\n  angle = 1.0 - angle;\n  angle = angle * angle;\n  angle /= 2.4;\n\n  vec4 img;\n\n  mat3 center_and_scale = translate2d(-0.5, -0.5) * scale2d(1.0, aspect);\n  mat3 unscale_and_uncenter = scale2d(1.0 / zoom, 1.0 / (zoom * aspect)) * translate2d(0.5,0.5);\n  mat3 slide_left = translate2d(-2.0,0.0);\n  mat3 slide_right = translate2d(2.0,0.0);\n  mat3 rotate = rotate2d(angle, aspect);\n\n  mat3 op_a = center_and_scale * slide_right * rotate * slide_left * unscale_and_uncenter;\n  mat3 op_b = center_and_scale * slide_left * rotate * slide_right * unscale_and_uncenter;\n\n  float alpha_a = test_rounded((op_a * p3).xy, corner_size);\n  float alpha_b = test_rounded((op_b * p3).xy, corner_size);\n  if (alpha_a > 0.0 || alpha_b > 0.0) {\n    img = sample_with_corners(to, p3.xy, corner_size);\n    vec4 color = screen(alpha_a > 0.0 ? mix(black, img, alpha_a) : black, alpha_b > 0.0 ? mix(black, img, alpha_b) : black);\n    return color;\n  }\n  else {\n    return black;\n  }\n}\n\nvoid main() {\n  float a;\n  vec2 p = gl_FragCoord.xy / resolution.xy;\n  vec3 p3 = vec3(p.xy, 1.0); \n\n  float aspect = resolution.x / resolution.y;\n  vec2 corner_size = vec2(corner_radius / aspect, corner_radius);\n\n  if (progress <= 0.0) {\n    gl_FragColor = texture2D(from, p);\n  } else if (progress < 0.1) {\n    a = progress / 0.1;\n    gl_FragColor = simple_sample_with_corners(from, p, corner_size * a, a);\n  } else if (progress < 0.48) {\n    a = (progress - 0.1)/0.38;\n    gl_FragColor = get_cross_rotated(p3, a, corner_size, aspect);\n  } else if (progress < 0.9) {\n    gl_FragColor = get_cross_masked(p3, (progress - 0.52)/0.38, corner_size, aspect);\n  } else if (progress < 1.0) {\n    a = (1.0 - progress) / 0.1;\n    gl_FragColor = simple_sample_with_corners(to, p, corner_size * a, a);\n  } else {\n    gl_FragColor = texture2D(to, p);\n  }\n}"

/***/ }),

/***/ "./src/Definitions/stereoViewer/stereoViewer.js":
/*!******************************************************!*\
  !*** ./src/Definitions/stereoViewer/stereoViewer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./stereoViewer.vert */ "./src/Definitions/stereoViewer/stereoViewer.vert"), __webpack_require__(/*! ./stereoViewer.frag */ "./src/Definitions/stereoViewer/stereoViewer.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _stereoViewer, _stereoViewer3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _stereoViewer2 = _interopRequireDefault(_stereoViewer);

    var _stereoViewer4 = _interopRequireDefault(_stereoViewer3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var stereoViewer = {
        title: "stereo viewer",
        description: "A stereo viewer effect. Typically used as a transition.",
        vertexShader: _stereoViewer2.default,
        fragmentShader: _stereoViewer4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] },
            zoom: { type: "uniform", value: 0.88 },
            corner_radius: { type: "uniform", value: 0.22 }
        },
        inputs: ["from", "to"]
    };

    exports.default = stereoViewer;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/stereoViewer/stereoViewer.vert":
/*!********************************************************!*\
  !*** ./src/Definitions/stereoViewer/stereoViewer.vert ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/toColorAndBackFade/toColorAndBackFade.frag":
/*!********************************************************************!*\
  !*** ./src/Definitions/toColorAndBackFade/toColorAndBackFade.frag ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nuniform vec4 color;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    float mix_amount = (mix *2.0) - 1.0;\n    if(mix_amount < 0.0){\n        gl_FragColor = abs(mix_amount) * color_a + (1.0 - abs(mix_amount)) * color;\n    } else {\n        gl_FragColor = mix_amount * color_b + (1.0 - mix_amount) * color;\n    }\n}\n"

/***/ }),

/***/ "./src/Definitions/toColorAndBackFade/toColorAndBackFade.js":
/*!******************************************************************!*\
  !*** ./src/Definitions/toColorAndBackFade/toColorAndBackFade.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./toColorAndBackFade.vert */ "./src/Definitions/toColorAndBackFade/toColorAndBackFade.vert"), __webpack_require__(/*! ./toColorAndBackFade.frag */ "./src/Definitions/toColorAndBackFade/toColorAndBackFade.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _toColorAndBackFade, _toColorAndBackFade3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _toColorAndBackFade2 = _interopRequireDefault(_toColorAndBackFade);

    var _toColorAndBackFade4 = _interopRequireDefault(_toColorAndBackFade3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var toColorAndBackFade = {
        title: "To Color And Back Fade",
        description: "A fade to black and back effect. Setting mix to 0.5 is a fully solid color frame. Typically used as a transistion.",
        vertexShader: _toColorAndBackFade2.default,
        fragmentShader: _toColorAndBackFade4.default,
        properties: {
            mix: { type: "uniform", value: 0.0 },
            color: { type: "uniform", value: [0.0, 0.0, 0.0, 0.0] }
        },
        inputs: ["u_image_a", "u_image_b"]
    };
    exports.default = toColorAndBackFade;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/toColorAndBackFade/toColorAndBackFade.vert":
/*!********************************************************************!*\
  !*** ./src/Definitions/toColorAndBackFade/toColorAndBackFade.vert ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/verticalBlur/verticalBlur.frag":
/*!********************************************************!*\
  !*** ./src/Definitions/verticalBlur/verticalBlur.frag ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvarying vec2 v_blurTexCoords[14];\nvoid main(){\n    gl_FragColor = vec4(0.0);\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 0])*0.0044299121055113265;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 1])*0.00895781211794;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 2])*0.0215963866053;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 3])*0.0443683338718;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 4])*0.0776744219933;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 5])*0.115876621105;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 6])*0.147308056121;\n    gl_FragColor += texture2D(u_image, v_texCoord         )*0.159576912161;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 7])*0.147308056121;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 8])*0.115876621105;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 9])*0.0776744219933;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[10])*0.0443683338718;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[11])*0.0215963866053;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[12])*0.00895781211794;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[13])*0.0044299121055113265;\n}\n"

/***/ }),

/***/ "./src/Definitions/verticalBlur/verticalBlur.js":
/*!******************************************************!*\
  !*** ./src/Definitions/verticalBlur/verticalBlur.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./verticalBlur.vert */ "./src/Definitions/verticalBlur/verticalBlur.vert"), __webpack_require__(/*! ./verticalBlur.frag */ "./src/Definitions/verticalBlur/verticalBlur.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _verticalBlur, _verticalBlur3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _verticalBlur2 = _interopRequireDefault(_verticalBlur);

    var _verticalBlur4 = _interopRequireDefault(_verticalBlur3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var verticalBlur = {
        title: "Vertical Blur",
        description: "A vertical blur effect. Adpated from http://xissburg.com/faster-gaussian-blur-in-glsl/",
        vertexShader: _verticalBlur2.default,
        fragmentShader: _verticalBlur4.default,
        properties: {
            blurAmount: { type: "uniform", value: 1.0 }
        },
        inputs: ["u_image"]
    };

    exports.default = verticalBlur;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/verticalBlur/verticalBlur.vert":
/*!********************************************************!*\
  !*** ./src/Definitions/verticalBlur/verticalBlur.vert ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nuniform float blurAmount;\nvarying vec2 v_blurTexCoords[14];\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n    v_blurTexCoords[ 0] = v_texCoord + vec2(0.0,-0.028 * blurAmount);\n    v_blurTexCoords[ 1] = v_texCoord + vec2(0.0,-0.024 * blurAmount);\n    v_blurTexCoords[ 2] = v_texCoord + vec2(0.0,-0.020 * blurAmount);\n    v_blurTexCoords[ 3] = v_texCoord + vec2(0.0,-0.016 * blurAmount);\n    v_blurTexCoords[ 4] = v_texCoord + vec2(0.0,-0.012 * blurAmount);\n    v_blurTexCoords[ 5] = v_texCoord + vec2(0.0,-0.008 * blurAmount);\n    v_blurTexCoords[ 6] = v_texCoord + vec2(0.0,-0.004 * blurAmount);\n    v_blurTexCoords[ 7] = v_texCoord + vec2(0.0, 0.004 * blurAmount);\n    v_blurTexCoords[ 8] = v_texCoord + vec2(0.0, 0.008 * blurAmount);\n    v_blurTexCoords[ 9] = v_texCoord + vec2(0.0, 0.012 * blurAmount);\n    v_blurTexCoords[10] = v_texCoord + vec2(0.0, 0.016 * blurAmount);\n    v_blurTexCoords[11] = v_texCoord + vec2(0.0, 0.020 * blurAmount);\n    v_blurTexCoords[12] = v_texCoord + vec2(0.0, 0.024 * blurAmount);\n    v_blurTexCoords[13] = v_texCoord + vec2(0.0, 0.028 * blurAmount);\n}\n"

/***/ }),

/***/ "./src/Definitions/verticalWipe/verticalWipe.frag":
/*!********************************************************!*\
  !*** ./src/Definitions/verticalWipe/verticalWipe.frag ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    if (v_texCoord[1] > mix){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n"

/***/ }),

/***/ "./src/Definitions/verticalWipe/verticalWipe.js":
/*!******************************************************!*\
  !*** ./src/Definitions/verticalWipe/verticalWipe.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./verticalWipe.vert */ "./src/Definitions/verticalWipe/verticalWipe.vert"), __webpack_require__(/*! ./verticalWipe.frag */ "./src/Definitions/verticalWipe/verticalWipe.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _verticalWipe, _verticalWipe3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _verticalWipe2 = _interopRequireDefault(_verticalWipe);

    var _verticalWipe4 = _interopRequireDefault(_verticalWipe3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var verticalWipe = {
        title: "vertical Wipe",
        description: "A vertical wipe effect. Typically used as a transistion.",
        vertexShader: _verticalWipe2.default,
        fragmentShader: _verticalWipe4.default,
        properties: {
            mix: { type: "uniform", value: 0.0 }
        },
        inputs: ["u_image_a", "u_image_b"]
    };

    exports.default = verticalWipe;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/verticalWipe/verticalWipe.vert":
/*!********************************************************!*\
  !*** ./src/Definitions/verticalWipe/verticalWipe.vert ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/wind/wind.frag":
/*!****************************************!*\
  !*** ./src/Definitions/wind/wind.frag ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\nuniform float size; \n\nfloat rand (vec2 co) {\n  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution.xy;\n  float r = rand(vec2(0, uv.y));\n  float m = smoothstep(0.0, -size, uv.x*(1.0-size) + size*r - (progress * (1.0 + size)));\n  gl_FragColor = mix(\n    texture2D(from, uv),\n    texture2D(to, uv),\n    m\n  );\n}\n"

/***/ }),

/***/ "./src/Definitions/wind/wind.js":
/*!**************************************!*\
  !*** ./src/Definitions/wind/wind.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./wind.vert */ "./src/Definitions/wind/wind.vert"), __webpack_require__(/*! ./wind.frag */ "./src/Definitions/wind/wind.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _wind, _wind3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _wind2 = _interopRequireDefault(_wind);

    var _wind4 = _interopRequireDefault(_wind3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var slide = {
        title: "wind",
        description: "A wind effect. Typically used as a transition.",
        vertexShader: _wind2.default,
        fragmentShader: _wind4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] },
            size: { type: "uniform", value: 0.2 }
        },
        inputs: ["from", "to"]
    };

    exports.default = slide;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/wind/wind.vert":
/*!****************************************!*\
  !*** ./src/Definitions/wind/wind.vert ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/windowBlinds/windowBlinds.frag":
/*!********************************************************!*\
  !*** ./src/Definitions/windowBlinds/windowBlinds.frag ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\n\nvoid main () {\n  vec2 uv = gl_FragCoord.xy / resolution.xy;\n  float t = progress;\n\n  if (mod(floor(uv.y*100.*progress),2.)==0.)\n    t*=2.-.5;\n\n  gl_FragColor = mix(texture2D(from, uv), texture2D(to, uv), mix(t, progress, smoothstep(0.8, 1.0, progress)));\n}\n"

/***/ }),

/***/ "./src/Definitions/windowBlinds/windowBlinds.js":
/*!******************************************************!*\
  !*** ./src/Definitions/windowBlinds/windowBlinds.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./windowBlinds.vert */ "./src/Definitions/windowBlinds/windowBlinds.vert"), __webpack_require__(/*! ./windowBlinds.frag */ "./src/Definitions/windowBlinds/windowBlinds.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _windowBlinds, _windowBlinds3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _windowBlinds2 = _interopRequireDefault(_windowBlinds);

    var _windowBlinds4 = _interopRequireDefault(_windowBlinds3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var windowBlinds = {
        title: "window blinds",
        description: "A window blinds effect. Typically used as a transition.",
        vertexShader: _windowBlinds2.default,
        fragmentShader: _windowBlinds4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] }
        },
        inputs: ["from", "to"]
    };

    exports.default = windowBlinds;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/windowBlinds/windowBlinds.vert":
/*!********************************************************!*\
  !*** ./src/Definitions/windowBlinds/windowBlinds.vert ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/windowSlice/windowSlice.frag":
/*!******************************************************!*\
  !*** ./src/Definitions/windowSlice/windowSlice.frag ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\nuniform sampler2D from, to;\nuniform float progress;\nuniform vec2 resolution;\n\nconst float count = 10.0;\nconst float smoothness = 0.5;\n\nvoid main () {\n  vec2 p = gl_FragCoord.xy / resolution.xy;\n  float pr = smoothstep(-smoothness, 0.0, p.x - progress * (1.0 + smoothness));\n  float s = step(pr, fract(count * p.x));\n  gl_FragColor = mix(texture2D(from, p), texture2D(to, p), s);\n}\n"

/***/ }),

/***/ "./src/Definitions/windowSlice/windowSlice.js":
/*!****************************************************!*\
  !*** ./src/Definitions/windowSlice/windowSlice.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./windowSlice.vert */ "./src/Definitions/windowSlice/windowSlice.vert"), __webpack_require__(/*! ./windowSlice.frag */ "./src/Definitions/windowSlice/windowSlice.frag")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _windowSlice, _windowSlice3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _windowSlice2 = _interopRequireDefault(_windowSlice);

    var _windowSlice4 = _interopRequireDefault(_windowSlice3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var windowSlice = {
        title: "window slice",
        description: "A window slice effect. Typically used as a transition.",
        vertexShader: _windowSlice2.default,
        fragmentShader: _windowSlice4.default,
        properties: {
            progress: { type: "uniform", value: 0.0 },
            resolution: { type: "uniform", value: [480.0, 270.0] }
        },
        inputs: ["from", "to"]
    };

    exports.default = windowSlice;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/Definitions/windowSlice/windowSlice.vert":
/*!******************************************************!*\
  !*** ./src/Definitions/windowSlice/windowSlice.vert ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/DestinationNode/destinationnode.frag":
/*!**************************************************!*\
  !*** ./src/DestinationNode/destinationnode.frag ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvarying float v_progress;\nvoid main(){\n    gl_FragColor = texture2D(u_image, v_texCoord);\n}\n"

/***/ }),

/***/ "./src/DestinationNode/destinationnode.js":
/*!************************************************!*\
  !*** ./src/DestinationNode/destinationnode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../ProcessingNodes/processingnode */ "./src/ProcessingNodes/processingnode.js"), __webpack_require__(/*! ./destinationnode.frag */ "./src/DestinationNode/destinationnode.frag"), __webpack_require__(/*! ./destinationnode.vert */ "./src/DestinationNode/destinationnode.vert")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports, _processingnode, _destinationnode, _destinationnode3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.DESTINATIONTYPE = undefined;

    var _processingnode2 = _interopRequireDefault(_processingnode);

    var _destinationnode2 = _interopRequireDefault(_destinationnode);

    var _destinationnode4 = _interopRequireDefault(_destinationnode3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var TYPE = "DestinationNode";

    var DestinationNode = function (_ProcessingNode) {
        _inherits(DestinationNode, _ProcessingNode);

        /**
         * Initialise an instance of a DestinationNode.
         *
         * There should only be a single instance of a DestinationNode per VideoContext instance. An VideoContext's destination can be accessed like so: videoContext.desitnation.
         *
         * You should not instantiate this directly.
         */
        function DestinationNode(gl, renderGraph) {
            _classCallCheck(this, DestinationNode);

            var definition = {
                fragmentShader: _destinationnode2.default,
                vertexShader: _destinationnode4.default,
                properties: {},
                inputs: ["u_image"]
            };

            var _this = _possibleConstructorReturn(this, (DestinationNode.__proto__ || Object.getPrototypeOf(DestinationNode)).call(this, gl, renderGraph, definition, definition.inputs, false));

            _this._displayName = TYPE;
            return _this;
        }

        _createClass(DestinationNode, [{
            key: "_render",
            value: function _render() {
                var _this2 = this;

                var gl = this._gl;

                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
                gl.enable(gl.BLEND);
                gl.clearColor(0, 0, 0, 0.0); // green;
                gl.clear(gl.COLOR_BUFFER_BIT);

                this.inputs.forEach(function (node) {
                    _get(DestinationNode.prototype.__proto__ || Object.getPrototypeOf(DestinationNode.prototype), "_render", _this2).call(_this2);
                    //map the input textures input the node
                    var texture = node._texture;

                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = _this2._shaderInputsTextureUnitMapping[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var mapping = _step.value;

                            gl.activeTexture(mapping.textureUnit);
                            gl.uniform1i(mapping.location, mapping.textureUnitIndex);
                            gl.bindTexture(gl.TEXTURE_2D, texture);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    gl.drawArrays(gl.TRIANGLES, 0, 6);
                });
            }
        }]);

        return DestinationNode;
    }(_processingnode2.default);

    exports.DESTINATIONTYPE = TYPE;
    exports.default = DestinationNode;
});

/***/ }),

/***/ "./src/DestinationNode/destinationnode.vert":
/*!**************************************************!*\
  !*** ./src/DestinationNode/destinationnode.vert ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/ProcessingNodes/compositingnode.js":
/*!************************************************!*\
  !*** ./src/ProcessingNodes/compositingnode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./processingnode */ "./src/ProcessingNodes/processingnode.js"), __webpack_require__(/*! ../utils.js */ "./src/utils.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports, _processingnode, _utils) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.COMPOSITINGTYPE = undefined;

    var _processingnode2 = _interopRequireDefault(_processingnode);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var TYPE = "CompositingNode";

    var CompositingNode = function (_ProcessingNode) {
        _inherits(CompositingNode, _ProcessingNode);

        /**
         * Initialise an instance of a Compositing Node. You should not instantiate this directly, but use VideoContest.createCompositingNode().
         */
        function CompositingNode(gl, renderGraph, definition) {
            _classCallCheck(this, CompositingNode);

            var placeholderTexture = (0, _utils.createElementTexture)(gl);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));

            var _this = _possibleConstructorReturn(this, (CompositingNode.__proto__ || Object.getPrototypeOf(CompositingNode)).call(this, gl, renderGraph, definition, definition.inputs, false));

            _this._placeholderTexture = placeholderTexture;
            _this._displayName = TYPE;
            return _this;
        }

        _createClass(CompositingNode, [{
            key: "_render",
            value: function _render() {
                var _this2 = this;

                var gl = this._gl;
                gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._texture, 0);
                gl.clearColor(0, 0, 0, 0); // green;
                gl.clear(gl.COLOR_BUFFER_BIT);
                gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

                this.inputs.forEach(function (node) {
                    if (node === undefined) return;
                    _get(CompositingNode.prototype.__proto__ || Object.getPrototypeOf(CompositingNode.prototype), "_render", _this2).call(_this2);

                    //map the input textures input the node
                    var texture = node._texture;

                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = _this2._shaderInputsTextureUnitMapping[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var mapping = _step.value;

                            gl.activeTexture(mapping.textureUnit);
                            gl.uniform1i(mapping.location, mapping.textureUnitIndex);
                            gl.bindTexture(gl.TEXTURE_2D, texture);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    gl.drawArrays(gl.TRIANGLES, 0, 6);
                });

                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            }
        }]);

        return CompositingNode;
    }(_processingnode2.default);

    exports.COMPOSITINGTYPE = TYPE;
    exports.default = CompositingNode;
});

/***/ }),

/***/ "./src/ProcessingNodes/effectnode.js":
/*!*******************************************!*\
  !*** ./src/ProcessingNodes/effectnode.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./processingnode */ "./src/ProcessingNodes/processingnode.js"), __webpack_require__(/*! ../utils.js */ "./src/utils.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports, _processingnode, _utils) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.EFFECTYPE = undefined;

    var _processingnode2 = _interopRequireDefault(_processingnode);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var TYPE = "EffectNode";

    var EffectNode = function (_ProcessingNode) {
        _inherits(EffectNode, _ProcessingNode);

        /**
         * Initialise an instance of an EffectNode. You should not instantiate this directly, but use VideoContest.createEffectNode().
         */
        function EffectNode(gl, renderGraph, definition) {
            _classCallCheck(this, EffectNode);

            var placeholderTexture = (0, _utils.createElementTexture)(gl);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));

            var _this = _possibleConstructorReturn(this, (EffectNode.__proto__ || Object.getPrototypeOf(EffectNode)).call(this, gl, renderGraph, definition, definition.inputs, true));

            _this._placeholderTexture = placeholderTexture;
            _this._displayName = TYPE;
            return _this;
        }

        _createClass(EffectNode, [{
            key: "_render",
            value: function _render() {
                var gl = this._gl;
                gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._texture, 0);
                gl.clearColor(0, 0, 0, 0); // green;
                gl.clear(gl.COLOR_BUFFER_BIT);
                gl.blendFunc(gl.ONE, gl.ZERO);

                _get(EffectNode.prototype.__proto__ || Object.getPrototypeOf(EffectNode.prototype), "_render", this).call(this);

                var inputs = this._renderGraph.getInputsForNode(this);

                for (var i = 0; i < this._shaderInputsTextureUnitMapping.length; i++) {
                    var inputTexture = this._placeholderTexture;
                    var textureUnit = this._shaderInputsTextureUnitMapping[i].textureUnit;
                    if (i < inputs.length && inputs[i] !== undefined) {
                        inputTexture = inputs[i]._texture;
                    }

                    gl.activeTexture(textureUnit);
                    gl.uniform1i(this._shaderInputsTextureUnitMapping[i].location, this._shaderInputsTextureUnitMapping[i].textureUnitIndex);
                    gl.bindTexture(gl.TEXTURE_2D, inputTexture);
                }
                gl.drawArrays(gl.TRIANGLES, 0, 6);
                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            }
        }]);

        return EffectNode;
    }(_processingnode2.default);

    exports.EFFECTYPE = TYPE;
    exports.default = EffectNode;
});

/***/ }),

/***/ "./src/ProcessingNodes/processingnode.js":
/*!***********************************************!*\
  !*** ./src/ProcessingNodes/processingnode.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../graphnode */ "./src/graphnode.js"), __webpack_require__(/*! ../utils.js */ "./src/utils.js"), __webpack_require__(/*! ../exceptions.js */ "./src/exceptions.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports, _graphnode, _utils, _exceptions) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.PROCESSINGTYPE = undefined;

    var _graphnode2 = _interopRequireDefault(_graphnode);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var TYPE = "ProcessingNode";

    var ProcessingNode = function (_GraphNode) {
        _inherits(ProcessingNode, _GraphNode);

        /**
         * Initialise an instance of a ProcessingNode.
         *
         * This class is not used directly, but is extended to create CompositingNodes, TransitionNodes, and EffectNodes.
         */
        function ProcessingNode(gl, renderGraph, definition, inputNames, limitConnections) {
            _classCallCheck(this, ProcessingNode);

            var _this = _possibleConstructorReturn(this, (ProcessingNode.__proto__ || Object.getPrototypeOf(ProcessingNode)).call(this, gl, renderGraph, inputNames, limitConnections));

            _this._vertexShader = (0, _utils.compileShader)(gl, definition.vertexShader, gl.VERTEX_SHADER);
            _this._fragmentShader = (0, _utils.compileShader)(gl, definition.fragmentShader, gl.FRAGMENT_SHADER);
            _this._definition = definition;
            _this._properties = {}; //definition.properties;

            function isFunction(val) {
                return val && {}.toString.call(val) === "[object Function]";
            }

            //copy definition properties
            for (var propertyName in definition.properties) {
                if (isFunction(definition.properties[propertyName])) {
                    _this[propertyName] = definition.properties[propertyName];
                } else {
                    var propertyValue = definition.properties[propertyName].value;
                    //if an array then shallow copy it
                    if (Object.prototype.toString.call(propertyValue) === "[object Array]") {
                        propertyValue = definition.properties[propertyName].value.slice();
                    }
                    var propertyType = definition.properties[propertyName].type;
                    _this._properties[propertyName] = {
                        type: propertyType,
                        value: propertyValue
                    };
                }
            }

            _this._shaderInputsTextureUnitMapping = [];
            _this._maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
            _this._boundTextureUnits = 0;
            _this._texture = (0, _utils.createElementTexture)(gl);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.canvas.width, gl.canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
            //compile the shader
            _this._program = (0, _utils.createShaderProgram)(gl, _this._vertexShader, _this._fragmentShader);

            //create and setup the framebuffer
            _this._framebuffer = gl.createFramebuffer();
            gl.bindFramebuffer(gl.FRAMEBUFFER, _this._framebuffer);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, _this._texture, 0);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);

            //create properties on this object for the passed properties

            var _loop = function _loop(_propertyName) {
                Object.defineProperty(_this, _propertyName, {
                    get: function get() {
                        return this._properties[_propertyName].value;
                    },
                    set: function set(passedValue) {
                        this._properties[_propertyName].value = passedValue;
                    }
                });
            };

            for (var _propertyName in _this._properties) {
                _loop(_propertyName);
            }

            //create texutres for any texture properties
            for (var _propertyName2 in _this._properties) {
                var _propertyValue = _this._properties[_propertyName2].value;
                if (_propertyValue instanceof Image) {
                    _this._properties[_propertyName2].texture = (0, _utils.createElementTexture)(gl);
                    _this._properties[_propertyName2].textureUnit = gl.TEXTURE0 + _this._boundTextureUnits;
                    _this._properties[_propertyName2].textureUnitIndex = _this._boundTextureUnits;
                    _this._boundTextureUnits += 1;
                    if (_this._boundTextureUnits > _this._maxTextureUnits) {
                        throw new _exceptions.RenderException("Trying to bind more than available textures units to shader");
                    }
                }
            }

            // calculate texture units for input textures
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = definition.inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var inputName = _step.value;

                    _this._shaderInputsTextureUnitMapping.push({
                        name: inputName,
                        textureUnit: gl.TEXTURE0 + _this._boundTextureUnits,
                        textureUnitIndex: _this._boundTextureUnits,
                        location: gl.getUniformLocation(_this._program, inputName)
                    });
                    _this._boundTextureUnits += 1;
                    if (_this._boundTextureUnits > _this._maxTextureUnits) {
                        throw new _exceptions.RenderException("Trying to bind more than available textures units to shader");
                    }
                }

                //find the locations of the properties in the compiled shader
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            for (var _propertyName3 in _this._properties) {
                if (_this._properties[_propertyName3].type === "uniform") {
                    _this._properties[_propertyName3].location = _this._gl.getUniformLocation(_this._program, _propertyName3);
                }
            }
            _this._currentTimeLocation = _this._gl.getUniformLocation(_this._program, "currentTime");
            _this._currentTime = 0;

            //Other setup
            var positionLocation = gl.getAttribLocation(_this._program, "a_position");
            var buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0]), gl.STATIC_DRAW);
            var texCoordLocation = gl.getAttribLocation(_this._program, "a_texCoord");
            gl.enableVertexAttribArray(texCoordLocation);
            gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
            _this._displayName = TYPE;
            return _this;
        }

        /**
         * Sets the passed processing node property to the passed value.
         * @param {string} name - The name of the processing node parameter to modify.
         * @param {Object} value - The value to set it to.
         *
         * @example
         * var ctx = new VideoContext();
         * var monoNode = ctx.effect(VideoContext.DEFINITIONS.MONOCHROME);
         * monoNode.setProperty("inputMix", [1.0,0.0,0.0]); //Just use red channel
         */


        _createClass(ProcessingNode, [{
            key: "setProperty",
            value: function setProperty(name, value) {
                this._properties[name].value = value;
            }
        }, {
            key: "getProperty",
            value: function getProperty(name) {
                return this._properties[name].value;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                _get(ProcessingNode.prototype.__proto__ || Object.getPrototypeOf(ProcessingNode.prototype), "destroy", this).call(this);
                //destrpy texutres for any texture properties
                for (var propertyName in this._properties) {
                    var propertyValue = this._properties[propertyName].value;
                    if (propertyValue instanceof Image) {
                        this._gl.deleteTexture(this._properties[propertyName].texture);
                        this._texture = undefined;
                    }
                }
                //Destroy main
                this._gl.deleteTexture(this._texture);
                this._texture = undefined;
                //Detach shaders
                this._gl.detachShader(this._program, this._vertexShader);
                this._gl.detachShader(this._program, this._fragmentShader);
                //Delete shaders
                this._gl.deleteShader(this._vertexShader);
                this._gl.deleteShader(this._fragmentShader);
                //Delete program
                this._gl.deleteProgram(this._program);
                //Delete Framebuffer
                this._gl.deleteFramebuffer(this._framebuffer);
            }
        }, {
            key: "_update",
            value: function _update(currentTime) {
                this._currentTime = currentTime;
            }
        }, {
            key: "_seek",
            value: function _seek(currentTime) {
                this._currentTime = currentTime;
            }
        }, {
            key: "_render",
            value: function _render() {
                this._rendered = true;
                var gl = this._gl;
                gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

                gl.useProgram(this._program);

                //upload the default uniforms
                gl.uniform1f(this._currentTimeLocation, parseFloat(this._currentTime));

                for (var propertyName in this._properties) {
                    var propertyValue = this._properties[propertyName].value;
                    var propertyType = this._properties[propertyName].type;
                    var propertyLocation = this._properties[propertyName].location;
                    if (propertyType !== "uniform") continue;

                    if (typeof propertyValue === "number") {
                        gl.uniform1f(propertyLocation, propertyValue);
                    } else if (Object.prototype.toString.call(propertyValue) === "[object Array]") {
                        if (propertyValue.length === 1) {
                            gl.uniform1fv(propertyLocation, propertyValue);
                        } else if (propertyValue.length === 2) {
                            gl.uniform2fv(propertyLocation, propertyValue);
                        } else if (propertyValue.length === 3) {
                            gl.uniform3fv(propertyLocation, propertyValue);
                        } else if (propertyValue.length === 4) {
                            gl.uniform4fv(propertyLocation, propertyValue);
                        } else {
                            console.debug("Shader parameter", propertyName, "is too long an array:", propertyValue);
                        }
                    } else if (propertyValue instanceof Image) {
                        var texture = this._properties[propertyName].texture;
                        var textureUnit = this._properties[propertyName].textureUnit;
                        var textureUnitIndex = this._properties[propertyName].textureUnit;
                        (0, _utils.updateTexture)(gl, texture, propertyValue);

                        gl.activeTexture(textureUnit);
                        gl.uniform1i(propertyLocation, textureUnitIndex);
                        gl.bindTexture(gl.TEXTURE_2D, texture);
                    } else {
                        //TODO - add tests for textures
                        /*gl.activeTexture(gl.TEXTURE0 + textureOffset);
                        gl.uniform1i(parameterLoctation, textureOffset);
                        gl.bindTexture(gl.TEXTURE_2D, textures[textureOffset-1]);*/
                    }
                }
            }
        }]);

        return ProcessingNode;
    }(_graphnode2.default);

    exports.PROCESSINGTYPE = TYPE;
    exports.default = ProcessingNode;
});

/***/ }),

/***/ "./src/ProcessingNodes/transitionnode.js":
/*!***********************************************!*\
  !*** ./src/ProcessingNodes/transitionnode.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./effectnode */ "./src/ProcessingNodes/effectnode.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports, _effectnode) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.TRANSITIONTYPE = undefined;

    var _effectnode2 = _interopRequireDefault(_effectnode);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var TYPE = "TransitionNode";

    var TransitionNode = function (_EffectNode) {
        _inherits(TransitionNode, _EffectNode);

        /**
         * Initialise an instance of a TransitionNode. You should not instantiate this directly, but use VideoContest.createTransitonNode().
         */
        function TransitionNode(gl, renderGraph, definition) {
            _classCallCheck(this, TransitionNode);

            var _this = _possibleConstructorReturn(this, (TransitionNode.__proto__ || Object.getPrototypeOf(TransitionNode)).call(this, gl, renderGraph, definition));

            _this._transitions = {};

            //save a version of the original property values
            _this._initialPropertyValues = {};
            for (var propertyName in _this._properties) {
                _this._initialPropertyValues[propertyName] = _this._properties[propertyName].value;
            }
            _this._displayName = TYPE;
            return _this;
        }

        _createClass(TransitionNode, [{
            key: "_doesTransitionFitOnTimeline",
            value: function _doesTransitionFitOnTimeline(testTransition) {
                if (this._transitions[testTransition.property] === undefined) return true;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this._transitions[testTransition.property][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var transition = _step.value;

                        if (testTransition.start > transition.start && testTransition.start < transition.end) return false;
                        if (testTransition.end > transition.start && testTransition.end < transition.end) return false;
                        if (transition.start > testTransition.start && transition.start < testTransition.end) return false;
                        if (transition.end > testTransition.start && transition.end < testTransition.end) return false;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                return true;
            }
        }, {
            key: "_insertTransitionInTimeline",
            value: function _insertTransitionInTimeline(transition) {
                if (this._transitions[transition.property] === undefined) this._transitions[transition.property] = [];
                this._transitions[transition.property].push(transition);

                this._transitions[transition.property].sort(function (a, b) {
                    return a.start - b.start;
                });
            }
        }, {
            key: "transition",
            value: function transition(startTime, endTime, currentValue, targetValue) {
                var propertyName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "mix";

                var transition = {
                    start: startTime + this._currentTime,
                    end: endTime + this._currentTime,
                    current: currentValue,
                    target: targetValue,
                    property: propertyName
                };
                if (!this._doesTransitionFitOnTimeline(transition)) return false;
                this._insertTransitionInTimeline(transition);
                return true;
            }
        }, {
            key: "transitionAt",
            value: function transitionAt(startTime, endTime, currentValue, targetValue) {
                var propertyName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "mix";

                var transition = {
                    start: startTime,
                    end: endTime,
                    current: currentValue,
                    target: targetValue,
                    property: propertyName
                };
                if (!this._doesTransitionFitOnTimeline(transition)) return false;
                this._insertTransitionInTimeline(transition);
                return true;
            }
        }, {
            key: "clearTransitions",
            value: function clearTransitions(propertyName) {
                if (propertyName === undefined) {
                    this._transitions = {};
                } else {
                    this._transitions[propertyName] = [];
                }
            }
        }, {
            key: "clearTransition",
            value: function clearTransition(propertyName, time) {
                var transitionIndex = undefined;
                for (var i = 0; i < this._transitions[propertyName].length; i++) {
                    var transition = this._transitions[propertyName][i];
                    if (time > transition.start && time < transition.end) {
                        transitionIndex = i;
                    }
                }
                if (transitionIndex !== undefined) {
                    this._transitions[propertyName].splice(transitionIndex, 1);
                    return true;
                }
                return false;
            }
        }, {
            key: "_update",
            value: function _update(currentTime) {
                _get(TransitionNode.prototype.__proto__ || Object.getPrototypeOf(TransitionNode.prototype), "_update", this).call(this, currentTime);
                for (var propertyName in this._transitions) {
                    var value = this[propertyName];
                    if (this._transitions[propertyName].length > 0) {
                        value = this._transitions[propertyName][0].current;
                    }
                    var transitionActive = false;

                    for (var i = 0; i < this._transitions[propertyName].length; i++) {
                        var transition = this._transitions[propertyName][i];
                        if (currentTime > transition.end) {
                            value = transition.target;
                            continue;
                        }

                        if (currentTime > transition.start && currentTime < transition.end) {
                            var difference = transition.target - transition.current;
                            var progress = (this._currentTime - transition.start) / (transition.end - transition.start);
                            transitionActive = true;
                            this[propertyName] = transition.current + difference * progress;
                            break;
                        }
                    }

                    if (!transitionActive) this[propertyName] = value;
                }
            }
        }]);

        return TransitionNode;
    }(_effectnode2.default);

    exports.TRANSITIONTYPE = TYPE;
    exports.default = TransitionNode;
});

/***/ }),

/***/ "./src/SourceNodes/audionode.js":
/*!**************************************!*\
  !*** ./src/SourceNodes/audionode.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./medianode */ "./src/SourceNodes/medianode.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports, _medianode) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AUDIOTYPE = undefined;

    var _medianode2 = _interopRequireDefault(_medianode);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var TYPE = "AudioNode";

    var AudioNode = function (_MediaNode) {
        _inherits(AudioNode, _MediaNode);

        /**
         * Initialise an instance of an AudioNode.
         * This should not be called directly, but created through a call to videoContext.audio();
         */
        function AudioNode() {
            _classCallCheck(this, AudioNode);

            var _this = _possibleConstructorReturn(this, (AudioNode.__proto__ || Object.getPrototypeOf(AudioNode)).apply(this, arguments));

            _this._displayName = TYPE;
            _this._elementType = "audio";
            return _this;
        }

        _createClass(AudioNode, [{
            key: "_update",
            value: function _update(currentTime) {
                _get(AudioNode.prototype.__proto__ || Object.getPrototypeOf(AudioNode.prototype), "_update", this).call(this, currentTime, false);
            }
        }]);

        return AudioNode;
    }(_medianode2.default);

    exports.AUDIOTYPE = TYPE;
    exports.default = AudioNode;
});

/***/ }),

/***/ "./src/SourceNodes/canvasnode.js":
/*!***************************************!*\
  !*** ./src/SourceNodes/canvasnode.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./sourcenode */ "./src/SourceNodes/sourcenode.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports, _sourcenode) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.CANVASTYPE = undefined;

    var _sourcenode2 = _interopRequireDefault(_sourcenode);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var TYPE = "CanvasNode";

    var CanvasNode = function (_SourceNode) {
        _inherits(CanvasNode, _SourceNode);

        /**
         * Initialise an instance of a CanvasNode.
         * This should not be called directly, but created through a call to videoContext.createCanvasNode();
         */
        function CanvasNode(canvas, gl, renderGraph, currentTime) {
            var preloadTime = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 4;

            _classCallCheck(this, CanvasNode);

            var _this = _possibleConstructorReturn(this, (CanvasNode.__proto__ || Object.getPrototypeOf(CanvasNode)).call(this, canvas, gl, renderGraph, currentTime));

            _this._preloadTime = preloadTime;
            _this._displayName = TYPE;
            return _this;
        }

        _createClass(CanvasNode, [{
            key: "_load",
            value: function _load() {
                _get(CanvasNode.prototype.__proto__ || Object.getPrototypeOf(CanvasNode.prototype), "_load", this).call(this);
                this._ready = true;
                this._triggerCallbacks("loaded");
            }
        }, {
            key: "_unload",
            value: function _unload() {
                _get(CanvasNode.prototype.__proto__ || Object.getPrototypeOf(CanvasNode.prototype), "_unload", this).call(this);
                this._ready = false;
            }
        }, {
            key: "_seek",
            value: function _seek(time) {
                _get(CanvasNode.prototype.__proto__ || Object.getPrototypeOf(CanvasNode.prototype), "_seek", this).call(this, time);
                if (this.state === _sourcenode.SOURCENODESTATE.playing || this.state === _sourcenode.SOURCENODESTATE.paused) {
                    if (this._element === undefined) this._load();
                    this._ready = false;
                }
                if ((this._state === _sourcenode.SOURCENODESTATE.sequenced || this._state === _sourcenode.SOURCENODESTATE.ended) && this._element !== undefined) {
                    this._unload();
                }
            }
        }, {
            key: "_update",
            value: function _update(currentTime) {
                //if (!super._update(currentTime)) return false;
                _get(CanvasNode.prototype.__proto__ || Object.getPrototypeOf(CanvasNode.prototype), "_update", this).call(this, currentTime);
                if (this._startTime - this._currentTime <= this._preloadTime && this._state !== _sourcenode.SOURCENODESTATE.waiting && this._state !== _sourcenode.SOURCENODESTATE.ended) this._load();

                if (this._state === _sourcenode.SOURCENODESTATE.playing) {
                    return true;
                } else if (this._state === _sourcenode.SOURCENODESTATE.paused) {
                    return true;
                } else if (this._state === _sourcenode.SOURCENODESTATE.ended && this._element !== undefined) {
                    this._unload();
                    return false;
                }
            }
        }]);

        return CanvasNode;
    }(_sourcenode2.default);

    exports.CANVASTYPE = TYPE;
    exports.default = CanvasNode;
});

/***/ }),

/***/ "./src/SourceNodes/imagenode.js":
/*!**************************************!*\
  !*** ./src/SourceNodes/imagenode.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./sourcenode */ "./src/SourceNodes/sourcenode.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports, _sourcenode) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.IMAGETYPE = undefined;

    var _sourcenode2 = _interopRequireDefault(_sourcenode);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var TYPE = "CanvasNode";

    var ImageNode = function (_SourceNode) {
        _inherits(ImageNode, _SourceNode);

        /**
         * Initialise an instance of an ImageNode.
         * This should not be called directly, but created through a call to videoContext.createImageNode();
         */
        function ImageNode(src, gl, renderGraph, currentTime) {
            var preloadTime = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 4;
            var attributes = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            _classCallCheck(this, ImageNode);

            var _this = _possibleConstructorReturn(this, (ImageNode.__proto__ || Object.getPrototypeOf(ImageNode)).call(this, src, gl, renderGraph, currentTime));

            _this._preloadTime = preloadTime;
            _this._attributes = attributes;
            _this._textureUploaded = false;
            _this._displayName = TYPE;
            return _this;
        }

        _createClass(ImageNode, [{
            key: "_load",
            value: function _load() {
                var _this2 = this;

                if (this._image !== undefined) {
                    for (var key in this._attributes) {
                        this._image[key] = this._attributes[key];
                    }
                    return;
                }
                if (this._isResponsibleForElementLifeCycle) {
                    _get(ImageNode.prototype.__proto__ || Object.getPrototypeOf(ImageNode.prototype), "_load", this).call(this);
                    this._image = new Image();
                    this._image.setAttribute("crossorigin", "anonymous");
                    // It's important to set the `onload` event before the `src` property
                    // https://stackoverflow.com/questions/12354865/image-onload-event-and-browser-cache?answertab=active#tab-top
                    this._image.onload = function () {
                        _this2._ready = true;
                        if (window.createImageBitmap) {
                            window.createImageBitmap(_this2._image, { imageOrientation: "flipY" }).then(function (imageBitmap) {
                                _this2._element = imageBitmap;
                                _this2._triggerCallbacks("loaded");
                            });
                        } else {
                            _this2._element = _this2._image;
                            _this2._triggerCallbacks("loaded");
                        }
                    };
                    this._image.src = this._elementURL;
                    this._image.onerror = function () {
                        console.error("ImageNode failed to load. url:", _this2._elementURL);
                    };

                    for (var _key in this._attributes) {
                        this._image[_key] = this._attributes[_key];
                    }
                }
                this._image.onerror = function () {
                    console.debug("Error with element", _this2._image);
                    _this2._state = _sourcenode.SOURCENODESTATE.error;
                    //Event though there's an error ready should be set to true so the node can output transparenn
                    _this2._ready = true;
                    _this2._triggerCallbacks("error");
                };
            }
        }, {
            key: "_unload",
            value: function _unload() {
                _get(ImageNode.prototype.__proto__ || Object.getPrototypeOf(ImageNode.prototype), "_unload", this).call(this);
                if (this._isResponsibleForElementLifeCycle) {
                    if (this._image !== undefined) {
                        this._image.src = "";
                        this._image.onerror = undefined;
                        this._image = undefined;
                        delete this._image;
                    }
                    if (this._element instanceof window.ImageBitmap) {
                        this._element.close();
                    }
                }
                this._ready = false;
            }
        }, {
            key: "_seek",
            value: function _seek(time) {
                _get(ImageNode.prototype.__proto__ || Object.getPrototypeOf(ImageNode.prototype), "_seek", this).call(this, time);
                if (this.state === _sourcenode.SOURCENODESTATE.playing || this.state === _sourcenode.SOURCENODESTATE.paused) {
                    if (this._image === undefined) this._load();
                }
                if ((this._state === _sourcenode.SOURCENODESTATE.sequenced || this._state === _sourcenode.SOURCENODESTATE.ended) && this._element !== undefined) {
                    this._unload();
                }
            }
        }, {
            key: "_update",
            value: function _update(currentTime) {
                //if (!super._update(currentTime)) return false;
                if (this._textureUploaded) {
                    _get(ImageNode.prototype.__proto__ || Object.getPrototypeOf(ImageNode.prototype), "_update", this).call(this, currentTime, false);
                } else {
                    _get(ImageNode.prototype.__proto__ || Object.getPrototypeOf(ImageNode.prototype), "_update", this).call(this, currentTime);
                }

                if (this._startTime - this._currentTime <= this._preloadTime && this._state !== _sourcenode.SOURCENODESTATE.waiting && this._state !== _sourcenode.SOURCENODESTATE.ended) this._load();

                if (this._state === _sourcenode.SOURCENODESTATE.playing) {
                    return true;
                } else if (this._state === _sourcenode.SOURCENODESTATE.paused) {
                    return true;
                } else if (this._state === _sourcenode.SOURCENODESTATE.ended && this._image !== undefined) {
                    this._unload();
                    return false;
                }
            }
        }, {
            key: "elementURL",
            get: function get() {
                return this._elementURL;
            }
        }]);

        return ImageNode;
    }(_sourcenode2.default);

    exports.IMAGETYPE = TYPE;
    exports.default = ImageNode;
});

/***/ }),

/***/ "./src/SourceNodes/medianode.js":
/*!**************************************!*\
  !*** ./src/SourceNodes/medianode.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./sourcenode */ "./src/SourceNodes/sourcenode.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _sourcenode) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _sourcenode2 = _interopRequireDefault(_sourcenode);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    var _set = function set(object, property, value, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent !== null) {
                set(parent, property, value, receiver);
            }
        } else if ("value" in desc && desc.writable) {
            desc.value = value;
        } else {
            var setter = desc.set;

            if (setter !== undefined) {
                setter.call(receiver, value);
            }
        }

        return value;
    };

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var MediaNode = function (_SourceNode) {
        _inherits(MediaNode, _SourceNode);

        /**
         * Initialise an instance of a MediaNode.
         * This should not be called directly, but extended by other Node Types which use a `HTMLMediaElement`.
         */
        function MediaNode(src, gl, renderGraph, currentTime) {
            var globalPlaybackRate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.0;
            var sourceOffset = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
            var preloadTime = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 4;
            var mediaElementCache = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : undefined;
            var attributes = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : {};

            _classCallCheck(this, MediaNode);

            var _this = _possibleConstructorReturn(this, (MediaNode.__proto__ || Object.getPrototypeOf(MediaNode)).call(this, src, gl, renderGraph, currentTime));

            _this._preloadTime = preloadTime;
            _this._sourceOffset = sourceOffset;
            _this._globalPlaybackRate = globalPlaybackRate;
            _this._mediaElementCache = mediaElementCache;
            _this._playbackRate = 1.0;
            _this._playbackRateUpdated = true;
            _this._attributes = Object.assign({ volume: 1.0 }, attributes);
            _this._loopElement = false;
            _this._isElementPlaying = false;
            if (_this._attributes.loop) {
                _this._loopElement = _this._attributes.loop;
            }
            return _this;
        }

        _createClass(MediaNode, [{
            key: "_triggerLoad",
            value: function _triggerLoad() {
                var _this2 = this;

                // If the user hasn't supplied an element, videocontext is responsible for the element
                if (this._isResponsibleForElementLifeCycle) {
                    if (this._mediaElementCache) {
                        this._element = this._mediaElementCache.get();
                    } else {
                        this._element = document.createElement(this._elementType);
                        this._element.setAttribute("crossorigin", "anonymous");
                        this._element.setAttribute("webkit-playsinline", "");
                        this._element.setAttribute("playsinline", "");
                        this._playbackRateUpdated = true;
                    }
                    this._element.volume = this._attributes.volume;
                    if (window.MediaStream !== undefined && this._elementURL instanceof MediaStream) {
                        this._element.srcObject = this._elementURL;
                    } else {
                        this._element.src = this._elementURL;
                    }
                }
                // at this stage either the user or the element cache should have provided an element
                if (this._element) {
                    for (var key in this._attributes) {
                        this._element[key] = this._attributes[key];
                    }

                    var currentTimeOffset = 0;
                    if (this._currentTime > this._startTime) currentTimeOffset = this._currentTime - this._startTime;
                    this._element.currentTime = this._sourceOffset + currentTimeOffset;
                    this._element.onerror = function () {
                        if (_this2._element === undefined) return;
                        console.debug("Error with element", _this2._element);
                        _this2._state = _sourcenode.SOURCENODESTATE.error;
                        //Event though there's an error ready should be set to true so the node can output transparenn
                        _this2._ready = true;
                        _this2._triggerCallbacks("error");
                    };
                } else {
                    // If the element doesn't exist for whatever reason enter the error state.
                    this._state = _sourcenode.SOURCENODESTATE.error;
                    this._ready = true;
                    this._triggerCallbacks("error");
                }

                this._loadTriggered = true;
            }
        }, {
            key: "_load",
            value: function _load() {
                _get(MediaNode.prototype.__proto__ || Object.getPrototypeOf(MediaNode.prototype), "_load", this).call(this);

                /**
                 * We've got to be careful here as _load is called many times whilst waiting for the element to buffer
                 * and this function should only be called once.
                 * This is step one in what should be a more thorough refactor
                 */
                if (!this._loadTriggered) {
                    this._triggerLoad();
                }

                var shouldPollForElementReadyState = this._element !== undefined;
                /**
                 * this expression is effectively polling the element, waiting for it to buffer
                 * it gets called a lot of time
                 */
                if (shouldPollForElementReadyState) {
                    if (this._element.readyState > 3 && !this._element.seeking) {
                        // at this point the element has enough data for current playback position
                        // and at least a couple of frames into the future

                        // Check if the duration has changed. Update if necessary.
                        // this could potentially go in the normal update loop but I don't want to change
                        // too many things at once
                        if (this._loopElement === false) {
                            if (this._stopTime === Infinity || this._stopTime == undefined) {
                                this._stopTime = this._startTime + this._element.duration;
                                this._triggerCallbacks("durationchange", this.duration);
                            }
                        }

                        // signal to user that this node has "loaded"
                        if (this._ready !== true) {
                            this._triggerCallbacks("loaded");
                            this._playbackRateUpdated = true;
                        }

                        this._ready = true;
                    } else {
                        if (this._state !== _sourcenode.SOURCENODESTATE.error) {
                            this._ready = false;
                        }
                    }
                }
            }
        }, {
            key: "_unload",
            value: function _unload() {
                _get(MediaNode.prototype.__proto__ || Object.getPrototypeOf(MediaNode.prototype), "_unload", this).call(this);
                if (this._isResponsibleForElementLifeCycle && this._element !== undefined) {
                    this._element.removeAttribute("src");
                    this._element.srcObject = undefined;
                    this._element.load();
                    for (var key in this._attributes) {
                        this._element.removeAttribute(key);
                    }
                    this._element = undefined;
                    if (!this._mediaElementCache) delete this._element;
                }
                // reset class to initial state
                this._ready = false;
                this._isElementPlaying = false;
                // For completeness. I couldn't find a path that required reuse of this._loadTriggered after _unload.
                this._loadTriggered = false;
            }
        }, {
            key: "_seek",
            value: function _seek(time) {
                _get(MediaNode.prototype.__proto__ || Object.getPrototypeOf(MediaNode.prototype), "_seek", this).call(this, time);
                if (this.state === _sourcenode.SOURCENODESTATE.playing || this.state === _sourcenode.SOURCENODESTATE.paused) {
                    if (this._element === undefined) this._load();
                    var relativeTime = this._currentTime - this._startTime + this._sourceOffset;
                    this._element.currentTime = relativeTime;
                    this._ready = false;
                }
                if ((this._state === _sourcenode.SOURCENODESTATE.sequenced || this._state === _sourcenode.SOURCENODESTATE.ended) && this._element !== undefined) {
                    this._unload();
                }
            }
        }, {
            key: "_update",
            value: function _update(currentTime) {
                var triggerTextureUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                //if (!super._update(currentTime)) return false;
                _get(MediaNode.prototype.__proto__ || Object.getPrototypeOf(MediaNode.prototype), "_update", this).call(this, currentTime, triggerTextureUpdate);
                //check if the media has ended
                if (this._element !== undefined) {
                    if (this._element.ended) {
                        this._state = _sourcenode.SOURCENODESTATE.ended;
                        this._triggerCallbacks("ended");
                    }
                }

                if (this._startTime - this._currentTime <= this._preloadTime && this._state !== _sourcenode.SOURCENODESTATE.waiting && this._state !== _sourcenode.SOURCENODESTATE.ended) this._load();

                if (this._state === _sourcenode.SOURCENODESTATE.playing) {
                    if (this._playbackRateUpdated) {
                        this._element.playbackRate = this._globalPlaybackRate * this._playbackRate;
                        this._playbackRateUpdated = false;
                    }
                    if (!this._isElementPlaying) {
                        this._element.play();
                        if (this._stretchPaused) {
                            this._element.pause();
                        }
                        this._isElementPlaying = true;
                    }
                    return true;
                } else if (this._state === _sourcenode.SOURCENODESTATE.paused) {
                    this._element.pause();
                    this._isElementPlaying = false;
                    return true;
                } else if (this._state === _sourcenode.SOURCENODESTATE.ended && this._element !== undefined) {
                    this._element.pause();
                    if (this._isElementPlaying) {
                        this._unload();
                    }
                    return false;
                }
            }
        }, {
            key: "clearTimelineState",
            value: function clearTimelineState() {
                _get(MediaNode.prototype.__proto__ || Object.getPrototypeOf(MediaNode.prototype), "clearTimelineState", this).call(this);
                if (this._element !== undefined) {
                    this._element.pause();
                    this._isElementPlaying = false;
                }
                this._unload();
            }
        }, {
            key: "destroy",
            value: function destroy() {
                if (this._element) this._element.pause();
                _get(MediaNode.prototype.__proto__ || Object.getPrototypeOf(MediaNode.prototype), "destroy", this).call(this);
            }
        }, {
            key: "playbackRate",
            set: function set(playbackRate) {
                this._playbackRate = playbackRate;
                this._playbackRateUpdated = true;
            },
            get: function get() {
                return this._playbackRate;
            }
        }, {
            key: "stretchPaused",
            set: function set(stretchPaused) {
                _set(MediaNode.prototype.__proto__ || Object.getPrototypeOf(MediaNode.prototype), "stretchPaused", stretchPaused, this);
                if (this._element) {
                    if (this._stretchPaused) {
                        this._element.pause();
                    } else {
                        if (this._state === _sourcenode.SOURCENODESTATE.playing) {
                            this._element.play();
                        }
                    }
                }
            },
            get: function get() {
                return this._stretchPaused;
            }
        }, {
            key: "elementURL",
            get: function get() {
                return this._elementURL;
            }
        }, {
            key: "_buffering",
            get: function get() {
                if (this._element) {
                    return this._element.readyState < HTMLMediaElement.HAVE_FUTURE_DATA;
                }

                return false;
            }
        }, {
            key: "volume",
            set: function set(volume) {
                this._attributes.volume = volume;
                if (this._element !== undefined) this._element.volume = this._attributes.volume;
            }
        }]);

        return MediaNode;
    }(_sourcenode2.default);

    exports.default = MediaNode;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/SourceNodes/nodes.js":
/*!**********************************!*\
  !*** ./src/SourceNodes/nodes.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./audionode */ "./src/SourceNodes/audionode.js"), __webpack_require__(/*! ./canvasnode */ "./src/SourceNodes/canvasnode.js"), __webpack_require__(/*! ./imagenode */ "./src/SourceNodes/imagenode.js"), __webpack_require__(/*! ./medianode */ "./src/SourceNodes/medianode.js"), __webpack_require__(/*! ./sourcenode */ "./src/SourceNodes/sourcenode.js"), __webpack_require__(/*! ./videonode */ "./src/SourceNodes/videonode.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _audionode, _canvasnode, _imagenode, _medianode, _sourcenode, _videonode) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _audionode2 = _interopRequireDefault(_audionode);

    var _canvasnode2 = _interopRequireDefault(_canvasnode);

    var _imagenode2 = _interopRequireDefault(_imagenode);

    var _medianode2 = _interopRequireDefault(_medianode);

    var _sourcenode2 = _interopRequireDefault(_sourcenode);

    var _videonode2 = _interopRequireDefault(_videonode);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var NODES = {
        AudioNode: _audionode2.default,
        CanvasNode: _canvasnode2.default,
        ImageNode: _imagenode2.default,
        MediaNode: _medianode2.default,
        SourceNode: _sourcenode2.default,
        VideoNode: _videonode2.default
    };

    exports.default = NODES;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/SourceNodes/sourcenode.js":
/*!***************************************!*\
  !*** ./src/SourceNodes/sourcenode.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../utils.js */ "./src/utils.js"), __webpack_require__(/*! ../graphnode */ "./src/graphnode.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports, _utils, _graphnode) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.SOURCETYPE = exports.SOURCENODESTATE = undefined;

    var _graphnode2 = _interopRequireDefault(_graphnode);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var STATE = {
        waiting: 0,
        sequenced: 1,
        playing: 2,
        paused: 3,
        ended: 4,
        error: 5
    };

    var TYPE = "SourceNode";

    var SourceNode = function (_GraphNode) {
        _inherits(SourceNode, _GraphNode);

        /**
         * Initialise an instance of a SourceNode.
         * This is the base class for other Nodes which generate media to be passed into the processing pipeline.
         */
        function SourceNode(src, gl, renderGraph, currentTime) {
            _classCallCheck(this, SourceNode);

            var _this = _possibleConstructorReturn(this, (SourceNode.__proto__ || Object.getPrototypeOf(SourceNode)).call(this, gl, renderGraph, [], true));

            _this._element = undefined;
            _this._elementURL = undefined;
            _this._isResponsibleForElementLifeCycle = true;

            if (typeof src === "string" || window.MediaStream !== undefined && src instanceof MediaStream) {
                //create the node from the passed URL or MediaStream
                _this._elementURL = src;
            } else {
                //use the passed element to create the SourceNode
                _this._element = src;
                _this._isResponsibleForElementLifeCycle = false;
            }

            _this._state = STATE.waiting;
            _this._currentTime = currentTime;
            _this._startTime = NaN;
            _this._stopTime = Infinity;
            _this._ready = false;
            _this._loadCalled = false;
            _this._stretchPaused = false;
            _this._texture = (0, _utils.createElementTexture)(gl);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
            _this._callbacks = [];
            _this._renderPaused = false;
            _this._displayName = TYPE;
            return _this;
        }

        /**
         * Returns the state of the node.
         * 0 - Waiting, start() has not been called on it yet.
         * 1 - Sequenced, start() has been called but it is not playing yet.
         * 2 - Playing, the node is playing.
         * 3 - Paused, the node is paused.
         * 4 - Ended, playback of the node has finished.
         *
         * @example
         * var ctx = new VideoContext();
         * var videoNode = ctx.createVideoSourceNode('video.mp4');
         * console.log(videoNode.state); //will output 0 (for waiting)
         * videoNode.start(5);
         * console.log(videoNode.state); //will output 1 (for sequenced)
         * videoNode.stop(10);
         * ctx.play();
         * console.log(videoNode.state); //will output 2 (for playing)
         * ctx.paused();
         * console.log(videoNode.state); //will output 3 (for paused)
         */


        _createClass(SourceNode, [{
            key: "_load",
            value: function _load() {
                if (!this._loadCalled) {
                    this._triggerCallbacks("load");
                    this._loadCalled = true;
                }
            }
        }, {
            key: "_unload",
            value: function _unload() {
                this._triggerCallbacks("destroy");
                this._loadCalled = false;
            }
        }, {
            key: "registerCallback",
            value: function registerCallback(type, func) {
                this._callbacks.push({ type: type, func: func });
            }
        }, {
            key: "unregisterCallback",
            value: function unregisterCallback(func) {
                var toRemove = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this._callbacks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var callback = _step.value;

                        if (func === undefined) {
                            toRemove.push(callback);
                        } else if (callback.func === func) {
                            toRemove.push(callback);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = toRemove[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _callback = _step2.value;

                        var index = this._callbacks.indexOf(_callback);
                        this._callbacks.splice(index, 1);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        }, {
            key: "_triggerCallbacks",
            value: function _triggerCallbacks(type, data) {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = this._callbacks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var callback = _step3.value;

                        if (callback.type === type) {
                            if (data !== undefined) {
                                callback.func(this, data);
                            } else {
                                callback.func(this);
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
            }
        }, {
            key: "start",
            value: function start(time) {
                if (this._state !== STATE.waiting) {
                    console.debug("SourceNode is has already been sequenced. Can't sequence twice.");
                    return false;
                }

                this._startTime = this._currentTime + time;
                this._state = STATE.sequenced;
                return true;
            }
        }, {
            key: "startAt",
            value: function startAt(time) {
                if (this._state !== STATE.waiting) {
                    console.debug("SourceNode is has already been sequenced. Can't sequence twice.");
                    return false;
                }
                this._startTime = time;
                this._state = STATE.sequenced;
                return true;
            }
        }, {
            key: "stop",
            value: function stop(time) {
                if (this._state === STATE.ended) {
                    console.debug("SourceNode has already ended. Cannot call stop.");
                    return false;
                } else if (this._state === STATE.waiting) {
                    console.debug("SourceNode must have start called before stop is called");
                    return false;
                }
                if (this._currentTime + time <= this._startTime) {
                    console.debug("SourceNode must have a stop time after it's start time, not before.");
                    return false;
                }
                this._stopTime = this._currentTime + time;
                this._stretchPaused = false;
                this._triggerCallbacks("durationchange", this.duration);
                return true;
            }
        }, {
            key: "stopAt",
            value: function stopAt(time) {
                if (this._state === STATE.ended) {
                    console.debug("SourceNode has already ended. Cannot call stop.");
                    return false;
                } else if (this._state === STATE.waiting) {
                    console.debug("SourceNode must have start called before stop is called");
                    return false;
                }
                if (time <= this._startTime) {
                    console.debug("SourceNode must have a stop time after it's start time, not before.");
                    return false;
                }
                this._stopTime = time;
                this._stretchPaused = false;
                this._triggerCallbacks("durationchange", this.duration);
                return true;
            }
        }, {
            key: "_seek",
            value: function _seek(time) {
                this._renderPaused = false;

                this._triggerCallbacks("seek", time);

                if (this._state === STATE.waiting) return;
                if (time < this._startTime) {
                    (0, _utils.clearTexture)(this._gl, this._texture);
                    this._state = STATE.sequenced;
                }
                if (time >= this._startTime && this._state !== STATE.paused) {
                    this._state = STATE.playing;
                }
                if (time >= this._stopTime) {
                    (0, _utils.clearTexture)(this._gl, this._texture);
                    this._triggerCallbacks("ended");
                    this._state = STATE.ended;
                }
                //update the current time
                this._currentTime = time;
            }
        }, {
            key: "_pause",
            value: function _pause() {
                if (this._state === STATE.playing || this._currentTime === 0 && this._startTime === 0) {
                    this._triggerCallbacks("pause");
                    this._state = STATE.paused;
                    this._renderPaused = false;
                }
            }
        }, {
            key: "_play",
            value: function _play() {
                if (this._state === STATE.paused) {
                    this._triggerCallbacks("play");
                    this._state = STATE.playing;
                }
            }
        }, {
            key: "_isReady",
            value: function _isReady() {
                if (this._buffering) {
                    return false;
                }
                if (this._state === STATE.playing || this._state === STATE.paused || this._state === STATE.error) {
                    return this._ready;
                }
                return true;
            }
        }, {
            key: "_update",
            value: function _update(currentTime) {
                var triggerTextureUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                this._rendered = true;
                var timeDelta = currentTime - this._currentTime;

                //update the current time
                this._currentTime = currentTime;

                //update the state
                if (this._state === STATE.waiting || this._state === STATE.ended || this._state === STATE.error) return false;

                this._triggerCallbacks("render", currentTime);

                if (currentTime < this._startTime) {
                    (0, _utils.clearTexture)(this._gl, this._texture);
                    this._state = STATE.sequenced;
                }

                if (currentTime >= this._startTime && this._state !== STATE.paused && this._state !== STATE.error) {
                    if (this._state !== STATE.playing) this._triggerCallbacks("play");
                    this._state = STATE.playing;
                }

                if (currentTime >= this._stopTime) {
                    (0, _utils.clearTexture)(this._gl, this._texture);
                    this._triggerCallbacks("ended");
                    this._state = STATE.ended;
                }

                //update this source nodes texture
                if (this._element === undefined || this._ready === false) return true;

                if (!this._renderPaused && this._state === STATE.paused) {
                    if (triggerTextureUpdate) (0, _utils.updateTexture)(this._gl, this._texture, this._element);
                    this._renderPaused = true;
                }
                if (this._state === STATE.playing) {
                    if (triggerTextureUpdate) (0, _utils.updateTexture)(this._gl, this._texture, this._element);
                    if (this._stretchPaused) {
                        this._stopTime += timeDelta;
                    }
                }

                return true;
            }
        }, {
            key: "clearTimelineState",
            value: function clearTimelineState() {
                this._startTime = NaN;
                this._stopTime = Infinity;
                this._state = STATE.waiting;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this._unload();
                _get(SourceNode.prototype.__proto__ || Object.getPrototypeOf(SourceNode.prototype), "destroy", this).call(this);
                this.unregisterCallback();
                delete this._element;
                this._elementURL = undefined;
                this._state = STATE.waiting;
                this._currentTime = 0;
                this._startTime = NaN;
                this._stopTime = Infinity;
                this._ready = false;
                this._loadCalled = false;
                this._gl.deleteTexture(this._texture);
                this._texture = undefined;
            }
        }, {
            key: "state",
            get: function get() {
                return this._state;
            }
        }, {
            key: "element",
            get: function get() {
                return this._element;
            }
        }, {
            key: "duration",
            get: function get() {
                if (isNaN(this._startTime)) return undefined;
                if (this._stopTime === Infinity) return Infinity;
                return this._stopTime - this._startTime;
            }
        }, {
            key: "stretchPaused",
            set: function set(stretchPaused) {
                this._stretchPaused = stretchPaused;
            },
            get: function get() {
                return this._stretchPaused;
            }
        }, {
            key: "startTime",
            get: function get() {
                return this._startTime;
            }
        }, {
            key: "stopTime",
            get: function get() {
                return this._stopTime;
            }
        }]);

        return SourceNode;
    }(_graphnode2.default);

    exports.SOURCENODESTATE = STATE;
    exports.SOURCETYPE = TYPE;
    exports.default = SourceNode;
});

/***/ }),

/***/ "./src/SourceNodes/videonode.js":
/*!**************************************!*\
  !*** ./src/SourceNodes/videonode.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./medianode */ "./src/SourceNodes/medianode.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports, _medianode) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.VIDEOTYPE = undefined;

    var _medianode2 = _interopRequireDefault(_medianode);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var TYPE = "VideoNode";

    var VideoNode = function (_MediaNode) {
        _inherits(VideoNode, _MediaNode);

        /**
         * Initialise an instance of a VideoNode.
         * This should not be called directly, but created through a call to videoContext.createVideoNode();
         */
        function VideoNode() {
            _classCallCheck(this, VideoNode);

            var _this = _possibleConstructorReturn(this, (VideoNode.__proto__ || Object.getPrototypeOf(VideoNode)).apply(this, arguments));

            _this._displayName = TYPE;
            _this._elementType = "video";
            return _this;
        }

        return VideoNode;
    }(_medianode2.default);

    exports.VIDEOTYPE = TYPE;
    exports.default = VideoNode;
});

/***/ }),

/***/ "./src/exceptions.js":
/*!***************************!*\
  !*** ./src/exceptions.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ConnectException = ConnectException;
    exports.RenderException = RenderException;
    //Matthew Shotton, R&D User Experience,© BBC 2015
    function ConnectException(message) {
        this.message = message;
        this.name = "ConnectionException";
    }

    function RenderException(message) {
        this.message = message;
        this.name = "RenderException";
    }
});

/***/ }),

/***/ "./src/graphnode.js":
/*!**************************!*\
  !*** ./src/graphnode.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    //Matthew Shotton, R&D User Experience,© BBC 2015

    var TYPE = "GraphNode";

    var GraphNode = function () {
        /**
         * Base class from which all processing and source nodes are derrived.
         */
        function GraphNode(gl, renderGraph, inputNames) {
            var limitConnections = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            _classCallCheck(this, GraphNode);

            this._renderGraph = renderGraph;
            this._limitConnections = limitConnections;
            this._inputNames = inputNames;
            this._destroyed = false;

            //Setup WebGL output texture
            this._gl = gl;
            this._renderGraph = renderGraph;
            this._rendered = false;
            this._displayName = TYPE;
        }

        /**
         * Get a string representation of the class name.
         *
         * @return String A string of the class name.
         */

        _createClass(GraphNode, [{
            key: "connect",
            value: function connect(targetNode, targetPort) {
                return this._renderGraph.registerConnection(this, targetNode, targetPort);
            }
        }, {
            key: "disconnect",
            value: function disconnect(targetNode) {
                var _this = this;

                if (targetNode === undefined) {
                    var toRemove = this._renderGraph.getOutputsForNode(this);
                    toRemove.forEach(function (target) {
                        return _this._renderGraph.unregisterConnection(_this, target);
                    });
                    if (toRemove.length > 0) return true;
                    return false;
                }
                return this._renderGraph.unregisterConnection(this, targetNode);
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this.disconnect();
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var input = _step.value;

                        input.disconnect(this);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                this._destroyed = true;
            }
        }, {
            key: "displayName",
            get: function get() {
                return this._displayName;
            }
        }, {
            key: "inputNames",
            get: function get() {
                return this._inputNames.slice();
            }
        }, {
            key: "maximumConnections",
            get: function get() {
                if (this._limitConnections === false) return Infinity;
                return this._inputNames.length;
            }
        }, {
            key: "inputs",
            get: function get() {
                var result = this._renderGraph.getInputsForNode(this);
                result = result.filter(function (n) {
                    return n !== undefined;
                });
                return result;
            }
        }, {
            key: "outputs",
            get: function get() {
                return this._renderGraph.getOutputsForNode(this);
            }
        }, {
            key: "destroyed",
            get: function get() {
                return this._destroyed;
            }
        }]);

        return GraphNode;
    }();

    exports.GRAPHTYPE = TYPE;
    exports.default = GraphNode;
});

/***/ }),

/***/ "./src/rendergraph.js":
/*!****************************!*\
  !*** ./src/rendergraph.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./exceptions.js */ "./src/exceptions.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _exceptions) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var RenderGraph = function () {
        /**
         * Manages the rendering graph.
         */
        function RenderGraph() {
            _classCallCheck(this, RenderGraph);

            this.connections = [];
        }

        /**
         * Get a list of nodes which are connected to the output of the passed node.
         *
         * @param {GraphNode} node - the node to get the outputs for.
         * @return {GraphNode[]} An array of the nodes which are connected to the output.
         */


        _createClass(RenderGraph, [{
            key: "getOutputsForNode",
            value: function getOutputsForNode(node) {
                var results = [];
                this.connections.forEach(function (connection) {
                    if (connection.source === node) {
                        results.push(connection.destination);
                    }
                });
                return results;
            }
        }, {
            key: "getNamedInputsForNode",
            value: function getNamedInputsForNode(node) {
                var results = [];
                this.connections.forEach(function (connection) {
                    if (connection.destination === node && connection.type === "name") {
                        results.push(connection);
                    }
                });
                return results;
            }
        }, {
            key: "getZIndexInputsForNode",
            value: function getZIndexInputsForNode(node) {
                var results = [];
                this.connections.forEach(function (connection) {
                    if (connection.destination === node && connection.type === "zIndex") {
                        results.push(connection);
                    }
                });
                results.sort(function (a, b) {
                    return a.zIndex - b.zIndex;
                });
                return results;
            }
        }, {
            key: "getInputsForNode",
            value: function getInputsForNode(node) {
                var inputNames = node.inputNames;
                var results = [];
                var namedInputs = this.getNamedInputsForNode(node);
                var indexedInputs = this.getZIndexInputsForNode(node);

                if (node._limitConnections === true) {
                    for (var i = 0; i < inputNames.length; i++) {
                        results[i] = undefined;
                    }

                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = namedInputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var connection = _step.value;

                            var index = inputNames.indexOf(connection.name);
                            results[index] = connection.source;
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    var indexedInputsIndex = 0;
                    for (var _i = 0; _i < results.length; _i++) {
                        if (results[_i] === undefined && indexedInputs[indexedInputsIndex] !== undefined) {
                            results[_i] = indexedInputs[indexedInputsIndex].source;
                            indexedInputsIndex += 1;
                        }
                    }
                } else {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = namedInputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var _connection = _step2.value;

                            results.push(_connection.source);
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }

                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = indexedInputs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var _connection2 = _step3.value;

                            results.push(_connection2.source);
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }
                }
                return results;
            }
        }, {
            key: "isInputAvailable",
            value: function isInputAvailable(node, inputName) {
                if (node._inputNames.indexOf(inputName) === -1) return false;
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = this.connections[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var connection = _step4.value;

                        if (connection.type === "name") {
                            if (connection.destination === node && connection.name === inputName) {
                                return false;
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }

                return true;
            }
        }, {
            key: "registerConnection",
            value: function registerConnection(sourceNode, destinationNode, target) {
                if (destinationNode.inputs.length >= destinationNode.inputNames.length && destinationNode._limitConnections === true) {
                    throw new _exceptions.ConnectException("Node has reached max number of inputs, can't connect");
                }

                if (destinationNode._limitConnections === false) {
                    //check if connection is already made, if so raise a warning
                    var inputs = this.getInputsForNode(destinationNode);
                    if (inputs.includes(sourceNode)) {
                        console.debug("WARNING - node connected mutliple times, removing previous connection");
                        this.unregisterConnection(sourceNode, destinationNode);
                    }
                }

                if (typeof target === "number") {
                    //target is a specific
                    this.connections.push({
                        source: sourceNode,
                        type: "zIndex",
                        zIndex: target,
                        destination: destinationNode
                    });
                } else if (typeof target === "string" && destinationNode._limitConnections) {
                    //target is a named port

                    //make sure named port is free
                    if (this.isInputAvailable(destinationNode, target)) {
                        this.connections.push({
                            source: sourceNode,
                            type: "name",
                            name: target,
                            destination: destinationNode
                        });
                    } else {
                        throw new _exceptions.ConnectException("Port " + target + " is already connected to");
                    }
                } else {
                    //target is undefined so just make it a high zIndex
                    var indexedConns = this.getZIndexInputsForNode(destinationNode);
                    var index = 0;
                    if (indexedConns.length > 0) index = indexedConns[indexedConns.length - 1].zIndex + 1;
                    this.connections.push({
                        source: sourceNode,
                        type: "zIndex",
                        zIndex: index,
                        destination: destinationNode
                    });
                }
                return true;
            }
        }, {
            key: "unregisterConnection",
            value: function unregisterConnection(sourceNode, destinationNode) {
                var _this = this;

                var toRemove = [];

                this.connections.forEach(function (connection) {
                    if (connection.source === sourceNode && connection.destination === destinationNode) {
                        toRemove.push(connection);
                    }
                });

                if (toRemove.length === 0) return false;

                toRemove.forEach(function (removeNode) {
                    var index = _this.connections.indexOf(removeNode);
                    _this.connections.splice(index, 1);
                });

                return true;
            }
        }], [{
            key: "outputEdgesFor",
            value: function outputEdgesFor(node, connections) {
                var results = [];
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                    for (var _iterator5 = connections[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                        var conn = _step5.value;

                        if (conn.source === node) {
                            results.push(conn);
                        }
                    }
                } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                            _iterator5.return();
                        }
                    } finally {
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                }

                return results;
            }
        }, {
            key: "inputEdgesFor",
            value: function inputEdgesFor(node, connections) {
                var results = [];
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                    for (var _iterator6 = connections[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                        var conn = _step6.value;

                        if (conn.destination === node) {
                            results.push(conn);
                        }
                    }
                } catch (err) {
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                            _iterator6.return();
                        }
                    } finally {
                        if (_didIteratorError6) {
                            throw _iteratorError6;
                        }
                    }
                }

                return results;
            }
        }, {
            key: "getInputlessNodes",
            value: function getInputlessNodes(connections) {
                var inputLess = [];
                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                    for (var _iterator7 = connections[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var conn = _step7.value;

                        inputLess.push(conn.source);
                    }
                } catch (err) {
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                            _iterator7.return();
                        }
                    } finally {
                        if (_didIteratorError7) {
                            throw _iteratorError7;
                        }
                    }
                }

                var _iteratorNormalCompletion8 = true;
                var _didIteratorError8 = false;
                var _iteratorError8 = undefined;

                try {
                    for (var _iterator8 = connections[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                        var _conn = _step8.value;

                        var index = inputLess.indexOf(_conn.destination);
                        if (index !== -1) {
                            inputLess.splice(index, 1);
                        }
                    }
                } catch (err) {
                    _didIteratorError8 = true;
                    _iteratorError8 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion8 && _iterator8.return) {
                            _iterator8.return();
                        }
                    } finally {
                        if (_didIteratorError8) {
                            throw _iteratorError8;
                        }
                    }
                }

                return inputLess;
            }
        }]);

        return RenderGraph;
    }();

    exports.default = RenderGraph;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./Definitions/definitions.js */ "./src/Definitions/definitions.js"), __webpack_require__(/*! ./SourceNodes/sourcenode.js */ "./src/SourceNodes/sourcenode.js"), __webpack_require__(/*! ./SourceNodes/videonode.js */ "./src/SourceNodes/videonode.js"), __webpack_require__(/*! ./SourceNodes/canvasnode.js */ "./src/SourceNodes/canvasnode.js"), __webpack_require__(/*! ./SourceNodes/imagenode.js */ "./src/SourceNodes/imagenode.js"), __webpack_require__(/*! ./DestinationNode/destinationnode.js */ "./src/DestinationNode/destinationnode.js"), __webpack_require__(/*! ./ProcessingNodes/transitionnode.js */ "./src/ProcessingNodes/transitionnode.js"), __webpack_require__(/*! ./ProcessingNodes/compositingnode.js */ "./src/ProcessingNodes/compositingnode.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports, _definitions, _sourcenode, _videonode, _canvasnode, _imagenode, _destinationnode, _transitionnode, _compositingnode) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.UpdateablesManager = undefined;
    exports.compileShader = compileShader;
    exports.createShaderProgram = createShaderProgram;
    exports.createElementTexture = createElementTexture;
    exports.updateTexture = updateTexture;
    exports.clearTexture = clearTexture;
    exports.generateRandomId = generateRandomId;
    exports.exportToJSON = exportToJSON;
    exports.snapshot = snapshot;
    exports.createControlFormForNode = createControlFormForNode;
    exports.visualiseVideoContextGraph = visualiseVideoContextGraph;
    exports.createSigmaGraphDataFromRenderGraph = createSigmaGraphDataFromRenderGraph;
    exports.importSimpleEDL = importSimpleEDL;
    exports.visualiseVideoContextTimeline = visualiseVideoContextTimeline;
    exports.mediaElementHasSource = mediaElementHasSource;
    exports.addPadding = addPadding;
    exports.addMosaic = addMosaic;

    var _definitions2 = _interopRequireDefault(_definitions);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    /*
     * Utility function to compile a WebGL Vertex or Fragment shader.
     *
     * @param {WebGLRenderingContext} gl - the webgl context fo which to build the shader.
     * @param {String} shaderSource - A string of shader code to compile.
     * @param {number} shaderType - Shader type, either WebGLRenderingContext.VERTEX_SHADER or WebGLRenderingContext.FRAGMENT_SHADER.
     *
     * @return {WebGLShader} A compiled shader.
     *
     */
    function compileShader(gl, shaderSource, shaderType) {
        var shader = gl.createShader(shaderType);
        gl.shaderSource(shader, shaderSource);
        gl.compileShader(shader);
        var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (!success) {
            throw "could not compile shader:" + gl.getShaderInfoLog(shader);
        }
        return shader;
    }

    /*
     * Create a shader program from a passed vertex and fragment shader source string.
     *
     * @param {WebGLRenderingContext} gl - the webgl context fo which to build the shader.
     * @param {WebGLShader} vertexShader - A compiled vertex shader.
     * @param {WebGLShader} fragmentShader - A compiled fragment shader.
     *
     * @return {WebGLProgram} A compiled & linkde shader program.
     */
    function createShaderProgram(gl, vertexShader, fragmentShader) {
        var program = gl.createProgram();

        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            throw {
                error: 4,
                msg: "Can't link shader program for track",
                toString: function toString() {
                    return this.msg;
                }
            };
        }
        return program;
    }

    function createElementTexture(gl) {
        var texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        // Set the parameters so we can render any size image.
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        //Initialise the texture untit to clear.
        //gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, type);

        return texture;
    }

    function updateTexture(gl, texture, element) {
        if (element.readyState !== undefined && element.readyState === 0) return;
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, element);

        texture._isTextureCleared = false;
    }

    function clearTexture(gl, texture) {
        // A quick check to ensure we don't call 'texImage2D' when the texture has already been 'cleared' #performance
        if (!texture._isTextureCleared) {
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));

            texture._isTextureCleared = true;
        }
    }

    function generateRandomId() {
        var appearanceAdjective = ["adorable", "alert", "average", "beautiful", "blonde", "bloody", "blushing", "bright", "clean", "clear", "cloudy", "colourful", "concerned", "crowded", "curious", "cute", "dark", "dirty", "drab", "distinct", "dull", "elegant", "fancy", "filthy", "glamorous", "gleaming", "graceful", "grotesque", "homely", "light", "misty", "motionless", "muddy", "plain", "poised", "quaint", "scary", "shiny", "smoggy", "sparkling", "spotless", "stormy", "strange", "ugly", "unsightly", "unusual"];
        var conditionAdjective = ["alive", "brainy", "broken", "busy", "careful", "cautious", "clever", "crazy", "damaged", "dead", "difficult", "easy", "fake", "false", "famous", "forward", "fragile", "guilty", "helpful", "helpless", "important", "impossible", "infamous", "innocent", "inquisitive", "mad", "modern", "open", "outgoing", "outstanding", "poor", "powerful", "puzzled", "real", "rich", "right", "robust", "sane", "scary", "shy", "sleepy", "stupid", "super", "tame", "thick", "tired", "wild", "wrong"];
        var nounAnimal = ["manatee", "gila monster", "nematode", "seahorse", "slug", "koala bear", "giant tortoise", "garden snail", "starfish", "sloth", "american woodcock", "coral", "swallowtail butterfly", "house sparrow", "sea anemone"];

        function randomChoice(array) {
            return array[Math.floor(Math.random() * array.length)];
        }

        function capitalize(word) {
            word = word.replace(/\b\w/g, function (l) {
                return l.toUpperCase();
            });
            return word;
        }

        var name = randomChoice(appearanceAdjective) + " " + randomChoice(conditionAdjective) + " " + randomChoice(nounAnimal);
        name = capitalize(name);
        name = name.replace(/ /g, "-");
        return name;
    }

    function exportToJSON(vc) {
        console.warn("VideoContext.exportToJSON has been deprecated. Please use VideoContext.snapshot instead.");
        return JSON.stringify(snapshotNodes(vc));
    }

    function snapshot(vc) {
        return {
            nodes: snapshotNodes(vc),
            videoContext: snapshotVideoContext(vc)
        };
    }

    function snapshotVideoContext(vc) {
        return {
            currentTime: vc.currentTime,
            duration: vc.duration,
            state: vc.state,
            playbackRate: vc.playbackRate
        };
    }

    var warningExportSourceLogged = false;
    function snapshotNodes(vc) {
        function qualifyURL(url) {
            var a = document.createElement("a");
            a.href = url;
            return a.href;
        }

        function getInputIDs(node, vc) {
            var inputs = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = node.inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var input = _step.value;

                    if (input === undefined) continue;
                    var inputID = void 0;
                    var inputIndex = node.inputs.indexOf(input);
                    var index = vc._processingNodes.indexOf(input);
                    if (index > -1) {
                        inputID = "processor" + index;
                    } else {
                        var _index = vc._sourceNodes.indexOf(input);
                        if (_index > -1) {
                            inputID = "source" + _index;
                        } else {
                            console.log("Warning, can't find input", input);
                        }
                    }
                    inputs.push({ id: inputID, index: inputIndex });
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return inputs;
        }

        var result = {};

        var sourceNodeStateMapping = [];
        for (var state in _sourcenode.SOURCENODESTATE) {
            sourceNodeStateMapping[_sourcenode.SOURCENODESTATE[state]] = state;
        }

        for (var index in vc._sourceNodes) {
            var source = vc._sourceNodes[index];
            var id = "source" + index;
            var node_url = "";

            if (!source._isResponsibleForElementLifeCycle) {
                if (!warningExportSourceLogged) {
                    console.debug("Warning - Trying to export source created from an element not a URL. URL of export will be set to the elements src attribute and may be incorrect", source);
                    warningExportSourceLogged = true;
                }
                node_url = source.element.src;
            } else {
                node_url = qualifyURL(source._elementURL);
            }

            var node = {
                type: source.displayName,
                url: node_url,
                start: source.startTime,
                stop: source.stopTime,
                state: sourceNodeStateMapping[source.state]
            };
            if (node.type === _videonode.VIDEOTYPE) {
                node.currentTime = null;
                if (source.element && source.element.currentTime) {
                    node.currentTime = source.element.currentTime;
                }
            }

            if (source._sourceOffset) {
                node.sourceOffset = source._sourceOffset;
            }
            result[id] = node;
        }

        for (var _index2 in vc._processingNodes) {
            var processor = vc._processingNodes[_index2];
            var _id = "processor" + _index2;
            var _node = {
                type: processor.displayName,
                definition: processor._definition,
                inputs: getInputIDs(processor, vc),
                properties: {}
            };

            for (var property in _node.definition.properties) {
                _node.properties[property] = processor[property];
            }

            if (_node.type === _transitionnode.TRANSITIONTYPE) {
                _node.transitions = processor._transitions;
            }

            result[_id] = _node;
        }

        result["destination"] = {
            type: "Destination",
            inputs: getInputIDs(vc.destination, vc)
        };

        return result;
    }

    function createControlFormForNode(node, nodeName) {
        var rootDiv = document.createElement("div");

        if (nodeName !== undefined) {
            var title = document.createElement("h2");
            title.innerHTML = nodeName;
            rootDiv.appendChild(title);
        }

        var _loop = function _loop(propertyName) {
            var propertyParagraph = document.createElement("p");
            var propertyTitleHeader = document.createElement("h3");
            propertyTitleHeader.innerHTML = propertyName;
            propertyParagraph.appendChild(propertyTitleHeader);

            var propertyValue = node._properties[propertyName].value;
            if (typeof propertyValue === "number") {
                var range = document.createElement("input");
                range.setAttribute("type", "range");
                range.setAttribute("min", "0");
                range.setAttribute("max", "1");
                range.setAttribute("step", "0.01");
                range.setAttribute("value", propertyValue, toString());

                var number = document.createElement("input");
                number.setAttribute("type", "number");
                number.setAttribute("min", "0");
                number.setAttribute("max", "1");
                number.setAttribute("step", "0.01");
                number.setAttribute("value", propertyValue, toString());

                var mouseDown = false;
                range.onmousedown = function () {
                    mouseDown = true;
                };
                range.onmouseup = function () {
                    mouseDown = false;
                };
                range.onmousemove = function () {
                    if (mouseDown) {
                        node[propertyName] = parseFloat(range.value);
                        number.value = range.value;
                    }
                };
                range.onchange = function () {
                    node[propertyName] = parseFloat(range.value);
                    number.value = range.value;
                };
                number.onchange = function () {
                    node[propertyName] = parseFloat(number.value);
                    range.value = number.value;
                };
                propertyParagraph.appendChild(range);
                propertyParagraph.appendChild(number);
            } else if (Object.prototype.toString.call(propertyValue) === "[object Array]") {
                var _loop2 = function _loop2() {
                    var range = document.createElement("input");
                    range.setAttribute("type", "range");
                    range.setAttribute("min", "0");
                    range.setAttribute("max", "1");
                    range.setAttribute("step", "0.01");
                    range.setAttribute("value", propertyValue[i], toString());

                    var number = document.createElement("input");
                    number.setAttribute("type", "number");
                    number.setAttribute("min", "0");
                    number.setAttribute("max", "1");
                    number.setAttribute("step", "0.01");
                    number.setAttribute("value", propertyValue, toString());

                    var index = i;
                    var mouseDown = false;
                    range.onmousedown = function () {
                        mouseDown = true;
                    };
                    range.onmouseup = function () {
                        mouseDown = false;
                    };
                    range.onmousemove = function () {
                        if (mouseDown) {
                            node[propertyName][index] = parseFloat(range.value);
                            number.value = range.value;
                        }
                    };
                    range.onchange = function () {
                        node[propertyName][index] = parseFloat(range.value);
                        number.value = range.value;
                    };

                    number.onchange = function () {
                        node[propertyName][index] = parseFloat(number.value);
                        range.value = number.value;
                    };
                    propertyParagraph.appendChild(range);
                    propertyParagraph.appendChild(number);
                };

                for (i = 0; i < propertyValue.length; i++) {
                    _loop2();
                }
            }

            rootDiv.appendChild(propertyParagraph);
        };

        for (var propertyName in node._properties) {
            var i;

            _loop(propertyName);
        }
        return rootDiv;
    }

    function calculateNodeDepthFromDestination(videoContext) {
        var destination = videoContext.destination;
        var depthMap = new Map();
        depthMap.set(destination, 0);

        function itterateBackwards(node) {
            var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = node.inputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var n = _step2.value;

                    var d = depth + 1;
                    if (depthMap.has(n)) {
                        if (d > depthMap.get(n)) {
                            depthMap.set(n, d);
                        }
                    } else {
                        depthMap.set(n, d);
                    }
                    itterateBackwards(n, depthMap.get(n));
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }

        itterateBackwards(destination);
        return depthMap;
    }

    function visualiseVideoContextGraph(videoContext, canvas) {
        var ctx = canvas.getContext("2d");
        var w = canvas.width;
        var h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        var nodeDepths = calculateNodeDepthFromDestination(videoContext);
        var depths = nodeDepths.values();
        depths = Array.from(depths).sort(function (a, b) {
            return b - a;
        });
        var maxDepth = depths[0];

        var xStep = w / (maxDepth + 1);

        var nodeHeight = h / videoContext._sourceNodes.length / 3;
        var nodeWidth = nodeHeight * 1.618;

        function calculateNodePos(node, nodeDepths, xStep, nodeHeight) {
            var depth = nodeDepths.get(node);
            nodeDepths.values();

            var count = 0;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = nodeDepths[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var nodeDepth = _step3.value;

                    if (nodeDepth[0] === node) break;
                    if (nodeDepth[1] === depth) count += 1;
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return {
                x: xStep * nodeDepths.get(node),
                y: nodeHeight * 1.5 * count + 50
            };
        }

        // "video":["#572A72", "#3C1255"],
        // "image":["#7D9F35", "#577714"],
        // "canvas":["#AA9639", "#806D15"]

        for (var i = 0; i < videoContext._renderGraph.connections.length; i++) {
            var conn = videoContext._renderGraph.connections[i];
            var source = calculateNodePos(conn.source, nodeDepths, xStep, nodeHeight);
            var destination = calculateNodePos(conn.destination, nodeDepths, xStep, nodeHeight);
            if (source !== undefined && destination !== undefined) {
                ctx.beginPath();
                //ctx.moveTo(source.x + nodeWidth/2, source.y + nodeHeight/2);
                var x1 = source.x + nodeWidth / 2;
                var y1 = source.y + nodeHeight / 2;
                var x2 = destination.x + nodeWidth / 2;
                var y2 = destination.y + nodeHeight / 2;
                var dx = x2 - x1;
                var dy = y2 - y1;

                var angle = Math.PI / 2 - Math.atan2(dx, dy);

                var distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

                var midX = Math.min(x1, x2) + (Math.max(x1, x2) - Math.min(x1, x2)) / 2;
                var midY = Math.min(y1, y2) + (Math.max(y1, y2) - Math.min(y1, y2)) / 2;

                var testX = Math.cos(angle + Math.PI / 2) * distance / 1.5 + midX;
                var testY = Math.sin(angle + Math.PI / 2) * distance / 1.5 + midY;
                // console.log(testX, testY);

                ctx.arc(testX, testY, distance / 1.2, angle - Math.PI + 0.95, angle - 0.95);

                //ctx.arcTo(source.x + nodeWidth/2 ,source.y + nodeHeight/2,destination.x + nodeWidth/2,destination.y + nodeHeight/2,100);
                //ctx.lineTo(midX, midY);
                ctx.stroke();
                //ctx.endPath();
            }
        }

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
            for (var _iterator4 = nodeDepths.keys()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var node = _step4.value;

                var pos = calculateNodePos(node, nodeDepths, xStep, nodeHeight);
                var color = "#AA9639";
                var text = "";
                if (node.displayName === _compositingnode.COMPOSITINGTYPE) {
                    color = "#000000";
                }
                if (node.displayName === _destinationnode.DESTINATIONTYPE) {
                    color = "#7D9F35";
                    text = "Output";
                }
                if (node.displayName === _videonode.VIDEOTYPE) {
                    color = "#572A72";
                    text = "Video";
                }
                if (node.displayName === _canvasnode.CANVASTYPE) {
                    color = "#572A72";
                    text = "Canvas";
                }
                if (node.displayName === _imagenode.IMAGETYPE) {
                    color = "#572A72";
                    text = "Image";
                }
                ctx.beginPath();
                ctx.fillStyle = color;
                ctx.fillRect(pos.x, pos.y, nodeWidth, nodeHeight);
                ctx.fill();

                ctx.fillStyle = "#000";
                ctx.textAlign = "center";
                ctx.font = "10px Arial";
                ctx.fillText(text, pos.x + nodeWidth / 2, pos.y + nodeHeight / 2 + 2.5);
                ctx.fill();
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                }
            } finally {
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }

        return;
    }

    function createSigmaGraphDataFromRenderGraph(videoContext) {
        function idForNode(node) {
            if (videoContext._sourceNodes.indexOf(node) !== -1) {
                var _id2 = "source " + node.displayName + " " + videoContext._sourceNodes.indexOf(node);
                return _id2;
            }
            var id = "processor " + node.displayName + " " + videoContext._processingNodes.indexOf(node);
            return id;
        }

        var graph = {
            nodes: [{
                id: idForNode(videoContext.destination),
                label: "Destination Node",
                x: 2.5,
                y: 0.5,
                size: 2,
                node: videoContext.destination
            }],
            edges: []
        };

        for (var i = 0; i < videoContext._sourceNodes.length; i++) {
            var sourceNode = videoContext._sourceNodes[i];
            var y = i * (1.0 / videoContext._sourceNodes.length);
            graph.nodes.push({
                id: idForNode(sourceNode),
                label: "Source " + i.toString(),
                x: 0,
                y: y,
                size: 2,
                color: "#572A72",
                node: sourceNode
            });
        }
        for (var _i = 0; _i < videoContext._processingNodes.length; _i++) {
            var processingNode = videoContext._processingNodes[_i];
            graph.nodes.push({
                id: idForNode(processingNode),
                x: Math.random() * 2.5,
                y: Math.random(),
                size: 2,
                node: processingNode
            });
        }

        for (var _i2 = 0; _i2 < videoContext._renderGraph.connections.length; _i2++) {
            var conn = videoContext._renderGraph.connections[_i2];
            graph.edges.push({
                id: "e" + _i2.toString(),
                source: idForNode(conn.source),
                target: idForNode(conn.destination)
            });
        }

        return graph;
    }

    function importSimpleEDL(ctx, playlist) {
        // Create a "track" node to connect all the clips to.
        var trackNode = ctx.compositor(_definitions2.default.COMBINE);

        // Create a source node for each of the clips.
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
            for (var _iterator5 = playlist[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var clip = _step5.value;

                var node = void 0;
                if (clip.type === "video") {
                    node = ctx.video(clip.src, clip.sourceStart);
                } else if (clip.type === "image") {
                    node = ctx.image(clip.src, clip.sourceStart);
                } else {
                    console.debug("Clip type " + clip.type + " not recognised, skipping.");
                    continue;
                }
                node.startAt(clip.start);
                node.stopAt(clip.start + clip.duration);
                node.connect(trackNode);
            }
        } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                    _iterator5.return();
                }
            } finally {
                if (_didIteratorError5) {
                    throw _iteratorError5;
                }
            }
        }

        return trackNode;
    }

    function visualiseVideoContextTimeline(videoContext, canvas, currentTime) {
        var ctx = canvas.getContext("2d");
        var w = canvas.width;
        var h = canvas.height;
        var trackHeight = h / videoContext._sourceNodes.length;
        var playlistDuration = videoContext.duration;

        if (currentTime > playlistDuration && !videoContext.endOnLastSourceEnd) playlistDuration = currentTime;

        if (videoContext.duration === Infinity) {
            var total = 0;
            for (var i = 0; i < videoContext._sourceNodes.length; i++) {
                var sourceNode = videoContext._sourceNodes[i];
                if (sourceNode._stopTime !== Infinity) total += sourceNode._stopTime;
            }

            if (total > videoContext.currentTime) {
                playlistDuration = total + 5;
            } else {
                playlistDuration = videoContext.currentTime + 5;
            }
        }
        var pixelsPerSecond = w / playlistDuration;
        var mediaSourceStyle = {
            video: ["#572A72", "#3C1255"],
            image: ["#7D9F35", "#577714"],
            canvas: ["#AA9639", "#806D15"]
        };

        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "#999";

        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
            for (var _iterator6 = videoContext._processingNodes[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var node = _step6.value;

                if (node.displayName !== _transitionnode.TRANSITIONTYPE) continue;
                for (var propertyName in node._transitions) {
                    var _iteratorNormalCompletion7 = true;
                    var _didIteratorError7 = false;
                    var _iteratorError7 = undefined;

                    try {
                        for (var _iterator7 = node._transitions[propertyName][Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                            var transition = _step7.value;

                            var tW = (transition.end - transition.start) * pixelsPerSecond;
                            var tH = h;
                            var tX = transition.start * pixelsPerSecond;
                            var tY = 0;
                            ctx.fillStyle = "rgba(0,0,0, 0.3)";
                            ctx.fillRect(tX, tY, tW, tH);
                            ctx.fill();
                        }
                    } catch (err) {
                        _didIteratorError7 = true;
                        _iteratorError7 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                _iterator7.return();
                            }
                        } finally {
                            if (_didIteratorError7) {
                                throw _iteratorError7;
                            }
                        }
                    }
                }
            }
        } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                    _iterator6.return();
                }
            } finally {
                if (_didIteratorError6) {
                    throw _iteratorError6;
                }
            }
        }

        for (var _i3 = 0; _i3 < videoContext._sourceNodes.length; _i3++) {
            var _sourceNode = videoContext._sourceNodes[_i3];
            var duration = _sourceNode._stopTime - _sourceNode._startTime;
            if (duration === Infinity) duration = videoContext.currentTime;
            var start = _sourceNode._startTime;

            var msW = duration * pixelsPerSecond;
            var msH = trackHeight;
            var msX = start * pixelsPerSecond;
            var msY = trackHeight * _i3;
            ctx.fillStyle = mediaSourceStyle.video[_i3 % mediaSourceStyle.video.length];

            ctx.fillRect(msX, msY, msW, msH);
            ctx.fill();
        }

        if (currentTime !== undefined) {
            ctx.fillStyle = "#000";
            ctx.fillRect(currentTime * pixelsPerSecond, 0, 1, h);
        }
    }

    var UpdateablesManager = exports.UpdateablesManager = function () {
        function UpdateablesManager() {
            _classCallCheck(this, UpdateablesManager);

            this._updateables = [];
            this._useWebworker = false;
            this._active = false;
            this._previousRAFTime = undefined;
            this._previousWorkerTime = undefined;

            this._webWorkerString = "\
            var running = false;\
            function tick(){\
                postMessage(Date.now());\
                if (running){\
                    setTimeout(tick, 1000/20);\
                }\
            }\
            self.addEventListener('message',function(msg){\
                var data = msg.data;\
                if (data === 'start'){\
                    running = true;\
                    tick();\
                }\
                if (data === 'stop') running = false;\
            });";
            this._webWorker = undefined;
        }

        _createClass(UpdateablesManager, [{
            key: "_initWebWorker",
            value: function _initWebWorker() {
                var _this = this;

                window.URL = window.URL || window.webkitURL;
                var blob = new Blob([this._webWorkerString], {
                    type: "application/javascript"
                });
                this._webWorker = new Worker(URL.createObjectURL(blob));
                this._webWorker.onmessage = function (msg) {
                    var time = msg.data;
                    _this._updateWorkerTime(time);
                };
            }
        }, {
            key: "_lostVisibility",
            value: function _lostVisibility() {
                this._previousWorkerTime = Date.now();
                this._useWebworker = true;
                if (!this._webWorker) {
                    this._initWebWorker();
                }
                this._webWorker.postMessage("start");
            }
        }, {
            key: "_gainedVisibility",
            value: function _gainedVisibility() {
                this._useWebworker = false;
                this._previousRAFTime = undefined;
                if (this._webWorker) this._webWorker.postMessage("stop");
                requestAnimationFrame(this._updateRAFTime.bind(this));
            }
        }, {
            key: "_init",
            value: function _init() {
                var _this2 = this;

                if (!window.Worker) return;

                //If page visibility API not present fallback to using "focus" and "blur" event listeners.
                if (typeof document.hidden === "undefined") {
                    window.addEventListener("focus", this._gainedVisibility.bind(this));
                    window.addEventListener("blur", this._lostVisibility.bind(this));
                    return;
                }
                //Otherwise we can use the visibility API to do the loose/gain focus properly
                document.addEventListener("visibilitychange", function () {
                    if (document.hidden === true) {
                        _this2._lostVisibility();
                    } else {
                        _this2._gainedVisibility();
                    }
                }, false);

                requestAnimationFrame(this._updateRAFTime.bind(this));
            }
        }, {
            key: "_updateWorkerTime",
            value: function _updateWorkerTime(time) {
                var dt = (time - this._previousWorkerTime) / 1000;
                if (dt !== 0) this._update(dt);
                this._previousWorkerTime = time;
            }
        }, {
            key: "_updateRAFTime",
            value: function _updateRAFTime(time) {
                if (this._previousRAFTime === undefined) this._previousRAFTime = time;
                var dt = (time - this._previousRAFTime) / 1000;
                if (dt !== 0) this._update(dt);
                this._previousRAFTime = time;
                if (!this._useWebworker) requestAnimationFrame(this._updateRAFTime.bind(this));
            }
        }, {
            key: "_update",
            value: function _update(dt) {
                for (var i = 0; i < this._updateables.length; i++) {
                    this._updateables[i]._update(parseFloat(dt));
                }
            }
        }, {
            key: "register",
            value: function register(updateable) {
                this._updateables.push(updateable);
                if (this._active === false) {
                    this._active = true;
                    this._init();
                }
            }
        }]);

        return UpdateablesManager;
    }();

    function mediaElementHasSource(_ref) {
        var src = _ref.src,
            srcObject = _ref.srcObject;

        return !((src === "" || src === undefined) && srcObject == null);
    }

    function addPadding(videoContext, videoNode, paddingOpts) {
        var effectNode = videoNode;

        if (paddingOpts.crop) {
            var crop = videoContext.effect(_definitions2.default.CROP);
            crop.rect = paddingOpts.crop;
            effectNode.connect(crop);

            effectNode = crop;
        }

        if (Math.abs(paddingOpts.ow / paddingOpts.oh - paddingOpts.vw / paddingOpts.vh) < 0.01) {
            return effectNode;
        }

        var step = 5.0;

        var hBlur = videoContext.effect(_definitions2.default.GLASSBLUR);
        hBlur.u_direction = [step / paddingOpts.ow, 0.0];
        effectNode.connect(hBlur);

        var vBlur = videoContext.effect(_definitions2.default.GLASSBLUR);
        vBlur.u_direction = [0.0, step / paddingOpts.oh];
        hBlur.connect(vBlur);

        var glassFill = videoContext.effect(_definitions2.default.GLASSFILL);
        var padding = glassFill.calPadding(paddingOpts.ow, paddingOpts.oh, paddingOpts.vw, paddingOpts.vh);
        glassFill.u_fx = padding.u_fx;
        glassFill.u_fy = padding.u_fy;

        effectNode.connect(glassFill);
        vBlur.connect(glassFill);

        return glassFill;
    }

    /* eslint-disable */
    function addMosaic(videoContext, videoNode, mosaicOpts) {
        var lastNode = videoNode;
        switch (mosaicOpts.mode) {
            case 1:
                {
                    for (var i = 0; i < mosaicOpts.rects.length; ++i) {
                        var effect = videoContext.effect(_definitions2.default.MOSAIC);
                        var rectParams = mosaicOpts.rects[i];
                        effect.u_mosaic = rectParams.rect;
                        if (rectParams.start != undefined) {
                            effect.start = rectParams.start;
                        }

                        if (rectParams.end != undefined) {
                            effect.end = rectParams.end;
                        }

                        lastNode.connect(effect);
                        lastNode = effect;
                    }
                    break;
                }
            case 2:
                {
                    var step = 2.0;
                    for (var _i4 = 0; _i4 < mosaicOpts.rects.length; ++_i4) {
                        var _rectParams = mosaicOpts.rects[_i4];
                        var hEffect = videoContext.effect(_definitions2.default.BLURRECT);
                        hEffect.u_direction = [step / mosaicOpts.vw, 0.0];
                        hEffect.u_mosaic = _rectParams.rect;
                        if (_rectParams.start != undefined) {
                            hEffect.start = _rectParams.start;
                        }
                        if (_rectParams.end != undefined) {
                            hEffect.end = _rectParams.end;
                        }
                        lastNode.connect(hEffect);
                        lastNode = hEffect;

                        var vEffect = videoContext.effect(_definitions2.default.BLURRECT);
                        vEffect.u_direction = [0.0, step / mosaicOpts.vh];
                        vEffect.u_mosaic = _rectParams.rect;
                        if (_rectParams.start != undefined) {
                            vEffect.start = _rectParams.start;
                        }
                        if (_rectParams.end != undefined) {
                            vEffect.end = _rectParams.end;
                        }
                        hEffect.connect(vEffect);
                        lastNode = vEffect;
                    }
                    break;
                }
        }

        return lastNode;
    }
});

/***/ }),

/***/ "./src/videocontext.js":
/*!*****************************!*\
  !*** ./src/videocontext.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./utils.js */ "./src/utils.js"), __webpack_require__(/*! ./SourceNodes/nodes.js */ "./src/SourceNodes/nodes.js"), __webpack_require__(/*! ./SourceNodes/videonode.js */ "./src/SourceNodes/videonode.js"), __webpack_require__(/*! ./SourceNodes/audionode.js */ "./src/SourceNodes/audionode.js"), __webpack_require__(/*! ./SourceNodes/imagenode.js */ "./src/SourceNodes/imagenode.js"), __webpack_require__(/*! ./SourceNodes/canvasnode.js */ "./src/SourceNodes/canvasnode.js"), __webpack_require__(/*! ./SourceNodes/sourcenode.js */ "./src/SourceNodes/sourcenode.js"), __webpack_require__(/*! ./ProcessingNodes/compositingnode.js */ "./src/ProcessingNodes/compositingnode.js"), __webpack_require__(/*! ./DestinationNode/destinationnode.js */ "./src/DestinationNode/destinationnode.js"), __webpack_require__(/*! ./ProcessingNodes/effectnode.js */ "./src/ProcessingNodes/effectnode.js"), __webpack_require__(/*! ./ProcessingNodes/transitionnode.js */ "./src/ProcessingNodes/transitionnode.js"), __webpack_require__(/*! ./rendergraph.js */ "./src/rendergraph.js"), __webpack_require__(/*! ./videoelementcache.js */ "./src/videoelementcache.js"), __webpack_require__(/*! ./Definitions/definitions.js */ "./src/Definitions/definitions.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _utils, _nodes, _videonode, _audionode, _imagenode, _canvasnode, _sourcenode, _compositingnode, _destinationnode, _effectnode, _transitionnode, _rendergraph, _videoelementcache, _definitions) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _nodes2 = _interopRequireDefault(_nodes);

    var _videonode2 = _interopRequireDefault(_videonode);

    var _audionode2 = _interopRequireDefault(_audionode);

    var _imagenode2 = _interopRequireDefault(_imagenode);

    var _canvasnode2 = _interopRequireDefault(_canvasnode);

    var _compositingnode2 = _interopRequireDefault(_compositingnode);

    var _destinationnode2 = _interopRequireDefault(_destinationnode);

    var _effectnode2 = _interopRequireDefault(_effectnode);

    var _transitionnode2 = _interopRequireDefault(_transitionnode);

    var _rendergraph2 = _interopRequireDefault(_rendergraph);

    var _videoelementcache2 = _interopRequireDefault(_videoelementcache);

    var _definitions2 = _interopRequireDefault(_definitions);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var updateablesManager = new _utils.UpdateablesManager();

    /**
     * VideoContext.
     * @module VideoContext
     */

    var VideoContext = function () {
        /**
         * Initialise the VideoContext and render to the specific canvas. A 2nd parameter can be passed to the constructor which is a function that get's called if the VideoContext fails to initialise.
         *
         * @param {Canvas} canvas - the canvas element to render the output to.
         * @param {function} [initErrorCallback] - a callback for if initialising the canvas failed.
         * @param {Object} [options] - a number of custom options which can be set on the VideoContext, generally best left as default.
         * @param {boolean} [options.manualUpdate=false] - Make Video Context not use the updatable manager
         * @param {boolean} [options.endOnLastSourceEnd=true] - Trigger an `ended` event when the current time goes above the duration of the composition
         * @param {boolean} [options.useVideoElementCache=true] - Creates a pool of video element that will be all initialised at the same time. Important for mobile support
         * @param {number} [options.videoElementCacheSize=6] - Number of video element in the pool
         * @param {object} [options.webglContextAttributes] - A set of attributes used when getting the GL context. Alpha will always be `true`.
         *
         * @example
         * var canvasElement = document.getElementById("canvas");
         * var ctx = new VideoContext(canvasElement, () => console.error("Sorry, your browser dosen\'t support WebGL"));
         * var videoNode = ctx.video("video.mp4");
         * videoNode.connect(ctx.destination);
         * videoNode.start(0);
         * videoNode.stop(10);
         * ctx.play();
         *
         */
        function VideoContext(canvas, initErrorCallback) {
            var _this = this;

            var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                _ref$manualUpdate = _ref.manualUpdate,
                manualUpdate = _ref$manualUpdate === undefined ? false : _ref$manualUpdate,
                _ref$endOnLastSourceE = _ref.endOnLastSourceEnd,
                endOnLastSourceEnd = _ref$endOnLastSourceE === undefined ? true : _ref$endOnLastSourceE,
                _ref$useVideoElementC = _ref.useVideoElementCache,
                useVideoElementCache = _ref$useVideoElementC === undefined ? true : _ref$useVideoElementC,
                _ref$videoElementCach = _ref.videoElementCacheSize,
                videoElementCacheSize = _ref$videoElementCach === undefined ? 6 : _ref$videoElementCach,
                _ref$webglContextAttr = _ref.webglContextAttributes,
                webglContextAttributes = _ref$webglContextAttr === undefined ? {} : _ref$webglContextAttr;

            _classCallCheck(this, VideoContext);

            this._canvas = canvas;
            this._endOnLastSourceEnd = endOnLastSourceEnd;

            this._gl = canvas.getContext("experimental-webgl", Object.assign({ preserveDrawingBuffer: true }, // can be overriden
            webglContextAttributes, { alpha: false // Can't be overriden because it is copied last
            }));
            if (this._gl === null) {
                console.error("Failed to intialise WebGL.");
                if (initErrorCallback) initErrorCallback();
                return;
            }

            // Initialise the video element cache
            this._useVideoElementCache = useVideoElementCache;
            if (this._useVideoElementCache) {
                this._videoElementCache = new _videoelementcache2.default(videoElementCacheSize);
            }

            // Create a unique ID for this VideoContext which can be used in the debugger.
            if (this._canvas.id) {
                if (typeof this._canvas.id === "string" || this._canvas.id instanceof String) {
                    this._id = canvas.id;
                }
            }
            if (this._id === undefined) this._id = (0, _utils.generateRandomId)();
            if (window.__VIDEOCONTEXT_REFS__ === undefined) window.__VIDEOCONTEXT_REFS__ = {};
            window.__VIDEOCONTEXT_REFS__[this._id] = this;

            this._renderGraph = new _rendergraph2.default();
            this._sourceNodes = [];
            this._processingNodes = [];
            this._timeline = [];
            this._currentTime = 0;
            this._state = VideoContext.STATE.PAUSED;
            this._playbackRate = 1.0;
            this._volume = 1.0;
            this._sourcesPlaying = undefined;
            this._destinationNode = new _destinationnode2.default(this._gl, this._renderGraph);

            this._callbacks = new Map();
            Object.keys(VideoContext.EVENTS).forEach(function (name) {
                return _this._callbacks.set(VideoContext.EVENTS[name], []);
            });

            this._timelineCallbacks = [];

            if (!manualUpdate) {
                updateablesManager.register(this);
            }
        }

        /**
         * Returns an ID assigned to the VideoContext instance. This will either be the same id as the underlying canvas element,
         * or a uniquely generated one.
         */


        _createClass(VideoContext, [{
            key: "registerTimelineCallback",
            value: function registerTimelineCallback(time, func) {
                var ordering = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

                this._timelineCallbacks.push({
                    time: time,
                    func: func,
                    ordering: ordering
                });
            }
        }, {
            key: "unregisterTimelineCallback",
            value: function unregisterTimelineCallback(func) {
                var toRemove = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this._timelineCallbacks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var callback = _step.value;

                        if (callback.func === func) {
                            toRemove.push(callback);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = toRemove[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _callback = _step2.value;

                        var index = this._timelineCallbacks.indexOf(_callback);
                        this._timelineCallbacks.splice(index, 1);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        }, {
            key: "registerCallback",
            value: function registerCallback(type, func) {
                if (!this._callbacks.has(type)) return false;
                this._callbacks.get(type).push(func);
            }
        }, {
            key: "unregisterCallback",
            value: function unregisterCallback(func) {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = this._callbacks.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var funcArray = _step3.value;

                        var index = funcArray.indexOf(func);
                        if (index !== -1) {
                            funcArray.splice(index, 1);
                            return true;
                        }
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                return false;
            }
        }, {
            key: "_callCallbacks",
            value: function _callCallbacks(type) {
                var funcArray = this._callbacks.get(type);
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = funcArray[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var func = _step4.value;

                        func(this._currentTime);
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }
            }
        }, {
            key: "play",
            value: function play() {
                var _this2 = this;

                console.debug("VideoContext - playing");
                //Initialise the video elemnt cache
                if (this._videoElementCache) this._videoElementCache.init().then(function () {
                    return _this2._state = VideoContext.STATE.PLAYING;
                });else {
                    // set the state
                    this._state = VideoContext.STATE.PLAYING;
                }
                return true;
            }
        }, {
            key: "pause",
            value: function pause() {
                console.debug("VideoContext - pausing");
                this._state = VideoContext.STATE.PAUSED;
                return true;
            }
        }, {
            key: "video",
            value: function video(src) {
                var sourceOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var preloadTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
                var videoElementAttributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

                var videoNode = new _videonode2.default(src, this._gl, this._renderGraph, this._currentTime, this._playbackRate, sourceOffset, preloadTime, this._videoElementCache, videoElementAttributes);
                this._sourceNodes.push(videoNode);
                return videoNode;
            }
        }, {
            key: "paddingNode",
            value: function paddingNode(videoNode, paddingOpts) {
                return (0, _utils.addPadding)(this, videoNode, paddingOpts);
            }
        }, {
            key: "mosaicNode",
            value: function mosaicNode(videoNode, mosaicOpts) {
                return (0, _utils.addMosaic)(this, videoNode, mosaicOpts);
            }
        }, {
            key: "audio",
            value: function audio(src) {
                var sourceOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var preloadTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
                var audioElementAttributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

                var audioNode = new _audionode2.default(src, this._gl, this._renderGraph, this._currentTime, this._playbackRate, sourceOffset, preloadTime, this._audioElementCache, audioElementAttributes);
                this._sourceNodes.push(audioNode);
                return audioNode;
            }
        }, {
            key: "createVideoSourceNode",
            value: function createVideoSourceNode(src) {
                var sourceOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var preloadTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
                var videoElementAttributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

                this._deprecate("Warning: createVideoSourceNode will be deprecated in v1.0, please switch to using VideoContext.video()");
                return this.video(src, sourceOffset, preloadTime, videoElementAttributes);
            }
        }, {
            key: "image",
            value: function image(src) {
                var preloadTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
                var imageElementAttributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

                var imageNode = new _imagenode2.default(src, this._gl, this._renderGraph, this._currentTime, preloadTime, imageElementAttributes);
                this._sourceNodes.push(imageNode);
                return imageNode;
            }
        }, {
            key: "createImageSourceNode",
            value: function createImageSourceNode(src) {
                var sourceOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var preloadTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
                var imageElementAttributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

                this._deprecate("Warning: createImageSourceNode will be deprecated in v1.0, please switch to using VideoContext.image()");
                return this.image(src, sourceOffset, preloadTime, imageElementAttributes);
            }
        }, {
            key: "canvas",
            value: function canvas(_canvas) {
                var canvasNode = new _canvasnode2.default(_canvas, this._gl, this._renderGraph, this._currentTime);
                this._sourceNodes.push(canvasNode);
                return canvasNode;
            }
        }, {
            key: "createCanvasSourceNode",
            value: function createCanvasSourceNode(canvas) {
                var sourceOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var preloadTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;

                this._deprecate("Warning: createCanvasSourceNode will be deprecated in v1.0, please switch to using VideoContext.canvas()");
                return this.canvas(canvas, sourceOffset, preloadTime);
            }
        }, {
            key: "effect",
            value: function effect(definition) {
                var effectNode = new _effectnode2.default(this._gl, this._renderGraph, definition);
                this._processingNodes.push(effectNode);
                return effectNode;
            }
        }, {
            key: "createEffectNode",
            value: function createEffectNode(definition) {
                this._deprecate("Warning: createEffectNode will be deprecated in v1.0, please switch to using VideoContext.effect()");
                return this.effect(definition);
            }
        }, {
            key: "compositor",
            value: function compositor(definition) {
                var compositingNode = new _compositingnode2.default(this._gl, this._renderGraph, definition);
                this._processingNodes.push(compositingNode);
                return compositingNode;
            }
        }, {
            key: "customSourceNode",
            value: function customSourceNode(CustomSourceNode, src) {
                for (var _len = arguments.length, options = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    options[_key - 2] = arguments[_key];
                }

                var customSourceNode = new (Function.prototype.bind.apply(CustomSourceNode, [null].concat([src, this._gl, this._renderGraph, this._currentTime], options)))();
                this._sourceNodes.push(customSourceNode);
                return customSourceNode;
            }
        }, {
            key: "createCompositingNode",
            value: function createCompositingNode(definition) {
                this._deprecate("Warning: createCompositingNode will be deprecated in v1.0, please switch to using VideoContext.compositor()");
                return this.compositor(definition);
            }
        }, {
            key: "transition",
            value: function transition(definition) {
                var transitionNode = new _transitionnode2.default(this._gl, this._renderGraph, definition);
                this._processingNodes.push(transitionNode);
                return transitionNode;
            }
        }, {
            key: "createTransitionNode",
            value: function createTransitionNode(definition) {
                this._deprecate("Warning: createTransitionNode will be deprecated in v1.0, please switch to using VideoContext.transition()");
                return this.transition(definition);
            }
        }, {
            key: "_isStalled",
            value: function _isStalled() {
                for (var i = 0; i < this._sourceNodes.length; i++) {
                    var sourceNode = this._sourceNodes[i];
                    if (!sourceNode._isReady()) {
                        return true;
                    }
                }
                return false;
            }
        }, {
            key: "update",
            value: function update(dt) {
                this._update(dt);
            }
        }, {
            key: "_update",
            value: function _update(dt) {
                //Remove any destroyed nodes
                this._sourceNodes = this._sourceNodes.filter(function (sourceNode) {
                    if (!sourceNode.destroyed) return sourceNode;
                });

                this._processingNodes = this._processingNodes.filter(function (processingNode) {
                    if (!processingNode.destroyed) return processingNode;
                });

                if (this._state === VideoContext.STATE.PLAYING || this._state === VideoContext.STATE.STALLED || this._state === VideoContext.STATE.PAUSED) {
                    this._callCallbacks(VideoContext.EVENTS.UPDATE);

                    if (this._state !== VideoContext.STATE.PAUSED) {
                        if (this._isStalled()) {
                            this._callCallbacks(VideoContext.EVENTS.STALLED);
                            this._state = VideoContext.STATE.STALLED;
                        } else {
                            this._state = VideoContext.STATE.PLAYING;
                        }
                    }

                    if (this._state === VideoContext.STATE.PLAYING) {
                        //Handle timeline callbacks.
                        var activeCallbacks = new Map();
                        var _iteratorNormalCompletion5 = true;
                        var _didIteratorError5 = false;
                        var _iteratorError5 = undefined;

                        try {
                            for (var _iterator5 = this._timelineCallbacks[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                var callback = _step5.value;

                                if (callback.time >= this.currentTime && callback.time < this._currentTime + dt * this._playbackRate) {
                                    //group the callbacks by time
                                    if (!activeCallbacks.has(callback.time)) activeCallbacks.set(callback.time, []);
                                    activeCallbacks.get(callback.time).push(callback);
                                }
                            }

                            //Sort the groups of callbacks by the times of the groups
                        } catch (err) {
                            _didIteratorError5 = true;
                            _iteratorError5 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                    _iterator5.return();
                                }
                            } finally {
                                if (_didIteratorError5) {
                                    throw _iteratorError5;
                                }
                            }
                        }

                        var timeIntervals = Array.from(activeCallbacks.keys());
                        timeIntervals.sort(function (a, b) {
                            return a - b;
                        });

                        var _iteratorNormalCompletion6 = true;
                        var _didIteratorError6 = false;
                        var _iteratorError6 = undefined;

                        try {
                            for (var _iterator6 = timeIntervals[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                var t = _step6.value;

                                var callbacks = activeCallbacks.get(t);
                                callbacks.sort(function (a, b) {
                                    return a.ordering - b.ordering;
                                });
                                var _iteratorNormalCompletion7 = true;
                                var _didIteratorError7 = false;
                                var _iteratorError7 = undefined;

                                try {
                                    for (var _iterator7 = callbacks[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                        var _callback2 = _step7.value;

                                        _callback2.func();
                                    }
                                } catch (err) {
                                    _didIteratorError7 = true;
                                    _iteratorError7 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                            _iterator7.return();
                                        }
                                    } finally {
                                        if (_didIteratorError7) {
                                            throw _iteratorError7;
                                        }
                                    }
                                }
                            }
                        } catch (err) {
                            _didIteratorError6 = true;
                            _iteratorError6 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                                    _iterator6.return();
                                }
                            } finally {
                                if (_didIteratorError6) {
                                    throw _iteratorError6;
                                }
                            }
                        }

                        this._currentTime += dt * this._playbackRate;
                        if (this._currentTime > this.duration && this._endOnLastSourceEnd) {
                            //Do an update od the sourcenodes in case anything in the "ended" callbacks modifes currentTime and sources haven't had a chance to stop.
                            for (var i = 0; i < this._sourceNodes.length; i++) {
                                this._sourceNodes[i]._update(this._currentTime);
                            }
                            this._state = VideoContext.STATE.ENDED;
                            this._callCallbacks(VideoContext.EVENTS.ENDED);
                        }
                    }

                    var sourcesPlaying = false;

                    for (var _i = 0; _i < this._sourceNodes.length; _i++) {
                        var sourceNode = this._sourceNodes[_i];

                        if (this._state === VideoContext.STATE.STALLED) {
                            if (sourceNode._isReady() && sourceNode._state === _sourcenode.SOURCENODESTATE.playing) sourceNode._pause();
                        }
                        if (this._state === VideoContext.STATE.PAUSED) {
                            sourceNode._pause();
                        }
                        if (this._state === VideoContext.STATE.PLAYING) {
                            sourceNode._play();
                        }
                        sourceNode._update(this._currentTime);
                        if (sourceNode._state === _sourcenode.SOURCENODESTATE.paused || sourceNode._state === _sourcenode.SOURCENODESTATE.playing) {
                            sourcesPlaying = true;
                        }
                    }

                    if (sourcesPlaying !== this._sourcesPlaying && this._state === VideoContext.STATE.PLAYING) {
                        if (sourcesPlaying === true) {
                            this._callCallbacks(VideoContext.EVENTS.CONTENT);
                        } else {
                            this._callCallbacks(VideoContext.EVENTS.NOCONTENT);
                        }
                        this._sourcesPlaying = sourcesPlaying;
                    }

                    /*
                     * Itterate the directed acyclic graph using Khan's algorithm (KHAAAAAN!).
                     *
                     * This has highlighted a bunch of ineffencies in the rendergraph class about how its stores connections.
                     * Mainly the fact that to get inputs for a node you have to iterate the full list of connections rather than
                     * a node owning it's connections.
                     * The trade off with changing this is making/removing connections becomes more costly performance wise, but
                     * this is definately worth while because getting the connnections is a much more common operation.
                     *
                     * TL;DR Future matt - refactor this.
                     *
                     */
                    var sortedNodes = [];
                    var connections = this._renderGraph.connections.slice();
                    var nodes = _rendergraph2.default.getInputlessNodes(connections);

                    while (nodes.length > 0) {
                        var node = nodes.pop();
                        sortedNodes.push(node);
                        var _iteratorNormalCompletion8 = true;
                        var _didIteratorError8 = false;
                        var _iteratorError8 = undefined;

                        try {
                            for (var _iterator8 = _rendergraph2.default.outputEdgesFor(node, connections)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                                var edge = _step8.value;

                                var index = connections.indexOf(edge);
                                if (index > -1) connections.splice(index, 1);
                                if (_rendergraph2.default.inputEdgesFor(edge.destination, connections).length === 0) {
                                    nodes.push(edge.destination);
                                }
                            }
                        } catch (err) {
                            _didIteratorError8 = true;
                            _iteratorError8 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion8 && _iterator8.return) {
                                    _iterator8.return();
                                }
                            } finally {
                                if (_didIteratorError8) {
                                    throw _iteratorError8;
                                }
                            }
                        }
                    }

                    var _iteratorNormalCompletion9 = true;
                    var _didIteratorError9 = false;
                    var _iteratorError9 = undefined;

                    try {
                        for (var _iterator9 = sortedNodes[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                            var _node = _step9.value;

                            if (this._sourceNodes.indexOf(_node) === -1) {
                                _node._update(this._currentTime);
                                _node._render();
                            }
                        }
                    } catch (err) {
                        _didIteratorError9 = true;
                        _iteratorError9 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion9 && _iterator9.return) {
                                _iterator9.return();
                            }
                        } finally {
                            if (_didIteratorError9) {
                                throw _iteratorError9;
                            }
                        }
                    }
                }
            }
        }, {
            key: "reset",
            value: function reset() {
                var _this3 = this;

                var _iteratorNormalCompletion10 = true;
                var _didIteratorError10 = false;
                var _iteratorError10 = undefined;

                try {
                    for (var _iterator10 = this._callbacks[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                        var callback = _step10.value;

                        this.unregisterCallback(callback);
                    }
                } catch (err) {
                    _didIteratorError10 = true;
                    _iteratorError10 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion10 && _iterator10.return) {
                            _iterator10.return();
                        }
                    } finally {
                        if (_didIteratorError10) {
                            throw _iteratorError10;
                        }
                    }
                }

                var _iteratorNormalCompletion11 = true;
                var _didIteratorError11 = false;
                var _iteratorError11 = undefined;

                try {
                    for (var _iterator11 = this._sourceNodes[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                        var node = _step11.value;

                        node.destroy();
                    }
                } catch (err) {
                    _didIteratorError11 = true;
                    _iteratorError11 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion11 && _iterator11.return) {
                            _iterator11.return();
                        }
                    } finally {
                        if (_didIteratorError11) {
                            throw _iteratorError11;
                        }
                    }
                }

                var _iteratorNormalCompletion12 = true;
                var _didIteratorError12 = false;
                var _iteratorError12 = undefined;

                try {
                    for (var _iterator12 = this._processingNodes[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                        var _node2 = _step12.value;

                        _node2.destroy();
                    }
                } catch (err) {
                    _didIteratorError12 = true;
                    _iteratorError12 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion12 && _iterator12.return) {
                            _iterator12.return();
                        }
                    } finally {
                        if (_didIteratorError12) {
                            throw _iteratorError12;
                        }
                    }
                }

                this._update(0);
                this._sourceNodes = [];
                this._processingNodes = [];
                this._timeline = [];
                this._currentTime = 0;
                this._state = VideoContext.STATE.PAUSED;
                this._playbackRate = 1.0;
                this._sourcesPlaying = undefined;
                Object.keys(VideoContext.EVENTS).forEach(function (name) {
                    return _this3._callbacks.set(VideoContext.EVENTS[name], []);
                });
                this._timelineCallbacks = [];
            }
        }, {
            key: "_deprecate",
            value: function _deprecate(msg) {
                console.log(msg);
            }
        }, {
            key: "snapshot",
            value: function snapshot() {
                return (0, _utils.snapshot)(this);
            }
        }, {
            key: "id",
            get: function get() {
                return this._id;
            },
            set: function set(newID) {
                delete window.__VIDEOCONTEXT_REFS__[this._id];
                if (window.__VIDEOCONTEXT_REFS__[newID] !== undefined) console.warn("Warning; setting id to that of an existing VideoContext instance.");
                window.__VIDEOCONTEXT_REFS__[newID] = this;
                this._id = newID;
            }
        }, {
            key: "element",
            get: function get() {
                return this._canvas;
            }
        }, {
            key: "state",
            get: function get() {
                return this._state;
            }
        }, {
            key: "currentTime",
            set: function set(currentTime) {
                if (currentTime < this.duration && this._state === VideoContext.STATE.ENDED) this._state = VideoContext.STATE.PAUSED;

                if (typeof currentTime === "string" || currentTime instanceof String) {
                    currentTime = parseFloat(currentTime);
                }

                for (var i = 0; i < this._sourceNodes.length; i++) {
                    this._sourceNodes[i]._seek(currentTime);
                }
                for (var _i2 = 0; _i2 < this._processingNodes.length; _i2++) {
                    this._processingNodes[_i2]._seek(currentTime);
                }
                this._currentTime = currentTime;
            },
            get: function get() {
                return this._currentTime;
            }
        }, {
            key: "duration",
            get: function get() {
                var maxTime = 0;
                for (var i = 0; i < this._sourceNodes.length; i++) {
                    if (this._sourceNodes[i].state !== _sourcenode.SOURCENODESTATE.waiting && this._sourceNodes[i]._stopTime > maxTime) {
                        maxTime = this._sourceNodes[i]._stopTime;
                    }
                }
                return maxTime;
            }
        }, {
            key: "destination",
            get: function get() {
                return this._destinationNode;
            }
        }, {
            key: "playbackRate",
            set: function set(rate) {
                if (rate <= 0) {
                    throw new RangeError("playbackRate must be greater than 0");
                }
                var _iteratorNormalCompletion13 = true;
                var _didIteratorError13 = false;
                var _iteratorError13 = undefined;

                try {
                    for (var _iterator13 = this._sourceNodes[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                        var node = _step13.value;

                        if (node.constructor.name === _videonode.VIDEOTYPE) {
                            node._globalPlaybackRate = rate;
                            node._playbackRateUpdated = true;
                        }
                    }
                } catch (err) {
                    _didIteratorError13 = true;
                    _iteratorError13 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion13 && _iterator13.return) {
                            _iterator13.return();
                        }
                    } finally {
                        if (_didIteratorError13) {
                            throw _iteratorError13;
                        }
                    }
                }

                this._playbackRate = rate;
            },
            get: function get() {
                return this._playbackRate;
            }
        }, {
            key: "volume",
            set: function set(vol) {
                var _iteratorNormalCompletion14 = true;
                var _didIteratorError14 = false;
                var _iteratorError14 = undefined;

                try {
                    for (var _iterator14 = this._sourceNodes[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                        var node = _step14.value;

                        if (node instanceof _videonode2.default || node instanceof _audionode2.default) {
                            node.volume = vol;
                        }
                    }
                } catch (err) {
                    _didIteratorError14 = true;
                    _iteratorError14 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion14 && _iterator14.return) {
                            _iterator14.return();
                        }
                    } finally {
                        if (_didIteratorError14) {
                            throw _iteratorError14;
                        }
                    }
                }

                this._volume = vol;
            },
            get: function get() {
                return this._volume;
            }
        }], [{
            key: "DEFINITIONS",
            get: function get() {
                return _definitions2.default;
            }
        }, {
            key: "NODES",
            get: function get() {
                return _nodes2.default;
            }
        }]);

        return VideoContext;
    }();

    exports.default = VideoContext;


    /**
     * Video Context States
     * @readonly
     * @typedef {Object} STATE
     * @property {number} STATE.PLAYING - All sources are active
     * @property {number} STATE.PAUSED - All sources are paused
     * @property {number} STATE.STALLED - One or more sources is unable to play
     * @property {number} STATE.ENDED - All sources have finished playing
     * @property {number} STATE.BROKEN - The render graph is in a broken state
     */
    var STATE = Object.freeze({
        PLAYING: 0,
        PAUSED: 1,
        STALLED: 2,
        ENDED: 3,
        BROKEN: 4
    });
    VideoContext.STATE = STATE;

    /**
     * Video Context Events
     * @readonly
     * @typedef {Object} STATE
     * @property {string} STATE.UPDATE - Called any time a frame is rendered to the screen.
     * @property {string} STATE.STALLED - happens anytime the playback is stopped due to buffer starvation for playing assets.
     * @property {string} STATE.ENDED - Called once plackback has finished (i.e ctx.currentTime == ctx.duration).
     * @property {string} STATE.CONTENT - Called at the start of a time region where there is content playing out of one or more sourceNodes.
     * @property {number} STATE.NOCONTENT - Called at the start of any time region where the VideoContext is still playing, but there are currently no active playing sources.
     */
    var EVENTS = Object.freeze({
        UPDATE: "update",
        STALLED: "stalled",
        ENDED: "ended",
        CONTENT: "content",
        NOCONTENT: "nocontent"
    });
    VideoContext.EVENTS = EVENTS;

    VideoContext.visualiseVideoContextTimeline = _utils.visualiseVideoContextTimeline;
    VideoContext.visualiseVideoContextGraph = _utils.visualiseVideoContextGraph;
    VideoContext.createControlFormForNode = _utils.createControlFormForNode;
    VideoContext.createSigmaGraphDataFromRenderGraph = _utils.createSigmaGraphDataFromRenderGraph;
    VideoContext.exportToJSON = _utils.exportToJSON;
    VideoContext.updateablesManager = updateablesManager;
    VideoContext.importSimpleEDL = _utils.importSimpleEDL;
    module.exports = exports["default"];
});

/***/ }),

/***/ "./src/videoelementcache.js":
/*!**********************************!*\
  !*** ./src/videoelementcache.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ./utils */ "./src/utils.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, exports, _utils) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var VideoElementCache = function () {
        function VideoElementCache() {
            var cache_size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;

            _classCallCheck(this, VideoElementCache);

            this._elements = [];
            this._elementsInitialised = false;
            for (var i = 0; i < cache_size; i++) {
                var element = this._createElement();
                this._elements.push(element);
            }
        }

        _createClass(VideoElementCache, [{
            key: "_createElement",
            value: function _createElement() {
                var videoElement = document.createElement("video");
                videoElement.setAttribute("crossorigin", "anonymous");
                videoElement.setAttribute("webkit-playsinline", "");
                videoElement.setAttribute("playsinline", "");
                return videoElement;
            }
        }, {
            key: "init",
            value: function init() {
                var _this = this;

                return new Promise(function (resolve) {
                    if (!_this._elementsInitialised) {
                        var _loop = function _loop(element) {
                            try {
                                element.play().then(function () {
                                    element.pause();
                                    resolve();
                                }, function (e) {
                                    if (e.name !== "NotSupportedError") throw e;
                                });
                            } catch (e) {
                                //console.log(e.name);
                                resolve();
                            }
                        };

                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = _this._elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var element = _step.value;

                                _loop(element);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }

                    if (_this._elementsInitialised) {
                        resolve();
                    }
                    _this._elementsInitialised = true;
                });
            }
        }, {
            key: "get",
            value: function get() {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    //Try and get an already intialised element.
                    for (var _iterator2 = this._elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _element = _step2.value;

                        // For some reason an uninitialised videoElement has its sr attribute set to the windows href. Hence the below check.
                        if (!(0, _utils.mediaElementHasSource)(_element)) {
                            return _element;
                        }
                    }
                    //Fallback to creating a new element if non exists.
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                console.debug("No available video element in the cache, creating a new one. This may break mobile, make your initial cache larger.");
                var element = this._createElement();
                this._elements.push(element);
                this._elementsInitialised = false;
                return element;
            }
        }, {
            key: "length",
            get: function get() {
                return this._elements.length;
            }
        }, {
            key: "unused",
            get: function get() {
                var count = 0;
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = this._elements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var element = _step3.value;

                        // For some reason an uninitialised videoElement has its sr attribute set to the windows href. Hence the below check.
                        if (!(0, _utils.mediaElementHasSource)(element)) count += 1;
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                return count;
            }
        }]);

        return VideoElementCache;
    }();

    exports.default = VideoElementCache;
    module.exports = exports["default"];
});

/***/ })

/******/ });
//# sourceMappingURL=videocontext.commonjs2.js.map
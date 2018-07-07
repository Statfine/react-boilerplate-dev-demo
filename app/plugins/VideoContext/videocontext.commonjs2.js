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
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	//Matthew Shotton, R&D User Experience,© BBC 2015
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _SourceNodesVideonodeJs = __webpack_require__(1);
	
	var _SourceNodesVideonodeJs2 = _interopRequireDefault(_SourceNodesVideonodeJs);
	
	var _SourceNodesImagenodeJs = __webpack_require__(102);
	
	var _SourceNodesImagenodeJs2 = _interopRequireDefault(_SourceNodesImagenodeJs);
	
	var _SourceNodesCanvasnodeJs = __webpack_require__(103);
	
	var _SourceNodesCanvasnodeJs2 = _interopRequireDefault(_SourceNodesCanvasnodeJs);
	
	var _SourceNodesSourcenodeJs = __webpack_require__(2);
	
	var _ProcessingNodesCompositingnodeJs = __webpack_require__(104);
	
	var _ProcessingNodesCompositingnodeJs2 = _interopRequireDefault(_ProcessingNodesCompositingnodeJs);
	
	var _DestinationNodeDestinationnodeJs = __webpack_require__(107);
	
	var _DestinationNodeDestinationnodeJs2 = _interopRequireDefault(_DestinationNodeDestinationnodeJs);
	
	var _ProcessingNodesEffectnodeJs = __webpack_require__(108);
	
	var _ProcessingNodesEffectnodeJs2 = _interopRequireDefault(_ProcessingNodesEffectnodeJs);
	
	var _ProcessingNodesDrawingnodeJs = __webpack_require__(109);
	
	var _ProcessingNodesDrawingnodeJs2 = _interopRequireDefault(_ProcessingNodesDrawingnodeJs);
	
	var _ProcessingNodesTransitionnodeJs = __webpack_require__(110);
	
	var _ProcessingNodesTransitionnodeJs2 = _interopRequireDefault(_ProcessingNodesTransitionnodeJs);
	
	var _rendergraphJs = __webpack_require__(111);
	
	var _rendergraphJs2 = _interopRequireDefault(_rendergraphJs);
	
	var _videoelementcacheJs = __webpack_require__(113);
	
	var _videoelementcacheJs2 = _interopRequireDefault(_videoelementcacheJs);
	
	var _utilsJs = __webpack_require__(3);
	
	var _DefinitionsDefinitionsJs = __webpack_require__(4);
	
	var _DefinitionsDefinitionsJs2 = _interopRequireDefault(_DefinitionsDefinitionsJs);
	
	var _PadNodesPadnodeJs = __webpack_require__(112);
	
	var _PadNodesPadnodeJs2 = _interopRequireDefault(_PadNodesPadnodeJs);
	
	var updateablesManager = new _utilsJs.UpdateablesManager();
	
	/**
	 * VideoContext.
	 * @module VideoContext
	 */
	
	var VideoContext = (function () {
	    /**
	    * Initialise the VideoContext and render to the specific canvas. A 2nd parameter can be passed to the constructor which is a function that get's called if the VideoContext fails to initialise.
	    *
	    * @param {Canvas} canvas - the canvas element to render the output to.
	    * @param {function} initErrorCallback - a callback for if initialising the canvas failed.
	    * @param {Object} options - a nuber of custom options which can be set on the VideoContext, generally best left as default.
	    *
	    * @example
	    * var canvasElement = document.getElementById("canvas");
	    * var ctx = new VideoContext(canvasElement, function(){console.error("Sorry, your browser dosen\'t support WebGL");});
	    * var videoNode = ctx.video("video.mp4");
	    * videoNode.connect(ctx.destination);
	    * videoNode.start(0);
	    * videoNode.stop(10);
	    * ctx.play();
	    *
	    */
	
	    function VideoContext(canvas, initErrorCallback) {
	        var options = arguments.length <= 2 || arguments[2] === undefined ? { "preserveDrawingBuffer": true, "manualUpdate": false, "endOnLastSourceEnd": true, useVideoElementCache: true, videoElementCacheSize: 6, webglContextAttributes: { preserveDrawingBuffer: true, alpha: false } } : arguments[2];
	
	        _classCallCheck(this, VideoContext);
	
	        this._canvas = canvas;
	        var manualUpdate = false;
	        this.endOnLastSourceEnd = true;
	        var webglContextAttributes = { preserveDrawingBuffer: true, alpha: false };
	
	        if ("manualUpdate" in options) manualUpdate = options.manualUpdate;
	        if ("endOnLastSourceEnd" in options) this._endOnLastSourceEnd = options.endOnLastSourceEnd;
	        if ("webglContextAttributes" in options) webglContextAttributes = options.webglContextAttributes;
	
	        if (webglContextAttributes.alpha === undefined) webglContextAttributes.alpha = false;
	        if (webglContextAttributes.alpha === true) {
	            console.error("webglContextAttributes.alpha must be false for correct opeation");
	        }
	
	        this._gl = canvas.getContext("experimental-webgl", webglContextAttributes);
	        if (this._gl === null) {
	            console.error("Failed to intialise WebGL.");
	            if (initErrorCallback) initErrorCallback();
	            return;
	        }
	
	        // Initialise the video element cache
	        if (!options.useVideoElementCache) options.useVideoElementCache = true;
	        this._useVideoElementCache = options.useVideoElementCache;
	        if (this._useVideoElementCache) {
	            if (!options.videoElementCacheSize) options.videoElementCacheSize = 5;
	            this._videoElementCache = new _videoelementcacheJs2["default"](options.videoElementCacheSize);
	        }
	
	        this._renderGraph = new _rendergraphJs2["default"]();
	        this._sourceNodes = [];
	        this._processingNodes = [];
	        this._timeline = [];
	        this._currentTime = 0;
	        this._state = VideoContext.STATE.PAUSED;
	        this._playbackRate = 1.0;
	        this._sourcesPlaying = undefined;
	        this._destinationNode = new _DestinationNodeDestinationnodeJs2["default"](this._gl, this._renderGraph);
	
	        this._callbacks = new Map();
	        this._callbacks.set("stalled", []);
	        this._callbacks.set("update", []);
	        this._callbacks.set("ended", []);
	        this._callbacks.set("content", []);
	        this._callbacks.set("nocontent", []);
	
	        this._timelineCallbacks = [];
	
	        if (!manualUpdate) {
	            updateablesManager.register(this);
	        }
	    }
	
	    //playing - all sources are active
	    //paused - all sources are paused
	    //stalled - one or more sources is unable to play
	    //ended - all sources have finished playing
	    //broken - the render graph is in a broken state
	
	    /**
	    * Register a callback to happen at a specific point in time.
	    * @param {number} time - the time at which to trigger the callback.
	    * @param {Function} func - the callback to register.
	    * @param {number} ordering - the order in which to call the callback if more than one is registered for the same time.
	    */
	
	    _createClass(VideoContext, [{
	        key: "registerTimelineCallback",
	        value: function registerTimelineCallback(time, func) {
	            var ordering = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	
	            this._timelineCallbacks.push({ "time": time, "func": func, "ordering": ordering });
	        }
	
	        /**
	        * Unregister a callback which happens at a specific point in time.
	        * @param {Function} func - the callback to unregister.
	        */
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
	                    if (!_iteratorNormalCompletion && _iterator["return"]) {
	                        _iterator["return"]();
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
	                    var callback = _step2.value;
	
	                    var index = this._timelineCallbacks.indexOf(callback);
	                    this._timelineCallbacks.splice(index, 1);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                        _iterator2["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	
	        /**
	        * Regsiter a callback to listen to one of the following events: "stalled", "update", "ended", "content", "nocontent"
	        *
	        * "stalled" happend anytime playback is stopped due to unavailbale data for playing assets (i.e video still loading)
	        * . "update" is called any time a frame is rendered to the screen. "ended" is called once plackback has finished
	        * (i.e ctx.currentTime == ctx.duration). "content" is called a the start of a time region where there is content 
	        * playing out of one or more sourceNodes. "nocontent" is called at the start of any time region where the 
	        * VideoContext is still playing, but there are currently no activly playing soureces.
	        *
	        * @param {String} type - the event to register against ("stalled", "update", or "ended").
	        * @param {Function} func - the callback to register.
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * ctx.registerCallback("stalled", function(){console.log("Playback stalled");});
	        * ctx.registerCallback("update", function(){console.log("new frame");});
	        * ctx.registerCallback("ended", function(){console.log("Playback ended");});
	        */
	    }, {
	        key: "registerCallback",
	        value: function registerCallback(type, func) {
	            if (!this._callbacks.has(type)) return false;
	            this._callbacks.get(type).push(func);
	        }
	
	        /**
	        * Remove a previously registed callback
	        *
	        * @param {Function} func - the callback to remove.
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        *
	        * //the callback
	        * var updateCallback = function(){console.log("new frame")};
	        *
	        * //register the callback
	        * ctx.registerCallback("update", updateCallback);
	        * //then unregister it
	        * ctx.unregisterCallback(updateCallback);
	        *
	        */
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
	                    if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
	                        _iterator3["return"]();
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
	                    if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
	                        _iterator4["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }
	        }
	
	        /**
	        * Get the canvas that the VideoContext is using.
	        *
	        * @return {HTMLElement} The canvas that the VideoContext is using.
	        *
	        */
	    }, {
	        key: "play",
	
	        /**
	        * Start the VideoContext playing
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * var videoNode = ctx.video("video.mp4");
	        * videoNode.connect(ctx.destination);
	        * videoNode.start(0);
	        * videoNode.stop(10);
	        * ctx.play();
	        */
	        value: function play() {
	            console.debug("VideoContext - playing");
	            //Initialise the video elemnt cache
	            if (this._videoElementCache) this._videoElementCache.init();
	            // set the state.
	            this._state = VideoContext.STATE.PLAYING;
	            return true;
	        }
	
	        /**
	        * Pause playback of the VideoContext
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * var videoNode = ctx.video("video.mp4");
	        * videoNode.connect(ctx.destination);
	        * videoNode.start(0);
	        * videoNode.stop(20);
	        * ctx.currentTime = 10; // seek 10 seconds in
	        * ctx.play();
	        * setTimeout(function(){ctx.pause();}, 1000); //pause playback after roughly one second.
	        */
	    }, {
	        key: "pause",
	        value: function pause() {
	            console.debug("VideoContext - pausing");
	            this._state = VideoContext.STATE.PAUSED;
	            return true;
	        }
	
	        /**
	        * Create a new node representing a video source
	        *
	        * @param {string|Video} - The URL or video element to create the video from.
	        * @sourceOffset {number} - Offset into the start of the source video to start playing from.
	        * @preloadTime {number} - How many seconds before the video is to be played to start loading it.
	        * @videoElementAttributes {Object} - A dictionary of attributes to map onto the underlying video element.
	        * @return {VideoNode} A new video node.
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * var videoNode = ctx.video("video.mp4");
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var videoElement = document.getElementById("video");
	        * var ctx = new VideoContext(canvasElement);
	        * var videoNode = ctx.video(videoElement);
	        */
	    }, {
	        key: "video",
	        value: function video(src) {
	            var sourceOffset = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	            var preloadTime = arguments.length <= 2 || arguments[2] === undefined ? 4 : arguments[2];
	            var videoElementAttributes = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	            var videoNode = new _SourceNodesVideonodeJs2["default"](src, this._gl, this._renderGraph, this._currentTime, this._playbackRate, sourceOffset, preloadTime, this._videoElementCache, videoElementAttributes);
	            this._sourceNodes.push(videoNode);
	            return videoNode;
	        }
	
	        /**
	        * @depricated
	        */
	    }, {
	        key: "createVideoSourceNode",
	        value: function createVideoSourceNode(src) {
	            var sourceOffset = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	            var preloadTime = arguments.length <= 2 || arguments[2] === undefined ? 4 : arguments[2];
	            var videoElementAttributes = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	            this._depricate("Warning: createVideoSourceNode will be depricated in v1.0, please switch to using VideoContext.video()");
	            return this.video(src, sourceOffset, preloadTime, videoElementAttributes);
	        }
	
	        /**
	        * Create a new node representing an image source
	        * @param {string|Image} src - The url or image element to create the image node from.
	        * @param {number} [preloadTime] - How long before a node is to be displayed to attmept to load it.
	        * @param {Object} [imageElementAttributes] - Any attributes to be given to the underlying image element.
	        * @return {ImageNode} A new image node.
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * var imageNode = ctx.image("image.png");
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var imageElement = document.getElementById("image");
	        * var ctx = new VideoContext(canvasElement);
	        * var imageNode = ctx.image(imageElement);
	        */
	    }, {
	        key: "image",
	        value: function image(src) {
	            var preloadTime = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1];
	            var imageElementAttributes = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	            var imageNode = new _SourceNodesImagenodeJs2["default"](src, this._gl, this._renderGraph, this._currentTime, preloadTime, imageElementAttributes);
	            this._sourceNodes.push(imageNode);
	            return imageNode;
	        }
	
	        /**
	        * @depricated
	        */
	    }, {
	        key: "createImageSourceNode",
	        value: function createImageSourceNode(src) {
	            var sourceOffset = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	            var preloadTime = arguments.length <= 2 || arguments[2] === undefined ? 4 : arguments[2];
	            var imageElementAttributes = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	            this._depricate("Warning: createImageSourceNode will be depricated in v1.0, please switch to using VideoContext.image()");
	            return this.image(src, sourceOffset, preloadTime, imageElementAttributes);
	        }
	
	        /**
	        * Create a new node representing a canvas source
	        * @param {Canvas} src - The canvas element to create the canvas node from.
	        * @return {CanvasNode} A new canvas node.
	        */
	    }, {
	        key: "canvas",
	        value: function canvas(_canvas) {
	            var canvasNode = new _SourceNodesCanvasnodeJs2["default"](_canvas, this._gl, this._renderGraph, this._currentTime);
	            this._sourceNodes.push(canvasNode);
	            return canvasNode;
	        }
	
	        /**
	        * @depricated
	        */
	    }, {
	        key: "createCanvasSourceNode",
	        value: function createCanvasSourceNode(canvas) {
	            var sourceOffset = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	            var preloadTime = arguments.length <= 2 || arguments[2] === undefined ? 4 : arguments[2];
	
	            this._depricate("Warning: createCanvasSourceNode will be depricated in v1.0, please switch to using VideoContext.canvas()");
	            return this.canvas(canvas, sourceOffset, preloadTime);
	        }
	
	        /**
	        * Create a new effect node.
	        * @param {Object} definition - this is an object defining the shaders, inputs, and properties of the compositing node to create. Builtin definitions can be found by accessing VideoContext.DEFINITIONS.
	        * @return {EffectNode} A new effect node created from the passed definition
	        */
	    }, {
	        key: "effect",
	        value: function effect(definition) {
	            var effectNode = new _ProcessingNodesEffectnodeJs2["default"](this._gl, this._renderGraph, definition);
	            this._processingNodes.push(effectNode);
	            return effectNode;
	        }
	
	        /**
	        * @depricated
	        */
	    }, {
	        key: "createEffectNode",
	        value: function createEffectNode(definition) {
	            this._depricate("Warning: createEffectNode will be depricated in v1.0, please switch to using VideoContext.effect()");
	            return this.effect(definition);
	        }
	
	        /**
	        * Create a new compositiing node.
	        *
	        * Compositing nodes are used for operations such as combining multiple video sources into a single track/connection for further processing in the graph.
	        *
	        * A compositing node is slightly different to other processing nodes in that it only has one input in it's definition but can have unlimited connections made to it.
	        * The shader in the definition is run for each input in turn, drawing them to the output buffer. This means there can be no interaction between the spearte inputs to a compositing node, as they are individually processed in seperate shader passes.
	        *
	        * @param {Object} definition - this is an object defining the shaders, inputs, and properties of the compositing node to create. Builtin definitions can be found by accessing VideoContext.DEFINITIONS
	        *
	        * @return {CompositingNode} A new compositing node created from the passed definition.
	        *
	        * @example
	        *
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        *
	        * //A simple compositing node definition which just renders all the inputs to the output buffer.
	        * var combineDefinition = {
	        *     vertexShader : "\
	        *         attribute vec2 a_position;\
	        *         attribute vec2 a_texCoord;\
	        *         varying vec2 v_texCoord;\
	        *         void main() {\
	        *             gl_Position = vec4(vec2(2.0,2.0)*vec2(1.0, 1.0), 0.0, 1.0);\
	        *             v_texCoord = a_texCoord;\
	        *         }",
	        *     fragmentShader : "\
	        *         precision mediump float;\
	        *         uniform sampler2D u_image;\
	        *         uniform float a;\
	        *         varying vec2 v_texCoord;\
	        *         varying float v_progress;\
	        *         void main(){\
	        *             vec4 color = texture2D(u_image, v_texCoord);\
	        *             gl_FragColor = color;\
	        *         }",
	        *     properties:{
	        *         "a":{type:"uniform", value:0.0},
	        *     },
	        *     inputs:["u_image"]
	        * };
	        * //Create the node, passing in the definition.
	        * var trackNode = videoCtx.compositor(combineDefinition);
	        *
	        * //create two videos which will play at back to back
	        * var videoNode1 = ctx.video("video1.mp4");
	        * videoNode1.play(0);
	        * videoNode1.stop(10);
	        * var videoNode2 = ctx.video("video2.mp4");
	        * videoNode2.play(10);
	        * videoNode2.stop(20);
	        *
	        * //Connect the nodes to the combine node. This will give a single connection representing the two videos which can
	        * //be connected to other effects such as LUTs, chromakeyers, etc.
	        * videoNode1.connect(trackNode);
	        * videoNode2.connect(trackNode);
	        *
	        * //Don't do anything exciting, just connect it to the output.
	        * trackNode.connect(ctx.destination);
	        *
	        */
	    }, {
	        key: "compositor",
	        value: function compositor(definition) {
	            var compositingNode = new _ProcessingNodesCompositingnodeJs2["default"](this._gl, this._renderGraph, definition);
	            this._processingNodes.push(compositingNode);
	            return compositingNode;
	        }
	
	        /**
	        * @depricated
	        */
	    }, {
	        key: "createCompositingNode",
	        value: function createCompositingNode(definition) {
	            this._depricate("Warning: createCompositingNode will be depricated in v1.0, please switch to using VideoContext.compositor()");
	            return this.compositor(definition);
	        }
	
	        /**
	         * create a new drawing node.
	         * drawing node is drawing other node in input node.
	         * drawing at rect that defined in every node "drawRect", update "drawRect" to position
	         * drawing target. "drawRect" is normalize of 0.0~1.0, respects that [orignx, origny, width, height].
	         * @param {Object} definition - this is an object defining the shaders, inputs, and properties of the compositing node to create. Builtin definitions can be found by accessing VideoContext.DEFINITIONS
	         *
	         * @return {DrawingNode} A new drawing node created from the passed definition.
	         * 
	         * @example
	         * later will provide.
	         */
	    }, {
	        key: "drawing",
	        value: function drawing(definition) {
	            var drawingNode = new _ProcessingNodesDrawingnodeJs2["default"](this._gl, this._renderGraph, definition);
	            this._processingNodes.push(drawingNode);
	            return drawingNode;
	        }
	
	        /**
	         * create a new padnode.
	         * padnode is pad node in input node.
	         * @param {Array} canvasSize - the Canvas Size, the same as output video size
	         * @param {Array} videoSize - the input video size
	         * @param {int} padMode - padding mode: 2 - crop with mean blur; 1 - crop with blackpad; other - crop with glass blur.
	         * @property {Array} canvasSize - see param canvasSize
	         * @property {Array} videoSize - see param videoSize
	         * @property {Array} cropRect - the crop rect. 
	         *
	         * @return {PadNode} A new padnode created from the passed definition.
	         * 
	         * @example
	         * later will provide.
	         */
	    }, {
	        key: "PaddingNode",
	        value: function PaddingNode(canvasSize, videoSize, padMode) {
	            var paddingNode = new _PadNodesPadnodeJs2["default"](this._gl, this._renderGraph, this, canvasSize, videoSize, padMode);
	            this._processingNodes.push(paddingNode);
	            return paddingNode;
	        }
	
	        /**
	         * @depricated
	         */
	    }, {
	        key: "createDrawingNode",
	        value: function createDrawingNode(definition) {
	            this._depricate("Warning: createDrawingNode will be depricated in v1.0, please switch to using VideoContext.drawing()");
	            return this.drawing(definition);
	        }
	
	        /**
	        * Create a new transition node.
	        *
	        * Transistion nodes are a type of effect node which have parameters which can be changed as events on the timeline.
	        *
	        * For example a transition node which cross-fades between two videos could have a "mix" property which sets the
	        * progress through the transistion. Rather than having to write your own code to adjust this property at specfic
	        * points in time a transition node has a "transition" function which takes a startTime, stopTime, targetValue, and a
	        * propertyName (which will be "mix"). This will linearly interpolate the property from the curernt value to
	        * tragetValue between the startTime and stopTime.
	        *
	        * @param {Object} definition - this is an object defining the shaders, inputs, and properties of the transition node to create.
	        * @return {TransitionNode} A new transition node created from the passed definition.
	        * @example
	        *
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        *
	        * //A simple cross-fade node definition which cross-fades between two videos based on the mix property.
	        * var crossfadeDefinition = {
	        *     vertexShader : "\
	        *        attribute vec2 a_position;\
	        *        attribute vec2 a_texCoord;\
	        *        varying vec2 v_texCoord;\
	        *        void main() {\
	        *            gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        *            v_texCoord = a_texCoord;\
	        *         }",
	        *     fragmentShader : "\
	        *         precision mediump float;\
	        *         uniform sampler2D u_image_a;\
	        *         uniform sampler2D u_image_b;\
	        *         uniform float mix;\
	        *         varying vec2 v_texCoord;\
	        *         varying float v_mix;\
	        *         void main(){\
	        *             vec4 color_a = texture2D(u_image_a, v_texCoord);\
	        *             vec4 color_b = texture2D(u_image_b, v_texCoord);\
	        *             color_a[0] *= mix;\
	        *             color_a[1] *= mix;\
	        *             color_a[2] *= mix;\
	        *             color_a[3] *= mix;\
	        *             color_b[0] *= (1.0 - mix);\
	        *             color_b[1] *= (1.0 - mix);\
	        *             color_b[2] *= (1.0 - mix);\
	        *             color_b[3] *= (1.0 - mix);\
	        *             gl_FragColor = color_a + color_b;\
	        *         }",
	        *     properties:{
	        *         "mix":{type:"uniform", value:0.0},
	        *     },
	        *     inputs:["u_image_a","u_image_b"]
	        * };
	        *
	        * //Create the node, passing in the definition.
	        * var transitionNode = videoCtx.transition(crossfadeDefinition);
	        *
	        * //create two videos which will overlap by two seconds
	        * var videoNode1 = ctx.video("video1.mp4");
	        * videoNode1.play(0);
	        * videoNode1.stop(10);
	        * var videoNode2 = ctx.video("video2.mp4");
	        * videoNode2.play(8);
	        * videoNode2.stop(18);
	        *
	        * //Connect the nodes to the transistion node.
	        * videoNode1.connect(transitionNode);
	        * videoNode2.connect(transitionNode);
	        *
	        * //Set-up a transition which happens at the crossover point of the playback of the two videos
	        * transitionNode.transition(8,10,1.0,"mix");
	        *
	        * //Connect the transition node to the output
	        * transitionNode.connect(ctx.destination);
	        *
	        * //start playback
	        * ctx.play();
	        */
	    }, {
	        key: "transition",
	        value: function transition(definition) {
	            var transitionNode = new _ProcessingNodesTransitionnodeJs2["default"](this._gl, this._renderGraph, definition);
	            this._processingNodes.push(transitionNode);
	            return transitionNode;
	        }
	
	        /**
	        * @depricated
	        */
	    }, {
	        key: "createTransitionNode",
	        value: function createTransitionNode(definition) {
	            this._depricate("Warning: createTransitionNode will be depricated in v1.0, please switch to using VideoContext.transition()");
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
	
	        /**
	        * This allows manual calling of the update loop of the videoContext.
	        *
	        * @param {Number} dt - The difference in seconds between this and the previous calling of update.
	        * @example
	        *
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement, undefined, {"manualUpdate" : true});
	        *
	        * var previousTime;
	        * function update(time){
	        *     if (previousTime === undefined) previousTime = time;
	        *     var dt = (time - previousTime)/1000;
	        *     ctx.update(dt);
	        *     previousTime = time;
	        *     requestAnimationFrame(update);
	        * }
	        * update();
	        *
	        */
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
	                this._callCallbacks("update");
	
	                if (this._state !== VideoContext.STATE.PAUSED) {
	                    if (this._isStalled()) {
	                        this._callCallbacks("stalled");
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
	                            if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
	                                _iterator5["return"]();
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
	                                    var callback = _step7.value;
	
	                                    callback.func();
	                                }
	                            } catch (err) {
	                                _didIteratorError7 = true;
	                                _iteratorError7 = err;
	                            } finally {
	                                try {
	                                    if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
	                                        _iterator7["return"]();
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
	                            if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
	                                _iterator6["return"]();
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
	                        this._callCallbacks("ended");
	                    }
	                }
	
	                var sourcesPlaying = false;
	
	                for (var i = 0; i < this._sourceNodes.length; i++) {
	                    var sourceNode = this._sourceNodes[i];
	
	                    if (this._state === VideoContext.STATE.STALLED) {
	                        if (sourceNode._isReady() && sourceNode._state === _SourceNodesSourcenodeJs.SOURCENODESTATE.playing) sourceNode._pause();
	                    }
	                    if (this._state === VideoContext.STATE.PAUSED) {
	                        sourceNode._pause();
	                    }
	                    if (this._state === VideoContext.STATE.PLAYING) {
	                        sourceNode._play();
	                    }
	                    sourceNode._update(this._currentTime);
	                    if (sourceNode._state === _SourceNodesSourcenodeJs.SOURCENODESTATE.paused || sourceNode._state === _SourceNodesSourcenodeJs.SOURCENODESTATE.playing) {
	                        sourcesPlaying = true;
	                    }
	                }
	
	                if (sourcesPlaying !== this._sourcesPlaying && this._state === VideoContext.STATE.PLAYING) {
	                    if (sourcesPlaying === true) {
	                        this._callCallbacks("content");
	                    } else {
	                        this._callCallbacks("nocontent");
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
	                * this is deffinately worth while because getting the connnections is a much more common operation.
	                *
	                * TL;DR Future matt - refactor this.
	                *
	                */
	                var sortedNodes = [];
	                var connections = this._renderGraph.connections.slice();
	                var nodes = _rendergraphJs2["default"].getInputlessNodes(connections);
	
	                while (nodes.length > 0) {
	                    var node = nodes.pop();
	                    sortedNodes.push(node);
	                    var _iteratorNormalCompletion8 = true;
	                    var _didIteratorError8 = false;
	                    var _iteratorError8 = undefined;
	
	                    try {
	                        for (var _iterator8 = _rendergraphJs2["default"].outputEdgesFor(node, connections)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	                            var edge = _step8.value;
	
	                            var index = connections.indexOf(edge);
	                            if (index > -1) connections.splice(index, 1);
	                            if (_rendergraphJs2["default"].inputEdgesFor(edge.destination, connections).length === 0) {
	                                nodes.push(edge.destination);
	                            }
	                        }
	                    } catch (err) {
	                        _didIteratorError8 = true;
	                        _iteratorError8 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
	                                _iterator8["return"]();
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
	                        var node = _step9.value;
	
	                        if (this._sourceNodes.indexOf(node) === -1) {
	                            node._update(this._currentTime);
	                            node._render();
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError9 = true;
	                    _iteratorError9 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion9 && _iterator9["return"]) {
	                            _iterator9["return"]();
	                        }
	                    } finally {
	                        if (_didIteratorError9) {
	                            throw _iteratorError9;
	                        }
	                    }
	                }
	            }
	        }
	
	        /**
	        * Destroy all nodes in the graph and reset the timeline. After calling this any created nodes will be unusable.
	        */
	    }, {
	        key: "reset",
	        value: function reset() {
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
	                    if (!_iteratorNormalCompletion10 && _iterator10["return"]) {
	                        _iterator10["return"]();
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
	                    if (!_iteratorNormalCompletion11 && _iterator11["return"]) {
	                        _iterator11["return"]();
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
	                    var node = _step12.value;
	
	                    node.destroy();
	                }
	            } catch (err) {
	                _didIteratorError12 = true;
	                _iteratorError12 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion12 && _iterator12["return"]) {
	                        _iterator12["return"]();
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
	            this._callbacks.set("stalled", []);
	            this._callbacks.set("update", []);
	            this._callbacks.set("ended", []);
	            this._callbacks.set("content", []);
	            this._callbacks.set("nocontent", []);
	            this._timelineCallbacks = [];
	        }
	    }, {
	        key: "_depricate",
	        value: function _depricate(msg) {
	            console.log(msg);
	        }
	    }, {
	        key: "element",
	        get: function get() {
	            return this._canvas;
	        }
	
	        /**
	        * Get the current state.
	        *
	        * This will be either
	        *  - VideoContext.STATE.PLAYING: current sources on timeline are active
	        *  - VideoContext.STATE.PAUSED: all sources are paused
	        *  - VideoContext.STATE.STALLED: one or more sources is unable to play
	        *  - VideoContext.STATE.ENDED: all sources have finished playing
	        *  - VideoContext.STATE.BROKEN: the render graph is in a broken state
	        * @return {number} The number representing the state.
	        *
	        */
	    }, {
	        key: "state",
	        get: function get() {
	            return this._state;
	        }
	
	        /**
	        * Set the progress through the internal timeline.
	        * Setting this can be used as a way to implement a scrubaable timeline.
	        *
	        * @param {number} currentTime - this is the currentTime to set the context to.
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * var videoNode = ctx.video("video.mp4");
	        * videoNode.connect(ctx.destination);
	        * videoNode.start(0);
	        * videoNode.stop(20);
	        * ctx.currentTime = 10; // seek 10 seconds in
	        * ctx.play();
	        *
	        */
	    }, {
	        key: "currentTime",
	        set: function set(currentTime) {
	            console.debug("VideoContext - seeking to", currentTime);
	            if (currentTime < this._duration && this._state === VideoContext.STATE.ENDED) this._state = VideoContext.STATE.PAUSED;
	
	            if (typeof currentTime === "string" || currentTime instanceof String) {
	                currentTime = parseFloat(currentTime);
	            }
	
	            for (var i = 0; i < this._sourceNodes.length; i++) {
	                this._sourceNodes[i]._seek(currentTime);
	            }
	            for (var i = 0; i < this._processingNodes.length; i++) {
	                this._processingNodes[i]._seek(currentTime);
	            }
	            this._currentTime = currentTime;
	        },
	
	        /**
	        * Get how far through the internal timeline has been played.
	        *
	        * Getting this value will give the current playhead position. Can be used for updating timelines.
	        * @return {number} The time in seconds through the current playlist.
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * var videoNode = ctx.video("video.mp4");
	        * videoNode.connect(ctx.destination);
	        * videoNode.start(0);
	        * videoNode.stop(10);
	        * ctx.play();
	        * setTimeout(function(){console.log(ctx.currentTime);},1000); //should print roughly 1.0
	        *
	        */
	        get: function get() {
	            return this._currentTime;
	        }
	
	        /**
	        * Get the time at which the last node in the current internal timeline finishes playing.
	        *
	        * @return {number} The end time in seconds of the last video node to finish playing.
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * console.log(ctx.duration); //prints 0
	        *
	        * var videoNode = ctx.video("video.mp4");
	        * videoNode.connect(ctx.destination);
	        * videoNode.start(0);
	        * videoNode.stop(10);
	        *
	        * console.log(ctx.duration); //prints 10
	        *
	        * ctx.play();
	        */
	    }, {
	        key: "duration",
	        get: function get() {
	            var maxTime = 0;
	            for (var i = 0; i < this._sourceNodes.length; i++) {
	                if (this._sourceNodes[i].state !== _SourceNodesSourcenodeJs.SOURCENODESTATE.waiting && this._sourceNodes[i]._stopTime > maxTime) {
	                    maxTime = this._sourceNodes[i]._stopTime;
	                }
	            }
	            return maxTime;
	        }
	
	        /**
	        * Get the final node in the render graph which represents the canvas to display content on to.
	        *
	        * This proprety is read-only and there can only ever be one destination node. Other nodes can connect to this but you cannot connect this node to anything.
	        *
	        * @return {DestinationNode} A graph node represnting the canvas to display the content on.
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * var videoNode = ctx.video("video.mp4");
	        * videoNode.start(0);
	        * videoNode.stop(10);
	        * videoNode.connect(ctx.destination);
	        *
	        */
	    }, {
	        key: "destination",
	        get: function get() {
	            return this._destinationNode;
	        }
	
	        /**
	        * Set the playback rate of the VideoContext instance.
	        * This will alter the playback speed of all media elements played through the VideoContext.
	        *
	        * @param {number} rate - this is the playback rate.
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * var videoNode = ctx.video("video.mp4");
	        * videoNode.start(0);
	        * videoNode.stop(10);
	        * videoNode.connect(ctx.destination);
	        * ctx.playbackRate = 2;
	        * ctx.play(); // Double playback rate means this will finish playing in 5 seconds.
	        */
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
	
	                    if (node.constructor.name === "VideoNode") {
	                        node._globalPlaybackRate = rate;
	                        node._playbackRateUpdated = true;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError13 = true;
	                _iteratorError13 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion13 && _iterator13["return"]) {
	                        _iterator13["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError13) {
	                        throw _iteratorError13;
	                    }
	                }
	            }
	
	            this._playbackRate = rate;
	        },
	
	        /**
	        *  Return the current playbackRate of the video context.
	        * @return {number} A value representing the playbackRate. 1.0 by default.
	        */
	        get: function get() {
	            return this._playbackRate;
	        }
	    }], [{
	        key: "DEFINITIONS",
	        get: function get() {
	            return _DefinitionsDefinitionsJs2["default"];
	        }
	    }]);
	
	    return VideoContext;
	})();
	
	exports["default"] = VideoContext;
	VideoContext.STATE = {};
	VideoContext.STATE.PLAYING = 0;
	VideoContext.STATE.PAUSED = 1;
	VideoContext.STATE.STALLED = 2;
	VideoContext.STATE.ENDED = 3;
	VideoContext.STATE.BROKEN = 4;
	
	VideoContext.visualiseVideoContextTimeline = _utilsJs.visualiseVideoContextTimeline;
	VideoContext.visualiseVideoContextGraph = _utilsJs.visualiseVideoContextGraph;
	VideoContext.createControlFormForNode = _utilsJs.createControlFormForNode;
	VideoContext.createSigmaGraphDataFromRenderGraph = _utilsJs.createSigmaGraphDataFromRenderGraph;
	VideoContext.exportToJSON = _utilsJs.exportToJSON;
	VideoContext.updateablesManager = updateablesManager;
	VideoContext.importSimpleEDL = _utilsJs.importSimpleEDL;
	module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	//Matthew Shotton, R&D User Experience,© BBC 2015
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };
	
	var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _sourcenode = __webpack_require__(2);
	
	var _sourcenode2 = _interopRequireDefault(_sourcenode);
	
	var VideoNode = (function (_SourceNode) {
	    _inherits(VideoNode, _SourceNode);
	
	    /**
	    * Initialise an instance of a VideoNode.
	    * This should not be called directly, but created through a call to videoContext.createVideoNode();
	    */
	
	    function VideoNode(src, gl, renderGraph, currentTime) {
	        var globalPlaybackRate = arguments.length <= 4 || arguments[4] === undefined ? 1.0 : arguments[4];
	        var sourceOffset = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];
	        var preloadTime = arguments.length <= 6 || arguments[6] === undefined ? 4 : arguments[6];
	        var videoElementCache = arguments.length <= 7 || arguments[7] === undefined ? undefined : arguments[7];
	        var attributes = arguments.length <= 8 || arguments[8] === undefined ? {} : arguments[8];
	
	        _classCallCheck(this, VideoNode);
	
	        _get(Object.getPrototypeOf(VideoNode.prototype), "constructor", this).call(this, src, gl, renderGraph, currentTime);
	        this._preloadTime = preloadTime;
	        this._sourceOffset = sourceOffset;
	        this._globalPlaybackRate = globalPlaybackRate;
	        this._videoElementCache = videoElementCache;
	        this._playbackRate = 1.0;
	        this._playbackRateUpdated = true;
	        this._attributes = attributes;
	        this._loopElement = false;
	        this._isElementPlaying = false;
	        if (this._attributes.loop) {
	            this._loopElement = this._attributes.loop;
	        }
	        this._displayName = "VideoNode";
	    }
	
	    _createClass(VideoNode, [{
	        key: "_load",
	        value: function _load() {
	            var _this = this;
	
	            _get(Object.getPrototypeOf(VideoNode.prototype), "_load", this).call(this);
	            if (this._element !== undefined) {
	
	                for (var key in this._attributes) {
	                    this._element[key] = this._attributes[key];
	                }
	
	                if (this._element.readyState > 3 && !this._element.seeking) {
	                    if (this._loopElement === false) {
	                        if (this._stopTime === Infinity || this._stopTime == undefined) {
	                            this._stopTime = this._startTime + this._element.duration;
	                            this._triggerCallbacks("durationchange", this.duration);
	                        }
	                    }
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
	                return;
	            }
	            if (this._isResponsibleForElementLifeCycle) {
	                if (this._videoElementCache) {
	                    this._element = this._videoElementCache.get();
	                } else {
	                    this._element = document.createElement("video");
	                    this._element.setAttribute("crossorigin", "anonymous");
	                    this._element.setAttribute("webkit-playsinline", "");
	                    this._playbackRateUpdated = true;
	                }
					this._element.src = this._elementURL;

	                for (var _key in this._attributes) {
	                    this._element[_key] = this._attributes[_key];
	                }
	            }
	            if (this._element) {
	                this._element.currentTime = this._sourceOffset;
	                this._element.onerror = function () {
						if (_this._element === undefined) return;
	                    console.debug("Error with element", _this._element);
	                    _this._state = _sourcenode.SOURCENODESTATE.error;
	                    //Event though there's an error ready should be set to true so the node can output transparenn
	                    _this._ready = true;
	                    _this._triggerCallbacks("error");
	                };
	            } else {
	                //If the element doesn't exist for whatever reason enter the error state.
	                this._state = _sourcenode.SOURCENODESTATE.error;
	                this._ready = true;
	                this._triggerCallbacks("error");
	            }
	        }
	    }, {
	        key: "_destroy",
	        value: function _destroy() {
	            _get(Object.getPrototypeOf(VideoNode.prototype), "_destroy", this).call(this);
	            if (this._isResponsibleForElementLifeCycle && this._element !== undefined) {
	                this._element.src = "";
	                for (var key in this._attributes) {
	                    this._element.removeAttribute(key);
	                }
	                this._element = undefined;
	                if (!this._videoElementCache) delete this._element;
	            }
	            this._ready = false;
	            this._isElementPlaying = false;
	        }
	    }, {
	        key: "_seek",
	        value: function _seek(time) {
	            _get(Object.getPrototypeOf(VideoNode.prototype), "_seek", this).call(this, time);
	            if (this.state === _sourcenode.SOURCENODESTATE.playing || this.state === _sourcenode.SOURCENODESTATE.paused) {
	                if (this._element === undefined) this._load();
	                var relativeTime = this._currentTime - this._startTime + this._sourceOffset;
	                this._element.currentTime = relativeTime;
	                this._ready = false;
	            }
	            if ((this._state === _sourcenode.SOURCENODESTATE.sequenced || this._state === _sourcenode.SOURCENODESTATE.ended) && this._element !== undefined) {
	                this._destroy();
	            }
	        }
	    }, {
	        key: "_update",
	        value: function _update(currentTime) {
	            //if (!super._update(currentTime)) return false;
	            _get(Object.getPrototypeOf(VideoNode.prototype), "_update", this).call(this, currentTime);
	            //check if the video has ended
	            if (this._element !== undefined) {
	                if (this._element.ended) {
	                    this._state = _sourcenode.SOURCENODESTATE.ended;
	                    this._triggerCallbacks("ended");
	                }
	            }
	
	            if (this._startTime - this._currentTime < this._preloadTime && this._state !== _sourcenode.SOURCENODESTATE.waiting && this._state !== _sourcenode.SOURCENODESTATE.ended) this._load();
	
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
	                    this._destroy();
	                }
	                return false;
	            }
	        }
	    }, {
	        key: "clearTimelineState",
	        value: function clearTimelineState() {
	            _get(Object.getPrototypeOf(VideoNode.prototype), "clearTimelineState", this).call(this);
	            if (this._element !== undefined) {
	                this._element.pause();
	                this._isElementPlaying = false;
	            }
	            this._destroy();
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            if (this._element) this._element.pause();
	            this._isElementPlaying = false;
	            _get(Object.getPrototypeOf(VideoNode.prototype), "destroy", this).call(this);
	            this._destroy();
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
	            _set(Object.getPrototypeOf(VideoNode.prototype), "stretchPaused", stretchPaused, this);
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
	    }]);
	
	    return VideoNode;
	})(_sourcenode2["default"]);
	
	exports["default"] = VideoNode;
	module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	//Matthew Shotton, R&D User Experience,© BBC 2015
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _utilsJs = __webpack_require__(3);
	
	var _graphnode = __webpack_require__(101);
	
	var _graphnode2 = _interopRequireDefault(_graphnode);
	
	var STATE = { "waiting": 0, "sequenced": 1, "playing": 2, "paused": 3, "ended": 4, "error": 5 };
	
	var SourceNode = (function (_GraphNode) {
	    _inherits(SourceNode, _GraphNode);
	
	    /**
	    * Initialise an instance of a SourceNode.
	    * This is the base class for other Nodes which generate media to be passed into the processing pipeline.
	    */
	
	    function SourceNode(src, gl, renderGraph, currentTime) {
	        _classCallCheck(this, SourceNode);
	
	        _get(Object.getPrototypeOf(SourceNode.prototype), "constructor", this).call(this, gl, renderGraph, [], true);
	        this._element = undefined;
	        this._elementURL = undefined;
	        this._isResponsibleForElementLifeCycle = true;
	        if (typeof src === "string") {
	            //create the node from the passed url
	            this._elementURL = src;
	        } else {
	            //use the passed element to create the SourceNode
	            this._element = src;
	            this._isResponsibleForElementLifeCycle = false;
	        }
	
	        this._state = STATE.waiting;
	        this._currentTime = currentTime;
	        this._startTime = NaN;
	        this._stopTime = Infinity;
	        this._ready = false;
	        this._loadCalled = false;
	        this._stretchPaused = false;
	        this._texture = (0, _utilsJs.createElementTexutre)(gl);
	        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
	        this._callbacks = [];
	        this._renderPaused = false;
	        this._displayName = "SourceNode";
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
	        key: "_destroy",
	        value: function _destroy() {
	            this._triggerCallbacks("destroy");
	            this._loadCalled = false;
	        }
	
	        /**
	        * Register callbacks against one of these events: "load", "destory", "seek", "pause", "play", "ended", "durationchange", "loaded", "error"
	        *
	        * @param {String} type - the type of event to register the callback against.
	        * @param {function} func - the function to call.
	        * 
	        * @example 
	        * var ctx = new VideoContext();
	        * var videoNode = ctx.createVideoSourceNode('video.mp4');
	        *
	        * videoNode.registerCallback("load", function(){"video is loading"});
	        * videoNode.registerCallback("play", function(){"video is playing"});
	        * videoNode.registerCallback("ended", function(){"video has eneded"});
	        *
	        */
	    }, {
	        key: "registerCallback",
	        value: function registerCallback(type, func) {
	            this._callbacks.push({ type: type, func: func });
	        }
	
	        /**
	        * Remove callback.
	        *
	        * @param {function} [func] - the callback to remove, if undefined will remove all callbacks for this node.
	        *
	        * @example 
	        * var ctx = new VideoContext();
	        * var videoNode = ctx.createVideoSourceNode('video.mp4');
	        *
	        * videoNode.registerCallback("load", function(){"video is loading"});
	        * videoNode.registerCallback("play", function(){"video is playing"});
	        * videoNode.registerCallback("ended", function(){"video has eneded"});
	        * videoNode.unregisterCallback(); //remove all of the three callbacks.
	        *
	        */
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
	                    if (!_iteratorNormalCompletion && _iterator["return"]) {
	                        _iterator["return"]();
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
	                    var callback = _step2.value;
	
	                    var index = this._callbacks.indexOf(callback);
	                    this._callbacks.splice(index, 1);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                        _iterator2["return"]();
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
	                    if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
	                        _iterator3["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	        }
	
	        /**
	        * Start playback at VideoContext.currentTime plus passed time. If passed time is negative, will play as soon as possible.
	        *
	        * @param {number} time - the time from the currentTime of the VideoContext which to start playing, if negative will play as soon as possible.
	        * @return {boolean} Will return true is seqeuncing has succeded, or false if it is already sequenced.
	        */
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
	
	        /**
	        * Start playback at an absolute time ont the VideoContext's timeline.
	        *
	        * @param {number} time - the time on the VideoContexts timeline to start playing.
	        * @return {boolean} Will return true is seqeuncing has succeded, or false if it is already sequenced.
	        */
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
	
	        /**
	        * Stop playback at VideoContext.currentTime plus passed time. If passed time is negative, will play as soon as possible.
	        *
	        * @param {number} time - the time from the currentTime of the video context which to stop playback.
	        * @return {boolean} Will return true is seqeuncing has succeded, or false if the playback has already ended or if start hasn't been called yet, or if time is less than the start time.
	        */
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
	
	        /**
	        * Stop playback at an absolute time ont the VideoContext's timeline.
	        *
	        * @param {number} time - the time on the VideoContexts timeline to stop playing.
	        * @return {boolean} Will return true is seqeuncing has succeded, or false if the playback has already ended or if start hasn't been called yet, or if time is less than the start time.
	        */
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
	                (0, _utilsJs.clearTexture)(this._gl, this._texture);
	                this._state = STATE.sequenced;
	            }
	            if (time >= this._startTime && this._state !== STATE.paused) {
	                this._state = STATE.playing;
	            }
	            if (time >= this._stopTime) {
	                (0, _utilsJs.clearTexture)(this._gl, this._texture);
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
	            if (this._state === STATE.playing || this._state === STATE.paused || this._state === STATE.error) {
	                return this._ready;
	            }
	            return true;
	        }
	    }, {
	        key: "_update",
	        value: function _update(currentTime) {
	            var triggerTextureUpdate = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	            this._rendered = true;
	            var timeDelta = currentTime - this._currentTime;
	
	            //update the current time
	            this._currentTime = currentTime;
	
	            //update the state
	            if (this._state === STATE.waiting || this._state === STATE.ended || this._state === STATE.error) return false;
	
	            this._triggerCallbacks("render", currentTime);
	
	            if (currentTime < this._startTime) {
	                (0, _utilsJs.clearTexture)(this._gl, this._texture);
	                this._state = STATE.sequenced;
	            }
	
	            if (currentTime >= this._startTime && this._state !== STATE.paused && this._state !== STATE.error) {
	                if (this._state !== STATE.playing) this._triggerCallbacks("play");
	                this._state = STATE.playing;
	            }
	
	            if (currentTime >= this._stopTime) {
	                (0, _utilsJs.clearTexture)(this._gl, this._texture);
	                this._triggerCallbacks("ended");
	                this._state = STATE.ended;
	            }
	
	            //update this source nodes texture
	            if (this._element === undefined || this._ready === false) return true;
	
	            if (!this._renderPaused && this._state === STATE.paused) {
	                if (triggerTextureUpdate) (0, _utilsJs.updateTexture)(this._gl, this._texture, this._element);
	                this._renderPaused = true;
	            }
	            if (this._state === STATE.playing) {
	                if (triggerTextureUpdate) (0, _utilsJs.updateTexture)(this._gl, this._texture, this._element);
	                if (this._stretchPaused) {
	                    this._stopTime += timeDelta;
	                }
	            }
	
	            return true;
	        }
	
	        /**
	        * Clear any timeline state the node currently has, this puts the node in the "waiting" state, as if neither start nor stop had been called.
	        */
	    }, {
	        key: "clearTimelineState",
	        value: function clearTimelineState() {
	            this._startTime = NaN;
	            this._stopTime = Infinity;
	            this._state = STATE.waiting;
	        }
	
	        /**
	        * Destroy and clean-up the node.
	        */
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            _get(Object.getPrototypeOf(SourceNode.prototype), "destroy", this).call(this);
	            this._triggerCallbacks("destroy");
	            this.unregisterCallback();
	            delete this._element;
	            this._elementURL = undefined;
	            this._state = STATE.waiting;
	            this._currentTime = 0;
	            this._startTime = NaN;
	            this._stopTime = Infinity;
	            this._ready = false;
	            this._loadCalled = false;
	            this._texture = undefined;
	        }
	    }, {
	        key: "state",
	        get: function get() {
	            return this._state;
	        }
	
	        /**
	        * Returns the underlying DOM element which represents this source node.
	        * Note: If a source node is created with a url rather than passing in an existing element then this will return undefined until the source node preloads the element.
	        *
	        * @return {Element} The underlying DOM element representing the media for the node. If the lifecycle of the video is owned UNSIGNED_BYTE the node itself, this can return undefined if the element hasn't been loaded yet.
	        *
	        * @example 
	        * //Accessing the Element on a VideoNode created via a URL
	        * var ctx = new VideoContext();
	        * var videoNode = ctx.createVideoSourceNode('video.mp4');
	        * videoNode.start(0);
	        * videoNode.stop(5);
	        * //When the node starts playing the element should exist so set it's volume to 0
	        * videoNode.regsiterCallback("play", function(){videoNode.element.volume = 0;});
	        *
	        *
	        * @example 
	        * //Accessing the Element on a VideoNode created via an already existing element
	        * var ctx = new VideoContext();
	        * var videoElement = document.createElement("video");
	        * var videoNode = ctx.createVideoSourceNode(videoElement);
	        * videoNode.start(0);
	        * videoNode.stop(5);
	        * //The elemnt can be accessed any time because it's lifecycle is managed outside of the VideoContext
	        * videoNode.element.volume = 0;
	        *
	        */
	    }, {
	        key: "element",
	        get: function get() {
	            return this._element;
	        }
	
	        /**
	        * Returns the duration of the node on a timeline. If no start time is set will return undefiend, if no stop time is set will return Infinity.
	        *
	        * @return {number} The duration of the node in seconds.
	        *
	        * @example 
	        * var ctx = new VideoContext();
	        * var videoNode = ctx.createVideoSourceNode('video.mp4');
	        * videoNode.start(5);
	        * videoNode.stop(10);
	        * console.log(videoNode.duration); //will output 10
	        */
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
	})(_graphnode2["default"]);
	
	exports.SOURCENODESTATE = STATE;
	exports["default"] = SourceNode;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	//Matthew Shotton, R&D User Experience,© BBC 2015
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports.compileShader = compileShader;
	exports.createShaderProgram = createShaderProgram;
	exports.createElementTexutre = createElementTexutre;
	exports.updateTexture = updateTexture;
	exports.clearTexture = clearTexture;
	exports.exportToJSON = exportToJSON;
	exports.createControlFormForNode = createControlFormForNode;
	exports.visualiseVideoContextGraph = visualiseVideoContextGraph;
	exports.createSigmaGraphDataFromRenderGraph = createSigmaGraphDataFromRenderGraph;
	exports.importSimpleEDL = importSimpleEDL;
	exports.visualiseVideoContextTimeline = visualiseVideoContextTimeline;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _DefinitionsDefinitionsJs = __webpack_require__(4);
	
	var _DefinitionsDefinitionsJs2 = _interopRequireDefault(_DefinitionsDefinitionsJs);
	
	var _SourceNodesSourcenodeJs = __webpack_require__(2);
	
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
	* @param {String} vertexShaderSource - A string of vertex shader code to compile.
	* @param {String} fragmentShaderSource - A string of fragment shader code to compile.
	*
	* @return {WebGLProgram} A compiled & linkde shader program.
	*/
	
	function createShaderProgram(gl, vertexShaderSource, fragmentShaderSource) {
	    var vertexShader = compileShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
	    var fragmentShader = compileShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);
	    var program = gl.createProgram();
	
	    gl.attachShader(program, vertexShader);
	    gl.attachShader(program, fragmentShader);
	    gl.linkProgram(program);
	
	    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
	        throw { "error": 4, "msg": "Can't link shader program for track", toString: function toString() {
	                return this.msg;
	            } };
	    }
	    return program;
	}
	
	function createElementTexutre(gl) {
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
	    gl.bindTexture(gl.TEXTURE_2D, texture);
	    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, element);
	}
	
	function clearTexture(gl, texture) {
	    gl.bindTexture(gl.TEXTURE_2D, texture);
	    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
	}
	
	function exportToJSON(vc) {
	
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
	                var inputID = undefined;
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
	                if (!_iteratorNormalCompletion && _iterator["return"]) {
	                    _iterator["return"]();
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
	    for (var state in _SourceNodesSourcenodeJs.SOURCENODESTATE) {
	        sourceNodeStateMapping[_SourceNodesSourcenodeJs.SOURCENODESTATE[state]] = state;
	    }
	
	    for (var index in vc._sourceNodes) {
	        var source = vc._sourceNodes[index];
	        var id = "source" + index;
	        var node_url = "";
	
	        if (!source._isResponsibleForElementLifeCycle) {
	            console.debug("Warning - Trying to export source created from an element not a URL. URL of export will be set to the elements src attribute and may be incorrect", source);
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
	        if (source._sourceOffset) {
	            node.sourceOffset = source._sourceOffset;
	        }
	        result[id] = node;
	    }
	
	    for (var index in vc._processingNodes) {
	        var processor = vc._processingNodes[index];
	        var id = "processor" + index;
	        var node = {
	            type: processor.displayName,
	            definition: processor._definition,
	            inputs: getInputIDs(processor, vc),
	            properties: {}
	        };
	
	        for (var property in node.definition.properties) {
	            node.properties[property] = processor[property];
	        }
	
	        if (node.type === "TransitionNode") {
	            node.transitions = processor._transitions;
	        }
	
	        result[id] = node;
	    }
	
	    result["destination"] = {
	        type: "Destination",
	        inputs: getInputIDs(vc.destination, vc)
	    };
	
	    return JSON.stringify(result);
	}
	
	function createControlFormForNode(node, nodeName) {
	    var rootDiv = document.createElement("div");
	
	    if (nodeName !== undefined) {
	        var title = document.createElement("h2");
	        title.innerHTML = nodeName;
	        rootDiv.appendChild(title);
	    }
	
	    var _loop = function (propertyName) {
	        var propertyParagraph = document.createElement("p");
	        var propertyTitleHeader = document.createElement("h3");
	        propertyTitleHeader.innerHTML = propertyName;
	        propertyParagraph.appendChild(propertyTitleHeader);
	
	        var propertyValue = node._properties[propertyName].value;
	        if (typeof propertyValue === "number") {
	            (function () {
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
	            })();
	        } else if (Object.prototype.toString.call(propertyValue) === "[object Array]") {
	            var _loop2 = function () {
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
	        var depth = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
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
	                if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                    _iterator2["return"]();
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
	                if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
	                    _iterator3["return"]();
	                }
	            } finally {
	                if (_didIteratorError3) {
	                    throw _iteratorError3;
	                }
	            }
	        }
	
	        return { x: xStep * nodeDepths.get(node), y: nodeHeight * 1.5 * count + 50 };
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
	            if (node.displayName === "CompositingNode") {
	                color = "#000000";
	            }
	            if (node.displayName === "DestinationNode") {
	                color = "#7D9F35";
	                text = "Output";
	            }
	            if (node.displayName === "VideoNode") {
	                color = "#572A72";
	                text = "Video";
	            }
	            if (node.displayName === "CanvasNode") {
	                color = "#572A72";
	                text = "Canvas";
	            }
	            if (node.displayName === "ImageNode") {
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
	            if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
	                _iterator4["return"]();
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
	            var _id = "source " + node.displayName + " " + videoContext._sourceNodes.indexOf(node);
	            return _id;
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
	    for (var i = 0; i < videoContext._processingNodes.length; i++) {
	        var processingNode = videoContext._processingNodes[i];
	        graph.nodes.push({
	            id: idForNode(processingNode),
	            x: Math.random() * 2.5,
	            y: Math.random(),
	            size: 2,
	            node: processingNode
	        });
	    }
	
	    for (var i = 0; i < videoContext._renderGraph.connections.length; i++) {
	        var conn = videoContext._renderGraph.connections[i];
	        graph.edges.push({
	            "id": "e" + i.toString(),
	            "source": idForNode(conn.source),
	            "target": idForNode(conn.destination)
	        });
	    }
	
	    return graph;
	}
	
	function importSimpleEDL(ctx, playlist) {
	    // Create a "track" node to connect all the clips to.
	    var trackNode = ctx.compositor(_DefinitionsDefinitionsJs2["default"].COMBINE);
	
	    // Create a source node for each of the clips.
	    var _iteratorNormalCompletion5 = true;
	    var _didIteratorError5 = false;
	    var _iteratorError5 = undefined;
	
	    try {
	        for (var _iterator5 = playlist[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	            var clip = _step5.value;
	
	            var node = undefined;
	            if (clip.type === "video") {
	                node = ctx.video(clip.src, clip.sourceStart);
	            } else if (clip.type === "image") {
	                node = ctx.image(clip.src, clip.sourceStart);
	            } else {
	                console.debug("Clip type \"" + clip.type + "\" not recognised, skipping.");
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
	            if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
	                _iterator5["return"]();
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
	        "video": ["#572A72", "#3C1255"],
	        "image": ["#7D9F35", "#577714"],
	        "canvas": ["#AA9639", "#806D15"]
	    };
	
	    ctx.clearRect(0, 0, w, h);
	    ctx.fillStyle = "#838383";
	
	    var _iteratorNormalCompletion6 = true;
	    var _didIteratorError6 = false;
	    var _iteratorError6 = undefined;
	
	    try {
	        for (var _iterator6 = videoContext._processingNodes[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	            var node = _step6.value;
	
	            if (node.displayName !== "TransitionNode") continue;
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
	                        if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
	                            _iterator7["return"]();
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
	            if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
	                _iterator6["return"]();
	            }
	        } finally {
	            if (_didIteratorError6) {
	                throw _iteratorError6;
	            }
	        }
	    }
	
	    for (var i = 0; i < videoContext._sourceNodes.length; i++) {
	        var sourceNode = videoContext._sourceNodes[i];
	        var duration = sourceNode._stopTime - sourceNode._startTime;
	        if (duration === Infinity) duration = videoContext.currentTime;
	        var start = sourceNode._startTime;
	
	        var msW = duration * pixelsPerSecond;
	        var msH = trackHeight;
	        var msX = start * pixelsPerSecond;
	        var msY = trackHeight * i;
	        ctx.fillStyle = mediaSourceStyle.video[i % mediaSourceStyle.video.length];
	
	        ctx.fillRect(msX, msY, msW, msH);
	        ctx.fill();
	    }
	
	    if (currentTime !== undefined) {
	        ctx.fillStyle = "#000";
	        ctx.fillRect(currentTime * pixelsPerSecond, 0, 1, h);
	    }
	}
	
	var UpdateablesManager = (function () {
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
	            var blob = new Blob([this._webWorkerString], { type: "application/javascript" });
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
	})();

	exports.UpdateablesManager = UpdateablesManager;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _aaf_video_scaleJs = __webpack_require__(5);
	
	var _aaf_video_scaleJs2 = _interopRequireDefault(_aaf_video_scaleJs);
	
	var _crossfadeJs = __webpack_require__(6);
	
	var _crossfadeJs2 = _interopRequireDefault(_crossfadeJs);
	
	var _horizontalWipeJs = __webpack_require__(7);
	
	var _horizontalWipeJs2 = _interopRequireDefault(_horizontalWipeJs);
	
	var _verticalWipeJs = __webpack_require__(8);
	
	var _verticalWipeJs2 = _interopRequireDefault(_verticalWipeJs);
	
	var _randomDissolveJs = __webpack_require__(9);
	
	var _randomDissolveJs2 = _interopRequireDefault(_randomDissolveJs);
	
	var _toColorAndBackFadeJs = __webpack_require__(10);
	
	var _toColorAndBackFadeJs2 = _interopRequireDefault(_toColorAndBackFadeJs);
	
	var _starWipeJs = __webpack_require__(11);
	
	var _starWipeJs2 = _interopRequireDefault(_starWipeJs);
	
	var _combineJs = __webpack_require__(12);
	
	var _combineJs2 = _interopRequireDefault(_combineJs);
	
	var _colorThresholdJs = __webpack_require__(13);
	
	var _colorThresholdJs2 = _interopRequireDefault(_colorThresholdJs);
	
	var _monochromeJs = __webpack_require__(14);
	
	var _monochromeJs2 = _interopRequireDefault(_monochromeJs);
	
	var _horizontalBlurJs = __webpack_require__(15);
	
	var _horizontalBlurJs2 = _interopRequireDefault(_horizontalBlurJs);
	
	var _verticalBlurJs = __webpack_require__(16);
	
	var _verticalBlurJs2 = _interopRequireDefault(_verticalBlurJs);
	
	var _aaf_video_flopJs = __webpack_require__(17);
	
	var _aaf_video_flopJs2 = _interopRequireDefault(_aaf_video_flopJs);
	
	var _aaf_video_flipJs = __webpack_require__(18);
	
	var _aaf_video_flipJs2 = _interopRequireDefault(_aaf_video_flipJs);
	
	var _aaf_video_positionJs = __webpack_require__(19);
	
	var _aaf_video_positionJs2 = _interopRequireDefault(_aaf_video_positionJs);
	
	var _aaf_video_cropJs = __webpack_require__(20);
	
	var _aaf_video_cropJs2 = _interopRequireDefault(_aaf_video_cropJs);
	
	var _staticDissolveJs = __webpack_require__(21);
	
	var _staticDissolveJs2 = _interopRequireDefault(_staticDissolveJs);
	
	var _staticEffectJs = __webpack_require__(22);
	
	var _staticEffectJs2 = _interopRequireDefault(_staticEffectJs);
	
	var _dreamfadeJs = __webpack_require__(23);
	
	var _dreamfadeJs2 = _interopRequireDefault(_dreamfadeJs);
	
	var _cubeJs = __webpack_require__(24);
	
	var _cubeJs2 = _interopRequireDefault(_cubeJs);
	
	var _morphJs = __webpack_require__(25);
	
	var _morphJs2 = _interopRequireDefault(_morphJs);
	
	var _crosszoomJs = __webpack_require__(26);
	
	var _crosszoomJs2 = _interopRequireDefault(_crosszoomJs);
	
	var _swapJs = __webpack_require__(27);
	
	var _swapJs2 = _interopRequireDefault(_swapJs);
	
	var _squareswipeJs = __webpack_require__(28);
	
	var _squareswipeJs2 = _interopRequireDefault(_squareswipeJs);
	
	var _slideJs = __webpack_require__(29);
	
	var _slideJs2 = _interopRequireDefault(_slideJs);
	
	var _simpleflipJs = __webpack_require__(30);
	
	var _simpleflipJs2 = _interopRequireDefault(_simpleflipJs);
	
	var _pinwheelJs = __webpack_require__(31);
	
	var _pinwheelJs2 = _interopRequireDefault(_pinwheelJs);
	
	var _powerDisformationJs = __webpack_require__(32);
	
	var _powerDisformationJs2 = _interopRequireDefault(_powerDisformationJs);
	
	var _polkaDotsCurtainJs = __webpack_require__(33);
	
	var _polkaDotsCurtainJs2 = _interopRequireDefault(_polkaDotsCurtainJs);
	
	var _kalerdoscopeJs = __webpack_require__(34);
	
	var _kalerdoscopeJs2 = _interopRequireDefault(_kalerdoscopeJs);
	
	var _doomscreenJs = __webpack_require__(35);
	
	var _doomscreenJs2 = _interopRequireDefault(_doomscreenJs);
	
	var _star_wipeJs = __webpack_require__(36);
	
	var _star_wipeJs2 = _interopRequireDefault(_star_wipeJs);
	
	var _potleafJs = __webpack_require__(37);
	
	var _potleafJs2 = _interopRequireDefault(_potleafJs);
	
	var _glitchJs = __webpack_require__(38);
	
	var _glitchJs2 = _interopRequireDefault(_glitchJs);
	
	var _dreamyzoomJs = __webpack_require__(39);
	
	var _dreamyzoomJs2 = _interopRequireDefault(_dreamyzoomJs);
	
	var _tilewaveBottomToTopJs = __webpack_require__(40);
	
	var _tilewaveBottomToTopJs2 = _interopRequireDefault(_tilewaveBottomToTopJs);
	
	var _tilescanlineJs = __webpack_require__(41);
	
	var _tilescanlineJs2 = _interopRequireDefault(_tilescanlineJs);
	
	var _dreamyJs = __webpack_require__(42);
	
	var _dreamyJs2 = _interopRequireDefault(_dreamyJs);
	
	var _advancedmosaicJs = __webpack_require__(43);
	
	var _advancedmosaicJs2 = _interopRequireDefault(_advancedmosaicJs);
	
	var _swirlJs = __webpack_require__(44);
	
	var _swirlJs2 = _interopRequireDefault(_swirlJs);
	
	var _defocusBlurJs = __webpack_require__(45);
	
	var _defocusBlurJs2 = _interopRequireDefault(_defocusBlurJs);
	
	var _colourDistanceJs = __webpack_require__(46);
	
	var _colourDistanceJs2 = _interopRequireDefault(_colourDistanceJs);
	
	var _dissolveJs = __webpack_require__(47);
	
	var _dissolveJs2 = _interopRequireDefault(_dissolveJs);
	
	var _hsvfadeJs = __webpack_require__(48);
	
	var _hsvfadeJs2 = _interopRequireDefault(_hsvfadeJs);
	
	var _foldJs = __webpack_require__(49);
	
	var _foldJs2 = _interopRequireDefault(_foldJs);
	
	var _linearblurJs = __webpack_require__(50);
	
	var _linearblurJs2 = _interopRequireDefault(_linearblurJs);
	
	var _pixelizeJs = __webpack_require__(51);
	
	var _pixelizeJs2 = _interopRequireDefault(_pixelizeJs);
	
	var _randomsquaresJs = __webpack_require__(52);
	
	var _randomsquaresJs2 = _interopRequireDefault(_randomsquaresJs);
	
	var _pagecurlJs = __webpack_require__(53);
	
	var _pagecurlJs2 = _interopRequireDefault(_pagecurlJs);
	
	var _polkadotsJs = __webpack_require__(54);
	
	var _polkadotsJs2 = _interopRequireDefault(_polkadotsJs);
	
	var _burnJs = __webpack_require__(55);
	
	var _burnJs2 = _interopRequireDefault(_burnJs);
	
	var _finalGaussianNoiseJs = __webpack_require__(56);
	
	var _finalGaussianNoiseJs2 = _interopRequireDefault(_finalGaussianNoiseJs);
	
	var _mosaiczoomJs = __webpack_require__(57);
	
	var _mosaiczoomJs2 = _interopRequireDefault(_mosaiczoomJs);
	
	var _radialJs = __webpack_require__(58);
	
	var _radialJs2 = _interopRequireDefault(_radialJs);
	
	var _butterflyWaveScrawlerJs = __webpack_require__(59);
	
	var _butterflyWaveScrawlerJs2 = _interopRequireDefault(_butterflyWaveScrawlerJs);
	
	var _crazyparametricfunJs = __webpack_require__(60);
	
	var _crazyparametricfunJs2 = _interopRequireDefault(_crazyparametricfunJs);
	
	var _rippleJs = __webpack_require__(61);
	
	var _rippleJs2 = _interopRequireDefault(_rippleJs);
	
	var _flashJs = __webpack_require__(62);
	
	var _flashJs2 = _interopRequireDefault(_flashJs);
	
	var _flyeyeJs = __webpack_require__(63);
	
	var _flyeyeJs2 = _interopRequireDefault(_flyeyeJs);
	
	var _doorwayJs = __webpack_require__(64);
	
	var _doorwayJs2 = _interopRequireDefault(_doorwayJs);
	
	var _circleopenJs = __webpack_require__(65);
	
	var _circleopenJs2 = _interopRequireDefault(_circleopenJs);
	
	var _fadecolorJs = __webpack_require__(66);
	
	var _fadecolorJs2 = _interopRequireDefault(_fadecolorJs);
	
	var _heartwipeJs = __webpack_require__(67);
	
	var _heartwipeJs2 = _interopRequireDefault(_heartwipeJs);
	
	var _dispersionblurJs = __webpack_require__(68);
	
	var _dispersionblurJs2 = _interopRequireDefault(_dispersionblurJs);
	
	var _invertedPagecurlJs = __webpack_require__(69);
	
	var _invertedPagecurlJs2 = _interopRequireDefault(_invertedPagecurlJs);
	
	var _waterdropJs = __webpack_require__(70);
	
	var _waterdropJs2 = _interopRequireDefault(_waterdropJs);
	
	var _stereoViewerToyJs = __webpack_require__(71);
	
	var _stereoViewerToyJs2 = _interopRequireDefault(_stereoViewerToyJs);
	
	var _wipeupJs = __webpack_require__(72);
	
	var _wipeupJs2 = _interopRequireDefault(_wipeupJs);
	
	var _circlecropJs = __webpack_require__(73);
	
	var _circlecropJs2 = _interopRequireDefault(_circlecropJs);
	
	var _revealJs = __webpack_require__(74);
	
	var _revealJs2 = _interopRequireDefault(_revealJs);
	
	var _puzzlerightJs = __webpack_require__(75);
	
	var _puzzlerightJs2 = _interopRequireDefault(_puzzlerightJs);
	
	var _warpfadeJs = __webpack_require__(76);
	
	var _warpfadeJs2 = _interopRequireDefault(_warpfadeJs);
	
	var _bounceJs = __webpack_require__(77);
	
	var _bounceJs2 = _interopRequireDefault(_bounceJs);
	
	var _atmosphericSlidershowJs = __webpack_require__(78);
	
	var _atmosphericSlidershowJs2 = _interopRequireDefault(_atmosphericSlidershowJs);
	
	var _luminancemeltJs = __webpack_require__(79);
	
	var _luminancemeltJs2 = _interopRequireDefault(_luminancemeltJs);
	
	var _crosshatchJs = __webpack_require__(80);
	
	var _crosshatchJs2 = _interopRequireDefault(_crosshatchJs);
	
	var _fadeinoutJs = __webpack_require__(81);
	
	var _fadeinoutJs2 = _interopRequireDefault(_fadeinoutJs);
	
	var _saturationJs = __webpack_require__(82);
	
	var _saturationJs2 = _interopRequireDefault(_saturationJs);
	
	var _gaussianHBlurJs = __webpack_require__(83);
	
	var _gaussianHBlurJs2 = _interopRequireDefault(_gaussianHBlurJs);
	
	var _gaussianVBlurJs = __webpack_require__(84);
	
	var _gaussianVBlurJs2 = _interopRequireDefault(_gaussianVBlurJs);
	
	var _luminanceJs = __webpack_require__(85);
	
	var _luminanceJs2 = _interopRequireDefault(_luminanceJs);
	
	var _glassblurJs = __webpack_require__(86);
	
	var _glassblurJs2 = _interopRequireDefault(_glassblurJs);
	
	var _radiusGaussianHBlurJs = __webpack_require__(87);
	
	var _radiusGaussianHBlurJs2 = _interopRequireDefault(_radiusGaussianHBlurJs);
	
	var _radiusGaussianVBlurJs = __webpack_require__(88);
	
	var _radiusGaussianVBlurJs2 = _interopRequireDefault(_radiusGaussianVBlurJs);
	
	var _cropWidthJs = __webpack_require__(89);
	
	var _cropWidthJs2 = _interopRequireDefault(_cropWidthJs);
	
	var _opacityJs = __webpack_require__(90);
	
	var _opacityJs2 = _interopRequireDefault(_opacityJs);
	
	var _lookupJs = __webpack_require__(91);
	
	var _lookupJs2 = _interopRequireDefault(_lookupJs);
	
	var _drawimageJs = __webpack_require__(92);
	
	var _drawimageJs2 = _interopRequireDefault(_drawimageJs);
	
	var _blackpadJs = __webpack_require__(93);
	
	var _blackpadJs2 = _interopRequireDefault(_blackpadJs);
	
	var _regionmosaicJs = __webpack_require__(94);
	
	var _regionmosaicJs2 = _interopRequireDefault(_regionmosaicJs);
	
	var _croprectJs = __webpack_require__(95);
	
	var _croprectJs2 = _interopRequireDefault(_croprectJs);
	
	var _gaussianConstHBlurJs = __webpack_require__(96);
	
	var _gaussianConstHBlurJs2 = _interopRequireDefault(_gaussianConstHBlurJs);
	
	var _gaussianConstVBlurJs = __webpack_require__(97);
	
	var _gaussianConstVBlurJs2 = _interopRequireDefault(_gaussianConstVBlurJs);
	
	var _meanHBlurJs = __webpack_require__(98);
	
	var _meanHBlurJs2 = _interopRequireDefault(_meanHBlurJs);
	
	var _meanVBlurJs = __webpack_require__(99);
	
	var _meanVBlurJs2 = _interopRequireDefault(_meanVBlurJs);
	
	var _cropblackJs = __webpack_require__(100);
	
	var _cropblackJs2 = _interopRequireDefault(_cropblackJs);
	
	var DEFINITIONS = {
	    CUBE: _cubeJs2["default"],
	    MORPH: _morphJs2["default"],
	    CROSS_ZOOM: _crosszoomJs2["default"],
	    SWAP: _swapJs2["default"],
	    SQUARE_SWIPE: _squareswipeJs2["default"],
	    SLIDE: _slideJs2["default"],
	    SIMPLE_FLIP: _simpleflipJs2["default"],
	    PIN_WHEEL: _pinwheelJs2["default"],
	    POWER_DISFORMATION: _powerDisformationJs2["default"],
	    POLKADOTS_CURTAIN: _polkaDotsCurtainJs2["default"],
	    KALERDO_SCOPE: _kalerdoscopeJs2["default"],
	    DOOM_SCREEN: _doomscreenJs2["default"],
	    STARWIPE: _star_wipeJs2["default"],
	    POTLEAF: _potleafJs2["default"],
	    GLITCH: _glitchJs2["default"],
	    DREAMY_ZOOM: _dreamyzoomJs2["default"],
	    TILE_WAVE_BOTTOM_TO_TOP: _tilewaveBottomToTopJs2["default"],
	    TILE_SCAN_LINE: _tilescanlineJs2["default"],
	    DREAMY: _dreamyJs2["default"],
	    ADVANCED_MOSAIC: _advancedmosaicJs2["default"],
	    SWIRL: _swirlJs2["default"],
	    DEFOCUS_BLUR: _defocusBlurJs2["default"],
	    COLOUR_DISTANCE: _colourDistanceJs2["default"],
	    DISSOLVE: _dissolveJs2["default"],
	    HSVFADE: _hsvfadeJs2["default"],
	    FOLD: _foldJs2["default"],
	    LINEAR_BLUR: _linearblurJs2["default"],
	    PIXELIZE: _pixelizeJs2["default"],
	    RANDOM_SQUARES: _randomsquaresJs2["default"],
	    PAGE_CURL: _pagecurlJs2["default"],
	    POLKADOTS: _polkadotsJs2["default"],
	    BURN: _burnJs2["default"],
	    FINAL_GAUSSIAN_NOISE: _finalGaussianNoiseJs2["default"],
	    MOSAIC_ZOOM: _mosaiczoomJs2["default"],
	    RADIAL: _radialJs2["default"],
	    BUTTERFLY_WAVE_SCRAWLER: _butterflyWaveScrawlerJs2["default"],
	    CRAZY_PARAMETRIC_FUN: _crazyparametricfunJs2["default"],
	    RIPPLE: _rippleJs2["default"],
	    FLASH: _flashJs2["default"],
	    FLYEYE: _flyeyeJs2["default"],
	    DOORWAY: _doorwayJs2["default"],
	    CIRCLE_OPEN: _circleopenJs2["default"],
	    FADE_COLOR: _fadecolorJs2["default"],
	    HEART_WIPE: _heartwipeJs2["default"],
	    DISPERSION_BLUR: _dispersionblurJs2["default"],
	    INVERTED_PAGECURL: _invertedPagecurlJs2["default"],
	    WATER_DROP: _waterdropJs2["default"],
	    STEREO_VIEWER_TOY: _stereoViewerToyJs2["default"],
	    WIPE_UP: _wipeupJs2["default"],
	    CIRCLE_CROP: _circlecropJs2["default"],
	    REVEAL: _revealJs2["default"],
	    PUZZLE_RIGHT: _puzzlerightJs2["default"],
	    WARP_FADE: _warpfadeJs2["default"],
	    BOUNCE: _bounceJs2["default"],
	    ATMOSPHERIC_SLIDERSHOW: _atmosphericSlidershowJs2["default"],
	    LUMINANCEMELT: _luminancemeltJs2["default"],
	    CROSSHATCH: _crosshatchJs2["default"],
	    FADEINOUT: _fadeinoutJs2["default"],
	
	    SATURATION: _saturationJs2["default"],
	    GAUSSIAN_HBLUR: _gaussianHBlurJs2["default"],
	    GAUSSIAN_VBLUR: _gaussianVBlurJs2["default"],
	    LUMINANCE: _luminanceJs2["default"],
	    GLASSBLUR: _glassblurJs2["default"],
	    RADIUS_GAUSSIAN_HBLUR: _radiusGaussianHBlurJs2["default"],
	    RADIUS_GAUSSIAN_VBLUR: _radiusGaussianVBlurJs2["default"],
	    CROP_WIDTH: _cropWidthJs2["default"],
	    LOOKUP: _lookupJs2["default"],
	    DRAWIMAGE: _drawimageJs2["default"],
	    BLACKPAD: _blackpadJs2["default"],
	    REGIONMOSAIC: _regionmosaicJs2["default"],
	    CROPRECT: _croprectJs2["default"],
	    GAUSSIAN_CONST_HBLUR: _gaussianConstHBlurJs2["default"],
	    GAUSSIAN_CONST_VBLUR: _gaussianConstVBlurJs2["default"],
	    MEAN_HBLUR: _meanHBlurJs2["default"],
	    MEAN_VBLUR: _meanVBlurJs2["default"],
	    CROPBLACK: _cropblackJs2["default"],
	
	    AAF_VIDEO_SCALE: _aaf_video_scaleJs2["default"],
	    CROSSFADE: _crossfadeJs2["default"],
	    DREAMFADE: _dreamfadeJs2["default"],
	    HORIZONTAL_WIPE: _horizontalWipeJs2["default"],
	    VERTICAL_WIPE: _verticalWipeJs2["default"],
	    RANDOM_DISSOLVE: _randomDissolveJs2["default"],
	    STATIC_DISSOLVE: _staticDissolveJs2["default"],
	    STATIC_EFFECT: _staticEffectJs2["default"],
	    TO_COLOR_AND_BACK: _toColorAndBackFadeJs2["default"],
	    STAR_WIPE: _starWipeJs2["default"],
	    COMBINE: _combineJs2["default"],
	    COLORTHRESHOLD: _colorThresholdJs2["default"],
	    MONOCHROME: _monochromeJs2["default"],
	    HORIZONTAL_BLUR: _horizontalBlurJs2["default"],
	    VERTICAL_BLUR: _verticalBlurJs2["default"],
	    AAF_VIDEO_CROP: _aaf_video_cropJs2["default"],
	    AAF_VIDEO_POSITION: _aaf_video_positionJs2["default"],
	    AAF_VIDEO_FLIP: _aaf_video_flipJs2["default"],
	    AAF_VIDEO_FLOP: _aaf_video_flopJs2["default"],
	    OPACITY: _opacityJs2["default"]
	};
	
	exports["default"] = DEFINITIONS;
	module.exports = exports["default"];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var aaf_video_scale = {
	    "title": "AAF Video Scale Effect",
	    "description": "A scale effect based on the AAF spec.",
	    "vertexShader": "\
	        attribute vec2 a_position;\
	        attribute vec2 a_texCoord;\
	        varying vec2 v_texCoord;\
	        void main() {\
	            gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	            v_texCoord = a_texCoord;\
	        }",
	    "fragmentShader": "\
	        precision mediump float;\
	        uniform sampler2D u_image;\
	        uniform float scaleX;\
	        uniform float scaleY;\
	        varying vec2 v_texCoord;\
	        varying float v_progress;\
	        void main(){\
	            vec2 pos = vec2(v_texCoord[0]*1.0/scaleX - (1.0/scaleX/2.0 -0.5), v_texCoord[1]*1.0/scaleY - (1.0/scaleY/2.0 -0.5));\
	                vec4 color = texture2D(u_image, pos);\
	                if (pos[0] < 0.0 || pos[0] > 1.0 || pos[1] < 0.0 || pos[1] > 1.0){\
	                    color = vec4(0.0,0.0,0.0,0.0);\
	                }\
	                gl_FragColor = color;\
	            }",
	    "properties": {
	        "scaleX": { "type": "uniform", "value": 1.0 },
	        "scaleY": { "type": "uniform", "value": 1.0 }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = aaf_video_scale;
	module.exports = exports["default"];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var crossfade = {
	    "title": "Cross-Fade",
	    "description": "A cross-fade effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D u_image_a;\
	    uniform sampler2D u_image_b;\
	    uniform float mix;\
	    varying vec2 v_texCoord;\
	    varying float v_mix;\
	    void main(){\
	        vec4 color_a = texture2D(u_image_a, v_texCoord);\
	        vec4 color_b = texture2D(u_image_b, v_texCoord);\
	        color_a[0] *= (1.0 - mix);\
	        color_a[1] *= (1.0 - mix);\
	        color_a[2] *= (1.0 - mix);\
	        color_a[3] *= (1.0 - mix);\
	        color_b[0] *= mix;\
	        color_b[1] *= mix;\
	        color_b[2] *= mix;\
	        color_b[3] *= mix;\
	        gl_FragColor = color_a + color_b;\
	    }",
	    "properties": {
	        "mix": { "type": "uniform", "value": 0.0 }
	    },
	    "inputs": ["u_image_a", "u_image_b"]
	};
	
	exports["default"] = crossfade;
	module.exports = exports["default"];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var horizontal_wipe = {
	    "title": "Horizontal Wipe",
	    "description": "A horizontal wipe effect. Typically used as a transistion.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image_a;\
	            uniform sampler2D u_image_b;\
	            uniform float mix;\
	            varying vec2 v_texCoord;\
	            varying float v_mix;\
	            void main(){\
	                vec4 color_a = texture2D(u_image_a, v_texCoord);\
	                vec4 color_b = texture2D(u_image_b, v_texCoord);\
	                if (v_texCoord[0] > mix){\
	                    gl_FragColor = color_a;\
	                } else {\
	                    gl_FragColor = color_b;\
	                }\
	            }",
	    "properties": {
	        "mix": { "type": "uniform", "value": 0.0 }
	    },
	    "inputs": ["u_image_a", "u_image_b"]
	};
	
	exports["default"] = horizontal_wipe;
	module.exports = exports["default"];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var verticalWipe = {
	    "title": "vertical Wipe",
	    "description": "A vertical wipe effect. Typically used as a transistion.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image_a;\
	            uniform sampler2D u_image_b;\
	            uniform float mix;\
	            varying vec2 v_texCoord;\
	            varying float v_mix;\
	            void main(){\
	                vec4 color_a = texture2D(u_image_a, v_texCoord);\
	                vec4 color_b = texture2D(u_image_b, v_texCoord);\
	                if (v_texCoord[1] > mix){\
	                    gl_FragColor = color_a;\
	                } else {\
	                    gl_FragColor = color_b;\
	                }\
	            }",
	    "properties": {
	        "mix": { "type": "uniform", "value": 0.0 }
	    },
	    "inputs": ["u_image_a", "u_image_b"]
	};
	
	exports["default"] = verticalWipe;
	module.exports = exports["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var randomDissolve = {
	    "title": "Random Dissolve",
	    "description": "A random dissolve effect. Typically used as a transistion.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image_a;\
	            uniform sampler2D u_image_b;\
	            uniform float mix;\
	            varying vec2 v_texCoord;\
	            varying float v_mix;\
	            float rand(vec2 co){\
	               return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\
	            }\
	            void main(){\
	                vec4 color_a = texture2D(u_image_a, v_texCoord);\
	                vec4 color_b = texture2D(u_image_b, v_texCoord);\
	                if (clamp(rand(v_texCoord),  0.01, 1.001) > mix){\
	                    gl_FragColor = color_a;\
	                } else {\
	                    gl_FragColor = color_b;\
	                }\
	            }",
	    "properties": {
	        "mix": { "type": "uniform", "value": 0.0 }
	    },
	    "inputs": ["u_image_a", "u_image_b"]
	};
	
	exports["default"] = randomDissolve;
	module.exports = exports["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var toColorAndBackFade = {
	    "title": "To Color And Back Fade",
	    "description": "A fade to black and back effect. Setting mix to 0.5 is a fully solid color frame. Typically used as a transistion.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image_a;\
	            uniform sampler2D u_image_b;\
	            uniform float mix;\
	            uniform vec4 color;\
	            varying vec2 v_texCoord;\
	            varying float v_mix;\
	            void main(){\
	                vec4 color_a = texture2D(u_image_a, v_texCoord);\
	                vec4 color_b = texture2D(u_image_b, v_texCoord);\
	                float mix_amount = (mix *2.0) - 1.0;\
	                if(mix_amount < 0.0){\
	                    gl_FragColor = abs(mix_amount) * color_a + (1.0 - abs(mix_amount)) * color;\
	                } else {\
	                    gl_FragColor = mix_amount * color_b + (1.0 - mix_amount) * color;\
	                }\
	            }",
	    "properties": {
	        "mix": { "type": "uniform", "value": 0.0 },
	        "color": { "type": "uniform", "value": [0.0, 0.0, 0.0, 0.0] }
	    },
	    "inputs": ["u_image_a", "u_image_b"]
	};
	exports["default"] = toColorAndBackFade;
	module.exports = exports["default"];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var starWipe = {
	    "title": "Star Wipe Fade",
	    "description": "A classic star wipe transistion. Typically used as a transistion.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image_a;\
	            uniform sampler2D u_image_b;\
	            uniform float mix;\
	            varying vec2 v_texCoord;\
	            varying float v_mix;\
	            float sign (vec2 p1, vec2 p2, vec2 p3){\
	                return (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1]);\
	            }\
	            bool pointInTriangle(vec2 pt, vec2 v1, vec2 v2, vec2 v3){\
	                bool b1, b2, b3;\
	                b1 = sign(pt, v1, v2) < 0.0;\
	                b2 = sign(pt, v2, v3) < 0.0;\
	                b3 = sign(pt, v3, v1) < 0.0;\
	                return ((b1 == b2) && (b2 == b3));\
	            }\
	            vec2 rotatePointAboutPoint(vec2 point, vec2 pivot, float angle){\
	                float s = sin(angle);\
	                float c = cos(angle);\
	                float x = point[0] - pivot[0];\
	                float y = point[1] - pivot[1];\
	                float new_x = x * c - y * s;\
	                float new_y = x * s + y * c;\
	                return vec2(new_x + pivot[0], new_y+pivot[1]);\
	            }\
	            \
	            void main(){\
	                vec4 color_a = texture2D(u_image_b, v_texCoord);\
	                vec4 color_b = texture2D(u_image_a, v_texCoord);\
	                vec2 t0_p0,t0_p1,t0_p2,t1_p0,t1_p1,t1_p2,t2_p0,t2_p1,t2_p2,t3_p0,t3_p1,t3_p2;\
	                vec2 t4_p0,t4_p1,t4_p2,t5_p0,t5_p1,t5_p2,t6_p0,t6_p1,t6_p2,t7_p0,t7_p1,t7_p2;\
	                \
	                \
	                t0_p0 = vec2(0.0, 0.25) * clamp(mix,0.0,1.0) * 2.0 + vec2(0.5,0.5);\
	                t0_p1 = vec2(0.0, -0.25) * clamp(mix,0.0,1.0) * 2.0 + vec2(0.5,0.5);\
	                t0_p2 = vec2(1.0, 0.0) * clamp(mix,0.0,1.0) * 2.0 + vec2(0.5,0.5);\
	                \
	                t1_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854);\
	                t1_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854);\
	                t1_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854);\
	                \
	                t2_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 2.0);\
	                t2_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 2.0);\
	                t2_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 2.0);\
	                \
	                t3_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 3.0);\
	                t3_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 3.0);\
	                t3_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 3.0);\
	                \
	                t4_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 4.0);\
	                t4_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 4.0);\
	                t4_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 4.0);\
	                \
	                t5_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 5.0);\
	                t5_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 5.0);\
	                t5_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 5.0);\
	                \
	                t6_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 6.0);\
	                t6_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 6.0);\
	                t6_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 6.0);\
	                \
	                t7_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 7.0);\
	                t7_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 7.0);\
	                t7_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 7.0);\
	                \
	                if(mix > 0.99){\
	                    gl_FragColor = color_a;\
	                    return;\
	                }\
	                if(mix < 0.01){\
	                    gl_FragColor = color_b;\
	                    return;\
	                }\
	                if(pointInTriangle(v_texCoord, t0_p0, t0_p1, t0_p2) || pointInTriangle(v_texCoord, t1_p0, t1_p1, t1_p2) || pointInTriangle(v_texCoord, t2_p0, t2_p1, t2_p2) || pointInTriangle(v_texCoord, t3_p0, t3_p1, t3_p2) || pointInTriangle(v_texCoord, t4_p0, t4_p1, t4_p2) || pointInTriangle(v_texCoord, t5_p0, t5_p1, t5_p2) || pointInTriangle(v_texCoord, t6_p0, t6_p1, t6_p2) || pointInTriangle(v_texCoord, t7_p0, t7_p1, t7_p2)){\
	                    gl_FragColor = color_a;\
	                } else {\
	                    gl_FragColor = color_b;\
	                }\
	            }",
	    "properties": {
	        "mix": { "type": "uniform", "value": 1.0 }
	    },
	    "inputs": ["u_image_a", "u_image_b"]
	};
	
	exports["default"] = starWipe;
	module.exports = exports["default"];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var combine = {
	    "title": "Combine",
	    "description": "A basic effect which renders the input to the output, Typically used as a combine node for layering up media with alpha transparency.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            uniform float a;\
	            varying vec2 v_texCoord;\
	            varying float v_mix;\
	            void main(){\
	                vec4 color = texture2D(u_image, v_texCoord);\
	                gl_FragColor = color;\
	            }",
	    "properties": {
	        "a": { "type": "uniform", "value": 0.0 }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = combine;
	module.exports = exports["default"];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var colorThreshold = {
	    "title": "Color Threshold",
	    "description": "Turns all pixels with a greater value than the specified threshold transparent.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            uniform float a;\
	            uniform vec3 colorAlphaThreshold;\
	            varying vec2 v_texCoord;\
	            varying float v_mix;\
	            void main(){\
	                vec4 color = texture2D(u_image, v_texCoord);\
	                if (color[0] > colorAlphaThreshold[0] && color[1]> colorAlphaThreshold[1] && color[2]> colorAlphaThreshold[2]){\
	                    color = vec4(0.0,0.0,0.0,0.0);\
	                }\
	                gl_FragColor = color;\
	            }",
	    "properties": {
	        "a": { "type": "uniform", "value": 0.0 },
	        "colorAlphaThreshold": { "type": "uniform", "value": [0.0, 0.55, 0.0] }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = colorThreshold;
	module.exports = exports["default"];

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var monochrome = {
	    "title": "Monochrome",
	    "description": "Change images to a single chroma (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            uniform vec3 inputMix;\
	            uniform vec3 outputMix;\
	            varying vec2 v_texCoord;\
	            varying float v_mix;\
	            void main(){\
	                vec4 color = texture2D(u_image, v_texCoord);\
	                float mono = color[0]*inputMix[0] + color[1]*inputMix[1] + color[2]*inputMix[2];\
	                color[0] = mono * outputMix[0];\
	                color[1] = mono * outputMix[1];\
	                color[2] = mono * outputMix[2];\
	                gl_FragColor = color;\
	            }",
	    "properties": {
	        "inputMix": { "type": "uniform", "value": [0.4, 0.6, 0.2] },
	        "outputMix": { "type": "uniform", "value": [1.0, 1.0, 1.0] }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = monochrome;
	module.exports = exports["default"];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var horizontal_blur = {
	    "title": "Horizontal Blur",
	    "description": "A horizontal blur effect. Adpated from http://xissburg.com/faster-gaussian-blur-in-glsl/",
	    "vertexShader": "\
	        attribute vec2 a_position;\
	        attribute vec2 a_texCoord;\
	        uniform float blurAmount;\
	        varying vec2 v_texCoord;\
	        varying vec2 v_blurTexCoords[14];\
	        void main() {\
	            gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	            v_texCoord = a_texCoord;\
	            v_blurTexCoords[ 0] = v_texCoord + vec2(-0.028 * blurAmount, 0.0);\
	            v_blurTexCoords[ 1] = v_texCoord + vec2(-0.024 * blurAmount, 0.0);\
	            v_blurTexCoords[ 2] = v_texCoord + vec2(-0.020 * blurAmount, 0.0);\
	            v_blurTexCoords[ 3] = v_texCoord + vec2(-0.016 * blurAmount, 0.0);\
	            v_blurTexCoords[ 4] = v_texCoord + vec2(-0.012 * blurAmount, 0.0);\
	            v_blurTexCoords[ 5] = v_texCoord + vec2(-0.008 * blurAmount, 0.0);\
	            v_blurTexCoords[ 6] = v_texCoord + vec2(-0.004 * blurAmount, 0.0);\
	            v_blurTexCoords[ 7] = v_texCoord + vec2( 0.004 * blurAmount, 0.0);\
	            v_blurTexCoords[ 8] = v_texCoord + vec2( 0.008 * blurAmount, 0.0);\
	            v_blurTexCoords[ 9] = v_texCoord + vec2( 0.012 * blurAmount, 0.0);\
	            v_blurTexCoords[10] = v_texCoord + vec2( 0.016 * blurAmount, 0.0);\
	            v_blurTexCoords[11] = v_texCoord + vec2( 0.020 * blurAmount, 0.0);\
	            v_blurTexCoords[12] = v_texCoord + vec2( 0.024 * blurAmount, 0.0);\
	            v_blurTexCoords[13] = v_texCoord + vec2( 0.028 * blurAmount, 0.0);\
	        }",
	    "fragmentShader": "\
	        precision mediump float;\
	        uniform sampler2D u_image;\
	        varying vec2 v_texCoord;\
	        varying vec2 v_blurTexCoords[14];\
	        void main(){\
	            gl_FragColor = vec4(0.0);\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 0])*0.0044299121055113265;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 1])*0.00895781211794;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 2])*0.0215963866053;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 3])*0.0443683338718;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 4])*0.0776744219933;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 5])*0.115876621105;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 6])*0.147308056121;\
	            gl_FragColor += texture2D(u_image, v_texCoord         )*0.159576912161;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 7])*0.147308056121;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 8])*0.115876621105;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 9])*0.0776744219933;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[10])*0.0443683338718;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[11])*0.0215963866053;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[12])*0.00895781211794;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[13])*0.0044299121055113265;\
	        }",
	    "properties": {
	        "blurAmount": { "type": "uniform", "value": 1.0 }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = horizontal_blur;
	module.exports = exports["default"];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var verticalBlur = {
	    "title": "Vertical Blur",
	    "description": "A vertical blur effect. Adpated from http://xissburg.com/faster-gaussian-blur-in-glsl/",
	    "vertexShader": "\
	        attribute vec2 a_position;\
	        attribute vec2 a_texCoord;\
	        varying vec2 v_texCoord;\
	        uniform float blurAmount;\
	        varying vec2 v_blurTexCoords[14];\
	        void main() {\
	            gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	            v_texCoord = a_texCoord;\
	            v_blurTexCoords[ 0] = v_texCoord + vec2(0.0,-0.028 * blurAmount);\
	            v_blurTexCoords[ 1] = v_texCoord + vec2(0.0,-0.024 * blurAmount);\
	            v_blurTexCoords[ 2] = v_texCoord + vec2(0.0,-0.020 * blurAmount);\
	            v_blurTexCoords[ 3] = v_texCoord + vec2(0.0,-0.016 * blurAmount);\
	            v_blurTexCoords[ 4] = v_texCoord + vec2(0.0,-0.012 * blurAmount);\
	            v_blurTexCoords[ 5] = v_texCoord + vec2(0.0,-0.008 * blurAmount);\
	            v_blurTexCoords[ 6] = v_texCoord + vec2(0.0,-0.004 * blurAmount);\
	            v_blurTexCoords[ 7] = v_texCoord + vec2(0.0, 0.004 * blurAmount);\
	            v_blurTexCoords[ 8] = v_texCoord + vec2(0.0, 0.008 * blurAmount);\
	            v_blurTexCoords[ 9] = v_texCoord + vec2(0.0, 0.012 * blurAmount);\
	            v_blurTexCoords[10] = v_texCoord + vec2(0.0, 0.016 * blurAmount);\
	            v_blurTexCoords[11] = v_texCoord + vec2(0.0, 0.020 * blurAmount);\
	            v_blurTexCoords[12] = v_texCoord + vec2(0.0, 0.024 * blurAmount);\
	            v_blurTexCoords[13] = v_texCoord + vec2(0.0, 0.028 * blurAmount);\
	        }",
	    "fragmentShader": "\
	        precision mediump float;\
	        uniform sampler2D u_image;\
	        varying vec2 v_texCoord;\
	        varying vec2 v_blurTexCoords[14];\
	        void main(){\
	            gl_FragColor = vec4(0.0);\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 0])*0.0044299121055113265;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 1])*0.00895781211794;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 2])*0.0215963866053;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 3])*0.0443683338718;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 4])*0.0776744219933;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 5])*0.115876621105;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 6])*0.147308056121;\
	            gl_FragColor += texture2D(u_image, v_texCoord         )*0.159576912161;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 7])*0.147308056121;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 8])*0.115876621105;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 9])*0.0776744219933;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[10])*0.0443683338718;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[11])*0.0215963866053;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[12])*0.00895781211794;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[13])*0.0044299121055113265;\
	        }",
	    "properties": {
	        "blurAmount": { "type": "uniform", "value": 1.0 }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = verticalBlur;
	module.exports = exports["default"];

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var aaf_video_flop = {
	    "title": "AAF Video Flop Effect",
	    "description": "A flop effect based on the AAF spec. Mirrors the image in the y-axis",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            varying vec2 v_texCoord;\
	            void main(){\
	                vec2 coord = vec2(1.0 - v_texCoord[0] ,v_texCoord[1]);\
	                vec4 color = texture2D(u_image, coord);\
	                gl_FragColor = color;\
	            }",
	    "properties": {},
	    "inputs": ["u_image"]
	};
	
	exports["default"] = aaf_video_flop;
	module.exports = exports["default"];

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var aaf_video_flip = {
	    "title": "AAF Video Scale Effect",
	    "description": "A flip effect based on the AAF spec. Mirrors the image in the x-axis",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            varying vec2 v_texCoord;\
	            void main(){\
	                vec2 coord = vec2(v_texCoord[0] ,1.0 - v_texCoord[1]);\
	                vec4 color = texture2D(u_image, coord);\
	                gl_FragColor = color;\
	            }",
	    "properties": {},
	    "inputs": ["u_image"]
	};
	
	exports["default"] = aaf_video_flip;
	module.exports = exports["default"];

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var aaf_video_position = {
	    "title": "AAF Video Position Effect",
	    "description": "A position effect based on the AAF spec.",
	    "vertexShader": "\
	        attribute vec2 a_position;\
	        attribute vec2 a_texCoord;\
	        varying vec2 v_texCoord;\
	        void main() {\
	            gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	            v_texCoord = a_texCoord;\
	        }",
	    "fragmentShader": "\
	        precision mediump float;\
	        uniform sampler2D u_image;\
	        uniform float positionOffsetX;\
	        uniform float positionOffsetY;\
	        varying vec2 v_texCoord;\
	        varying float v_progress;\
	        void main(){\
	            vec2 pos = vec2(v_texCoord[0] - positionOffsetX/2.0, v_texCoord[1] -  positionOffsetY/2.0);\
	            vec4 color = texture2D(u_image, pos);\
	            if (pos[0] < 0.0 || pos[0] > 1.0 || pos[1] < 0.0 || pos[1] > 1.0){\
	                color = vec4(0.0,0.0,0.0,0.0);\
	            }\
	            gl_FragColor = color;\
	        }",
	    "properties": {
	        "positionOffsetX": { "type": "uniform", "value": 0.0 },
	        "positionOffsetY": { "type": "uniform", "value": 0.0 }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = aaf_video_position;
	module.exports = exports["default"];

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var aaf_video_crop = {
	    "title": "AAF Video Crop Effect",
	    "description": "A crop effect based on the AAF spec.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            uniform float cropLeft;\
	            uniform float cropRight;\
	            uniform float cropTop;\
	            uniform float cropBottom;\
	            varying vec2 v_texCoord;\
	            void main(){\
	                vec4 color = texture2D(u_image, v_texCoord);\
	                if (v_texCoord[0] < (cropLeft+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\
	                if (v_texCoord[0] > (cropRight+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\
	                if (v_texCoord[1] < (-cropBottom+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\
	                if (v_texCoord[1] > (-cropTop+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\
	                gl_FragColor = color;\
	            }",
	    "properties": {
	        "cropLeft": { "type": "uniform", "value": -1.0 },
	        "cropRight": { "type": "uniform", "value": 1.0 },
	        "cropTop": { "type": "uniform", "value": -1.0 },
	        "cropBottom": { "type": "uniform", "value": 1.0 }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = aaf_video_crop;
	module.exports = exports["default"];

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var staticDissolve = {
	    "title": "Static Dissolve",
	    "description": "A static dissolve effect. Typically used as a transistion.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image_a;\
	            uniform sampler2D u_image_b;\
	            uniform float mix;\
	            uniform float currentTime;\
	            varying vec2 v_texCoord;\
	            varying float v_mix;\
	            float rand(vec2 co, float currentTime){\
	               return fract(sin(dot(co.xy,vec2(12.9898,78.233))+currentTime) * 43758.5453);\
	            }\
	            void main(){\
	                vec4 color_a = texture2D(u_image_a, v_texCoord);\
	                vec4 color_b = texture2D(u_image_b, v_texCoord);\
	                if (clamp(rand(v_texCoord, currentTime),  0.01, 1.001) > mix){\
	                    gl_FragColor = color_a;\
	                } else {\
	                    gl_FragColor = color_b;\
	                }\
	            }",
	    "properties": {
	        "mix": { "type": "uniform", "value": 0.0 }
	    },
	    "inputs": ["u_image_a", "u_image_b"]
	};
	
	exports["default"] = staticDissolve;
	module.exports = exports["default"];

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var staticEffect = {
	    "title": "Static",
	    "description": "A static effect to add pseudo random noise to a video",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            uniform float currentTime;\
	            uniform float amount;\
	            varying vec2 v_texCoord;\
	            uniform vec3 weight;\
	            float rand(vec2 co, float currentTime){\
	               return fract(sin(dot(co.xy,vec2(12.9898,78.233))+currentTime) * 43758.5453);\
	            }\
	            void main(){\
	                vec4 color = texture2D(u_image, v_texCoord);\
	                color[0] = color[0] + (2.0*(clamp(rand(v_texCoord, currentTime),  0.01, 1.001)-0.5)) * weight[0] * amount;\
	                color[1] = color[1] + (2.0*(clamp(rand(v_texCoord, currentTime),  0.01, 1.001)-0.5)) * weight[1] * amount;\
	                color[2] = color[2] + (2.0*(clamp(rand(v_texCoord, currentTime),  0.01, 1.001)-0.5)) * weight[2] *amount;\
	                gl_FragColor = color;\
	            }",
	    "properties": {
	        "weight": { "type": "uniform", "value": [1.0, 1.0, 1.0] },
	        "amount": { "type": "uniform", "value": 1.0 }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = staticEffect;
	module.exports = exports["default"];

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var dreamfade = {
	    "title": "Dream-Fade",
	    "description": "A wobbly dream effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D u_image_a;\
	    uniform sampler2D u_image_b;\
	    uniform float mix;\
	    varying vec2 v_texCoord;\
	    varying float v_mix;\
	    void main(){\
	        float wobble = 1.0 - abs((mix*2.0)-1.0);\
	        vec2 pos = vec2(v_texCoord[0] + ((sin(v_texCoord[1]*(10.0*wobble*3.14) + wobble*10.0)/13.0)), v_texCoord[1]);\
	        vec4 color_a = texture2D(u_image_a, pos);\
	        vec4 color_b = texture2D(u_image_b, pos);\
	        color_a[0] *= (1.0 - mix);\
	        color_a[1] *= (1.0 - mix);\
	        color_a[2] *= (1.0 - mix);\
	        color_a[3] *= (1.0 - mix);\
	        color_b[0] *= mix;\
	        color_b[1] *= mix;\
	        color_b[2] *= mix;\
	        color_b[3] *= mix;\
	        gl_FragColor = color_a + color_b;\
	    }",
	    "properties": {
	        "mix": { "type": "uniform", "value": 0.0 }
	    },
	    "inputs": ["u_image_a", "u_image_b"]
	};
	
	exports["default"] = dreamfade;
	module.exports = exports["default"];

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var cube = {
	  "title": "Cube",
	  "description": "A cross-fade effect. Typically used as a transistion.",
	  "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	  "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	uniform float persp;\
	uniform float unzoom;\
	uniform float reflection;\
	uniform float floating;\
	\
	vec2 project (vec2 p) {\
	  return p * vec2(1.0, -1.2) + vec2(0.0, -floating/100.);\
	}\
	\
	bool inBounds (vec2 p) {\
	  return all(lessThan(vec2(0.0), p)) && all(lessThan(p, vec2(1.0)));\
	}\
	\
	vec4 bgColor (vec2 p, vec2 pfr, vec2 pto) {\
	  vec4 c = vec4(0.0, 0.0, 0.0, 1.0);\
	  pfr = project(pfr);\
	  if (inBounds(pfr)) {\
	    c += mix(vec4(0.0), texture2D(from, pfr), reflection * mix(1.0, 0.0, pfr.y));\
	  }\
	  pto = project(pto);\
	  if (inBounds(pto)) {\
	    c += mix(vec4(0.0), texture2D(to, pto), reflection * mix(1.0, 0.0, pto.y));\
	  }\
	  return c;\
	}\
	\
	vec2 xskew (vec2 p, float persp, float center) {\
	  float x = mix(p.x, 1.0-p.x, center);\
	  return (\
	    (\
	      vec2( x, (p.y - 0.5*(1.0-persp) * x) / (1.0+(persp-1.0)*x) )\
	      - vec2(0.5-distance(center, 0.5), 0.0)\
	    )\
	    * vec2(0.5 / distance(center, 0.5) * (center<0.5 ? 1.0 : -1.0), 1.0)\
	    + vec2(center<0.5 ? 0.0 : 1.0, 0.0)\
	  );\
	}\
	\
	void main() {\
	  vec2 op = gl_FragCoord.xy / resolution.xy;\
	  float uz = unzoom * 2.0*(0.5-distance(0.5, progress));\
	  vec2 p = -uz*0.5+(1.0+uz) * op;\
	  vec2 fromP = xskew(\
	    (p - vec2(progress, 0.0)) / vec2(1.0-progress, 1.0),\
	    1.0-mix(progress, 0.0, persp),\
	    0.0\
	  );\
	  vec2 toP = xskew(\
	    p / vec2(progress, 1.0),\
	    mix(pow(progress, 2.0), 1.0, persp),\
	    1.0\
	  );\
	  float fromAlpha = 1.0;\
	  float toAlpha = 1.0;\
	  const float radius = 6.0;\
	  vec2 step = vec2(1.0)/resolution.xy;\
	  if (progress < 1.0 && progress > 0.0) {\
	    if (fromP.y < step.y*radius && fromP.y > 0.0) {\
	      fromAlpha = fromP.y/(step.y*radius);\
	    }\
	    else if (fromP.y < 1.0 && fromP.y > 1.0-step.y*radius) {\
	      fromAlpha = (1.0-fromP.y)/(step.y*radius);\
	    }\
	\
	    if (toP.y < step.y*radius && toP.y > 0.0) {\
	      toAlpha = toP.y/(step.y*radius);\
	    }\
	    else if (toP.y < 1.0 && toP.y > 1.0-step.y*radius) {\
	      toAlpha = (1.0-toP.y)/(step.y*radius);\
	    }\
	  }\
	  if (inBounds(fromP)) {\
	    gl_FragColor = texture2D(from, fromP)*fromAlpha;\
	  }\
	  else if (inBounds(toP)) {\
	    gl_FragColor = texture2D(to, toP)*toAlpha;\
	  }\
	  else {\
	    gl_FragColor = bgColor(op, fromP, toP);\
	  }\
	}",
	  "properties": {
	    "progress": { "type": "uniform", "value": 0.0 },
	    "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	    "persp": { "type": "uniform", "value": 0.7 },
	    "unzoom": { "type": "uniform", "value": 0.3 },
	    "reflection": { "type": "uniform", "value": 0.4 },
	    "floating": { "type": "uniform", "value": 3.0 }
	  },
	  "inputs": ["from", "to"]
	};
	
	exports["default"] = cube;
	module.exports = exports["default"];

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var morph = {
	    "title": "Morph",
	    "description": "A morph effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	const float strength=0.1;\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  vec4 ca = texture2D(from, p);\
	  vec4 cb = texture2D(to, p);\
	  \
	  vec2 oa = (((ca.rg+ca.b)*0.5)*2.0-1.0);\
	  vec2 ob = (((cb.rg+cb.b)*0.5)*2.0-1.0);\
	  vec2 oc = mix(oa,ob,0.5)*strength;\
	  \
	  float w0 = progress;\
	  float w1 = 1.0-w0;\
	  gl_FragColor = mix(texture2D(from, p+oc*w0), texture2D(to, p-oc*w1), progress);\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = morph;
	module.exports = exports["default"];

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var crosszoom = {
	    "title": "CrossZoom",
	    "description": "A crosszoom effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	uniform float strength;\
	\
	const float PI = 3.141592653589793;\
	\
	float Linear_ease(in float begin, in float change, in float duration, in float time) {\
	    return change * time / duration + begin;\
	}\
	\
	float Exponential_easeInOut(in float begin, in float change, in float duration, in float time) {\
	    if (time == 0.0)\
	        return begin;\
	    else if (time == duration)\
	        return begin + change;\
	    time = time / (duration / 2.0);\
	    if (time < 1.0)\
	        return change / 2.0 * pow(2.0, 10.0 * (time - 1.0)) + begin;\
	    return change / 2.0 * (-pow(2.0, -10.0 * (time - 1.0)) + 2.0) + begin;\
	}\
	\
	float Sinusoidal_easeInOut(in float begin, in float change, in float duration, in float time) {\
	    return -change / 2.0 * (cos(PI * time / duration) - 1.0) + begin;\
	}\
	\
	float random(in vec3 scale, in float seed) {\
	    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\
	}\
	\
	vec3 crossFade(in vec2 uv, in float dissolve) {\
	    return mix(texture2D(from, uv).rgb, texture2D(to, uv).rgb, dissolve);\
	}\
	\
	void main() {\
	    vec2 texCoord = gl_FragCoord.xy / resolution.xy;\
	\
	    vec2 center = vec2(Linear_ease(0.25, 0.5, 1.0, progress), 0.5);\
	    float dissolve = Exponential_easeInOut(0.0, 1.0, 1.0, progress);\
	\
	    float strength = Sinusoidal_easeInOut(0.0, strength, 0.5, progress);\
	\
	    vec3 color = vec3(0.0);\
	    float total = 0.0;\
	    vec2 toCenter = center - texCoord;\
	\
	    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\
	\
	    for (float t = 0.0; t <= 40.0; t++) {\
	        float percent = (t + offset) / 40.0;\
	        float weight = 4.0 * (percent - percent * percent);\
	        color += crossFade(texCoord + toCenter * percent * strength, dissolve) * weight;\
	        total += weight;\
	    }\
	    gl_FragColor = vec4(color / total, 1.0);\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	        "strength": { "type": "uniform", "value": 0.4 }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = crosszoom;
	module.exports = exports["default"];

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var swap = {
	  "title": "Swap",
	  "description": "A swap effect. Typically used as a transistion.",
	  "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	  "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from;\
	uniform sampler2D to;\
	uniform float progress;\
	uniform vec2 resolution;\
	 \
	uniform float reflection;\
	uniform float perspective;\
	uniform float depth;\
	 \
	const vec4 black = vec4(0.0, 0.0, 0.0, 1.0);\
	const vec2 boundMin = vec2(0.0, 0.0);\
	const vec2 boundMax = vec2(1.0, 1.0);\
	 \
	bool inBounds (vec2 p) {\
	  return all(lessThan(boundMin, p)) && all(lessThan(p, boundMax));\
	}\
	 \
	vec2 project (vec2 p) {\
	  return p * vec2(1.0, -1.2) + vec2(0.0, -0.02);\
	}\
	 \
	vec4 bgColor (vec2 p, vec2 pfr, vec2 pto) {\
	  const float radius = 3.0;\
	  vec2 step = vec2(1.0)/resolution.xy;\
	  \
	  vec4 c = black;\
	  pfr = project(pfr);\
	  if (inBounds(pfr)) {\
	    float fromAlpha = 1.0;\
	    if (progress < 1.0 && progress > 0.0) {\
	      if (pfr.y < step.y*radius && pfr.y > 0.0) {\
	        fromAlpha = pfr.y/(step.y*radius);\
	      }\
	      else if (pfr.y < 1.0 && pfr.y > 1.0-step.y*radius) {\
	        fromAlpha = (1.0-pfr.y)/(step.y*radius);\
	      }\
	    }\
	    c += mix(black, texture2D(from, pfr)*fromAlpha, reflection * mix(1.0, 0.0, pfr.y));\
	  }\
	  pto = project(pto);\
	  if (inBounds(pto)) {\
	    float toAlpha = 1.0;\
	    if (progress < 1.0 && progress > 0.0) {\
	      if (pto.y < step.y*radius && pto.y > 0.0) {\
	        toAlpha = pto.y/(step.y*radius);\
	      }\
	      else if (pto.y < 1.0 && pto.y > 1.0-step.y*radius) {\
	        toAlpha = (1.0-pto.y)/(step.y*radius);\
	      }\
	    }\
	    c += mix(black, texture2D(to, pto)*toAlpha, reflection * mix(1.0, 0.0, pto.y));\
	  }\
	  return c;\
	}\
	 \
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	 \
	  vec2 pfr, pto = vec2(-1.);\
	 \
	  float size = mix(1.0, depth, progress);\
	  float persp = perspective * progress;\
	  pfr = (p + vec2(-0.0, -0.5)) * vec2(size/(1.0-perspective*progress), size/(1.0-size*persp*p.x)) + vec2(0.0, 0.5);\
	 \
	  size = mix(1.0, depth, 1.-progress);\
	  persp = perspective * (1.-progress);\
	  pto = (p + vec2(-1.0, -0.5)) * vec2(size/(1.0-perspective*(1.0-progress)), size/(1.0-size*persp*(0.5-p.x))) + vec2(1.0, 0.5);\
	 \
	  bool fromOver = progress < 0.5;\
	  \
	  float fromAlpha = 1.0;\
	  float toAlpha = 1.0;\
	  const float radius = 6.0;\
	  vec2 step = vec2(1.0)/resolution.xy;\
	  if (progress < 1.0 && progress > 0.0) {\
	    if (pfr.y < step.y*radius && pfr.y > 0.0) {\
	      fromAlpha = pfr.y/(step.y*radius);\
	    }\
	    else if (pfr.y < 1.0 && pfr.y > 1.0-step.y*radius) {\
	      fromAlpha = (1.0-pfr.y)/(step.y*radius);\
	    }\
	\
	    if (pto.y < step.y*radius && pto.y > 0.0) {\
	      toAlpha = pto.y/(step.y*radius);\
	    }\
	    else if (pto.y < 1.0 && pto.y > 1.0-step.y*radius) {\
	      toAlpha = (1.0-pto.y)/(step.y*radius);\
	    }\
	  }\
	 \
	  if (fromOver) {\
	    if (inBounds(pfr)) {\
	      gl_FragColor = texture2D(from, pfr)*fromAlpha;\
	    }\
	    else if (inBounds(pto)) {\
	      gl_FragColor = texture2D(to, pto)*toAlpha;\
	    }\
	    else {\
	      gl_FragColor = bgColor(p, pfr, pto);\
	    }\
	  }\
	  else {\
	    if (inBounds(pto)) {\
	      gl_FragColor = texture2D(to, pto)*toAlpha;\
	    }\
	    else if (inBounds(pfr)) {\
	      gl_FragColor = texture2D(from, pfr)*fromAlpha;\
	    }\
	    else {\
	      gl_FragColor = bgColor(p, pfr, pto);\
	    }\
	  }\
	}",
	  "properties": {
	    "progress": { "type": "uniform", "value": 0.0 },
	    "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	    "reflection": { "type": "uniform", "value": 0.4 },
	    "perspective": { "type": "uniform", "value": 0.2 },
	    "depth": { "type": "uniform", "value": 3.0 }
	  },
	  "inputs": ["from", "to"]
	};
	
	exports["default"] = swap;
	module.exports = exports["default"];

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var squareswipe = {
	  "title": "SquareSwipe",
	  "description": "A squareswipe effect. Typically used as a transistion.",
	  "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	  "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	uniform vec2 squares;\
	uniform vec2 direction;\
	uniform float smoothness;\
	\
	const vec2 center = vec2(0.5, 0.5);\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  vec2 v = normalize(direction);\
	  if (v != vec2(0.0))\
	    v /= abs(v.x)+abs(v.y);\
	  float d = v.x * center.x + v.y * center.y;\
	  float offset = smoothness;\
	  float pr = smoothstep(-offset, 0.0, v.x * p.x + v.y * p.y - (d-0.5+progress*(1.+offset)));\
	  vec2 squarep = fract(p*squares);\
	  vec2 squaremin = vec2(pr/2.0);\
	  vec2 squaremax = vec2(1.0 - pr/2.0);\
	  float a = all(lessThan(squaremin, squarep)) && all(lessThan(squarep, squaremax)) ? 1.0 : 0.0;\
	  \
	  const float radius = 3.0;\
	  vec2 step = vec2(1.0)/resolution.xy;\
	  float alpha = 1.0;\
	  if (progress > 0.0 && progress < 1.0) {\
	    float max_pr = smoothstep(-offset, 0.0, v.x * p.x + v.y * p.y - (d-0.5+1.0*(1.+offset)));\
	    vec2 max_squaremin = vec2(max_pr/2.0);\
	    vec2 max_squaremax = vec2(1.0 - max_pr/2.0);\
	\
	    if ( squaremax.x < max_squaremax.x ) {\
	      if (squarep.x > squaremin.x && squarep.x < squaremin.x+step.x*radius) {\
	        alpha = 1.0-(squaremin.x+step.x*radius - squarep.x)/(step.x*radius);\
	      }\
	      else if (squarep.x > (squaremax.x-step.x*radius) && squarep.x < squaremax.x) {\
	        alpha = (squaremax.x - squarep.x)/(step.x*radius);\
	      }\
	    }\
	    \
	    if ( squaremax.y < max_squaremax.y ) {\
	      if (squarep.y > squaremin.y && squarep.y < squaremin.y+step.y*radius) {\
	        alpha = 1.0-(squaremin.y+step.y*radius - squarep.y)/(step.y*radius);\
	      }\
	      else if (squarep.y > (squaremax.y-step.y*radius) && squarep.y < squaremax.y) {\
	        alpha = (squaremax.y - squarep.y)/(step.y*radius);\
	      }\
	    }\
	  }\
	  gl_FragColor = mix(texture2D(from, p), texture2D(to, p), a*alpha);\
	}",
	  "properties": {
	    "progress": { "type": "uniform", "value": 0.0 },
	    "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	    "squares": { "type": "uniform", "value": [10.0, 10.0] },
	    "direction": { "type": "uniform", "value": [1.0, -0.4] },
	    "smoothness": { "type": "uniform", "value": 1.6 }
	  },
	  "inputs": ["from", "to"]
	};
	
	exports["default"] = squareswipe;
	module.exports = exports["default"];

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var slide = {
	    "title": "Slide",
	    "description": "A slide effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform float translateX;\
	uniform float translateY;\
	\
	void main() {\
	    vec2 texCoord = gl_FragCoord.xy / resolution.xy;\
	    float x = progress * translateX;\
	    float y = progress * translateY;\
	\
	    if (x >= 0.0 && y >= 0.0) {\
	        if (texCoord.x >= x && texCoord.y >= y) {\
	            gl_FragColor = texture2D(from, texCoord - vec2(x, y));\
	        }\
	        else {\
	            vec2 uv;\
	            if (x > 0.0)\
	                uv = vec2(x - 1.0, y);\
	            else if (y > 0.0)\
	                uv = vec2(x, y - 1.0);\
	            gl_FragColor = texture2D(to, texCoord - uv);\
	        }\
	    }\
	    else if (x <= 0.0 && y <= 0.0) {\
	        if (texCoord.x <= (1.0 + x) && texCoord.y <= (1.0 + y))\
	            gl_FragColor = texture2D(from, texCoord - vec2(x, y));\
	        else {\
	            vec2 uv;\
	            if (x < 0.0)\
	                uv = vec2(x + 1.0, y);\
	            else if (y < 0.0)\
	                uv = vec2(x, y + 1.0);\
	            gl_FragColor = texture2D(to, texCoord - uv);\
	        }\
	    }\
	    else\
	        gl_FragColor = vec4(0.0);\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	        "translateX": { "type": "uniform", "value": 1.0 },
	        "translateY": { "type": "uniform", "value": 0.0 }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = slide;
	module.exports = exports["default"];

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var simpleflip = {
	    "title": "SimpleFlip",
	    "description": "A simpleflip effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  vec2 q = p;\
	  p.x = (p.x - 0.5)/abs(progress - 0.5)*0.5 + 0.5;\
	  vec4 a = texture2D(from, p);\
	  vec4 b = texture2D(to, p);\
	  gl_FragColor = vec4(mix(a, b, step(0.5, progress)).rgb * step(abs(q.x - 0.5), abs(progress - 0.5)), 1.0);\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = simpleflip;
	module.exports = exports["default"];

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var pinwheel = {
	    "title": "Pinwheel",
	    "description": "A pinwheel effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	const float PI = 3.14159265358979323846;\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  \
	  float angle = atan(p.y - 0.5, p.x - 0.5);\
	  if (angle < 0.0) {\
	    angle = PI*2.0 + angle;\
	  }\
	  \
	  float circPos = angle + progress;\
	  float modPos = mod(circPos, PI / 4.);\
	  float signed = sign(progress - modPos);\
	  float smoothed = smoothstep(0., 1., signed);\
	  \
	  float alpha = 1.0;\
	  if (progress > 0.0 && progress < PI/4.) {\
	    const float radius = 2.0;\
	    vec2 step = vec2(1.0)/resolution.xy;\
	\
	    float dis = sqrt(pow(p.x-0.5,2.0)+pow(p.y-0.5,2.0));\
	    float r = sin(modPos)*dis;\
	    float sradius = radius*min(step.x,step.y);\
	    if (r < sradius) {\
	        alpha = r/sradius;\
	    }\
	\
	    float kmodPos = PI / 4. - mod(angle, PI / 4.);\
	    r = sin(kmodPos)*dis;\
	    if (r < sradius) {\
	        alpha = r/sradius;\
	    }\
	  }\
	  gl_FragColor = mix(texture2D(from, p), texture2D(to, p), smoothed*alpha);\
	  \
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = pinwheel;
	module.exports = exports["default"];

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var powerdisformation = {
	    "title": "PowerDisformation",
	    "description": "A powerdisformation effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	uniform float power;\
	const bool powerDest = true;\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  \
	  vec2 p2 = mix(\
	    p, \
	    vec2(pow(p.x, power), pow(p.y, power)), \
	    (powerDest ? 0.5 : 1.0)-distance(progress, powerDest ? 0.5 : 1.0));\
	  \
	  gl_FragColor = mix(\
	    texture2D(from, p2), \
	    texture2D(to, powerDest ? p2: p), \
	    progress);\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	        "power": { "type": "uniform", "value": 3.0 }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = powerdisformation;
	module.exports = exports["default"];

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var polkaDotsCurtain = {
	    "title": "PolkaDotsCurtain",
	    "description": "A polkaDotsCurtain effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	const float SQRT_2 = 1.414213562373;\
	uniform float dots;\
	uniform vec2 center;\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  float x = progress /2.0;\
	  \
	  const float radius = 2.0;\
	 vec2 step = vec2(1.0)/resolution.xy;\
	 float c = distance(fract(p * dots), vec2(0.5, 0.5));\
	  float r1 = (2.0 * x / distance(p, center));\
	  float r2 = r1 + sqrt(min(step.x,step.y))*radius;\
	  \
	  bool nextImage = c < r1; \
	  \
	  float a = nextImage?0.0:1.0;\
	  float alpha = 1.0;\
	  if (progress > 0.0 && progress < 1.0) {\
	    if (r1 < c && c < r2) {\
	      alpha = (c-r1)/(r2-r1);\
	    }\
	  }\
	  gl_FragColor = mix(texture2D(to, p), texture2D(from, p), a*alpha);\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	        "dots": { "type": "uniform", "value": 20.0 },
	        "center": { "type": "uniform", "value": [1.0, 1.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = polkaDotsCurtain;
	module.exports = exports["default"];

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var kalerdoscope = {
	    "title": "Kalerdoscope",
	    "description": "A kalerdoscope effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	uniform float speed;\
	uniform float angle;\
	uniform float power;\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  vec2 q = p;\
	  float t = pow(progress, power)*speed;\
	  p = p -0.5;\
	  for (int i = 0; i < 7; i++) {\
	    p = vec2(sin(t)*p.x + cos(t)*p.y, sin(t)*p.y - cos(t)*p.x);\
	    t += angle;\
	    p = abs(mod(p, 2.0) - 1.0);\
	  }\
	  abs(mod(p, 1.0));\
	  gl_FragColor = mix(\
	    mix(texture2D(from, q), texture2D(to, q), progress),\
	    mix(texture2D(from, p), texture2D(to, p), progress), 1.0 - 2.0*abs(progress - 0.5));\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	        "speed": { "type": "uniform", "value": 1.0 },
	        "angle": { "type": "uniform", "value": 2.0 },
	        "power": { "type": "uniform", "value": 2.0 }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = kalerdoscope;
	module.exports = exports["default"];

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var doomscreen = {
	  "title": "DoomScreen",
	  "description": "A doomscreen effect. Typically used as a transistion.",
	  "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	  "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform float barWidth;\
	uniform float amplitude;\
	uniform float noise;\
	uniform float frequency;\
	\
	float rand(int num) {\
	  return fract(mod(float(num) * 67123.313, 12.0) * sin(float(num) * 10.3) * cos(float(num)));\
	}\
	\
	float wave(int num) {\
	  float fn = float(num) * frequency * 0.1  * float(barWidth);\
	  return cos(fn * 0.5) * cos(fn * 0.13) * sin((fn+10.0) * 0.3) / 2.0 + 0.5;\
	}\
	\
	float pos(int num) {\
	  return noise == 0.0 ? wave(num) : mix(wave(num), rand(num), noise);\
	}\
	\
	\
	void main() {\
	  int barw = int(barWidth);\
	  int bar = int(gl_FragCoord.x)/barw;\
	  float scale = 1.0 + pos(bar) * amplitude;\
	  float phase = progress * scale;\
	  float posY = gl_FragCoord.y / resolution.y;\
	  vec2 p;\
	  vec4 c;\
	  if (phase + posY < 1.0) {\
	    p = vec2(gl_FragCoord.x, gl_FragCoord.y - mix(0.0, resolution.y, phase)) / resolution;\
	    c = texture2D(from, p);\
	  } else {\
	    p = gl_FragCoord.xy / resolution.xy;\
	    c = texture2D(to, p);\
	  }\
	\
	  gl_FragColor = c;\
	}",
	  "properties": {
	    "progress": { "type": "uniform", "value": 0.0 },
	    "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	    "barWidth": { "type": "uniform", "value": 10.0 },
	    "amplitude": { "type": "uniform", "value": 2.0 },
	    "noise": { "type": "uniform", "value": 0.2 },
	    "frequency": { "type": "uniform", "value": 1.0 }
	  },
	  "inputs": ["from", "to"]
	};
	
	exports["default"] = doomscreen;
	module.exports = exports["default"];

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var starwipe = {
	  "title": "Starwipe",
	  "description": "A starwipe effect. Typically used as a transistion.",
	  "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	  "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	vec2 circlePoint( float ang )\
	{\
	  ang += 6.28318 * 0.15;\
	  return vec2( cos(ang), sin(ang) );  \
	}\
	\
	float cross2d( vec2 a, vec2 b )\
	{\
	  return ( a.x * b.y - a.y * b.x );\
	}\
	\
	float star( vec2 p, float size )\
	{\
	  if( size <= 0.0 )\
	  {\
	    return 0.0;\
	  }\
	  p /= size;\
	  \
	  vec2 p0 = circlePoint( 0.0 );\
	  vec2 p1 = circlePoint( 6.28318 * 1.0 / 5.0 );\
	  vec2 p2 = circlePoint( 6.28318 * 2.0 / 5.0 );\
	  vec2 p3 = circlePoint( 6.28318 * 3.0 / 5.0 );\
	  vec2 p4 = circlePoint( 6.28318 * 4.0 / 5.0 );\
	  \
	  float s0 = ( cross2d( p1 - p0, p - p0 ) );\
	  float s1 = ( cross2d( p2 - p1, p - p1 ) );\
	  float s2 = ( cross2d( p3 - p2, p - p2 ) );\
	  float s3 = ( cross2d( p4 - p3, p - p3 ) );\
	  float s4 = ( cross2d( p0 - p4, p - p4 ) );\
	  \
	  float s5 = min( min( min( s0, s1 ), min( s2, s3 ) ), s4 );\
	  float s = max( 1.0 - sign( s0 * s1 * s2 * s3 * s4 ) + sign(s5), 0.0 );\
	  s = sign( 2.6 - length(p) ) * s;\
	  \
	  return max( s, 0.0 );\
	}\
	\
	float smoothAliase(vec2 p, float t)\
	{\
	const float radius = 4.0;\
	  vec2 step = vec2(1.0)/resolution.xy;\
	  float alpha = 1.0;\
	 \
	    if (t > 0.0) {\
	      vec2 v = p/t;\
	  \
	      vec2 pt[5];\
	      pt[0] = circlePoint( 0.0 );\
	      pt[1] = circlePoint( 6.28318 * 1.0 / 5.0 );\
	      pt[2] = circlePoint( 6.28318 * 2.0 / 5.0 );\
	      pt[3] = circlePoint( 6.28318 * 3.0 / 5.0 );\
	      pt[4] = circlePoint( 6.28318 * 4.0 / 5.0 );\
	      float sm = 0.0;\
	      float sn = 0.0;\
	      vec2 vm;\
	      vec2 vn;\
	      float st[5];\
	      for (int i = 0; i < 5; i++) {\
	        st[i] = dot( pt[i], v);\
	        if (sm < st[i]) {\
	          sm = st[i];\
	          vm = pt[i];\
	        }\
	      }\
	\
	      for (int i = 0; i < 5; i++) {\
	        if (sn < st[i] && sm != st[i]) {\
	          sn = st[i];\
	          vn = pt[i];\
	        }\
	      }\
	\
	      vec2 vt = vm+vn;\
	      vt *= 2.6/length(vt);\
	      vt = vt - vm;\
	      \
	      float BR = min(step.x, step.y)*radius;\
	        vec2 pVt = vt+vm;\
	        float a = -vt.y/vt.x;\
	        float b = -(pVt.y + a*pVt.x);\
	        float angle = atan(1.0, abs(a));\
	        if (b < 0.0) {\
	          b -= (BR/2.0)/sin(angle);\
	        }\
	        else {\
	          b += (BR/2.0)/sin(angle);\
	        }\
	        \
	        \
	        float dis = abs(v.y + a*v.x + b)/sqrt(1.0+a*a) * t;\
	       \
	        if (dis < BR) {\
	          alpha = dis/BR;\
	        }\
	    }\
	\
	    return alpha;\
	}\
	\
	void main() \
	{\
	  vec2 p = ( gl_FragCoord.xy / resolution.xy );\
	  vec2 o = p * 2.0 - 1.0;\
	  \
	  float t = progress * 1.4;\
	  \
	  float c1 = star( o, t );\
	  float c2 = star( o, t - 0.1 );\
	  \
	  float border = max( c1 - c2, 0.0 );\
	  \
	  float alpha1 = 1.0;\
	  float alpha2 = 1.0;\
	  \
	  if (border > 0.0) {\
	    alpha1 = smoothAliase(o, t);\
	  }\
	\
	  if (border == 0.0) {\
	  alpha2 = smoothAliase(o, t-0.1);\
	}\
	\
	  if (alpha1 < 1.0) {\
	    vec4 color = mix( texture2D(to, p), texture2D(from, p),  c1);\
	    vec4 bcolor = mix(texture2D(from, p), texture2D(to, p), c1) + vec4( border, border, border, 0.0 );\
	    gl_FragColor = mix(color, bcolor, alpha1);\
	  }\
	  else {\
	    vec4 color = mix( texture2D(from, p), texture2D(to, p), c1);\
	    vec4 bcolor = mix(texture2D(from, p), texture2D(to, p), c1) + vec4( border, border, border, 0.0 );\
	    if (alpha2 < 1.0) {\
	      gl_FragColor = mix(color, vec4(1.0), 1.0-alpha2);\
	    }\
	    else {\
	      gl_FragColor = mix(color, bcolor, alpha2);\
	    }\
	    \
	  }\
	}",
	  "properties": {
	    "progress": { "type": "uniform", "value": 0.0 },
	    "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	  },
	  "inputs": ["from", "to"]
	};
	
	exports["default"] = starwipe;
	module.exports = exports["default"];

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var potleaf = {
	    "title": "Potleaf",
	    "description": "A potleaf effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	 \
	void main() {\
	  vec2 uv = gl_FragCoord.xy / resolution.xy;\
	  vec2 leaf_uv = (uv - vec2(0.5))/10./pow(progress,3.5);\
		leaf_uv.y += 0.35;\
		float r = 0.18;\
		float o = atan(leaf_uv.y, leaf_uv.x);\
	  gl_FragColor = mix(texture2D(from, uv), texture2D(to, uv), 1.-step(1. - length(leaf_uv)+r*(1.+sin(o))*(1.+0.9 * cos(8.*o))*(1.+0.1*cos(24.*o))*(0.9+0.05*cos(200.*o)), 1.));\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = potleaf;
	module.exports = exports["default"];

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var glitch = {
	    "title": "Glitch",
	    "description": "A glitch effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	void glitch_memories(sampler2D pic) {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  vec2 block = floor(gl_FragCoord.xy / vec2(16));\
	  vec2 uv_noise = block / vec2(64);\
	  uv_noise += floor(vec2(progress) * vec2(1200.0, 3500.0)) / vec2(64);\
	  \
	  float block_thresh = pow(fract(progress * 1200.0), 2.0) * 0.2;\
	  float line_thresh = pow(fract(progress * 2200.0), 3.0) * 0.7;\
	  vec2 red = p, green = p, blue = p, o = p;\
	  vec2 dist = (fract(uv_noise) - 0.5) * 0.3;\
	  red += dist * 0.1;\
	  green += dist * 0.2;\
	  blue += dist * 0.125;\
	  \
	  gl_FragColor.r = texture2D(pic, red).r;\
	  gl_FragColor.g = texture2D(pic, green).g;\
	  gl_FragColor.b = texture2D(pic, blue).b;\
	  gl_FragColor.a = 1.0;\
	\
	}\
	\
	void main(void)\
	{\
	  float smoothed = smoothstep(0., 1., progress);\
	  if( ( smoothed < 0.4 && smoothed > 0.1) ) {\
	      glitch_memories(from);\
	  } else if ((smoothed > 0.6 && smoothed < 0.9) ) {\
	      glitch_memories(to);\
	  } else {\
	    vec2 p = gl_FragCoord.xy / resolution.xy;\
	    gl_FragColor = mix(texture2D(from, p), texture2D(to, p), progress);\
	  }\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = glitch;
	module.exports = exports["default"];

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var dreamyzoom = {
	    "title": "DreamyZoom",
	    "description": "A dreamyzoom effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    const float DEG2RAD = 0.03926990816987241548078304229099;\
	\
	uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform float rotation;\
	uniform float scale;\
	\
	void main() {\
	  float phase = progress < 0.5 ? progress * 2.0 : (progress - 0.5) * 2.0;\
	  float angleOffset = progress < 0.5 ? mix(0.0, rotation * DEG2RAD, phase) : mix(-rotation * DEG2RAD, 0.0, phase);\
	  float newScale = progress < 0.5 ? mix(1.0, scale, phase) : mix(scale, 1.0, phase);\
	  \
	  vec2 center = vec2(0, 0);\
	  vec2 maxRes = resolution;\
	  float resX = 0.5;\
	  float resY = 0.5;\
	  vec2 p = (gl_FragCoord.xy / maxRes - vec2(resX, resY)) / newScale;\
	\
	  float angle = atan(p.y, p.x) + angleOffset;\
	  float dist = distance(center, p);\
	  p.x = cos(angle) * dist + resX;\
	  p.y = sin(angle) * dist + resY;\
	  vec4 c = progress < 0.5 ? texture2D(from, p) : texture2D(to, p);\
	\
	  gl_FragColor = c + (progress < 0.5 ? mix(0.0, 1.0, phase) : mix(1.0, 0.0, phase));\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	        "rotation": { "type": "uniform", "value": 6.0 },
	        "scale": { "type": "uniform", "value": 1.2 }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = dreamyzoom;
	module.exports = exports["default"];

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var tilewaveBottomToTop = {
	    "title": "TileWaveBottomToTop",
	    "description": "A tilewaveBottomToTop effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform vec2 tileSize;\
	uniform float checkerDistance;\
	\
	const bool flipX = false;\
	const bool flipY = false;\
	const bool preTileSingleColor = false;\
	const bool postTileSingleColor = false;\
	\
	vec2 tile2Global(vec2 tex, vec2 tileNum, bool tileSingleColor) {\
	    vec2 perTile = tileSize / resolution.xy;\
	    return tileNum * perTile + (tileSingleColor ? vec2(0) : tex*perTile);\
	}\
	\
	void main(void)\
	{\
		vec2 uv = gl_FragCoord.xy / resolution.xy;\
	    vec4 fragColor = vec4(1, 1, 0, 1);\
	\
	    vec2 posInTile = mod(vec2(gl_FragCoord), tileSize);\
	    vec2 tileNum = floor(vec2(gl_FragCoord)/ tileSize);\
	    int num = int(tileNum.x);\
	    vec2 totalTiles = ceil(resolution.xy / tileSize);\
	    float countTiles = totalTiles.x * totalTiles.y;\
	     \
		vec2 perTile = ceil(tileSize / resolution.xy);\
		float offset = 0.0;\
		offset = (tileNum.y + tileNum.x * perTile.y) / (sqrt(countTiles) * 2.0);\
	\
	    float timeOffset = (progress - offset) * countTiles;\
	    timeOffset = clamp(timeOffset, 0.0, 0.5);\
	    \
	    float sinTime = 1.0 - abs(cos(fract(timeOffset) * 3.1415926));\
	    \
	    fragColor.rg = uv;\
	    fragColor.b = sinTime;\
	    \
	    vec2 texC = posInTile / tileSize;\
	    \
	    if (sinTime <= 0.5){\
	    \
	\
	        if (flipX) {\
	            if ((texC.x < sinTime) || (texC.x > 1.0 - sinTime)){\
	                discard;\
	            }\
	            if (texC.x < 0.5) {\
	                texC.x = (texC.x - sinTime) * 0.5 / (0.5 - sinTime);\
	            } else {\
	                texC.x = (texC.x - 0.5) * 0.5 / (0.5 - sinTime) + 0.5;\
	            }\
	        }\
	\
	        if (flipY) {\
	            if ((texC.y < sinTime) || (texC.y > 1.0 - sinTime)){\
	                discard;\
	            }\
	            if (texC.y < 0.5) {\
	                texC.y = (texC.y - sinTime) * 0.5 / (0.5 - sinTime);\
	            } else {\
	                texC.y = (texC.y - 0.5) * 0.5 / (0.5 - sinTime) + 0.5;\
	            }\
	        }\
	\
	        fragColor = texture2D(from, tile2Global(texC, tileNum, preTileSingleColor));\
	\
	    } else {\
	        if (flipX) {\
	            if ((texC.x > sinTime) || (texC.x < 1.0 - sinTime)){\
	                discard;\
	            }\
	            if (texC.x < 0.5) {\
	                texC.x = (texC.x - sinTime) * 0.5 / (0.5 - sinTime);\
	            } else {\
	                texC.x = (texC.x - 0.5) * 0.5 / (0.5 - sinTime) + 0.5;\
	            }\
	            texC.x = 1.0 - texC.x;\
	        }\
	\
	        if (flipY) {\
	            if ((texC.y > sinTime) || (texC.y < 1.0 - sinTime)){\
	                discard;\
	            }\
	            if (texC.y < 0.5) {\
	                texC.y = (texC.y - sinTime) * 0.5 / (0.5 - sinTime);\
	            } else {\
	                texC.y = (texC.y - 0.5) * 0.5 / (0.5 - sinTime) + 0.5;\
	            }\
	            texC.y = 1.0 - texC.y;\
	        }\
	\
	        fragColor.rgb = texture2D(to, tile2Global(texC, tileNum, postTileSingleColor)).rgb;\
	\
	    }\
	    gl_FragColor = fragColor;\
	  \
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	        "tileSize": { "type": "uniform", "value": [64.0, 64.0] },
	        "checkerDistance": { "type": "uniform", "value": 0.0 }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = tilewaveBottomToTop;
	module.exports = exports["default"];

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var tilescanline = {
	    "title": "TileScanline",
	    "description": "A tilescanline effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	const vec2 tileSize = vec2(32, 32);\
	const float checkerDistance = 0.015;\
	const bool flipX = true;\
	const bool flipY = false;\
	const bool preTileSingleColor = false; \
	const bool postTileSingleColor = false; \
	\
	vec2 tile2Global(vec2 tex, vec2 tileNum, bool tileSingleColor) {\
	    vec2 perTile = tileSize / resolution.xy;\
	    return tileNum * perTile + (tileSingleColor ? vec2(0) : tex*perTile);\
	}\
	\
	void main(void)\
	{\
		vec2 uv = gl_FragCoord.xy / resolution.xy;\
	\
	    vec4 fragColor = vec4(1, 1, 0, 1);\
	\
	    vec2 posInTile = mod(vec2(gl_FragCoord), tileSize);\
	    vec2 tileNum = floor(vec2(gl_FragCoord)/ tileSize);\
	    int num = int(tileNum.x);\
	    vec2 totalTiles = ceil(resolution.xy / tileSize);\
	    float countTiles = totalTiles.x * totalTiles.y;\
	     \
		vec2 perTile = ceil(tileSize / resolution.xy);\
	    float offset = 0.0;\
	    offset = (tileNum.x + tileNum.y * totalTiles.x) / countTiles;\
	\
	    float timeOffset = (progress - offset) * countTiles;\
	    timeOffset = clamp(timeOffset, 0.0, 0.5);\
	    \
	    float sinTime = 1.0 - abs(cos(fract(timeOffset) * 3.1415926));\
	    \
	    fragColor.rg = uv;\
	    fragColor.b = sinTime;\
	    \
	    vec2 texC = posInTile / tileSize;\
	    \
	    if (sinTime <= 0.5){\
	    \
	\
	        if (flipX) {\
	            if ((texC.x < sinTime) || (texC.x > 1.0 - sinTime)){\
	                discard;\
	            }\
	            if (texC.x < 0.5) {\
	                texC.x = (texC.x - sinTime) * 0.5 / (0.5 - sinTime);\
	            } else {\
	                texC.x = (texC.x - 0.5) * 0.5 / (0.5 - sinTime) + 0.5;\
	            }\
	        }\
	\
	        if (flipY) {\
	            if ((texC.y < sinTime) || (texC.y > 1.0 - sinTime)){\
	                discard;\
	            }\
	            if (texC.y < 0.5) {\
	                texC.y = (texC.y - sinTime) * 0.5 / (0.5 - sinTime);\
	            } else {\
	                texC.y = (texC.y - 0.5) * 0.5 / (0.5 - sinTime) + 0.5;\
	            }\
	        }\
	\
	        fragColor = texture2D(from, tile2Global(texC, tileNum, preTileSingleColor));\
	\
	    } else {\
	        if (flipX) {\
	            if ((texC.x > sinTime) || (texC.x < 1.0 - sinTime)){\
	                discard;\
	            }\
	            if (texC.x < 0.5) {\
	                texC.x = (texC.x - sinTime) * 0.5 / (0.5 - sinTime);\
	            } else {\
	                texC.x = (texC.x - 0.5) * 0.5 / (0.5 - sinTime) + 0.5;\
	            }\
	            texC.x = 1.0 - texC.x;\
	        }\
	\
	        if (flipY) {\
	            if ((texC.y > sinTime) || (texC.y < 1.0 - sinTime)){\
	                discard;\
	            }\
	            if (texC.y < 0.5) {\
	                texC.y = (texC.y - sinTime) * 0.5 / (0.5 - sinTime);\
	            } else {\
	                texC.y = (texC.y - 0.5) * 0.5 / (0.5 - sinTime) + 0.5;\
	            }\
	            texC.y = 1.0 - texC.y;\
	        }\
	\
	        fragColor.rgb = texture2D(to, tile2Global(texC, tileNum, postTileSingleColor)).rgb;\
	\
	    }\
	    gl_FragColor = fragColor;\
	  \
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = tilescanline;
	module.exports = exports["default"];

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var dreamy = {
	    "title": "Dreamy",
	    "description": "A dreamy effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	vec2 offset(float progress, float x, float theta) {\
	  float phase = progress*progress + progress + theta;\
	  float shifty = 0.03*progress*cos(10.0*(progress+x));\
	  return vec2(0, shifty);\
	}\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  gl_FragColor = mix(texture2D(from, p + offset(progress, p.x, 0.0)), texture2D(to, p + offset(1.0-progress, p.x, 3.14)), progress);\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = dreamy;
	module.exports = exports["default"];

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var advancedmosaic = {
	    "title": "Advancedmosaic",
	    "description": "A advancedmosaic effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	void main(void)\
	{\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  \
		float T = progress;\
		float S0 = 1.0;\
		float S1 = 50.0;\
		float S2 = 1.0;\
		float Half = 0.5;\
		\
		float PixelSize = ( T < Half ) ? mix( S0, S1, T / Half ) : mix( S1, S2, (T-Half) / Half );\
		vec2 D = PixelSize / resolution.xy;\
		vec2 UV = ( p + vec2( -0.5 ) ) / D;\
		vec2 Coord = clamp( D * ( ceil( UV + vec2( -0.5 ) ) ) + vec2( 0.5 ), vec2( 0.0 ), vec2( 1.0 ) );\
		vec4 C0 = texture2D( from, Coord );\
		vec4 C1 = texture2D( to, Coord );\
	\
		gl_FragColor = mix( C0, C1, T );\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = advancedmosaic;
	module.exports = exports["default"];

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var swirl = {
	  "title": "Swirl",
	  "description": "A swirl effect. Typically used as a transistion.",
	  "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	  "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	void main(void)\
	{\
		float Radius = 1.0;\
		float T = progress;\
		vec2 UV = gl_FragCoord.xy / resolution.xy;\
		UV -= vec2( 0.5, 0.5 );\
		float Dist = length(UV);\
		if ( Dist < Radius )\
		{\
			float Percent = (Radius - Dist) / Radius;\
			float A = ( T <= 0.5 ) ? mix( 0.0, 1.0, T/0.5 ) : mix( 1.0, 0.0, (T-0.5)/0.5 );\
			float Theta = Percent * Percent * A * 8.0 * 3.14159;\
			float S = sin( Theta );\
			float C = cos( Theta );\
			UV = vec2( dot(UV, vec2(C, -S)), dot(UV, vec2(S, C)) );\
		}\
		UV += vec2( 0.5, 0.5 );\
	\
		vec4 C0 = texture2D( from, UV );\
		vec4 C1 = texture2D( to, UV );\
	\
		gl_FragColor = mix( C0, C1, T );\
	}",
	  "properties": {
	    "progress": { "type": "uniform", "value": 0.0 },
	    "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	  },
	  "inputs": ["from", "to"]
	};
	
	exports["default"] = swirl;
	module.exports = exports["default"];

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
					value: true
	});
	var defocusBlur = {
					"title": "DefocusBlur",
					"description": "A defocusBlur effect. Typically used as a transistion.",
					"vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
					"fragmentShader": "\
	    precision mediump float;\
	    uniform float progress;\
	uniform vec2 resolution;\
	uniform sampler2D from;\
	uniform sampler2D to;\
	\
	void main(void)\
	{\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  \
		float T = progress;\
		float S0 = 1.0;\
		float S1 = 50.0;\
		float S2 = 1.0;\
		float Half = 0.5;\
		float PixelSize = ( T < Half ) ? mix( S0, S1, T / Half ) : mix( S1, S2, (T-Half) / Half );\
		vec2 D = PixelSize / resolution.xy;\
		vec2 UV = (gl_FragCoord.xy / resolution.xy);\
		const int NumTaps = 12;\
		vec2 Disk[NumTaps];\
		Disk[0] = vec2(-.326,-.406);\
		Disk[1] = vec2(-.840,-.074);\
		Disk[2] = vec2(-.696, .457);\
		Disk[3] = vec2(-.203, .621);\
		Disk[4] = vec2( .962,-.195);\
		Disk[5] = vec2( .473,-.480);\
		Disk[6] = vec2( .519, .767);\
		Disk[7] = vec2( .185,-.893);\
		Disk[8] = vec2( .507, .064);\
		Disk[9] = vec2( .896, .412);\
		Disk[10] = vec2(-.322,-.933);\
		Disk[11] = vec2(-.792,-.598);\
	\
		vec4 C0 = texture2D( from, UV );\
		vec4 C1 = texture2D( to, UV );\
	\
		for ( int i = 0; i != NumTaps; i++ )\
		{\
			C0 += texture2D( from, Disk[i] * D + UV );\
			C1 += texture2D( to, Disk[i] * D + UV );\
		}\
		C0 /= float(NumTaps+1);\
		C1 /= float(NumTaps+1);\
	\
		gl_FragColor = mix( C0, C1, T );\
	}",
					"properties": {
									"progress": { "type": "uniform", "value": 0.0 },
									"resolution": { "type": "uniform", "value": [480.0, 270.0] }
					},
					"inputs": ["from", "to"]
	};
	
	exports["default"] = defocusBlur;
	module.exports = exports["default"];

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var colourDistance = {
	    "title": "ColourDistance",
	    "description": "A colourDistance effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	uniform float interpolationPower;\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  vec4 fTex = texture2D(from,p);\
	  vec4 tTex = texture2D(to,p);\
	  gl_FragColor = mix(distance(fTex,tTex)>progress?fTex:tTex,\
	                     tTex,\
	                     pow(progress,interpolationPower));\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	        "interpolationPower": { "type": "uniform", "value": 5.0 }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = colourDistance;
	module.exports = exports["default"];

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var dissolve = {
	    "title": "Dissolve",
	    "description": "A dissolve effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	uniform float blocksize;\
	\
	float rand(vec2 co) {\
	    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);\
	}\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  if (progress == 0.0) {\
	      gl_FragColor = texture2D(from, p);\
	      return;\
	  }\
	  gl_FragColor = mix(texture2D(from, p), texture2D(to, p), step(rand(floor(gl_FragCoord.xy/blocksize)), progress));\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	        "blocksize": { "type": "uniform", "value": 1.0 }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = dissolve;
	module.exports = exports["default"];

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var hsvfade = {
	    "title": "Hsvfade",
	    "description": "A hsvfade effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	vec3 hsv2rgb(vec3 c) {\
	    const vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\
	    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\
	    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\
	}\
	\
	vec3 rgb2hsv(vec3 c) {\
	    const vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\
	    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\
	    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\
	\
	    float d = q.x - min(q.w, q.y);\
	    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 0.001)), d / (q.x + 0.001), q.x);\
	}\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  vec3 a = rgb2hsv(texture2D(from, p).rgb);\
	  vec3 b = rgb2hsv(texture2D(to, p).rgb);\
	  vec3 m = mix(a, b, progress);\
	  gl_FragColor = vec4(hsv2rgb(m), 1.0);\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = hsvfade;
	module.exports = exports["default"];

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var fold = {
	    "title": "Fold",
	    "description": "A fold effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  vec4 a = texture2D(from, (p - vec2(progress, 0.0)) / vec2(1.0-progress, 1.0));\
	  vec4 b = texture2D(to, p / vec2(progress, 1.0));\
	  gl_FragColor = mix(a, b, step(p.x, progress));\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = fold;
	module.exports = exports["default"];

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var linearblur = {
	    "title": "Linearblur",
	    "description": "A linearblur effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	uniform float intensity;\
	\
	const int PASSES = 8;\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  vec4 c1 = vec4(0.0), c2 = vec4(0.0);\
	  float disp = intensity*(0.5-distance(0.5, progress));\
	  for (int xi=0; xi<PASSES; ++xi) {\
	    float x = float(xi) / float(PASSES) - 0.5;\
	    for (int yi=0; yi<PASSES; ++yi) {\
	      float y = float(yi) / float(PASSES) - 0.5;\
	      vec2 v = vec2(x,y);\
	      float d = disp;\
	      c1 += texture2D(from, p + d*v);\
	      c2 += texture2D(to, p + d*v);\
	    }\
	  }\
	  c1 /= float(PASSES*PASSES);\
	  c2 /= float(PASSES*PASSES);\
	  gl_FragColor = mix(c1, c2, progress);\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = linearblur;
	module.exports = exports["default"];

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var pixelize = {
	    "title": "Pixelize",
	    "description": "A pixelize effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	float rand(vec2 co){\
	  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\
	}\
	\
	void main() {\
	  float revProgress = (1.0 - progress);\
	  float distFromEdges = min(progress, revProgress);\
	  float squareSize = (50.0 * distFromEdges) + 1.0;  \
	  \
	  vec2 p = (floor((gl_FragCoord.xy + squareSize * 0.5) / squareSize) * squareSize) / resolution.xy;\
	  vec4 fromColor = texture2D(from, p);\
	  vec4 toColor = texture2D(to, p);\
	  \
	  gl_FragColor = mix(fromColor, toColor, progress);\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = pixelize;
	module.exports = exports["default"];

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var randomsquares = {
	    "title": "Randomsquares",
	    "description": "A randomsquares effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	float rand(vec2 co){\
	  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\
	}\
	\
	void main() {\
	  float revProgress = (1.0 - progress);\
	  float distFromEdges = min(progress, revProgress);\
	  \
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  vec4 fromColor = texture2D(from, p);\
	  vec4 toColor = texture2D(to, p);\
	  float squareSize = 20.0;\
	  float flickerSpeed = 60.0;\
	  \
	  vec2 seed = floor(gl_FragCoord.xy / squareSize) * floor(distFromEdges * flickerSpeed);\
	  gl_FragColor = mix(fromColor, toColor, progress) + rand(seed) * distFromEdges * 0.5;\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = randomsquares;
	module.exports = exports["default"];

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var pagecurl = {
		"title": "Pagecurl",
		"description": "A pagecurl effect. Typically used as a transistion.",
		"vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
		"fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	const float MIN_AMOUNT = -0.16;\
	const float MAX_AMOUNT = 1.3;\
	const float PI = 3.141592653589793;\
	const float scale = 512.0;\
	const float sharpness = 3.0;\
	const float cylinderRadius = 1.0 / PI / 2.0;\
	\
	vec3 hitPoint(float hitAngle, float yc, vec3 point, mat3 rrotation)\
	{\
		float hitPoint = hitAngle / (2.0 * PI);\
		point.y = hitPoint;\
		return rrotation * point;\
	}\
	\
	vec4 antiAlias(vec4 color1, vec4 color2, float distanc)\
	{\
		distanc *= scale;\
		if (distanc < 0.0) return color2;\
		if (distanc > 2.0) return color1;\
		float dd = pow(1.0 - distanc / 2.0, sharpness);\
		return ((color2 - color1) * dd) + color1;\
	}\
	\
	float distanceToEdge(vec3 point)\
	{\
		float dx = abs(point.x > 0.5 ? 1.0 - point.x : point.x);\
		float dy = abs(point.y > 0.5 ? 1.0 - point.y : point.y);\
		if (point.x < 0.0) dx = -point.x;\
		if (point.x > 1.0) dx = point.x - 1.0;\
		if (point.y < 0.0) dy = -point.y;\
		if (point.y > 1.0) dy = point.y - 1.0;\
		if ((point.x < 0.0 || point.x > 1.0) && (point.y < 0.0 || point.y > 1.0)) return sqrt(dx * dx + dy * dy);\
		return min(dx, dy);\
	}\
	\
	vec4 seeThrough(float yc, vec2 p, mat3 rotation, mat3 rrotation)\
	{\
		float amount = progress * (MAX_AMOUNT - MIN_AMOUNT) + MIN_AMOUNT;\
		float cylinderAngle = 2.0 * PI * amount;\
	\
		float hitAngle = PI - (acos(yc / cylinderRadius) - cylinderAngle);\
		vec3 point = hitPoint(hitAngle, yc, rotation * vec3(p, 1.0), rrotation);\
		if (yc <= 0.0 && (point.x < 0.0 || point.y < 0.0 || point.x > 1.0 || point.y > 1.0))\
		{\
	        vec2 texCoord = gl_FragCoord.xy / resolution.xy;\
	        return texture2D(to, texCoord);\
		}\
	\
		if (yc > 0.0) return texture2D(from, p);\
	\
		vec4 color = texture2D(from, point.xy);\
		vec4 tcolor = vec4(0.0);\
	\
		return antiAlias(color, tcolor, distanceToEdge(point));\
	}\
	\
	vec4 seeThroughWithShadow(float yc, vec2 p, vec3 point, mat3 rotation, mat3 rrotation)\
	{\
		float amount = progress * (MAX_AMOUNT - MIN_AMOUNT) + MIN_AMOUNT;\
		float shadow = distanceToEdge(point) * 30.0;\
		shadow = (1.0 - shadow) / 3.0;\
	\
		if (shadow < 0.0) shadow = 0.0; else shadow *= amount;\
	\
		vec4 shadowColor = seeThrough(yc, p, rotation, rrotation);\
		shadowColor.r -= shadow;\
		shadowColor.g -= shadow;\
		shadowColor.b -= shadow;\
	\
		return shadowColor;\
	}\
	\
	vec4 backside(float yc, vec3 point)\
	{\
		vec4 color = texture2D(from, point.xy);\
		float gray = (color.r + color.b + color.g) / 15.0;\
		gray += (8.0 / 10.0) * (pow(1.0 - abs(yc / cylinderRadius), 2.0 / 10.0) / 2.0 + (5.0 / 10.0));\
		color.rgb = vec3(gray);\
		return color;\
	}\
	\
	vec4 behindSurface(float yc, vec3 point, mat3 rrotation)\
	{\
		float amount = progress * (MAX_AMOUNT - MIN_AMOUNT) + MIN_AMOUNT;\
		float cylinderAngle = 2.0 * PI * amount;\
		float shado = (1.0 - ((-cylinderRadius - yc) / amount * 7.0)) / 6.0;\
		shado *= 1.0 - abs(point.x - 0.5);\
	\
		yc = (-cylinderRadius - cylinderRadius - yc);\
	\
		float hitAngle = (acos(yc / cylinderRadius) + cylinderAngle) - PI;\
		point = hitPoint(hitAngle, yc, point, rrotation);\
	\
		if (yc < 0.0 && point.x >= 0.0 && point.y >= 0.0 && point.x <= 1.0 && point.y <= 1.0 && (hitAngle < PI || amount > 0.5))\
		{\
			shado = 1.0 - (sqrt(pow(point.x - 0.5, 2.0) + pow(point.y - 0.5, 2.0)) / (71.0 / 100.0));\
			shado *= pow(-yc / cylinderRadius, 3.0);\
			shado *= 0.5;\
		}\
		else\
		{\
			shado = 0.0;\
		}\
		\
		vec2 texCoord = gl_FragCoord.xy / resolution.xy;\
	\
		return vec4(texture2D(to, texCoord).rgb - shado, 1.0);\
	}\
	\
	void main()\
	{\
		float amount = progress * (MAX_AMOUNT - MIN_AMOUNT) + MIN_AMOUNT;\
		float cylinderCenter = amount;\
		float cylinderAngle = 2.0 * PI * amount;\
	  vec2 texCoord = gl_FragCoord.xy / resolution.xy;\
	  if (progress == 0.0) {\
	      gl_FragColor = texture2D(from, texCoord);\
			return;\
	  }\
	  \
	  const float angle = 30.0 * PI / 180.0;\
		float c = cos(-angle);\
		float s = sin(-angle);\
	\
		mat3 rotation = mat3( c, s, 0,\
									-s, c, 0,\
									0.12, 0.258, 1\
									);\
		c = cos(angle);\
		s = sin(angle);\
	\
		mat3 rrotation = mat3(	c, s, 0,\
										-s, c, 0,\
										0.15, -0.5, 1\
									);\
	\
		vec3 point = rotation * vec3(texCoord, 1.0);\
	\
		float yc = point.y - cylinderCenter;\
	\
		if (yc < -cylinderRadius)\
		{\
			gl_FragColor = behindSurface(yc, point, rrotation);\
			return;\
		}\
	\
		if (yc > cylinderRadius)\
		{\
			gl_FragColor = texture2D(from, texCoord);\
			return;\
		}\
	\
		float hitAngle = (acos(yc / cylinderRadius) + cylinderAngle) - PI;\
	\
		float hitAngleMod = mod(hitAngle, 2.0 * PI);\
		if ((hitAngleMod > PI && amount < 0.5) || (hitAngleMod > PI/2.0 && amount < 0.0))\
		{\
			gl_FragColor = seeThrough(yc, texCoord, rotation, rrotation);\
			return;\
		}\
	\
		point = hitPoint(hitAngle, yc, point, rrotation);\
	\
		if (point.x < 0.0 || point.y < 0.0 || point.x > 1.0 || point.y > 1.0)\
		{\
			gl_FragColor = seeThroughWithShadow(yc, texCoord, point, rotation, rrotation);\
			return;\
		}\
	\
		vec4 color = backside(yc, point);\
	\
		vec4 otherColor;\
		if (yc < 0.0)\
		{\
			float shado = 1.0 - (sqrt(pow(point.x - 0.5, 2.0) + pow(point.y - 0.5, 2.0)) / 0.71);\
			shado *= pow(-yc / cylinderRadius, 3.0);\
			shado *= 0.5;\
			otherColor = vec4(0.0, 0.0, 0.0, shado);\
		}\
		else\
		{\
			otherColor = texture2D(from, texCoord);\
		}\
	\
		color = antiAlias(color, otherColor, cylinderRadius - abs(yc));\
	\
		vec4 cl = seeThroughWithShadow(yc, texCoord, point, rotation, rrotation);\
		float dist = distanceToEdge(point);\
	\
		gl_FragColor = antiAlias(color, cl, dist);\
	}",
		"properties": {
			"progress": { "type": "uniform", "value": 0.0 },
			"resolution": { "type": "uniform", "value": [480.0, 270.0] }
		},
		"inputs": ["from", "to"]
	};
	
	exports["default"] = pagecurl;
	module.exports = exports["default"];

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var polkadots = {
	  "title": "Polkadots",
	  "description": "A polkadots effect. Typically used as a transistion.",
	  "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	  "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform float dots;\
	\
	float smoothAliase(vec2 p, float progress)\
	{\
	  const float radius = 6.0;\
	  vec2 step = vec2(1.0)/resolution.xy;\
	  float c = distance(fract(p * dots), vec2(0.5, 0.5));\
	  float r1 = progress;\
	  float r2 = r1 + min(step.x,step.y)*radius;\
	  bool nextImage = c < r1;\
	  float a = nextImage?0.0:1.0;\
	  float alpha = 1.0;\
	  if (progress > 0.0 && progress < 1.0) {\
	    if (r1 < c && c < r2) {\
	      alpha = (c-r1)/(r2-r1);\
	    }\
	  }\
	\
	  a *= alpha;\
	\
	  return a;\
	}\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  float a = smoothAliase(p, progress);\
	  gl_FragColor = mix(texture2D(to, p), texture2D(from, p), a);\
	}",
	  "properties": {
	    "progress": { "type": "uniform", "value": 0.0 },
	    "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	    "dots": { "type": "uniform", "value": 5.0 }
	  },
	  "inputs": ["from", "to"]
	};
	
	exports["default"] = polkadots;
	module.exports = exports["default"];

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var burn = {
	    "title": "Burn",
	    "description": "A burn effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform vec3 color;\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  gl_FragColor = mix(\
	    texture2D(from, p) + vec4(progress*color, 1.0),\
	    texture2D(to, p) + vec4((1.0-progress)*color, 1.0),\
	    progress);\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	        "color": { "type": "uniform", "value": [0.9, 0.4, 0.2] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = burn;
	module.exports = exports["default"];

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var finalGaussianNoise = {
	    "title": "FinalGaussianNoise",
	    "description": "A finalGaussianNoise effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	float Rand(vec2 v) {\
	  return fract(sin(dot(v.xy ,vec2(12.9898,78.233))) * 43758.5453);\
	}\
	\
	float Gaussian(float p, float center, float c) {\
	  return 0.75 * exp(- pow((p - center) / c, 2.));\
	}\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  float c = cos(Gaussian(progress * (1. + Gaussian(progress * Rand(p), 0.5, 0.5)), 0.5, 0.25));\
	  vec2 d = p * c;\
	  \
	  gl_FragColor = mix(texture2D(from, d), texture2D(to, d), progress);\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = finalGaussianNoise;
	module.exports = exports["default"];

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var mosaiczoom = {
	  "title": "Mosaiczoom",
	  "description": "A mosaiczoom effect. Typically used as a transistion.",
	  "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	  "fragmentShader": "\
	    precision mediump float;\
	    const float PI = 3.14159265358979323;\
	float POW2(float X){return X*X;}\
	float POW3(float X) {return X*X*X;}\
	uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform float endx;\
	uniform float endy;\
	\
	float Rand(vec2 v) {\
	  return fract(sin(dot(v.xy ,vec2(12.9898,78.233))) * 43758.5453);\
	}\
	vec2 Rotate(vec2 v, float a) {\
	  mat2 rm = mat2(cos(a), -sin(a),\
	                 sin(a), cos(a));\
	  return rm*v;\
	}\
	float CosInterpolation(float x) {\
	  return -cos(x*PI)/2.+.5;\
	}\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy - .5;\
	  vec2 rp = p;\
	  float rpr = (progress*2.-1.);\
	  float z = -(rpr*rpr*2.) + 3.;\
	  float az = abs(z);\
	  rp *= az;\
	  rp += mix(vec2(.5, .5), vec2(float(endx) + .5, float(endy) + .5), POW2(CosInterpolation(progress)));\
	  vec2 mrp = mod(rp, 1.);\
	  vec2 crp = rp;\
	  bool onEnd = int(floor(crp.x))==int(endx)&&int(floor(crp.y))==int(endy);\
	  if(!onEnd) {\
	    float ang = float(int(Rand(floor(crp))*4.))*.5*PI;\
	    mrp = vec2(.5) + Rotate(mrp-vec2(.5), ang);\
	  }\
	  if(onEnd || Rand(floor(crp))>.5) {\
	    gl_FragColor = texture2D(to, mrp);\
	  } else {\
	    gl_FragColor = texture2D(from, mrp);\
	  }\
	}",
	  "properties": {
	    "progress": { "type": "uniform", "value": 0.0 },
	    "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	    "endx": { "type": "uniform", "value": 0.0 },
	    "endy": { "type": "uniform", "value": -1.0 }
	  },
	  "inputs": ["from", "to"]
	};
	
	exports["default"] = mosaiczoom;
	module.exports = exports["default"];

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var radial = {
	    "title": "Radial",
	    "description": "A radial effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    const float PI = 3.141592653589;\
	uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  if (progress == 0.0) {\
	      gl_FragColor = texture2D(from, p);\
			return;\
	  }\
	  vec2 rp = p*2.-1.;\
	  float a = atan(rp.y, rp.x);\
	  float pa = progress*PI*2.5-PI*1.25;\
	  vec4 fromc = texture2D(from, p);\
	  vec4 toc = texture2D(to, p);\
	  if(a>pa) {\
	    gl_FragColor = mix(toc, fromc, smoothstep(0., 1., (a-pa)));\
	  } else {\
	    gl_FragColor = toc;\
	  }\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = radial;
	module.exports = exports["default"];

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var butterflyWaveScrawler = {
	    "title": "ButterflyWaveScrawler",
	    "description": "A butterflyWaveScrawler effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform float amplitude;\
	uniform float waves;\
	uniform float colorSeparation;\
	\
	const float PI = 3.14159265358979323846264;\
	float compute(vec2 p, float progress, vec2 center) {\
		vec2 o = p*sin(progress * amplitude)-center;\
		vec2 h = vec2(1., 0.);\
		float theta = acos(dot(o, h)) * waves;\
		return (exp(cos(theta)) - 2.*cos(4.*theta) + pow(sin((2.*theta - PI) / 24.), 5.)) / 10.;\
	}\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  float inv = 1. - progress;\
	  vec2 dir = p - vec2(.5);\
	  float dist = length(dir);\
	  float disp = compute(p, progress, vec2(0.5, 0.5)) ;\
	  vec4 texTo = texture2D(to, p + inv*disp);\
	  vec4 texFrom = vec4(\
	  texture2D(from, p + progress*disp*(1.0 - colorSeparation)).r,\
	  texture2D(from, p + progress*disp).g,\
	  texture2D(from, p + progress*disp*(1.0 + colorSeparation)).b,\
	  1.0);\
	  gl_FragColor = texTo*progress + texFrom*inv;\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	        "amplitude": { "type": "uniform", "value": 1.0 },
	        "waves": { "type": "uniform", "value": 30.0 },
	        "colorSeparation": { "type": "uniform", "value": 0.3 }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = butterflyWaveScrawler;
	module.exports = exports["default"];

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var crazyparametricfun = {
	    "title": "Crazyparametricfun",
	    "description": "A crazyparametricfun effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform float a;\
	uniform float b;\
	uniform float amplitude;\
	uniform float smoothness;\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  vec2 dir = p - vec2(.5);\
	  float dist = length(dir);\
	  float x = (a - b) * cos(progress) + b * cos(progress * ((a / b) - 1.) );\
	  float y = (a - b) * sin(progress) - b * sin(progress * ((a / b) - 1.));\
	  vec2 offset = dir * vec2(sin(progress  * dist * amplitude * x), sin(progress * dist * amplitude * y)) / smoothness;\
	  gl_FragColor = mix(texture2D(from, p + offset), texture2D(to, p), smoothstep(0.2, 1.0, progress));\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	        "a": { "type": "uniform", "value": 4.0 },
	        "b": { "type": "uniform", "value": 1.0 },
	        "amplitude": { "type": "uniform", "value": 120.0 },
	        "smoothness": { "type": "uniform", "value": 0.1 }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = crazyparametricfun;
	module.exports = exports["default"];

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var ripple = {
	    "title": "Ripple",
	    "description": "A ripple effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from;\
	uniform sampler2D to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform float amplitude;\
	uniform float speed;\
	 \
	void main()\
	{\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  vec2 dir = p - vec2(.5);\
	  float dist = length(dir);\
	  vec2 offset = dir * (sin(progress * dist * amplitude - progress * speed) + .5) / 30.;\
	  gl_FragColor = mix(texture2D(from, p + offset), texture2D(to, p), smoothstep(0.2, 1.0, progress));\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	        "amplitude": { "type": "uniform", "value": 100.0 },
	        "speed": { "type": "uniform", "value": 50.0 }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = ripple;
	module.exports = exports["default"];

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var flash = {
	    "title": "Flash",
	    "description": "A flash effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from;\
	uniform sampler2D to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform float flashPhase;\
	uniform float flashIntensity;\
	uniform float flashZoomEffect;\
	 \
	const vec3 flashColor = vec3(1.0, 0.8, 0.3);\
	const float flashVelocity = 3.0;\
	 \
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  vec4 fc = texture2D(from, p);\
	  vec4 tc = texture2D(to, p);\
	  float intensity = mix(1.0, 2.0*distance(p, vec2(0.5, 0.5)), flashZoomEffect) * flashIntensity * pow(smoothstep(flashPhase, 0.0, distance(0.5, progress)), flashVelocity);\
	  vec4 c = mix(texture2D(from, p), texture2D(to, p), smoothstep(0.5*(1.0-flashPhase), 0.5*(1.0+flashPhase), progress));\
	  c += intensity * vec4(flashColor, 1.0);\
	  gl_FragColor = c;\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	        "flashPhase": { "type": "uniform", "value": 0.3 },
	        "flashIntensity": { "type": "uniform", "value": 3.0 },
	        "flashZoomEffect": { "type": "uniform", "value": 0.5 }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = flash;
	module.exports = exports["default"];

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var flyeye = {
	    "title": "Flyeye",
	    "description": "A flyeye effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from;\
	uniform sampler2D to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform float size;\
	uniform float zoom;\
	uniform float colorSeparation;\
	 \
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  float inv = 1. - progress;\
	  vec2 disp = size*vec2(cos(zoom*p.x), sin(zoom*p.y));\
	  vec4 texTo = texture2D(to, p + inv*disp);\
	  vec4 texFrom = vec4(\
	    texture2D(from, p + progress*disp*(1.0 - colorSeparation)).r,\
	    texture2D(from, p + progress*disp).g,\
	    texture2D(from, p + progress*disp*(1.0 + colorSeparation)).b,\
	    1.0);\
	  gl_FragColor = texTo*progress + texFrom*inv;\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	        "size": { "type": "uniform", "value": 0.4 },
	        "zoom": { "type": "uniform", "value": 30.0 },
	        "colorSeparation": { "type": "uniform", "value": 0.3 }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = flyeye;
	module.exports = exports["default"];

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var morph = {
	  "title": "Morph",
	  "description": "A morph effect. Typically used as a transistion.",
	  "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	  "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from;\
	uniform sampler2D to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform float reflection;\
	uniform float perspective;\
	uniform float depth;\
	 \
	const vec4 black = vec4(0.0, 0.0, 0.0, 1.0);\
	const vec2 boundMin = vec2(0.0, 0.0);\
	const vec2 boundMax = vec2(1.0, 1.0);\
	 \
	bool inBounds (vec2 p) {\
	  return all(lessThan(boundMin, p)) && all(lessThan(p, boundMax));\
	}\
	 \
	vec2 project (vec2 p) {\
	  return p * vec2(1.0, -1.2) + vec2(0.0, -0.02);\
	}\
	 \
	vec4 bgColor (vec2 p, vec2 pto) {\
	  vec4 c = black;\
	  pto = project(pto);\
	  if (inBounds(pto)) {\
	    c += mix(black, texture2D(to, pto), reflection * mix(1.0, 0.0, pto.y));\
	  }\
	  return c;\
	}\
	 \
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	 \
	  vec2 pfr = vec2(-1.), pto = vec2(-1.);\
	 \
	  float middleSlit = 2.0 * abs(p.x-0.5) - progress;\
	  if (middleSlit > 0.0) {\
	    pfr = p + (p.x > 0.5 ? -1.0 : 1.0) * vec2(0.5*progress, 0.0);\
	    float d = 1.0/(1.0+perspective*progress*(1.0-middleSlit));\
	    pfr.y -= d/2.;\
	    pfr.y *= d;\
	    pfr.y += d/2.;\
	  }\
	 \
	  float size = mix(1.0, depth, 1.-progress);\
	  pto = (p + vec2(-0.5, -0.5)) * vec2(size, size) + vec2(0.5, 0.5);\
	 \
	  if (inBounds(pfr)) {\
	    gl_FragColor = texture2D(from, pfr);\
	  }\
	  else if (inBounds(pto)) {\
	    gl_FragColor = texture2D(to, pto);\
	  }\
	  else {\
	    gl_FragColor = bgColor(p, pto);\
	  }\
	}",
	  "properties": {
	    "progress": { "type": "uniform", "value": 0.0 },
	    "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	    "reflection": { "type": "uniform", "value": 0.4 },
	    "perspective": { "type": "uniform", "value": 0.4 },
	    "depth": { "type": "uniform", "value": 3.0 }
	  },
	  "inputs": ["from", "to"]
	};
	
	exports["default"] = morph;
	module.exports = exports["default"];

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var circleopen = {
	    "title": "Circleopen",
	    "description": "A mocircleopenrph effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from;\
	uniform sampler2D to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform float smoothness;\
	uniform bool opening;\
	 \
	const vec2 center = vec2(0.5, 0.5);\
	const float SQRT_2 = 1.414213562373;\
	 \
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  float x = opening ? progress : (1.0-progress);\
	  float m = smoothstep(-smoothness, 0.0, SQRT_2*distance(center, p) - x*(1.+smoothness));\
	  gl_FragColor = mix(texture2D(from, p), texture2D(to, p), opening ? 1.-m : m);\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	        "smoothness": { "type": "uniform", "value": 0.3 },
	        "opening": { "type": "uniform", "value": 1.0 }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = circleopen;
	module.exports = exports["default"];

/***/ }),
/* 66 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var fadecolor = {
	    "title": "Fadecolor",
	    "description": "A fadecolor effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from;\
	uniform sampler2D to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform vec3 color;\
	uniform float colorPhase; \
	 \
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  gl_FragColor = mix(\
	    mix(vec4(color, 1.0), texture2D(from, p), smoothstep(1.0-colorPhase, 0.0, progress)),\
	    mix(vec4(color, 1.0), texture2D(to,   p), smoothstep(    colorPhase, 1.0, progress)),\
	    progress);\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	        "color": { "type": "uniform", "value": [0.0, 0.0, 0.0] },
	        "colorPhase": { "type": "uniform", "value": 0.4 }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = fadecolor;
	module.exports = exports["default"];

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var heartwipe = {
	    "title": "Heartwipe",
	    "description": "A heartwipe effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from;\
	uniform sampler2D to;\
	uniform float progress;\
	uniform vec2 resolution;\
	 \
	bool inHeart (vec2 p, vec2 center, float size) {\
	  if (size == 0.0) return false;\
	  vec2 o = (p-center)/(1.6*size);\
	  return pow(o.x*o.x+o.y*o.y-0.3, 3.0) < o.x*o.x*pow(o.y, 3.0);\
	}\
	 \
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  float m = inHeart(p, vec2(0.5, 0.4), progress) ? 1.0 : 0.0;\
	  gl_FragColor = mix(texture2D(from, p), texture2D(to, p), m);\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = heartwipe;
	module.exports = exports["default"];

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var dispersionblur = {
	    "title": "Dispersionblur",
	    "description": "A dispersionblur effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from;\
	uniform sampler2D to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform float size;\
	 \
	const float GOLDEN_ANGLE = 2.399963229728653;\
	const int QUALITY = 32;\
	 \
	vec4 blur(sampler2D t, vec2 c, float radius) {\
	  vec4 sum = vec4(0.0);\
	  float q = float(QUALITY);\
	  \
	  for (int i=0; i<QUALITY; ++i) {\
	    float fi = float(i);\
	    float a = fi * GOLDEN_ANGLE;\
	    float r = sqrt(fi / q) * radius;\
	    vec2 p = c + r * vec2(cos(a), sin(a));\
	    sum += texture2D(t, p);\
	  }\
	  return sum / q;\
	}\
	 \
	void main()\
	{\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  float inv = 1.-progress;\
	  gl_FragColor = inv*blur(from, p, progress*size) + progress*blur(to, p, inv*size);\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	        "size": { "type": "uniform", "value": 0.6 }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = dispersionblur;
	module.exports = exports["default"];

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var invertedPagecurl = {
		"title": "InvertedPagecurl",
		"description": "A invertedPagecurl effect. Typically used as a transistion.",
		"vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
		"fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	const float MIN_AMOUNT = -0.16;\
	const float MAX_AMOUNT = 1.5;\
	const float PI = 3.141592653589793;\
	const float scale = 512.0;\
	const float sharpness = 3.0;\
	const float cylinderRadius = 1.0 / PI / 2.0;\
	\
	vec3 hitPoint(float hitAngle, float yc, vec3 point, mat3 rrotation)\
	{\
		float hitPoint = hitAngle / (2.0 * PI);\
		point.y = hitPoint;\
		return rrotation * point;\
	}\
	\
	vec4 antiAlias(vec4 color1, vec4 color2, float distanc)\
	{\
		distanc *= scale;\
		if (distanc < 0.0) return color2;\
		if (distanc > 2.0) return color1;\
		float dd = pow(1.0 - distanc / 2.0, sharpness);\
		return ((color2 - color1) * dd) + color1;\
	}\
	\
	float distanceToEdge(vec3 point)\
	{\
		float dx = abs(point.x > 0.5 ? 1.0 - point.x : point.x);\
		float dy = abs(point.y > 0.5 ? 1.0 - point.y : point.y);\
		if (point.x < 0.0) dx = -point.x;\
		if (point.x > 1.0) dx = point.x - 1.0;\
		if (point.y < 0.0) dy = -point.y;\
		if (point.y > 1.0) dy = point.y - 1.0;\
		if ((point.x < 0.0 || point.x > 1.0) && (point.y < 0.0 || point.y > 1.0)) return sqrt(dx * dx + dy * dy);\
		return min(dx, dy);\
	}\
	\
	vec4 seeThrough(float yc, vec2 p, mat3 rotation, mat3 rrotation)\
	{\
		float amount = progress * (MAX_AMOUNT - MIN_AMOUNT) + MIN_AMOUNT;\
		float cylinderAngle = 2.0 * PI * amount;\
		float hitAngle = PI - (acos(yc / cylinderRadius) - cylinderAngle);\
		vec3 point = hitPoint(hitAngle, yc, rotation * vec3(p, 1.0), rrotation);\
		if (yc <= 0.0 && (point.x < 0.0 || point.y < 0.0 || point.x > 1.0 || point.y > 1.0))\
		{\
	        vec2 texCoord = gl_FragCoord.xy / resolution.xy;\
	        return texture2D(to, texCoord);\
		}\
	\
		if (yc > 0.0) return texture2D(from, p);\
	\
		vec4 color = texture2D(from, point.xy);\
		vec4 tcolor = vec4(0.0);\
	\
		return antiAlias(color, tcolor, distanceToEdge(point));\
	}\
	\
	vec4 seeThroughWithShadow(float yc, vec2 p, vec3 point, mat3 rotation, mat3 rrotation)\
	{\
		float amount = progress * (MAX_AMOUNT - MIN_AMOUNT) + MIN_AMOUNT;\
		float shadow = distanceToEdge(point) * 30.0;\
		shadow = (1.0 - shadow) / 3.0;\
	\
		if (shadow < 0.0) shadow = 0.0; else shadow *= amount;\
	\
		vec4 shadowColor = seeThrough(yc, p, rotation, rrotation);\
		shadowColor.r -= shadow;\
		shadowColor.g -= shadow;\
		shadowColor.b -= shadow;\
	\
		return shadowColor;\
	}\
	\
	vec4 backside(float yc, vec3 point)\
	{\
		vec4 color = texture2D(from, point.xy);\
		float gray = (color.r + color.b + color.g) / 15.0;\
		gray += (8.0 / 10.0) * (pow(1.0 - abs(yc / cylinderRadius), 2.0 / 10.0) / 2.0 + (5.0 / 10.0));\
		color.rgb = vec3(gray);\
		return color;\
	}\
	\
	vec4 behindSurface(float yc, vec3 point, mat3 rrotation)\
	{\
		float amount = progress * (MAX_AMOUNT - MIN_AMOUNT) + MIN_AMOUNT;\
		float cylinderAngle = 2.0 * PI * amount;\
		float shado = (1.0 - ((-cylinderRadius - yc) / amount * 7.0)) / 6.0;\
		shado *= 1.0 - abs(point.x - 0.5);\
	\
		yc = (-cylinderRadius - cylinderRadius - yc);\
	\
		float hitAngle = (acos(yc / cylinderRadius) + cylinderAngle) - PI;\
		point = hitPoint(hitAngle, yc, point, rrotation);\
	\
		if (yc < 0.0 && point.x >= 0.0 && point.y >= 0.0 && point.x <= 1.0 && point.y <= 1.0 && (hitAngle < PI || amount > 0.5))\
		{\
			shado = 1.0 - (sqrt(pow(point.x - 0.5, 2.0) + pow(point.y - 0.5, 2.0)) / (71.0 / 100.0));\
			shado *= pow(-yc / cylinderRadius, 3.0);\
			shado *= 0.5;\
		}\
		else\
		{\
			shado = 0.0;\
		}\
		\
		vec2 texCoord = gl_FragCoord.xy / resolution.xy;\
	\
		return vec4(texture2D(to, texCoord).rgb - shado, 1.0);\
	}\
	\
	void main()\
	{\
		float amount = progress * (MAX_AMOUNT - MIN_AMOUNT) + MIN_AMOUNT;\
		float cylinderCenter = amount;\
		float cylinderAngle = 2.0 * PI * amount;\
	  vec2 texCoord = gl_FragCoord.xy / resolution.xy;\
	  if (progress == 0.0) {\
	      gl_FragColor = texture2D(from, texCoord);\
	      return;\
	  }\
	  \
	  const float angle = 100.0 * PI / 180.0;\
		float c = cos(-angle);\
		float s = sin(-angle);\
	\
		mat3 rotation = mat3( c, s, 0,\
									-s, c, 0,\
									-0.801, 0.8900, 1\
									);\
		c = cos(angle);\
		s = sin(angle);\
	\
		mat3 rrotation = mat3(	c, s, 0,\
										-s, c, 0,\
										0.98500, 0.985, 1\
									);\
	\
		vec3 point = rotation * vec3(texCoord, 1.0);\
	\
		float yc = point.y - cylinderCenter;\
	\
		if (yc < -cylinderRadius)\
		{\
			gl_FragColor = behindSurface(yc, point, rrotation);\
			return;\
		}\
	\
		if (yc > cylinderRadius)\
		{\
			gl_FragColor = texture2D(from, texCoord);\
			return;\
		}\
	\
		float hitAngle = (acos(yc / cylinderRadius) + cylinderAngle) - PI;\
	\
		float hitAngleMod = mod(hitAngle, 2.0 * PI);\
		if ((hitAngleMod > PI && amount < 0.5) || (hitAngleMod > PI/2.0 && amount < 0.0))\
		{\
			gl_FragColor = seeThrough(yc, texCoord, rotation, rrotation);\
			return;\
		}\
	\
		point = hitPoint(hitAngle, yc, point, rrotation);\
	\
		if (point.x < 0.0 || point.y < 0.0 || point.x > 1.0 || point.y > 1.0)\
		{\
			gl_FragColor = seeThroughWithShadow(yc, texCoord, point, rotation, rrotation);\
			return;\
		}\
	\
		vec4 color = backside(yc, point);\
	\
		vec4 otherColor;\
		if (yc < 0.0)\
		{\
			float shado = 1.0 - (sqrt(pow(point.x - 0.5, 2.0) + pow(point.y - 0.5, 2.0)) / 0.71);\
			shado *= pow(-yc / cylinderRadius, 3.0);\
			shado *= 0.5;\
			otherColor = vec4(0.0, 0.0, 0.0, shado);\
		}\
		else\
		{\
			otherColor = texture2D(from, texCoord);\
		}\
	\
		color = antiAlias(color, otherColor, cylinderRadius - abs(yc));\
	\
		vec4 cl = seeThroughWithShadow(yc, texCoord, point, rotation, rrotation);\
		float dist = distanceToEdge(point);\
	\
		gl_FragColor = antiAlias(color, cl, dist);\
	}",
		"properties": {
			"progress": { "type": "uniform", "value": 0.0 },
			"resolution": { "type": "uniform", "value": [480.0, 270.0] }
		},
		"inputs": ["from", "to"]
	};
	
	exports["default"] = invertedPagecurl;
	module.exports = exports["default"];

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var waterdrop = {
	    "title": "Waterdrop",
	    "description": "A waterdrop effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from;\
	uniform sampler2D to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform float amplitude;\
	uniform float speed;\
	 \
	void main()\
	{\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  vec2 dir = p - vec2(.5);\
	  float dist = length(dir);\
	\
	  if (dist > progress) {\
	    gl_FragColor = mix(texture2D(from, p), texture2D(to, p), progress);\
	  } else {\
	    vec2 offset = dir * sin(dist * amplitude - progress * speed);\
	    gl_FragColor = mix(texture2D(from, p + offset), texture2D(to, p), progress);\
	  }\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	        "amplitude": { "type": "uniform", "value": 30.0 },
	        "speed": { "type": "uniform", "value": 30.0 }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = waterdrop;
	module.exports = exports["default"];

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var stereoViewerToy = {
	  "title": "StereoViewerToy",
	  "description": "A stereoViewerToy effect. Typically used as a transistion.",
	  "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	  "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform float zoom;\
	uniform float corner_radius;\
	\
	const vec4 black = vec4(0.0, 0.0, 0.0, 1.0);\
	const vec2 c00 = vec2(0.0, 0.0);\
	const vec2 c01 = vec2(0.0, 1.0);\
	const vec2 c11 = vec2(1.0, 1.0);\
	const vec2 c10 = vec2(1.0, 0.0);\
	\
	bool in_corner(vec2 p, vec2 corner, vec2 radius) {\
	  vec2 axis = (c11 - corner) - corner;\
	  p = p - (corner + axis * radius);\
	  p *= axis / radius;\
	  return (p.x > 0.0 && p.y > -1.0) || (p.y > 0.0 && p.x > -1.0) || dot(p, p) < 1.0;\
	}\
	\
	bool test_rounded_mask(vec2 p, vec2 corner_size) {\
	  return\
	      in_corner(p, c00, corner_size) &&\
	      in_corner(p, c01, corner_size) &&\
	      in_corner(p, c10, corner_size) &&\
	      in_corner(p, c11, corner_size);\
	}\
	\
	float dis_corner(vec2 p, vec2 corner, vec2 radius) {\
	  vec2 axis = (c11 - corner) - corner;\
	  p = p - (corner + axis * radius);\
	  p *= axis / radius;\
	\
	  const float blur = 16.0;\
	  vec2 step = vec2(1.0)/resolution;\
	  float sblur = min(step.x, step.y)*blur;\
	  float alpha = ((p.x > 0.0 && p.y > -1.0) || (p.y > 0.0 && p.x > -1.0) || dot(p, p) < 1.0)?1.0:-1.0;\
	  if (p.x > 0.0 && p.y > -1.0 && p.y < -(1.0-sblur)) {\
	    alpha = (1.0 + p.y)/sblur;\
	  }\
	\
	  if (p.y > 0.0 && p.x > -1.0 && p.x < -(1.0-sblur)) {\
	    alpha = (1.0 + p.x)/(sblur);\
	  }\
	\
	  const float PI = 3.14159265358979323846;\
	\
	  float d = dot(p, p);\
	  float m = sblur/1.41421356;\
	  float angle = atan(p.y, p.x);\
	  if (d < 1.0 && d > (1.0-m) && angle < -PI/2.0) {\
	    alpha = (1.0-d)/m;\
	  }\
	\
	  return alpha;\
	}\
	\
	float test_rounded(vec2 p, vec2 corner_size) {\
	      float alpha0 = dis_corner(p, c00, corner_size);\
	      float alpha1 = dis_corner(p, c01, corner_size);\
	      float alpha2 = dis_corner(p, c10, corner_size);\
	      float alpha3 = dis_corner(p, c11, corner_size);\
	      if (alpha0 < 0.0 || alpha1 < 0.0 || alpha2 < 0.0 || alpha3 < 0.0) {\
	        return -1.0;\
	      }\
	\
	      return alpha0*alpha1*alpha2*alpha3;\
	}\
	\
	vec4 screen(vec4 a, vec4 b) {\
	  return 1.0 - (1.0 - a) * (1.0 -b);\
	}\
	\
	vec4 unscreen(vec4 c) {\
	  return 1.0 - sqrt(1.0 - c);\
	}\
	\
	vec4 sample_with_corners(sampler2D tex, vec2 p, vec2 corner_size) {\
	  p = (p - 0.5) / zoom + 0.5;\
	  \
	  float alpha = test_rounded(p, corner_size);\
	  if (alpha < 0.0) {\
	    return black;\
	  }\
	  vec4 color = mix(black, texture2D(tex, p), alpha);\
	  return unscreen(color);\
	}\
	\
	vec4 simple_sample_with_corners(sampler2D tex, vec2 p, vec2 corner_size, float zoom_amt) {\
	  p = (p - 0.5) / (1.0 - zoom_amt + zoom * zoom_amt) + 0.5;\
	  \
	  float alpha = test_rounded(p, corner_size);\
	  if (alpha < 0.0) {\
	    return black;\
	  }\
	  return mix(black, texture2D(tex, p), alpha);\
	}\
	\
	mat3 rotate2d(float angle, float aspect) {\
	  float s = sin(angle);\
	  float c = cos(angle);\
	  return mat3(\
	    c, s ,0.0,\
	    -s, c, 0.0,\
	    0.0, 0.0, 1.0);\
	}\
	\
	mat3 translate2d(float x, float y) {\
	  return mat3(\
	    1.0, 0.0, 0,\
	    0.0, 1.0, 0,\
	    -x, -y, 1.0);\
	}\
	\
	mat3 scale2d(float x, float y) {\
	  return mat3(\
	    x, 0.0, 0,\
	    0.0, y, 0,\
	    0, 0, 1.0);\
	}\
	\
	vec4 get_cross_rotated(vec3 p3, float angle, vec2 corner_size, float aspect) {\
	  angle = angle * angle;\
	  angle /= 2.4;\
	\
	  mat3 center_and_scale = translate2d(-0.5, -0.5) * scale2d(1.0, aspect);\
	  mat3 unscale_and_uncenter = scale2d(1.0, 1.0/aspect) * translate2d(0.5,0.5);\
	  mat3 slide_left = translate2d(-2.0,0.0);\
	  mat3 slide_right = translate2d(2.0,0.0);\
	  mat3 rotate = rotate2d(angle, aspect);\
	\
	  mat3 op_a = center_and_scale * slide_right * rotate * slide_left * unscale_and_uncenter;\
	  mat3 op_b = center_and_scale * slide_left * rotate * slide_right * unscale_and_uncenter;\
	\
	  vec4 a = sample_with_corners(from, (op_a * p3).xy, corner_size);\
	  vec4 b = sample_with_corners(from, (op_b * p3).xy, corner_size);\
	\
	  return screen(a, b);\
	}\
	\
	vec4 get_cross_masked(vec3 p3, float angle, vec2 corner_size, float aspect) {\
	  angle = 1.0 - angle;\
	  angle = angle * angle;\
	  angle /= 2.4;\
	\
	  vec4 img;\
	\
	  mat3 center_and_scale = translate2d(-0.5, -0.5) * scale2d(1.0, aspect);\
	  mat3 unscale_and_uncenter = scale2d(1.0 / zoom, 1.0 / (zoom * aspect)) * translate2d(0.5,0.5);\
	  mat3 slide_left = translate2d(-2.0,0.0);\
	  mat3 slide_right = translate2d(2.0,0.0);\
	  mat3 rotate = rotate2d(angle, aspect);\
	\
	  mat3 op_a = center_and_scale * slide_right * rotate * slide_left * unscale_and_uncenter;\
	  mat3 op_b = center_and_scale * slide_left * rotate * slide_right * unscale_and_uncenter;\
	\
	  float alpha_a = test_rounded((op_a * p3).xy, corner_size);\
	  float alpha_b = test_rounded((op_b * p3).xy, corner_size);\
	  if (alpha_a > 0.0 || alpha_b > 0.0) {\
	    img = sample_with_corners(to, p3.xy, corner_size);\
	    vec4 color = screen(alpha_a > 0.0 ? mix(black, img, alpha_a) : black, alpha_b > 0.0 ? mix(black, img, alpha_b) : black);\
	    return color;\
	  }\
	  else {\
	    return black;\
	  }\
	}\
	\
	void main() {\
	  float a;\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  vec3 p3 = vec3(p.xy, 1.0); \
	\
	  float aspect = resolution.x / resolution.y;\
	  vec2 corner_size = vec2(corner_radius / aspect, corner_radius);\
	\
	  if (progress <= 0.0) {\
	    gl_FragColor = texture2D(from, p);\
	  } else if (progress < 0.1) {\
	    a = progress / 0.1;\
	    gl_FragColor = simple_sample_with_corners(from, p, corner_size * a, a);\
	  } else if (progress < 0.48) {\
	    a = (progress - 0.1)/0.38;\
	    gl_FragColor = get_cross_rotated(p3, a, corner_size, aspect);\
	  } else if (progress < 0.9) {\
	    gl_FragColor = get_cross_masked(p3, (progress - 0.52)/0.38, corner_size, aspect);\
	  } else if (progress < 1.0) {\
	    a = (1.0 - progress) / 0.1;\
	    gl_FragColor = simple_sample_with_corners(to, p, corner_size * a, a);\
	  } else {\
	    gl_FragColor = texture2D(to, p);\
	  }\
	}",
	  "properties": {
	    "progress": { "type": "uniform", "value": 0.0 },
	    "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	    "zoom": { "type": "uniform", "value": 0.88 },
	    "corner_radius": { "type": "uniform", "value": 0.22 }
	  },
	  "inputs": ["from", "to"]
	};
	
	exports["default"] = stereoViewerToy;
	module.exports = exports["default"];

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var wipeup = {
	    "title": "Wipeup",
	    "description": "A wipeup effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  vec4 a = texture2D(from, p);\
	  vec4 b = texture2D(to, p);\
	  gl_FragColor = mix(a, b, step(0.0 + p.y, progress));\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = wipeup;
	module.exports = exports["default"];

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var circlecrop = {
	    "title": "Circlecrop",
	    "description": "A v effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	float maxRadius = resolution.x + resolution.y;\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  \
	  float distX = gl_FragCoord.x - resolution.x / 2.0;\
	  float distY = gl_FragCoord.y - resolution.y / 2.0;\
	  float dist = sqrt(distX * distX + distY * distY);\
	  \
	  float step = 2.0 * abs(progress - 0.5);\
	  step = step * step * step;\
	  \
	  if (dist < step * maxRadius)\
	  {\
	      const float blurRadius = 8.0; \
	    float alpha = 1.0;\
	    float bStep = max(step, pow(0.6,3.0));\
	    if (dist > step * maxRadius - bStep*blurRadius ) {\
	      alpha = (step * maxRadius - dist)/(bStep*blurRadius);\
	    }\
	    \
	    if (progress < 0.5)\
	      gl_FragColor = mix(vec4(0.0, 0.0, 0.0, 1.0),texture2D(from, p), alpha);\
	    else\
	      gl_FragColor = texture2D(to, p);\
	  }\
	  else\
	    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = circlecrop;
	module.exports = exports["default"];

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var reveal = {
	    "title": "Reveal",
	    "description": "A reveal effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D to, from;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  vec4 a = texture2D(from, p);\
	  vec4 b = texture2D(to, p);\
	  gl_FragColor = mix(a, b, step(1.0 - p.x, progress));\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = reveal;
	module.exports = exports["default"];

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var puzzleright = {
	  "title": "Puzzleright",
	  "description": "A puzzleright effect. Typically used as a transistion.",
	  "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	  "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from;\
	uniform sampler2D to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform vec2 size;\
	uniform float pause;\
	uniform float dividerSize;\
	\
	const vec4 dividerColor = vec4(0.0, 0.0, 0.0, 1.0);\
	const float randomOffset = 0.1;\
	 \
	float rand (vec2 co) {\
	  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\
	}\
	\
	float getDelta(vec2 p) {\
	  vec2 rectanglePos = floor(vec2(size) * p);\
	  vec2 rectangleSize = vec2(1.0 / vec2(size).x, 1.0 / vec2(size).y);\
	  \
	  float top = rectangleSize.y * (rectanglePos.y + 1.0);\
	  float bottom = rectangleSize.y * rectanglePos.y;\
	  float left = rectangleSize.x * rectanglePos.x;\
	  float right = rectangleSize.x * (rectanglePos.x + 1.0);\
	  \
	  float minX = min(abs(p.x - left), abs(p.x - right));\
	  float minY = min(abs(p.y - top), abs(p.y - bottom));\
	  return min(minX, minY);\
	}\
	\
	float getDividerSize() {\
	  vec2 rectangleSize = vec2(1.0 / vec2(size).x, 1.0 / vec2(size).y);\
	  return min(rectangleSize.x, rectangleSize.y) * dividerSize;\
	}\
	\
	void showDivider (vec2 p) {\
	  float currentProg = progress / pause;\
	\
	  float a = 1.0;\
	  if(getDelta(p) < getDividerSize()) {\
	    a = 1.0 - currentProg;\
	  }\
	  \
	  gl_FragColor = mix(dividerColor, texture2D(from, p), a);\
	}\
	\
	void hideDivider (vec2 p) {\
	  float currentProg = (progress - 1.0 + pause) / pause;\
	  \
	  float a = 1.0;\
	  if(getDelta(p) < getDividerSize()) {\
	    a = currentProg;\
	  }\
	\
	  gl_FragColor = mix(dividerColor, texture2D(to, p), a);\
	}\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  \
	  if(progress < pause) {\
	    showDivider(p);\
	  } else if(progress < 1.0 - pause){\
	    if(getDelta(p) < getDividerSize()) {\
	      gl_FragColor = dividerColor;\
	    } else {\
	      float currentProg = (progress - pause) / (1.0 - pause * 2.0);\
	      vec2 q = p;\
	      vec2 rectanglePos = floor(vec2(size) * q);\
	      \
	      float r = rand(rectanglePos) - randomOffset;\
	      float cp = smoothstep(0.0, 1.0 - r, currentProg);\
	    \
	      float rectangleSize = 1.0 / vec2(size).x;\
	      float delta = rectanglePos.x * rectangleSize;\
	      float offset = rectangleSize / 2.0 + delta;\
	      \
	      p.x = (p.x - offset)/abs(cp - 0.5)*0.5 + offset;\
	      vec4 a = texture2D(from, p);\
	      vec4 b = texture2D(to, p);\
	      \
	      float s = step(abs(vec2(size).x * (q.x - delta) - 0.5), abs(cp - 0.5));\
	      gl_FragColor = vec4(mix(b, a, step(cp, 0.5)).rgb * s, 1.0);\
	    }\
	  } else {\
	    hideDivider(p);\
	  }\
	}",
	  "properties": {
	    "progress": { "type": "uniform", "value": 0.0 },
	    "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	    "size": { "type": "uniform", "value": [4.0, 4.0] },
	    "pause": { "type": "uniform", "value": 0.1 },
	    "dividerSize": { "type": "uniform", "value": 0.05 }
	  },
	  "inputs": ["from", "to"]
	};
	
	exports["default"] = puzzleright;
	module.exports = exports["default"];

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var warpfade = {
	    "title": "Warpfade",
	    "description": "A warpfade effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	void main() {\
	  float x = progress;\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  x=smoothstep(.0,1.0,(x*2.0+p.x-1.0));\
	  gl_FragColor = mix(texture2D(from, (p-.5)*(1.-x)+.5), texture2D(to, (p-.5)*x+.5), progress);\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = warpfade;
	module.exports = exports["default"];

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var bounce = {
	  "title": "Bounce",
	  "description": "A bounce effect. Typically used as a transistion.",
	  "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	  "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform float bounce;\
	uniform float shadow;\
	uniform vec4  shadow_colour;\
	\
	void main() \
	{\
	  vec2  p = gl_FragCoord.xy / resolution.xy;\
	  float phase = progress * 3.14159265358 * bounce;\
	  float y = (abs(cos(phase))) * (1.0-sin(progress * (3.14159265358/2.0)));\
	\
	  if(progress == 0.0) {\
	    gl_FragColor = texture2D(from,p);\
	  }\
	  else if(p.y < y)\
	  {\
	    float d = y - p.y;\
	    if(d>shadow) {\
	      gl_FragColor = texture2D(from,p);\
	    }\
	    else\
	    {\
	      float a = ((d/shadow)*shadow_colour.a) + (1.0-shadow_colour.a);\
	      gl_FragColor = mix(shadow_colour,texture2D(from,p),a);\
	    }\
	  }\
	  else\
	    gl_FragColor = texture2D(to,vec2(p.x,p.y-y));\
	  \
	}",
	  "properties": {
	    "progress": { "type": "uniform", "value": 0.0 },
	    "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	    "bounce": { "type": "uniform", "value": 2.5 },
	    "shadow": { "type": "uniform", "value": 0.075 },
	    "shadow_colour": { "type": "uniform", "value": [0.0, 0.0, 0.0, 0.8] }
	  },
	  "inputs": ["from", "to"]
	};
	
	exports["default"] = bounce;
	module.exports = exports["default"];

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var atmosphericSlidershow = {
	  "title": "AtmosphericSlidershow",
	  "description": "A atmosphericSlidershow effect. Typically used as a transistion.",
	  "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	  "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	\
	vec2 zoom(vec2 uv, float amount)\
	{\
	  return 0.5 + ((uv - 0.5) * amount);	\
	}\
	\
	void main() {\
	  vec2 uv = gl_FragCoord.xy / resolution.xy;\
	  vec2 r =  2.0*vec2(gl_FragCoord.xy - 0.5*resolution.xy)/resolution.y;\
	  float pro = progress / 0.8;\
	  float z = (pro) * 0.2;\
	  float t = 0.0;\
	  \
	  if (progress <= 0.0 ) {\
	        gl_FragColor = texture2D(from, uv);\
	        return;\
	    }\
	  if (progress >= 1.0 ) {\
	        gl_FragColor = texture2D(to, uv);\
	        return;\
	    }\
	\
	const float blurRadius = 6.0;\
	  vec2 step = vec2(1.0)/resolution.xy;\
	  float BR = min(step.x, step.y)*blurRadius;\
	  float alpha = 1.0;\
	  float lengthR = length(r);\
	\
	  if (pro > 1.0)\
	  {\
	    z = 0.2 + (pro - 1.0) * 5.;\
	    t = clamp((progress - 0.8) / 0.07,0.0,1.0);\
	  }\
	  if (lengthR < 0.5+z)\
	  {\
	  }\
	  else if (lengthR < 0.8+z*1.5)\
	  {\
	      vec2 bgUV = uv;\
	      uv = zoom(uv, 1.0 - 0.15 * pro);\
	      float t1 = t;\
	      float t2 = t * 0.5;\
	      t = t * 0.5;\
	      \
	      if (lengthR < 0.5+z + BR){\
	        alpha = (0.5+z + BR - lengthR)/BR;\
	        if (t > 0.0) {\
	          vec4 bgcolor = mix(texture2D(from, bgUV), texture2D(to, bgUV), t1);\
	          vec4 fgcolor = mix(texture2D(from, uv), texture2D(to, uv), t2);\
	          gl_FragColor = mix(fgcolor, bgcolor, alpha);\
	          return;\
	        }\
	        \
	        vec4 bgcolor = mix(texture2D(from, bgUV), texture2D(to, bgUV), t);\
	        vec4 fgcolor = mix(texture2D(from, uv), texture2D(to, uv), t);\
	        gl_FragColor = mix(fgcolor, bgcolor, alpha);\
	        return;\
	      }\
	  }\
	  else if (lengthR < 1.2+z*2.5)\
	  {\
	      vec2 bgUV = zoom(uv, 1.0 - 0.15 * pro);\
	      uv = zoom(uv, 1.0 - 0.2 * pro);\
	      float t1 = t*0.5;\
	      float t2 = t * 0.2;\
	      t = t * 0.2;\
	      \
	      if (lengthR < 0.8+z*1.5 + BR) {\
	        alpha = (0.8+z*1.5 + BR - lengthR)/BR;\
	        if (t > 0.0) {\
	          vec4 bgcolor = mix(texture2D(from, bgUV), texture2D(to, bgUV), t1);\
	          vec4 fgcolor = mix(texture2D(from, uv), texture2D(to, uv), t2);\
	          gl_FragColor = mix(fgcolor, bgcolor, alpha);\
	          return;\
	        }\
	        vec4 bgcolor = mix(texture2D(from, bgUV), texture2D(to, bgUV), t);\
	        vec4 fgcolor = mix(texture2D(from, uv), texture2D(to, uv), t);\
	        gl_FragColor = mix(fgcolor, bgcolor, alpha);\
	        return;\
	      }\
	  }\
	  else {\
	      vec2 bgUV = zoom(uv, 1.0 - 0.2 * pro);\
	      uv = zoom(uv, 1.0 - 0.25 * pro);\
	\
	      if (lengthR < 1.2+z*2.5 + BR) {\
	        alpha = (1.2+z*2.5 + BR - lengthR)/BR;\
	        vec4 bgcolor = mix(texture2D(from, bgUV), texture2D(to, bgUV), t);\
	        vec4 fgcolor = mix(texture2D(from, uv), texture2D(to, uv), t);\
	        gl_FragColor = mix(fgcolor, bgcolor, alpha);\
	        return;\
	      }\
	    }\
	    \
	  gl_FragColor = mix(texture2D(from, uv), texture2D(to, uv), t);\
	}",
	  "properties": {
	    "progress": { "type": "uniform", "value": 0.0 },
	    "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	  },
	  "inputs": ["from", "to"]
	};
	
	exports["default"] = atmosphericSlidershow;
	module.exports = exports["default"];

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var luminancemelt = {
	  "title": "Luminancemelt",
	  "description": "A luminancemelt effect. Typically used as a transistion.",
	  "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	  "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	uniform bool direction;\
	uniform float l_threshold;\
	uniform bool above;\
	\
	float rand(vec2 co){\
	  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\
	}\
	\
	vec3 mod289(vec3 x) {\
	  return x - floor(x * (1.0 / 289.0)) * 289.0;\
	}\
	\
	vec2 mod289(vec2 x) {\
	  return x - floor(x * (1.0 / 289.0)) * 289.0;\
	}\
	\
	vec3 permute(vec3 x) {\
	  return mod289(((x*34.0)+1.0)*x);\
	}\
	\
	float snoise(vec2 v)\
	  {\
	  const vec4 C = vec4(0.211324865405187,\
	                      0.366025403784439,\
	                     -0.577350269189626,\
	                      0.024390243902439);\
	\
	  vec2 i  = floor(v + dot(v, C.yy) );\
	  vec2 x0 = v -   i + dot(i, C.xx);\
	\
	  vec2 i1;\
	  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\
	  vec4 x12 = x0.xyxy + C.xxzz;\
	  x12.xy -= i1;\
	\
	  i = mod289(i);\
	  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\
			+ i.x + vec3(0.0, i1.x, 1.0 ));\
	\
	  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\
	  m = m*m ;\
	  m = m*m ;\
	\
	  vec3 x = 2.0 * fract(p * C.www) - 1.0;\
	  vec3 h = abs(x) - 0.5;\
	  vec3 ox = floor(x + 0.5);\
	  vec3 a0 = x - ox;\
	\
	  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\
	  vec3 g;\
	  g.x  = a0.x  * x0.x  + h.x  * x0.y;\
	  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\
	  return 130.0 * dot(m, g);\
	}\
	\
	float luminance(vec4 color){\
	  return color.r*0.299+color.g*0.587+color.b*0.114;\
	}\
	\
	vec2 center = vec2(1.0, direction);\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  if (progress == 0.0) {\
	    gl_FragColor = texture2D(from, p);\
	  } else if (progress == 1.0) {\
	    gl_FragColor = texture2D(to, p);\
	  } else {\
	    float x = progress;\
	    float dist = distance(center, p)- progress*exp(snoise(vec2(p.x, 0.0)));\
	    float r = x - rand(vec2(p.x, 0.1));\
	    float m;\
	    if(above){\
	     m = dist <= r && luminance(texture2D(from, p))>l_threshold ? 1.0 : (progress*progress*progress);\
	    }\
	    else{\
	     m = dist <= r && luminance(texture2D(from, p))<l_threshold ? 1.0 : (progress*progress*progress);  \
	    }\
	    gl_FragColor = mix(texture2D(from, p), texture2D(to, p), m);    \
	  }\
	}",
	  "properties": {
	    "progress": { "type": "uniform", "value": 0.0 },
	    "resolution": { "type": "uniform", "value": [480.0, 270.0] },
	    "direction": { "type": "uniform", "value": 1.0 },
	    "l_threshold": { "type": "uniform", "value": 0.5 },
	    "above": { "type": "uniform", "value": 0.0 }
	  },
	  "inputs": ["from", "to"]
	};
	
	exports["default"] = luminancemelt;
	module.exports = exports["default"];

/***/ }),
/* 80 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var crosshatch = {
	  "title": "Crosshatch",
	  "description": "A crosshatch effect. Typically used as a transistion.",
	  "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	  "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from;\
	uniform sampler2D to;\
	uniform float progress;\
	uniform vec2 resolution;\
	 \
	const vec2 center = vec2(0.5, 0.5);\
	\
	float quadraticInOut(float t) {\
	  float p = 2.0 * t * t;\
	  return t < 0.5 ? p : -p + (4.0 * t) - 1.0;\
	}\
	\
	float rand(vec2 co) {\
	  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\
	}\
	\
	\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  \
	  if (progress == 0.0) {\
	    gl_FragColor = texture2D(from, p);\
	  } else if (progress == 1.0) {\
	    gl_FragColor = texture2D(to, p);\
	  } else {\
	    float x = progress;\
	    float dist = distance(center, p);\
	    float r = x - min(rand(vec2(p.y, 0.0)), rand(vec2(0.0, p.x)));\
	    float m = dist <= r ? 1.0 : 0.0;\
	    gl_FragColor = mix(texture2D(from, p), texture2D(to, p), m);    \
	  }\
	  \
	}",
	  "properties": {
	    "progress": { "type": "uniform", "value": 0.0 },
	    "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	  },
	  "inputs": ["from", "to"]
	};
	
	exports["default"] = crosshatch;
	module.exports = exports["default"];

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var fadeinout = {
	    "title": "Fade Inout",
	    "description": "A fade inout effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	    precision mediump float;\
	    uniform sampler2D from, to;\
	uniform float progress;\
	uniform vec2 resolution;\
	void main() {\
	  vec2 p = gl_FragCoord.xy / resolution.xy;\
	  gl_FragColor = mix(texture2D(from, p, 0.0), texture2D(to, p, 0.0), progress);\
	}",
	    "properties": {
	        "progress": { "type": "uniform", "value": 0.0 },
	        "resolution": { "type": "uniform", "value": [480.0, 270.0] }
	    },
	    "inputs": ["from", "to"]
	};
	
	exports["default"] = fadeinout;
	module.exports = exports["default"];

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var saturation = {
	    "title": "Saturation",
	    "description": "Change images's saturation (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 textureCoordinate;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                textureCoordinate = a_texCoord;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            varying highp vec2 textureCoordinate;\
	            uniform sampler2D u_image;\
	            uniform lowp float saturation;\
	            const mediump vec3 luminanceWeighting = vec3(0.2125, 0.7154, 0.0721);\
	            void main()\
	            {\
	                lowp vec4 textureColor = texture2D(u_image, textureCoordinate);\
	                lowp float luminance = dot(textureColor.rgb, luminanceWeighting);\
	                lowp vec3 greyScaleColor = vec3(luminance);\
	                \
	                gl_FragColor = vec4(mix(greyScaleColor, textureColor.rgb, saturation), textureColor.w);\
	            }",
	    "properties": {
	        "saturation": { "type": "uniform", "value": 0.65 }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = saturation;
	module.exports = exports["default"];

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var gaussianHBlur = {
	    "title": "GaussianHBlur",
	    "description": "images horizontal gaussian blur (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            uniform float texelWidthOffset;\
	            uniform float texelHeightOffset;\
	            varying vec2 blurCoordinates[29];\
	            \
	            void main()\
	            {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                vec2 singleStepOffset = vec2(texelWidthOffset, texelHeightOffset);\
	                blurCoordinates[0] = a_texCoord.xy - singleStepOffset * 14.000000;\
	                blurCoordinates[1] = a_texCoord.xy - singleStepOffset * 13.000000;\
	                blurCoordinates[2] = a_texCoord.xy - singleStepOffset * 12.000000;\
	                blurCoordinates[3] = a_texCoord.xy - singleStepOffset * 11.000000;\
	                blurCoordinates[4] = a_texCoord.xy - singleStepOffset * 10.000000;\
	                blurCoordinates[5] = a_texCoord.xy - singleStepOffset * 9.000000;\
	                blurCoordinates[6] = a_texCoord.xy - singleStepOffset * 8.000000;\
	                blurCoordinates[7] = a_texCoord.xy - singleStepOffset * 7.000000;\
	                blurCoordinates[8] = a_texCoord.xy - singleStepOffset * 6.000000;\
	                blurCoordinates[9] = a_texCoord.xy - singleStepOffset * 5.000000;\
	                blurCoordinates[10] = a_texCoord.xy - singleStepOffset * 4.000000;\
	                blurCoordinates[11] = a_texCoord.xy - singleStepOffset * 3.000000;\
	                blurCoordinates[12] = a_texCoord.xy - singleStepOffset * 2.000000;\
	                blurCoordinates[13] = a_texCoord.xy - singleStepOffset * 1.000000;\
	                blurCoordinates[14] = a_texCoord.xy;\
	                blurCoordinates[15] = a_texCoord.xy + singleStepOffset * 1.000000;\
	                blurCoordinates[16] = a_texCoord.xy + singleStepOffset * 2.000000;\
	                blurCoordinates[17] = a_texCoord.xy + singleStepOffset * 3.000000;\
	                blurCoordinates[18] = a_texCoord.xy + singleStepOffset * 4.000000;\
	                blurCoordinates[19] = a_texCoord.xy + singleStepOffset * 5.000000;\
	                blurCoordinates[20] = a_texCoord.xy + singleStepOffset * 6.000000;\
	                blurCoordinates[21] = a_texCoord.xy + singleStepOffset * 7.000000;\
	                blurCoordinates[22] = a_texCoord.xy + singleStepOffset * 8.000000;\
	                blurCoordinates[23] = a_texCoord.xy + singleStepOffset * 9.000000;\
	                blurCoordinates[24] = a_texCoord.xy + singleStepOffset * 10.000000;\
	                blurCoordinates[25] = a_texCoord.xy + singleStepOffset * 11.000000;\
	                blurCoordinates[26] = a_texCoord.xy + singleStepOffset * 12.000000;\
	                blurCoordinates[27] = a_texCoord.xy + singleStepOffset * 13.000000;\
	                blurCoordinates[28] = a_texCoord.xy + singleStepOffset * 14.000000;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            varying highp vec2 blurCoordinates[29];\
	            \
	            void main()\
	            {\
	                lowp vec4 sum = vec4(0.0);\
	                sum += texture2D(u_image, blurCoordinates[0]) * 0.000772;\
	                sum += texture2D(u_image, blurCoordinates[1]) * 0.001482;\
	                sum += texture2D(u_image, blurCoordinates[2]) * 0.002711;\
	                sum += texture2D(u_image, blurCoordinates[3]) * 0.004724;\
	                sum += texture2D(u_image, blurCoordinates[4]) * 0.007845;\
	                sum += texture2D(u_image, blurCoordinates[5]) * 0.012414;\
	                sum += texture2D(u_image, blurCoordinates[6]) * 0.018716;\
	                sum += texture2D(u_image, blurCoordinates[7]) * 0.026888;\
	                sum += texture2D(u_image, blurCoordinates[8]) * 0.036805;\
	                sum += texture2D(u_image, blurCoordinates[9]) * 0.048005;\
	                sum += texture2D(u_image, blurCoordinates[10]) * 0.059661;\
	                sum += texture2D(u_image, blurCoordinates[11]) * 0.070650;\
	                sum += texture2D(u_image, blurCoordinates[12]) * 0.079718;\
	                sum += texture2D(u_image, blurCoordinates[13]) * 0.085708;\
	                sum += texture2D(u_image, blurCoordinates[14]) * 0.087803;\
	                sum += texture2D(u_image, blurCoordinates[15]) * 0.085708;\
	                sum += texture2D(u_image, blurCoordinates[16]) * 0.079718;\
	                sum += texture2D(u_image, blurCoordinates[17]) * 0.070650;\
	                sum += texture2D(u_image, blurCoordinates[18]) * 0.059661;\
	                sum += texture2D(u_image, blurCoordinates[19]) * 0.048005;\
	                sum += texture2D(u_image, blurCoordinates[20]) * 0.036805;\
	                sum += texture2D(u_image, blurCoordinates[21]) * 0.026888;\
	                sum += texture2D(u_image, blurCoordinates[22]) * 0.018716;\
	                sum += texture2D(u_image, blurCoordinates[23]) * 0.012414;\
	                sum += texture2D(u_image, blurCoordinates[24]) * 0.007845;\
	                sum += texture2D(u_image, blurCoordinates[25]) * 0.004724;\
	                sum += texture2D(u_image, blurCoordinates[26]) * 0.002711;\
	                sum += texture2D(u_image, blurCoordinates[27]) * 0.001482;\
	                sum += texture2D(u_image, blurCoordinates[28]) * 0.000772;\
	                gl_FragColor = sum;\
	            }",
	    "properties": {
	        "texelWidthOffset": { "type": "uniform", "value": 0.002 },
	        "texelHeightOffset": { "type": "uniform", "value": 0.002 }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = gaussianHBlur;
	module.exports = exports["default"];

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var gaussianVBlur = {
	    "title": "GaussianVBlur",
	    "description": "images vertical gaussian blur (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
	    "vertexShader": "\
	        attribute vec2 a_position;\
	        attribute vec2 a_texCoord;\
	        uniform float texelWidthOffset;\
	        uniform float texelHeightOffset;\
	        varying vec2 blurCoordinates[29];\
	        void main()\
	        {\
	            gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	            vec2 singleStepOffset = vec2(texelWidthOffset, -texelHeightOffset);\
	            blurCoordinates[0] = a_texCoord.xy - singleStepOffset * 14.000000;\
	                blurCoordinates[1] = a_texCoord.xy - singleStepOffset * 13.000000;\
	                blurCoordinates[2] = a_texCoord.xy - singleStepOffset * 12.000000;\
	                blurCoordinates[3] = a_texCoord.xy - singleStepOffset * 11.000000;\
	                blurCoordinates[4] = a_texCoord.xy - singleStepOffset * 10.000000;\
	                blurCoordinates[5] = a_texCoord.xy - singleStepOffset * 9.000000;\
	                blurCoordinates[6] = a_texCoord.xy - singleStepOffset * 8.000000;\
	                blurCoordinates[7] = a_texCoord.xy - singleStepOffset * 7.000000;\
	                blurCoordinates[8] = a_texCoord.xy - singleStepOffset * 6.000000;\
	                blurCoordinates[9] = a_texCoord.xy - singleStepOffset * 5.000000;\
	                blurCoordinates[10] = a_texCoord.xy - singleStepOffset * 4.000000;\
	                blurCoordinates[11] = a_texCoord.xy - singleStepOffset * 3.000000;\
	                blurCoordinates[12] = a_texCoord.xy - singleStepOffset * 2.000000;\
	                blurCoordinates[13] = a_texCoord.xy - singleStepOffset * 1.000000;\
	                blurCoordinates[14] = a_texCoord.xy;\
	                blurCoordinates[15] = a_texCoord.xy + singleStepOffset * 1.000000;\
	                blurCoordinates[16] = a_texCoord.xy + singleStepOffset * 2.000000;\
	                blurCoordinates[17] = a_texCoord.xy + singleStepOffset * 3.000000;\
	                blurCoordinates[18] = a_texCoord.xy + singleStepOffset * 4.000000;\
	                blurCoordinates[19] = a_texCoord.xy + singleStepOffset * 5.000000;\
	                blurCoordinates[20] = a_texCoord.xy + singleStepOffset * 6.000000;\
	                blurCoordinates[21] = a_texCoord.xy + singleStepOffset * 7.000000;\
	                blurCoordinates[22] = a_texCoord.xy + singleStepOffset * 8.000000;\
	                blurCoordinates[23] = a_texCoord.xy + singleStepOffset * 9.000000;\
	                blurCoordinates[24] = a_texCoord.xy + singleStepOffset * 10.000000;\
	                blurCoordinates[25] = a_texCoord.xy + singleStepOffset * 11.000000;\
	                blurCoordinates[26] = a_texCoord.xy + singleStepOffset * 12.000000;\
	                blurCoordinates[27] = a_texCoord.xy + singleStepOffset * 13.000000;\
	                blurCoordinates[28] = a_texCoord.xy + singleStepOffset * 14.000000;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            varying highp vec2 blurCoordinates[29];\
	            \
	            void main()\
	            {\
	                lowp vec4 sum = vec4(0.0);\
	                sum += texture2D(u_image, blurCoordinates[0]) * 0.000772;\
	                sum += texture2D(u_image, blurCoordinates[1]) * 0.001482;\
	                sum += texture2D(u_image, blurCoordinates[2]) * 0.002711;\
	                sum += texture2D(u_image, blurCoordinates[3]) * 0.004724;\
	                sum += texture2D(u_image, blurCoordinates[4]) * 0.007845;\
	                sum += texture2D(u_image, blurCoordinates[5]) * 0.012414;\
	                sum += texture2D(u_image, blurCoordinates[6]) * 0.018716;\
	                sum += texture2D(u_image, blurCoordinates[7]) * 0.026888;\
	                sum += texture2D(u_image, blurCoordinates[8]) * 0.036805;\
	                sum += texture2D(u_image, blurCoordinates[9]) * 0.048005;\
	                sum += texture2D(u_image, blurCoordinates[10]) * 0.059661;\
	                sum += texture2D(u_image, blurCoordinates[11]) * 0.070650;\
	                sum += texture2D(u_image, blurCoordinates[12]) * 0.079718;\
	                sum += texture2D(u_image, blurCoordinates[13]) * 0.085708;\
	                sum += texture2D(u_image, blurCoordinates[14]) * 0.087803;\
	                sum += texture2D(u_image, blurCoordinates[15]) * 0.085708;\
	                sum += texture2D(u_image, blurCoordinates[16]) * 0.079718;\
	                sum += texture2D(u_image, blurCoordinates[17]) * 0.070650;\
	                sum += texture2D(u_image, blurCoordinates[18]) * 0.059661;\
	                sum += texture2D(u_image, blurCoordinates[19]) * 0.048005;\
	                sum += texture2D(u_image, blurCoordinates[20]) * 0.036805;\
	                sum += texture2D(u_image, blurCoordinates[21]) * 0.026888;\
	                sum += texture2D(u_image, blurCoordinates[22]) * 0.018716;\
	                sum += texture2D(u_image, blurCoordinates[23]) * 0.012414;\
	                sum += texture2D(u_image, blurCoordinates[24]) * 0.007845;\
	                sum += texture2D(u_image, blurCoordinates[25]) * 0.004724;\
	                sum += texture2D(u_image, blurCoordinates[26]) * 0.002711;\
	                sum += texture2D(u_image, blurCoordinates[27]) * 0.001482;\
	                sum += texture2D(u_image, blurCoordinates[28]) * 0.000772;\
	                gl_FragColor = sum;\
	            }",
	    "properties": {
	        "texelWidthOffset": { "type": "uniform", "value": 0.002 },
	        "texelHeightOffset": { "type": "uniform", "value": 0.002 }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = gaussianVBlur;
	module.exports = exports["default"];

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var luminance = {
	    "title": "Luminance",
	    "description": "Change images's luminance (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 textureCoordinate;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                textureCoordinate = a_texCoord;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            varying highp vec2 textureCoordinate;\
	            uniform sampler2D u_image;\
	            uniform lowp float rangeReduction;\
	            const mediump vec3 luminanceWeighting = vec3(0.2125, 0.7154, 0.0721);\
	            void main()\
	            {\
	                lowp vec4 textureColor = texture2D(u_image, textureCoordinate);\
	                mediump float luminance = dot(textureColor.rgb, luminanceWeighting);\
	                mediump float luminanceRatio = ((0.5 - luminance) * rangeReduction);\
	                \
	                gl_FragColor = vec4((textureColor.rgb) + (luminanceRatio), textureColor.w);\
	            }",
	    "properties": {
	        "rangeReduction": { "type": "uniform", "value": 0.5 }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = luminance;
	module.exports = exports["default"];

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var glassblur = {
	    "title": "Mosaic Glassblur",
	    "description": "Change images's Mosaic Glassblur (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 textureCoordinate;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                textureCoordinate = a_texCoord;\
	            }",
	    "fragmentShader": "\
	            precision highp float;\
	            varying highp vec2 textureCoordinate;\
	            uniform sampler2D u_image_a;\
	            uniform sampler2D u_image_b;\
	            uniform highp vec4 left;\
	            uniform highp vec4 right;\
	            uniform highp vec4 leftCropRect;\
	            uniform highp vec4 rightCropRect;\
	            uniform highp vec4 centerRect;\
	            uniform highp vec4 mosaicRect;\
	            uniform float texelWidthOffset;\
	            uniform float texelHeightOffset;\
	            uniform lowp float mosaicStrength;\
	            \
	            bool inLeftBounds(vec2 p)\
	            {\
	                return ((p.x >= left.x) && (p.x <= left.x+left.z) && (p.y >= left.y) && (p.y <= left.y+left.w));\
	            }\
	            \
	            bool inRightBounds(vec2 p)\
	            {\
	                return ((p.x >= right.x) && (p.x <= right.x+right.z) && (p.y >= right.y) && (p.y <= right.y+right.w));\
	            }\
	            bool inMosaicBounds(vec2 p)\
	            {\
	                return ((p.x >= mosaicRect.x) && (p.x <= mosaicRect.x+mosaicRect.z) && (p.y <= 1.0-mosaicRect.y) && (p.y >= 1.0-mosaicRect.y-mosaicRect.w));\
	            }\
	            vec4 blurAtPoint(vec2 texCoord)\
	            {\
	                vec4 color;\
	                if (inLeftBounds(texCoord)) {\
	                    vec2 p = (texCoord.xy - left.xy)/left.zw * leftCropRect.zw + leftCropRect.xy;\
	                    color = texture2D(u_image_b, p);\
	                }\
	                else if (inRightBounds(texCoord)) {\
	                    vec2 p = (texCoord.xy - right.xy)/right.zw * rightCropRect.zw + rightCropRect.xy;\
	                    color = texture2D(u_image_b, p);\
	                }\
	                else {\
	                    vec2 p = (texCoord.xy-centerRect.xy)/centerRect.zw;\
	                    color = texture2D(u_image_b, p);\
	                }\
	                return color;\
	            }\
	            vec4 outputAtPoint(vec2 texCoord)\
	            {\
	                vec4 color;\
	                if (inLeftBounds(texCoord)) {\
	                    vec2 p = (texCoord.xy - left.xy)/left.zw * leftCropRect.zw + leftCropRect.xy;\
	                    color = texture2D(u_image_b, p);\
	                }\
	                else if (inRightBounds(texCoord)) {\
	                    vec2 p = (texCoord.xy - right.xy)/right.zw * rightCropRect.zw + rightCropRect.xy;\
	                    color = texture2D(u_image_b, p);\
	                }\
	                else {\
	                    vec2 p = (texCoord.xy-centerRect.xy)/centerRect.zw;\
	                    color = texture2D(u_image_a, p);\
	                }\
	                return color;\
	            }\
	            \
	            void main()\
	            {\
	                gl_FragColor = outputAtPoint(textureCoordinate);\
	                \
	                if (inMosaicBounds(textureCoordinate)) {\
	                    if (mosaicStrength < 0.5) {\
	                        float strength = mosaicStrength*0.3/0.5+0.7;\
	                        gl_FragColor = outputAtPoint(textureCoordinate)*(1.0-strength) + blurAtPoint(textureCoordinate)*strength;\
	                    }\
	                    else {\
	                        vec2 hStep = vec2(texelWidthOffset, texelHeightOffset);\
	                        vec2 vStep = vec2(texelWidthOffset, -texelHeightOffset);\
	                        float strength = (mosaicStrength-0.5)/0.5;\
	                        vec4 sum = blurAtPoint(textureCoordinate);\
	                        float sumweight = 1.0;\
	                        for (float step = -14.0;step <= 14.0; step += 1.0) {\
	                            vec2 hCoord = sign(step)*(abs(step)+1.0)*hStep;\
	                            vec2 vCoord = sign(step)*(abs(step)+1.0)*vStep;\
	                            sum += blurAtPoint(textureCoordinate+hCoord);\
	                            sum += blurAtPoint(textureCoordinate+vCoord);\
	                            sumweight += 2.0;\
	                        }\
	                        sum /= sumweight;\
	                        gl_FragColor = blurAtPoint(textureCoordinate)*(1.0-strength) + sum*strength;\
	                    }\
	                }\
	            }",
	    "properties": {
	        "left": { "type": "uniform", "value": [0.0, 0.0, 0.0, 0.0] },
	        "right": { "type": "uniform", "value": [0.0, 0.0, 0.0, 0.0] },
	        "leftCropRect": { "type": "uniform", "value": [0.0, 0.0, 0.0, 0.0] },
	        "rightCropRect": { "type": "uniform", "value": [0.0, 0.0, 0.0, 0.0] },
	        "centerRect": { "type": "uniform", "value": [0.0, 0.0, 1.0, 1.0] },
	        "mosaicRect": { "type": "uniform", "value": [0.0, 0.0, 0.0, 0.0] },
	        "texelWidthOffset": { "type": "uniform", "value": 0.002 },
	        "texelHeightOffset": { "type": "uniform", "value": 0.002 },
	        "mosaicStrength": { "type": "uniform", "value": 1.0 }
	    },
	    "inputs": ["u_image_a", "u_image_b"]
	};
	
	exports["default"] = glassblur;
	module.exports = exports["default"];

/***/ }),
/* 87 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var radiusGaussianHBlur = {
	    "title": "RadiusGaussianHBlur",
	    "description": "images horizontal radius gaussian blur (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 textureCoordinate;\
	            \
	            void main()\
	            {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                textureCoordinate = a_texCoord.xy;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            varying highp vec2 textureCoordinate;\
	            uniform float blurRadius;\
	            uniform highp float texelWidthOffset;\
	            uniform highp float texelHeightOffset;\
	            \
	            const float PI = 3.14159265358979323846;\
	            \
	            void main()\
	            {\
	                lowp vec4 sum = vec4(0.0);\
	                vec2 step = vec2(texelWidthOffset, texelHeightOffset);\
	                float sumWeight = 0.0;\
	                float sigma = 0.3*((blurRadius*2.0-1.0)*0.5 - 1.0) + 0.8;\
	                for (float i = 0.0; i < 100.0; i+=1.0) {\
	                    float r = -blurRadius + i;\
	                    if (r > blurRadius) {\
	                        break;\
	                    }\
	                    vec2 pos = textureCoordinate + step*r;\
	                    float weight = (1.0 / sqrt(2.0 * PI * pow(sigma, 2.0))) * exp(-pow(abs(r), 2.0) / (2.0 * pow(sigma, 2.0)));\
	                    sum += texture2D(u_image, pos)*weight;\
	                    sumWeight += weight;\
	                }\
	                \
	                gl_FragColor = sum/sumWeight;\
	            }",
	    "properties": {
	        "blurRadius": { "type": "uniform", "value": 7.0 },
	        "texelWidthOffset": { "type": "uniform", "value": 0.002 },
	        "texelHeightOffset": { "type": "uniform", "value": 0.002 }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = radiusGaussianHBlur;
	module.exports = exports["default"];

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var radiusGaussianVBlur = {
	    "title": "RadiusGaussianVBlur",
	    "description": "images horizontal radius gaussian blur (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 textureCoordinate;\
	            \
	            void main()\
	            {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                textureCoordinate = a_texCoord.xy;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            varying highp vec2 textureCoordinate;\
	            uniform float blurRadius;\
	            uniform highp float texelWidthOffset;\
	            uniform highp float texelHeightOffset;\
	            \
	            const float PI = 3.14159265358979323846;\
	            \
	            void main()\
	            {\
	                lowp vec4 sum = vec4(0.0);\
	                vec2 step = vec2(texelWidthOffset, -texelHeightOffset);\
	                float sumWeight = 0.0;\
	                float sigma = 0.3*((blurRadius*2.0-1.0)*0.5 - 1.0) + 0.8;\
	                for (float i = 0.0; i < 100.0; i+=1.0) {\
	                    float r = -blurRadius + i;\
	                    if (r > blurRadius) {\
	                        break;\
	                    }\
	                    vec2 pos = textureCoordinate + step*r;\
	                    float weight = (1.0 / sqrt(2.0 * PI * pow(sigma, 2.0))) * exp(-pow(abs(r), 2.0) / (2.0 * pow(sigma, 2.0)));\
	                    sum += texture2D(u_image, pos)*weight;\
	                    sumWeight += weight;\
	                }\
	                \
	                gl_FragColor = sum/sumWeight;\
	            }",
	    "properties": {
	        "blurRadius": { "type": "uniform", "value": 7.0 },
	        "texelWidthOffset": { "type": "uniform", "value": 0.002 },
	        "texelHeightOffset": { "type": "uniform", "value": 0.002 }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = radiusGaussianVBlur;
	module.exports = exports["default"];

/***/ }),
/* 89 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var cropWidth = {
	    "title": "Crop",
	    "description": "Crop images width (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 textureCoordinate;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                textureCoordinate = a_texCoord;\
	            }",
	    "fragmentShader": "\
	            precision highp float;\
	            varying highp vec2 textureCoordinate;\
	            uniform sampler2D u_image;\
	            uniform highp vec4 cropRect;\
	            uniform highp vec4 dstRect;\
	            \
	            bool inBounds(vec2 p)\
	            {\
	                return ((p.x >= dstRect.x) && (p.x <= dstRect.x+dstRect.z) && (p.y >= dstRect.y) && (p.y <= dstRect.y+dstRect.w));\
	            }\
	            \
	            void main()\
	            {\
	                if (inBounds(textureCoordinate)) {\
	                    vec2 p = (textureCoordinate.xy - dstRect.xy)/dstRect.zw * cropRect.zw + cropRect.xy;\
	                    gl_FragColor= texture2D(u_image, p);\
	                }\
	                else {\
	                    gl_FragColor = vec4(0.0,0.0,0.0,1.0);\
	                }\
	            }",
	    "properties": {
	        "cropRect": { "type": "uniform", "value": [0.0, 0.0, 1.0, 1.0] },
	        "dstRect": { "type": "uniform", "value": [0.0, 0.0, 1.0, 1.0] }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = cropWidth;
	module.exports = exports["default"];

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var opacity = {
	    "title": "Opacity",
	    "description": "Sets the opacity of an input.",
	    "vertexShader": "\n    attribute vec2 a_position;\n    attribute vec2 a_texCoord;\n    varying vec2 v_texCoord;\n    void main() {\n        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n        v_texCoord = a_texCoord;\n    }",
	    "fragmentShader": "\n    precision mediump float;\n    uniform sampler2D u_image;\n    uniform float opacity;\n    varying vec2 v_texCoord;\n    varying float v_opacity;\n    void main(){\n        vec4 color = texture2D(u_image, v_texCoord);\n        color[3] *= opacity;\n        gl_FragColor = color;\n    }",
	    "properties": {
	        "opacity": { "type": "uniform", "value": 0.7 }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = opacity;
	module.exports = exports["default"];

/***/ }),
/* 91 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var lookup = {
	    "title": "Lookup",
	    "description": "A lookup effect. Typically used as a transistion.",
	    "vertexShader": "\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	     precision highp float;\
	 varying highp vec2 v_texCoord;\
	 uniform sampler2D u_image_a;\
	 uniform sampler2D u_image_b;\
	 uniform lowp float intensity;\
	 void main()\
	 {\
	     highp vec4 textureColor = texture2D(u_image_a, v_texCoord);\
	     highp float blueColor = textureColor.b * 63.0;\
	     \
	     highp vec2 quad1;\
	     quad1.y = floor(floor(blueColor) / 8.0);\
	     quad1.x = floor(blueColor) - (quad1.y * 8.0);\
	     \
	     highp vec2 quad2;\
	     quad2.y = floor(ceil(blueColor) / 8.0);\
	     quad2.x = ceil(blueColor) - (quad2.y * 8.0);\
	     \
	     highp vec2 texPos1;\
	     texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.r);\
	     texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.g);\
	     \
	     highp vec2 texPos2;\
	     texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.r);\
	     texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.g);\
	     \
	     lowp vec4 newColor1 = texture2D(u_image_b, texPos1);\
	     lowp vec4 newColor2 = texture2D(u_image_b, texPos2);\
	     \
	     lowp vec4 newColor = mix(newColor1, newColor2, fract(blueColor));\
	     gl_FragColor = mix(textureColor, vec4(newColor.rgb, textureColor.w), intensity);\
	 }",
	    "properties": {
	        "intensity": { "type": "uniform", "value": 1.0 }
	    },
	    "inputs": ["u_image_a", "u_image_b"]
	};
	
	exports["default"] = lookup;
	module.exports = exports["default"];

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var drawimage = {
	    "title": "drawimage",
	    "description": "A drawimage node shader. Typically used as a transistion.",
	    "vertexShader": "\
	    uniform mat4 modelViewProjectionMatrix;\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = modelViewProjectionMatrix*vec4(a_position, 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }",
	    "fragmentShader": "\
	     precision highp float;\
	 varying highp vec2 v_texCoord;\
	 uniform sampler2D u_image_a;\
	 void main()\
	 {\
	     gl_FragColor = texture2D(u_image_a, v_texCoord);\
	 }",
	    "properties": {
	        "modelViewProjectionMatrix": { "type": "uniform", "value": [0.004166667, 0.0, 0.0, 0.0, 0.0, 0.00740741, 0.0, 0.0, 0.0, 0.0, -2.0, 0.0, -1.0, -1.0, 0.0, 1.0] }
	    },
	    "inputs": ["u_image_a"]
	};
	
	exports["default"] = drawimage;
	module.exports = exports["default"];

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var blackpad = {
	    "title": "Black Pad",
	    "description": "Black Pad (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 textureCoordinate;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                textureCoordinate = a_texCoord;\
	            }",
	    "fragmentShader": "\
	    precision highp float;\
	    varying highp vec2 textureCoordinate;\
	    uniform sampler2D u_image_a;\
	    uniform highp vec4 cropRect;\
	    uniform highp vec4 centerRect;\
	    bool inCenterBounds(vec2 p)\
	    {\
	        return ((p.x >= centerRect.x) && (p.x <= centerRect.x+centerRect.z) && (p.y <= 1.0 - centerRect.y) && (p.y >= 1.0 -(centerRect.y+centerRect.w)));\
	    }\
	    void main()\
	    {\
	        if (inCenterBounds(textureCoordinate)) {\
	            vec2 centerTexcoord = vec2((textureCoordinate.x-centerRect.x)/centerRect.z, (textureCoordinate.y-(1.0 -(centerRect.y+centerRect.w)))/centerRect.w);\
	            vec2 cropTexcoord = vec2(centerTexcoord.x*cropRect.z + cropRect.x, centerTexcoord.y*cropRect.w + 1.0 -(cropRect.y+cropRect.w));\
	            gl_FragColor = texture2D(u_image_a, cropTexcoord);\
	        }\
	        else {\
	            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\
	        }\
	    }",
	    "properties": {
	        "cropRect": { "type": "uniform", "value": [0.0, 0.0, 1.0, 1.0] },
	        "centerRect": { "type": "uniform", "value": [0.0, 0.0, 1.0, 1.0] }
	    },
	    "inputs": ["u_image_a"]
	};
	
	exports["default"] = blackpad;
	module.exports = exports["default"];

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var regionmosaic = {
	    "title": "Region Mosaic",
	    "description": "Region Mosaic (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 textureCoordinate;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                textureCoordinate = a_texCoord;\
	            }",
	    "fragmentShader": "\
	        precision highp float;\
	        varying highp vec2 textureCoordinate;\
	        uniform sampler2D u_image_a;\
	        uniform sampler2D u_image_b;\
	        uniform highp vec4 mosaicRect;\
	        uniform highp vec4 mosaicRect2;\
	        uniform highp vec4 mosaicRect3;\
	        uniform highp vec4 mosaicRect4;\
	        uniform highp vec4 mosaicRect5;\
	        uniform highp vec4 mosaicRect6;\
	        bool inMosaicBounds(vec2 p)\
	        {\
	            return ((p.x >= mosaicRect.x) && (p.x <= mosaicRect.x+mosaicRect.z) && (p.y <= 1.0 - mosaicRect.y) && (p.y >= 1.0 - (mosaicRect.y+mosaicRect.w))) || \
	                    ((p.x >= mosaicRect2.x) && (p.x <= mosaicRect2.x+mosaicRect2.z) && (p.y <= 1.0 - mosaicRect2.y) && (p.y >= 1.0 - (mosaicRect2.y+mosaicRect2.w))) || \
	                    ((p.x >= mosaicRect3.x) && (p.x <= mosaicRect3.x+mosaicRect3.z) && (p.y <= 1.0 - mosaicRect3.y) && (p.y >= 1.0 - (mosaicRect3.y+mosaicRect3.w))) || \
	                    ((p.x >= mosaicRect4.x) && (p.x <= mosaicRect4.x+mosaicRect4.z) && (p.y <= 1.0 - mosaicRect4.y) && (p.y >= 1.0 - (mosaicRect4.y+mosaicRect4.w))) || \
	                    ((p.x >= mosaicRect5.x) && (p.x <= mosaicRect5.x+mosaicRect5.z) && (p.y <= 1.0 - mosaicRect5.y) && (p.y >= 1.0 - (mosaicRect5.y+mosaicRect5.w))) || \
	                    ((p.x >= mosaicRect6.x) && (p.x <= mosaicRect6.x+mosaicRect6.z) && (p.y <= 1.0 - mosaicRect6.y) && (p.y >= 1.0 - (mosaicRect6.y+mosaicRect6.w)));\
	        }\
	        \
	        void main()\
	        {\
	            if (inMosaicBounds(textureCoordinate)) {\
	                gl_FragColor = texture2D(u_image_b, textureCoordinate);\
	            }\
	            else {\
	                gl_FragColor = texture2D(u_image_a, textureCoordinate);\
	            }\
	        }",
	    "properties": {
	        "mosaicRect": { "type": "uniform", "value": [0.0, 0.0, 0.0, 0.0] },
	        "mosaicRect2": { "type": "uniform", "value": [0.0, 0.0, 0.0, 0.0] },
	        "mosaicRect3": { "type": "uniform", "value": [0.0, 0.0, 0.0, 0.0] },
	        "mosaicRect4": { "type": "uniform", "value": [0.0, 0.0, 0.0, 0.0] },
	        "mosaicRect5": { "type": "uniform", "value": [0.0, 0.0, 0.0, 0.0] },
	        "mosaicRect6": { "type": "uniform", "value": [0.0, 0.0, 0.0, 0.0] }
	    },
	    "inputs": ["u_image_a", "u_image_b"]
	};
	
	exports["default"] = regionmosaic;
	module.exports = exports["default"];

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var croprect = {
	    "title": "Crop Rect",
	    "description": "Crop Rect (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 textureCoordinate;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                textureCoordinate = a_texCoord;\
	            }",
	    "fragmentShader": "\
	    precision highp float;\
	    varying highp vec2 textureCoordinate;\
	    uniform sampler2D u_image_a;\
	    uniform highp vec4 cropRect;\
	    void main()\
	    {\
	        vec2 cropTexcoord = vec2(textureCoordinate.x*cropRect.z + cropRect.x, textureCoordinate.y*cropRect.w + 1.0 -(cropRect.y+cropRect.w));\
	        gl_FragColor = texture2D(u_image_a, cropTexcoord);\
	    }",
	    "properties": {
	        "cropRect": { "type": "uniform", "value": [0.0, 0.0, 1.0, 1.0] }
	    },
	    "inputs": ["u_image_a"]
	};
	
	exports["default"] = croprect;
	module.exports = exports["default"];

/***/ }),
/* 96 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var gaussianConstHBlur = {
	    "title": "GaussianConstHBlur",
	    "description": "images const horizontal gaussian blur (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            uniform float texelWidthOffset;\
	            uniform float texelHeightOffset;\
	            varying vec2 blurCoordinates[9];\
	            void main()\
	            {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                vec2 singleStepOffset = vec2(texelWidthOffset, texelHeightOffset);\
	                blurCoordinates[0] = a_texCoord.xy - singleStepOffset * 4.000000;\
	                blurCoordinates[1] = a_texCoord.xy - singleStepOffset * 3.000000;\
	                blurCoordinates[2] = a_texCoord.xy - singleStepOffset * 2.000000;\
	                blurCoordinates[3] = a_texCoord.xy - singleStepOffset;\
	                blurCoordinates[4] = a_texCoord.xy;\
	                blurCoordinates[5] = a_texCoord.xy + singleStepOffset;\
	                blurCoordinates[6] = a_texCoord.xy + singleStepOffset * 2.000000;\
	                blurCoordinates[7] = a_texCoord.xy + singleStepOffset * 3.000000;\
	                blurCoordinates[8] = a_texCoord.xy + singleStepOffset * 4.000000;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            varying highp vec2 blurCoordinates[9];\
	            void main()\
	            {\
	                lowp vec4 sum = vec4(0.0);\
	                sum += texture2D(u_image, blurCoordinates[0]) * 0.009214;\
	                sum += texture2D(u_image, blurCoordinates[1]) * 0.039548;\
	                sum += texture2D(u_image, blurCoordinates[2]) * 0.111955;\
	                sum += texture2D(u_image, blurCoordinates[3]) * 0.209023;\
	                sum += texture2D(u_image, blurCoordinates[4]) * 0.257382;\
	                sum += texture2D(u_image, blurCoordinates[5]) * 0.209023;\
	                sum += texture2D(u_image, blurCoordinates[6]) * 0.111955;\
	                sum += texture2D(u_image, blurCoordinates[7]) * 0.039548;\
	                sum += texture2D(u_image, blurCoordinates[8]) * 0.009214;\
	                gl_FragColor = sum;\
	            }",
	    "properties": {
	        "texelWidthOffset": { "type": "uniform", "value": 0.002 },
	        "texelHeightOffset": { "type": "uniform", "value": 0.002 }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = gaussianConstHBlur;
	module.exports = exports["default"];

/***/ }),
/* 97 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var gaussianConstVBlur = {
	    "title": "GaussianConstVBlur",
	    "description": "images const vertical gaussian blur (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
	    "vertexShader": "\
	        attribute vec2 a_position;\
	        attribute vec2 a_texCoord;\
	        uniform float texelWidthOffset;\
	        uniform float texelHeightOffset;\
	        varying vec2 blurCoordinates[9];\
	        void main()\
	        {\
	            gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	            vec2 singleStepOffset = vec2(texelWidthOffset, -texelHeightOffset);\
	            blurCoordinates[0] = a_texCoord.xy - singleStepOffset * 4.000000;\
	            blurCoordinates[1] = a_texCoord.xy - singleStepOffset * 3.000000;\
	            blurCoordinates[2] = a_texCoord.xy - singleStepOffset * 2.000000;\
	            blurCoordinates[3] = a_texCoord.xy - singleStepOffset;\
	            blurCoordinates[4] = a_texCoord.xy;\
	            blurCoordinates[5] = a_texCoord.xy + singleStepOffset;\
	            blurCoordinates[6] = a_texCoord.xy + singleStepOffset * 2.000000;\
	            blurCoordinates[7] = a_texCoord.xy + singleStepOffset * 3.000000;\
	            blurCoordinates[8] = a_texCoord.xy + singleStepOffset * 4.000000;\
	        }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            varying highp vec2 blurCoordinates[9];\
	            \
	            void main()\
	            {\
	                lowp vec4 sum = vec4(0.0);\
	                sum += texture2D(u_image, blurCoordinates[0]) * 0.009214;\
	                sum += texture2D(u_image, blurCoordinates[1]) * 0.039548;\
	                sum += texture2D(u_image, blurCoordinates[2]) * 0.111955;\
	                sum += texture2D(u_image, blurCoordinates[3]) * 0.209023;\
	                sum += texture2D(u_image, blurCoordinates[4]) * 0.257382;\
	                sum += texture2D(u_image, blurCoordinates[5]) * 0.209023;\
	                sum += texture2D(u_image, blurCoordinates[6]) * 0.111955;\
	                sum += texture2D(u_image, blurCoordinates[7]) * 0.039548;\
	                sum += texture2D(u_image, blurCoordinates[8]) * 0.009214;\
	                gl_FragColor = sum;\
	            }",
	    "properties": {
	        "texelWidthOffset": { "type": "uniform", "value": 0.002 },
	        "texelHeightOffset": { "type": "uniform", "value": 0.002 }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = gaussianConstVBlur;
	module.exports = exports["default"];

/***/ }),
/* 98 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var meanHBlur = {
	    "title": "MeanHBlur",
	    "description": "images horizontal mean blur (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 textureCoordinates;\
	            void main()\
	            {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                textureCoordinates = a_texCoord.xy;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            varying highp vec2 textureCoordinates;\
	            uniform highp float texelWidthOffset;\
	            uniform highp float texelHeightOffset;\
	            void main()\
	            {\
	                highp vec4 sum = vec4(0.0);\
	                vec2 step = vec2(texelWidthOffset, texelHeightOffset);\
	                highp float sumWeight = 0.0;\
	                sum += texture2D(u_image, textureCoordinates - step*18.0);\
	                sum += texture2D(u_image, textureCoordinates - step*17.0);\
	                sum += texture2D(u_image, textureCoordinates - step*16.0);\
	                sum += texture2D(u_image, textureCoordinates - step*15.0);\
	                sum += texture2D(u_image, textureCoordinates - step*14.0);\
	                sum += texture2D(u_image, textureCoordinates - step*13.0);\
	                sum += texture2D(u_image, textureCoordinates - step*12.0);\
	                sum += texture2D(u_image, textureCoordinates - step*11.0);\
	                sum += texture2D(u_image, textureCoordinates - step*10.0);\
	                sum += texture2D(u_image, textureCoordinates - step*9.0);\
	                sum += texture2D(u_image, textureCoordinates - step*8.0);\
	                sum += texture2D(u_image, textureCoordinates - step*7.0);\
	                sum += texture2D(u_image, textureCoordinates - step*6.0);\
	                sum += texture2D(u_image, textureCoordinates - step*5.0);\
	                sum += texture2D(u_image, textureCoordinates - step*4.0);\
	                sum += texture2D(u_image, textureCoordinates - step*3.0);\
	                sum += texture2D(u_image, textureCoordinates - step*2.0);\
	                sum += texture2D(u_image, textureCoordinates - step*1.0);\
	                sum += texture2D(u_image, textureCoordinates);\
	                sum += texture2D(u_image, textureCoordinates + step*1.0);\
	                sum += texture2D(u_image, textureCoordinates + step*2.0);\
	                sum += texture2D(u_image, textureCoordinates + step*3.0);\
	                sum += texture2D(u_image, textureCoordinates + step*4.0);\
	                sum += texture2D(u_image, textureCoordinates + step*5.0);\
	                sum += texture2D(u_image, textureCoordinates + step*6.0);\
	                sum += texture2D(u_image, textureCoordinates + step*7.0);\
	                sum += texture2D(u_image, textureCoordinates + step*8.0);\
	                sum += texture2D(u_image, textureCoordinates + step*9.0);\
	                sum += texture2D(u_image, textureCoordinates + step*10.0);\
	                sum += texture2D(u_image, textureCoordinates + step*11.0);\
	                sum += texture2D(u_image, textureCoordinates + step*12.0);\
	                sum += texture2D(u_image, textureCoordinates + step*13.0);\
	                sum += texture2D(u_image, textureCoordinates + step*14.0);\
	                sum += texture2D(u_image, textureCoordinates + step*15.0);\
	                sum += texture2D(u_image, textureCoordinates + step*16.0);\
	                sum += texture2D(u_image, textureCoordinates + step*17.0);\
	                sum += texture2D(u_image, textureCoordinates + step*18.0);\
	                sumWeight = sum.w;\
	                \
	                gl_FragColor = sum/sumWeight;\
	            }",
	    "properties": {
	        "texelWidthOffset": { "type": "uniform", "value": 0.002 },
	        "texelHeightOffset": { "type": "uniform", "value": 0.002 }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = meanHBlur;
	module.exports = exports["default"];

/***/ }),
/* 99 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var meanVBlur = {
	    "title": "MeanVBlur",
	    "description": "images vertical mean blur (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 textureCoordinates;\
	            void main()\
	            {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                textureCoordinates = a_texCoord.xy;\
	            }",
	    "fragmentShader": "\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            varying highp vec2 textureCoordinates;\
	            uniform highp float texelWidthOffset;\
	            uniform highp float texelHeightOffset;\
	            void main()\
	            {\
	                highp vec4 sum = vec4(0.0);\
	                vec2 step = vec2(texelWidthOffset, -texelHeightOffset);\
	                highp float sumWeight = 0.0;\
	                sum += texture2D(u_image, textureCoordinates - step*18.0);\
	                sum += texture2D(u_image, textureCoordinates - step*17.0);\
	                sum += texture2D(u_image, textureCoordinates - step*16.0);\
	                sum += texture2D(u_image, textureCoordinates - step*15.0);\
	                sum += texture2D(u_image, textureCoordinates - step*14.0);\
	                sum += texture2D(u_image, textureCoordinates - step*13.0);\
	                sum += texture2D(u_image, textureCoordinates - step*12.0);\
	                sum += texture2D(u_image, textureCoordinates - step*11.0);\
	                sum += texture2D(u_image, textureCoordinates - step*10.0);\
	                sum += texture2D(u_image, textureCoordinates - step*9.0);\
	                sum += texture2D(u_image, textureCoordinates - step*8.0);\
	                sum += texture2D(u_image, textureCoordinates - step*7.0);\
	                sum += texture2D(u_image, textureCoordinates - step*6.0);\
	                sum += texture2D(u_image, textureCoordinates - step*5.0);\
	                sum += texture2D(u_image, textureCoordinates - step*4.0);\
	                sum += texture2D(u_image, textureCoordinates - step*3.0);\
	                sum += texture2D(u_image, textureCoordinates - step*2.0);\
	                sum += texture2D(u_image, textureCoordinates - step*1.0);\
	                sum += texture2D(u_image, textureCoordinates);\
	                sum += texture2D(u_image, textureCoordinates + step*1.0);\
	                sum += texture2D(u_image, textureCoordinates + step*2.0);\
	                sum += texture2D(u_image, textureCoordinates + step*3.0);\
	                sum += texture2D(u_image, textureCoordinates + step*4.0);\
	                sum += texture2D(u_image, textureCoordinates + step*5.0);\
	                sum += texture2D(u_image, textureCoordinates + step*6.0);\
	                sum += texture2D(u_image, textureCoordinates + step*7.0);\
	                sum += texture2D(u_image, textureCoordinates + step*8.0);\
	                sum += texture2D(u_image, textureCoordinates + step*9.0);\
	                sum += texture2D(u_image, textureCoordinates + step*10.0);\
	                sum += texture2D(u_image, textureCoordinates + step*11.0);\
	                sum += texture2D(u_image, textureCoordinates + step*12.0);\
	                sum += texture2D(u_image, textureCoordinates + step*13.0);\
	                sum += texture2D(u_image, textureCoordinates + step*14.0);\
	                sum += texture2D(u_image, textureCoordinates + step*15.0);\
	                sum += texture2D(u_image, textureCoordinates + step*16.0);\
	                sum += texture2D(u_image, textureCoordinates + step*17.0);\
	                sum += texture2D(u_image, textureCoordinates + step*18.0);\
	                sumWeight = sum.w;\
	                \
	                gl_FragColor = sum/sumWeight;\
	            }",
	    "properties": {
	        "texelWidthOffset": { "type": "uniform", "value": 0.002 },
	        "texelHeightOffset": { "type": "uniform", "value": 0.002 }
	    },
	    "inputs": ["u_image"]
	};
	
	exports["default"] = meanVBlur;
	module.exports = exports["default"];

/***/ }),
/* 100 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var cropblack = {
	    "title": "Crop Black",
	    "description": "Crop Black Pad (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
	    "vertexShader": "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 textureCoordinate;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                textureCoordinate = a_texCoord;\
	            }",
	    "fragmentShader": "\
	    precision highp float;\
	    varying highp vec2 textureCoordinate;\
	    uniform sampler2D u_image_a;\
	    uniform highp vec4 cropRect;\
	    uniform highp vec4 centerRect;\
	    bool inCenterBounds(vec2 p)\
	    {\
	      return ((p.x >= centerRect.x) && (p.x <= centerRect.x+centerRect.z) && (p.y >= 1.0 - (centerRect.y+centerRect.w)) && (p.y <= 1.0 - centerRect.y));\
	    }\
	    void main()\
	    {\
	        if (inCenterBounds(textureCoordinate)) {\
	            vec2 centerTexcoord = vec2((textureCoordinate.x-centerRect.x)/centerRect.z, (textureCoordinate.y-(1.0 - (centerRect.y+centerRect.w)))/centerRect.w);\
	            vec2 texcoord = vec2(cropRect.x + cropRect.z*centerTexcoord.x, 1.0 - (cropRect.y+cropRect.w) + cropRect.w*centerTexcoord.y);\
	                gl_FragColor = texture2D(u_image_a, texcoord);\
	        }\
	        else {\
	            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\
	        }\
	    }",
	    "properties": {
	        "cropRect": { "type": "uniform", "value": [0.0, 0.0, 1.0, 1.0] },
	        "centerRect": { "type": "uniform", "value": [0.0, 0.0, 1.0, 1.0] }
	    },
	    "inputs": ["u_image_a"]
	};
	
	exports["default"] = cropblack;
	module.exports = exports["default"];

/***/ }),
/* 101 */
/***/ (function(module, exports) {

	//Matthew Shotton, R&D User Experience,© BBC 2015
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GraphNode = (function () {
	    /**
	    * Base class from which all processing and source nodes are derrived.
	    */
	
	    function GraphNode(gl, renderGraph, inputNames) {
	        var limitConnections = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	
	        _classCallCheck(this, GraphNode);
	
	        this._renderGraph = renderGraph;
	        this._limitConnections = limitConnections;
	        this._inputNames = inputNames;
	        this._destroyed = false;
	
	        //Setup WebGL output texture
	        this._gl = gl;
	        this._renderGraph = renderGraph;
	        this._rendered = false;
	        this._displayName = "GraphNode";
	
	        this._scale = 1.0;
	        this._inputWidth = 0;
	        this._inputHeight = 0;
	        this._outputWidth = 0;
	        this._outputHeight = 0;
	
	        this._drawRect = [0.0, 0.0, 1.0, 1.0];
	    }
	
	    /**
	    * Get a string representation of the class name.
	    *
	    * @return String A string of the class name.
	    */
	
	    _createClass(GraphNode, [{
	        key: "connect",
	
	        /**
	        * Connect this node to the targetNode
	        * 
	        * @param {GraphNode} targetNode - the node to connect.
	        * @param {(number| String)} [targetPort] - the port on the targetNode to connect to, this can be an index, a string identifier, or undefined (in which case the next available port will be connected to).
	        * 
	        */
	        value: function connect(targetNode, targetPort) {
	            return this._renderGraph.registerConnection(this, targetNode, targetPort);
	        }
	
	        /**
	        * Disconnect this node from the targetNode. If targetNode is undefind remove all out-bound connections.
	        *
	        * @param {GraphNode} [targetNode] - the node to disconnect from. If undefined, disconnect from all nodes.
	        *
	        */
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
	
	        /**
	        * Destory this node, removing it from the graph.
	        */
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
	                    if (!_iteratorNormalCompletion && _iterator["return"]) {
	                        _iterator["return"]();
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
	
	        /**
	        * Get the names of the inputs to this node.
	        *
	        * @return {String[]} An array of the names of the inputs ot the node.
	        */
	    }, {
	        key: "inputNames",
	        get: function get() {
	            return this._inputNames.slice();
	        }
	
	        /**
	        * The maximum number of connections that can be made to this node. If there is not limit this will return Infinity.
	        *
	        * @return {number} The number of connections which can be made to this node.
	        */
	    }, {
	        key: "maximumConnections",
	        get: function get() {
	            if (this._limitConnections === false) return Infinity;
	            return this._inputNames.length;
	        }
	
	        /**
	        * Get an array of all the nodes which connect to this node.
	        *
	        * @return {GraphNode[]} An array of nodes which connect to this node.
	        */
	    }, {
	        key: "inputs",
	        get: function get() {
	            var result = this._renderGraph.getInputsForNode(this);
	            result = result.filter(function (n) {
	                return n !== undefined;
	            });
	            return result;
	        }
	
	        /**
	        * Get an array of all the nodes which this node outputs to.
	        *
	        * @return {GraphNode[]} An array of nodes which this node connects to.
	        */
	    }, {
	        key: "outputs",
	        get: function get() {
	            return this._renderGraph.getOutputsForNode(this);
	        }
	
	        /**
	        * Get whether the node has been destroyed or not.
	        *
	        * @return {boolean} A true/false value of whather the node has been destoryed or not.
	        */
	    }, {
	        key: "destroyed",
	        get: function get() {
	            return this._destroyed;
	        }
	    }]);
	
	    return GraphNode;
	})();
	
	exports["default"] = GraphNode;
	module.exports = exports["default"];

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	//Matthew Shotton, R&D User Experience,© BBC 2015
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _sourcenode = __webpack_require__(2);
	
	var _sourcenode2 = _interopRequireDefault(_sourcenode);
	
	var ImageNode = (function (_SourceNode) {
	    _inherits(ImageNode, _SourceNode);
	
	    /**
	    * Initialise an instance of an ImageNode.
	    * This should not be called directly, but created through a call to videoContext.createImageNode();
	    */
	
	    function ImageNode(src, gl, renderGraph, currentTime) {
	        var preloadTime = arguments.length <= 4 || arguments[4] === undefined ? 4 : arguments[4];
	        var attributes = arguments.length <= 5 || arguments[5] === undefined ? {} : arguments[5];
	
	        _classCallCheck(this, ImageNode);
	
	        _get(Object.getPrototypeOf(ImageNode.prototype), "constructor", this).call(this, src, gl, renderGraph, currentTime);
	        this._preloadTime = preloadTime;
	        this._attributes = attributes;
	        this._textureUploaded = false;
	        this._displayName = "ImageNode";
	    }
	
	    _createClass(ImageNode, [{
	        key: "_load",
	        value: function _load() {
	            var _this = this;
	
	            if (this._element !== undefined) {
	                for (var key in this._attributes) {
	                    this._element[key] = this._attributes[key];
	                }
	                return;
	            }
	            if (this._isResponsibleForElementLifeCycle) {
	                _get(Object.getPrototypeOf(ImageNode.prototype), "_load", this).call(this);
	                this._element = new Image();
	                this._element.setAttribute("crossorigin", "anonymous");
	                this._element.src = this._elementURL;
	                this._element.onload = function () {
	                    console.log("image loaded!!");
	                    _this._ready = true;
	                    _this._triggerCallbacks("loaded");
	                };
	                this._element.onerror = function () {
	                    console.error("ImageNode failed to load. url:", _this._elementURL);
	                };
	
	                for (var _key in this._attributes) {
	                    this._element[_key] = this._attributes[_key];
	                }
	            }
	            this._element.onerror = function () {
	                console.debug("Error with element", _this._element);
	                _this._state = _sourcenode.SOURCENODESTATE.error;
	                //Event though there's an error ready should be set to true so the node can output transparenn
	                _this._ready = true;
	                _this._triggerCallbacks("error");
	            };
	        }
	    }, {
	        key: "_destroy",
	        value: function _destroy() {
	            _get(Object.getPrototypeOf(ImageNode.prototype), "_destroy", this).call(this);
	            if (this._isResponsibleForElementLifeCycle) {
	                this._element.src = "";
	                this._element.onerror = undefined;
	                this._element = undefined;
	                delete this._element;
	            }
	            this._ready = false;
	        }
	    }, {
	        key: "_seek",
	        value: function _seek(time) {
	            _get(Object.getPrototypeOf(ImageNode.prototype), "_seek", this).call(this, time);
	            if (this.state === _sourcenode.SOURCENODESTATE.playing || this.state === _sourcenode.SOURCENODESTATE.paused) {
	                if (this._element === undefined) this._load();
	            }
	            if ((this._state === _sourcenode.SOURCENODESTATE.sequenced || this._state === _sourcenode.SOURCENODESTATE.ended) && this._element !== undefined) {
	                this._destroy();
	            }
	        }
	    }, {
	        key: "_update",
	        value: function _update(currentTime) {
	            //if (!super._update(currentTime)) return false;
	            if (this._textureUploaded) {
	                _get(Object.getPrototypeOf(ImageNode.prototype), "_update", this).call(this, currentTime, false);
	            } else {
	                _get(Object.getPrototypeOf(ImageNode.prototype), "_update", this).call(this, currentTime);
	            }
	
	            if (this._startTime - this._currentTime < this._preloadTime && this._state !== _sourcenode.SOURCENODESTATE.waiting && this._state !== _sourcenode.SOURCENODESTATE.ended) this._load();
	
	            if (this._state === _sourcenode.SOURCENODESTATE.playing) {
	                return true;
	            } else if (this._state === _sourcenode.SOURCENODESTATE.paused) {
	                return true;
	            } else if (this._state === _sourcenode.SOURCENODESTATE.ended && this._element !== undefined) {
	                this._destroy();
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
	})(_sourcenode2["default"]);
	
	exports["default"] = ImageNode;
	module.exports = exports["default"];

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	//Matthew Shotton, R&D User Experience,© BBC 2015
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _sourcenode = __webpack_require__(2);
	
	var _sourcenode2 = _interopRequireDefault(_sourcenode);
	
	var CanvasNode = (function (_SourceNode) {
	    _inherits(CanvasNode, _SourceNode);
	
	    /**
	    * Initialise an instance of a CanvasNode.
	    * This should not be called directly, but created through a call to videoContext.createCanvasNode();
	    */
	
	    function CanvasNode(canvas, gl, renderGraph, currentTime) {
	        var preloadTime = arguments.length <= 4 || arguments[4] === undefined ? 4 : arguments[4];
	
	        _classCallCheck(this, CanvasNode);
	
	        _get(Object.getPrototypeOf(CanvasNode.prototype), "constructor", this).call(this, canvas, gl, renderGraph, currentTime);
	        this._preloadTime = preloadTime;
	        this._displayName = "CanvasNode";
	    }
	
	    _createClass(CanvasNode, [{
	        key: "_load",
	        value: function _load() {
	            _get(Object.getPrototypeOf(CanvasNode.prototype), "_load", this).call(this);
	            this._ready = true;
	            this._triggerCallbacks("loaded");
	        }
	    }, {
	        key: "_destroy",
	        value: function _destroy() {
	            _get(Object.getPrototypeOf(CanvasNode.prototype), "_destroy", this).call(this);
	            this._ready = false;
	        }
	    }, {
	        key: "_seek",
	        value: function _seek(time) {
	            _get(Object.getPrototypeOf(CanvasNode.prototype), "_seek", this).call(this, time);
	            if (this.state === _sourcenode.SOURCENODESTATE.playing || this.state === _sourcenode.SOURCENODESTATE.paused) {
	                if (this._element === undefined) this._load();
	                this._ready = false;
	            }
	            if ((this._state === _sourcenode.SOURCENODESTATE.sequenced || this._state === _sourcenode.SOURCENODESTATE.ended) && this._element !== undefined) {
	                this._destroy();
	            }
	        }
	    }, {
	        key: "_update",
	        value: function _update(currentTime) {
	            //if (!super._update(currentTime)) return false;
	            _get(Object.getPrototypeOf(CanvasNode.prototype), "_update", this).call(this, currentTime);
	            if (this._startTime - this._currentTime < this._preloadTime && this._state !== _sourcenode.SOURCENODESTATE.waiting && this._state !== _sourcenode.SOURCENODESTATE.ended) this._load();
	
	            if (this._state === _sourcenode.SOURCENODESTATE.playing) {
	                return true;
	            } else if (this._state === _sourcenode.SOURCENODESTATE.paused) {
	                return true;
	            } else if (this._state === _sourcenode.SOURCENODESTATE.ended && this._element !== undefined) {
	                this._destroy();
	                return false;
	            }
	        }
	    }]);
	
	    return CanvasNode;
	})(_sourcenode2["default"]);
	
	exports["default"] = CanvasNode;
	module.exports = exports["default"];

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	//Matthew Shotton, R&D User Experience,© BBC 2015
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _processingnode = __webpack_require__(105);
	
	var _processingnode2 = _interopRequireDefault(_processingnode);
	
	var _utilsJs = __webpack_require__(3);
	
	var CompositingNode = (function (_ProcessingNode) {
	    _inherits(CompositingNode, _ProcessingNode);
	
	    /**
	    * Initialise an instance of a Compositing Node. You should not instantiate this directly, but use VideoContest.createCompositingNode().
	    */
	
	    function CompositingNode(gl, renderGraph, definition) {
	        _classCallCheck(this, CompositingNode);
	
	        var placeholderTexture = (0, _utilsJs.createElementTexutre)(gl);
	        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
	        _get(Object.getPrototypeOf(CompositingNode.prototype), "constructor", this).call(this, gl, renderGraph, definition, definition.inputs, false);
	        this._placeholderTexture = placeholderTexture;
	        this._displayName = "CompositingNode";
	    }
	
	    _createClass(CompositingNode, [{
	        key: "_render",
	        value: function _render() {
	            var _this = this;
	
	            var gl = this._gl;
	
	            _get(Object.getPrototypeOf(CompositingNode.prototype), "_updateOutput", this).call(this, gl);
	
	            gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer);
	            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._texture, 0);
	            gl.clearColor(0, 0, 0, 0); // green;
	            gl.clear(gl.COLOR_BUFFER_BIT);
	            gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
	
	            this.inputs.forEach(function (node) {
	                if (node === undefined) return;
	                _get(Object.getPrototypeOf(CompositingNode.prototype), "_render", _this).call(_this);
	
	                //map the input textures input the node
	                var texture = node._texture;
	                var textureOffset = 0;
	
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = _this._inputTextureUnitMapping[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var mapping = _step.value;
	
	                        gl.activeTexture(mapping.textureUnit);
	                        var textureLocation = gl.getUniformLocation(_this._program, mapping.name);
	                        gl.uniform1i(textureLocation, _this._parameterTextureCount + textureOffset);
	                        textureOffset += 1;
	                        gl.bindTexture(gl.TEXTURE_2D, texture);
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator["return"]) {
	                            _iterator["return"]();
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
	})(_processingnode2["default"]);
	
	exports["default"] = CompositingNode;
	module.exports = exports["default"];

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	//Matthew Shotton, R&D User Experience,© BBC 2015
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _graphnode = __webpack_require__(101);
	
	var _graphnode2 = _interopRequireDefault(_graphnode);
	
	var _utilsJs = __webpack_require__(3);
	
	var _exceptionsJs = __webpack_require__(106);
	
	var ProcessingNode = (function (_GraphNode) {
	    _inherits(ProcessingNode, _GraphNode);
	
	    /**
	    * Initialise an instance of a ProcessingNode.
	    *
	    * This class is not used directly, but is extended to create CompositingNodes, TransitionNodes, and EffectNodes.
	    */
	
	    function ProcessingNode(gl, renderGraph, definition, inputNames, limitConnections) {
	        var _this = this;
	
	        _classCallCheck(this, ProcessingNode);
	
	        _get(Object.getPrototypeOf(ProcessingNode.prototype), "constructor", this).call(this, gl, renderGraph, inputNames, limitConnections);
	        this._vertexShader = definition.vertexShader;
	        this._fragmentShader = definition.fragmentShader;
	        this._definition = definition;
	        this._properties = {}; //definition.properties;
	        //copy definition properties
	        for (var propertyName in definition.properties) {
	            var propertyValue = definition.properties[propertyName].value;
	            //if an array then shallow copy it
	            if (Object.prototype.toString.call(propertyValue) === "[object Array]") {
	                propertyValue = definition.properties[propertyName].value.slice();
	            }
	            var propertyType = definition.properties[propertyName].type;
	            this._properties[propertyName] = { type: propertyType, value: propertyValue };
	        }
	
	        this._inputTextureUnitMapping = [];
	        this._maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
	        this._boundTextureUnits = 0;
	        this._parameterTextureCount = 0;
	        this._inputTextureCount = 0;
	        this._texture = (0, _utilsJs.createElementTexutre)(gl);
	        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.canvas.width, gl.canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	        //compile the shader
	        this._program = (0, _utilsJs.createShaderProgram)(gl, this._vertexShader, this._fragmentShader);
	
	        //create and setup the framebuffer
	        this._framebuffer = gl.createFramebuffer();
	        gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer);
	        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._texture, 0);
	        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	
	        //create properties on this object for the passed properties
	
	        var _loop = function (propertyName) {
	            Object.defineProperty(_this, propertyName, {
	                get: function get() {
	                    return this._properties[propertyName].value;
	                },
	                set: function set(passedValue) {
	                    this._properties[propertyName].value = passedValue;
	                }
	            });
	        };
	
	        for (var propertyName in this._properties) {
	            _loop(propertyName);
	        }
	
	        //create texutres for any texture properties
	        for (var propertyName in this._properties) {
	            var propertyValue = this._properties[propertyName].value;
	            if (propertyValue instanceof Image) {
	                this._properties[propertyName].texture = (0, _utilsJs.createElementTexutre)(gl);
	                this._properties[propertyName].texutreUnit = gl.TEXTURE0 + this._boundTextureUnits;
	                this._boundTextureUnits += 1;
	                this._parameterTextureCount += 1;
	                if (this._boundTextureUnits > this._maxTextureUnits) {
	                    throw new _exceptionsJs.RenderException("Trying to bind more than available textures units to shader");
	                }
	            }
	        }
	
	        //calculate texutre units for input textures
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = definition.inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var inputName = _step.value;
	
	                this._inputTextureUnitMapping.push({ name: inputName, textureUnit: gl.TEXTURE0 + this._boundTextureUnits });
	                this._boundTextureUnits += 1;
	                this._inputTextureCount += 1;
	                if (this._boundTextureUnits > this._maxTextureUnits) {
	                    throw new _exceptionsJs.RenderException("Trying to bind more than available textures units to shader");
	                }
	            }
	
	            //find the locations of the properties in the compiled shader
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator["return"]) {
	                    _iterator["return"]();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	
	        for (var propertyName in this._properties) {
	            if (this._properties[propertyName].type === "uniform") {
	                this._properties[propertyName].location = this._gl.getUniformLocation(this._program, propertyName);
	            }
	        }
	        this._currentTimeLocation = this._gl.getUniformLocation(this._program, "currentTime");
	        this._currentTime = 0;
	
	        //Other setup
	        this._positionLocation = gl.getAttribLocation(this._program, "a_position");
	        this._vbuffer = gl.createBuffer();
	        gl.bindBuffer(gl.ARRAY_BUFFER, this._vbuffer);
	        gl.enableVertexAttribArray(this._positionLocation);
	        /*
	        gl.vertexAttribPointer(this._positionLocation, 2, gl.FLOAT, false, 0, 0);
	        gl.bufferData(
	            gl.ARRAY_BUFFER,
	            new Float32Array([
	                1.0, 1.0,
	                0.0, 1.0,
	                1.0, 0.0,
	                1.0, 0.0,
	                0.0, 1.0,
	                0.0, 0.0]),
	            gl.STATIC_DRAW);
	        */
	
	        gl.vertexAttribPointer(this._positionLocation, 2, gl.FLOAT, false, 0, 0);
	        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0]), gl.DYNAMIC_DRAW);
	
	        this._texCoordLocation = gl.getAttribLocation(this._program, "a_texCoord");
	        gl.enableVertexAttribArray(this._texCoordLocation);
	        //gl.vertexAttribPointer(this._texCoordLocation, 2, gl.FLOAT, false, 0, 0);
	        gl.vertexAttribPointer(this._texCoordLocation, 2, gl.FLOAT, false, 0, 12 * 4);
	        this._displayName = "ProcessingNode";
	
	        this._scale = 1.0;
	        this._inputWidth = gl.canvas.width;
	        this._inputHeight = gl.canvas.height;
	        this._outputWidth = gl.canvas.width;
	        this._outputHeight = gl.canvas.height;
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
	
	        /**
	        * Sets the passed processing node property to the passed value.
	        * @param {string} name - The name of the processing node parameter to get.
	        *
	        * @example 
	        * var ctx = new VideoContext();
	        * var monoNode = ctx.effect(VideoContext.DEFINITIONS.MONOCHROME);
	        * console.log(monoNode.getProperty("inputMix")); //Will output [0.4,0.6,0.2], the default value from the effect definition.
	        * 
	        */
	    }, {
	        key: "getProperty",
	        value: function getProperty(name) {
	            return this._properties[name].value;
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
	        key: "_setScale",
	        value: function _setScale(scale) {
	            this._scale = scale;
	        }
	    }, {
	        key: "_updateOutput",
	        value: function _updateOutput(gl) {
	            if (this._scale != 1.0 || this._inputWidth != gl.canvas.width || this._inputHeight != gl.canvas.height) {
	                this._inputWidth = gl.canvas.width;
	                this._inputHeight = gl.canvas.height;
	                gl.deleteTexture(this._texture);
	                this._texture = (0, _utilsJs.createElementTexutre)(gl);
	                this._outputWidth = gl.canvas.width * this._scale;
	                this._outputHeight = gl.canvas.height * this._scale;
	                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this._outputWidth, this._outputHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	
	                this._scale = 1.0;
	            }
	        }
	    }, {
	        key: "_render",
	        value: function _render() {
	            this._rendered = true;
	            var gl = this._gl;
	
	            gl.viewport(0, 0, this._outputWidth, this._outputHeight);
	
	            gl.useProgram(this._program);
	
	            //upload the default uniforms
	            gl.uniform1f(this._currentTimeLocation, parseFloat(this._currentTime));
	
	            //upload/update the custom uniforms
	            var textureOffset = 0;
	
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
	                    } else if (propertyValue.length === 9) {
	                        gl.uniformMatrix3fv(propertyLocation, gl.FALSE, propertyValue);
	                    } else if (propertyValue.length === 16) {
	                        gl.uniformMatrix4fv(propertyLocation, gl.FALSE, propertyValue);
	                    } else {
	                        console.debug("Shader parameter", propertyName, "is too long an array:", propertyValue);
	                    }
	                } else if (propertyValue instanceof Image) {
	                    var texture = this._properties[propertyName].texture;
	                    var textureUnit = this._properties[propertyName].texutreUnit;
	                    (0, _utilsJs.updateTexture)(gl, texture, propertyValue);
	
	                    gl.activeTexture(textureUnit);
	                    gl.uniform1i(propertyLocation, textureOffset);
	                    textureOffset += 1;
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
	})(_graphnode2["default"]);
	
	exports["default"] = ProcessingNode;
	module.exports = exports["default"];

/***/ }),
/* 106 */
/***/ (function(module, exports) {

	//Matthew Shotton, R&D User Experience,© BBC 2015
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ConnectException = ConnectException;
	exports.RenderException = RenderException;
	
	function ConnectException(message) {
	    this.message = message;
	    this.name = "ConnectionException";
	}
	
	function RenderException(message) {
	    this.message = message;
	    this.name = "RenderException";
	}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	//Matthew Shotton, R&D User Experience,© BBC 2015
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ProcessingNodesProcessingnode = __webpack_require__(105);
	
	var _ProcessingNodesProcessingnode2 = _interopRequireDefault(_ProcessingNodesProcessingnode);
	
	var DestinationNode = (function (_ProcessingNode) {
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
	
	        var vertexShader = "\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }";
	
	        var fragmentShader = "\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            varying vec2 v_texCoord;\
	            varying float v_progress;\
	            void main(){\
	                gl_FragColor = texture2D(u_image, v_texCoord);\
	            }";
	
	        var deffinition = { fragmentShader: fragmentShader, vertexShader: vertexShader, properties: {}, inputs: ["u_image"] };
	
	        _get(Object.getPrototypeOf(DestinationNode.prototype), "constructor", this).call(this, gl, renderGraph, deffinition, deffinition.inputs, false);
	        this._displayName = "DestinationNode";
	    }
	
	    _createClass(DestinationNode, [{
	        key: "_render",
	        value: function _render() {
	            var _this = this;
	
	            var gl = this._gl;
	
	            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	            gl.enable(gl.BLEND);
	            gl.clearColor(0, 0, 0, 0.0); // green;
	            gl.clear(gl.COLOR_BUFFER_BIT);
	
	            this.inputs.forEach(function (node) {
	                _get(Object.getPrototypeOf(DestinationNode.prototype), "_render", _this).call(_this);
	                //map the input textures input the node
	                var texture = node._texture;
	                var textureOffset = 0;
	
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = _this._inputTextureUnitMapping[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var mapping = _step.value;
	
	                        gl.activeTexture(mapping.textureUnit);
	                        var textureLocation = gl.getUniformLocation(_this._program, mapping.name);
	                        gl.uniform1i(textureLocation, _this._parameterTextureCount + textureOffset);
	                        textureOffset += 1;
	                        gl.bindTexture(gl.TEXTURE_2D, texture);
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator["return"]) {
	                            _iterator["return"]();
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
	})(_ProcessingNodesProcessingnode2["default"]);
	
	exports["default"] = DestinationNode;
	module.exports = exports["default"];

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	//Matthew Shotton, R&D User Experience,© BBC 2015
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _processingnode = __webpack_require__(105);
	
	var _processingnode2 = _interopRequireDefault(_processingnode);
	
	var _utilsJs = __webpack_require__(3);
	
	var EffectNode = (function (_ProcessingNode) {
	    _inherits(EffectNode, _ProcessingNode);
	
	    /**
	    * Initialise an instance of an EffectNode. You should not instantiate this directly, but use VideoContest.createEffectNode().
	    */
	
	    function EffectNode(gl, renderGraph, definition) {
	        _classCallCheck(this, EffectNode);
	
	        var placeholderTexture = (0, _utilsJs.createElementTexutre)(gl);
	        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
	
	        _get(Object.getPrototypeOf(EffectNode.prototype), "constructor", this).call(this, gl, renderGraph, definition, definition.inputs, true);
	
	        this._placeholderTexture = placeholderTexture;
	        this._displayName = "EffectNode";
	    }
	
	    _createClass(EffectNode, [{
	        key: "_render",
	        value: function _render() {
	            var gl = this._gl;
	
	            _get(Object.getPrototypeOf(EffectNode.prototype), "_updateOutput", this).call(this, gl);
	
	            gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer);
	            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._texture, 0);
	            gl.clearColor(0, 0, 0, 0); // green;
	            gl.clear(gl.COLOR_BUFFER_BIT);
	
	            _get(Object.getPrototypeOf(EffectNode.prototype), "_render", this).call(this);
	
	            var inputs = this._renderGraph.getInputsForNode(this);
	            var textureOffset = 0;
	
	            for (var i = 0; i < this._inputTextureUnitMapping.length; i++) {
	                var inputTexture = this._placeholderTexture;
	                var textureUnit = this._inputTextureUnitMapping[i].textureUnit;
	                var textureName = this._inputTextureUnitMapping[i].name;
	                if (i < inputs.length && inputs[i] !== undefined) {
	                    inputTexture = inputs[i]._texture;
	                }
	
	                gl.activeTexture(textureUnit);
	                var textureLocation = gl.getUniformLocation(this._program, textureName);
	                gl.uniform1i(textureLocation, this._parameterTextureCount + textureOffset);
	                textureOffset += 1;
	                gl.bindTexture(gl.TEXTURE_2D, inputTexture);
	            }
	            gl.drawArrays(gl.TRIANGLES, 0, 6);
	            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	        }
	    }]);
	
	    return EffectNode;
	})(_processingnode2["default"]);
	
	exports["default"] = EffectNode;
	module.exports = exports["default"];

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	//Matthew Shotton, R&D User Experience,© BBC 2015
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _processingnode = __webpack_require__(105);
	
	var _processingnode2 = _interopRequireDefault(_processingnode);
	
	var _utilsJs = __webpack_require__(3);
	
	var DrawingNode = (function (_ProcessingNode) {
	    _inherits(DrawingNode, _ProcessingNode);
	
	    /**
	    * Initialise an instance of a Compositing Node. You should not instantiate this directly, but use VideoContest.createCompositingNode().
	    */
	
	    function DrawingNode(gl, renderGraph, definition) {
	        _classCallCheck(this, DrawingNode);
	
	        var placeholderTexture = (0, _utilsJs.createElementTexutre)(gl);
	        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
	        _get(Object.getPrototypeOf(DrawingNode.prototype), "constructor", this).call(this, gl, renderGraph, definition, definition.inputs, false);
	        this._placeholderTexture = placeholderTexture;
	        this._displayName = "DrawingNode";
	
	        this.drawings = [];
	        /*
	        this._drawVBuf = gl.createBuffer();
	        gl.bindBuffer(gl.ARRAY_BUFFER, this._drawVBuf);
	        gl.bufferData(
	            gl.ARRAY_BUFFER,
	            new Float32Array([
	                -1.0, -1.0,
	                1.0, -1.0,
	                -1.0, 1.0,
	                1.0, 1.0,
	                 0.0, 0.0,
	                1.0, 0.0,
	                0.0, 1.0,
	                1.0, 1.0]),
	            gl.DYNAMIC_DRAW);
	          gl.bindBuffer(gl.ARRAY_BUFFER, this._vbuffer);
	        */
	    }
	
	    _createClass(DrawingNode, [{
	        key: "drawNode",
	        value: function drawNode(drawnode) {
	            if (drawnode === undefined) {
	                return;
	            }
	
	            this.drawings.forEach(function (node) {
	                if (drawnode === node) {
	                    return;
	                }
	            });
	
	            this.drawings.push(drawnode);
	        }
	    }, {
	        key: "removeDrawNode",
	        value: function removeDrawNode(drawnode) {
	            var _this = this;
	
	            var toRemove = [];
	
	            if (drawnode === undefined) {
	                return false;
	            }
	
	            this.drawings.forEach(function (node) {
	                if (drawnode === node) {
	                    toRemove.push(node);
	                }
	            });
	
	            if (toRemove.length === 0) return false;
	
	            toRemove.forEach(function (removeNode) {
	                var index = _this.drawings.indexOf(removeNode);
	                _this.drawings.splice(index, 1);
	            });
	
	            return true;
	        }
	    }, {
	        key: "_render",
	        value: function _render() {
	            var _this2 = this;
	
	            var gl = this._gl;
	
	            _get(Object.getPrototypeOf(DrawingNode.prototype), "_updateOutput", this).call(this, gl);
	
	            gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer);
	            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._texture, 0);
	            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
	            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
	
	            gl.useProgram(this._program);
	
	            var projection_ = new Float32Array(16);
	
	            var r_l = gl.canvas.width;
	            var t_b = gl.canvas.height;
	            var f_n = 2.0;
	            var tx = -1.0;
	            var ty = -1.0;
	            var tz = 0.0;
	
	            projection_[0] = 2.0 / r_l;
	            projection_[1] = 0.0;
	            projection_[2] = 0.0;
	            projection_[3] = 0.0;
	
	            projection_[4] = 0.0;
	            projection_[5] = 2.0 / t_b;
	            projection_[6] = 0.0;
	            projection_[7] = 0.0;
	
	            projection_[8] = 0.0;
	            projection_[9] = 0.0;
	            projection_[10] = -2.0 / f_n;
	            projection_[11] = 0.0;
	
	            projection_[12] = tx;
	            projection_[13] = ty;
	            projection_[14] = tz;
	            projection_[15] = 1.0;
	
	            var modelMatrixLocation = gl.getUniformLocation(this._program, "modelViewProjectionMatrix");
	            gl.uniformMatrix4fv(modelMatrixLocation, gl.FALSE, projection_);
	
	            this.inputs.forEach(function (node) {
	                //var inputNode = this.inputs[0];
	                var texture = node._texture;
	
	                var textureOffset = 0;
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = _this2._inputTextureUnitMapping[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var mapping = _step.value;
	
	                        gl.activeTexture(mapping.textureUnit);
	                        var textureLocation = gl.getUniformLocation(_this2._program, mapping.name);
	                        gl.uniform1i(textureLocation, _this2._parameterTextureCount + textureOffset);
	                        textureOffset += 1;
	                        gl.bindTexture(gl.TEXTURE_2D, texture);
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator["return"]) {
	                            _iterator["return"]();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	
	                var ax = 0.0;
	                var ay = 0.0;
	                var bx = gl.canvas.width;
	                var by = 0.0;
	                var cx = 0.0;
	                var cy = gl.canvas.height;
	                var dx = gl.canvas.width;
	                var dy = gl.canvas.height;
	
	                gl.bindBuffer(gl.ARRAY_BUFFER, _this2._vbuffer);
	                gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array([ax, ay, bx, by, cx, cy, dx, dy, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0]));
	                gl.enableVertexAttribArray(_this2._positionLocation);
	                gl.vertexAttribPointer(_this2._positionLocation, 2, gl.FLOAT, false, 0, 0);
	                gl.enableVertexAttribArray(_this2._texCoordLocation);
	                gl.vertexAttribPointer(_this2._texCoordLocation, 2, gl.FLOAT, false, 0, 12 * 4);
	
	                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	            });
	
	            this.drawings.forEach(function (node) {
	
	                var texture = node._texture;
	
	                var textureOffset = 0;
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;
	
	                try {
	                    for (var _iterator2 = _this2._inputTextureUnitMapping[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var mapping = _step2.value;
	
	                        gl.activeTexture(mapping.textureUnit);
	                        var textureLocation = gl.getUniformLocation(_this2._program, mapping.name);
	                        gl.uniform1i(textureLocation, _this2._parameterTextureCount + textureOffset);
	                        textureOffset += 1;
	                        gl.bindTexture(gl.TEXTURE_2D, texture);
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                            _iterator2["return"]();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }
	
	                var ax = node._drawRect[0];
	                var ay = gl.canvas.height - (node._drawRect[1] + node._drawRect[3]);
	                var bx = node._drawRect[0] + node._drawRect[2];
	                var by = gl.canvas.height - (node._drawRect[1] + node._drawRect[3]);
	                var cx = node._drawRect[0];
	                var cy = gl.canvas.height - node._drawRect[1];
	                var dx = node._drawRect[0] + node._drawRect[2];
	                var dy = gl.canvas.height - node._drawRect[1];
	
	                gl.bindBuffer(gl.ARRAY_BUFFER, _this2._vbuffer);
	                gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array([ax, ay, bx, by, cx, cy, dx, dy, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0]));
	                gl.enableVertexAttribArray(_this2._positionLocation);
	                gl.vertexAttribPointer(_this2._positionLocation, 2, gl.FLOAT, false, 0, 0);
	                gl.enableVertexAttribArray(_this2._texCoordLocation);
	                gl.vertexAttribPointer(_this2._texCoordLocation, 2, gl.FLOAT, false, 0, 12 * 4);
	
	                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	            });
	
	            gl.bindBuffer(gl.ARRAY_BUFFER, this._vbuffer);
	            gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array([1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0]));
	            //gl.enableVertexAttribArray(this._positionLocation);
	            //gl.vertexAttribPointer(this._positionLocation, 2, gl.FLOAT, false, 0, 0);
	            //gl.enableVertexAttribArray(this._texCoordLocation);
	            //gl.vertexAttribPointer(this._texCoordLocation, 2, gl.FLOAT, false, 0, 12*4);
	
	            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	        }
	    }]);
	
	    return DrawingNode;
	})(_processingnode2["default"]);
	
	exports["default"] = DrawingNode;
	module.exports = exports["default"];

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	//Matthew Shotton, R&D User Experience,© BBC 2015
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _effectnode = __webpack_require__(108);
	
	var _effectnode2 = _interopRequireDefault(_effectnode);
	
	var TransitionNode = (function (_EffectNode) {
	    _inherits(TransitionNode, _EffectNode);
	
	    /**
	    * Initialise an instance of a TransitionNode. You should not instantiate this directly, but use VideoContest.createTransitonNode().
	    */
	
	    function TransitionNode(gl, renderGraph, definition) {
	        _classCallCheck(this, TransitionNode);
	
	        _get(Object.getPrototypeOf(TransitionNode.prototype), "constructor", this).call(this, gl, renderGraph, definition);
	        this._transitions = {};
	
	        //save a version of the original property values
	        this._initialPropertyValues = {};
	        for (var propertyName in this._properties) {
	            this._initialPropertyValues[propertyName] = this._properties[propertyName].value;
	        }
	        this._displayName = "TransitionNode";
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
	                    if (!_iteratorNormalCompletion && _iterator["return"]) {
	                        _iterator["return"]();
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
	
	        /**
	        * Create a transition on the timeline.
	        * 
	        * @param {number} startTime - The time at which the transition should start (relative to currentTime of video context).
	        * @param {number} endTime - The time at which the transition should be completed by (relative to currentTime of video context).
	        * @param {number} currentValue - The value to start the transition at.
	        * @param {number} targetValue - The value to transition to by endTime.
	        * @param {String} propertyName - The name of the property to clear transitions on, if undefined default to "mix".
	        * 
	        * @return {Boolean} returns True if a transition is successfully added, false otherwise.
	        */
	    }, {
	        key: "transition",
	        value: function transition(startTime, endTime, currentValue, targetValue) {
	            var propertyName = arguments.length <= 4 || arguments[4] === undefined ? "mix" : arguments[4];
	
	            var transition = { start: startTime + this._currentTime, end: endTime + this._currentTime, current: currentValue, target: targetValue, property: propertyName };
	            if (!this._doesTransitionFitOnTimeline(transition)) return false;
	            this._insertTransitionInTimeline(transition);
	            return true;
	        }
	
	        /**
	        * Create a transition on the timeline at an absolute time.
	        * 
	        * @param {number} startTime - The time at which the transition should start (relative to time 0).
	        * @param {number} endTime - The time at which the transition should be completed by (relative to time 0).
	        * @param {number} currentValue - The value to start the transition at.
	        * @param {number} targetValue - The value to transition to by endTime.
	        * @param {String} propertyName - The name of the property to clear transitions on, if undefined default to "mix".
	        * 
	        * @return {Boolean} returns True if a transition is successfully added, false otherwise.
	        */
	    }, {
	        key: "transitionAt",
	        value: function transitionAt(startTime, endTime, currentValue, targetValue) {
	            var propertyName = arguments.length <= 4 || arguments[4] === undefined ? "mix" : arguments[4];
	
	            var transition = { start: startTime, end: endTime, current: currentValue, target: targetValue, property: propertyName };
	            if (!this._doesTransitionFitOnTimeline(transition)) return false;
	            this._insertTransitionInTimeline(transition);
	            return true;
	        }
	
	        /**
	        * Clear all transistions on the passed property. If no property is defined clear all transitions on the node.
	        * 
	        * @param {String} propertyName - The name of the property to clear transitions on, if undefined clear all transitions on the node.
	        */
	    }, {
	        key: "clearTransitions",
	        value: function clearTransitions(propertyName) {
	            if (propertyName === undefined) {
	                this._transitions = {};
	            } else {
	                this._transitions[propertyName] = [];
	            }
	        }
	
	        /**
	        * Clear a transistion on the passed property that the specified time lies within.
	        * 
	        * @param {String} propertyName - The name of the property to clear a transition on.
	        * @param {number} time - A time which lies within the property you're trying to clear.
	        *
	        * @return {Boolean} returns True if a transition is removed, false otherwise.
	        */
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
	            _get(Object.getPrototypeOf(TransitionNode.prototype), "_update", this).call(this, currentTime);
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
	})(_effectnode2["default"]);
	
	exports["default"] = TransitionNode;
	module.exports = exports["default"];

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	//Matthew Shotton, R&D User Experience,© BBC 2015
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _exceptionsJs = __webpack_require__(106);
	
	var _PadNodesPadnodeJs = __webpack_require__(112);
	
	var _PadNodesPadnodeJs2 = _interopRequireDefault(_PadNodesPadnodeJs);
	
	var RenderGraph = (function () {
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
	
	        /**
	        * Get a list of nodes which are connected, by input name, to the given node. Array contains objects of the form: {"source":sourceNode, "type":"name", "name":inputName, "destination":destinationNode}.
	        *
	        * @param {GraphNode} node - the node to get the named inputs for.
	        * @return {Object[]} An array of objects representing the nodes and connection type, which are connected to the named inputs for the node.
	        */
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
	
	        /**
	        * Get a list of nodes which are connected, by z-index name, to the given node. Array contains objects of the form: {"source":sourceNode, "type":"zIndex", "zIndex":0, "destination":destinationNode}.
	        * 
	        * @param {GraphNode} node - the node to get the z-index refernced inputs for.
	        * @return {Object[]} An array of objects representing the nodes and connection type, which are connected by z-Index for the node.
	        */
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
	
	        /**
	        * Get a list of nodes which are connected as inputs to the given node. The length of the return array is always equal to the number of inputs for the node, with undefined taking the place of any inputs not connected.
	        * 
	        * @param {GraphNode} node - the node to get the inputs for.
	        * @return {GraphNode[]} An array of GraphNodes which are connected to the node.
	        */
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
	                        if (!_iteratorNormalCompletion && _iterator["return"]) {
	                            _iterator["return"]();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	
	                var indexedInputsIndex = 0;
	                for (var i = 0; i < results.length; i++) {
	                    if (results[i] === undefined && indexedInputs[indexedInputsIndex] !== undefined) {
	                        results[i] = indexedInputs[indexedInputsIndex].source;
	                        indexedInputsIndex += 1;
	                    }
	                }
	            } else {
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;
	
	                try {
	                    for (var _iterator2 = namedInputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var connection = _step2.value;
	
	                        results.push(connection.source);
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                            _iterator2["return"]();
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
	                        var connection = _step3.value;
	
	                        results.push(connection.source);
	                    }
	                } catch (err) {
	                    _didIteratorError3 = true;
	                    _iteratorError3 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
	                            _iterator3["return"]();
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
	
	        /**
	        * Check if a named input on a node is available to connect too.
	        * @param {GraphNode} node - the node to check.
	        * @param {String} inputName - the named input to check.
	        */
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
	                    if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
	                        _iterator4["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }
	
	            return true;
	        }
	
	        /**
	        * Register a connection between two nodes.
	        * 
	        * @param {GraphNode} sourceNode - the node to connect from.
	        * @param {GraphNode} destinationNode - the node to connect to.
	        * @param {(String | number)} [target] - the target port of the conenction, this could be a string to specfiy a specific named port, a number to specify a port by index, or undefined, in which case the next available port will be connected to.
	        * @return {boolean} Will return true if connection succeeds otherwise will throw a ConnectException.
	        */
	    }, {
	        key: "registerConnection",
	        value: function registerConnection(sourceNode, destinationNode, target) {
	            if (destinationNode.inputs.length >= destinationNode.inputNames.length && destinationNode._limitConnections === true) {
	                throw new _exceptionsJs.ConnectException("Node has reached max number of inputs, can't connect");
	            }
	            if (typeof target === "number") {
	                //target is a specific
	                this.connections.push({ "source": sourceNode, "type": "zIndex", "zIndex": target, "destination": destinationNode });
	            } else if (typeof target === "string" && destinationNode._limitConnections) {
	                //target is a named port
	
	                //make sure named port is free
	                if (this.isInputAvailable(destinationNode, target)) {
	                    this.connections.push({ "source": sourceNode, "type": "name", "name": target, "destination": destinationNode });
	                } else {
	                    throw new _exceptionsJs.ConnectException("Port " + target + " is already connected to");
	                }
	            } else {
	                //target is undefined so just make it a high zIndex
	                if (destinationNode instanceof _PadNodesPadnodeJs2["default"]) {
	                    destinationNode = destinationNode._inputNode;
	                }
	
	                var indexedConns = this.getZIndexInputsForNode(destinationNode);
	                var index = 0;
	                if (indexedConns.length > 0) index = indexedConns[indexedConns.length - 1].zIndex + 1;
	                this.connections.push({ "source": sourceNode, "type": "zIndex", "zIndex": index, "destination": destinationNode });
	            }
	            return true;
	        }
	
	        /**
	        * Remove a connection between two nodes.
	        * @param {GraphNode} sourceNode - the node to unregsiter connection from.
	        * @param {GraphNode} destinationNode - the node to register connection to.
	        * @return {boolean} Will return true if removing connection succeeds, or false if there was no connectionsction to remove.
	        */
	    }, {
	        key: "unregisterConnection",
	        value: function unregisterConnection(sourceNode, destinationNode) {
	            var _this = this;
	
	            var toRemove = [];
	            if (destinationNode instanceof _PadNodesPadnodeJs2["default"]) {
	                destinationNode = destinationNode._inputNode;
	            }
	
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
	                    if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
	                        _iterator5["return"]();
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
	                    if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
	                        _iterator6["return"]();
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
	                    if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
	                        _iterator7["return"]();
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
	                    var conn = _step8.value;
	
	                    var index = inputLess.indexOf(conn.destination);
	                    if (index !== -1) {
	                        inputLess.splice(index, 1);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError8 = true;
	                _iteratorError8 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
	                        _iterator8["return"]();
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
	})();
	
	exports["default"] = RenderGraph;
	module.exports = exports["default"];

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	//Matthew Shotton, R&D User Experience,© BBC 2015
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _graphnode = __webpack_require__(101);
	
	var _graphnode2 = _interopRequireDefault(_graphnode);
	
	var _DefinitionsDefinitionsJs = __webpack_require__(4);
	
	var _DefinitionsDefinitionsJs2 = _interopRequireDefault(_DefinitionsDefinitionsJs);
	
	/*		read me
	* @params {Array(2)} 
	* 		cavasSize - exactly the video process output size (to display or save)
	* @params {Array(2)}
	* 		videoSize - exactly the video input size (video media information)
	* @params {int}
	* 		paddingMode - 0- glassblur, 1- blackpad, 2- meanblur
	* @func 
	* 		.setCropRect(cropRect) - the cropRect of input video (not canvas), [x, y, w, h] value 0.0~1.0,
	* 			cropRect = [cropX/videoSize[0], cropY/videoSize[1], cropW/videoSize[0], cropH/videoSize[1]].  
	* 			default cropRect = [0.0, 0.0, 1.0, 1.0] - crop whole video screen
	* @property {Array(4)}
	* 		._centerRect - the center rect of the video in the canvas that without padding area.
	* 					_centerRect is the ratio for canvasSize: [x, y, w, h] - value 0.0~1.0. 
	* 					real rect: [ _centerRect[0]*canvasSize[0], _centerRect[1]*canvasSize[1], _centerRect[2]*canvasSize[0], _centerRect[3]*canvasSize[1] ]
	* 					after setCropRect() you can get it to see video's center rect.
	* 
	*/
	
	var PadNode = (function (_GraphNode) {
	    _inherits(PadNode, _GraphNode);
	
	    /**
	     * Manages the rendering graph.
	     */
	
	    function PadNode(gl, renderGraph, ctx, canvasSize, videoSize, padMode) {
	        _classCallCheck(this, PadNode);
	
	        _get(Object.getPrototypeOf(PadNode.prototype), "constructor", this).call(this, gl, renderGraph);
	
	        //check canvas size
	        if (canvasSize[0] < 1.0) {
	            canvasSize[0] = 1.0;
	        }
	        if (canvasSize[1] < 1.0) {
	            canvasSize[1] = 1.0;
	        }
	        //check video size
	        if (videoSize[0] < 1.0) {
	            videoSize[0] = 1.0;
	        }
	        if (videoSize[1] < 1.0) {
	            videoSize[1] = 1.0;
	        }
	
	        this._inputNode = undefined;
	        this._saturationNode = undefined;
	        this._hBlurNode = undefined;
	        this._vBlurNode = undefined;
	        this._luminanceNode = undefined;
	        this._meanHBlurNode = undefined;
	        this._meanVBlurNode = undefined;
	        this._glassNode = undefined;
	        this._outputNode = undefined;
	        this._cropRect = [0.0, 0.0, 1.0, 1.0];
	        this._videoSize = videoSize;
	        this._canvasSize = canvasSize;
	        this._padMode = padMode;
	        this._inputsNames = undefined;
	        this._displayName = "dd";
	        this._centerRect = [0.0, 0.0, 1.0, 1.0];
	        this._nodes = [];
	
	        if (padMode == 2) {
	            var cropWidth = this._cropRect[2] * videoSize[0]; //crop width of video
	            var cropHeight = this._cropRect[3] * videoSize[1]; //crop height of video
	
	            this._inputNode = ctx.effect(_DefinitionsDefinitionsJs2["default"].CROPRECT);
	            this._inputNode.cropRect = this._cropRect;
	
	            //after crop, videoSize = [cropWidth, cropHeight]
	            videoSize = [cropWidth, cropHeight];
	            var cropInside = false;
	
	            //calc
	            var left = [0.0, 0.0, 0.0, 0.0];
	            var right = [0.0, 0.0, 0.0, 0.0];
	            var leftCropRect = [0.0, 0.0, 0.0, 0.0];
	            var rightCropRect = [0.0, 0.0, 0.0, 0.0];
	
	            var inRatio = videoSize[0] / videoSize[1];
	            var forceRatio = canvasSize[0] / canvasSize[1];
	            if (forceRatio > inRatio) {
	                var _scale = canvasSize[1] / videoSize[1];
	                var scaleWidth = videoSize[0] * _scale;
	                var padw = (canvasSize[0] - scaleWidth) / 2.0;
	                left[0] = 0.0;
	                left[1] = 0.0;
	                left[2] = padw / canvasSize[0];
	                left[3] = 1.0;
	                right[0] = (canvasSize[0] - padw) / canvasSize[0];
	                right[1] = 0.0;
	                right[2] = padw / canvasSize[0];
	                right[3] = 1.0;
	                this._centerRect[0] = padw / canvasSize[0];
	                this._centerRect[1] = 0.0;
	                this._centerRect[2] = scaleWidth / canvasSize[0];
	                this._centerRect[3] = 1.0;
	
	                if (scaleWidth / 2.0 <= padw) {
	                    var cropScale = scaleWidth / 2.0 / padw;
	                    var cropH = canvasSize[1] * cropScale;
	                    var cropy = (canvasSize[1] - cropH) / 2.0;
	                    //let cropx = 0.0;
	                    leftCropRect[0] = 0.0;
	                    leftCropRect[1] = cropy / canvasSize[1];
	                    leftCropRect[2] = 0.5;
	                    leftCropRect[3] = cropScale;
	                    rightCropRect[0] = 0.5;
	                    rightCropRect[1] = cropy / canvasSize[1];
	                    rightCropRect[2] = 0.5;
	                    rightCropRect[3] = cropScale;
	                } else {
	                    if (cropInside) {
	                        leftCropRect[0] = (scaleWidth / 2.0 - padw) / scaleWidth;
	                        leftCropRect[1] = 0.0;
	                        leftCropRect[2] = padw / scaleWidth;
	                        leftCropRect[3] = 1.0;
	                        rightCropRect[0] = 0.5;
	                        rightCropRect[1] = 0.0;
	                        rightCropRect[2] = padw / scaleWidth;
	                        rightCropRect[3] = 1.0;
	                    } else {
	                        leftCropRect[0] = 0.0;
	                        leftCropRect[1] = 0.0;
	                        leftCropRect[2] = padw / scaleWidth;
	                        leftCropRect[3] = 1.0;
	                        rightCropRect[0] = 1.0 - padw / scaleWidth;
	                        rightCropRect[1] = 0.0;
	                        rightCropRect[2] = padw / scaleWidth;
	                        rightCropRect[3] = 1.0;
	                    }
	                }
	            } //endif forceRatio > inRatio
	            else {
	                    var _scale2 = canvasSize[0] / videoSize[0];
	                    var scaleHeight = videoSize[1] * _scale2;
	                    var padh = (canvasSize[1] - scaleHeight) / 2.0;
	                    left[0] = 0.0;
	                    left[1] = 0.0;
	                    left[2] = 1.0;
	                    left[3] = padh / canvasSize[1];
	                    right[0] = 0.0;
	                    right[1] = 1.0 - padh / canvasSize[1];
	                    right[2] = 1.0;
	                    right[3] = padh / canvasSize[1];
	                    this._centerRect[0] = 0.0;
	                    this._centerRect[1] = padh / canvasSize[1];
	                    this._centerRect[2] = 1.0;
	                    this._centerRect[3] = scaleHeight / canvasSize[1];
	
	                    if (scaleHeight / 2.0 <= padh) {
	                        var cropScale = scaleHeight / 2.0 / padh;
	                        var cropw = canvasSize[0] * cropScale;
	                        var cropx = (canvasSize[0] - cropw) / 2.0;
	                        //let cropy = 0.0;
	                        leftCropRect.one = cropx / canvasSize[0];
	                        leftCropRect.two = 0.0;
	                        leftCropRect.three = cropScale;
	                        leftCropRect.four = 0.5;
	                        rightCropRect.one = cropx / canvasSize[0];
	                        rightCropRect.two = 0.5;
	                        rightCropRect.three = cropScale;
	                        rightCropRect.four = 0.5;
	                    } else {
	                        if (cropInside) {
	                            leftCropRect.one = 0.0;
	                            leftCropRect.two = (scaleHeight / 2.0 - padh) / scaleHeight;
	                            leftCropRect.three = 1.0;
	                            leftCropRect.four = padh / scaleHeight;
	                            rightCropRect.one = 0.0;
	                            rightCropRect.two = 0.5;
	                            rightCropRect.three = 1.0;
	                            rightCropRect.four = padh / scaleHeight;
	                        } else {
	                            leftCropRect.one = 0.0;
	                            leftCropRect.two = 0.0;
	                            leftCropRect.three = 1.0;
	                            leftCropRect.four = padh / scaleHeight;
	                            rightCropRect.one = 0.0;
	                            rightCropRect.two = 1.0 - padh / scaleHeight;
	                            rightCropRect.three = 1.0;
	                            rightCropRect.four = padh / scaleHeight;
	                        }
	                    }
	                }
	
	            var scale = 0.3;
	            var meanBlurRadius = 18.0;
	            this._saturationNode = ctx.effect(_DefinitionsDefinitionsJs2["default"].SATURATION);
	            this._hBlurNode = ctx.effect(_DefinitionsDefinitionsJs2["default"].GAUSSIAN_CONST_HBLUR);
	            this._vBlurNode = ctx.effect(_DefinitionsDefinitionsJs2["default"].GAUSSIAN_CONST_VBLUR);
	            this._luminanceNode = ctx.effect(_DefinitionsDefinitionsJs2["default"].LUMINANCE);
	            this._meanHBlurNode = ctx.effect(_DefinitionsDefinitionsJs2["default"].MEAN_HBLUR); //ctx.effect(DEFINITIONS.MEAN_HBLUR);
	            this._meanVBlurNode = ctx.effect(_DefinitionsDefinitionsJs2["default"].MEAN_VBLUR); //ctx.effect(DEFINITIONS.MEAN_VBLUR);
	            this._glassNode = ctx.effect(_DefinitionsDefinitionsJs2["default"].GLASSBLUR);
	            this._saturationNode.saturation = 0.65;
	            this._luminanceNode.rangeReduction = 0.5;
	            this._hBlurNode.texelWidthOffset = 1.0 / (videoSize[0] * scale);
	            this._hBlurNode.texelHeightOffset = 1.0 / (videoSize[1] * scale);
	            this._vBlurNode.texelWidthOffset = 1.0 / (videoSize[0] * scale);
	            this._vBlurNode.texelHeightOffset = 1.0 / (videoSize[1] * scale);
	
	            this._meanHBlurNode.texelWidthOffset = 1.0 / (videoSize[0] * scale);
	            this._meanHBlurNode.texelHeightOffset = 1.0 / (videoSize[1] * scale);
	            this._meanHBlurNode.blurRadius = meanBlurRadius;
	            this._meanVBlurNode.texelWidthOffset = 1.0 / (videoSize[0] * scale);
	            this._meanVBlurNode.texelHeightOffset = 1.0 / (videoSize[1] * scale);
	            this._meanVBlurNode.blurRadius = meanBlurRadius;
	            this._saturationNode._setScale(scale);
	            this._hBlurNode._setScale(scale);
	            this._vBlurNode._setScale(scale);
	            this._luminanceNode._setScale(scale);
	            this._meanHBlurNode._setScale(scale);
	            this._meanVBlurNode._setScale(scale);
	            this._glassNode.left = left;
	            this._glassNode.right = right;
	            this._glassNode.leftCropRect = leftCropRect;
	            this._glassNode.rightCropRect = rightCropRect;
	            this._glassNode.centerRect = this._centerRect;
	
	            this._inputNode.connect(this._saturationNode);
	            this._inputNode.connect(this._glassNode);
	            this._saturationNode.connect(this._hBlurNode);
	            this._hBlurNode.connect(this._vBlurNode);
	            this._vBlurNode.connect(this._luminanceNode);
	            this._luminanceNode.connect(this._meanHBlurNode);
	            this._meanHBlurNode.connect(this._meanVBlurNode);
	            this._meanVBlurNode.connect(this._glassNode);
	
	            this._outputNode = this._glassNode;
	
	            this._nodes.push(this._inputNode);
	            this._nodes.push(this._saturationNode);
	            this._nodes.push(this._hBlurNode);
	            this._nodes.push(this._vBlurNode);
	            this._nodes.push(this._luminanceNode);
	            this._nodes.push(this._meanHBlurNode);
	            this._nodes.push(this._meanVBlurNode);
	            this._nodes.push(this._glassNode);
	
	            this._inputsNames = _DefinitionsDefinitionsJs2["default"].CROPRECT.inputs;
	            this._displayName = "CropMeanBlurNode";
	        } else if (padMode == 1) {
	            //crop black pad
	            //cropblack pad
	            var cropWidth = this._cropRect[2] * videoSize[0]; //crop width of video
	            var cropHeight = this._cropRect[3] * videoSize[1]; //crop height of video
	
	            if (cropWidth >= 1.0 && cropHeight >= 1.0) {
	                if (cropWidth / cropHeight > canvasSize[0] / canvasSize[1]) {
	                    var h = canvasSize[0] / cropWidth * cropHeight;
	                    var y = (canvasSize[1] - h) / 2.0 / canvasSize[1];
	                    var sh = h / canvasSize[1];
	                    this._centerRect = [0.0, y, 1.0, sh];
	                } else {
	                    var w = canvasSize[1] / cropHeight * cropWidth;
	                    var x = (canvasSize[0] - w) / 2.0 / canvasSize[0];
	                    var sw = w / canvasSize[0];
	                    this._centerRect = [x, 0.0, sw, 1.0];
	                }
	            }
	
	            this._inputNode = ctx.effect(_DefinitionsDefinitionsJs2["default"].CROPBLACK);
	            this._inputNode.cropRect = this._cropRect;
	            this._inputNode.centerRect = this._centerRect;
	
	            this._outputNode = this._inputNode;
	
	            this._nodes.push(this._inputNode);
	
	            this._inputsNames = _DefinitionsDefinitionsJs2["default"].CROPBLACK.inputs;
	            this._displayName = "CropBlackPadNode";
	        } else {
	            //crop glassblur pad
	            //crop
	            //saturation
	            //horiz gaussian blur
	            //vertical gaussian blur
	            //luminance
	            //glass blur
	            var cropWidth = this._cropRect[2] * videoSize[0]; //crop width of video
	            var cropHeight = this._cropRect[3] * videoSize[1]; //crop height of video
	
	            this._inputNode = ctx.effect(_DefinitionsDefinitionsJs2["default"].CROPRECT);
	            this._inputNode.cropRect = this._cropRect;
	
	            //after crop, videoSize = [cropWidth, cropHeight]
	            videoSize = [cropWidth, cropHeight];
	            var cropInside = false;
	
	            //calc
	            var left = [0.0, 0.0, 0.0, 0.0];
	            var right = [0.0, 0.0, 0.0, 0.0];
	            var leftCropRect = [0.0, 0.0, 0.0, 0.0];
	            var rightCropRect = [0.0, 0.0, 0.0, 0.0];
	
	            var inRatio = videoSize[0] / videoSize[1];
	            var forceRatio = canvasSize[0] / canvasSize[1];
	            if (forceRatio > inRatio) {
	                var _scale3 = canvasSize[1] / videoSize[1];
	                var scaleWidth = videoSize[0] * _scale3;
	                var padw = (canvasSize[0] - scaleWidth) / 2.0;
	                left[0] = 0.0;
	                left[1] = 0.0;
	                left[2] = padw / canvasSize[0];
	                left[3] = 1.0;
	                right[0] = (canvasSize[0] - padw) / canvasSize[0];
	                right[1] = 0.0;
	                right[2] = padw / canvasSize[0];
	                right[3] = 1.0;
	                this._centerRect[0] = padw / canvasSize[0];
	                this._centerRect[1] = 0.0;
	                this._centerRect[2] = scaleWidth / canvasSize[0];
	                this._centerRect[3] = 1.0;
	
	                if (scaleWidth / 2.0 <= padw) {
	                    var cropScale = scaleWidth / 2.0 / padw;
	                    var cropH = canvasSize[1] * cropScale;
	                    var cropy = (canvasSize[1] - cropH) / 2.0;
	                    //let cropx = 0.0;
	                    leftCropRect[0] = 0.0;
	                    leftCropRect[1] = cropy / canvasSize[1];
	                    leftCropRect[2] = 0.5;
	                    leftCropRect[3] = cropScale;
	                    rightCropRect[0] = 0.5;
	                    rightCropRect[1] = cropy / canvasSize[1];
	                    rightCropRect[2] = 0.5;
	                    rightCropRect[3] = cropScale;
	                } else {
	                    if (cropInside) {
	                        leftCropRect[0] = (scaleWidth / 2.0 - padw) / scaleWidth;
	                        leftCropRect[1] = 0.0;
	                        leftCropRect[2] = padw / scaleWidth;
	                        leftCropRect[3] = 1.0;
	                        rightCropRect[0] = 0.5;
	                        rightCropRect[1] = 0.0;
	                        rightCropRect[2] = padw / scaleWidth;
	                        rightCropRect[3] = 1.0;
	                    } else {
	                        leftCropRect[0] = 0.0;
	                        leftCropRect[1] = 0.0;
	                        leftCropRect[2] = padw / scaleWidth;
	                        leftCropRect[3] = 1.0;
	                        rightCropRect[0] = 1.0 - padw / scaleWidth;
	                        rightCropRect[1] = 0.0;
	                        rightCropRect[2] = padw / scaleWidth;
	                        rightCropRect[3] = 1.0;
	                    }
	                }
	            } //endif forceRatio > inRatio
	            else {
	                    var _scale4 = canvasSize[0] / videoSize[0];
	                    var scaleHeight = videoSize[1] * _scale4;
	                    var padh = (canvasSize[1] - scaleHeight) / 2.0;
	                    left[0] = 0.0;
	                    left[1] = 0.0;
	                    left[2] = 1.0;
	                    left[3] = padh / canvasSize[1];
	                    right[0] = 0.0;
	                    right[1] = 1.0 - padh / canvasSize[1];
	                    right[2] = 1.0;
	                    right[3] = padh / canvasSize[1];
	                    this._centerRect[1] = padh / canvasSize[1];
	                    this._centerRect[2] = 1.0;
	                    this._centerRect[3] = scaleHeight / canvasSize[1];
	
	                    if (scaleHeight / 2.0 <= padh) {
	                        var cropScale = scaleHeight / 2.0 / padh;
	                        var cropw = canvasSize[0] * cropScale;
	                        var cropx = (canvasSize[0] - cropw) / 2.0;
	                        //let cropy = 0.0;
	                        leftCropRect.one = cropx / canvasSize[0];
	                        leftCropRect.two = 0.0;
	                        leftCropRect.three = cropScale;
	                        leftCropRect.four = 0.5;
	                        rightCropRect.one = cropx / canvasSize[0];
	                        rightCropRect.two = 0.5;
	                        rightCropRect.three = cropScale;
	                        rightCropRect.four = 0.5;
	                    } else {
	                        if (cropInside) {
	                            leftCropRect.one = 0.0;
	                            leftCropRect.two = (scaleHeight / 2.0 - padh) / scaleHeight;
	                            leftCropRect.three = 1.0;
	                            leftCropRect.four = padh / scaleHeight;
	                            rightCropRect.one = 0.0;
	                            rightCropRect.two = 0.5;
	                            rightCropRect.three = 1.0;
	                            rightCropRect.four = padh / scaleHeight;
	                        } else {
	                            leftCropRect.one = 0.0;
	                            leftCropRect.two = 0.0;
	                            leftCropRect.three = 1.0;
	                            leftCropRect.four = padh / scaleHeight;
	                            rightCropRect.one = 0.0;
	                            rightCropRect.two = 1.0 - padh / scaleHeight;
	                            rightCropRect.three = 1.0;
	                            rightCropRect.four = padh / scaleHeight;
	                        }
	                    }
	                }
	
	            var scale = 0.3;
	            this._saturationNode = ctx.effect(_DefinitionsDefinitionsJs2["default"].SATURATION);
	            this._hBlurNode = ctx.effect(_DefinitionsDefinitionsJs2["default"].GAUSSIAN_CONST_HBLUR);
	            this._vBlurNode = ctx.effect(_DefinitionsDefinitionsJs2["default"].GAUSSIAN_CONST_VBLUR);
	            this._luminanceNode = ctx.effect(_DefinitionsDefinitionsJs2["default"].LUMINANCE);
	            this._glassNode = ctx.effect(_DefinitionsDefinitionsJs2["default"].GLASSBLUR);
	            this._saturationNode.saturation = 0.65;
	            this._luminanceNode.rangeReduction = 0.5;
	            this._hBlurNode.texelWidthOffset = 1.0 / (videoSize[0] * scale);
	            this._hBlurNode.texelHeightOffset = 1.0 / (videoSize[1] * scale);
	            this._vBlurNode.texelWidthOffset = 1.0 / (videoSize[0] * scale);
	            this._vBlurNode.texelHeightOffset = 1.0 / (videoSize[1] * scale);
	            this._saturationNode._setScale(scale);
	            this._hBlurNode._setScale(scale);
	            this._vBlurNode._setScale(scale);
	            this._luminanceNode._setScale(scale);
	            this._glassNode.left = left;
	            this._glassNode.right = right;
	            this._glassNode.leftCropRect = leftCropRect;
	            this._glassNode.centerRect = this._centerRect;
	
	            this._inputNode.connect(this._saturationNode);
	            this._saturationNode.connect(this._hBlurNode);
	            this._hBlurNode.connect(this._vBlurNode);
	            this._vBlurNode.connect(this._luminanceNode);
	            this._inputNode.connect(this._glassNode);
	            this._luminanceNode.connect(this._glassNode);
	
	            this._outputNode = this._glassNode;
	
	            this._nodes.push(this._inputNode);
	            this._nodes.push(this._saturationNode);
	            this._nodes.push(this._hBlurNode);
	            this._nodes.push(this._vBlurNode);
	            this._nodes.push(this._luminanceNode);
	            this._nodes.push(this._glassNode);
	
	            this._inputsNames = _DefinitionsDefinitionsJs2["default"].CROPRECT.inputs;
	            this._displayName = "CropGlassBlurNode";
	        }
	    }
	
	    _createClass(PadNode, [{
	        key: "_updateParams",
	        value: function _updateParams(canvasSize, videoSize, cropRect) {
	            var centerRect = [0.0, 0.0, 1.0, 1.0];
	
	            if (this._padMode == 2) {
	                //crop meanblur pad
	                var cropWidth = cropRect[2] * videoSize[0]; //crop width of video
	                var cropHeight = cropRect[3] * videoSize[1]; //crop height of video
	                //after crop, videoSize = [cropWidth, cropHeight]
	                videoSize = [cropWidth, cropHeight];
	                var cropInside = false;
	
	                //calc
	                var left = [0.0, 0.0, 0.0, 0.0];
	                var right = [0.0, 0.0, 0.0, 0.0];
	                var leftCropRect = [0.0, 0.0, 0.0, 0.0];
	                var rightCropRect = [0.0, 0.0, 0.0, 0.0];
	
	                var inRatio = videoSize[0] / videoSize[1];
	                var forceRatio = canvasSize[0] / canvasSize[1];
	                if (forceRatio > inRatio) {
	                    var _scale5 = canvasSize[1] / videoSize[1];
	                    var scaleWidth = videoSize[0] * _scale5;
	                    var padw = (canvasSize[0] - scaleWidth) / 2.0;
	                    left[0] = 0.0;
	                    left[1] = 0.0;
	                    left[2] = padw / canvasSize[0];
	                    left[3] = 1.0;
	                    right[0] = (canvasSize[0] - padw) / canvasSize[0];
	                    right[1] = 0.0;
	                    right[2] = padw / canvasSize[0];
	                    right[3] = 1.0;
	                    centerRect[0] = padw / canvasSize[0];
	                    centerRect[1] = 0.0;
	                    centerRect[2] = scaleWidth / canvasSize[0];
	                    centerRect[3] = 1.0;
	
	                    if (scaleWidth / 2.0 <= padw) {
	                        var cropScale = scaleWidth / 2.0 / padw;
	                        var cropH = canvasSize[1] * cropScale;
	                        var cropy = (canvasSize[1] - cropH) / 2.0;
	                        //let cropx = 0.0;
	                        leftCropRect[0] = 0.0;
	                        leftCropRect[1] = cropy / canvasSize[1];
	                        leftCropRect[2] = 0.5;
	                        leftCropRect[3] = cropScale;
	                        rightCropRect[0] = 0.5;
	                        rightCropRect[1] = cropy / canvasSize[1];
	                        rightCropRect[2] = 0.5;
	                        rightCropRect[3] = cropScale;
	                    } else {
	                        if (cropInside) {
	                            leftCropRect[0] = (scaleWidth / 2.0 - padw) / scaleWidth;
	                            leftCropRect[1] = 0.0;
	                            leftCropRect[2] = padw / scaleWidth;
	                            leftCropRect[3] = 1.0;
	                            rightCropRect[0] = 0.5;
	                            rightCropRect[1] = 0.0;
	                            rightCropRect[2] = padw / scaleWidth;
	                            rightCropRect[3] = 1.0;
	                        } else {
	                            leftCropRect[0] = 0.0;
	                            leftCropRect[1] = 0.0;
	                            leftCropRect[2] = padw / scaleWidth;
	                            leftCropRect[3] = 1.0;
	                            rightCropRect[0] = 1.0 - padw / scaleWidth;
	                            rightCropRect[1] = 0.0;
	                            rightCropRect[2] = padw / scaleWidth;
	                            rightCropRect[3] = 1.0;
	                        }
	                    }
	                } //endif forceRatio > inRatio
	                else {
	                        var _scale6 = canvasSize[0] / videoSize[0];
	                        var scaleHeight = videoSize[1] * _scale6;
	                        var padh = (canvasSize[1] - scaleHeight) / 2.0;
	                        left[0] = 0.0;
	                        left[1] = 0.0;
	                        left[2] = 1.0;
	                        left[3] = padh / canvasSize[1];
	                        right[0] = 0.0;
	                        right[1] = 1.0 - padh / canvasSize[1];
	                        right[2] = 1.0;
	                        right[3] = padh / canvasSize[1];
	                        centerRect[0] = 0.0;
	                        centerRect[1] = padh / canvasSize[1];
	                        centerRect[2] = 1.0;
	                        centerRect[3] = scaleHeight / canvasSize[1];
	
	                        if (scaleHeight / 2.0 <= padh) {
	                            var cropScale = scaleHeight / 2.0 / padh;
	                            var cropw = canvasSize[0] * cropScale;
	                            var cropx = (canvasSize[0] - cropw) / 2.0;
	                            //let cropy = 0.0;
	                            leftCropRect.one = cropx / canvasSize[0];
	                            leftCropRect.two = 0.0;
	                            leftCropRect.three = cropScale;
	                            leftCropRect.four = 0.5;
	                            rightCropRect.one = cropx / canvasSize[0];
	                            rightCropRect.two = 0.5;
	                            rightCropRect.three = cropScale;
	                            rightCropRect.four = 0.5;
	                        } else {
	                            if (cropInside) {
	                                leftCropRect.one = 0.0;
	                                leftCropRect.two = (scaleHeight / 2.0 - padh) / scaleHeight;
	                                leftCropRect.three = 1.0;
	                                leftCropRect.four = padh / scaleHeight;
	                                rightCropRect.one = 0.0;
	                                rightCropRect.two = 0.5;
	                                rightCropRect.three = 1.0;
	                                rightCropRect.four = padh / scaleHeight;
	                            } else {
	                                leftCropRect.one = 0.0;
	                                leftCropRect.two = 0.0;
	                                leftCropRect.three = 1.0;
	                                leftCropRect.four = padh / scaleHeight;
	                                rightCropRect.one = 0.0;
	                                rightCropRect.two = 1.0 - padh / scaleHeight;
	                                rightCropRect.three = 1.0;
	                                rightCropRect.four = padh / scaleHeight;
	                            }
	                        }
	                    }
	
	                var scale = 0.3;
	                var meanBlurRadius = 18.0;
	
	                this._inputNode.cropRect = cropRect;
	                this._hBlurNode.texelWidthOffset = 1.0 / (videoSize[0] * scale);
	                this._hBlurNode.texelHeightOffset = 1.0 / (videoSize[1] * scale);
	                this._vBlurNode.texelWidthOffset = 1.0 / (videoSize[0] * scale);
	                this._vBlurNode.texelHeightOffset = 1.0 / (videoSize[1] * scale);
	
	                this._meanHBlurNode.texelWidthOffset = 1.0 / (videoSize[0] * scale);
	                this._meanHBlurNode.texelHeightOffset = 1.0 / (videoSize[1] * scale);
	                this._meanHBlurNode.blurRadius = meanBlurRadius;
	                this._meanVBlurNode.texelWidthOffset = 1.0 / (videoSize[0] * scale);
	                this._meanVBlurNode.texelHeightOffset = 1.0 / (videoSize[1] * scale);
	                this._meanVBlurNode.blurRadius = meanBlurRadius;
	                this._glassNode.left = left;
	                this._glassNode.right = right;
	                this._glassNode.leftCropRect = leftCropRect;
	                this._glassNode.rightCropRect = rightCropRect;
	                this._glassNode.centerRect = centerRect;
	            } else if (this._padMode == 1) {
	                //crop black pad
	                //cropblack pad
	                var cropWidth = cropRect[2] * videoSize[0]; //crop width of video
	                var cropHeight = cropRect[3] * videoSize[1]; //crop height of video
	
	                if (cropWidth >= 1.0 && cropHeight >= 1.0) {
	                    if (cropWidth / cropHeight > canvasSize[0] / canvasSize[1]) {
	                        var h = canvasSize[0] / cropWidth * cropHeight;
	                        var y = (canvasSize[1] - h) / 2.0 / canvasSize[1];
	                        var sh = h / canvasSize[1];
	                        centerRect = [0.0, y, 1.0, sh];
	                    } else {
	                        var w = canvasSize[1] / cropHeight * cropWidth;
	                        var x = (canvasSize[0] - w) / 2.0 / canvasSize[0];
	                        var sw = w / canvasSize[0];
	                        centerRect = [x, 0.0, sw, 1.0];
	                    }
	                }
	
	                this._inputNode.cropRect = cropRect;
	                this._inputNode.centerRect = centerRect;
	            } else {
	                //crop glassblur pad
	                //crop
	                //saturation
	                //horiz gaussian blur
	                //vertical gaussian blur
	                //luminance
	                //glass blur
	
	                var cropWidth = cropRect[2] * videoSize[0]; //crop width of video
	                var cropHeight = cropRect[3] * videoSize[1]; //crop height of video
	
	                //after crop, videoSize = [cropWidth, cropHeight]
	                videoSize = [cropWidth, cropHeight];
	                var cropInside = false;
	
	                //calc
	                var left = [0.0, 0.0, 0.0, 0.0];
	                var right = [0.0, 0.0, 0.0, 0.0];
	                var leftCropRect = [0.0, 0.0, 0.0, 0.0];
	                var rightCropRect = [0.0, 0.0, 0.0, 0.0];
	
	                var inRatio = videoSize[0] / videoSize[1];
	                var forceRatio = canvasSize[0] / canvasSize[1];
	                if (forceRatio > inRatio) {
	                    var _scale7 = canvasSize[1] / videoSize[1];
	                    var scaleWidth = videoSize[0] * _scale7;
	                    var padw = (canvasSize[0] - scaleWidth) / 2.0;
	                    left[0] = 0.0;
	                    left[1] = 0.0;
	                    left[2] = padw / canvasSize[0];
	                    left[3] = 1.0;
	                    right[0] = (canvasSize[0] - padw) / canvasSize[0];
	                    right[1] = 0.0;
	                    right[2] = padw / canvasSize[0];
	                    right[3] = 1.0;
	                    centerRect[0] = padw / canvasSize[0];
	                    centerRect[1] = 0.0;
	                    centerRect[2] = scaleWidth / canvasSize[0];
	                    centerRect[3] = 1.0;
	
	                    if (scaleWidth / 2.0 <= padw) {
	                        var cropScale = scaleWidth / 2.0 / padw;
	                        var cropH = canvasSize[1] * cropScale;
	                        var cropy = (canvasSize[1] - cropH) / 2.0;
	                        //let cropx = 0.0;
	                        leftCropRect[0] = 0.0;
	                        leftCropRect[1] = cropy / canvasSize[1];
	                        leftCropRect[2] = 0.5;
	                        leftCropRect[3] = cropScale;
	                        rightCropRect[0] = 0.5;
	                        rightCropRect[1] = cropy / canvasSize[1];
	                        rightCropRect[2] = 0.5;
	                        rightCropRect[3] = cropScale;
	                    } else {
	                        if (cropInside) {
	                            leftCropRect[0] = (scaleWidth / 2.0 - padw) / scaleWidth;
	                            leftCropRect[1] = 0.0;
	                            leftCropRect[2] = padw / scaleWidth;
	                            leftCropRect[3] = 1.0;
	                            rightCropRect[0] = 0.5;
	                            rightCropRect[1] = 0.0;
	                            rightCropRect[2] = padw / scaleWidth;
	                            rightCropRect[3] = 1.0;
	                        } else {
	                            leftCropRect[0] = 0.0;
	                            leftCropRect[1] = 0.0;
	                            leftCropRect[2] = padw / scaleWidth;
	                            leftCropRect[3] = 1.0;
	                            rightCropRect[0] = 1.0 - padw / scaleWidth;
	                            rightCropRect[1] = 0.0;
	                            rightCropRect[2] = padw / scaleWidth;
	                            rightCropRect[3] = 1.0;
	                        }
	                    }
	                } //endif forceRatio > inRatio
	                else {
	                        var _scale8 = canvasSize[0] / videoSize[0];
	                        var scaleHeight = videoSize[1] * _scale8;
	                        var padh = (canvasSize[1] - scaleHeight) / 2.0;
	                        left[0] = 0.0;
	                        left[1] = 0.0;
	                        left[2] = 1.0;
	                        left[3] = padh / canvasSize[1];
	                        right[0] = 0.0;
	                        right[1] = 1.0 - padh / canvasSize[1];
	                        right[2] = 1.0;
	                        right[3] = padh / canvasSize[1];
	                        centerRect[0] = 0.0;
	                        centerRect[1] = padh / canvasSize[1];
	                        centerRect[2] = 1.0;
	                        centerRect[3] = scaleHeight / canvasSize[1];
	
	                        if (scaleHeight / 2.0 <= padh) {
	                            var cropScale = scaleHeight / 2.0 / padh;
	                            var cropw = canvasSize[0] * cropScale;
	                            var cropx = (canvasSize[0] - cropw) / 2.0;
	                            //let cropy = 0.0;
	                            leftCropRect.one = cropx / canvasSize[0];
	                            leftCropRect.two = 0.0;
	                            leftCropRect.three = cropScale;
	                            leftCropRect.four = 0.5;
	                            rightCropRect.one = cropx / canvasSize[0];
	                            rightCropRect.two = 0.5;
	                            rightCropRect.three = cropScale;
	                            rightCropRect.four = 0.5;
	                        } else {
	                            if (cropInside) {
	                                leftCropRect.one = 0.0;
	                                leftCropRect.two = (scaleHeight / 2.0 - padh) / scaleHeight;
	                                leftCropRect.three = 1.0;
	                                leftCropRect.four = padh / scaleHeight;
	                                rightCropRect.one = 0.0;
	                                rightCropRect.two = 0.5;
	                                rightCropRect.three = 1.0;
	                                rightCropRect.four = padh / scaleHeight;
	                            } else {
	                                leftCropRect.one = 0.0;
	                                leftCropRect.two = 0.0;
	                                leftCropRect.three = 1.0;
	                                leftCropRect.four = padh / scaleHeight;
	                                rightCropRect.one = 0.0;
	                                rightCropRect.two = 1.0 - padh / scaleHeight;
	                                rightCropRect.three = 1.0;
	                                rightCropRect.four = padh / scaleHeight;
	                            }
	                        }
	                    }
	
	                var scale = 0.3;
	                this._inputNode.cropRect = cropRect;
	                this._saturationNode.saturation = 0.65;
	                this._luminanceNode.rangeReduction = 0.5;
	                this._hBlurNode.texelWidthOffset = 1.0 / (videoSize[0] * scale);
	                this._hBlurNode.texelHeightOffset = 1.0 / (videoSize[1] * scale);
	                this._vBlurNode.texelWidthOffset = 1.0 / (videoSize[0] * scale);
	                this._vBlurNode.texelHeightOffset = 1.0 / (videoSize[1] * scale);
	                this._glassNode.left = left;
	                this._glassNode.right = right;
	                this._glassNode.leftCropRect = leftCropRect;
	                this._glassNode.rightCropRect = rightCropRect;
	                this._glassNode.centerRect = centerRect;
	            }
	
	            this._cropRect = cropRect;
	            this._videoSize = videoSize;
	            this._canvasSize = canvasSize;
	            this._centerRect = centerRect;
	        }
	    }, {
	        key: "setCanvasSize",
	        value: function setCanvasSize(size) {
	            if (size[0] < 1.0) {
	                size[0] = 1.0;
	            }
	            if (size[1] < 1.0) {
	                size[1] = 1.0;
	            }
	
	            this._canvasSize = size;
	
	            this._updateParams(this._canvasSize, this._videoSize, this._cropRect);
	        }
	    }, {
	        key: "setVideoSize",
	        value: function setVideoSize(size) {
	            if (size[0] < 1.0) {
	                size[0] = 1.0;
	            }
	            if (size[1] < 1.0) {
	                size[1] = 1.0;
	            }
	
	            this._videoSize = size;
	
	            this._updateParams(this._canvasSize, this._videoSize, this._cropRect);
	        }
	    }, {
	        key: "setCropRect",
	        value: function setCropRect(rect) {
	            if (rect == undefined) {
	                rect = [0.0, 0.0, 1.0, 1.0];
	            } else {
	                if (rect[0] < 0.0) {
	                    rect[0] = 0.0;
	                }
	                if (rect[1] < 0.0) {
	                    rect[1] = 0.0;
	                }
	                if (rect[2] < 0.0) {
	                    rect[2] = 0.0;
	                }
	                if (rect[3] < 0.0) {
	                    rect[3] = 0.0;
	                }
	
	                if (rect[2] + rect[0] > 1.0) {
	                    rect[2] = 1.0 - rect[0];
	                }
	                if (rect[4] + rect[1] > 1.0) {
	                    rect[4] = 1.0 - rect[1];
	                }
	            }
	
	            this._cropRect = rect;
	
	            this._updateParams(this._canvasSize, this._videoSize, this._cropRect);
	        }
	
	        /**
	        * Get a string representation of the class name.
	        *
	        * @return String A string of the class name.
	        */
	    }, {
	        key: "connect",
	
	        /**
	        * Connect this node to the targetNode
	        * 
	        * @param {GraphNode} targetNode - the node to connect.
	        * @param {(number| String)} [targetPort] - the port on the targetNode to connect to, this can be an index, a string identifier, or undefined (in which case the next available port will be connected to).
	        * 
	        */
	        value: function connect(targetNode, targetPort) {
	            if (this instanceof PadNode) {
	                return this._renderGraph.registerConnection(this._outputNode, targetNode, targetPort);
	            } else {
	                return this._renderGraph.registerConnection(this, targetNode, targetPort);
	            }
	        }
	
	        /**
	        * Disconnect this node from the targetNode. If targetNode is undefind remove all out-bound connections.
	        *
	        * @param {GraphNode} [targetNode] - the node to disconnect from. If undefined, disconnect from all nodes.
	        *
	        */
	    }, {
	        key: "disconnect",
	        value: function disconnect(targetNode) {
	            var _this = this;
	
	            if (this instanceof PadNode) {
	                if (targetNode === undefined) {
	                    var toRemove = this._renderGraph.getOutputsForNode(this._outputNode);
	                    toRemove.forEach(function (target) {
	                        return _this._renderGraph.unregisterConnection(_this._outputNode, target);
	                    });
	                    if (toRemove.length > 0) return true;
	                    return false;
	                }
	                return this._renderGraph.unregisterConnection(this._outputNode, targetNode);
	            } else {
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
	        }
	
	        /**
	        * Destory this node, removing it from the graph.
	        */
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            if (this instanceof PadNode) {
	                this.disconnect();
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = this.inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var input = _step.value;
	
	                        input.disconnect(this._inputNode);
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator["return"]) {
	                            _iterator["return"]();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	
	                this._destroyed = true;
	            } else {
	                this.disconnect();
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;
	
	                try {
	                    for (var _iterator2 = this.inputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var input = _step2.value;
	
	                        input.disconnect(this);
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                            _iterator2["return"]();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }
	
	                this._destroyed = true;
	            }
	        }
	
	        //processing
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
	    }, {
	        key: "setProperty",
	        value: function setProperty(name, value) {
	            if (this instanceof PadNode) {
	                this._inputNode._properties[name].value = value;
	            } else {
	                this._properties[name].value = value;
	            }
	        }
	
	        /**
	        * Sets the passed processing node property to the passed value.
	        * @param {string} name - The name of the processing node parameter to get.
	        *
	        * @example 
	        * var ctx = new VideoContext();
	        * var monoNode = ctx.effect(VideoContext.DEFINITIONS.MONOCHROME);
	        * console.log(monoNode.getProperty("inputMix")); //Will output [0.4,0.6,0.2], the default value from the effect definition.
	        * 
	        */
	    }, {
	        key: "getProperty",
	        value: function getProperty(name) {
	            if (this instanceof PadNode) {
	                return this._inputNode._properties[name].value;
	            } else {
	                return this._properties[name].value;
	            }
	        }
	    }, {
	        key: "_update",
	        value: function _update(currentTime) {
	            if (this instanceof PadNode) {
	                this._inputNode._currentTime = currentTime;
	                this._nodes.forEach(function (node) {
	                    node._currentTime = currentTime;
	                });
	            } else {
	                this._currentTime = currentTime;
	            }
	        }
	    }, {
	        key: "_seek",
	        value: function _seek(currentTime) {
	            if (this instanceof PadNode) {
	                this._inputNode._currentTime = currentTime;
	                this._nodes.forEach(function (node) {
	                    node._currentTime = currentTime;
	                });
	            } else {
	                this._currentTime = currentTime;
	            }
	        }
	    }, {
	        key: "_setScale",
	        value: function _setScale(scale) {
	            if (this instanceof PadNode) {
	                this._inputNode._scale = scale;
	            } else {
	                this._scale = scale;
	            }
	        }
	    }, {
	        key: "_render",
	        value: function _render() {
	            this._nodes.forEach(function (node) {
	                node._render();
	            });
	        }
	    }, {
	        key: "displayName",
	        get: function get() {
	            return this._displayName;
	        }
	
	        /**
	        * Get the names of the inputs to this node.
	        *
	        * @return {String[]} An array of the names of the inputs ot the node.
	        */
	    }, {
	        key: "inputNames",
	        get: function get() {
	            if (this instanceof PadNode) {
	                return this._inputNode._inputNames.slice();
	            } else {
	                return this._inputNames.slice();
	            }
	        }
	
	        /**
	        * The maximum number of connections that can be made to this node. If there is not limit this will return Infinity.
	        *
	        * @return {number} The number of connections which can be made to this node.
	        */
	    }, {
	        key: "maximumConnections",
	        get: function get() {
	            if (this._limitConnections === false) return Infinity;
	
	            if (this instanceof PadNode) {
	                return this._inputNode._inputNames.length;
	            }
	
	            return this._inputNames.length;
	        }
	
	        /**
	        * Get an array of all the nodes which connect to this node.
	        *
	        * @return {GraphNode[]} An array of nodes which connect to this node.
	        */
	    }, {
	        key: "inputs",
	        get: function get() {
	            var result = undefined;
	            if (this instanceof PadNode) {
	                result = this._renderGraph.getInputsForNode(this._inputNode);
	            } else {
	                result = this._renderGraph.getInputsForNode(this);
	            }
	
	            result = result.filter(function (n) {
	                return n !== undefined;
	            });
	            return result;
	        }
	
	        /**
	        * Get an array of all the nodes which this node outputs to.
	        *
	        * @return {GraphNode[]} An array of nodes which this node connects to.
	        */
	    }, {
	        key: "outputs",
	        get: function get() {
	            if (this instanceof PadNode) {
	                return this._renderGraph.getOutputsForNode(this._outputNode);
	            } else {
	                return this._renderGraph.getOutputsForNode(this);
	            }
	        }
	
	        /**
	        * Get whether the node has been destroyed or not.
	        *
	        * @return {boolean} A true/false value of whather the node has been destoryed or not.
	        */
	    }, {
	        key: "destroyed",
	        get: function get() {
	            return this._destroyed;
	        }
	    }, {
	        key: "_texture",
	        get: function get() {
	            if (this instanceof PadNode) {
	                return this._outputNode._texture;
	            } else {
	                return this._texture;
	            }
	        }
	    }]);
	
	    return PadNode;
	})(_graphnode2["default"]);
	
	exports["default"] = PadNode;
	module.exports = exports["default"];

/***/ }),
/* 113 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var VideoElementCache = (function () {
	    function VideoElementCache() {
	        var cache_size = arguments.length <= 0 || arguments[0] === undefined ? 3 : arguments[0];
	
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
	            videoElement.src = "";
	            return videoElement;
	        }
	    }, {
	        key: "init",
	        value: function init() {
	            if (!this._elementsInitialised) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    var _loop = function () {
	                        var element = _step.value;
	
	                        try {
	                            element.play().then(function () {
	                                element.pause();
	                            }, function (e) {
	                                if (e.name !== "NotSupportedError") throw e;
	                            });
	                        } catch (e) {
	                            //console.log(e.name);
	                        }
	                    };
	
	                    for (var _iterator = this._elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        _loop();
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator["return"]) {
	                            _iterator["return"]();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }
	            this._elementsInitialised = true;
	        }
	    }, {
	        key: "get",
	        value: function get() {
	            //Try and get an already intialised element.
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = this._elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var _element = _step2.value;
	
	                    // For some reason an uninitialised videoElement has its sr attribute set to the windows href. Hence the below check.
	                    if (_element.src === "" || _element.src === undefined || _element.src === window.location.href) return _element;
	                }
	                //Fallback to creating a new element if non exists.
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                        _iterator2["return"]();
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
	                    if (element.src === "" || element.src === undefined || element.src === window.location.href) count += 1;
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
	                        _iterator3["return"]();
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
	})();
	
	exports["default"] = VideoElementCache;
	module.exports = exports["default"];

/***/ })
/******/ ]);
//# sourceMappingURL=videocontext.commonjs2.js.map
/* eslint-enable */

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lappdefine.ts":
/*!***************************!*\
  !*** ./src/lappdefine.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackImageName: () => (/* binding */ BackImageName),
/* harmony export */   CanvasSize: () => (/* binding */ CanvasSize),
/* harmony export */   CubismLoggingLevel: () => (/* binding */ CubismLoggingLevel),
/* harmony export */   DebugLogEnable: () => (/* binding */ DebugLogEnable),
/* harmony export */   DebugTouchLogEnable: () => (/* binding */ DebugTouchLogEnable),
/* harmony export */   GearImageName: () => (/* binding */ GearImageName),
/* harmony export */   HitAreaNameBody: () => (/* binding */ HitAreaNameBody),
/* harmony export */   HitAreaNameHead: () => (/* binding */ HitAreaNameHead),
/* harmony export */   MOCConsistencyValidationEnable: () => (/* binding */ MOCConsistencyValidationEnable),
/* harmony export */   ModelDir: () => (/* binding */ ModelDir),
/* harmony export */   ModelDirSize: () => (/* binding */ ModelDirSize),
/* harmony export */   MotionGroupIdle: () => (/* binding */ MotionGroupIdle),
/* harmony export */   MotionGroupTapBody: () => (/* binding */ MotionGroupTapBody),
/* harmony export */   PowerImageName: () => (/* binding */ PowerImageName),
/* harmony export */   PriorityForce: () => (/* binding */ PriorityForce),
/* harmony export */   PriorityIdle: () => (/* binding */ PriorityIdle),
/* harmony export */   PriorityNone: () => (/* binding */ PriorityNone),
/* harmony export */   PriorityNormal: () => (/* binding */ PriorityNormal),
/* harmony export */   RenderTargetHeight: () => (/* binding */ RenderTargetHeight),
/* harmony export */   RenderTargetWidth: () => (/* binding */ RenderTargetWidth),
/* harmony export */   ResourcesPath: () => (/* binding */ ResourcesPath),
/* harmony export */   ViewLogicalBottom: () => (/* binding */ ViewLogicalBottom),
/* harmony export */   ViewLogicalLeft: () => (/* binding */ ViewLogicalLeft),
/* harmony export */   ViewLogicalMaxBottom: () => (/* binding */ ViewLogicalMaxBottom),
/* harmony export */   ViewLogicalMaxLeft: () => (/* binding */ ViewLogicalMaxLeft),
/* harmony export */   ViewLogicalMaxRight: () => (/* binding */ ViewLogicalMaxRight),
/* harmony export */   ViewLogicalMaxTop: () => (/* binding */ ViewLogicalMaxTop),
/* harmony export */   ViewLogicalRight: () => (/* binding */ ViewLogicalRight),
/* harmony export */   ViewLogicalTop: () => (/* binding */ ViewLogicalTop),
/* harmony export */   ViewMaxScale: () => (/* binding */ ViewMaxScale),
/* harmony export */   ViewMinScale: () => (/* binding */ ViewMinScale),
/* harmony export */   ViewScale: () => (/* binding */ ViewScale)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/live2dcubismframework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

const CanvasSize = 'auto';
const ViewScale = 1.0;
const ViewMaxScale = 2.0;
const ViewMinScale = 0.8;
const ViewLogicalLeft = -1.0;
const ViewLogicalRight = 1.0;
const ViewLogicalBottom = -1.0;
const ViewLogicalTop = 1.0;
const ViewLogicalMaxLeft = -2.0;
const ViewLogicalMaxRight = 2.0;
const ViewLogicalMaxBottom = -2.0;
const ViewLogicalMaxTop = 2.0;
const ResourcesPath = '../../Resources/';
const BackImageName = 'back_class_normal.png';
const GearImageName = 'icon_gear.png';
const PowerImageName = 'CloseNormal.png';
const ModelDir = [
    'Haru',
    'Hiyori',
    'Mark',
    'Natori',
    'Rice',
    'Mao',
    'Wanko'
];
const ModelDirSize = ModelDir.length;
const MotionGroupIdle = 'Idle';
const MotionGroupTapBody = 'TapBody';
const HitAreaNameHead = 'Head';
const HitAreaNameBody = 'Body';
const PriorityNone = 0;
const PriorityIdle = 1;
const PriorityNormal = 2;
const PriorityForce = 3;
const MOCConsistencyValidationEnable = true;
const DebugLogEnable = true;
const DebugTouchLogEnable = false;
const CubismLoggingLevel = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/live2dcubismframework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).LogLevel_Verbose;
const RenderTargetWidth = 1900;
const RenderTargetHeight = 1000;


/***/ }),

/***/ "./src/lappdelegate.ts":
/*!*****************************!*\
  !*** ./src/lappdelegate.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LAppDelegate: () => (/* binding */ LAppDelegate),
/* harmony export */   frameBuffer: () => (/* binding */ frameBuffer),
/* harmony export */   s_instance: () => (/* binding */ s_instance)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/live2dcubismframework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _lappdefine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts");
/* harmony import */ var _lapplive2dmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lapplive2dmanager */ "./src/lapplive2dmanager.ts");
/* harmony import */ var _lapppal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lapppal */ "./src/lapppal.ts");
/* harmony import */ var _lapptexturemanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lapptexturemanager */ "./src/lapptexturemanager.ts");
/* harmony import */ var _lappview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lappview */ "./src/lappview.ts");
/* harmony import */ var _lappglmanager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lappglmanager */ "./src/lappglmanager.ts");







let s_instance = null;
let frameBuffer = null;
class LAppDelegate {
    static getInstance() {
        if (s_instance == null) {
            s_instance = new LAppDelegate();
        }
        return s_instance;
    }
    static releaseInstance() {
        if (s_instance != null) {
            s_instance.release();
        }
        s_instance = null;
    }
    initialize() {
        document.body.appendChild(_lappglmanager__WEBPACK_IMPORTED_MODULE_6__.canvas);
        if (_lappdefine__WEBPACK_IMPORTED_MODULE_1__.CanvasSize === 'auto') {
            this._resizeCanvas();
        }
        else {
            _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.canvas.width = _lappdefine__WEBPACK_IMPORTED_MODULE_1__.CanvasSize.width;
            _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.canvas.height = _lappdefine__WEBPACK_IMPORTED_MODULE_1__.CanvasSize.height;
        }
        if (!frameBuffer) {
            frameBuffer = _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.getParameter(_lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.FRAMEBUFFER_BINDING);
        }
        _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.enable(_lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.BLEND);
        _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.blendFunc(_lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.SRC_ALPHA, _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.ONE_MINUS_SRC_ALPHA);
        const supportTouch = "ontouchend" in _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.canvas;
        if (supportTouch) {
            _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.canvas.addEventListener('touchstart', onTouchBegan, { passive: true });
            _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.canvas.addEventListener('touchmove', onTouchMoved, { passive: true });
            _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.canvas.addEventListener('touchend', onTouchEnded, { passive: true });
            _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.canvas.addEventListener('touchcancel', onTouchCancel, { passive: true });
        }
        else {
            _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.canvas.addEventListener('mousedown', onClickBegan, { passive: true });
            _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.canvas.addEventListener('mousemove', onMouseMoved, { passive: true });
            _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.canvas.addEventListener('mouseup', onClickEnded, { passive: true });
        }
        this._view.initialize();
        this.initializeCubism();
        return true;
    }
    onResize() {
        this._resizeCanvas();
        this._view.initialize();
        this._view.initializeSprite();
    }
    release() {
        this._textureManager.release();
        this._textureManager = null;
        this._view.release();
        this._view = null;
        _lapplive2dmanager__WEBPACK_IMPORTED_MODULE_2__.LAppLive2DManager.releaseInstance();
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/live2dcubismframework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).dispose();
    }
    run() {
        const loop = () => {
            if (s_instance == null) {
                return;
            }
            _lapppal__WEBPACK_IMPORTED_MODULE_3__.LAppPal.updateTime();
            _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.clearColor(0.0, 0.0, 0.0, 1.0);
            _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.enable(_lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.DEPTH_TEST);
            _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.depthFunc(_lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.LEQUAL);
            _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.clear(_lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.COLOR_BUFFER_BIT | _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.DEPTH_BUFFER_BIT);
            _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.clearDepth(1.0);
            _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.enable(_lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.BLEND);
            _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.blendFunc(_lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.SRC_ALPHA, _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.ONE_MINUS_SRC_ALPHA);
            this._view.render();
            requestAnimationFrame(loop);
        };
        loop();
    }
    createShader() {
        const vertexShaderId = _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.createShader(_lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.VERTEX_SHADER);
        if (vertexShaderId == null) {
            _lapppal__WEBPACK_IMPORTED_MODULE_3__.LAppPal.printMessage('failed to create vertexShader');
            return null;
        }
        const vertexShader = 'precision mediump float;' +
            'attribute vec3 position;' +
            'attribute vec2 uv;' +
            'varying vec2 vuv;' +
            'void main(void)' +
            '{' +
            '   gl_Position = vec4(position, 1.0);' +
            '   vuv = uv;' +
            '}';
        _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.shaderSource(vertexShaderId, vertexShader);
        _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.compileShader(vertexShaderId);
        const fragmentShaderId = _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.createShader(_lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.FRAGMENT_SHADER);
        if (fragmentShaderId == null) {
            _lapppal__WEBPACK_IMPORTED_MODULE_3__.LAppPal.printMessage('failed to create fragmentShader');
            return null;
        }
        const fragmentShader = 'precision mediump float;' +
            'varying vec2 vuv;' +
            'uniform sampler2D texture;' +
            'void main(void)' +
            '{' +
            '   gl_FragColor = texture2D(texture, vuv);' +
            '}';
        _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.shaderSource(fragmentShaderId, fragmentShader);
        _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.compileShader(fragmentShaderId);
        const programId = _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.createProgram();
        _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.attachShader(programId, vertexShaderId);
        _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.attachShader(programId, fragmentShaderId);
        _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.deleteShader(vertexShaderId);
        _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.deleteShader(fragmentShaderId);
        _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.linkProgram(programId);
        _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.useProgram(programId);
        return programId;
    }
    getView() {
        return this._view;
    }
    getTextureManager() {
        return this._textureManager;
    }
    constructor() {
        this._captured = false;
        this._mouseX = 0.0;
        this._mouseY = 0.0;
        this._isEnd = false;
        this._cubismOption = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/live2dcubismframework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this._view = new _lappview__WEBPACK_IMPORTED_MODULE_5__.LAppView();
        this._textureManager = new _lapptexturemanager__WEBPACK_IMPORTED_MODULE_4__.LAppTextureManager();
    }
    initializeCubism() {
        this._cubismOption.logFunction = _lapppal__WEBPACK_IMPORTED_MODULE_3__.LAppPal.printMessage;
        this._cubismOption.loggingLevel = _lappdefine__WEBPACK_IMPORTED_MODULE_1__.CubismLoggingLevel;
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/live2dcubismframework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).startUp(this._cubismOption);
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/live2dcubismframework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).initialize();
        _lapplive2dmanager__WEBPACK_IMPORTED_MODULE_2__.LAppLive2DManager.getInstance();
        _lapppal__WEBPACK_IMPORTED_MODULE_3__.LAppPal.updateTime();
        this._view.initializeSprite();
    }
    _resizeCanvas() {
        _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.canvas.width = _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.canvas.clientWidth * window.devicePixelRatio;
        _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.canvas.height = _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.canvas.clientHeight * window.devicePixelRatio;
        _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.viewport(0, 0, _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.drawingBufferWidth, _lappglmanager__WEBPACK_IMPORTED_MODULE_6__.gl.drawingBufferHeight);
    }
}
function onClickBegan(e) {
    if (!LAppDelegate.getInstance()._view) {
        _lapppal__WEBPACK_IMPORTED_MODULE_3__.LAppPal.printMessage('view notfound');
        return;
    }
    LAppDelegate.getInstance()._captured = true;
    const posX = e.pageX;
    const posY = e.pageY;
    LAppDelegate.getInstance()._view.onTouchesBegan(posX, posY);
}
function onMouseMoved(e) {
    if (!LAppDelegate.getInstance()._captured) {
        return;
    }
    if (!LAppDelegate.getInstance()._view) {
        _lapppal__WEBPACK_IMPORTED_MODULE_3__.LAppPal.printMessage('view notfound');
        return;
    }
    const rect = e.target.getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesMoved(posX, posY);
}
function onClickEnded(e) {
    LAppDelegate.getInstance()._captured = false;
    if (!LAppDelegate.getInstance()._view) {
        _lapppal__WEBPACK_IMPORTED_MODULE_3__.LAppPal.printMessage('view notfound');
        return;
    }
    const rect = e.target.getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
}
function onTouchBegan(e) {
    if (!LAppDelegate.getInstance()._view) {
        _lapppal__WEBPACK_IMPORTED_MODULE_3__.LAppPal.printMessage('view notfound');
        return;
    }
    LAppDelegate.getInstance()._captured = true;
    const posX = e.changedTouches[0].pageX;
    const posY = e.changedTouches[0].pageY;
    LAppDelegate.getInstance()._view.onTouchesBegan(posX, posY);
}
function onTouchMoved(e) {
    if (!LAppDelegate.getInstance()._captured) {
        return;
    }
    if (!LAppDelegate.getInstance()._view) {
        _lapppal__WEBPACK_IMPORTED_MODULE_3__.LAppPal.printMessage('view notfound');
        return;
    }
    const rect = e.target.getBoundingClientRect();
    const posX = e.changedTouches[0].clientX - rect.left;
    const posY = e.changedTouches[0].clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesMoved(posX, posY);
}
function onTouchEnded(e) {
    LAppDelegate.getInstance()._captured = false;
    if (!LAppDelegate.getInstance()._view) {
        _lapppal__WEBPACK_IMPORTED_MODULE_3__.LAppPal.printMessage('view notfound');
        return;
    }
    const rect = e.target.getBoundingClientRect();
    const posX = e.changedTouches[0].clientX - rect.left;
    const posY = e.changedTouches[0].clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
}
function onTouchCancel(e) {
    LAppDelegate.getInstance()._captured = false;
    if (!LAppDelegate.getInstance()._view) {
        _lapppal__WEBPACK_IMPORTED_MODULE_3__.LAppPal.printMessage('view notfound');
        return;
    }
    const rect = e.target.getBoundingClientRect();
    const posX = e.changedTouches[0].clientX - rect.left;
    const posY = e.changedTouches[0].clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
}


/***/ }),

/***/ "./src/lappglmanager.ts":
/*!******************************!*\
  !*** ./src/lappglmanager.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LAppGlManager: () => (/* binding */ LAppGlManager),
/* harmony export */   canvas: () => (/* binding */ canvas),
/* harmony export */   gl: () => (/* binding */ gl),
/* harmony export */   s_instance: () => (/* binding */ s_instance)
/* harmony export */ });
let canvas = null;
let gl = null;
let s_instance = null;
class LAppGlManager {
    static getInstance() {
        if (s_instance == null) {
            s_instance = new LAppGlManager();
        }
        return s_instance;
    }
    static releaseInstance() {
        if (s_instance != null) {
            s_instance.release();
        }
        s_instance = null;
    }
    constructor() {
        canvas = document.createElement('canvas');
        gl = canvas.getContext('webgl2');
        if (!gl) {
            alert('Cannot initialize WebGL. This browser does not support.');
            gl = null;
            document.body.innerHTML =
                'This browser does not support the <code>&lt;canvas&gt;</code> element.';
        }
    }
    release() { }
}


/***/ }),

/***/ "./src/lapplive2dmanager.ts":
/*!**********************************!*\
  !*** ./src/lapplive2dmanager.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LAppLive2DManager: () => (/* binding */ LAppLive2DManager),
/* harmony export */   s_instance: () => (/* binding */ s_instance)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/math/cubismmatrix44'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _lappdefine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts");
/* harmony import */ var _lappglmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lappglmanager */ "./src/lappglmanager.ts");
/* harmony import */ var _lappmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lappmodel */ "./src/lappmodel.ts");
/* harmony import */ var _lapppal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lapppal */ "./src/lapppal.ts");






let s_instance = null;
class LAppLive2DManager {
    static getInstance() {
        if (s_instance == null) {
            s_instance = new LAppLive2DManager();
        }
        return s_instance;
    }
    static releaseInstance() {
        if (s_instance != null) {
            s_instance = void 0;
        }
        s_instance = null;
    }
    getModel(no) {
        if (no < this._models.getSize()) {
            return this._models.at(no);
        }
        return null;
    }
    releaseAllModel() {
        for (let i = 0; i < this._models.getSize(); i++) {
            this._models.at(i).release();
            this._models.set(i, null);
        }
        this._models.clear();
    }
    onDrag(x, y) {
        for (let i = 0; i < this._models.getSize(); i++) {
            const model = this.getModel(i);
            if (model) {
                model.setDragging(x, y);
            }
        }
    }
    onTap(x, y) {
        if (_lappdefine__WEBPACK_IMPORTED_MODULE_1__.DebugLogEnable) {
            _lapppal__WEBPACK_IMPORTED_MODULE_4__.LAppPal.printMessage(`[APP]tap point: {x: ${x.toFixed(2)} y: ${y.toFixed(2)}}`);
        }
        for (let i = 0; i < this._models.getSize(); i++) {
            if (this._models.at(i).hitTest(_lappdefine__WEBPACK_IMPORTED_MODULE_1__.HitAreaNameHead, x, y)) {
                if (_lappdefine__WEBPACK_IMPORTED_MODULE_1__.DebugLogEnable) {
                    _lapppal__WEBPACK_IMPORTED_MODULE_4__.LAppPal.printMessage(`[APP]hit area: [${_lappdefine__WEBPACK_IMPORTED_MODULE_1__.HitAreaNameHead}]`);
                }
                this._models.at(i).setRandomExpression();
            }
            else if (this._models.at(i).hitTest(_lappdefine__WEBPACK_IMPORTED_MODULE_1__.HitAreaNameBody, x, y)) {
                if (_lappdefine__WEBPACK_IMPORTED_MODULE_1__.DebugLogEnable) {
                    _lapppal__WEBPACK_IMPORTED_MODULE_4__.LAppPal.printMessage(`[APP]hit area: [${_lappdefine__WEBPACK_IMPORTED_MODULE_1__.HitAreaNameBody}]`);
                }
                this._models
                    .at(i)
                    .startRandomMotion(_lappdefine__WEBPACK_IMPORTED_MODULE_1__.MotionGroupTapBody, _lappdefine__WEBPACK_IMPORTED_MODULE_1__.PriorityNormal, this._finishedMotion);
            }
        }
    }
    onUpdate() {
        const { width, height } = _lappglmanager__WEBPACK_IMPORTED_MODULE_2__.canvas;
        const modelCount = this._models.getSize();
        for (let i = 0; i < modelCount; ++i) {
            const projection = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/math/cubismmatrix44'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            const model = this.getModel(i);
            if (model.getModel()) {
                if (model.getModel().getCanvasWidth() > 1.0 && width < height) {
                    model.getModelMatrix().setWidth(2.0);
                    projection.scale(1.0, width / height);
                }
                else {
                    projection.scale(height / width, 1.0);
                }
                if (this._viewMatrix != null) {
                    projection.multiplyByMatrix(this._viewMatrix);
                }
            }
            model.update();
            model.draw(projection);
        }
    }
    nextScene() {
        const no = (this._sceneIndex + 1) % _lappdefine__WEBPACK_IMPORTED_MODULE_1__.ModelDirSize;
        this.changeScene(no);
    }
    changeScene(index) {
        this._sceneIndex = index;
        if (_lappdefine__WEBPACK_IMPORTED_MODULE_1__.DebugLogEnable) {
            _lapppal__WEBPACK_IMPORTED_MODULE_4__.LAppPal.printMessage(`[APP]model index: ${this._sceneIndex}`);
        }
        const model = _lappdefine__WEBPACK_IMPORTED_MODULE_1__.ModelDir[index];
        const modelPath = _lappdefine__WEBPACK_IMPORTED_MODULE_1__.ResourcesPath + model + '/';
        let modelJsonName = _lappdefine__WEBPACK_IMPORTED_MODULE_1__.ModelDir[index];
        modelJsonName += '.model3.json';
        this.releaseAllModel();
        this._models.pushBack(new _lappmodel__WEBPACK_IMPORTED_MODULE_3__.LAppModel());
        this._models.at(0).loadAssets(modelPath, modelJsonName);
    }
    setViewMatrix(m) {
        for (let i = 0; i < 16; i++) {
            this._viewMatrix.getArray()[i] = m.getArray()[i];
        }
    }
    constructor() {
        this._finishedMotion = (self) => {
            _lapppal__WEBPACK_IMPORTED_MODULE_4__.LAppPal.printMessage('Motion Finished:');
            console.log(self);
        };
        this._viewMatrix = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/math/cubismmatrix44'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this._models = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this._sceneIndex = 0;
        this.changeScene(this._sceneIndex);
    }
}


/***/ }),

/***/ "./src/lappmodel.ts":
/*!**************************!*\
  !*** ./src/lappmodel.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LAppModel: () => (/* binding */ LAppModel)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/cubismdefaultparameterid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/cubismmodelsettingjson'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/effect/cubismbreath'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/effect/cubismeyeblink'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/live2dcubismframework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/model/cubismusermodel'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/motion/acubismmotion'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/motion/cubismmotionqueuemanager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmmap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _lappdefine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts");
/* harmony import */ var _lappdelegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lappdelegate */ "./src/lappdelegate.ts");
/* harmony import */ var _lappglmanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lappglmanager */ "./src/lappglmanager.ts");
/* harmony import */ var _lapppal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lapppal */ "./src/lapppal.ts");
/* harmony import */ var _lappwavfilehandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lappwavfilehandler */ "./src/lappwavfilehandler.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/model/cubismmoc'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

















var LoadStep;
(function (LoadStep) {
    LoadStep[LoadStep["LoadAssets"] = 0] = "LoadAssets";
    LoadStep[LoadStep["LoadModel"] = 1] = "LoadModel";
    LoadStep[LoadStep["WaitLoadModel"] = 2] = "WaitLoadModel";
    LoadStep[LoadStep["LoadExpression"] = 3] = "LoadExpression";
    LoadStep[LoadStep["WaitLoadExpression"] = 4] = "WaitLoadExpression";
    LoadStep[LoadStep["LoadPhysics"] = 5] = "LoadPhysics";
    LoadStep[LoadStep["WaitLoadPhysics"] = 6] = "WaitLoadPhysics";
    LoadStep[LoadStep["LoadPose"] = 7] = "LoadPose";
    LoadStep[LoadStep["WaitLoadPose"] = 8] = "WaitLoadPose";
    LoadStep[LoadStep["SetupEyeBlink"] = 9] = "SetupEyeBlink";
    LoadStep[LoadStep["SetupBreath"] = 10] = "SetupBreath";
    LoadStep[LoadStep["LoadUserData"] = 11] = "LoadUserData";
    LoadStep[LoadStep["WaitLoadUserData"] = 12] = "WaitLoadUserData";
    LoadStep[LoadStep["SetupEyeBlinkIds"] = 13] = "SetupEyeBlinkIds";
    LoadStep[LoadStep["SetupLipSyncIds"] = 14] = "SetupLipSyncIds";
    LoadStep[LoadStep["SetupLayout"] = 15] = "SetupLayout";
    LoadStep[LoadStep["LoadMotion"] = 16] = "LoadMotion";
    LoadStep[LoadStep["WaitLoadMotion"] = 17] = "WaitLoadMotion";
    LoadStep[LoadStep["CompleteInitialize"] = 18] = "CompleteInitialize";
    LoadStep[LoadStep["CompleteSetupModel"] = 19] = "CompleteSetupModel";
    LoadStep[LoadStep["LoadTexture"] = 20] = "LoadTexture";
    LoadStep[LoadStep["WaitLoadTexture"] = 21] = "WaitLoadTexture";
    LoadStep[LoadStep["CompleteSetup"] = 22] = "CompleteSetup";
})(LoadStep || (LoadStep = {}));
class LAppModel extends Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/model/cubismusermodel'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) {
    loadAssets(dir, fileName) {
        this._modelHomeDir = dir;
        fetch(`${this._modelHomeDir}${fileName}`)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => {
            const setting = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/cubismmodelsettingjson'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(arrayBuffer, arrayBuffer.byteLength);
            this._state = LoadStep.LoadModel;
            this.setupModel(setting);
        })
            .catch(error => {
            Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`Failed to load file ${this._modelHomeDir}${fileName}`);
        });
    }
    setupModel(setting) {
        this._updating = true;
        this._initialized = false;
        this._modelSetting = setting;
        if (this._modelSetting.getModelFileName() != '') {
            const modelFileName = this._modelSetting.getModelFileName();
            fetch(`${this._modelHomeDir}${modelFileName}`)
                .then(response => {
                if (response.ok) {
                    return response.arrayBuffer();
                }
                else if (response.status >= 400) {
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`Failed to load file ${this._modelHomeDir}${modelFileName}`);
                    return new ArrayBuffer(0);
                }
            })
                .then(arrayBuffer => {
                this.loadModel(arrayBuffer, this._mocConsistency);
                this._state = LoadStep.LoadExpression;
                loadCubismExpression();
            });
            this._state = LoadStep.WaitLoadModel;
        }
        else {
            _lapppal__WEBPACK_IMPORTED_MODULE_4__.LAppPal.printMessage('Model data does not exist.');
        }
        const loadCubismExpression = () => {
            if (this._modelSetting.getExpressionCount() > 0) {
                const count = this._modelSetting.getExpressionCount();
                for (let i = 0; i < count; i++) {
                    const expressionName = this._modelSetting.getExpressionName(i);
                    const expressionFileName = this._modelSetting.getExpressionFileName(i);
                    fetch(`${this._modelHomeDir}${expressionFileName}`)
                        .then(response => {
                        if (response.ok) {
                            return response.arrayBuffer();
                        }
                        else if (response.status >= 400) {
                            Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`Failed to load file ${this._modelHomeDir}${expressionFileName}`);
                            return new ArrayBuffer(0);
                        }
                    })
                        .then(arrayBuffer => {
                        const motion = this.loadExpression(arrayBuffer, arrayBuffer.byteLength, expressionName);
                        if (this._expressions.getValue(expressionName) != null) {
                            Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/motion/acubismmotion'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).delete(this._expressions.getValue(expressionName));
                            this._expressions.setValue(expressionName, null);
                        }
                        this._expressions.setValue(expressionName, motion);
                        this._expressionCount++;
                        if (this._expressionCount >= count) {
                            this._state = LoadStep.LoadPhysics;
                            loadCubismPhysics();
                        }
                    });
                }
                this._state = LoadStep.WaitLoadExpression;
            }
            else {
                this._state = LoadStep.LoadPhysics;
                loadCubismPhysics();
            }
        };
        const loadCubismPhysics = () => {
            if (this._modelSetting.getPhysicsFileName() != '') {
                const physicsFileName = this._modelSetting.getPhysicsFileName();
                fetch(`${this._modelHomeDir}${physicsFileName}`)
                    .then(response => {
                    if (response.ok) {
                        return response.arrayBuffer();
                    }
                    else if (response.status >= 400) {
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`Failed to load file ${this._modelHomeDir}${physicsFileName}`);
                        return new ArrayBuffer(0);
                    }
                })
                    .then(arrayBuffer => {
                    this.loadPhysics(arrayBuffer, arrayBuffer.byteLength);
                    this._state = LoadStep.LoadPose;
                    loadCubismPose();
                });
                this._state = LoadStep.WaitLoadPhysics;
            }
            else {
                this._state = LoadStep.LoadPose;
                loadCubismPose();
            }
        };
        const loadCubismPose = () => {
            if (this._modelSetting.getPoseFileName() != '') {
                const poseFileName = this._modelSetting.getPoseFileName();
                fetch(`${this._modelHomeDir}${poseFileName}`)
                    .then(response => {
                    if (response.ok) {
                        return response.arrayBuffer();
                    }
                    else if (response.status >= 400) {
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`Failed to load file ${this._modelHomeDir}${poseFileName}`);
                        return new ArrayBuffer(0);
                    }
                })
                    .then(arrayBuffer => {
                    this.loadPose(arrayBuffer, arrayBuffer.byteLength);
                    this._state = LoadStep.SetupEyeBlink;
                    setupEyeBlink();
                });
                this._state = LoadStep.WaitLoadPose;
            }
            else {
                this._state = LoadStep.SetupEyeBlink;
                setupEyeBlink();
            }
        };
        const setupEyeBlink = () => {
            if (this._modelSetting.getEyeBlinkParameterCount() > 0) {
                this._eyeBlink = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/effect/cubismeyeblink'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).create(this._modelSetting);
                this._state = LoadStep.SetupBreath;
            }
            setupBreath();
        };
        const setupBreath = () => {
            this._breath = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/effect/cubismbreath'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).create();
            const breathParameters = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            breathParameters.pushBack(new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/effect/cubismbreath'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this._idParamAngleX, 0.0, 15.0, 6.5345, 0.5));
            breathParameters.pushBack(new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/effect/cubismbreath'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this._idParamAngleY, 0.0, 8.0, 3.5345, 0.5));
            breathParameters.pushBack(new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/effect/cubismbreath'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this._idParamAngleZ, 0.0, 10.0, 5.5345, 0.5));
            breathParameters.pushBack(new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/effect/cubismbreath'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this._idParamBodyAngleX, 0.0, 4.0, 15.5345, 0.5));
            breathParameters.pushBack(new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/effect/cubismbreath'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/live2dcubismframework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getIdManager().getId(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/cubismdefaultparameterid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ParamBreath), 0.5, 0.5, 3.2345, 1));
            this._breath.setParameters(breathParameters);
            this._state = LoadStep.LoadUserData;
            loadUserData();
        };
        const loadUserData = () => {
            if (this._modelSetting.getUserDataFile() != '') {
                const userDataFile = this._modelSetting.getUserDataFile();
                fetch(`${this._modelHomeDir}${userDataFile}`)
                    .then(response => {
                    if (response.ok) {
                        return response.arrayBuffer();
                    }
                    else if (response.status >= 400) {
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`Failed to load file ${this._modelHomeDir}${userDataFile}`);
                        return new ArrayBuffer(0);
                    }
                })
                    .then(arrayBuffer => {
                    this.loadUserData(arrayBuffer, arrayBuffer.byteLength);
                    this._state = LoadStep.SetupEyeBlinkIds;
                    setupEyeBlinkIds();
                });
                this._state = LoadStep.WaitLoadUserData;
            }
            else {
                this._state = LoadStep.SetupEyeBlinkIds;
                setupEyeBlinkIds();
            }
        };
        const setupEyeBlinkIds = () => {
            const eyeBlinkIdCount = this._modelSetting.getEyeBlinkParameterCount();
            for (let i = 0; i < eyeBlinkIdCount; ++i) {
                this._eyeBlinkIds.pushBack(this._modelSetting.getEyeBlinkParameterId(i));
            }
            this._state = LoadStep.SetupLipSyncIds;
            setupLipSyncIds();
        };
        const setupLipSyncIds = () => {
            const lipSyncIdCount = this._modelSetting.getLipSyncParameterCount();
            for (let i = 0; i < lipSyncIdCount; ++i) {
                this._lipSyncIds.pushBack(this._modelSetting.getLipSyncParameterId(i));
            }
            this._state = LoadStep.SetupLayout;
            setupLayout();
        };
        const setupLayout = () => {
            const layout = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmmap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            if (this._modelSetting == null || this._modelMatrix == null) {
                Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('Failed to setupLayout().');
                return;
            }
            this._modelSetting.getLayoutMap(layout);
            this._modelMatrix.setupFromLayout(layout);
            this._state = LoadStep.LoadMotion;
            loadCubismMotion();
        };
        const loadCubismMotion = () => {
            this._state = LoadStep.WaitLoadMotion;
            this._model.saveParameters();
            this._allMotionCount = 0;
            this._motionCount = 0;
            const group = [];
            const motionGroupCount = this._modelSetting.getMotionGroupCount();
            for (let i = 0; i < motionGroupCount; i++) {
                group[i] = this._modelSetting.getMotionGroupName(i);
                this._allMotionCount += this._modelSetting.getMotionCount(group[i]);
            }
            for (let i = 0; i < motionGroupCount; i++) {
                this.preLoadMotionGroup(group[i]);
            }
            if (motionGroupCount == 0) {
                this._state = LoadStep.LoadTexture;
                this._motionManager.stopAllMotions();
                this._updating = false;
                this._initialized = true;
                this.createRenderer();
                this.setupTextures();
                this.getRenderer().startUp(_lappglmanager__WEBPACK_IMPORTED_MODULE_3__.gl);
            }
        };
    }
    setupTextures() {
        const usePremultiply = true;
        if (this._state == LoadStep.LoadTexture) {
            const textureCount = this._modelSetting.getTextureCount();
            for (let modelTextureNumber = 0; modelTextureNumber < textureCount; modelTextureNumber++) {
                if (this._modelSetting.getTextureFileName(modelTextureNumber) == '') {
                    console.log('getTextureFileName null');
                    continue;
                }
                let texturePath = this._modelSetting.getTextureFileName(modelTextureNumber);
                texturePath = this._modelHomeDir + texturePath;
                const onLoad = (textureInfo) => {
                    this.getRenderer().bindTexture(modelTextureNumber, textureInfo.id);
                    this._textureCount++;
                    if (this._textureCount >= textureCount) {
                        this._state = LoadStep.CompleteSetup;
                    }
                };
                _lappdelegate__WEBPACK_IMPORTED_MODULE_2__.LAppDelegate.getInstance()
                    .getTextureManager()
                    .createTextureFromPngFile(texturePath, usePremultiply, onLoad);
                this.getRenderer().setIsPremultipliedAlpha(usePremultiply);
            }
            this._state = LoadStep.WaitLoadTexture;
        }
    }
    reloadRenderer() {
        this.deleteRenderer();
        this.createRenderer();
        this.setupTextures();
    }
    update() {
        if (this._state != LoadStep.CompleteSetup)
            return;
        const deltaTimeSeconds = _lapppal__WEBPACK_IMPORTED_MODULE_4__.LAppPal.getDeltaTime();
        this._userTimeSeconds += deltaTimeSeconds;
        this._dragManager.update(deltaTimeSeconds);
        this._dragX = this._dragManager.getX();
        this._dragY = this._dragManager.getY();
        let motionUpdated = false;
        this._model.loadParameters();
        if (this._motionManager.isFinished()) {
            this.startRandomMotion(_lappdefine__WEBPACK_IMPORTED_MODULE_1__.MotionGroupIdle, _lappdefine__WEBPACK_IMPORTED_MODULE_1__.PriorityIdle);
        }
        else {
            motionUpdated = this._motionManager.updateMotion(this._model, deltaTimeSeconds);
        }
        this._model.saveParameters();
        if (!motionUpdated) {
            if (this._eyeBlink != null) {
                this._eyeBlink.updateParameters(this._model, deltaTimeSeconds);
            }
        }
        if (this._expressionManager != null) {
            this._expressionManager.updateMotion(this._model, deltaTimeSeconds);
        }
        this._model.addParameterValueById(this._idParamAngleX, this._dragX * 30);
        this._model.addParameterValueById(this._idParamAngleY, this._dragY * 30);
        this._model.addParameterValueById(this._idParamAngleZ, this._dragX * this._dragY * -30);
        this._model.addParameterValueById(this._idParamBodyAngleX, this._dragX * 10);
        this._model.addParameterValueById(this._idParamEyeBallX, this._dragX);
        this._model.addParameterValueById(this._idParamEyeBallY, this._dragY);
        if (this._breath != null) {
            this._breath.updateParameters(this._model, deltaTimeSeconds);
        }
        if (this._physics != null) {
            this._physics.evaluate(this._model, deltaTimeSeconds);
        }
        if (this._lipsync) {
            let value = 0.0;
            this._wavFileHandler.update(deltaTimeSeconds);
            value = this._wavFileHandler.getRms();
            for (let i = 0; i < this._lipSyncIds.getSize(); ++i) {
                this._model.addParameterValueById(this._lipSyncIds.at(i), value, 0.8);
            }
        }
        if (this._pose != null) {
            this._pose.updateParameters(this._model, deltaTimeSeconds);
        }
        this._model.update();
    }
    startMotion(group, no, priority, onFinishedMotionHandler) {
        if (priority == _lappdefine__WEBPACK_IMPORTED_MODULE_1__.PriorityForce) {
            this._motionManager.setReservePriority(priority);
        }
        else if (!this._motionManager.reserveMotion(priority)) {
            if (this._debugMode) {
                _lapppal__WEBPACK_IMPORTED_MODULE_4__.LAppPal.printMessage("[APP]can't start motion.");
            }
            return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/motion/cubismmotionqueuemanager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        }
        const motionFileName = this._modelSetting.getMotionFileName(group, no);
        const name = `${group}_${no}`;
        let motion = this._motions.getValue(name);
        let autoDelete = false;
        if (motion == null) {
            fetch(`${this._modelHomeDir}${motionFileName}`)
                .then(response => {
                if (response.ok) {
                    return response.arrayBuffer();
                }
                else if (response.status >= 400) {
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`Failed to load file ${this._modelHomeDir}${motionFileName}`);
                    return new ArrayBuffer(0);
                }
            })
                .then(arrayBuffer => {
                motion = this.loadMotion(arrayBuffer, arrayBuffer.byteLength, null, onFinishedMotionHandler);
                if (motion == null) {
                    return;
                }
                let fadeTime = this._modelSetting.getMotionFadeInTimeValue(group, no);
                if (fadeTime >= 0.0) {
                    motion.setFadeInTime(fadeTime);
                }
                fadeTime = this._modelSetting.getMotionFadeOutTimeValue(group, no);
                if (fadeTime >= 0.0) {
                    motion.setFadeOutTime(fadeTime);
                }
                motion.setEffectIds(this._eyeBlinkIds, this._lipSyncIds);
                autoDelete = true;
            });
        }
        else {
            motion.setFinishedMotionHandler(onFinishedMotionHandler);
        }
        const voice = this._modelSetting.getMotionSoundFileName(group, no);
        if (voice.localeCompare('') != 0) {
            let path = voice;
            path = this._modelHomeDir + path;
            this._wavFileHandler.start(path);
        }
        if (this._debugMode) {
            _lapppal__WEBPACK_IMPORTED_MODULE_4__.LAppPal.printMessage(`[APP]start motion: [${group}_${no}`);
        }
        return this._motionManager.startMotionPriority(motion, autoDelete, priority);
    }
    startRandomMotion(group, priority, onFinishedMotionHandler) {
        if (this._modelSetting.getMotionCount(group) == 0) {
            return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/motion/cubismmotionqueuemanager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        }
        const no = Math.floor(Math.random() * this._modelSetting.getMotionCount(group));
        return this.startMotion(group, no, priority, onFinishedMotionHandler);
    }
    setExpression(expressionId) {
        const motion = this._expressions.getValue(expressionId);
        if (this._debugMode) {
            _lapppal__WEBPACK_IMPORTED_MODULE_4__.LAppPal.printMessage(`[APP]expression: [${expressionId}]`);
        }
        if (motion != null) {
            this._expressionManager.startMotionPriority(motion, false, _lappdefine__WEBPACK_IMPORTED_MODULE_1__.PriorityForce);
        }
        else {
            if (this._debugMode) {
                _lapppal__WEBPACK_IMPORTED_MODULE_4__.LAppPal.printMessage(`[APP]expression[${expressionId}] is null`);
            }
        }
    }
    setRandomExpression() {
        if (this._expressions.getSize() == 0) {
            return;
        }
        const no = Math.floor(Math.random() * this._expressions.getSize());
        for (let i = 0; i < this._expressions.getSize(); i++) {
            if (i == no) {
                const name = this._expressions._keyValues[i].first;
                this.setExpression(name);
                return;
            }
        }
    }
    motionEventFired(eventValue) {
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('{0} is fired on LAppModel!!', eventValue.s);
    }
    hitTest(hitArenaName, x, y) {
        if (this._opacity < 1) {
            return false;
        }
        const count = this._modelSetting.getHitAreasCount();
        for (let i = 0; i < count; i++) {
            if (this._modelSetting.getHitAreaName(i) == hitArenaName) {
                const drawId = this._modelSetting.getHitAreaId(i);
                return this.isHit(drawId, x, y);
            }
        }
        return false;
    }
    preLoadMotionGroup(group) {
        for (let i = 0; i < this._modelSetting.getMotionCount(group); i++) {
            const motionFileName = this._modelSetting.getMotionFileName(group, i);
            const name = `${group}_${i}`;
            if (this._debugMode) {
                _lapppal__WEBPACK_IMPORTED_MODULE_4__.LAppPal.printMessage(`[APP]load motion: ${motionFileName} => [${name}]`);
            }
            fetch(`${this._modelHomeDir}${motionFileName}`)
                .then(response => {
                if (response.ok) {
                    return response.arrayBuffer();
                }
                else if (response.status >= 400) {
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`Failed to load file ${this._modelHomeDir}${motionFileName}`);
                    return new ArrayBuffer(0);
                }
            })
                .then(arrayBuffer => {
                const tmpMotion = this.loadMotion(arrayBuffer, arrayBuffer.byteLength, name);
                if (tmpMotion != null) {
                    let fadeTime = this._modelSetting.getMotionFadeInTimeValue(group, i);
                    if (fadeTime >= 0.0) {
                        tmpMotion.setFadeInTime(fadeTime);
                    }
                    fadeTime = this._modelSetting.getMotionFadeOutTimeValue(group, i);
                    if (fadeTime >= 0.0) {
                        tmpMotion.setFadeOutTime(fadeTime);
                    }
                    tmpMotion.setEffectIds(this._eyeBlinkIds, this._lipSyncIds);
                    if (this._motions.getValue(name) != null) {
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/motion/acubismmotion'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).delete(this._motions.getValue(name));
                    }
                    this._motions.setValue(name, tmpMotion);
                    this._motionCount++;
                    if (this._motionCount >= this._allMotionCount) {
                        this._state = LoadStep.LoadTexture;
                        this._motionManager.stopAllMotions();
                        this._updating = false;
                        this._initialized = true;
                        this.createRenderer();
                        this.setupTextures();
                        this.getRenderer().startUp(_lappglmanager__WEBPACK_IMPORTED_MODULE_3__.gl);
                    }
                }
                else {
                    this._allMotionCount--;
                }
            });
        }
    }
    releaseMotions() {
        this._motions.clear();
    }
    releaseExpressions() {
        this._expressions.clear();
    }
    doDraw() {
        if (this._model == null)
            return;
        const viewport = [0, 0, _lappglmanager__WEBPACK_IMPORTED_MODULE_3__.canvas.width, _lappglmanager__WEBPACK_IMPORTED_MODULE_3__.canvas.height];
        this.getRenderer().setRenderState(_lappdelegate__WEBPACK_IMPORTED_MODULE_2__.frameBuffer, viewport);
        this.getRenderer().drawModel();
    }
    draw(matrix) {
        if (this._model == null) {
            return;
        }
        if (this._state == LoadStep.CompleteSetup) {
            matrix.multiplyByMatrix(this._modelMatrix);
            this.getRenderer().setMvpMatrix(matrix);
            this.doDraw();
        }
    }
    hasMocConsistencyFromFile() {
        return __awaiter(this, void 0, void 0, function* () {
            Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this._modelSetting.getModelFileName().localeCompare(``));
            if (this._modelSetting.getModelFileName() != '') {
                const modelFileName = this._modelSetting.getModelFileName();
                const response = yield fetch(`${this._modelHomeDir}${modelFileName}`);
                const arrayBuffer = yield response.arrayBuffer();
                this._consistency = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/model/cubismmoc'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).hasMocConsistency(arrayBuffer);
                if (!this._consistency) {
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('Inconsistent MOC3.');
                }
                else {
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('Consistent MOC3.');
                }
                return this._consistency;
            }
            else {
                _lapppal__WEBPACK_IMPORTED_MODULE_4__.LAppPal.printMessage('Model data does not exist.');
            }
        });
    }
    constructor() {
        super();
        this._modelSetting = null;
        this._modelHomeDir = null;
        this._userTimeSeconds = 0.0;
        this._eyeBlinkIds = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this._lipSyncIds = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this._motions = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmmap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this._expressions = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmmap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this._hitArea = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this._userArea = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this._idParamAngleX = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/live2dcubismframework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getIdManager().getId(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/cubismdefaultparameterid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ParamAngleX);
        this._idParamAngleY = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/live2dcubismframework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getIdManager().getId(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/cubismdefaultparameterid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ParamAngleY);
        this._idParamAngleZ = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/live2dcubismframework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getIdManager().getId(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/cubismdefaultparameterid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ParamAngleZ);
        this._idParamEyeBallX = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/live2dcubismframework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getIdManager().getId(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/cubismdefaultparameterid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ParamEyeBallX);
        this._idParamEyeBallY = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/live2dcubismframework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getIdManager().getId(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/cubismdefaultparameterid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ParamEyeBallY);
        this._idParamBodyAngleX = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/live2dcubismframework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getIdManager().getId(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/cubismdefaultparameterid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ParamBodyAngleX);
        if (_lappdefine__WEBPACK_IMPORTED_MODULE_1__.MOCConsistencyValidationEnable) {
            this._mocConsistency = true;
        }
        this._state = LoadStep.LoadAssets;
        this._expressionCount = 0;
        this._textureCount = 0;
        this._motionCount = 0;
        this._allMotionCount = 0;
        this._wavFileHandler = new _lappwavfilehandler__WEBPACK_IMPORTED_MODULE_5__.LAppWavFileHandler();
        this._consistency = false;
    }
}


/***/ }),

/***/ "./src/lapppal.ts":
/*!************************!*\
  !*** ./src/lapppal.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LAppPal: () => (/* binding */ LAppPal)
/* harmony export */ });
class LAppPal {
    static loadFileAsBytes(filePath, callback) {
        fetch(filePath)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => callback(arrayBuffer, arrayBuffer.byteLength));
    }
    static getDeltaTime() {
        return this.s_deltaTime;
    }
    static updateTime() {
        this.s_currentFrame = Date.now();
        this.s_deltaTime = (this.s_currentFrame - this.s_lastFrame) / 1000;
        this.s_lastFrame = this.s_currentFrame;
    }
    static printMessage(message) {
        console.log(message);
    }
}
LAppPal.lastUpdate = Date.now();
LAppPal.s_currentFrame = 0.0;
LAppPal.s_lastFrame = 0.0;
LAppPal.s_deltaTime = 0.0;


/***/ }),

/***/ "./src/lappsprite.ts":
/*!***************************!*\
  !*** ./src/lappsprite.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LAppSprite: () => (/* binding */ LAppSprite),
/* harmony export */   Rect: () => (/* binding */ Rect)
/* harmony export */ });
/* harmony import */ var _lappglmanager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lappglmanager */ "./src/lappglmanager.ts");

class LAppSprite {
    constructor(x, y, width, height, textureId) {
        this._rect = new Rect();
        this._rect.left = x - width * 0.5;
        this._rect.right = x + width * 0.5;
        this._rect.up = y + height * 0.5;
        this._rect.down = y - height * 0.5;
        this._texture = textureId;
        this._vertexBuffer = null;
        this._uvBuffer = null;
        this._indexBuffer = null;
        this._positionLocation = null;
        this._uvLocation = null;
        this._textureLocation = null;
        this._positionArray = null;
        this._uvArray = null;
        this._indexArray = null;
        this._firstDraw = true;
    }
    release() {
        this._rect = null;
        _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.deleteTexture(this._texture);
        this._texture = null;
        _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.deleteBuffer(this._uvBuffer);
        this._uvBuffer = null;
        _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.deleteBuffer(this._vertexBuffer);
        this._vertexBuffer = null;
        _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.deleteBuffer(this._indexBuffer);
        this._indexBuffer = null;
    }
    getTexture() {
        return this._texture;
    }
    render(programId) {
        if (this._texture == null) {
            return;
        }
        if (this._firstDraw) {
            this._positionLocation = _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.getAttribLocation(programId, 'position');
            _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.enableVertexAttribArray(this._positionLocation);
            this._uvLocation = _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.getAttribLocation(programId, 'uv');
            _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.enableVertexAttribArray(this._uvLocation);
            this._textureLocation = _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.getUniformLocation(programId, 'texture');
            _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.uniform1i(this._textureLocation, 0);
            {
                this._uvArray = new Float32Array([
                    1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0
                ]);
                this._uvBuffer = _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.createBuffer();
            }
            {
                const maxWidth = _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.canvas.width;
                const maxHeight = _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.canvas.height;
                this._positionArray = new Float32Array([
                    (this._rect.right - maxWidth * 0.5) / (maxWidth * 0.5),
                    (this._rect.up - maxHeight * 0.5) / (maxHeight * 0.5),
                    (this._rect.left - maxWidth * 0.5) / (maxWidth * 0.5),
                    (this._rect.up - maxHeight * 0.5) / (maxHeight * 0.5),
                    (this._rect.left - maxWidth * 0.5) / (maxWidth * 0.5),
                    (this._rect.down - maxHeight * 0.5) / (maxHeight * 0.5),
                    (this._rect.right - maxWidth * 0.5) / (maxWidth * 0.5),
                    (this._rect.down - maxHeight * 0.5) / (maxHeight * 0.5)
                ]);
                this._vertexBuffer = _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.createBuffer();
            }
            {
                this._indexArray = new Uint16Array([0, 1, 2, 3, 2, 0]);
                this._indexBuffer = _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.createBuffer();
            }
            this._firstDraw = false;
        }
        _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.bindBuffer(_lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.ARRAY_BUFFER, this._uvBuffer);
        _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.bufferData(_lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.ARRAY_BUFFER, this._uvArray, _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.STATIC_DRAW);
        _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.vertexAttribPointer(this._uvLocation, 2, _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.FLOAT, false, 0, 0);
        _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.bindBuffer(_lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.ARRAY_BUFFER, this._vertexBuffer);
        _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.bufferData(_lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.ARRAY_BUFFER, this._positionArray, _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.STATIC_DRAW);
        _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.vertexAttribPointer(this._positionLocation, 2, _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.FLOAT, false, 0, 0);
        _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.bindBuffer(_lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
        _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.bufferData(_lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.ELEMENT_ARRAY_BUFFER, this._indexArray, _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.DYNAMIC_DRAW);
        _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.bindTexture(_lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.TEXTURE_2D, this._texture);
        _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.drawElements(_lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.TRIANGLES, this._indexArray.length, _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.gl.UNSIGNED_SHORT, 0);
    }
    isHit(pointX, pointY) {
        const { height } = _lappglmanager__WEBPACK_IMPORTED_MODULE_0__.canvas;
        const y = height - pointY;
        return (pointX >= this._rect.left &&
            pointX <= this._rect.right &&
            y <= this._rect.up &&
            y >= this._rect.down);
    }
}
class Rect {
}


/***/ }),

/***/ "./src/lapptexturemanager.ts":
/*!***********************************!*\
  !*** ./src/lapptexturemanager.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LAppTextureManager: () => (/* binding */ LAppTextureManager),
/* harmony export */   TextureInfo: () => (/* binding */ TextureInfo)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _lappglmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lappglmanager */ "./src/lappglmanager.ts");


class LAppTextureManager {
    constructor() {
        this._textures = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    }
    release() {
        for (let ite = this._textures.begin(); ite.notEqual(this._textures.end()); ite.preIncrement()) {
            _lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.deleteTexture(ite.ptr().id);
        }
        this._textures = null;
    }
    createTextureFromPngFile(fileName, usePremultiply, callback) {
        for (let ite = this._textures.begin(); ite.notEqual(this._textures.end()); ite.preIncrement()) {
            if (ite.ptr().fileName == fileName &&
                ite.ptr().usePremultply == usePremultiply) {
                ite.ptr().img = new Image();
                ite
                    .ptr()
                    .img.addEventListener('load', () => callback(ite.ptr()), {
                    passive: true
                });
                ite.ptr().img.src = fileName;
                return;
            }
        }
        const img = new Image();
        img.addEventListener('load', () => {
            const tex = _lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.createTexture();
            _lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.bindTexture(_lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.TEXTURE_2D, tex);
            _lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.texParameteri(_lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.TEXTURE_2D, _lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.TEXTURE_MIN_FILTER, _lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.LINEAR_MIPMAP_LINEAR);
            _lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.texParameteri(_lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.TEXTURE_2D, _lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.TEXTURE_MAG_FILTER, _lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.LINEAR);
            if (usePremultiply) {
                _lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.pixelStorei(_lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
            }
            _lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.texImage2D(_lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.TEXTURE_2D, 0, _lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.RGBA, _lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.RGBA, _lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.UNSIGNED_BYTE, img);
            _lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.generateMipmap(_lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.TEXTURE_2D);
            _lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.bindTexture(_lappglmanager__WEBPACK_IMPORTED_MODULE_1__.gl.TEXTURE_2D, null);
            const textureInfo = new TextureInfo();
            if (textureInfo != null) {
                textureInfo.fileName = fileName;
                textureInfo.width = img.width;
                textureInfo.height = img.height;
                textureInfo.id = tex;
                textureInfo.img = img;
                textureInfo.usePremultply = usePremultiply;
                this._textures.pushBack(textureInfo);
            }
            callback(textureInfo);
        }, { passive: true });
        img.src = fileName;
    }
    releaseTextures() {
        for (let i = 0; i < this._textures.getSize(); i++) {
            this._textures.set(i, null);
        }
        this._textures.clear();
    }
    releaseTextureByTexture(texture) {
        for (let i = 0; i < this._textures.getSize(); i++) {
            if (this._textures.at(i).id != texture) {
                continue;
            }
            this._textures.set(i, null);
            this._textures.remove(i);
            break;
        }
    }
    releaseTextureByFilePath(fileName) {
        for (let i = 0; i < this._textures.getSize(); i++) {
            if (this._textures.at(i).fileName == fileName) {
                this._textures.set(i, null);
                this._textures.remove(i);
                break;
            }
        }
    }
}
class TextureInfo {
    constructor() {
        this.id = null;
        this.width = 0;
        this.height = 0;
    }
}


/***/ }),

/***/ "./src/lappview.ts":
/*!*************************!*\
  !*** ./src/lappview.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LAppView: () => (/* binding */ LAppView)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/math/cubismmatrix44'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/math/cubismviewmatrix'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _lappdefine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts");
/* harmony import */ var _lappdelegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lappdelegate */ "./src/lappdelegate.ts");
/* harmony import */ var _lappglmanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lappglmanager */ "./src/lappglmanager.ts");
/* harmony import */ var _lapplive2dmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lapplive2dmanager */ "./src/lapplive2dmanager.ts");
/* harmony import */ var _lapppal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lapppal */ "./src/lapppal.ts");
/* harmony import */ var _lappsprite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lappsprite */ "./src/lappsprite.ts");
/* harmony import */ var _touchmanager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./touchmanager */ "./src/touchmanager.ts");









class LAppView {
    constructor() {
        this._programId = null;
        this._back = null;
        this._gear = null;
        this._touchManager = new _touchmanager__WEBPACK_IMPORTED_MODULE_7__.TouchManager();
        this._deviceToScreen = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/math/cubismmatrix44'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this._viewMatrix = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/math/cubismviewmatrix'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    }
    initialize() {
        const { width, height } = _lappglmanager__WEBPACK_IMPORTED_MODULE_3__.canvas;
        const ratio = width / height;
        const left = -ratio;
        const right = ratio;
        const bottom = _lappdefine__WEBPACK_IMPORTED_MODULE_1__.ViewLogicalLeft;
        const top = _lappdefine__WEBPACK_IMPORTED_MODULE_1__.ViewLogicalRight;
        this._viewMatrix.setScreenRect(left, right, bottom, top);
        this._viewMatrix.scale(_lappdefine__WEBPACK_IMPORTED_MODULE_1__.ViewScale, _lappdefine__WEBPACK_IMPORTED_MODULE_1__.ViewScale);
        this._deviceToScreen.loadIdentity();
        if (width > height) {
            const screenW = Math.abs(right - left);
            this._deviceToScreen.scaleRelative(screenW / width, -screenW / width);
        }
        else {
            const screenH = Math.abs(top - bottom);
            this._deviceToScreen.scaleRelative(screenH / height, -screenH / height);
        }
        this._deviceToScreen.translateRelative(-width * 0.5, -height * 0.5);
        this._viewMatrix.setMaxScale(_lappdefine__WEBPACK_IMPORTED_MODULE_1__.ViewMaxScale);
        this._viewMatrix.setMinScale(_lappdefine__WEBPACK_IMPORTED_MODULE_1__.ViewMinScale);
        this._viewMatrix.setMaxScreenRect(_lappdefine__WEBPACK_IMPORTED_MODULE_1__.ViewLogicalMaxLeft, _lappdefine__WEBPACK_IMPORTED_MODULE_1__.ViewLogicalMaxRight, _lappdefine__WEBPACK_IMPORTED_MODULE_1__.ViewLogicalMaxBottom, _lappdefine__WEBPACK_IMPORTED_MODULE_1__.ViewLogicalMaxTop);
    }
    release() {
        this._viewMatrix = null;
        this._touchManager = null;
        this._deviceToScreen = null;
        this._gear.release();
        this._gear = null;
        this._back.release();
        this._back = null;
        _lappglmanager__WEBPACK_IMPORTED_MODULE_3__.gl.deleteProgram(this._programId);
        this._programId = null;
    }
    render() {
        _lappglmanager__WEBPACK_IMPORTED_MODULE_3__.gl.useProgram(this._programId);
        if (this._back) {
            this._back.render(this._programId);
        }
        if (this._gear) {
            this._gear.render(this._programId);
        }
        _lappglmanager__WEBPACK_IMPORTED_MODULE_3__.gl.flush();
        const live2DManager = _lapplive2dmanager__WEBPACK_IMPORTED_MODULE_4__.LAppLive2DManager.getInstance();
        live2DManager.setViewMatrix(this._viewMatrix);
        live2DManager.onUpdate();
    }
    initializeSprite() {
        const width = _lappglmanager__WEBPACK_IMPORTED_MODULE_3__.canvas.width;
        const height = _lappglmanager__WEBPACK_IMPORTED_MODULE_3__.canvas.height;
        const textureManager = _lappdelegate__WEBPACK_IMPORTED_MODULE_2__.LAppDelegate.getInstance().getTextureManager();
        const resourcesPath = _lappdefine__WEBPACK_IMPORTED_MODULE_1__.ResourcesPath;
        let imageName = '';
        imageName = _lappdefine__WEBPACK_IMPORTED_MODULE_1__.BackImageName;
        const initBackGroundTexture = (textureInfo) => {
            const x = width * 0.5;
            const y = height * 0.5;
            const fwidth = textureInfo.width * 2.0;
            const fheight = height * 0.95;
            this._back = new _lappsprite__WEBPACK_IMPORTED_MODULE_6__.LAppSprite(x, y, fwidth, fheight, textureInfo.id);
        };
        textureManager.createTextureFromPngFile(resourcesPath + imageName, false, initBackGroundTexture);
        imageName = _lappdefine__WEBPACK_IMPORTED_MODULE_1__.GearImageName;
        const initGearTexture = (textureInfo) => {
            const x = width - textureInfo.width * 0.5;
            const y = height - textureInfo.height * 0.5;
            const fwidth = textureInfo.width;
            const fheight = textureInfo.height;
            this._gear = new _lappsprite__WEBPACK_IMPORTED_MODULE_6__.LAppSprite(x, y, fwidth, fheight, textureInfo.id);
        };
        textureManager.createTextureFromPngFile(resourcesPath + imageName, false, initGearTexture);
        if (this._programId == null) {
            this._programId = _lappdelegate__WEBPACK_IMPORTED_MODULE_2__.LAppDelegate.getInstance().createShader();
        }
    }
    onTouchesBegan(pointX, pointY) {
        this._touchManager.touchesBegan(pointX * window.devicePixelRatio, pointY * window.devicePixelRatio);
    }
    onTouchesMoved(pointX, pointY) {
        const viewX = this.transformViewX(this._touchManager.getX());
        const viewY = this.transformViewY(this._touchManager.getY());
        this._touchManager.touchesMoved(pointX * window.devicePixelRatio, pointY * window.devicePixelRatio);
        const live2DManager = _lapplive2dmanager__WEBPACK_IMPORTED_MODULE_4__.LAppLive2DManager.getInstance();
        live2DManager.onDrag(viewX, viewY);
    }
    onTouchesEnded(pointX, pointY) {
        const live2DManager = _lapplive2dmanager__WEBPACK_IMPORTED_MODULE_4__.LAppLive2DManager.getInstance();
        live2DManager.onDrag(0.0, 0.0);
        {
            const x = this._deviceToScreen.transformX(this._touchManager.getX());
            const y = this._deviceToScreen.transformY(this._touchManager.getY());
            if (_lappdefine__WEBPACK_IMPORTED_MODULE_1__.DebugTouchLogEnable) {
                _lapppal__WEBPACK_IMPORTED_MODULE_5__.LAppPal.printMessage(`[APP]touchesEnded x: ${x} y: ${y}`);
            }
            live2DManager.onTap(x, y);
            if (this._gear.isHit(pointX * window.devicePixelRatio, pointY * window.devicePixelRatio)) {
                live2DManager.nextScene();
            }
        }
    }
    transformViewX(deviceX) {
        const screenX = this._deviceToScreen.transformX(deviceX);
        return this._viewMatrix.invertTransformX(screenX);
    }
    transformViewY(deviceY) {
        const screenY = this._deviceToScreen.transformY(deviceY);
        return this._viewMatrix.invertTransformY(screenY);
    }
    transformScreenX(deviceX) {
        return this._deviceToScreen.transformX(deviceX);
    }
    transformScreenY(deviceY) {
        return this._deviceToScreen.transformY(deviceY);
    }
}


/***/ }),

/***/ "./src/lappwavfilehandler.ts":
/*!***********************************!*\
  !*** ./src/lappwavfilehandler.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ByteReader: () => (/* binding */ ByteReader),
/* harmony export */   LAppWavFileHandler: () => (/* binding */ LAppWavFileHandler),
/* harmony export */   WavFileInfo: () => (/* binding */ WavFileInfo),
/* harmony export */   s_instance: () => (/* binding */ s_instance)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let s_instance = null;
class LAppWavFileHandler {
    static getInstance() {
        if (s_instance == null) {
            s_instance = new LAppWavFileHandler();
        }
        return s_instance;
    }
    static releaseInstance() {
        if (s_instance != null) {
            s_instance = void 0;
        }
        s_instance = null;
    }
    update(deltaTimeSeconds) {
        let goalOffset;
        let rms;
        if (this._pcmData == null ||
            this._sampleOffset >= this._wavFileInfo._samplesPerChannel) {
            this._lastRms = 0.0;
            return false;
        }
        this._userTimeSeconds += deltaTimeSeconds;
        goalOffset = Math.floor(this._userTimeSeconds * this._wavFileInfo._samplingRate);
        if (goalOffset > this._wavFileInfo._samplesPerChannel) {
            goalOffset = this._wavFileInfo._samplesPerChannel;
        }
        rms = 0.0;
        for (let channelCount = 0; channelCount < this._wavFileInfo._numberOfChannels; channelCount++) {
            for (let sampleCount = this._sampleOffset; sampleCount < goalOffset; sampleCount++) {
                const pcm = this._pcmData[channelCount][sampleCount];
                rms += pcm * pcm;
            }
        }
        rms = Math.sqrt(rms /
            (this._wavFileInfo._numberOfChannels *
                (goalOffset - this._sampleOffset)));
        this._lastRms = rms;
        this._sampleOffset = goalOffset;
        return true;
    }
    start(filePath) {
        this._sampleOffset = 0;
        this._userTimeSeconds = 0.0;
        this._lastRms = 0.0;
        this.loadWavFile(filePath);
    }
    getRms() {
        return this._lastRms;
    }
    loadWavFile(filePath) {
        return new Promise(resolveValue => {
            let ret = false;
            if (this._pcmData != null) {
                this.releasePcmData();
            }
            const asyncFileLoad = () => __awaiter(this, void 0, void 0, function* () {
                return fetch(filePath).then(responce => {
                    return responce.arrayBuffer();
                });
            });
            const asyncWavFileManager = (() => __awaiter(this, void 0, void 0, function* () {
                this._byteReader._fileByte = yield asyncFileLoad();
                this._byteReader._fileDataView = new DataView(this._byteReader._fileByte);
                this._byteReader._fileSize = this._byteReader._fileByte.byteLength;
                this._byteReader._readOffset = 0;
                if (this._byteReader._fileByte == null ||
                    this._byteReader._fileSize < 4) {
                    resolveValue(false);
                    return;
                }
                this._wavFileInfo._fileName = filePath;
                try {
                    if (!this._byteReader.getCheckSignature('RIFF')) {
                        ret = false;
                        throw new Error('Cannot find Signeture "RIFF".');
                    }
                    this._byteReader.get32LittleEndian();
                    if (!this._byteReader.getCheckSignature('WAVE')) {
                        ret = false;
                        throw new Error('Cannot find Signeture "WAVE".');
                    }
                    if (!this._byteReader.getCheckSignature('fmt ')) {
                        ret = false;
                        throw new Error('Cannot find Signeture "fmt".');
                    }
                    const fmtChunkSize = this._byteReader.get32LittleEndian();
                    if (this._byteReader.get16LittleEndian() != 1) {
                        ret = false;
                        throw new Error('File is not linear PCM.');
                    }
                    this._wavFileInfo._numberOfChannels =
                        this._byteReader.get16LittleEndian();
                    this._wavFileInfo._samplingRate =
                        this._byteReader.get32LittleEndian();
                    this._byteReader.get32LittleEndian();
                    this._byteReader.get16LittleEndian();
                    this._wavFileInfo._bitsPerSample =
                        this._byteReader.get16LittleEndian();
                    if (fmtChunkSize > 16) {
                        this._byteReader._readOffset += fmtChunkSize - 16;
                    }
                    while (!this._byteReader.getCheckSignature('data') &&
                        this._byteReader._readOffset < this._byteReader._fileSize) {
                        this._byteReader._readOffset +=
                            this._byteReader.get32LittleEndian() + 4;
                    }
                    if (this._byteReader._readOffset >= this._byteReader._fileSize) {
                        ret = false;
                        throw new Error('Cannot find "data" Chunk.');
                    }
                    {
                        const dataChunkSize = this._byteReader.get32LittleEndian();
                        this._wavFileInfo._samplesPerChannel =
                            (dataChunkSize * 8) /
                                (this._wavFileInfo._bitsPerSample *
                                    this._wavFileInfo._numberOfChannels);
                    }
                    this._pcmData = new Array(this._wavFileInfo._numberOfChannels);
                    for (let channelCount = 0; channelCount < this._wavFileInfo._numberOfChannels; channelCount++) {
                        this._pcmData[channelCount] = new Float32Array(this._wavFileInfo._samplesPerChannel);
                    }
                    for (let sampleCount = 0; sampleCount < this._wavFileInfo._samplesPerChannel; sampleCount++) {
                        for (let channelCount = 0; channelCount < this._wavFileInfo._numberOfChannels; channelCount++) {
                            this._pcmData[channelCount][sampleCount] = this.getPcmSample();
                        }
                    }
                    ret = true;
                    resolveValue(ret);
                }
                catch (e) {
                    console.log(e);
                }
            }))().then(() => {
                resolveValue(ret);
            });
        });
    }
    getPcmSample() {
        let pcm32;
        switch (this._wavFileInfo._bitsPerSample) {
            case 8:
                pcm32 = this._byteReader.get8() - 128;
                pcm32 <<= 24;
                break;
            case 16:
                pcm32 = this._byteReader.get16LittleEndian() << 16;
                break;
            case 24:
                pcm32 = this._byteReader.get24LittleEndian() << 8;
                break;
            default:
                pcm32 = 0;
                break;
        }
        return pcm32 / 2147483647;
    }
    getPcmDataChannel(usechannel) {
        if (!this._pcmData || !(usechannel < this._pcmData.length)) {
            return null;
        }
        return Float32Array.from(this._pcmData[usechannel]);
    }
    getWavSamplingRate() {
        if (!this._wavFileInfo || this._wavFileInfo._samplingRate < 1) {
            return null;
        }
        return this._wavFileInfo._samplingRate;
    }
    releasePcmData() {
        for (let channelCount = 0; channelCount < this._wavFileInfo._numberOfChannels; channelCount++) {
            delete this._pcmData[channelCount];
        }
        delete this._pcmData;
        this._pcmData = null;
    }
    constructor() {
        this._loadFiletoBytes = (arrayBuffer, length) => {
            this._byteReader._fileByte = arrayBuffer;
            this._byteReader._fileDataView = new DataView(this._byteReader._fileByte);
            this._byteReader._fileSize = length;
        };
        this._pcmData = null;
        this._userTimeSeconds = 0.0;
        this._lastRms = 0.0;
        this._sampleOffset = 0.0;
        this._wavFileInfo = new WavFileInfo();
        this._byteReader = new ByteReader();
    }
}
class WavFileInfo {
    constructor() {
        this._fileName = '';
        this._numberOfChannels = 0;
        this._bitsPerSample = 0;
        this._samplingRate = 0;
        this._samplesPerChannel = 0;
    }
}
class ByteReader {
    constructor() {
        this._fileByte = null;
        this._fileDataView = null;
        this._fileSize = 0;
        this._readOffset = 0;
    }
    get8() {
        const ret = this._fileDataView.getUint8(this._readOffset);
        this._readOffset++;
        return ret;
    }
    get16LittleEndian() {
        const ret = (this._fileDataView.getUint8(this._readOffset + 1) << 8) |
            this._fileDataView.getUint8(this._readOffset);
        this._readOffset += 2;
        return ret;
    }
    get24LittleEndian() {
        const ret = (this._fileDataView.getUint8(this._readOffset + 2) << 16) |
            (this._fileDataView.getUint8(this._readOffset + 1) << 8) |
            this._fileDataView.getUint8(this._readOffset);
        this._readOffset += 3;
        return ret;
    }
    get32LittleEndian() {
        const ret = (this._fileDataView.getUint8(this._readOffset + 3) << 24) |
            (this._fileDataView.getUint8(this._readOffset + 2) << 16) |
            (this._fileDataView.getUint8(this._readOffset + 1) << 8) |
            this._fileDataView.getUint8(this._readOffset);
        this._readOffset += 4;
        return ret;
    }
    getCheckSignature(reference) {
        const getSignature = new Uint8Array(4);
        const referenceString = new TextEncoder().encode(reference);
        if (reference.length != 4) {
            return false;
        }
        for (let signatureOffset = 0; signatureOffset < 4; signatureOffset++) {
            getSignature[signatureOffset] = this.get8();
        }
        return (getSignature[0] == referenceString[0] &&
            getSignature[1] == referenceString[1] &&
            getSignature[2] == referenceString[2] &&
            getSignature[3] == referenceString[3]);
    }
}


/***/ }),

/***/ "./src/touchmanager.ts":
/*!*****************************!*\
  !*** ./src/touchmanager.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TouchManager: () => (/* binding */ TouchManager)
/* harmony export */ });
class TouchManager {
    constructor() {
        this._startX = 0.0;
        this._startY = 0.0;
        this._lastX = 0.0;
        this._lastY = 0.0;
        this._lastX1 = 0.0;
        this._lastY1 = 0.0;
        this._lastX2 = 0.0;
        this._lastY2 = 0.0;
        this._lastTouchDistance = 0.0;
        this._deltaX = 0.0;
        this._deltaY = 0.0;
        this._scale = 1.0;
        this._touchSingle = false;
        this._flipAvailable = false;
    }
    getCenterX() {
        return this._lastX;
    }
    getCenterY() {
        return this._lastY;
    }
    getDeltaX() {
        return this._deltaX;
    }
    getDeltaY() {
        return this._deltaY;
    }
    getStartX() {
        return this._startX;
    }
    getStartY() {
        return this._startY;
    }
    getScale() {
        return this._scale;
    }
    getX() {
        return this._lastX;
    }
    getY() {
        return this._lastY;
    }
    getX1() {
        return this._lastX1;
    }
    getY1() {
        return this._lastY1;
    }
    getX2() {
        return this._lastX2;
    }
    getY2() {
        return this._lastY2;
    }
    isSingleTouch() {
        return this._touchSingle;
    }
    isFlickAvailable() {
        return this._flipAvailable;
    }
    disableFlick() {
        this._flipAvailable = false;
    }
    touchesBegan(deviceX, deviceY) {
        this._lastX = deviceX;
        this._lastY = deviceY;
        this._startX = deviceX;
        this._startY = deviceY;
        this._lastTouchDistance = -1.0;
        this._flipAvailable = true;
        this._touchSingle = true;
    }
    touchesMoved(deviceX, deviceY) {
        this._lastX = deviceX;
        this._lastY = deviceY;
        this._lastTouchDistance = -1.0;
        this._touchSingle = true;
    }
    getFlickDistance() {
        return this.calculateDistance(this._startX, this._startY, this._lastX, this._lastY);
    }
    calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }
    calculateMovingAmount(v1, v2) {
        if (v1 > 0.0 != v2 > 0.0) {
            return 0.0;
        }
        const sign = v1 > 0.0 ? 1.0 : -1.0;
        const absoluteValue1 = Math.abs(v1);
        const absoluteValue2 = Math.abs(v2);
        return (sign * (absoluteValue1 < absoluteValue2 ? absoluteValue1 : absoluteValue2));
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
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lappdelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lappdelegate */ "./src/lappdelegate.ts");
/* harmony import */ var _lappdefine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts");
/* harmony import */ var _lappglmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lappglmanager */ "./src/lappglmanager.ts");



window.addEventListener('load', () => {
    if (!_lappglmanager__WEBPACK_IMPORTED_MODULE_2__.LAppGlManager.getInstance() ||
        !_lappdelegate__WEBPACK_IMPORTED_MODULE_0__.LAppDelegate.getInstance().initialize()) {
        return;
    }
    _lappdelegate__WEBPACK_IMPORTED_MODULE_0__.LAppDelegate.getInstance().run();
}, { passive: true });
window.addEventListener('beforeunload', () => _lappdelegate__WEBPACK_IMPORTED_MODULE_0__.LAppDelegate.releaseInstance(), { passive: true });
window.addEventListener('resize', () => {
    if (_lappdefine__WEBPACK_IMPORTED_MODULE_1__.CanvasSize === 'auto') {
        _lappdelegate__WEBPACK_IMPORTED_MODULE_0__.LAppDelegate.getInstance().onResize();
    }
}, { passive: true });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDQzhDO0FBQ0g7QUFDSztBQUtoRCxNQUFNLENBQUMsZ0JBQWdCLENBQ3JCLE1BQU0sRUFDTixHQUFTLEVBQUU7SUFFVCxJQUNFLENBQUMseURBQWEsQ0FBQyxXQUFXLEVBQUU7UUFDNUIsQ0FBQyx1REFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUN4QyxDQUFDO1FBQ0QsT0FBTztJQUNULENBQUM7SUFFRCx1REFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ25DLENBQUMsRUFDRCxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FDbEIsQ0FBQztBQUtGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FDckIsY0FBYyxFQUNkLEdBQVMsRUFBRSxDQUFDLHVEQUFZLENBQUMsZUFBZSxFQUFFLEVBQzFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUNsQixDQUFDO0FBS0YsTUFBTSxDQUFDLGdCQUFnQixDQUNyQixRQUFRLEVBQ1IsR0FBRyxFQUFFO0lBQ0gsSUFBSSxtREFBcUIsS0FBSyxNQUFNLEVBQUUsQ0FBQztRQUNyQyx1REFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7QUFDSCxDQUFDLEVBQ0QsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQ2xCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGFwcGRlZmluZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFwcGRlbGVnYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXBwZ2xtYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXBwbGl2ZTJkbWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFwcG1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXBwcGFsLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXBwc3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXBwdGV4dHVyZW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhcHB2aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9sYXBwd2F2ZmlsZWhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvdWNobWFuYWdlci50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gJ0BmcmFtZXdvcmsvbGl2ZTJkY3ViaXNtZnJhbWV3b3JrJztcblxuLyoqXG4gKiBTYW1wbGUgQXBw44Gn5L2/55So44GZ44KL5a6a5pWwXG4gKi9cblxuLy8gQ2FudmFzIHdpZHRoIGFuZCBoZWlnaHQgcGl4ZWwgdmFsdWVzLCBvciBkeW5hbWljIHNjcmVlbiBzaXplICgnYXV0bycpLlxuZXhwb3J0IGNvbnN0IENhbnZhc1NpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8ICdhdXRvJyA9ICdhdXRvJztcblxuLy8g55S76Z2iXG5leHBvcnQgY29uc3QgVmlld1NjYWxlID0gMS4wO1xuZXhwb3J0IGNvbnN0IFZpZXdNYXhTY2FsZSA9IDIuMDtcbmV4cG9ydCBjb25zdCBWaWV3TWluU2NhbGUgPSAwLjg7XG5cbmV4cG9ydCBjb25zdCBWaWV3TG9naWNhbExlZnQgPSAtMS4wO1xuZXhwb3J0IGNvbnN0IFZpZXdMb2dpY2FsUmlnaHQgPSAxLjA7XG5leHBvcnQgY29uc3QgVmlld0xvZ2ljYWxCb3R0b20gPSAtMS4wO1xuZXhwb3J0IGNvbnN0IFZpZXdMb2dpY2FsVG9wID0gMS4wO1xuXG5leHBvcnQgY29uc3QgVmlld0xvZ2ljYWxNYXhMZWZ0ID0gLTIuMDtcbmV4cG9ydCBjb25zdCBWaWV3TG9naWNhbE1heFJpZ2h0ID0gMi4wO1xuZXhwb3J0IGNvbnN0IFZpZXdMb2dpY2FsTWF4Qm90dG9tID0gLTIuMDtcbmV4cG9ydCBjb25zdCBWaWV3TG9naWNhbE1heFRvcCA9IDIuMDtcblxuLy8g55u45a++44OR44K5XG5leHBvcnQgY29uc3QgUmVzb3VyY2VzUGF0aCA9ICcuLi8uLi9SZXNvdXJjZXMvJztcblxuLy8g44Oi44OH44Or44Gu5b6M44KN44Gr44GC44KL6IOM5pmv44Gu55S75YOP44OV44Kh44Kk44OrXG5leHBvcnQgY29uc3QgQmFja0ltYWdlTmFtZSA9ICdiYWNrX2NsYXNzX25vcm1hbC5wbmcnO1xuXG4vLyDmra/ou4pcbmV4cG9ydCBjb25zdCBHZWFySW1hZ2VOYW1lID0gJ2ljb25fZ2Vhci5wbmcnO1xuXG4vLyDntYLkuobjg5zjgr/jg7NcbmV4cG9ydCBjb25zdCBQb3dlckltYWdlTmFtZSA9ICdDbG9zZU5vcm1hbC5wbmcnO1xuXG4vLyDjg6Ljg4fjg6vlrprnvqktLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIOODouODh+ODq+OCkumFjee9ruOBl+OBn+ODh+OCo+ODrOOCr+ODiOODquWQjeOBrumFjeWIl1xuLy8g44OH44Kj44Os44Kv44OI44Oq5ZCN44GobW9kZWwzLmpzb27jga7lkI3liY3jgpLkuIDoh7TjgZXjgZvjgabjgYrjgY/jgZPjgahcbmV4cG9ydCBjb25zdCBNb2RlbERpcjogc3RyaW5nW10gPSBbXG4gICdIYXJ1JyxcbiAgJ0hpeW9yaScsXG4gICdNYXJrJyxcbiAgJ05hdG9yaScsXG4gICdSaWNlJyxcbiAgJ01hbycsXG4gICdXYW5rbydcbl07XG5leHBvcnQgY29uc3QgTW9kZWxEaXJTaXplOiBudW1iZXIgPSBNb2RlbERpci5sZW5ndGg7XG5cbi8vIOWklumDqOWumue+qeODleOCoeOCpOODq++8iGpzb27vvInjgajlkIjjgo/jgZvjgotcbmV4cG9ydCBjb25zdCBNb3Rpb25Hcm91cElkbGUgPSAnSWRsZSc7IC8vIOOCouOCpOODieODquODs+OCsFxuZXhwb3J0IGNvbnN0IE1vdGlvbkdyb3VwVGFwQm9keSA9ICdUYXBCb2R5JzsgLy8g5L2T44KS44K/44OD44OX44GX44Gf44Go44GNXG5cbi8vIOWklumDqOWumue+qeODleOCoeOCpOODq++8iGpzb27vvInjgajlkIjjgo/jgZvjgotcbmV4cG9ydCBjb25zdCBIaXRBcmVhTmFtZUhlYWQgPSAnSGVhZCc7XG5leHBvcnQgY29uc3QgSGl0QXJlYU5hbWVCb2R5ID0gJ0JvZHknO1xuXG4vLyDjg6Ljg7zjgrfjg6fjg7Pjga7lhKrlhYjluqblrprmlbBcbmV4cG9ydCBjb25zdCBQcmlvcml0eU5vbmUgPSAwO1xuZXhwb3J0IGNvbnN0IFByaW9yaXR5SWRsZSA9IDE7XG5leHBvcnQgY29uc3QgUHJpb3JpdHlOb3JtYWwgPSAyO1xuZXhwb3J0IGNvbnN0IFByaW9yaXR5Rm9yY2UgPSAzO1xuXG4vLyBNT0Mz44Gu5LiA6LKr5oCn5qSc6Ki844Kq44OX44K344On44OzXG5leHBvcnQgY29uc3QgTU9DQ29uc2lzdGVuY3lWYWxpZGF0aW9uRW5hYmxlID0gdHJ1ZTtcblxuLy8g44OH44OQ44OD44Kw55So44Ot44Kw44Gu6KGo56S644Kq44OX44K344On44OzXG5leHBvcnQgY29uc3QgRGVidWdMb2dFbmFibGUgPSB0cnVlO1xuZXhwb3J0IGNvbnN0IERlYnVnVG91Y2hMb2dFbmFibGUgPSBmYWxzZTtcblxuLy8gRnJhbWV3b3Jr44GL44KJ5Ye65Yqb44GZ44KL44Ot44Kw44Gu44Os44OZ44Or6Kit5a6aXG5leHBvcnQgY29uc3QgQ3ViaXNtTG9nZ2luZ0xldmVsOiBMb2dMZXZlbCA9IExvZ0xldmVsLkxvZ0xldmVsX1ZlcmJvc2U7XG5cbi8vIOODh+ODleOCqeODq+ODiOOBruODrOODs+ODgOODvOOCv+ODvOOCsuODg+ODiOOCteOCpOOCulxuZXhwb3J0IGNvbnN0IFJlbmRlclRhcmdldFdpZHRoID0gMTkwMDtcbmV4cG9ydCBjb25zdCBSZW5kZXJUYXJnZXRIZWlnaHQgPSAxMDAwO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgQ3ViaXNtRnJhbWV3b3JrLCBPcHRpb24gfSBmcm9tICdAZnJhbWV3b3JrL2xpdmUyZGN1YmlzbWZyYW1ld29yayc7XG5cbmltcG9ydCAqIGFzIExBcHBEZWZpbmUgZnJvbSAnLi9sYXBwZGVmaW5lJztcbmltcG9ydCB7IExBcHBMaXZlMkRNYW5hZ2VyIH0gZnJvbSAnLi9sYXBwbGl2ZTJkbWFuYWdlcic7XG5pbXBvcnQgeyBMQXBwUGFsIH0gZnJvbSAnLi9sYXBwcGFsJztcbmltcG9ydCB7IExBcHBUZXh0dXJlTWFuYWdlciB9IGZyb20gJy4vbGFwcHRleHR1cmVtYW5hZ2VyJztcbmltcG9ydCB7IExBcHBWaWV3IH0gZnJvbSAnLi9sYXBwdmlldyc7XG5pbXBvcnQgeyBjYW52YXMsIGdsIH0gZnJvbSAnLi9sYXBwZ2xtYW5hZ2VyJztcblxuZXhwb3J0IGxldCBzX2luc3RhbmNlOiBMQXBwRGVsZWdhdGUgPSBudWxsO1xuZXhwb3J0IGxldCBmcmFtZUJ1ZmZlcjogV2ViR0xGcmFtZWJ1ZmZlciA9IG51bGw7XG5cbi8qKlxuICog44Ki44OX44Oq44Kx44O844K344On44Oz44Kv44Op44K544CCXG4gKiBDdWJpc20gU0RL44Gu566h55CG44KS6KGM44GG44CCXG4gKi9cbmV4cG9ydCBjbGFzcyBMQXBwRGVsZWdhdGUge1xuICAvKipcbiAgICog44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K577yI44K344Oz44Kw44Or44OI44Oz77yJ44KS6L+U44GZ44CCXG4gICAqIOOCpOODs+OCueOCv+ODs+OCueOBjOeUn+aIkOOBleOCjOOBpuOBhOOBquOBhOWgtOWQiOOBr+WGhemDqOOBp+OCpOODs+OCueOCv+ODs+OCueOCkueUn+aIkOOBmeOCi+OAglxuICAgKlxuICAgKiBAcmV0dXJuIOOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBMQXBwRGVsZWdhdGUge1xuICAgIGlmIChzX2luc3RhbmNlID09IG51bGwpIHtcbiAgICAgIHNfaW5zdGFuY2UgPSBuZXcgTEFwcERlbGVnYXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNfaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICog44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K577yI44K344Oz44Kw44Or44OI44Oz77yJ44KS6Kej5pS+44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlbGVhc2VJbnN0YW5jZSgpOiB2b2lkIHtcbiAgICBpZiAoc19pbnN0YW5jZSAhPSBudWxsKSB7XG4gICAgICBzX2luc3RhbmNlLnJlbGVhc2UoKTtcbiAgICB9XG5cbiAgICBzX2luc3RhbmNlID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBUFDjgavlv4XopoHjgarnianjgpLliJ3mnJ/ljJbjgZnjgovjgIJcbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplKCk6IGJvb2xlYW4ge1xuICAgIC8vIOOCreODo+ODs+ODkOOCueOCkiBET00g44Gr6L+95YqgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4gICAgaWYgKExBcHBEZWZpbmUuQ2FudmFzU2l6ZSA9PT0gJ2F1dG8nKSB7XG4gICAgICB0aGlzLl9yZXNpemVDYW52YXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FudmFzLndpZHRoID0gTEFwcERlZmluZS5DYW52YXNTaXplLndpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IExBcHBEZWZpbmUuQ2FudmFzU2l6ZS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKCFmcmFtZUJ1ZmZlcikge1xuICAgICAgZnJhbWVCdWZmZXIgPSBnbC5nZXRQYXJhbWV0ZXIoZ2wuRlJBTUVCVUZGRVJfQklORElORyk7XG4gICAgfVxuXG4gICAgLy8g6YCP6YGO6Kit5a6aXG4gICAgZ2wuZW5hYmxlKGdsLkJMRU5EKTtcbiAgICBnbC5ibGVuZEZ1bmMoZ2wuU1JDX0FMUEhBLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcblxuICAgIGNvbnN0IHN1cHBvcnRUb3VjaDogYm9vbGVhbiA9ICdvbnRvdWNoZW5kJyBpbiBjYW52YXM7XG5cbiAgICBpZiAoc3VwcG9ydFRvdWNoKSB7XG4gICAgICAvLyDjgr/jg4Pjg4HplqLpgKPjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbDnmbvpjLJcbiAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaEJlZ2FuLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmVkLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kZWQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIG9uVG91Y2hDYW5jZWwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g44Oe44Km44K56Zai6YCj44Kz44O844Or44OQ44OD44Kv6Zai5pWw55m76YyyXG4gICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25DbGlja0JlZ2FuLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmVkLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uQ2xpY2tFbmRlZCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIC8vIEFwcFZpZXfjga7liJ3mnJ/ljJZcbiAgICB0aGlzLl92aWV3LmluaXRpYWxpemUoKTtcblxuICAgIC8vIEN1YmlzbSBTREvjga7liJ3mnJ/ljJZcbiAgICB0aGlzLmluaXRpYWxpemVDdWJpc20oKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2l6ZSBjYW52YXMgYW5kIHJlLWluaXRpYWxpemUgdmlldy5cbiAgICovXG4gIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNpemVDYW52YXMoKTtcbiAgICB0aGlzLl92aWV3LmluaXRpYWxpemUoKTtcbiAgICB0aGlzLl92aWV3LmluaXRpYWxpemVTcHJpdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDop6PmlL7jgZnjgovjgIJcbiAgICovXG4gIHB1YmxpYyByZWxlYXNlKCk6IHZvaWQge1xuICAgIHRoaXMuX3RleHR1cmVNYW5hZ2VyLnJlbGVhc2UoKTtcbiAgICB0aGlzLl90ZXh0dXJlTWFuYWdlciA9IG51bGw7XG5cbiAgICB0aGlzLl92aWV3LnJlbGVhc2UoKTtcbiAgICB0aGlzLl92aWV3ID0gbnVsbDtcblxuICAgIC8vIOODquOCveODvOOCueOCkuino+aUvlxuICAgIExBcHBMaXZlMkRNYW5hZ2VyLnJlbGVhc2VJbnN0YW5jZSgpO1xuXG4gICAgLy8gQ3ViaXNtIFNES+OBruino+aUvlxuICAgIEN1YmlzbUZyYW1ld29yay5kaXNwb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICog5a6f6KGM5Yem55CG44CCXG4gICAqL1xuICBwdWJsaWMgcnVuKCk6IHZvaWQge1xuICAgIC8vIOODoeOCpOODs+ODq+ODvOODl1xuICAgIGNvbnN0IGxvb3AgPSAoKTogdm9pZCA9PiB7XG4gICAgICAvLyDjgqTjg7Pjgrnjgr/jg7Pjgrnjga7mnInnhKHjga7norroqo1cbiAgICAgIGlmIChzX2luc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyDmmYLplpPmm7TmlrBcbiAgICAgIExBcHBQYWwudXBkYXRlVGltZSgpO1xuXG4gICAgICAvLyDnlLvpnaLjga7liJ3mnJ/ljJZcbiAgICAgIGdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMS4wKTtcblxuICAgICAgLy8g5rex5bqm44OG44K544OI44KS5pyJ5Yq55YyWXG4gICAgICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7XG5cbiAgICAgIC8vIOi/keOBj+OBq+OBguOCi+eJqeS9k+OBr+OAgemBoOOBj+OBq+OBguOCi+eJqeS9k+OCkuimhuOBhOmaoOOBmVxuICAgICAgZ2wuZGVwdGhGdW5jKGdsLkxFUVVBTCk7XG5cbiAgICAgIC8vIOOCq+ODqeODvOODkOODg+ODleOCoeOChOa3seW6puODkOODg+ODleOCoeOCkuOCr+ODquOCouOBmeOCi1xuICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xuXG4gICAgICBnbC5jbGVhckRlcHRoKDEuMCk7XG5cbiAgICAgIC8vIOmAj+mBjuioreWumlxuICAgICAgZ2wuZW5hYmxlKGdsLkJMRU5EKTtcbiAgICAgIGdsLmJsZW5kRnVuYyhnbC5TUkNfQUxQSEEsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEpO1xuXG4gICAgICAvLyDmj4/nlLvmm7TmlrBcbiAgICAgIHRoaXMuX3ZpZXcucmVuZGVyKCk7XG5cbiAgICAgIC8vIOODq+ODvOODl+OBruOBn+OCgeOBq+WGjeW4sOWRvOOBs+WHuuOBl1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgIH07XG4gICAgbG9vcCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCt+OCp+ODvOODgOODvOOCkueZu+mMsuOBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVNoYWRlcigpOiBXZWJHTFByb2dyYW0ge1xuICAgIC8vIOODkOODvOODhuODg+OCr+OCueOCt+OCp+ODvOODgOODvOOBruOCs+ODs+ODkeOCpOODq1xuICAgIGNvbnN0IHZlcnRleFNoYWRlcklkID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpO1xuXG4gICAgaWYgKHZlcnRleFNoYWRlcklkID09IG51bGwpIHtcbiAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKCdmYWlsZWQgdG8gY3JlYXRlIHZlcnRleFNoYWRlcicpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdmVydGV4U2hhZGVyOiBzdHJpbmcgPVxuICAgICAgJ3ByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OycgK1xuICAgICAgJ2F0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uOycgK1xuICAgICAgJ2F0dHJpYnV0ZSB2ZWMyIHV2OycgK1xuICAgICAgJ3ZhcnlpbmcgdmVjMiB2dXY7JyArXG4gICAgICAndm9pZCBtYWluKHZvaWQpJyArXG4gICAgICAneycgK1xuICAgICAgJyAgIGdsX1Bvc2l0aW9uID0gdmVjNChwb3NpdGlvbiwgMS4wKTsnICtcbiAgICAgICcgICB2dXYgPSB1djsnICtcbiAgICAgICd9JztcblxuICAgIGdsLnNoYWRlclNvdXJjZSh2ZXJ0ZXhTaGFkZXJJZCwgdmVydGV4U2hhZGVyKTtcbiAgICBnbC5jb21waWxlU2hhZGVyKHZlcnRleFNoYWRlcklkKTtcblxuICAgIC8vIOODleODqeOCsOODoeODs+ODiOOCt+OCp+ODvOODgOOBruOCs+ODs+ODkeOCpOODq1xuICAgIGNvbnN0IGZyYWdtZW50U2hhZGVySWQgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKTtcblxuICAgIGlmIChmcmFnbWVudFNoYWRlcklkID09IG51bGwpIHtcbiAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKCdmYWlsZWQgdG8gY3JlYXRlIGZyYWdtZW50U2hhZGVyJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmcmFnbWVudFNoYWRlcjogc3RyaW5nID1cbiAgICAgICdwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDsnICtcbiAgICAgICd2YXJ5aW5nIHZlYzIgdnV2OycgK1xuICAgICAgJ3VuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7JyArXG4gICAgICAndm9pZCBtYWluKHZvaWQpJyArXG4gICAgICAneycgK1xuICAgICAgJyAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh0ZXh0dXJlLCB2dXYpOycgK1xuICAgICAgJ30nO1xuXG4gICAgZ2wuc2hhZGVyU291cmNlKGZyYWdtZW50U2hhZGVySWQsIGZyYWdtZW50U2hhZGVyKTtcbiAgICBnbC5jb21waWxlU2hhZGVyKGZyYWdtZW50U2hhZGVySWQpO1xuXG4gICAgLy8g44OX44Ot44Kw44Op44Og44Kq44OW44K444Kn44Kv44OI44Gu5L2c5oiQXG4gICAgY29uc3QgcHJvZ3JhbUlkID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtSWQsIHZlcnRleFNoYWRlcklkKTtcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbUlkLCBmcmFnbWVudFNoYWRlcklkKTtcblxuICAgIGdsLmRlbGV0ZVNoYWRlcih2ZXJ0ZXhTaGFkZXJJZCk7XG4gICAgZ2wuZGVsZXRlU2hhZGVyKGZyYWdtZW50U2hhZGVySWQpO1xuXG4gICAgLy8g44Oq44Oz44KvXG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbUlkKTtcblxuICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbUlkKTtcblxuICAgIHJldHVybiBwcm9ncmFtSWQ7XG4gIH1cblxuICAvKipcbiAgICogVmlld+aDheWgseOCkuWPluW+l+OBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIGdldFZpZXcoKTogTEFwcFZpZXcge1xuICAgIHJldHVybiB0aGlzLl92aWV3O1xuICB9XG5cbiAgcHVibGljIGdldFRleHR1cmVNYW5hZ2VyKCk6IExBcHBUZXh0dXJlTWFuYWdlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHR1cmVNYW5hZ2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fY2FwdHVyZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9tb3VzZVggPSAwLjA7XG4gICAgdGhpcy5fbW91c2VZID0gMC4wO1xuICAgIHRoaXMuX2lzRW5kID0gZmFsc2U7XG5cbiAgICB0aGlzLl9jdWJpc21PcHRpb24gPSBuZXcgT3B0aW9uKCk7XG4gICAgdGhpcy5fdmlldyA9IG5ldyBMQXBwVmlldygpO1xuICAgIHRoaXMuX3RleHR1cmVNYW5hZ2VyID0gbmV3IExBcHBUZXh0dXJlTWFuYWdlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEN1YmlzbSBTREvjga7liJ3mnJ/ljJZcbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplQ3ViaXNtKCk6IHZvaWQge1xuICAgIC8vIHNldHVwIGN1YmlzbVxuICAgIHRoaXMuX2N1YmlzbU9wdGlvbi5sb2dGdW5jdGlvbiA9IExBcHBQYWwucHJpbnRNZXNzYWdlO1xuICAgIHRoaXMuX2N1YmlzbU9wdGlvbi5sb2dnaW5nTGV2ZWwgPSBMQXBwRGVmaW5lLkN1YmlzbUxvZ2dpbmdMZXZlbDtcbiAgICBDdWJpc21GcmFtZXdvcmsuc3RhcnRVcCh0aGlzLl9jdWJpc21PcHRpb24pO1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBjdWJpc21cbiAgICBDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgpO1xuXG4gICAgLy8gbG9hZCBtb2RlbFxuICAgIExBcHBMaXZlMkRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG5cbiAgICBMQXBwUGFsLnVwZGF0ZVRpbWUoKTtcblxuICAgIHRoaXMuX3ZpZXcuaW5pdGlhbGl6ZVNwcml0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2l6ZSB0aGUgY2FudmFzIHRvIGZpbGwgdGhlIHNjcmVlbi5cbiAgICovXG4gIHByaXZhdGUgX3Jlc2l6ZUNhbnZhcygpOiB2b2lkIHtcbiAgICBjYW52YXMud2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgIGdsLnZpZXdwb3J0KDAsIDAsIGdsLmRyYXdpbmdCdWZmZXJXaWR0aCwgZ2wuZHJhd2luZ0J1ZmZlckhlaWdodCk7XG4gIH1cblxuICBfY3ViaXNtT3B0aW9uOiBPcHRpb247IC8vIEN1YmlzbSBTREsgT3B0aW9uXG4gIF92aWV3OiBMQXBwVmlldzsgLy8gVmlld+aDheWgsVxuICBfY2FwdHVyZWQ6IGJvb2xlYW47IC8vIOOCr+ODquODg+OCr+OBl+OBpuOBhOOCi+OBi1xuICBfbW91c2VYOiBudW1iZXI7IC8vIOODnuOCpuOCuVjluqfmqJlcbiAgX21vdXNlWTogbnVtYmVyOyAvLyDjg57jgqbjgrlZ5bqn5qiZXG4gIF9pc0VuZDogYm9vbGVhbjsgLy8gQVBQ57WC5LqG44GX44Gm44GE44KL44GLXG4gIF90ZXh0dXJlTWFuYWdlcjogTEFwcFRleHR1cmVNYW5hZ2VyOyAvLyDjg4bjgq/jgrnjg4Hjg6Pjg57jg43jg7zjgrjjg6Pjg7xcbn1cblxuLyoqXG4gKiDjgq/jg6rjg4Pjgq/jgZfjgZ/jgajjgY3jgavlkbzjgbDjgozjgovjgIJcbiAqL1xuZnVuY3Rpb24gb25DbGlja0JlZ2FuKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgaWYgKCFMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldykge1xuICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKCd2aWV3IG5vdGZvdW5kJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl9jYXB0dXJlZCA9IHRydWU7XG5cbiAgY29uc3QgcG9zWDogbnVtYmVyID0gZS5wYWdlWDtcbiAgY29uc3QgcG9zWTogbnVtYmVyID0gZS5wYWdlWTtcblxuICBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldy5vblRvdWNoZXNCZWdhbihwb3NYLCBwb3NZKTtcbn1cblxuLyoqXG4gKiDjg57jgqbjgrnjg53jgqTjg7Pjgr/jgYzli5XjgYTjgZ/jgonlkbzjgbDjgozjgovjgIJcbiAqL1xuZnVuY3Rpb24gb25Nb3VzZU1vdmVkKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgaWYgKCFMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fY2FwdHVyZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIUxBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3KSB7XG4gICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoJ3ZpZXcgbm90Zm91bmQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCByZWN0ID0gKGUudGFyZ2V0IGFzIEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBwb3NYOiBudW1iZXIgPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7XG4gIGNvbnN0IHBvc1k6IG51bWJlciA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xuXG4gIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3Lm9uVG91Y2hlc01vdmVkKHBvc1gsIHBvc1kpO1xufVxuXG4vKipcbiAqIOOCr+ODquODg+OCr+OBjOe1guS6huOBl+OBn+OCieWRvOOBsOOCjOOCi+OAglxuICovXG5mdW5jdGlvbiBvbkNsaWNrRW5kZWQoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fY2FwdHVyZWQgPSBmYWxzZTtcbiAgaWYgKCFMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldykge1xuICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKCd2aWV3IG5vdGZvdW5kJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmVjdCA9IChlLnRhcmdldCBhcyBFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgcG9zWDogbnVtYmVyID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICBjb25zdCBwb3NZOiBudW1iZXIgPSBlLmNsaWVudFkgLSByZWN0LnRvcDtcblxuICBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldy5vblRvdWNoZXNFbmRlZChwb3NYLCBwb3NZKTtcbn1cblxuLyoqXG4gKiDjgr/jg4Pjg4HjgZfjgZ/jgajjgY3jgavlkbzjgbDjgozjgovjgIJcbiAqL1xuZnVuY3Rpb24gb25Ub3VjaEJlZ2FuKGU6IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgaWYgKCFMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldykge1xuICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKCd2aWV3IG5vdGZvdW5kJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX2NhcHR1cmVkID0gdHJ1ZTtcblxuICBjb25zdCBwb3NYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgY29uc3QgcG9zWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG5cbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcub25Ub3VjaGVzQmVnYW4ocG9zWCwgcG9zWSk7XG59XG5cbi8qKlxuICog44K544Ov44Kk44OX44GZ44KL44Go5ZG844Gw44KM44KL44CCXG4gKi9cbmZ1bmN0aW9uIG9uVG91Y2hNb3ZlZChlOiBUb3VjaEV2ZW50KTogdm9pZCB7XG4gIGlmICghTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX2NhcHR1cmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldykge1xuICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKCd2aWV3IG5vdGZvdW5kJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmVjdCA9IChlLnRhcmdldCBhcyBFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICBjb25zdCBwb3NYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICBjb25zdCBwb3NZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIC0gcmVjdC50b3A7XG5cbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcub25Ub3VjaGVzTW92ZWQocG9zWCwgcG9zWSk7XG59XG5cbi8qKlxuICog44K/44OD44OB44GM57WC5LqG44GX44Gf44KJ5ZG844Gw44KM44KL44CCXG4gKi9cbmZ1bmN0aW9uIG9uVG91Y2hFbmRlZChlOiBUb3VjaEV2ZW50KTogdm9pZCB7XG4gIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl9jYXB0dXJlZCA9IGZhbHNlO1xuXG4gIGlmICghTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcpIHtcbiAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgndmlldyBub3Rmb3VuZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHJlY3QgPSAoZS50YXJnZXQgYXMgRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgY29uc3QgcG9zWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgY29uc3QgcG9zWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSAtIHJlY3QudG9wO1xuXG4gIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3Lm9uVG91Y2hlc0VuZGVkKHBvc1gsIHBvc1kpO1xufVxuXG4vKipcbiAqIOOCv+ODg+ODgeOBjOOCreODo+ODs+OCu+ODq+OBleOCjOOCi+OBqOWRvOOBsOOCjOOCi+OAglxuICovXG5mdW5jdGlvbiBvblRvdWNoQ2FuY2VsKGU6IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX2NhcHR1cmVkID0gZmFsc2U7XG5cbiAgaWYgKCFMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldykge1xuICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKCd2aWV3IG5vdGZvdW5kJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmVjdCA9IChlLnRhcmdldCBhcyBFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICBjb25zdCBwb3NYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICBjb25zdCBwb3NZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIC0gcmVjdC50b3A7XG5cbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcub25Ub3VjaGVzRW5kZWQocG9zWCwgcG9zWSk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5leHBvcnQgbGV0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBudWxsO1xuZXhwb3J0IGxldCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcbmV4cG9ydCBsZXQgc19pbnN0YW5jZTogTEFwcEdsTWFuYWdlciA9IG51bGw7XG5cbi8qKlxuICogQ3ViaXNtIFNES+OBruOCteODs+ODl+ODq+OBp+S9v+eUqOOBmeOCi1dlYkdM44KS566h55CG44GZ44KL44Kv44Op44K5XG4gKi9cbmV4cG9ydCBjbGFzcyBMQXBwR2xNYW5hZ2VyIHtcbiAgLyoqXG4gICAqIOOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCue+8iOOCt+ODs+OCsOODq+ODiOODs++8ieOCkui/lOOBmeOAglxuICAgKiDjgqTjg7Pjgrnjgr/jg7PjgrnjgYznlJ/miJDjgZXjgozjgabjgYTjgarjgYTloLTlkIjjga/lhoXpg6jjgafjgqTjg7Pjgrnjgr/jg7PjgrnjgpLnlJ/miJDjgZnjgovjgIJcbiAgICpcbiAgICogQHJldHVybiDjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTEFwcEdsTWFuYWdlciB7XG4gICAgaWYgKHNfaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgc19pbnN0YW5jZSA9IG5ldyBMQXBwR2xNYW5hZ2VyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNfaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICog44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K577yI44K344Oz44Kw44Or44OI44Oz77yJ44KS6Kej5pS+44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlbGVhc2VJbnN0YW5jZSgpOiB2b2lkIHtcbiAgICBpZiAoc19pbnN0YW5jZSAhPSBudWxsKSB7XG4gICAgICBzX2luc3RhbmNlLnJlbGVhc2UoKTtcbiAgICB9XG5cbiAgICBzX2luc3RhbmNlID0gbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIOOCreODo+ODs+ODkOOCueOBruS9nOaIkFxuICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXG4gICAgLy8gZ2zjgrPjg7Pjg4bjgq3jgrnjg4jjgpLliJ3mnJ/ljJZcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wyJyk7XG5cbiAgICBpZiAoIWdsKSB7XG4gICAgICAvLyBnbOWIneacn+WMluWkseaVl1xuICAgICAgYWxlcnQoJ0Nhbm5vdCBpbml0aWFsaXplIFdlYkdMLiBUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydC4nKTtcbiAgICAgIGdsID0gbnVsbDtcblxuICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPVxuICAgICAgICAnVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIDxjb2RlPiZsdDtjYW52YXMmZ3Q7PC9jb2RlPiBlbGVtZW50Lic7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOino+aUvuOBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIHJlbGVhc2UoKTogdm9pZCB7fVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgQ3ViaXNtTWF0cml4NDQgfSBmcm9tICdAZnJhbWV3b3JrL21hdGgvY3ViaXNtbWF0cml4NDQnO1xuaW1wb3J0IHsgQUN1YmlzbU1vdGlvbiB9IGZyb20gJ0BmcmFtZXdvcmsvbW90aW9uL2FjdWJpc21tb3Rpb24nO1xuaW1wb3J0IHsgY3NtVmVjdG9yIH0gZnJvbSAnQGZyYW1ld29yay90eXBlL2NzbXZlY3Rvcic7XG5cbmltcG9ydCAqIGFzIExBcHBEZWZpbmUgZnJvbSAnLi9sYXBwZGVmaW5lJztcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4vbGFwcGdsbWFuYWdlcic7XG5pbXBvcnQgeyBMQXBwTW9kZWwgfSBmcm9tICcuL2xhcHBtb2RlbCc7XG5pbXBvcnQgeyBMQXBwUGFsIH0gZnJvbSAnLi9sYXBwcGFsJztcblxuZXhwb3J0IGxldCBzX2luc3RhbmNlOiBMQXBwTGl2ZTJETWFuYWdlciA9IG51bGw7XG5cbi8qKlxuICog44K144Oz44OX44Or44Ki44OX44Oq44Kx44O844K344On44Oz44Gr44GK44GE44GmQ3ViaXNtTW9kZWzjgpLnrqHnkIbjgZnjgovjgq/jg6njgrlcbiAqIOODouODh+ODq+eUn+aIkOOBqOegtOajhOOAgeOCv+ODg+ODl+OCpOODmeODs+ODiOOBruWHpueQhuOAgeODouODh+ODq+WIh+OCiuabv+OBiOOCkuihjOOBhuOAglxuICovXG5leHBvcnQgY2xhc3MgTEFwcExpdmUyRE1hbmFnZXIge1xuICAvKipcbiAgICog44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K577yI44K344Oz44Kw44Or44OI44Oz77yJ44KS6L+U44GZ44CCXG4gICAqIOOCpOODs+OCueOCv+ODs+OCueOBjOeUn+aIkOOBleOCjOOBpuOBhOOBquOBhOWgtOWQiOOBr+WGhemDqOOBp+OCpOODs+OCueOCv+ODs+OCueOCkueUn+aIkOOBmeOCi+OAglxuICAgKlxuICAgKiBAcmV0dXJuIOOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBMQXBwTGl2ZTJETWFuYWdlciB7XG4gICAgaWYgKHNfaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgc19pbnN0YW5jZSA9IG5ldyBMQXBwTGl2ZTJETWFuYWdlcigpO1xuICAgIH1cblxuICAgIHJldHVybiBzX2luc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCue+8iOOCt+ODs+OCsOODq+ODiOODs++8ieOCkuino+aUvuOBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZWxlYXNlSW5zdGFuY2UoKTogdm9pZCB7XG4gICAgaWYgKHNfaW5zdGFuY2UgIT0gbnVsbCkge1xuICAgICAgc19pbnN0YW5jZSA9IHZvaWQgMDtcbiAgICB9XG5cbiAgICBzX2luc3RhbmNlID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiDnj77lnKjjga7jgrfjg7zjg7Pjgafkv53mjIHjgZfjgabjgYTjgovjg6Ljg4fjg6vjgpLov5TjgZnjgIJcbiAgICpcbiAgICogQHBhcmFtIG5vIOODouODh+ODq+ODquOCueODiOOBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgKiBAcmV0dXJuIOODouODh+ODq+OBruOCpOODs+OCueOCv+ODs+OCueOCkui/lOOBmeOAguOCpOODs+ODh+ODg+OCr+OCueWApOOBjOevhOWbsuWkluOBruWgtOWQiOOBr05VTEzjgpLov5TjgZnjgIJcbiAgICovXG4gIHB1YmxpYyBnZXRNb2RlbChubzogbnVtYmVyKTogTEFwcE1vZGVsIHtcbiAgICBpZiAobm8gPCB0aGlzLl9tb2RlbHMuZ2V0U2l6ZSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9kZWxzLmF0KG5vKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiDnj77lnKjjga7jgrfjg7zjg7Pjgafkv53mjIHjgZfjgabjgYTjgovjgZnjgbnjgabjga7jg6Ljg4fjg6vjgpLop6PmlL7jgZnjgotcbiAgICovXG4gIHB1YmxpYyByZWxlYXNlQWxsTW9kZWwoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9tb2RlbHMuZ2V0U2l6ZSgpOyBpKyspIHtcbiAgICAgIHRoaXMuX21vZGVscy5hdChpKS5yZWxlYXNlKCk7XG4gICAgICB0aGlzLl9tb2RlbHMuc2V0KGksIG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMuX21vZGVscy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIOeUu+mdouOCkuODieODqeODg+OCsOOBl+OBn+aZguOBruWHpueQhlxuICAgKlxuICAgKiBAcGFyYW0geCDnlLvpnaLjga5Y5bqn5qiZXG4gICAqIEBwYXJhbSB5IOeUu+mdouOBrlnluqfmqJlcbiAgICovXG4gIHB1YmxpYyBvbkRyYWcoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX21vZGVscy5nZXRTaXplKCk7IGkrKykge1xuICAgICAgY29uc3QgbW9kZWw6IExBcHBNb2RlbCA9IHRoaXMuZ2V0TW9kZWwoaSk7XG5cbiAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICBtb2RlbC5zZXREcmFnZ2luZyh4LCB5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog55S76Z2i44KS44K/44OD44OX44GX44Gf5pmC44Gu5Yem55CGXG4gICAqXG4gICAqIEBwYXJhbSB4IOeUu+mdouOBrljluqfmqJlcbiAgICogQHBhcmFtIHkg55S76Z2i44GuWeW6p+aomVxuICAgKi9cbiAgcHVibGljIG9uVGFwKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKExBcHBEZWZpbmUuRGVidWdMb2dFbmFibGUpIHtcbiAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKFxuICAgICAgICBgW0FQUF10YXAgcG9pbnQ6IHt4OiAke3gudG9GaXhlZCgyKX0geTogJHt5LnRvRml4ZWQoMil9fWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9tb2RlbHMuZ2V0U2l6ZSgpOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9tb2RlbHMuYXQoaSkuaGl0VGVzdChMQXBwRGVmaW5lLkhpdEFyZWFOYW1lSGVhZCwgeCwgeSkpIHtcbiAgICAgICAgaWYgKExBcHBEZWZpbmUuRGVidWdMb2dFbmFibGUpIHtcbiAgICAgICAgICBMQXBwUGFsLnByaW50TWVzc2FnZShcbiAgICAgICAgICAgIGBbQVBQXWhpdCBhcmVhOiBbJHtMQXBwRGVmaW5lLkhpdEFyZWFOYW1lSGVhZH1dYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9kZWxzLmF0KGkpLnNldFJhbmRvbUV4cHJlc3Npb24oKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fbW9kZWxzLmF0KGkpLmhpdFRlc3QoTEFwcERlZmluZS5IaXRBcmVhTmFtZUJvZHksIHgsIHkpKSB7XG4gICAgICAgIGlmIChMQXBwRGVmaW5lLkRlYnVnTG9nRW5hYmxlKSB7XG4gICAgICAgICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoXG4gICAgICAgICAgICBgW0FQUF1oaXQgYXJlYTogWyR7TEFwcERlZmluZS5IaXRBcmVhTmFtZUJvZHl9XWBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21vZGVsc1xuICAgICAgICAgIC5hdChpKVxuICAgICAgICAgIC5zdGFydFJhbmRvbU1vdGlvbihcbiAgICAgICAgICAgIExBcHBEZWZpbmUuTW90aW9uR3JvdXBUYXBCb2R5LFxuICAgICAgICAgICAgTEFwcERlZmluZS5Qcmlvcml0eU5vcm1hbCxcbiAgICAgICAgICAgIHRoaXMuX2ZpbmlzaGVkTW90aW9uXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog55S76Z2i44KS5pu05paw44GZ44KL44Go44GN44Gu5Yem55CGXG4gICAqIOODouODh+ODq+OBruabtOaWsOWHpueQhuWPiuOBs+aPj+eUu+WHpueQhuOCkuihjOOBhlxuICAgKi9cbiAgcHVibGljIG9uVXBkYXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzO1xuXG4gICAgY29uc3QgbW9kZWxDb3VudDogbnVtYmVyID0gdGhpcy5fbW9kZWxzLmdldFNpemUoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWxDb3VudDsgKytpKSB7XG4gICAgICBjb25zdCBwcm9qZWN0aW9uOiBDdWJpc21NYXRyaXg0NCA9IG5ldyBDdWJpc21NYXRyaXg0NCgpO1xuICAgICAgY29uc3QgbW9kZWw6IExBcHBNb2RlbCA9IHRoaXMuZ2V0TW9kZWwoaSk7XG5cbiAgICAgIGlmIChtb2RlbC5nZXRNb2RlbCgpKSB7XG4gICAgICAgIGlmIChtb2RlbC5nZXRNb2RlbCgpLmdldENhbnZhc1dpZHRoKCkgPiAxLjAgJiYgd2lkdGggPCBoZWlnaHQpIHtcbiAgICAgICAgICAvLyDmqKrjgavplbfjgYTjg6Ljg4fjg6vjgpLnuKbplbfjgqbjgqPjg7Pjg4njgqbjgavooajnpLrjgZnjgovpmpvjg6Ljg4fjg6vjga7mqKrjgrXjgqTjgrrjgadzY2FsZeOCkueul+WHuuOBmeOCi1xuICAgICAgICAgIG1vZGVsLmdldE1vZGVsTWF0cml4KCkuc2V0V2lkdGgoMi4wKTtcbiAgICAgICAgICBwcm9qZWN0aW9uLnNjYWxlKDEuMCwgd2lkdGggLyBoZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2plY3Rpb24uc2NhbGUoaGVpZ2h0IC8gd2lkdGgsIDEuMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlv4XopoHjgYzjgYLjgozjgbDjgZPjgZPjgafkuZfnrpdcbiAgICAgICAgaWYgKHRoaXMuX3ZpZXdNYXRyaXggIT0gbnVsbCkge1xuICAgICAgICAgIHByb2plY3Rpb24ubXVsdGlwbHlCeU1hdHJpeCh0aGlzLl92aWV3TWF0cml4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtb2RlbC51cGRhdGUoKTtcbiAgICAgIG1vZGVsLmRyYXcocHJvamVjdGlvbik7IC8vIOWPgueFp+a4oeOBl+OBquOBruOBp3Byb2plY3Rpb27jga/lpInos6rjgZnjgovjgIJcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5qyh44Gu44K344O844Oz44Gr5YiH44KK44GL44GI44KLXG4gICAqIOOCteODs+ODl+ODq+OCouODl+ODquOCseODvOOCt+ODp+ODs+OBp+OBr+ODouODh+ODq+OCu+ODg+ODiOOBruWIh+OCiuabv+OBiOOCkuihjOOBhuOAglxuICAgKi9cbiAgcHVibGljIG5leHRTY2VuZSgpOiB2b2lkIHtcbiAgICBjb25zdCBubzogbnVtYmVyID0gKHRoaXMuX3NjZW5lSW5kZXggKyAxKSAlIExBcHBEZWZpbmUuTW9kZWxEaXJTaXplO1xuICAgIHRoaXMuY2hhbmdlU2NlbmUobm8pO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCt+ODvOODs+OCkuWIh+OCiuabv+OBiOOCi1xuICAgKiDjgrXjg7Pjg5fjg6vjgqLjg5fjg6rjgrHjg7zjgrfjg6fjg7Pjgafjga/jg6Ljg4fjg6vjgrvjg4Pjg4jjga7liIfjgormm7/jgYjjgpLooYzjgYbjgIJcbiAgICovXG4gIHB1YmxpYyBjaGFuZ2VTY2VuZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fc2NlbmVJbmRleCA9IGluZGV4O1xuICAgIGlmIChMQXBwRGVmaW5lLkRlYnVnTG9nRW5hYmxlKSB7XG4gICAgICBMQXBwUGFsLnByaW50TWVzc2FnZShgW0FQUF1tb2RlbCBpbmRleDogJHt0aGlzLl9zY2VuZUluZGV4fWApO1xuICAgIH1cblxuICAgIC8vIE1vZGVsRGlyW13jgavkv53mjIHjgZfjgZ/jg4fjgqPjg6zjgq/jg4jjg6rlkI3jgYvjgolcbiAgICAvLyBtb2RlbDMuanNvbuOBruODkeOCueOCkuaxuuWumuOBmeOCi+OAglxuICAgIC8vIOODh+OCo+ODrOOCr+ODiOODquWQjeOBqG1vZGVsMy5qc29u44Gu5ZCN5YmN44KS5LiA6Ie044GV44Gb44Gm44GK44GP44GT44Go44CCXG4gICAgY29uc3QgbW9kZWw6IHN0cmluZyA9IExBcHBEZWZpbmUuTW9kZWxEaXJbaW5kZXhdO1xuICAgIGNvbnN0IG1vZGVsUGF0aDogc3RyaW5nID0gTEFwcERlZmluZS5SZXNvdXJjZXNQYXRoICsgbW9kZWwgKyAnLyc7XG4gICAgbGV0IG1vZGVsSnNvbk5hbWU6IHN0cmluZyA9IExBcHBEZWZpbmUuTW9kZWxEaXJbaW5kZXhdO1xuICAgIG1vZGVsSnNvbk5hbWUgKz0gJy5tb2RlbDMuanNvbic7XG5cbiAgICB0aGlzLnJlbGVhc2VBbGxNb2RlbCgpO1xuICAgIHRoaXMuX21vZGVscy5wdXNoQmFjayhuZXcgTEFwcE1vZGVsKCkpO1xuICAgIHRoaXMuX21vZGVscy5hdCgwKS5sb2FkQXNzZXRzKG1vZGVsUGF0aCwgbW9kZWxKc29uTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Vmlld01hdHJpeChtOiBDdWJpc21NYXRyaXg0NCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgdGhpcy5fdmlld01hdHJpeC5nZXRBcnJheSgpW2ldID0gbS5nZXRBcnJheSgpW2ldO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3ZpZXdNYXRyaXggPSBuZXcgQ3ViaXNtTWF0cml4NDQoKTtcbiAgICB0aGlzLl9tb2RlbHMgPSBuZXcgY3NtVmVjdG9yPExBcHBNb2RlbD4oKTtcbiAgICB0aGlzLl9zY2VuZUluZGV4ID0gMDtcbiAgICB0aGlzLmNoYW5nZVNjZW5lKHRoaXMuX3NjZW5lSW5kZXgpO1xuICB9XG5cbiAgX3ZpZXdNYXRyaXg6IEN1YmlzbU1hdHJpeDQ0OyAvLyDjg6Ljg4fjg6vmj4/nlLvjgavnlKjjgYTjgot2aWV36KGM5YiXXG4gIF9tb2RlbHM6IGNzbVZlY3RvcjxMQXBwTW9kZWw+OyAvLyDjg6Ljg4fjg6vjgqTjg7Pjgrnjgr/jg7Pjgrnjga7jgrPjg7Pjg4bjg4pcbiAgX3NjZW5lSW5kZXg6IG51bWJlcjsgLy8g6KGo56S644GZ44KL44K344O844Oz44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gIC8vIOODouODvOOCt+ODp+ODs+WGjeeUn+e1guS6huOBruOCs+ODvOODq+ODkOODg+OCr+mWouaVsFxuICBfZmluaXNoZWRNb3Rpb24gPSAoc2VsZjogQUN1YmlzbU1vdGlvbik6IHZvaWQgPT4ge1xuICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKCdNb3Rpb24gRmluaXNoZWQ6Jyk7XG4gICAgY29uc29sZS5sb2coc2VsZik7XG4gIH07XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQgfSBmcm9tICdAZnJhbWV3b3JrL2N1YmlzbWRlZmF1bHRwYXJhbWV0ZXJpZCc7XG5pbXBvcnQgeyBDdWJpc21Nb2RlbFNldHRpbmdKc29uIH0gZnJvbSAnQGZyYW1ld29yay9jdWJpc21tb2RlbHNldHRpbmdqc29uJztcbmltcG9ydCB7XG4gIEJyZWF0aFBhcmFtZXRlckRhdGEsXG4gIEN1YmlzbUJyZWF0aFxufSBmcm9tICdAZnJhbWV3b3JrL2VmZmVjdC9jdWJpc21icmVhdGgnO1xuaW1wb3J0IHsgQ3ViaXNtRXllQmxpbmsgfSBmcm9tICdAZnJhbWV3b3JrL2VmZmVjdC9jdWJpc21leWVibGluayc7XG5pbXBvcnQgeyBJQ3ViaXNtTW9kZWxTZXR0aW5nIH0gZnJvbSAnQGZyYW1ld29yay9pY3ViaXNtbW9kZWxzZXR0aW5nJztcbmltcG9ydCB7IEN1YmlzbUlkSGFuZGxlIH0gZnJvbSAnQGZyYW1ld29yay9pZC9jdWJpc21pZCc7XG5pbXBvcnQgeyBDdWJpc21GcmFtZXdvcmsgfSBmcm9tICdAZnJhbWV3b3JrL2xpdmUyZGN1YmlzbWZyYW1ld29yayc7XG5pbXBvcnQgeyBDdWJpc21NYXRyaXg0NCB9IGZyb20gJ0BmcmFtZXdvcmsvbWF0aC9jdWJpc21tYXRyaXg0NCc7XG5pbXBvcnQgeyBDdWJpc21Vc2VyTW9kZWwgfSBmcm9tICdAZnJhbWV3b3JrL21vZGVsL2N1YmlzbXVzZXJtb2RlbCc7XG5pbXBvcnQge1xuICBBQ3ViaXNtTW90aW9uLFxuICBGaW5pc2hlZE1vdGlvbkNhbGxiYWNrXG59IGZyb20gJ0BmcmFtZXdvcmsvbW90aW9uL2FjdWJpc21tb3Rpb24nO1xuaW1wb3J0IHsgQ3ViaXNtTW90aW9uIH0gZnJvbSAnQGZyYW1ld29yay9tb3Rpb24vY3ViaXNtbW90aW9uJztcbmltcG9ydCB7XG4gIEN1YmlzbU1vdGlvblF1ZXVlRW50cnlIYW5kbGUsXG4gIEludmFsaWRNb3Rpb25RdWV1ZUVudHJ5SGFuZGxlVmFsdWVcbn0gZnJvbSAnQGZyYW1ld29yay9tb3Rpb24vY3ViaXNtbW90aW9ucXVldWVtYW5hZ2VyJztcbmltcG9ydCB7IGNzbU1hcCB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc21tYXAnO1xuaW1wb3J0IHsgY3NtUmVjdCB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc21yZWN0Zic7XG5pbXBvcnQgeyBjc21TdHJpbmcgfSBmcm9tICdAZnJhbWV3b3JrL3R5cGUvY3Ntc3RyaW5nJztcbmltcG9ydCB7IGNzbVZlY3RvciB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc212ZWN0b3InO1xuaW1wb3J0IHtcbiAgQ1NNX0FTU0VSVCxcbiAgQ3ViaXNtTG9nRXJyb3IsXG4gIEN1YmlzbUxvZ0luZm9cbn0gZnJvbSAnQGZyYW1ld29yay91dGlscy9jdWJpc21kZWJ1Zyc7XG5cbmltcG9ydCAqIGFzIExBcHBEZWZpbmUgZnJvbSAnLi9sYXBwZGVmaW5lJztcbmltcG9ydCB7IGZyYW1lQnVmZmVyLCBMQXBwRGVsZWdhdGUgfSBmcm9tICcuL2xhcHBkZWxlZ2F0ZSc7XG5pbXBvcnQgeyBjYW52YXMsIGdsIH0gZnJvbSAnLi9sYXBwZ2xtYW5hZ2VyJztcbmltcG9ydCB7IExBcHBQYWwgfSBmcm9tICcuL2xhcHBwYWwnO1xuaW1wb3J0IHsgVGV4dHVyZUluZm8gfSBmcm9tICcuL2xhcHB0ZXh0dXJlbWFuYWdlcic7XG5pbXBvcnQgeyBMQXBwV2F2RmlsZUhhbmRsZXIgfSBmcm9tICcuL2xhcHB3YXZmaWxlaGFuZGxlcic7XG5pbXBvcnQgeyBDdWJpc21Nb2MgfSBmcm9tICdAZnJhbWV3b3JrL21vZGVsL2N1YmlzbW1vYyc7XG5cbmVudW0gTG9hZFN0ZXAge1xuICBMb2FkQXNzZXRzLFxuICBMb2FkTW9kZWwsXG4gIFdhaXRMb2FkTW9kZWwsXG4gIExvYWRFeHByZXNzaW9uLFxuICBXYWl0TG9hZEV4cHJlc3Npb24sXG4gIExvYWRQaHlzaWNzLFxuICBXYWl0TG9hZFBoeXNpY3MsXG4gIExvYWRQb3NlLFxuICBXYWl0TG9hZFBvc2UsXG4gIFNldHVwRXllQmxpbmssXG4gIFNldHVwQnJlYXRoLFxuICBMb2FkVXNlckRhdGEsXG4gIFdhaXRMb2FkVXNlckRhdGEsXG4gIFNldHVwRXllQmxpbmtJZHMsXG4gIFNldHVwTGlwU3luY0lkcyxcbiAgU2V0dXBMYXlvdXQsXG4gIExvYWRNb3Rpb24sXG4gIFdhaXRMb2FkTW90aW9uLFxuICBDb21wbGV0ZUluaXRpYWxpemUsXG4gIENvbXBsZXRlU2V0dXBNb2RlbCxcbiAgTG9hZFRleHR1cmUsXG4gIFdhaXRMb2FkVGV4dHVyZSxcbiAgQ29tcGxldGVTZXR1cFxufVxuXG4vKipcbiAqIOODpuODvOOCtuODvOOBjOWun+mam+OBq+S9v+eUqOOBmeOCi+ODouODh+ODq+OBruWun+ijheOCr+ODqeOCuTxicj5cbiAqIOODouODh+ODq+eUn+aIkOOAgeapn+iDveOCs+ODs+ODneODvOODjeODs+ODiOeUn+aIkOOAgeabtOaWsOWHpueQhuOBqOODrOODs+ODgOODquODs+OCsOOBruWRvOOBs+WHuuOBl+OCkuihjOOBhuOAglxuICovXG5leHBvcnQgY2xhc3MgTEFwcE1vZGVsIGV4dGVuZHMgQ3ViaXNtVXNlck1vZGVsIHtcbiAgLyoqXG4gICAqIG1vZGVsMy5qc29u44GM572u44GL44KM44Gf44OH44Kj44Os44Kv44OI44Oq44Go44OV44Kh44Kk44Or44OR44K544GL44KJ44Oi44OH44Or44KS55Sf5oiQ44GZ44KLXG4gICAqIEBwYXJhbSBkaXJcbiAgICogQHBhcmFtIGZpbGVOYW1lXG4gICAqL1xuICBwdWJsaWMgbG9hZEFzc2V0cyhkaXI6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX21vZGVsSG9tZURpciA9IGRpcjtcblxuICAgIGZldGNoKGAke3RoaXMuX21vZGVsSG9tZURpcn0ke2ZpbGVOYW1lfWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xuICAgICAgICBjb25zdCBzZXR0aW5nOiBJQ3ViaXNtTW9kZWxTZXR0aW5nID0gbmV3IEN1YmlzbU1vZGVsU2V0dGluZ0pzb24oXG4gICAgICAgICAgYXJyYXlCdWZmZXIsXG4gICAgICAgICAgYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIOOCueODhuODvOODiOOCkuabtOaWsFxuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRNb2RlbDtcblxuICAgICAgICAvLyDntZDmnpzjgpLkv53lrZhcbiAgICAgICAgdGhpcy5zZXR1cE1vZGVsKHNldHRpbmcpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIC8vIG1vZGVsMy5qc29u6Kqt44G/6L6844G/44Gn44Ko44Op44O844GM55m655Sf44GX44Gf5pmC54K544Gn5o+P55S744Gv5LiN5Y+v6IO944Gq44Gu44Gn44CBc2V0dXDjgZvjgZrjgqjjg6njg7zjgpJjYXRjaOOBl+OBpuS9leOCguOBl+OBquOBhFxuICAgICAgICBDdWJpc21Mb2dFcnJvcihgRmFpbGVkIHRvIGxvYWQgZmlsZSAke3RoaXMuX21vZGVsSG9tZURpcn0ke2ZpbGVOYW1lfWApO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogbW9kZWwzLmpzb27jgYvjgonjg6Ljg4fjg6vjgpLnlJ/miJDjgZnjgovjgIJcbiAgICogbW9kZWwzLmpzb27jga7oqJjov7DjgavlvpPjgaPjgabjg6Ljg4fjg6vnlJ/miJDjgIHjg6Ljg7zjgrfjg6fjg7PjgIHniannkIbmvJTnrpfjgarjganjga7jgrPjg7Pjg53jg7zjg43jg7Pjg4jnlJ/miJDjgpLooYzjgYbjgIJcbiAgICpcbiAgICogQHBhcmFtIHNldHRpbmcgSUN1YmlzbU1vZGVsU2V0dGluZ+OBruOCpOODs+OCueOCv+ODs+OCuVxuICAgKi9cbiAgcHJpdmF0ZSBzZXR1cE1vZGVsKHNldHRpbmc6IElDdWJpc21Nb2RlbFNldHRpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl91cGRhdGluZyA9IHRydWU7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuX21vZGVsU2V0dGluZyA9IHNldHRpbmc7XG5cbiAgICAvLyBDdWJpc21Nb2RlbFxuICAgIGlmICh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW9kZWxGaWxlTmFtZSgpICE9ICcnKSB7XG4gICAgICBjb25zdCBtb2RlbEZpbGVOYW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vZGVsRmlsZU5hbWUoKTtcblxuICAgICAgZmV0Y2goYCR7dGhpcy5fbW9kZWxIb21lRGlyfSR7bW9kZWxGaWxlTmFtZX1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgICAgICAgIEN1YmlzbUxvZ0Vycm9yKFxuICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgZmlsZSAke3RoaXMuX21vZGVsSG9tZURpcn0ke21vZGVsRmlsZU5hbWV9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXlCdWZmZXIoMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkTW9kZWwoYXJyYXlCdWZmZXIsIHRoaXMuX21vY0NvbnNpc3RlbmN5KTtcbiAgICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRFeHByZXNzaW9uO1xuXG4gICAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgICBsb2FkQ3ViaXNtRXhwcmVzc2lvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5XYWl0TG9hZE1vZGVsO1xuICAgIH0gZWxzZSB7XG4gICAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgnTW9kZWwgZGF0YSBkb2VzIG5vdCBleGlzdC4nKTtcbiAgICB9XG5cbiAgICAvLyBFeHByZXNzaW9uXG4gICAgY29uc3QgbG9hZEN1YmlzbUV4cHJlc3Npb24gPSAoKTogdm9pZCA9PiB7XG4gICAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nLmdldEV4cHJlc3Npb25Db3VudCgpID4gMCkge1xuICAgICAgICBjb25zdCBjb3VudDogbnVtYmVyID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldEV4cHJlc3Npb25Db3VudCgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25OYW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldEV4cHJlc3Npb25OYW1lKGkpO1xuICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25GaWxlTmFtZSA9XG4gICAgICAgICAgICB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0RXhwcmVzc2lvbkZpbGVOYW1lKGkpO1xuXG4gICAgICAgICAgZmV0Y2goYCR7dGhpcy5fbW9kZWxIb21lRGlyfSR7ZXhwcmVzc2lvbkZpbGVOYW1lfWApXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5hcnJheUJ1ZmZlcigpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dFcnJvcihcbiAgICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCBmaWxlICR7dGhpcy5fbW9kZWxIb21lRGlyfSR7ZXhwcmVzc2lvbkZpbGVOYW1lfWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vIOODleOCoeOCpOODq+OBjOWtmOWcqOOBl+OBquOBj+OBpuOCgnJlc3BvbnNl44GvbnVsbOOCkui/lOWNtOOBl+OBquOBhOOBn+OCgeOAgeepuuOBrkFycmF5QnVmZmVy44Gn5a++5b+c44GZ44KLXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheUJ1ZmZlcigwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGFycmF5QnVmZmVyID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbW90aW9uOiBBQ3ViaXNtTW90aW9uID0gdGhpcy5sb2FkRXhwcmVzc2lvbihcbiAgICAgICAgICAgICAgICBhcnJheUJ1ZmZlcixcbiAgICAgICAgICAgICAgICBhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb25OYW1lXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuX2V4cHJlc3Npb25zLmdldFZhbHVlKGV4cHJlc3Npb25OYW1lKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgQUN1YmlzbU1vdGlvbi5kZWxldGUoXG4gICAgICAgICAgICAgICAgICB0aGlzLl9leHByZXNzaW9ucy5nZXRWYWx1ZShleHByZXNzaW9uTmFtZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuX2V4cHJlc3Npb25zLnNldFZhbHVlKGV4cHJlc3Npb25OYW1lLCBudWxsKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuX2V4cHJlc3Npb25zLnNldFZhbHVlKGV4cHJlc3Npb25OYW1lLCBtb3Rpb24pO1xuXG4gICAgICAgICAgICAgIHRoaXMuX2V4cHJlc3Npb25Db3VudCsrO1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLl9leHByZXNzaW9uQ291bnQgPj0gY291bnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRQaHlzaWNzO1xuXG4gICAgICAgICAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgICAgICAgICBsb2FkQ3ViaXNtUGh5c2ljcygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLldhaXRMb2FkRXhwcmVzc2lvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZFBoeXNpY3M7XG5cbiAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgbG9hZEN1YmlzbVBoeXNpY3MoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gUGh5c2ljc1xuICAgIGNvbnN0IGxvYWRDdWJpc21QaHlzaWNzID0gKCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZy5nZXRQaHlzaWNzRmlsZU5hbWUoKSAhPSAnJykge1xuICAgICAgICBjb25zdCBwaHlzaWNzRmlsZU5hbWUgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0UGh5c2ljc0ZpbGVOYW1lKCk7XG5cbiAgICAgICAgZmV0Y2goYCR7dGhpcy5fbW9kZWxIb21lRGlyfSR7cGh5c2ljc0ZpbGVOYW1lfWApXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5hcnJheUJ1ZmZlcigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gNDAwKSB7XG4gICAgICAgICAgICAgIEN1YmlzbUxvZ0Vycm9yKFxuICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCBmaWxlICR7dGhpcy5fbW9kZWxIb21lRGlyfSR7cGh5c2ljc0ZpbGVOYW1lfWBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheUJ1ZmZlcigwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKGFycmF5QnVmZmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZFBoeXNpY3MoYXJyYXlCdWZmZXIsIGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRQb3NlO1xuXG4gICAgICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICAgICAgbG9hZEN1YmlzbVBvc2UoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5XYWl0TG9hZFBoeXNpY3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRQb3NlO1xuXG4gICAgICAgIC8vIGNhbGxiYWNrXG4gICAgICAgIGxvYWRDdWJpc21Qb3NlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFBvc2VcbiAgICBjb25zdCBsb2FkQ3ViaXNtUG9zZSA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGlmICh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0UG9zZUZpbGVOYW1lKCkgIT0gJycpIHtcbiAgICAgICAgY29uc3QgcG9zZUZpbGVOYW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldFBvc2VGaWxlTmFtZSgpO1xuXG4gICAgICAgIGZldGNoKGAke3RoaXMuX21vZGVsSG9tZURpcn0ke3Bvc2VGaWxlTmFtZX1gKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDQwMCkge1xuICAgICAgICAgICAgICBDdWJpc21Mb2dFcnJvcihcbiAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgZmlsZSAke3RoaXMuX21vZGVsSG9tZURpcn0ke3Bvc2VGaWxlTmFtZX1gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXlCdWZmZXIoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRQb3NlKGFycmF5QnVmZmVyLCBhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcblxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5TZXR1cEV5ZUJsaW5rO1xuXG4gICAgICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICAgICAgc2V0dXBFeWVCbGluaygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLldhaXRMb2FkUG9zZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuU2V0dXBFeWVCbGluaztcblxuICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICBzZXR1cEV5ZUJsaW5rKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEV5ZUJsaW5rXG4gICAgY29uc3Qgc2V0dXBFeWVCbGluayA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGlmICh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0RXllQmxpbmtQYXJhbWV0ZXJDb3VudCgpID4gMCkge1xuICAgICAgICB0aGlzLl9leWVCbGluayA9IEN1YmlzbUV5ZUJsaW5rLmNyZWF0ZSh0aGlzLl9tb2RlbFNldHRpbmcpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLlNldHVwQnJlYXRoO1xuICAgICAgfVxuXG4gICAgICAvLyBjYWxsYmFja1xuICAgICAgc2V0dXBCcmVhdGgoKTtcbiAgICB9O1xuXG4gICAgLy8gQnJlYXRoXG4gICAgY29uc3Qgc2V0dXBCcmVhdGggPSAoKTogdm9pZCA9PiB7XG4gICAgICB0aGlzLl9icmVhdGggPSBDdWJpc21CcmVhdGguY3JlYXRlKCk7XG5cbiAgICAgIGNvbnN0IGJyZWF0aFBhcmFtZXRlcnM6IGNzbVZlY3RvcjxCcmVhdGhQYXJhbWV0ZXJEYXRhPiA9IG5ldyBjc21WZWN0b3IoKTtcbiAgICAgIGJyZWF0aFBhcmFtZXRlcnMucHVzaEJhY2soXG4gICAgICAgIG5ldyBCcmVhdGhQYXJhbWV0ZXJEYXRhKHRoaXMuX2lkUGFyYW1BbmdsZVgsIDAuMCwgMTUuMCwgNi41MzQ1LCAwLjUpXG4gICAgICApO1xuICAgICAgYnJlYXRoUGFyYW1ldGVycy5wdXNoQmFjayhcbiAgICAgICAgbmV3IEJyZWF0aFBhcmFtZXRlckRhdGEodGhpcy5faWRQYXJhbUFuZ2xlWSwgMC4wLCA4LjAsIDMuNTM0NSwgMC41KVxuICAgICAgKTtcbiAgICAgIGJyZWF0aFBhcmFtZXRlcnMucHVzaEJhY2soXG4gICAgICAgIG5ldyBCcmVhdGhQYXJhbWV0ZXJEYXRhKHRoaXMuX2lkUGFyYW1BbmdsZVosIDAuMCwgMTAuMCwgNS41MzQ1LCAwLjUpXG4gICAgICApO1xuICAgICAgYnJlYXRoUGFyYW1ldGVycy5wdXNoQmFjayhcbiAgICAgICAgbmV3IEJyZWF0aFBhcmFtZXRlckRhdGEodGhpcy5faWRQYXJhbUJvZHlBbmdsZVgsIDAuMCwgNC4wLCAxNS41MzQ1LCAwLjUpXG4gICAgICApO1xuICAgICAgYnJlYXRoUGFyYW1ldGVycy5wdXNoQmFjayhcbiAgICAgICAgbmV3IEJyZWF0aFBhcmFtZXRlckRhdGEoXG4gICAgICAgICAgQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQnJlYXRoXG4gICAgICAgICAgKSxcbiAgICAgICAgICAwLjUsXG4gICAgICAgICAgMC41LFxuICAgICAgICAgIDMuMjM0NSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuX2JyZWF0aC5zZXRQYXJhbWV0ZXJzKGJyZWF0aFBhcmFtZXRlcnMpO1xuICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5Mb2FkVXNlckRhdGE7XG5cbiAgICAgIC8vIGNhbGxiYWNrXG4gICAgICBsb2FkVXNlckRhdGEoKTtcbiAgICB9O1xuXG4gICAgLy8gVXNlckRhdGFcbiAgICBjb25zdCBsb2FkVXNlckRhdGEgPSAoKTogdm9pZCA9PiB7XG4gICAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nLmdldFVzZXJEYXRhRmlsZSgpICE9ICcnKSB7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhRmlsZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRVc2VyRGF0YUZpbGUoKTtcblxuICAgICAgICBmZXRjaChgJHt0aGlzLl9tb2RlbEhvbWVEaXJ9JHt1c2VyRGF0YUZpbGV9YClcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgICAgICAgICAgQ3ViaXNtTG9nRXJyb3IoXG4gICAgICAgICAgICAgICAgYEZhaWxlZCB0byBsb2FkIGZpbGUgJHt0aGlzLl9tb2RlbEhvbWVEaXJ9JHt1c2VyRGF0YUZpbGV9YFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkVXNlckRhdGEoYXJyYXlCdWZmZXIsIGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLlNldHVwRXllQmxpbmtJZHM7XG5cbiAgICAgICAgICAgIC8vIGNhbGxiYWNrXG4gICAgICAgICAgICBzZXR1cEV5ZUJsaW5rSWRzKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5XYWl0TG9hZFVzZXJEYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5TZXR1cEV5ZUJsaW5rSWRzO1xuXG4gICAgICAgIC8vIGNhbGxiYWNrXG4gICAgICAgIHNldHVwRXllQmxpbmtJZHMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gRXllQmxpbmtJZHNcbiAgICBjb25zdCBzZXR1cEV5ZUJsaW5rSWRzID0gKCk6IHZvaWQgPT4ge1xuICAgICAgY29uc3QgZXllQmxpbmtJZENvdW50OiBudW1iZXIgPVxuICAgICAgICB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0RXllQmxpbmtQYXJhbWV0ZXJDb3VudCgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV5ZUJsaW5rSWRDb3VudDsgKytpKSB7XG4gICAgICAgIHRoaXMuX2V5ZUJsaW5rSWRzLnB1c2hCYWNrKFxuICAgICAgICAgIHRoaXMuX21vZGVsU2V0dGluZy5nZXRFeWVCbGlua1BhcmFtZXRlcklkKGkpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuU2V0dXBMaXBTeW5jSWRzO1xuXG4gICAgICAvLyBjYWxsYmFja1xuICAgICAgc2V0dXBMaXBTeW5jSWRzKCk7XG4gICAgfTtcblxuICAgIC8vIExpcFN5bmNJZHNcbiAgICBjb25zdCBzZXR1cExpcFN5bmNJZHMgPSAoKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCBsaXBTeW5jSWRDb3VudCA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRMaXBTeW5jUGFyYW1ldGVyQ291bnQoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXBTeW5jSWRDb3VudDsgKytpKSB7XG4gICAgICAgIHRoaXMuX2xpcFN5bmNJZHMucHVzaEJhY2sodGhpcy5fbW9kZWxTZXR0aW5nLmdldExpcFN5bmNQYXJhbWV0ZXJJZChpKSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLlNldHVwTGF5b3V0O1xuXG4gICAgICAvLyBjYWxsYmFja1xuICAgICAgc2V0dXBMYXlvdXQoKTtcbiAgICB9O1xuXG4gICAgLy8gTGF5b3V0XG4gICAgY29uc3Qgc2V0dXBMYXlvdXQgPSAoKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCBsYXlvdXQ6IGNzbU1hcDxzdHJpbmcsIG51bWJlcj4gPSBuZXcgY3NtTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXG4gICAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nID09IG51bGwgfHwgdGhpcy5fbW9kZWxNYXRyaXggPT0gbnVsbCkge1xuICAgICAgICBDdWJpc21Mb2dFcnJvcignRmFpbGVkIHRvIHNldHVwTGF5b3V0KCkuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbW9kZWxTZXR0aW5nLmdldExheW91dE1hcChsYXlvdXQpO1xuICAgICAgdGhpcy5fbW9kZWxNYXRyaXguc2V0dXBGcm9tTGF5b3V0KGxheW91dCk7XG4gICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRNb3Rpb247XG5cbiAgICAgIC8vIGNhbGxiYWNrXG4gICAgICBsb2FkQ3ViaXNtTW90aW9uKCk7XG4gICAgfTtcblxuICAgIC8vIE1vdGlvblxuICAgIGNvbnN0IGxvYWRDdWJpc21Nb3Rpb24gPSAoKTogdm9pZCA9PiB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLldhaXRMb2FkTW90aW9uO1xuICAgICAgdGhpcy5fbW9kZWwuc2F2ZVBhcmFtZXRlcnMoKTtcbiAgICAgIHRoaXMuX2FsbE1vdGlvbkNvdW50ID0gMDtcbiAgICAgIHRoaXMuX21vdGlvbkNvdW50ID0gMDtcbiAgICAgIGNvbnN0IGdyb3VwOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICBjb25zdCBtb3Rpb25Hcm91cENvdW50OiBudW1iZXIgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uR3JvdXBDb3VudCgpO1xuXG4gICAgICAvLyDjg6Ljg7zjgrfjg6fjg7Pjga7nt4/mlbDjgpLmsYLjgoHjgotcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW90aW9uR3JvdXBDb3VudDsgaSsrKSB7XG4gICAgICAgIGdyb3VwW2ldID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkdyb3VwTmFtZShpKTtcbiAgICAgICAgdGhpcy5fYWxsTW90aW9uQ291bnQgKz0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkNvdW50KGdyb3VwW2ldKTtcbiAgICAgIH1cblxuICAgICAgLy8g44Oi44O844K344On44Oz44Gu6Kqt44G/6L6844G/XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdGlvbkdyb3VwQ291bnQ7IGkrKykge1xuICAgICAgICB0aGlzLnByZUxvYWRNb3Rpb25Hcm91cChncm91cFtpXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIOODouODvOOCt+ODp+ODs+OBjOOBquOBhOWgtOWQiFxuICAgICAgaWYgKG1vdGlvbkdyb3VwQ291bnQgPT0gMCkge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRUZXh0dXJlO1xuXG4gICAgICAgIC8vIOWFqOOBpuOBruODouODvOOCt+ODp+ODs+OCkuWBnOatouOBmeOCi1xuICAgICAgICB0aGlzLl9tb3Rpb25NYW5hZ2VyLnN0b3BBbGxNb3Rpb25zKCk7XG5cbiAgICAgICAgdGhpcy5fdXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKTtcbiAgICAgICAgdGhpcy5zZXR1cFRleHR1cmVzKCk7XG4gICAgICAgIHRoaXMuZ2V0UmVuZGVyZXIoKS5zdGFydFVwKGdsKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOODhuOCr+OCueODgeODo+ODpuODi+ODg+ODiOOBq+ODhuOCr+OCueODgeODo+OCkuODreODvOODieOBmeOCi1xuICAgKi9cbiAgcHJpdmF0ZSBzZXR1cFRleHR1cmVzKCk6IHZvaWQge1xuICAgIC8vIGlQaG9uZeOBp+OBruOCouODq+ODleOCoeWTgeizquWQkeS4iuOBruOBn+OCgVR5cGVzY3JpcHTjgafjga9wcmVtdWx0aXBsaWVkQWxwaGHjgpLmjqHnlKhcbiAgICBjb25zdCB1c2VQcmVtdWx0aXBseSA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5fc3RhdGUgPT0gTG9hZFN0ZXAuTG9hZFRleHR1cmUpIHtcbiAgICAgIC8vIOODhuOCr+OCueODgeODo+iqreOBv+i+vOOBv+eUqFxuICAgICAgY29uc3QgdGV4dHVyZUNvdW50OiBudW1iZXIgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0VGV4dHVyZUNvdW50KCk7XG5cbiAgICAgIGZvciAoXG4gICAgICAgIGxldCBtb2RlbFRleHR1cmVOdW1iZXIgPSAwO1xuICAgICAgICBtb2RlbFRleHR1cmVOdW1iZXIgPCB0ZXh0dXJlQ291bnQ7XG4gICAgICAgIG1vZGVsVGV4dHVyZU51bWJlcisrXG4gICAgICApIHtcbiAgICAgICAgLy8g44OG44Kv44K544OB44Oj5ZCN44GM56m65paH5a2X44Gg44Gj44Gf5aC05ZCI44Gv44Ot44O844OJ44O744OQ44Kk44Oz44OJ5Yem55CG44KS44K544Kt44OD44OXXG4gICAgICAgIGlmICh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0VGV4dHVyZUZpbGVOYW1lKG1vZGVsVGV4dHVyZU51bWJlcikgPT0gJycpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0VGV4dHVyZUZpbGVOYW1lIG51bGwnKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlYkdM44Gu44OG44Kv44K544OB44Oj44Om44OL44OD44OI44Gr44OG44Kv44K544OB44Oj44KS44Ot44O844OJ44GZ44KLXG4gICAgICAgIGxldCB0ZXh0dXJlUGF0aCA9XG4gICAgICAgICAgdGhpcy5fbW9kZWxTZXR0aW5nLmdldFRleHR1cmVGaWxlTmFtZShtb2RlbFRleHR1cmVOdW1iZXIpO1xuICAgICAgICB0ZXh0dXJlUGF0aCA9IHRoaXMuX21vZGVsSG9tZURpciArIHRleHR1cmVQYXRoO1xuXG4gICAgICAgIC8vIOODreODvOODieWujOS6huaZguOBq+WRvOOBs+WHuuOBmeOCs+ODvOODq+ODkOODg+OCr+mWouaVsFxuICAgICAgICBjb25zdCBvbkxvYWQgPSAodGV4dHVyZUluZm86IFRleHR1cmVJbmZvKTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy5nZXRSZW5kZXJlcigpLmJpbmRUZXh0dXJlKG1vZGVsVGV4dHVyZU51bWJlciwgdGV4dHVyZUluZm8uaWQpO1xuXG4gICAgICAgICAgdGhpcy5fdGV4dHVyZUNvdW50Kys7XG5cbiAgICAgICAgICBpZiAodGhpcy5fdGV4dHVyZUNvdW50ID49IHRleHR1cmVDb3VudCkge1xuICAgICAgICAgICAgLy8g44Ot44O844OJ5a6M5LqGXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkNvbXBsZXRlU2V0dXA7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIOiqreOBv+i+vOOBv1xuICAgICAgICBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKVxuICAgICAgICAgIC5nZXRUZXh0dXJlTWFuYWdlcigpXG4gICAgICAgICAgLmNyZWF0ZVRleHR1cmVGcm9tUG5nRmlsZSh0ZXh0dXJlUGF0aCwgdXNlUHJlbXVsdGlwbHksIG9uTG9hZCk7XG4gICAgICAgIHRoaXMuZ2V0UmVuZGVyZXIoKS5zZXRJc1ByZW11bHRpcGxpZWRBbHBoYSh1c2VQcmVtdWx0aXBseSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuV2FpdExvYWRUZXh0dXJlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njgpLlho3mp4vnr4njgZnjgotcbiAgICovXG4gIHB1YmxpYyByZWxvYWRSZW5kZXJlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRlbGV0ZVJlbmRlcmVyKCk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuICAgIHRoaXMuc2V0dXBUZXh0dXJlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIOabtOaWsFxuICAgKi9cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc3RhdGUgIT0gTG9hZFN0ZXAuQ29tcGxldGVTZXR1cCkgcmV0dXJuO1xuXG4gICAgY29uc3QgZGVsdGFUaW1lU2Vjb25kczogbnVtYmVyID0gTEFwcFBhbC5nZXREZWx0YVRpbWUoKTtcbiAgICB0aGlzLl91c2VyVGltZVNlY29uZHMgKz0gZGVsdGFUaW1lU2Vjb25kcztcblxuICAgIHRoaXMuX2RyYWdNYW5hZ2VyLnVwZGF0ZShkZWx0YVRpbWVTZWNvbmRzKTtcbiAgICB0aGlzLl9kcmFnWCA9IHRoaXMuX2RyYWdNYW5hZ2VyLmdldFgoKTtcbiAgICB0aGlzLl9kcmFnWSA9IHRoaXMuX2RyYWdNYW5hZ2VyLmdldFkoKTtcblxuICAgIC8vIOODouODvOOCt+ODp+ODs+OBq+OCiOOCi+ODkeODqeODoeODvOOCv+abtOaWsOOBruacieeEoVxuICAgIGxldCBtb3Rpb25VcGRhdGVkID0gZmFsc2U7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5fbW9kZWwubG9hZFBhcmFtZXRlcnMoKTsgLy8g5YmN5Zue44K744O844OW44GV44KM44Gf54q25oWL44KS44Ot44O844OJXG4gICAgaWYgKHRoaXMuX21vdGlvbk1hbmFnZXIuaXNGaW5pc2hlZCgpKSB7XG4gICAgICAvLyDjg6Ljg7zjgrfjg6fjg7Pjga7lho3nlJ/jgYzjgarjgYTloLTlkIjjgIHlvoXmqZ/jg6Ljg7zjgrfjg6fjg7Pjga7kuK3jgYvjgonjg6njg7Pjg4Djg6Djgaflho3nlJ/jgZnjgotcbiAgICAgIHRoaXMuc3RhcnRSYW5kb21Nb3Rpb24oXG4gICAgICAgIExBcHBEZWZpbmUuTW90aW9uR3JvdXBJZGxlLFxuICAgICAgICBMQXBwRGVmaW5lLlByaW9yaXR5SWRsZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW90aW9uVXBkYXRlZCA9IHRoaXMuX21vdGlvbk1hbmFnZXIudXBkYXRlTW90aW9uKFxuICAgICAgICB0aGlzLl9tb2RlbCxcbiAgICAgICAgZGVsdGFUaW1lU2Vjb25kc1xuICAgICAgKTsgLy8g44Oi44O844K344On44Oz44KS5pu05pawXG4gICAgfVxuICAgIHRoaXMuX21vZGVsLnNhdmVQYXJhbWV0ZXJzKCk7IC8vIOeKtuaFi+OCkuS/neWtmFxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIOOBvuOBsOOBn+OBjVxuICAgIGlmICghbW90aW9uVXBkYXRlZCkge1xuICAgICAgaWYgKHRoaXMuX2V5ZUJsaW5rICE9IG51bGwpIHtcbiAgICAgICAgLy8g44Oh44Kk44Oz44Oi44O844K344On44Oz44Gu5pu05paw44GM44Gq44GE44Go44GNXG4gICAgICAgIHRoaXMuX2V5ZUJsaW5rLnVwZGF0ZVBhcmFtZXRlcnModGhpcy5fbW9kZWwsIGRlbHRhVGltZVNlY29uZHMpOyAvLyDnm67jg5Hjg4FcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXhwcmVzc2lvbk1hbmFnZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXhwcmVzc2lvbk1hbmFnZXIudXBkYXRlTW90aW9uKHRoaXMuX21vZGVsLCBkZWx0YVRpbWVTZWNvbmRzKTsgLy8g6KGo5oOF44Gn44OR44Op44Oh44O844K/5pu05paw77yI55u45a++5aSJ5YyW77yJXG4gICAgfVxuXG4gICAgLy8g44OJ44Op44OD44Kw44Gr44KI44KL5aSJ5YyWXG4gICAgLy8g44OJ44Op44OD44Kw44Gr44KI44KL6aGU44Gu5ZCR44GN44Gu6Kq/5pW0XG4gICAgdGhpcy5fbW9kZWwuYWRkUGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1BbmdsZVgsIHRoaXMuX2RyYWdYICogMzApOyAvLyAtMzDjgYvjgokzMOOBruWApOOCkuWKoOOBiOOCi1xuICAgIHRoaXMuX21vZGVsLmFkZFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtQW5nbGVZLCB0aGlzLl9kcmFnWSAqIDMwKTtcbiAgICB0aGlzLl9tb2RlbC5hZGRQYXJhbWV0ZXJWYWx1ZUJ5SWQoXG4gICAgICB0aGlzLl9pZFBhcmFtQW5nbGVaLFxuICAgICAgdGhpcy5fZHJhZ1ggKiB0aGlzLl9kcmFnWSAqIC0zMFxuICAgICk7XG5cbiAgICAvLyDjg4njg6njg4PjgrDjgavjgojjgovkvZPjga7lkJHjgY3jga7oqr/mlbRcbiAgICB0aGlzLl9tb2RlbC5hZGRQYXJhbWV0ZXJWYWx1ZUJ5SWQoXG4gICAgICB0aGlzLl9pZFBhcmFtQm9keUFuZ2xlWCxcbiAgICAgIHRoaXMuX2RyYWdYICogMTBcbiAgICApOyAvLyAtMTDjgYvjgokxMOOBruWApOOCkuWKoOOBiOOCi1xuXG4gICAgLy8g44OJ44Op44OD44Kw44Gr44KI44KL55uu44Gu5ZCR44GN44Gu6Kq/5pW0XG4gICAgdGhpcy5fbW9kZWwuYWRkUGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1FeWVCYWxsWCwgdGhpcy5fZHJhZ1gpOyAvLyAtMeOBi+OCiTHjga7lgKTjgpLliqDjgYjjgotcbiAgICB0aGlzLl9tb2RlbC5hZGRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5faWRQYXJhbUV5ZUJhbGxZLCB0aGlzLl9kcmFnWSk7XG5cbiAgICAvLyDlkbzlkLjjgarjgalcbiAgICBpZiAodGhpcy5fYnJlYXRoICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX2JyZWF0aC51cGRhdGVQYXJhbWV0ZXJzKHRoaXMuX21vZGVsLCBkZWx0YVRpbWVTZWNvbmRzKTtcbiAgICB9XG5cbiAgICAvLyDniannkIbmvJTnrpfjga7oqK3lrppcbiAgICBpZiAodGhpcy5fcGh5c2ljcyAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9waHlzaWNzLmV2YWx1YXRlKHRoaXMuX21vZGVsLCBkZWx0YVRpbWVTZWNvbmRzKTtcbiAgICB9XG5cbiAgICAvLyDjg6rjg4Pjg5fjgrfjg7Pjgq/jga7oqK3lrppcbiAgICBpZiAodGhpcy5fbGlwc3luYykge1xuICAgICAgbGV0IHZhbHVlID0gMC4wOyAvLyDjg6rjgqLjg6vjgr/jgqTjg6Djgafjg6rjg4Pjg5fjgrfjg7Pjgq/jgpLooYzjgYbloLTlkIjjgIHjgrfjgrnjg4bjg6DjgYvjgonpn7Pph4/jgpLlj5blvpfjgZfjgabjgIEwfjHjga7nr4Tlm7LjgaflgKTjgpLlhaXlipvjgZfjgb7jgZnjgIJcblxuICAgICAgdGhpcy5fd2F2RmlsZUhhbmRsZXIudXBkYXRlKGRlbHRhVGltZVNlY29uZHMpO1xuICAgICAgdmFsdWUgPSB0aGlzLl93YXZGaWxlSGFuZGxlci5nZXRSbXMoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9saXBTeW5jSWRzLmdldFNpemUoKTsgKytpKSB7XG4gICAgICAgIHRoaXMuX21vZGVsLmFkZFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9saXBTeW5jSWRzLmF0KGkpLCB2YWx1ZSwgMC44KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDjg53jg7zjgrrjga7oqK3lrppcbiAgICBpZiAodGhpcy5fcG9zZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3NlLnVwZGF0ZVBhcmFtZXRlcnModGhpcy5fbW9kZWwsIGRlbHRhVGltZVNlY29uZHMpO1xuICAgIH1cblxuICAgIHRoaXMuX21vZGVsLnVwZGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOW8leaVsOOBp+aMh+WumuOBl+OBn+ODouODvOOCt+ODp+ODs+OBruWGjeeUn+OCkumWi+Wni+OBmeOCi1xuICAgKiBAcGFyYW0gZ3JvdXAg44Oi44O844K344On44Oz44Kw44Or44O844OX5ZCNXG4gICAqIEBwYXJhbSBubyDjgrDjg6vjg7zjg5flhoXjga7nlarlj7dcbiAgICogQHBhcmFtIHByaW9yaXR5IOWEquWFiOW6plxuICAgKiBAcGFyYW0gb25GaW5pc2hlZE1vdGlvbkhhbmRsZXIg44Oi44O844K344On44Oz5YaN55Sf57WC5LqG5pmC44Gr5ZG844Gz5Ye644GV44KM44KL44Kz44O844Or44OQ44OD44Kv6Zai5pWwXG4gICAqIEByZXR1cm4g6ZaL5aeL44GX44Gf44Oi44O844K344On44Oz44Gu6K2Y5Yil55Wq5Y+344KS6L+U44GZ44CC5YCL5Yil44Gu44Oi44O844K344On44Oz44GM57WC5LqG44GX44Gf44GL5ZCm44GL44KS5Yik5a6a44GZ44KLaXNGaW5pc2hlZCgp44Gu5byV5pWw44Gn5L2/55So44GZ44KL44CC6ZaL5aeL44Gn44GN44Gq44GE5pmC44GvWy0xXVxuICAgKi9cbiAgcHVibGljIHN0YXJ0TW90aW9uKFxuICAgIGdyb3VwOiBzdHJpbmcsXG4gICAgbm86IG51bWJlcixcbiAgICBwcmlvcml0eTogbnVtYmVyLFxuICAgIG9uRmluaXNoZWRNb3Rpb25IYW5kbGVyPzogRmluaXNoZWRNb3Rpb25DYWxsYmFja1xuICApOiBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5SGFuZGxlIHtcbiAgICBpZiAocHJpb3JpdHkgPT0gTEFwcERlZmluZS5Qcmlvcml0eUZvcmNlKSB7XG4gICAgICB0aGlzLl9tb3Rpb25NYW5hZ2VyLnNldFJlc2VydmVQcmlvcml0eShwcmlvcml0eSk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5fbW90aW9uTWFuYWdlci5yZXNlcnZlTW90aW9uKHByaW9yaXR5KSkge1xuICAgICAgaWYgKHRoaXMuX2RlYnVnTW9kZSkge1xuICAgICAgICBMQXBwUGFsLnByaW50TWVzc2FnZShcIltBUFBdY2FuJ3Qgc3RhcnQgbW90aW9uLlwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBJbnZhbGlkTW90aW9uUXVldWVFbnRyeUhhbmRsZVZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdGlvbkZpbGVOYW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkZpbGVOYW1lKGdyb3VwLCBubyk7XG5cbiAgICAvLyBleCkgaWRsZV8wXG4gICAgY29uc3QgbmFtZSA9IGAke2dyb3VwfV8ke25vfWA7XG4gICAgbGV0IG1vdGlvbjogQ3ViaXNtTW90aW9uID0gdGhpcy5fbW90aW9ucy5nZXRWYWx1ZShuYW1lKSBhcyBDdWJpc21Nb3Rpb247XG4gICAgbGV0IGF1dG9EZWxldGUgPSBmYWxzZTtcblxuICAgIGlmIChtb3Rpb24gPT0gbnVsbCkge1xuICAgICAgZmV0Y2goYCR7dGhpcy5fbW9kZWxIb21lRGlyfSR7bW90aW9uRmlsZU5hbWV9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gNDAwKSB7XG4gICAgICAgICAgICBDdWJpc21Mb2dFcnJvcihcbiAgICAgICAgICAgICAgYEZhaWxlZCB0byBsb2FkIGZpbGUgJHt0aGlzLl9tb2RlbEhvbWVEaXJ9JHttb3Rpb25GaWxlTmFtZX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheUJ1ZmZlcigwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGFycmF5QnVmZmVyID0+IHtcbiAgICAgICAgICBtb3Rpb24gPSB0aGlzLmxvYWRNb3Rpb24oXG4gICAgICAgICAgICBhcnJheUJ1ZmZlcixcbiAgICAgICAgICAgIGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgb25GaW5pc2hlZE1vdGlvbkhhbmRsZXJcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKG1vdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGZhZGVUaW1lOiBudW1iZXIgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uRmFkZUluVGltZVZhbHVlKFxuICAgICAgICAgICAgZ3JvdXAsXG4gICAgICAgICAgICBub1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAoZmFkZVRpbWUgPj0gMC4wKSB7XG4gICAgICAgICAgICBtb3Rpb24uc2V0RmFkZUluVGltZShmYWRlVGltZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmFkZVRpbWUgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uRmFkZU91dFRpbWVWYWx1ZShncm91cCwgbm8pO1xuICAgICAgICAgIGlmIChmYWRlVGltZSA+PSAwLjApIHtcbiAgICAgICAgICAgIG1vdGlvbi5zZXRGYWRlT3V0VGltZShmYWRlVGltZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbW90aW9uLnNldEVmZmVjdElkcyh0aGlzLl9leWVCbGlua0lkcywgdGhpcy5fbGlwU3luY0lkcyk7XG4gICAgICAgICAgYXV0b0RlbGV0ZSA9IHRydWU7IC8vIOe1guS6huaZguOBq+ODoeODouODquOBi+OCieWJiumZpFxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW90aW9uLnNldEZpbmlzaGVkTW90aW9uSGFuZGxlcihvbkZpbmlzaGVkTW90aW9uSGFuZGxlcik7XG4gICAgfVxuXG4gICAgLy92b2ljZVxuICAgIGNvbnN0IHZvaWNlID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvblNvdW5kRmlsZU5hbWUoZ3JvdXAsIG5vKTtcbiAgICBpZiAodm9pY2UubG9jYWxlQ29tcGFyZSgnJykgIT0gMCkge1xuICAgICAgbGV0IHBhdGggPSB2b2ljZTtcbiAgICAgIHBhdGggPSB0aGlzLl9tb2RlbEhvbWVEaXIgKyBwYXRoO1xuICAgICAgdGhpcy5fd2F2RmlsZUhhbmRsZXIuc3RhcnQocGF0aCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RlYnVnTW9kZSkge1xuICAgICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoYFtBUFBdc3RhcnQgbW90aW9uOiBbJHtncm91cH1fJHtub31gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX21vdGlvbk1hbmFnZXIuc3RhcnRNb3Rpb25Qcmlvcml0eShcbiAgICAgIG1vdGlvbixcbiAgICAgIGF1dG9EZWxldGUsXG4gICAgICBwcmlvcml0eVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICog44Op44Oz44OA44Og44Gr6YG444Gw44KM44Gf44Oi44O844K344On44Oz44Gu5YaN55Sf44KS6ZaL5aeL44GZ44KL44CCXG4gICAqIEBwYXJhbSBncm91cCDjg6Ljg7zjgrfjg6fjg7PjgrDjg6vjg7zjg5flkI1cbiAgICogQHBhcmFtIHByaW9yaXR5IOWEquWFiOW6plxuICAgKiBAcGFyYW0gb25GaW5pc2hlZE1vdGlvbkhhbmRsZXIg44Oi44O844K344On44Oz5YaN55Sf57WC5LqG5pmC44Gr5ZG844Gz5Ye644GV44KM44KL44Kz44O844Or44OQ44OD44Kv6Zai5pWwXG4gICAqIEByZXR1cm4g6ZaL5aeL44GX44Gf44Oi44O844K344On44Oz44Gu6K2Y5Yil55Wq5Y+344KS6L+U44GZ44CC5YCL5Yil44Gu44Oi44O844K344On44Oz44GM57WC5LqG44GX44Gf44GL5ZCm44GL44KS5Yik5a6a44GZ44KLaXNGaW5pc2hlZCgp44Gu5byV5pWw44Gn5L2/55So44GZ44KL44CC6ZaL5aeL44Gn44GN44Gq44GE5pmC44GvWy0xXVxuICAgKi9cbiAgcHVibGljIHN0YXJ0UmFuZG9tTW90aW9uKFxuICAgIGdyb3VwOiBzdHJpbmcsXG4gICAgcHJpb3JpdHk6IG51bWJlcixcbiAgICBvbkZpbmlzaGVkTW90aW9uSGFuZGxlcj86IEZpbmlzaGVkTW90aW9uQ2FsbGJhY2tcbiAgKTogQ3ViaXNtTW90aW9uUXVldWVFbnRyeUhhbmRsZSB7XG4gICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25Db3VudChncm91cCkgPT0gMCkge1xuICAgICAgcmV0dXJuIEludmFsaWRNb3Rpb25RdWV1ZUVudHJ5SGFuZGxlVmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3Qgbm86IG51bWJlciA9IE1hdGguZmxvb3IoXG4gICAgICBNYXRoLnJhbmRvbSgpICogdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkNvdW50KGdyb3VwKVxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5zdGFydE1vdGlvbihncm91cCwgbm8sIHByaW9yaXR5LCBvbkZpbmlzaGVkTW90aW9uSGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICog5byV5pWw44Gn5oyH5a6a44GX44Gf6KGo5oOF44Oi44O844K344On44Oz44KS44K744OD44OI44GZ44KLXG4gICAqXG4gICAqIEBwYXJhbSBleHByZXNzaW9uSWQg6KGo5oOF44Oi44O844K344On44Oz44GuSURcbiAgICovXG4gIHB1YmxpYyBzZXRFeHByZXNzaW9uKGV4cHJlc3Npb25JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgbW90aW9uOiBBQ3ViaXNtTW90aW9uID0gdGhpcy5fZXhwcmVzc2lvbnMuZ2V0VmFsdWUoZXhwcmVzc2lvbklkKTtcblxuICAgIGlmICh0aGlzLl9kZWJ1Z01vZGUpIHtcbiAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKGBbQVBQXWV4cHJlc3Npb246IFske2V4cHJlc3Npb25JZH1dYCk7XG4gICAgfVxuXG4gICAgaWYgKG1vdGlvbiAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9leHByZXNzaW9uTWFuYWdlci5zdGFydE1vdGlvblByaW9yaXR5KFxuICAgICAgICBtb3Rpb24sXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBMQXBwRGVmaW5lLlByaW9yaXR5Rm9yY2VcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9kZWJ1Z01vZGUpIHtcbiAgICAgICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoYFtBUFBdZXhwcmVzc2lvblske2V4cHJlc3Npb25JZH1dIGlzIG51bGxgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog44Op44Oz44OA44Og44Gr6YG444Gw44KM44Gf6KGo5oOF44Oi44O844K344On44Oz44KS44K744OD44OI44GZ44KLXG4gICAqL1xuICBwdWJsaWMgc2V0UmFuZG9tRXhwcmVzc2lvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZXhwcmVzc2lvbnMuZ2V0U2l6ZSgpID09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBubzogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5fZXhwcmVzc2lvbnMuZ2V0U2l6ZSgpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZXhwcmVzc2lvbnMuZ2V0U2l6ZSgpOyBpKyspIHtcbiAgICAgIGlmIChpID09IG5vKSB7XG4gICAgICAgIGNvbnN0IG5hbWU6IHN0cmluZyA9IHRoaXMuX2V4cHJlc3Npb25zLl9rZXlWYWx1ZXNbaV0uZmlyc3Q7XG4gICAgICAgIHRoaXMuc2V0RXhwcmVzc2lvbihuYW1lKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgqTjg5njg7Pjg4jjga7nmbrngavjgpLlj5fjgZHlj5bjgotcbiAgICovXG4gIHB1YmxpYyBtb3Rpb25FdmVudEZpcmVkKGV2ZW50VmFsdWU6IGNzbVN0cmluZyk6IHZvaWQge1xuICAgIEN1YmlzbUxvZ0luZm8oJ3swfSBpcyBmaXJlZCBvbiBMQXBwTW9kZWwhIScsIGV2ZW50VmFsdWUucyk7XG4gIH1cblxuICAvKipcbiAgICog5b2T44Gf44KK5Yik5a6a44OG44K544OIXG4gICAqIOaMh+Wumu+8qe+8pOOBrumggueCueODquOCueODiOOBi+OCieefqeW9ouOCkuioiOeul+OBl+OAgeW6p+aomeOCkuOBjOefqeW9ouevhOWbsuWGheOBi+WIpOWumuOBmeOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gaGl0QXJlbmFOYW1lICDlvZPjgZ/jgorliKTlrprjgpLjg4bjgrnjg4jjgZnjgovlr77osaHjga5JRFxuICAgKiBAcGFyYW0geCAgICAgICAgICAgICDliKTlrprjgpLooYzjgYZY5bqn5qiZXG4gICAqIEBwYXJhbSB5ICAgICAgICAgICAgIOWIpOWumuOCkuihjOOBhlnluqfmqJlcbiAgICovXG4gIHB1YmxpYyBoaXRUZXN0KGhpdEFyZW5hTmFtZTogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIC8vIOmAj+aYjuaZguOBr+W9k+OBn+OCiuWIpOWumueEoeOBl+OAglxuICAgIGlmICh0aGlzLl9vcGFjaXR5IDwgMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvdW50OiBudW1iZXIgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0SGl0QXJlYXNDb3VudCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nLmdldEhpdEFyZWFOYW1lKGkpID09IGhpdEFyZW5hTmFtZSkge1xuICAgICAgICBjb25zdCBkcmF3SWQ6IEN1YmlzbUlkSGFuZGxlID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldEhpdEFyZWFJZChpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNIaXQoZHJhd0lkLCB4LCB5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICog44Oi44O844K344On44Oz44OH44O844K/44KS44Kw44Or44O844OX5ZCN44GL44KJ5LiA5ous44Gn44Ot44O844OJ44GZ44KL44CCXG4gICAqIOODouODvOOCt+ODp+ODs+ODh+ODvOOCv+OBruWQjeWJjeOBr+WGhemDqOOBp01vZGVsU2V0dGluZ+OBi+OCieWPluW+l+OBmeOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gZ3JvdXAg44Oi44O844K344On44Oz44OH44O844K/44Gu44Kw44Or44O844OX5ZCNXG4gICAqL1xuICBwdWJsaWMgcHJlTG9hZE1vdGlvbkdyb3VwKGdyb3VwOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25Db3VudChncm91cCk7IGkrKykge1xuICAgICAgY29uc3QgbW90aW9uRmlsZU5hbWUgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uRmlsZU5hbWUoZ3JvdXAsIGkpO1xuXG4gICAgICAvLyBleCkgaWRsZV8wXG4gICAgICBjb25zdCBuYW1lID0gYCR7Z3JvdXB9XyR7aX1gO1xuICAgICAgaWYgKHRoaXMuX2RlYnVnTW9kZSkge1xuICAgICAgICBMQXBwUGFsLnByaW50TWVzc2FnZShcbiAgICAgICAgICBgW0FQUF1sb2FkIG1vdGlvbjogJHttb3Rpb25GaWxlTmFtZX0gPT4gWyR7bmFtZX1dYFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBmZXRjaChgJHt0aGlzLl9tb2RlbEhvbWVEaXJ9JHttb3Rpb25GaWxlTmFtZX1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgICAgICAgIEN1YmlzbUxvZ0Vycm9yKFxuICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgZmlsZSAke3RoaXMuX21vZGVsSG9tZURpcn0ke21vdGlvbkZpbGVOYW1lfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xuICAgICAgICAgIGNvbnN0IHRtcE1vdGlvbjogQ3ViaXNtTW90aW9uID0gdGhpcy5sb2FkTW90aW9uKFxuICAgICAgICAgICAgYXJyYXlCdWZmZXIsXG4gICAgICAgICAgICBhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAodG1wTW90aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBmYWRlVGltZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25GYWRlSW5UaW1lVmFsdWUoXG4gICAgICAgICAgICAgIGdyb3VwLFxuICAgICAgICAgICAgICBpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGZhZGVUaW1lID49IDAuMCkge1xuICAgICAgICAgICAgICB0bXBNb3Rpb24uc2V0RmFkZUluVGltZShmYWRlVGltZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZhZGVUaW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkZhZGVPdXRUaW1lVmFsdWUoZ3JvdXAsIGkpO1xuICAgICAgICAgICAgaWYgKGZhZGVUaW1lID49IDAuMCkge1xuICAgICAgICAgICAgICB0bXBNb3Rpb24uc2V0RmFkZU91dFRpbWUoZmFkZVRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG1wTW90aW9uLnNldEVmZmVjdElkcyh0aGlzLl9leWVCbGlua0lkcywgdGhpcy5fbGlwU3luY0lkcyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9tb3Rpb25zLmdldFZhbHVlKG5hbWUpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgQUN1YmlzbU1vdGlvbi5kZWxldGUodGhpcy5fbW90aW9ucy5nZXRWYWx1ZShuYW1lKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX21vdGlvbnMuc2V0VmFsdWUobmFtZSwgdG1wTW90aW9uKTtcblxuICAgICAgICAgICAgdGhpcy5fbW90aW9uQ291bnQrKztcbiAgICAgICAgICAgIGlmICh0aGlzLl9tb3Rpb25Db3VudCA+PSB0aGlzLl9hbGxNb3Rpb25Db3VudCkge1xuICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRUZXh0dXJlO1xuXG4gICAgICAgICAgICAgIC8vIOWFqOOBpuOBruODouODvOOCt+ODp+ODs+OCkuWBnOatouOBmeOCi1xuICAgICAgICAgICAgICB0aGlzLl9tb3Rpb25NYW5hZ2VyLnN0b3BBbGxNb3Rpb25zKCk7XG5cbiAgICAgICAgICAgICAgdGhpcy5fdXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXR1cFRleHR1cmVzKCk7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0UmVuZGVyZXIoKS5zdGFydFVwKGdsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbG9hZE1vdGlvbuOBp+OBjeOBquOBi+OBo+OBn+WgtOWQiOOBr+ODouODvOOCt+ODp+ODs+OBrue3j+aVsOOBjOOBmuOCjOOCi+OBruOBpzHjgaTmuJvjgonjgZlcbiAgICAgICAgICAgIHRoaXMuX2FsbE1vdGlvbkNvdW50LS07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog44GZ44G544Gm44Gu44Oi44O844K344On44Oz44OH44O844K/44KS6Kej5pS+44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgcmVsZWFzZU1vdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5fbW90aW9ucy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWFqOOBpuOBruihqOaDheODh+ODvOOCv+OCkuino+aUvuOBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIHJlbGVhc2VFeHByZXNzaW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLl9leHByZXNzaW9ucy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIOODouODh+ODq+OCkuaPj+eUu+OBmeOCi+WHpueQhuOAguODouODh+ODq+OCkuaPj+eUu+OBmeOCi+epuumWk+OBrlZpZXctUHJvamVjdGlvbuihjOWIl+OCkua4oeOBmeOAglxuICAgKi9cbiAgcHVibGljIGRvRHJhdygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbW9kZWwgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgLy8g44Kt44Oj44Oz44OQ44K544K144Kk44K644KS5rih44GZXG4gICAgY29uc3Qgdmlld3BvcnQ6IG51bWJlcltdID0gWzAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF07XG5cbiAgICB0aGlzLmdldFJlbmRlcmVyKCkuc2V0UmVuZGVyU3RhdGUoZnJhbWVCdWZmZXIsIHZpZXdwb3J0KTtcbiAgICB0aGlzLmdldFJlbmRlcmVyKCkuZHJhd01vZGVsKCk7XG4gIH1cblxuICAvKipcbiAgICog44Oi44OH44Or44KS5o+P55S744GZ44KL5Yem55CG44CC44Oi44OH44Or44KS5o+P55S744GZ44KL56m66ZaT44GuVmlldy1Qcm9qZWN0aW9u6KGM5YiX44KS5rih44GZ44CCXG4gICAqL1xuICBwdWJsaWMgZHJhdyhtYXRyaXg6IEN1YmlzbU1hdHJpeDQ0KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX21vZGVsID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDlkIToqq3jgb/ovrzjgb/ntYLkuoblvoxcbiAgICBpZiAodGhpcy5fc3RhdGUgPT0gTG9hZFN0ZXAuQ29tcGxldGVTZXR1cCkge1xuICAgICAgbWF0cml4Lm11bHRpcGx5QnlNYXRyaXgodGhpcy5fbW9kZWxNYXRyaXgpO1xuXG4gICAgICB0aGlzLmdldFJlbmRlcmVyKCkuc2V0TXZwTWF0cml4KG1hdHJpeCk7XG5cbiAgICAgIHRoaXMuZG9EcmF3KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGhhc01vY0NvbnNpc3RlbmN5RnJvbUZpbGUoKSB7XG4gICAgQ1NNX0FTU0VSVCh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW9kZWxGaWxlTmFtZSgpLmxvY2FsZUNvbXBhcmUoYGApKTtcblxuICAgIC8vIEN1YmlzbU1vZGVsXG4gICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb2RlbEZpbGVOYW1lKCkgIT0gJycpIHtcbiAgICAgIGNvbnN0IG1vZGVsRmlsZU5hbWUgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW9kZWxGaWxlTmFtZSgpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RoaXMuX21vZGVsSG9tZURpcn0ke21vZGVsRmlsZU5hbWV9YCk7XG4gICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IGF3YWl0IHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG5cbiAgICAgIHRoaXMuX2NvbnNpc3RlbmN5ID0gQ3ViaXNtTW9jLmhhc01vY0NvbnNpc3RlbmN5KGFycmF5QnVmZmVyKTtcblxuICAgICAgaWYgKCF0aGlzLl9jb25zaXN0ZW5jeSkge1xuICAgICAgICBDdWJpc21Mb2dJbmZvKCdJbmNvbnNpc3RlbnQgTU9DMy4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEN1YmlzbUxvZ0luZm8oJ0NvbnNpc3RlbnQgTU9DMy4nKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2NvbnNpc3RlbmN5O1xuICAgIH0gZWxzZSB7XG4gICAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgnTW9kZWwgZGF0YSBkb2VzIG5vdCBleGlzdC4nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX21vZGVsU2V0dGluZyA9IG51bGw7XG4gICAgdGhpcy5fbW9kZWxIb21lRGlyID0gbnVsbDtcbiAgICB0aGlzLl91c2VyVGltZVNlY29uZHMgPSAwLjA7XG5cbiAgICB0aGlzLl9leWVCbGlua0lkcyA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtSWRIYW5kbGU+KCk7XG4gICAgdGhpcy5fbGlwU3luY0lkcyA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtSWRIYW5kbGU+KCk7XG5cbiAgICB0aGlzLl9tb3Rpb25zID0gbmV3IGNzbU1hcDxzdHJpbmcsIEFDdWJpc21Nb3Rpb24+KCk7XG4gICAgdGhpcy5fZXhwcmVzc2lvbnMgPSBuZXcgY3NtTWFwPHN0cmluZywgQUN1YmlzbU1vdGlvbj4oKTtcblxuICAgIHRoaXMuX2hpdEFyZWEgPSBuZXcgY3NtVmVjdG9yPGNzbVJlY3Q+KCk7XG4gICAgdGhpcy5fdXNlckFyZWEgPSBuZXcgY3NtVmVjdG9yPGNzbVJlY3Q+KCk7XG5cbiAgICB0aGlzLl9pZFBhcmFtQW5nbGVYID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQW5nbGVYXG4gICAgKTtcbiAgICB0aGlzLl9pZFBhcmFtQW5nbGVZID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQW5nbGVZXG4gICAgKTtcbiAgICB0aGlzLl9pZFBhcmFtQW5nbGVaID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQW5nbGVaXG4gICAgKTtcbiAgICB0aGlzLl9pZFBhcmFtRXllQmFsbFggPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1FeWVCYWxsWFxuICAgICk7XG4gICAgdGhpcy5faWRQYXJhbUV5ZUJhbGxZID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtRXllQmFsbFlcbiAgICApO1xuICAgIHRoaXMuX2lkUGFyYW1Cb2R5QW5nbGVYID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQm9keUFuZ2xlWFxuICAgICk7XG5cbiAgICBpZiAoTEFwcERlZmluZS5NT0NDb25zaXN0ZW5jeVZhbGlkYXRpb25FbmFibGUpIHtcbiAgICAgIHRoaXMuX21vY0NvbnNpc3RlbmN5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRBc3NldHM7XG4gICAgdGhpcy5fZXhwcmVzc2lvbkNvdW50ID0gMDtcbiAgICB0aGlzLl90ZXh0dXJlQ291bnQgPSAwO1xuICAgIHRoaXMuX21vdGlvbkNvdW50ID0gMDtcbiAgICB0aGlzLl9hbGxNb3Rpb25Db3VudCA9IDA7XG4gICAgdGhpcy5fd2F2RmlsZUhhbmRsZXIgPSBuZXcgTEFwcFdhdkZpbGVIYW5kbGVyKCk7XG4gICAgdGhpcy5fY29uc2lzdGVuY3kgPSBmYWxzZTtcbiAgfVxuXG4gIF9tb2RlbFNldHRpbmc6IElDdWJpc21Nb2RlbFNldHRpbmc7IC8vIOODouODh+ODq+OCu+ODg+ODhuOCo+ODs+OCsOaDheWgsVxuICBfbW9kZWxIb21lRGlyOiBzdHJpbmc7IC8vIOODouODh+ODq+OCu+ODg+ODhuOCo+ODs+OCsOOBjOe9ruOBi+OCjOOBn+ODh+OCo+ODrOOCr+ODiOODqlxuICBfdXNlclRpbWVTZWNvbmRzOiBudW1iZXI7IC8vIOODh+ODq+OCv+aZgumWk+OBruepjeeul+WApFvnp5JdXG5cbiAgX2V5ZUJsaW5rSWRzOiBjc21WZWN0b3I8Q3ViaXNtSWRIYW5kbGU+OyAvLyDjg6Ljg4fjg6vjgavoqK3lrprjgZXjgozjgZ/nnqzjgY3mqZ/og73nlKjjg5Hjg6njg6Hjg7zjgr9JRFxuICBfbGlwU3luY0lkczogY3NtVmVjdG9yPEN1YmlzbUlkSGFuZGxlPjsgLy8g44Oi44OH44Or44Gr6Kit5a6a44GV44KM44Gf44Oq44OD44OX44K344Oz44Kv5qmf6IO955So44OR44Op44Oh44O844K/SURcblxuICBfbW90aW9uczogY3NtTWFwPHN0cmluZywgQUN1YmlzbU1vdGlvbj47IC8vIOiqreOBv+i+vOOBvuOCjOOBpuOBhOOCi+ODouODvOOCt+ODp+ODs+OBruODquOCueODiFxuICBfZXhwcmVzc2lvbnM6IGNzbU1hcDxzdHJpbmcsIEFDdWJpc21Nb3Rpb24+OyAvLyDoqq3jgb/ovrzjgb7jgozjgabjgYTjgovooajmg4Xjga7jg6rjgrnjg4hcblxuICBfaGl0QXJlYTogY3NtVmVjdG9yPGNzbVJlY3Q+O1xuICBfdXNlckFyZWE6IGNzbVZlY3Rvcjxjc21SZWN0PjtcblxuICBfaWRQYXJhbUFuZ2xlWDogQ3ViaXNtSWRIYW5kbGU7IC8vIOODkeODqeODoeODvOOCv0lEOiBQYXJhbUFuZ2xlWFxuICBfaWRQYXJhbUFuZ2xlWTogQ3ViaXNtSWRIYW5kbGU7IC8vIOODkeODqeODoeODvOOCv0lEOiBQYXJhbUFuZ2xlWVxuICBfaWRQYXJhbUFuZ2xlWjogQ3ViaXNtSWRIYW5kbGU7IC8vIOODkeODqeODoeODvOOCv0lEOiBQYXJhbUFuZ2xlWlxuICBfaWRQYXJhbUV5ZUJhbGxYOiBDdWJpc21JZEhhbmRsZTsgLy8g44OR44Op44Oh44O844K/SUQ6IFBhcmFtRXllQmFsbFhcbiAgX2lkUGFyYW1FeWVCYWxsWTogQ3ViaXNtSWRIYW5kbGU7IC8vIOODkeODqeODoeODvOOCv0lEOiBQYXJhbUV5ZUJBbGxZXG4gIF9pZFBhcmFtQm9keUFuZ2xlWDogQ3ViaXNtSWRIYW5kbGU7IC8vIOODkeODqeODoeODvOOCv0lEOiBQYXJhbUJvZHlBbmdsZVhcblxuICBfc3RhdGU6IExvYWRTdGVwOyAvLyDnj77lnKjjga7jgrnjg4bjg7zjgr/jgrnnrqHnkIbnlKhcbiAgX2V4cHJlc3Npb25Db3VudDogbnVtYmVyOyAvLyDooajmg4Xjg4fjg7zjgr/jgqvjgqbjg7Pjg4hcbiAgX3RleHR1cmVDb3VudDogbnVtYmVyOyAvLyDjg4bjgq/jgrnjg4Hjg6Pjgqvjgqbjg7Pjg4hcbiAgX21vdGlvbkNvdW50OiBudW1iZXI7IC8vIOODouODvOOCt+ODp+ODs+ODh+ODvOOCv+OCq+OCpuODs+ODiFxuICBfYWxsTW90aW9uQ291bnQ6IG51bWJlcjsgLy8g44Oi44O844K344On44Oz57eP5pWwXG4gIF93YXZGaWxlSGFuZGxlcjogTEFwcFdhdkZpbGVIYW5kbGVyOyAvL3dhduODleOCoeOCpOODq+ODj+ODs+ODieODqVxuICBfY29uc2lzdGVuY3k6IGJvb2xlYW47IC8vIE1PQzPkuIDosqvmgKfjg4Hjgqfjg4Pjgq/nrqHnkIbnlKhcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbi8qKlxuICog44OX44Op44OD44OI44OV44Kp44O844Og5L6d5a2Y5qmf6IO944KS5oq96LGh5YyW44GZ44KLIEN1YmlzbSBQbGF0Zm9ybSBBYnN0cmFjdGlvbiBMYXllci5cbiAqXG4gKiDjg5XjgqHjgqTjg6voqq3jgb/ovrzjgb/jgoTmmYLliLvlj5blvpfnrYnjga7jg5fjg6njg4Pjg4jjg5Xjgqnjg7zjg6Djgavkvp3lrZjjgZnjgovplqLmlbDjgpLjgb7jgajjgoHjgovjgIJcbiAqL1xuZXhwb3J0IGNsYXNzIExBcHBQYWwge1xuICAvKipcbiAgICog44OV44Kh44Kk44Or44KS44OQ44Kk44OI44OH44O844K/44Go44GX44Gm6Kqt44G/44GT44KAXG4gICAqXG4gICAqIEBwYXJhbSBmaWxlUGF0aCDoqq3jgb/ovrzjgb/lr77osaHjg5XjgqHjgqTjg6vjga7jg5HjgrlcbiAgICogQHJldHVyblxuICAgKiB7XG4gICAqICAgICAgYnVmZmVyLCAgIOiqreOBv+i+vOOCk+OBoOODkOOCpOODiOODh+ODvOOCv1xuICAgKiAgICAgIHNpemUgICAgICAgIOODleOCoeOCpOODq+OCteOCpOOCulxuICAgKiB9XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGxvYWRGaWxlQXNCeXRlcyhcbiAgICBmaWxlUGF0aDogc3RyaW5nLFxuICAgIGNhbGxiYWNrOiAoYXJyYXlCdWZmZXI6IEFycmF5QnVmZmVyLCBzaXplOiBudW1iZXIpID0+IHZvaWRcbiAgKTogdm9pZCB7XG4gICAgZmV0Y2goZmlsZVBhdGgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4gY2FsbGJhY2soYXJyYXlCdWZmZXIsIGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg4fjg6vjgr/mmYLplpPvvIjliY3lm57jg5Xjg6zjg7zjg6Djgajjga7lt67liIbvvInjgpLlj5blvpfjgZnjgotcbiAgICogQHJldHVybiDjg4fjg6vjgr/mmYLplpNbbXNdXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldERlbHRhVGltZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNfZGVsdGFUaW1lO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB1cGRhdGVUaW1lKCk6IHZvaWQge1xuICAgIHRoaXMuc19jdXJyZW50RnJhbWUgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuc19kZWx0YVRpbWUgPSAodGhpcy5zX2N1cnJlbnRGcmFtZSAtIHRoaXMuc19sYXN0RnJhbWUpIC8gMTAwMDtcbiAgICB0aGlzLnNfbGFzdEZyYW1lID0gdGhpcy5zX2N1cnJlbnRGcmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6Hjg4Pjgrvjg7zjgrjjgpLlh7rlipvjgZnjgotcbiAgICogQHBhcmFtIG1lc3NhZ2Ug5paH5a2X5YiXXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHByaW50TWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfVxuXG4gIHN0YXRpYyBsYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcblxuICBzdGF0aWMgc19jdXJyZW50RnJhbWUgPSAwLjA7XG4gIHN0YXRpYyBzX2xhc3RGcmFtZSA9IDAuMDtcbiAgc3RhdGljIHNfZGVsdGFUaW1lID0gMC4wO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgY2FudmFzLCBnbCB9IGZyb20gJy4vbGFwcGdsbWFuYWdlcic7XG5cbi8qKlxuICog44K544OX44Op44Kk44OI44KS5a6f6KOF44GZ44KL44Kv44Op44K5XG4gKlxuICog44OG44Kv44K544OB44Oj77yp77yk44CBUmVjdOOBrueuoeeQhlxuICovXG5leHBvcnQgY2xhc3MgTEFwcFNwcml0ZSB7XG4gIC8qKlxuICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICogQHBhcmFtIHggICAgICAgICAgICB45bqn5qiZXG4gICAqIEBwYXJhbSB5ICAgICAgICAgICAgeeW6p+aomVxuICAgKiBAcGFyYW0gd2lkdGggICAgICAgIOaoquW5hVxuICAgKiBAcGFyYW0gaGVpZ2h0ICAgICAgIOmrmOOBlVxuICAgKiBAcGFyYW0gdGV4dHVyZUlkICAgIOODhuOCr+OCueODgeODo1xuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIGhlaWdodDogbnVtYmVyLFxuICAgIHRleHR1cmVJZDogV2ViR0xUZXh0dXJlXG4gICkge1xuICAgIHRoaXMuX3JlY3QgPSBuZXcgUmVjdCgpO1xuICAgIHRoaXMuX3JlY3QubGVmdCA9IHggLSB3aWR0aCAqIDAuNTtcbiAgICB0aGlzLl9yZWN0LnJpZ2h0ID0geCArIHdpZHRoICogMC41O1xuICAgIHRoaXMuX3JlY3QudXAgPSB5ICsgaGVpZ2h0ICogMC41O1xuICAgIHRoaXMuX3JlY3QuZG93biA9IHkgLSBoZWlnaHQgKiAwLjU7XG4gICAgdGhpcy5fdGV4dHVyZSA9IHRleHR1cmVJZDtcbiAgICB0aGlzLl92ZXJ0ZXhCdWZmZXIgPSBudWxsO1xuICAgIHRoaXMuX3V2QnVmZmVyID0gbnVsbDtcbiAgICB0aGlzLl9pbmRleEJ1ZmZlciA9IG51bGw7XG5cbiAgICB0aGlzLl9wb3NpdGlvbkxvY2F0aW9uID0gbnVsbDtcbiAgICB0aGlzLl91dkxvY2F0aW9uID0gbnVsbDtcbiAgICB0aGlzLl90ZXh0dXJlTG9jYXRpb24gPSBudWxsO1xuXG4gICAgdGhpcy5fcG9zaXRpb25BcnJheSA9IG51bGw7XG4gICAgdGhpcy5fdXZBcnJheSA9IG51bGw7XG4gICAgdGhpcy5faW5kZXhBcnJheSA9IG51bGw7XG5cbiAgICB0aGlzLl9maXJzdERyYXcgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOino+aUvuOBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIHJlbGVhc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVjdCA9IG51bGw7XG5cbiAgICBnbC5kZWxldGVUZXh0dXJlKHRoaXMuX3RleHR1cmUpO1xuICAgIHRoaXMuX3RleHR1cmUgPSBudWxsO1xuXG4gICAgZ2wuZGVsZXRlQnVmZmVyKHRoaXMuX3V2QnVmZmVyKTtcbiAgICB0aGlzLl91dkJ1ZmZlciA9IG51bGw7XG5cbiAgICBnbC5kZWxldGVCdWZmZXIodGhpcy5fdmVydGV4QnVmZmVyKTtcbiAgICB0aGlzLl92ZXJ0ZXhCdWZmZXIgPSBudWxsO1xuXG4gICAgZ2wuZGVsZXRlQnVmZmVyKHRoaXMuX2luZGV4QnVmZmVyKTtcbiAgICB0aGlzLl9pbmRleEJ1ZmZlciA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICog44OG44Kv44K544OB44Oj44KS6L+U44GZXG4gICAqL1xuICBwdWJsaWMgZ2V0VGV4dHVyZSgpOiBXZWJHTFRleHR1cmUge1xuICAgIHJldHVybiB0aGlzLl90ZXh0dXJlO1xuICB9XG5cbiAgLyoqXG4gICAqIOaPj+eUu+OBmeOCi+OAglxuICAgKiBAcGFyYW0gcHJvZ3JhbUlkIOOCt+OCp+ODvOODgOODvOODl+ODreOCsOODqeODoFxuICAgKiBAcGFyYW0gY2FudmFzIOaPj+eUu+OBmeOCi+OCreODo+ODs+ODkeOCueaDheWgsVxuICAgKi9cbiAgcHVibGljIHJlbmRlcihwcm9ncmFtSWQ6IFdlYkdMUHJvZ3JhbSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl90ZXh0dXJlID09IG51bGwpIHtcbiAgICAgIC8vIOODreODvOODieOBjOWujOS6huOBl+OBpuOBhOOBquOBhFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIOWIneWbnuaPj+eUu+aZglxuICAgIGlmICh0aGlzLl9maXJzdERyYXcpIHtcbiAgICAgIC8vIOS9leeVquebruOBrmF0dHJpYnV0ZeWkieaVsOOBi+WPluW+l1xuICAgICAgdGhpcy5fcG9zaXRpb25Mb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW1JZCwgJ3Bvc2l0aW9uJyk7XG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLl9wb3NpdGlvbkxvY2F0aW9uKTtcblxuICAgICAgdGhpcy5fdXZMb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW1JZCwgJ3V2Jyk7XG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLl91dkxvY2F0aW9uKTtcblxuICAgICAgLy8g5L2V55Wq55uu44GudW5pZm9ybeWkieaVsOOBi+WPluW+l1xuICAgICAgdGhpcy5fdGV4dHVyZUxvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW1JZCwgJ3RleHR1cmUnKTtcblxuICAgICAgLy8gdW5pZm9ybeWxnuaAp+OBrueZu+mMslxuICAgICAgZ2wudW5pZm9ybTFpKHRoaXMuX3RleHR1cmVMb2NhdGlvbiwgMCk7XG5cbiAgICAgIC8vIHV244OQ44OD44OV44Kh44CB5bqn5qiZ5Yid5pyf5YyWXG4gICAgICB7XG4gICAgICAgIHRoaXMuX3V2QXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgICAxLjAsIDAuMCwgMC4wLCAwLjAsIDAuMCwgMS4wLCAxLjAsIDEuMFxuICAgICAgICBdKTtcblxuICAgICAgICAvLyB1duODkOODg+ODleOCoeOCkuS9nOaIkFxuICAgICAgICB0aGlzLl91dkJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgfVxuXG4gICAgICAvLyDpoILngrnjg5Djg4Pjg5XjgqHjgIHluqfmqJnliJ3mnJ/ljJZcbiAgICAgIHtcbiAgICAgICAgY29uc3QgbWF4V2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgIGNvbnN0IG1heEhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgICAgICAgLy8g6aCC54K544OH44O844K/XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgICAodGhpcy5fcmVjdC5yaWdodCAtIG1heFdpZHRoICogMC41KSAvIChtYXhXaWR0aCAqIDAuNSksXG4gICAgICAgICAgKHRoaXMuX3JlY3QudXAgLSBtYXhIZWlnaHQgKiAwLjUpIC8gKG1heEhlaWdodCAqIDAuNSksXG4gICAgICAgICAgKHRoaXMuX3JlY3QubGVmdCAtIG1heFdpZHRoICogMC41KSAvIChtYXhXaWR0aCAqIDAuNSksXG4gICAgICAgICAgKHRoaXMuX3JlY3QudXAgLSBtYXhIZWlnaHQgKiAwLjUpIC8gKG1heEhlaWdodCAqIDAuNSksXG4gICAgICAgICAgKHRoaXMuX3JlY3QubGVmdCAtIG1heFdpZHRoICogMC41KSAvIChtYXhXaWR0aCAqIDAuNSksXG4gICAgICAgICAgKHRoaXMuX3JlY3QuZG93biAtIG1heEhlaWdodCAqIDAuNSkgLyAobWF4SGVpZ2h0ICogMC41KSxcbiAgICAgICAgICAodGhpcy5fcmVjdC5yaWdodCAtIG1heFdpZHRoICogMC41KSAvIChtYXhXaWR0aCAqIDAuNSksXG4gICAgICAgICAgKHRoaXMuX3JlY3QuZG93biAtIG1heEhlaWdodCAqIDAuNSkgLyAobWF4SGVpZ2h0ICogMC41KVxuICAgICAgICBdKTtcblxuICAgICAgICAvLyDpoILngrnjg5Djg4Pjg5XjgqHjgpLkvZzmiJBcbiAgICAgICAgdGhpcy5fdmVydGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIOmggueCueOCpOODs+ODh+ODg+OCr+OCueODkOODg+ODleOCoeOAgeWIneacn+WMllxuICAgICAge1xuICAgICAgICAvLyDjgqTjg7Pjg4fjg4Pjgq/jgrnjg4fjg7zjgr9cbiAgICAgICAgdGhpcy5faW5kZXhBcnJheSA9IG5ldyBVaW50MTZBcnJheShbMCwgMSwgMiwgMywgMiwgMF0pO1xuXG4gICAgICAgIC8vIOOCpOODs+ODh+ODg+OCr+OCueODkOODg+ODleOCoeOCkuS9nOaIkFxuICAgICAgICB0aGlzLl9pbmRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9maXJzdERyYXcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBVVuW6p+aomeeZu+mMslxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLl91dkJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHRoaXMuX3V2QXJyYXksIGdsLlNUQVRJQ19EUkFXKTtcblxuICAgIC8vIGF0dHJpYnV0ZeWxnuaAp+OCkueZu+mMslxuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5fdXZMb2NhdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgIC8vIOmggueCueW6p+aomeOCkueZu+mMslxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLl92ZXJ0ZXhCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLl9wb3NpdGlvbkFycmF5LCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICAvLyBhdHRyaWJ1dGXlsZ7mgKfjgpLnmbvpjLJcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuX3Bvc2l0aW9uTG9jYXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG5cbiAgICAvLyDpoILngrnjgqTjg7Pjg4fjg4Pjgq/jgrnjgpLkvZzmiJBcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLl9pbmRleEJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5faW5kZXhBcnJheSwgZ2wuRFlOQU1JQ19EUkFXKTtcblxuICAgIC8vIOODouODh+ODq+OBruaPj+eUu1xuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMuX3RleHR1cmUpO1xuICAgIGdsLmRyYXdFbGVtZW50cyhcbiAgICAgIGdsLlRSSUFOR0xFUyxcbiAgICAgIHRoaXMuX2luZGV4QXJyYXkubGVuZ3RoLFxuICAgICAgZ2wuVU5TSUdORURfU0hPUlQsXG4gICAgICAwXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlvZPjgZ/jgorliKTlrppcbiAgICogQHBhcmFtIHBvaW50WCB45bqn5qiZXG4gICAqIEBwYXJhbSBwb2ludFkgeeW6p+aomVxuICAgKi9cbiAgcHVibGljIGlzSGl0KHBvaW50WDogbnVtYmVyLCBwb2ludFk6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIC8vIOeUu+mdouOCteOCpOOCuuOCkuWPluW+l+OBmeOCi+OAglxuICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBjYW52YXM7XG5cbiAgICAvLyBZ5bqn5qiZ44Gv5aSJ5o+b44GZ44KL5b+F6KaB44GC44KKXG4gICAgY29uc3QgeSA9IGhlaWdodCAtIHBvaW50WTtcblxuICAgIHJldHVybiAoXG4gICAgICBwb2ludFggPj0gdGhpcy5fcmVjdC5sZWZ0ICYmXG4gICAgICBwb2ludFggPD0gdGhpcy5fcmVjdC5yaWdodCAmJlxuICAgICAgeSA8PSB0aGlzLl9yZWN0LnVwICYmXG4gICAgICB5ID49IHRoaXMuX3JlY3QuZG93blxuICAgICk7XG4gIH1cblxuICBfdGV4dHVyZTogV2ViR0xUZXh0dXJlOyAvLyDjg4bjgq/jgrnjg4Hjg6NcbiAgX3ZlcnRleEJ1ZmZlcjogV2ViR0xCdWZmZXI7IC8vIOmggueCueODkOODg+ODleOCoVxuICBfdXZCdWZmZXI6IFdlYkdMQnVmZmVyOyAvLyB1dumggueCueODkOODg+ODleOCoVxuICBfaW5kZXhCdWZmZXI6IFdlYkdMQnVmZmVyOyAvLyDpoILngrnjgqTjg7Pjg4fjg4Pjgq/jgrnjg5Djg4Pjg5XjgqFcbiAgX3JlY3Q6IFJlY3Q7IC8vIOefqeW9olxuXG4gIF9wb3NpdGlvbkxvY2F0aW9uOiBudW1iZXI7XG4gIF91dkxvY2F0aW9uOiBudW1iZXI7XG4gIF90ZXh0dXJlTG9jYXRpb246IFdlYkdMVW5pZm9ybUxvY2F0aW9uO1xuXG4gIF9wb3NpdGlvbkFycmF5OiBGbG9hdDMyQXJyYXk7XG4gIF91dkFycmF5OiBGbG9hdDMyQXJyYXk7XG4gIF9pbmRleEFycmF5OiBVaW50MTZBcnJheTtcblxuICBfZmlyc3REcmF3OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgUmVjdCB7XG4gIHB1YmxpYyBsZWZ0OiBudW1iZXI7IC8vIOW3pui+ulxuICBwdWJsaWMgcmlnaHQ6IG51bWJlcjsgLy8g5Y+z6L66XG4gIHB1YmxpYyB1cDogbnVtYmVyOyAvLyDkuIrovrpcbiAgcHVibGljIGRvd246IG51bWJlcjsgLy8g5LiL6L66XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBjc21WZWN0b3IsIGl0ZXJhdG9yIH0gZnJvbSAnQGZyYW1ld29yay90eXBlL2NzbXZlY3Rvcic7XG5cbmltcG9ydCB7IGdsIH0gZnJvbSAnLi9sYXBwZ2xtYW5hZ2VyJztcblxuLyoqXG4gKiDjg4bjgq/jgrnjg4Hjg6PnrqHnkIbjgq/jg6njgrlcbiAqIOeUu+WDj+iqreOBv+i+vOOBv+OAgeeuoeeQhuOCkuihjOOBhuOCr+ODqeOCueOAglxuICovXG5leHBvcnQgY2xhc3MgTEFwcFRleHR1cmVNYW5hZ2VyIHtcbiAgLyoqXG4gICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fdGV4dHVyZXMgPSBuZXcgY3NtVmVjdG9yPFRleHR1cmVJbmZvPigpO1xuICB9XG5cbiAgLyoqXG4gICAqIOino+aUvuOBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIHJlbGVhc2UoKTogdm9pZCB7XG4gICAgZm9yIChcbiAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPFRleHR1cmVJbmZvPiA9IHRoaXMuX3RleHR1cmVzLmJlZ2luKCk7XG4gICAgICBpdGUubm90RXF1YWwodGhpcy5fdGV4dHVyZXMuZW5kKCkpO1xuICAgICAgaXRlLnByZUluY3JlbWVudCgpXG4gICAgKSB7XG4gICAgICBnbC5kZWxldGVUZXh0dXJlKGl0ZS5wdHIoKS5pZCk7XG4gICAgfVxuICAgIHRoaXMuX3RleHR1cmVzID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiDnlLvlg4/oqq3jgb/ovrzjgb9cbiAgICpcbiAgICogQHBhcmFtIGZpbGVOYW1lIOiqreOBv+i+vOOCgOeUu+WDj+ODleOCoeOCpOODq+ODkeOCueWQjVxuICAgKiBAcGFyYW0gdXNlUHJlbXVsdGlwbHkgUHJlbXVsdOWHpueQhuOCkuacieWKueOBq+OBmeOCi+OBi1xuICAgKiBAcmV0dXJuIOeUu+WDj+aDheWgseOAgeiqreOBv+i+vOOBv+WkseaVl+aZguOBr251bGzjgpLov5TjgZlcbiAgICovXG4gIHB1YmxpYyBjcmVhdGVUZXh0dXJlRnJvbVBuZ0ZpbGUoXG4gICAgZmlsZU5hbWU6IHN0cmluZyxcbiAgICB1c2VQcmVtdWx0aXBseTogYm9vbGVhbixcbiAgICBjYWxsYmFjazogKHRleHR1cmVJbmZvOiBUZXh0dXJlSW5mbykgPT4gdm9pZFxuICApOiB2b2lkIHtcbiAgICAvLyBzZWFyY2ggbG9hZGVkIHRleHR1cmUgYWxyZWFkeVxuICAgIGZvciAoXG4gICAgICBsZXQgaXRlOiBpdGVyYXRvcjxUZXh0dXJlSW5mbz4gPSB0aGlzLl90ZXh0dXJlcy5iZWdpbigpO1xuICAgICAgaXRlLm5vdEVxdWFsKHRoaXMuX3RleHR1cmVzLmVuZCgpKTtcbiAgICAgIGl0ZS5wcmVJbmNyZW1lbnQoKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICBpdGUucHRyKCkuZmlsZU5hbWUgPT0gZmlsZU5hbWUgJiZcbiAgICAgICAgaXRlLnB0cigpLnVzZVByZW11bHRwbHkgPT0gdXNlUHJlbXVsdGlwbHlcbiAgICAgICkge1xuICAgICAgICAvLyAy5Zue55uu5Lul6ZmN44Gv44Kt44Oj44OD44K344Ol44GM5L2/55So44GV44KM44KLKOW+heOBoeaZgumWk+OBquOBlylcbiAgICAgICAgLy8gV2ViS2l044Gn44Gv5ZCM44GYSW1hZ2Xjga5vbmxvYWTjgpLlho3luqblkbzjgbbjgavjga/lho3jgqTjg7Pjgrnjgr/jg7PjgrnjgYzlv4XopoFcbiAgICAgICAgLy8g6Kmz57Sw77yaaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUwMjQxODFcbiAgICAgICAgaXRlLnB0cigpLmltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpdGVcbiAgICAgICAgICAucHRyKClcbiAgICAgICAgICAuaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKTogdm9pZCA9PiBjYWxsYmFjayhpdGUucHRyKCkpLCB7XG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIGl0ZS5wdHIoKS5pbWcuc3JjID0gZmlsZU5hbWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDjg4fjg7zjgr/jga7jgqrjg7Pjg63jg7zjg4njgpLjg4jjg6rjgqzjg7zjgavjgZnjgotcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdsb2FkJyxcbiAgICAgICgpOiB2b2lkID0+IHtcbiAgICAgICAgLy8g44OG44Kv44K544OB44Oj44Kq44OW44K444Kn44Kv44OI44Gu5L2c5oiQXG4gICAgICAgIGNvbnN0IHRleDogV2ViR0xUZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuXG4gICAgICAgIC8vIOODhuOCr+OCueODgeODo+OCkumBuOaKnlxuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXgpO1xuXG4gICAgICAgIC8vIOODhuOCr+OCueODgeODo+OBq+ODlOOCr+OCu+ODq+OCkuabuOOBjei+vOOCgFxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKFxuICAgICAgICAgIGdsLlRFWFRVUkVfMkQsXG4gICAgICAgICAgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLFxuICAgICAgICAgIGdsLkxJTkVBUl9NSVBNQVBfTElORUFSXG4gICAgICAgICk7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xuXG4gICAgICAgIC8vIFByZW11bHTlh6bnkIbjgpLooYzjgo/jgZvjgotcbiAgICAgICAgaWYgKHVzZVByZW11bHRpcGx5KSB7XG4gICAgICAgICAgZ2wucGl4ZWxTdG9yZWkoZ2wuVU5QQUNLX1BSRU1VTFRJUExZX0FMUEhBX1dFQkdMLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOODhuOCr+OCueODgeODo+OBq+ODlOOCr+OCu+ODq+OCkuabuOOBjei+vOOCgFxuICAgICAgICBnbC50ZXhJbWFnZTJEKFxuICAgICAgICAgIGdsLlRFWFRVUkVfMkQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBnbC5SR0JBLFxuICAgICAgICAgIGdsLlJHQkEsXG4gICAgICAgICAgZ2wuVU5TSUdORURfQllURSxcbiAgICAgICAgICBpbWdcbiAgICAgICAgKTtcblxuICAgICAgICAvLyDjg5/jg4Pjg5fjg57jg4Pjg5fjgpLnlJ/miJBcbiAgICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV8yRCk7XG5cbiAgICAgICAgLy8g44OG44Kv44K544OB44Oj44KS44OQ44Kk44Oz44OJXG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xuXG4gICAgICAgIGNvbnN0IHRleHR1cmVJbmZvOiBUZXh0dXJlSW5mbyA9IG5ldyBUZXh0dXJlSW5mbygpO1xuICAgICAgICBpZiAodGV4dHVyZUluZm8gIT0gbnVsbCkge1xuICAgICAgICAgIHRleHR1cmVJbmZvLmZpbGVOYW1lID0gZmlsZU5hbWU7XG4gICAgICAgICAgdGV4dHVyZUluZm8ud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgdGV4dHVyZUluZm8uaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgICAgICB0ZXh0dXJlSW5mby5pZCA9IHRleDtcbiAgICAgICAgICB0ZXh0dXJlSW5mby5pbWcgPSBpbWc7XG4gICAgICAgICAgdGV4dHVyZUluZm8udXNlUHJlbXVsdHBseSA9IHVzZVByZW11bHRpcGx5O1xuICAgICAgICAgIHRoaXMuX3RleHR1cmVzLnB1c2hCYWNrKHRleHR1cmVJbmZvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKHRleHR1cmVJbmZvKTtcbiAgICAgIH0sXG4gICAgICB7IHBhc3NpdmU6IHRydWUgfVxuICAgICk7XG4gICAgaW1nLnNyYyA9IGZpbGVOYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIOeUu+WDj+OBruino+aUvlxuICAgKlxuICAgKiDphY3liJfjgavlrZjlnKjjgZnjgovnlLvlg4/lhajjgabjgpLop6PmlL7jgZnjgovjgIJcbiAgICovXG4gIHB1YmxpYyByZWxlYXNlVGV4dHVyZXMoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90ZXh0dXJlcy5nZXRTaXplKCk7IGkrKykge1xuICAgICAgdGhpcy5fdGV4dHVyZXMuc2V0KGksIG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMuX3RleHR1cmVzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICog55S75YOP44Gu6Kej5pS+XG4gICAqXG4gICAqIOaMh+WumuOBl+OBn+ODhuOCr+OCueODgeODo+OBrueUu+WDj+OCkuino+aUvuOBmeOCi+OAglxuICAgKiBAcGFyYW0gdGV4dHVyZSDop6PmlL7jgZnjgovjg4bjgq/jgrnjg4Hjg6NcbiAgICovXG4gIHB1YmxpYyByZWxlYXNlVGV4dHVyZUJ5VGV4dHVyZSh0ZXh0dXJlOiBXZWJHTFRleHR1cmUpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3RleHR1cmVzLmdldFNpemUoKTsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5fdGV4dHVyZXMuYXQoaSkuaWQgIT0gdGV4dHVyZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdGV4dHVyZXMuc2V0KGksIG51bGwpO1xuICAgICAgdGhpcy5fdGV4dHVyZXMucmVtb3ZlKGkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOeUu+WDj+OBruino+aUvlxuICAgKlxuICAgKiDmjIflrprjgZfjgZ/lkI3liY3jga7nlLvlg4/jgpLop6PmlL7jgZnjgovjgIJcbiAgICogQHBhcmFtIGZpbGVOYW1lIOino+aUvuOBmeOCi+eUu+WDj+ODleOCoeOCpOODq+ODkeOCueWQjVxuICAgKi9cbiAgcHVibGljIHJlbGVhc2VUZXh0dXJlQnlGaWxlUGF0aChmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90ZXh0dXJlcy5nZXRTaXplKCk7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX3RleHR1cmVzLmF0KGkpLmZpbGVOYW1lID09IGZpbGVOYW1lKSB7XG4gICAgICAgIHRoaXMuX3RleHR1cmVzLnNldChpLCBudWxsKTtcbiAgICAgICAgdGhpcy5fdGV4dHVyZXMucmVtb3ZlKGkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfdGV4dHVyZXM6IGNzbVZlY3RvcjxUZXh0dXJlSW5mbz47XG59XG5cbi8qKlxuICog55S75YOP5oOF5aCx5qeL6YCg5L2TXG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0dXJlSW5mbyB7XG4gIGltZzogSFRNTEltYWdlRWxlbWVudDsgLy8g55S75YOPXG4gIGlkOiBXZWJHTFRleHR1cmUgPSBudWxsOyAvLyDjg4bjgq/jgrnjg4Hjg6NcbiAgd2lkdGggPSAwOyAvLyDmqKrluYVcbiAgaGVpZ2h0ID0gMDsgLy8g6auY44GVXG4gIHVzZVByZW11bHRwbHk6IGJvb2xlYW47IC8vIFByZW11bHTlh6bnkIbjgpLmnInlirnjgavjgZnjgovjgYtcbiAgZmlsZU5hbWU6IHN0cmluZzsgLy8g44OV44Kh44Kk44Or5ZCNXG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBDdWJpc21NYXRyaXg0NCB9IGZyb20gJ0BmcmFtZXdvcmsvbWF0aC9jdWJpc21tYXRyaXg0NCc7XG5pbXBvcnQgeyBDdWJpc21WaWV3TWF0cml4IH0gZnJvbSAnQGZyYW1ld29yay9tYXRoL2N1YmlzbXZpZXdtYXRyaXgnO1xuXG5pbXBvcnQgKiBhcyBMQXBwRGVmaW5lIGZyb20gJy4vbGFwcGRlZmluZSc7XG5pbXBvcnQgeyBMQXBwRGVsZWdhdGUgfSBmcm9tICcuL2xhcHBkZWxlZ2F0ZSc7XG5pbXBvcnQgeyBjYW52YXMsIGdsIH0gZnJvbSAnLi9sYXBwZ2xtYW5hZ2VyJztcbmltcG9ydCB7IExBcHBMaXZlMkRNYW5hZ2VyIH0gZnJvbSAnLi9sYXBwbGl2ZTJkbWFuYWdlcic7XG5pbXBvcnQgeyBMQXBwUGFsIH0gZnJvbSAnLi9sYXBwcGFsJztcbmltcG9ydCB7IExBcHBTcHJpdGUgfSBmcm9tICcuL2xhcHBzcHJpdGUnO1xuaW1wb3J0IHsgVGV4dHVyZUluZm8gfSBmcm9tICcuL2xhcHB0ZXh0dXJlbWFuYWdlcic7XG5pbXBvcnQgeyBUb3VjaE1hbmFnZXIgfSBmcm9tICcuL3RvdWNobWFuYWdlcic7XG5cbi8qKlxuICog5o+P55S744Kv44Op44K544CCXG4gKi9cbmV4cG9ydCBjbGFzcyBMQXBwVmlldyB7XG4gIC8qKlxuICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3Byb2dyYW1JZCA9IG51bGw7XG4gICAgdGhpcy5fYmFjayA9IG51bGw7XG4gICAgdGhpcy5fZ2VhciA9IG51bGw7XG5cbiAgICAvLyDjgr/jg4Pjg4HplqLkv4Ljga7jgqTjg5njg7Pjg4jnrqHnkIZcbiAgICB0aGlzLl90b3VjaE1hbmFnZXIgPSBuZXcgVG91Y2hNYW5hZ2VyKCk7XG5cbiAgICAvLyDjg4fjg5DjgqTjgrnluqfmqJnjgYvjgonjgrnjgq/jg6rjg7zjg7PluqfmqJnjgavlpInmj5vjgZnjgovjgZ/jgoHjga5cbiAgICB0aGlzLl9kZXZpY2VUb1NjcmVlbiA9IG5ldyBDdWJpc21NYXRyaXg0NCgpO1xuXG4gICAgLy8g55S76Z2i44Gu6KGo56S644Gu5ouh5aSn57iu5bCP44KE56e75YuV44Gu5aSJ5o+b44KS6KGM44GG6KGM5YiXXG4gICAgdGhpcy5fdmlld01hdHJpeCA9IG5ldyBDdWJpc21WaWV3TWF0cml4KCk7XG4gIH1cblxuICAvKipcbiAgICog5Yid5pyf5YyW44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhcztcblxuICAgIGNvbnN0IHJhdGlvOiBudW1iZXIgPSB3aWR0aCAvIGhlaWdodDtcbiAgICBjb25zdCBsZWZ0OiBudW1iZXIgPSAtcmF0aW87XG4gICAgY29uc3QgcmlnaHQ6IG51bWJlciA9IHJhdGlvO1xuICAgIGNvbnN0IGJvdHRvbTogbnVtYmVyID0gTEFwcERlZmluZS5WaWV3TG9naWNhbExlZnQ7XG4gICAgY29uc3QgdG9wOiBudW1iZXIgPSBMQXBwRGVmaW5lLlZpZXdMb2dpY2FsUmlnaHQ7XG5cbiAgICB0aGlzLl92aWV3TWF0cml4LnNldFNjcmVlblJlY3QobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wKTsgLy8g44OH44OQ44Kk44K544Gr5a++5b+c44GZ44KL55S76Z2i44Gu56+E5Zuy44CCIFjjga7lt6bnq6/jgIFY44Gu5Y+z56uv44CBWeOBruS4i+err+OAgVnjga7kuIrnq69cbiAgICB0aGlzLl92aWV3TWF0cml4LnNjYWxlKExBcHBEZWZpbmUuVmlld1NjYWxlLCBMQXBwRGVmaW5lLlZpZXdTY2FsZSk7XG5cbiAgICB0aGlzLl9kZXZpY2VUb1NjcmVlbi5sb2FkSWRlbnRpdHkoKTtcbiAgICBpZiAod2lkdGggPiBoZWlnaHQpIHtcbiAgICAgIGNvbnN0IHNjcmVlblc6IG51bWJlciA9IE1hdGguYWJzKHJpZ2h0IC0gbGVmdCk7XG4gICAgICB0aGlzLl9kZXZpY2VUb1NjcmVlbi5zY2FsZVJlbGF0aXZlKHNjcmVlblcgLyB3aWR0aCwgLXNjcmVlblcgLyB3aWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNjcmVlbkg6IG51bWJlciA9IE1hdGguYWJzKHRvcCAtIGJvdHRvbSk7XG4gICAgICB0aGlzLl9kZXZpY2VUb1NjcmVlbi5zY2FsZVJlbGF0aXZlKHNjcmVlbkggLyBoZWlnaHQsIC1zY3JlZW5IIC8gaGVpZ2h0KTtcbiAgICB9XG4gICAgdGhpcy5fZGV2aWNlVG9TY3JlZW4udHJhbnNsYXRlUmVsYXRpdmUoLXdpZHRoICogMC41LCAtaGVpZ2h0ICogMC41KTtcblxuICAgIC8vIOihqOekuuevhOWbsuOBruioreWumlxuICAgIHRoaXMuX3ZpZXdNYXRyaXguc2V0TWF4U2NhbGUoTEFwcERlZmluZS5WaWV3TWF4U2NhbGUpOyAvLyDpmZDnlYzmi6HlvLXnjodcbiAgICB0aGlzLl92aWV3TWF0cml4LnNldE1pblNjYWxlKExBcHBEZWZpbmUuVmlld01pblNjYWxlKTsgLy8g6ZmQ55WM57iu5bCP546HXG5cbiAgICAvLyDooajnpLrjgafjgY3jgovmnIDlpKfnr4Tlm7JcbiAgICB0aGlzLl92aWV3TWF0cml4LnNldE1heFNjcmVlblJlY3QoXG4gICAgICBMQXBwRGVmaW5lLlZpZXdMb2dpY2FsTWF4TGVmdCxcbiAgICAgIExBcHBEZWZpbmUuVmlld0xvZ2ljYWxNYXhSaWdodCxcbiAgICAgIExBcHBEZWZpbmUuVmlld0xvZ2ljYWxNYXhCb3R0b20sXG4gICAgICBMQXBwRGVmaW5lLlZpZXdMb2dpY2FsTWF4VG9wXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDop6PmlL7jgZnjgotcbiAgICovXG4gIHB1YmxpYyByZWxlYXNlKCk6IHZvaWQge1xuICAgIHRoaXMuX3ZpZXdNYXRyaXggPSBudWxsO1xuICAgIHRoaXMuX3RvdWNoTWFuYWdlciA9IG51bGw7XG4gICAgdGhpcy5fZGV2aWNlVG9TY3JlZW4gPSBudWxsO1xuXG4gICAgdGhpcy5fZ2Vhci5yZWxlYXNlKCk7XG4gICAgdGhpcy5fZ2VhciA9IG51bGw7XG5cbiAgICB0aGlzLl9iYWNrLnJlbGVhc2UoKTtcbiAgICB0aGlzLl9iYWNrID0gbnVsbDtcblxuICAgIGdsLmRlbGV0ZVByb2dyYW0odGhpcy5fcHJvZ3JhbUlkKTtcbiAgICB0aGlzLl9wcm9ncmFtSWQgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIOaPj+eUu+OBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICBnbC51c2VQcm9ncmFtKHRoaXMuX3Byb2dyYW1JZCk7XG5cbiAgICBpZiAodGhpcy5fYmFjaykge1xuICAgICAgdGhpcy5fYmFjay5yZW5kZXIodGhpcy5fcHJvZ3JhbUlkKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2dlYXIpIHtcbiAgICAgIHRoaXMuX2dlYXIucmVuZGVyKHRoaXMuX3Byb2dyYW1JZCk7XG4gICAgfVxuXG4gICAgZ2wuZmx1c2goKTtcblxuICAgIGNvbnN0IGxpdmUyRE1hbmFnZXI6IExBcHBMaXZlMkRNYW5hZ2VyID0gTEFwcExpdmUyRE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcblxuICAgIGxpdmUyRE1hbmFnZXIuc2V0Vmlld01hdHJpeCh0aGlzLl92aWV3TWF0cml4KTtcblxuICAgIGxpdmUyRE1hbmFnZXIub25VcGRhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnlLvlg4/jga7liJ3mnJ/ljJbjgpLooYzjgYbjgIJcbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplU3ByaXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IHdpZHRoOiBudW1iZXIgPSBjYW52YXMud2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0OiBudW1iZXIgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgY29uc3QgdGV4dHVyZU1hbmFnZXIgPSBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5nZXRUZXh0dXJlTWFuYWdlcigpO1xuICAgIGNvbnN0IHJlc291cmNlc1BhdGggPSBMQXBwRGVmaW5lLlJlc291cmNlc1BhdGg7XG5cbiAgICBsZXQgaW1hZ2VOYW1lID0gJyc7XG5cbiAgICAvLyDog4zmma/nlLvlg4/liJ3mnJ/ljJZcbiAgICBpbWFnZU5hbWUgPSBMQXBwRGVmaW5lLkJhY2tJbWFnZU5hbWU7XG5cbiAgICAvLyDpnZ7lkIzmnJ/jgarjga7jgafjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbDjgpLkvZzmiJBcbiAgICBjb25zdCBpbml0QmFja0dyb3VuZFRleHR1cmUgPSAodGV4dHVyZUluZm86IFRleHR1cmVJbmZvKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCB4OiBudW1iZXIgPSB3aWR0aCAqIDAuNTtcbiAgICAgIGNvbnN0IHk6IG51bWJlciA9IGhlaWdodCAqIDAuNTtcblxuICAgICAgY29uc3QgZndpZHRoID0gdGV4dHVyZUluZm8ud2lkdGggKiAyLjA7XG4gICAgICBjb25zdCBmaGVpZ2h0ID0gaGVpZ2h0ICogMC45NTtcbiAgICAgIHRoaXMuX2JhY2sgPSBuZXcgTEFwcFNwcml0ZSh4LCB5LCBmd2lkdGgsIGZoZWlnaHQsIHRleHR1cmVJbmZvLmlkKTtcbiAgICB9O1xuXG4gICAgdGV4dHVyZU1hbmFnZXIuY3JlYXRlVGV4dHVyZUZyb21QbmdGaWxlKFxuICAgICAgcmVzb3VyY2VzUGF0aCArIGltYWdlTmFtZSxcbiAgICAgIGZhbHNlLFxuICAgICAgaW5pdEJhY2tHcm91bmRUZXh0dXJlXG4gICAgKTtcblxuICAgIC8vIOatr+i7iueUu+WDj+WIneacn+WMllxuICAgIGltYWdlTmFtZSA9IExBcHBEZWZpbmUuR2VhckltYWdlTmFtZTtcbiAgICBjb25zdCBpbml0R2VhclRleHR1cmUgPSAodGV4dHVyZUluZm86IFRleHR1cmVJbmZvKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCB4ID0gd2lkdGggLSB0ZXh0dXJlSW5mby53aWR0aCAqIDAuNTtcbiAgICAgIGNvbnN0IHkgPSBoZWlnaHQgLSB0ZXh0dXJlSW5mby5oZWlnaHQgKiAwLjU7XG4gICAgICBjb25zdCBmd2lkdGggPSB0ZXh0dXJlSW5mby53aWR0aDtcbiAgICAgIGNvbnN0IGZoZWlnaHQgPSB0ZXh0dXJlSW5mby5oZWlnaHQ7XG4gICAgICB0aGlzLl9nZWFyID0gbmV3IExBcHBTcHJpdGUoeCwgeSwgZndpZHRoLCBmaGVpZ2h0LCB0ZXh0dXJlSW5mby5pZCk7XG4gICAgfTtcblxuICAgIHRleHR1cmVNYW5hZ2VyLmNyZWF0ZVRleHR1cmVGcm9tUG5nRmlsZShcbiAgICAgIHJlc291cmNlc1BhdGggKyBpbWFnZU5hbWUsXG4gICAgICBmYWxzZSxcbiAgICAgIGluaXRHZWFyVGV4dHVyZVxuICAgICk7XG5cbiAgICAvLyDjgrfjgqfjg7zjg4Djg7zjgpLkvZzmiJBcbiAgICBpZiAodGhpcy5fcHJvZ3JhbUlkID09IG51bGwpIHtcbiAgICAgIHRoaXMuX3Byb2dyYW1JZCA9IExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLmNyZWF0ZVNoYWRlcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgr/jg4Pjg4HjgZXjgozjgZ/mmYLjgavlkbzjgbDjgozjgovjgIJcbiAgICpcbiAgICogQHBhcmFtIHBvaW50WCDjgrnjgq/jg6rjg7zjg7NY5bqn5qiZXG4gICAqIEBwYXJhbSBwb2ludFkg44K544Kv44Oq44O844OzWeW6p+aomVxuICAgKi9cbiAgcHVibGljIG9uVG91Y2hlc0JlZ2FuKHBvaW50WDogbnVtYmVyLCBwb2ludFk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3RvdWNoTWFuYWdlci50b3VjaGVzQmVnYW4oXG4gICAgICBwb2ludFggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyxcbiAgICAgIHBvaW50WSAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgr/jg4Pjg4HjgZfjgabjgYTjgovjgajjgY3jgavjg53jgqTjg7Pjgr/jgYzli5XjgYTjgZ/jgonlkbzjgbDjgozjgovjgIJcbiAgICpcbiAgICogQHBhcmFtIHBvaW50WCDjgrnjgq/jg6rjg7zjg7NY5bqn5qiZXG4gICAqIEBwYXJhbSBwb2ludFkg44K544Kv44Oq44O844OzWeW6p+aomVxuICAgKi9cbiAgcHVibGljIG9uVG91Y2hlc01vdmVkKHBvaW50WDogbnVtYmVyLCBwb2ludFk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHZpZXdYOiBudW1iZXIgPSB0aGlzLnRyYW5zZm9ybVZpZXdYKHRoaXMuX3RvdWNoTWFuYWdlci5nZXRYKCkpO1xuICAgIGNvbnN0IHZpZXdZOiBudW1iZXIgPSB0aGlzLnRyYW5zZm9ybVZpZXdZKHRoaXMuX3RvdWNoTWFuYWdlci5nZXRZKCkpO1xuXG4gICAgdGhpcy5fdG91Y2hNYW5hZ2VyLnRvdWNoZXNNb3ZlZChcbiAgICAgIHBvaW50WCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLFxuICAgICAgcG9pbnRZICogd2luZG93LmRldmljZVBpeGVsUmF0aW9cbiAgICApO1xuXG4gICAgY29uc3QgbGl2ZTJETWFuYWdlcjogTEFwcExpdmUyRE1hbmFnZXIgPSBMQXBwTGl2ZTJETWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgIGxpdmUyRE1hbmFnZXIub25EcmFnKHZpZXdYLCB2aWV3WSk7XG4gIH1cblxuICAvKipcbiAgICog44K/44OD44OB44GM57WC5LqG44GX44Gf44KJ5ZG844Gw44KM44KL44CCXG4gICAqXG4gICAqIEBwYXJhbSBwb2ludFgg44K544Kv44Oq44O844OzWOW6p+aomVxuICAgKiBAcGFyYW0gcG9pbnRZIOOCueOCr+ODquODvOODs1nluqfmqJlcbiAgICovXG4gIHB1YmxpYyBvblRvdWNoZXNFbmRlZChwb2ludFg6IG51bWJlciwgcG9pbnRZOiBudW1iZXIpOiB2b2lkIHtcbiAgICAvLyDjgr/jg4Pjg4HntYLkuoZcbiAgICBjb25zdCBsaXZlMkRNYW5hZ2VyOiBMQXBwTGl2ZTJETWFuYWdlciA9IExBcHBMaXZlMkRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgbGl2ZTJETWFuYWdlci5vbkRyYWcoMC4wLCAwLjApO1xuXG4gICAge1xuICAgICAgLy8g44K344Oz44Kw44Or44K/44OD44OXXG4gICAgICBjb25zdCB4OiBudW1iZXIgPSB0aGlzLl9kZXZpY2VUb1NjcmVlbi50cmFuc2Zvcm1YKFxuICAgICAgICB0aGlzLl90b3VjaE1hbmFnZXIuZ2V0WCgpXG4gICAgICApOyAvLyDoq5bnkIbluqfmqJnlpInmj5vjgZfjgZ/luqfmqJnjgpLlj5blvpfjgIJcbiAgICAgIGNvbnN0IHk6IG51bWJlciA9IHRoaXMuX2RldmljZVRvU2NyZWVuLnRyYW5zZm9ybVkoXG4gICAgICAgIHRoaXMuX3RvdWNoTWFuYWdlci5nZXRZKClcbiAgICAgICk7IC8vIOirlueQhuW6p+aomeWkieWMluOBl+OBn+W6p+aomeOCkuWPluW+l+OAglxuXG4gICAgICBpZiAoTEFwcERlZmluZS5EZWJ1Z1RvdWNoTG9nRW5hYmxlKSB7XG4gICAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKGBbQVBQXXRvdWNoZXNFbmRlZCB4OiAke3h9IHk6ICR7eX1gKTtcbiAgICAgIH1cbiAgICAgIGxpdmUyRE1hbmFnZXIub25UYXAoeCwgeSk7XG5cbiAgICAgIC8vIOatr+i7iuOBq+OCv+ODg+ODl+OBl+OBn+OBi1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9nZWFyLmlzSGl0KFxuICAgICAgICAgIHBvaW50WCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLFxuICAgICAgICAgIHBvaW50WSAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBsaXZlMkRNYW5hZ2VyLm5leHRTY2VuZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBY5bqn5qiZ44KSVmlld+W6p+aomeOBq+WkieaPm+OBmeOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gZGV2aWNlWCDjg4fjg5DjgqTjgrlY5bqn5qiZXG4gICAqL1xuICBwdWJsaWMgdHJhbnNmb3JtVmlld1goZGV2aWNlWDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzY3JlZW5YOiBudW1iZXIgPSB0aGlzLl9kZXZpY2VUb1NjcmVlbi50cmFuc2Zvcm1YKGRldmljZVgpOyAvLyDoq5bnkIbluqfmqJnlpInmj5vjgZfjgZ/luqfmqJnjgpLlj5blvpfjgIJcbiAgICByZXR1cm4gdGhpcy5fdmlld01hdHJpeC5pbnZlcnRUcmFuc2Zvcm1YKHNjcmVlblgpOyAvLyDmi6HlpKfjgIHnuK7lsI/jgIHnp7vli5Xlvozjga7lgKTjgIJcbiAgfVxuXG4gIC8qKlxuICAgKiBZ5bqn5qiZ44KSVmlld+W6p+aomeOBq+WkieaPm+OBmeOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gZGV2aWNlWSDjg4fjg5DjgqTjgrlZ5bqn5qiZXG4gICAqL1xuICBwdWJsaWMgdHJhbnNmb3JtVmlld1koZGV2aWNlWTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzY3JlZW5ZOiBudW1iZXIgPSB0aGlzLl9kZXZpY2VUb1NjcmVlbi50cmFuc2Zvcm1ZKGRldmljZVkpOyAvLyDoq5bnkIbluqfmqJnlpInmj5vjgZfjgZ/luqfmqJnjgpLlj5blvpfjgIJcbiAgICByZXR1cm4gdGhpcy5fdmlld01hdHJpeC5pbnZlcnRUcmFuc2Zvcm1ZKHNjcmVlblkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFjluqfmqJnjgpJTY3JlZW7luqfmqJnjgavlpInmj5vjgZnjgovjgIJcbiAgICogQHBhcmFtIGRldmljZVgg44OH44OQ44Kk44K5WOW6p+aomVxuICAgKi9cbiAgcHVibGljIHRyYW5zZm9ybVNjcmVlblgoZGV2aWNlWDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlVG9TY3JlZW4udHJhbnNmb3JtWChkZXZpY2VYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBZ5bqn5qiZ44KSU2NyZWVu5bqn5qiZ44Gr5aSJ5o+b44GZ44KL44CCXG4gICAqXG4gICAqIEBwYXJhbSBkZXZpY2VZIOODh+ODkOOCpOOCuVnluqfmqJlcbiAgICovXG4gIHB1YmxpYyB0cmFuc2Zvcm1TY3JlZW5ZKGRldmljZVk6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZVRvU2NyZWVuLnRyYW5zZm9ybVkoZGV2aWNlWSk7XG4gIH1cblxuICBfdG91Y2hNYW5hZ2VyOiBUb3VjaE1hbmFnZXI7IC8vIOOCv+ODg+ODgeODnuODjeODvOOCuOODo+ODvFxuICBfZGV2aWNlVG9TY3JlZW46IEN1YmlzbU1hdHJpeDQ0OyAvLyDjg4fjg5DjgqTjgrnjgYvjgonjgrnjgq/jg6rjg7zjg7Pjgbjjga7ooYzliJdcbiAgX3ZpZXdNYXRyaXg6IEN1YmlzbVZpZXdNYXRyaXg7IC8vIHZpZXdNYXRyaXhcbiAgX3Byb2dyYW1JZDogV2ViR0xQcm9ncmFtOyAvLyDjgrfjgqfjg7zjg4BJRFxuICBfYmFjazogTEFwcFNwcml0ZTsgLy8g6IOM5pmv55S75YOPXG4gIF9nZWFyOiBMQXBwU3ByaXRlOyAvLyDjgq7jgqLnlLvlg49cbiAgX2NoYW5nZU1vZGVsOiBib29sZWFuOyAvLyDjg6Ljg4fjg6vliIfjgormm7/jgYjjg5Xjg6njgrBcbiAgX2lzQ2xpY2s6IGJvb2xlYW47IC8vIOOCr+ODquODg+OCr+S4rVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuLyoqIEBkZXByZWNhdGVkIOOBk+OBruWkieaVsOOBryBnZXRJbnN0YW5jZSgpIOOBjOmdnuaOqOWlqOOBq+OBquOBo+OBn+OBk+OBqOOBq+S8tOOBhOOAgemdnuaOqOWlqOOBqOOBquOCiuOBvuOBl+OBn+OAgiAqL1xuZXhwb3J0IGxldCBzX2luc3RhbmNlOiBMQXBwV2F2RmlsZUhhbmRsZXIgPSBudWxsO1xuXG5leHBvcnQgY2xhc3MgTEFwcFdhdkZpbGVIYW5kbGVyIHtcbiAgLyoqXG4gICAqIOOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCue+8iOOCt+ODs+OCsOODq+ODiOODs++8ieOCkui/lOOBmeOAglxuICAgKiDjgqTjg7Pjgrnjgr/jg7PjgrnjgYznlJ/miJDjgZXjgozjgabjgYTjgarjgYTloLTlkIjjga/lhoXpg6jjgafjgqTjg7Pjgrnjgr/jg7PjgrnjgpLnlJ/miJDjgZnjgovjgIJcbiAgICpcbiAgICogQHJldHVybiDjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICogQGRlcHJlY2F0ZWQg44GT44Gu44Kv44Op44K544Gn44Gu44K344Oz44Kw44Or44OI44Oz44OR44K/44O844Oz44Gu5L2/55So44Gv6Z2e5o6o5aWo44Go44Gq44KK44G+44GX44Gf44CC5Luj44KP44KK44GrIG5ldyBMQXBwV2F2RmlsZUhhbmRsZXIoKSDjgpLkvb/nlKjjgZfjgabjgY/jgaDjgZXjgYTjgIJcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTEFwcFdhdkZpbGVIYW5kbGVyIHtcbiAgICBpZiAoc19pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICBzX2luc3RhbmNlID0gbmV3IExBcHBXYXZGaWxlSGFuZGxlcigpO1xuICAgIH1cblxuICAgIHJldHVybiBzX2luc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCue+8iOOCt+ODs+OCsOODq+ODiOODs++8ieOCkuino+aUvuOBmeOCi+OAglxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCDjgZPjga7plqLmlbDjga8gZ2V0SW5zdGFuY2UoKSDjgYzpnZ7mjqjlpajjgavjgarjgaPjgZ/jgZPjgajjgavkvLTjgYTjgIHpnZ7mjqjlpajjgajjgarjgorjgb7jgZfjgZ/jgIJcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVsZWFzZUluc3RhbmNlKCk6IHZvaWQge1xuICAgIGlmIChzX2luc3RhbmNlICE9IG51bGwpIHtcbiAgICAgIHNfaW5zdGFuY2UgPSB2b2lkIDA7XG4gICAgfVxuXG4gICAgc19pbnN0YW5jZSA9IG51bGw7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGRlbHRhVGltZVNlY29uZHM6IG51bWJlcikge1xuICAgIGxldCBnb2FsT2Zmc2V0OiBudW1iZXI7XG4gICAgbGV0IHJtczogbnVtYmVyO1xuXG4gICAgLy8g44OH44O844K/44Ot44O844OJ5YmNL+ODleOCoeOCpOODq+acq+WwvuOBq+mBlOOBl+OBn+WgtOWQiOOBr+abtOaWsOOBl+OBquOBhFxuICAgIGlmIChcbiAgICAgIHRoaXMuX3BjbURhdGEgPT0gbnVsbCB8fFxuICAgICAgdGhpcy5fc2FtcGxlT2Zmc2V0ID49IHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGVzUGVyQ2hhbm5lbFxuICAgICkge1xuICAgICAgdGhpcy5fbGFzdFJtcyA9IDAuMDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyDntYzpgY7mmYLplpPlvozjga7nirbmhYvjgpLkv53mjIFcbiAgICB0aGlzLl91c2VyVGltZVNlY29uZHMgKz0gZGVsdGFUaW1lU2Vjb25kcztcbiAgICBnb2FsT2Zmc2V0ID0gTWF0aC5mbG9vcihcbiAgICAgIHRoaXMuX3VzZXJUaW1lU2Vjb25kcyAqIHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGluZ1JhdGVcbiAgICApO1xuICAgIGlmIChnb2FsT2Zmc2V0ID4gdGhpcy5fd2F2RmlsZUluZm8uX3NhbXBsZXNQZXJDaGFubmVsKSB7XG4gICAgICBnb2FsT2Zmc2V0ID0gdGhpcy5fd2F2RmlsZUluZm8uX3NhbXBsZXNQZXJDaGFubmVsO1xuICAgIH1cblxuICAgIC8vIFJNU+ioiOa4rFxuICAgIHJtcyA9IDAuMDtcbiAgICBmb3IgKFxuICAgICAgbGV0IGNoYW5uZWxDb3VudCA9IDA7XG4gICAgICBjaGFubmVsQ291bnQgPCB0aGlzLl93YXZGaWxlSW5mby5fbnVtYmVyT2ZDaGFubmVscztcbiAgICAgIGNoYW5uZWxDb3VudCsrXG4gICAgKSB7XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgc2FtcGxlQ291bnQgPSB0aGlzLl9zYW1wbGVPZmZzZXQ7XG4gICAgICAgIHNhbXBsZUNvdW50IDwgZ29hbE9mZnNldDtcbiAgICAgICAgc2FtcGxlQ291bnQrK1xuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHBjbSA9IHRoaXMuX3BjbURhdGFbY2hhbm5lbENvdW50XVtzYW1wbGVDb3VudF07XG4gICAgICAgIHJtcyArPSBwY20gKiBwY207XG4gICAgICB9XG4gICAgfVxuICAgIHJtcyA9IE1hdGguc3FydChcbiAgICAgIHJtcyAvXG4gICAgICAgICh0aGlzLl93YXZGaWxlSW5mby5fbnVtYmVyT2ZDaGFubmVscyAqXG4gICAgICAgICAgKGdvYWxPZmZzZXQgLSB0aGlzLl9zYW1wbGVPZmZzZXQpKVxuICAgICk7XG5cbiAgICB0aGlzLl9sYXN0Um1zID0gcm1zO1xuICAgIHRoaXMuX3NhbXBsZU9mZnNldCA9IGdvYWxPZmZzZXQ7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgc3RhcnQoZmlsZVBhdGg6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIOOCteODs+ODl+ODq+S9jeWPgueFp+S9jee9ruOCkuWIneacn+WMllxuICAgIHRoaXMuX3NhbXBsZU9mZnNldCA9IDA7XG4gICAgdGhpcy5fdXNlclRpbWVTZWNvbmRzID0gMC4wO1xuXG4gICAgLy8gUk1T5YCk44KS44Oq44K744OD44OIXG4gICAgdGhpcy5fbGFzdFJtcyA9IDAuMDtcblxuICAgIHRoaXMubG9hZFdhdkZpbGUoZmlsZVBhdGgpO1xuICB9XG5cbiAgcHVibGljIGdldFJtcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0Um1zO1xuICB9XG5cbiAgcHVibGljIGxvYWRXYXZGaWxlKGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZVZhbHVlID0+IHtcbiAgICAgIGxldCByZXQgPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMuX3BjbURhdGEgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbGVhc2VQY21EYXRhKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIOODleOCoeOCpOODq+ODreODvOODiVxuICAgICAgY29uc3QgYXN5bmNGaWxlTG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGZpbGVQYXRoKS50aGVuKHJlc3BvbmNlID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uY2UuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBhc3luY1dhdkZpbGVNYW5hZ2VyID0gKGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZUJ5dGUgPSBhd2FpdCBhc3luY0ZpbGVMb2FkKCk7XG4gICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVEYXRhVmlldyA9IG5ldyBEYXRhVmlldyhcbiAgICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlQnl0ZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlU2l6ZSA9IHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVCeXRlLmJ5dGVMZW5ndGg7XG4gICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX3JlYWRPZmZzZXQgPSAwO1xuXG4gICAgICAgIC8vIOODleOCoeOCpOODq+ODreODvOODieOBq+WkseaVl+OBl+OBpuOBhOOCi+OBi+OAgeWFiOmgreOBruOCt+OCsOODjeODgeODo1wiUklGRlwi44KS5YWl44KM44KL44K144Kk44K644KC44Gq44GE5aC05ZCI44Gv5aSx5pWXXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlQnl0ZSA9PSBudWxsIHx8XG4gICAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZVNpemUgPCA0XG4gICAgICAgICkge1xuICAgICAgICAgIHJlc29sdmVWYWx1ZShmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g44OV44Kh44Kk44Or5ZCNXG4gICAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9maWxlTmFtZSA9IGZpbGVQYXRoO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8g44K344Kw44ON44OB44OjIFwiUklGRlwiXG4gICAgICAgICAgaWYgKCF0aGlzLl9ieXRlUmVhZGVyLmdldENoZWNrU2lnbmF0dXJlKCdSSUZGJykpIHtcbiAgICAgICAgICAgIHJldCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBTaWduZXR1cmUgXCJSSUZGXCIuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIOODleOCoeOCpOODq+OCteOCpOOCui0477yI6Kqt44G/6aOb44Gw44GX77yJXG4gICAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5nZXQzMkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAgIC8vIOOCt+OCsOODjeODgeODoyBcIldBVkVcIlxuICAgICAgICAgIGlmICghdGhpcy5fYnl0ZVJlYWRlci5nZXRDaGVja1NpZ25hdHVyZSgnV0FWRScpKSB7XG4gICAgICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgU2lnbmV0dXJlIFwiV0FWRVwiLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyDjgrfjgrDjg43jg4Hjg6MgXCJmbXQgXCJcbiAgICAgICAgICBpZiAoIXRoaXMuX2J5dGVSZWFkZXIuZ2V0Q2hlY2tTaWduYXR1cmUoJ2ZtdCAnKSkge1xuICAgICAgICAgICAgcmV0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIFNpZ25ldHVyZSBcImZtdFwiLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBmbXTjg4Hjg6Pjg7Pjgq/jgrXjgqTjgrpcbiAgICAgICAgICBjb25zdCBmbXRDaHVua1NpemUgPSB0aGlzLl9ieXRlUmVhZGVyLmdldDMyTGl0dGxlRW5kaWFuKCk7XG4gICAgICAgICAgLy8g44OV44Kp44O844Oe44OD44OISUTjga8x77yI44Oq44OL44KiUENN77yJ5Lul5aSW5Y+X44GR5LuY44GR44Gq44GEXG4gICAgICAgICAgaWYgKHRoaXMuX2J5dGVSZWFkZXIuZ2V0MTZMaXR0bGVFbmRpYW4oKSAhPSAxKSB7XG4gICAgICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmlsZSBpcyBub3QgbGluZWFyIFBDTS4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g44OB44Oj44Oz44ON44Or5pWwXG4gICAgICAgICAgdGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHMgPVxuICAgICAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5nZXQxNkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAgIC8vIOOCteODs+ODl+ODquODs+OCsOODrOODvOODiFxuICAgICAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGluZ1JhdGUgPVxuICAgICAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5nZXQzMkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAgIC8vIOODh+ODvOOCv+mAn+W6pltieXRlL3NlY13vvIjoqq3jgb/po5vjgbDjgZfvvIlcbiAgICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLmdldDMyTGl0dGxlRW5kaWFuKCk7XG4gICAgICAgICAgLy8g44OW44Ot44OD44Kv44K144Kk44K677yI6Kqt44G/6aOb44Gw44GX77yJXG4gICAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5nZXQxNkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAgIC8vIOmHj+WtkOWMluODk+ODg+ODiOaVsFxuICAgICAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9iaXRzUGVyU2FtcGxlID1cbiAgICAgICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuZ2V0MTZMaXR0bGVFbmRpYW4oKTtcbiAgICAgICAgICAvLyBmbXTjg4Hjg6Pjg7Pjgq/jga7mi6HlvLXpg6jliIbjga7oqq3jgb/po5vjgbDjgZdcbiAgICAgICAgICBpZiAoZm10Q2h1bmtTaXplID4gMTYpIHtcbiAgICAgICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX3JlYWRPZmZzZXQgKz0gZm10Q2h1bmtTaXplIC0gMTY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFwiZGF0YVwi44OB44Oj44Oz44Kv44GM5Ye654++44GZ44KL44G+44Gn6Kqt44G/6aOb44Gw44GXXG4gICAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgIXRoaXMuX2J5dGVSZWFkZXIuZ2V0Q2hlY2tTaWduYXR1cmUoJ2RhdGEnKSAmJlxuICAgICAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fcmVhZE9mZnNldCA8IHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVTaXplXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLl9yZWFkT2Zmc2V0ICs9XG4gICAgICAgICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuZ2V0MzJMaXR0bGVFbmRpYW4oKSArIDQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIOODleOCoeOCpOODq+WGheOBq1wiZGF0YVwi44OB44Oj44Oz44Kv44GM5Ye654++44GX44Gq44GL44Gj44GfXG4gICAgICAgICAgaWYgKHRoaXMuX2J5dGVSZWFkZXIuX3JlYWRPZmZzZXQgPj0gdGhpcy5fYnl0ZVJlYWRlci5fZmlsZVNpemUpIHtcbiAgICAgICAgICAgIHJldCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBcImRhdGFcIiBDaHVuay4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g44K144Oz44OX44Or5pWwXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgZGF0YUNodW5rU2l6ZSA9IHRoaXMuX2J5dGVSZWFkZXIuZ2V0MzJMaXR0bGVFbmRpYW4oKTtcbiAgICAgICAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGVzUGVyQ2hhbm5lbCA9XG4gICAgICAgICAgICAgIChkYXRhQ2h1bmtTaXplICogOCkgL1xuICAgICAgICAgICAgICAodGhpcy5fd2F2RmlsZUluZm8uX2JpdHNQZXJTYW1wbGUgKlxuICAgICAgICAgICAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9udW1iZXJPZkNoYW5uZWxzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g6aCY5Z+f56K65L+dXG4gICAgICAgICAgdGhpcy5fcGNtRGF0YSA9IG5ldyBBcnJheSh0aGlzLl93YXZGaWxlSW5mby5fbnVtYmVyT2ZDaGFubmVscyk7XG4gICAgICAgICAgZm9yIChcbiAgICAgICAgICAgIGxldCBjaGFubmVsQ291bnQgPSAwO1xuICAgICAgICAgICAgY2hhbm5lbENvdW50IDwgdGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHM7XG4gICAgICAgICAgICBjaGFubmVsQ291bnQrK1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5fcGNtRGF0YVtjaGFubmVsQ291bnRdID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgICAgICAgdGhpcy5fd2F2RmlsZUluZm8uX3NhbXBsZXNQZXJDaGFubmVsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyDms6LlvaLjg4fjg7zjgr/lj5blvpdcbiAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgbGV0IHNhbXBsZUNvdW50ID0gMDtcbiAgICAgICAgICAgIHNhbXBsZUNvdW50IDwgdGhpcy5fd2F2RmlsZUluZm8uX3NhbXBsZXNQZXJDaGFubmVsO1xuICAgICAgICAgICAgc2FtcGxlQ291bnQrK1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgbGV0IGNoYW5uZWxDb3VudCA9IDA7XG4gICAgICAgICAgICAgIGNoYW5uZWxDb3VudCA8IHRoaXMuX3dhdkZpbGVJbmZvLl9udW1iZXJPZkNoYW5uZWxzO1xuICAgICAgICAgICAgICBjaGFubmVsQ291bnQrK1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3BjbURhdGFbY2hhbm5lbENvdW50XVtzYW1wbGVDb3VudF0gPSB0aGlzLmdldFBjbVNhbXBsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldCA9IHRydWU7XG5cbiAgICAgICAgICByZXNvbHZlVmFsdWUocmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9XG4gICAgICB9KSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXNvbHZlVmFsdWUocmV0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFBjbVNhbXBsZSgpOiBudW1iZXIge1xuICAgIGxldCBwY20zMjtcblxuICAgIC8vIDMy44OT44OD44OI5bmF44Gr5ouh5by144GX44Gm44GL44KJLTHvvZ4x44Gu56+E5Zuy44Gr5Li444KB44KLXG4gICAgc3dpdGNoICh0aGlzLl93YXZGaWxlSW5mby5fYml0c1BlclNhbXBsZSkge1xuICAgICAgY2FzZSA4OlxuICAgICAgICBwY20zMiA9IHRoaXMuX2J5dGVSZWFkZXIuZ2V0OCgpIC0gMTI4O1xuICAgICAgICBwY20zMiA8PD0gMjQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxNjpcbiAgICAgICAgcGNtMzIgPSB0aGlzLl9ieXRlUmVhZGVyLmdldDE2TGl0dGxlRW5kaWFuKCkgPDwgMTY7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyNDpcbiAgICAgICAgcGNtMzIgPSB0aGlzLl9ieXRlUmVhZGVyLmdldDI0TGl0dGxlRW5kaWFuKCkgPDwgODtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyDlr77lv5zjgZfjgabjgYTjgarjgYTjg5Pjg4Pjg4jluYVcbiAgICAgICAgcGNtMzIgPSAwO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcGNtMzIgLyAyMTQ3NDgzNjQ3OyAvL051bWJlci5NQVhfVkFMVUU7XG4gIH1cblxuICAvKipcbiAgICog5oyH5a6a44GX44Gf44OB44Oj44Oz44ON44Or44GL44KJ6Z+z5aOw44K144Oz44OX44Or44Gu6YWN5YiX44KS5Y+W5b6X44GZ44KLXG4gICAqXG4gICAqIEBwYXJhbSB1c2VjaGFubmVsIOWIqeeUqOOBmeOCi+ODgeODo+ODs+ODjeODq1xuICAgKiBAcmV0dXJucyDmjIflrprjgZfjgZ/jg4Hjg6Pjg7Pjg43jg6vjga7pn7Plo7DjgrXjg7Pjg5fjg6vjga7phY3liJdcbiAgICovXG4gIHB1YmxpYyBnZXRQY21EYXRhQ2hhbm5lbCh1c2VjaGFubmVsOiBudW1iZXIpOiBGbG9hdDMyQXJyYXkge1xuICAgIC8vIOaMh+WumuOBl+OBn+ODgeODo+ODs+ODjeODq+aVsOOBjOODh+ODvOOCv+eUqOmFjeWIl+OBrumVt+OBleOCiOOCiuWkmuOBhOOBquOCiW51bGzjgpLov5TjgZnjgIJcbiAgICBpZiAoIXRoaXMuX3BjbURhdGEgfHwgISh1c2VjaGFubmVsIDwgdGhpcy5fcGNtRGF0YS5sZW5ndGgpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBfcGNtRGF0YeOBi+OCieaWsOimj+OBq+aMh+WumuOBl+OBn+ODgeODo+ODs+ODjeODq+OBrkZsb2F0MzJBcnJheeOCkuS9nOaIkOOBmeOCi+OAglxuICAgIHJldHVybiBGbG9hdDMyQXJyYXkuZnJvbSh0aGlzLl9wY21EYXRhW3VzZWNoYW5uZWxdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDpn7Plo7Djga7jgrXjg7Pjg5fjg6rjg7PjgrDlkajms6LmlbDjgpLlj5blvpfjgZnjgovjgIJcbiAgICpcbiAgICogQHJldHVybnMg6Z+z5aOw44Gu44K144Oz44OX44Oq44Oz44Kw5ZGo5rOi5pWwXG4gICAqL1xuICBwdWJsaWMgZ2V0V2F2U2FtcGxpbmdSYXRlKCk6IG51bWJlciB7XG4gICAgaWYgKCF0aGlzLl93YXZGaWxlSW5mbyB8fCB0aGlzLl93YXZGaWxlSW5mby5fc2FtcGxpbmdSYXRlIDwgMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGluZ1JhdGU7XG4gIH1cblxuICBwdWJsaWMgcmVsZWFzZVBjbURhdGEoKTogdm9pZCB7XG4gICAgZm9yIChcbiAgICAgIGxldCBjaGFubmVsQ291bnQgPSAwO1xuICAgICAgY2hhbm5lbENvdW50IDwgdGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHM7XG4gICAgICBjaGFubmVsQ291bnQrK1xuICAgICkge1xuICAgICAgZGVsZXRlIHRoaXMuX3BjbURhdGFbY2hhbm5lbENvdW50XTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuX3BjbURhdGE7XG4gICAgdGhpcy5fcGNtRGF0YSA9IG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9wY21EYXRhID0gbnVsbDtcbiAgICB0aGlzLl91c2VyVGltZVNlY29uZHMgPSAwLjA7XG4gICAgdGhpcy5fbGFzdFJtcyA9IDAuMDtcbiAgICB0aGlzLl9zYW1wbGVPZmZzZXQgPSAwLjA7XG4gICAgdGhpcy5fd2F2RmlsZUluZm8gPSBuZXcgV2F2RmlsZUluZm8oKTtcbiAgICB0aGlzLl9ieXRlUmVhZGVyID0gbmV3IEJ5dGVSZWFkZXIoKTtcbiAgfVxuXG4gIF9wY21EYXRhOiBBcnJheTxGbG9hdDMyQXJyYXk+O1xuICBfdXNlclRpbWVTZWNvbmRzOiBudW1iZXI7XG4gIF9sYXN0Um1zOiBudW1iZXI7XG4gIF9zYW1wbGVPZmZzZXQ6IG51bWJlcjtcbiAgX3dhdkZpbGVJbmZvOiBXYXZGaWxlSW5mbztcbiAgX2J5dGVSZWFkZXI6IEJ5dGVSZWFkZXI7XG4gIF9sb2FkRmlsZXRvQnl0ZXMgPSAoYXJyYXlCdWZmZXI6IEFycmF5QnVmZmVyLCBsZW5ndGg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVCeXRlID0gYXJyYXlCdWZmZXI7XG4gICAgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZURhdGFWaWV3ID0gbmV3IERhdGFWaWV3KHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVCeXRlKTtcbiAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlU2l6ZSA9IGxlbmd0aDtcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIFdhdkZpbGVJbmZvIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZmlsZU5hbWUgPSAnJztcbiAgICB0aGlzLl9udW1iZXJPZkNoYW5uZWxzID0gMDtcbiAgICB0aGlzLl9iaXRzUGVyU2FtcGxlID0gMDtcbiAgICB0aGlzLl9zYW1wbGluZ1JhdGUgPSAwO1xuICAgIHRoaXMuX3NhbXBsZXNQZXJDaGFubmVsID0gMDtcbiAgfVxuXG4gIF9maWxlTmFtZTogc3RyaW5nOyAvLy88IOODleOCoeOCpOODq+WQjVxuICBfbnVtYmVyT2ZDaGFubmVsczogbnVtYmVyOyAvLy88IOODgeODo+ODs+ODjeODq+aVsFxuICBfYml0c1BlclNhbXBsZTogbnVtYmVyOyAvLy88IOOCteODs+ODl+ODq+OBguOBn+OCiuODk+ODg+ODiOaVsFxuICBfc2FtcGxpbmdSYXRlOiBudW1iZXI7IC8vLzwg44K144Oz44OX44Oq44Oz44Kw44Os44O844OIXG4gIF9zYW1wbGVzUGVyQ2hhbm5lbDogbnVtYmVyOyAvLy88IDHjg4Hjg6Pjg7Pjg43jg6vjgYLjgZ/jgornt4/jgrXjg7Pjg5fjg6vmlbBcbn1cblxuZXhwb3J0IGNsYXNzIEJ5dGVSZWFkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9maWxlQnl0ZSA9IG51bGw7XG4gICAgdGhpcy5fZmlsZURhdGFWaWV3ID0gbnVsbDtcbiAgICB0aGlzLl9maWxlU2l6ZSA9IDA7XG4gICAgdGhpcy5fcmVhZE9mZnNldCA9IDA7XG4gIH1cblxuICAvKipcbiAgICogQGJyaWVmIDjjg5Pjg4Pjg4joqq3jgb/ovrzjgb9cbiAgICogQHJldHVybiBDc206OmNzbVVpbnQ4IOiqreOBv+WPluOBo+OBnzjjg5Pjg4Pjg4jlgKRcbiAgICovXG4gIHB1YmxpYyBnZXQ4KCk6IG51bWJlciB7XG4gICAgY29uc3QgcmV0ID0gdGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQpO1xuICAgIHRoaXMuX3JlYWRPZmZzZXQrKztcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBicmllZiAxNuODk+ODg+ODiOiqreOBv+i+vOOBv++8iOODquODiOODq+OCqOODs+ODh+OCo+OCouODs++8iVxuICAgKiBAcmV0dXJuIENzbTo6Y3NtVWludDE2IOiqreOBv+WPluOBo+OBnzE244OT44OD44OI5YCkXG4gICAqL1xuICBwdWJsaWMgZ2V0MTZMaXR0bGVFbmRpYW4oKTogbnVtYmVyIHtcbiAgICBjb25zdCByZXQgPVxuICAgICAgKHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0ICsgMSkgPDwgOCkgfFxuICAgICAgdGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQpO1xuICAgIHRoaXMuX3JlYWRPZmZzZXQgKz0gMjtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBicmllZiAyNOODk+ODg+ODiOiqreOBv+i+vOOBv++8iOODquODiOODq+OCqOODs+ODh+OCo+OCouODs++8iVxuICAgKiBAcmV0dXJuIENzbTo6Y3NtVWludDMyIOiqreOBv+WPluOBo+OBnzI044OT44OD44OI5YCk77yI5LiL5L2NMjTjg5Pjg4Pjg4jjgavoqK3lrprvvIlcbiAgICovXG4gIHB1YmxpYyBnZXQyNExpdHRsZUVuZGlhbigpOiBudW1iZXIge1xuICAgIGNvbnN0IHJldCA9XG4gICAgICAodGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQgKyAyKSA8PCAxNikgfFxuICAgICAgKHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0ICsgMSkgPDwgOCkgfFxuICAgICAgdGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQpO1xuICAgIHRoaXMuX3JlYWRPZmZzZXQgKz0gMztcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBicmllZiAzMuODk+ODg+ODiOiqreOBv+i+vOOBv++8iOODquODiOODq+OCqOODs+ODh+OCo+OCouODs++8iVxuICAgKiBAcmV0dXJuIENzbTo6Y3NtVWludDMyIOiqreOBv+WPluOBo+OBnzMy44OT44OD44OI5YCkXG4gICAqL1xuICBwdWJsaWMgZ2V0MzJMaXR0bGVFbmRpYW4oKTogbnVtYmVyIHtcbiAgICBjb25zdCByZXQgPVxuICAgICAgKHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0ICsgMykgPDwgMjQpIHxcbiAgICAgICh0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCArIDIpIDw8IDE2KSB8XG4gICAgICAodGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQgKyAxKSA8PCA4KSB8XG4gICAgICB0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCk7XG4gICAgdGhpcy5fcmVhZE9mZnNldCArPSA0O1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogQGJyaWVmIOOCt+OCsOODjeODgeODo+OBruWPluW+l+OBqOWPgueFp+aWh+Wtl+WIl+OBqOOBruS4gOiHtOODgeOCp+ODg+OCr1xuICAgKiBAcGFyYW1baW5dIHJlZmVyZW5jZSDmpJzmn7vlr77osaHjga7jgrfjgrDjg43jg4Hjg6PmloflrZfliJdcbiAgICogQHJldHZhbCAgdHJ1ZSAgICDkuIDoh7TjgZfjgabjgYTjgotcbiAgICogQHJldHZhbCAgZmFsc2UgICDkuIDoh7TjgZfjgabjgYTjgarjgYRcbiAgICovXG4gIHB1YmxpYyBnZXRDaGVja1NpZ25hdHVyZShyZWZlcmVuY2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGdldFNpZ25hdHVyZTogVWludDhBcnJheSA9IG5ldyBVaW50OEFycmF5KDQpO1xuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZzogVWludDhBcnJheSA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShyZWZlcmVuY2UpO1xuICAgIGlmIChyZWZlcmVuY2UubGVuZ3RoICE9IDQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChsZXQgc2lnbmF0dXJlT2Zmc2V0ID0gMDsgc2lnbmF0dXJlT2Zmc2V0IDwgNDsgc2lnbmF0dXJlT2Zmc2V0KyspIHtcbiAgICAgIGdldFNpZ25hdHVyZVtzaWduYXR1cmVPZmZzZXRdID0gdGhpcy5nZXQ4KCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBnZXRTaWduYXR1cmVbMF0gPT0gcmVmZXJlbmNlU3RyaW5nWzBdICYmXG4gICAgICBnZXRTaWduYXR1cmVbMV0gPT0gcmVmZXJlbmNlU3RyaW5nWzFdICYmXG4gICAgICBnZXRTaWduYXR1cmVbMl0gPT0gcmVmZXJlbmNlU3RyaW5nWzJdICYmXG4gICAgICBnZXRTaWduYXR1cmVbM10gPT0gcmVmZXJlbmNlU3RyaW5nWzNdXG4gICAgKTtcbiAgfVxuXG4gIF9maWxlQnl0ZTogQXJyYXlCdWZmZXI7IC8vLzwg44Ot44O844OJ44GX44Gf44OV44Kh44Kk44Or44Gu44OQ44Kk44OI5YiXXG4gIF9maWxlRGF0YVZpZXc6IERhdGFWaWV3O1xuICBfZmlsZVNpemU6IG51bWJlcjsgLy8vPCDjg5XjgqHjgqTjg6vjgrXjgqTjgrpcbiAgX3JlYWRPZmZzZXQ6IG51bWJlcjsgLy8vPCDjg5XjgqHjgqTjg6vlj4LnhafkvY3nva5cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmV4cG9ydCBjbGFzcyBUb3VjaE1hbmFnZXIge1xuICAvKipcbiAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9zdGFydFggPSAwLjA7XG4gICAgdGhpcy5fc3RhcnRZID0gMC4wO1xuICAgIHRoaXMuX2xhc3RYID0gMC4wO1xuICAgIHRoaXMuX2xhc3RZID0gMC4wO1xuICAgIHRoaXMuX2xhc3RYMSA9IDAuMDtcbiAgICB0aGlzLl9sYXN0WTEgPSAwLjA7XG4gICAgdGhpcy5fbGFzdFgyID0gMC4wO1xuICAgIHRoaXMuX2xhc3RZMiA9IDAuMDtcbiAgICB0aGlzLl9sYXN0VG91Y2hEaXN0YW5jZSA9IDAuMDtcbiAgICB0aGlzLl9kZWx0YVggPSAwLjA7XG4gICAgdGhpcy5fZGVsdGFZID0gMC4wO1xuICAgIHRoaXMuX3NjYWxlID0gMS4wO1xuICAgIHRoaXMuX3RvdWNoU2luZ2xlID0gZmFsc2U7XG4gICAgdGhpcy5fZmxpcEF2YWlsYWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGdldENlbnRlclgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFg7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2VudGVyWSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0WTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREZWx0YVgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsdGFYO1xuICB9XG5cbiAgcHVibGljIGdldERlbHRhWSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kZWx0YVk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U3RhcnRYKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0WDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTdGFydFkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRZO1xuICB9XG5cbiAgcHVibGljIGdldFNjYWxlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxlO1xuICB9XG5cbiAgcHVibGljIGdldFgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFg7XG4gIH1cblxuICBwdWJsaWMgZ2V0WSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0WTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRYMSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0WDE7XG4gIH1cblxuICBwdWJsaWMgZ2V0WTEoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFkxO1xuICB9XG5cbiAgcHVibGljIGdldFgyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xhc3RYMjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRZMigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0WTI7XG4gIH1cblxuICBwdWJsaWMgaXNTaW5nbGVUb3VjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdG91Y2hTaW5nbGU7XG4gIH1cblxuICBwdWJsaWMgaXNGbGlja0F2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmxpcEF2YWlsYWJsZTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNhYmxlRmxpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fZmxpcEF2YWlsYWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCv+ODg+ODgemWi+Wni+aZguOCpOODmeODs+ODiFxuICAgKiBAcGFyYW0gZGV2aWNlWCDjgr/jg4Pjg4HjgZfjgZ/nlLvpnaLjga5444Gu5YCkXG4gICAqIEBwYXJhbSBkZXZpY2VZIOOCv+ODg+ODgeOBl+OBn+eUu+mdouOBrnnjga7lgKRcbiAgICovXG4gIHB1YmxpYyB0b3VjaGVzQmVnYW4oZGV2aWNlWDogbnVtYmVyLCBkZXZpY2VZOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXN0WCA9IGRldmljZVg7XG4gICAgdGhpcy5fbGFzdFkgPSBkZXZpY2VZO1xuICAgIHRoaXMuX3N0YXJ0WCA9IGRldmljZVg7XG4gICAgdGhpcy5fc3RhcnRZID0gZGV2aWNlWTtcbiAgICB0aGlzLl9sYXN0VG91Y2hEaXN0YW5jZSA9IC0xLjA7XG4gICAgdGhpcy5fZmxpcEF2YWlsYWJsZSA9IHRydWU7XG4gICAgdGhpcy5fdG91Y2hTaW5nbGUgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOODieODqeODg+OCsOaZguOBruOCpOODmeODs+ODiFxuICAgKiBAcGFyYW0gZGV2aWNlWCDjgr/jg4Pjg4HjgZfjgZ/nlLvpnaLjga5444Gu5YCkXG4gICAqIEBwYXJhbSBkZXZpY2VZIOOCv+ODg+ODgeOBl+OBn+eUu+mdouOBrnnjga7lgKRcbiAgICovXG4gIHB1YmxpYyB0b3VjaGVzTW92ZWQoZGV2aWNlWDogbnVtYmVyLCBkZXZpY2VZOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXN0WCA9IGRldmljZVg7XG4gICAgdGhpcy5fbGFzdFkgPSBkZXZpY2VZO1xuICAgIHRoaXMuX2xhc3RUb3VjaERpc3RhbmNlID0gLTEuMDtcbiAgICB0aGlzLl90b3VjaFNpbmdsZSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICog44OV44Oq44OD44Kv44Gu6Led6Zui5ris5a6aXG4gICAqIEByZXR1cm4g44OV44Oq44OD44Kv6Led6ZuiXG4gICAqL1xuICBwdWJsaWMgZ2V0RmxpY2tEaXN0YW5jZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlKFxuICAgICAgdGhpcy5fc3RhcnRYLFxuICAgICAgdGhpcy5fc3RhcnRZLFxuICAgICAgdGhpcy5fbGFzdFgsXG4gICAgICB0aGlzLl9sYXN0WVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICog54K577yR44GL44KJ54K577yS44G444Gu6Led6Zui44KS5rGC44KB44KLXG4gICAqXG4gICAqIEBwYXJhbSB4MSDvvJHjgaTnm67jga7jgr/jg4Pjg4HjgZfjgZ/nlLvpnaLjga5444Gu5YCkXG4gICAqIEBwYXJhbSB5MSDvvJHjgaTnm67jga7jgr/jg4Pjg4HjgZfjgZ/nlLvpnaLjga5544Gu5YCkXG4gICAqIEBwYXJhbSB4MiDvvJLjgaTnm67jga7jgr/jg4Pjg4HjgZfjgZ/nlLvpnaLjga5444Gu5YCkXG4gICAqIEBwYXJhbSB5MiDvvJLjgaTnm67jga7jgr/jg4Pjg4HjgZfjgZ/nlLvpnaLjga5544Gu5YCkXG4gICAqL1xuICBwdWJsaWMgY2FsY3VsYXRlRGlzdGFuY2UoXG4gICAgeDE6IG51bWJlcixcbiAgICB5MTogbnVtYmVyLFxuICAgIHgyOiBudW1iZXIsXG4gICAgeTI6IG51bWJlclxuICApOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnNxcnQoKHgxIC0geDIpICogKHgxIC0geDIpICsgKHkxIC0geTIpICogKHkxIC0geTIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDvvJLjgaTnm67jga7lgKTjgYvjgonjgIHnp7vli5Xph4/jgpLmsYLjgoHjgovjgIJcbiAgICog6YGV44GG5pa55ZCR44Gu5aC05ZCI44Gv56e75YuV6YeP77yQ44CC5ZCM44GY5pa55ZCR44Gu5aC05ZCI44Gv44CB57W25a++5YCk44GM5bCP44GV44GE5pa544Gu5YCk44KS5Y+C54Wn44GZ44KL44CCXG4gICAqXG4gICAqIEBwYXJhbSB2MSDvvJHjgaTnm67jga7np7vli5Xph49cbiAgICogQHBhcmFtIHYyIO+8kuOBpOebruOBruenu+WLlemHj1xuICAgKlxuICAgKiBAcmV0dXJuIOWwj+OBleOBhOaWueOBruenu+WLlemHj1xuICAgKi9cbiAgcHVibGljIGNhbGN1bGF0ZU1vdmluZ0Ftb3VudCh2MTogbnVtYmVyLCB2MjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAodjEgPiAwLjAgIT0gdjIgPiAwLjApIHtcbiAgICAgIHJldHVybiAwLjA7XG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbjogbnVtYmVyID0gdjEgPiAwLjAgPyAxLjAgOiAtMS4wO1xuICAgIGNvbnN0IGFic29sdXRlVmFsdWUxID0gTWF0aC5hYnModjEpO1xuICAgIGNvbnN0IGFic29sdXRlVmFsdWUyID0gTWF0aC5hYnModjIpO1xuICAgIHJldHVybiAoXG4gICAgICBzaWduICogKGFic29sdXRlVmFsdWUxIDwgYWJzb2x1dGVWYWx1ZTIgPyBhYnNvbHV0ZVZhbHVlMSA6IGFic29sdXRlVmFsdWUyKVxuICAgICk7XG4gIH1cblxuICBfc3RhcnRZOiBudW1iZXI7IC8vIOOCv+ODg+ODgeOCkumWi+Wni+OBl+OBn+aZguOBrnjjga7lgKRcbiAgX3N0YXJ0WDogbnVtYmVyOyAvLyDjgr/jg4Pjg4HjgpLplovlp4vjgZfjgZ/mmYLjga5544Gu5YCkXG4gIF9sYXN0WDogbnVtYmVyOyAvLyDjgrfjg7PjgrDjg6vjgr/jg4Pjg4HmmYLjga5444Gu5YCkXG4gIF9sYXN0WTogbnVtYmVyOyAvLyDjgrfjg7PjgrDjg6vjgr/jg4Pjg4HmmYLjga5544Gu5YCkXG4gIF9sYXN0WDE6IG51bWJlcjsgLy8g44OA44OW44Or44K/44OD44OB5pmC44Gu5LiA44Gk55uu44GueOOBruWApFxuICBfbGFzdFkxOiBudW1iZXI7IC8vIOODgOODluODq+OCv+ODg+ODgeaZguOBruS4gOOBpOebruOBrnnjga7lgKRcbiAgX2xhc3RYMjogbnVtYmVyOyAvLyDjg4Djg5bjg6vjgr/jg4Pjg4HmmYLjga7kuozjgaTnm67jga5444Gu5YCkXG4gIF9sYXN0WTI6IG51bWJlcjsgLy8g44OA44OW44Or44K/44OD44OB5pmC44Gu5LqM44Gk55uu44GueeOBruWApFxuICBfbGFzdFRvdWNoRGlzdGFuY2U6IG51bWJlcjsgLy8gMuacrOS7peS4iuOBp+OCv+ODg+ODgeOBl+OBn+OBqOOBjeOBruaMh+OBrui3nembolxuICBfZGVsdGFYOiBudW1iZXI7IC8vIOWJjeWbnuOBruWApOOBi+OCieS7iuWbnuOBruWApOOBuOOBrnjjga7np7vli5Xot53pm6LjgIJcbiAgX2RlbHRhWTogbnVtYmVyOyAvLyDliY3lm57jga7lgKTjgYvjgonku4rlm57jga7lgKTjgbjjga5544Gu56e75YuV6Led6Zui44CCXG4gIF9zY2FsZTogbnVtYmVyOyAvLyDjgZPjga7jg5Xjg6zjg7zjg6DjgafmjpvjgZHlkIjjgo/jgZvjgovmi6HlpKfnjofjgILmi6HlpKfmk43kvZzkuK3ku6XlpJbjga8x44CCXG4gIF90b3VjaFNpbmdsZTogYm9vbGVhbjsgLy8g44K344Oz44Kw44Or44K/44OD44OB5pmC44GvdHJ1ZVxuICBfZmxpcEF2YWlsYWJsZTogYm9vbGVhbjsgLy8g44OV44Oq44OD44OX44GM5pyJ5Yq544GL44Gp44GG44GLXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7IExBcHBEZWxlZ2F0ZSB9IGZyb20gJy4vbGFwcGRlbGVnYXRlJztcbmltcG9ydCAqIGFzIExBcHBEZWZpbmUgZnJvbSAnLi9sYXBwZGVmaW5lJztcbmltcG9ydCB7IExBcHBHbE1hbmFnZXIgfSBmcm9tICcuL2xhcHBnbG1hbmFnZXInO1xuXG4vKipcbiAqIOODluODqeOCpuOCtuODreODvOODieW+jOOBruWHpueQhlxuICovXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgJ2xvYWQnLFxuICAoKTogdm9pZCA9PiB7XG4gICAgLy8gSW5pdGlhbGl6ZSBXZWJHTCBhbmQgY3JlYXRlIHRoZSBhcHBsaWNhdGlvbiBpbnN0YW5jZVxuICAgIGlmIChcbiAgICAgICFMQXBwR2xNYW5hZ2VyLmdldEluc3RhbmNlKCkgfHxcbiAgICAgICFMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5pbml0aWFsaXplKClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5ydW4oKTtcbiAgfSxcbiAgeyBwYXNzaXZlOiB0cnVlIH1cbik7XG5cbi8qKlxuICog57WC5LqG5pmC44Gu5Yem55CGXG4gKi9cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAnYmVmb3JldW5sb2FkJyxcbiAgKCk6IHZvaWQgPT4gTEFwcERlbGVnYXRlLnJlbGVhc2VJbnN0YW5jZSgpLFxuICB7IHBhc3NpdmU6IHRydWUgfVxuKTtcblxuLyoqXG4gKiBQcm9jZXNzIHdoZW4gY2hhbmdpbmcgc2NyZWVuIHNpemUuXG4gKi9cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAncmVzaXplJyxcbiAgKCkgPT4ge1xuICAgIGlmIChMQXBwRGVmaW5lLkNhbnZhc1NpemUgPT09ICdhdXRvJykge1xuICAgICAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkub25SZXNpemUoKTtcbiAgICB9XG4gIH0sXG4gIHsgcGFzc2l2ZTogdHJ1ZSB9XG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
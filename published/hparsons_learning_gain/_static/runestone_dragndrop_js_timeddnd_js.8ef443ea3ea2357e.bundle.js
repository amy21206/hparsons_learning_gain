(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_dragndrop_js_timeddnd_js"],{

/***/ 80329:
/*!***********************************************!*\
  !*** ./runestone/dragndrop/css/dragndrop.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 33426:
/*!*************************************************!*\
  !*** ./runestone/dragndrop/js/DragDropTouch.js ***!
  \*************************************************/
/***/ (() => {

var DragDropTouch;
(function (DragDropTouch_1) {
    'use strict';
    /**
     * Object used to hold the data that is being dragged during drag and drop operations.
     *
     * It may hold one or more data items of different types. For more information about
     * drag and drop operations and data transfer objects, see
     * <a href="https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer">HTML Drag and Drop API</a>.
     *
     * This object is created automatically by the @see:DragDropTouch singleton and is
     * accessible through the @see:dataTransfer property of all drag events.
     */
    var DataTransfer = (function () {
        function DataTransfer() {
            this._dropEffect = 'move';
            this._effectAllowed = 'all';
            this._data = {};
        }
        Object.defineProperty(DataTransfer.prototype, "dropEffect", {
            /**
             * Gets or sets the type of drag-and-drop operation currently selected.
             * The value must be 'none',  'copy',  'link', or 'move'.
             */
            get: function () {
                return this._dropEffect;
            },
            set: function (value) {
                this._dropEffect = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataTransfer.prototype, "effectAllowed", {
            /**
             * Gets or sets the types of operations that are possible.
             * Must be one of 'none', 'copy', 'copyLink', 'copyMove', 'link',
             * 'linkMove', 'move', 'all' or 'uninitialized'.
             */
            get: function () {
                return this._effectAllowed;
            },
            set: function (value) {
                this._effectAllowed = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataTransfer.prototype, "types", {
            /**
             * Gets an array of strings giving the formats that were set in the @see:dragstart event.
             */
            get: function () {
                return Object.keys(this._data);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Removes the data associated with a given type.
         *
         * The type argument is optional. If the type is empty or not specified, the data
         * associated with all types is removed. If data for the specified type does not exist,
         * or the data transfer contains no data, this method will have no effect.
         *
         * @param type Type of data to remove.
         */
        DataTransfer.prototype.clearData = function (type) {
            if (type != null) {
                delete this._data[type.toLowerCase()];
            }
            else {
                this._data = {};
            }
        };
        /**
         * Retrieves the data for a given type, or an empty string if data for that type does
         * not exist or the data transfer contains no data.
         *
         * @param type Type of data to retrieve.
         */
        DataTransfer.prototype.getData = function (type) {
            return this._data[type.toLowerCase()] || '';
        };
        /**
         * Set the data for a given type.
         *
         * For a list of recommended drag types, please see
         * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Recommended_Drag_Types.
         *
         * @param type Type of data to add.
         * @param value Data to add.
         */
        DataTransfer.prototype.setData = function (type, value) {
            this._data[type.toLowerCase()] = value;
        };
        /**
         * Set the image to be used for dragging if a custom one is desired.
         *
         * @param img An image element to use as the drag feedback image.
         * @param offsetX The horizontal offset within the image.
         * @param offsetY The vertical offset within the image.
         */
        DataTransfer.prototype.setDragImage = function (img, offsetX, offsetY) {
            var ddt = DragDropTouch._instance;
            ddt._imgCustom = img;
            ddt._imgOffset = { x: offsetX, y: offsetY };
        };
        return DataTransfer;
    }());
    DragDropTouch_1.DataTransfer = DataTransfer;
    /**
     * Defines a class that adds support for touch-based HTML5 drag/drop operations.
     *
     * The @see:DragDropTouch class listens to touch events and raises the
     * appropriate HTML5 drag/drop events as if the events had been caused
     * by mouse actions.
     *
     * The purpose of this class is to enable using existing, standard HTML5
     * drag/drop code on mobile devices running IOS or Android.
     *
     * To use, include the DragDropTouch.js file on the page. The class will
     * automatically start monitoring touch events and will raise the HTML5
     * drag drop events (dragstart, dragenter, dragleave, drop, dragend) which
     * should be handled by the application.
     *
     * For details and examples on HTML drag and drop, see
     * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_operations.
     */
    var DragDropTouch = (function () {
        /**
         * Initializes the single instance of the @see:DragDropTouch class.
         */
        function DragDropTouch() {
            this._lastClick = 0;
            // enforce singleton pattern
            if (DragDropTouch._instance) {
                throw 'DragDropTouch instance already created.';
            }
            // detect passive event support
            // https://github.com/Modernizr/Modernizr/issues/1894
            var supportsPassive = false;
            document.addEventListener('test', function () { }, {
                get passive() {
                    supportsPassive = true;
                    return true;
                }
            });
            // listen to touch events
            if (navigator.maxTouchPoints) {
                var d = document, 
                    ts = this._touchstart.bind(this), 
                    tm = this._touchmove.bind(this), 
                    te = this._touchend.bind(this), 
                    opt = supportsPassive ? { passive: false, capture: false } : false;
                d.addEventListener('touchstart', ts, opt);
                d.addEventListener('touchmove', tm, opt);
                d.addEventListener('touchend', te);
                d.addEventListener('touchcancel', te);
            }
        }
        /**
         * Gets a reference to the @see:DragDropTouch singleton.
         */
        DragDropTouch.getInstance = function () {
            return DragDropTouch._instance;
        };
        // ** event handlers
        DragDropTouch.prototype._touchstart = function (e) {
            var _this = this;
            if (this._shouldHandle(e)) {
                // raise double-click and prevent zooming
                if (Date.now() - this._lastClick < DragDropTouch._DBLCLICK) {
                    if (this._dispatchEvent(e, 'dblclick', e.target)) {
                        e.preventDefault();
                        this._reset();
                        return;
                    }
                }
                // clear all variables
                this._reset();
                // get nearest draggable element
                var src = this._closestDraggable(e.target);
                if (src) {
                    // give caller a chance to handle the hover/move events
                    if (!this._dispatchEvent(e, 'mousemove', e.target) &&
                        !this._dispatchEvent(e, 'mousedown', e.target)) {
                        // get ready to start dragging
                        this._dragSource = src;
                        this._ptDown = this._getPoint(e);
                        this._lastTouch = e;
                        e.preventDefault();
                        // show context menu if the user hasn't started dragging after a while
                        setTimeout(function () {
                            if (_this._dragSource == src && _this._img == null) {
                                if (_this._dispatchEvent(e, 'contextmenu', src)) {
                                    _this._reset();
                                }
                            }
                        }, DragDropTouch._CTXMENU);
                        if (DragDropTouch._ISPRESSHOLDMODE) {
                            this._pressHoldInterval = setTimeout(function () {
                                _this._isDragEnabled = true;
                                _this._touchmove(e);
                            }, DragDropTouch._PRESSHOLDAWAIT);
                        }
                    }
                }
            }
        };
        DragDropTouch.prototype._touchmove = function (e) {
            if (this._shouldCancelPressHoldMove(e)) {
              this._reset();
              return;
            }
            if (this._shouldHandleMove(e) || this._shouldHandlePressHoldMove(e)) {
                // see if target wants to handle move
                var target = this._getTarget(e);
                if (this._dispatchEvent(e, 'mousemove', target)) {
                    this._lastTouch = e;
                    e.preventDefault();
                    return;
                }
                // start dragging
                if (this._dragSource && !this._img && this._shouldStartDragging(e)) {
                    this._dispatchEvent(e, 'dragstart', this._dragSource);
                    this._createImage(e);
                    this._dispatchEvent(e, 'dragenter', target);
                }
                // continue dragging
                if (this._img) {
                    this._lastTouch = e;
                    e.preventDefault(); // prevent scrolling
                    this._dispatchEvent(e, 'drag', this._dragSource);
                    if (target != this._lastTarget) {
                        this._dispatchEvent(this._lastTouch, 'dragleave', this._lastTarget);
                        this._dispatchEvent(e, 'dragenter', target);
                        this._lastTarget = target;
                    }
                    this._moveImage(e);
                    this._isDropZone = this._dispatchEvent(e, 'dragover', target);
                }
            }
        };
        DragDropTouch.prototype._touchend = function (e) {
            if (this._shouldHandle(e)) {
                // see if target wants to handle up
                if (this._dispatchEvent(this._lastTouch, 'mouseup', e.target)) {
                    e.preventDefault();
                    return;
                }
                // user clicked the element but didn't drag, so clear the source and simulate a click
                if (!this._img) {
                    this._dragSource = null;
                    this._dispatchEvent(this._lastTouch, 'click', e.target);
                    this._lastClick = Date.now();
                }
                // finish dragging
                this._destroyImage();
                if (this._dragSource) {
                    if (e.type.indexOf('cancel') < 0 && this._isDropZone) {
                        this._dispatchEvent(this._lastTouch, 'drop', this._lastTarget);
                    }
                    this._dispatchEvent(this._lastTouch, 'dragend', this._dragSource);
                    this._reset();
                }
            }
        };
        // ** utilities
        // ignore events that have been handled or that involve more than one touch
        DragDropTouch.prototype._shouldHandle = function (e) {
            return e &&
                !e.defaultPrevented &&
                e.touches && e.touches.length < 2;
        };

        // use regular condition outside of press & hold mode
        DragDropTouch.prototype._shouldHandleMove = function (e) {
          return !DragDropTouch._ISPRESSHOLDMODE && this._shouldHandle(e);
        };

        // allow to handle moves that involve many touches for press & hold
        DragDropTouch.prototype._shouldHandlePressHoldMove = function (e) {
          return DragDropTouch._ISPRESSHOLDMODE &&
              this._isDragEnabled && e && e.touches && e.touches.length;
        };

        // reset data if user drags without pressing & holding
        DragDropTouch.prototype._shouldCancelPressHoldMove = function (e) {
          return DragDropTouch._ISPRESSHOLDMODE && !this._isDragEnabled &&
              this._getDelta(e) > DragDropTouch._PRESSHOLDMARGIN;
        };

        // start dragging when specified delta is detected
        DragDropTouch.prototype._shouldStartDragging = function (e) {
            var delta = this._getDelta(e);
            return delta > DragDropTouch._THRESHOLD ||
                (DragDropTouch._ISPRESSHOLDMODE && delta >= DragDropTouch._PRESSHOLDTHRESHOLD);
        }

        // clear all members
        DragDropTouch.prototype._reset = function () {
            this._destroyImage();
            this._dragSource = null;
            this._lastTouch = null;
            this._lastTarget = null;
            this._ptDown = null;
            this._isDragEnabled = false;
            this._isDropZone = false;
            this._dataTransfer = new DataTransfer();
            clearInterval(this._pressHoldInterval);
        };
        // get point for a touch event
        DragDropTouch.prototype._getPoint = function (e, page) {
            if (e && e.touches) {
                e = e.touches[0];
            }
            return { x: page ? e.pageX : e.clientX, y: page ? e.pageY : e.clientY };
        };
        // get distance between the current touch event and the first one
        DragDropTouch.prototype._getDelta = function (e) {
            if (DragDropTouch._ISPRESSHOLDMODE && !this._ptDown) { return 0; }
            var p = this._getPoint(e);
            return Math.abs(p.x - this._ptDown.x) + Math.abs(p.y - this._ptDown.y);
        };
        // get the element at a given touch event
        DragDropTouch.prototype._getTarget = function (e) {
            var pt = this._getPoint(e), el = document.elementFromPoint(pt.x, pt.y);
            while (el && getComputedStyle(el).pointerEvents == 'none') {
                el = el.parentElement;
            }
            return el;
        };
        // create drag image from source element
        DragDropTouch.prototype._createImage = function (e) {
            // just in case...
            if (this._img) {
                this._destroyImage();
            }
            // create drag image from custom element or drag source
            var src = this._imgCustom || this._dragSource;
            this._img = src.cloneNode(true);
            this._copyStyle(src, this._img);
            this._img.style.top = this._img.style.left = '-9999px';
            // if creating from drag source, apply offset and opacity
            if (!this._imgCustom) {
                var rc = src.getBoundingClientRect(), pt = this._getPoint(e);
                this._imgOffset = { x: pt.x - rc.left, y: pt.y - rc.top };
                this._img.style.opacity = DragDropTouch._OPACITY.toString();
            }
            // add image to document
            this._moveImage(e);
            document.body.appendChild(this._img);
        };
        // dispose of drag image element
        DragDropTouch.prototype._destroyImage = function () {
            if (this._img && this._img.parentElement) {
                this._img.parentElement.removeChild(this._img);
            }
            this._img = null;
            this._imgCustom = null;
        };
        // move the drag image element
        DragDropTouch.prototype._moveImage = function (e) {
            var _this = this;
            requestAnimationFrame(function () {
                if (_this._img) {
                    var pt = _this._getPoint(e, true), s = _this._img.style;
                    s.position = 'absolute';
                    s.pointerEvents = 'none';
                    s.zIndex = '999999';
                    s.left = Math.round(pt.x - _this._imgOffset.x) + 'px';
                    s.top = Math.round(pt.y - _this._imgOffset.y) + 'px';
                }
            });
        };
        // copy properties from an object to another
        DragDropTouch.prototype._copyProps = function (dst, src, props) {
            for (var i = 0; i < props.length; i++) {
                var p = props[i];
                dst[p] = src[p];
            }
        };
        DragDropTouch.prototype._copyStyle = function (src, dst) {
            // remove potentially troublesome attributes
            DragDropTouch._rmvAtts.forEach(function (att) {
                dst.removeAttribute(att);
            });
            // copy canvas content
            if (src instanceof HTMLCanvasElement) {
                var cSrc = src, cDst = dst;
                cDst.width = cSrc.width;
                cDst.height = cSrc.height;
                cDst.getContext('2d').drawImage(cSrc, 0, 0);
            }
            // copy style (without transitions)
            var cs = getComputedStyle(src);
            for (var i = 0; i < cs.length; i++) {
                var key = cs[i];
                if (key.indexOf('transition') < 0) {
                    dst.style[key] = cs[key];
                }
            }
            dst.style.pointerEvents = 'none';
            // and repeat for all children
            for (var i = 0; i < src.children.length; i++) {
                this._copyStyle(src.children[i], dst.children[i]);
            }
        };
        DragDropTouch.prototype._dispatchEvent = function (e, type, target) {
            if (e && target) {
                var evt = document.createEvent('Event'), t = e.touches ? e.touches[0] : e;
                evt.initEvent(type, true, true);
                evt.button = 0;
                evt.which = evt.buttons = 1;
                this._copyProps(evt, e, DragDropTouch._kbdProps);
                this._copyProps(evt, t, DragDropTouch._ptProps);
                evt.dataTransfer = this._dataTransfer;
                target.dispatchEvent(evt);
                return evt.defaultPrevented;
            }
            return false;
        };
        // gets an element's closest draggable ancestor
        DragDropTouch.prototype._closestDraggable = function (e) {
            for (; e; e = e.parentElement) {
                if (e.hasAttribute('draggable') && e.draggable) {
                    return e;
                }
            }
            return null;
        };
        return DragDropTouch;
    }());
    /*private*/ DragDropTouch._instance = new DragDropTouch(); // singleton
    // constants
    DragDropTouch._THRESHOLD = 5; // pixels to move before drag starts
    DragDropTouch._OPACITY = 0.5; // drag image opacity
    DragDropTouch._DBLCLICK = 500; // max ms between clicks in a double click
    DragDropTouch._CTXMENU = 900; // ms to hold before raising 'contextmenu' event
    DragDropTouch._ISPRESSHOLDMODE = false; // decides of press & hold mode presence
    DragDropTouch._PRESSHOLDAWAIT = 400; // ms to wait before press & hold is detected
    DragDropTouch._PRESSHOLDMARGIN = 25; // pixels that finger might shiver while pressing
    DragDropTouch._PRESSHOLDTHRESHOLD = 0; // pixels to move before drag starts
    // copy styles/attributes from drag source to drag image element
    DragDropTouch._rmvAtts = 'id,class,style,draggable'.split(',');
    // synthesize and dispatch an event
    // returns true if the event has been handled (e.preventDefault == true)
    DragDropTouch._kbdProps = 'altKey,ctrlKey,metaKey,shiftKey'.split(',');
    DragDropTouch._ptProps = 'pageX,pageY,clientX,clientY,screenX,screenY,offsetX,offsetY'.split(',');
    DragDropTouch_1.DragDropTouch = DragDropTouch;
})(DragDropTouch || (DragDropTouch = {}));


/***/ }),

/***/ 78273:
/*!*****************************************************!*\
  !*** ./runestone/dragndrop/js/dragndrop-i18n.en.js ***!
  \*****************************************************/
/***/ (() => {

$.i18n().load({
    en: {
        msg_dragndrop_correct_answer: "You are correct!",
        msg_dragndrop_incorrect_answer:
            "Incorret. You got $1 correct and $2 incorrect out of $3. You left $4 blank.",
        msg_dragndrop_check_me: "Check me",
        msg_dragndrop_reset: "Reset",
    },
});


/***/ }),

/***/ 26254:
/*!********************************************************!*\
  !*** ./runestone/dragndrop/js/dragndrop-i18n.pt-br.js ***!
  \********************************************************/
/***/ (() => {

$.i18n().load({
    "pt-br": {
        msg_dragndrop_correct_answer: "Correto!",
        msg_dragndrop_incorrect_answer:
            "Incorreto. Você teve $1 correto(s) e $2 incorreto(s) de $3. Você deixou $4 em branco.",
        msg_dragndrop_check_me: "Verificar",
        msg_dragndrop_reset: "Resetar",
    },
});


/***/ }),

/***/ 70225:
/*!*********************************************!*\
  !*** ./runestone/dragndrop/js/dragndrop.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ddList": () => (/* binding */ ddList),
/* harmony export */   "default": () => (/* binding */ DragNDrop)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _css_dragndrop_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/dragndrop.css */ 80329);
/* harmony import */ var _dragndrop_i18n_en_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dragndrop-i18n.en.js */ 78273);
/* harmony import */ var _dragndrop_i18n_en_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dragndrop_i18n_en_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dragndrop_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dragndrop-i18n.pt-br.js */ 26254);
/* harmony import */ var _dragndrop_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dragndrop_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DragDropTouch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DragDropTouch.js */ 33426);
/* harmony import */ var _DragDropTouch_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_DragDropTouch_js__WEBPACK_IMPORTED_MODULE_4__);
/*==========================================
=======     Master dragndrop.js     ========
============================================
===     This file contains the JS for    ===
=== the Runestone Drag n drop component. ===
============================================
===              Created by              ===
===           Isaiah Mayerchak           ===
===                7/6/15                ===
===              Brad MIller             ===
===                2/7/19                ===
==========================================*/








var ddList = {}; // Dictionary that contains all instances of dragndrop objects

class DragNDrop extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; // entire <ul> element that will be replaced by new HTML
        this.origElem = orig;
        this.divid = orig.id;
        this.useRunestoneServices = opts.useRunestoneServices;
        this.random = false;
        if ($(this.origElem).is("[data-random]")) {
            this.random = true;
        }
        this.feedback = "";
        this.dragPairArray = [];
        this.question = "";
        this.populate(); // Populates this.dragPairArray, this.feedback and this.question
        this.createNewElements();
        this.caption = "Drag-N-Drop";
        this.addCaption("runestone");
        if (typeof Prism !== "undefined") {
            Prism.highlightAllUnder(this.containerDiv);
        }
    }
    /*======================
    === Update variables ===
    ======================*/
    populate() {
        for (var i = 0; i < this.origElem.childNodes.length; i++) {
            if (
                $(this.origElem.childNodes[i]).data("subcomponent") ===
                "dropzone"
            ) {
                var tmp = $(this.origElem).find(
                    `#${$(this.origElem.childNodes[i]).attr("for")}`
                )[0];
                var replaceSpan = document.createElement("span");
                replaceSpan.innerHTML = tmp.innerHTML;
                replaceSpan.id = this.divid + tmp.id;
                $(replaceSpan).attr("draggable", "true");
                $(replaceSpan).addClass("draggable-drag");
                var otherReplaceSpan = document.createElement("span");
                otherReplaceSpan.innerHTML =
                    this.origElem.childNodes[i].innerHTML;
                $(otherReplaceSpan).addClass("draggable-drop");
                this.setEventListeners(replaceSpan, otherReplaceSpan);
                var tmpArr = [];
                tmpArr.push(replaceSpan);
                tmpArr.push(otherReplaceSpan);
                this.dragPairArray.push(tmpArr);
            } else if (
                $(this.origElem.childNodes[i]).data("subcomponent") ===
                "question"
            ) {
                this.question = this.origElem.childNodes[i].innerHTML;
            } else if (
                $(this.origElem.childNodes[i]).data("subcomponent") ===
                "feedback"
            ) {
                this.feedback = this.origElem.childNodes[i].innerHTML;
            }
        }
    }
    /*========================================
    == Create new HTML elements and replace ==
    ==      original element with them      ==
    ========================================*/
    createNewElements() {
        this.containerDiv = document.createElement("div");
        this.containerDiv.id = this.divid;
        $(this.containerDiv).addClass("draggable-container");
        $(this.containerDiv).html(this.question);
        this.containerDiv.appendChild(document.createElement("br"));
        this.dragDropWrapDiv = document.createElement("div"); // Holds the draggables/dropzones, prevents feedback from bleeding in
        $(this.dragDropWrapDiv).css("display", "block");
        this.containerDiv.appendChild(this.dragDropWrapDiv);
        this.draggableDiv = document.createElement("div");
        $(this.draggableDiv).addClass("rsdraggable dragzone");
        this.addDragDivListeners();
        this.dropZoneDiv = document.createElement("div");
        $(this.dropZoneDiv).addClass("rsdraggable");
        this.dragDropWrapDiv.appendChild(this.draggableDiv);
        this.dragDropWrapDiv.appendChild(this.dropZoneDiv);
        this.createButtons();
        this.checkServer("dragNdrop", true);
        self = this;
        if (typeof runestoneMathready !== "undefined") {
            runestoneMathReady.then(() => self.queueMathJax(self.containerDiv));
        }
    }
    finishSettingUp() {
        this.appendReplacementSpans();
        this.renderFeedbackDiv();
        $(this.origElem).replaceWith(this.containerDiv);
        if (!this.hasStoredDropzones) {
            this.minheight = $(this.draggableDiv).height();
        }
        this.draggableDiv.style.minHeight = this.minheight.toString() + "px";
        if ($(this.dropZoneDiv).height() > this.minheight) {
            this.dragDropWrapDiv.style.minHeight =
                $(this.dropZoneDiv).height().toString() + "px";
        } else {
            this.dragDropWrapDiv.style.minHeight =
                this.minheight.toString() + "px";
        }
    }
    addDragDivListeners() {
        let self = this;
        this.draggableDiv.addEventListener(
            "dragover",
            function (ev) {
                ev.preventDefault();
                if ($(this.draggableDiv).hasClass("possibleDrop")) {
                    return;
                }
                $(this.draggableDiv).addClass("possibleDrop");
            }.bind(this)
        );
        this.draggableDiv.addEventListener(
            "drop",
            function (ev) {
                self.isAnswered = true;
                ev.preventDefault();
                if ($(this.draggableDiv).hasClass("possibleDrop")) {
                    $(this.draggableDiv).removeClass("possibleDrop");
                }
                var data = ev.dataTransfer.getData("draggableID");
                var draggedSpan = document.getElementById(data);
                if (
                    !$(this.draggableDiv).has(draggedSpan).length &&
                    !this.strangerDanger(draggedSpan)
                ) {
                    // Make sure element isn't already there--prevents erros w/appending child
                    this.draggableDiv.appendChild(draggedSpan);
                }
            }.bind(this)
        );
        this.draggableDiv.addEventListener(
            "dragleave",
            function (e) {
                if (!$(this.draggableDiv).hasClass("possibleDrop")) {
                    return;
                }
                $(this.draggableDiv).removeClass("possibleDrop");
            }.bind(this)
        );
    }
    createButtons() {
        this.buttonDiv = document.createElement("div");
        this.submitButton = document.createElement("button"); // Check me button
        this.submitButton.textContent = $.i18n("msg_dragndrop_check_me");
        $(this.submitButton).attr({
            class: "btn btn-success drag-button",
            name: "do answer",
            type: "button",
        });
        this.submitButton.onclick = function () {
            this.checkCurrentAnswer();
            this.renderFeedback();
            this.logCurrentAnswer();
        }.bind(this);
        this.resetButton = document.createElement("button"); // Check me button
        this.resetButton.textContent = $.i18n("msg_dragndrop_reset");
        $(this.resetButton).attr({
            class: "btn btn-default drag-button drag-reset",
            name: "do answer",
        });
        this.resetButton.onclick = function () {
            this.resetDraggables();
        }.bind(this);
        this.buttonDiv.appendChild(this.submitButton);
        this.buttonDiv.appendChild(this.resetButton);
        this.containerDiv.appendChild(this.buttonDiv);
    }
    appendReplacementSpans() {
        this.createIndexArray();
        this.randomizeIndexArray();
        for (let i = 0; i < this.dragPairArray.length; i++) {
            if (this.hasStoredDropzones) {
                if (
                    $.inArray(this.indexArray[i][0], this.pregnantIndexArray) <
                    0
                ) {
                    this.draggableDiv.appendChild(
                        this.dragPairArray[this.indexArray[i]][0]
                    );
                }
            } else {
                this.draggableDiv.appendChild(
                    this.dragPairArray[this.indexArray[i]][0]
                );
            }
        }
        this.randomizeIndexArray();
        for (let i = 0; i < this.dragPairArray.length; i++) {
            if (this.hasStoredDropzones) {
                if (this.pregnantIndexArray[this.indexArray[i]] !== "-1") {
                    this.dragPairArray[this.indexArray[i]][1].appendChild(
                        this.dragPairArray[
                            this.pregnantIndexArray[this.indexArray[i]]
                        ][0]
                    );
                }
            }
            this.dropZoneDiv.appendChild(
                this.dragPairArray[this.indexArray[i]][1]
            );
        }
    }
    setEventListeners(dgSpan, dpSpan) {
        // Adds HTML5 "drag and drop" UI functionality
        let self = this;
        dgSpan.addEventListener("dragstart", function (ev) {
            ev.dataTransfer.setData("draggableID", ev.target.id);
        });
        dgSpan.addEventListener("dragover", function (ev) {
            ev.preventDefault();
        });
        dgSpan.addEventListener(
            "drop",
            function (ev) {
                self.isAnswered = true;
                ev.preventDefault();
                var data = ev.dataTransfer.getData("draggableID");
                var draggedSpan = document.getElementById(data);
                if (
                    this.hasNoDragChild(ev.target) &&
                    draggedSpan != ev.target &&
                    !this.strangerDanger(draggedSpan)
                ) {
                    // Make sure element isn't already there--prevents erros w/appending child
                    this.draggableDiv.appendChild(draggedSpan);
                }
            }.bind(this)
        );
        dpSpan.addEventListener(
            "dragover",
            function (ev) {
                self.isAnswered = true;
                ev.preventDefault();
                if ($(ev.target).hasClass("possibleDrop")) {
                    return;
                }
                if (
                    $(ev.target).hasClass("draggable-drop") &&
                    this.hasNoDragChild(ev.target)
                ) {
                    $(ev.target).addClass("possibleDrop");
                }
            }.bind(this)
        );
        dpSpan.addEventListener("dragleave", function (ev) {
            self.isAnswered = true;
            ev.preventDefault();
            if (!$(ev.target).hasClass("possibleDrop")) {
                return;
            }
            $(ev.target).removeClass("possibleDrop");
        });
        dpSpan.addEventListener(
            "drop",
            function (ev) {
                self.isAnswered = true;
                ev.preventDefault();
                if ($(ev.target).hasClass("possibleDrop")) {
                    $(ev.target).removeClass("possibleDrop");
                }
                var data = ev.dataTransfer.getData("draggableID");
                var draggedSpan = document.getElementById(data);
                if (
                    $(ev.target).hasClass("draggable-drop") &&
                    this.hasNoDragChild(ev.target) &&
                    !this.strangerDanger(draggedSpan)
                ) {
                    // Make sure element isn't already there--prevents erros w/appending child
                    ev.target.appendChild(draggedSpan);
                }
            }.bind(this)
        );
    }
    renderFeedbackDiv() {
        if (!this.feedBackDiv) {
            this.feedBackDiv = document.createElement("div");
            this.feedBackDiv.id = this.divid + "_feedback";
            this.containerDiv.appendChild(document.createElement("br"));
            this.containerDiv.appendChild(this.feedBackDiv);
        }
    }
    /*=======================
    == Auxiliary functions ==
    =======================*/
    strangerDanger(testSpan) {
        // Returns true if the test span doesn't belong to this instance of DragNDrop
        var strangerDanger = true;
        for (var i = 0; i < this.dragPairArray.length; i++) {
            if (testSpan === this.dragPairArray[i][0]) {
                strangerDanger = false;
            }
        }
        return strangerDanger;
    }
    hasNoDragChild(parent) {
        // Ensures that each dropZoneDiv can have only one draggable child
        var counter = 0;
        for (var i = 0; i < parent.childNodes.length; i++) {
            if ($(parent.childNodes[i]).attr("draggable") === "true") {
                counter++;
            }
        }
        if (counter >= 1) {
            return false;
        } else {
            return true;
        }
    }
    createIndexArray() {
        this.indexArray = [];
        for (var i = 0; i < this.dragPairArray.length; i++) {
            this.indexArray.push(i);
        }
    }
    randomizeIndexArray() {
        // Shuffles around indices so the matchable elements aren't in a predictable order
        var currentIndex = this.indexArray.length,
            temporaryValue,
            randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.indexArray[currentIndex];
            this.indexArray[currentIndex] = this.indexArray[randomIndex];
            this.indexArray[randomIndex] = temporaryValue;
        }
    }
    /*==============================
    == Reset button functionality ==
    ==============================*/
    resetDraggables() {
        for (var i = 0; i < this.dragPairArray.length; i++) {
            for (
                var j = 0;
                j < this.dragPairArray[i][1].childNodes.length;
                j++
            ) {
                if (
                    $(this.dragPairArray[i][1].childNodes[j]).attr(
                        "draggable"
                    ) === "true"
                ) {
                    this.draggableDiv.appendChild(
                        this.dragPairArray[i][1].childNodes[j]
                    );
                }
            }
        }
        this.feedBackDiv.style.display = "none";
    }
    /*===========================
    == Evaluation and feedback ==
    ===========================*/

    checkCurrentAnswer() {
        this.correct = true;
        this.unansweredNum = 0;
        this.incorrectNum = 0;
        this.dragNum = this.dragPairArray.length;
        for (var i = 0; i < this.dragPairArray.length; i++) {
            if (
                !$(this.dragPairArray[i][1]).has(this.dragPairArray[i][0])
                    .length
            ) {
                this.correct = false;
                this.incorrectNum++;
            }
            if (this.hasNoDragChild(this.dragPairArray[i][1])) {
                this.unansweredNum++;
                this.incorrectNum -= 1;
            }
        }
        this.correctNum = this.dragNum - this.incorrectNum - this.unansweredNum;
        this.percent = this.correctNum / this.dragPairArray.length;
        this.setLocalStorage({ correct: this.correct ? "T" : "F" });
    }

    async logCurrentAnswer(sid) {
        let answer = this.pregnantIndexArray.join(";");
        let data = {
            event: "dragNdrop",
            act: answer,
            answer: answer,
            min_height: this.minheight,
            div_id: this.divid,
            correct: this.correct,
            correctNum: this.correctNum,
            dragNum: this.dragNum,
        };
        if (typeof sid !== "undefined") {
            data.sid = sid;
        }
        await this.logBookEvent(data);
    }
    renderFeedback() {
        for (var i = 0; i < this.dragPairArray.length; i++) {
            if (
                !$(this.dragPairArray[i][1]).has(this.dragPairArray[i][0])
                    .length
            ) {
                $(this.dragPairArray[i][1]).addClass("drop-incorrect");
            } else {
                $(this.dragPairArray[i][1]).removeClass("drop-incorrect");
            }
        }

        if (!this.feedBackDiv) {
            this.renderFeedbackDiv();
        }
        this.feedBackDiv.style.display = "block";
        if (this.correct) {
            var msgCorrect = $.i18n("msg_dragndrop_correct_answer");
            $(this.feedBackDiv).html(msgCorrect);
            $(this.feedBackDiv).attr(
                "class",
                "alert alert-info draggable-feedback"
            );
        } else {
            var msgIncorrect = $.i18n(
                $.i18n("msg_dragndrop_incorrect_answer"),
                this.correctNum,
                this.incorrectNum,
                this.dragNum,
                this.unansweredNum
            );
            $(this.feedBackDiv).html(msgIncorrect + " " + this.feedback);
            $(this.feedBackDiv).attr(
                "class",
                "alert alert-danger draggable-feedback"
            );
        }
    }
    /*===================================
    === Checking/restoring from storage ===
    ===================================*/
    restoreAnswers(data) {
        // Restore answers from storage retrieval done in RunestoneBase
        this.hasStoredDropzones = true;
        this.minheight = data.min_height;
        this.pregnantIndexArray = data.answer.split(";");
        this.finishSettingUp();
    }
    checkLocalStorage() {
        if (this.graderactive) {
            return;
        }
        var storedObj;
        this.hasStoredDropzones = false;
        var len = localStorage.length;
        if (len > 0) {
            var ex = localStorage.getItem(this.localStorageKey());
            if (ex !== null) {
                this.hasStoredDropzones = true;
                try {
                    storedObj = JSON.parse(ex);
                    this.minheight = storedObj.min_height;
                } catch (err) {
                    // error while parsing; likely due to bad value stored in storage
                    console.log(err.message);
                    localStorage.removeItem(this.localStorageKey());
                    this.hasStoredDropzones = false;
                    this.finishSettingUp();
                    return;
                }
                this.pregnantIndexArray = storedObj.answer.split(";");
                if (this.useRunestoneServices) {
                    // store answer in database
                    var answer = this.pregnantIndexArray.join(";");
                    this.logBookEvent({
                        event: "dragNdrop",
                        act: answer,
                        answer: answer,
                        min_height: this.minheight,
                        div_id: this.divid,
                        correct: storedObj.correct,
                    });
                }
            }
        }
        this.finishSettingUp();
    }

    setLocalStorage(data) {
        if (data.answer === undefined) {
            // If we didn't load from the server, we must generate the data
            this.pregnantIndexArray = [];
            for (var i = 0; i < this.dragPairArray.length; i++) {
                if (!this.hasNoDragChild(this.dragPairArray[i][1])) {
                    for (var j = 0; j < this.dragPairArray.length; j++) {
                        if (
                            $(this.dragPairArray[i][1]).has(
                                this.dragPairArray[j][0]
                            ).length
                        ) {
                            this.pregnantIndexArray.push(j);
                        }
                    }
                } else {
                    this.pregnantIndexArray.push(-1);
                }
            }
        }
        var timeStamp = new Date();
        var correct = data.correct;
        var storageObj = {
            answer: this.pregnantIndexArray.join(";"),
            min_height: this.minheight,
            timestamp: timeStamp,
            correct: correct,
        };
        localStorage.setItem(
            this.localStorageKey(),
            JSON.stringify(storageObj)
        );
    }

    disableInteraction() {
        $(this.resetButton).hide();
        for (var i = 0; i < this.dragPairArray.length; i++) {
            // No more dragging
            $(this.dragPairArray[i][0]).attr("draggable", "false");
            $(this.dragPairArray[i][0]).css("cursor", "initial");
        }
    }
}

/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
$(document).on("runestone:login-complete", function () {
    $("[data-component=dragndrop]").each(function (index) {
        var opts = {
            orig: this,
            useRunestoneServices: eBookConfig.useRunestoneServices,
        };
        if ($(this).closest("[data-component=timedAssessment]").length == 0) {
            // If this element exists within a timed component, don't render it here
            try {
                ddList[this.id] = new DragNDrop(opts);
            } catch (err) {
                console.log(`Error rendering DragNDrop Problem ${this.id}`);
            }
        }
    });
});


/***/ }),

/***/ 47496:
/*!********************************************!*\
  !*** ./runestone/dragndrop/js/timeddnd.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimedDragNDrop)
/* harmony export */ });
/* harmony import */ var _dragndrop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragndrop.js */ 70225);




class TimedDragNDrop extends _dragndrop_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        this.finishSettingUp();
        this.renderTimedIcon(this.containerDiv);
        this.hideButtons();
    }
    hideButtons() {
        $(this.submitButton).hide();
    }
    renderTimedIcon(component) {
        // renders the clock icon on timed components.    The component parameter
        // is the element that the icon should be appended to.
        var timeIconDiv = document.createElement("div");
        var timeIcon = document.createElement("img");
        $(timeIcon).attr({
            src: "../_static/clock.png",
            style: "width:15px;height:15px",
        });
        timeIconDiv.className = "timeTip";
        timeIconDiv.title = "";
        timeIconDiv.appendChild(timeIcon);
        $(component).prepend(timeIconDiv);
    }
    checkCorrectTimed() {
        // Returns if the question was correct.    Used for timed assessment grading.
        if (this.unansweredNum === this.dragPairArray.length) {
            this.correct = null;
        }
        switch (this.correct) {
            case true:
                return "T";
            case false:
                return "F";
            default:
                return null;
        }
    }
    hideFeedback() {
        $(this.feedBackDiv).hide();
    }
}

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}
window.component_factory["dragndrop"] = function (opts) {
    if (opts.timed) {
        return new TimedDragNDrop(opts);
    }
    return new _dragndrop_js__WEBPACK_IMPORTED_MODULE_0__["default"](opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX2RyYWduZHJvcF9qc190aW1lZGRuZF9qcy44ZWY0NDNlYTNlYTIzNTdlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsaUNBQWlDO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrQkFBK0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrQkFBK0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFEQUFTO0FBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9kcmFnbmRyb3AvY3NzL2RyYWduZHJvcC5jc3M/NmQ1YyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2RyYWduZHJvcC9qcy9EcmFnRHJvcFRvdWNoLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvZHJhZ25kcm9wL2pzL2RyYWduZHJvcC1pMThuLmVuLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvZHJhZ25kcm9wL2pzL2RyYWduZHJvcC1pMThuLnB0LWJyLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvZHJhZ25kcm9wL2pzL2RyYWduZHJvcC5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2RyYWduZHJvcC9qcy90aW1lZGRuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJ2YXIgRHJhZ0Ryb3BUb3VjaDtcclxuKGZ1bmN0aW9uIChEcmFnRHJvcFRvdWNoXzEpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIC8qKlxyXG4gICAgICogT2JqZWN0IHVzZWQgdG8gaG9sZCB0aGUgZGF0YSB0aGF0IGlzIGJlaW5nIGRyYWdnZWQgZHVyaW5nIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBJdCBtYXkgaG9sZCBvbmUgb3IgbW9yZSBkYXRhIGl0ZW1zIG9mIGRpZmZlcmVudCB0eXBlcy4gRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXRcclxuICAgICAqIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9ucyBhbmQgZGF0YSB0cmFuc2ZlciBvYmplY3RzLCBzZWVcclxuICAgICAqIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRGF0YVRyYW5zZmVyXCI+SFRNTCBEcmFnIGFuZCBEcm9wIEFQSTwvYT4uXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBvYmplY3QgaXMgY3JlYXRlZCBhdXRvbWF0aWNhbGx5IGJ5IHRoZSBAc2VlOkRyYWdEcm9wVG91Y2ggc2luZ2xldG9uIGFuZCBpc1xyXG4gICAgICogYWNjZXNzaWJsZSB0aHJvdWdoIHRoZSBAc2VlOmRhdGFUcmFuc2ZlciBwcm9wZXJ0eSBvZiBhbGwgZHJhZyBldmVudHMuXHJcbiAgICAgKi9cclxuICAgIHZhciBEYXRhVHJhbnNmZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIERhdGFUcmFuc2ZlcigpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHJvcEVmZmVjdCA9ICdtb3ZlJztcclxuICAgICAgICAgICAgdGhpcy5fZWZmZWN0QWxsb3dlZCA9ICdhbGwnO1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShEYXRhVHJhbnNmZXIucHJvdG90eXBlLCBcImRyb3BFZmZlY3RcIiwge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogR2V0cyBvciBzZXRzIHRoZSB0eXBlIG9mIGRyYWctYW5kLWRyb3Agb3BlcmF0aW9uIGN1cnJlbnRseSBzZWxlY3RlZC5cclxuICAgICAgICAgICAgICogVGhlIHZhbHVlIG11c3QgYmUgJ25vbmUnLCAgJ2NvcHknLCAgJ2xpbmsnLCBvciAnbW92ZScuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kcm9wRWZmZWN0O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZHJvcEVmZmVjdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRGF0YVRyYW5zZmVyLnByb3RvdHlwZSwgXCJlZmZlY3RBbGxvd2VkXCIsIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEdldHMgb3Igc2V0cyB0aGUgdHlwZXMgb2Ygb3BlcmF0aW9ucyB0aGF0IGFyZSBwb3NzaWJsZS5cclxuICAgICAgICAgICAgICogTXVzdCBiZSBvbmUgb2YgJ25vbmUnLCAnY29weScsICdjb3B5TGluaycsICdjb3B5TW92ZScsICdsaW5rJyxcclxuICAgICAgICAgICAgICogJ2xpbmtNb3ZlJywgJ21vdmUnLCAnYWxsJyBvciAndW5pbml0aWFsaXplZCcuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9lZmZlY3RBbGxvd2VkO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWZmZWN0QWxsb3dlZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRGF0YVRyYW5zZmVyLnByb3RvdHlwZSwgXCJ0eXBlc1wiLCB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBHZXRzIGFuIGFycmF5IG9mIHN0cmluZ3MgZ2l2aW5nIHRoZSBmb3JtYXRzIHRoYXQgd2VyZSBzZXQgaW4gdGhlIEBzZWU6ZHJhZ3N0YXJ0IGV2ZW50LlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlbW92ZXMgdGhlIGRhdGEgYXNzb2NpYXRlZCB3aXRoIGEgZ2l2ZW4gdHlwZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIFRoZSB0eXBlIGFyZ3VtZW50IGlzIG9wdGlvbmFsLiBJZiB0aGUgdHlwZSBpcyBlbXB0eSBvciBub3Qgc3BlY2lmaWVkLCB0aGUgZGF0YVxyXG4gICAgICAgICAqIGFzc29jaWF0ZWQgd2l0aCBhbGwgdHlwZXMgaXMgcmVtb3ZlZC4gSWYgZGF0YSBmb3IgdGhlIHNwZWNpZmllZCB0eXBlIGRvZXMgbm90IGV4aXN0LFxyXG4gICAgICAgICAqIG9yIHRoZSBkYXRhIHRyYW5zZmVyIGNvbnRhaW5zIG5vIGRhdGEsIHRoaXMgbWV0aG9kIHdpbGwgaGF2ZSBubyBlZmZlY3QuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0gdHlwZSBUeXBlIG9mIGRhdGEgdG8gcmVtb3ZlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIERhdGFUcmFuc2Zlci5wcm90b3R5cGUuY2xlYXJEYXRhID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2RhdGFbdHlwZS50b0xvd2VyQ2FzZSgpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0cmlldmVzIHRoZSBkYXRhIGZvciBhIGdpdmVuIHR5cGUsIG9yIGFuIGVtcHR5IHN0cmluZyBpZiBkYXRhIGZvciB0aGF0IHR5cGUgZG9lc1xyXG4gICAgICAgICAqIG5vdCBleGlzdCBvciB0aGUgZGF0YSB0cmFuc2ZlciBjb250YWlucyBubyBkYXRhLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHR5cGUgVHlwZSBvZiBkYXRhIHRvIHJldHJpZXZlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIERhdGFUcmFuc2Zlci5wcm90b3R5cGUuZ2V0RGF0YSA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhW3R5cGUudG9Mb3dlckNhc2UoKV0gfHwgJyc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXQgdGhlIGRhdGEgZm9yIGEgZ2l2ZW4gdHlwZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEZvciBhIGxpc3Qgb2YgcmVjb21tZW5kZWQgZHJhZyB0eXBlcywgcGxlYXNlIHNlZVxyXG4gICAgICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0d1aWRlL0hUTUwvUmVjb21tZW5kZWRfRHJhZ19UeXBlcy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB0eXBlIFR5cGUgb2YgZGF0YSB0byBhZGQuXHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIERhdGEgdG8gYWRkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIERhdGFUcmFuc2Zlci5wcm90b3R5cGUuc2V0RGF0YSA9IGZ1bmN0aW9uICh0eXBlLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhW3R5cGUudG9Mb3dlckNhc2UoKV0gPSB2YWx1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNldCB0aGUgaW1hZ2UgdG8gYmUgdXNlZCBmb3IgZHJhZ2dpbmcgaWYgYSBjdXN0b20gb25lIGlzIGRlc2lyZWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0gaW1nIEFuIGltYWdlIGVsZW1lbnQgdG8gdXNlIGFzIHRoZSBkcmFnIGZlZWRiYWNrIGltYWdlLlxyXG4gICAgICAgICAqIEBwYXJhbSBvZmZzZXRYIFRoZSBob3Jpem9udGFsIG9mZnNldCB3aXRoaW4gdGhlIGltYWdlLlxyXG4gICAgICAgICAqIEBwYXJhbSBvZmZzZXRZIFRoZSB2ZXJ0aWNhbCBvZmZzZXQgd2l0aGluIHRoZSBpbWFnZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBEYXRhVHJhbnNmZXIucHJvdG90eXBlLnNldERyYWdJbWFnZSA9IGZ1bmN0aW9uIChpbWcsIG9mZnNldFgsIG9mZnNldFkpIHtcclxuICAgICAgICAgICAgdmFyIGRkdCA9IERyYWdEcm9wVG91Y2guX2luc3RhbmNlO1xyXG4gICAgICAgICAgICBkZHQuX2ltZ0N1c3RvbSA9IGltZztcclxuICAgICAgICAgICAgZGR0Ll9pbWdPZmZzZXQgPSB7IHg6IG9mZnNldFgsIHk6IG9mZnNldFkgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBEYXRhVHJhbnNmZXI7XHJcbiAgICB9KCkpO1xyXG4gICAgRHJhZ0Ryb3BUb3VjaF8xLkRhdGFUcmFuc2ZlciA9IERhdGFUcmFuc2ZlcjtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIGNsYXNzIHRoYXQgYWRkcyBzdXBwb3J0IGZvciB0b3VjaC1iYXNlZCBIVE1MNSBkcmFnL2Ryb3Agb3BlcmF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgQHNlZTpEcmFnRHJvcFRvdWNoIGNsYXNzIGxpc3RlbnMgdG8gdG91Y2ggZXZlbnRzIGFuZCByYWlzZXMgdGhlXHJcbiAgICAgKiBhcHByb3ByaWF0ZSBIVE1MNSBkcmFnL2Ryb3AgZXZlbnRzIGFzIGlmIHRoZSBldmVudHMgaGFkIGJlZW4gY2F1c2VkXHJcbiAgICAgKiBieSBtb3VzZSBhY3Rpb25zLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBwdXJwb3NlIG9mIHRoaXMgY2xhc3MgaXMgdG8gZW5hYmxlIHVzaW5nIGV4aXN0aW5nLCBzdGFuZGFyZCBIVE1MNVxyXG4gICAgICogZHJhZy9kcm9wIGNvZGUgb24gbW9iaWxlIGRldmljZXMgcnVubmluZyBJT1Mgb3IgQW5kcm9pZC5cclxuICAgICAqXHJcbiAgICAgKiBUbyB1c2UsIGluY2x1ZGUgdGhlIERyYWdEcm9wVG91Y2guanMgZmlsZSBvbiB0aGUgcGFnZS4gVGhlIGNsYXNzIHdpbGxcclxuICAgICAqIGF1dG9tYXRpY2FsbHkgc3RhcnQgbW9uaXRvcmluZyB0b3VjaCBldmVudHMgYW5kIHdpbGwgcmFpc2UgdGhlIEhUTUw1XHJcbiAgICAgKiBkcmFnIGRyb3AgZXZlbnRzIChkcmFnc3RhcnQsIGRyYWdlbnRlciwgZHJhZ2xlYXZlLCBkcm9wLCBkcmFnZW5kKSB3aGljaFxyXG4gICAgICogc2hvdWxkIGJlIGhhbmRsZWQgYnkgdGhlIGFwcGxpY2F0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEZvciBkZXRhaWxzIGFuZCBleGFtcGxlcyBvbiBIVE1MIGRyYWcgYW5kIGRyb3AsIHNlZVxyXG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvR3VpZGUvSFRNTC9EcmFnX29wZXJhdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIHZhciBEcmFnRHJvcFRvdWNoID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbml0aWFsaXplcyB0aGUgc2luZ2xlIGluc3RhbmNlIG9mIHRoZSBAc2VlOkRyYWdEcm9wVG91Y2ggY2xhc3MuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gRHJhZ0Ryb3BUb3VjaCgpIHtcclxuICAgICAgICAgICAgdGhpcy5fbGFzdENsaWNrID0gMDtcclxuICAgICAgICAgICAgLy8gZW5mb3JjZSBzaW5nbGV0b24gcGF0dGVyblxyXG4gICAgICAgICAgICBpZiAoRHJhZ0Ryb3BUb3VjaC5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdEcmFnRHJvcFRvdWNoIGluc3RhbmNlIGFscmVhZHkgY3JlYXRlZC4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGRldGVjdCBwYXNzaXZlIGV2ZW50IHN1cHBvcnRcclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvaXNzdWVzLzE4OTRcclxuICAgICAgICAgICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgZnVuY3Rpb24gKCkgeyB9LCB7XHJcbiAgICAgICAgICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gbGlzdGVuIHRvIHRvdWNoIGV2ZW50c1xyXG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZCA9IGRvY3VtZW50LCBcclxuICAgICAgICAgICAgICAgICAgICB0cyA9IHRoaXMuX3RvdWNoc3RhcnQuYmluZCh0aGlzKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgdG0gPSB0aGlzLl90b3VjaG1vdmUuYmluZCh0aGlzKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgdGUgPSB0aGlzLl90b3VjaGVuZC5iaW5kKHRoaXMpLCBcclxuICAgICAgICAgICAgICAgICAgICBvcHQgPSBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IGZhbHNlLCBjYXB0dXJlOiBmYWxzZSB9IDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0cywgb3B0KTtcclxuICAgICAgICAgICAgICAgIGQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG0sIG9wdCk7XHJcbiAgICAgICAgICAgICAgICBkLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGUpO1xyXG4gICAgICAgICAgICAgICAgZC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXRzIGEgcmVmZXJlbmNlIHRvIHRoZSBAc2VlOkRyYWdEcm9wVG91Y2ggc2luZ2xldG9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIERyYWdEcm9wVG91Y2guZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBEcmFnRHJvcFRvdWNoLl9pbnN0YW5jZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vICoqIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAgRHJhZ0Ryb3BUb3VjaC5wcm90b3R5cGUuX3RvdWNoc3RhcnQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2hvdWxkSGFuZGxlKGUpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByYWlzZSBkb3VibGUtY2xpY2sgYW5kIHByZXZlbnQgem9vbWluZ1xyXG4gICAgICAgICAgICAgICAgaWYgKERhdGUubm93KCkgLSB0aGlzLl9sYXN0Q2xpY2sgPCBEcmFnRHJvcFRvdWNoLl9EQkxDTElDSykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXNwYXRjaEV2ZW50KGUsICdkYmxjbGljaycsIGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjbGVhciBhbGwgdmFyaWFibGVzXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gZ2V0IG5lYXJlc3QgZHJhZ2dhYmxlIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIHZhciBzcmMgPSB0aGlzLl9jbG9zZXN0RHJhZ2dhYmxlKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmIChzcmMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBnaXZlIGNhbGxlciBhIGNoYW5jZSB0byBoYW5kbGUgdGhlIGhvdmVyL21vdmUgZXZlbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9kaXNwYXRjaEV2ZW50KGUsICdtb3VzZW1vdmUnLCBlLnRhcmdldCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX2Rpc3BhdGNoRXZlbnQoZSwgJ21vdXNlZG93bicsIGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgcmVhZHkgdG8gc3RhcnQgZHJhZ2dpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ1NvdXJjZSA9IHNyYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHREb3duID0gdGhpcy5fZ2V0UG9pbnQoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RUb3VjaCA9IGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvdyBjb250ZXh0IG1lbnUgaWYgdGhlIHVzZXIgaGFzbid0IHN0YXJ0ZWQgZHJhZ2dpbmcgYWZ0ZXIgYSB3aGlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fZHJhZ1NvdXJjZSA9PSBzcmMgJiYgX3RoaXMuX2ltZyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLl9kaXNwYXRjaEV2ZW50KGUsICdjb250ZXh0bWVudScsIHNyYykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3Jlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBEcmFnRHJvcFRvdWNoLl9DVFhNRU5VKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKERyYWdEcm9wVG91Y2guX0lTUFJFU1NIT0xETU9ERSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJlc3NIb2xkSW50ZXJ2YWwgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5faXNEcmFnRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3RvdWNobW92ZShlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIERyYWdEcm9wVG91Y2guX1BSRVNTSE9MREFXQUlUKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgRHJhZ0Ryb3BUb3VjaC5wcm90b3R5cGUuX3RvdWNobW92ZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zaG91bGRDYW5jZWxQcmVzc0hvbGRNb3ZlKGUpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5fcmVzZXQoKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Nob3VsZEhhbmRsZU1vdmUoZSkgfHwgdGhpcy5fc2hvdWxkSGFuZGxlUHJlc3NIb2xkTW92ZShlKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gc2VlIGlmIHRhcmdldCB3YW50cyB0byBoYW5kbGUgbW92ZVxyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuX2dldFRhcmdldChlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXNwYXRjaEV2ZW50KGUsICdtb3VzZW1vdmUnLCB0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFzdFRvdWNoID0gZTtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gc3RhcnQgZHJhZ2dpbmdcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnU291cmNlICYmICF0aGlzLl9pbWcgJiYgdGhpcy5fc2hvdWxkU3RhcnREcmFnZ2luZyhlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoZSwgJ2RyYWdzdGFydCcsIHRoaXMuX2RyYWdTb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUltYWdlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoZSwgJ2RyYWdlbnRlcicsIHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjb250aW51ZSBkcmFnZ2luZ1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2ltZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RUb3VjaCA9IGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IHNjcm9sbGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoZSwgJ2RyYWcnLCB0aGlzLl9kcmFnU291cmNlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ICE9IHRoaXMuX2xhc3RUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCh0aGlzLl9sYXN0VG91Y2gsICdkcmFnbGVhdmUnLCB0aGlzLl9sYXN0VGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudChlLCAnZHJhZ2VudGVyJywgdGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFzdFRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW92ZUltYWdlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzRHJvcFpvbmUgPSB0aGlzLl9kaXNwYXRjaEV2ZW50KGUsICdkcmFnb3ZlcicsIHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIERyYWdEcm9wVG91Y2gucHJvdG90eXBlLl90b3VjaGVuZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zaG91bGRIYW5kbGUoZSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNlZSBpZiB0YXJnZXQgd2FudHMgdG8gaGFuZGxlIHVwXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGlzcGF0Y2hFdmVudCh0aGlzLl9sYXN0VG91Y2gsICdtb3VzZXVwJywgZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHVzZXIgY2xpY2tlZCB0aGUgZWxlbWVudCBidXQgZGlkbid0IGRyYWcsIHNvIGNsZWFyIHRoZSBzb3VyY2UgYW5kIHNpbXVsYXRlIGEgY2xpY2tcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faW1nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ1NvdXJjZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCh0aGlzLl9sYXN0VG91Y2gsICdjbGljaycsIGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0Q2xpY2sgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZmluaXNoIGRyYWdnaW5nXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95SW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnU291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudHlwZS5pbmRleE9mKCdjYW5jZWwnKSA8IDAgJiYgdGhpcy5faXNEcm9wWm9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KHRoaXMuX2xhc3RUb3VjaCwgJ2Ryb3AnLCB0aGlzLl9sYXN0VGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCh0aGlzLl9sYXN0VG91Y2gsICdkcmFnZW5kJywgdGhpcy5fZHJhZ1NvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gKiogdXRpbGl0aWVzXHJcbiAgICAgICAgLy8gaWdub3JlIGV2ZW50cyB0aGF0IGhhdmUgYmVlbiBoYW5kbGVkIG9yIHRoYXQgaW52b2x2ZSBtb3JlIHRoYW4gb25lIHRvdWNoXHJcbiAgICAgICAgRHJhZ0Ryb3BUb3VjaC5wcm90b3R5cGUuX3Nob3VsZEhhbmRsZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlICYmXHJcbiAgICAgICAgICAgICAgICAhZS5kZWZhdWx0UHJldmVudGVkICYmXHJcbiAgICAgICAgICAgICAgICBlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA8IDI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gdXNlIHJlZ3VsYXIgY29uZGl0aW9uIG91dHNpZGUgb2YgcHJlc3MgJiBob2xkIG1vZGVcclxuICAgICAgICBEcmFnRHJvcFRvdWNoLnByb3RvdHlwZS5fc2hvdWxkSGFuZGxlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICByZXR1cm4gIURyYWdEcm9wVG91Y2guX0lTUFJFU1NIT0xETU9ERSAmJiB0aGlzLl9zaG91bGRIYW5kbGUoZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gYWxsb3cgdG8gaGFuZGxlIG1vdmVzIHRoYXQgaW52b2x2ZSBtYW55IHRvdWNoZXMgZm9yIHByZXNzICYgaG9sZFxyXG4gICAgICAgIERyYWdEcm9wVG91Y2gucHJvdG90eXBlLl9zaG91bGRIYW5kbGVQcmVzc0hvbGRNb3ZlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHJldHVybiBEcmFnRHJvcFRvdWNoLl9JU1BSRVNTSE9MRE1PREUgJiZcclxuICAgICAgICAgICAgICB0aGlzLl9pc0RyYWdFbmFibGVkICYmIGUgJiYgZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGg7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgZGF0YSBpZiB1c2VyIGRyYWdzIHdpdGhvdXQgcHJlc3NpbmcgJiBob2xkaW5nXHJcbiAgICAgICAgRHJhZ0Ryb3BUb3VjaC5wcm90b3R5cGUuX3Nob3VsZENhbmNlbFByZXNzSG9sZE1vdmUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgcmV0dXJuIERyYWdEcm9wVG91Y2guX0lTUFJFU1NIT0xETU9ERSAmJiAhdGhpcy5faXNEcmFnRW5hYmxlZCAmJlxyXG4gICAgICAgICAgICAgIHRoaXMuX2dldERlbHRhKGUpID4gRHJhZ0Ryb3BUb3VjaC5fUFJFU1NIT0xETUFSR0lOO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIHN0YXJ0IGRyYWdnaW5nIHdoZW4gc3BlY2lmaWVkIGRlbHRhIGlzIGRldGVjdGVkXHJcbiAgICAgICAgRHJhZ0Ryb3BUb3VjaC5wcm90b3R5cGUuX3Nob3VsZFN0YXJ0RHJhZ2dpbmcgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgZGVsdGEgPSB0aGlzLl9nZXREZWx0YShlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlbHRhID4gRHJhZ0Ryb3BUb3VjaC5fVEhSRVNIT0xEIHx8XHJcbiAgICAgICAgICAgICAgICAoRHJhZ0Ryb3BUb3VjaC5fSVNQUkVTU0hPTERNT0RFICYmIGRlbHRhID49IERyYWdEcm9wVG91Y2guX1BSRVNTSE9MRFRIUkVTSE9MRCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjbGVhciBhbGwgbWVtYmVyc1xyXG4gICAgICAgIERyYWdEcm9wVG91Y2gucHJvdG90eXBlLl9yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVzdHJveUltYWdlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdTb3VyY2UgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0VG91Y2ggPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0VGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fcHREb3duID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5faXNEcmFnRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9pc0Ryb3Bab25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFUcmFuc2ZlciA9IG5ldyBEYXRhVHJhbnNmZXIoKTtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9wcmVzc0hvbGRJbnRlcnZhbCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBnZXQgcG9pbnQgZm9yIGEgdG91Y2ggZXZlbnRcclxuICAgICAgICBEcmFnRHJvcFRvdWNoLnByb3RvdHlwZS5fZ2V0UG9pbnQgPSBmdW5jdGlvbiAoZSwgcGFnZSkge1xyXG4gICAgICAgICAgICBpZiAoZSAmJiBlLnRvdWNoZXMpIHtcclxuICAgICAgICAgICAgICAgIGUgPSBlLnRvdWNoZXNbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHsgeDogcGFnZSA/IGUucGFnZVggOiBlLmNsaWVudFgsIHk6IHBhZ2UgPyBlLnBhZ2VZIDogZS5jbGllbnRZIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBnZXQgZGlzdGFuY2UgYmV0d2VlbiB0aGUgY3VycmVudCB0b3VjaCBldmVudCBhbmQgdGhlIGZpcnN0IG9uZVxyXG4gICAgICAgIERyYWdEcm9wVG91Y2gucHJvdG90eXBlLl9nZXREZWx0YSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChEcmFnRHJvcFRvdWNoLl9JU1BSRVNTSE9MRE1PREUgJiYgIXRoaXMuX3B0RG93bikgeyByZXR1cm4gMDsgfVxyXG4gICAgICAgICAgICB2YXIgcCA9IHRoaXMuX2dldFBvaW50KGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hYnMocC54IC0gdGhpcy5fcHREb3duLngpICsgTWF0aC5hYnMocC55IC0gdGhpcy5fcHREb3duLnkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gZ2V0IHRoZSBlbGVtZW50IGF0IGEgZ2l2ZW4gdG91Y2ggZXZlbnRcclxuICAgICAgICBEcmFnRHJvcFRvdWNoLnByb3RvdHlwZS5fZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHB0ID0gdGhpcy5fZ2V0UG9pbnQoZSksIGVsID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChwdC54LCBwdC55KTtcclxuICAgICAgICAgICAgd2hpbGUgKGVsICYmIGdldENvbXB1dGVkU3R5bGUoZWwpLnBvaW50ZXJFdmVudHMgPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gY3JlYXRlIGRyYWcgaW1hZ2UgZnJvbSBzb3VyY2UgZWxlbWVudFxyXG4gICAgICAgIERyYWdEcm9wVG91Y2gucHJvdG90eXBlLl9jcmVhdGVJbWFnZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIC8vIGp1c3QgaW4gY2FzZS4uLlxyXG4gICAgICAgICAgICBpZiAodGhpcy5faW1nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95SW1hZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgZHJhZyBpbWFnZSBmcm9tIGN1c3RvbSBlbGVtZW50IG9yIGRyYWcgc291cmNlXHJcbiAgICAgICAgICAgIHZhciBzcmMgPSB0aGlzLl9pbWdDdXN0b20gfHwgdGhpcy5fZHJhZ1NvdXJjZTtcclxuICAgICAgICAgICAgdGhpcy5faW1nID0gc3JjLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5fY29weVN0eWxlKHNyYywgdGhpcy5faW1nKTtcclxuICAgICAgICAgICAgdGhpcy5faW1nLnN0eWxlLnRvcCA9IHRoaXMuX2ltZy5zdHlsZS5sZWZ0ID0gJy05OTk5cHgnO1xyXG4gICAgICAgICAgICAvLyBpZiBjcmVhdGluZyBmcm9tIGRyYWcgc291cmNlLCBhcHBseSBvZmZzZXQgYW5kIG9wYWNpdHlcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbWdDdXN0b20pIHtcclxuICAgICAgICAgICAgICAgIHZhciByYyA9IHNyYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgcHQgPSB0aGlzLl9nZXRQb2ludChlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ltZ09mZnNldCA9IHsgeDogcHQueCAtIHJjLmxlZnQsIHk6IHB0LnkgLSByYy50b3AgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ltZy5zdHlsZS5vcGFjaXR5ID0gRHJhZ0Ryb3BUb3VjaC5fT1BBQ0lUWS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGFkZCBpbWFnZSB0byBkb2N1bWVudFxyXG4gICAgICAgICAgICB0aGlzLl9tb3ZlSW1hZ2UoZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5faW1nKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGRpc3Bvc2Ugb2YgZHJhZyBpbWFnZSBlbGVtZW50XHJcbiAgICAgICAgRHJhZ0Ryb3BUb3VjaC5wcm90b3R5cGUuX2Rlc3Ryb3lJbWFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2ltZyAmJiB0aGlzLl9pbWcucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW1nLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5faW1nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9pbWcgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9pbWdDdXN0b20gPSBudWxsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gbW92ZSB0aGUgZHJhZyBpbWFnZSBlbGVtZW50XHJcbiAgICAgICAgRHJhZ0Ryb3BUb3VjaC5wcm90b3R5cGUuX21vdmVJbWFnZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX2ltZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwdCA9IF90aGlzLl9nZXRQb2ludChlLCB0cnVlKSwgcyA9IF90aGlzLl9pbWcuc3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHMuekluZGV4ID0gJzk5OTk5OSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5sZWZ0ID0gTWF0aC5yb3VuZChwdC54IC0gX3RoaXMuX2ltZ09mZnNldC54KSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgcy50b3AgPSBNYXRoLnJvdW5kKHB0LnkgLSBfdGhpcy5faW1nT2Zmc2V0LnkpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBjb3B5IHByb3BlcnRpZXMgZnJvbSBhbiBvYmplY3QgdG8gYW5vdGhlclxyXG4gICAgICAgIERyYWdEcm9wVG91Y2gucHJvdG90eXBlLl9jb3B5UHJvcHMgPSBmdW5jdGlvbiAoZHN0LCBzcmMsIHByb3BzKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBwID0gcHJvcHNbaV07XHJcbiAgICAgICAgICAgICAgICBkc3RbcF0gPSBzcmNbcF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIERyYWdEcm9wVG91Y2gucHJvdG90eXBlLl9jb3B5U3R5bGUgPSBmdW5jdGlvbiAoc3JjLCBkc3QpIHtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIHBvdGVudGlhbGx5IHRyb3VibGVzb21lIGF0dHJpYnV0ZXNcclxuICAgICAgICAgICAgRHJhZ0Ryb3BUb3VjaC5fcm12QXR0cy5mb3JFYWNoKGZ1bmN0aW9uIChhdHQpIHtcclxuICAgICAgICAgICAgICAgIGRzdC5yZW1vdmVBdHRyaWJ1dGUoYXR0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGNvcHkgY2FudmFzIGNvbnRlbnRcclxuICAgICAgICAgICAgaWYgKHNyYyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY1NyYyA9IHNyYywgY0RzdCA9IGRzdDtcclxuICAgICAgICAgICAgICAgIGNEc3Qud2lkdGggPSBjU3JjLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgY0RzdC5oZWlnaHQgPSBjU3JjLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIGNEc3QuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UoY1NyYywgMCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29weSBzdHlsZSAod2l0aG91dCB0cmFuc2l0aW9ucylcclxuICAgICAgICAgICAgdmFyIGNzID0gZ2V0Q29tcHV0ZWRTdHlsZShzcmMpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gY3NbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ3RyYW5zaXRpb24nKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkc3Quc3R5bGVba2V5XSA9IGNzW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZHN0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIC8vIGFuZCByZXBlYXQgZm9yIGFsbCBjaGlsZHJlblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNyYy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29weVN0eWxlKHNyYy5jaGlsZHJlbltpXSwgZHN0LmNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgRHJhZ0Ryb3BUb3VjaC5wcm90b3R5cGUuX2Rpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAoZSwgdHlwZSwgdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGlmIChlICYmIHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpLCB0ID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZTtcclxuICAgICAgICAgICAgICAgIGV2dC5pbml0RXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBldnQuYnV0dG9uID0gMDtcclxuICAgICAgICAgICAgICAgIGV2dC53aGljaCA9IGV2dC5idXR0b25zID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvcHlQcm9wcyhldnQsIGUsIERyYWdEcm9wVG91Y2guX2tiZFByb3BzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvcHlQcm9wcyhldnQsIHQsIERyYWdEcm9wVG91Y2guX3B0UHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgZXZ0LmRhdGFUcmFuc2ZlciA9IHRoaXMuX2RhdGFUcmFuc2ZlcjtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZ0LmRlZmF1bHRQcmV2ZW50ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gZ2V0cyBhbiBlbGVtZW50J3MgY2xvc2VzdCBkcmFnZ2FibGUgYW5jZXN0b3JcclxuICAgICAgICBEcmFnRHJvcFRvdWNoLnByb3RvdHlwZS5fY2xvc2VzdERyYWdnYWJsZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGZvciAoOyBlOyBlID0gZS5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5oYXNBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpICYmIGUuZHJhZ2dhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gRHJhZ0Ryb3BUb3VjaDtcclxuICAgIH0oKSk7XHJcbiAgICAvKnByaXZhdGUqLyBEcmFnRHJvcFRvdWNoLl9pbnN0YW5jZSA9IG5ldyBEcmFnRHJvcFRvdWNoKCk7IC8vIHNpbmdsZXRvblxyXG4gICAgLy8gY29uc3RhbnRzXHJcbiAgICBEcmFnRHJvcFRvdWNoLl9USFJFU0hPTEQgPSA1OyAvLyBwaXhlbHMgdG8gbW92ZSBiZWZvcmUgZHJhZyBzdGFydHNcclxuICAgIERyYWdEcm9wVG91Y2guX09QQUNJVFkgPSAwLjU7IC8vIGRyYWcgaW1hZ2Ugb3BhY2l0eVxyXG4gICAgRHJhZ0Ryb3BUb3VjaC5fREJMQ0xJQ0sgPSA1MDA7IC8vIG1heCBtcyBiZXR3ZWVuIGNsaWNrcyBpbiBhIGRvdWJsZSBjbGlja1xyXG4gICAgRHJhZ0Ryb3BUb3VjaC5fQ1RYTUVOVSA9IDkwMDsgLy8gbXMgdG8gaG9sZCBiZWZvcmUgcmFpc2luZyAnY29udGV4dG1lbnUnIGV2ZW50XHJcbiAgICBEcmFnRHJvcFRvdWNoLl9JU1BSRVNTSE9MRE1PREUgPSBmYWxzZTsgLy8gZGVjaWRlcyBvZiBwcmVzcyAmIGhvbGQgbW9kZSBwcmVzZW5jZVxyXG4gICAgRHJhZ0Ryb3BUb3VjaC5fUFJFU1NIT0xEQVdBSVQgPSA0MDA7IC8vIG1zIHRvIHdhaXQgYmVmb3JlIHByZXNzICYgaG9sZCBpcyBkZXRlY3RlZFxyXG4gICAgRHJhZ0Ryb3BUb3VjaC5fUFJFU1NIT0xETUFSR0lOID0gMjU7IC8vIHBpeGVscyB0aGF0IGZpbmdlciBtaWdodCBzaGl2ZXIgd2hpbGUgcHJlc3NpbmdcclxuICAgIERyYWdEcm9wVG91Y2guX1BSRVNTSE9MRFRIUkVTSE9MRCA9IDA7IC8vIHBpeGVscyB0byBtb3ZlIGJlZm9yZSBkcmFnIHN0YXJ0c1xyXG4gICAgLy8gY29weSBzdHlsZXMvYXR0cmlidXRlcyBmcm9tIGRyYWcgc291cmNlIHRvIGRyYWcgaW1hZ2UgZWxlbWVudFxyXG4gICAgRHJhZ0Ryb3BUb3VjaC5fcm12QXR0cyA9ICdpZCxjbGFzcyxzdHlsZSxkcmFnZ2FibGUnLnNwbGl0KCcsJyk7XHJcbiAgICAvLyBzeW50aGVzaXplIGFuZCBkaXNwYXRjaCBhbiBldmVudFxyXG4gICAgLy8gcmV0dXJucyB0cnVlIGlmIHRoZSBldmVudCBoYXMgYmVlbiBoYW5kbGVkIChlLnByZXZlbnREZWZhdWx0ID09IHRydWUpXHJcbiAgICBEcmFnRHJvcFRvdWNoLl9rYmRQcm9wcyA9ICdhbHRLZXksY3RybEtleSxtZXRhS2V5LHNoaWZ0S2V5Jy5zcGxpdCgnLCcpO1xyXG4gICAgRHJhZ0Ryb3BUb3VjaC5fcHRQcm9wcyA9ICdwYWdlWCxwYWdlWSxjbGllbnRYLGNsaWVudFksc2NyZWVuWCxzY3JlZW5ZLG9mZnNldFgsb2Zmc2V0WScuc3BsaXQoJywnKTtcclxuICAgIERyYWdEcm9wVG91Y2hfMS5EcmFnRHJvcFRvdWNoID0gRHJhZ0Ryb3BUb3VjaDtcclxufSkoRHJhZ0Ryb3BUb3VjaCB8fCAoRHJhZ0Ryb3BUb3VjaCA9IHt9KSk7XHJcbiIsIiQuaTE4bigpLmxvYWQoe1xuICAgIGVuOiB7XG4gICAgICAgIG1zZ19kcmFnbmRyb3BfY29ycmVjdF9hbnN3ZXI6IFwiWW91IGFyZSBjb3JyZWN0IVwiLFxuICAgICAgICBtc2dfZHJhZ25kcm9wX2luY29ycmVjdF9hbnN3ZXI6XG4gICAgICAgICAgICBcIkluY29ycmV0LiBZb3UgZ290ICQxIGNvcnJlY3QgYW5kICQyIGluY29ycmVjdCBvdXQgb2YgJDMuIFlvdSBsZWZ0ICQ0IGJsYW5rLlwiLFxuICAgICAgICBtc2dfZHJhZ25kcm9wX2NoZWNrX21lOiBcIkNoZWNrIG1lXCIsXG4gICAgICAgIG1zZ19kcmFnbmRyb3BfcmVzZXQ6IFwiUmVzZXRcIixcbiAgICB9LFxufSk7XG4iLCIkLmkxOG4oKS5sb2FkKHtcbiAgICBcInB0LWJyXCI6IHtcbiAgICAgICAgbXNnX2RyYWduZHJvcF9jb3JyZWN0X2Fuc3dlcjogXCJDb3JyZXRvIVwiLFxuICAgICAgICBtc2dfZHJhZ25kcm9wX2luY29ycmVjdF9hbnN3ZXI6XG4gICAgICAgICAgICBcIkluY29ycmV0by4gVm9jw6ogdGV2ZSAkMSBjb3JyZXRvKHMpIGUgJDIgaW5jb3JyZXRvKHMpIGRlICQzLiBWb2PDqiBkZWl4b3UgJDQgZW0gYnJhbmNvLlwiLFxuICAgICAgICBtc2dfZHJhZ25kcm9wX2NoZWNrX21lOiBcIlZlcmlmaWNhclwiLFxuICAgICAgICBtc2dfZHJhZ25kcm9wX3Jlc2V0OiBcIlJlc2V0YXJcIixcbiAgICB9LFxufSk7XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PT09PSAgICAgTWFzdGVyIGRyYWduZHJvcC5qcyAgICAgPT09PT09PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT0gICAgIFRoaXMgZmlsZSBjb250YWlucyB0aGUgSlMgZm9yICAgID09PVxuPT09IHRoZSBSdW5lc3RvbmUgRHJhZyBuIGRyb3AgY29tcG9uZW50LiA9PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT0gICAgICAgICAgICAgIENyZWF0ZWQgYnkgICAgICAgICAgICAgID09PVxuPT09ICAgICAgICAgICBJc2FpYWggTWF5ZXJjaGFrICAgICAgICAgICA9PT1cbj09PSAgICAgICAgICAgICAgICA3LzYvMTUgICAgICAgICAgICAgICAgPT09XG49PT0gICAgICAgICAgICAgIEJyYWQgTUlsbGVyICAgICAgICAgICAgID09PVxuPT09ICAgICAgICAgICAgICAgIDIvNy8xOSAgICAgICAgICAgICAgICA9PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bmVzdG9uZUJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlLmpzXCI7XG5pbXBvcnQgXCIuLi9jc3MvZHJhZ25kcm9wLmNzc1wiO1xuaW1wb3J0IFwiLi9kcmFnbmRyb3AtaTE4bi5lbi5qc1wiO1xuaW1wb3J0IFwiLi9kcmFnbmRyb3AtaTE4bi5wdC1ici5qc1wiO1xuaW1wb3J0IFwiLi9EcmFnRHJvcFRvdWNoLmpzXCI7XG5cbmV4cG9ydCB2YXIgZGRMaXN0ID0ge307IC8vIERpY3Rpb25hcnkgdGhhdCBjb250YWlucyBhbGwgaW5zdGFuY2VzIG9mIGRyYWduZHJvcCBvYmplY3RzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdORHJvcCBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIob3B0cyk7XG4gICAgICAgIHZhciBvcmlnID0gb3B0cy5vcmlnOyAvLyBlbnRpcmUgPHVsPiBlbGVtZW50IHRoYXQgd2lsbCBiZSByZXBsYWNlZCBieSBuZXcgSFRNTFxuICAgICAgICB0aGlzLm9yaWdFbGVtID0gb3JpZztcbiAgICAgICAgdGhpcy5kaXZpZCA9IG9yaWcuaWQ7XG4gICAgICAgIHRoaXMudXNlUnVuZXN0b25lU2VydmljZXMgPSBvcHRzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzO1xuICAgICAgICB0aGlzLnJhbmRvbSA9IGZhbHNlO1xuICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLXJhbmRvbV1cIikpIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9tID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZlZWRiYWNrID0gXCJcIjtcbiAgICAgICAgdGhpcy5kcmFnUGFpckFycmF5ID0gW107XG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBcIlwiO1xuICAgICAgICB0aGlzLnBvcHVsYXRlKCk7IC8vIFBvcHVsYXRlcyB0aGlzLmRyYWdQYWlyQXJyYXksIHRoaXMuZmVlZGJhY2sgYW5kIHRoaXMucXVlc3Rpb25cbiAgICAgICAgdGhpcy5jcmVhdGVOZXdFbGVtZW50cygpO1xuICAgICAgICB0aGlzLmNhcHRpb24gPSBcIkRyYWctTi1Ecm9wXCI7XG4gICAgICAgIHRoaXMuYWRkQ2FwdGlvbihcInJ1bmVzdG9uZVwiKTtcbiAgICAgICAgaWYgKHR5cGVvZiBQcmlzbSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgUHJpc20uaGlnaGxpZ2h0QWxsVW5kZXIodGhpcy5jb250YWluZXJEaXYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PSBVcGRhdGUgdmFyaWFibGVzID09PVxuICAgID09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIHBvcHVsYXRlKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICQodGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzW2ldKS5kYXRhKFwic3ViY29tcG9uZW50XCIpID09PVxuICAgICAgICAgICAgICAgIFwiZHJvcHpvbmVcIlxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRtcCA9ICQodGhpcy5vcmlnRWxlbSkuZmluZChcbiAgICAgICAgICAgICAgICAgICAgYCMkeyQodGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzW2ldKS5hdHRyKFwiZm9yXCIpfWBcbiAgICAgICAgICAgICAgICApWzBdO1xuICAgICAgICAgICAgICAgIHZhciByZXBsYWNlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgICAgIHJlcGxhY2VTcGFuLmlubmVySFRNTCA9IHRtcC5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgcmVwbGFjZVNwYW4uaWQgPSB0aGlzLmRpdmlkICsgdG1wLmlkO1xuICAgICAgICAgICAgICAgICQocmVwbGFjZVNwYW4pLmF0dHIoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgICQocmVwbGFjZVNwYW4pLmFkZENsYXNzKFwiZHJhZ2dhYmxlLWRyYWdcIik7XG4gICAgICAgICAgICAgICAgdmFyIG90aGVyUmVwbGFjZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICBvdGhlclJlcGxhY2VTcGFuLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlc1tpXS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgJChvdGhlclJlcGxhY2VTcGFuKS5hZGRDbGFzcyhcImRyYWdnYWJsZS1kcm9wXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMocmVwbGFjZVNwYW4sIG90aGVyUmVwbGFjZVNwYW4pO1xuICAgICAgICAgICAgICAgIHZhciB0bXBBcnIgPSBbXTtcbiAgICAgICAgICAgICAgICB0bXBBcnIucHVzaChyZXBsYWNlU3Bhbik7XG4gICAgICAgICAgICAgICAgdG1wQXJyLnB1c2gob3RoZXJSZXBsYWNlU3Bhbik7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnUGFpckFycmF5LnB1c2godG1wQXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgJCh0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXNbaV0pLmRhdGEoXCJzdWJjb21wb25lbnRcIikgPT09XG4gICAgICAgICAgICAgICAgXCJxdWVzdGlvblwiXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uID0gdGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzW2ldLmlubmVySFRNTDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgJCh0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXNbaV0pLmRhdGEoXCJzdWJjb21wb25lbnRcIikgPT09XG4gICAgICAgICAgICAgICAgXCJmZWVkYmFja1wiXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRiYWNrID0gdGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzW2ldLmlubmVySFRNTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PSBDcmVhdGUgbmV3IEhUTUwgZWxlbWVudHMgYW5kIHJlcGxhY2UgPT1cbiAgICA9PSAgICAgIG9yaWdpbmFsIGVsZW1lbnQgd2l0aCB0aGVtICAgICAgPT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBjcmVhdGVOZXdFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5pZCA9IHRoaXMuZGl2aWQ7XG4gICAgICAgICQodGhpcy5jb250YWluZXJEaXYpLmFkZENsYXNzKFwiZHJhZ2dhYmxlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lckRpdikuaHRtbCh0aGlzLnF1ZXN0aW9uKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICAgICAgdGhpcy5kcmFnRHJvcFdyYXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBIb2xkcyB0aGUgZHJhZ2dhYmxlcy9kcm9wem9uZXMsIHByZXZlbnRzIGZlZWRiYWNrIGZyb20gYmxlZWRpbmcgaW5cbiAgICAgICAgJCh0aGlzLmRyYWdEcm9wV3JhcERpdikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLmRyYWdEcm9wV3JhcERpdik7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgJCh0aGlzLmRyYWdnYWJsZURpdikuYWRkQ2xhc3MoXCJyc2RyYWdnYWJsZSBkcmFnem9uZVwiKTtcbiAgICAgICAgdGhpcy5hZGREcmFnRGl2TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuZHJvcFpvbmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAkKHRoaXMuZHJvcFpvbmVEaXYpLmFkZENsYXNzKFwicnNkcmFnZ2FibGVcIik7XG4gICAgICAgIHRoaXMuZHJhZ0Ryb3BXcmFwRGl2LmFwcGVuZENoaWxkKHRoaXMuZHJhZ2dhYmxlRGl2KTtcbiAgICAgICAgdGhpcy5kcmFnRHJvcFdyYXBEaXYuYXBwZW5kQ2hpbGQodGhpcy5kcm9wWm9uZURpdik7XG4gICAgICAgIHRoaXMuY3JlYXRlQnV0dG9ucygpO1xuICAgICAgICB0aGlzLmNoZWNrU2VydmVyKFwiZHJhZ05kcm9wXCIsIHRydWUpO1xuICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGVvZiBydW5lc3RvbmVNYXRocmVhZHkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJ1bmVzdG9uZU1hdGhSZWFkeS50aGVuKCgpID0+IHNlbGYucXVldWVNYXRoSmF4KHNlbGYuY29udGFpbmVyRGl2KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmluaXNoU2V0dGluZ1VwKCkge1xuICAgICAgICB0aGlzLmFwcGVuZFJlcGxhY2VtZW50U3BhbnMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJGZWVkYmFja0RpdigpO1xuICAgICAgICAkKHRoaXMub3JpZ0VsZW0pLnJlcGxhY2VXaXRoKHRoaXMuY29udGFpbmVyRGl2KTtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1N0b3JlZERyb3B6b25lcykge1xuICAgICAgICAgICAgdGhpcy5taW5oZWlnaHQgPSAkKHRoaXMuZHJhZ2dhYmxlRGl2KS5oZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYWdnYWJsZURpdi5zdHlsZS5taW5IZWlnaHQgPSB0aGlzLm1pbmhlaWdodC50b1N0cmluZygpICsgXCJweFwiO1xuICAgICAgICBpZiAoJCh0aGlzLmRyb3Bab25lRGl2KS5oZWlnaHQoKSA+IHRoaXMubWluaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdEcm9wV3JhcERpdi5zdHlsZS5taW5IZWlnaHQgPVxuICAgICAgICAgICAgICAgICQodGhpcy5kcm9wWm9uZURpdikuaGVpZ2h0KCkudG9TdHJpbmcoKSArIFwicHhcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ0Ryb3BXcmFwRGl2LnN0eWxlLm1pbkhlaWdodCA9XG4gICAgICAgICAgICAgICAgdGhpcy5taW5oZWlnaHQudG9TdHJpbmcoKSArIFwicHhcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGREcmFnRGl2TGlzdGVuZXJzKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImRyYWdvdmVyXCIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMuZHJhZ2dhYmxlRGl2KS5oYXNDbGFzcyhcInBvc3NpYmxlRHJvcFwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQodGhpcy5kcmFnZ2FibGVEaXYpLmFkZENsYXNzKFwicG9zc2libGVEcm9wXCIpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImRyb3BcIixcbiAgICAgICAgICAgIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgICAgIHNlbGYuaXNBbnN3ZXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzLmRyYWdnYWJsZURpdikuaGFzQ2xhc3MoXCJwb3NzaWJsZURyb3BcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLmRyYWdnYWJsZURpdikucmVtb3ZlQ2xhc3MoXCJwb3NzaWJsZURyb3BcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJkcmFnZ2FibGVJRFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgZHJhZ2dlZFNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEkKHRoaXMuZHJhZ2dhYmxlRGl2KS5oYXMoZHJhZ2dlZFNwYW4pLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdHJhbmdlckRhbmdlcihkcmFnZ2VkU3BhbilcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGVsZW1lbnQgaXNuJ3QgYWxyZWFkeSB0aGVyZS0tcHJldmVudHMgZXJyb3Mgdy9hcHBlbmRpbmcgY2hpbGRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnZ2FibGVEaXYuYXBwZW5kQ2hpbGQoZHJhZ2dlZFNwYW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmRyYWdnYWJsZURpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJkcmFnbGVhdmVcIixcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMuZHJhZ2dhYmxlRGl2KS5oYXNDbGFzcyhcInBvc3NpYmxlRHJvcFwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQodGhpcy5kcmFnZ2FibGVEaXYpLnJlbW92ZUNsYXNzKFwicG9zc2libGVEcm9wXCIpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgfVxuICAgIGNyZWF0ZUJ1dHRvbnMoKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyAvLyBDaGVjayBtZSBidXR0b25cbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAkLmkxOG4oXCJtc2dfZHJhZ25kcm9wX2NoZWNrX21lXCIpO1xuICAgICAgICAkKHRoaXMuc3VibWl0QnV0dG9uKS5hdHRyKHtcbiAgICAgICAgICAgIGNsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBkcmFnLWJ1dHRvblwiLFxuICAgICAgICAgICAgbmFtZTogXCJkbyBhbnN3ZXJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0N1cnJlbnRBbnN3ZXIoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRmVlZGJhY2soKTtcbiAgICAgICAgICAgIHRoaXMubG9nQ3VycmVudEFuc3dlcigpO1xuICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyAvLyBDaGVjayBtZSBidXR0b25cbiAgICAgICAgdGhpcy5yZXNldEJ1dHRvbi50ZXh0Q29udGVudCA9ICQuaTE4bihcIm1zZ19kcmFnbmRyb3BfcmVzZXRcIik7XG4gICAgICAgICQodGhpcy5yZXNldEJ1dHRvbikuYXR0cih7XG4gICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLWRlZmF1bHQgZHJhZy1idXR0b24gZHJhZy1yZXNldFwiLFxuICAgICAgICAgICAgbmFtZTogXCJkbyBhbnN3ZXJcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVzZXRCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXREcmFnZ2FibGVzKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5idXR0b25EaXYuYXBwZW5kQ2hpbGQodGhpcy5zdWJtaXRCdXR0b24pO1xuICAgICAgICB0aGlzLmJ1dHRvbkRpdi5hcHBlbmRDaGlsZCh0aGlzLnJlc2V0QnV0dG9uKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5idXR0b25EaXYpO1xuICAgIH1cbiAgICBhcHBlbmRSZXBsYWNlbWVudFNwYW5zKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUluZGV4QXJyYXkoKTtcbiAgICAgICAgdGhpcy5yYW5kb21pemVJbmRleEFycmF5KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kcmFnUGFpckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNTdG9yZWREcm9wem9uZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICQuaW5BcnJheSh0aGlzLmluZGV4QXJyYXlbaV1bMF0sIHRoaXMucHJlZ25hbnRJbmRleEFycmF5KSA8XG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnZ2FibGVEaXYuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdQYWlyQXJyYXlbdGhpcy5pbmRleEFycmF5W2ldXVswXVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnZ2FibGVEaXYuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1BhaXJBcnJheVt0aGlzLmluZGV4QXJyYXlbaV1dWzBdXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJhbmRvbWl6ZUluZGV4QXJyYXkoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRyYWdQYWlyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1N0b3JlZERyb3B6b25lcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZWduYW50SW5kZXhBcnJheVt0aGlzLmluZGV4QXJyYXlbaV1dICE9PSBcIi0xXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnUGFpckFycmF5W3RoaXMuaW5kZXhBcnJheVtpXV1bMV0uYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdQYWlyQXJyYXlbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVnbmFudEluZGV4QXJyYXlbdGhpcy5pbmRleEFycmF5W2ldXVxuICAgICAgICAgICAgICAgICAgICAgICAgXVswXVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJvcFpvbmVEaXYuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnUGFpckFycmF5W3RoaXMuaW5kZXhBcnJheVtpXV1bMV1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoZGdTcGFuLCBkcFNwYW4pIHtcbiAgICAgICAgLy8gQWRkcyBIVE1MNSBcImRyYWcgYW5kIGRyb3BcIiBVSSBmdW5jdGlvbmFsaXR5XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgZGdTcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImRyYWdnYWJsZUlEXCIsIGV2LnRhcmdldC5pZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkZ1NwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRnU3Bhbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJkcm9wXCIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmlzQW5zd2VyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImRyYWdnYWJsZUlEXCIpO1xuICAgICAgICAgICAgICAgIHZhciBkcmFnZ2VkU3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNOb0RyYWdDaGlsZChldi50YXJnZXQpICYmXG4gICAgICAgICAgICAgICAgICAgIGRyYWdnZWRTcGFuICE9IGV2LnRhcmdldCAmJlxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdHJhbmdlckRhbmdlcihkcmFnZ2VkU3BhbilcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGVsZW1lbnQgaXNuJ3QgYWxyZWFkeSB0aGVyZS0tcHJldmVudHMgZXJyb3Mgdy9hcHBlbmRpbmcgY2hpbGRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnZ2FibGVEaXYuYXBwZW5kQ2hpbGQoZHJhZ2dlZFNwYW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgICBkcFNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiZHJhZ292ZXJcIixcbiAgICAgICAgICAgIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgICAgIHNlbGYuaXNBbnN3ZXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoJChldi50YXJnZXQpLmhhc0NsYXNzKFwicG9zc2libGVEcm9wXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAkKGV2LnRhcmdldCkuaGFzQ2xhc3MoXCJkcmFnZ2FibGUtZHJvcFwiKSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc05vRHJhZ0NoaWxkKGV2LnRhcmdldClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgJChldi50YXJnZXQpLmFkZENsYXNzKFwicG9zc2libGVEcm9wXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgICBkcFNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHNlbGYuaXNBbnN3ZXJlZCA9IHRydWU7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKCEkKGV2LnRhcmdldCkuaGFzQ2xhc3MoXCJwb3NzaWJsZURyb3BcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKGV2LnRhcmdldCkucmVtb3ZlQ2xhc3MoXCJwb3NzaWJsZURyb3BcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBkcFNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiZHJvcFwiLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5pc0Fuc3dlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmICgkKGV2LnRhcmdldCkuaGFzQ2xhc3MoXCJwb3NzaWJsZURyb3BcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgJChldi50YXJnZXQpLnJlbW92ZUNsYXNzKFwicG9zc2libGVEcm9wXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiZHJhZ2dhYmxlSURcIik7XG4gICAgICAgICAgICAgICAgdmFyIGRyYWdnZWRTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAkKGV2LnRhcmdldCkuaGFzQ2xhc3MoXCJkcmFnZ2FibGUtZHJvcFwiKSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc05vRHJhZ0NoaWxkKGV2LnRhcmdldCkgJiZcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RyYW5nZXJEYW5nZXIoZHJhZ2dlZFNwYW4pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBlbGVtZW50IGlzbid0IGFscmVhZHkgdGhlcmUtLXByZXZlbnRzIGVycm9zIHcvYXBwZW5kaW5nIGNoaWxkXG4gICAgICAgICAgICAgICAgICAgIGV2LnRhcmdldC5hcHBlbmRDaGlsZChkcmFnZ2VkU3Bhbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgfVxuICAgIHJlbmRlckZlZWRiYWNrRGl2KCkge1xuICAgICAgICBpZiAoIXRoaXMuZmVlZEJhY2tEaXYpIHtcbiAgICAgICAgICAgIHRoaXMuZmVlZEJhY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGhpcy5mZWVkQmFja0Rpdi5pZCA9IHRoaXMuZGl2aWQgKyBcIl9mZWVkYmFja1wiO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMuZmVlZEJhY2tEaXYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PSBBdXhpbGlhcnkgZnVuY3Rpb25zID09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIHN0cmFuZ2VyRGFuZ2VyKHRlc3RTcGFuKSB7XG4gICAgICAgIC8vIFJldHVybnMgdHJ1ZSBpZiB0aGUgdGVzdCBzcGFuIGRvZXNuJ3QgYmVsb25nIHRvIHRoaXMgaW5zdGFuY2Ugb2YgRHJhZ05Ecm9wXG4gICAgICAgIHZhciBzdHJhbmdlckRhbmdlciA9IHRydWU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kcmFnUGFpckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGVzdFNwYW4gPT09IHRoaXMuZHJhZ1BhaXJBcnJheVtpXVswXSkge1xuICAgICAgICAgICAgICAgIHN0cmFuZ2VyRGFuZ2VyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cmFuZ2VyRGFuZ2VyO1xuICAgIH1cbiAgICBoYXNOb0RyYWdDaGlsZChwYXJlbnQpIHtcbiAgICAgICAgLy8gRW5zdXJlcyB0aGF0IGVhY2ggZHJvcFpvbmVEaXYgY2FuIGhhdmUgb25seSBvbmUgZHJhZ2dhYmxlIGNoaWxkXG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCQocGFyZW50LmNoaWxkTm9kZXNbaV0pLmF0dHIoXCJkcmFnZ2FibGVcIikgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb3VudGVyID49IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUluZGV4QXJyYXkoKSB7XG4gICAgICAgIHRoaXMuaW5kZXhBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZHJhZ1BhaXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pbmRleEFycmF5LnB1c2goaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmFuZG9taXplSW5kZXhBcnJheSgpIHtcbiAgICAgICAgLy8gU2h1ZmZsZXMgYXJvdW5kIGluZGljZXMgc28gdGhlIG1hdGNoYWJsZSBlbGVtZW50cyBhcmVuJ3QgaW4gYSBwcmVkaWN0YWJsZSBvcmRlclxuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gdGhpcy5pbmRleEFycmF5Lmxlbmd0aCxcbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlLFxuICAgICAgICAgICAgcmFuZG9tSW5kZXg7XG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gICAgICAgIHdoaWxlIChjdXJyZW50SW5kZXggIT09IDApIHtcbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG4gICAgICAgICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSA9IHRoaXMuaW5kZXhBcnJheVtjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5pbmRleEFycmF5W2N1cnJlbnRJbmRleF0gPSB0aGlzLmluZGV4QXJyYXlbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5pbmRleEFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT0gUmVzZXQgYnV0dG9uIGZ1bmN0aW9uYWxpdHkgPT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIHJlc2V0RHJhZ2dhYmxlcygpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRyYWdQYWlyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgdmFyIGogPSAwO1xuICAgICAgICAgICAgICAgIGogPCB0aGlzLmRyYWdQYWlyQXJyYXlbaV1bMV0uY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaisrXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICQodGhpcy5kcmFnUGFpckFycmF5W2ldWzFdLmNoaWxkTm9kZXNbal0pLmF0dHIoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRyYWdnYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICkgPT09IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ2dhYmxlRGl2LmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnUGFpckFycmF5W2ldWzFdLmNoaWxkTm9kZXNbal1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZWVkQmFja0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT0gRXZhbHVhdGlvbiBhbmQgZmVlZGJhY2sgPT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4gICAgY2hlY2tDdXJyZW50QW5zd2VyKCkge1xuICAgICAgICB0aGlzLmNvcnJlY3QgPSB0cnVlO1xuICAgICAgICB0aGlzLnVuYW5zd2VyZWROdW0gPSAwO1xuICAgICAgICB0aGlzLmluY29ycmVjdE51bSA9IDA7XG4gICAgICAgIHRoaXMuZHJhZ051bSA9IHRoaXMuZHJhZ1BhaXJBcnJheS5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kcmFnUGFpckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgISQodGhpcy5kcmFnUGFpckFycmF5W2ldWzFdKS5oYXModGhpcy5kcmFnUGFpckFycmF5W2ldWzBdKVxuICAgICAgICAgICAgICAgICAgICAubGVuZ3RoXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmluY29ycmVjdE51bSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzTm9EcmFnQ2hpbGQodGhpcy5kcmFnUGFpckFycmF5W2ldWzFdKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5hbnN3ZXJlZE51bSsrO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0TnVtIC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3JyZWN0TnVtID0gdGhpcy5kcmFnTnVtIC0gdGhpcy5pbmNvcnJlY3ROdW0gLSB0aGlzLnVuYW5zd2VyZWROdW07XG4gICAgICAgIHRoaXMucGVyY2VudCA9IHRoaXMuY29ycmVjdE51bSAvIHRoaXMuZHJhZ1BhaXJBcnJheS5sZW5ndGg7XG4gICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKHsgY29ycmVjdDogdGhpcy5jb3JyZWN0ID8gXCJUXCIgOiBcIkZcIiB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2dDdXJyZW50QW5zd2VyKHNpZCkge1xuICAgICAgICBsZXQgYW5zd2VyID0gdGhpcy5wcmVnbmFudEluZGV4QXJyYXkuam9pbihcIjtcIik7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgZXZlbnQ6IFwiZHJhZ05kcm9wXCIsXG4gICAgICAgICAgICBhY3Q6IGFuc3dlcixcbiAgICAgICAgICAgIGFuc3dlcjogYW5zd2VyLFxuICAgICAgICAgICAgbWluX2hlaWdodDogdGhpcy5taW5oZWlnaHQsXG4gICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2aWQsXG4gICAgICAgICAgICBjb3JyZWN0OiB0aGlzLmNvcnJlY3QsXG4gICAgICAgICAgICBjb3JyZWN0TnVtOiB0aGlzLmNvcnJlY3ROdW0sXG4gICAgICAgICAgICBkcmFnTnVtOiB0aGlzLmRyYWdOdW0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0eXBlb2Ygc2lkICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBkYXRhLnNpZCA9IHNpZDtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLmxvZ0Jvb2tFdmVudChkYXRhKTtcbiAgICB9XG4gICAgcmVuZGVyRmVlZGJhY2soKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kcmFnUGFpckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgISQodGhpcy5kcmFnUGFpckFycmF5W2ldWzFdKS5oYXModGhpcy5kcmFnUGFpckFycmF5W2ldWzBdKVxuICAgICAgICAgICAgICAgICAgICAubGVuZ3RoXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMuZHJhZ1BhaXJBcnJheVtpXVsxXSkuYWRkQ2xhc3MoXCJkcm9wLWluY29ycmVjdFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmRyYWdQYWlyQXJyYXlbaV1bMV0pLnJlbW92ZUNsYXNzKFwiZHJvcC1pbmNvcnJlY3RcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuZmVlZEJhY2tEaXYpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRmVlZGJhY2tEaXYoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZlZWRCYWNrRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGlmICh0aGlzLmNvcnJlY3QpIHtcbiAgICAgICAgICAgIHZhciBtc2dDb3JyZWN0ID0gJC5pMThuKFwibXNnX2RyYWduZHJvcF9jb3JyZWN0X2Fuc3dlclwiKTtcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuaHRtbChtc2dDb3JyZWN0KTtcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuYXR0cihcbiAgICAgICAgICAgICAgICBcImNsYXNzXCIsXG4gICAgICAgICAgICAgICAgXCJhbGVydCBhbGVydC1pbmZvIGRyYWdnYWJsZS1mZWVkYmFja1wiXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1zZ0luY29ycmVjdCA9ICQuaTE4bihcbiAgICAgICAgICAgICAgICAkLmkxOG4oXCJtc2dfZHJhZ25kcm9wX2luY29ycmVjdF9hbnN3ZXJcIiksXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0TnVtLFxuICAgICAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0TnVtLFxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ051bSxcbiAgICAgICAgICAgICAgICB0aGlzLnVuYW5zd2VyZWROdW1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAkKHRoaXMuZmVlZEJhY2tEaXYpLmh0bWwobXNnSW5jb3JyZWN0ICsgXCIgXCIgKyB0aGlzLmZlZWRiYWNrKTtcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuYXR0cihcbiAgICAgICAgICAgICAgICBcImNsYXNzXCIsXG4gICAgICAgICAgICAgICAgXCJhbGVydCBhbGVydC1kYW5nZXIgZHJhZ2dhYmxlLWZlZWRiYWNrXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PSBDaGVja2luZy9yZXN0b3JpbmcgZnJvbSBzdG9yYWdlID09PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICByZXN0b3JlQW5zd2VycyhkYXRhKSB7XG4gICAgICAgIC8vIFJlc3RvcmUgYW5zd2VycyBmcm9tIHN0b3JhZ2UgcmV0cmlldmFsIGRvbmUgaW4gUnVuZXN0b25lQmFzZVxuICAgICAgICB0aGlzLmhhc1N0b3JlZERyb3B6b25lcyA9IHRydWU7XG4gICAgICAgIHRoaXMubWluaGVpZ2h0ID0gZGF0YS5taW5faGVpZ2h0O1xuICAgICAgICB0aGlzLnByZWduYW50SW5kZXhBcnJheSA9IGRhdGEuYW5zd2VyLnNwbGl0KFwiO1wiKTtcbiAgICAgICAgdGhpcy5maW5pc2hTZXR0aW5nVXAoKTtcbiAgICB9XG4gICAgY2hlY2tMb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyYWRlcmFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdG9yZWRPYmo7XG4gICAgICAgIHRoaXMuaGFzU3RvcmVkRHJvcHpvbmVzID0gZmFsc2U7XG4gICAgICAgIHZhciBsZW4gPSBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xuICAgICAgICBpZiAobGVuID4gMCkge1xuICAgICAgICAgICAgdmFyIGV4ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSk7XG4gICAgICAgICAgICBpZiAoZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1N0b3JlZERyb3B6b25lcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVkT2JqID0gSlNPTi5wYXJzZShleCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWluaGVpZ2h0ID0gc3RvcmVkT2JqLm1pbl9oZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVycm9yIHdoaWxlIHBhcnNpbmc7IGxpa2VseSBkdWUgdG8gYmFkIHZhbHVlIHN0b3JlZCBpbiBzdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzU3RvcmVkRHJvcHpvbmVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoU2V0dGluZ1VwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wcmVnbmFudEluZGV4QXJyYXkgPSBzdG9yZWRPYmouYW5zd2VyLnNwbGl0KFwiO1wiKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSBhbnN3ZXIgaW4gZGF0YWJhc2VcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFuc3dlciA9IHRoaXMucHJlZ25hbnRJbmRleEFycmF5LmpvaW4oXCI7XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ0Jvb2tFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogXCJkcmFnTmRyb3BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdDogYW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyOiBhbnN3ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5faGVpZ2h0OiB0aGlzLm1pbmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlY3Q6IHN0b3JlZE9iai5jb3JyZWN0LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maW5pc2hTZXR0aW5nVXAoKTtcbiAgICB9XG5cbiAgICBzZXRMb2NhbFN0b3JhZ2UoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5hbnN3ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZGlkbid0IGxvYWQgZnJvbSB0aGUgc2VydmVyLCB3ZSBtdXN0IGdlbmVyYXRlIHRoZSBkYXRhXG4gICAgICAgICAgICB0aGlzLnByZWduYW50SW5kZXhBcnJheSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRyYWdQYWlyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFzTm9EcmFnQ2hpbGQodGhpcy5kcmFnUGFpckFycmF5W2ldWzFdKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuZHJhZ1BhaXJBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcy5kcmFnUGFpckFycmF5W2ldWzFdKS5oYXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1BhaXJBcnJheVtqXVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWduYW50SW5kZXhBcnJheS5wdXNoKGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVnbmFudEluZGV4QXJyYXkucHVzaCgtMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciB0aW1lU3RhbXAgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgY29ycmVjdCA9IGRhdGEuY29ycmVjdDtcbiAgICAgICAgdmFyIHN0b3JhZ2VPYmogPSB7XG4gICAgICAgICAgICBhbnN3ZXI6IHRoaXMucHJlZ25hbnRJbmRleEFycmF5LmpvaW4oXCI7XCIpLFxuICAgICAgICAgICAgbWluX2hlaWdodDogdGhpcy5taW5oZWlnaHQsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVTdGFtcCxcbiAgICAgICAgICAgIGNvcnJlY3Q6IGNvcnJlY3QsXG4gICAgICAgIH07XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VPYmopXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZGlzYWJsZUludGVyYWN0aW9uKCkge1xuICAgICAgICAkKHRoaXMucmVzZXRCdXR0b24pLmhpZGUoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRyYWdQYWlyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIE5vIG1vcmUgZHJhZ2dpbmdcbiAgICAgICAgICAgICQodGhpcy5kcmFnUGFpckFycmF5W2ldWzBdKS5hdHRyKFwiZHJhZ2dhYmxlXCIsIFwiZmFsc2VcIik7XG4gICAgICAgICAgICAkKHRoaXMuZHJhZ1BhaXJBcnJheVtpXVswXSkuY3NzKFwiY3Vyc29yXCIsIFwiaW5pdGlhbFwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09IEZpbmQgdGhlIGN1c3RvbSBIVE1MIHRhZ3MgYW5kID09XG49PSAgIGV4ZWN1dGUgb3VyIGNvZGUgb24gdGhlbSAgICA9PVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiQoZG9jdW1lbnQpLm9uKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PWRyYWduZHJvcF1cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIG9wdHMgPSB7XG4gICAgICAgICAgICBvcmlnOiB0aGlzLFxuICAgICAgICAgICAgdXNlUnVuZXN0b25lU2VydmljZXM6IGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoJCh0aGlzKS5jbG9zZXN0KFwiW2RhdGEtY29tcG9uZW50PXRpbWVkQXNzZXNzbWVudF1cIikubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIC8vIElmIHRoaXMgZWxlbWVudCBleGlzdHMgd2l0aGluIGEgdGltZWQgY29tcG9uZW50LCBkb24ndCByZW5kZXIgaXQgaGVyZVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBkZExpc3RbdGhpcy5pZF0gPSBuZXcgRHJhZ05Ecm9wKG9wdHMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIHJlbmRlcmluZyBEcmFnTkRyb3AgUHJvYmxlbSAke3RoaXMuaWR9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEcmFnTkRyb3AgZnJvbSBcIi4vZHJhZ25kcm9wLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVkRHJhZ05Ecm9wIGV4dGVuZHMgRHJhZ05Ecm9wIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKG9wdHMpO1xuICAgICAgICB0aGlzLmZpbmlzaFNldHRpbmdVcCgpO1xuICAgICAgICB0aGlzLnJlbmRlclRpbWVkSWNvbih0aGlzLmNvbnRhaW5lckRpdik7XG4gICAgICAgIHRoaXMuaGlkZUJ1dHRvbnMoKTtcbiAgICB9XG4gICAgaGlkZUJ1dHRvbnMoKSB7XG4gICAgICAgICQodGhpcy5zdWJtaXRCdXR0b24pLmhpZGUoKTtcbiAgICB9XG4gICAgcmVuZGVyVGltZWRJY29uKGNvbXBvbmVudCkge1xuICAgICAgICAvLyByZW5kZXJzIHRoZSBjbG9jayBpY29uIG9uIHRpbWVkIGNvbXBvbmVudHMuICAgIFRoZSBjb21wb25lbnQgcGFyYW1ldGVyXG4gICAgICAgIC8vIGlzIHRoZSBlbGVtZW50IHRoYXQgdGhlIGljb24gc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgICAgICB2YXIgdGltZUljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgdGltZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAkKHRpbWVJY29uKS5hdHRyKHtcbiAgICAgICAgICAgIHNyYzogXCIuLi9fc3RhdGljL2Nsb2NrLnBuZ1wiLFxuICAgICAgICAgICAgc3R5bGU6IFwid2lkdGg6MTVweDtoZWlnaHQ6MTVweFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGltZUljb25EaXYuY2xhc3NOYW1lID0gXCJ0aW1lVGlwXCI7XG4gICAgICAgIHRpbWVJY29uRGl2LnRpdGxlID0gXCJcIjtcbiAgICAgICAgdGltZUljb25EaXYuYXBwZW5kQ2hpbGQodGltZUljb24pO1xuICAgICAgICAkKGNvbXBvbmVudCkucHJlcGVuZCh0aW1lSWNvbkRpdik7XG4gICAgfVxuICAgIGNoZWNrQ29ycmVjdFRpbWVkKCkge1xuICAgICAgICAvLyBSZXR1cm5zIGlmIHRoZSBxdWVzdGlvbiB3YXMgY29ycmVjdC4gICAgVXNlZCBmb3IgdGltZWQgYXNzZXNzbWVudCBncmFkaW5nLlxuICAgICAgICBpZiAodGhpcy51bmFuc3dlcmVkTnVtID09PSB0aGlzLmRyYWdQYWlyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmNvcnJlY3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGhpcy5jb3JyZWN0KSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVFwiO1xuICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGXCI7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhpZGVGZWVkYmFjaygpIHtcbiAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5oaWRlKCk7XG4gICAgfVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9IHt9O1xufVxud2luZG93LmNvbXBvbmVudF9mYWN0b3J5W1wiZHJhZ25kcm9wXCJdID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICBpZiAob3B0cy50aW1lZCkge1xuICAgICAgICByZXR1cm4gbmV3IFRpbWVkRHJhZ05Ecm9wKG9wdHMpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERyYWdORHJvcChvcHRzKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
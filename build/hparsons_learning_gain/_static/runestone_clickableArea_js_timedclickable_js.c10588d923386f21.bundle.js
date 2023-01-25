"use strict";
(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_clickableArea_js_timedclickable_js"],{

/***/ 51168:
/*!***************************************************!*\
  !*** ./runestone/clickableArea/css/clickable.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 5464:
/*!*************************************************!*\
  !*** ./runestone/clickableArea/js/clickable.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CAList": () => (/* binding */ CAList),
/* harmony export */   "default": () => (/* binding */ ClickableArea)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _css_clickable_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/clickable.css */ 51168);
/*==========================================
=======     Master clickable.js     ========
============================================
===   This file contains the JS for the  ===
===  Runestone clickable area component. ===
============================================
===              Created by              ===
===           Isaiah Mayerchak           ===
===                7/1/15                ===
==========================================*/





var CAList = {}; // Object that contains all instances of ClickableArea objects

class ClickableArea extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; // entire <div> element that will be replaced by new HTML
        this.origElem = orig;
        this.divid = orig.id;
        this.useRunestoneServices = opts.useRunestoneServices;
        this.clickableArray = []; // holds all clickable elements
        this.correctArray = []; // holds the IDs of all correct clickable span elements, used for eval
        this.incorrectArray = []; // holds IDs of all incorrect clickable span elements, used for eval
        //For use with Sphinx-rendered html
        this.isTable = false;
        if ($(this.origElem).data("cc") !== undefined) {
            if ($(this.origElem).is("[data-table]")) {
                this.isTable = true;
                this.ccArray = $(this.origElem).data("cc").split(";");
                this.ciArray = $(this.origElem).data("ci").split(";");
            } else {
                this.ccArray = $(this.origElem).data("cc").split(",");
                this.ciArray = $(this.origElem).data("ci").split(",");
            }
        }
        // For use in the recursive replace function
        this.clickIndex = 0; // Index of this.clickedIndexArray that we're checking against
        this.clickableCounter = 0; // Index of the current clickable element
        this.getQuestion();
        this.getFeedback();
        this.renderNewElements();
        this.caption = "Clickable";
        this.addCaption("runestone");
        this.checkServer("clickableArea", true);
        if (typeof Prism !== "undefined") {
            Prism.highlightAllUnder(this.containerDiv);
        }
    }
    /*===========================
    == Update basic attributes ==
    ===========================*/
    getQuestion() {
        for (var i = 0; i < this.origElem.childNodes.length; i++) {
            if ($(this.origElem.childNodes[i]).is("[data-question]")) {
                this.question = this.origElem.childNodes[i];
                break;
            }
        }
    }
    getFeedback() {
        this.feedback = "";
        for (var i = 0; i < this.origElem.childNodes.length; i++) {
            if ($(this.origElem.childNodes[i]).is("[data-feedback]")) {
                this.feedback = this.origElem.childNodes[i];
            }
        }
        if (this.feedback !== "") {
            // Get the feedback element out of the container if the user has defined feedback
            $(this.feedback).remove();
            this.feedback = this.feedback.innerHTML;
        }
    }
    /*===========================================
    ====   Functions generating final HTML   ====
    ===========================================*/
    renderNewElements() {
        // wrapper function for generating everything
        this.containerDiv = document.createElement("div");
        this.containerDiv.id = this.origElem.id;
        this.containerDiv.appendChild(this.question);
        $(this.containerDiv).addClass(this.origElem.getAttribute("class"));
        this.newDiv = document.createElement("div");
        var newContent = $(this.origElem).html();
        while (newContent[0] === "\n") {
            newContent = newContent.slice(1);
        }
        this.newDiv.innerHTML = newContent;
        this.containerDiv.appendChild(this.newDiv);
        this.createButtons();
        this.createFeedbackDiv();
        $(this.origElem).replaceWith(this.containerDiv);
    }
    createButtons() {
        this.submitButton = document.createElement("button"); // Check me button
        this.submitButton.textContent = "Check Me";
        $(this.submitButton).attr({
            class: "btn btn-success",
            name: "do answer",
            type: "button",
        });
        this.submitButton.onclick = function () {
            this.checkCurrentAnswer();
            this.logCurrentAnswer();
            this.renderFeedback();
        }.bind(this);
        this.containerDiv.appendChild(this.submitButton);
    }
    createFeedbackDiv() {
        this.feedBackDiv = document.createElement("div");
        this.containerDiv.appendChild(document.createElement("br"));
        this.containerDiv.appendChild(this.feedBackDiv);
    }
    /*===================================
    === Checking/restoring from storage ===
    ===================================*/
    restoreAnswers(data) {
        // Restore answers from storage retrieval done in RunestoneBase or from local storage
        if (data.answer !== undefined) {
            // if we got data from the server
            this.hasStoredAnswers = true;
            this.clickedIndexArray = data.answer.split(";");
        }
        if (this.ccArray === undefined) {
            this.modifyClickables(this.newDiv.childNodes);
        } else {
            // For use with Sphinx-rendered HTML
            this.ccCounter = 0;
            this.ccIndex = 0;
            this.ciIndex = 0;
            if (!this.isTable) {
                this.modifyViaCC(this.newDiv.children);
            } else {
                this.modifyTableViaCC(this.newDiv.children);
            }
        }
    }
    checkLocalStorage() {
        if (this.graderactive) {
            return;
        }
        var storageObj;
        // Gets previous answer data from local storage if it exists
        this.hasStoredAnswers = false;
        var len = localStorage.length;
        if (len > 0) {
            var ex = localStorage.getItem(this.localStorageKey());
            if (ex !== null) {
                this.hasStoredAnswers = true;
                try {
                    storageObj = JSON.parse(ex);
                    this.clickedIndexArray = storageObj.answer.split(";");
                } catch (err) {
                    // error while parsing; likely due to bad value stored in storage
                    console.log(err.message);
                    localStorage.removeItem(this.localStorageKey());
                    this.hasStoredAnswers = false;
                    this.restoreAnswers({});
                    return;
                }
                if (this.useRunestoneServices) {
                    // log answer to server
                    this.givenIndexArray = [];
                    for (var i = 0; i < this.clickableArray.length; i++) {
                        if (
                            $(this.clickableArray[i]).hasClass(
                                "clickable-clicked"
                            )
                        ) {
                            this.givenIndexArray.push(i);
                        }
                    }
                    this.logBookEvent({
                        event: "clickableArea",
                        act: this.clickedIndexArray.join(";"),
                        answer: this.clickedIndexArray.join(";"),
                        div_id: this.divid,
                        correct: storageObj.correct,
                    });
                }
            }
        }
        this.restoreAnswers({}); // pass empty object
    }
    setLocalStorage(data) {
        // Array of the indices of clicked elements is passed to local storage
        var answer;
        if (data.answer !== undefined) {
            // If we got data from the server, we can just use that
            answer = this.clickedIndexArray.join(";");
        } else {
            this.givenIndexArray = [];
            for (var i = 0; i < this.clickableArray.length; i++) {
                if ($(this.clickableArray[i]).hasClass("clickable-clicked")) {
                    this.givenIndexArray.push(i);
                }
            }
            answer = this.givenIndexArray.join(";");
        }
        var timeStamp = new Date();
        var correct = data.correct;
        var storageObject = {
            answer: answer,
            correct: correct,
            timestamp: timeStamp,
        };
        localStorage.setItem(
            this.localStorageKey(),
            JSON.stringify(storageObject)
        );
    }
    /*==========================
    === Auxilliary functions ===
    ==========================*/
    modifyClickables(childNodes) {
        // Strips the data-correct/data-incorrect labels and updates the correct/incorrect arrays
        for (var i = 0; i < childNodes.length; i++) {
            if (
                $(childNodes[i]).is("[data-correct]") ||
                $(childNodes[i]).is("[data-incorrect]")
            ) {
                this.manageNewClickable(childNodes[i]);
                if ($(childNodes[i]).is("[data-correct]")) {
                    $(childNodes[i]).removeAttr("data-correct");
                    this.correctArray.push(childNodes[i]);
                } else {
                    $(childNodes[i]).removeAttr("data-incorrect");
                    this.incorrectArray.push(childNodes[i]);
                }
            }
            if (childNodes[i].childNodes.length !== 0) {
                this.modifyClickables(childNodes[i].childNodes);
            }
        }
    }
    modifyViaCC(children) {
        for (var i = 0; i < children.length; i++) {
            if (children[i].children.length !== 0) {
                this.modifyViaCC(children[i].children);
            } else {
                this.ccCounter++;
                if (this.ccCounter === Math.floor(this.ccArray[this.ccIndex])) {
                    this.manageNewClickable(children[i]);
                    this.correctArray.push(children[i]);
                    this.ccIndex++;
                } else if (
                    this.ccCounter === Math.floor(this.ciArray[this.ciIndex])
                ) {
                    this.manageNewClickable(children[i]);
                    this.incorrectArray.push(children[i]);
                    this.ciIndex++;
                }
            }
        }
    }
    modifyTableViaCC(children) {
        // table version of modifyViaCC
        var tComponentArr = [];
        for (let i = 0; i < children.length; i++) {
            if (children[i].nodeName === "TABLE") {
                let tmp = children[i];
                for (let j = 0; j < tmp.children.length; j++) {
                    if (tmp.children[j].nodeName === "THEAD") {
                        tComponentArr.push(tmp.children[j]);
                    } else if (tmp.children[j].nodeName === "TBODY") {
                        tComponentArr.push(tmp.children[j]);
                    } else if (tmp.children[j].nodeName === "TFOOT") {
                        tComponentArr.push(tmp.children[j]);
                    }
                }
            }
        }
        for (var t = 0; t < tComponentArr.length; t++) {
            for (let i = 0; i < tComponentArr[t].children.length; i++) {
                this.ccCounter++;
                // First check if the entire row needs to be clickable
                if (
                    this.ccIndex < this.ccArray.length &&
                    this.ccCounter ===
                        Math.floor(this.ccArray[this.ccIndex].split(",")[0]) &&
                    Math.floor(this.ccArray[this.ccIndex].split(",")[1]) === 0
                ) {
                    this.manageNewClickable(tComponentArr[t].children[i]);
                    this.correctArray.push(tComponentArr[t].children[i]);
                    this.ccIndex++;
                } else if (
                    this.ciIndex < this.ciArray.length &&
                    this.ccCounter ===
                        Math.floor(this.ciArray[this.ciIndex].split(",")[0]) &&
                    Math.floor(this.ciArray[this.ciIndex].split(",")[1]) === 0
                ) {
                    this.manageNewClickable(tComponentArr[t].children[i]);
                    this.incorrectArray.push(tComponentArr[t].children[i]);
                    this.ciIndex++;
                } else {
                    // If not, check the individual data cells
                    for (
                        let j = 0;
                        j < tComponentArr[t].children[i].children.length;
                        j++
                    ) {
                        let tmp = j + 1;
                        if (
                            this.ccIndex < this.ccArray.length &&
                            tmp ===
                                Math.floor(
                                    this.ccArray[this.ccIndex].split(",")[1]
                                ) &&
                            this.ccCounter ===
                                Math.floor(
                                    this.ccArray[this.ccIndex].split(",")[0]
                                )
                        ) {
                            this.manageNewClickable(
                                tComponentArr[t].children[i].children[j]
                            );
                            this.correctArray.push(
                                tComponentArr[t].children[i].children[j]
                            );
                            this.ccIndex++;
                        } else if (
                            this.ciIndex < this.ciArray.length &&
                            tmp ===
                                Math.floor(
                                    this.ciArray[this.ciIndex].split(",")[1]
                                ) &&
                            this.ccCounter ===
                                Math.floor(
                                    this.ciArray[this.ciIndex].split(",")[0]
                                )
                        ) {
                            this.manageNewClickable(
                                tComponentArr[t].children[i].children[j]
                            );
                            this.incorrectArray.push(
                                tComponentArr[t].children[i].children[j]
                            );
                            this.ciIndex++;
                        }
                    }
                }
            }
        }
    }
    manageNewClickable(clickable) {
        // adds the "clickable" functionality
        $(clickable).addClass("clickable");
        if (this.hasStoredAnswers) {
            // Check if the element we're about to append to the pre was in local storage as clicked via its index
            if (
                this.clickedIndexArray[this.clickIndex].toString() ===
                this.clickableCounter.toString()
            ) {
                $(clickable).addClass("clickable-clicked");
                this.clickIndex++;
                if (this.clickIndex === this.clickedIndexArray.length) {
                    // Stop doing this if the index array is used up
                    this.hasStoredAnswers = false;
                }
            }
        }
        let self = this;
        clickable.onclick = function () {
            self.isAnswered = true;
            if ($(this).hasClass("clickable-clicked")) {
                $(this).removeClass("clickable-clicked");
                $(this).removeClass("clickable-incorrect");
            } else {
                $(this).addClass("clickable-clicked");
            }
        };
        this.clickableArray.push(clickable);
        this.clickableCounter++;
    }
    /*======================================
    == Evaluation and displaying feedback ==
    ======================================*/
    checkCurrentAnswer() {
        // Evaluation is done by iterating over the correct/incorrect arrays and checking by class
        this.correct = true;
        this.correctNum = 0;
        this.incorrectNum = 0;
        for (let i = 0; i < this.correctArray.length; i++) {
            if (!$(this.correctArray[i]).hasClass("clickable-clicked")) {
                this.correct = false;
            } else {
                this.correctNum++;
            }
        }
        for (let i = 0; i < this.incorrectArray.length; i++) {
            if ($(this.incorrectArray[i]).hasClass("clickable-clicked")) {
                this.correct = false;
                this.incorrectNum++;
            } else {
                $(this.incorrectArray[i]).removeClass("clickable-incorrect");
            }
        }
        this.percent =
            (this.correctNum - this.incorrectNum) / this.correctArray.length;
        this.setLocalStorage({ correct: this.correct ? "T" : "F" });
    }

    async logCurrentAnswer(sid) {
        const answer = this.givenIndexArray.join(";");
        let data = {
            event: "clickableArea",
            answer: answer,
            act: answer,
            div_id: this.divid,
            correct: this.correct ? "T" : "F",
        };
        if (typeof sid !== "undefined") {
            data.sid = sid;
        }
        await this.logBookEvent(data);
    }

    renderFeedback() {
        if (this.correct) {
            $(this.feedBackDiv).html("You are Correct!");
            $(this.feedBackDiv).attr("class", "alert alert-info");
        } else {
            for (let i = 0; i < this.incorrectArray.length; i++) {
                if ($(this.incorrectArray[i]).hasClass("clickable-clicked")) {
                    $(this.incorrectArray[i]).addClass("clickable-incorrect");
                } else {
                    $(this.incorrectArray[i]).removeClass(
                        "clickable-incorrect"
                    );
                }
            }
            $(this.feedBackDiv).html(
                "Incorrect. You clicked on " +
                    this.correctNum +
                    " of the " +
                    this.correctArray.length.toString() +
                    " correct elements and " +
                    this.incorrectNum +
                    " of the " +
                    this.incorrectArray.length.toString() +
                    " incorrect elements. " +
                    this.feedback
            );
            $(this.feedBackDiv).attr("class", "alert alert-danger");
        }
    }

    disableInteraction() {
        for (var i = 0; i < this.clickableArray.length; i++) {
            $(this.clickableArray[i]).css("cursor", "initial");
            this.clickableArray[i].onclick = function () {
                return;
            };
        }
    }
}

/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
$(document).on("runestone:login-complete", function () {
    $("[data-component=clickablearea]").each(function (index) {
        if ($(this).closest("[data-component=timedAssessment]").length == 0) {
            // If this element exists within a timed component, don't render it here
            try {
                CAList[this.id] = new ClickableArea({
                    orig: this,
                    useRunestoneServices: eBookConfig.useRunestoneServices,
                });
            } catch (err) {
                console.log(`Error rendering ClickableArea Problem ${this.id}
                             Details: ${err}`);
            }
        }
    });
});


/***/ }),

/***/ 61581:
/*!******************************************************!*\
  !*** ./runestone/clickableArea/js/timedclickable.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimedClickableArea)
/* harmony export */ });
/* harmony import */ var _clickable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickable.js */ 5464);


("use strict");

class TimedClickableArea extends _clickable_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        this.restoreAnswers({});
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
        // Returns if the question was correct, incorrect, or skipped (return null in the last case)
        if (this.correctNum === 0 && this.incorrectNum === 0) {
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
window.component_factory.clickablearea = function (opts) {
    if (opts.timed) {
        return new TimedClickableArea(opts);
    }
    return new _clickable_js__WEBPACK_IMPORTED_MODULE_0__["default"](opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX2NsaWNrYWJsZUFyZWFfanNfdGltZWRjbGlja2FibGVfanMuYzEwNTg4ZDkyMzM4NmYyMS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNhOztBQUVnRDtBQUMvQjs7QUFFdkIsaUJBQWlCOztBQUVULDRCQUE0QixtRUFBYTtBQUN4RDtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyxnQ0FBZ0M7QUFDaEMsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkUsbUVBQW1FO0FBQ25FLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFDQUFxQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFDQUFxQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RSxrQkFBa0I7QUFDbEIsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdDQUFnQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRCw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsR0FBRztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQsVUFBVTtBQUNWO0FBQ0EsNEJBQTRCLGdDQUFnQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQSxnQ0FBZ0MseUJBQXlCO0FBQ3pEO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQsNEJBQTRCLHNDQUFzQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4QkFBOEI7QUFDdEQ7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0NBQWdDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1DQUFtQztBQUNsRTs7QUFFQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNEJBQTRCLGdDQUFnQztBQUM1RDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsZ0NBQWdDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QscUVBQXFFO0FBQ3JFLHdDQUF3QyxJQUFJO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQy9kMEM7O0FBRTNDOztBQUVlLGlDQUFpQyxxREFBYTtBQUM3RDtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscURBQWE7QUFDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NsaWNrYWJsZUFyZWEvY3NzL2NsaWNrYWJsZS5jc3M/NjFhNyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NsaWNrYWJsZUFyZWEvanMvY2xpY2thYmxlLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY2xpY2thYmxlQXJlYS9qcy90aW1lZGNsaWNrYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PT09PSAgICAgTWFzdGVyIGNsaWNrYWJsZS5qcyAgICAgPT09PT09PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT0gICBUaGlzIGZpbGUgY29udGFpbnMgdGhlIEpTIGZvciB0aGUgID09PVxuPT09ICBSdW5lc3RvbmUgY2xpY2thYmxlIGFyZWEgY29tcG9uZW50LiA9PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT0gICAgICAgICAgICAgIENyZWF0ZWQgYnkgICAgICAgICAgICAgID09PVxuPT09ICAgICAgICAgICBJc2FpYWggTWF5ZXJjaGFrICAgICAgICAgICA9PT1cbj09PSAgICAgICAgICAgICAgICA3LzEvMTUgICAgICAgICAgICAgICAgPT09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZS5qc1wiO1xuaW1wb3J0IFwiLi4vY3NzL2NsaWNrYWJsZS5jc3NcIjtcblxuZXhwb3J0IHZhciBDQUxpc3QgPSB7fTsgLy8gT2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIGluc3RhbmNlcyBvZiBDbGlja2FibGVBcmVhIG9iamVjdHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpY2thYmxlQXJlYSBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIob3B0cyk7XG4gICAgICAgIHZhciBvcmlnID0gb3B0cy5vcmlnOyAvLyBlbnRpcmUgPGRpdj4gZWxlbWVudCB0aGF0IHdpbGwgYmUgcmVwbGFjZWQgYnkgbmV3IEhUTUxcbiAgICAgICAgdGhpcy5vcmlnRWxlbSA9IG9yaWc7XG4gICAgICAgIHRoaXMuZGl2aWQgPSBvcmlnLmlkO1xuICAgICAgICB0aGlzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzID0gb3B0cy51c2VSdW5lc3RvbmVTZXJ2aWNlcztcbiAgICAgICAgdGhpcy5jbGlja2FibGVBcnJheSA9IFtdOyAvLyBob2xkcyBhbGwgY2xpY2thYmxlIGVsZW1lbnRzXG4gICAgICAgIHRoaXMuY29ycmVjdEFycmF5ID0gW107IC8vIGhvbGRzIHRoZSBJRHMgb2YgYWxsIGNvcnJlY3QgY2xpY2thYmxlIHNwYW4gZWxlbWVudHMsIHVzZWQgZm9yIGV2YWxcbiAgICAgICAgdGhpcy5pbmNvcnJlY3RBcnJheSA9IFtdOyAvLyBob2xkcyBJRHMgb2YgYWxsIGluY29ycmVjdCBjbGlja2FibGUgc3BhbiBlbGVtZW50cywgdXNlZCBmb3IgZXZhbFxuICAgICAgICAvL0ZvciB1c2Ugd2l0aCBTcGhpbngtcmVuZGVyZWQgaHRtbFxuICAgICAgICB0aGlzLmlzVGFibGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuZGF0YShcImNjXCIpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmlzKFwiW2RhdGEtdGFibGVdXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNjQXJyYXkgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJjY1wiKS5zcGxpdChcIjtcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5jaUFycmF5ID0gJCh0aGlzLm9yaWdFbGVtKS5kYXRhKFwiY2lcIikuc3BsaXQoXCI7XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNjQXJyYXkgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJjY1wiKS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5jaUFycmF5ID0gJCh0aGlzLm9yaWdFbGVtKS5kYXRhKFwiY2lcIikuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEZvciB1c2UgaW4gdGhlIHJlY3Vyc2l2ZSByZXBsYWNlIGZ1bmN0aW9uXG4gICAgICAgIHRoaXMuY2xpY2tJbmRleCA9IDA7IC8vIEluZGV4IG9mIHRoaXMuY2xpY2tlZEluZGV4QXJyYXkgdGhhdCB3ZSdyZSBjaGVja2luZyBhZ2FpbnN0XG4gICAgICAgIHRoaXMuY2xpY2thYmxlQ291bnRlciA9IDA7IC8vIEluZGV4IG9mIHRoZSBjdXJyZW50IGNsaWNrYWJsZSBlbGVtZW50XG4gICAgICAgIHRoaXMuZ2V0UXVlc3Rpb24oKTtcbiAgICAgICAgdGhpcy5nZXRGZWVkYmFjaygpO1xuICAgICAgICB0aGlzLnJlbmRlck5ld0VsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IFwiQ2xpY2thYmxlXCI7XG4gICAgICAgIHRoaXMuYWRkQ2FwdGlvbihcInJ1bmVzdG9uZVwiKTtcbiAgICAgICAgdGhpcy5jaGVja1NlcnZlcihcImNsaWNrYWJsZUFyZWFcIiwgdHJ1ZSk7XG4gICAgICAgIGlmICh0eXBlb2YgUHJpc20gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIFByaXNtLmhpZ2hsaWdodEFsbFVuZGVyKHRoaXMuY29udGFpbmVyRGl2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09IFVwZGF0ZSBiYXNpYyBhdHRyaWJ1dGVzID09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBnZXRRdWVzdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlc1tpXSkuaXMoXCJbZGF0YS1xdWVzdGlvbl1cIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uID0gdGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldEZlZWRiYWNrKCkge1xuICAgICAgICB0aGlzLmZlZWRiYWNrID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlc1tpXSkuaXMoXCJbZGF0YS1mZWVkYmFja11cIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRiYWNrID0gdGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZlZWRiYWNrICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIGZlZWRiYWNrIGVsZW1lbnQgb3V0IG9mIHRoZSBjb250YWluZXIgaWYgdGhlIHVzZXIgaGFzIGRlZmluZWQgZmVlZGJhY2tcbiAgICAgICAgICAgICQodGhpcy5mZWVkYmFjaykucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrID0gdGhpcy5mZWVkYmFjay5pbm5lckhUTUw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09PSAgIEZ1bmN0aW9ucyBnZW5lcmF0aW5nIGZpbmFsIEhUTUwgICA9PT09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgcmVuZGVyTmV3RWxlbWVudHMoKSB7XG4gICAgICAgIC8vIHdyYXBwZXIgZnVuY3Rpb24gZm9yIGdlbmVyYXRpbmcgZXZlcnl0aGluZ1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmlkID0gdGhpcy5vcmlnRWxlbS5pZDtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5xdWVzdGlvbik7XG4gICAgICAgICQodGhpcy5jb250YWluZXJEaXYpLmFkZENsYXNzKHRoaXMub3JpZ0VsZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikpO1xuICAgICAgICB0aGlzLm5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBuZXdDb250ZW50ID0gJCh0aGlzLm9yaWdFbGVtKS5odG1sKCk7XG4gICAgICAgIHdoaWxlIChuZXdDb250ZW50WzBdID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgICBuZXdDb250ZW50ID0gbmV3Q29udGVudC5zbGljZSgxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5ld0Rpdi5pbm5lckhUTUwgPSBuZXdDb250ZW50O1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLm5ld0Rpdik7XG4gICAgICAgIHRoaXMuY3JlYXRlQnV0dG9ucygpO1xuICAgICAgICB0aGlzLmNyZWF0ZUZlZWRiYWNrRGl2KCk7XG4gICAgICAgICQodGhpcy5vcmlnRWxlbSkucmVwbGFjZVdpdGgodGhpcy5jb250YWluZXJEaXYpO1xuICAgIH1cbiAgICBjcmVhdGVCdXR0b25zKCkge1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IC8vIENoZWNrIG1lIGJ1dHRvblxuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2hlY2sgTWVcIjtcbiAgICAgICAgJCh0aGlzLnN1Ym1pdEJ1dHRvbikuYXR0cih7XG4gICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgIG5hbWU6IFwiZG8gYW5zd2VyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tDdXJyZW50QW5zd2VyKCk7XG4gICAgICAgICAgICB0aGlzLmxvZ0N1cnJlbnRBbnN3ZXIoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRmVlZGJhY2soKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLnN1Ym1pdEJ1dHRvbik7XG4gICAgfVxuICAgIGNyZWF0ZUZlZWRiYWNrRGl2KCkge1xuICAgICAgICB0aGlzLmZlZWRCYWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5mZWVkQmFja0Rpdik7XG4gICAgfVxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT0gQ2hlY2tpbmcvcmVzdG9yaW5nIGZyb20gc3RvcmFnZSA9PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgcmVzdG9yZUFuc3dlcnMoZGF0YSkge1xuICAgICAgICAvLyBSZXN0b3JlIGFuc3dlcnMgZnJvbSBzdG9yYWdlIHJldHJpZXZhbCBkb25lIGluIFJ1bmVzdG9uZUJhc2Ugb3IgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGlmIChkYXRhLmFuc3dlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBnb3QgZGF0YSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgICAgICAgIHRoaXMuaGFzU3RvcmVkQW5zd2VycyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNsaWNrZWRJbmRleEFycmF5ID0gZGF0YS5hbnN3ZXIuc3BsaXQoXCI7XCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNjQXJyYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5tb2RpZnlDbGlja2FibGVzKHRoaXMubmV3RGl2LmNoaWxkTm9kZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRm9yIHVzZSB3aXRoIFNwaGlueC1yZW5kZXJlZCBIVE1MXG4gICAgICAgICAgICB0aGlzLmNjQ291bnRlciA9IDA7XG4gICAgICAgICAgICB0aGlzLmNjSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5jaUluZGV4ID0gMDtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1RhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RpZnlWaWFDQyh0aGlzLm5ld0Rpdi5jaGlsZHJlbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kaWZ5VGFibGVWaWFDQyh0aGlzLm5ld0Rpdi5jaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tMb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyYWRlcmFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdG9yYWdlT2JqO1xuICAgICAgICAvLyBHZXRzIHByZXZpb3VzIGFuc3dlciBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZSBpZiBpdCBleGlzdHNcbiAgICAgICAgdGhpcy5oYXNTdG9yZWRBbnN3ZXJzID0gZmFsc2U7XG4gICAgICAgIHZhciBsZW4gPSBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xuICAgICAgICBpZiAobGVuID4gMCkge1xuICAgICAgICAgICAgdmFyIGV4ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSk7XG4gICAgICAgICAgICBpZiAoZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1N0b3JlZEFuc3dlcnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VPYmogPSBKU09OLnBhcnNlKGV4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlja2VkSW5kZXhBcnJheSA9IHN0b3JhZ2VPYmouYW5zd2VyLnNwbGl0KFwiO1wiKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3Igd2hpbGUgcGFyc2luZzsgbGlrZWx5IGR1ZSB0byBiYWQgdmFsdWUgc3RvcmVkIGluIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNTdG9yZWRBbnN3ZXJzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdG9yZUFuc3dlcnMoe30pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxvZyBhbnN3ZXIgdG8gc2VydmVyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2l2ZW5JbmRleEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jbGlja2FibGVBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcy5jbGlja2FibGVBcnJheVtpXSkuaGFzQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2thYmxlLWNsaWNrZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2l2ZW5JbmRleEFycmF5LnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dCb29rRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IFwiY2xpY2thYmxlQXJlYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0OiB0aGlzLmNsaWNrZWRJbmRleEFycmF5LmpvaW4oXCI7XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyOiB0aGlzLmNsaWNrZWRJbmRleEFycmF5LmpvaW4oXCI7XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVjdDogc3RvcmFnZU9iai5jb3JyZWN0LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN0b3JlQW5zd2Vycyh7fSk7IC8vIHBhc3MgZW1wdHkgb2JqZWN0XG4gICAgfVxuICAgIHNldExvY2FsU3RvcmFnZShkYXRhKSB7XG4gICAgICAgIC8vIEFycmF5IG9mIHRoZSBpbmRpY2VzIG9mIGNsaWNrZWQgZWxlbWVudHMgaXMgcGFzc2VkIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgdmFyIGFuc3dlcjtcbiAgICAgICAgaWYgKGRhdGEuYW5zd2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGdvdCBkYXRhIGZyb20gdGhlIHNlcnZlciwgd2UgY2FuIGp1c3QgdXNlIHRoYXRcbiAgICAgICAgICAgIGFuc3dlciA9IHRoaXMuY2xpY2tlZEluZGV4QXJyYXkuam9pbihcIjtcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdpdmVuSW5kZXhBcnJheSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNsaWNrYWJsZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcy5jbGlja2FibGVBcnJheVtpXSkuaGFzQ2xhc3MoXCJjbGlja2FibGUtY2xpY2tlZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdpdmVuSW5kZXhBcnJheS5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuc3dlciA9IHRoaXMuZ2l2ZW5JbmRleEFycmF5LmpvaW4oXCI7XCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0aW1lU3RhbXAgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgY29ycmVjdCA9IGRhdGEuY29ycmVjdDtcbiAgICAgICAgdmFyIHN0b3JhZ2VPYmplY3QgPSB7XG4gICAgICAgICAgICBhbnN3ZXI6IGFuc3dlcixcbiAgICAgICAgICAgIGNvcnJlY3Q6IGNvcnJlY3QsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVTdGFtcCxcbiAgICAgICAgfTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZUtleSgpLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZU9iamVjdClcbiAgICAgICAgKTtcbiAgICB9XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PSBBdXhpbGxpYXJ5IGZ1bmN0aW9ucyA9PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgbW9kaWZ5Q2xpY2thYmxlcyhjaGlsZE5vZGVzKSB7XG4gICAgICAgIC8vIFN0cmlwcyB0aGUgZGF0YS1jb3JyZWN0L2RhdGEtaW5jb3JyZWN0IGxhYmVscyBhbmQgdXBkYXRlcyB0aGUgY29ycmVjdC9pbmNvcnJlY3QgYXJyYXlzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICQoY2hpbGROb2Rlc1tpXSkuaXMoXCJbZGF0YS1jb3JyZWN0XVwiKSB8fFxuICAgICAgICAgICAgICAgICQoY2hpbGROb2Rlc1tpXSkuaXMoXCJbZGF0YS1pbmNvcnJlY3RdXCIpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hbmFnZU5ld0NsaWNrYWJsZShjaGlsZE5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAoJChjaGlsZE5vZGVzW2ldKS5pcyhcIltkYXRhLWNvcnJlY3RdXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoY2hpbGROb2Rlc1tpXSkucmVtb3ZlQXR0cihcImRhdGEtY29ycmVjdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0QXJyYXkucHVzaChjaGlsZE5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKGNoaWxkTm9kZXNbaV0pLnJlbW92ZUF0dHIoXCJkYXRhLWluY29ycmVjdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3RBcnJheS5wdXNoKGNoaWxkTm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzW2ldLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RpZnlDbGlja2FibGVzKGNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbW9kaWZ5VmlhQ0MoY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuW2ldLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kaWZ5VmlhQ0MoY2hpbGRyZW5baV0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNjQ291bnRlcisrO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNjQ291bnRlciA9PT0gTWF0aC5mbG9vcih0aGlzLmNjQXJyYXlbdGhpcy5jY0luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW5hZ2VOZXdDbGlja2FibGUoY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RBcnJheS5wdXNoKGNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jY0luZGV4Kys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jY0NvdW50ZXIgPT09IE1hdGguZmxvb3IodGhpcy5jaUFycmF5W3RoaXMuY2lJbmRleF0pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFuYWdlTmV3Q2xpY2thYmxlKGNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3RBcnJheS5wdXNoKGNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaUluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG1vZGlmeVRhYmxlVmlhQ0MoY2hpbGRyZW4pIHtcbiAgICAgICAgLy8gdGFibGUgdmVyc2lvbiBvZiBtb2RpZnlWaWFDQ1xuICAgICAgICB2YXIgdENvbXBvbmVudEFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW5baV0ubm9kZU5hbWUgPT09IFwiVEFCTEVcIikge1xuICAgICAgICAgICAgICAgIGxldCB0bXAgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRtcC5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG1wLmNoaWxkcmVuW2pdLm5vZGVOYW1lID09PSBcIlRIRUFEXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRDb21wb25lbnRBcnIucHVzaCh0bXAuY2hpbGRyZW5bal0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRtcC5jaGlsZHJlbltqXS5ub2RlTmFtZSA9PT0gXCJUQk9EWVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0Q29tcG9uZW50QXJyLnB1c2godG1wLmNoaWxkcmVuW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0bXAuY2hpbGRyZW5bal0ubm9kZU5hbWUgPT09IFwiVEZPT1RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdENvbXBvbmVudEFyci5wdXNoKHRtcC5jaGlsZHJlbltqXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0Q29tcG9uZW50QXJyLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRDb21wb25lbnRBcnJbdF0uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNjQ291bnRlcisrO1xuICAgICAgICAgICAgICAgIC8vIEZpcnN0IGNoZWNrIGlmIHRoZSBlbnRpcmUgcm93IG5lZWRzIHRvIGJlIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jY0luZGV4IDwgdGhpcy5jY0FycmF5Lmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNjQ291bnRlciA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IodGhpcy5jY0FycmF5W3RoaXMuY2NJbmRleF0uc3BsaXQoXCIsXCIpWzBdKSAmJlxuICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKHRoaXMuY2NBcnJheVt0aGlzLmNjSW5kZXhdLnNwbGl0KFwiLFwiKVsxXSkgPT09IDBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW5hZ2VOZXdDbGlja2FibGUodENvbXBvbmVudEFyclt0XS5jaGlsZHJlbltpXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEFycmF5LnB1c2godENvbXBvbmVudEFyclt0XS5jaGlsZHJlbltpXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2NJbmRleCsrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2lJbmRleCA8IHRoaXMuY2lBcnJheS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jY0NvdW50ZXIgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKHRoaXMuY2lBcnJheVt0aGlzLmNpSW5kZXhdLnNwbGl0KFwiLFwiKVswXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcih0aGlzLmNpQXJyYXlbdGhpcy5jaUluZGV4XS5zcGxpdChcIixcIilbMV0pID09PSAwXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFuYWdlTmV3Q2xpY2thYmxlKHRDb21wb25lbnRBcnJbdF0uY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluY29ycmVjdEFycmF5LnB1c2godENvbXBvbmVudEFyclt0XS5jaGlsZHJlbltpXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2lJbmRleCsrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG5vdCwgY2hlY2sgdGhlIGluZGl2aWR1YWwgZGF0YSBjZWxsc1xuICAgICAgICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGogPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaiA8IHRDb21wb25lbnRBcnJbdF0uY2hpbGRyZW5baV0uY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRtcCA9IGogKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2NJbmRleCA8IHRoaXMuY2NBcnJheS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXAgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNjQXJyYXlbdGhpcy5jY0luZGV4XS5zcGxpdChcIixcIilbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2NDb3VudGVyID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jY0FycmF5W3RoaXMuY2NJbmRleF0uc3BsaXQoXCIsXCIpWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFuYWdlTmV3Q2xpY2thYmxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Q29tcG9uZW50QXJyW3RdLmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RBcnJheS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Q29tcG9uZW50QXJyW3RdLmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNjSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaUluZGV4IDwgdGhpcy5jaUFycmF5Lmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcCA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2lBcnJheVt0aGlzLmNpSW5kZXhdLnNwbGl0KFwiLFwiKVsxXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jY0NvdW50ZXIgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNpQXJyYXlbdGhpcy5jaUluZGV4XS5zcGxpdChcIixcIilbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW5hZ2VOZXdDbGlja2FibGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRDb21wb25lbnRBcnJbdF0uY2hpbGRyZW5baV0uY2hpbGRyZW5bal1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0QXJyYXkucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdENvbXBvbmVudEFyclt0XS5jaGlsZHJlbltpXS5jaGlsZHJlbltqXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaUluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWFuYWdlTmV3Q2xpY2thYmxlKGNsaWNrYWJsZSkge1xuICAgICAgICAvLyBhZGRzIHRoZSBcImNsaWNrYWJsZVwiIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgJChjbGlja2FibGUpLmFkZENsYXNzKFwiY2xpY2thYmxlXCIpO1xuICAgICAgICBpZiAodGhpcy5oYXNTdG9yZWRBbnN3ZXJzKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgZWxlbWVudCB3ZSdyZSBhYm91dCB0byBhcHBlbmQgdG8gdGhlIHByZSB3YXMgaW4gbG9jYWwgc3RvcmFnZSBhcyBjbGlja2VkIHZpYSBpdHMgaW5kZXhcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrZWRJbmRleEFycmF5W3RoaXMuY2xpY2tJbmRleF0udG9TdHJpbmcoKSA9PT1cbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrYWJsZUNvdW50ZXIudG9TdHJpbmcoKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJChjbGlja2FibGUpLmFkZENsYXNzKFwiY2xpY2thYmxlLWNsaWNrZWRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja0luZGV4Kys7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xpY2tJbmRleCA9PT0gdGhpcy5jbGlja2VkSW5kZXhBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCBkb2luZyB0aGlzIGlmIHRoZSBpbmRleCBhcnJheSBpcyB1c2VkIHVwXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzU3RvcmVkQW5zd2VycyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNsaWNrYWJsZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5pc0Fuc3dlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiY2xpY2thYmxlLWNsaWNrZWRcIikpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiY2xpY2thYmxlLWNsaWNrZWRcIik7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImNsaWNrYWJsZS1pbmNvcnJlY3RcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJjbGlja2FibGUtY2xpY2tlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGlja2FibGVBcnJheS5wdXNoKGNsaWNrYWJsZSk7XG4gICAgICAgIHRoaXMuY2xpY2thYmxlQ291bnRlcisrO1xuICAgIH1cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT0gRXZhbHVhdGlvbiBhbmQgZGlzcGxheWluZyBmZWVkYmFjayA9PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBjaGVja0N1cnJlbnRBbnN3ZXIoKSB7XG4gICAgICAgIC8vIEV2YWx1YXRpb24gaXMgZG9uZSBieSBpdGVyYXRpbmcgb3ZlciB0aGUgY29ycmVjdC9pbmNvcnJlY3QgYXJyYXlzIGFuZCBjaGVja2luZyBieSBjbGFzc1xuICAgICAgICB0aGlzLmNvcnJlY3QgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvcnJlY3ROdW0gPSAwO1xuICAgICAgICB0aGlzLmluY29ycmVjdE51bSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JyZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghJCh0aGlzLmNvcnJlY3RBcnJheVtpXSkuaGFzQ2xhc3MoXCJjbGlja2FibGUtY2xpY2tlZFwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3ROdW0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5jb3JyZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMuaW5jb3JyZWN0QXJyYXlbaV0pLmhhc0NsYXNzKFwiY2xpY2thYmxlLWNsaWNrZWRcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmluY29ycmVjdE51bSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMuaW5jb3JyZWN0QXJyYXlbaV0pLnJlbW92ZUNsYXNzKFwiY2xpY2thYmxlLWluY29ycmVjdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBlcmNlbnQgPVxuICAgICAgICAgICAgKHRoaXMuY29ycmVjdE51bSAtIHRoaXMuaW5jb3JyZWN0TnVtKSAvIHRoaXMuY29ycmVjdEFycmF5Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoeyBjb3JyZWN0OiB0aGlzLmNvcnJlY3QgPyBcIlRcIiA6IFwiRlwiIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGxvZ0N1cnJlbnRBbnN3ZXIoc2lkKSB7XG4gICAgICAgIGNvbnN0IGFuc3dlciA9IHRoaXMuZ2l2ZW5JbmRleEFycmF5LmpvaW4oXCI7XCIpO1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGV2ZW50OiBcImNsaWNrYWJsZUFyZWFcIixcbiAgICAgICAgICAgIGFuc3dlcjogYW5zd2VyLFxuICAgICAgICAgICAgYWN0OiBhbnN3ZXIsXG4gICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2aWQsXG4gICAgICAgICAgICBjb3JyZWN0OiB0aGlzLmNvcnJlY3QgPyBcIlRcIiA6IFwiRlwiLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodHlwZW9mIHNpZCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZGF0YS5zaWQgPSBzaWQ7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5sb2dCb29rRXZlbnQoZGF0YSk7XG4gICAgfVxuXG4gICAgcmVuZGVyRmVlZGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmNvcnJlY3QpIHtcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuaHRtbChcIllvdSBhcmUgQ29ycmVjdCFcIik7XG4gICAgICAgICAgICAkKHRoaXMuZmVlZEJhY2tEaXYpLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LWluZm9cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5jb3JyZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzLmluY29ycmVjdEFycmF5W2ldKS5oYXNDbGFzcyhcImNsaWNrYWJsZS1jbGlja2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy5pbmNvcnJlY3RBcnJheVtpXSkuYWRkQ2xhc3MoXCJjbGlja2FibGUtaW5jb3JyZWN0XCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy5pbmNvcnJlY3RBcnJheVtpXSkucmVtb3ZlQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrYWJsZS1pbmNvcnJlY3RcIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuaHRtbChcbiAgICAgICAgICAgICAgICBcIkluY29ycmVjdC4gWW91IGNsaWNrZWQgb24gXCIgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3ROdW0gK1xuICAgICAgICAgICAgICAgICAgICBcIiBvZiB0aGUgXCIgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RBcnJheS5sZW5ndGgudG9TdHJpbmcoKSArXG4gICAgICAgICAgICAgICAgICAgIFwiIGNvcnJlY3QgZWxlbWVudHMgYW5kIFwiICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3ROdW0gK1xuICAgICAgICAgICAgICAgICAgICBcIiBvZiB0aGUgXCIgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluY29ycmVjdEFycmF5Lmxlbmd0aC50b1N0cmluZygpICtcbiAgICAgICAgICAgICAgICAgICAgXCIgaW5jb3JyZWN0IGVsZW1lbnRzLiBcIiArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAkKHRoaXMuZmVlZEJhY2tEaXYpLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc2FibGVJbnRlcmFjdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNsaWNrYWJsZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAkKHRoaXMuY2xpY2thYmxlQXJyYXlbaV0pLmNzcyhcImN1cnNvclwiLCBcImluaXRpYWxcIik7XG4gICAgICAgICAgICB0aGlzLmNsaWNrYWJsZUFycmF5W2ldLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09IEZpbmQgdGhlIGN1c3RvbSBIVE1MIHRhZ3MgYW5kID09XG49PSAgIGV4ZWN1dGUgb3VyIGNvZGUgb24gdGhlbSAgICA9PVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiQoZG9jdW1lbnQpLm9uKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PWNsaWNrYWJsZWFyZWFdXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmNsb3Nlc3QoXCJbZGF0YS1jb21wb25lbnQ9dGltZWRBc3Nlc3NtZW50XVwiKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBlbGVtZW50IGV4aXN0cyB3aXRoaW4gYSB0aW1lZCBjb21wb25lbnQsIGRvbid0IHJlbmRlciBpdCBoZXJlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIENBTGlzdFt0aGlzLmlkXSA9IG5ldyBDbGlja2FibGVBcmVhKHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZzogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgdXNlUnVuZXN0b25lU2VydmljZXM6IGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIHJlbmRlcmluZyBDbGlja2FibGVBcmVhIFByb2JsZW0gJHt0aGlzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXRhaWxzOiAke2Vycn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgQ2xpY2thYmxlQXJlYSBmcm9tIFwiLi9jbGlja2FibGUuanNcIjtcblxuKFwidXNlIHN0cmljdFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZWRDbGlja2FibGVBcmVhIGV4dGVuZHMgQ2xpY2thYmxlQXJlYSB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcihvcHRzKTtcbiAgICAgICAgdGhpcy5yZXN0b3JlQW5zd2Vycyh7fSk7XG4gICAgICAgIHRoaXMucmVuZGVyVGltZWRJY29uKHRoaXMuY29udGFpbmVyRGl2KTtcbiAgICAgICAgdGhpcy5oaWRlQnV0dG9ucygpO1xuICAgIH1cblxuICAgIGhpZGVCdXR0b25zKCkge1xuICAgICAgICAkKHRoaXMuc3VibWl0QnV0dG9uKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyVGltZWRJY29uKGNvbXBvbmVudCkge1xuICAgICAgICAvLyByZW5kZXJzIHRoZSBjbG9jayBpY29uIG9uIHRpbWVkIGNvbXBvbmVudHMuICAgIFRoZSBjb21wb25lbnQgcGFyYW1ldGVyXG4gICAgICAgIC8vIGlzIHRoZSBlbGVtZW50IHRoYXQgdGhlIGljb24gc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgICAgICB2YXIgdGltZUljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgdGltZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAkKHRpbWVJY29uKS5hdHRyKHtcbiAgICAgICAgICAgIHNyYzogXCIuLi9fc3RhdGljL2Nsb2NrLnBuZ1wiLFxuICAgICAgICAgICAgc3R5bGU6IFwid2lkdGg6MTVweDtoZWlnaHQ6MTVweFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGltZUljb25EaXYuY2xhc3NOYW1lID0gXCJ0aW1lVGlwXCI7XG4gICAgICAgIHRpbWVJY29uRGl2LnRpdGxlID0gXCJcIjtcbiAgICAgICAgdGltZUljb25EaXYuYXBwZW5kQ2hpbGQodGltZUljb24pO1xuICAgICAgICAkKGNvbXBvbmVudCkucHJlcGVuZCh0aW1lSWNvbkRpdik7XG4gICAgfVxuXG4gICAgY2hlY2tDb3JyZWN0VGltZWQoKSB7XG4gICAgICAgIC8vIFJldHVybnMgaWYgdGhlIHF1ZXN0aW9uIHdhcyBjb3JyZWN0LCBpbmNvcnJlY3QsIG9yIHNraXBwZWQgKHJldHVybiBudWxsIGluIHRoZSBsYXN0IGNhc2UpXG4gICAgICAgIGlmICh0aGlzLmNvcnJlY3ROdW0gPT09IDAgJiYgdGhpcy5pbmNvcnJlY3ROdW0gPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGlzLmNvcnJlY3QpIHtcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUXCI7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZcIjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlRmVlZGJhY2soKSB7XG4gICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuaGlkZSgpO1xuICAgIH1cbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPSB7fTtcbn1cbndpbmRvdy5jb21wb25lbnRfZmFjdG9yeS5jbGlja2FibGVhcmVhID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICBpZiAob3B0cy50aW1lZCkge1xuICAgICAgICByZXR1cm4gbmV3IFRpbWVkQ2xpY2thYmxlQXJlYShvcHRzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDbGlja2FibGVBcmVhKG9wdHMpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
"use strict";
(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_timed_js_timed_js-runestone_clickableArea_css_clickable_css-runestone_dragndrop_css-8bfd54"],{

/***/ 23369:
/*!***************************************!*\
  !*** ./runestone/timed/css/timed.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 58707:
/*!*************************************!*\
  !*** ./runestone/timed/js/timed.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimedList": () => (/* binding */ TimedList),
/* harmony export */   "default": () => (/* binding */ Timed)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _fitb_js_timedfitb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fitb/js/timedfitb.js */ 74309);
/* harmony import */ var _mchoice_js_timedmc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mchoice/js/timedmc.js */ 95983);
/* harmony import */ var _shortanswer_js_timed_shortanswer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shortanswer/js/timed_shortanswer.js */ 87483);
/* harmony import */ var _activecode_js_acfactory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../activecode/js/acfactory.js */ 86902);
/* harmony import */ var _clickableArea_js_timedclickable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../clickableArea/js/timedclickable */ 61581);
/* harmony import */ var _dragndrop_js_timeddnd_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dragndrop/js/timeddnd.js */ 47496);
/* harmony import */ var _parsons_js_timedparsons_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../parsons/js/timedparsons.js */ 79661);
/* harmony import */ var _selectquestion_js_selectone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../selectquestion/js/selectone */ 63931);
/* harmony import */ var _css_timed_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/timed.css */ 23369);
/*==========================================
========      Master timed.js     =========
============================================
===     This file contains the JS for    ===
===     the Runestone timed component.   ===
============================================
===              Created By              ===
===             Kirby Olson              ===
===               6/11/15                ===
==========================================*/













var TimedList = {}; // Timed dictionary

// Timed constructor
class Timed extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        var orig = opts.orig;
        this.origElem = orig; // the entire element of this timed assessment and all of its children
        this.divid = orig.id;
        this.children = this.origElem.childNodes;
        this.visited = [];
        this.timeLimit = 0;
        this.limitedTime = false;
        if (!isNaN($(this.origElem).data("time"))) {
            this.timeLimit = parseInt($(this.origElem).data("time"), 10) * 60; // time in seconds to complete the exam
            this.startingTime = this.timeLimit;
            this.limitedTime = true;
        }
        this.showFeedback = true;
        if ($(this.origElem).is("[data-no-feedback]")) {
            this.showFeedback = false;
        }
        this.showResults = true;
        if ($(this.origElem).is("[data-no-result]")) {
            this.showResults = false;
        }
        this.random = false;
        if ($(this.origElem).is("[data-random]")) {
            this.random = true;
        }
        this.showTimer = true;
        if ($(this.origElem).is("[data-no-timer]")) {
            this.showTimer = false;
        }
        this.fullwidth = false;
        if ($(this.origElem).is("[data-fullwidth]")) {
            this.fullwidth = true;
        }
        this.nopause = false;
        if ($(this.origElem).is("[data-no-pause]")) {
            this.nopause = true;
        }
        eBookConfig.enableScratchAC = false;
        this.running = 0;
        this.paused = 0;
        this.done = 0;
        this.taken = 0;
        this.score = 0;
        this.incorrect = 0;
        this.correctStr = "";
        this.incorrectStr = "";
        this.skippedStr = "";
        this.skipped = 0;
        this.currentQuestionIndex = 0; // Which question is currently displaying on the page
        this.renderedQuestionArray = []; // list of all problems
        this.getNewChildren();
        // One small step to eliminate students from doing view source
        // this won't stop anyone with determination but may prevent casual peeking
        if (!eBookConfig.enableDebug) {
            document.body.oncontextmenu = function () {
                return false;
            };
        }
        this.checkAssessmentStatus().then(
            function () {
                this.renderTimedAssess();
            }.bind(this)
        );
    }

    getNewChildren() {
        this.newChildren = [];
        let runestoneChildren = this.origElem.querySelectorAll(".runestone")
        for (var i = 0; i < runestoneChildren.length; i++) {
            this.newChildren.push(runestoneChildren[i]);
        }
    }

    async checkAssessmentStatus() {
        // Has the user taken this exam?  Inquiring minds want to know
        // If a user has not taken this exam then we want to make sure
        // that if a question has been seen by the student before we do
        // not populate previous answers.
        let sendInfo = {
            div_id: this.divid,
            course_name: eBookConfig.course,
        };
        console.log(sendInfo);
        if (eBookConfig.useRunestoneServices) {
            let request = new Request(
                `${eBookConfig.new_server_prefix}/assessment/tookTimedAssessment`,
                {
                    method: "POST",
                    headers: this.jsonHeaders,
                    body: JSON.stringify(sendInfo),
                }
            );
            let response = await fetch(request);
            let data = await response.json();
            data = data.detail;
            this.taken = data.tookAssessment;
            this.assessmentTaken = this.taken;
            if (!this.taken) {
                localStorage.clear();
            }
            console.log("done with check status");
            return response;
        } else {
            this.taken = false;
            this.assessmentTaken = false;
            return Promise.resolve();
        }
    }

    /*===============================
    === Generating new Timed HTML ===
    ===============================*/
    async renderTimedAssess() {
        console.log("rendering timed ");
        // create renderedQuestionArray returns a promise
        //
        this.createRenderedQuestionArray();
        if (this.random) {
            this.randomizeRQA();
        }
        this.renderContainer();
        this.renderTimer();
        await this.renderControlButtons();
        this.containerDiv.appendChild(this.timedDiv); // This can't be appended in renderContainer because then it renders above the timer and control buttons.
        if (this.renderedQuestionArray.length > 1) this.renderNavControls();
        this.renderSubmitButton();
        this.renderFeedbackContainer();
        this.useRunestoneServices = eBookConfig.useRunestoneServices;
        // Replace intermediate HTML with rendered HTML
        $(this.origElem).replaceWith(this.containerDiv);
        // check if already taken and if so show results
        this.styleExamElements(); // rename to renderPossibleResults
        this.checkServer("timedExam", true);
    }

    renderContainer() {
        this.containerDiv = document.createElement("div"); // container for the entire Timed Component
        if (this.fullwidth) {
            // allow the container to fill the width - barb
            $(this.containerDiv).attr({
                style: "max-width:none",
            });
        }
        this.containerDiv.id = this.divid;
        this.timedDiv = document.createElement("div"); // div that will hold the questions for the timed assessment
        this.navDiv = document.createElement("div"); // For navigation control
        $(this.navDiv).attr({
            style: "text-align:center",
        });
        this.flagDiv = document.createElement("div"); // div that will hold the "Flag Question" button
        $(this.flagDiv).attr({
            style: "text-align: center",
        });
        this.switchContainer = document.createElement("div");
        this.switchContainer.classList.add("switchcontainer");
        this.switchDiv = document.createElement("div"); // is replaced by the questions
        this.timedDiv.appendChild(this.navDiv);
        this.timedDiv.appendChild(this.flagDiv); // add flagDiv to timedDiv, which holds components for navigation and questions for timed assessment
        this.timedDiv.appendChild(this.switchContainer);
        this.switchContainer.appendChild(this.switchDiv);
        $(this.timedDiv).attr({
            id: "timed_Test",
            style: "display:none",
        });
    }

    renderTimer() {
        this.wrapperDiv = document.createElement("div");
        this.timerContainer = document.createElement("P");
        this.wrapperDiv.id = this.divid + "-startWrapper";
        this.timerContainer.id = this.divid + "-output";
        this.wrapperDiv.appendChild(this.timerContainer);
        this.showTime();
    }

    renderControlButtons() {
        this.controlDiv = document.createElement("div");
        $(this.controlDiv).attr({
            id: "controls",
            style: "text-align: center",
        });
        this.startBtn = document.createElement("button");
        this.pauseBtn = document.createElement("button");
        $(this.startBtn).attr({
            class: "btn btn-success",
            id: "start",
            tabindex: "0",
            role: "button",
        });
        this.startBtn.textContent = "Start";
        this.startBtn.addEventListener(
            "click",
            async function () {
                $(this.finishButton).hide(); // hide the finish button for now
                $(this.flagButton).show();
                let mess = document.createElement("p");
                mess.innerHTML =
                    "<strong>Warning: You will not be able to continue the exam if you close this tab, close the window, or navigate away from this page!</strong>  Make sure you click the Finish Exam button when you are done to submit your work!";
                this.controlDiv.appendChild(mess);
                mess.classList.add("examwarning");
                await this.renderTimedQuestion();
                this.startAssessment();
            }.bind(this),
            false
        );
        $(this.pauseBtn).attr({
            class: "btn btn-default",
            id: "pause",
            disabled: "true",
            tabindex: "0",
            role: "button",
        });
        this.pauseBtn.textContent = "Pause";
        this.pauseBtn.addEventListener(
            "click",
            function () {
                this.pauseAssessment();
            }.bind(this),
            false
        );
        if (!this.taken) {
            this.controlDiv.appendChild(this.startBtn);
        }
        if (!this.nopause) {
            this.controlDiv.appendChild(this.pauseBtn);
        }
        this.containerDiv.appendChild(this.wrapperDiv);
        this.containerDiv.appendChild(this.controlDiv);
    }

    renderNavControls() {
        // making "Prev" button
        this.pagNavList = document.createElement("ul");
        $(this.pagNavList).addClass("pagination");
        this.leftContainer = document.createElement("li");
        this.leftNavButton = document.createElement("button");
        this.leftNavButton.innerHTML = "&#8249; Prev";
        $(this.leftNavButton).attr("aria-label", "Previous");
        $(this.leftNavButton).attr("tabindex", "0");
        $(this.leftNavButton).attr("role", "button");
        $(this.rightNavButton).attr("id", "prev");
        $(this.leftNavButton).css("cursor", "pointer");
        this.leftContainer.appendChild(this.leftNavButton);
        this.pagNavList.appendChild(this.leftContainer);
        // making "Flag Question" button
        this.flaggingPlace = document.createElement("ul");
        $(this.flaggingPlace).addClass("pagination");
        this.flagContainer = document.createElement("li");
        this.flagButton = document.createElement("button");
        $(this.flagButton).addClass("flagBtn");
        this.flagButton.innerHTML = "Flag Question"; // name on button
        $(this.flagButton).attr("aria-labelledby", "Flag");
        $(this.flagButton).attr("tabindex", "5");
        $(this.flagButton).attr("role", "button");
        $(this.flagButton).attr("id", "flag");
        $(this.flagButton).css("cursor", "pointer");
        this.flagContainer.appendChild(this.flagButton); // adding button to container
        this.flaggingPlace.appendChild(this.flagContainer); // adding container to flaggingPlace
        // making "Next" button
        this.rightContainer = document.createElement("li");
        this.rightNavButton = document.createElement("button");
        $(this.rightNavButton).attr("aria-label", "Next");
        $(this.rightNavButton).attr("tabindex", "0");
        $(this.rightNavButton).attr("role", "button");
        $(this.rightNavButton).attr("id", "next");
        this.rightNavButton.innerHTML = "Next &#8250;";
        $(this.rightNavButton).css("cursor", "pointer");
        this.rightContainer.appendChild(this.rightNavButton);
        this.pagNavList.appendChild(this.rightContainer);
        this.ensureButtonSafety();
        this.navDiv.appendChild(this.pagNavList);
        this.flagDiv.appendChild(this.flaggingPlace); // adds flaggingPlace to the flagDiv
        this.break = document.createElement("br");
        this.navDiv.appendChild(this.break);
        // render the question number jump buttons
        this.qNumList = document.createElement("ul");
        $(this.qNumList).attr("id", "pageNums");
        this.qNumWrapperList = document.createElement("ul");
        $(this.qNumWrapperList).addClass("pagination");
        var tmpLi, tmpA;
        for (var i = 0; i < this.renderedQuestionArray.length; i++) {
            tmpLi = document.createElement("li");
            tmpA = document.createElement("a");
            tmpA.innerHTML = i + 1;
            $(tmpA).css("cursor", "pointer");
            if (i === 0) {
                $(tmpLi).addClass("active");
            }
            tmpLi.appendChild(tmpA);
            this.qNumWrapperList.appendChild(tmpLi);
        }
        this.qNumList.appendChild(this.qNumWrapperList);
        this.navDiv.appendChild(this.qNumList);
        this.navBtnListeners();
        this.flagBtnListener(); // listens for click on flag button
        $(this.flagButton).hide();
    }

    // when moving off of a question in an active exam:
    // 1. show that the question has been seen, or mark it broken if it is in error.
    // 2. check and log the current answer
    async navigateAway() {
        if (
            this.renderedQuestionArray[this.currentQuestionIndex].state ==
            "broken_exam"
        ) {
            $(
                "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
            ).addClass("broken");
        }
        if (
            this.renderedQuestionArray[this.currentQuestionIndex].state ==
            "exam_ended"
        ) {
            $(
                "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
            ).addClass("toolate");
        }
        if (
            this.renderedQuestionArray[this.currentQuestionIndex].question
                .isAnswered
        ) {
            $(
                "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
            ).addClass("answered");
            await this.renderedQuestionArray[
                this.currentQuestionIndex
            ].question.checkCurrentAnswer();
            if (!this.done) {
                await this.renderedQuestionArray[
                    this.currentQuestionIndex
                ].question.logCurrentAnswer();
            }
        }
    }
    async handleNextPrev(event) {
        if (!this.taken) {
            await this.navigateAway();
        }
        var target = $(event.target).text();
        if (target.match(/Next/)) {
            // checks given text to match "Next"
            if ($(this.rightContainer).hasClass("disabled")) {
                return;
            }
            this.currentQuestionIndex++;
        } else if (target.match(/Prev/)) {
            // checks given text to match "Prev"
            if ($(this.leftContainer).hasClass("disabled")) {
                return;
            }
            this.currentQuestionIndex--;
        }
        await this.renderTimedQuestion();
        this.ensureButtonSafety();
        for (var i = 0; i < this.qNumList.childNodes.length; i++) {
            for (
                var j = 0;
                j < this.qNumList.childNodes[i].childNodes.length;
                j++
            ) {
                $(this.qNumList.childNodes[i].childNodes[j]).removeClass(
                    "active"
                );
            }
        }
        $(
            "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
        ).addClass("active");
        if (
            $(
                "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
            ).hasClass("flagcolor")
        ) {
            // checking for class
            this.flagButton.innerHTML = "Unflag Question"; // changes text on button
        } else {
            this.flagButton.innerHTML = "Flag Question"; // changes text on button
        }
    }

    async handleFlag(event) {
        // called when flag button is clicked
        var target = $(event.target).text();
        if (target.match(/Flag Question/)) {
            $(
                "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
            ).addClass("flagcolor"); // class will change color of question block
            this.flagButton.innerHTML = "Unflag Question";
        } else {
            $(
                "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
            ).removeClass("flagcolor"); // will restore current color of question block
            this.flagButton.innerHTML = "Flag Question"; // also sets name back
        }
    }

    async handleNumberedNav(event) {
        if (!this.taken) {
            await this.navigateAway();
        }
        for (var i = 0; i < this.qNumList.childNodes.length; i++) {
            for (
                var j = 0;
                j < this.qNumList.childNodes[i].childNodes.length;
                j++
            ) {
                $(this.qNumList.childNodes[i].childNodes[j]).removeClass(
                    "active"
                );
            }
        }

        var target = $(event.target).text();
        let oldIndex = this.currentQuestionIndex;
        this.currentQuestionIndex = parseInt(target) - 1;
        if (this.currentQuestionIndex > this.renderedQuestionArray.length) {
            console.log(`Error: bad index for ${target}`);
            this.currentQuestionIndex = oldIndex;
        }
        $(
            "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
        ).addClass("active");
        if (
            $(
                "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")" // checking for flagcolor class
            ).hasClass("flagcolor")
        ) {
            this.flagButton.innerHTML = "Unflag Question";
        } else {
            this.flagButton.innerHTML = "Flag Question";
        }
        await this.renderTimedQuestion();
        this.ensureButtonSafety();
    }

    // set up events for navigation
    navBtnListeners() {
        // Next and Prev Listener
        this.pagNavList.addEventListener(
            "click",
            this.handleNextPrev.bind(this),
            false
        );

        // Numbered Listener
        this.qNumList.addEventListener(
            "click",
            this.handleNumberedNav.bind(this),
            false
        );
    }

    // set up event for flag
    flagBtnListener() {
        this.flaggingPlace.addEventListener(
            "click",
            this.handleFlag.bind(this), // calls this to take action
            false
        );
    }

    renderSubmitButton() {
        this.buttonContainer = document.createElement("div");
        $(this.buttonContainer).attr({
            style: "text-align:center",
        });
        this.finishButton = document.createElement("button");
        $(this.finishButton).attr({
            id: "finish",
            class: "btn btn-primary",
        });
        this.finishButton.textContent = "Finish Exam";
        this.finishButton.addEventListener(
            "click",
            async function () {
                if (
                    window.confirm(
                        "Clicking OK means you are ready to submit your answers and are finished with this assessment."
                    )
                ) {
                    await this.finishAssessment();
                    $(this.flagButton).hide();
                }
            }.bind(this),
            false
        );
        this.controlDiv.appendChild(this.finishButton);
        $(this.finishButton).hide();
        this.timedDiv.appendChild(this.buttonContainer);
    }
    ensureButtonSafety() {
        if (this.currentQuestionIndex === 0) {
            if (this.renderedQuestionArray.length != 1) {
                $(this.rightContainer).removeClass("disabled");
            }
            $(this.leftContainer).addClass("disabled");
        }
        if (
            this.currentQuestionIndex >=
            this.renderedQuestionArray.length - 1
        ) {
            if (this.renderedQuestionArray.length != 1) {
                $(this.leftContainer).removeClass("disabled");
            }
            $(this.rightContainer).addClass("disabled");
        }
        if (
            this.currentQuestionIndex > 0 &&
            this.currentQuestionIndex < this.renderedQuestionArray.length - 1
        ) {
            $(this.rightContainer).removeClass("disabled");
            $(this.leftContainer).removeClass("disabled");
        }
    }
    renderFeedbackContainer() {
        this.scoreDiv = document.createElement("P");
        this.scoreDiv.id = this.divid + "results";
        this.scoreDiv.style.display = "none";
        this.containerDiv.appendChild(this.scoreDiv);
    }

    createRenderedQuestionArray() {
        // this finds all the assess questions in this timed assessment
        // We need to make a list of all the questions up front so we can set up navigation
        // but we do not want to render the questions until the student has navigated
        // Also adds them to this.renderedQuestionArray

        // todo:  This needs to be updated to account for the runestone div wrapper.

        // To accommodate the selectquestion type -- which is async! we need to wrap
        // all of this in a promise, so that we don't continue to render the timed
        // exam until all of the questions have been realized.
        var opts;
        for (var i = 0; i < this.newChildren.length; i++) {
            var tmpChild = this.newChildren[i];
            opts = {
                state: "prepared",
                orig: tmpChild,
                question: {},
                useRunestoneServices: eBookConfig.useRunestoneServices,
                timed: true,
                assessmentTaken: this.taken,
                timedWrapper: this.divid,
                initAttempts: 0,
            };
            if ($(tmpChild).children("[data-component]").length > 0) {
                tmpChild = $(tmpChild).children("[data-component]")[0];
                opts.orig = tmpChild;
            }
            if ($(tmpChild).is("[data-component]")) {
                this.renderedQuestionArray.push(opts);
            }
        }
    }

    randomizeRQA() {
        var currentIndex = this.renderedQuestionArray.length,
            temporaryValue,
            randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.renderedQuestionArray[currentIndex];
            this.renderedQuestionArray[currentIndex] =
                this.renderedQuestionArray[randomIndex];
            this.renderedQuestionArray[randomIndex] = temporaryValue;
        }
    }

    async renderTimedQuestion() {
        if (this.currentQuestionIndex >= this.renderedQuestionArray.length) {
            // sometimes the user clicks in the event area for the qNumList
            // But misses a number in that case the text is the concatenation
            // of all the numbers in the list!
            return;
        }
        // check the renderedQuestionArray to see if it has been rendered.
        let opts = this.renderedQuestionArray[this.currentQuestionIndex];
        let currentQuestion;
        if (
            opts.state === "prepared" ||
            opts.state === "forreview" ||
            (opts.state === "broken_exam" && opts.initAttempts < 3)
        ) {
            let tmpChild = opts.orig;
            if ($(tmpChild).is("[data-component=selectquestion]")) {
                if (this.done && opts.state == "prepared") {
                    this.renderedQuestionArray[
                        this.currentQuestionIndex
                    ].state = "exam_ended";
                } else {
                    // SelectOne is async and will replace itself in this array with
                    // the actual selected question
                    opts.rqa = this.renderedQuestionArray;
                    let newq = new _selectquestion_js_selectone__WEBPACK_IMPORTED_MODULE_8__["default"](opts);
                    this.renderedQuestionArray[this.currentQuestionIndex] = {
                        question: newq,
                    };
                    try {
                        await newq.initialize();
                        if (opts.state == "broken_exam") {
                            // remove the broken class from this question if we get here.
                            $(
                                `ul#pageNums > ul > li:eq(${this.currentQuestionIndex})`
                            ).removeClass("broken");
                        }
                    } catch (e) {
                        opts.state = "broken_exam";
                        this.renderedQuestionArray[this.currentQuestionIndex] =
                            opts;
                        console.log(
                            `Error initializing question: Details ${e}`
                        );
                    }
                }
            } else if ($(tmpChild).is("[data-component]")) {
                let componentKind = $(tmpChild).data("component");
                this.renderedQuestionArray[this.currentQuestionIndex] = {
                    question: window.component_factory[componentKind](opts),
                };
            }
        } else if (opts.state === "broken_exam") {
            return;
        }

        currentQuestion =
            this.renderedQuestionArray[this.currentQuestionIndex].question;
        if (opts.state === "forreview") {
            await currentQuestion.checkCurrentAnswer();
            currentQuestion.renderFeedback();
            currentQuestion.disableInteraction();
        }

        if (!this.visited.includes(this.currentQuestionIndex)) {
            this.visited.push(this.currentQuestionIndex);
            if (
                this.visited.length === this.renderedQuestionArray.length &&
                !this.done
            ) {
                $(this.finishButton).show();
            }
        }

        if (currentQuestion.containerDiv) {
            $(this.switchDiv).replaceWith(currentQuestion.containerDiv);
            this.switchDiv = currentQuestion.containerDiv;
        }

        // If the timed component has listeners, those might need to be reinitialized
        // This flag will only be set in the elements that need it--it will be undefined in the others and thus evaluate to false
        if (currentQuestion.needsReinitialization) {
            currentQuestion.reinitializeListeners(this.taken);
        }
    }

    /*=================================
    === Timer and control Functions ===
    =================================*/
    handlePrevAssessment() {
        $(this.startBtn).hide();
        $(this.pauseBtn).attr("disabled", true);
        $(this.finishButton).attr("disabled", true);
        this.running = 0;
        this.done = 1;
        // showFeedback sand showResults should both be true before we show the
        // questions and their state of correctness.
        if (this.showResults && this.showFeedback) {
            $(this.timedDiv).show();
            this.restoreAnsweredQuestions(); // do not log these results
        } else {
            $(this.pauseBtn).hide();
            $(this.timerContainer).hide();
        }
    }
    startAssessment() {
        if (!this.taken) {
            $("#relations-next").hide(); // hide the next page button for now
            $("#relations-prev").hide(); // hide the previous button for now
            $(this.startBtn).hide();
            $(this.pauseBtn).attr("disabled", false);
            if (this.running === 0 && this.paused === 0) {
                this.running = 1;
                this.lastTime = Date.now();
                $(this.timedDiv).show();
                this.increment();
                this.logBookEvent({
                    event: "timedExam",
                    act: "start",
                    div_id: this.divid,
                });
                var timeStamp = new Date();
                var storageObj = {
                    answer: [0, 0, this.renderedQuestionArray.length, 0],
                    timestamp: timeStamp,
                };
                localStorage.setItem(
                    this.localStorageKey(),
                    JSON.stringify(storageObj)
                );
            }
            $(window).on(
                "beforeunload",
                function (event) {
                    // this actual value gets ignored by newer browsers
                    if (this.done) {
                        return;
                    }
                    event.preventDefault();
                    event.returnValue =
                        "Are you sure you want to leave?  Your work will be lost! And you will need your instructor to reset the exam!";
                    return "Are you sure you want to leave?  Your work will be lost!";
                }.bind(this)
            );
            window.addEventListener(
                "pagehide",
                async function (event) {
                    if (!this.done) {
                        await this.finishAssessment();
                        console.log("Exam exited by leaving page");
                    }
                }.bind(this)
            );
        } else {
            this.handlePrevAssessment();
        }
    }
    pauseAssessment() {
        if (this.done === 0) {
            if (this.running === 1) {
                this.logBookEvent({
                    event: "timedExam",
                    act: "pause",
                    div_id: this.divid,
                });
                this.running = 0;
                this.paused = 1;
                this.pauseBtn.innerHTML = "Resume";
                $(this.timedDiv).hide();
            } else {
                this.logBookEvent({
                    event: "timedExam",
                    act: "resume",
                    div_id: this.divid,
                });
                this.running = 1;
                this.paused = 0;
                this.increment();
                this.pauseBtn.innerHTML = "Pause";
                $(this.timedDiv).show();
            }
        }
    }

    showTime() {
        if (this.showTimer) {
            var mins = Math.floor(this.timeLimit / 60);
            var secs = Math.floor(this.timeLimit) % 60;
            var minsString = mins;
            var secsString = secs;
            if (mins < 10) {
                minsString = "0" + mins;
            }
            if (secs < 10) {
                secsString = "0" + secs;
            }
            var beginning = "Time Remaining    ";
            if (!this.limitedTime) {
                beginning = "Time Taken    ";
            }
            var timeString = beginning + minsString + ":" + secsString;
            if (this.done || this.taken) {
                var minutes = Math.floor(this.timeTaken / 60);
                var seconds = Math.floor(this.timeTaken % 60);
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                timeString = "Time taken: " + minutes + ":" + seconds;
            }
            this.timerContainer.innerHTML = timeString;
            var timeTips = document.getElementsByClassName("timeTip");
            for (var i = 0; i <= timeTips.length - 1; i++) {
                timeTips[i].title = timeString;
            }
        } else {
            $(this.timerContainer).hide();
        }
    }

    increment() {
        // if running (not paused) and not taken
        if (this.running === 1 && !this.taken) {
            setTimeout(
                function () {
                    // When a browser loses focus, setTimeout may not be called on the
                    // schedule expected.  Browsers are free to save power by lengthening
                    // the interval to some longer time.  So we cannot just subtract 1
                    // from the timeLimit we need to measure the elapsed time from the last
                    // call to the current call and subtract that number of seconds.
                    let currentTime = Date.now();
                    if (this.limitedTime) {
                        // If there's a time limit, count down to 0
                        this.timeLimit =
                            this.timeLimit -
                            Math.floor((currentTime - this.lastTime) / 1000);
                    } else {
                        // Else count up to keep track of how long it took to complete
                        this.timeLimit =
                            this.timeLimit +
                            Math.floor((currentTime - this.lastTime) / 1000);
                    }
                    this.lastTime = currentTime;
                    localStorage.setItem(
                        eBookConfig.email + ":" + this.divid + "-time",
                        this.timeLimit
                    );
                    this.showTime();
                    if (this.timeLimit > 0) {
                        this.increment();
                        // ran out of time
                    } else {
                        $(this.startBtn).attr({
                            disabled: "true",
                        });
                        $(this.finishButton).attr({
                            disabled: "true",
                        });
                        this.running = 0;
                        this.done = 1;
                        if (!this.taken) {
                            this.taken = true;
                            // embed the message in the page -- an alert actually prevents
                            // the answers from being submitted and if a student closes their
                            // laptop then the answers will not be submitted ever!  Even when they
                            // reopen the laptop their session cookie is likely invalid.
                            let mess = document.createElement("h1");
                            mess.innerHTML =
                                "Sorry but you ran out of time. Your answers are being submitted";
                            this.controlDiv.appendChild(mess);
                            this.finishAssessment();
                        }
                    }
                }.bind(this),
                1000
            );
        }
    }

    styleExamElements() {
        // Checks if this exam has been taken before
        $(this.timerContainer).css({
            width: "50%",
            margin: "0 auto",
            "background-color": "#DFF0D8",
            "text-align": "center",
            border: "2px solid #DFF0D8",
            "border-radius": "25px",
        });
        $(this.scoreDiv).css({
            width: "50%",
            margin: "0 auto",
            "background-color": "#DFF0D8",
            "text-align": "center",
            border: "2px solid #DFF0D8",
            "border-radius": "25px",
        });
        $(".tooltipTime").css({
            margin: "0",
            padding: "0",
            "background-color": "black",
            color: "white",
        });
    }

    async finishAssessment() {
        $("#relations-next").show(); // show the next page button for now
        $("#relations-prev").show(); // show the previous button for now
        if (!this.showFeedback) {
            // bje - changed from showResults
            $(this.timedDiv).hide();
            $(this.pauseBtn).hide();
            $(this.timerContainer).hide();
        }
        this.findTimeTaken();
        this.running = 0;
        this.done = 1;
        this.taken = 1;
        await this.finalizeProblems();
        this.checkScore();
        this.displayScore();
        this.storeScore();
        this.logScore();
        $(this.pauseBtn).attr("disabled", true);
        this.finishButton.disabled = true;
        $(window).off("beforeunload");
        // turn off the pagehide listener
        let assignment_id = this.divid;
        setTimeout(function () {
            jQuery.ajax({
                url: eBookConfig.app + "/assignments/student_autograde",
                type: "POST",
                dataType: "JSON",
                data: {
                    assignment_id: assignment_id,
                    is_timed: true,
                },
                success: function (retdata) {
                    if (retdata.success == false) {
                        console.log(retdata.message);
                    } else {
                        console.log("Autograder completed");
                    }
                },
            });
        }, 2000);
    }

    // finalizeProblems
    // ----------------
    async finalizeProblems() {
        // Because we have submitted each question as we navigate we only need to
        // send the final version of the question the student is on when they press the
        // finish exam button.

        var currentQuestion =
            this.renderedQuestionArray[this.currentQuestionIndex].question;
        await currentQuestion.checkCurrentAnswer();
        await currentQuestion.logCurrentAnswer();
        currentQuestion.renderFeedback();
        currentQuestion.disableInteraction();

        for (var i = 0; i < this.renderedQuestionArray.length; i++) {
            let currentQuestion = this.renderedQuestionArray[i];
            // set the state to forreview so we know that feedback may be appropriate
            if (currentQuestion.state !== "broken_exam") {
                currentQuestion.state = "forreview";
                currentQuestion.question.disableInteraction();
            }
        }

        if (!this.showFeedback) {
            this.hideTimedFeedback();
        }
    }

    // restoreAnsweredQuestions
    // ------------------------
    restoreAnsweredQuestions() {
        for (var i = 0; i < this.renderedQuestionArray.length; i++) {
            var currentQuestion = this.renderedQuestionArray[i];
            if (currentQuestion.state === "prepared") {
                currentQuestion.state = "forreview";
            }
        }
    }

    // hideTimedFeedback
    // -----------------
    hideTimedFeedback() {
        for (var i = 0; i < this.renderedQuestionArray.length; i++) {
            var currentQuestion = this.renderedQuestionArray[i].question;
            currentQuestion.hideFeedback();
        }
    }

    // checkScore
    // ----------
    // This is a simple all or nothing score of one point per question for
    // that includes our best guess if a question was skipped.
    checkScore() {
        this.correctStr = "";
        this.skippedStr = "";
        this.incorrectStr = "";
        // Gets the score of each problem
        for (var i = 0; i < this.renderedQuestionArray.length; i++) {
            var correct =
                this.renderedQuestionArray[i].question.checkCorrectTimed();
            if (correct == "T") {
                this.score++;
                this.correctStr = this.correctStr + (i + 1) + ", ";
            } else if (correct == "F") {
                this.incorrect++;
                this.incorrectStr = this.incorrectStr + (i + 1) + ", ";
            } else if (correct === null || correct === "I") {
                this.skipped++;
                this.skippedStr = this.skippedStr + (i + 1) + ", ";
            } else {
                // ignored question; just do nothing
            }
        }
        // remove extra comma and space at end if any
        if (this.correctStr.length > 0)
            this.correctStr = this.correctStr.substring(
                0,
                this.correctStr.length - 2
            );
        else this.correctStr = "None";
        if (this.skippedStr.length > 0)
            this.skippedStr = this.skippedStr.substring(
                0,
                this.skippedStr.length - 2
            );
        else this.skippedStr = "None";
        if (this.incorrectStr.length > 0)
            this.incorrectStr = this.incorrectStr.substring(
                0,
                this.incorrectStr.length - 2
            );
        else this.incorrectStr = "None";
    }
    findTimeTaken() {
        if (this.limitedTime) {
            this.timeTaken = this.startingTime - this.timeLimit;
        } else {
            this.timeTaken = this.timeLimit;
        }
    }
    storeScore() {
        var storage_arr = [];
        storage_arr.push(
            this.score,
            this.correctStr,
            this.incorrect,
            this.incorrectStr,
            this.skipped,
            this.skippedStr,
            this.timeTaken
        );
        var timeStamp = new Date();
        var storageObj = JSON.stringify({
            answer: storage_arr,
            timestamp: timeStamp,
        });
        localStorage.setItem(this.localStorageKey(), storageObj);
    }
    // _`timed exam endpoint parameters`
    //----------------------------------
    logScore() {
        this.logBookEvent({
            event: "timedExam",
            act: "finish",
            div_id: this.divid,
            correct: this.score,
            incorrect: this.incorrect,
            skipped: this.skipped,
            time_taken: this.timeTaken,
        });
    }
    shouldUseServer(data) {
        // We override the RunestoneBase version because there is no "correct" attribute, and there are 2 possible localStorage schemas
        // --we also want to default to local storage because it contains more information specifically which questions are correct, incorrect, and skipped.
        var storageDate;
        if (localStorage.length === 0) return true;
        var storageObj = localStorage.getItem(this.localStorageKey());
        if (storageObj === null) return true;
        try {
            var storedData = JSON.parse(storageObj).answer;
            if (storedData.length == 4) {
                if (
                    data.correct == storedData[0] &&
                    data.incorrect == storedData[1] &&
                    data.skipped == storedData[2] &&
                    data.timeTaken == storedData[3]
                )
                    return true;
            } else if (storedData.length == 7) {
                if (
                    data.correct == storedData[0] &&
                    data.incorrect == storedData[2] &&
                    data.skipped == storedData[4] &&
                    data.timeTaken == storedData[6]
                ) {
                    return false; // In this case, because local storage has more info, we want to use that if it's consistent
                }
            }
            storageDate = new Date(JSON.parse(storageObj[1]).timestamp);
        } catch (err) {
            // error while parsing; likely due to bad value stored in storage
            console.log(err.message);
            localStorage.removeItem(this.localStorageKey());
            return true;
        }
        var serverDate = new Date(data.timestamp);
        if (serverDate < storageDate) {
            this.logScore();
            return false;
        }
        return true;
    }

    checkLocalStorage() {
        var len = localStorage.length;
        if (len > 0) {
            if (localStorage.getItem(this.localStorageKey()) !== null) {
                this.taken = 1;
                this.restoreAnswers("");
            } else {
                this.taken = 0;
            }
        } else {
            this.taken = 0;
        }
    }
    async restoreAnswers(data) {
        this.taken = 1;
        var tmpArr;
        if (data === "") {
            try {
                tmpArr = JSON.parse(
                    localStorage.getItem(this.localStorageKey())
                ).answer;
            } catch (err) {
                // error while parsing; likely due to bad value stored in storage
                console.log(err.message);
                localStorage.removeItem(this.localStorageKey());
                this.taken = 0;
                return;
            }
        } else {
            // Parse results from the database
            tmpArr = [
                parseInt(data.correct),
                parseInt(data.incorrect),
                parseInt(data.skipped),
                parseInt(data.timeTaken),
                data.reset,
            ];
            this.setLocalStorage(tmpArr);
        }
        if (tmpArr.length == 1) {
            // Exam was previously reset
            this.reset = true;
            this.taken = 0;
            return;
        }
        if (tmpArr.length == 4) {
            // Accidental Reload OR Database Entry
            this.score = tmpArr[0];
            this.incorrect = tmpArr[1];
            this.skipped = tmpArr[2];
            this.timeTaken = tmpArr[3];
        } else if (tmpArr.length == 7) {
            // Loaded Completed Exam
            this.score = tmpArr[0];
            this.correctStr = tmpArr[1];
            this.incorrect = tmpArr[2];
            this.incorrectStr = tmpArr[3];
            this.skipped = tmpArr[4];
            this.skippedStr = tmpArr[5];
            this.timeTaken = tmpArr[6];
        } else {
            // Set localStorage in case of "accidental" reload
            this.score = 0;
            this.incorrect = 0;
            this.skipped = this.renderedQuestionArray.length;
            this.timeTaken = 0;
        }
        if (this.taken) {
            if (this.skipped === this.renderedQuestionArray.length) {
                this.showFeedback = false;
            }
            this.handlePrevAssessment();
        }
        await this.renderTimedQuestion();
        this.displayScore();
        this.showTime();
    }
    setLocalStorage(parsedData) {
        var timeStamp = new Date();
        var storageObj = {
            answer: parsedData,
            timestamp: timeStamp,
        };
        localStorage.setItem(
            this.localStorageKey(),
            JSON.stringify(storageObj)
        );
    }
    displayScore() {
        if (this.showResults) {
            var scoreString = "";
            var numQuestions;
            var percentCorrect;
            // if we have some information
            if (
                this.correctStr.length > 0 ||
                this.incorrectStr.length > 0 ||
                this.skippedStr.length > 0
            ) {
                scoreString = `Num Correct: ${this.score}. Questions: ${this.correctStr}<br>Num Wrong: ${this.incorrect}. Questions: ${this.incorrectStr}<br>Num Skipped: ${this.skipped}. Questions: ${this.skippedStr}<br>`;
                numQuestions = this.score + this.incorrect + this.skipped;
                percentCorrect = (this.score / numQuestions) * 100;
                scoreString += "Percent Correct: " + percentCorrect + "%";
                $(this.scoreDiv).html(scoreString);
                this.scoreDiv.style.display = "block";
            } else {
                scoreString = `Num Correct: ${this.score}<br>Num Wrong: ${this.incorrect}<br>Num Skipped: ${this.skipped}<br>`;
                numQuestions = this.score + this.incorrect + this.skipped;
                percentCorrect = (this.score / numQuestions) * 100;
                scoreString += "Percent Correct: " + percentCorrect + "%";
                $(this.scoreDiv).html(scoreString);
                this.scoreDiv.style.display = "block";
            }
            this.highlightNumberedList();
        } else {
            $(this.scoreDiv).html(
                "Thank you for taking the exam.  Your answers have been recorded."
            );
            this.scoreDiv.style.display = "block";
        }
    }
    highlightNumberedList() {
        var correctCount = this.correctStr;
        var incorrectCount = this.incorrectStr;
        var skippedCount = this.skippedStr;
        correctCount = correctCount.replace(/ /g, "").split(",");
        incorrectCount = incorrectCount.replace(/ /g, "").split(",");
        skippedCount = skippedCount.replace(/ /g, "").split(",");
        $(function () {
            var numberedBtns = $("ul#pageNums > ul > li");
            if (numberedBtns.hasClass("answered")) {
                numberedBtns.removeClass("answered");
            }
            for (var i = 0; i < correctCount.length; i++) {
                var test = parseInt(correctCount[i]) - 1;
                numberedBtns
                    .eq(parseInt(correctCount[i]) - 1)
                    .addClass("correctCount");
            }
            for (var j = 0; j < incorrectCount.length; j++) {
                numberedBtns
                    .eq(parseInt(incorrectCount[j]) - 1)
                    .addClass("incorrectCount");
            }
            for (var k = 0; k < skippedCount.length; k++) {
                numberedBtns
                    .eq(parseInt(skippedCount[k]) - 1)
                    .addClass("skippedCount");
            }
        });
    }
}

/*=======================================================
=== Function that calls the constructors on page load ===
=======================================================*/
$(document).on("runestone:login-complete", function () {
    $("[data-component=timedAssessment]").each(function (index) {
        TimedList[this.id] = new Timed({
            orig: this,
            useRunestoneServices: eBookConfig.useRunestoneServices,
        });
    });
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX3RpbWVkX2pzX3RpbWVkX2pzLXJ1bmVzdG9uZV9jbGlja2FibGVBcmVhX2Nzc19jbGlja2FibGVfY3NzLXJ1bmVzdG9uZV9kcmFnbmRyb3BfY3NzLThiZmQ1NC5hZjVlZDQ1MmJmOGUxOTEzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTs7QUFFZ0Q7QUFDVjtBQUNEO0FBQ3VCO0FBQ2hCO0FBQ2M7QUFDWDtBQUNBO0FBQ0Y7QUFDaEM7O0FBRW5CLG9CQUFvQjs7QUFFM0I7QUFDZSxvQkFBb0IsbUVBQWE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhCQUE4QjtBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhCQUE4QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkJBQTZCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHlCQUF5QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJCQUEyQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS90aW1lZC9jc3MvdGltZWQuY3NzPzJiZTIiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS90aW1lZC9qcy90aW1lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PT09PT0gICAgICBNYXN0ZXIgdGltZWQuanMgICAgID09PT09PT09PVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PSAgICAgVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBKUyBmb3IgICAgPT09XG49PT0gICAgIHRoZSBSdW5lc3RvbmUgdGltZWQgY29tcG9uZW50LiAgID09PVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PSAgICAgICAgICAgICAgQ3JlYXRlZCBCeSAgICAgICAgICAgICAgPT09XG49PT0gICAgICAgICAgICAgS2lyYnkgT2xzb24gICAgICAgICAgICAgID09PVxuPT09ICAgICAgICAgICAgICAgNi8xMS8xNSAgICAgICAgICAgICAgICA9PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bmVzdG9uZUJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlLmpzXCI7XG5pbXBvcnQgVGltZWRGSVRCIGZyb20gXCIuLi8uLi9maXRiL2pzL3RpbWVkZml0Yi5qc1wiO1xuaW1wb3J0IFRpbWVkTUMgZnJvbSBcIi4uLy4uL21jaG9pY2UvanMvdGltZWRtYy5qc1wiO1xuaW1wb3J0IFRpbWVkU2hvcnRBbnN3ZXIgZnJvbSBcIi4uLy4uL3Nob3J0YW5zd2VyL2pzL3RpbWVkX3Nob3J0YW5zd2VyLmpzXCI7XG5pbXBvcnQgQUNGYWN0b3J5IGZyb20gXCIuLi8uLi9hY3RpdmVjb2RlL2pzL2FjZmFjdG9yeS5qc1wiO1xuaW1wb3J0IFRpbWVkQ2xpY2thYmxlQXJlYSBmcm9tIFwiLi4vLi4vY2xpY2thYmxlQXJlYS9qcy90aW1lZGNsaWNrYWJsZVwiO1xuaW1wb3J0IFRpbWVkRHJhZ05Ecm9wIGZyb20gXCIuLi8uLi9kcmFnbmRyb3AvanMvdGltZWRkbmQuanNcIjtcbmltcG9ydCBUaW1lZFBhcnNvbnMgZnJvbSBcIi4uLy4uL3BhcnNvbnMvanMvdGltZWRwYXJzb25zLmpzXCI7XG5pbXBvcnQgU2VsZWN0T25lIGZyb20gXCIuLi8uLi9zZWxlY3RxdWVzdGlvbi9qcy9zZWxlY3RvbmVcIjtcbmltcG9ydCBcIi4uL2Nzcy90aW1lZC5jc3NcIjtcblxuZXhwb3J0IHZhciBUaW1lZExpc3QgPSB7fTsgLy8gVGltZWQgZGljdGlvbmFyeVxuXG4vLyBUaW1lZCBjb25zdHJ1Y3RvclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZWQgZXh0ZW5kcyBSdW5lc3RvbmVCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKG9wdHMpO1xuICAgICAgICB2YXIgb3JpZyA9IG9wdHMub3JpZztcbiAgICAgICAgdGhpcy5vcmlnRWxlbSA9IG9yaWc7IC8vIHRoZSBlbnRpcmUgZWxlbWVudCBvZiB0aGlzIHRpbWVkIGFzc2Vzc21lbnQgYW5kIGFsbCBvZiBpdHMgY2hpbGRyZW5cbiAgICAgICAgdGhpcy5kaXZpZCA9IG9yaWcuaWQ7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXM7XG4gICAgICAgIHRoaXMudmlzaXRlZCA9IFtdO1xuICAgICAgICB0aGlzLnRpbWVMaW1pdCA9IDA7XG4gICAgICAgIHRoaXMubGltaXRlZFRpbWUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFpc05hTigkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJ0aW1lXCIpKSkge1xuICAgICAgICAgICAgdGhpcy50aW1lTGltaXQgPSBwYXJzZUludCgkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJ0aW1lXCIpLCAxMCkgKiA2MDsgLy8gdGltZSBpbiBzZWNvbmRzIHRvIGNvbXBsZXRlIHRoZSBleGFtXG4gICAgICAgICAgICB0aGlzLnN0YXJ0aW5nVGltZSA9IHRoaXMudGltZUxpbWl0O1xuICAgICAgICAgICAgdGhpcy5saW1pdGVkVGltZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93RmVlZGJhY2sgPSB0cnVlO1xuICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLW5vLWZlZWRiYWNrXVwiKSkge1xuICAgICAgICAgICAgdGhpcy5zaG93RmVlZGJhY2sgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3dSZXN1bHRzID0gdHJ1ZTtcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1uby1yZXN1bHRdXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dSZXN1bHRzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yYW5kb20gPSBmYWxzZTtcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1yYW5kb21dXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93VGltZXIgPSB0cnVlO1xuICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLW5vLXRpbWVyXVwiKSkge1xuICAgICAgICAgICAgdGhpcy5zaG93VGltZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZ1bGx3aWR0aCA9IGZhbHNlO1xuICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLWZ1bGx3aWR0aF1cIikpIHtcbiAgICAgICAgICAgIHRoaXMuZnVsbHdpZHRoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vcGF1c2UgPSBmYWxzZTtcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1uby1wYXVzZV1cIikpIHtcbiAgICAgICAgICAgIHRoaXMubm9wYXVzZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZUJvb2tDb25maWcuZW5hYmxlU2NyYXRjaEFDID0gZmFsc2U7XG4gICAgICAgIHRoaXMucnVubmluZyA9IDA7XG4gICAgICAgIHRoaXMucGF1c2VkID0gMDtcbiAgICAgICAgdGhpcy5kb25lID0gMDtcbiAgICAgICAgdGhpcy50YWtlbiA9IDA7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmluY29ycmVjdCA9IDA7XG4gICAgICAgIHRoaXMuY29ycmVjdFN0ciA9IFwiXCI7XG4gICAgICAgIHRoaXMuaW5jb3JyZWN0U3RyID0gXCJcIjtcbiAgICAgICAgdGhpcy5za2lwcGVkU3RyID0gXCJcIjtcbiAgICAgICAgdGhpcy5za2lwcGVkID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCA9IDA7IC8vIFdoaWNoIHF1ZXN0aW9uIGlzIGN1cnJlbnRseSBkaXNwbGF5aW5nIG9uIHRoZSBwYWdlXG4gICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5ID0gW107IC8vIGxpc3Qgb2YgYWxsIHByb2JsZW1zXG4gICAgICAgIHRoaXMuZ2V0TmV3Q2hpbGRyZW4oKTtcbiAgICAgICAgLy8gT25lIHNtYWxsIHN0ZXAgdG8gZWxpbWluYXRlIHN0dWRlbnRzIGZyb20gZG9pbmcgdmlldyBzb3VyY2VcbiAgICAgICAgLy8gdGhpcyB3b24ndCBzdG9wIGFueW9uZSB3aXRoIGRldGVybWluYXRpb24gYnV0IG1heSBwcmV2ZW50IGNhc3VhbCBwZWVraW5nXG4gICAgICAgIGlmICghZUJvb2tDb25maWcuZW5hYmxlRGVidWcpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tBc3Nlc3NtZW50U3RhdHVzKCkudGhlbihcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRpbWVkQXNzZXNzKCk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXROZXdDaGlsZHJlbigpIHtcbiAgICAgICAgdGhpcy5uZXdDaGlsZHJlbiA9IFtdO1xuICAgICAgICBsZXQgcnVuZXN0b25lQ2hpbGRyZW4gPSB0aGlzLm9yaWdFbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucnVuZXN0b25lXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVuZXN0b25lQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubmV3Q2hpbGRyZW4ucHVzaChydW5lc3RvbmVDaGlsZHJlbltpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjaGVja0Fzc2Vzc21lbnRTdGF0dXMoKSB7XG4gICAgICAgIC8vIEhhcyB0aGUgdXNlciB0YWtlbiB0aGlzIGV4YW0/ICBJbnF1aXJpbmcgbWluZHMgd2FudCB0byBrbm93XG4gICAgICAgIC8vIElmIGEgdXNlciBoYXMgbm90IHRha2VuIHRoaXMgZXhhbSB0aGVuIHdlIHdhbnQgdG8gbWFrZSBzdXJlXG4gICAgICAgIC8vIHRoYXQgaWYgYSBxdWVzdGlvbiBoYXMgYmVlbiBzZWVuIGJ5IHRoZSBzdHVkZW50IGJlZm9yZSB3ZSBkb1xuICAgICAgICAvLyBub3QgcG9wdWxhdGUgcHJldmlvdXMgYW5zd2Vycy5cbiAgICAgICAgbGV0IHNlbmRJbmZvID0ge1xuICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxuICAgICAgICAgICAgY291cnNlX25hbWU6IGVCb29rQ29uZmlnLmNvdXJzZSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coc2VuZEluZm8pO1xuICAgICAgICBpZiAoZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMpIHtcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoXG4gICAgICAgICAgICAgICAgYCR7ZUJvb2tDb25maWcubmV3X3NlcnZlcl9wcmVmaXh9L2Fzc2Vzc21lbnQvdG9va1RpbWVkQXNzZXNzbWVudGAsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmpzb25IZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzZW5kSW5mbyksXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5kZXRhaWw7XG4gICAgICAgICAgICB0aGlzLnRha2VuID0gZGF0YS50b29rQXNzZXNzbWVudDtcbiAgICAgICAgICAgIHRoaXMuYXNzZXNzbWVudFRha2VuID0gdGhpcy50YWtlbjtcbiAgICAgICAgICAgIGlmICghdGhpcy50YWtlbikge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkb25lIHdpdGggY2hlY2sgc3RhdHVzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YWtlbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hc3Nlc3NtZW50VGFrZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PSBHZW5lcmF0aW5nIG5ldyBUaW1lZCBIVE1MID09PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIGFzeW5jIHJlbmRlclRpbWVkQXNzZXNzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlcmluZyB0aW1lZCBcIik7XG4gICAgICAgIC8vIGNyZWF0ZSByZW5kZXJlZFF1ZXN0aW9uQXJyYXkgcmV0dXJucyBhIHByb21pc2VcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5jcmVhdGVSZW5kZXJlZFF1ZXN0aW9uQXJyYXkoKTtcbiAgICAgICAgaWYgKHRoaXMucmFuZG9tKSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZVJRQSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMucmVuZGVyVGltZXIoKTtcbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJDb250cm9sQnV0dG9ucygpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLnRpbWVkRGl2KTsgLy8gVGhpcyBjYW4ndCBiZSBhcHBlbmRlZCBpbiByZW5kZXJDb250YWluZXIgYmVjYXVzZSB0aGVuIGl0IHJlbmRlcnMgYWJvdmUgdGhlIHRpbWVyIGFuZCBjb250cm9sIGJ1dHRvbnMuXG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGggPiAxKSB0aGlzLnJlbmRlck5hdkNvbnRyb2xzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyU3VibWl0QnV0dG9uKCk7XG4gICAgICAgIHRoaXMucmVuZGVyRmVlZGJhY2tDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcyA9IGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzO1xuICAgICAgICAvLyBSZXBsYWNlIGludGVybWVkaWF0ZSBIVE1MIHdpdGggcmVuZGVyZWQgSFRNTFxuICAgICAgICAkKHRoaXMub3JpZ0VsZW0pLnJlcGxhY2VXaXRoKHRoaXMuY29udGFpbmVyRGl2KTtcbiAgICAgICAgLy8gY2hlY2sgaWYgYWxyZWFkeSB0YWtlbiBhbmQgaWYgc28gc2hvdyByZXN1bHRzXG4gICAgICAgIHRoaXMuc3R5bGVFeGFtRWxlbWVudHMoKTsgLy8gcmVuYW1lIHRvIHJlbmRlclBvc3NpYmxlUmVzdWx0c1xuICAgICAgICB0aGlzLmNoZWNrU2VydmVyKFwidGltZWRFeGFtXCIsIHRydWUpO1xuICAgIH1cblxuICAgIHJlbmRlckNvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBjb250YWluZXIgZm9yIHRoZSBlbnRpcmUgVGltZWQgQ29tcG9uZW50XG4gICAgICAgIGlmICh0aGlzLmZ1bGx3aWR0aCkge1xuICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvbnRhaW5lciB0byBmaWxsIHRoZSB3aWR0aCAtIGJhcmJcbiAgICAgICAgICAgICQodGhpcy5jb250YWluZXJEaXYpLmF0dHIoe1xuICAgICAgICAgICAgICAgIHN0eWxlOiBcIm1heC13aWR0aDpub25lXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5pZCA9IHRoaXMuZGl2aWQ7XG4gICAgICAgIHRoaXMudGltZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBkaXYgdGhhdCB3aWxsIGhvbGQgdGhlIHF1ZXN0aW9ucyBmb3IgdGhlIHRpbWVkIGFzc2Vzc21lbnRcbiAgICAgICAgdGhpcy5uYXZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBGb3IgbmF2aWdhdGlvbiBjb250cm9sXG4gICAgICAgICQodGhpcy5uYXZEaXYpLmF0dHIoe1xuICAgICAgICAgICAgc3R5bGU6IFwidGV4dC1hbGlnbjpjZW50ZXJcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmxhZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIGRpdiB0aGF0IHdpbGwgaG9sZCB0aGUgXCJGbGFnIFF1ZXN0aW9uXCIgYnV0dG9uXG4gICAgICAgICQodGhpcy5mbGFnRGl2KS5hdHRyKHtcbiAgICAgICAgICAgIHN0eWxlOiBcInRleHQtYWxpZ246IGNlbnRlclwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zd2l0Y2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnN3aXRjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3dpdGNoY29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLnN3aXRjaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIGlzIHJlcGxhY2VkIGJ5IHRoZSBxdWVzdGlvbnNcbiAgICAgICAgdGhpcy50aW1lZERpdi5hcHBlbmRDaGlsZCh0aGlzLm5hdkRpdik7XG4gICAgICAgIHRoaXMudGltZWREaXYuYXBwZW5kQ2hpbGQodGhpcy5mbGFnRGl2KTsgLy8gYWRkIGZsYWdEaXYgdG8gdGltZWREaXYsIHdoaWNoIGhvbGRzIGNvbXBvbmVudHMgZm9yIG5hdmlnYXRpb24gYW5kIHF1ZXN0aW9ucyBmb3IgdGltZWQgYXNzZXNzbWVudFxuICAgICAgICB0aGlzLnRpbWVkRGl2LmFwcGVuZENoaWxkKHRoaXMuc3dpdGNoQ29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5zd2l0Y2hDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zd2l0Y2hEaXYpO1xuICAgICAgICAkKHRoaXMudGltZWREaXYpLmF0dHIoe1xuICAgICAgICAgICAgaWQ6IFwidGltZWRfVGVzdFwiLFxuICAgICAgICAgICAgc3R5bGU6IFwiZGlzcGxheTpub25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlclRpbWVyKCkge1xuICAgICAgICB0aGlzLndyYXBwZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnRpbWVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XG4gICAgICAgIHRoaXMud3JhcHBlckRpdi5pZCA9IHRoaXMuZGl2aWQgKyBcIi1zdGFydFdyYXBwZXJcIjtcbiAgICAgICAgdGhpcy50aW1lckNvbnRhaW5lci5pZCA9IHRoaXMuZGl2aWQgKyBcIi1vdXRwdXRcIjtcbiAgICAgICAgdGhpcy53cmFwcGVyRGl2LmFwcGVuZENoaWxkKHRoaXMudGltZXJDb250YWluZXIpO1xuICAgICAgICB0aGlzLnNob3dUaW1lKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyQ29udHJvbEJ1dHRvbnMoKSB7XG4gICAgICAgIHRoaXMuY29udHJvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICQodGhpcy5jb250cm9sRGl2KS5hdHRyKHtcbiAgICAgICAgICAgIGlkOiBcImNvbnRyb2xzXCIsXG4gICAgICAgICAgICBzdHlsZTogXCJ0ZXh0LWFsaWduOiBjZW50ZXJcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLnBhdXNlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgJCh0aGlzLnN0YXJ0QnRuKS5hdHRyKHtcbiAgICAgICAgICAgIGNsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgICAgICAgICAgaWQ6IFwic3RhcnRcIixcbiAgICAgICAgICAgIHRhYmluZGV4OiBcIjBcIixcbiAgICAgICAgICAgIHJvbGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJTdGFydFwiO1xuICAgICAgICB0aGlzLnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmZpbmlzaEJ1dHRvbikuaGlkZSgpOyAvLyBoaWRlIHRoZSBmaW5pc2ggYnV0dG9uIGZvciBub3dcbiAgICAgICAgICAgICAgICAkKHRoaXMuZmxhZ0J1dHRvbikuc2hvdygpO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICAgICAgbWVzcy5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICBcIjxzdHJvbmc+V2FybmluZzogWW91IHdpbGwgbm90IGJlIGFibGUgdG8gY29udGludWUgdGhlIGV4YW0gaWYgeW91IGNsb3NlIHRoaXMgdGFiLCBjbG9zZSB0aGUgd2luZG93LCBvciBuYXZpZ2F0ZSBhd2F5IGZyb20gdGhpcyBwYWdlITwvc3Ryb25nPiAgTWFrZSBzdXJlIHlvdSBjbGljayB0aGUgRmluaXNoIEV4YW0gYnV0dG9uIHdoZW4geW91IGFyZSBkb25lIHRvIHN1Ym1pdCB5b3VyIHdvcmshXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sRGl2LmFwcGVuZENoaWxkKG1lc3MpO1xuICAgICAgICAgICAgICAgIG1lc3MuY2xhc3NMaXN0LmFkZChcImV4YW13YXJuaW5nXCIpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucmVuZGVyVGltZWRRdWVzdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRBc3Nlc3NtZW50KCk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgICAkKHRoaXMucGF1c2VCdG4pLmF0dHIoe1xuICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgICAgICAgICBpZDogXCJwYXVzZVwiLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgdGFiaW5kZXg6IFwiMFwiLFxuICAgICAgICAgICAgcm9sZTogXCJidXR0b25cIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGF1c2VCdG4udGV4dENvbnRlbnQgPSBcIlBhdXNlXCI7XG4gICAgICAgIHRoaXMucGF1c2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlQXNzZXNzbWVudCgpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCF0aGlzLnRha2VuKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xEaXYuYXBwZW5kQ2hpbGQodGhpcy5zdGFydEJ0bik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLm5vcGF1c2UpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbERpdi5hcHBlbmRDaGlsZCh0aGlzLnBhdXNlQnRuKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLndyYXBwZXJEaXYpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xEaXYpO1xuICAgIH1cblxuICAgIHJlbmRlck5hdkNvbnRyb2xzKCkge1xuICAgICAgICAvLyBtYWtpbmcgXCJQcmV2XCIgYnV0dG9uXG4gICAgICAgIHRoaXMucGFnTmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgJCh0aGlzLnBhZ05hdkxpc3QpLmFkZENsYXNzKFwicGFnaW5hdGlvblwiKTtcbiAgICAgICAgdGhpcy5sZWZ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICB0aGlzLmxlZnROYXZCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLmxlZnROYXZCdXR0b24uaW5uZXJIVE1MID0gXCImIzgyNDk7IFByZXZcIjtcbiAgICAgICAgJCh0aGlzLmxlZnROYXZCdXR0b24pLmF0dHIoXCJhcmlhLWxhYmVsXCIsIFwiUHJldmlvdXNcIik7XG4gICAgICAgICQodGhpcy5sZWZ0TmF2QnV0dG9uKS5hdHRyKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgICAkKHRoaXMubGVmdE5hdkJ1dHRvbikuYXR0cihcInJvbGVcIiwgXCJidXR0b25cIik7XG4gICAgICAgICQodGhpcy5yaWdodE5hdkJ1dHRvbikuYXR0cihcImlkXCIsIFwicHJldlwiKTtcbiAgICAgICAgJCh0aGlzLmxlZnROYXZCdXR0b24pLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gICAgICAgIHRoaXMubGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmxlZnROYXZCdXR0b24pO1xuICAgICAgICB0aGlzLnBhZ05hdkxpc3QuYXBwZW5kQ2hpbGQodGhpcy5sZWZ0Q29udGFpbmVyKTtcbiAgICAgICAgLy8gbWFraW5nIFwiRmxhZyBRdWVzdGlvblwiIGJ1dHRvblxuICAgICAgICB0aGlzLmZsYWdnaW5nUGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgICQodGhpcy5mbGFnZ2luZ1BsYWNlKS5hZGRDbGFzcyhcInBhZ2luYXRpb25cIik7XG4gICAgICAgIHRoaXMuZmxhZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdGhpcy5mbGFnQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgJCh0aGlzLmZsYWdCdXR0b24pLmFkZENsYXNzKFwiZmxhZ0J0blwiKTtcbiAgICAgICAgdGhpcy5mbGFnQnV0dG9uLmlubmVySFRNTCA9IFwiRmxhZyBRdWVzdGlvblwiOyAvLyBuYW1lIG9uIGJ1dHRvblxuICAgICAgICAkKHRoaXMuZmxhZ0J1dHRvbikuYXR0cihcImFyaWEtbGFiZWxsZWRieVwiLCBcIkZsYWdcIik7XG4gICAgICAgICQodGhpcy5mbGFnQnV0dG9uKS5hdHRyKFwidGFiaW5kZXhcIiwgXCI1XCIpO1xuICAgICAgICAkKHRoaXMuZmxhZ0J1dHRvbikuYXR0cihcInJvbGVcIiwgXCJidXR0b25cIik7XG4gICAgICAgICQodGhpcy5mbGFnQnV0dG9uKS5hdHRyKFwiaWRcIiwgXCJmbGFnXCIpO1xuICAgICAgICAkKHRoaXMuZmxhZ0J1dHRvbikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcbiAgICAgICAgdGhpcy5mbGFnQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmxhZ0J1dHRvbik7IC8vIGFkZGluZyBidXR0b24gdG8gY29udGFpbmVyXG4gICAgICAgIHRoaXMuZmxhZ2dpbmdQbGFjZS5hcHBlbmRDaGlsZCh0aGlzLmZsYWdDb250YWluZXIpOyAvLyBhZGRpbmcgY29udGFpbmVyIHRvIGZsYWdnaW5nUGxhY2VcbiAgICAgICAgLy8gbWFraW5nIFwiTmV4dFwiIGJ1dHRvblxuICAgICAgICB0aGlzLnJpZ2h0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICB0aGlzLnJpZ2h0TmF2QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgJCh0aGlzLnJpZ2h0TmF2QnV0dG9uKS5hdHRyKFwiYXJpYS1sYWJlbFwiLCBcIk5leHRcIik7XG4gICAgICAgICQodGhpcy5yaWdodE5hdkJ1dHRvbikuYXR0cihcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgICAgJCh0aGlzLnJpZ2h0TmF2QnV0dG9uKS5hdHRyKFwicm9sZVwiLCBcImJ1dHRvblwiKTtcbiAgICAgICAgJCh0aGlzLnJpZ2h0TmF2QnV0dG9uKS5hdHRyKFwiaWRcIiwgXCJuZXh0XCIpO1xuICAgICAgICB0aGlzLnJpZ2h0TmF2QnV0dG9uLmlubmVySFRNTCA9IFwiTmV4dCAmIzgyNTA7XCI7XG4gICAgICAgICQodGhpcy5yaWdodE5hdkJ1dHRvbikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcbiAgICAgICAgdGhpcy5yaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0TmF2QnV0dG9uKTtcbiAgICAgICAgdGhpcy5wYWdOYXZMaXN0LmFwcGVuZENoaWxkKHRoaXMucmlnaHRDb250YWluZXIpO1xuICAgICAgICB0aGlzLmVuc3VyZUJ1dHRvblNhZmV0eSgpO1xuICAgICAgICB0aGlzLm5hdkRpdi5hcHBlbmRDaGlsZCh0aGlzLnBhZ05hdkxpc3QpO1xuICAgICAgICB0aGlzLmZsYWdEaXYuYXBwZW5kQ2hpbGQodGhpcy5mbGFnZ2luZ1BsYWNlKTsgLy8gYWRkcyBmbGFnZ2luZ1BsYWNlIHRvIHRoZSBmbGFnRGl2XG4gICAgICAgIHRoaXMuYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gICAgICAgIHRoaXMubmF2RGl2LmFwcGVuZENoaWxkKHRoaXMuYnJlYWspO1xuICAgICAgICAvLyByZW5kZXIgdGhlIHF1ZXN0aW9uIG51bWJlciBqdW1wIGJ1dHRvbnNcbiAgICAgICAgdGhpcy5xTnVtTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgJCh0aGlzLnFOdW1MaXN0KS5hdHRyKFwiaWRcIiwgXCJwYWdlTnVtc1wiKTtcbiAgICAgICAgdGhpcy5xTnVtV3JhcHBlckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgICQodGhpcy5xTnVtV3JhcHBlckxpc3QpLmFkZENsYXNzKFwicGFnaW5hdGlvblwiKTtcbiAgICAgICAgdmFyIHRtcExpLCB0bXBBO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0bXBMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIHRtcEEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgIHRtcEEuaW5uZXJIVE1MID0gaSArIDE7XG4gICAgICAgICAgICAkKHRtcEEpLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICQodG1wTGkpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG1wTGkuYXBwZW5kQ2hpbGQodG1wQSk7XG4gICAgICAgICAgICB0aGlzLnFOdW1XcmFwcGVyTGlzdC5hcHBlbmRDaGlsZCh0bXBMaSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5xTnVtTGlzdC5hcHBlbmRDaGlsZCh0aGlzLnFOdW1XcmFwcGVyTGlzdCk7XG4gICAgICAgIHRoaXMubmF2RGl2LmFwcGVuZENoaWxkKHRoaXMucU51bUxpc3QpO1xuICAgICAgICB0aGlzLm5hdkJ0bkxpc3RlbmVycygpO1xuICAgICAgICB0aGlzLmZsYWdCdG5MaXN0ZW5lcigpOyAvLyBsaXN0ZW5zIGZvciBjbGljayBvbiBmbGFnIGJ1dHRvblxuICAgICAgICAkKHRoaXMuZmxhZ0J1dHRvbikuaGlkZSgpO1xuICAgIH1cblxuICAgIC8vIHdoZW4gbW92aW5nIG9mZiBvZiBhIHF1ZXN0aW9uIGluIGFuIGFjdGl2ZSBleGFtOlxuICAgIC8vIDEuIHNob3cgdGhhdCB0aGUgcXVlc3Rpb24gaGFzIGJlZW4gc2Vlbiwgb3IgbWFyayBpdCBicm9rZW4gaWYgaXQgaXMgaW4gZXJyb3IuXG4gICAgLy8gMi4gY2hlY2sgYW5kIGxvZyB0aGUgY3VycmVudCBhbnN3ZXJcbiAgICBhc3luYyBuYXZpZ2F0ZUF3YXkoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhdLnN0YXRlID09XG4gICAgICAgICAgICBcImJyb2tlbl9leGFtXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAkKFxuICAgICAgICAgICAgICAgIFwidWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKFwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIFwiKVwiXG4gICAgICAgICAgICApLmFkZENsYXNzKFwiYnJva2VuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhdLnN0YXRlID09XG4gICAgICAgICAgICBcImV4YW1fZW5kZWRcIlxuICAgICAgICApIHtcbiAgICAgICAgICAgICQoXG4gICAgICAgICAgICAgICAgXCJ1bCNwYWdlTnVtcyA+IHVsID4gbGk6ZXEoXCIgKyB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ICsgXCIpXCJcbiAgICAgICAgICAgICkuYWRkQ2xhc3MoXCJ0b29sYXRlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhdLnF1ZXN0aW9uXG4gICAgICAgICAgICAgICAgLmlzQW5zd2VyZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAkKFxuICAgICAgICAgICAgICAgIFwidWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKFwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIFwiKVwiXG4gICAgICAgICAgICApLmFkZENsYXNzKFwiYW5zd2VyZWRcIik7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XG4gICAgICAgICAgICBdLnF1ZXN0aW9uLmNoZWNrQ3VycmVudEFuc3dlcigpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRvbmUpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleFxuICAgICAgICAgICAgICAgIF0ucXVlc3Rpb24ubG9nQ3VycmVudEFuc3dlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZU5leHRQcmV2KGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy50YWtlbikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5uYXZpZ2F0ZUF3YXkoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpLnRleHQoKTtcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaCgvTmV4dC8pKSB7XG4gICAgICAgICAgICAvLyBjaGVja3MgZ2l2ZW4gdGV4dCB0byBtYXRjaCBcIk5leHRcIlxuICAgICAgICAgICAgaWYgKCQodGhpcy5yaWdodENvbnRhaW5lcikuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXgrKztcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQubWF0Y2goL1ByZXYvKSkge1xuICAgICAgICAgICAgLy8gY2hlY2tzIGdpdmVuIHRleHQgdG8gbWF0Y2ggXCJQcmV2XCJcbiAgICAgICAgICAgIGlmICgkKHRoaXMubGVmdENvbnRhaW5lcikuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXgtLTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLnJlbmRlclRpbWVkUXVlc3Rpb24oKTtcbiAgICAgICAgdGhpcy5lbnN1cmVCdXR0b25TYWZldHkoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnFOdW1MaXN0LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgdmFyIGogPSAwO1xuICAgICAgICAgICAgICAgIGogPCB0aGlzLnFOdW1MaXN0LmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaisrXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMucU51bUxpc3QuY2hpbGROb2Rlc1tpXS5jaGlsZE5vZGVzW2pdKS5yZW1vdmVDbGFzcyhcbiAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJChcbiAgICAgICAgICAgIFwidWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKFwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIFwiKVwiXG4gICAgICAgICkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICQoXG4gICAgICAgICAgICAgICAgXCJ1bCNwYWdlTnVtcyA+IHVsID4gbGk6ZXEoXCIgKyB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ICsgXCIpXCJcbiAgICAgICAgICAgICkuaGFzQ2xhc3MoXCJmbGFnY29sb3JcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBjaGVja2luZyBmb3IgY2xhc3NcbiAgICAgICAgICAgIHRoaXMuZmxhZ0J1dHRvbi5pbm5lckhUTUwgPSBcIlVuZmxhZyBRdWVzdGlvblwiOyAvLyBjaGFuZ2VzIHRleHQgb24gYnV0dG9uXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZsYWdCdXR0b24uaW5uZXJIVE1MID0gXCJGbGFnIFF1ZXN0aW9uXCI7IC8vIGNoYW5nZXMgdGV4dCBvbiBidXR0b25cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZUZsYWcoZXZlbnQpIHtcbiAgICAgICAgLy8gY2FsbGVkIHdoZW4gZmxhZyBidXR0b24gaXMgY2xpY2tlZFxuICAgICAgICB2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpLnRleHQoKTtcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaCgvRmxhZyBRdWVzdGlvbi8pKSB7XG4gICAgICAgICAgICAkKFxuICAgICAgICAgICAgICAgIFwidWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKFwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIFwiKVwiXG4gICAgICAgICAgICApLmFkZENsYXNzKFwiZmxhZ2NvbG9yXCIpOyAvLyBjbGFzcyB3aWxsIGNoYW5nZSBjb2xvciBvZiBxdWVzdGlvbiBibG9ja1xuICAgICAgICAgICAgdGhpcy5mbGFnQnV0dG9uLmlubmVySFRNTCA9IFwiVW5mbGFnIFF1ZXN0aW9uXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFxuICAgICAgICAgICAgICAgIFwidWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKFwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIFwiKVwiXG4gICAgICAgICAgICApLnJlbW92ZUNsYXNzKFwiZmxhZ2NvbG9yXCIpOyAvLyB3aWxsIHJlc3RvcmUgY3VycmVudCBjb2xvciBvZiBxdWVzdGlvbiBibG9ja1xuICAgICAgICAgICAgdGhpcy5mbGFnQnV0dG9uLmlubmVySFRNTCA9IFwiRmxhZyBRdWVzdGlvblwiOyAvLyBhbHNvIHNldHMgbmFtZSBiYWNrXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVOdW1iZXJlZE5hdihldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMudGFrZW4pIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubmF2aWdhdGVBd2F5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnFOdW1MaXN0LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgdmFyIGogPSAwO1xuICAgICAgICAgICAgICAgIGogPCB0aGlzLnFOdW1MaXN0LmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaisrXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMucU51bUxpc3QuY2hpbGROb2Rlc1tpXS5jaGlsZE5vZGVzW2pdKS5yZW1vdmVDbGFzcyhcbiAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpLnRleHQoKTtcbiAgICAgICAgbGV0IG9sZEluZGV4ID0gdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleDtcbiAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCA9IHBhcnNlSW50KHRhcmdldCkgLSAxO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCA+IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiBiYWQgaW5kZXggZm9yICR7dGFyZ2V0fWApO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCA9IG9sZEluZGV4O1xuICAgICAgICB9XG4gICAgICAgICQoXG4gICAgICAgICAgICBcInVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcShcIiArIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggKyBcIilcIlxuICAgICAgICApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAkKFxuICAgICAgICAgICAgICAgIFwidWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKFwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIFwiKVwiIC8vIGNoZWNraW5nIGZvciBmbGFnY29sb3IgY2xhc3NcbiAgICAgICAgICAgICkuaGFzQ2xhc3MoXCJmbGFnY29sb3JcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmZsYWdCdXR0b24uaW5uZXJIVE1MID0gXCJVbmZsYWcgUXVlc3Rpb25cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmxhZ0J1dHRvbi5pbm5lckhUTUwgPSBcIkZsYWcgUXVlc3Rpb25cIjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLnJlbmRlclRpbWVkUXVlc3Rpb24oKTtcbiAgICAgICAgdGhpcy5lbnN1cmVCdXR0b25TYWZldHkoKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdXAgZXZlbnRzIGZvciBuYXZpZ2F0aW9uXG4gICAgbmF2QnRuTGlzdGVuZXJzKCkge1xuICAgICAgICAvLyBOZXh0IGFuZCBQcmV2IExpc3RlbmVyXG4gICAgICAgIHRoaXMucGFnTmF2TGlzdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXh0UHJldi5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBOdW1iZXJlZCBMaXN0ZW5lclxuICAgICAgICB0aGlzLnFOdW1MaXN0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICB0aGlzLmhhbmRsZU51bWJlcmVkTmF2LmJpbmQodGhpcyksXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIHNldCB1cCBldmVudCBmb3IgZmxhZ1xuICAgIGZsYWdCdG5MaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5mbGFnZ2luZ1BsYWNlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUZsYWcuYmluZCh0aGlzKSwgLy8gY2FsbHMgdGhpcyB0byB0YWtlIGFjdGlvblxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJTdWJtaXRCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgJCh0aGlzLmJ1dHRvbkNvbnRhaW5lcikuYXR0cih7XG4gICAgICAgICAgICBzdHlsZTogXCJ0ZXh0LWFsaWduOmNlbnRlclwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maW5pc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAkKHRoaXMuZmluaXNoQnV0dG9uKS5hdHRyKHtcbiAgICAgICAgICAgIGlkOiBcImZpbmlzaFwiLFxuICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZpbmlzaEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRmluaXNoIEV4YW1cIjtcbiAgICAgICAgdGhpcy5maW5pc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jb25maXJtKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJDbGlja2luZyBPSyBtZWFucyB5b3UgYXJlIHJlYWR5IHRvIHN1Ym1pdCB5b3VyIGFuc3dlcnMgYW5kIGFyZSBmaW5pc2hlZCB3aXRoIHRoaXMgYXNzZXNzbWVudC5cIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmluaXNoQXNzZXNzbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMuZmxhZ0J1dHRvbikuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY29udHJvbERpdi5hcHBlbmRDaGlsZCh0aGlzLmZpbmlzaEJ1dHRvbik7XG4gICAgICAgICQodGhpcy5maW5pc2hCdXR0b24pLmhpZGUoKTtcbiAgICAgICAgdGhpcy50aW1lZERpdi5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbkNvbnRhaW5lcik7XG4gICAgfVxuICAgIGVuc3VyZUJ1dHRvblNhZmV0eSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGggIT0gMSkge1xuICAgICAgICAgICAgICAgICQodGhpcy5yaWdodENvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQodGhpcy5sZWZ0Q29udGFpbmVyKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPj1cbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aCAtIDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoICE9IDEpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMubGVmdENvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQodGhpcy5yaWdodENvbnRhaW5lcikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ID4gMCAmJlxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCA8IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aCAtIDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAkKHRoaXMucmlnaHRDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAkKHRoaXMubGVmdENvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXJGZWVkYmFja0NvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5zY29yZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xuICAgICAgICB0aGlzLnNjb3JlRGl2LmlkID0gdGhpcy5kaXZpZCArIFwicmVzdWx0c1wiO1xuICAgICAgICB0aGlzLnNjb3JlRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5zY29yZURpdik7XG4gICAgfVxuXG4gICAgY3JlYXRlUmVuZGVyZWRRdWVzdGlvbkFycmF5KCkge1xuICAgICAgICAvLyB0aGlzIGZpbmRzIGFsbCB0aGUgYXNzZXNzIHF1ZXN0aW9ucyBpbiB0aGlzIHRpbWVkIGFzc2Vzc21lbnRcbiAgICAgICAgLy8gV2UgbmVlZCB0byBtYWtlIGEgbGlzdCBvZiBhbGwgdGhlIHF1ZXN0aW9ucyB1cCBmcm9udCBzbyB3ZSBjYW4gc2V0IHVwIG5hdmlnYXRpb25cbiAgICAgICAgLy8gYnV0IHdlIGRvIG5vdCB3YW50IHRvIHJlbmRlciB0aGUgcXVlc3Rpb25zIHVudGlsIHRoZSBzdHVkZW50IGhhcyBuYXZpZ2F0ZWRcbiAgICAgICAgLy8gQWxzbyBhZGRzIHRoZW0gdG8gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlcblxuICAgICAgICAvLyB0b2RvOiAgVGhpcyBuZWVkcyB0byBiZSB1cGRhdGVkIHRvIGFjY291bnQgZm9yIHRoZSBydW5lc3RvbmUgZGl2IHdyYXBwZXIuXG5cbiAgICAgICAgLy8gVG8gYWNjb21tb2RhdGUgdGhlIHNlbGVjdHF1ZXN0aW9uIHR5cGUgLS0gd2hpY2ggaXMgYXN5bmMhIHdlIG5lZWQgdG8gd3JhcFxuICAgICAgICAvLyBhbGwgb2YgdGhpcyBpbiBhIHByb21pc2UsIHNvIHRoYXQgd2UgZG9uJ3QgY29udGludWUgdG8gcmVuZGVyIHRoZSB0aW1lZFxuICAgICAgICAvLyBleGFtIHVudGlsIGFsbCBvZiB0aGUgcXVlc3Rpb25zIGhhdmUgYmVlbiByZWFsaXplZC5cbiAgICAgICAgdmFyIG9wdHM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5uZXdDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRtcENoaWxkID0gdGhpcy5uZXdDaGlsZHJlbltpXTtcbiAgICAgICAgICAgIG9wdHMgPSB7XG4gICAgICAgICAgICAgICAgc3RhdGU6IFwicHJlcGFyZWRcIixcbiAgICAgICAgICAgICAgICBvcmlnOiB0bXBDaGlsZCxcbiAgICAgICAgICAgICAgICBxdWVzdGlvbjoge30sXG4gICAgICAgICAgICAgICAgdXNlUnVuZXN0b25lU2VydmljZXM6IGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzLFxuICAgICAgICAgICAgICAgIHRpbWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFzc2Vzc21lbnRUYWtlbjogdGhpcy50YWtlbixcbiAgICAgICAgICAgICAgICB0aW1lZFdyYXBwZXI6IHRoaXMuZGl2aWQsXG4gICAgICAgICAgICAgICAgaW5pdEF0dGVtcHRzOiAwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICgkKHRtcENoaWxkKS5jaGlsZHJlbihcIltkYXRhLWNvbXBvbmVudF1cIikubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRtcENoaWxkID0gJCh0bXBDaGlsZCkuY2hpbGRyZW4oXCJbZGF0YS1jb21wb25lbnRdXCIpWzBdO1xuICAgICAgICAgICAgICAgIG9wdHMub3JpZyA9IHRtcENoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCQodG1wQ2hpbGQpLmlzKFwiW2RhdGEtY29tcG9uZW50XVwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5LnB1c2gob3B0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByYW5kb21pemVSUUEoKSB7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGgsXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSxcbiAgICAgICAgICAgIHJhbmRvbUluZGV4O1xuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICAgICAgICB3aGlsZSAoY3VycmVudEluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVtjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbY3VycmVudEluZGV4XSA9XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyByZW5kZXJUaW1lZFF1ZXN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCA+PSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIHNvbWV0aW1lcyB0aGUgdXNlciBjbGlja3MgaW4gdGhlIGV2ZW50IGFyZWEgZm9yIHRoZSBxTnVtTGlzdFxuICAgICAgICAgICAgLy8gQnV0IG1pc3NlcyBhIG51bWJlciBpbiB0aGF0IGNhc2UgdGhlIHRleHQgaXMgdGhlIGNvbmNhdGVuYXRpb25cbiAgICAgICAgICAgIC8vIG9mIGFsbCB0aGUgbnVtYmVycyBpbiB0aGUgbGlzdCFcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayB0aGUgcmVuZGVyZWRRdWVzdGlvbkFycmF5IHRvIHNlZSBpZiBpdCBoYXMgYmVlbiByZW5kZXJlZC5cbiAgICAgICAgbGV0IG9wdHMgPSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVt0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XTtcbiAgICAgICAgbGV0IGN1cnJlbnRRdWVzdGlvbjtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgb3B0cy5zdGF0ZSA9PT0gXCJwcmVwYXJlZFwiIHx8XG4gICAgICAgICAgICBvcHRzLnN0YXRlID09PSBcImZvcnJldmlld1wiIHx8XG4gICAgICAgICAgICAob3B0cy5zdGF0ZSA9PT0gXCJicm9rZW5fZXhhbVwiICYmIG9wdHMuaW5pdEF0dGVtcHRzIDwgMylcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBsZXQgdG1wQ2hpbGQgPSBvcHRzLm9yaWc7XG4gICAgICAgICAgICBpZiAoJCh0bXBDaGlsZCkuaXMoXCJbZGF0YS1jb21wb25lbnQ9c2VsZWN0cXVlc3Rpb25dXCIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSAmJiBvcHRzLnN0YXRlID09IFwicHJlcGFyZWRcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgXS5zdGF0ZSA9IFwiZXhhbV9lbmRlZFwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjdE9uZSBpcyBhc3luYyBhbmQgd2lsbCByZXBsYWNlIGl0c2VsZiBpbiB0aGlzIGFycmF5IHdpdGhcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGFjdHVhbCBzZWxlY3RlZCBxdWVzdGlvblxuICAgICAgICAgICAgICAgICAgICBvcHRzLnJxYSA9IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5O1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3cSA9IG5ldyBTZWxlY3RPbmUob3B0cyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb246IG5ld3EsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBuZXdxLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRzLnN0YXRlID09IFwiYnJva2VuX2V4YW1cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgYnJva2VuIGNsYXNzIGZyb20gdGhpcyBxdWVzdGlvbiBpZiB3ZSBnZXQgaGVyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKCR7dGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleH0pYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkucmVtb3ZlQ2xhc3MoXCJicm9rZW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMuc3RhdGUgPSBcImJyb2tlbl9leGFtXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVt0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciBpbml0aWFsaXppbmcgcXVlc3Rpb246IERldGFpbHMgJHtlfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCQodG1wQ2hpbGQpLmlzKFwiW2RhdGEtY29tcG9uZW50XVwiKSkge1xuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRLaW5kID0gJCh0bXBDaGlsZCkuZGF0YShcImNvbXBvbmVudFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVt0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb246IHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeVtjb21wb25lbnRLaW5kXShvcHRzKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG9wdHMuc3RhdGUgPT09IFwiYnJva2VuX2V4YW1cIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFF1ZXN0aW9uID1cbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhdLnF1ZXN0aW9uO1xuICAgICAgICBpZiAob3B0cy5zdGF0ZSA9PT0gXCJmb3JyZXZpZXdcIikge1xuICAgICAgICAgICAgYXdhaXQgY3VycmVudFF1ZXN0aW9uLmNoZWNrQ3VycmVudEFuc3dlcigpO1xuICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uLnJlbmRlckZlZWRiYWNrKCk7XG4gICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24uZGlzYWJsZUludGVyYWN0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMudmlzaXRlZC5pbmNsdWRlcyh0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4KSkge1xuICAgICAgICAgICAgdGhpcy52aXNpdGVkLnB1c2godGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpdGVkLmxlbmd0aCA9PT0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgIXRoaXMuZG9uZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmZpbmlzaEJ1dHRvbikuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRRdWVzdGlvbi5jb250YWluZXJEaXYpIHtcbiAgICAgICAgICAgICQodGhpcy5zd2l0Y2hEaXYpLnJlcGxhY2VXaXRoKGN1cnJlbnRRdWVzdGlvbi5jb250YWluZXJEaXYpO1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hEaXYgPSBjdXJyZW50UXVlc3Rpb24uY29udGFpbmVyRGl2O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHRpbWVkIGNvbXBvbmVudCBoYXMgbGlzdGVuZXJzLCB0aG9zZSBtaWdodCBuZWVkIHRvIGJlIHJlaW5pdGlhbGl6ZWRcbiAgICAgICAgLy8gVGhpcyBmbGFnIHdpbGwgb25seSBiZSBzZXQgaW4gdGhlIGVsZW1lbnRzIHRoYXQgbmVlZCBpdC0taXQgd2lsbCBiZSB1bmRlZmluZWQgaW4gdGhlIG90aGVycyBhbmQgdGh1cyBldmFsdWF0ZSB0byBmYWxzZVxuICAgICAgICBpZiAoY3VycmVudFF1ZXN0aW9uLm5lZWRzUmVpbml0aWFsaXphdGlvbikge1xuICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uLnJlaW5pdGlhbGl6ZUxpc3RlbmVycyh0aGlzLnRha2VuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09IFRpbWVyIGFuZCBjb250cm9sIEZ1bmN0aW9ucyA9PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIGhhbmRsZVByZXZBc3Nlc3NtZW50KCkge1xuICAgICAgICAkKHRoaXMuc3RhcnRCdG4pLmhpZGUoKTtcbiAgICAgICAgJCh0aGlzLnBhdXNlQnRuKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICQodGhpcy5maW5pc2hCdXR0b24pLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gMDtcbiAgICAgICAgdGhpcy5kb25lID0gMTtcbiAgICAgICAgLy8gc2hvd0ZlZWRiYWNrIHNhbmQgc2hvd1Jlc3VsdHMgc2hvdWxkIGJvdGggYmUgdHJ1ZSBiZWZvcmUgd2Ugc2hvdyB0aGVcbiAgICAgICAgLy8gcXVlc3Rpb25zIGFuZCB0aGVpciBzdGF0ZSBvZiBjb3JyZWN0bmVzcy5cbiAgICAgICAgaWYgKHRoaXMuc2hvd1Jlc3VsdHMgJiYgdGhpcy5zaG93RmVlZGJhY2spIHtcbiAgICAgICAgICAgICQodGhpcy50aW1lZERpdikuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5yZXN0b3JlQW5zd2VyZWRRdWVzdGlvbnMoKTsgLy8gZG8gbm90IGxvZyB0aGVzZSByZXN1bHRzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMucGF1c2VCdG4pLmhpZGUoKTtcbiAgICAgICAgICAgICQodGhpcy50aW1lckNvbnRhaW5lcikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0QXNzZXNzbWVudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRha2VuKSB7XG4gICAgICAgICAgICAkKFwiI3JlbGF0aW9ucy1uZXh0XCIpLmhpZGUoKTsgLy8gaGlkZSB0aGUgbmV4dCBwYWdlIGJ1dHRvbiBmb3Igbm93XG4gICAgICAgICAgICAkKFwiI3JlbGF0aW9ucy1wcmV2XCIpLmhpZGUoKTsgLy8gaGlkZSB0aGUgcHJldmlvdXMgYnV0dG9uIGZvciBub3dcbiAgICAgICAgICAgICQodGhpcy5zdGFydEJ0bikuaGlkZSgpO1xuICAgICAgICAgICAgJCh0aGlzLnBhdXNlQnRuKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMucnVubmluZyA9PT0gMCAmJiB0aGlzLnBhdXNlZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnRpbWVkRGl2KS5zaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ0Jvb2tFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBcInRpbWVkRXhhbVwiLFxuICAgICAgICAgICAgICAgICAgICBhY3Q6IFwic3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lU3RhbXAgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIHZhciBzdG9yYWdlT2JqID0ge1xuICAgICAgICAgICAgICAgICAgICBhbnN3ZXI6IFswLCAwLCB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGgsIDBdLFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVTdGFtcCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZUtleSgpLFxuICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShzdG9yYWdlT2JqKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKHdpbmRvdykub24oXG4gICAgICAgICAgICAgICAgXCJiZWZvcmV1bmxvYWRcIixcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBhY3R1YWwgdmFsdWUgZ2V0cyBpZ25vcmVkIGJ5IG5ld2VyIGJyb3dzZXJzXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsZWF2ZT8gIFlvdXIgd29yayB3aWxsIGJlIGxvc3QhIEFuZCB5b3Ugd2lsbCBuZWVkIHlvdXIgaW5zdHJ1Y3RvciB0byByZXNldCB0aGUgZXhhbSFcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxlYXZlPyAgWW91ciB3b3JrIHdpbGwgYmUgbG9zdCFcIjtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBcInBhZ2VoaWRlXCIsXG4gICAgICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZpbmlzaEFzc2Vzc21lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXhhbSBleGl0ZWQgYnkgbGVhdmluZyBwYWdlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQcmV2QXNzZXNzbWVudCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhdXNlQXNzZXNzbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9uZSA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucnVubmluZyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nQm9va0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IFwidGltZWRFeGFtXCIsXG4gICAgICAgICAgICAgICAgICAgIGFjdDogXCJwYXVzZVwiLFxuICAgICAgICAgICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2aWQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlZCA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZUJ0bi5pbm5lckhUTUwgPSBcIlJlc3VtZVwiO1xuICAgICAgICAgICAgICAgICQodGhpcy50aW1lZERpdikuaGlkZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ0Jvb2tFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBcInRpbWVkRXhhbVwiLFxuICAgICAgICAgICAgICAgICAgICBhY3Q6IFwicmVzdW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VkID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmluY3JlbWVudCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VCdG4uaW5uZXJIVE1MID0gXCJQYXVzZVwiO1xuICAgICAgICAgICAgICAgICQodGhpcy50aW1lZERpdikuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1RpbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3dUaW1lcikge1xuICAgICAgICAgICAgdmFyIG1pbnMgPSBNYXRoLmZsb29yKHRoaXMudGltZUxpbWl0IC8gNjApO1xuICAgICAgICAgICAgdmFyIHNlY3MgPSBNYXRoLmZsb29yKHRoaXMudGltZUxpbWl0KSAlIDYwO1xuICAgICAgICAgICAgdmFyIG1pbnNTdHJpbmcgPSBtaW5zO1xuICAgICAgICAgICAgdmFyIHNlY3NTdHJpbmcgPSBzZWNzO1xuICAgICAgICAgICAgaWYgKG1pbnMgPCAxMCkge1xuICAgICAgICAgICAgICAgIG1pbnNTdHJpbmcgPSBcIjBcIiArIG1pbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VjcyA8IDEwKSB7XG4gICAgICAgICAgICAgICAgc2Vjc1N0cmluZyA9IFwiMFwiICsgc2VjcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBiZWdpbm5pbmcgPSBcIlRpbWUgUmVtYWluaW5nICAgIFwiO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxpbWl0ZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgYmVnaW5uaW5nID0gXCJUaW1lIFRha2VuICAgIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRpbWVTdHJpbmcgPSBiZWdpbm5pbmcgKyBtaW5zU3RyaW5nICsgXCI6XCIgKyBzZWNzU3RyaW5nO1xuICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSB8fCB0aGlzLnRha2VuKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRoaXMudGltZVRha2VuIC8gNjApO1xuICAgICAgICAgICAgICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcih0aGlzLnRpbWVUYWtlbiAlIDYwKTtcbiAgICAgICAgICAgICAgICBpZiAobWludXRlcyA8IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBcIjBcIiArIG1pbnV0ZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kcyA9IFwiMFwiICsgc2Vjb25kcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGltZVN0cmluZyA9IFwiVGltZSB0YWtlbjogXCIgKyBtaW51dGVzICsgXCI6XCIgKyBzZWNvbmRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50aW1lckNvbnRhaW5lci5pbm5lckhUTUwgPSB0aW1lU3RyaW5nO1xuICAgICAgICAgICAgdmFyIHRpbWVUaXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRpbWVUaXBcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSB0aW1lVGlwcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aW1lVGlwc1tpXS50aXRsZSA9IHRpbWVTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMudGltZXJDb250YWluZXIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluY3JlbWVudCgpIHtcbiAgICAgICAgLy8gaWYgcnVubmluZyAobm90IHBhdXNlZCkgYW5kIG5vdCB0YWtlblxuICAgICAgICBpZiAodGhpcy5ydW5uaW5nID09PSAxICYmICF0aGlzLnRha2VuKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiBhIGJyb3dzZXIgbG9zZXMgZm9jdXMsIHNldFRpbWVvdXQgbWF5IG5vdCBiZSBjYWxsZWQgb24gdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHNjaGVkdWxlIGV4cGVjdGVkLiAgQnJvd3NlcnMgYXJlIGZyZWUgdG8gc2F2ZSBwb3dlciBieSBsZW5ndGhlbmluZ1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgaW50ZXJ2YWwgdG8gc29tZSBsb25nZXIgdGltZS4gIFNvIHdlIGNhbm5vdCBqdXN0IHN1YnRyYWN0IDFcbiAgICAgICAgICAgICAgICAgICAgLy8gZnJvbSB0aGUgdGltZUxpbWl0IHdlIG5lZWQgdG8gbWVhc3VyZSB0aGUgZWxhcHNlZCB0aW1lIGZyb20gdGhlIGxhc3RcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsbCB0byB0aGUgY3VycmVudCBjYWxsIGFuZCBzdWJ0cmFjdCB0aGF0IG51bWJlciBvZiBzZWNvbmRzLlxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5saW1pdGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHRpbWUgbGltaXQsIGNvdW50IGRvd24gdG8gMFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lTGltaXQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUxpbWl0IC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKChjdXJyZW50VGltZSAtIHRoaXMubGFzdFRpbWUpIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFbHNlIGNvdW50IHVwIHRvIGtlZXAgdHJhY2sgb2YgaG93IGxvbmcgaXQgdG9vayB0byBjb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lTGltaXQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUxpbWl0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKChjdXJyZW50VGltZSAtIHRoaXMubGFzdFRpbWUpIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgICAgICAgICAgIGVCb29rQ29uZmlnLmVtYWlsICsgXCI6XCIgKyB0aGlzLmRpdmlkICsgXCItdGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lTGltaXRcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lTGltaXQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluY3JlbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmFuIG91dCBvZiB0aW1lXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMuc3RhcnRCdG4pLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzLmZpbmlzaEJ1dHRvbikuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb25lID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy50YWtlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVtYmVkIHRoZSBtZXNzYWdlIGluIHRoZSBwYWdlIC0tIGFuIGFsZXJ0IGFjdHVhbGx5IHByZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGFuc3dlcnMgZnJvbSBiZWluZyBzdWJtaXR0ZWQgYW5kIGlmIGEgc3R1ZGVudCBjbG9zZXMgdGhlaXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsYXB0b3AgdGhlbiB0aGUgYW5zd2VycyB3aWxsIG5vdCBiZSBzdWJtaXR0ZWQgZXZlciEgIEV2ZW4gd2hlbiB0aGV5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVvcGVuIHRoZSBsYXB0b3AgdGhlaXIgc2Vzc2lvbiBjb29raWUgaXMgbGlrZWx5IGludmFsaWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzcy5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNvcnJ5IGJ1dCB5b3UgcmFuIG91dCBvZiB0aW1lLiBZb3VyIGFuc3dlcnMgYXJlIGJlaW5nIHN1Ym1pdHRlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbERpdi5hcHBlbmRDaGlsZChtZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEFzc2Vzc21lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICAxMDAwXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3R5bGVFeGFtRWxlbWVudHMoKSB7XG4gICAgICAgIC8vIENoZWNrcyBpZiB0aGlzIGV4YW0gaGFzIGJlZW4gdGFrZW4gYmVmb3JlXG4gICAgICAgICQodGhpcy50aW1lckNvbnRhaW5lcikuY3NzKHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI0RGRjBEOFwiLFxuICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICNERkYwRDhcIixcbiAgICAgICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBcIjI1cHhcIixcbiAgICAgICAgfSk7XG4gICAgICAgICQodGhpcy5zY29yZURpdikuY3NzKHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI0RGRjBEOFwiLFxuICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICNERkYwRDhcIixcbiAgICAgICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBcIjI1cHhcIixcbiAgICAgICAgfSk7XG4gICAgICAgICQoXCIudG9vbHRpcFRpbWVcIikuY3NzKHtcbiAgICAgICAgICAgIG1hcmdpbjogXCIwXCIsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjBcIixcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcImJsYWNrXCIsXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmaW5pc2hBc3Nlc3NtZW50KCkge1xuICAgICAgICAkKFwiI3JlbGF0aW9ucy1uZXh0XCIpLnNob3coKTsgLy8gc2hvdyB0aGUgbmV4dCBwYWdlIGJ1dHRvbiBmb3Igbm93XG4gICAgICAgICQoXCIjcmVsYXRpb25zLXByZXZcIikuc2hvdygpOyAvLyBzaG93IHRoZSBwcmV2aW91cyBidXR0b24gZm9yIG5vd1xuICAgICAgICBpZiAoIXRoaXMuc2hvd0ZlZWRiYWNrKSB7XG4gICAgICAgICAgICAvLyBiamUgLSBjaGFuZ2VkIGZyb20gc2hvd1Jlc3VsdHNcbiAgICAgICAgICAgICQodGhpcy50aW1lZERpdikuaGlkZSgpO1xuICAgICAgICAgICAgJCh0aGlzLnBhdXNlQnRuKS5oaWRlKCk7XG4gICAgICAgICAgICAkKHRoaXMudGltZXJDb250YWluZXIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbmRUaW1lVGFrZW4oKTtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gMDtcbiAgICAgICAgdGhpcy5kb25lID0gMTtcbiAgICAgICAgdGhpcy50YWtlbiA9IDE7XG4gICAgICAgIGF3YWl0IHRoaXMuZmluYWxpemVQcm9ibGVtcygpO1xuICAgICAgICB0aGlzLmNoZWNrU2NvcmUoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U2NvcmUoKTtcbiAgICAgICAgdGhpcy5zdG9yZVNjb3JlKCk7XG4gICAgICAgIHRoaXMubG9nU2NvcmUoKTtcbiAgICAgICAgJCh0aGlzLnBhdXNlQnRuKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZmluaXNoQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgJCh3aW5kb3cpLm9mZihcImJlZm9yZXVubG9hZFwiKTtcbiAgICAgICAgLy8gdHVybiBvZmYgdGhlIHBhZ2VoaWRlIGxpc3RlbmVyXG4gICAgICAgIGxldCBhc3NpZ25tZW50X2lkID0gdGhpcy5kaXZpZDtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBlQm9va0NvbmZpZy5hcHAgKyBcIi9hc3NpZ25tZW50cy9zdHVkZW50X2F1dG9ncmFkZVwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRfaWQ6IGFzc2lnbm1lbnRfaWQsXG4gICAgICAgICAgICAgICAgICAgIGlzX3RpbWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJldGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldGRhdGEuc3VjY2VzcyA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmV0ZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0b2dyYWRlciBjb21wbGV0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cblxuICAgIC8vIGZpbmFsaXplUHJvYmxlbXNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tXG4gICAgYXN5bmMgZmluYWxpemVQcm9ibGVtcygpIHtcbiAgICAgICAgLy8gQmVjYXVzZSB3ZSBoYXZlIHN1Ym1pdHRlZCBlYWNoIHF1ZXN0aW9uIGFzIHdlIG5hdmlnYXRlIHdlIG9ubHkgbmVlZCB0b1xuICAgICAgICAvLyBzZW5kIHRoZSBmaW5hbCB2ZXJzaW9uIG9mIHRoZSBxdWVzdGlvbiB0aGUgc3R1ZGVudCBpcyBvbiB3aGVuIHRoZXkgcHJlc3MgdGhlXG4gICAgICAgIC8vIGZpbmlzaCBleGFtIGJ1dHRvbi5cblxuICAgICAgICB2YXIgY3VycmVudFF1ZXN0aW9uID1cbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhdLnF1ZXN0aW9uO1xuICAgICAgICBhd2FpdCBjdXJyZW50UXVlc3Rpb24uY2hlY2tDdXJyZW50QW5zd2VyKCk7XG4gICAgICAgIGF3YWl0IGN1cnJlbnRRdWVzdGlvbi5sb2dDdXJyZW50QW5zd2VyKCk7XG4gICAgICAgIGN1cnJlbnRRdWVzdGlvbi5yZW5kZXJGZWVkYmFjaygpO1xuICAgICAgICBjdXJyZW50UXVlc3Rpb24uZGlzYWJsZUludGVyYWN0aW9uKCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRRdWVzdGlvbiA9IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W2ldO1xuICAgICAgICAgICAgLy8gc2V0IHRoZSBzdGF0ZSB0byBmb3JyZXZpZXcgc28gd2Uga25vdyB0aGF0IGZlZWRiYWNrIG1heSBiZSBhcHByb3ByaWF0ZVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWVzdGlvbi5zdGF0ZSAhPT0gXCJicm9rZW5fZXhhbVwiKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uLnN0YXRlID0gXCJmb3JyZXZpZXdcIjtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24ucXVlc3Rpb24uZGlzYWJsZUludGVyYWN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuc2hvd0ZlZWRiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVUaW1lZEZlZWRiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXN0b3JlQW5zd2VyZWRRdWVzdGlvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXN0b3JlQW5zd2VyZWRRdWVzdGlvbnMoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50UXVlc3Rpb24gPSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVtpXTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVlc3Rpb24uc3RhdGUgPT09IFwicHJlcGFyZWRcIikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbi5zdGF0ZSA9IFwiZm9ycmV2aWV3XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBoaWRlVGltZWRGZWVkYmFja1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaGlkZVRpbWVkRmVlZGJhY2soKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50UXVlc3Rpb24gPSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVtpXS5xdWVzdGlvbjtcbiAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbi5oaWRlRmVlZGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNoZWNrU2NvcmVcbiAgICAvLyAtLS0tLS0tLS0tXG4gICAgLy8gVGhpcyBpcyBhIHNpbXBsZSBhbGwgb3Igbm90aGluZyBzY29yZSBvZiBvbmUgcG9pbnQgcGVyIHF1ZXN0aW9uIGZvclxuICAgIC8vIHRoYXQgaW5jbHVkZXMgb3VyIGJlc3QgZ3Vlc3MgaWYgYSBxdWVzdGlvbiB3YXMgc2tpcHBlZC5cbiAgICBjaGVja1Njb3JlKCkge1xuICAgICAgICB0aGlzLmNvcnJlY3RTdHIgPSBcIlwiO1xuICAgICAgICB0aGlzLnNraXBwZWRTdHIgPSBcIlwiO1xuICAgICAgICB0aGlzLmluY29ycmVjdFN0ciA9IFwiXCI7XG4gICAgICAgIC8vIEdldHMgdGhlIHNjb3JlIG9mIGVhY2ggcHJvYmxlbVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29ycmVjdCA9XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbaV0ucXVlc3Rpb24uY2hlY2tDb3JyZWN0VGltZWQoKTtcbiAgICAgICAgICAgIGlmIChjb3JyZWN0ID09IFwiVFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSsrO1xuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdFN0ciA9IHRoaXMuY29ycmVjdFN0ciArIChpICsgMSkgKyBcIiwgXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvcnJlY3QgPT0gXCJGXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluY29ycmVjdCsrO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0U3RyID0gdGhpcy5pbmNvcnJlY3RTdHIgKyAoaSArIDEpICsgXCIsIFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3JyZWN0ID09PSBudWxsIHx8IGNvcnJlY3QgPT09IFwiSVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5za2lwcGVkKys7XG4gICAgICAgICAgICAgICAgdGhpcy5za2lwcGVkU3RyID0gdGhpcy5za2lwcGVkU3RyICsgKGkgKyAxKSArIFwiLCBcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaWdub3JlZCBxdWVzdGlvbjsganVzdCBkbyBub3RoaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVtb3ZlIGV4dHJhIGNvbW1hIGFuZCBzcGFjZSBhdCBlbmQgaWYgYW55XG4gICAgICAgIGlmICh0aGlzLmNvcnJlY3RTdHIubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdFN0ciA9IHRoaXMuY29ycmVjdFN0ci5zdWJzdHJpbmcoXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RTdHIubGVuZ3RoIC0gMlxuICAgICAgICAgICAgKTtcbiAgICAgICAgZWxzZSB0aGlzLmNvcnJlY3RTdHIgPSBcIk5vbmVcIjtcbiAgICAgICAgaWYgKHRoaXMuc2tpcHBlZFN0ci5sZW5ndGggPiAwKVxuICAgICAgICAgICAgdGhpcy5za2lwcGVkU3RyID0gdGhpcy5za2lwcGVkU3RyLnN1YnN0cmluZyhcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIHRoaXMuc2tpcHBlZFN0ci5sZW5ndGggLSAyXG4gICAgICAgICAgICApO1xuICAgICAgICBlbHNlIHRoaXMuc2tpcHBlZFN0ciA9IFwiTm9uZVwiO1xuICAgICAgICBpZiAodGhpcy5pbmNvcnJlY3RTdHIubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0U3RyID0gdGhpcy5pbmNvcnJlY3RTdHIuc3Vic3RyaW5nKFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3RTdHIubGVuZ3RoIC0gMlxuICAgICAgICAgICAgKTtcbiAgICAgICAgZWxzZSB0aGlzLmluY29ycmVjdFN0ciA9IFwiTm9uZVwiO1xuICAgIH1cbiAgICBmaW5kVGltZVRha2VuKCkge1xuICAgICAgICBpZiAodGhpcy5saW1pdGVkVGltZSkge1xuICAgICAgICAgICAgdGhpcy50aW1lVGFrZW4gPSB0aGlzLnN0YXJ0aW5nVGltZSAtIHRoaXMudGltZUxpbWl0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aW1lVGFrZW4gPSB0aGlzLnRpbWVMaW1pdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdG9yZVNjb3JlKCkge1xuICAgICAgICB2YXIgc3RvcmFnZV9hcnIgPSBbXTtcbiAgICAgICAgc3RvcmFnZV9hcnIucHVzaChcbiAgICAgICAgICAgIHRoaXMuc2NvcmUsXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RTdHIsXG4gICAgICAgICAgICB0aGlzLmluY29ycmVjdCxcbiAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0U3RyLFxuICAgICAgICAgICAgdGhpcy5za2lwcGVkLFxuICAgICAgICAgICAgdGhpcy5za2lwcGVkU3RyLFxuICAgICAgICAgICAgdGhpcy50aW1lVGFrZW5cbiAgICAgICAgKTtcbiAgICAgICAgdmFyIHRpbWVTdGFtcCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBzdG9yYWdlT2JqID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgYW5zd2VyOiBzdG9yYWdlX2FycixcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZVN0YW1wLFxuICAgICAgICB9KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSwgc3RvcmFnZU9iaik7XG4gICAgfVxuICAgIC8vIF9gdGltZWQgZXhhbSBlbmRwb2ludCBwYXJhbWV0ZXJzYFxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGxvZ1Njb3JlKCkge1xuICAgICAgICB0aGlzLmxvZ0Jvb2tFdmVudCh7XG4gICAgICAgICAgICBldmVudDogXCJ0aW1lZEV4YW1cIixcbiAgICAgICAgICAgIGFjdDogXCJmaW5pc2hcIixcbiAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCxcbiAgICAgICAgICAgIGNvcnJlY3Q6IHRoaXMuc2NvcmUsXG4gICAgICAgICAgICBpbmNvcnJlY3Q6IHRoaXMuaW5jb3JyZWN0LFxuICAgICAgICAgICAgc2tpcHBlZDogdGhpcy5za2lwcGVkLFxuICAgICAgICAgICAgdGltZV90YWtlbjogdGhpcy50aW1lVGFrZW4sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaG91bGRVc2VTZXJ2ZXIoZGF0YSkge1xuICAgICAgICAvLyBXZSBvdmVycmlkZSB0aGUgUnVuZXN0b25lQmFzZSB2ZXJzaW9uIGJlY2F1c2UgdGhlcmUgaXMgbm8gXCJjb3JyZWN0XCIgYXR0cmlidXRlLCBhbmQgdGhlcmUgYXJlIDIgcG9zc2libGUgbG9jYWxTdG9yYWdlIHNjaGVtYXNcbiAgICAgICAgLy8gLS13ZSBhbHNvIHdhbnQgdG8gZGVmYXVsdCB0byBsb2NhbCBzdG9yYWdlIGJlY2F1c2UgaXQgY29udGFpbnMgbW9yZSBpbmZvcm1hdGlvbiBzcGVjaWZpY2FsbHkgd2hpY2ggcXVlc3Rpb25zIGFyZSBjb3JyZWN0LCBpbmNvcnJlY3QsIGFuZCBza2lwcGVkLlxuICAgICAgICB2YXIgc3RvcmFnZURhdGU7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgdmFyIHN0b3JhZ2VPYmogPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcbiAgICAgICAgaWYgKHN0b3JhZ2VPYmogPT09IG51bGwpIHJldHVybiB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHN0b3JlZERhdGEgPSBKU09OLnBhcnNlKHN0b3JhZ2VPYmopLmFuc3dlcjtcbiAgICAgICAgICAgIGlmIChzdG9yZWREYXRhLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvcnJlY3QgPT0gc3RvcmVkRGF0YVswXSAmJlxuICAgICAgICAgICAgICAgICAgICBkYXRhLmluY29ycmVjdCA9PSBzdG9yZWREYXRhWzFdICYmXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc2tpcHBlZCA9PSBzdG9yZWREYXRhWzJdICYmXG4gICAgICAgICAgICAgICAgICAgIGRhdGEudGltZVRha2VuID09IHN0b3JlZERhdGFbM11cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdG9yZWREYXRhLmxlbmd0aCA9PSA3KSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvcnJlY3QgPT0gc3RvcmVkRGF0YVswXSAmJlxuICAgICAgICAgICAgICAgICAgICBkYXRhLmluY29ycmVjdCA9PSBzdG9yZWREYXRhWzJdICYmXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc2tpcHBlZCA9PSBzdG9yZWREYXRhWzRdICYmXG4gICAgICAgICAgICAgICAgICAgIGRhdGEudGltZVRha2VuID09IHN0b3JlZERhdGFbNl1cbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBJbiB0aGlzIGNhc2UsIGJlY2F1c2UgbG9jYWwgc3RvcmFnZSBoYXMgbW9yZSBpbmZvLCB3ZSB3YW50IHRvIHVzZSB0aGF0IGlmIGl0J3MgY29uc2lzdGVudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0b3JhZ2VEYXRlID0gbmV3IERhdGUoSlNPTi5wYXJzZShzdG9yYWdlT2JqWzFdKS50aW1lc3RhbXApO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vIGVycm9yIHdoaWxlIHBhcnNpbmc7IGxpa2VseSBkdWUgdG8gYmFkIHZhbHVlIHN0b3JlZCBpbiBzdG9yYWdlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZXJ2ZXJEYXRlID0gbmV3IERhdGUoZGF0YS50aW1lc3RhbXApO1xuICAgICAgICBpZiAoc2VydmVyRGF0ZSA8IHN0b3JhZ2VEYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ1Njb3JlKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY2hlY2tMb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIHZhciBsZW4gPSBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xuICAgICAgICBpZiAobGVuID4gMCkge1xuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWtlbiA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlQW5zd2VycyhcIlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWtlbiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRha2VuID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyByZXN0b3JlQW5zd2VycyhkYXRhKSB7XG4gICAgICAgIHRoaXMudGFrZW4gPSAxO1xuICAgICAgICB2YXIgdG1wQXJyO1xuICAgICAgICBpZiAoZGF0YSA9PT0gXCJcIikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0bXBBcnIgPSBKU09OLnBhcnNlKFxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKVxuICAgICAgICAgICAgICAgICkuYW5zd2VyO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gZXJyb3Igd2hpbGUgcGFyc2luZzsgbGlrZWx5IGR1ZSB0byBiYWQgdmFsdWUgc3RvcmVkIGluIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YWtlbiA9IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUGFyc2UgcmVzdWx0cyBmcm9tIHRoZSBkYXRhYmFzZVxuICAgICAgICAgICAgdG1wQXJyID0gW1xuICAgICAgICAgICAgICAgIHBhcnNlSW50KGRhdGEuY29ycmVjdCksXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZGF0YS5pbmNvcnJlY3QpLFxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGRhdGEuc2tpcHBlZCksXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZGF0YS50aW1lVGFrZW4pLFxuICAgICAgICAgICAgICAgIGRhdGEucmVzZXQsXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UodG1wQXJyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG1wQXJyLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAvLyBFeGFtIHdhcyBwcmV2aW91c2x5IHJlc2V0XG4gICAgICAgICAgICB0aGlzLnJlc2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudGFrZW4gPSAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0bXBBcnIubGVuZ3RoID09IDQpIHtcbiAgICAgICAgICAgIC8vIEFjY2lkZW50YWwgUmVsb2FkIE9SIERhdGFiYXNlIEVudHJ5XG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gdG1wQXJyWzBdO1xuICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3QgPSB0bXBBcnJbMV07XG4gICAgICAgICAgICB0aGlzLnNraXBwZWQgPSB0bXBBcnJbMl07XG4gICAgICAgICAgICB0aGlzLnRpbWVUYWtlbiA9IHRtcEFyclszXTtcbiAgICAgICAgfSBlbHNlIGlmICh0bXBBcnIubGVuZ3RoID09IDcpIHtcbiAgICAgICAgICAgIC8vIExvYWRlZCBDb21wbGV0ZWQgRXhhbVxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IHRtcEFyclswXTtcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdFN0ciA9IHRtcEFyclsxXTtcbiAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0ID0gdG1wQXJyWzJdO1xuICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3RTdHIgPSB0bXBBcnJbM107XG4gICAgICAgICAgICB0aGlzLnNraXBwZWQgPSB0bXBBcnJbNF07XG4gICAgICAgICAgICB0aGlzLnNraXBwZWRTdHIgPSB0bXBBcnJbNV07XG4gICAgICAgICAgICB0aGlzLnRpbWVUYWtlbiA9IHRtcEFycls2XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNldCBsb2NhbFN0b3JhZ2UgaW4gY2FzZSBvZiBcImFjY2lkZW50YWxcIiByZWxvYWRcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3QgPSAwO1xuICAgICAgICAgICAgdGhpcy5za2lwcGVkID0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy50aW1lVGFrZW4gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRha2VuKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5za2lwcGVkID09PSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dGZWVkYmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oYW5kbGVQcmV2QXNzZXNzbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMucmVuZGVyVGltZWRRdWVzdGlvbigpO1xuICAgICAgICB0aGlzLmRpc3BsYXlTY29yZSgpO1xuICAgICAgICB0aGlzLnNob3dUaW1lKCk7XG4gICAgfVxuICAgIHNldExvY2FsU3RvcmFnZShwYXJzZWREYXRhKSB7XG4gICAgICAgIHZhciB0aW1lU3RhbXAgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgc3RvcmFnZU9iaiA9IHtcbiAgICAgICAgICAgIGFuc3dlcjogcGFyc2VkRGF0YSxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZVN0YW1wLFxuICAgICAgICB9O1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlS2V5KCksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShzdG9yYWdlT2JqKVxuICAgICAgICApO1xuICAgIH1cbiAgICBkaXNwbGF5U2NvcmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3dSZXN1bHRzKSB7XG4gICAgICAgICAgICB2YXIgc2NvcmVTdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIG51bVF1ZXN0aW9ucztcbiAgICAgICAgICAgIHZhciBwZXJjZW50Q29ycmVjdDtcbiAgICAgICAgICAgIC8vIGlmIHdlIGhhdmUgc29tZSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdFN0ci5sZW5ndGggPiAwIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3RTdHIubGVuZ3RoID4gMCB8fFxuICAgICAgICAgICAgICAgIHRoaXMuc2tpcHBlZFN0ci5sZW5ndGggPiAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzY29yZVN0cmluZyA9IGBOdW0gQ29ycmVjdDogJHt0aGlzLnNjb3JlfS4gUXVlc3Rpb25zOiAke3RoaXMuY29ycmVjdFN0cn08YnI+TnVtIFdyb25nOiAke3RoaXMuaW5jb3JyZWN0fS4gUXVlc3Rpb25zOiAke3RoaXMuaW5jb3JyZWN0U3RyfTxicj5OdW0gU2tpcHBlZDogJHt0aGlzLnNraXBwZWR9LiBRdWVzdGlvbnM6ICR7dGhpcy5za2lwcGVkU3RyfTxicj5gO1xuICAgICAgICAgICAgICAgIG51bVF1ZXN0aW9ucyA9IHRoaXMuc2NvcmUgKyB0aGlzLmluY29ycmVjdCArIHRoaXMuc2tpcHBlZDtcbiAgICAgICAgICAgICAgICBwZXJjZW50Q29ycmVjdCA9ICh0aGlzLnNjb3JlIC8gbnVtUXVlc3Rpb25zKSAqIDEwMDtcbiAgICAgICAgICAgICAgICBzY29yZVN0cmluZyArPSBcIlBlcmNlbnQgQ29ycmVjdDogXCIgKyBwZXJjZW50Q29ycmVjdCArIFwiJVwiO1xuICAgICAgICAgICAgICAgICQodGhpcy5zY29yZURpdikuaHRtbChzY29yZVN0cmluZyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY29yZVN0cmluZyA9IGBOdW0gQ29ycmVjdDogJHt0aGlzLnNjb3JlfTxicj5OdW0gV3Jvbmc6ICR7dGhpcy5pbmNvcnJlY3R9PGJyPk51bSBTa2lwcGVkOiAke3RoaXMuc2tpcHBlZH08YnI+YDtcbiAgICAgICAgICAgICAgICBudW1RdWVzdGlvbnMgPSB0aGlzLnNjb3JlICsgdGhpcy5pbmNvcnJlY3QgKyB0aGlzLnNraXBwZWQ7XG4gICAgICAgICAgICAgICAgcGVyY2VudENvcnJlY3QgPSAodGhpcy5zY29yZSAvIG51bVF1ZXN0aW9ucykgKiAxMDA7XG4gICAgICAgICAgICAgICAgc2NvcmVTdHJpbmcgKz0gXCJQZXJjZW50IENvcnJlY3Q6IFwiICsgcGVyY2VudENvcnJlY3QgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICAkKHRoaXMuc2NvcmVEaXYpLmh0bWwoc2NvcmVTdHJpbmcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVEaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0TnVtYmVyZWRMaXN0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMuc2NvcmVEaXYpLmh0bWwoXG4gICAgICAgICAgICAgICAgXCJUaGFuayB5b3UgZm9yIHRha2luZyB0aGUgZXhhbS4gIFlvdXIgYW5zd2VycyBoYXZlIGJlZW4gcmVjb3JkZWQuXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnNjb3JlRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGlnaGxpZ2h0TnVtYmVyZWRMaXN0KCkge1xuICAgICAgICB2YXIgY29ycmVjdENvdW50ID0gdGhpcy5jb3JyZWN0U3RyO1xuICAgICAgICB2YXIgaW5jb3JyZWN0Q291bnQgPSB0aGlzLmluY29ycmVjdFN0cjtcbiAgICAgICAgdmFyIHNraXBwZWRDb3VudCA9IHRoaXMuc2tpcHBlZFN0cjtcbiAgICAgICAgY29ycmVjdENvdW50ID0gY29ycmVjdENvdW50LnJlcGxhY2UoLyAvZywgXCJcIikuc3BsaXQoXCIsXCIpO1xuICAgICAgICBpbmNvcnJlY3RDb3VudCA9IGluY29ycmVjdENvdW50LnJlcGxhY2UoLyAvZywgXCJcIikuc3BsaXQoXCIsXCIpO1xuICAgICAgICBza2lwcGVkQ291bnQgPSBza2lwcGVkQ291bnQucmVwbGFjZSgvIC9nLCBcIlwiKS5zcGxpdChcIixcIik7XG4gICAgICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG51bWJlcmVkQnRucyA9ICQoXCJ1bCNwYWdlTnVtcyA+IHVsID4gbGlcIik7XG4gICAgICAgICAgICBpZiAobnVtYmVyZWRCdG5zLmhhc0NsYXNzKFwiYW5zd2VyZWRcIikpIHtcbiAgICAgICAgICAgICAgICBudW1iZXJlZEJ0bnMucmVtb3ZlQ2xhc3MoXCJhbnN3ZXJlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29ycmVjdENvdW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSBwYXJzZUludChjb3JyZWN0Q291bnRbaV0pIC0gMTtcbiAgICAgICAgICAgICAgICBudW1iZXJlZEJ0bnNcbiAgICAgICAgICAgICAgICAgICAgLmVxKHBhcnNlSW50KGNvcnJlY3RDb3VudFtpXSkgLSAxKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJjb3JyZWN0Q291bnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGluY29ycmVjdENvdW50Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyZWRCdG5zXG4gICAgICAgICAgICAgICAgICAgIC5lcShwYXJzZUludChpbmNvcnJlY3RDb3VudFtqXSkgLSAxKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJpbmNvcnJlY3RDb3VudFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgc2tpcHBlZENvdW50Lmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyZWRCdG5zXG4gICAgICAgICAgICAgICAgICAgIC5lcShwYXJzZUludChza2lwcGVkQ291bnRba10pIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwic2tpcHBlZENvdW50XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09IEZ1bmN0aW9uIHRoYXQgY2FsbHMgdGhlIGNvbnN0cnVjdG9ycyBvbiBwYWdlIGxvYWQgPT09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiQoZG9jdW1lbnQpLm9uKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PXRpbWVkQXNzZXNzbWVudF1cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgVGltZWRMaXN0W3RoaXMuaWRdID0gbmV3IFRpbWVkKHtcbiAgICAgICAgICAgIG9yaWc6IHRoaXMsXG4gICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
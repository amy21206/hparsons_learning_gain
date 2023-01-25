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
        for (var i = 0; i < this.origElem.childNodes.length; i++) {
            this.newChildren.push(this.origElem.childNodes[i]);
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
        this.flagButton.innerHTML = "Flag Question";            // name on button
        $(this.flagButton).attr("aria-labelledby", "Flag");
        $(this.flagButton).attr("tabindex", "5");
        $(this.flagButton).attr("role", "button");
        $(this.flagButton).attr("id", "flag");
        $(this.flagButton).css("cursor", "pointer");
        this.flagContainer.appendChild(this.flagButton);        // adding button to container
        this.flaggingPlace.appendChild(this.flagContainer);     // adding container to flaggingPlace
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
        this.flagDiv.appendChild(this.flaggingPlace);           // adds flaggingPlace to the flagDiv
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
        this.flagBtnListener();                                 // listens for click on flag button
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
        if (target.match(/Next/)) {                   // checks given text to match "Next"
            if ($(this.rightContainer).hasClass("disabled")) {
                return;
            }
            this.currentQuestionIndex++;
        } else if (target.match(/Prev/)) {               // checks given text to match "Prev"
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
        if ($("ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
        ).hasClass("flagcolor")) {                                           // checking for class
            this.flagButton.innerHTML = "Unflag Question";                  // changes text on button
        }
        else {
            this.flagButton.innerHTML = "Flag Question";                    // changes text on button
        }
    }

    async handleFlag(event) {
        // called when flag button is clicked
        var target = $(event.target).text()
        if (target.match(/Flag Question/)) {
            $("ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
            ).addClass("flagcolor");                            // class will change color of question block
            this.flagButton.innerHTML = "Unflag Question";
        } else {
            $("ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
            ).removeClass("flagcolor");                         // will restore current color of question block
            this.flagButton.innerHTML = "Flag Question";        // also sets name back
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
        if ($("ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"      // checking for flagcolor class
        ).hasClass("flagcolor")) {
            this.flagButton.innerHTML = "Unflag Question";
        }
        else {
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
            this.handleFlag.bind(this),     // calls this to take action
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
            this.renderedQuestionArray[
                currentIndex
            ] = this.renderedQuestionArray[randomIndex];
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
                        this.renderedQuestionArray[
                            this.currentQuestionIndex
                        ] = opts;
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

        currentQuestion = this.renderedQuestionArray[this.currentQuestionIndex]
            .question;
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

        var currentQuestion = this.renderedQuestionArray[
            this.currentQuestionIndex
        ].question;
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
            var correct = this.renderedQuestionArray[
                i
            ].question.checkCorrectTimed();
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
$(document).bind("runestone:login-complete", function () {
    $("[data-component=timedAssessment]").each(function (index) {
        TimedList[this.id] = new Timed({
            orig: this,
            useRunestoneServices: eBookConfig.useRunestoneServices,
        });
    });
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX3RpbWVkX2pzX3RpbWVkX2pzLXJ1bmVzdG9uZV9jbGlja2FibGVBcmVhX2Nzc19jbGlja2FibGVfY3NzLXJ1bmVzdG9uZV9kcmFnbmRyb3BfY3NzLThiZmQ1NC42YTA3ZjFkNmExNTFlOTRiLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTs7QUFFZ0Q7QUFDVjtBQUNEO0FBQ3VCO0FBQ2hCO0FBQ2M7QUFDWDtBQUNBO0FBQ0Y7QUFDaEM7O0FBRW5CLG9CQUFvQjs7QUFFM0I7QUFDZSxvQkFBb0IsbUVBQWE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHFDQUFxQztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhCQUE4QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZELHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsU0FBUztBQUNULHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVDQUF1QztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0NBQStDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFDQUFxQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBLFVBQVU7QUFDVjtBQUNBLGdFQUFnRTtBQUNoRSxnRUFBZ0U7QUFDaEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxQ0FBcUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2QkFBNkI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxvRUFBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELDBCQUEwQjtBQUN0RjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsdUNBQXVDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1Q0FBdUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1Q0FBdUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVDQUF1QztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsV0FBVyxlQUFlLGdCQUFnQixpQkFBaUIsZUFBZSxlQUFlLGtCQUFrQixtQkFBbUIsYUFBYSxlQUFlLGdCQUFnQjtBQUN4TjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLDhDQUE4QyxXQUFXLGlCQUFpQixlQUFlLG1CQUFtQixhQUFhO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyQkFBMkI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseUJBQXlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvdGltZWQvY3NzL3RpbWVkLmNzcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3RpbWVkL2pzL3RpbWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PT09PSAgICAgIE1hc3RlciB0aW1lZC5qcyAgICAgPT09PT09PT09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09ICAgICBUaGlzIGZpbGUgY29udGFpbnMgdGhlIEpTIGZvciAgICA9PT1cbj09PSAgICAgdGhlIFJ1bmVzdG9uZSB0aW1lZCBjb21wb25lbnQuICAgPT09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09ICAgICAgICAgICAgICBDcmVhdGVkIEJ5ICAgICAgICAgICAgICA9PT1cbj09PSAgICAgICAgICAgICBLaXJieSBPbHNvbiAgICAgICAgICAgICAgPT09XG49PT0gICAgICAgICAgICAgICA2LzExLzE1ICAgICAgICAgICAgICAgID09PVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVuZXN0b25lQmFzZSBmcm9tIFwiLi4vLi4vY29tbW9uL2pzL3J1bmVzdG9uZWJhc2UuanNcIjtcbmltcG9ydCBUaW1lZEZJVEIgZnJvbSBcIi4uLy4uL2ZpdGIvanMvdGltZWRmaXRiLmpzXCI7XG5pbXBvcnQgVGltZWRNQyBmcm9tIFwiLi4vLi4vbWNob2ljZS9qcy90aW1lZG1jLmpzXCI7XG5pbXBvcnQgVGltZWRTaG9ydEFuc3dlciBmcm9tIFwiLi4vLi4vc2hvcnRhbnN3ZXIvanMvdGltZWRfc2hvcnRhbnN3ZXIuanNcIjtcbmltcG9ydCBBQ0ZhY3RvcnkgZnJvbSBcIi4uLy4uL2FjdGl2ZWNvZGUvanMvYWNmYWN0b3J5LmpzXCI7XG5pbXBvcnQgVGltZWRDbGlja2FibGVBcmVhIGZyb20gXCIuLi8uLi9jbGlja2FibGVBcmVhL2pzL3RpbWVkY2xpY2thYmxlXCI7XG5pbXBvcnQgVGltZWREcmFnTkRyb3AgZnJvbSBcIi4uLy4uL2RyYWduZHJvcC9qcy90aW1lZGRuZC5qc1wiO1xuaW1wb3J0IFRpbWVkUGFyc29ucyBmcm9tIFwiLi4vLi4vcGFyc29ucy9qcy90aW1lZHBhcnNvbnMuanNcIjtcbmltcG9ydCBTZWxlY3RPbmUgZnJvbSBcIi4uLy4uL3NlbGVjdHF1ZXN0aW9uL2pzL3NlbGVjdG9uZVwiO1xuaW1wb3J0IFwiLi4vY3NzL3RpbWVkLmNzc1wiO1xuXG5leHBvcnQgdmFyIFRpbWVkTGlzdCA9IHt9OyAvLyBUaW1lZCBkaWN0aW9uYXJ5XG5cbi8vIFRpbWVkIGNvbnN0cnVjdG9yXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lZCBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIob3B0cyk7XG4gICAgICAgIHZhciBvcmlnID0gb3B0cy5vcmlnO1xuICAgICAgICB0aGlzLm9yaWdFbGVtID0gb3JpZzsgLy8gdGhlIGVudGlyZSBlbGVtZW50IG9mIHRoaXMgdGltZWQgYXNzZXNzbWVudCBhbmQgYWxsIG9mIGl0cyBjaGlsZHJlblxuICAgICAgICB0aGlzLmRpdmlkID0gb3JpZy5pZDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMub3JpZ0VsZW0uY2hpbGROb2RlcztcbiAgICAgICAgdGhpcy52aXNpdGVkID0gW107XG4gICAgICAgIHRoaXMudGltZUxpbWl0ID0gMDtcbiAgICAgICAgdGhpcy5saW1pdGVkVGltZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIWlzTmFOKCQodGhpcy5vcmlnRWxlbSkuZGF0YShcInRpbWVcIikpKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVMaW1pdCA9IHBhcnNlSW50KCQodGhpcy5vcmlnRWxlbSkuZGF0YShcInRpbWVcIiksIDEwKSAqIDYwOyAvLyB0aW1lIGluIHNlY29uZHMgdG8gY29tcGxldGUgdGhlIGV4YW1cbiAgICAgICAgICAgIHRoaXMuc3RhcnRpbmdUaW1lID0gdGhpcy50aW1lTGltaXQ7XG4gICAgICAgICAgICB0aGlzLmxpbWl0ZWRUaW1lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3dGZWVkYmFjayA9IHRydWU7XG4gICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmlzKFwiW2RhdGEtbm8tZmVlZGJhY2tdXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dGZWVkYmFjayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd1Jlc3VsdHMgPSB0cnVlO1xuICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLW5vLXJlc3VsdF1cIikpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdHMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJhbmRvbSA9IGZhbHNlO1xuICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLXJhbmRvbV1cIikpIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9tID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3dUaW1lciA9IHRydWU7XG4gICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmlzKFwiW2RhdGEtbm8tdGltZXJdXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUaW1lciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZnVsbHdpZHRoID0gZmFsc2U7XG4gICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmlzKFwiW2RhdGEtZnVsbHdpZHRoXVwiKSkge1xuICAgICAgICAgICAgdGhpcy5mdWxsd2lkdGggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9wYXVzZSA9IGZhbHNlO1xuICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLW5vLXBhdXNlXVwiKSkge1xuICAgICAgICAgICAgdGhpcy5ub3BhdXNlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucnVubmluZyA9IDA7XG4gICAgICAgIHRoaXMucGF1c2VkID0gMDtcbiAgICAgICAgdGhpcy5kb25lID0gMDtcbiAgICAgICAgdGhpcy50YWtlbiA9IDA7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmluY29ycmVjdCA9IDA7XG4gICAgICAgIHRoaXMuY29ycmVjdFN0ciA9IFwiXCI7XG4gICAgICAgIHRoaXMuaW5jb3JyZWN0U3RyID0gXCJcIjtcbiAgICAgICAgdGhpcy5za2lwcGVkU3RyID0gXCJcIjtcbiAgICAgICAgdGhpcy5za2lwcGVkID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCA9IDA7IC8vIFdoaWNoIHF1ZXN0aW9uIGlzIGN1cnJlbnRseSBkaXNwbGF5aW5nIG9uIHRoZSBwYWdlXG4gICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5ID0gW107IC8vIGxpc3Qgb2YgYWxsIHByb2JsZW1zXG4gICAgICAgIHRoaXMuZ2V0TmV3Q2hpbGRyZW4oKTtcbiAgICAgICAgLy8gT25lIHNtYWxsIHN0ZXAgdG8gZWxpbWluYXRlIHN0dWRlbnRzIGZyb20gZG9pbmcgdmlldyBzb3VyY2VcbiAgICAgICAgLy8gdGhpcyB3b24ndCBzdG9wIGFueW9uZSB3aXRoIGRldGVybWluYXRpb24gYnV0IG1heSBwcmV2ZW50IGNhc3VhbCBwZWVraW5nXG4gICAgICAgIGlmICghZUJvb2tDb25maWcuZW5hYmxlRGVidWcpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tBc3Nlc3NtZW50U3RhdHVzKCkudGhlbihcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRpbWVkQXNzZXNzKCk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXROZXdDaGlsZHJlbigpIHtcbiAgICAgICAgdGhpcy5uZXdDaGlsZHJlbiA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5uZXdDaGlsZHJlbi5wdXNoKHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjaGVja0Fzc2Vzc21lbnRTdGF0dXMoKSB7XG4gICAgICAgIC8vIEhhcyB0aGUgdXNlciB0YWtlbiB0aGlzIGV4YW0/ICBJbnF1aXJpbmcgbWluZHMgd2FudCB0byBrbm93XG4gICAgICAgIC8vIElmIGEgdXNlciBoYXMgbm90IHRha2VuIHRoaXMgZXhhbSB0aGVuIHdlIHdhbnQgdG8gbWFrZSBzdXJlXG4gICAgICAgIC8vIHRoYXQgaWYgYSBxdWVzdGlvbiBoYXMgYmVlbiBzZWVuIGJ5IHRoZSBzdHVkZW50IGJlZm9yZSB3ZSBkb1xuICAgICAgICAvLyBub3QgcG9wdWxhdGUgcHJldmlvdXMgYW5zd2Vycy5cbiAgICAgICAgbGV0IHNlbmRJbmZvID0ge1xuICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxuICAgICAgICAgICAgY291cnNlX25hbWU6IGVCb29rQ29uZmlnLmNvdXJzZSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coc2VuZEluZm8pO1xuICAgICAgICBpZiAoZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMpIHtcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoXG4gICAgICAgICAgICAgICAgYCR7ZUJvb2tDb25maWcubmV3X3NlcnZlcl9wcmVmaXh9L2Fzc2Vzc21lbnQvdG9va1RpbWVkQXNzZXNzbWVudGAsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmpzb25IZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzZW5kSW5mbyksXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5kZXRhaWw7XG4gICAgICAgICAgICB0aGlzLnRha2VuID0gZGF0YS50b29rQXNzZXNzbWVudDtcbiAgICAgICAgICAgIHRoaXMuYXNzZXNzbWVudFRha2VuID0gdGhpcy50YWtlbjtcbiAgICAgICAgICAgIGlmICghdGhpcy50YWtlbikge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkb25lIHdpdGggY2hlY2sgc3RhdHVzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YWtlbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hc3Nlc3NtZW50VGFrZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PSBHZW5lcmF0aW5nIG5ldyBUaW1lZCBIVE1MID09PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIGFzeW5jIHJlbmRlclRpbWVkQXNzZXNzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlcmluZyB0aW1lZCBcIik7XG4gICAgICAgIC8vIGNyZWF0ZSByZW5kZXJlZFF1ZXN0aW9uQXJyYXkgcmV0dXJucyBhIHByb21pc2VcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5jcmVhdGVSZW5kZXJlZFF1ZXN0aW9uQXJyYXkoKTtcbiAgICAgICAgaWYgKHRoaXMucmFuZG9tKSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZVJRQSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMucmVuZGVyVGltZXIoKTtcbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJDb250cm9sQnV0dG9ucygpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLnRpbWVkRGl2KTsgLy8gVGhpcyBjYW4ndCBiZSBhcHBlbmRlZCBpbiByZW5kZXJDb250YWluZXIgYmVjYXVzZSB0aGVuIGl0IHJlbmRlcnMgYWJvdmUgdGhlIHRpbWVyIGFuZCBjb250cm9sIGJ1dHRvbnMuXG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGggPiAxKSB0aGlzLnJlbmRlck5hdkNvbnRyb2xzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyU3VibWl0QnV0dG9uKCk7XG4gICAgICAgIHRoaXMucmVuZGVyRmVlZGJhY2tDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcyA9IGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzO1xuICAgICAgICAvLyBSZXBsYWNlIGludGVybWVkaWF0ZSBIVE1MIHdpdGggcmVuZGVyZWQgSFRNTFxuICAgICAgICAkKHRoaXMub3JpZ0VsZW0pLnJlcGxhY2VXaXRoKHRoaXMuY29udGFpbmVyRGl2KTtcbiAgICAgICAgLy8gY2hlY2sgaWYgYWxyZWFkeSB0YWtlbiBhbmQgaWYgc28gc2hvdyByZXN1bHRzXG4gICAgICAgIHRoaXMuc3R5bGVFeGFtRWxlbWVudHMoKTsgLy8gcmVuYW1lIHRvIHJlbmRlclBvc3NpYmxlUmVzdWx0c1xuICAgICAgICB0aGlzLmNoZWNrU2VydmVyKFwidGltZWRFeGFtXCIsIHRydWUpO1xuICAgIH1cblxuICAgIHJlbmRlckNvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBjb250YWluZXIgZm9yIHRoZSBlbnRpcmUgVGltZWQgQ29tcG9uZW50XG4gICAgICAgIGlmICh0aGlzLmZ1bGx3aWR0aCkge1xuICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvbnRhaW5lciB0byBmaWxsIHRoZSB3aWR0aCAtIGJhcmJcbiAgICAgICAgICAgICQodGhpcy5jb250YWluZXJEaXYpLmF0dHIoe1xuICAgICAgICAgICAgICAgIHN0eWxlOiBcIm1heC13aWR0aDpub25lXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5pZCA9IHRoaXMuZGl2aWQ7XG4gICAgICAgIHRoaXMudGltZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBkaXYgdGhhdCB3aWxsIGhvbGQgdGhlIHF1ZXN0aW9ucyBmb3IgdGhlIHRpbWVkIGFzc2Vzc21lbnRcbiAgICAgICAgdGhpcy5uYXZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBGb3IgbmF2aWdhdGlvbiBjb250cm9sXG4gICAgICAgICQodGhpcy5uYXZEaXYpLmF0dHIoe1xuICAgICAgICAgICAgc3R5bGU6IFwidGV4dC1hbGlnbjpjZW50ZXJcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmxhZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIGRpdiB0aGF0IHdpbGwgaG9sZCB0aGUgXCJGbGFnIFF1ZXN0aW9uXCIgYnV0dG9uXG4gICAgICAgICQodGhpcy5mbGFnRGl2KS5hdHRyKHtcbiAgICAgICAgICAgIHN0eWxlOiBcInRleHQtYWxpZ246IGNlbnRlclwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zd2l0Y2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnN3aXRjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3dpdGNoY29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLnN3aXRjaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIGlzIHJlcGxhY2VkIGJ5IHRoZSBxdWVzdGlvbnNcbiAgICAgICAgdGhpcy50aW1lZERpdi5hcHBlbmRDaGlsZCh0aGlzLm5hdkRpdik7XG4gICAgICAgIHRoaXMudGltZWREaXYuYXBwZW5kQ2hpbGQodGhpcy5mbGFnRGl2KTsgLy8gYWRkIGZsYWdEaXYgdG8gdGltZWREaXYsIHdoaWNoIGhvbGRzIGNvbXBvbmVudHMgZm9yIG5hdmlnYXRpb24gYW5kIHF1ZXN0aW9ucyBmb3IgdGltZWQgYXNzZXNzbWVudFxuICAgICAgICB0aGlzLnRpbWVkRGl2LmFwcGVuZENoaWxkKHRoaXMuc3dpdGNoQ29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5zd2l0Y2hDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zd2l0Y2hEaXYpO1xuICAgICAgICAkKHRoaXMudGltZWREaXYpLmF0dHIoe1xuICAgICAgICAgICAgaWQ6IFwidGltZWRfVGVzdFwiLFxuICAgICAgICAgICAgc3R5bGU6IFwiZGlzcGxheTpub25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlclRpbWVyKCkge1xuICAgICAgICB0aGlzLndyYXBwZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnRpbWVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XG4gICAgICAgIHRoaXMud3JhcHBlckRpdi5pZCA9IHRoaXMuZGl2aWQgKyBcIi1zdGFydFdyYXBwZXJcIjtcbiAgICAgICAgdGhpcy50aW1lckNvbnRhaW5lci5pZCA9IHRoaXMuZGl2aWQgKyBcIi1vdXRwdXRcIjtcbiAgICAgICAgdGhpcy53cmFwcGVyRGl2LmFwcGVuZENoaWxkKHRoaXMudGltZXJDb250YWluZXIpO1xuICAgICAgICB0aGlzLnNob3dUaW1lKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyQ29udHJvbEJ1dHRvbnMoKSB7XG4gICAgICAgIHRoaXMuY29udHJvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICQodGhpcy5jb250cm9sRGl2KS5hdHRyKHtcbiAgICAgICAgICAgIGlkOiBcImNvbnRyb2xzXCIsXG4gICAgICAgICAgICBzdHlsZTogXCJ0ZXh0LWFsaWduOiBjZW50ZXJcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLnBhdXNlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgJCh0aGlzLnN0YXJ0QnRuKS5hdHRyKHtcbiAgICAgICAgICAgIGNsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgICAgICAgICAgaWQ6IFwic3RhcnRcIixcbiAgICAgICAgICAgIHRhYmluZGV4OiBcIjBcIixcbiAgICAgICAgICAgIHJvbGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJTdGFydFwiO1xuICAgICAgICB0aGlzLnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmZpbmlzaEJ1dHRvbikuaGlkZSgpOyAvLyBoaWRlIHRoZSBmaW5pc2ggYnV0dG9uIGZvciBub3dcbiAgICAgICAgICAgICAgICAkKHRoaXMuZmxhZ0J1dHRvbikuc2hvdygpO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICAgICAgbWVzcy5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICBcIjxzdHJvbmc+V2FybmluZzogWW91IHdpbGwgbm90IGJlIGFibGUgdG8gY29udGludWUgdGhlIGV4YW0gaWYgeW91IGNsb3NlIHRoaXMgdGFiLCBjbG9zZSB0aGUgd2luZG93LCBvciBuYXZpZ2F0ZSBhd2F5IGZyb20gdGhpcyBwYWdlITwvc3Ryb25nPiAgTWFrZSBzdXJlIHlvdSBjbGljayB0aGUgRmluaXNoIEV4YW0gYnV0dG9uIHdoZW4geW91IGFyZSBkb25lIHRvIHN1Ym1pdCB5b3VyIHdvcmshXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sRGl2LmFwcGVuZENoaWxkKG1lc3MpO1xuICAgICAgICAgICAgICAgIG1lc3MuY2xhc3NMaXN0LmFkZChcImV4YW13YXJuaW5nXCIpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucmVuZGVyVGltZWRRdWVzdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRBc3Nlc3NtZW50KCk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgICAkKHRoaXMucGF1c2VCdG4pLmF0dHIoe1xuICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgICAgICAgICBpZDogXCJwYXVzZVwiLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgdGFiaW5kZXg6IFwiMFwiLFxuICAgICAgICAgICAgcm9sZTogXCJidXR0b25cIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGF1c2VCdG4udGV4dENvbnRlbnQgPSBcIlBhdXNlXCI7XG4gICAgICAgIHRoaXMucGF1c2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlQXNzZXNzbWVudCgpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCF0aGlzLnRha2VuKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xEaXYuYXBwZW5kQ2hpbGQodGhpcy5zdGFydEJ0bik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLm5vcGF1c2UpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbERpdi5hcHBlbmRDaGlsZCh0aGlzLnBhdXNlQnRuKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLndyYXBwZXJEaXYpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xEaXYpO1xuICAgIH1cblxuICAgIHJlbmRlck5hdkNvbnRyb2xzKCkge1xuICAgICAgICAvLyBtYWtpbmcgXCJQcmV2XCIgYnV0dG9uXG4gICAgICAgIHRoaXMucGFnTmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgJCh0aGlzLnBhZ05hdkxpc3QpLmFkZENsYXNzKFwicGFnaW5hdGlvblwiKTtcbiAgICAgICAgdGhpcy5sZWZ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICB0aGlzLmxlZnROYXZCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLmxlZnROYXZCdXR0b24uaW5uZXJIVE1MID0gXCImIzgyNDk7IFByZXZcIjtcbiAgICAgICAgJCh0aGlzLmxlZnROYXZCdXR0b24pLmF0dHIoXCJhcmlhLWxhYmVsXCIsIFwiUHJldmlvdXNcIik7XG4gICAgICAgICQodGhpcy5sZWZ0TmF2QnV0dG9uKS5hdHRyKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgICAkKHRoaXMubGVmdE5hdkJ1dHRvbikuYXR0cihcInJvbGVcIiwgXCJidXR0b25cIik7XG4gICAgICAgICQodGhpcy5yaWdodE5hdkJ1dHRvbikuYXR0cihcImlkXCIsIFwicHJldlwiKTtcbiAgICAgICAgJCh0aGlzLmxlZnROYXZCdXR0b24pLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gICAgICAgIHRoaXMubGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmxlZnROYXZCdXR0b24pO1xuICAgICAgICB0aGlzLnBhZ05hdkxpc3QuYXBwZW5kQ2hpbGQodGhpcy5sZWZ0Q29udGFpbmVyKTtcbiAgICAgICAgLy8gbWFraW5nIFwiRmxhZyBRdWVzdGlvblwiIGJ1dHRvblxuICAgICAgICB0aGlzLmZsYWdnaW5nUGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgICQodGhpcy5mbGFnZ2luZ1BsYWNlKS5hZGRDbGFzcyhcInBhZ2luYXRpb25cIik7XG4gICAgICAgIHRoaXMuZmxhZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdGhpcy5mbGFnQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgJCh0aGlzLmZsYWdCdXR0b24pLmFkZENsYXNzKFwiZmxhZ0J0blwiKTtcbiAgICAgICAgdGhpcy5mbGFnQnV0dG9uLmlubmVySFRNTCA9IFwiRmxhZyBRdWVzdGlvblwiOyAgICAgICAgICAgIC8vIG5hbWUgb24gYnV0dG9uXG4gICAgICAgICQodGhpcy5mbGFnQnV0dG9uKS5hdHRyKFwiYXJpYS1sYWJlbGxlZGJ5XCIsIFwiRmxhZ1wiKTtcbiAgICAgICAgJCh0aGlzLmZsYWdCdXR0b24pLmF0dHIoXCJ0YWJpbmRleFwiLCBcIjVcIik7XG4gICAgICAgICQodGhpcy5mbGFnQnV0dG9uKS5hdHRyKFwicm9sZVwiLCBcImJ1dHRvblwiKTtcbiAgICAgICAgJCh0aGlzLmZsYWdCdXR0b24pLmF0dHIoXCJpZFwiLCBcImZsYWdcIik7XG4gICAgICAgICQodGhpcy5mbGFnQnV0dG9uKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xuICAgICAgICB0aGlzLmZsYWdDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5mbGFnQnV0dG9uKTsgICAgICAgIC8vIGFkZGluZyBidXR0b24gdG8gY29udGFpbmVyXG4gICAgICAgIHRoaXMuZmxhZ2dpbmdQbGFjZS5hcHBlbmRDaGlsZCh0aGlzLmZsYWdDb250YWluZXIpOyAgICAgLy8gYWRkaW5nIGNvbnRhaW5lciB0byBmbGFnZ2luZ1BsYWNlXG4gICAgICAgIC8vIG1ha2luZyBcIk5leHRcIiBidXR0b25cbiAgICAgICAgdGhpcy5yaWdodENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdGhpcy5yaWdodE5hdkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICQodGhpcy5yaWdodE5hdkJ1dHRvbikuYXR0cihcImFyaWEtbGFiZWxcIiwgXCJOZXh0XCIpO1xuICAgICAgICAkKHRoaXMucmlnaHROYXZCdXR0b24pLmF0dHIoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgICAgICQodGhpcy5yaWdodE5hdkJ1dHRvbikuYXR0cihcInJvbGVcIiwgXCJidXR0b25cIik7XG4gICAgICAgICQodGhpcy5yaWdodE5hdkJ1dHRvbikuYXR0cihcImlkXCIsIFwibmV4dFwiKTtcbiAgICAgICAgdGhpcy5yaWdodE5hdkJ1dHRvbi5pbm5lckhUTUwgPSBcIk5leHQgJiM4MjUwO1wiO1xuICAgICAgICAkKHRoaXMucmlnaHROYXZCdXR0b24pLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gICAgICAgIHRoaXMucmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yaWdodE5hdkJ1dHRvbik7XG4gICAgICAgIHRoaXMucGFnTmF2TGlzdC5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0Q29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5lbnN1cmVCdXR0b25TYWZldHkoKTtcbiAgICAgICAgdGhpcy5uYXZEaXYuYXBwZW5kQ2hpbGQodGhpcy5wYWdOYXZMaXN0KTtcbiAgICAgICAgdGhpcy5mbGFnRGl2LmFwcGVuZENoaWxkKHRoaXMuZmxhZ2dpbmdQbGFjZSk7ICAgICAgICAgICAvLyBhZGRzIGZsYWdnaW5nUGxhY2UgdG8gdGhlIGZsYWdEaXZcbiAgICAgICAgdGhpcy5icmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcbiAgICAgICAgdGhpcy5uYXZEaXYuYXBwZW5kQ2hpbGQodGhpcy5icmVhayk7XG4gICAgICAgIC8vIHJlbmRlciB0aGUgcXVlc3Rpb24gbnVtYmVyIGp1bXAgYnV0dG9uc1xuICAgICAgICB0aGlzLnFOdW1MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICAkKHRoaXMucU51bUxpc3QpLmF0dHIoXCJpZFwiLCBcInBhZ2VOdW1zXCIpO1xuICAgICAgICB0aGlzLnFOdW1XcmFwcGVyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgJCh0aGlzLnFOdW1XcmFwcGVyTGlzdCkuYWRkQ2xhc3MoXCJwYWdpbmF0aW9uXCIpO1xuICAgICAgICB2YXIgdG1wTGksIHRtcEE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRtcExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgdG1wQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgdG1wQS5pbm5lckhUTUwgPSBpICsgMTtcbiAgICAgICAgICAgICQodG1wQSkuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJCh0bXBMaSkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0bXBMaS5hcHBlbmRDaGlsZCh0bXBBKTtcbiAgICAgICAgICAgIHRoaXMucU51bVdyYXBwZXJMaXN0LmFwcGVuZENoaWxkKHRtcExpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnFOdW1MaXN0LmFwcGVuZENoaWxkKHRoaXMucU51bVdyYXBwZXJMaXN0KTtcbiAgICAgICAgdGhpcy5uYXZEaXYuYXBwZW5kQ2hpbGQodGhpcy5xTnVtTGlzdCk7XG4gICAgICAgIHRoaXMubmF2QnRuTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuZmxhZ0J0bkxpc3RlbmVyKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGlzdGVucyBmb3IgY2xpY2sgb24gZmxhZyBidXR0b25cbiAgICAgICAgJCh0aGlzLmZsYWdCdXR0b24pLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvLyB3aGVuIG1vdmluZyBvZmYgb2YgYSBxdWVzdGlvbiBpbiBhbiBhY3RpdmUgZXhhbTpcbiAgICAvLyAxLiBzaG93IHRoYXQgdGhlIHF1ZXN0aW9uIGhhcyBiZWVuIHNlZW4sIG9yIG1hcmsgaXQgYnJva2VuIGlmIGl0IGlzIGluIGVycm9yLlxuICAgIC8vIDIuIGNoZWNrIGFuZCBsb2cgdGhlIGN1cnJlbnQgYW5zd2VyXG4gICAgYXN5bmMgbmF2aWdhdGVBd2F5KCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVt0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XS5zdGF0ZSA9PVxuICAgICAgICAgICAgXCJicm9rZW5fZXhhbVwiXG4gICAgICAgICkge1xuICAgICAgICAgICAgJChcbiAgICAgICAgICAgICAgICBcInVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcShcIiArIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggKyBcIilcIlxuICAgICAgICAgICAgKS5hZGRDbGFzcyhcImJyb2tlblwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVt0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XS5zdGF0ZSA9PVxuICAgICAgICAgICAgXCJleGFtX2VuZGVkXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAkKFxuICAgICAgICAgICAgICAgIFwidWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKFwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIFwiKVwiXG4gICAgICAgICAgICApLmFkZENsYXNzKFwidG9vbGF0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVt0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XS5xdWVzdGlvblxuICAgICAgICAgICAgICAgIC5pc0Fuc3dlcmVkXG4gICAgICAgICkge1xuICAgICAgICAgICAgJChcbiAgICAgICAgICAgICAgICBcInVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcShcIiArIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggKyBcIilcIlxuICAgICAgICAgICAgKS5hZGRDbGFzcyhcImFuc3dlcmVkXCIpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleFxuICAgICAgICAgICAgXS5xdWVzdGlvbi5jaGVja0N1cnJlbnRBbnN3ZXIoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5kb25lKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhcbiAgICAgICAgICAgICAgICBdLnF1ZXN0aW9uLmxvZ0N1cnJlbnRBbnN3ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVOZXh0UHJldihldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMudGFrZW4pIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubmF2aWdhdGVBd2F5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KS50ZXh0KCk7XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2goL05leHQvKSkgeyAgICAgICAgICAgICAgICAgICAvLyBjaGVja3MgZ2l2ZW4gdGV4dCB0byBtYXRjaCBcIk5leHRcIlxuICAgICAgICAgICAgaWYgKCQodGhpcy5yaWdodENvbnRhaW5lcikuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXgrKztcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQubWF0Y2goL1ByZXYvKSkgeyAgICAgICAgICAgICAgIC8vIGNoZWNrcyBnaXZlbiB0ZXh0IHRvIG1hdGNoIFwiUHJldlwiXG4gICAgICAgICAgICBpZiAoJCh0aGlzLmxlZnRDb250YWluZXIpLmhhc0NsYXNzKFwiZGlzYWJsZWRcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4LS07XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJUaW1lZFF1ZXN0aW9uKCk7XG4gICAgICAgIHRoaXMuZW5zdXJlQnV0dG9uU2FmZXR5KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xTnVtTGlzdC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgIHZhciBqID0gMDtcbiAgICAgICAgICAgICAgICBqIDwgdGhpcy5xTnVtTGlzdC5jaGlsZE5vZGVzW2ldLmNoaWxkTm9kZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGorK1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnFOdW1MaXN0LmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlc1tqXSkucmVtb3ZlQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICQoXG4gICAgICAgICAgICBcInVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcShcIiArIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggKyBcIilcIlxuICAgICAgICApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICBpZiAoJChcInVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcShcIiArIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggKyBcIilcIlxuICAgICAgICApLmhhc0NsYXNzKFwiZmxhZ2NvbG9yXCIpKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNraW5nIGZvciBjbGFzc1xuICAgICAgICAgICAgdGhpcy5mbGFnQnV0dG9uLmlubmVySFRNTCA9IFwiVW5mbGFnIFF1ZXN0aW9uXCI7ICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlcyB0ZXh0IG9uIGJ1dHRvblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mbGFnQnV0dG9uLmlubmVySFRNTCA9IFwiRmxhZyBRdWVzdGlvblwiOyAgICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlcyB0ZXh0IG9uIGJ1dHRvblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlRmxhZyhldmVudCkge1xuICAgICAgICAvLyBjYWxsZWQgd2hlbiBmbGFnIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgICAgIHZhciB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCkudGV4dCgpXG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2goL0ZsYWcgUXVlc3Rpb24vKSkge1xuICAgICAgICAgICAgJChcInVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcShcIiArIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggKyBcIilcIlxuICAgICAgICAgICAgKS5hZGRDbGFzcyhcImZsYWdjb2xvclwiKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xhc3Mgd2lsbCBjaGFuZ2UgY29sb3Igb2YgcXVlc3Rpb24gYmxvY2tcbiAgICAgICAgICAgIHRoaXMuZmxhZ0J1dHRvbi5pbm5lckhUTUwgPSBcIlVuZmxhZyBRdWVzdGlvblwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcInVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcShcIiArIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggKyBcIilcIlxuICAgICAgICAgICAgKS5yZW1vdmVDbGFzcyhcImZsYWdjb2xvclwiKTsgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lsbCByZXN0b3JlIGN1cnJlbnQgY29sb3Igb2YgcXVlc3Rpb24gYmxvY2tcbiAgICAgICAgICAgIHRoaXMuZmxhZ0J1dHRvbi5pbm5lckhUTUwgPSBcIkZsYWcgUXVlc3Rpb25cIjsgICAgICAgIC8vIGFsc28gc2V0cyBuYW1lIGJhY2tcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZU51bWJlcmVkTmF2KGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy50YWtlbikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5uYXZpZ2F0ZUF3YXkoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucU51bUxpc3QuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICB2YXIgaiA9IDA7XG4gICAgICAgICAgICAgICAgaiA8IHRoaXMucU51bUxpc3QuY2hpbGROb2Rlc1tpXS5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBqKytcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICQodGhpcy5xTnVtTGlzdC5jaGlsZE5vZGVzW2ldLmNoaWxkTm9kZXNbal0pLnJlbW92ZUNsYXNzKFxuICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCkudGV4dCgpO1xuICAgICAgICBsZXQgb2xkSW5kZXggPSB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4O1xuICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ID0gcGFyc2VJbnQodGFyZ2V0KSAtIDE7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ID4gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6IGJhZCBpbmRleCBmb3IgJHt0YXJnZXR9YCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ID0gb2xkSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgJChcbiAgICAgICAgICAgIFwidWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKFwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIFwiKVwiXG4gICAgICAgICkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIGlmICgkKFwidWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKFwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIFwiKVwiICAgICAgLy8gY2hlY2tpbmcgZm9yIGZsYWdjb2xvciBjbGFzc1xuICAgICAgICApLmhhc0NsYXNzKFwiZmxhZ2NvbG9yXCIpKSB7XG4gICAgICAgICAgICB0aGlzLmZsYWdCdXR0b24uaW5uZXJIVE1MID0gXCJVbmZsYWcgUXVlc3Rpb25cIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmxhZ0J1dHRvbi5pbm5lckhUTUwgPSBcIkZsYWcgUXVlc3Rpb25cIjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLnJlbmRlclRpbWVkUXVlc3Rpb24oKTtcbiAgICAgICAgdGhpcy5lbnN1cmVCdXR0b25TYWZldHkoKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdXAgZXZlbnRzIGZvciBuYXZpZ2F0aW9uXG4gICAgbmF2QnRuTGlzdGVuZXJzKCkge1xuICAgICAgICAvLyBOZXh0IGFuZCBQcmV2IExpc3RlbmVyXG4gICAgICAgIHRoaXMucGFnTmF2TGlzdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXh0UHJldi5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBOdW1iZXJlZCBMaXN0ZW5lclxuICAgICAgICB0aGlzLnFOdW1MaXN0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICB0aGlzLmhhbmRsZU51bWJlcmVkTmF2LmJpbmQodGhpcyksXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIHNldCB1cCBldmVudCBmb3IgZmxhZ1xuICAgIGZsYWdCdG5MaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5mbGFnZ2luZ1BsYWNlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUZsYWcuYmluZCh0aGlzKSwgICAgIC8vIGNhbGxzIHRoaXMgdG8gdGFrZSBhY3Rpb25cbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyU3VibWl0QnV0dG9uKCkge1xuICAgICAgICB0aGlzLmJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICQodGhpcy5idXR0b25Db250YWluZXIpLmF0dHIoe1xuICAgICAgICAgICAgc3R5bGU6IFwidGV4dC1hbGlnbjpjZW50ZXJcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmluaXNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgJCh0aGlzLmZpbmlzaEJ1dHRvbikuYXR0cih7XG4gICAgICAgICAgICBpZDogXCJmaW5pc2hcIixcbiAgICAgICAgICAgIGNsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maW5pc2hCdXR0b24udGV4dENvbnRlbnQgPSBcIkZpbmlzaCBFeGFtXCI7XG4gICAgICAgIHRoaXMuZmluaXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY29uZmlybShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2xpY2tpbmcgT0sgbWVhbnMgeW91IGFyZSByZWFkeSB0byBzdWJtaXQgeW91ciBhbnN3ZXJzIGFuZCBhcmUgZmluaXNoZWQgd2l0aCB0aGlzIGFzc2Vzc21lbnQuXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZpbmlzaEFzc2Vzc21lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLmZsYWdCdXR0b24pLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbnRyb2xEaXYuYXBwZW5kQ2hpbGQodGhpcy5maW5pc2hCdXR0b24pO1xuICAgICAgICAkKHRoaXMuZmluaXNoQnV0dG9uKS5oaWRlKCk7XG4gICAgICAgIHRoaXMudGltZWREaXYuYXBwZW5kQ2hpbGQodGhpcy5idXR0b25Db250YWluZXIpO1xuICAgIH1cbiAgICBlbnN1cmVCdXR0b25TYWZldHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoICE9IDEpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMucmlnaHRDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKHRoaXMubGVmdENvbnRhaW5lcikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ID49XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGggLSAxXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aCAhPSAxKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmxlZnRDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKHRoaXMucmlnaHRDb250YWluZXIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCA+IDAgJiZcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPCB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGggLSAxXG4gICAgICAgICkge1xuICAgICAgICAgICAgJCh0aGlzLnJpZ2h0Q29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgJCh0aGlzLmxlZnRDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyRmVlZGJhY2tDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuc2NvcmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcbiAgICAgICAgdGhpcy5zY29yZURpdi5pZCA9IHRoaXMuZGl2aWQgKyBcInJlc3VsdHNcIjtcbiAgICAgICAgdGhpcy5zY29yZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMuc2NvcmVEaXYpO1xuICAgIH1cblxuICAgIGNyZWF0ZVJlbmRlcmVkUXVlc3Rpb25BcnJheSgpIHtcbiAgICAgICAgLy8gdGhpcyBmaW5kcyBhbGwgdGhlIGFzc2VzcyBxdWVzdGlvbnMgaW4gdGhpcyB0aW1lZCBhc3Nlc3NtZW50XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gbWFrZSBhIGxpc3Qgb2YgYWxsIHRoZSBxdWVzdGlvbnMgdXAgZnJvbnQgc28gd2UgY2FuIHNldCB1cCBuYXZpZ2F0aW9uXG4gICAgICAgIC8vIGJ1dCB3ZSBkbyBub3Qgd2FudCB0byByZW5kZXIgdGhlIHF1ZXN0aW9ucyB1bnRpbCB0aGUgc3R1ZGVudCBoYXMgbmF2aWdhdGVkXG4gICAgICAgIC8vIEFsc28gYWRkcyB0aGVtIHRvIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5XG5cbiAgICAgICAgLy8gdG9kbzogIFRoaXMgbmVlZHMgdG8gYmUgdXBkYXRlZCB0byBhY2NvdW50IGZvciB0aGUgcnVuZXN0b25lIGRpdiB3cmFwcGVyLlxuXG4gICAgICAgIC8vIFRvIGFjY29tbW9kYXRlIHRoZSBzZWxlY3RxdWVzdGlvbiB0eXBlIC0tIHdoaWNoIGlzIGFzeW5jISB3ZSBuZWVkIHRvIHdyYXBcbiAgICAgICAgLy8gYWxsIG9mIHRoaXMgaW4gYSBwcm9taXNlLCBzbyB0aGF0IHdlIGRvbid0IGNvbnRpbnVlIHRvIHJlbmRlciB0aGUgdGltZWRcbiAgICAgICAgLy8gZXhhbSB1bnRpbCBhbGwgb2YgdGhlIHF1ZXN0aW9ucyBoYXZlIGJlZW4gcmVhbGl6ZWQuXG4gICAgICAgIHZhciBvcHRzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubmV3Q2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0bXBDaGlsZCA9IHRoaXMubmV3Q2hpbGRyZW5baV07XG4gICAgICAgICAgICBvcHRzID0ge1xuICAgICAgICAgICAgICAgIHN0YXRlOiBcInByZXBhcmVkXCIsXG4gICAgICAgICAgICAgICAgb3JpZzogdG1wQ2hpbGQsXG4gICAgICAgICAgICAgICAgcXVlc3Rpb246IHt9LFxuICAgICAgICAgICAgICAgIHVzZVJ1bmVzdG9uZVNlcnZpY2VzOiBlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcyxcbiAgICAgICAgICAgICAgICB0aW1lZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhc3Nlc3NtZW50VGFrZW46IHRoaXMudGFrZW4sXG4gICAgICAgICAgICAgICAgdGltZWRXcmFwcGVyOiB0aGlzLmRpdmlkLFxuICAgICAgICAgICAgICAgIGluaXRBdHRlbXB0czogMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoJCh0bXBDaGlsZCkuY2hpbGRyZW4oXCJbZGF0YS1jb21wb25lbnRdXCIpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0bXBDaGlsZCA9ICQodG1wQ2hpbGQpLmNoaWxkcmVuKFwiW2RhdGEtY29tcG9uZW50XVwiKVswXTtcbiAgICAgICAgICAgICAgICBvcHRzLm9yaWcgPSB0bXBDaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkKHRtcENoaWxkKS5pcyhcIltkYXRhLWNvbXBvbmVudF1cIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5wdXNoKG9wdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmFuZG9taXplUlFBKCkge1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoLFxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUsXG4gICAgICAgICAgICByYW5kb21JbmRleDtcbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleFxuICAgICAgICAgICAgXSA9IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVuZGVyVGltZWRRdWVzdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPj0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBzb21ldGltZXMgdGhlIHVzZXIgY2xpY2tzIGluIHRoZSBldmVudCBhcmVhIGZvciB0aGUgcU51bUxpc3RcbiAgICAgICAgICAgIC8vIEJ1dCBtaXNzZXMgYSBudW1iZXIgaW4gdGhhdCBjYXNlIHRoZSB0ZXh0IGlzIHRoZSBjb25jYXRlbmF0aW9uXG4gICAgICAgICAgICAvLyBvZiBhbGwgdGhlIG51bWJlcnMgaW4gdGhlIGxpc3QhXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgdGhlIHJlbmRlcmVkUXVlc3Rpb25BcnJheSB0byBzZWUgaWYgaXQgaGFzIGJlZW4gcmVuZGVyZWQuXG4gICAgICAgIGxldCBvcHRzID0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleF07XG4gICAgICAgIGxldCBjdXJyZW50UXVlc3Rpb247XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG9wdHMuc3RhdGUgPT09IFwicHJlcGFyZWRcIiB8fFxuICAgICAgICAgICAgb3B0cy5zdGF0ZSA9PT0gXCJmb3JyZXZpZXdcIiB8fFxuICAgICAgICAgICAgKG9wdHMuc3RhdGUgPT09IFwiYnJva2VuX2V4YW1cIiAmJiBvcHRzLmluaXRBdHRlbXB0cyA8IDMpXG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV0IHRtcENoaWxkID0gb3B0cy5vcmlnO1xuICAgICAgICAgICAgaWYgKCQodG1wQ2hpbGQpLmlzKFwiW2RhdGEtY29tcG9uZW50PXNlbGVjdHF1ZXN0aW9uXVwiKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbmUgJiYgb3B0cy5zdGF0ZSA9PSBcInByZXBhcmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XG4gICAgICAgICAgICAgICAgICAgIF0uc3RhdGUgPSBcImV4YW1fZW5kZWRcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY3RPbmUgaXMgYXN5bmMgYW5kIHdpbGwgcmVwbGFjZSBpdHNlbGYgaW4gdGhpcyBhcnJheSB3aXRoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBhY3R1YWwgc2VsZWN0ZWQgcXVlc3Rpb25cbiAgICAgICAgICAgICAgICAgICAgb3B0cy5ycWEgPSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld3EgPSBuZXcgU2VsZWN0T25lKG9wdHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVt0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBuZXdxLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV3cS5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0cy5zdGF0ZSA9PSBcImJyb2tlbl9leGFtXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGJyb2tlbiBjbGFzcyBmcm9tIHRoaXMgcXVlc3Rpb24gaWYgd2UgZ2V0IGhlcmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcSgke3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXh9KWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnJlbW92ZUNsYXNzKFwiYnJva2VuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnN0YXRlID0gXCJicm9rZW5fZXhhbVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgXSA9IG9wdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgaW5pdGlhbGl6aW5nIHF1ZXN0aW9uOiBEZXRhaWxzICR7ZX1gXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICgkKHRtcENoaWxkKS5pcyhcIltkYXRhLWNvbXBvbmVudF1cIikpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50S2luZCA9ICQodG1wQ2hpbGQpLmRhdGEoXCJjb21wb25lbnRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleF0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnlbY29tcG9uZW50S2luZF0ob3B0cyksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChvcHRzLnN0YXRlID09PSBcImJyb2tlbl9leGFtXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRRdWVzdGlvbiA9IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhdXG4gICAgICAgICAgICAucXVlc3Rpb247XG4gICAgICAgIGlmIChvcHRzLnN0YXRlID09PSBcImZvcnJldmlld1wiKSB7XG4gICAgICAgICAgICBhd2FpdCBjdXJyZW50UXVlc3Rpb24uY2hlY2tDdXJyZW50QW5zd2VyKCk7XG4gICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24ucmVuZGVyRmVlZGJhY2soKTtcbiAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbi5kaXNhYmxlSW50ZXJhY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy52aXNpdGVkLmluY2x1ZGVzKHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXgpKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2l0ZWQucHVzaCh0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4KTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2l0ZWQubGVuZ3RoID09PSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAhdGhpcy5kb25lXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMuZmluaXNoQnV0dG9uKS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFF1ZXN0aW9uLmNvbnRhaW5lckRpdikge1xuICAgICAgICAgICAgJCh0aGlzLnN3aXRjaERpdikucmVwbGFjZVdpdGgoY3VycmVudFF1ZXN0aW9uLmNvbnRhaW5lckRpdik7XG4gICAgICAgICAgICB0aGlzLnN3aXRjaERpdiA9IGN1cnJlbnRRdWVzdGlvbi5jb250YWluZXJEaXY7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgdGltZWQgY29tcG9uZW50IGhhcyBsaXN0ZW5lcnMsIHRob3NlIG1pZ2h0IG5lZWQgdG8gYmUgcmVpbml0aWFsaXplZFxuICAgICAgICAvLyBUaGlzIGZsYWcgd2lsbCBvbmx5IGJlIHNldCBpbiB0aGUgZWxlbWVudHMgdGhhdCBuZWVkIGl0LS1pdCB3aWxsIGJlIHVuZGVmaW5lZCBpbiB0aGUgb3RoZXJzIGFuZCB0aHVzIGV2YWx1YXRlIHRvIGZhbHNlXG4gICAgICAgIGlmIChjdXJyZW50UXVlc3Rpb24ubmVlZHNSZWluaXRpYWxpemF0aW9uKSB7XG4gICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24ucmVpbml0aWFsaXplTGlzdGVuZXJzKHRoaXMudGFrZW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT0gVGltZXIgYW5kIGNvbnRyb2wgRnVuY3Rpb25zID09PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgaGFuZGxlUHJldkFzc2Vzc21lbnQoKSB7XG4gICAgICAgICQodGhpcy5zdGFydEJ0bikuaGlkZSgpO1xuICAgICAgICAkKHRoaXMucGF1c2VCdG4pLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgJCh0aGlzLmZpbmlzaEJ1dHRvbikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSAwO1xuICAgICAgICB0aGlzLmRvbmUgPSAxO1xuICAgICAgICAvLyBzaG93RmVlZGJhY2sgc2FuZCBzaG93UmVzdWx0cyBzaG91bGQgYm90aCBiZSB0cnVlIGJlZm9yZSB3ZSBzaG93IHRoZVxuICAgICAgICAvLyBxdWVzdGlvbnMgYW5kIHRoZWlyIHN0YXRlIG9mIGNvcnJlY3RuZXNzLlxuICAgICAgICBpZiAodGhpcy5zaG93UmVzdWx0cyAmJiB0aGlzLnNob3dGZWVkYmFjaykge1xuICAgICAgICAgICAgJCh0aGlzLnRpbWVkRGl2KS5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVBbnN3ZXJlZFF1ZXN0aW9ucygpOyAvLyBkbyBub3QgbG9nIHRoZXNlIHJlc3VsdHNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcy5wYXVzZUJ0bikuaGlkZSgpO1xuICAgICAgICAgICAgJCh0aGlzLnRpbWVyQ29udGFpbmVyKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRBc3Nlc3NtZW50KCkge1xuICAgICAgICBpZiAoIXRoaXMudGFrZW4pIHtcbiAgICAgICAgICAgICQoXCIjcmVsYXRpb25zLW5leHRcIikuaGlkZSgpOyAvLyBoaWRlIHRoZSBuZXh0IHBhZ2UgYnV0dG9uIGZvciBub3dcbiAgICAgICAgICAgICQoXCIjcmVsYXRpb25zLXByZXZcIikuaGlkZSgpOyAvLyBoaWRlIHRoZSBwcmV2aW91cyBidXR0b24gZm9yIG5vd1xuICAgICAgICAgICAgJCh0aGlzLnN0YXJ0QnRuKS5oaWRlKCk7XG4gICAgICAgICAgICAkKHRoaXMucGF1c2VCdG4pLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5ydW5uaW5nID09PSAwICYmIHRoaXMucGF1c2VkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMudGltZWREaXYpLnNob3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluY3JlbWVudCgpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nQm9va0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IFwidGltZWRFeGFtXCIsXG4gICAgICAgICAgICAgICAgICAgIGFjdDogXCJzdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2aWQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIHRpbWVTdGFtcCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3JhZ2VPYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIGFuc3dlcjogWzAsIDAsIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aCwgMF0sXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZVN0YW1wLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlS2V5KCksXG4gICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VPYmopXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQod2luZG93KS5vbihcbiAgICAgICAgICAgICAgICBcImJlZm9yZXVubG9hZFwiLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGFjdHVhbCB2YWx1ZSBnZXRzIGlnbm9yZWQgYnkgbmV3ZXIgYnJvd3NlcnNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxlYXZlPyAgWW91ciB3b3JrIHdpbGwgYmUgbG9zdCEgQW5kIHlvdSB3aWxsIG5lZWQgeW91ciBpbnN0cnVjdG9yIHRvIHJlc2V0IHRoZSBleGFtIVwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbGVhdmU/ICBZb3VyIHdvcmsgd2lsbCBiZSBsb3N0IVwiO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIFwicGFnZWhpZGVcIixcbiAgICAgICAgICAgICAgICBhc3luYyBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmluaXNoQXNzZXNzbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFeGFtIGV4aXRlZCBieSBsZWF2aW5nIHBhZ2VcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVByZXZBc3Nlc3NtZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGF1c2VBc3Nlc3NtZW50KCkge1xuICAgICAgICBpZiAodGhpcy5kb25lID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ydW5uaW5nID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dCb29rRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICBldmVudDogXCJ0aW1lZEV4YW1cIixcbiAgICAgICAgICAgICAgICAgICAgYWN0OiBcInBhdXNlXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VkID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlQnRuLmlubmVySFRNTCA9IFwiUmVzdW1lXCI7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnRpbWVkRGl2KS5oaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nQm9va0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IFwidGltZWRFeGFtXCIsXG4gICAgICAgICAgICAgICAgICAgIGFjdDogXCJyZXN1bWVcIixcbiAgICAgICAgICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZUJ0bi5pbm5lckhUTUwgPSBcIlBhdXNlXCI7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnRpbWVkRGl2KS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93VGltZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvd1RpbWVyKSB7XG4gICAgICAgICAgICB2YXIgbWlucyA9IE1hdGguZmxvb3IodGhpcy50aW1lTGltaXQgLyA2MCk7XG4gICAgICAgICAgICB2YXIgc2VjcyA9IE1hdGguZmxvb3IodGhpcy50aW1lTGltaXQpICUgNjA7XG4gICAgICAgICAgICB2YXIgbWluc1N0cmluZyA9IG1pbnM7XG4gICAgICAgICAgICB2YXIgc2Vjc1N0cmluZyA9IHNlY3M7XG4gICAgICAgICAgICBpZiAobWlucyA8IDEwKSB7XG4gICAgICAgICAgICAgICAgbWluc1N0cmluZyA9IFwiMFwiICsgbWlucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWNzIDwgMTApIHtcbiAgICAgICAgICAgICAgICBzZWNzU3RyaW5nID0gXCIwXCIgKyBzZWNzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGJlZ2lubmluZyA9IFwiVGltZSBSZW1haW5pbmcgICAgXCI7XG4gICAgICAgICAgICBpZiAoIXRoaXMubGltaXRlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICBiZWdpbm5pbmcgPSBcIlRpbWUgVGFrZW4gICAgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdGltZVN0cmluZyA9IGJlZ2lubmluZyArIG1pbnNTdHJpbmcgKyBcIjpcIiArIHNlY3NTdHJpbmc7XG4gICAgICAgICAgICBpZiAodGhpcy5kb25lIHx8IHRoaXMudGFrZW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgbWludXRlcyA9IE1hdGguZmxvb3IodGhpcy50aW1lVGFrZW4gLyA2MCk7XG4gICAgICAgICAgICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKHRoaXMudGltZVRha2VuICUgNjApO1xuICAgICAgICAgICAgICAgIGlmIChtaW51dGVzIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IFwiMFwiICsgbWludXRlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlY29uZHMgPCAxMCkge1xuICAgICAgICAgICAgICAgICAgICBzZWNvbmRzID0gXCIwXCIgKyBzZWNvbmRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aW1lU3RyaW5nID0gXCJUaW1lIHRha2VuOiBcIiArIG1pbnV0ZXMgKyBcIjpcIiArIHNlY29uZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRpbWVyQ29udGFpbmVyLmlubmVySFRNTCA9IHRpbWVTdHJpbmc7XG4gICAgICAgICAgICB2YXIgdGltZVRpcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGltZVRpcFwiKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IHRpbWVUaXBzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHRpbWVUaXBzW2ldLnRpdGxlID0gdGltZVN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcy50aW1lckNvbnRhaW5lcikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5jcmVtZW50KCkge1xuICAgICAgICAvLyBpZiBydW5uaW5nIChub3QgcGF1c2VkKSBhbmQgbm90IHRha2VuXG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcgPT09IDEgJiYgIXRoaXMudGFrZW4pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIGEgYnJvd3NlciBsb3NlcyBmb2N1cywgc2V0VGltZW91dCBtYXkgbm90IGJlIGNhbGxlZCBvbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gc2NoZWR1bGUgZXhwZWN0ZWQuICBCcm93c2VycyBhcmUgZnJlZSB0byBzYXZlIHBvd2VyIGJ5IGxlbmd0aGVuaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBpbnRlcnZhbCB0byBzb21lIGxvbmdlciB0aW1lLiAgU28gd2UgY2Fubm90IGp1c3Qgc3VidHJhY3QgMVxuICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIHRoZSB0aW1lTGltaXQgd2UgbmVlZCB0byBtZWFzdXJlIHRoZSBlbGFwc2VkIHRpbWUgZnJvbSB0aGUgbGFzdFxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxsIHRvIHRoZSBjdXJyZW50IGNhbGwgYW5kIHN1YnRyYWN0IHRoYXQgbnVtYmVyIG9mIHNlY29uZHMuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpbWl0ZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgdGltZSBsaW1pdCwgY291bnQgZG93biB0byAwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVMaW1pdCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lTGltaXQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoKGN1cnJlbnRUaW1lIC0gdGhpcy5sYXN0VGltZSkgLyAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVsc2UgY291bnQgdXAgdG8ga2VlcCB0cmFjayBvZiBob3cgbG9uZyBpdCB0b29rIHRvIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVMaW1pdCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lTGltaXQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoKGN1cnJlbnRUaW1lIC0gdGhpcy5sYXN0VGltZSkgLyAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgICAgICAgICAgZUJvb2tDb25maWcuZW1haWwgKyBcIjpcIiArIHRoaXMuZGl2aWQgKyBcIi10aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVMaW1pdFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVMaW1pdCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByYW4gb3V0IG9mIHRpbWVcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcy5zdGFydEJ0bikuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMuZmluaXNoQnV0dG9uKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbmUgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRha2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIG1lc3NhZ2UgaW4gdGhlIHBhZ2UgLS0gYW4gYWxlcnQgYWN0dWFsbHkgcHJldmVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYW5zd2VycyBmcm9tIGJlaW5nIHN1Ym1pdHRlZCBhbmQgaWYgYSBzdHVkZW50IGNsb3NlcyB0aGVpclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhcHRvcCB0aGVuIHRoZSBhbnN3ZXJzIHdpbGwgbm90IGJlIHN1Ym1pdHRlZCBldmVyISAgRXZlbiB3aGVuIHRoZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW9wZW4gdGhlIGxhcHRvcCB0aGVpciBzZXNzaW9uIGNvb2tpZSBpcyBsaWtlbHkgaW52YWxpZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU29ycnkgYnV0IHlvdSByYW4gb3V0IG9mIHRpbWUuIFlvdXIgYW5zd2VycyBhcmUgYmVpbmcgc3VibWl0dGVkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250cm9sRGl2LmFwcGVuZENoaWxkKG1lc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQXNzZXNzbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIDEwMDBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdHlsZUV4YW1FbGVtZW50cygpIHtcbiAgICAgICAgLy8gQ2hlY2tzIGlmIHRoaXMgZXhhbSBoYXMgYmVlbiB0YWtlbiBiZWZvcmVcbiAgICAgICAgJCh0aGlzLnRpbWVyQ29udGFpbmVyKS5jc3Moe1xuICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjREZGMEQ4XCIsXG4gICAgICAgICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgI0RGRjBEOFwiLFxuICAgICAgICAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiMjVweFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzLnNjb3JlRGl2KS5jc3Moe1xuICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjREZGMEQ4XCIsXG4gICAgICAgICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgI0RGRjBEOFwiLFxuICAgICAgICAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiMjVweFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgJChcIi50b29sdGlwVGltZVwiKS5jc3Moe1xuICAgICAgICAgICAgbWFyZ2luOiBcIjBcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMFwiLFxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiYmxhY2tcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZpbmlzaEFzc2Vzc21lbnQoKSB7XG4gICAgICAgICQoXCIjcmVsYXRpb25zLW5leHRcIikuc2hvdygpOyAvLyBzaG93IHRoZSBuZXh0IHBhZ2UgYnV0dG9uIGZvciBub3dcbiAgICAgICAgJChcIiNyZWxhdGlvbnMtcHJldlwiKS5zaG93KCk7IC8vIHNob3cgdGhlIHByZXZpb3VzIGJ1dHRvbiBmb3Igbm93XG4gICAgICAgIGlmICghdGhpcy5zaG93RmVlZGJhY2spIHtcbiAgICAgICAgICAgIC8vIGJqZSAtIGNoYW5nZWQgZnJvbSBzaG93UmVzdWx0c1xuICAgICAgICAgICAgJCh0aGlzLnRpbWVkRGl2KS5oaWRlKCk7XG4gICAgICAgICAgICAkKHRoaXMucGF1c2VCdG4pLmhpZGUoKTtcbiAgICAgICAgICAgICQodGhpcy50aW1lckNvbnRhaW5lcikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmluZFRpbWVUYWtlbigpO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSAwO1xuICAgICAgICB0aGlzLmRvbmUgPSAxO1xuICAgICAgICB0aGlzLnRha2VuID0gMTtcbiAgICAgICAgYXdhaXQgdGhpcy5maW5hbGl6ZVByb2JsZW1zKCk7XG4gICAgICAgIHRoaXMuY2hlY2tTY29yZSgpO1xuICAgICAgICB0aGlzLmRpc3BsYXlTY29yZSgpO1xuICAgICAgICB0aGlzLnN0b3JlU2NvcmUoKTtcbiAgICAgICAgdGhpcy5sb2dTY29yZSgpO1xuICAgICAgICAkKHRoaXMucGF1c2VCdG4pLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5maW5pc2hCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAkKHdpbmRvdykub2ZmKFwiYmVmb3JldW5sb2FkXCIpO1xuICAgICAgICAvLyB0dXJuIG9mZiB0aGUgcGFnZWhpZGUgbGlzdGVuZXJcbiAgICAgICAgbGV0IGFzc2lnbm1lbnRfaWQgPSB0aGlzLmRpdmlkO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IGVCb29rQ29uZmlnLmFwcCArIFwiL2Fzc2lnbm1lbnRzL3N0dWRlbnRfYXV0b2dyYWRlXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwiSlNPTlwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudF9pZDogYXNzaWdubWVudF9pZCxcbiAgICAgICAgICAgICAgICAgICAgaXNfdGltZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmV0ZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmV0ZGF0YS5zdWNjZXNzID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXRkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRvZ3JhZGVyIGNvbXBsZXRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxuXG4gICAgLy8gZmluYWxpemVQcm9ibGVtc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS1cbiAgICBhc3luYyBmaW5hbGl6ZVByb2JsZW1zKCkge1xuICAgICAgICAvLyBCZWNhdXNlIHdlIGhhdmUgc3VibWl0dGVkIGVhY2ggcXVlc3Rpb24gYXMgd2UgbmF2aWdhdGUgd2Ugb25seSBuZWVkIHRvXG4gICAgICAgIC8vIHNlbmQgdGhlIGZpbmFsIHZlcnNpb24gb2YgdGhlIHF1ZXN0aW9uIHRoZSBzdHVkZW50IGlzIG9uIHdoZW4gdGhleSBwcmVzcyB0aGVcbiAgICAgICAgLy8gZmluaXNoIGV4YW0gYnV0dG9uLlxuXG4gICAgICAgIHZhciBjdXJyZW50UXVlc3Rpb24gPSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhcbiAgICAgICAgXS5xdWVzdGlvbjtcbiAgICAgICAgYXdhaXQgY3VycmVudFF1ZXN0aW9uLmNoZWNrQ3VycmVudEFuc3dlcigpO1xuICAgICAgICBhd2FpdCBjdXJyZW50UXVlc3Rpb24ubG9nQ3VycmVudEFuc3dlcigpO1xuICAgICAgICBjdXJyZW50UXVlc3Rpb24ucmVuZGVyRmVlZGJhY2soKTtcbiAgICAgICAgY3VycmVudFF1ZXN0aW9uLmRpc2FibGVJbnRlcmFjdGlvbigpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50UXVlc3Rpb24gPSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVtpXTtcbiAgICAgICAgICAgIC8vIHNldCB0aGUgc3RhdGUgdG8gZm9ycmV2aWV3IHNvIHdlIGtub3cgdGhhdCBmZWVkYmFjayBtYXkgYmUgYXBwcm9wcmlhdGVcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVlc3Rpb24uc3RhdGUgIT09IFwiYnJva2VuX2V4YW1cIikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbi5zdGF0ZSA9IFwiZm9ycmV2aWV3XCI7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uLnF1ZXN0aW9uLmRpc2FibGVJbnRlcmFjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnNob3dGZWVkYmFjaykge1xuICAgICAgICAgICAgdGhpcy5oaWRlVGltZWRGZWVkYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVzdG9yZUFuc3dlcmVkUXVlc3Rpb25zXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcmVzdG9yZUFuc3dlcmVkUXVlc3Rpb25zKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFF1ZXN0aW9uID0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbaV07XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXN0aW9uLnN0YXRlID09PSBcInByZXBhcmVkXCIpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24uc3RhdGUgPSBcImZvcnJldmlld1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaGlkZVRpbWVkRmVlZGJhY2tcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLVxuICAgIGhpZGVUaW1lZEZlZWRiYWNrKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFF1ZXN0aW9uID0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbaV0ucXVlc3Rpb247XG4gICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24uaGlkZUZlZWRiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjaGVja1Njb3JlXG4gICAgLy8gLS0tLS0tLS0tLVxuICAgIC8vIFRoaXMgaXMgYSBzaW1wbGUgYWxsIG9yIG5vdGhpbmcgc2NvcmUgb2Ygb25lIHBvaW50IHBlciBxdWVzdGlvbiBmb3JcbiAgICAvLyB0aGF0IGluY2x1ZGVzIG91ciBiZXN0IGd1ZXNzIGlmIGEgcXVlc3Rpb24gd2FzIHNraXBwZWQuXG4gICAgY2hlY2tTY29yZSgpIHtcbiAgICAgICAgdGhpcy5jb3JyZWN0U3RyID0gXCJcIjtcbiAgICAgICAgdGhpcy5za2lwcGVkU3RyID0gXCJcIjtcbiAgICAgICAgdGhpcy5pbmNvcnJlY3RTdHIgPSBcIlwiO1xuICAgICAgICAvLyBHZXRzIHRoZSBzY29yZSBvZiBlYWNoIHByb2JsZW1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvcnJlY3QgPSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVtcbiAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICBdLnF1ZXN0aW9uLmNoZWNrQ29ycmVjdFRpbWVkKCk7XG4gICAgICAgICAgICBpZiAoY29ycmVjdCA9PSBcIlRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUrKztcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RTdHIgPSB0aGlzLmNvcnJlY3RTdHIgKyAoaSArIDEpICsgXCIsIFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3JyZWN0ID09IFwiRlwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3QrKztcbiAgICAgICAgICAgICAgICB0aGlzLmluY29ycmVjdFN0ciA9IHRoaXMuaW5jb3JyZWN0U3RyICsgKGkgKyAxKSArIFwiLCBcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29ycmVjdCA9PT0gbnVsbCB8fCBjb3JyZWN0ID09PSBcIklcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2tpcHBlZCsrO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tpcHBlZFN0ciA9IHRoaXMuc2tpcHBlZFN0ciArIChpICsgMSkgKyBcIiwgXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlnbm9yZWQgcXVlc3Rpb247IGp1c3QgZG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHJlbW92ZSBleHRyYSBjb21tYSBhbmQgc3BhY2UgYXQgZW5kIGlmIGFueVxuICAgICAgICBpZiAodGhpcy5jb3JyZWN0U3RyLmxlbmd0aCA+IDApXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RTdHIgPSB0aGlzLmNvcnJlY3RTdHIuc3Vic3RyaW5nKFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0U3RyLmxlbmd0aCAtIDJcbiAgICAgICAgICAgICk7XG4gICAgICAgIGVsc2UgdGhpcy5jb3JyZWN0U3RyID0gXCJOb25lXCI7XG4gICAgICAgIGlmICh0aGlzLnNraXBwZWRTdHIubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHRoaXMuc2tpcHBlZFN0ciA9IHRoaXMuc2tpcHBlZFN0ci5zdWJzdHJpbmcoXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICB0aGlzLnNraXBwZWRTdHIubGVuZ3RoIC0gMlxuICAgICAgICAgICAgKTtcbiAgICAgICAgZWxzZSB0aGlzLnNraXBwZWRTdHIgPSBcIk5vbmVcIjtcbiAgICAgICAgaWYgKHRoaXMuaW5jb3JyZWN0U3RyLmxlbmd0aCA+IDApXG4gICAgICAgICAgICB0aGlzLmluY29ycmVjdFN0ciA9IHRoaXMuaW5jb3JyZWN0U3RyLnN1YnN0cmluZyhcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0U3RyLmxlbmd0aCAtIDJcbiAgICAgICAgICAgICk7XG4gICAgICAgIGVsc2UgdGhpcy5pbmNvcnJlY3RTdHIgPSBcIk5vbmVcIjtcbiAgICB9XG4gICAgZmluZFRpbWVUYWtlbigpIHtcbiAgICAgICAgaWYgKHRoaXMubGltaXRlZFRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMudGltZVRha2VuID0gdGhpcy5zdGFydGluZ1RpbWUgLSB0aGlzLnRpbWVMaW1pdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGltZVRha2VuID0gdGhpcy50aW1lTGltaXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcmVTY29yZSgpIHtcbiAgICAgICAgdmFyIHN0b3JhZ2VfYXJyID0gW107XG4gICAgICAgIHN0b3JhZ2VfYXJyLnB1c2goXG4gICAgICAgICAgICB0aGlzLnNjb3JlLFxuICAgICAgICAgICAgdGhpcy5jb3JyZWN0U3RyLFxuICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3QsXG4gICAgICAgICAgICB0aGlzLmluY29ycmVjdFN0cixcbiAgICAgICAgICAgIHRoaXMuc2tpcHBlZCxcbiAgICAgICAgICAgIHRoaXMuc2tpcHBlZFN0cixcbiAgICAgICAgICAgIHRoaXMudGltZVRha2VuXG4gICAgICAgICk7XG4gICAgICAgIHZhciB0aW1lU3RhbXAgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgc3RvcmFnZU9iaiA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGFuc3dlcjogc3RvcmFnZV9hcnIsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVTdGFtcCxcbiAgICAgICAgfSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCksIHN0b3JhZ2VPYmopO1xuICAgIH1cbiAgICAvLyBfYHRpbWVkIGV4YW0gZW5kcG9pbnQgcGFyYW1ldGVyc2BcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBsb2dTY29yZSgpIHtcbiAgICAgICAgdGhpcy5sb2dCb29rRXZlbnQoe1xuICAgICAgICAgICAgZXZlbnQ6IFwidGltZWRFeGFtXCIsXG4gICAgICAgICAgICBhY3Q6IFwiZmluaXNoXCIsXG4gICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2aWQsXG4gICAgICAgICAgICBjb3JyZWN0OiB0aGlzLnNjb3JlLFxuICAgICAgICAgICAgaW5jb3JyZWN0OiB0aGlzLmluY29ycmVjdCxcbiAgICAgICAgICAgIHNraXBwZWQ6IHRoaXMuc2tpcHBlZCxcbiAgICAgICAgICAgIHRpbWVfdGFrZW46IHRoaXMudGltZVRha2VuLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2hvdWxkVXNlU2VydmVyKGRhdGEpIHtcbiAgICAgICAgLy8gV2Ugb3ZlcnJpZGUgdGhlIFJ1bmVzdG9uZUJhc2UgdmVyc2lvbiBiZWNhdXNlIHRoZXJlIGlzIG5vIFwiY29ycmVjdFwiIGF0dHJpYnV0ZSwgYW5kIHRoZXJlIGFyZSAyIHBvc3NpYmxlIGxvY2FsU3RvcmFnZSBzY2hlbWFzXG4gICAgICAgIC8vIC0td2UgYWxzbyB3YW50IHRvIGRlZmF1bHQgdG8gbG9jYWwgc3RvcmFnZSBiZWNhdXNlIGl0IGNvbnRhaW5zIG1vcmUgaW5mb3JtYXRpb24gc3BlY2lmaWNhbGx5IHdoaWNoIHF1ZXN0aW9ucyBhcmUgY29ycmVjdCwgaW5jb3JyZWN0LCBhbmQgc2tpcHBlZC5cbiAgICAgICAgdmFyIHN0b3JhZ2VEYXRlO1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XG4gICAgICAgIHZhciBzdG9yYWdlT2JqID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSk7XG4gICAgICAgIGlmIChzdG9yYWdlT2JqID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBzdG9yZWREYXRhID0gSlNPTi5wYXJzZShzdG9yYWdlT2JqKS5hbnN3ZXI7XG4gICAgICAgICAgICBpZiAoc3RvcmVkRGF0YS5sZW5ndGggPT0gNCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jb3JyZWN0ID09IHN0b3JlZERhdGFbMF0gJiZcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pbmNvcnJlY3QgPT0gc3RvcmVkRGF0YVsxXSAmJlxuICAgICAgICAgICAgICAgICAgICBkYXRhLnNraXBwZWQgPT0gc3RvcmVkRGF0YVsyXSAmJlxuICAgICAgICAgICAgICAgICAgICBkYXRhLnRpbWVUYWtlbiA9PSBzdG9yZWREYXRhWzNdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RvcmVkRGF0YS5sZW5ndGggPT0gNykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jb3JyZWN0ID09IHN0b3JlZERhdGFbMF0gJiZcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pbmNvcnJlY3QgPT0gc3RvcmVkRGF0YVsyXSAmJlxuICAgICAgICAgICAgICAgICAgICBkYXRhLnNraXBwZWQgPT0gc3RvcmVkRGF0YVs0XSAmJlxuICAgICAgICAgICAgICAgICAgICBkYXRhLnRpbWVUYWtlbiA9PSBzdG9yZWREYXRhWzZdXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gSW4gdGhpcyBjYXNlLCBiZWNhdXNlIGxvY2FsIHN0b3JhZ2UgaGFzIG1vcmUgaW5mbywgd2Ugd2FudCB0byB1c2UgdGhhdCBpZiBpdCdzIGNvbnNpc3RlbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdG9yYWdlRGF0ZSA9IG5ldyBEYXRlKEpTT04ucGFyc2Uoc3RvcmFnZU9ialsxXSkudGltZXN0YW1wKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBlcnJvciB3aGlsZSBwYXJzaW5nOyBsaWtlbHkgZHVlIHRvIGJhZCB2YWx1ZSBzdG9yZWQgaW4gc3RvcmFnZVxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VydmVyRGF0ZSA9IG5ldyBEYXRlKGRhdGEudGltZXN0YW1wKTtcbiAgICAgICAgaWYgKHNlcnZlckRhdGUgPCBzdG9yYWdlRGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5sb2dTY29yZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNoZWNrTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICB2YXIgbGVuID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFrZW4gPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdG9yZUFuc3dlcnMoXCJcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGFrZW4gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YWtlbiA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgcmVzdG9yZUFuc3dlcnMoZGF0YSkge1xuICAgICAgICB0aGlzLnRha2VuID0gMTtcbiAgICAgICAgdmFyIHRtcEFycjtcbiAgICAgICAgaWYgKGRhdGEgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdG1wQXJyID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSlcbiAgICAgICAgICAgICAgICApLmFuc3dlcjtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIC8vIGVycm9yIHdoaWxlIHBhcnNpbmc7IGxpa2VseSBkdWUgdG8gYmFkIHZhbHVlIHN0b3JlZCBpbiBzdG9yYWdlXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFrZW4gPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFBhcnNlIHJlc3VsdHMgZnJvbSB0aGUgZGF0YWJhc2VcbiAgICAgICAgICAgIHRtcEFyciA9IFtcbiAgICAgICAgICAgICAgICBwYXJzZUludChkYXRhLmNvcnJlY3QpLFxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGRhdGEuaW5jb3JyZWN0KSxcbiAgICAgICAgICAgICAgICBwYXJzZUludChkYXRhLnNraXBwZWQpLFxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGRhdGEudGltZVRha2VuKSxcbiAgICAgICAgICAgICAgICBkYXRhLnJlc2V0LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKHRtcEFycik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRtcEFyci5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgLy8gRXhhbSB3YXMgcHJldmlvdXNseSByZXNldFxuICAgICAgICAgICAgdGhpcy5yZXNldCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRha2VuID0gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG1wQXJyLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICAvLyBBY2NpZGVudGFsIFJlbG9hZCBPUiBEYXRhYmFzZSBFbnRyeVxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IHRtcEFyclswXTtcbiAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0ID0gdG1wQXJyWzFdO1xuICAgICAgICAgICAgdGhpcy5za2lwcGVkID0gdG1wQXJyWzJdO1xuICAgICAgICAgICAgdGhpcy50aW1lVGFrZW4gPSB0bXBBcnJbM107XG4gICAgICAgIH0gZWxzZSBpZiAodG1wQXJyLmxlbmd0aCA9PSA3KSB7XG4gICAgICAgICAgICAvLyBMb2FkZWQgQ29tcGxldGVkIEV4YW1cbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSB0bXBBcnJbMF07XG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RTdHIgPSB0bXBBcnJbMV07XG4gICAgICAgICAgICB0aGlzLmluY29ycmVjdCA9IHRtcEFyclsyXTtcbiAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0U3RyID0gdG1wQXJyWzNdO1xuICAgICAgICAgICAgdGhpcy5za2lwcGVkID0gdG1wQXJyWzRdO1xuICAgICAgICAgICAgdGhpcy5za2lwcGVkU3RyID0gdG1wQXJyWzVdO1xuICAgICAgICAgICAgdGhpcy50aW1lVGFrZW4gPSB0bXBBcnJbNl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTZXQgbG9jYWxTdG9yYWdlIGluIGNhc2Ugb2YgXCJhY2NpZGVudGFsXCIgcmVsb2FkXG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2tpcHBlZCA9IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMudGltZVRha2VuID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50YWtlbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2tpcHBlZCA9PT0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RmVlZGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUHJldkFzc2Vzc21lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLnJlbmRlclRpbWVkUXVlc3Rpb24oKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U2NvcmUoKTtcbiAgICAgICAgdGhpcy5zaG93VGltZSgpO1xuICAgIH1cbiAgICBzZXRMb2NhbFN0b3JhZ2UocGFyc2VkRGF0YSkge1xuICAgICAgICB2YXIgdGltZVN0YW1wID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIHN0b3JhZ2VPYmogPSB7XG4gICAgICAgICAgICBhbnN3ZXI6IHBhcnNlZERhdGEsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVTdGFtcCxcbiAgICAgICAgfTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZUtleSgpLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZU9iailcbiAgICAgICAgKTtcbiAgICB9XG4gICAgZGlzcGxheVNjb3JlKCkge1xuICAgICAgICBpZiAodGhpcy5zaG93UmVzdWx0cykge1xuICAgICAgICAgICAgdmFyIHNjb3JlU3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBudW1RdWVzdGlvbnM7XG4gICAgICAgICAgICB2YXIgcGVyY2VudENvcnJlY3Q7XG4gICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIHNvbWUgaW5mb3JtYXRpb25cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RTdHIubGVuZ3RoID4gMCB8fFxuICAgICAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0U3RyLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgICAgICAgICB0aGlzLnNraXBwZWRTdHIubGVuZ3RoID4gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc2NvcmVTdHJpbmcgPSBgTnVtIENvcnJlY3Q6ICR7dGhpcy5zY29yZX0uIFF1ZXN0aW9uczogJHt0aGlzLmNvcnJlY3RTdHJ9PGJyPk51bSBXcm9uZzogJHt0aGlzLmluY29ycmVjdH0uIFF1ZXN0aW9uczogJHt0aGlzLmluY29ycmVjdFN0cn08YnI+TnVtIFNraXBwZWQ6ICR7dGhpcy5za2lwcGVkfS4gUXVlc3Rpb25zOiAke3RoaXMuc2tpcHBlZFN0cn08YnI+YDtcbiAgICAgICAgICAgICAgICBudW1RdWVzdGlvbnMgPSB0aGlzLnNjb3JlICsgdGhpcy5pbmNvcnJlY3QgKyB0aGlzLnNraXBwZWQ7XG4gICAgICAgICAgICAgICAgcGVyY2VudENvcnJlY3QgPSAodGhpcy5zY29yZSAvIG51bVF1ZXN0aW9ucykgKiAxMDA7XG4gICAgICAgICAgICAgICAgc2NvcmVTdHJpbmcgKz0gXCJQZXJjZW50IENvcnJlY3Q6IFwiICsgcGVyY2VudENvcnJlY3QgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICAkKHRoaXMuc2NvcmVEaXYpLmh0bWwoc2NvcmVTdHJpbmcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVEaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NvcmVTdHJpbmcgPSBgTnVtIENvcnJlY3Q6ICR7dGhpcy5zY29yZX08YnI+TnVtIFdyb25nOiAke3RoaXMuaW5jb3JyZWN0fTxicj5OdW0gU2tpcHBlZDogJHt0aGlzLnNraXBwZWR9PGJyPmA7XG4gICAgICAgICAgICAgICAgbnVtUXVlc3Rpb25zID0gdGhpcy5zY29yZSArIHRoaXMuaW5jb3JyZWN0ICsgdGhpcy5za2lwcGVkO1xuICAgICAgICAgICAgICAgIHBlcmNlbnRDb3JyZWN0ID0gKHRoaXMuc2NvcmUgLyBudW1RdWVzdGlvbnMpICogMTAwO1xuICAgICAgICAgICAgICAgIHNjb3JlU3RyaW5nICs9IFwiUGVyY2VudCBDb3JyZWN0OiBcIiArIHBlcmNlbnRDb3JyZWN0ICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnNjb3JlRGl2KS5odG1sKHNjb3JlU3RyaW5nKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodE51bWJlcmVkTGlzdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzLnNjb3JlRGl2KS5odG1sKFxuICAgICAgICAgICAgICAgIFwiVGhhbmsgeW91IGZvciB0YWtpbmcgdGhlIGV4YW0uICBZb3VyIGFuc3dlcnMgaGF2ZSBiZWVuIHJlY29yZGVkLlwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5zY29yZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhpZ2hsaWdodE51bWJlcmVkTGlzdCgpIHtcbiAgICAgICAgdmFyIGNvcnJlY3RDb3VudCA9IHRoaXMuY29ycmVjdFN0cjtcbiAgICAgICAgdmFyIGluY29ycmVjdENvdW50ID0gdGhpcy5pbmNvcnJlY3RTdHI7XG4gICAgICAgIHZhciBza2lwcGVkQ291bnQgPSB0aGlzLnNraXBwZWRTdHI7XG4gICAgICAgIGNvcnJlY3RDb3VudCA9IGNvcnJlY3RDb3VudC5yZXBsYWNlKC8gL2csIFwiXCIpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgaW5jb3JyZWN0Q291bnQgPSBpbmNvcnJlY3RDb3VudC5yZXBsYWNlKC8gL2csIFwiXCIpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgc2tpcHBlZENvdW50ID0gc2tpcHBlZENvdW50LnJlcGxhY2UoLyAvZywgXCJcIikuc3BsaXQoXCIsXCIpO1xuICAgICAgICAkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBudW1iZXJlZEJ0bnMgPSAkKFwidWwjcGFnZU51bXMgPiB1bCA+IGxpXCIpO1xuICAgICAgICAgICAgaWYgKG51bWJlcmVkQnRucy5oYXNDbGFzcyhcImFuc3dlcmVkXCIpKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyZWRCdG5zLnJlbW92ZUNsYXNzKFwiYW5zd2VyZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvcnJlY3RDb3VudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gcGFyc2VJbnQoY29ycmVjdENvdW50W2ldKSAtIDE7XG4gICAgICAgICAgICAgICAgbnVtYmVyZWRCdG5zXG4gICAgICAgICAgICAgICAgICAgIC5lcShwYXJzZUludChjb3JyZWN0Q291bnRbaV0pIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiY29ycmVjdENvdW50XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpbmNvcnJlY3RDb3VudC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIG51bWJlcmVkQnRuc1xuICAgICAgICAgICAgICAgICAgICAuZXEocGFyc2VJbnQoaW5jb3JyZWN0Q291bnRbal0pIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiaW5jb3JyZWN0Q291bnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHNraXBwZWRDb3VudC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgIG51bWJlcmVkQnRuc1xuICAgICAgICAgICAgICAgICAgICAuZXEocGFyc2VJbnQoc2tpcHBlZENvdW50W2tdKSAtIDEpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcInNraXBwZWRDb3VudFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PSBGdW5jdGlvbiB0aGF0IGNhbGxzIHRoZSBjb25zdHJ1Y3RvcnMgb24gcGFnZSBsb2FkID09PVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4kKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PXRpbWVkQXNzZXNzbWVudF1cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgVGltZWRMaXN0W3RoaXMuaWRdID0gbmV3IFRpbWVkKHtcbiAgICAgICAgICAgIG9yaWc6IHRoaXMsXG4gICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
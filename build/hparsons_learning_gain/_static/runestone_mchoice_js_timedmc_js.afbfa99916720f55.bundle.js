"use strict";
(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_mchoice_js_timedmc_js"],{

/***/ 25264:
/*!*******************************************!*\
  !*** ./runestone/mchoice/css/mchoice.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 77147:
/*!*****************************************!*\
  !*** ./runestone/mchoice/js/mchoice.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MultipleChoice)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _css_mchoice_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/mchoice.css */ 25264);
/*==========================================
========      Master mchoice.js     =========
============================================
===  This file contains the JS for the   ===
=== Runestone multiple choice component. ===
============================================
===              Created By              ===
===           Isaiah Mayerchak           ===
===                 and                  ===
===             Kirby Olson              ===
===                6/4/15                ===
==========================================*/


//import "./../styles/runestone-custom-sphinx-bootstrap.css";


window.mcList = {}; // Multiple Choice dictionary

// MC constructor
class MultipleChoice extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        opts = opts || {};
        var orig = opts.orig; // entire <ul> element
        this.origElem = orig;
        this.useRunestoneServices = opts.useRunestoneServices;
        this.multipleanswers = false;
        this.divid = orig.id;
        if ($(this.origElem).data("multipleanswers") === true) {
            this.multipleanswers = true;
        }
        this.children = this.origElem.childNodes;
        this.random = false;
        if ($(this.origElem).is("[data-random]")) {
            this.random = true;
        }
        this.correct = null;
        this.answerList = [];
        this.correctList = [];
        this.correctIndexList = [];
        this.feedbackList = [];
        this.question = null;
        this.caption = "Multiple Choice";
        this.findAnswers();
        this.findQuestion();
        this.findFeedbacks();
        this.createCorrectList();
        this.createMCForm();
        this.addCaption("runestone");
        this.checkServer("mChoice", true);
        // https://docs.mathjax.org/en/latest/options/startup/startup.html
        // https://docs.mathjax.org/en/latest/web/configuration.html#startup-action
        // runestoneMathReady is defined in the preamble for all PTX authored books
        this.queueMathJax(this.containerDiv);
        if (typeof Prism !== "undefined") {
            Prism.highlightAllUnder(this.containerDiv);
        }
    }

    /*====================================
    ==== Functions parsing variables  ====
    ====  out of intermediate HTML    ====
    ====================================*/
    findQuestion() {
        var delimiter;
        for (var i = 0; i < this.origElem.childNodes.length; i++) {
            if (this.origElem.childNodes[i].nodeName === "LI") {
                delimiter = this.origElem.childNodes[i].outerHTML;
                break;
            }
        }
        var fulltext = $(this.origElem).html();
        var temp = fulltext.split(delimiter);
        this.question = temp[0];
    }

    findAnswers() {
        // Creates answer objects and pushes them to answerList
        // format: ID, Correct bool, Content (text)
        var ChildAnswerList = [];
        for (var i = 0; i < this.children.length; i++) {
            if ($(this.children[i]).is("[data-component=answer]")) {
                ChildAnswerList.push(this.children[i]);
            }
        }
        for (var j = 0; j < ChildAnswerList.length; j++) {
            var answer_id = $(ChildAnswerList[j]).attr("id");
            var is_correct = false;
            if ($(ChildAnswerList[j]).is("[data-correct]")) {
                // If data-correct attribute exists, answer is correct
                is_correct = true;
            }
            var answer_text = $(ChildAnswerList[j]).html();
            var answer_object = {
                id: answer_id,
                correct: is_correct,
                content: answer_text,
            };
            this.answerList.push(answer_object);
        }
    }

    findFeedbacks() {
        for (var i = 0; i < this.children.length; i++) {
            if ($(this.children[i]).is("[data-component=feedback]")) {
                this.feedbackList.push(this.children[i].innerHTML);
            }
        }
    }

    createCorrectList() {
        // Creates array that holds the ID"s of correct answers
        // Also populates an array that holds the indeces of correct answers
        for (var i = 0; i < this.answerList.length; i++) {
            if (this.answerList[i].correct) {
                this.correctList.push(this.answerList[i].id);
                this.correctIndexList.push(i);
            }
        }
    }

    /*===========================================
    ====   Functions generating final HTML   ====
    ===========================================*/
    createMCForm() {
        this.renderMCContainer();
        this.renderMCForm(); // renders the form with options and buttons
        this.renderMCfeedbackDiv();
        // replaces intermediate HTML with rendered HTML
        $(this.origElem).replaceWith(this.containerDiv);
    }

    renderMCContainer() {
        this.containerDiv = document.createElement("div");
        $(this.containerDiv).html(this.question);
        $(this.containerDiv).addClass(this.origElem.getAttribute("class"));
        this.containerDiv.id = this.divid;
    }

    renderMCForm() {
        this.optsForm = document.createElement("form");
        this.optsForm.id = this.divid + "_form";
        $(this.optsForm).attr({
            method: "get",
            action: "",
            onsubmit: "return false;",
        });
        // generate form options
        this.renderMCFormOpts();
        this.renderMCFormButtons();
        // Append the form to the container
        this.containerDiv.appendChild(this.optsForm);
    }

    renderMCFormOpts() {
        // creates input DOM elements
        this.optionArray = []; // array with an object for each option containing the input and label for that option
        var input_type = "radio";
        if (this.multipleanswers) {
            input_type = "checkbox";
        }
        // this.indexArray is used to index through the answers
        // it is just 0-n normally, but the order is shuffled if the random option is present
        this.indexArray = [];
        for (var i = 0; i < this.answerList.length; i++) {
            this.indexArray.push(i);
        }
        if (this.random) {
            this.randomizeAnswers();
        }
        let self = this;
        let answerFunc = function () {
            self.isAnswered = true;
        };
        for (var j = 0; j < this.answerList.length; j++) {
            var k = this.indexArray[j];
            var optid = this.divid + "_opt_" + k;
            // Create the label for the input
            var label = document.createElement("label");
            // If the content begins with a ``<p>``, put the label inside of it. (Sphinx 2.0 puts all content in a ``<p>``, while Sphinx 1.8 doesn't).
            var content = this.answerList[k].content;
            var prefix = "";
            if (content.startsWith("<p>")) {
                prefix = "<p>";
                content = content.slice(3);
            }
            $(label).html(
                `${prefix}<input type="${input_type}" name="group1" value=${k} id=${optid}>${String.fromCharCode(
                    "A".charCodeAt(0) + j
                )}. ${content}`
            );
            // create the object to store in optionArray
            var optObj = {
                input: $(label).find("input")[0],
                label: label,
            };
            optObj.input.onclick = answerFunc;

            this.optionArray.push(optObj);
            // add the option to the form
            this.optsForm.appendChild(label);
            this.optsForm.appendChild(document.createElement("br"));
        }
    }

    renderMCFormButtons() {
        // submit and compare me buttons
        // Create submit button
        this.submitButton = document.createElement("button");
        this.submitButton.textContent = "Check Me";
        $(this.submitButton).attr({
            class: "btn btn-success",
            name: "do answer",
            type: "button",
        });
        if (this.multipleanswers) {
            this.submitButton.addEventListener(
                "click",
                function () {
                    this.processMCMASubmission(true);
                }.bind(this),
                false
            );
        } else {
            this.submitButton.addEventListener(
                "click",
                function (ev) {
                    ev.preventDefault();
                    this.processMCMFSubmission(true);
                }.bind(this),
                false
            );
        } // end else
        this.optsForm.appendChild(this.submitButton);
        // Create compare button
        if (this.useRunestoneServices && !eBookConfig.peer) {
            this.compareButton = document.createElement("button");
            $(this.compareButton).attr({
                class: "btn btn-default",
                id: this.divid + "_bcomp",
                disabled: "",
                name: "compare",
            });
            this.compareButton.textContent = "Compare me";
            this.compareButton.addEventListener(
                "click",
                function () {
                    this.compareAnswers(this.divid);
                }.bind(this),
                false
            );
            this.optsForm.appendChild(this.compareButton);
        }
    }

    renderMCfeedbackDiv() {
        this.feedBackDiv = document.createElement("div");
        this.feedBackDiv.id = this.divid + "_feedback";
        this.containerDiv.appendChild(document.createElement("br"));
        this.containerDiv.appendChild(this.feedBackDiv);
    }

    randomizeAnswers() {
        // Makes the ordering of the answer choices random
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
            var temporaryFeedback = this.feedbackList[currentIndex];
            this.feedbackList[currentIndex] = this.feedbackList[randomIndex];
            this.feedbackList[randomIndex] = temporaryFeedback;
        }
    }

    /*===================================
    === Checking/loading from storage ===
    ===================================*/
    restoreAnswers(data) {
        // Restore answers from storage retrieval done in RunestoneBase
        // sometimes data.answer can be null
        if (!data.answer) {
            data.answer = "";
        }
        var answers = data.answer.split(",");
        for (var a = 0; a < answers.length; a++) {
            var index = answers[a];
            for (var b = 0; b < this.optionArray.length; b++) {
                if (this.optionArray[b].input.value == index) {
                    $(this.optionArray[b].input).attr("checked", "true");
                }
            }
        }
        if (this.multipleanswers) {
            this.processMCMASubmission(false);
        } else {
            this.processMCMFSubmission(false);
        }
    }

    checkLocalStorage() {
        // Repopulates MCMA questions with a user's previous answers,
        // which were stored into local storage.
        var storedData;
        var answers;
        if (this.graderactive) {
            return;
        }
        var len = localStorage.length;
        if (len > 0) {
            var ex = localStorage.getItem(this.localStorageKey());
            if (ex !== null) {
                try {
                    storedData = JSON.parse(ex);
                    answers = storedData.answer.split(",");
                } catch (err) {
                    // error while parsing; likely due to bad value stored in storage
                    console.log(err.message);
                    localStorage.removeItem(this.localStorageKey());
                    return;
                }
                for (var a = 0; a < answers.length; a++) {
                    var index = answers[a];
                    for (var b = 0; b < this.optionArray.length; b++) {
                        if (this.optionArray[b].input.value == index) {
                            $(this.optionArray[b].input).attr(
                                "checked",
                                "true"
                            );
                        }
                    }
                }
                if (this.useRunestoneServices) {
                    this.enableMCComparison();
                    this.getSubmittedOpts(); // to populate givenlog for logging
                    if (this.multipleanswers) {
                        this.logMCMAsubmission();
                    } else {
                        this.logMCMFsubmission();
                    }
                }
            }
        }
    }

    setLocalStorage(data) {
        var timeStamp = new Date();
        var storageObj = {
            answer: data.answer,
            timestamp: timeStamp,
            correct: data.correct,
        };
        localStorage.setItem(
            this.localStorageKey(),
            JSON.stringify(storageObj)
        );
    }

    /*===============================
    === Processing MC Submissions ===
    ===============================*/
    processMCMASubmission(logFlag) {
        // Called when the submit button is clicked
        this.getSubmittedOpts(); // make sure this.givenArray is populated
        this.scoreMCMASubmission();
        this.setLocalStorage({
            correct: this.correct ? "T" : "F",
            answer: this.givenArray.join(","),
        });
        if (logFlag) {
            this.logMCMAsubmission();
        }
        if (!eBookConfig.peer || eBookConfig.isInstructor) {
            this.renderMCMAFeedBack();
            if (this.useRunestoneServices) {
                this.enableMCComparison();
            }
        } else {
            // acknowledge submission
            $(this.feedBackDiv).html("<p>Your Answer has been recorded</p>");
            $(this.feedBackDiv).attr("class", "alert alert-info");
        }
    }

    getSubmittedOpts() {
        var given;
        this.singlefeedback = ""; // Used for MCMF questions
        this.feedbackString = ""; // Used for MCMA questions
        this.givenArray = [];
        this.givenlog = "";
        var buttonObjs = this.optsForm.elements.group1;
        for (var i = 0; i < buttonObjs.length; i++) {
            if (buttonObjs[i].checked) {
                given = buttonObjs[i].value;
                this.givenArray.push(given);
                this.feedbackString += `<li value="${i + 1}">${
                    this.feedbackList[i]
                }</li>`;
                this.givenlog += given + ",";
                this.singlefeedback = this.feedbackList[i];
            }
        }
        this.givenArray.sort();
    }

    checkCurrentAnswer() {
        this.getSubmittedOpts();
        if (this.multipleanswers) {
            this.scoreMCMASubmission();
        } else {
            this.scoreMCMFSubmission();
        }
    }

    async logCurrentAnswer(sid) {
        if (this.multipleanswers) {
            await this.logMCMAsubmission(sid);
        } else {
            await this.logMCMFsubmission(sid);
        }
    }

    renderFeedback() {
        if (this.multipleanswers) {
            this.renderMCMAFeedBack();
        } else {
            this.renderMCMFFeedback();
        }
    }
    scoreMCMASubmission() {
        this.correctCount = 0;
        var correctIndex = 0;
        var givenIndex = 0;
        while (
            correctIndex < this.correctIndexList.length &&
            givenIndex < this.givenArray.length
        ) {
            if (
                this.givenArray[givenIndex] <
                this.correctIndexList[correctIndex]
            ) {
                givenIndex++;
            } else if (
                this.givenArray[givenIndex] ==
                this.correctIndexList[correctIndex]
            ) {
                this.correctCount++;
                givenIndex++;
                correctIndex++;
            } else {
                correctIndex++;
            }
        }
        var numGiven = this.givenArray.length;
        var numCorrect = this.correctCount;
        var numNeeded = this.correctList.length;
        this.answer = this.givenArray.join(",");
        this.correct = numCorrect === numNeeded && numNeeded === numGiven;
        if (numGiven === numNeeded) {
            this.percent = numCorrect / numNeeded;
        } else {
            this.percent = numCorrect / Math.max(numGiven, numNeeded);
        }
    }

    async logMCMAsubmission(sid) {
        var answer = this.answer || "";
        var correct = this.correct || "F";
        var logAnswer =
            "answer:" + answer + ":" + (correct == "T" ? "correct" : "no");
        let data = {
            event: "mChoice",
            act: logAnswer,
            answer: answer,
            correct: correct,
            div_id: this.divid,
        };
        if (eBookConfig.peer && typeof studentVoteCount !== "undefined") {
            data.act = data.act + `:vote${studentVoteCount}`;
        }
        if (typeof sid !== "undefined") {
            data.sid = sid;
        }
        await this.logBookEvent(data);
    }

    renderMCMAFeedBack() {
        var answerStr = "answers";
        var numGiven = this.givenArray.length;
        if (numGiven === 1) {
            answerStr = "answer";
        }
        var numCorrect = this.correctCount;
        var numNeeded = this.correctList.length;
        var feedbackText = this.feedbackString;
        if (this.correct) {
            $(this.feedBackDiv).html(`✔️ <ol type="A">${feedbackText}</ul>`);
            $(this.feedBackDiv).attr("class", "alert alert-info");
        } else {
            $(this.feedBackDiv).html(
                `✖️ You gave ${numGiven} ${answerStr} and got ${numCorrect} correct of ${numNeeded} needed.<ol type="A">${feedbackText}</ul>`
            );
            $(this.feedBackDiv).attr("class", "alert alert-danger");
        }
    }

    processMCMFSubmission(logFlag) {
        // Called when the submit button is clicked
        this.getSubmittedOpts(); // make sure this.givenArray is populated
        this.scoreMCMFSubmission();
        this.setLocalStorage({
            correct: this.correct ? "T" : "F",
            answer: this.givenArray.join(","),
        });
        if (logFlag) {
            this.logMCMFsubmission();
        }
        if (!eBookConfig.peer || eBookConfig.isInstructor) {
            this.renderMCMFFeedback();
            if (this.useRunestoneServices) {
                this.enableMCComparison();
            }
        } else {
            // acknowledge submission
            $(this.feedBackDiv).html("<p>Your Answer has been recorded</p>");
            $(this.feedBackDiv).attr("class", "alert alert-info");
        }
    }

    scoreMCMFSubmission() {
        this.answer = this.givenArray[0];
        if (this.givenArray[0] == this.correctIndexList[0]) {
            this.correct = true;
            this.percent = 1.0;
        } else if (this.givenArray[0] != null) {
            // if given is null then the question wasn"t answered and should be counted as skipped
            this.correct = false;
            this.percent = 0.0;
        }
    }

    async logMCMFsubmission(sid) {
        // If there's no answer provided (the array is empty), use a blank for the answer.
        var answer = this.givenArray[0] || "";
        var correct =
            this.givenArray[0] == this.correctIndexList[0] ? "T" : "F";
        var logAnswer =
            "answer:" + answer + ":" + (correct == "T" ? "correct" : "no"); // backward compatible
        let data = {
            event: "mChoice",
            act: logAnswer,
            answer: answer,
            correct: correct,
            div_id: this.divid,
        };
        if (eBookConfig.peer && typeof studentVoteCount !== "undefined") {
            data.act = data.act + `:vote${studentVoteCount}`;
        }
        if (typeof sid !== "undefined") {
            data.sid = sid;
        }
        await this.logBookEvent(data);
    }

    renderMCMFFeedback() {
        let correct = this.givenArray[0] == this.correctIndexList[0];
        let feedbackText = this.singlefeedback;

        if (correct) {
            $(this.feedBackDiv).html("✔️ " + feedbackText);
            $(this.feedBackDiv).attr("class", "alert alert-info"); // use blue for better red/green blue color blindness
        } else {
            if (feedbackText == null) {
                feedbackText = "";
            }
            $(this.feedBackDiv).html("✖️ " + feedbackText);
            $(this.feedBackDiv).attr("class", "alert alert-danger");
        }
    }
    enableMCComparison() {
        if (eBookConfig.enableCompareMe) {
            this.compareButton.disabled = false;
        }
    }
    instructorMchoiceModal(data) {
        // data.reslist -- student and their answers
        // data.answerDict    -- answers and count
        // data.correct - correct answer
        var res = "<table><tr><th>Student</th><th>Answer(s)</th></tr>";
        for (var i in data) {
            res +=
                "<tr><td>" +
                data[i][0] +
                "</td><td>" +
                data[i][1] +
                "</td></tr>";
        }
        res += "</table>";
        return res;
    }
    compareModal(data, status, whatever) {
        var datadict = data.detail;
        var answers = datadict.answerDict;
        var misc = datadict.misc;
        var kl = Object.keys(answers).sort();
        var body = "<table>";
        body += "<tr><th>Answer</th><th>Percent</th></tr>";
        var theClass = "";
        for (var k in kl) {
            if (kl[k] === misc.correct) {
                theClass = "success";
            } else {
                theClass = "info";
            }
            body +=
                "<tr><td>" + kl[k] + "</td><td class='compare-me-progress'>";
            var pct = answers[kl[k]] + "%";
            body += "<div class='progress'>";
            body +=
                "    <div class='progress-bar progress-bar-" +
                theClass +
                "' style='width:" +
                pct +
                ";'>" +
                pct;
            body += "    </div>";
            body += "</div></td></tr>";
        }
        body += "</table>";
        if (misc.yourpct !== "unavailable") {
            body +=
                "<br /><p>You have " +
                misc.yourpct +
                "% correct for all questions</p>";
        }
        if (datadict.reslist !== undefined) {
            body += this.instructorMchoiceModal(datadict.reslist);
        }
        var html =
            "<div class='modal fade'>" +
            "    <div class='modal-dialog compare-modal'>" +
            "        <div class='modal-content'>" +
            "            <div class='modal-header'>" +
            "                <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>" +
            "                <h4 class='modal-title'>Distribution of Answers</h4>" +
            "            </div>" +
            "            <div class='modal-body'>" +
            body +
            "            </div>" +
            "        </div>" +
            "    </div>" +
            "</div>";
        var el = $(html);
        el.modal();
    }
    // _`compareAnswers`
    compareAnswers() {
        var data = {};
        data.div_id = this.divid;
        data.course_name = eBookConfig.course;
        jQuery.get(
            `${eBookConfig.new_server_prefix}/assessment/getaggregateresults`,
            data,
            this.compareModal.bind(this)
        );
    }

    disableInteraction() {
        for (var i = 0; i < this.optionArray.length; i++) {
            this.optionArray[i].input.disabled = true;
        }
    }

    enableInteraction() {
        for (var i = 0; i < this.optionArray.length; i++) {
            this.optionArray[i].input.disabled = false;
        }
    }
}

/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
$(document).on("runestone:login-complete", function () {
    $("[data-component=multiplechoice]").each(function (index) {
        // MC
        var opts = {
            orig: this,
            useRunestoneServices: eBookConfig.useRunestoneServices,
        };
        if ($(this).closest("[data-component=timedAssessment]").length == 0) {
            // If this element exists within a timed component, don't render it here
            window.mcList[this.id] = new MultipleChoice(opts);
        }
    });
});


/***/ }),

/***/ 95983:
/*!*****************************************!*\
  !*** ./runestone/mchoice/js/timedmc.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimedMC)
/* harmony export */ });
/* harmony import */ var _mchoice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mchoice.js */ 77147);


class TimedMC extends _mchoice_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        $(this.containerDiv).addClass("runestone");
        this.needsReinitialization = true;
        this.renderTimedIcon(this.MCContainer);
        this.hideButtons(); // Don't show per-question buttons in a timed assessment
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
    hideButtons() {
        //Just hiding the buttons doesn't prevent submitting the form when entering is clicked
        //We need to completely disable the buttons
        $(this.submitButton).attr("disabled", "true");
        $(this.submitButton).hide();
        $(this.compareButton).hide();
    }

    // These methods override the methods in the base class. Called from renderFeedback()
    //
    renderMCMAFeedBack() {
        this.feedbackTimedMC();
    }
    renderMCMFFeedback(whatever, whateverr) {
        this.feedbackTimedMC();
    }
    feedbackTimedMC() {
        for (var i = 0; i < this.indexArray.length; i++) {
            var tmpindex = this.indexArray[i];
            $(this.feedBackEachArray[i]).html(
                String.fromCharCode(65 + i) + ". " + this.feedbackList[i]
            );
            var tmpid = this.answerList[tmpindex].id;
            if (this.correctList.indexOf(tmpid) >= 0) {
                this.feedBackEachArray[i].classList.add(
                    "alert",
                    "alert-success"
                );
            } else {
                this.feedBackEachArray[i].classList.add(
                    "alert",
                    "alert-danger"
                );
            }
        }
    }
    renderMCFormOpts() {
        super.renderMCFormOpts();
        this.feedBackEachArray = [];
        for (var j = 0; j < this.answerList.length; j++) {
            var k = this.indexArray[j];
            var feedBackEach = document.createElement("div");
            feedBackEach.id = this.divid + "_eachFeedback_" + k;
            feedBackEach.classList.add("eachFeedback");
            this.feedBackEachArray.push(feedBackEach);
            this.optsForm.appendChild(feedBackEach);
        }
    }
    checkCorrectTimedMCMA() {
        if (
            this.correctCount === this.correctList.length &&
            this.correctList.length === this.givenArray.length
        ) {
            this.correct = true;
        } else if (this.givenArray.length !== 0) {
            this.correct = false;
        } else {
            // question was skipped
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
    checkCorrectTimedMCMF() {
        // Returns if the question was correct, incorrect, or skipped (return null in the last case)
        switch (this.correct) {
            case true:
                return "T";
            case false:
                return "F";
            default:
                return null;
        }
    }
    checkCorrectTimed() {
        if (this.multipleanswers) {
            return this.checkCorrectTimedMCMA();
        } else {
            return this.checkCorrectTimedMCMF();
        }
    }
    hideFeedback() {
        for (var i = 0; i < this.feedBackEachArray.length; i++) {
            $(this.feedBackEachArray[i]).hide();
        }
    }

    reinitializeListeners() {
        let self = this;
        let answerFunc = function () {
            self.isAnswered = true;
        };
        for (let opt of this.optionArray) {
            opt.input.onclick = answerFunc;
        }
    }
}

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}

window.component_factory.multiplechoice = function (opts) {
    if (opts.timed) {
        return new TimedMC(opts);
    } else {
        return new _mchoice_js__WEBPACK_IMPORTED_MODULE_0__["default"](opts);
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX21jaG9pY2VfanNfdGltZWRtY19qcy5hZmJmYTk5OTE2NzIwZjU1LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2RDtBQUM3RDtBQUM0Qjs7QUFFNUIsb0JBQW9COztBQUVwQjtBQUNlLDZCQUE2QixtRUFBYTtBQUN6RDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFDQUFxQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0QkFBNEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTyxlQUFlLFdBQVcsd0JBQXdCLEdBQUcsS0FBSyxNQUFNLEdBQUc7QUFDN0Y7QUFDQSxrQkFBa0IsSUFBSSxRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG9CQUFvQjtBQUNwRDtBQUNBLG9DQUFvQyw2QkFBNkI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0EscURBQXFELE1BQU07QUFDM0Q7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGlCQUFpQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsYUFBYTtBQUNyRTtBQUNBLFVBQVU7QUFDVjtBQUNBLCtCQUErQixVQUFVLEVBQUUsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLHNCQUFzQixhQUFhO0FBQ3ZJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxpQkFBaUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdIQUFnSDtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4QkFBOEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsNkJBQTZCO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qiw2QkFBNkI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoc0J5Qzs7QUFFM0Isc0JBQXNCLG1EQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUNBQW1DO0FBQzNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLG1CQUFtQixtREFBYztBQUNqQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9tY2hvaWNlL2Nzcy9tY2hvaWNlLmNzcz8zZmYxIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvbWNob2ljZS9qcy9tY2hvaWNlLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvbWNob2ljZS9qcy90aW1lZG1jLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PT09PSAgICAgIE1hc3RlciBtY2hvaWNlLmpzICAgICA9PT09PT09PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT0gIFRoaXMgZmlsZSBjb250YWlucyB0aGUgSlMgZm9yIHRoZSAgID09PVxuPT09IFJ1bmVzdG9uZSBtdWx0aXBsZSBjaG9pY2UgY29tcG9uZW50LiA9PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT0gICAgICAgICAgICAgIENyZWF0ZWQgQnkgICAgICAgICAgICAgID09PVxuPT09ICAgICAgICAgICBJc2FpYWggTWF5ZXJjaGFrICAgICAgICAgICA9PT1cbj09PSAgICAgICAgICAgICAgICAgYW5kICAgICAgICAgICAgICAgICAgPT09XG49PT0gICAgICAgICAgICAgS2lyYnkgT2xzb24gICAgICAgICAgICAgID09PVxuPT09ICAgICAgICAgICAgICAgIDYvNC8xNSAgICAgICAgICAgICAgICA9PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZS5qc1wiO1xuLy9pbXBvcnQgXCIuLy4uL3N0eWxlcy9ydW5lc3RvbmUtY3VzdG9tLXNwaGlueC1ib290c3RyYXAuY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvbWNob2ljZS5jc3NcIjtcblxud2luZG93Lm1jTGlzdCA9IHt9OyAvLyBNdWx0aXBsZSBDaG9pY2UgZGljdGlvbmFyeVxuXG4vLyBNQyBjb25zdHJ1Y3RvclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlwbGVDaG9pY2UgZXh0ZW5kcyBSdW5lc3RvbmVCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKG9wdHMpO1xuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgICAgdmFyIG9yaWcgPSBvcHRzLm9yaWc7IC8vIGVudGlyZSA8dWw+IGVsZW1lbnRcbiAgICAgICAgdGhpcy5vcmlnRWxlbSA9IG9yaWc7XG4gICAgICAgIHRoaXMudXNlUnVuZXN0b25lU2VydmljZXMgPSBvcHRzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzO1xuICAgICAgICB0aGlzLm11bHRpcGxlYW5zd2VycyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpdmlkID0gb3JpZy5pZDtcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuZGF0YShcIm11bHRpcGxlYW5zd2Vyc1wiKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5tdWx0aXBsZWFuc3dlcnMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXM7XG4gICAgICAgIHRoaXMucmFuZG9tID0gZmFsc2U7XG4gICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmlzKFwiW2RhdGEtcmFuZG9tXVwiKSkge1xuICAgICAgICAgICAgdGhpcy5yYW5kb20gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29ycmVjdCA9IG51bGw7XG4gICAgICAgIHRoaXMuYW5zd2VyTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmNvcnJlY3RMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY29ycmVjdEluZGV4TGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYXB0aW9uID0gXCJNdWx0aXBsZSBDaG9pY2VcIjtcbiAgICAgICAgdGhpcy5maW5kQW5zd2VycygpO1xuICAgICAgICB0aGlzLmZpbmRRdWVzdGlvbigpO1xuICAgICAgICB0aGlzLmZpbmRGZWVkYmFja3MoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDb3JyZWN0TGlzdCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZU1DRm9ybSgpO1xuICAgICAgICB0aGlzLmFkZENhcHRpb24oXCJydW5lc3RvbmVcIik7XG4gICAgICAgIHRoaXMuY2hlY2tTZXJ2ZXIoXCJtQ2hvaWNlXCIsIHRydWUpO1xuICAgICAgICAvLyBodHRwczovL2RvY3MubWF0aGpheC5vcmcvZW4vbGF0ZXN0L29wdGlvbnMvc3RhcnR1cC9zdGFydHVwLmh0bWxcbiAgICAgICAgLy8gaHR0cHM6Ly9kb2NzLm1hdGhqYXgub3JnL2VuL2xhdGVzdC93ZWIvY29uZmlndXJhdGlvbi5odG1sI3N0YXJ0dXAtYWN0aW9uXG4gICAgICAgIC8vIHJ1bmVzdG9uZU1hdGhSZWFkeSBpcyBkZWZpbmVkIGluIHRoZSBwcmVhbWJsZSBmb3IgYWxsIFBUWCBhdXRob3JlZCBib29rc1xuICAgICAgICB0aGlzLnF1ZXVlTWF0aEpheCh0aGlzLmNvbnRhaW5lckRpdik7XG4gICAgICAgIGlmICh0eXBlb2YgUHJpc20gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIFByaXNtLmhpZ2hsaWdodEFsbFVuZGVyKHRoaXMuY29udGFpbmVyRGl2KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09PSBGdW5jdGlvbnMgcGFyc2luZyB2YXJpYWJsZXMgID09PT1cbiAgICA9PT09ICBvdXQgb2YgaW50ZXJtZWRpYXRlIEhUTUwgICAgPT09PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgZmluZFF1ZXN0aW9uKCkge1xuICAgICAgICB2YXIgZGVsaW1pdGVyO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlc1tpXS5ub2RlTmFtZSA9PT0gXCJMSVwiKSB7XG4gICAgICAgICAgICAgICAgZGVsaW1pdGVyID0gdGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzW2ldLm91dGVySFRNTDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgZnVsbHRleHQgPSAkKHRoaXMub3JpZ0VsZW0pLmh0bWwoKTtcbiAgICAgICAgdmFyIHRlbXAgPSBmdWxsdGV4dC5zcGxpdChkZWxpbWl0ZXIpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gdGVtcFswXTtcbiAgICB9XG5cbiAgICBmaW5kQW5zd2VycygpIHtcbiAgICAgICAgLy8gQ3JlYXRlcyBhbnN3ZXIgb2JqZWN0cyBhbmQgcHVzaGVzIHRoZW0gdG8gYW5zd2VyTGlzdFxuICAgICAgICAvLyBmb3JtYXQ6IElELCBDb3JyZWN0IGJvb2wsIENvbnRlbnQgKHRleHQpXG4gICAgICAgIHZhciBDaGlsZEFuc3dlckxpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzLmNoaWxkcmVuW2ldKS5pcyhcIltkYXRhLWNvbXBvbmVudD1hbnN3ZXJdXCIpKSB7XG4gICAgICAgICAgICAgICAgQ2hpbGRBbnN3ZXJMaXN0LnB1c2godGhpcy5jaGlsZHJlbltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBDaGlsZEFuc3dlckxpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHZhciBhbnN3ZXJfaWQgPSAkKENoaWxkQW5zd2VyTGlzdFtqXSkuYXR0cihcImlkXCIpO1xuICAgICAgICAgICAgdmFyIGlzX2NvcnJlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICgkKENoaWxkQW5zd2VyTGlzdFtqXSkuaXMoXCJbZGF0YS1jb3JyZWN0XVwiKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIGRhdGEtY29ycmVjdCBhdHRyaWJ1dGUgZXhpc3RzLCBhbnN3ZXIgaXMgY29ycmVjdFxuICAgICAgICAgICAgICAgIGlzX2NvcnJlY3QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFuc3dlcl90ZXh0ID0gJChDaGlsZEFuc3dlckxpc3Rbal0pLmh0bWwoKTtcbiAgICAgICAgICAgIHZhciBhbnN3ZXJfb2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgIGlkOiBhbnN3ZXJfaWQsXG4gICAgICAgICAgICAgICAgY29ycmVjdDogaXNfY29ycmVjdCxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhbnN3ZXJfdGV4dCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmFuc3dlckxpc3QucHVzaChhbnN3ZXJfb2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRGZWVkYmFja3MoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCQodGhpcy5jaGlsZHJlbltpXSkuaXMoXCJbZGF0YS1jb21wb25lbnQ9ZmVlZGJhY2tdXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkYmFja0xpc3QucHVzaCh0aGlzLmNoaWxkcmVuW2ldLmlubmVySFRNTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVDb3JyZWN0TGlzdCgpIHtcbiAgICAgICAgLy8gQ3JlYXRlcyBhcnJheSB0aGF0IGhvbGRzIHRoZSBJRFwicyBvZiBjb3JyZWN0IGFuc3dlcnNcbiAgICAgICAgLy8gQWxzbyBwb3B1bGF0ZXMgYW4gYXJyYXkgdGhhdCBob2xkcyB0aGUgaW5kZWNlcyBvZiBjb3JyZWN0IGFuc3dlcnNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFuc3dlckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFuc3dlckxpc3RbaV0uY29ycmVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdExpc3QucHVzaCh0aGlzLmFuc3dlckxpc3RbaV0uaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEluZGV4TGlzdC5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09PSAgIEZ1bmN0aW9ucyBnZW5lcmF0aW5nIGZpbmFsIEhUTUwgICA9PT09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgY3JlYXRlTUNGb3JtKCkge1xuICAgICAgICB0aGlzLnJlbmRlck1DQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMucmVuZGVyTUNGb3JtKCk7IC8vIHJlbmRlcnMgdGhlIGZvcm0gd2l0aCBvcHRpb25zIGFuZCBidXR0b25zXG4gICAgICAgIHRoaXMucmVuZGVyTUNmZWVkYmFja0RpdigpO1xuICAgICAgICAvLyByZXBsYWNlcyBpbnRlcm1lZGlhdGUgSFRNTCB3aXRoIHJlbmRlcmVkIEhUTUxcbiAgICAgICAgJCh0aGlzLm9yaWdFbGVtKS5yZXBsYWNlV2l0aCh0aGlzLmNvbnRhaW5lckRpdik7XG4gICAgfVxuXG4gICAgcmVuZGVyTUNDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lckRpdikuaHRtbCh0aGlzLnF1ZXN0aW9uKTtcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lckRpdikuYWRkQ2xhc3ModGhpcy5vcmlnRWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmlkID0gdGhpcy5kaXZpZDtcbiAgICB9XG5cbiAgICByZW5kZXJNQ0Zvcm0oKSB7XG4gICAgICAgIHRoaXMub3B0c0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgdGhpcy5vcHRzRm9ybS5pZCA9IHRoaXMuZGl2aWQgKyBcIl9mb3JtXCI7XG4gICAgICAgICQodGhpcy5vcHRzRm9ybSkuYXR0cih7XG4gICAgICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgICAgICBhY3Rpb246IFwiXCIsXG4gICAgICAgICAgICBvbnN1Ym1pdDogXCJyZXR1cm4gZmFsc2U7XCIsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBnZW5lcmF0ZSBmb3JtIG9wdGlvbnNcbiAgICAgICAgdGhpcy5yZW5kZXJNQ0Zvcm1PcHRzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyTUNGb3JtQnV0dG9ucygpO1xuICAgICAgICAvLyBBcHBlbmQgdGhlIGZvcm0gdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLm9wdHNGb3JtKTtcbiAgICB9XG5cbiAgICByZW5kZXJNQ0Zvcm1PcHRzKCkge1xuICAgICAgICAvLyBjcmVhdGVzIGlucHV0IERPTSBlbGVtZW50c1xuICAgICAgICB0aGlzLm9wdGlvbkFycmF5ID0gW107IC8vIGFycmF5IHdpdGggYW4gb2JqZWN0IGZvciBlYWNoIG9wdGlvbiBjb250YWluaW5nIHRoZSBpbnB1dCBhbmQgbGFiZWwgZm9yIHRoYXQgb3B0aW9uXG4gICAgICAgIHZhciBpbnB1dF90eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZWFuc3dlcnMpIHtcbiAgICAgICAgICAgIGlucHV0X3R5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5pbmRleEFycmF5IGlzIHVzZWQgdG8gaW5kZXggdGhyb3VnaCB0aGUgYW5zd2Vyc1xuICAgICAgICAvLyBpdCBpcyBqdXN0IDAtbiBub3JtYWxseSwgYnV0IHRoZSBvcmRlciBpcyBzaHVmZmxlZCBpZiB0aGUgcmFuZG9tIG9wdGlvbiBpcyBwcmVzZW50XG4gICAgICAgIHRoaXMuaW5kZXhBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYW5zd2VyTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pbmRleEFycmF5LnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmFuZG9tKSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZUFuc3dlcnMoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBhbnN3ZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5pc0Fuc3dlcmVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmFuc3dlckxpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHZhciBrID0gdGhpcy5pbmRleEFycmF5W2pdO1xuICAgICAgICAgICAgdmFyIG9wdGlkID0gdGhpcy5kaXZpZCArIFwiX29wdF9cIiArIGs7XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGxhYmVsIGZvciB0aGUgaW5wdXRcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBjb250ZW50IGJlZ2lucyB3aXRoIGEgYGA8cD5gYCwgcHV0IHRoZSBsYWJlbCBpbnNpZGUgb2YgaXQuIChTcGhpbnggMi4wIHB1dHMgYWxsIGNvbnRlbnQgaW4gYSBgYDxwPmBgLCB3aGlsZSBTcGhpbnggMS44IGRvZXNuJ3QpLlxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSB0aGlzLmFuc3dlckxpc3Rba10uY29udGVudDtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQuc3RhcnRzV2l0aChcIjxwPlwiKSkge1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiPHA+XCI7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UoMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKGxhYmVsKS5odG1sKFxuICAgICAgICAgICAgICAgIGAke3ByZWZpeH08aW5wdXQgdHlwZT1cIiR7aW5wdXRfdHlwZX1cIiBuYW1lPVwiZ3JvdXAxXCIgdmFsdWU9JHtrfSBpZD0ke29wdGlkfT4ke1N0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAgICAgICAgICAgICAgIFwiQVwiLmNoYXJDb2RlQXQoMCkgKyBqXG4gICAgICAgICAgICAgICAgKX0uICR7Y29udGVudH1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBvYmplY3QgdG8gc3RvcmUgaW4gb3B0aW9uQXJyYXlcbiAgICAgICAgICAgIHZhciBvcHRPYmogPSB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6ICQobGFiZWwpLmZpbmQoXCJpbnB1dFwiKVswXSxcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb3B0T2JqLmlucHV0Lm9uY2xpY2sgPSBhbnN3ZXJGdW5jO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbkFycmF5LnB1c2gob3B0T2JqKTtcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgb3B0aW9uIHRvIHRoZSBmb3JtXG4gICAgICAgICAgICB0aGlzLm9wdHNGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIHRoaXMub3B0c0Zvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlck1DRm9ybUJ1dHRvbnMoKSB7XG4gICAgICAgIC8vIHN1Ym1pdCBhbmQgY29tcGFyZSBtZSBidXR0b25zXG4gICAgICAgIC8vIENyZWF0ZSBzdWJtaXQgYnV0dG9uXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkNoZWNrIE1lXCI7XG4gICAgICAgICQodGhpcy5zdWJtaXRCdXR0b24pLmF0dHIoe1xuICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICBuYW1lOiBcImRvIGFuc3dlclwiLFxuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlYW5zd2Vycykge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NNQ01BU3VibWlzc2lvbih0cnVlKTtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTUNNRlN1Ym1pc3Npb24odHJ1ZSk7XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApO1xuICAgICAgICB9IC8vIGVuZCBlbHNlXG4gICAgICAgIHRoaXMub3B0c0Zvcm0uYXBwZW5kQ2hpbGQodGhpcy5zdWJtaXRCdXR0b24pO1xuICAgICAgICAvLyBDcmVhdGUgY29tcGFyZSBidXR0b25cbiAgICAgICAgaWYgKHRoaXMudXNlUnVuZXN0b25lU2VydmljZXMgJiYgIWVCb29rQ29uZmlnLnBlZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGFyZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAkKHRoaXMuY29tcGFyZUJ1dHRvbikuYXR0cih7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuZGl2aWQgKyBcIl9iY29tcFwiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiY29tcGFyZVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbXBhcmUgbWVcIjtcbiAgICAgICAgICAgIHRoaXMuY29tcGFyZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGFyZUFuc3dlcnModGhpcy5kaXZpZCk7XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5vcHRzRm9ybS5hcHBlbmRDaGlsZCh0aGlzLmNvbXBhcmVCdXR0b24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyTUNmZWVkYmFja0RpdigpIHtcbiAgICAgICAgdGhpcy5mZWVkQmFja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuZmVlZEJhY2tEaXYuaWQgPSB0aGlzLmRpdmlkICsgXCJfZmVlZGJhY2tcIjtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5mZWVkQmFja0Rpdik7XG4gICAgfVxuXG4gICAgcmFuZG9taXplQW5zd2VycygpIHtcbiAgICAgICAgLy8gTWFrZXMgdGhlIG9yZGVyaW5nIG9mIHRoZSBhbnN3ZXIgY2hvaWNlcyByYW5kb21cbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IHRoaXMuaW5kZXhBcnJheS5sZW5ndGgsXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSxcbiAgICAgICAgICAgIHJhbmRvbUluZGV4O1xuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICAgICAgICB3aGlsZSAoY3VycmVudEluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSB0aGlzLmluZGV4QXJyYXlbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXhBcnJheVtjdXJyZW50SW5kZXhdID0gdGhpcy5pbmRleEFycmF5W3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXhBcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgICAgICAgICAgIHZhciB0ZW1wb3JhcnlGZWVkYmFjayA9IHRoaXMuZmVlZGJhY2tMaXN0W2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrTGlzdFtjdXJyZW50SW5kZXhdID0gdGhpcy5mZWVkYmFja0xpc3RbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFja0xpc3RbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5RmVlZGJhY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09IENoZWNraW5nL2xvYWRpbmcgZnJvbSBzdG9yYWdlID09PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICByZXN0b3JlQW5zd2VycyhkYXRhKSB7XG4gICAgICAgIC8vIFJlc3RvcmUgYW5zd2VycyBmcm9tIHN0b3JhZ2UgcmV0cmlldmFsIGRvbmUgaW4gUnVuZXN0b25lQmFzZVxuICAgICAgICAvLyBzb21ldGltZXMgZGF0YS5hbnN3ZXIgY2FuIGJlIG51bGxcbiAgICAgICAgaWYgKCFkYXRhLmFuc3dlcikge1xuICAgICAgICAgICAgZGF0YS5hbnN3ZXIgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhbnN3ZXJzID0gZGF0YS5hbnN3ZXIuc3BsaXQoXCIsXCIpO1xuICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IGFuc3dlcnMubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGFuc3dlcnNbYV07XG4gICAgICAgICAgICBmb3IgKHZhciBiID0gMDsgYiA8IHRoaXMub3B0aW9uQXJyYXkubGVuZ3RoOyBiKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25BcnJheVtiXS5pbnB1dC52YWx1ZSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMub3B0aW9uQXJyYXlbYl0uaW5wdXQpLmF0dHIoXCJjaGVja2VkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGVhbnN3ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NNQ01BU3VibWlzc2lvbihmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NNQ01GU3VibWlzc2lvbihmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0xvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgLy8gUmVwb3B1bGF0ZXMgTUNNQSBxdWVzdGlvbnMgd2l0aCBhIHVzZXIncyBwcmV2aW91cyBhbnN3ZXJzLFxuICAgICAgICAvLyB3aGljaCB3ZXJlIHN0b3JlZCBpbnRvIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgIHZhciBzdG9yZWREYXRhO1xuICAgICAgICB2YXIgYW5zd2VycztcbiAgICAgICAgaWYgKHRoaXMuZ3JhZGVyYWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxlbiA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgICAgICB2YXIgZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcbiAgICAgICAgICAgIGlmIChleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlZERhdGEgPSBKU09OLnBhcnNlKGV4KTtcbiAgICAgICAgICAgICAgICAgICAgYW5zd2VycyA9IHN0b3JlZERhdGEuYW5zd2VyLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3Igd2hpbGUgcGFyc2luZzsgbGlrZWx5IGR1ZSB0byBiYWQgdmFsdWUgc3RvcmVkIGluIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IGFuc3dlcnMubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gYW5zd2Vyc1thXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYiA9IDA7IGIgPCB0aGlzLm9wdGlvbkFycmF5Lmxlbmd0aDsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25BcnJheVtiXS5pbnB1dC52YWx1ZSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcy5vcHRpb25BcnJheVtiXS5pbnB1dCkuYXR0cihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGVja2VkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZU1DQ29tcGFyaXNvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFN1Ym1pdHRlZE9wdHMoKTsgLy8gdG8gcG9wdWxhdGUgZ2l2ZW5sb2cgZm9yIGxvZ2dpbmdcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGVhbnN3ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ01DTUFzdWJtaXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ01DTUZzdWJtaXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRMb2NhbFN0b3JhZ2UoZGF0YSkge1xuICAgICAgICB2YXIgdGltZVN0YW1wID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIHN0b3JhZ2VPYmogPSB7XG4gICAgICAgICAgICBhbnN3ZXI6IGRhdGEuYW5zd2VyLFxuICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1lU3RhbXAsXG4gICAgICAgICAgICBjb3JyZWN0OiBkYXRhLmNvcnJlY3QsXG4gICAgICAgIH07XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VPYmopXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09IFByb2Nlc3NpbmcgTUMgU3VibWlzc2lvbnMgPT09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgcHJvY2Vzc01DTUFTdWJtaXNzaW9uKGxvZ0ZsYWcpIHtcbiAgICAgICAgLy8gQ2FsbGVkIHdoZW4gdGhlIHN1Ym1pdCBidXR0b24gaXMgY2xpY2tlZFxuICAgICAgICB0aGlzLmdldFN1Ym1pdHRlZE9wdHMoKTsgLy8gbWFrZSBzdXJlIHRoaXMuZ2l2ZW5BcnJheSBpcyBwb3B1bGF0ZWRcbiAgICAgICAgdGhpcy5zY29yZU1DTUFTdWJtaXNzaW9uKCk7XG4gICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKHtcbiAgICAgICAgICAgIGNvcnJlY3Q6IHRoaXMuY29ycmVjdCA/IFwiVFwiIDogXCJGXCIsXG4gICAgICAgICAgICBhbnN3ZXI6IHRoaXMuZ2l2ZW5BcnJheS5qb2luKFwiLFwiKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChsb2dGbGFnKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ01DTUFzdWJtaXNzaW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlQm9va0NvbmZpZy5wZWVyIHx8IGVCb29rQ29uZmlnLmlzSW5zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJNQ01BRmVlZEJhY2soKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVNQ0NvbXBhcmlzb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIHN1Ym1pc3Npb25cbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuaHRtbChcIjxwPllvdXIgQW5zd2VyIGhhcyBiZWVuIHJlY29yZGVkPC9wPlwiKTtcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtaW5mb1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFN1Ym1pdHRlZE9wdHMoKSB7XG4gICAgICAgIHZhciBnaXZlbjtcbiAgICAgICAgdGhpcy5zaW5nbGVmZWVkYmFjayA9IFwiXCI7IC8vIFVzZWQgZm9yIE1DTUYgcXVlc3Rpb25zXG4gICAgICAgIHRoaXMuZmVlZGJhY2tTdHJpbmcgPSBcIlwiOyAvLyBVc2VkIGZvciBNQ01BIHF1ZXN0aW9uc1xuICAgICAgICB0aGlzLmdpdmVuQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5naXZlbmxvZyA9IFwiXCI7XG4gICAgICAgIHZhciBidXR0b25PYmpzID0gdGhpcy5vcHRzRm9ybS5lbGVtZW50cy5ncm91cDE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnV0dG9uT2Jqcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGJ1dHRvbk9ianNbaV0uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGdpdmVuID0gYnV0dG9uT2Jqc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmdpdmVuQXJyYXkucHVzaChnaXZlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkYmFja1N0cmluZyArPSBgPGxpIHZhbHVlPVwiJHtpICsgMX1cIj4ke1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZlZWRiYWNrTGlzdFtpXVxuICAgICAgICAgICAgICAgIH08L2xpPmA7XG4gICAgICAgICAgICAgICAgdGhpcy5naXZlbmxvZyArPSBnaXZlbiArIFwiLFwiO1xuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlZmVlZGJhY2sgPSB0aGlzLmZlZWRiYWNrTGlzdFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdpdmVuQXJyYXkuc29ydCgpO1xuICAgIH1cblxuICAgIGNoZWNrQ3VycmVudEFuc3dlcigpIHtcbiAgICAgICAgdGhpcy5nZXRTdWJtaXR0ZWRPcHRzKCk7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlYW5zd2Vycykge1xuICAgICAgICAgICAgdGhpcy5zY29yZU1DTUFTdWJtaXNzaW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlTUNNRlN1Ym1pc3Npb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGxvZ0N1cnJlbnRBbnN3ZXIoc2lkKSB7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlYW5zd2Vycykge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2dNQ01Bc3VibWlzc2lvbihzaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2dNQ01Gc3VibWlzc2lvbihzaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyRmVlZGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlYW5zd2Vycykge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJNQ01BRmVlZEJhY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyTUNNRkZlZWRiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2NvcmVNQ01BU3VibWlzc2lvbigpIHtcbiAgICAgICAgdGhpcy5jb3JyZWN0Q291bnQgPSAwO1xuICAgICAgICB2YXIgY29ycmVjdEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGdpdmVuSW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICBjb3JyZWN0SW5kZXggPCB0aGlzLmNvcnJlY3RJbmRleExpc3QubGVuZ3RoICYmXG4gICAgICAgICAgICBnaXZlbkluZGV4IDwgdGhpcy5naXZlbkFycmF5Lmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmdpdmVuQXJyYXlbZ2l2ZW5JbmRleF0gPFxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEluZGV4TGlzdFtjb3JyZWN0SW5kZXhdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBnaXZlbkluZGV4Kys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuZ2l2ZW5BcnJheVtnaXZlbkluZGV4XSA9PVxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEluZGV4TGlzdFtjb3JyZWN0SW5kZXhdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RDb3VudCsrO1xuICAgICAgICAgICAgICAgIGdpdmVuSW5kZXgrKztcbiAgICAgICAgICAgICAgICBjb3JyZWN0SW5kZXgrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29ycmVjdEluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG51bUdpdmVuID0gdGhpcy5naXZlbkFycmF5Lmxlbmd0aDtcbiAgICAgICAgdmFyIG51bUNvcnJlY3QgPSB0aGlzLmNvcnJlY3RDb3VudDtcbiAgICAgICAgdmFyIG51bU5lZWRlZCA9IHRoaXMuY29ycmVjdExpc3QubGVuZ3RoO1xuICAgICAgICB0aGlzLmFuc3dlciA9IHRoaXMuZ2l2ZW5BcnJheS5qb2luKFwiLFwiKTtcbiAgICAgICAgdGhpcy5jb3JyZWN0ID0gbnVtQ29ycmVjdCA9PT0gbnVtTmVlZGVkICYmIG51bU5lZWRlZCA9PT0gbnVtR2l2ZW47XG4gICAgICAgIGlmIChudW1HaXZlbiA9PT0gbnVtTmVlZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmNlbnQgPSBudW1Db3JyZWN0IC8gbnVtTmVlZGVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wZXJjZW50ID0gbnVtQ29ycmVjdCAvIE1hdGgubWF4KG51bUdpdmVuLCBudW1OZWVkZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgbG9nTUNNQXN1Ym1pc3Npb24oc2lkKSB7XG4gICAgICAgIHZhciBhbnN3ZXIgPSB0aGlzLmFuc3dlciB8fCBcIlwiO1xuICAgICAgICB2YXIgY29ycmVjdCA9IHRoaXMuY29ycmVjdCB8fCBcIkZcIjtcbiAgICAgICAgdmFyIGxvZ0Fuc3dlciA9XG4gICAgICAgICAgICBcImFuc3dlcjpcIiArIGFuc3dlciArIFwiOlwiICsgKGNvcnJlY3QgPT0gXCJUXCIgPyBcImNvcnJlY3RcIiA6IFwibm9cIik7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgZXZlbnQ6IFwibUNob2ljZVwiLFxuICAgICAgICAgICAgYWN0OiBsb2dBbnN3ZXIsXG4gICAgICAgICAgICBhbnN3ZXI6IGFuc3dlcixcbiAgICAgICAgICAgIGNvcnJlY3Q6IGNvcnJlY3QsXG4gICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2aWQsXG4gICAgICAgIH07XG4gICAgICAgIGlmIChlQm9va0NvbmZpZy5wZWVyICYmIHR5cGVvZiBzdHVkZW50Vm90ZUNvdW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBkYXRhLmFjdCA9IGRhdGEuYWN0ICsgYDp2b3RlJHtzdHVkZW50Vm90ZUNvdW50fWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBzaWQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGRhdGEuc2lkID0gc2lkO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMubG9nQm9va0V2ZW50KGRhdGEpO1xuICAgIH1cblxuICAgIHJlbmRlck1DTUFGZWVkQmFjaygpIHtcbiAgICAgICAgdmFyIGFuc3dlclN0ciA9IFwiYW5zd2Vyc1wiO1xuICAgICAgICB2YXIgbnVtR2l2ZW4gPSB0aGlzLmdpdmVuQXJyYXkubGVuZ3RoO1xuICAgICAgICBpZiAobnVtR2l2ZW4gPT09IDEpIHtcbiAgICAgICAgICAgIGFuc3dlclN0ciA9IFwiYW5zd2VyXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG51bUNvcnJlY3QgPSB0aGlzLmNvcnJlY3RDb3VudDtcbiAgICAgICAgdmFyIG51bU5lZWRlZCA9IHRoaXMuY29ycmVjdExpc3QubGVuZ3RoO1xuICAgICAgICB2YXIgZmVlZGJhY2tUZXh0ID0gdGhpcy5mZWVkYmFja1N0cmluZztcbiAgICAgICAgaWYgKHRoaXMuY29ycmVjdCkge1xuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5odG1sKGDinJTvuI8gPG9sIHR5cGU9XCJBXCI+JHtmZWVkYmFja1RleHR9PC91bD5gKTtcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtaW5mb1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuaHRtbChcbiAgICAgICAgICAgICAgICBg4pyW77iPIFlvdSBnYXZlICR7bnVtR2l2ZW59ICR7YW5zd2VyU3RyfSBhbmQgZ290ICR7bnVtQ29ycmVjdH0gY29ycmVjdCBvZiAke251bU5lZWRlZH0gbmVlZGVkLjxvbCB0eXBlPVwiQVwiPiR7ZmVlZGJhY2tUZXh0fTwvdWw+YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvY2Vzc01DTUZTdWJtaXNzaW9uKGxvZ0ZsYWcpIHtcbiAgICAgICAgLy8gQ2FsbGVkIHdoZW4gdGhlIHN1Ym1pdCBidXR0b24gaXMgY2xpY2tlZFxuICAgICAgICB0aGlzLmdldFN1Ym1pdHRlZE9wdHMoKTsgLy8gbWFrZSBzdXJlIHRoaXMuZ2l2ZW5BcnJheSBpcyBwb3B1bGF0ZWRcbiAgICAgICAgdGhpcy5zY29yZU1DTUZTdWJtaXNzaW9uKCk7XG4gICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKHtcbiAgICAgICAgICAgIGNvcnJlY3Q6IHRoaXMuY29ycmVjdCA/IFwiVFwiIDogXCJGXCIsXG4gICAgICAgICAgICBhbnN3ZXI6IHRoaXMuZ2l2ZW5BcnJheS5qb2luKFwiLFwiKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChsb2dGbGFnKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ01DTUZzdWJtaXNzaW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlQm9va0NvbmZpZy5wZWVyIHx8IGVCb29rQ29uZmlnLmlzSW5zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJNQ01GRmVlZGJhY2soKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVNQ0NvbXBhcmlzb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIHN1Ym1pc3Npb25cbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuaHRtbChcIjxwPllvdXIgQW5zd2VyIGhhcyBiZWVuIHJlY29yZGVkPC9wPlwiKTtcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtaW5mb1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjb3JlTUNNRlN1Ym1pc3Npb24oKSB7XG4gICAgICAgIHRoaXMuYW5zd2VyID0gdGhpcy5naXZlbkFycmF5WzBdO1xuICAgICAgICBpZiAodGhpcy5naXZlbkFycmF5WzBdID09IHRoaXMuY29ycmVjdEluZGV4TGlzdFswXSkge1xuICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucGVyY2VudCA9IDEuMDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdpdmVuQXJyYXlbMF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gaWYgZ2l2ZW4gaXMgbnVsbCB0aGVuIHRoZSBxdWVzdGlvbiB3YXNuXCJ0IGFuc3dlcmVkIGFuZCBzaG91bGQgYmUgY291bnRlZCBhcyBza2lwcGVkXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucGVyY2VudCA9IDAuMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGxvZ01DTUZzdWJtaXNzaW9uKHNpZCkge1xuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGFuc3dlciBwcm92aWRlZCAodGhlIGFycmF5IGlzIGVtcHR5KSwgdXNlIGEgYmxhbmsgZm9yIHRoZSBhbnN3ZXIuXG4gICAgICAgIHZhciBhbnN3ZXIgPSB0aGlzLmdpdmVuQXJyYXlbMF0gfHwgXCJcIjtcbiAgICAgICAgdmFyIGNvcnJlY3QgPVxuICAgICAgICAgICAgdGhpcy5naXZlbkFycmF5WzBdID09IHRoaXMuY29ycmVjdEluZGV4TGlzdFswXSA/IFwiVFwiIDogXCJGXCI7XG4gICAgICAgIHZhciBsb2dBbnN3ZXIgPVxuICAgICAgICAgICAgXCJhbnN3ZXI6XCIgKyBhbnN3ZXIgKyBcIjpcIiArIChjb3JyZWN0ID09IFwiVFwiID8gXCJjb3JyZWN0XCIgOiBcIm5vXCIpOyAvLyBiYWNrd2FyZCBjb21wYXRpYmxlXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgZXZlbnQ6IFwibUNob2ljZVwiLFxuICAgICAgICAgICAgYWN0OiBsb2dBbnN3ZXIsXG4gICAgICAgICAgICBhbnN3ZXI6IGFuc3dlcixcbiAgICAgICAgICAgIGNvcnJlY3Q6IGNvcnJlY3QsXG4gICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2aWQsXG4gICAgICAgIH07XG4gICAgICAgIGlmIChlQm9va0NvbmZpZy5wZWVyICYmIHR5cGVvZiBzdHVkZW50Vm90ZUNvdW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBkYXRhLmFjdCA9IGRhdGEuYWN0ICsgYDp2b3RlJHtzdHVkZW50Vm90ZUNvdW50fWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBzaWQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGRhdGEuc2lkID0gc2lkO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMubG9nQm9va0V2ZW50KGRhdGEpO1xuICAgIH1cblxuICAgIHJlbmRlck1DTUZGZWVkYmFjaygpIHtcbiAgICAgICAgbGV0IGNvcnJlY3QgPSB0aGlzLmdpdmVuQXJyYXlbMF0gPT0gdGhpcy5jb3JyZWN0SW5kZXhMaXN0WzBdO1xuICAgICAgICBsZXQgZmVlZGJhY2tUZXh0ID0gdGhpcy5zaW5nbGVmZWVkYmFjaztcblxuICAgICAgICBpZiAoY29ycmVjdCkge1xuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5odG1sKFwi4pyU77iPIFwiICsgZmVlZGJhY2tUZXh0KTtcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtaW5mb1wiKTsgLy8gdXNlIGJsdWUgZm9yIGJldHRlciByZWQvZ3JlZW4gYmx1ZSBjb2xvciBibGluZG5lc3NcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChmZWVkYmFja1RleHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZlZWRiYWNrVGV4dCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKHRoaXMuZmVlZEJhY2tEaXYpLmh0bWwoXCLinJbvuI8gXCIgKyBmZWVkYmFja1RleHQpO1xuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5hdHRyKFwiY2xhc3NcIiwgXCJhbGVydCBhbGVydC1kYW5nZXJcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW5hYmxlTUNDb21wYXJpc29uKCkge1xuICAgICAgICBpZiAoZUJvb2tDb25maWcuZW5hYmxlQ29tcGFyZU1lKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbnN0cnVjdG9yTWNob2ljZU1vZGFsKGRhdGEpIHtcbiAgICAgICAgLy8gZGF0YS5yZXNsaXN0IC0tIHN0dWRlbnQgYW5kIHRoZWlyIGFuc3dlcnNcbiAgICAgICAgLy8gZGF0YS5hbnN3ZXJEaWN0ICAgIC0tIGFuc3dlcnMgYW5kIGNvdW50XG4gICAgICAgIC8vIGRhdGEuY29ycmVjdCAtIGNvcnJlY3QgYW5zd2VyXG4gICAgICAgIHZhciByZXMgPSBcIjx0YWJsZT48dHI+PHRoPlN0dWRlbnQ8L3RoPjx0aD5BbnN3ZXIocyk8L3RoPjwvdHI+XCI7XG4gICAgICAgIGZvciAodmFyIGkgaW4gZGF0YSkge1xuICAgICAgICAgICAgcmVzICs9XG4gICAgICAgICAgICAgICAgXCI8dHI+PHRkPlwiICtcbiAgICAgICAgICAgICAgICBkYXRhW2ldWzBdICtcbiAgICAgICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcbiAgICAgICAgICAgICAgICBkYXRhW2ldWzFdICtcbiAgICAgICAgICAgICAgICBcIjwvdGQ+PC90cj5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXMgKz0gXCI8L3RhYmxlPlwiO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBjb21wYXJlTW9kYWwoZGF0YSwgc3RhdHVzLCB3aGF0ZXZlcikge1xuICAgICAgICB2YXIgZGF0YWRpY3QgPSBkYXRhLmRldGFpbDtcbiAgICAgICAgdmFyIGFuc3dlcnMgPSBkYXRhZGljdC5hbnN3ZXJEaWN0O1xuICAgICAgICB2YXIgbWlzYyA9IGRhdGFkaWN0Lm1pc2M7XG4gICAgICAgIHZhciBrbCA9IE9iamVjdC5rZXlzKGFuc3dlcnMpLnNvcnQoKTtcbiAgICAgICAgdmFyIGJvZHkgPSBcIjx0YWJsZT5cIjtcbiAgICAgICAgYm9keSArPSBcIjx0cj48dGg+QW5zd2VyPC90aD48dGg+UGVyY2VudDwvdGg+PC90cj5cIjtcbiAgICAgICAgdmFyIHRoZUNsYXNzID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgayBpbiBrbCkge1xuICAgICAgICAgICAgaWYgKGtsW2tdID09PSBtaXNjLmNvcnJlY3QpIHtcbiAgICAgICAgICAgICAgICB0aGVDbGFzcyA9IFwic3VjY2Vzc1wiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGVDbGFzcyA9IFwiaW5mb1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keSArPVxuICAgICAgICAgICAgICAgIFwiPHRyPjx0ZD5cIiArIGtsW2tdICsgXCI8L3RkPjx0ZCBjbGFzcz0nY29tcGFyZS1tZS1wcm9ncmVzcyc+XCI7XG4gICAgICAgICAgICB2YXIgcGN0ID0gYW5zd2Vyc1trbFtrXV0gKyBcIiVcIjtcbiAgICAgICAgICAgIGJvZHkgKz0gXCI8ZGl2IGNsYXNzPSdwcm9ncmVzcyc+XCI7XG4gICAgICAgICAgICBib2R5ICs9XG4gICAgICAgICAgICAgICAgXCIgICAgPGRpdiBjbGFzcz0ncHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1cIiArXG4gICAgICAgICAgICAgICAgdGhlQ2xhc3MgK1xuICAgICAgICAgICAgICAgIFwiJyBzdHlsZT0nd2lkdGg6XCIgK1xuICAgICAgICAgICAgICAgIHBjdCArXG4gICAgICAgICAgICAgICAgXCI7Jz5cIiArXG4gICAgICAgICAgICAgICAgcGN0O1xuICAgICAgICAgICAgYm9keSArPSBcIiAgICA8L2Rpdj5cIjtcbiAgICAgICAgICAgIGJvZHkgKz0gXCI8L2Rpdj48L3RkPjwvdHI+XCI7XG4gICAgICAgIH1cbiAgICAgICAgYm9keSArPSBcIjwvdGFibGU+XCI7XG4gICAgICAgIGlmIChtaXNjLnlvdXJwY3QgIT09IFwidW5hdmFpbGFibGVcIikge1xuICAgICAgICAgICAgYm9keSArPVxuICAgICAgICAgICAgICAgIFwiPGJyIC8+PHA+WW91IGhhdmUgXCIgK1xuICAgICAgICAgICAgICAgIG1pc2MueW91cnBjdCArXG4gICAgICAgICAgICAgICAgXCIlIGNvcnJlY3QgZm9yIGFsbCBxdWVzdGlvbnM8L3A+XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGFkaWN0LnJlc2xpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYm9keSArPSB0aGlzLmluc3RydWN0b3JNY2hvaWNlTW9kYWwoZGF0YWRpY3QucmVzbGlzdCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGh0bWwgPVxuICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdtb2RhbCBmYWRlJz5cIiArXG4gICAgICAgICAgICBcIiAgICA8ZGl2IGNsYXNzPSdtb2RhbC1kaWFsb2cgY29tcGFyZS1tb2RhbCc+XCIgK1xuICAgICAgICAgICAgXCIgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWNvbnRlbnQnPlwiICtcbiAgICAgICAgICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtaGVhZGVyJz5cIiArXG4gICAgICAgICAgICBcIiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J21vZGFsJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+JnRpbWVzOzwvYnV0dG9uPlwiICtcbiAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgIDxoNCBjbGFzcz0nbW9kYWwtdGl0bGUnPkRpc3RyaWJ1dGlvbiBvZiBBbnN3ZXJzPC9oND5cIiArXG4gICAgICAgICAgICBcIiAgICAgICAgICAgIDwvZGl2PlwiICtcbiAgICAgICAgICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtYm9keSc+XCIgK1xuICAgICAgICAgICAgYm9keSArXG4gICAgICAgICAgICBcIiAgICAgICAgICAgIDwvZGl2PlwiICtcbiAgICAgICAgICAgIFwiICAgICAgICA8L2Rpdj5cIiArXG4gICAgICAgICAgICBcIiAgICA8L2Rpdj5cIiArXG4gICAgICAgICAgICBcIjwvZGl2PlwiO1xuICAgICAgICB2YXIgZWwgPSAkKGh0bWwpO1xuICAgICAgICBlbC5tb2RhbCgpO1xuICAgIH1cbiAgICAvLyBfYGNvbXBhcmVBbnN3ZXJzYFxuICAgIGNvbXBhcmVBbnN3ZXJzKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhLmRpdl9pZCA9IHRoaXMuZGl2aWQ7XG4gICAgICAgIGRhdGEuY291cnNlX25hbWUgPSBlQm9va0NvbmZpZy5jb3Vyc2U7XG4gICAgICAgIGpRdWVyeS5nZXQoXG4gICAgICAgICAgICBgJHtlQm9va0NvbmZpZy5uZXdfc2VydmVyX3ByZWZpeH0vYXNzZXNzbWVudC9nZXRhZ2dyZWdhdGVyZXN1bHRzYCxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVNb2RhbC5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZGlzYWJsZUludGVyYWN0aW9uKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3B0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uQXJyYXlbaV0uaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlSW50ZXJhY3Rpb24oKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcHRpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25BcnJheVtpXS5pbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT0gRmluZCB0aGUgY3VzdG9tIEhUTUwgdGFncyBhbmQgPT1cbj09ICAgZXhlY3V0ZSBvdXIgY29kZSBvbiB0aGVtICAgID09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuJChkb2N1bWVudCkub24oXCJydW5lc3RvbmU6bG9naW4tY29tcGxldGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCJbZGF0YS1jb21wb25lbnQ9bXVsdGlwbGVjaG9pY2VdXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIC8vIE1DXG4gICAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICAgICAgb3JpZzogdGhpcyxcbiAgICAgICAgICAgIHVzZVJ1bmVzdG9uZVNlcnZpY2VzOiBlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcyxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCQodGhpcykuY2xvc2VzdChcIltkYXRhLWNvbXBvbmVudD10aW1lZEFzc2Vzc21lbnRdXCIpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGVsZW1lbnQgZXhpc3RzIHdpdGhpbiBhIHRpbWVkIGNvbXBvbmVudCwgZG9uJ3QgcmVuZGVyIGl0IGhlcmVcbiAgICAgICAgICAgIHdpbmRvdy5tY0xpc3RbdGhpcy5pZF0gPSBuZXcgTXVsdGlwbGVDaG9pY2Uob3B0cyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IE11bHRpcGxlQ2hvaWNlIGZyb20gXCIuL21jaG9pY2UuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZWRNQyBleHRlbmRzIE11bHRpcGxlQ2hvaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKG9wdHMpO1xuICAgICAgICAkKHRoaXMuY29udGFpbmVyRGl2KS5hZGRDbGFzcyhcInJ1bmVzdG9uZVwiKTtcbiAgICAgICAgdGhpcy5uZWVkc1JlaW5pdGlhbGl6YXRpb24gPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbmRlclRpbWVkSWNvbih0aGlzLk1DQ29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5oaWRlQnV0dG9ucygpOyAvLyBEb24ndCBzaG93IHBlci1xdWVzdGlvbiBidXR0b25zIGluIGEgdGltZWQgYXNzZXNzbWVudFxuICAgIH1cblxuICAgIHJlbmRlclRpbWVkSWNvbihjb21wb25lbnQpIHtcbiAgICAgICAgLy8gcmVuZGVycyB0aGUgY2xvY2sgaWNvbiBvbiB0aW1lZCBjb21wb25lbnRzLiAgICBUaGUgY29tcG9uZW50IHBhcmFtZXRlclxuICAgICAgICAvLyBpcyB0aGUgZWxlbWVudCB0aGF0IHRoZSBpY29uIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICAgICAgdmFyIHRpbWVJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIHRpbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgJCh0aW1lSWNvbikuYXR0cih7XG4gICAgICAgICAgICBzcmM6IFwiLi4vX3N0YXRpYy9jbG9jay5wbmdcIixcbiAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOjE1cHg7aGVpZ2h0OjE1cHhcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRpbWVJY29uRGl2LmNsYXNzTmFtZSA9IFwidGltZVRpcFwiO1xuICAgICAgICB0aW1lSWNvbkRpdi50aXRsZSA9IFwiXCI7XG4gICAgICAgIHRpbWVJY29uRGl2LmFwcGVuZENoaWxkKHRpbWVJY29uKTtcbiAgICAgICAgJChjb21wb25lbnQpLnByZXBlbmQodGltZUljb25EaXYpO1xuICAgIH1cbiAgICBoaWRlQnV0dG9ucygpIHtcbiAgICAgICAgLy9KdXN0IGhpZGluZyB0aGUgYnV0dG9ucyBkb2Vzbid0IHByZXZlbnQgc3VibWl0dGluZyB0aGUgZm9ybSB3aGVuIGVudGVyaW5nIGlzIGNsaWNrZWRcbiAgICAgICAgLy9XZSBuZWVkIHRvIGNvbXBsZXRlbHkgZGlzYWJsZSB0aGUgYnV0dG9uc1xuICAgICAgICAkKHRoaXMuc3VibWl0QnV0dG9uKS5hdHRyKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAkKHRoaXMuc3VibWl0QnV0dG9uKS5oaWRlKCk7XG4gICAgICAgICQodGhpcy5jb21wYXJlQnV0dG9uKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgLy8gVGhlc2UgbWV0aG9kcyBvdmVycmlkZSB0aGUgbWV0aG9kcyBpbiB0aGUgYmFzZSBjbGFzcy4gQ2FsbGVkIGZyb20gcmVuZGVyRmVlZGJhY2soKVxuICAgIC8vXG4gICAgcmVuZGVyTUNNQUZlZWRCYWNrKCkge1xuICAgICAgICB0aGlzLmZlZWRiYWNrVGltZWRNQygpO1xuICAgIH1cbiAgICByZW5kZXJNQ01GRmVlZGJhY2sod2hhdGV2ZXIsIHdoYXRldmVycikge1xuICAgICAgICB0aGlzLmZlZWRiYWNrVGltZWRNQygpO1xuICAgIH1cbiAgICBmZWVkYmFja1RpbWVkTUMoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pbmRleEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG1waW5kZXggPSB0aGlzLmluZGV4QXJyYXlbaV07XG4gICAgICAgICAgICAkKHRoaXMuZmVlZEJhY2tFYWNoQXJyYXlbaV0pLmh0bWwoXG4gICAgICAgICAgICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpICsgXCIuIFwiICsgdGhpcy5mZWVkYmFja0xpc3RbaV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB2YXIgdG1waWQgPSB0aGlzLmFuc3dlckxpc3RbdG1waW5kZXhdLmlkO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ycmVjdExpc3QuaW5kZXhPZih0bXBpZCkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmVlZEJhY2tFYWNoQXJyYXlbaV0uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICAgICAgICAgXCJhbGVydFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFsZXJ0LXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZmVlZEJhY2tFYWNoQXJyYXlbaV0uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICAgICAgICAgXCJhbGVydFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFsZXJ0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXJNQ0Zvcm1PcHRzKCkge1xuICAgICAgICBzdXBlci5yZW5kZXJNQ0Zvcm1PcHRzKCk7XG4gICAgICAgIHRoaXMuZmVlZEJhY2tFYWNoQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmFuc3dlckxpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHZhciBrID0gdGhpcy5pbmRleEFycmF5W2pdO1xuICAgICAgICAgICAgdmFyIGZlZWRCYWNrRWFjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBmZWVkQmFja0VhY2guaWQgPSB0aGlzLmRpdmlkICsgXCJfZWFjaEZlZWRiYWNrX1wiICsgaztcbiAgICAgICAgICAgIGZlZWRCYWNrRWFjaC5jbGFzc0xpc3QuYWRkKFwiZWFjaEZlZWRiYWNrXCIpO1xuICAgICAgICAgICAgdGhpcy5mZWVkQmFja0VhY2hBcnJheS5wdXNoKGZlZWRCYWNrRWFjaCk7XG4gICAgICAgICAgICB0aGlzLm9wdHNGb3JtLmFwcGVuZENoaWxkKGZlZWRCYWNrRWFjaCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tDb3JyZWN0VGltZWRNQ01BKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RDb3VudCA9PT0gdGhpcy5jb3JyZWN0TGlzdC5sZW5ndGggJiZcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdExpc3QubGVuZ3RoID09PSB0aGlzLmdpdmVuQXJyYXkubGVuZ3RoXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdpdmVuQXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNvcnJlY3QgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHF1ZXN0aW9uIHdhcyBza2lwcGVkXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGhpcy5jb3JyZWN0KSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVFwiO1xuICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGXCI7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrQ29ycmVjdFRpbWVkTUNNRigpIHtcbiAgICAgICAgLy8gUmV0dXJucyBpZiB0aGUgcXVlc3Rpb24gd2FzIGNvcnJlY3QsIGluY29ycmVjdCwgb3Igc2tpcHBlZCAocmV0dXJuIG51bGwgaW4gdGhlIGxhc3QgY2FzZSlcbiAgICAgICAgc3dpdGNoICh0aGlzLmNvcnJlY3QpIHtcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUXCI7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZcIjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tDb3JyZWN0VGltZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlYW5zd2Vycykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tDb3JyZWN0VGltZWRNQ01BKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja0NvcnJlY3RUaW1lZE1DTUYoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoaWRlRmVlZGJhY2soKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5mZWVkQmFja0VhY2hBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRWFjaEFycmF5W2ldKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWluaXRpYWxpemVMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGFuc3dlckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLmlzQW5zd2VyZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCBvcHQgb2YgdGhpcy5vcHRpb25BcnJheSkge1xuICAgICAgICAgICAgb3B0LmlucHV0Lm9uY2xpY2sgPSBhbnN3ZXJGdW5jO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9IHt9O1xufVxuXG53aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkubXVsdGlwbGVjaG9pY2UgPSBmdW5jdGlvbiAob3B0cykge1xuICAgIGlmIChvcHRzLnRpbWVkKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGltZWRNQyhvcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IE11bHRpcGxlQ2hvaWNlKG9wdHMpO1xuICAgIH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
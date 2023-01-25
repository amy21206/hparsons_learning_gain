(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_fitb_js_timedfitb_js"],{

/***/ 68007:
/*!*************************************!*\
  !*** ./runestone/fitb/css/fitb.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 86151:
/*!*******************************************!*\
  !*** ./runestone/fitb/js/fitb-i18n.en.js ***!
  \*******************************************/
/***/ (() => {

$.i18n().load({
    en: {
        msg_no_answer: "No answer provided.",
        msg_fitb_check_me: "Check me",
        msg_fitb_compare_me: "Compare me",
    },
});


/***/ }),

/***/ 61353:
/*!**********************************************!*\
  !*** ./runestone/fitb/js/fitb-i18n.pt-br.js ***!
  \**********************************************/
/***/ (() => {

$.i18n().load({
    "pt-br": {
        msg_no_answer: "Nenhuma resposta dada.",
        msg_fitb_check_me: "Verificar",
        msg_fitb_compare_me: "Comparar"
    },
});


/***/ }),

/***/ 99184:
/*!***********************************!*\
  !*** ./runestone/fitb/js/fitb.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FITBList": () => (/* binding */ FITBList),
/* harmony export */   "default": () => (/* binding */ FITB)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _fitb_i18n_en_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fitb-i18n.en.js */ 86151);
/* harmony import */ var _fitb_i18n_en_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fitb_i18n_en_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fitb_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fitb-i18n.pt-br.js */ 61353);
/* harmony import */ var _fitb_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fitb_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_fitb_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/fitb.css */ 68007);
// *********
// |docname|
// *********
// This file contains the JS for the Runestone fillintheblank component. It was created By Isaiah Mayerchak and Kirby Olson, 6/4/15 then revised by Brad Miller, 2/7/20.







var FITBList = {}; // Object containing all instances of FITB that aren't a child of a timed assessment.

// FITB constructor
class FITB extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; // entire <p> element
        this.useRunestoneServices = opts.useRunestoneServices;
        this.origElem = orig;
        this.divid = orig.id;
        this.correct = null;
        // See comments in fitb.py for the format of ``feedbackArray`` (which is identical in both files).
        //
        // Find the script tag containing JSON and parse it. See `SO <https://stackoverflow.com/questions/9320427/best-practice-for-embedding-arbitrary-json-in-the-dom>`_. If this parses to ``false``, then no feedback is available; server-side grading will be performed.
        this.feedbackArray = JSON.parse(
            this.scriptSelector(this.origElem).html()
        );
        this.createFITBElement();
        this.caption = "Fill in the Blank";
        this.addCaption("runestone");
        this.checkServer("fillb", true);
        if (typeof Prism !== "undefined") {
            Prism.highlightAllUnder(this.containerDiv);
        }
    }
    // Find the script tag containing JSON in a given root DOM node.
    scriptSelector(root_node) {
        return $(root_node).find(`script[type="application/json"]`);
    }
    /*===========================================
    ====   Functions generating final HTML   ====
    ===========================================*/
    createFITBElement() {
        this.renderFITBInput();
        this.renderFITBButtons();
        this.renderFITBFeedbackDiv();
        // replaces the intermediate HTML for this component with the rendered HTML of this component
        $(this.origElem).replaceWith(this.containerDiv);
    }
    renderFITBInput() {
        // The text [input] elements are created by the template.
        this.containerDiv = document.createElement("div");
        this.containerDiv.id = this.divid;
        // Copy the original elements to the container holding what the user will see.
        $(this.origElem).children().clone().appendTo(this.containerDiv);
        // Remove the script tag.
        this.scriptSelector(this.containerDiv).remove();
        // Set the class for the text inputs, then store references to them.
        let ba = $(this.containerDiv).find(":input");
        ba.attr("class", "form form-control selectwidthauto");
        ba.attr("aria-label", "input area");
        this.blankArray = ba.toArray();
        // When a blank is changed mark this component as interacted with.
        // And set a class on the component in case we want to render components that have been used
        // differently
        for (let blank of this.blankArray) {
            $(blank).change(this.recordAnswered.bind(this));
        }
    }

    recordAnswered() {
        this.isAnswered = true;
        //let rcontainer = this.containerDiv.closest(".runestone");
        //rcontainer.addClass("answered");
    }

    renderFITBButtons() {
        // "submit" button and "compare me" button
        this.submitButton = document.createElement("button");
        this.submitButton.textContent = $.i18n("msg_fitb_check_me");
        $(this.submitButton).attr({
            class: "btn btn-success",
            name: "do answer",
            type: "button",
        });
        this.submitButton.addEventListener(
            "click",
            function () {
                this.checkCurrentAnswer();
                this.logCurrentAnswer();
            }.bind(this),
            false
        );
        this.containerDiv.appendChild(document.createElement("br"));
        this.containerDiv.appendChild(document.createElement("br"));
        this.containerDiv.appendChild(this.submitButton);
        if (this.useRunestoneServices) {
            this.compareButton = document.createElement("button");
            $(this.compareButton).attr({
                class: "btn btn-default",
                id: this.origElem.id + "_bcomp",
                disabled: "",
                name: "compare",
            });
            this.compareButton.textContent = $.i18n("msg_fitb_compare_me");
            this.compareButton.addEventListener(
                "click",
                function () {
                    this.compareFITBAnswers();
                }.bind(this),
                false
            );
            this.containerDiv.appendChild(this.compareButton);
        }
        this.containerDiv.appendChild(document.createElement("div"));
    }
    renderFITBFeedbackDiv() {
        this.feedBackDiv = document.createElement("div");
        this.feedBackDiv.id = this.divid + "_feedback";
        this.containerDiv.appendChild(document.createElement("br"));
        this.containerDiv.appendChild(this.feedBackDiv);
    }
    /*===================================
    === Checking/loading from storage ===
    ===================================*/
    restoreAnswers(data) {
        var arr;
        // Restore answers from storage retrieval done in RunestoneBase.
        try {
            // The newer format encodes data as a JSON object.
            arr = JSON.parse(data.answer);
            // The result should be an array. If not, try comma parsing instead.
            if (!Array.isArray(arr)) {
                throw new Error();
            }
        } catch (err) {
            // The old format didn't.
            arr = data.answer.split(",");
        }
        for (var i = 0; i < this.blankArray.length; i++) {
            $(this.blankArray[i]).attr("value", arr[i]);
        }
        // Use the feedback from the server, or recompute it locally.
        if (!this.feedbackArray) {
            this.displayFeed = data.displayFeed;
            this.correct = data.correct;
            this.isCorrectArray = data.isCorrectArray;
            // Only render if all the data is present; local storage might have old data missing some of these items.
            if (
                typeof this.displayFeed !== "undefined" &&
                typeof this.correct !== "undefined" &&
                typeof this.isCorrectArray !== "undefined"
            ) {
                this.renderFeedback();
            }
        } else {
            this.checkCurrentAnswer();
        }
    }
    checkLocalStorage() {
        // Loads previous answers from local storage if they exist
        var storedData;
        if (this.graderactive) {
            return;
        }
        var len = localStorage.length;
        if (len > 0) {
            var ex = localStorage.getItem(this.localStorageKey());
            if (ex !== null) {
                try {
                    storedData = JSON.parse(ex);
                    var arr = storedData.answer;
                } catch (err) {
                    // error while parsing; likely due to bad value stored in storage
                    console.log(err.message);
                    localStorage.removeItem(this.localStorageKey());
                    return;
                }
                this.restoreAnswers(storedData);
            }
        }
    }
    setLocalStorage(data) {
        let key = this.localStorageKey();
        localStorage.setItem(key, JSON.stringify(data));
    }

    checkCurrentAnswer() {
        // Start of the evaluation chain
        this.isCorrectArray = [];
        this.displayFeed = [];
        this.given_arr = [];
        for (var i = 0; i < this.blankArray.length; i++)
            this.given_arr.push(this.blankArray[i].value);
        if (this.useRunestoneServices) {
            if (eBookConfig.enableCompareMe) {
                this.enableCompareButton();
            }
        }
        // Grade locally if we can't ask the server to grade.
        if (this.feedbackArray) {
            this.evaluateAnswers();
            if (!this.isTimed) {
                this.renderFeedback();
            }
        }
    }

    async logCurrentAnswer(sid) {
        let answer = JSON.stringify(this.given_arr);
        // Save the answer locally.
        let feedback = true;
        this.setLocalStorage({
            answer: answer,
            timestamp: new Date(),
        });
        let data = {
            event: "fillb",
            act: answer || "",
            answer: answer || "",
            correct: this.correct ? "T" : "F",
            div_id: this.divid,
        };
        if (typeof sid !== "undefined") {
            data.sid = sid;
            feedback = false;
        }
        // Per `logBookEvent <logBookEvent>`, the result is undefined if there's no server. Otherwise, the server provides the endpoint-specific results in ``data.details``; see `make_json_response`.
        data = await this.logBookEvent(data);
        let detail = data && data.detail;
        if (!feedback) return;
        if (!this.feedbackArray) {
            // On success, update the feedback from the server's grade.
            this.setLocalStorage({
                answer: answer,
                timestamp: detail.timestamp,
            });
            this.correct = detail.correct;
            this.displayFeed = detail.displayFeed;
            this.isCorrectArray = detail.isCorrectArray;
            if (!this.isTimed) {
                this.renderFeedback();
            }
        }
        return detail;
    }

    /*==============================
    === Evaluation of answer and ===
    ===     display feedback     ===
    ==============================*/
    // Inputs:
    //
    // - Strings entered by the student in ``this.blankArray[i].value``.
    // - Feedback in ``this.feedbackArray``.
    //
    // Outputs:
    //
    // - ``this.displayFeed`` is an array of HTML feedback.
    // - ``this.isCorrectArray`` is an array of true, false, or null (the question wasn't answered).
    // - ``this.correct`` is true, false, or null (the question wasn't answered).
    evaluateAnswers() {
        // Keep track if all answers are correct or not.
        this.correct = true;
        for (var i = 0; i < this.blankArray.length; i++) {
            var given = this.blankArray[i].value;
            // If this blank is empty, provide no feedback for it.
            if (given === "") {
                this.isCorrectArray.push(null);
                this.displayFeed.push($.i18n("msg_no_answer"));
                this.correct = false;
            } else {
                // Look through all feedback for this blank. The last element in the array always matches. If no feedback for this blank exists, use an empty list.
                var fbl = this.feedbackArray[i] || [];
                for (var j = 0; j < fbl.length; j++) {
                    // The last item of feedback always matches.
                    if (j === fbl.length - 1) {
                        this.displayFeed.push(fbl[j]["feedback"]);
                        break;
                    }
                    // If this is a regexp...
                    if ("regex" in fbl[j]) {
                        var patt = RegExp(
                            fbl[j]["regex"],
                            fbl[j]["regexFlags"]
                        );
                        if (patt.test(given)) {
                            this.displayFeed.push(fbl[j]["feedback"]);
                            break;
                        }
                    } else {
                        // This is a number.
                        console.assert("number" in fbl[j]);
                        var [min, max] = fbl[j]["number"];
                        // Convert the given string to a number. While there are `lots of ways <https://coderwall.com/p/5tlhmw/converting-strings-to-number-in-javascript-pitfalls>`_ to do this; this version supports other bases (hex/binary/octal) as well as floats.
                        var actual = +given;
                        if (actual >= min && actual <= max) {
                            this.displayFeed.push(fbl[j]["feedback"]);
                            break;
                        }
                    }
                }
                // The answer is correct if it matched the first element in the array. A special case: if only one answer is provided, count it wrong; this is a misformed problem.
                let is_correct = j === 0 && fbl.length > 1;
                this.isCorrectArray.push(is_correct);
                if (!is_correct) {
                    this.correct = false;
                }
            }
        }
        this.percent =
            this.isCorrectArray.filter(Boolean).length / this.blankArray.length;
    }

    renderFeedback() {
        if (this.correct) {
            $(this.feedBackDiv).attr("class", "alert alert-info");
            for (let j = 0; j < this.blankArray.length; j++) {
                $(this.blankArray[j]).removeClass("input-validation-error");
            }
        } else {
            if (this.displayFeed === null) {
                this.displayFeed = "";
            }
            for (let j = 0; j < this.blankArray.length; j++) {
                if (this.isCorrectArray[j] !== true) {
                    $(this.blankArray[j]).addClass("input-validation-error");
                } else {
                    $(this.blankArray[j]).removeClass("input-validation-error");
                }
            }
            $(this.feedBackDiv).attr("class", "alert alert-danger");
        }
        var feedback_html = "<ul>";
        for (var i = 0; i < this.displayFeed.length; i++) {
            feedback_html += "<li>" + this.displayFeed[i] + "</li>";
        }
        feedback_html += "</ul>";
        // Remove the list if it's just one element.
        if (this.displayFeed.length == 1) {
            feedback_html = feedback_html.slice(
                "<ul><li>".length,
                -"</li></ul>".length
            );
        }
        this.feedBackDiv.innerHTML = feedback_html;
        if (typeof MathJax !== "undefined") {
            this.queueMathJax(document.body);
        }
    }

    /*==================================
    === Functions for compare button ===
    ==================================*/
    enableCompareButton() {
        this.compareButton.disabled = false;
    }
    // _`compareFITBAnswers`
    compareFITBAnswers() {
        var data = {};
        data.div_id = this.divid;
        data.course = eBookConfig.course;
        jQuery.get(
            `${eBookConfig.new_server_prefix}/assessment/gettop10Answers`,
            data,
            this.compareFITB
        );
    }
    compareFITB(data, status, whatever) {
        var answers = data.detail.res;
        var misc = data.detail.miscdata;
        var body = "<table>";
        body += "<tr><th>Answer</th><th>Count</th></tr>";
        for (var row in answers) {
            body +=
                "<tr><td>" +
                answers[row].answer +
                "</td><td>" +
                answers[row].count +
                " times</td></tr>";
        }
        body += "</table>";
        var html =
            "<div class='modal fade'>" +
            "    <div class='modal-dialog compare-modal'>" +
            "        <div class='modal-content'>" +
            "            <div class='modal-header'>" +
            "                <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>" +
            "                <h4 class='modal-title'>Top Answers</h4>" +
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

    disableInteraction() {
        for (var i = 0; i < this.blankArray.length; i++) {
            this.blankArray[i].disabled = true;
        }
    }
}

/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
$(document).on("runestone:login-complete", function () {
    $("[data-component=fillintheblank]").each(function (index) {
        var opts = {
            orig: this,
            useRunestoneServices: eBookConfig.useRunestoneServices,
        };
        if ($(this).closest("[data-component=timedAssessment]").length == 0) {
            // If this element exists within a timed component, don't render it here
            try {
                FITBList[this.id] = new FITB(opts);
            } catch (err) {
                console.log(
                    `Error rendering Fill in the Blank Problem ${this.id}
                     Details: ${err}`
                );
            }
        }
    });
});


/***/ }),

/***/ 74309:
/*!****************************************!*\
  !*** ./runestone/fitb/js/timedfitb.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimedFITB)
/* harmony export */ });
/* harmony import */ var _fitb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fitb.js */ 99184);

class TimedFITB extends _fitb_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        this.renderTimedIcon(this.inputDiv);
        this.hideButtons();
        this.needsReinitialization = true;
    }
    hideButtons() {
        $(this.submitButton).hide();
        $(this.compareButton).hide();
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
        for (var i = 0; i < this.blankArray.length; i++) {
            $(this.blankArray[i]).removeClass("input-validation-error");
        }
        this.feedBackDiv.style.display = "none";
    }

    reinitializeListeners() {
        for (let blank of this.blankArray) {
            $(blank).change(this.recordAnswered.bind(this));
        }
    }
}

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}
window.component_factory.fillintheblank = function (opts) {
    if (opts.timed) {
        return new TimedFITB(opts);
    }
    return new _fitb_js__WEBPACK_IMPORTED_MODULE_0__["default"](opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX2ZpdGJfanNfdGltZWRmaXRiX2pzLmUwNWQ1NDkyMWZjYmRmMjguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7O0FDTkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05EO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7O0FBRWdEO0FBQ2xDO0FBQ0c7QUFDTDs7QUFFbEIsbUJBQW1COztBQUUxQjtBQUNlLG1CQUFtQixtRUFBYTtBQUMvQztBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdPQUF3TztBQUN4TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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YTRCO0FBQ2Qsd0JBQXdCLGdEQUFJO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0RBQUk7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2ZpdGIvY3NzL2ZpdGIuY3NzPzllYmQiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9maXRiL2pzL2ZpdGItaTE4bi5lbi5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2ZpdGIvanMvZml0Yi1pMThuLnB0LWJyLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvZml0Yi9qcy9maXRiLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvZml0Yi9qcy90aW1lZGZpdGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiJC5pMThuKCkubG9hZCh7XG4gICAgZW46IHtcbiAgICAgICAgbXNnX25vX2Fuc3dlcjogXCJObyBhbnN3ZXIgcHJvdmlkZWQuXCIsXG4gICAgICAgIG1zZ19maXRiX2NoZWNrX21lOiBcIkNoZWNrIG1lXCIsXG4gICAgICAgIG1zZ19maXRiX2NvbXBhcmVfbWU6IFwiQ29tcGFyZSBtZVwiLFxuICAgIH0sXG59KTtcbiIsIiQuaTE4bigpLmxvYWQoe1xuICAgIFwicHQtYnJcIjoge1xuICAgICAgICBtc2dfbm9fYW5zd2VyOiBcIk5lbmh1bWEgcmVzcG9zdGEgZGFkYS5cIixcbiAgICAgICAgbXNnX2ZpdGJfY2hlY2tfbWU6IFwiVmVyaWZpY2FyXCIsXG4gICAgICAgIG1zZ19maXRiX2NvbXBhcmVfbWU6IFwiQ29tcGFyYXJcIlxuICAgIH0sXG59KTtcbiIsIi8vICoqKioqKioqKlxuLy8gfGRvY25hbWV8XG4vLyAqKioqKioqKipcbi8vIFRoaXMgZmlsZSBjb250YWlucyB0aGUgSlMgZm9yIHRoZSBSdW5lc3RvbmUgZmlsbGludGhlYmxhbmsgY29tcG9uZW50LiBJdCB3YXMgY3JlYXRlZCBCeSBJc2FpYWggTWF5ZXJjaGFrIGFuZCBLaXJieSBPbHNvbiwgNi80LzE1IHRoZW4gcmV2aXNlZCBieSBCcmFkIE1pbGxlciwgMi83LzIwLlxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZS5qc1wiO1xuaW1wb3J0IFwiLi9maXRiLWkxOG4uZW4uanNcIjtcbmltcG9ydCBcIi4vZml0Yi1pMThuLnB0LWJyLmpzXCI7XG5pbXBvcnQgXCIuLi9jc3MvZml0Yi5jc3NcIjtcblxuZXhwb3J0IHZhciBGSVRCTGlzdCA9IHt9OyAvLyBPYmplY3QgY29udGFpbmluZyBhbGwgaW5zdGFuY2VzIG9mIEZJVEIgdGhhdCBhcmVuJ3QgYSBjaGlsZCBvZiBhIHRpbWVkIGFzc2Vzc21lbnQuXG5cbi8vIEZJVEIgY29uc3RydWN0b3JcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZJVEIgZXh0ZW5kcyBSdW5lc3RvbmVCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKG9wdHMpO1xuICAgICAgICB2YXIgb3JpZyA9IG9wdHMub3JpZzsgLy8gZW50aXJlIDxwPiBlbGVtZW50XG4gICAgICAgIHRoaXMudXNlUnVuZXN0b25lU2VydmljZXMgPSBvcHRzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzO1xuICAgICAgICB0aGlzLm9yaWdFbGVtID0gb3JpZztcbiAgICAgICAgdGhpcy5kaXZpZCA9IG9yaWcuaWQ7XG4gICAgICAgIHRoaXMuY29ycmVjdCA9IG51bGw7XG4gICAgICAgIC8vIFNlZSBjb21tZW50cyBpbiBmaXRiLnB5IGZvciB0aGUgZm9ybWF0IG9mIGBgZmVlZGJhY2tBcnJheWBgICh3aGljaCBpcyBpZGVudGljYWwgaW4gYm90aCBmaWxlcykuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEZpbmQgdGhlIHNjcmlwdCB0YWcgY29udGFpbmluZyBKU09OIGFuZCBwYXJzZSBpdC4gU2VlIGBTTyA8aHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTMyMDQyNy9iZXN0LXByYWN0aWNlLWZvci1lbWJlZGRpbmctYXJiaXRyYXJ5LWpzb24taW4tdGhlLWRvbT5gXy4gSWYgdGhpcyBwYXJzZXMgdG8gYGBmYWxzZWBgLCB0aGVuIG5vIGZlZWRiYWNrIGlzIGF2YWlsYWJsZTsgc2VydmVyLXNpZGUgZ3JhZGluZyB3aWxsIGJlIHBlcmZvcm1lZC5cbiAgICAgICAgdGhpcy5mZWVkYmFja0FycmF5ID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgIHRoaXMuc2NyaXB0U2VsZWN0b3IodGhpcy5vcmlnRWxlbSkuaHRtbCgpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY3JlYXRlRklUQkVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5jYXB0aW9uID0gXCJGaWxsIGluIHRoZSBCbGFua1wiO1xuICAgICAgICB0aGlzLmFkZENhcHRpb24oXCJydW5lc3RvbmVcIik7XG4gICAgICAgIHRoaXMuY2hlY2tTZXJ2ZXIoXCJmaWxsYlwiLCB0cnVlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBQcmlzbSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgUHJpc20uaGlnaGxpZ2h0QWxsVW5kZXIodGhpcy5jb250YWluZXJEaXYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEZpbmQgdGhlIHNjcmlwdCB0YWcgY29udGFpbmluZyBKU09OIGluIGEgZ2l2ZW4gcm9vdCBET00gbm9kZS5cbiAgICBzY3JpcHRTZWxlY3Rvcihyb290X25vZGUpIHtcbiAgICAgICAgcmV0dXJuICQocm9vdF9ub2RlKS5maW5kKGBzY3JpcHRbdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIl1gKTtcbiAgICB9XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09PSAgIEZ1bmN0aW9ucyBnZW5lcmF0aW5nIGZpbmFsIEhUTUwgICA9PT09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgY3JlYXRlRklUQkVsZW1lbnQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyRklUQklucHV0KCk7XG4gICAgICAgIHRoaXMucmVuZGVyRklUQkJ1dHRvbnMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJGSVRCRmVlZGJhY2tEaXYoKTtcbiAgICAgICAgLy8gcmVwbGFjZXMgdGhlIGludGVybWVkaWF0ZSBIVE1MIGZvciB0aGlzIGNvbXBvbmVudCB3aXRoIHRoZSByZW5kZXJlZCBIVE1MIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICAgICQodGhpcy5vcmlnRWxlbSkucmVwbGFjZVdpdGgodGhpcy5jb250YWluZXJEaXYpO1xuICAgIH1cbiAgICByZW5kZXJGSVRCSW5wdXQoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXh0IFtpbnB1dF0gZWxlbWVudHMgYXJlIGNyZWF0ZWQgYnkgdGhlIHRlbXBsYXRlLlxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmlkID0gdGhpcy5kaXZpZDtcbiAgICAgICAgLy8gQ29weSB0aGUgb3JpZ2luYWwgZWxlbWVudHMgdG8gdGhlIGNvbnRhaW5lciBob2xkaW5nIHdoYXQgdGhlIHVzZXIgd2lsbCBzZWUuXG4gICAgICAgICQodGhpcy5vcmlnRWxlbSkuY2hpbGRyZW4oKS5jbG9uZSgpLmFwcGVuZFRvKHRoaXMuY29udGFpbmVyRGl2KTtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBzY3JpcHQgdGFnLlxuICAgICAgICB0aGlzLnNjcmlwdFNlbGVjdG9yKHRoaXMuY29udGFpbmVyRGl2KS5yZW1vdmUoKTtcbiAgICAgICAgLy8gU2V0IHRoZSBjbGFzcyBmb3IgdGhlIHRleHQgaW5wdXRzLCB0aGVuIHN0b3JlIHJlZmVyZW5jZXMgdG8gdGhlbS5cbiAgICAgICAgbGV0IGJhID0gJCh0aGlzLmNvbnRhaW5lckRpdikuZmluZChcIjppbnB1dFwiKTtcbiAgICAgICAgYmEuYXR0cihcImNsYXNzXCIsIFwiZm9ybSBmb3JtLWNvbnRyb2wgc2VsZWN0d2lkdGhhdXRvXCIpO1xuICAgICAgICBiYS5hdHRyKFwiYXJpYS1sYWJlbFwiLCBcImlucHV0IGFyZWFcIik7XG4gICAgICAgIHRoaXMuYmxhbmtBcnJheSA9IGJhLnRvQXJyYXkoKTtcbiAgICAgICAgLy8gV2hlbiBhIGJsYW5rIGlzIGNoYW5nZWQgbWFyayB0aGlzIGNvbXBvbmVudCBhcyBpbnRlcmFjdGVkIHdpdGguXG4gICAgICAgIC8vIEFuZCBzZXQgYSBjbGFzcyBvbiB0aGUgY29tcG9uZW50IGluIGNhc2Ugd2Ugd2FudCB0byByZW5kZXIgY29tcG9uZW50cyB0aGF0IGhhdmUgYmVlbiB1c2VkXG4gICAgICAgIC8vIGRpZmZlcmVudGx5XG4gICAgICAgIGZvciAobGV0IGJsYW5rIG9mIHRoaXMuYmxhbmtBcnJheSkge1xuICAgICAgICAgICAgJChibGFuaykuY2hhbmdlKHRoaXMucmVjb3JkQW5zd2VyZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWNvcmRBbnN3ZXJlZCgpIHtcbiAgICAgICAgdGhpcy5pc0Fuc3dlcmVkID0gdHJ1ZTtcbiAgICAgICAgLy9sZXQgcmNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyRGl2LmNsb3Nlc3QoXCIucnVuZXN0b25lXCIpO1xuICAgICAgICAvL3Jjb250YWluZXIuYWRkQ2xhc3MoXCJhbnN3ZXJlZFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXJGSVRCQnV0dG9ucygpIHtcbiAgICAgICAgLy8gXCJzdWJtaXRcIiBidXR0b24gYW5kIFwiY29tcGFyZSBtZVwiIGJ1dHRvblxuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJC5pMThuKFwibXNnX2ZpdGJfY2hlY2tfbWVcIik7XG4gICAgICAgICQodGhpcy5zdWJtaXRCdXR0b24pLmF0dHIoe1xuICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICBuYW1lOiBcImRvIGFuc3dlclwiLFxuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0N1cnJlbnRBbnN3ZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ0N1cnJlbnRBbnN3ZXIoKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMuc3VibWl0QnV0dG9uKTtcbiAgICAgICAgaWYgKHRoaXMudXNlUnVuZXN0b25lU2VydmljZXMpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGFyZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAkKHRoaXMuY29tcGFyZUJ1dHRvbikuYXR0cih7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMub3JpZ0VsZW0uaWQgKyBcIl9iY29tcFwiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiY29tcGFyZVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVCdXR0b24udGV4dENvbnRlbnQgPSAkLmkxOG4oXCJtc2dfZml0Yl9jb21wYXJlX21lXCIpO1xuICAgICAgICAgICAgdGhpcy5jb21wYXJlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wYXJlRklUQkFuc3dlcnMoKTtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLmNvbXBhcmVCdXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICAgIH1cbiAgICByZW5kZXJGSVRCRmVlZGJhY2tEaXYoKSB7XG4gICAgICAgIHRoaXMuZmVlZEJhY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmZlZWRCYWNrRGl2LmlkID0gdGhpcy5kaXZpZCArIFwiX2ZlZWRiYWNrXCI7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMuZmVlZEJhY2tEaXYpO1xuICAgIH1cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09IENoZWNraW5nL2xvYWRpbmcgZnJvbSBzdG9yYWdlID09PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICByZXN0b3JlQW5zd2VycyhkYXRhKSB7XG4gICAgICAgIHZhciBhcnI7XG4gICAgICAgIC8vIFJlc3RvcmUgYW5zd2VycyBmcm9tIHN0b3JhZ2UgcmV0cmlldmFsIGRvbmUgaW4gUnVuZXN0b25lQmFzZS5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFRoZSBuZXdlciBmb3JtYXQgZW5jb2RlcyBkYXRhIGFzIGEgSlNPTiBvYmplY3QuXG4gICAgICAgICAgICBhcnIgPSBKU09OLnBhcnNlKGRhdGEuYW5zd2VyKTtcbiAgICAgICAgICAgIC8vIFRoZSByZXN1bHQgc2hvdWxkIGJlIGFuIGFycmF5LiBJZiBub3QsIHRyeSBjb21tYSBwYXJzaW5nIGluc3RlYWQuXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vIFRoZSBvbGQgZm9ybWF0IGRpZG4ndC5cbiAgICAgICAgICAgIGFyciA9IGRhdGEuYW5zd2VyLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYmxhbmtBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgJCh0aGlzLmJsYW5rQXJyYXlbaV0pLmF0dHIoXCJ2YWx1ZVwiLCBhcnJbaV0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVzZSB0aGUgZmVlZGJhY2sgZnJvbSB0aGUgc2VydmVyLCBvciByZWNvbXB1dGUgaXQgbG9jYWxseS5cbiAgICAgICAgaWYgKCF0aGlzLmZlZWRiYWNrQXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUZlZWQgPSBkYXRhLmRpc3BsYXlGZWVkO1xuICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gZGF0YS5jb3JyZWN0O1xuICAgICAgICAgICAgdGhpcy5pc0NvcnJlY3RBcnJheSA9IGRhdGEuaXNDb3JyZWN0QXJyYXk7XG4gICAgICAgICAgICAvLyBPbmx5IHJlbmRlciBpZiBhbGwgdGhlIGRhdGEgaXMgcHJlc2VudDsgbG9jYWwgc3RvcmFnZSBtaWdodCBoYXZlIG9sZCBkYXRhIG1pc3Npbmcgc29tZSBvZiB0aGVzZSBpdGVtcy5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0eXBlb2YgdGhpcy5kaXNwbGF5RmVlZCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzLmNvcnJlY3QgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgdGhpcy5pc0NvcnJlY3RBcnJheSAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJGZWVkYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGVja0N1cnJlbnRBbnN3ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja0xvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgLy8gTG9hZHMgcHJldmlvdXMgYW5zd2VycyBmcm9tIGxvY2FsIHN0b3JhZ2UgaWYgdGhleSBleGlzdFxuICAgICAgICB2YXIgc3RvcmVkRGF0YTtcbiAgICAgICAgaWYgKHRoaXMuZ3JhZGVyYWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxlbiA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgICAgICB2YXIgZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcbiAgICAgICAgICAgIGlmIChleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlZERhdGEgPSBKU09OLnBhcnNlKGV4KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IHN0b3JlZERhdGEuYW5zd2VyO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBlcnJvciB3aGlsZSBwYXJzaW5nOyBsaWtlbHkgZHVlIHRvIGJhZCB2YWx1ZSBzdG9yZWQgaW4gc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucmVzdG9yZUFuc3dlcnMoc3RvcmVkRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0TG9jYWxTdG9yYWdlKGRhdGEpIHtcbiAgICAgICAgbGV0IGtleSA9IHRoaXMubG9jYWxTdG9yYWdlS2V5KCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH1cblxuICAgIGNoZWNrQ3VycmVudEFuc3dlcigpIHtcbiAgICAgICAgLy8gU3RhcnQgb2YgdGhlIGV2YWx1YXRpb24gY2hhaW5cbiAgICAgICAgdGhpcy5pc0NvcnJlY3RBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLmRpc3BsYXlGZWVkID0gW107XG4gICAgICAgIHRoaXMuZ2l2ZW5fYXJyID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ibGFua0FycmF5Lmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgdGhpcy5naXZlbl9hcnIucHVzaCh0aGlzLmJsYW5rQXJyYXlbaV0udmFsdWUpO1xuICAgICAgICBpZiAodGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcykge1xuICAgICAgICAgICAgaWYgKGVCb29rQ29uZmlnLmVuYWJsZUNvbXBhcmVNZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlQ29tcGFyZUJ1dHRvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEdyYWRlIGxvY2FsbHkgaWYgd2UgY2FuJ3QgYXNrIHRoZSBzZXJ2ZXIgdG8gZ3JhZGUuXG4gICAgICAgIGlmICh0aGlzLmZlZWRiYWNrQXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuZXZhbHVhdGVBbnN3ZXJzKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNUaW1lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRmVlZGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGxvZ0N1cnJlbnRBbnN3ZXIoc2lkKSB7XG4gICAgICAgIGxldCBhbnN3ZXIgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdpdmVuX2Fycik7XG4gICAgICAgIC8vIFNhdmUgdGhlIGFuc3dlciBsb2NhbGx5LlxuICAgICAgICBsZXQgZmVlZGJhY2sgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZSh7XG4gICAgICAgICAgICBhbnN3ZXI6IGFuc3dlcixcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgZXZlbnQ6IFwiZmlsbGJcIixcbiAgICAgICAgICAgIGFjdDogYW5zd2VyIHx8IFwiXCIsXG4gICAgICAgICAgICBhbnN3ZXI6IGFuc3dlciB8fCBcIlwiLFxuICAgICAgICAgICAgY29ycmVjdDogdGhpcy5jb3JyZWN0ID8gXCJUXCIgOiBcIkZcIixcbiAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHR5cGVvZiBzaWQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGRhdGEuc2lkID0gc2lkO1xuICAgICAgICAgICAgZmVlZGJhY2sgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQZXIgYGxvZ0Jvb2tFdmVudCA8bG9nQm9va0V2ZW50PmAsIHRoZSByZXN1bHQgaXMgdW5kZWZpbmVkIGlmIHRoZXJlJ3Mgbm8gc2VydmVyLiBPdGhlcndpc2UsIHRoZSBzZXJ2ZXIgcHJvdmlkZXMgdGhlIGVuZHBvaW50LXNwZWNpZmljIHJlc3VsdHMgaW4gYGBkYXRhLmRldGFpbHNgYDsgc2VlIGBtYWtlX2pzb25fcmVzcG9uc2VgLlxuICAgICAgICBkYXRhID0gYXdhaXQgdGhpcy5sb2dCb29rRXZlbnQoZGF0YSk7XG4gICAgICAgIGxldCBkZXRhaWwgPSBkYXRhICYmIGRhdGEuZGV0YWlsO1xuICAgICAgICBpZiAoIWZlZWRiYWNrKSByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5mZWVkYmFja0FycmF5KSB7XG4gICAgICAgICAgICAvLyBPbiBzdWNjZXNzLCB1cGRhdGUgdGhlIGZlZWRiYWNrIGZyb20gdGhlIHNlcnZlcidzIGdyYWRlLlxuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgIGFuc3dlcjogYW5zd2VyLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogZGV0YWlsLnRpbWVzdGFtcCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gZGV0YWlsLmNvcnJlY3Q7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlGZWVkID0gZGV0YWlsLmRpc3BsYXlGZWVkO1xuICAgICAgICAgICAgdGhpcy5pc0NvcnJlY3RBcnJheSA9IGRldGFpbC5pc0NvcnJlY3RBcnJheTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1RpbWVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJGZWVkYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZXRhaWw7XG4gICAgfVxuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT0gRXZhbHVhdGlvbiBvZiBhbnN3ZXIgYW5kID09PVxuICAgID09PSAgICAgZGlzcGxheSBmZWVkYmFjayAgICAgPT09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAvLyBJbnB1dHM6XG4gICAgLy9cbiAgICAvLyAtIFN0cmluZ3MgZW50ZXJlZCBieSB0aGUgc3R1ZGVudCBpbiBgYHRoaXMuYmxhbmtBcnJheVtpXS52YWx1ZWBgLlxuICAgIC8vIC0gRmVlZGJhY2sgaW4gYGB0aGlzLmZlZWRiYWNrQXJyYXlgYC5cbiAgICAvL1xuICAgIC8vIE91dHB1dHM6XG4gICAgLy9cbiAgICAvLyAtIGBgdGhpcy5kaXNwbGF5RmVlZGBgIGlzIGFuIGFycmF5IG9mIEhUTUwgZmVlZGJhY2suXG4gICAgLy8gLSBgYHRoaXMuaXNDb3JyZWN0QXJyYXlgYCBpcyBhbiBhcnJheSBvZiB0cnVlLCBmYWxzZSwgb3IgbnVsbCAodGhlIHF1ZXN0aW9uIHdhc24ndCBhbnN3ZXJlZCkuXG4gICAgLy8gLSBgYHRoaXMuY29ycmVjdGBgIGlzIHRydWUsIGZhbHNlLCBvciBudWxsICh0aGUgcXVlc3Rpb24gd2Fzbid0IGFuc3dlcmVkKS5cbiAgICBldmFsdWF0ZUFuc3dlcnMoKSB7XG4gICAgICAgIC8vIEtlZXAgdHJhY2sgaWYgYWxsIGFuc3dlcnMgYXJlIGNvcnJlY3Qgb3Igbm90LlxuICAgICAgICB0aGlzLmNvcnJlY3QgPSB0cnVlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYmxhbmtBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGdpdmVuID0gdGhpcy5ibGFua0FycmF5W2ldLnZhbHVlO1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBibGFuayBpcyBlbXB0eSwgcHJvdmlkZSBubyBmZWVkYmFjayBmb3IgaXQuXG4gICAgICAgICAgICBpZiAoZ2l2ZW4gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29ycmVjdEFycmF5LnB1c2gobnVsbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RmVlZC5wdXNoKCQuaTE4bihcIm1zZ19ub19hbnN3ZXJcIikpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBMb29rIHRocm91Z2ggYWxsIGZlZWRiYWNrIGZvciB0aGlzIGJsYW5rLiBUaGUgbGFzdCBlbGVtZW50IGluIHRoZSBhcnJheSBhbHdheXMgbWF0Y2hlcy4gSWYgbm8gZmVlZGJhY2sgZm9yIHRoaXMgYmxhbmsgZXhpc3RzLCB1c2UgYW4gZW1wdHkgbGlzdC5cbiAgICAgICAgICAgICAgICB2YXIgZmJsID0gdGhpcy5mZWVkYmFja0FycmF5W2ldIHx8IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZmJsLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBsYXN0IGl0ZW0gb2YgZmVlZGJhY2sgYWx3YXlzIG1hdGNoZXMuXG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09PSBmYmwubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RmVlZC5wdXNoKGZibFtqXVtcImZlZWRiYWNrXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSByZWdleHAuLi5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFwicmVnZXhcIiBpbiBmYmxbal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXR0ID0gUmVnRXhwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZibFtqXVtcInJlZ2V4XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZibFtqXVtcInJlZ2V4RmxhZ3NcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF0dC50ZXN0KGdpdmVuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUZlZWQucHVzaChmYmxbal1bXCJmZWVkYmFja1wiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbnVtYmVyLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoXCJudW1iZXJcIiBpbiBmYmxbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFttaW4sIG1heF0gPSBmYmxbal1bXCJudW1iZXJcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBnaXZlbiBzdHJpbmcgdG8gYSBudW1iZXIuIFdoaWxlIHRoZXJlIGFyZSBgbG90cyBvZiB3YXlzIDxodHRwczovL2NvZGVyd2FsbC5jb20vcC81dGxobXcvY29udmVydGluZy1zdHJpbmdzLXRvLW51bWJlci1pbi1qYXZhc2NyaXB0LXBpdGZhbGxzPmBfIHRvIGRvIHRoaXM7IHRoaXMgdmVyc2lvbiBzdXBwb3J0cyBvdGhlciBiYXNlcyAoaGV4L2JpbmFyeS9vY3RhbCkgYXMgd2VsbCBhcyBmbG9hdHMuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWN0dWFsID0gK2dpdmVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdHVhbCA+PSBtaW4gJiYgYWN0dWFsIDw9IG1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUZlZWQucHVzaChmYmxbal1bXCJmZWVkYmFja1wiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVGhlIGFuc3dlciBpcyBjb3JyZWN0IGlmIGl0IG1hdGNoZWQgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGFycmF5LiBBIHNwZWNpYWwgY2FzZTogaWYgb25seSBvbmUgYW5zd2VyIGlzIHByb3ZpZGVkLCBjb3VudCBpdCB3cm9uZzsgdGhpcyBpcyBhIG1pc2Zvcm1lZCBwcm9ibGVtLlxuICAgICAgICAgICAgICAgIGxldCBpc19jb3JyZWN0ID0gaiA9PT0gMCAmJiBmYmwubGVuZ3RoID4gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29ycmVjdEFycmF5LnB1c2goaXNfY29ycmVjdCk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc19jb3JyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBlcmNlbnQgPVxuICAgICAgICAgICAgdGhpcy5pc0NvcnJlY3RBcnJheS5maWx0ZXIoQm9vbGVhbikubGVuZ3RoIC8gdGhpcy5ibGFua0FycmF5Lmxlbmd0aDtcbiAgICB9XG5cbiAgICByZW5kZXJGZWVkYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ycmVjdCkge1xuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5hdHRyKFwiY2xhc3NcIiwgXCJhbGVydCBhbGVydC1pbmZvXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJsYW5rQXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMuYmxhbmtBcnJheVtqXSkucmVtb3ZlQ2xhc3MoXCJpbnB1dC12YWxpZGF0aW9uLWVycm9yXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlzcGxheUZlZWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlGZWVkID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ibGFua0FycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDb3JyZWN0QXJyYXlbal0gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLmJsYW5rQXJyYXlbal0pLmFkZENsYXNzKFwiaW5wdXQtdmFsaWRhdGlvbi1lcnJvclwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMuYmxhbmtBcnJheVtqXSkucmVtb3ZlQ2xhc3MoXCJpbnB1dC12YWxpZGF0aW9uLWVycm9yXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmZWVkYmFja19odG1sID0gXCI8dWw+XCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kaXNwbGF5RmVlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZmVlZGJhY2tfaHRtbCArPSBcIjxsaT5cIiArIHRoaXMuZGlzcGxheUZlZWRbaV0gKyBcIjwvbGk+XCI7XG4gICAgICAgIH1cbiAgICAgICAgZmVlZGJhY2tfaHRtbCArPSBcIjwvdWw+XCI7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgbGlzdCBpZiBpdCdzIGp1c3Qgb25lIGVsZW1lbnQuXG4gICAgICAgIGlmICh0aGlzLmRpc3BsYXlGZWVkLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICBmZWVkYmFja19odG1sID0gZmVlZGJhY2tfaHRtbC5zbGljZShcbiAgICAgICAgICAgICAgICBcIjx1bD48bGk+XCIubGVuZ3RoLFxuICAgICAgICAgICAgICAgIC1cIjwvbGk+PC91bD5cIi5sZW5ndGhcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZWVkQmFja0Rpdi5pbm5lckhUTUwgPSBmZWVkYmFja19odG1sO1xuICAgICAgICBpZiAodHlwZW9mIE1hdGhKYXggIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMucXVldWVNYXRoSmF4KGRvY3VtZW50LmJvZHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09IEZ1bmN0aW9ucyBmb3IgY29tcGFyZSBidXR0b24gPT09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgZW5hYmxlQ29tcGFyZUJ1dHRvbigpIHtcbiAgICAgICAgdGhpcy5jb21wYXJlQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIF9gY29tcGFyZUZJVEJBbnN3ZXJzYFxuICAgIGNvbXBhcmVGSVRCQW5zd2VycygpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgZGF0YS5kaXZfaWQgPSB0aGlzLmRpdmlkO1xuICAgICAgICBkYXRhLmNvdXJzZSA9IGVCb29rQ29uZmlnLmNvdXJzZTtcbiAgICAgICAgalF1ZXJ5LmdldChcbiAgICAgICAgICAgIGAke2VCb29rQ29uZmlnLm5ld19zZXJ2ZXJfcHJlZml4fS9hc3Nlc3NtZW50L2dldHRvcDEwQW5zd2Vyc2AsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgdGhpcy5jb21wYXJlRklUQlxuICAgICAgICApO1xuICAgIH1cbiAgICBjb21wYXJlRklUQihkYXRhLCBzdGF0dXMsIHdoYXRldmVyKSB7XG4gICAgICAgIHZhciBhbnN3ZXJzID0gZGF0YS5kZXRhaWwucmVzO1xuICAgICAgICB2YXIgbWlzYyA9IGRhdGEuZGV0YWlsLm1pc2NkYXRhO1xuICAgICAgICB2YXIgYm9keSA9IFwiPHRhYmxlPlwiO1xuICAgICAgICBib2R5ICs9IFwiPHRyPjx0aD5BbnN3ZXI8L3RoPjx0aD5Db3VudDwvdGg+PC90cj5cIjtcbiAgICAgICAgZm9yICh2YXIgcm93IGluIGFuc3dlcnMpIHtcbiAgICAgICAgICAgIGJvZHkgKz1cbiAgICAgICAgICAgICAgICBcIjx0cj48dGQ+XCIgK1xuICAgICAgICAgICAgICAgIGFuc3dlcnNbcm93XS5hbnN3ZXIgK1xuICAgICAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xuICAgICAgICAgICAgICAgIGFuc3dlcnNbcm93XS5jb3VudCArXG4gICAgICAgICAgICAgICAgXCIgdGltZXM8L3RkPjwvdHI+XCI7XG4gICAgICAgIH1cbiAgICAgICAgYm9keSArPSBcIjwvdGFibGU+XCI7XG4gICAgICAgIHZhciBodG1sID1cbiAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0nbW9kYWwgZmFkZSc+XCIgK1xuICAgICAgICAgICAgXCIgICAgPGRpdiBjbGFzcz0nbW9kYWwtZGlhbG9nIGNvbXBhcmUtbW9kYWwnPlwiICtcbiAgICAgICAgICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1jb250ZW50Jz5cIiArXG4gICAgICAgICAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWhlYWRlcic+XCIgK1xuICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdtb2RhbCcgYXJpYS1oaWRkZW49J3RydWUnPiZ0aW1lczs8L2J1dHRvbj5cIiArXG4gICAgICAgICAgICBcIiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9J21vZGFsLXRpdGxlJz5Ub3AgQW5zd2VyczwvaDQ+XCIgK1xuICAgICAgICAgICAgXCIgICAgICAgICAgICA8L2Rpdj5cIiArXG4gICAgICAgICAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWJvZHknPlwiICtcbiAgICAgICAgICAgIGJvZHkgK1xuICAgICAgICAgICAgXCIgICAgICAgICAgICA8L2Rpdj5cIiArXG4gICAgICAgICAgICBcIiAgICAgICAgPC9kaXY+XCIgK1xuICAgICAgICAgICAgXCIgICAgPC9kaXY+XCIgK1xuICAgICAgICAgICAgXCI8L2Rpdj5cIjtcbiAgICAgICAgdmFyIGVsID0gJChodG1sKTtcbiAgICAgICAgZWwubW9kYWwoKTtcbiAgICB9XG5cbiAgICBkaXNhYmxlSW50ZXJhY3Rpb24oKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ibGFua0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJsYW5rQXJyYXlbaV0uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT0gRmluZCB0aGUgY3VzdG9tIEhUTUwgdGFncyBhbmQgPT1cbj09ICAgZXhlY3V0ZSBvdXIgY29kZSBvbiB0aGVtICAgID09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuJChkb2N1bWVudCkub24oXCJydW5lc3RvbmU6bG9naW4tY29tcGxldGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCJbZGF0YS1jb21wb25lbnQ9ZmlsbGludGhlYmxhbmtdXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICAgICAgb3JpZzogdGhpcyxcbiAgICAgICAgICAgIHVzZVJ1bmVzdG9uZVNlcnZpY2VzOiBlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcyxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCQodGhpcykuY2xvc2VzdChcIltkYXRhLWNvbXBvbmVudD10aW1lZEFzc2Vzc21lbnRdXCIpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGVsZW1lbnQgZXhpc3RzIHdpdGhpbiBhIHRpbWVkIGNvbXBvbmVudCwgZG9uJ3QgcmVuZGVyIGl0IGhlcmVcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgRklUQkxpc3RbdGhpcy5pZF0gPSBuZXcgRklUQihvcHRzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICBgRXJyb3IgcmVuZGVyaW5nIEZpbGwgaW4gdGhlIEJsYW5rIFByb2JsZW0gJHt0aGlzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgRGV0YWlsczogJHtlcnJ9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IEZJVEIgZnJvbSBcIi4vZml0Yi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZWRGSVRCIGV4dGVuZHMgRklUQiB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcihvcHRzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUaW1lZEljb24odGhpcy5pbnB1dERpdik7XG4gICAgICAgIHRoaXMuaGlkZUJ1dHRvbnMoKTtcbiAgICAgICAgdGhpcy5uZWVkc1JlaW5pdGlhbGl6YXRpb24gPSB0cnVlO1xuICAgIH1cbiAgICBoaWRlQnV0dG9ucygpIHtcbiAgICAgICAgJCh0aGlzLnN1Ym1pdEJ1dHRvbikuaGlkZSgpO1xuICAgICAgICAkKHRoaXMuY29tcGFyZUJ1dHRvbikuaGlkZSgpO1xuICAgIH1cbiAgICByZW5kZXJUaW1lZEljb24oY29tcG9uZW50KSB7XG4gICAgICAgIC8vIHJlbmRlcnMgdGhlIGNsb2NrIGljb24gb24gdGltZWQgY29tcG9uZW50cy4gICAgVGhlIGNvbXBvbmVudCBwYXJhbWV0ZXJcbiAgICAgICAgLy8gaXMgdGhlIGVsZW1lbnQgdGhhdCB0aGUgaWNvbiBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAgICAgIHZhciB0aW1lSWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciB0aW1lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICQodGltZUljb24pLmF0dHIoe1xuICAgICAgICAgICAgc3JjOiBcIi4uL19zdGF0aWMvY2xvY2sucG5nXCIsXG4gICAgICAgICAgICBzdHlsZTogXCJ3aWR0aDoxNXB4O2hlaWdodDoxNXB4XCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aW1lSWNvbkRpdi5jbGFzc05hbWUgPSBcInRpbWVUaXBcIjtcbiAgICAgICAgdGltZUljb25EaXYudGl0bGUgPSBcIlwiO1xuICAgICAgICB0aW1lSWNvbkRpdi5hcHBlbmRDaGlsZCh0aW1lSWNvbik7XG4gICAgICAgICQoY29tcG9uZW50KS5wcmVwZW5kKHRpbWVJY29uRGl2KTtcbiAgICB9XG4gICAgY2hlY2tDb3JyZWN0VGltZWQoKSB7XG4gICAgICAgIC8vIFJldHVybnMgaWYgdGhlIHF1ZXN0aW9uIHdhcyBjb3JyZWN0LCBpbmNvcnJlY3QsIG9yIHNraXBwZWQgKHJldHVybiBudWxsIGluIHRoZSBsYXN0IGNhc2UpXG4gICAgICAgIHN3aXRjaCAodGhpcy5jb3JyZWN0KSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVFwiO1xuICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGXCI7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhpZGVGZWVkYmFjaygpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJsYW5rQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICQodGhpcy5ibGFua0FycmF5W2ldKS5yZW1vdmVDbGFzcyhcImlucHV0LXZhbGlkYXRpb24tZXJyb3JcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZWVkQmFja0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgcmVpbml0aWFsaXplTGlzdGVuZXJzKCkge1xuICAgICAgICBmb3IgKGxldCBibGFuayBvZiB0aGlzLmJsYW5rQXJyYXkpIHtcbiAgICAgICAgICAgICQoYmxhbmspLmNoYW5nZSh0aGlzLnJlY29yZEFuc3dlcmVkLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9IHt9O1xufVxud2luZG93LmNvbXBvbmVudF9mYWN0b3J5LmZpbGxpbnRoZWJsYW5rID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICBpZiAob3B0cy50aW1lZCkge1xuICAgICAgICByZXR1cm4gbmV3IFRpbWVkRklUQihvcHRzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBGSVRCKG9wdHMpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
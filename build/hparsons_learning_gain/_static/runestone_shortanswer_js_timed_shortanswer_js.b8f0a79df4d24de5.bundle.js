"use strict";
(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_shortanswer_js_timed_shortanswer_js"],{

/***/ 76199:
/*!***************************************************!*\
  !*** ./runestone/shortanswer/css/shortanswer.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 67230:
/*!*************************************************!*\
  !*** ./runestone/shortanswer/js/shortanswer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShortAnswer),
/* harmony export */   "saList": () => (/* binding */ saList)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _css_shortanswer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../css/shortanswer.css */ 76199);
/*==========================================
=======    Master shortanswer.js    ========
============================================
===     This file contains the JS for    ===
=== the Runestone shortanswer component. ===
============================================
===              Created by              ===
===           Isaiah Mayerchak           ===
===                7/2/15                ===
===              Brad Miller             ===
===                2019                  ===
==========================================*/




var saList;
if (saList === undefined) saList = {}; // Dictionary that contains all instances of shortanswer objects

class ShortAnswer extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        if (opts) {
            var orig = opts.orig; // entire <p> element that will be replaced by new HTML
            this.useRunestoneServices =
                opts.useRunestoneServices || eBookConfig.useRunestoneServices;
            this.origElem = orig;
            this.divid = orig.id;
            this.question = this.origElem.innerHTML;
            this.optional = false;
            this.attachURL = opts.attachURL;
            if ($(this.origElem).is("[data-optional]")) {
                this.optional = true;
            }
            if ($(this.origElem).is("[data-mathjax]")) {
                this.mathjax = true;
            }
            if ($(this.origElem).is("[data-attachment]")) {
                this.attachment = true;
            }
            this.placeholder =
                $(this.origElem).data("placeholder") ||
                "Write your answer here";
            this.renderHTML();
            this.caption = "shortanswer";
            this.addCaption("runestone");
            this.checkServer("shortanswer", true);
            if (typeof Prism !== "undefined") {
                Prism.highlightAllUnder(this.containerDiv);
            }
        }
    }

    renderHTML() {
        this.containerDiv = document.createElement("div");
        this.containerDiv.id = this.divid;
        $(this.containerDiv).addClass(this.origElem.getAttribute("class"));
        this.newForm = document.createElement("form");
        this.newForm.id = this.divid + "_journal";
        this.newForm.name = this.newForm.id;
        this.newForm.action = "";
        this.containerDiv.appendChild(this.newForm);
        this.fieldSet = document.createElement("fieldset");
        this.newForm.appendChild(this.fieldSet);
        this.firstLegendDiv = document.createElement("div");
        this.firstLegendDiv.innerHTML = this.question;
        $(this.firstLegendDiv).addClass("journal-question");
        this.fieldSet.appendChild(this.firstLegendDiv);
        this.jInputDiv = document.createElement("div");
        this.jInputDiv.id = this.divid + "_journal_input";
        this.fieldSet.appendChild(this.jInputDiv);
        this.jOptionsDiv = document.createElement("div");
        $(this.jOptionsDiv).addClass("journal-options");
        this.jInputDiv.appendChild(this.jOptionsDiv);
        this.jLabel = document.createElement("label");
        $(this.jLabel).addClass("radio-inline");
        this.jOptionsDiv.appendChild(this.jLabel);
        this.jTextArea = document.createElement("textarea");
        let self = this;
        this.jTextArea.onchange = function() {
            self.isAnswered = true;
        };
        this.jTextArea.id = this.divid + "_solution";
        $(this.jTextArea).attr("aria-label", "textarea");
        this.jTextArea.placeholder = this.placeholder;
        $(this.jTextArea).css("display:inline, width:530px");
        $(this.jTextArea).addClass("form-control");
        this.jTextArea.rows = 4;
        this.jTextArea.cols = 50;
        this.jLabel.appendChild(this.jTextArea);
        this.jTextArea.onchange = function() {
            this.feedbackDiv.innerHTML = "Your answer has not been saved yet!";
            $(this.feedbackDiv).removeClass("alert-success");
            $(this.feedbackDiv).addClass("alert alert-danger");
        }.bind(this);
        this.fieldSet.appendChild(document.createElement("br"));
        if (this.mathjax) {
            this.renderedAnswer = document.createElement("div");
            $(this.renderedAnswer).addClass("latexoutput");
            this.fieldSet.appendChild(this.renderedAnswer);
        }
        this.buttonDiv = document.createElement("div");
        this.fieldSet.appendChild(this.buttonDiv);
        this.submitButton = document.createElement("button");
        $(this.submitButton).addClass("btn btn-success");
        this.submitButton.type = "button";
        this.submitButton.textContent = "Save";
        this.submitButton.onclick = function() {
            this.checkCurrentAnswer();
            this.logCurrentAnswer();
            this.renderFeedback();
        }.bind(this);
        this.buttonDiv.appendChild(this.submitButton);
        this.randomSpan = document.createElement("span");
        this.randomSpan.innerHTML = "Instructor's Feedback";
        this.fieldSet.appendChild(this.randomSpan);
        this.otherOptionsDiv = document.createElement("div");
        $(this.otherOptionsDiv).css("padding-left:20px");
        $(this.otherOptionsDiv).addClass("journal-options");
        this.fieldSet.appendChild(this.otherOptionsDiv);
        // add a feedback div to give user feedback
        this.feedbackDiv = document.createElement("div");
        //$(this.feedbackDiv).addClass("bg-info form-control");
        //$(this.feedbackDiv).css("width:530px, background-color:#eee, font-style:italic");
        $(this.feedbackDiv).css("width:530px, font-style:italic");
        this.feedbackDiv.id = this.divid + "_feedback";
        this.feedbackDiv.innerHTML = "You have not answered this question yet.";
        $(this.feedbackDiv).addClass("alert alert-danger");
        //this.otherOptionsDiv.appendChild(this.feedbackDiv);
        this.fieldSet.appendChild(this.feedbackDiv);
        if (this.attachment) {
            let attachDiv = document.createElement("div")
            if (this.graderactive ) {
                // If in grading mode make a button to create a popup with the image
                let viewButton = document.createElement("button")
                viewButton.type = "button"
                viewButton.innerHTML = "View Attachment"
                viewButton.onclick = this.viewFile.bind(this);
                attachDiv.appendChild(viewButton);
            } else {
                // Otherwise make a button for the student to select a file to upload.
                this.fileUpload = document.createElement("input")
                this.fileUpload.type = "file";
                this.fileUpload.id = `${this.divid}_fileme`;
                attachDiv.appendChild(this.fileUpload);
            }
            this.containerDiv.appendChild(attachDiv);
        }
        //this.fieldSet.appendChild(document.createElement("br"));
        $(this.origElem).replaceWith(this.containerDiv);
        // This is a stopgap measure for when MathJax is not loaded at all.  There is another
        // more difficult case that when MathJax is loaded asynchronously we will get here
        // before MathJax is loaded.  In that case we will need to implement something
        // like `the solution described here <https://stackoverflow.com/questions/3014018/how-to-detect-when-mathjax-is-fully-loaded>`_
        if (typeof MathJax !== "undefined") {
            this.queueMathJax(this.containerDiv);
        }
    }

    renderMath(value) {
        if (this.mathjax) {
            value = value.replace(/\$\$(.*?)\$\$/g, "\\[ $1 \\]");
            value = value.replace(/\$(.*?)\$/g, "\\( $1 \\)");
            $(this.renderedAnswer).text(value);
            this.queueMathJax(this.renderedAnswer);
        }
    }

    checkCurrentAnswer() {}

    async logCurrentAnswer(sid) {
        let value = $(document.getElementById(this.divid + "_solution")).val();
        this.renderMath(value);
        this.setLocalStorage({
            answer: value,
            timestamp: new Date(),
        });
        let data = {
            event: "shortanswer",
            act: value,
            answer: value,
            div_id: this.divid,
        };
        if (typeof sid !== "undefined") {
            data.sid = sid;
        }
        await this.logBookEvent(data);
        if (this.attachment) {
            await this.uploadFile();
        }
    }

    renderFeedback() {
        this.feedbackDiv.innerHTML = "Your answer has been saved.";
        $(this.feedbackDiv).removeClass("alert-danger");
        $(this.feedbackDiv).addClass("alert alert-success");
    }
    setLocalStorage(data) {
        if (!this.graderactive) {
            let key = this.localStorageKey();
            localStorage.setItem(key, JSON.stringify(data));
        }
    }
    checkLocalStorage() {
        // Repopulates the short answer text
        // which was stored into local storage.
        var answer = "";
        if (this.graderactive) {
            return;
        }
        var len = localStorage.length;
        if (len > 0) {
            var ex = localStorage.getItem(this.localStorageKey());
            if (ex !== null) {
                try {
                    var storedData = JSON.parse(ex);
                    answer = storedData.answer;
                } catch (err) {
                    // error while parsing; likely due to bad value stored in storage
                    console.log(err.message);
                    localStorage.removeItem(this.localStorageKey());
                    return;
                }
                let solution = $("#" + this.divid + "_solution");
                solution.text(answer);
                this.renderMath(answer);
                this.feedbackDiv.innerHTML =
                    "Your current saved answer is shown above.";
                $(this.feedbackDiv).removeClass("alert-danger");
                $(this.feedbackDiv).addClass("alert alert-success");
            }
        }
    }
    restoreAnswers(data) {
        // Restore answers from storage retrieval done in RunestoneBase
        // sometimes data.answer can be null
        if (!data.answer) {
            data.answer = "";
        }
        this.answer = data.answer;
        this.jTextArea.value = this.answer;
        this.renderMath(this.answer);

        let p = document.createElement("p");
        this.jInputDiv.appendChild(p);
        var tsString = "";
        if (data.timestamp) {
            tsString = new Date(data.timestamp).toLocaleString();
        } else {
            tsString = "";
        }
        $(p).text(tsString);
        if (data.last_answer) {
            this.current_answer = "ontime";
            let toggle_answer_button = document.createElement("button");
            toggle_answer_button.type = "button";
            $(toggle_answer_button).text("Show Late Answer");
            $(toggle_answer_button).addClass("btn btn-warning");
            $(toggle_answer_button).css("margin-left", "5px");

            $(toggle_answer_button).click(
                function() {
                    var display_timestamp, button_text;
                    if (this.current_answer === "ontime") {
                        this.jTextArea.value = data.last_answer;
                        this.answer = data.last_answer;
                        display_timestamp = new Date(
                            data.last_timestamp
                        ).toLocaleString();
                        button_text = "Show on-Time Answer";
                        this.current_answer = "late";
                    } else {
                        this.jTextArea.value = data.answer;
                        this.answer = data.answer;
                        display_timestamp = tsString;
                        button_text = "Show Late Answer";
                        this.current_answer = "ontime";
                    }
                    this.renderMath(this.answer);
                    $(p).text(`Submitted: ${display_timestamp}`);
                    $(toggle_answer_button).text(button_text);
                }.bind(this)
            );

            this.buttonDiv.appendChild(toggle_answer_button);
        }
        let feedbackStr = "Your current saved answer is shown above.";
        if (typeof data.score !== "undefined") {
            feedbackStr = `Score: ${data.score}`;
        }
        if (data.comment) {
            feedbackStr += ` -- ${data.comment}`;
        }
        this.feedbackDiv.innerHTML = feedbackStr;

        $(this.feedbackDiv).removeClass("alert-danger");
        $(this.feedbackDiv).addClass("alert alert-success");
    }

    disableInteraction() {
        this.jTextArea.disabled = true;
    }

    async uploadFile() {
        const files = this.fileUpload.files
        const data = new FormData()
        if (this.fileUpload.files.length > 0) {
            data.append('file', files[0])
            fetch(`/ns/logger/upload/${this.divid}`, {
                    method: 'POST',
                    body: data
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                    console.error(error)
                })
            }
    }

    viewFile() {
        // Get the URL from the S3 API -- saved when we display in grader mode
        if (this.attachURL) {
            //window.open(this.attachURL, "_blank");
            const image_window = window.open("", "_blank")
            image_window.document.write(`
                  <html>
                    <head>
                    </head>
                    <body>
                      <img src="${this.attachURL}" alt="Attachment" >
                    </body>
                  </html>
            `);
        } else {
            alert("No attachment for this student.")
        }
    }
}

/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
$(document).on("runestone:login-complete", function() {
    $("[data-component=shortanswer]").each(function() {
        if ($(this).closest("[data-component=timedAssessment]").length == 0) {
            // If this element exists within a timed component, don't render it here
            try {
                saList[this.id] = new ShortAnswer({
                    orig: this,
                    useRunestoneServices: eBookConfig.useRunestoneServices,
                });
            } catch (err) {
                console.log(`Error rendering ShortAnswer Problem ${this.id}
                Details: ${err}`);
            }
        }
    });
});


/***/ }),

/***/ 87483:
/*!*******************************************************!*\
  !*** ./runestone/shortanswer/js/timed_shortanswer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimedShortAnswer)
/* harmony export */ });
/* harmony import */ var _shortanswer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortanswer.js */ 67230);


class TimedShortAnswer extends _shortanswer_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
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
        return "I"; // we ignore this in the grading
    }
    hideFeedback() {
        $(this.feedbackDiv).hide();
    }
}

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}

window.component_factory.shortanswer = function (opts) {
    if (opts.timed) {
        return new TimedShortAnswer(opts);
    }
    return new _shortanswer_js__WEBPACK_IMPORTED_MODULE_0__["default"](opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX3Nob3J0YW5zd2VyX2pzX3RpbWVkX3Nob3J0YW5zd2VyX2pzLmI4ZjBhNzlkZjRkMjRkZTUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2RDtBQUMzQjs7QUFFM0I7QUFDUCx1Q0FBdUM7O0FBRXhCLDBCQUEwQixtRUFBYTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxrQkFBa0I7QUFDOUQ7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0Esa0NBQWtDLGFBQWE7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVztBQUNsRDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZUFBZTtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxtRUFBbUU7QUFDbkUsMkJBQTJCLElBQUk7QUFDL0I7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDelcwQzs7QUFFNUIsK0JBQStCLHVEQUFXO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1REFBVztBQUMxQiIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvc2hvcnRhbnN3ZXIvY3NzL3Nob3J0YW5zd2VyLmNzcz9kZmI0Iiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvc2hvcnRhbnN3ZXIvanMvc2hvcnRhbnN3ZXIuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9zaG9ydGFuc3dlci9qcy90aW1lZF9zaG9ydGFuc3dlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PT09PSAgICBNYXN0ZXIgc2hvcnRhbnN3ZXIuanMgICAgPT09PT09PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT0gICAgIFRoaXMgZmlsZSBjb250YWlucyB0aGUgSlMgZm9yICAgID09PVxuPT09IHRoZSBSdW5lc3RvbmUgc2hvcnRhbnN3ZXIgY29tcG9uZW50LiA9PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT0gICAgICAgICAgICAgIENyZWF0ZWQgYnkgICAgICAgICAgICAgID09PVxuPT09ICAgICAgICAgICBJc2FpYWggTWF5ZXJjaGFrICAgICAgICAgICA9PT1cbj09PSAgICAgICAgICAgICAgICA3LzIvMTUgICAgICAgICAgICAgICAgPT09XG49PT0gICAgICAgICAgICAgIEJyYWQgTWlsbGVyICAgICAgICAgICAgID09PVxuPT09ICAgICAgICAgICAgICAgIDIwMTkgICAgICAgICAgICAgICAgICA9PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZS5qc1wiO1xuaW1wb3J0IFwiLi8uLi9jc3Mvc2hvcnRhbnN3ZXIuY3NzXCI7XG5cbmV4cG9ydCB2YXIgc2FMaXN0O1xuaWYgKHNhTGlzdCA9PT0gdW5kZWZpbmVkKSBzYUxpc3QgPSB7fTsgLy8gRGljdGlvbmFyeSB0aGF0IGNvbnRhaW5zIGFsbCBpbnN0YW5jZXMgb2Ygc2hvcnRhbnN3ZXIgb2JqZWN0c1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydEFuc3dlciBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIob3B0cyk7XG4gICAgICAgIGlmIChvcHRzKSB7XG4gICAgICAgICAgICB2YXIgb3JpZyA9IG9wdHMub3JpZzsgLy8gZW50aXJlIDxwPiBlbGVtZW50IHRoYXQgd2lsbCBiZSByZXBsYWNlZCBieSBuZXcgSFRNTFxuICAgICAgICAgICAgdGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcyA9XG4gICAgICAgICAgICAgICAgb3B0cy51c2VSdW5lc3RvbmVTZXJ2aWNlcyB8fCBlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcztcbiAgICAgICAgICAgIHRoaXMub3JpZ0VsZW0gPSBvcmlnO1xuICAgICAgICAgICAgdGhpcy5kaXZpZCA9IG9yaWcuaWQ7XG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uID0gdGhpcy5vcmlnRWxlbS5pbm5lckhUTUw7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbmFsID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaFVSTCA9IG9wdHMuYXR0YWNoVVJMO1xuICAgICAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1vcHRpb25hbF1cIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbmFsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmlzKFwiW2RhdGEtbWF0aGpheF1cIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdGhqYXggPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1hdHRhY2htZW50XVwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNobWVudCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID1cbiAgICAgICAgICAgICAgICAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJwbGFjZWhvbGRlclwiKSB8fFxuICAgICAgICAgICAgICAgIFwiV3JpdGUgeW91ciBhbnN3ZXIgaGVyZVwiO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJIVE1MKCk7XG4gICAgICAgICAgICB0aGlzLmNhcHRpb24gPSBcInNob3J0YW5zd2VyXCI7XG4gICAgICAgICAgICB0aGlzLmFkZENhcHRpb24oXCJydW5lc3RvbmVcIik7XG4gICAgICAgICAgICB0aGlzLmNoZWNrU2VydmVyKFwic2hvcnRhbnN3ZXJcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFByaXNtICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgUHJpc20uaGlnaGxpZ2h0QWxsVW5kZXIodGhpcy5jb250YWluZXJEaXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVySFRNTCgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5pZCA9IHRoaXMuZGl2aWQ7XG4gICAgICAgICQodGhpcy5jb250YWluZXJEaXYpLmFkZENsYXNzKHRoaXMub3JpZ0VsZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikpO1xuICAgICAgICB0aGlzLm5ld0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgdGhpcy5uZXdGb3JtLmlkID0gdGhpcy5kaXZpZCArIFwiX2pvdXJuYWxcIjtcbiAgICAgICAgdGhpcy5uZXdGb3JtLm5hbWUgPSB0aGlzLm5ld0Zvcm0uaWQ7XG4gICAgICAgIHRoaXMubmV3Rm9ybS5hY3Rpb24gPSBcIlwiO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLm5ld0Zvcm0pO1xuICAgICAgICB0aGlzLmZpZWxkU2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuICAgICAgICB0aGlzLm5ld0Zvcm0uYXBwZW5kQ2hpbGQodGhpcy5maWVsZFNldCk7XG4gICAgICAgIHRoaXMuZmlyc3RMZWdlbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmZpcnN0TGVnZW5kRGl2LmlubmVySFRNTCA9IHRoaXMucXVlc3Rpb247XG4gICAgICAgICQodGhpcy5maXJzdExlZ2VuZERpdikuYWRkQ2xhc3MoXCJqb3VybmFsLXF1ZXN0aW9uXCIpO1xuICAgICAgICB0aGlzLmZpZWxkU2V0LmFwcGVuZENoaWxkKHRoaXMuZmlyc3RMZWdlbmREaXYpO1xuICAgICAgICB0aGlzLmpJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuaklucHV0RGl2LmlkID0gdGhpcy5kaXZpZCArIFwiX2pvdXJuYWxfaW5wdXRcIjtcbiAgICAgICAgdGhpcy5maWVsZFNldC5hcHBlbmRDaGlsZCh0aGlzLmpJbnB1dERpdik7XG4gICAgICAgIHRoaXMuak9wdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAkKHRoaXMuak9wdGlvbnNEaXYpLmFkZENsYXNzKFwiam91cm5hbC1vcHRpb25zXCIpO1xuICAgICAgICB0aGlzLmpJbnB1dERpdi5hcHBlbmRDaGlsZCh0aGlzLmpPcHRpb25zRGl2KTtcbiAgICAgICAgdGhpcy5qTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICQodGhpcy5qTGFiZWwpLmFkZENsYXNzKFwicmFkaW8taW5saW5lXCIpO1xuICAgICAgICB0aGlzLmpPcHRpb25zRGl2LmFwcGVuZENoaWxkKHRoaXMuakxhYmVsKTtcbiAgICAgICAgdGhpcy5qVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5qVGV4dEFyZWEub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuaXNBbnN3ZXJlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMualRleHRBcmVhLmlkID0gdGhpcy5kaXZpZCArIFwiX3NvbHV0aW9uXCI7XG4gICAgICAgICQodGhpcy5qVGV4dEFyZWEpLmF0dHIoXCJhcmlhLWxhYmVsXCIsIFwidGV4dGFyZWFcIik7XG4gICAgICAgIHRoaXMualRleHRBcmVhLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgICAgJCh0aGlzLmpUZXh0QXJlYSkuY3NzKFwiZGlzcGxheTppbmxpbmUsIHdpZHRoOjUzMHB4XCIpO1xuICAgICAgICAkKHRoaXMualRleHRBcmVhKS5hZGRDbGFzcyhcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgdGhpcy5qVGV4dEFyZWEucm93cyA9IDQ7XG4gICAgICAgIHRoaXMualRleHRBcmVhLmNvbHMgPSA1MDtcbiAgICAgICAgdGhpcy5qTGFiZWwuYXBwZW5kQ2hpbGQodGhpcy5qVGV4dEFyZWEpO1xuICAgICAgICB0aGlzLmpUZXh0QXJlYS5vbmNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFja0Rpdi5pbm5lckhUTUwgPSBcIllvdXIgYW5zd2VyIGhhcyBub3QgYmVlbiBzYXZlZCB5ZXQhXCI7XG4gICAgICAgICAgICAkKHRoaXMuZmVlZGJhY2tEaXYpLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICQodGhpcy5mZWVkYmFja0RpdikuYWRkQ2xhc3MoXCJhbGVydCBhbGVydC1kYW5nZXJcIik7XG4gICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5maWVsZFNldC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgICAgICBpZiAodGhpcy5tYXRoamF4KSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkQW5zd2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICQodGhpcy5yZW5kZXJlZEFuc3dlcikuYWRkQ2xhc3MoXCJsYXRleG91dHB1dFwiKTtcbiAgICAgICAgICAgIHRoaXMuZmllbGRTZXQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlZEFuc3dlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmZpZWxkU2V0LmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uRGl2KTtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAkKHRoaXMuc3VibWl0QnV0dG9uKS5hZGRDbGFzcyhcImJ0biBidG4tc3VjY2Vzc1wiKTtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tDdXJyZW50QW5zd2VyKCk7XG4gICAgICAgICAgICB0aGlzLmxvZ0N1cnJlbnRBbnN3ZXIoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRmVlZGJhY2soKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJ1dHRvbkRpdi5hcHBlbmRDaGlsZCh0aGlzLnN1Ym1pdEJ1dHRvbik7XG4gICAgICAgIHRoaXMucmFuZG9tU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB0aGlzLnJhbmRvbVNwYW4uaW5uZXJIVE1MID0gXCJJbnN0cnVjdG9yJ3MgRmVlZGJhY2tcIjtcbiAgICAgICAgdGhpcy5maWVsZFNldC5hcHBlbmRDaGlsZCh0aGlzLnJhbmRvbVNwYW4pO1xuICAgICAgICB0aGlzLm90aGVyT3B0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICQodGhpcy5vdGhlck9wdGlvbnNEaXYpLmNzcyhcInBhZGRpbmctbGVmdDoyMHB4XCIpO1xuICAgICAgICAkKHRoaXMub3RoZXJPcHRpb25zRGl2KS5hZGRDbGFzcyhcImpvdXJuYWwtb3B0aW9uc1wiKTtcbiAgICAgICAgdGhpcy5maWVsZFNldC5hcHBlbmRDaGlsZCh0aGlzLm90aGVyT3B0aW9uc0Rpdik7XG4gICAgICAgIC8vIGFkZCBhIGZlZWRiYWNrIGRpdiB0byBnaXZlIHVzZXIgZmVlZGJhY2tcbiAgICAgICAgdGhpcy5mZWVkYmFja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIC8vJCh0aGlzLmZlZWRiYWNrRGl2KS5hZGRDbGFzcyhcImJnLWluZm8gZm9ybS1jb250cm9sXCIpO1xuICAgICAgICAvLyQodGhpcy5mZWVkYmFja0RpdikuY3NzKFwid2lkdGg6NTMwcHgsIGJhY2tncm91bmQtY29sb3I6I2VlZSwgZm9udC1zdHlsZTppdGFsaWNcIik7XG4gICAgICAgICQodGhpcy5mZWVkYmFja0RpdikuY3NzKFwid2lkdGg6NTMwcHgsIGZvbnQtc3R5bGU6aXRhbGljXCIpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrRGl2LmlkID0gdGhpcy5kaXZpZCArIFwiX2ZlZWRiYWNrXCI7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tEaXYuaW5uZXJIVE1MID0gXCJZb3UgaGF2ZSBub3QgYW5zd2VyZWQgdGhpcyBxdWVzdGlvbiB5ZXQuXCI7XG4gICAgICAgICQodGhpcy5mZWVkYmFja0RpdikuYWRkQ2xhc3MoXCJhbGVydCBhbGVydC1kYW5nZXJcIik7XG4gICAgICAgIC8vdGhpcy5vdGhlck9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQodGhpcy5mZWVkYmFja0Rpdik7XG4gICAgICAgIHRoaXMuZmllbGRTZXQuYXBwZW5kQ2hpbGQodGhpcy5mZWVkYmFja0Rpdik7XG4gICAgICAgIGlmICh0aGlzLmF0dGFjaG1lbnQpIHtcbiAgICAgICAgICAgIGxldCBhdHRhY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICBpZiAodGhpcy5ncmFkZXJhY3RpdmUgKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgaW4gZ3JhZGluZyBtb2RlIG1ha2UgYSBidXR0b24gdG8gY3JlYXRlIGEgcG9wdXAgd2l0aCB0aGUgaW1hZ2VcbiAgICAgICAgICAgICAgICBsZXQgdmlld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgICAgICAgICB2aWV3QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdmlld0J1dHRvbi5pbm5lckhUTUwgPSBcIlZpZXcgQXR0YWNobWVudFwiXG4gICAgICAgICAgICAgICAgdmlld0J1dHRvbi5vbmNsaWNrID0gdGhpcy52aWV3RmlsZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIGF0dGFjaERpdi5hcHBlbmRDaGlsZCh2aWV3QnV0dG9uKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIG1ha2UgYSBidXR0b24gZm9yIHRoZSBzdHVkZW50IHRvIHNlbGVjdCBhIGZpbGUgdG8gdXBsb2FkLlxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZVVwbG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZVVwbG9hZC50eXBlID0gXCJmaWxlXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlVXBsb2FkLmlkID0gYCR7dGhpcy5kaXZpZH1fZmlsZW1lYDtcbiAgICAgICAgICAgICAgICBhdHRhY2hEaXYuYXBwZW5kQ2hpbGQodGhpcy5maWxlVXBsb2FkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGF0dGFjaERpdik7XG4gICAgICAgIH1cbiAgICAgICAgLy90aGlzLmZpZWxkU2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgICAgICQodGhpcy5vcmlnRWxlbSkucmVwbGFjZVdpdGgodGhpcy5jb250YWluZXJEaXYpO1xuICAgICAgICAvLyBUaGlzIGlzIGEgc3RvcGdhcCBtZWFzdXJlIGZvciB3aGVuIE1hdGhKYXggaXMgbm90IGxvYWRlZCBhdCBhbGwuICBUaGVyZSBpcyBhbm90aGVyXG4gICAgICAgIC8vIG1vcmUgZGlmZmljdWx0IGNhc2UgdGhhdCB3aGVuIE1hdGhKYXggaXMgbG9hZGVkIGFzeW5jaHJvbm91c2x5IHdlIHdpbGwgZ2V0IGhlcmVcbiAgICAgICAgLy8gYmVmb3JlIE1hdGhKYXggaXMgbG9hZGVkLiAgSW4gdGhhdCBjYXNlIHdlIHdpbGwgbmVlZCB0byBpbXBsZW1lbnQgc29tZXRoaW5nXG4gICAgICAgIC8vIGxpa2UgYHRoZSBzb2x1dGlvbiBkZXNjcmliZWQgaGVyZSA8aHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzAxNDAxOC9ob3ctdG8tZGV0ZWN0LXdoZW4tbWF0aGpheC1pcy1mdWxseS1sb2FkZWQ+YF9cbiAgICAgICAgaWYgKHR5cGVvZiBNYXRoSmF4ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlTWF0aEpheCh0aGlzLmNvbnRhaW5lckRpdik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJNYXRoKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLm1hdGhqYXgpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFwkXFwkKC4qPylcXCRcXCQvZywgXCJcXFxcWyAkMSBcXFxcXVwiKTtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFwkKC4qPylcXCQvZywgXCJcXFxcKCAkMSBcXFxcKVwiKTtcbiAgICAgICAgICAgICQodGhpcy5yZW5kZXJlZEFuc3dlcikudGV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlTWF0aEpheCh0aGlzLnJlbmRlcmVkQW5zd2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQ3VycmVudEFuc3dlcigpIHt9XG5cbiAgICBhc3luYyBsb2dDdXJyZW50QW5zd2VyKHNpZCkge1xuICAgICAgICBsZXQgdmFsdWUgPSAkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZGl2aWQgKyBcIl9zb2x1dGlvblwiKSkudmFsKCk7XG4gICAgICAgIHRoaXMucmVuZGVyTWF0aCh2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKHtcbiAgICAgICAgICAgIGFuc3dlcjogdmFsdWUsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCksXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGV2ZW50OiBcInNob3J0YW5zd2VyXCIsXG4gICAgICAgICAgICBhY3Q6IHZhbHVlLFxuICAgICAgICAgICAgYW5zd2VyOiB2YWx1ZSxcbiAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHR5cGVvZiBzaWQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGRhdGEuc2lkID0gc2lkO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMubG9nQm9va0V2ZW50KGRhdGEpO1xuICAgICAgICBpZiAodGhpcy5hdHRhY2htZW50KSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnVwbG9hZEZpbGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckZlZWRiYWNrKCkge1xuICAgICAgICB0aGlzLmZlZWRiYWNrRGl2LmlubmVySFRNTCA9IFwiWW91ciBhbnN3ZXIgaGFzIGJlZW4gc2F2ZWQuXCI7XG4gICAgICAgICQodGhpcy5mZWVkYmFja0RpdikucmVtb3ZlQ2xhc3MoXCJhbGVydC1kYW5nZXJcIik7XG4gICAgICAgICQodGhpcy5mZWVkYmFja0RpdikuYWRkQ2xhc3MoXCJhbGVydCBhbGVydC1zdWNjZXNzXCIpO1xuICAgIH1cbiAgICBzZXRMb2NhbFN0b3JhZ2UoZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMuZ3JhZGVyYWN0aXZlKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5sb2NhbFN0b3JhZ2VLZXkoKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICAvLyBSZXBvcHVsYXRlcyB0aGUgc2hvcnQgYW5zd2VyIHRleHRcbiAgICAgICAgLy8gd2hpY2ggd2FzIHN0b3JlZCBpbnRvIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgIHZhciBhbnN3ZXIgPSBcIlwiO1xuICAgICAgICBpZiAodGhpcy5ncmFkZXJhY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGVuID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgICAgIHZhciBleCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpO1xuICAgICAgICAgICAgaWYgKGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlZERhdGEgPSBKU09OLnBhcnNlKGV4KTtcbiAgICAgICAgICAgICAgICAgICAgYW5zd2VyID0gc3RvcmVkRGF0YS5hbnN3ZXI7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVycm9yIHdoaWxlIHBhcnNpbmc7IGxpa2VseSBkdWUgdG8gYmFkIHZhbHVlIHN0b3JlZCBpbiBzdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHNvbHV0aW9uID0gJChcIiNcIiArIHRoaXMuZGl2aWQgKyBcIl9zb2x1dGlvblwiKTtcbiAgICAgICAgICAgICAgICBzb2x1dGlvbi50ZXh0KGFuc3dlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJNYXRoKGFuc3dlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkYmFja0Rpdi5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICBcIllvdXIgY3VycmVudCBzYXZlZCBhbnN3ZXIgaXMgc2hvd24gYWJvdmUuXCI7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmZlZWRiYWNrRGl2KS5yZW1vdmVDbGFzcyhcImFsZXJ0LWRhbmdlclwiKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMuZmVlZGJhY2tEaXYpLmFkZENsYXNzKFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN0b3JlQW5zd2VycyhkYXRhKSB7XG4gICAgICAgIC8vIFJlc3RvcmUgYW5zd2VycyBmcm9tIHN0b3JhZ2UgcmV0cmlldmFsIGRvbmUgaW4gUnVuZXN0b25lQmFzZVxuICAgICAgICAvLyBzb21ldGltZXMgZGF0YS5hbnN3ZXIgY2FuIGJlIG51bGxcbiAgICAgICAgaWYgKCFkYXRhLmFuc3dlcikge1xuICAgICAgICAgICAgZGF0YS5hbnN3ZXIgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5zd2VyID0gZGF0YS5hbnN3ZXI7XG4gICAgICAgIHRoaXMualRleHRBcmVhLnZhbHVlID0gdGhpcy5hbnN3ZXI7XG4gICAgICAgIHRoaXMucmVuZGVyTWF0aCh0aGlzLmFuc3dlcik7XG5cbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGhpcy5qSW5wdXREaXYuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIHZhciB0c1N0cmluZyA9IFwiXCI7XG4gICAgICAgIGlmIChkYXRhLnRpbWVzdGFtcCkge1xuICAgICAgICAgICAgdHNTdHJpbmcgPSBuZXcgRGF0ZShkYXRhLnRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRzU3RyaW5nID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICAkKHApLnRleHQodHNTdHJpbmcpO1xuICAgICAgICBpZiAoZGF0YS5sYXN0X2Fuc3dlcikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50X2Fuc3dlciA9IFwib250aW1lXCI7XG4gICAgICAgICAgICBsZXQgdG9nZ2xlX2Fuc3dlcl9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgdG9nZ2xlX2Fuc3dlcl9idXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICAkKHRvZ2dsZV9hbnN3ZXJfYnV0dG9uKS50ZXh0KFwiU2hvdyBMYXRlIEFuc3dlclwiKTtcbiAgICAgICAgICAgICQodG9nZ2xlX2Fuc3dlcl9idXR0b24pLmFkZENsYXNzKFwiYnRuIGJ0bi13YXJuaW5nXCIpO1xuICAgICAgICAgICAgJCh0b2dnbGVfYW5zd2VyX2J1dHRvbikuY3NzKFwibWFyZ2luLWxlZnRcIiwgXCI1cHhcIik7XG5cbiAgICAgICAgICAgICQodG9nZ2xlX2Fuc3dlcl9idXR0b24pLmNsaWNrKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzcGxheV90aW1lc3RhbXAsIGJ1dHRvbl90ZXh0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50X2Fuc3dlciA9PT0gXCJvbnRpbWVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qVGV4dEFyZWEudmFsdWUgPSBkYXRhLmxhc3RfYW5zd2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXIgPSBkYXRhLmxhc3RfYW5zd2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV90aW1lc3RhbXAgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmxhc3RfdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICAgICAgICApLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25fdGV4dCA9IFwiU2hvdyBvbi1UaW1lIEFuc3dlclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50X2Fuc3dlciA9IFwibGF0ZVwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qVGV4dEFyZWEudmFsdWUgPSBkYXRhLmFuc3dlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyID0gZGF0YS5hbnN3ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X3RpbWVzdGFtcCA9IHRzU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uX3RleHQgPSBcIlNob3cgTGF0ZSBBbnN3ZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudF9hbnN3ZXIgPSBcIm9udGltZVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyTWF0aCh0aGlzLmFuc3dlcik7XG4gICAgICAgICAgICAgICAgICAgICQocCkudGV4dChgU3VibWl0dGVkOiAke2Rpc3BsYXlfdGltZXN0YW1wfWApO1xuICAgICAgICAgICAgICAgICAgICAkKHRvZ2dsZV9hbnN3ZXJfYnV0dG9uKS50ZXh0KGJ1dHRvbl90ZXh0KTtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHRoaXMuYnV0dG9uRGl2LmFwcGVuZENoaWxkKHRvZ2dsZV9hbnN3ZXJfYnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmVlZGJhY2tTdHIgPSBcIllvdXIgY3VycmVudCBzYXZlZCBhbnN3ZXIgaXMgc2hvd24gYWJvdmUuXCI7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YS5zY29yZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZmVlZGJhY2tTdHIgPSBgU2NvcmU6ICR7ZGF0YS5zY29yZX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmNvbW1lbnQpIHtcbiAgICAgICAgICAgIGZlZWRiYWNrU3RyICs9IGAgLS0gJHtkYXRhLmNvbW1lbnR9YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZlZWRiYWNrRGl2LmlubmVySFRNTCA9IGZlZWRiYWNrU3RyO1xuXG4gICAgICAgICQodGhpcy5mZWVkYmFja0RpdikucmVtb3ZlQ2xhc3MoXCJhbGVydC1kYW5nZXJcIik7XG4gICAgICAgICQodGhpcy5mZWVkYmFja0RpdikuYWRkQ2xhc3MoXCJhbGVydCBhbGVydC1zdWNjZXNzXCIpO1xuICAgIH1cblxuICAgIGRpc2FibGVJbnRlcmFjdGlvbigpIHtcbiAgICAgICAgdGhpcy5qVGV4dEFyZWEuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGFzeW5jIHVwbG9hZEZpbGUoKSB7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlVXBsb2FkLmZpbGVzXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICBpZiAodGhpcy5maWxlVXBsb2FkLmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgZmlsZXNbMF0pXG4gICAgICAgICAgICBmZXRjaChgL25zL2xvZ2dlci91cGxvYWQvJHt0aGlzLmRpdmlkfWAsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGRhdGFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICB2aWV3RmlsZSgpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBVUkwgZnJvbSB0aGUgUzMgQVBJIC0tIHNhdmVkIHdoZW4gd2UgZGlzcGxheSBpbiBncmFkZXIgbW9kZVxuICAgICAgICBpZiAodGhpcy5hdHRhY2hVUkwpIHtcbiAgICAgICAgICAgIC8vd2luZG93Lm9wZW4odGhpcy5hdHRhY2hVUkwsIFwiX2JsYW5rXCIpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2Vfd2luZG93ID0gd2luZG93Lm9wZW4oXCJcIiwgXCJfYmxhbmtcIilcbiAgICAgICAgICAgIGltYWdlX3dpbmRvdy5kb2N1bWVudC53cml0ZShgXG4gICAgICAgICAgICAgICAgICA8aHRtbD5cbiAgICAgICAgICAgICAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvaGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3RoaXMuYXR0YWNoVVJMfVwiIGFsdD1cIkF0dGFjaG1lbnRcIiA+XG4gICAgICAgICAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgICAgICAgICAgIDwvaHRtbD5cbiAgICAgICAgICAgIGApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJObyBhdHRhY2htZW50IGZvciB0aGlzIHN0dWRlbnQuXCIpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PSBGaW5kIHRoZSBjdXN0b20gSFRNTCB0YWdzIGFuZCA9PVxuPT0gICBleGVjdXRlIG91ciBjb2RlIG9uIHRoZW0gICAgPT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4kKGRvY3VtZW50KS5vbihcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PXNob3J0YW5zd2VyXVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5jbG9zZXN0KFwiW2RhdGEtY29tcG9uZW50PXRpbWVkQXNzZXNzbWVudF1cIikubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIC8vIElmIHRoaXMgZWxlbWVudCBleGlzdHMgd2l0aGluIGEgdGltZWQgY29tcG9uZW50LCBkb24ndCByZW5kZXIgaXQgaGVyZVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzYUxpc3RbdGhpcy5pZF0gPSBuZXcgU2hvcnRBbnN3ZXIoe1xuICAgICAgICAgICAgICAgICAgICBvcmlnOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgcmVuZGVyaW5nIFNob3J0QW5zd2VyIFByb2JsZW0gJHt0aGlzLmlkfVxuICAgICAgICAgICAgICAgIERldGFpbHM6ICR7ZXJyfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsImltcG9ydCBTaG9ydEFuc3dlciBmcm9tIFwiLi9zaG9ydGFuc3dlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lZFNob3J0QW5zd2VyIGV4dGVuZHMgU2hvcnRBbnN3ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIob3B0cyk7XG4gICAgICAgIHRoaXMucmVuZGVyVGltZWRJY29uKHRoaXMuY29udGFpbmVyRGl2KTtcbiAgICAgICAgdGhpcy5oaWRlQnV0dG9ucygpO1xuICAgIH1cbiAgICBoaWRlQnV0dG9ucygpIHtcbiAgICAgICAgJCh0aGlzLnN1Ym1pdEJ1dHRvbikuaGlkZSgpO1xuICAgIH1cbiAgICByZW5kZXJUaW1lZEljb24oY29tcG9uZW50KSB7XG4gICAgICAgIC8vIHJlbmRlcnMgdGhlIGNsb2NrIGljb24gb24gdGltZWQgY29tcG9uZW50cy4gICAgVGhlIGNvbXBvbmVudCBwYXJhbWV0ZXJcbiAgICAgICAgLy8gaXMgdGhlIGVsZW1lbnQgdGhhdCB0aGUgaWNvbiBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAgICAgIHZhciB0aW1lSWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciB0aW1lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICQodGltZUljb24pLmF0dHIoe1xuICAgICAgICAgICAgc3JjOiBcIi4uL19zdGF0aWMvY2xvY2sucG5nXCIsXG4gICAgICAgICAgICBzdHlsZTogXCJ3aWR0aDoxNXB4O2hlaWdodDoxNXB4XCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aW1lSWNvbkRpdi5jbGFzc05hbWUgPSBcInRpbWVUaXBcIjtcbiAgICAgICAgdGltZUljb25EaXYudGl0bGUgPSBcIlwiO1xuICAgICAgICB0aW1lSWNvbkRpdi5hcHBlbmRDaGlsZCh0aW1lSWNvbik7XG4gICAgICAgICQoY29tcG9uZW50KS5wcmVwZW5kKHRpbWVJY29uRGl2KTtcbiAgICB9XG4gICAgY2hlY2tDb3JyZWN0VGltZWQoKSB7XG4gICAgICAgIHJldHVybiBcIklcIjsgLy8gd2UgaWdub3JlIHRoaXMgaW4gdGhlIGdyYWRpbmdcbiAgICB9XG4gICAgaGlkZUZlZWRiYWNrKCkge1xuICAgICAgICAkKHRoaXMuZmVlZGJhY2tEaXYpLmhpZGUoKTtcbiAgICB9XG59XG5cbmlmICh0eXBlb2Ygd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID0ge307XG59XG5cbndpbmRvdy5jb21wb25lbnRfZmFjdG9yeS5zaG9ydGFuc3dlciA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgaWYgKG9wdHMudGltZWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lZFNob3J0QW5zd2VyKG9wdHMpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFNob3J0QW5zd2VyKG9wdHMpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
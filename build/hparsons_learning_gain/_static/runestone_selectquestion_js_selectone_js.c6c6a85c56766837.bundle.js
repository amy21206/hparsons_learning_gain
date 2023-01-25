"use strict";
(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_selectquestion_js_selectone_js"],{

/***/ 52675:
/*!*********************************************************!*\
  !*** ./runestone/selectquestion/css/selectquestion.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 72773:
/*!************************************************!*\
  !*** ./runestone/common/js/renderComponent.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTimedComponent": () => (/* binding */ createTimedComponent),
/* harmony export */   "renderRunestoneComponent": () => (/* binding */ renderRunestoneComponent)
/* harmony export */ });
/* harmony import */ var _webpack_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../webpack.index.js */ 36350);


async function renderRunestoneComponent(componentSrc, whereDiv, moreOpts) {
    /**
     *  The easy part is adding the componentSrc to the existing div.
     *  The tedious part is calling the right functions to turn the
     *  source into the actual component.
     */
    if (!componentSrc) {
        jQuery(`#${whereDiv}`).html(`<p>Sorry, no source is available for preview.</p>`);
        return;
    }
    let patt = /..\/_images/g;
    componentSrc = componentSrc.replace(
        patt,
        `${eBookConfig.app}/books/published/${eBookConfig.basecourse}/_images`
    );
    jQuery(`#${whereDiv}`).html(componentSrc);

    if (typeof window.edList === "undefined") {
        window.edList = {};
    }

    let componentKind = $($(`#${whereDiv} [data-component]`)[0]).data(
        "component"
    );
    // Import the JavaScript for this component before proceeding.
    await (0,_webpack_index_js__WEBPACK_IMPORTED_MODULE_0__.runestone_import)(componentKind);
    let opt = {};
    opt.orig = jQuery(`#${whereDiv} [data-component]`)[0];
    if (opt.orig) {
        opt.lang = $(opt.orig).data("lang");
        opt.useRunestoneServices = true;
        opt.graderactive = false;
        opt.python3 = true;
        if (typeof moreOpts !== "undefined") {
            for (let key in moreOpts) {
                opt[key] = moreOpts[key];
            }
        }
    }

    if (typeof component_factory === "undefined") {
        alert(
            "Error:  Missing the component factory!"
        );
    } else {
        if (
            !window.component_factory[componentKind] &&
            !jQuery(`#${whereDiv}`).html()
        ) {
            jQuery(`#${whereDiv}`).html(
                `<p>Preview not available for ${componentKind}</p>`
            );
        } else {
            let res = window.component_factory[componentKind](opt);
            if (componentKind === "activecode") {
                if (moreOpts.multiGrader) {
                    window.edList[
                        `${moreOpts.gradingContainer} ${res.divid}`
                    ] = res;
                } else {
                    window.edList[res.divid] = res;
                }
            }
        }
    }
}

function createTimedComponent(componentSrc, moreOpts) {
    /* The important distinction is that the component does not really need to be rendered
    into the page, in fact, due to the async nature of getting the source the list of questions
    is made and the original html is replaced by the look of the exam.
    */

    let patt = /..\/_images/g;
    componentSrc = componentSrc.replace(
        patt,
        `${eBookConfig.app}/books/published/${eBookConfig.basecourse}/_images`
    );

    let componentKind = $($(componentSrc).find("[data-component]")[0]).data(
        "component"
    );

    let origId = $(componentSrc).find("[data-component]").first().attr("id");

    // Double check -- if the component source is not in the DOM, then briefly add it
    // and call the constructor.
    let hdiv;
    if (!document.getElementById(origId)) {
        hdiv = $("<div/>", {
            css: { display: "none" },
        }).appendTo("body");
        hdiv.html(componentSrc);
    }
    // at this point hdiv is a jquery object

    let ret;
    let opts = {
        orig: document.getElementById(origId),
        timed: true,
    };
    if (typeof moreOpts !== "undefined") {
        for (let key in moreOpts) {
            opts[key] = moreOpts[key];
        }
    }

    if (componentKind in window.component_factory) {
        ret = window.component_factory[componentKind](opts);
    }

    let rdict = {};
    rdict.question = ret;
    return rdict;
}


/***/ }),

/***/ 63931:
/*!**************************************************!*\
  !*** ./runestone/selectquestion/js/selectone.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectOne)
/* harmony export */ });
/* harmony import */ var _common_js_renderComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/renderComponent.js */ 72773);
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _css_selectquestion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/selectquestion.css */ 52675);
/**
 * *******************************
 * |docname| - SelectOne Component
 * *******************************
 */




class SelectOne extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * constructor --
     * Making an instance of a selectone is a bit more complicated because it is
     * a kind of meta directive.  That is, go to the server and randomly select
     * a question to display in this spot.  Or, if a student has already seen this question
     * in the context of an exam retrieve the question they saw in the first place.
     * Making an API call and waiting for the response is handled asynchronously.
     * But lots of code is not written with that assumption.  So we do the initialization in
     * two parts.
     * 1. Create the object with the usual constructor
     * 2. call initialize, which returns a promise.  When that promise is resolved
     * the "replacement" component will replace the original selectone component in the DOM.
     *
     * @param  {} opts
     */
    constructor(opts) {
        super(opts);
        this.origOpts = opts;
        this.questions = $(opts.orig).data("questionlist");
        this.proficiency = $(opts.orig).data("proficiency");
        this.minDifficulty = $(opts.orig).data("minDifficulty");
        this.maxDifficulty = $(opts.orig).data("maxDifficulty");
        this.points = $(opts.orig).data("points");
        this.autogradable = $(opts.orig).data("autogradable");
        this.not_seen_ever = $(opts.orig).data("not_seen_ever");
        this.selector_id = $(opts.orig).first().attr("id");
        this.primaryOnly = $(opts.orig).data("primary");
        this.ABExperiment = $(opts.orig).data("ab");
        this.toggleOptions = $(opts.orig).data("toggleoptions");
        this.toggleLabels = $(opts.orig).data("togglelabels");
        this.limitBaseCourse = $(opts.orig).data("limit-basecourse");
        opts.orig.id = this.selector_id;
    }
    /**
     * initialize --
     * initialize is used so that the constructor does not have to be async.
     * Constructors should definitely not return promises that would seriously
     * mess things up.
     * @return {Promise} Will resolve after component from DB is reified
     */
    async initialize() {
        let self = this;
        let data = { selector_id: this.selector_id };
        if (this.questions) {
            data.questions = this.questions;
        } else if (this.proficiency) {
            data.proficiency = this.proficiency;
        }
        if (this.minDifficulty) {
            data.minDifficulty = this.minDifficulty;
        }
        if (this.maxDifficulty) {
            data.maxDifficulty = this.maxDifficulty;
        }
        if (this.points) {
            data.points = this.points;
        }
        if (this.autogradable) {
            data.autogradable = this.autogradable;
        }
        if (this.not_seen_ever) {
            data.not_seen_ever = this.not_seen_ever;
        }
        if (this.primaryOnly) {
            data.primary = this.primaryOnly;
        }
        if (this.ABExperiment) {
            data.AB = this.ABExperiment;
        }
        if (this.timedWrapper) {
            data.timedWrapper = this.timedWrapper;
        }
        if (this.toggleOptions) {
            data.toggleOptions = this.toggleOptions;
        }
        if (this.toggleLabels) {
            data.toggleLabels = this.toggleLabels;
        }
        if (this.limitBaseCourse) {
            data.limitBaseCourse = eBookConfig.basecourse;
        }
        let opts = this.origOpts;
        let selectorId = this.selector_id;
        console.log("getting question source");
        let request = new Request(
            `${eBookConfig.new_server_prefix}/assessment/get_question_source`,
            {
                method: "POST",
                headers: this.jsonHeaders,
                body: JSON.stringify(data),
            }
        );
        let response = await fetch(request);
        let htmlsrc = await response.json();
        htmlsrc = htmlsrc.detail;
        if (htmlsrc.indexOf("No preview") >= 0) {
            alert(
                `Error: Not able to find a question for ${selectorId} based on the criteria`
            );
            throw new Error(`Unable to find a question for ${selectorId}`);
        }
        let res;
        if (opts.timed) {
            // timed components are not rendered immediately, only when the student
            // starts the assessment and visits this particular entry.
            res = (0,_common_js_renderComponent_js__WEBPACK_IMPORTED_MODULE_0__.createTimedComponent)(htmlsrc, {
                timed: true,
                selector_id: selectorId,
                assessmentTaken: opts.assessmentTaken,
            });
            // replace the entry in the timed assessment's list of components
            // with the component created by createTimedComponent
            for (let component of opts.rqa) {
                if (component.question == self) {
                    component.question = res.question;
                    break;
                }
            }
            self.realComponent = res.question;
            self.containerDiv = res.question.containerDiv;
            self.realComponent.selectorId = selectorId;
        } else {
            if (data.toggleOptions) {
                var toggleLabels = data.toggleLabels
                    .replace("togglelabels:", "")
                    .trim();
                if (toggleLabels) {
                    toggleLabels = toggleLabels.split(",");
                    for (var t = 0; t < toggleLabels.length; t++) {
                        toggleLabels[t] = toggleLabels[t].trim();
                    }
                }
                var toggleQuestions = this.questions.split(", ");
                var toggleUI = "";
                // check so that only the first toggle select question on the assignments page has a preview panel created, then all toggle select previews use this same panel
                if (!document.getElementById("component-preview")) {
                    toggleUI +=
                        '<div id="component-preview" class="col-md-6 toggle-preview" style="z-index: 999;">' +
                        '<div id="toggle-buttons"></div>' +
                        '<div id="toggle-preview"></div>' +
                        "</div>";
                }
                // dropdown menu containing the question options
                toggleUI +=
                    '<label for="' +
                    selectorId +
                    '-toggleQuestion" style="margin-left: 10px">Toggle Question:</label><select id="' +
                    selectorId +
                    '-toggleQuestion">';
                var i;
                var toggleQuestionHTMLSrc;
                var toggleQuestionSubstring;
                var toggleQuestionType;
                var toggleQuestionTypes = [];
                for (i = 0; i < toggleQuestions.length; i++) {
                    toggleQuestionHTMLSrc = await this.getToggleSrc(
                        toggleQuestions[i]
                    );
                    toggleQuestionSubstring =
                        toggleQuestionHTMLSrc.split('data-component="')[1];
                    switch (
                        toggleQuestionSubstring.slice(
                            0,
                            toggleQuestionSubstring.indexOf('"')
                        )
                    ) {
                        case "activecode":
                            toggleQuestionType = "Active Write Code";
                            break;
                        case "clickablearea":
                            toggleQuestionType = "Clickable Area";
                            break;
                        case "dragndrop":
                            toggleQuestionType = "Drag n Drop";
                            break;
                        case "fillintheblank":
                            toggleQuestionType = "Fill in the Blank";
                            break;
                        case "multiplechoice":
                            toggleQuestionType = "Multiple Choice";
                            break;
                        case "parsons":
                            toggleQuestionType = "Parsons Mixed-Up Code";
                            break;
                        case "shortanswer":
                            toggleQuestionType = "Short Answer";
                            break;
                    }
                    toggleQuestionTypes[i] = toggleQuestionType;
                    toggleUI += '<option value="' + toggleQuestions[i] + '">';
                    if (toggleLabels) {
                        if (toggleLabels[i]) {
                            toggleUI += toggleLabels[i];
                        } else {
                            toggleUI +=
                                toggleQuestionType + " - " + toggleQuestions[i];
                        }
                    } else {
                        toggleUI +=
                            toggleQuestionType + " - " + toggleQuestions[i];
                    }
                    if (i == 0 && data.toggleOptions.includes("lock")) {
                        toggleUI += " (only this question will be graded)";
                    }
                    toggleUI += "</option>";
                }
                toggleUI +=
                    '</select><div id="' +
                    selectorId +
                    '-toggleSelectedQuestion">';
                var toggleFirstID = htmlsrc.split('id="')[1];
                toggleFirstID = toggleFirstID.split('"')[0];
                htmlsrc = toggleUI + htmlsrc + "</div>";
            }
            // just render this component on the page in its usual place
            await (0,_common_js_renderComponent_js__WEBPACK_IMPORTED_MODULE_0__.renderRunestoneComponent)(htmlsrc, selectorId, {
                selector_id: selectorId,
                is_toggle: this.toggleOptions,
                is_select: true,
                useRunestoneServices: true,
            });
            if (data.toggleOptions) {
                $("#component-preview").hide();
                var toggleQuestionSelect = document.getElementById(
                    selectorId + "-toggleQuestion"
                );
                for (i = 0; i < toggleQuestionSelect.options.length; i++) {
                    if (
                        toggleQuestionSelect.options[i].value == toggleFirstID
                    ) {
                        toggleQuestionSelect.value = toggleFirstID;
                        $("#" + selectorId).data(
                            "toggle_current",
                            toggleFirstID
                        );
                        $("#" + selectorId).data(
                            "toggle_current_type",
                            toggleQuestionTypes[0]
                        );
                        break;
                    }
                }
                toggleQuestionSelect.addEventListener(
                    "change",
                    async function () {
                        await this.togglePreview(
                            toggleQuestionSelect.parentElement.id,
                            data.toggleOptions,
                            toggleQuestionTypes
                        );
                        this.logBookEvent({
                            event: "view_toggle",
                            act: toggleQuestionSelect.value,
                            div_id: toggleQuestionSelect.parentElement.id,
                        });
                    }.bind(this)
                );
            }
        }
        return response;
    }

    // retrieve html source of a question, for use in various toggle functionalities
    async getToggleSrc(toggleQuestionID) {
        let request = new Request(
            `${eBookConfig.new_server_prefix}/assessment/htmlsrc?acid=${toggleQuestionID}`,
            {
                method: "GET",
            }
        );
        let response = await fetch(request);
        let data = await response.json();
        let htmlsrc = data.detail;
        return htmlsrc;
    }

    // on changing the value of toggle select dropdown, render selected question in preview panel, add appropriate buttons, then make preview panel visible
    async togglePreview(parentID, toggleOptions, toggleQuestionTypes) {
        $("#toggle-buttons").html("");
        var parentDiv = document.getElementById(parentID);
        var toggleQuestionSelect = parentDiv.getElementsByTagName("select")[0];
        var selectedQuestion =
            toggleQuestionSelect.options[toggleQuestionSelect.selectedIndex]
                .value;
        var htmlsrc = await this.getToggleSrc(selectedQuestion);
        (0,_common_js_renderComponent_js__WEBPACK_IMPORTED_MODULE_0__.renderRunestoneComponent)(htmlsrc, "toggle-preview", {
            selector_id: "toggle-preview",
            is_toggle: this.toggleOptions,
            is_select: true,
            useRunestoneServices: true,
        });

        // add "Close Preview" button to the preview panel
        let closeButton = document.createElement("button");
        $(closeButton).text("Close Preview");
        $(closeButton).addClass("btn btn-default");
        closeButton.addEventListener("click",
            function () {
                $("#toggle-preview").html("");
                toggleQuestionSelect.value = $("#" + parentID).data(
                    "toggle_current"
                );
                $("#component-preview").hide();
                this.logBookEvent({
                    event: "close_toggle",
                    act: toggleQuestionSelect.value,
                    div_id: toggleQuestionSelect.parentElement.id
                });
         }.bind(this)
         );
        $("#toggle-buttons").append(closeButton);

        // if "lock" is not in toggle options, then allow adding more buttons to the preview panel
        if (!toggleOptions.includes("lock")) {
            let setButton = document.createElement("button");
            $(setButton).text("Select this Problem");
            $(setButton).addClass("btn btn-primary");
            $(setButton).click(
                async function () {
                    await this.toggleSet(
                        parentID,
                        selectedQuestion,
                        htmlsrc,
                        toggleQuestionTypes
                    );
                    $("#component-preview").hide();
                    this.logBookEvent({
                        event: "select_toggle",
                        act: selectedQuestion,
                        div_id: parentID,
                    });
                }.bind(this)
            );
            $("#toggle-buttons").append(setButton);

            // if "transfer" in toggle options, and if current question type is Parsons and selected question type is active code, then add "Transfer" button to preview panel
            if (toggleOptions.includes("transfer")) {
                var currentType = $("#" + parentID).data("toggle_current_type");
                var selectedType =
                    toggleQuestionTypes[toggleQuestionSelect.selectedIndex];
                if (
                    currentType == "Parsons Mixed-Up Code" &&
                    selectedType == "Active Write Code"
                ) {
                    let transferButton = document.createElement("button");
                    $(transferButton).text("Transfer Response");
                    $(transferButton).addClass("btn btn-primary");
                    $(transferButton).click(
                        async function () {
                            await this.toggleTransfer(
                                parentID,
                                selectedQuestion,
                                htmlsrc,
                                toggleQuestionTypes
                            );
                        }.bind(this)
                    );
                    $("#toggle-buttons").append(transferButton);
                }
            }
        }

        $("#component-preview").show();
    }

    // on clicking "Select this Problem" button, close preview panel, replace current question in assignments page with selected question, and send request to update grading database
    // _ `toggleSet`
    async toggleSet(parentID, selectedQuestion, htmlsrc, toggleQuestionTypes) {
        var selectorId = parentID + "-toggleSelectedQuestion";
        var toggleQuestionSelect = document
            .getElementById(parentID)
            .getElementsByTagName("select")[0];
        document.getElementById(selectorId).innerHTML = ""; // need to check whether this is even necessary
        await (0,_common_js_renderComponent_js__WEBPACK_IMPORTED_MODULE_0__.renderRunestoneComponent)(htmlsrc, selectorId, {
            selector_id: selectorId,
            is_toggle: this.toggleOptions,
            is_select: true,
            useRunestoneServices: true,
        });
        let request = new Request(
            `${eBookConfig.new_server_prefix}/assessment/set_selected_question?metaid=${parentID}&selected=${selectedQuestion}`,
            {}
        );
        await fetch(request);
        $("#toggle-preview").html("");
        $("#" + parentID).data("toggle_current", selectedQuestion);
        $("#" + parentID).data(
            "toggle_current_type",
            toggleQuestionTypes[toggleQuestionSelect.selectedIndex]
        );
    }

    // on clicking "Transfer" button, extract the current text and indentation of the Parsons blocks in the answer space, then paste that into the selected active code question
    async toggleTransfer(
        parentID,
        selectedQuestion,
        htmlsrc,
        toggleQuestionTypes
    ) {
        // retrieve all Parsons lines within the answer space and loop through this list
        var currentParsons = document
            .getElementById(parentID + "-toggleSelectedQuestion")
            .querySelectorAll("div[class^='answer']")[0]
            .getElementsByClassName("prettyprint lang-py");
        var currentParsonsClass;
        var currentBlockIndent;
        var indentCount;
        var indent;
        var parsonsLine;
        var parsonsLines = ``;
        var count;
        for (var p = 0; p < currentParsons.length; p++) {
            indentCount = 0;
            indent = "";
            // for Parsons blocks that have built-in indentation in their lines
            currentParsonsClass = currentParsons[p].classList[2];
            if (currentParsonsClass) {
                if (currentParsonsClass.includes("indent")) {
                    indentCount =
                        parseInt(indentCount) +
                        parseInt(
                            currentParsonsClass.slice(
                                6,
                                currentParsonsClass.length
                            )
                        );
                }
            }
            // for Parsons answer spaces with vertical lines that allow student to define their own line indentation
            currentBlockIndent =
                currentParsons[p].parentElement.parentElement.style.left;
            if (currentBlockIndent) {
                indentCount =
                    parseInt(indentCount) +
                    parseInt(
                        currentBlockIndent.slice(
                            0,
                            currentBlockIndent.indexOf("px")
                        ) / 30
                    );
            }
            for (var d = 0; d < indentCount; d++) {
                indent += "    ";
            }
            // retrieve each text snippet of each Parsons line and loop through this list
            parsonsLine = currentParsons[p].getElementsByTagName("span");
            count = 0;
            for (var l = 0; l < parsonsLine.length; l++) {
                if (parsonsLine[l].childNodes[0].nodeName == "#text") {
                    // Parsons blocks have differing amounts of hierarchy levels (spans within spans)
                    if (p == 0 && count == 0) {
                        // need different check than l == 0 because the l numbering doesn't align with location within line due to inconsistent span heirarchy
                        parsonsLines += indent + parsonsLine[l].innerHTML;
                        count++;
                    } else if (count != 0) {
                        parsonsLines += parsonsLine[l].innerHTML;
                        count++;
                    } else {
                        parsonsLines =
                            parsonsLines +
                            `
                            ` +
                            indent +
                            parsonsLine[l].innerHTML;
                        parsonsLines = parsonsLines.replace(
                            "                            ",
                            ""
                        );
                        count++;
                    }
                }
            }
        }
        // replace all existing code within selected active code question with extracted Parsons text
        var htmlsrcFormer = htmlsrc.slice(
            0,
            htmlsrc.indexOf("<textarea") +
                htmlsrc.split("<textarea")[1].indexOf(">") +
                10
        );
        var htmlsrcLatter = htmlsrc.slice(
            htmlsrc.indexOf("</textarea>"),
            htmlsrc.length
        );
        htmlsrc = htmlsrcFormer + parsonsLines + htmlsrcLatter;

        await this.toggleSet(
            parentID,
            selectedQuestion,
            htmlsrc,
            toggleQuestionTypes
        );
        $("#component-preview").hide();
    }
}

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}

window.component_factory.selectquestion = function (opts) {
    return new SelectOne(opts);
};

/*
 * When the page is loaded and the login checks are complete find and render
 * each selectquestion component that is not part of a timedAssessment.
 **/
$(document).on("runestone:login-complete", async function () {
    let selQuestions = document.querySelectorAll(
        "[data-component=selectquestion]"
    );
    for (let cq of selQuestions) {
        try {
            if ($(cq).closest("[data-component=timedAssessment]").length == 0) {
                // If this element exists within a timed component, don't render it here
                let tmp = new SelectOne({ orig: cq });
                await tmp.initialize();
            }
        } catch (err) {
            console.log(`Error rendering New Exercise ${cq.id}
                         Details: ${err}`);
            console.log(err.stack);
        }
    }
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX3NlbGVjdHF1ZXN0aW9uX2pzX3NlbGVjdG9uZV9qcy5jNmM2YTg1YzU2NzY2ODM3LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZEOztBQUV0RDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQixtQkFBbUIsdUJBQXVCO0FBQ3JFO0FBQ0EsZUFBZSxTQUFTOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLFVBQVU7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsVUFBVSxtRUFBZ0I7QUFDMUI7QUFDQSwwQkFBMEIsVUFBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUztBQUNqQztBQUNBLHVCQUF1QixTQUFTO0FBQ2hDLGdEQUFnRCxjQUFjO0FBQzlEO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDJCQUEyQixFQUFFLFVBQVU7QUFDbEU7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0IsbUJBQW1CLHVCQUF1QjtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEMsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7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QUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxVQUFVO0FBQ3BEO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysd0RBQXdEO0FBQ3hELG9DQUFvQyxJQUFJO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3NlbGVjdHF1ZXN0aW9uL2Nzcy9zZWxlY3RxdWVzdGlvbi5jc3M/YmVkMyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9qcy9yZW5kZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9zZWxlY3RxdWVzdGlvbi9qcy9zZWxlY3RvbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcnVuZXN0b25lX2ltcG9ydCB9IGZyb20gXCIuLi8uLi8uLi93ZWJwYWNrLmluZGV4LmpzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5kZXJSdW5lc3RvbmVDb21wb25lbnQoY29tcG9uZW50U3JjLCB3aGVyZURpdiwgbW9yZU9wdHMpIHtcbiAgICAvKipcbiAgICAgKiAgVGhlIGVhc3kgcGFydCBpcyBhZGRpbmcgdGhlIGNvbXBvbmVudFNyYyB0byB0aGUgZXhpc3RpbmcgZGl2LlxuICAgICAqICBUaGUgdGVkaW91cyBwYXJ0IGlzIGNhbGxpbmcgdGhlIHJpZ2h0IGZ1bmN0aW9ucyB0byB0dXJuIHRoZVxuICAgICAqICBzb3VyY2UgaW50byB0aGUgYWN0dWFsIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBpZiAoIWNvbXBvbmVudFNyYykge1xuICAgICAgICBqUXVlcnkoYCMke3doZXJlRGl2fWApLmh0bWwoYDxwPlNvcnJ5LCBubyBzb3VyY2UgaXMgYXZhaWxhYmxlIGZvciBwcmV2aWV3LjwvcD5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcGF0dCA9IC8uLlxcL19pbWFnZXMvZztcbiAgICBjb21wb25lbnRTcmMgPSBjb21wb25lbnRTcmMucmVwbGFjZShcbiAgICAgICAgcGF0dCxcbiAgICAgICAgYCR7ZUJvb2tDb25maWcuYXBwfS9ib29rcy9wdWJsaXNoZWQvJHtlQm9va0NvbmZpZy5iYXNlY291cnNlfS9faW1hZ2VzYFxuICAgICk7XG4gICAgalF1ZXJ5KGAjJHt3aGVyZURpdn1gKS5odG1sKGNvbXBvbmVudFNyYyk7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdy5lZExpc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgd2luZG93LmVkTGlzdCA9IHt9O1xuICAgIH1cblxuICAgIGxldCBjb21wb25lbnRLaW5kID0gJCgkKGAjJHt3aGVyZURpdn0gW2RhdGEtY29tcG9uZW50XWApWzBdKS5kYXRhKFxuICAgICAgICBcImNvbXBvbmVudFwiXG4gICAgKTtcbiAgICAvLyBJbXBvcnQgdGhlIEphdmFTY3JpcHQgZm9yIHRoaXMgY29tcG9uZW50IGJlZm9yZSBwcm9jZWVkaW5nLlxuICAgIGF3YWl0IHJ1bmVzdG9uZV9pbXBvcnQoY29tcG9uZW50S2luZCk7XG4gICAgbGV0IG9wdCA9IHt9O1xuICAgIG9wdC5vcmlnID0galF1ZXJ5KGAjJHt3aGVyZURpdn0gW2RhdGEtY29tcG9uZW50XWApWzBdO1xuICAgIGlmIChvcHQub3JpZykge1xuICAgICAgICBvcHQubGFuZyA9ICQob3B0Lm9yaWcpLmRhdGEoXCJsYW5nXCIpO1xuICAgICAgICBvcHQudXNlUnVuZXN0b25lU2VydmljZXMgPSB0cnVlO1xuICAgICAgICBvcHQuZ3JhZGVyYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIG9wdC5weXRob24zID0gdHJ1ZTtcbiAgICAgICAgaWYgKHR5cGVvZiBtb3JlT3B0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG1vcmVPcHRzKSB7XG4gICAgICAgICAgICAgICAgb3B0W2tleV0gPSBtb3JlT3B0c1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBhbGVydChcbiAgICAgICAgICAgIFwiRXJyb3I6ICBNaXNzaW5nIHRoZSBjb21wb25lbnQgZmFjdG9yeSFcIlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnlbY29tcG9uZW50S2luZF0gJiZcbiAgICAgICAgICAgICFqUXVlcnkoYCMke3doZXJlRGl2fWApLmh0bWwoKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGpRdWVyeShgIyR7d2hlcmVEaXZ9YCkuaHRtbChcbiAgICAgICAgICAgICAgICBgPHA+UHJldmlldyBub3QgYXZhaWxhYmxlIGZvciAke2NvbXBvbmVudEtpbmR9PC9wPmBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gd2luZG93LmNvbXBvbmVudF9mYWN0b3J5W2NvbXBvbmVudEtpbmRdKG9wdCk7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50S2luZCA9PT0gXCJhY3RpdmVjb2RlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobW9yZU9wdHMubXVsdGlHcmFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmVkTGlzdFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke21vcmVPcHRzLmdyYWRpbmdDb250YWluZXJ9ICR7cmVzLmRpdmlkfWBcbiAgICAgICAgICAgICAgICAgICAgXSA9IHJlcztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZWRMaXN0W3Jlcy5kaXZpZF0gPSByZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGltZWRDb21wb25lbnQoY29tcG9uZW50U3JjLCBtb3JlT3B0cykge1xuICAgIC8qIFRoZSBpbXBvcnRhbnQgZGlzdGluY3Rpb24gaXMgdGhhdCB0aGUgY29tcG9uZW50IGRvZXMgbm90IHJlYWxseSBuZWVkIHRvIGJlIHJlbmRlcmVkXG4gICAgaW50byB0aGUgcGFnZSwgaW4gZmFjdCwgZHVlIHRvIHRoZSBhc3luYyBuYXR1cmUgb2YgZ2V0dGluZyB0aGUgc291cmNlIHRoZSBsaXN0IG9mIHF1ZXN0aW9uc1xuICAgIGlzIG1hZGUgYW5kIHRoZSBvcmlnaW5hbCBodG1sIGlzIHJlcGxhY2VkIGJ5IHRoZSBsb29rIG9mIHRoZSBleGFtLlxuICAgICovXG5cbiAgICBsZXQgcGF0dCA9IC8uLlxcL19pbWFnZXMvZztcbiAgICBjb21wb25lbnRTcmMgPSBjb21wb25lbnRTcmMucmVwbGFjZShcbiAgICAgICAgcGF0dCxcbiAgICAgICAgYCR7ZUJvb2tDb25maWcuYXBwfS9ib29rcy9wdWJsaXNoZWQvJHtlQm9va0NvbmZpZy5iYXNlY291cnNlfS9faW1hZ2VzYFxuICAgICk7XG5cbiAgICBsZXQgY29tcG9uZW50S2luZCA9ICQoJChjb21wb25lbnRTcmMpLmZpbmQoXCJbZGF0YS1jb21wb25lbnRdXCIpWzBdKS5kYXRhKFxuICAgICAgICBcImNvbXBvbmVudFwiXG4gICAgKTtcblxuICAgIGxldCBvcmlnSWQgPSAkKGNvbXBvbmVudFNyYykuZmluZChcIltkYXRhLWNvbXBvbmVudF1cIikuZmlyc3QoKS5hdHRyKFwiaWRcIik7XG5cbiAgICAvLyBEb3VibGUgY2hlY2sgLS0gaWYgdGhlIGNvbXBvbmVudCBzb3VyY2UgaXMgbm90IGluIHRoZSBET00sIHRoZW4gYnJpZWZseSBhZGQgaXRcbiAgICAvLyBhbmQgY2FsbCB0aGUgY29uc3RydWN0b3IuXG4gICAgbGV0IGhkaXY7XG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcmlnSWQpKSB7XG4gICAgICAgIGhkaXYgPSAkKFwiPGRpdi8+XCIsIHtcbiAgICAgICAgICAgIGNzczogeyBkaXNwbGF5OiBcIm5vbmVcIiB9LFxuICAgICAgICB9KS5hcHBlbmRUbyhcImJvZHlcIik7XG4gICAgICAgIGhkaXYuaHRtbChjb21wb25lbnRTcmMpO1xuICAgIH1cbiAgICAvLyBhdCB0aGlzIHBvaW50IGhkaXYgaXMgYSBqcXVlcnkgb2JqZWN0XG5cbiAgICBsZXQgcmV0O1xuICAgIGxldCBvcHRzID0ge1xuICAgICAgICBvcmlnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcmlnSWQpLFxuICAgICAgICB0aW1lZDogdHJ1ZSxcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgbW9yZU9wdHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG1vcmVPcHRzKSB7XG4gICAgICAgICAgICBvcHRzW2tleV0gPSBtb3JlT3B0c1trZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbXBvbmVudEtpbmQgaW4gd2luZG93LmNvbXBvbmVudF9mYWN0b3J5KSB7XG4gICAgICAgIHJldCA9IHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeVtjb21wb25lbnRLaW5kXShvcHRzKTtcbiAgICB9XG5cbiAgICBsZXQgcmRpY3QgPSB7fTtcbiAgICByZGljdC5xdWVzdGlvbiA9IHJldDtcbiAgICByZXR1cm4gcmRpY3Q7XG59XG4iLCIvKipcbiAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIHxkb2NuYW1lfCAtIFNlbGVjdE9uZSBDb21wb25lbnRcbiAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqL1xuaW1wb3J0IHtcbiAgICByZW5kZXJSdW5lc3RvbmVDb21wb25lbnQsXG4gICAgY3JlYXRlVGltZWRDb21wb25lbnQsXG59IGZyb20gXCIuLi8uLi9jb21tb24vanMvcmVuZGVyQ29tcG9uZW50LmpzXCI7XG5pbXBvcnQgUnVuZXN0b25lQmFzZSBmcm9tIFwiLi4vLi4vY29tbW9uL2pzL3J1bmVzdG9uZWJhc2UuanNcIjtcbmltcG9ydCBcIi4uL2Nzcy9zZWxlY3RxdWVzdGlvbi5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0T25lIGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XG4gICAgLyoqXG4gICAgICogY29uc3RydWN0b3IgLS1cbiAgICAgKiBNYWtpbmcgYW4gaW5zdGFuY2Ugb2YgYSBzZWxlY3RvbmUgaXMgYSBiaXQgbW9yZSBjb21wbGljYXRlZCBiZWNhdXNlIGl0IGlzXG4gICAgICogYSBraW5kIG9mIG1ldGEgZGlyZWN0aXZlLiAgVGhhdCBpcywgZ28gdG8gdGhlIHNlcnZlciBhbmQgcmFuZG9tbHkgc2VsZWN0XG4gICAgICogYSBxdWVzdGlvbiB0byBkaXNwbGF5IGluIHRoaXMgc3BvdC4gIE9yLCBpZiBhIHN0dWRlbnQgaGFzIGFscmVhZHkgc2VlbiB0aGlzIHF1ZXN0aW9uXG4gICAgICogaW4gdGhlIGNvbnRleHQgb2YgYW4gZXhhbSByZXRyaWV2ZSB0aGUgcXVlc3Rpb24gdGhleSBzYXcgaW4gdGhlIGZpcnN0IHBsYWNlLlxuICAgICAqIE1ha2luZyBhbiBBUEkgY2FsbCBhbmQgd2FpdGluZyBmb3IgdGhlIHJlc3BvbnNlIGlzIGhhbmRsZWQgYXN5bmNocm9ub3VzbHkuXG4gICAgICogQnV0IGxvdHMgb2YgY29kZSBpcyBub3Qgd3JpdHRlbiB3aXRoIHRoYXQgYXNzdW1wdGlvbi4gIFNvIHdlIGRvIHRoZSBpbml0aWFsaXphdGlvbiBpblxuICAgICAqIHR3byBwYXJ0cy5cbiAgICAgKiAxLiBDcmVhdGUgdGhlIG9iamVjdCB3aXRoIHRoZSB1c3VhbCBjb25zdHJ1Y3RvclxuICAgICAqIDIuIGNhbGwgaW5pdGlhbGl6ZSwgd2hpY2ggcmV0dXJucyBhIHByb21pc2UuICBXaGVuIHRoYXQgcHJvbWlzZSBpcyByZXNvbHZlZFxuICAgICAqIHRoZSBcInJlcGxhY2VtZW50XCIgY29tcG9uZW50IHdpbGwgcmVwbGFjZSB0aGUgb3JpZ2luYWwgc2VsZWN0b25lIGNvbXBvbmVudCBpbiB0aGUgRE9NLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7fSBvcHRzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcihvcHRzKTtcbiAgICAgICAgdGhpcy5vcmlnT3B0cyA9IG9wdHM7XG4gICAgICAgIHRoaXMucXVlc3Rpb25zID0gJChvcHRzLm9yaWcpLmRhdGEoXCJxdWVzdGlvbmxpc3RcIik7XG4gICAgICAgIHRoaXMucHJvZmljaWVuY3kgPSAkKG9wdHMub3JpZykuZGF0YShcInByb2ZpY2llbmN5XCIpO1xuICAgICAgICB0aGlzLm1pbkRpZmZpY3VsdHkgPSAkKG9wdHMub3JpZykuZGF0YShcIm1pbkRpZmZpY3VsdHlcIik7XG4gICAgICAgIHRoaXMubWF4RGlmZmljdWx0eSA9ICQob3B0cy5vcmlnKS5kYXRhKFwibWF4RGlmZmljdWx0eVwiKTtcbiAgICAgICAgdGhpcy5wb2ludHMgPSAkKG9wdHMub3JpZykuZGF0YShcInBvaW50c1wiKTtcbiAgICAgICAgdGhpcy5hdXRvZ3JhZGFibGUgPSAkKG9wdHMub3JpZykuZGF0YShcImF1dG9ncmFkYWJsZVwiKTtcbiAgICAgICAgdGhpcy5ub3Rfc2Vlbl9ldmVyID0gJChvcHRzLm9yaWcpLmRhdGEoXCJub3Rfc2Vlbl9ldmVyXCIpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yX2lkID0gJChvcHRzLm9yaWcpLmZpcnN0KCkuYXR0cihcImlkXCIpO1xuICAgICAgICB0aGlzLnByaW1hcnlPbmx5ID0gJChvcHRzLm9yaWcpLmRhdGEoXCJwcmltYXJ5XCIpO1xuICAgICAgICB0aGlzLkFCRXhwZXJpbWVudCA9ICQob3B0cy5vcmlnKS5kYXRhKFwiYWJcIik7XG4gICAgICAgIHRoaXMudG9nZ2xlT3B0aW9ucyA9ICQob3B0cy5vcmlnKS5kYXRhKFwidG9nZ2xlb3B0aW9uc1wiKTtcbiAgICAgICAgdGhpcy50b2dnbGVMYWJlbHMgPSAkKG9wdHMub3JpZykuZGF0YShcInRvZ2dsZWxhYmVsc1wiKTtcbiAgICAgICAgdGhpcy5saW1pdEJhc2VDb3Vyc2UgPSAkKG9wdHMub3JpZykuZGF0YShcImxpbWl0LWJhc2Vjb3Vyc2VcIik7XG4gICAgICAgIG9wdHMub3JpZy5pZCA9IHRoaXMuc2VsZWN0b3JfaWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGluaXRpYWxpemUgLS1cbiAgICAgKiBpbml0aWFsaXplIGlzIHVzZWQgc28gdGhhdCB0aGUgY29uc3RydWN0b3IgZG9lcyBub3QgaGF2ZSB0byBiZSBhc3luYy5cbiAgICAgKiBDb25zdHJ1Y3RvcnMgc2hvdWxkIGRlZmluaXRlbHkgbm90IHJldHVybiBwcm9taXNlcyB0aGF0IHdvdWxkIHNlcmlvdXNseVxuICAgICAqIG1lc3MgdGhpbmdzIHVwLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9IFdpbGwgcmVzb2x2ZSBhZnRlciBjb21wb25lbnQgZnJvbSBEQiBpcyByZWlmaWVkXG4gICAgICovXG4gICAgYXN5bmMgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgZGF0YSA9IHsgc2VsZWN0b3JfaWQ6IHRoaXMuc2VsZWN0b3JfaWQgfTtcbiAgICAgICAgaWYgKHRoaXMucXVlc3Rpb25zKSB7XG4gICAgICAgICAgICBkYXRhLnF1ZXN0aW9ucyA9IHRoaXMucXVlc3Rpb25zO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvZmljaWVuY3kpIHtcbiAgICAgICAgICAgIGRhdGEucHJvZmljaWVuY3kgPSB0aGlzLnByb2ZpY2llbmN5O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1pbkRpZmZpY3VsdHkpIHtcbiAgICAgICAgICAgIGRhdGEubWluRGlmZmljdWx0eSA9IHRoaXMubWluRGlmZmljdWx0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXhEaWZmaWN1bHR5KSB7XG4gICAgICAgICAgICBkYXRhLm1heERpZmZpY3VsdHkgPSB0aGlzLm1heERpZmZpY3VsdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9pbnRzKSB7XG4gICAgICAgICAgICBkYXRhLnBvaW50cyA9IHRoaXMucG9pbnRzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF1dG9ncmFkYWJsZSkge1xuICAgICAgICAgICAgZGF0YS5hdXRvZ3JhZGFibGUgPSB0aGlzLmF1dG9ncmFkYWJsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ub3Rfc2Vlbl9ldmVyKSB7XG4gICAgICAgICAgICBkYXRhLm5vdF9zZWVuX2V2ZXIgPSB0aGlzLm5vdF9zZWVuX2V2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJpbWFyeU9ubHkpIHtcbiAgICAgICAgICAgIGRhdGEucHJpbWFyeSA9IHRoaXMucHJpbWFyeU9ubHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuQUJFeHBlcmltZW50KSB7XG4gICAgICAgICAgICBkYXRhLkFCID0gdGhpcy5BQkV4cGVyaW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGltZWRXcmFwcGVyKSB7XG4gICAgICAgICAgICBkYXRhLnRpbWVkV3JhcHBlciA9IHRoaXMudGltZWRXcmFwcGVyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIGRhdGEudG9nZ2xlT3B0aW9ucyA9IHRoaXMudG9nZ2xlT3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50b2dnbGVMYWJlbHMpIHtcbiAgICAgICAgICAgIGRhdGEudG9nZ2xlTGFiZWxzID0gdGhpcy50b2dnbGVMYWJlbHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGltaXRCYXNlQ291cnNlKSB7XG4gICAgICAgICAgICBkYXRhLmxpbWl0QmFzZUNvdXJzZSA9IGVCb29rQ29uZmlnLmJhc2Vjb3Vyc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9wdHMgPSB0aGlzLm9yaWdPcHRzO1xuICAgICAgICBsZXQgc2VsZWN0b3JJZCA9IHRoaXMuc2VsZWN0b3JfaWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBxdWVzdGlvbiBzb3VyY2VcIik7XG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoXG4gICAgICAgICAgICBgJHtlQm9va0NvbmZpZy5uZXdfc2VydmVyX3ByZWZpeH0vYXNzZXNzbWVudC9nZXRfcXVlc3Rpb25fc291cmNlYCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuanNvbkhlYWRlcnMsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xuICAgICAgICBsZXQgaHRtbHNyYyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaHRtbHNyYyA9IGh0bWxzcmMuZGV0YWlsO1xuICAgICAgICBpZiAoaHRtbHNyYy5pbmRleE9mKFwiTm8gcHJldmlld1wiKSA+PSAwKSB7XG4gICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICBgRXJyb3I6IE5vdCBhYmxlIHRvIGZpbmQgYSBxdWVzdGlvbiBmb3IgJHtzZWxlY3RvcklkfSBiYXNlZCBvbiB0aGUgY3JpdGVyaWFgXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZmluZCBhIHF1ZXN0aW9uIGZvciAke3NlbGVjdG9ySWR9YCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlcztcbiAgICAgICAgaWYgKG9wdHMudGltZWQpIHtcbiAgICAgICAgICAgIC8vIHRpbWVkIGNvbXBvbmVudHMgYXJlIG5vdCByZW5kZXJlZCBpbW1lZGlhdGVseSwgb25seSB3aGVuIHRoZSBzdHVkZW50XG4gICAgICAgICAgICAvLyBzdGFydHMgdGhlIGFzc2Vzc21lbnQgYW5kIHZpc2l0cyB0aGlzIHBhcnRpY3VsYXIgZW50cnkuXG4gICAgICAgICAgICByZXMgPSBjcmVhdGVUaW1lZENvbXBvbmVudChodG1sc3JjLCB7XG4gICAgICAgICAgICAgICAgdGltZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3JfaWQ6IHNlbGVjdG9ySWQsXG4gICAgICAgICAgICAgICAgYXNzZXNzbWVudFRha2VuOiBvcHRzLmFzc2Vzc21lbnRUYWtlbixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gcmVwbGFjZSB0aGUgZW50cnkgaW4gdGhlIHRpbWVkIGFzc2Vzc21lbnQncyBsaXN0IG9mIGNvbXBvbmVudHNcbiAgICAgICAgICAgIC8vIHdpdGggdGhlIGNvbXBvbmVudCBjcmVhdGVkIGJ5IGNyZWF0ZVRpbWVkQ29tcG9uZW50XG4gICAgICAgICAgICBmb3IgKGxldCBjb21wb25lbnQgb2Ygb3B0cy5ycWEpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LnF1ZXN0aW9uID09IHNlbGYpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LnF1ZXN0aW9uID0gcmVzLnF1ZXN0aW9uO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnJlYWxDb21wb25lbnQgPSByZXMucXVlc3Rpb247XG4gICAgICAgICAgICBzZWxmLmNvbnRhaW5lckRpdiA9IHJlcy5xdWVzdGlvbi5jb250YWluZXJEaXY7XG4gICAgICAgICAgICBzZWxmLnJlYWxDb21wb25lbnQuc2VsZWN0b3JJZCA9IHNlbGVjdG9ySWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGF0YS50b2dnbGVPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvZ2dsZUxhYmVscyA9IGRhdGEudG9nZ2xlTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwidG9nZ2xlbGFiZWxzOlwiLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAudHJpbSgpO1xuICAgICAgICAgICAgICAgIGlmICh0b2dnbGVMYWJlbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTGFiZWxzID0gdG9nZ2xlTGFiZWxzLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0b2dnbGVMYWJlbHMubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUxhYmVsc1t0XSA9IHRvZ2dsZUxhYmVsc1t0XS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRvZ2dsZVF1ZXN0aW9ucyA9IHRoaXMucXVlc3Rpb25zLnNwbGl0KFwiLCBcIik7XG4gICAgICAgICAgICAgICAgdmFyIHRvZ2dsZVVJID0gXCJcIjtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBzbyB0aGF0IG9ubHkgdGhlIGZpcnN0IHRvZ2dsZSBzZWxlY3QgcXVlc3Rpb24gb24gdGhlIGFzc2lnbm1lbnRzIHBhZ2UgaGFzIGEgcHJldmlldyBwYW5lbCBjcmVhdGVkLCB0aGVuIGFsbCB0b2dnbGUgc2VsZWN0IHByZXZpZXdzIHVzZSB0aGlzIHNhbWUgcGFuZWxcbiAgICAgICAgICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcG9uZW50LXByZXZpZXdcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVUkgKz1cbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGlkPVwiY29tcG9uZW50LXByZXZpZXdcIiBjbGFzcz1cImNvbC1tZC02IHRvZ2dsZS1wcmV2aWV3XCIgc3R5bGU9XCJ6LWluZGV4OiA5OTk7XCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBpZD1cInRvZ2dsZS1idXR0b25zXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBpZD1cInRvZ2dsZS1wcmV2aWV3XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjwvZGl2PlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkcm9wZG93biBtZW51IGNvbnRhaW5pbmcgdGhlIHF1ZXN0aW9uIG9wdGlvbnNcbiAgICAgICAgICAgICAgICB0b2dnbGVVSSArPVxuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cIicgK1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcklkICtcbiAgICAgICAgICAgICAgICAgICAgJy10b2dnbGVRdWVzdGlvblwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDEwcHhcIj5Ub2dnbGUgUXVlc3Rpb246PC9sYWJlbD48c2VsZWN0IGlkPVwiJyArXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9ySWQgK1xuICAgICAgICAgICAgICAgICAgICAnLXRvZ2dsZVF1ZXN0aW9uXCI+JztcbiAgICAgICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgICAgICB2YXIgdG9nZ2xlUXVlc3Rpb25IVE1MU3JjO1xuICAgICAgICAgICAgICAgIHZhciB0b2dnbGVRdWVzdGlvblN1YnN0cmluZztcbiAgICAgICAgICAgICAgICB2YXIgdG9nZ2xlUXVlc3Rpb25UeXBlO1xuICAgICAgICAgICAgICAgIHZhciB0b2dnbGVRdWVzdGlvblR5cGVzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRvZ2dsZVF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvbkhUTUxTcmMgPSBhd2FpdCB0aGlzLmdldFRvZ2dsZVNyYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uc1tpXVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblN1YnN0cmluZyA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvbkhUTUxTcmMuc3BsaXQoJ2RhdGEtY29tcG9uZW50PVwiJylbMV07XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblN1YnN0cmluZy5zbGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uU3Vic3RyaW5nLmluZGV4T2YoJ1wiJylcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYWN0aXZlY29kZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uVHlwZSA9IFwiQWN0aXZlIFdyaXRlIENvZGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjbGlja2FibGVhcmVhXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25UeXBlID0gXCJDbGlja2FibGUgQXJlYVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRyYWduZHJvcFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uVHlwZSA9IFwiRHJhZyBuIERyb3BcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmaWxsaW50aGVibGFua1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uVHlwZSA9IFwiRmlsbCBpbiB0aGUgQmxhbmtcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtdWx0aXBsZWNob2ljZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uVHlwZSA9IFwiTXVsdGlwbGUgQ2hvaWNlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicGFyc29uc1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uVHlwZSA9IFwiUGFyc29ucyBNaXhlZC1VcCBDb2RlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2hvcnRhbnN3ZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblR5cGUgPSBcIlNob3J0IEFuc3dlclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uVHlwZXNbaV0gPSB0b2dnbGVRdWVzdGlvblR5cGU7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVVJICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIHRvZ2dsZVF1ZXN0aW9uc1tpXSArICdcIj4nO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9nZ2xlTGFiZWxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9nZ2xlTGFiZWxzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVUkgKz0gdG9nZ2xlTGFiZWxzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVVSSArPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblR5cGUgKyBcIiAtIFwiICsgdG9nZ2xlUXVlc3Rpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVUkgKz1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblR5cGUgKyBcIiAtIFwiICsgdG9nZ2xlUXVlc3Rpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDAgJiYgZGF0YS50b2dnbGVPcHRpb25zLmluY2x1ZGVzKFwibG9ja1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVUkgKz0gXCIgKG9ubHkgdGhpcyBxdWVzdGlvbiB3aWxsIGJlIGdyYWRlZClcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVVSSArPSBcIjwvb3B0aW9uPlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b2dnbGVVSSArPVxuICAgICAgICAgICAgICAgICAgICAnPC9zZWxlY3Q+PGRpdiBpZD1cIicgK1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcklkICtcbiAgICAgICAgICAgICAgICAgICAgJy10b2dnbGVTZWxlY3RlZFF1ZXN0aW9uXCI+JztcbiAgICAgICAgICAgICAgICB2YXIgdG9nZ2xlRmlyc3RJRCA9IGh0bWxzcmMuc3BsaXQoJ2lkPVwiJylbMV07XG4gICAgICAgICAgICAgICAgdG9nZ2xlRmlyc3RJRCA9IHRvZ2dsZUZpcnN0SUQuc3BsaXQoJ1wiJylbMF07XG4gICAgICAgICAgICAgICAgaHRtbHNyYyA9IHRvZ2dsZVVJICsgaHRtbHNyYyArIFwiPC9kaXY+XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBqdXN0IHJlbmRlciB0aGlzIGNvbXBvbmVudCBvbiB0aGUgcGFnZSBpbiBpdHMgdXN1YWwgcGxhY2VcbiAgICAgICAgICAgIGF3YWl0IHJlbmRlclJ1bmVzdG9uZUNvbXBvbmVudChodG1sc3JjLCBzZWxlY3RvcklkLCB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JfaWQ6IHNlbGVjdG9ySWQsXG4gICAgICAgICAgICAgICAgaXNfdG9nZ2xlOiB0aGlzLnRvZ2dsZU9wdGlvbnMsXG4gICAgICAgICAgICAgICAgaXNfc2VsZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVzZVJ1bmVzdG9uZVNlcnZpY2VzOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZGF0YS50b2dnbGVPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnQtcHJldmlld1wiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdmFyIHRvZ2dsZVF1ZXN0aW9uU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9ySWQgKyBcIi10b2dnbGVRdWVzdGlvblwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdG9nZ2xlUXVlc3Rpb25TZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblNlbGVjdC5vcHRpb25zW2ldLnZhbHVlID09IHRvZ2dsZUZpcnN0SURcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblNlbGVjdC52YWx1ZSA9IHRvZ2dsZUZpcnN0SUQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI1wiICsgc2VsZWN0b3JJZCkuZGF0YShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvZ2dsZV9jdXJyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlRmlyc3RJRFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjXCIgKyBzZWxlY3RvcklkKS5kYXRhKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9nZ2xlX2N1cnJlbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uVHlwZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICAgICBcImNoYW5nZVwiLFxuICAgICAgICAgICAgICAgICAgICBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnRvZ2dsZVByZXZpZXcoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25TZWxlY3QucGFyZW50RWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRvZ2dsZU9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25UeXBlc1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nQm9va0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudDogXCJ2aWV3X3RvZ2dsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdDogdG9nZ2xlUXVlc3Rpb25TZWxlY3QudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2lkOiB0b2dnbGVRdWVzdGlvblNlbGVjdC5wYXJlbnRFbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cblxuICAgIC8vIHJldHJpZXZlIGh0bWwgc291cmNlIG9mIGEgcXVlc3Rpb24sIGZvciB1c2UgaW4gdmFyaW91cyB0b2dnbGUgZnVuY3Rpb25hbGl0aWVzXG4gICAgYXN5bmMgZ2V0VG9nZ2xlU3JjKHRvZ2dsZVF1ZXN0aW9uSUQpIHtcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChcbiAgICAgICAgICAgIGAke2VCb29rQ29uZmlnLm5ld19zZXJ2ZXJfcHJlZml4fS9hc3Nlc3NtZW50L2h0bWxzcmM/YWNpZD0ke3RvZ2dsZVF1ZXN0aW9uSUR9YCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgbGV0IGh0bWxzcmMgPSBkYXRhLmRldGFpbDtcbiAgICAgICAgcmV0dXJuIGh0bWxzcmM7XG4gICAgfVxuXG4gICAgLy8gb24gY2hhbmdpbmcgdGhlIHZhbHVlIG9mIHRvZ2dsZSBzZWxlY3QgZHJvcGRvd24sIHJlbmRlciBzZWxlY3RlZCBxdWVzdGlvbiBpbiBwcmV2aWV3IHBhbmVsLCBhZGQgYXBwcm9wcmlhdGUgYnV0dG9ucywgdGhlbiBtYWtlIHByZXZpZXcgcGFuZWwgdmlzaWJsZVxuICAgIGFzeW5jIHRvZ2dsZVByZXZpZXcocGFyZW50SUQsIHRvZ2dsZU9wdGlvbnMsIHRvZ2dsZVF1ZXN0aW9uVHlwZXMpIHtcbiAgICAgICAgJChcIiN0b2dnbGUtYnV0dG9uc1wiKS5odG1sKFwiXCIpO1xuICAgICAgICB2YXIgcGFyZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SUQpO1xuICAgICAgICB2YXIgdG9nZ2xlUXVlc3Rpb25TZWxlY3QgPSBwYXJlbnREaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWxlY3RcIilbMF07XG4gICAgICAgIHZhciBzZWxlY3RlZFF1ZXN0aW9uID1cbiAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uU2VsZWN0Lm9wdGlvbnNbdG9nZ2xlUXVlc3Rpb25TZWxlY3Quc2VsZWN0ZWRJbmRleF1cbiAgICAgICAgICAgICAgICAudmFsdWU7XG4gICAgICAgIHZhciBodG1sc3JjID0gYXdhaXQgdGhpcy5nZXRUb2dnbGVTcmMoc2VsZWN0ZWRRdWVzdGlvbik7XG4gICAgICAgIHJlbmRlclJ1bmVzdG9uZUNvbXBvbmVudChodG1sc3JjLCBcInRvZ2dsZS1wcmV2aWV3XCIsIHtcbiAgICAgICAgICAgIHNlbGVjdG9yX2lkOiBcInRvZ2dsZS1wcmV2aWV3XCIsXG4gICAgICAgICAgICBpc190b2dnbGU6IHRoaXMudG9nZ2xlT3B0aW9ucyxcbiAgICAgICAgICAgIGlzX3NlbGVjdDogdHJ1ZSxcbiAgICAgICAgICAgIHVzZVJ1bmVzdG9uZVNlcnZpY2VzOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhZGQgXCJDbG9zZSBQcmV2aWV3XCIgYnV0dG9uIHRvIHRoZSBwcmV2aWV3IHBhbmVsXG4gICAgICAgIGxldCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICQoY2xvc2VCdXR0b24pLnRleHQoXCJDbG9zZSBQcmV2aWV3XCIpO1xuICAgICAgICAkKGNsb3NlQnV0dG9uKS5hZGRDbGFzcyhcImJ0biBidG4tZGVmYXVsdFwiKTtcbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJChcIiN0b2dnbGUtcHJldmlld1wiKS5odG1sKFwiXCIpO1xuICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uU2VsZWN0LnZhbHVlID0gJChcIiNcIiArIHBhcmVudElEKS5kYXRhKFxuICAgICAgICAgICAgICAgICAgICBcInRvZ2dsZV9jdXJyZW50XCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50LXByZXZpZXdcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nQm9va0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IFwiY2xvc2VfdG9nZ2xlXCIsXG4gICAgICAgICAgICAgICAgICAgIGFjdDogdG9nZ2xlUXVlc3Rpb25TZWxlY3QudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRpdl9pZDogdG9nZ2xlUXVlc3Rpb25TZWxlY3QucGFyZW50RWxlbWVudC5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICApO1xuICAgICAgICAkKFwiI3RvZ2dsZS1idXR0b25zXCIpLmFwcGVuZChjbG9zZUJ1dHRvbik7XG5cbiAgICAgICAgLy8gaWYgXCJsb2NrXCIgaXMgbm90IGluIHRvZ2dsZSBvcHRpb25zLCB0aGVuIGFsbG93IGFkZGluZyBtb3JlIGJ1dHRvbnMgdG8gdGhlIHByZXZpZXcgcGFuZWxcbiAgICAgICAgaWYgKCF0b2dnbGVPcHRpb25zLmluY2x1ZGVzKFwibG9ja1wiKSkge1xuICAgICAgICAgICAgbGV0IHNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAkKHNldEJ1dHRvbikudGV4dChcIlNlbGVjdCB0aGlzIFByb2JsZW1cIik7XG4gICAgICAgICAgICAkKHNldEJ1dHRvbikuYWRkQ2xhc3MoXCJidG4gYnRuLXByaW1hcnlcIik7XG4gICAgICAgICAgICAkKHNldEJ1dHRvbikuY2xpY2soXG4gICAgICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnRvZ2dsZVNldChcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudElELFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRRdWVzdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxzcmMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblR5cGVzXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50LXByZXZpZXdcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ0Jvb2tFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogXCJzZWxlY3RfdG9nZ2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Q6IHNlbGVjdGVkUXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfaWQ6IHBhcmVudElELFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAkKFwiI3RvZ2dsZS1idXR0b25zXCIpLmFwcGVuZChzZXRCdXR0b24pO1xuXG4gICAgICAgICAgICAvLyBpZiBcInRyYW5zZmVyXCIgaW4gdG9nZ2xlIG9wdGlvbnMsIGFuZCBpZiBjdXJyZW50IHF1ZXN0aW9uIHR5cGUgaXMgUGFyc29ucyBhbmQgc2VsZWN0ZWQgcXVlc3Rpb24gdHlwZSBpcyBhY3RpdmUgY29kZSwgdGhlbiBhZGQgXCJUcmFuc2ZlclwiIGJ1dHRvbiB0byBwcmV2aWV3IHBhbmVsXG4gICAgICAgICAgICBpZiAodG9nZ2xlT3B0aW9ucy5pbmNsdWRlcyhcInRyYW5zZmVyXCIpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUeXBlID0gJChcIiNcIiArIHBhcmVudElEKS5kYXRhKFwidG9nZ2xlX2N1cnJlbnRfdHlwZVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRUeXBlID1cbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25UeXBlc1t0b2dnbGVRdWVzdGlvblNlbGVjdC5zZWxlY3RlZEluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUeXBlID09IFwiUGFyc29ucyBNaXhlZC1VcCBDb2RlXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUeXBlID09IFwiQWN0aXZlIFdyaXRlIENvZGVcIlxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhbnNmZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAkKHRyYW5zZmVyQnV0dG9uKS50ZXh0KFwiVHJhbnNmZXIgUmVzcG9uc2VcIik7XG4gICAgICAgICAgICAgICAgICAgICQodHJhbnNmZXJCdXR0b24pLmFkZENsYXNzKFwiYnRuIGJ0bi1wcmltYXJ5XCIpO1xuICAgICAgICAgICAgICAgICAgICAkKHRyYW5zZmVyQnV0dG9uKS5jbGljayhcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnRvZ2dsZVRyYW5zZmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRRdWVzdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbHNyYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25UeXBlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIiN0b2dnbGUtYnV0dG9uc1wiKS5hcHBlbmQodHJhbnNmZXJCdXR0b24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQoXCIjY29tcG9uZW50LXByZXZpZXdcIikuc2hvdygpO1xuICAgIH1cblxuICAgIC8vIG9uIGNsaWNraW5nIFwiU2VsZWN0IHRoaXMgUHJvYmxlbVwiIGJ1dHRvbiwgY2xvc2UgcHJldmlldyBwYW5lbCwgcmVwbGFjZSBjdXJyZW50IHF1ZXN0aW9uIGluIGFzc2lnbm1lbnRzIHBhZ2Ugd2l0aCBzZWxlY3RlZCBxdWVzdGlvbiwgYW5kIHNlbmQgcmVxdWVzdCB0byB1cGRhdGUgZ3JhZGluZyBkYXRhYmFzZVxuICAgIC8vIF8gYHRvZ2dsZVNldGBcbiAgICBhc3luYyB0b2dnbGVTZXQocGFyZW50SUQsIHNlbGVjdGVkUXVlc3Rpb24sIGh0bWxzcmMsIHRvZ2dsZVF1ZXN0aW9uVHlwZXMpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9ySWQgPSBwYXJlbnRJRCArIFwiLXRvZ2dsZVNlbGVjdGVkUXVlc3Rpb25cIjtcbiAgICAgICAgdmFyIHRvZ2dsZVF1ZXN0aW9uU2VsZWN0ID0gZG9jdW1lbnRcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChwYXJlbnRJRClcbiAgICAgICAgICAgIC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlbGVjdFwiKVswXTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JJZCkuaW5uZXJIVE1MID0gXCJcIjsgLy8gbmVlZCB0byBjaGVjayB3aGV0aGVyIHRoaXMgaXMgZXZlbiBuZWNlc3NhcnlcbiAgICAgICAgYXdhaXQgcmVuZGVyUnVuZXN0b25lQ29tcG9uZW50KGh0bWxzcmMsIHNlbGVjdG9ySWQsIHtcbiAgICAgICAgICAgIHNlbGVjdG9yX2lkOiBzZWxlY3RvcklkLFxuICAgICAgICAgICAgaXNfdG9nZ2xlOiB0aGlzLnRvZ2dsZU9wdGlvbnMsXG4gICAgICAgICAgICBpc19zZWxlY3Q6IHRydWUsXG4gICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoXG4gICAgICAgICAgICBgJHtlQm9va0NvbmZpZy5uZXdfc2VydmVyX3ByZWZpeH0vYXNzZXNzbWVudC9zZXRfc2VsZWN0ZWRfcXVlc3Rpb24/bWV0YWlkPSR7cGFyZW50SUR9JnNlbGVjdGVkPSR7c2VsZWN0ZWRRdWVzdGlvbn1gLFxuICAgICAgICAgICAge31cbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgZmV0Y2gocmVxdWVzdCk7XG4gICAgICAgICQoXCIjdG9nZ2xlLXByZXZpZXdcIikuaHRtbChcIlwiKTtcbiAgICAgICAgJChcIiNcIiArIHBhcmVudElEKS5kYXRhKFwidG9nZ2xlX2N1cnJlbnRcIiwgc2VsZWN0ZWRRdWVzdGlvbik7XG4gICAgICAgICQoXCIjXCIgKyBwYXJlbnRJRCkuZGF0YShcbiAgICAgICAgICAgIFwidG9nZ2xlX2N1cnJlbnRfdHlwZVwiLFxuICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25UeXBlc1t0b2dnbGVRdWVzdGlvblNlbGVjdC5zZWxlY3RlZEluZGV4XVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIG9uIGNsaWNraW5nIFwiVHJhbnNmZXJcIiBidXR0b24sIGV4dHJhY3QgdGhlIGN1cnJlbnQgdGV4dCBhbmQgaW5kZW50YXRpb24gb2YgdGhlIFBhcnNvbnMgYmxvY2tzIGluIHRoZSBhbnN3ZXIgc3BhY2UsIHRoZW4gcGFzdGUgdGhhdCBpbnRvIHRoZSBzZWxlY3RlZCBhY3RpdmUgY29kZSBxdWVzdGlvblxuICAgIGFzeW5jIHRvZ2dsZVRyYW5zZmVyKFxuICAgICAgICBwYXJlbnRJRCxcbiAgICAgICAgc2VsZWN0ZWRRdWVzdGlvbixcbiAgICAgICAgaHRtbHNyYyxcbiAgICAgICAgdG9nZ2xlUXVlc3Rpb25UeXBlc1xuICAgICkge1xuICAgICAgICAvLyByZXRyaWV2ZSBhbGwgUGFyc29ucyBsaW5lcyB3aXRoaW4gdGhlIGFuc3dlciBzcGFjZSBhbmQgbG9vcCB0aHJvdWdoIHRoaXMgbGlzdFxuICAgICAgICB2YXIgY3VycmVudFBhcnNvbnMgPSBkb2N1bWVudFxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKHBhcmVudElEICsgXCItdG9nZ2xlU2VsZWN0ZWRRdWVzdGlvblwiKVxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZbY2xhc3NePSdhbnN3ZXInXVwiKVswXVxuICAgICAgICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcmV0dHlwcmludCBsYW5nLXB5XCIpO1xuICAgICAgICB2YXIgY3VycmVudFBhcnNvbnNDbGFzcztcbiAgICAgICAgdmFyIGN1cnJlbnRCbG9ja0luZGVudDtcbiAgICAgICAgdmFyIGluZGVudENvdW50O1xuICAgICAgICB2YXIgaW5kZW50O1xuICAgICAgICB2YXIgcGFyc29uc0xpbmU7XG4gICAgICAgIHZhciBwYXJzb25zTGluZXMgPSBgYDtcbiAgICAgICAgdmFyIGNvdW50O1xuICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IGN1cnJlbnRQYXJzb25zLmxlbmd0aDsgcCsrKSB7XG4gICAgICAgICAgICBpbmRlbnRDb3VudCA9IDA7XG4gICAgICAgICAgICBpbmRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgLy8gZm9yIFBhcnNvbnMgYmxvY2tzIHRoYXQgaGF2ZSBidWlsdC1pbiBpbmRlbnRhdGlvbiBpbiB0aGVpciBsaW5lc1xuICAgICAgICAgICAgY3VycmVudFBhcnNvbnNDbGFzcyA9IGN1cnJlbnRQYXJzb25zW3BdLmNsYXNzTGlzdFsyXTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UGFyc29uc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYXJzb25zQ2xhc3MuaW5jbHVkZXMoXCJpbmRlbnRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZW50Q291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoaW5kZW50Q291bnQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYXJzb25zQ2xhc3Muc2xpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYXJzb25zQ2xhc3MubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBmb3IgUGFyc29ucyBhbnN3ZXIgc3BhY2VzIHdpdGggdmVydGljYWwgbGluZXMgdGhhdCBhbGxvdyBzdHVkZW50IHRvIGRlZmluZSB0aGVpciBvd24gbGluZSBpbmRlbnRhdGlvblxuICAgICAgICAgICAgY3VycmVudEJsb2NrSW5kZW50ID1cbiAgICAgICAgICAgICAgICBjdXJyZW50UGFyc29uc1twXS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUubGVmdDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50QmxvY2tJbmRlbnQpIHtcbiAgICAgICAgICAgICAgICBpbmRlbnRDb3VudCA9XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGluZGVudENvdW50KSArXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEJsb2NrSW5kZW50LnNsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEJsb2NrSW5kZW50LmluZGV4T2YoXCJweFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSAvIDMwXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IGluZGVudENvdW50OyBkKyspIHtcbiAgICAgICAgICAgICAgICBpbmRlbnQgKz0gXCIgICAgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZXRyaWV2ZSBlYWNoIHRleHQgc25pcHBldCBvZiBlYWNoIFBhcnNvbnMgbGluZSBhbmQgbG9vcCB0aHJvdWdoIHRoaXMgbGlzdFxuICAgICAgICAgICAgcGFyc29uc0xpbmUgPSBjdXJyZW50UGFyc29uc1twXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNwYW5cIik7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBsID0gMDsgbCA8IHBhcnNvbnNMaW5lLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNvbnNMaW5lW2xdLmNoaWxkTm9kZXNbMF0ubm9kZU5hbWUgPT0gXCIjdGV4dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhcnNvbnMgYmxvY2tzIGhhdmUgZGlmZmVyaW5nIGFtb3VudHMgb2YgaGllcmFyY2h5IGxldmVscyAoc3BhbnMgd2l0aGluIHNwYW5zKVxuICAgICAgICAgICAgICAgICAgICBpZiAocCA9PSAwICYmIGNvdW50ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5lZWQgZGlmZmVyZW50IGNoZWNrIHRoYW4gbCA9PSAwIGJlY2F1c2UgdGhlIGwgbnVtYmVyaW5nIGRvZXNuJ3QgYWxpZ24gd2l0aCBsb2NhdGlvbiB3aXRoaW4gbGluZSBkdWUgdG8gaW5jb25zaXN0ZW50IHNwYW4gaGVpcmFyY2h5XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzb25zTGluZXMgKz0gaW5kZW50ICsgcGFyc29uc0xpbmVbbF0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzb25zTGluZXMgKz0gcGFyc29uc0xpbmVbbF0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNvbnNMaW5lcyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc29uc0xpbmVzICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZW50ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzb25zTGluZVtsXS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzb25zTGluZXMgPSBwYXJzb25zTGluZXMucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyByZXBsYWNlIGFsbCBleGlzdGluZyBjb2RlIHdpdGhpbiBzZWxlY3RlZCBhY3RpdmUgY29kZSBxdWVzdGlvbiB3aXRoIGV4dHJhY3RlZCBQYXJzb25zIHRleHRcbiAgICAgICAgdmFyIGh0bWxzcmNGb3JtZXIgPSBodG1sc3JjLnNsaWNlKFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIGh0bWxzcmMuaW5kZXhPZihcIjx0ZXh0YXJlYVwiKSArXG4gICAgICAgICAgICAgICAgaHRtbHNyYy5zcGxpdChcIjx0ZXh0YXJlYVwiKVsxXS5pbmRleE9mKFwiPlwiKSArXG4gICAgICAgICAgICAgICAgMTBcbiAgICAgICAgKTtcbiAgICAgICAgdmFyIGh0bWxzcmNMYXR0ZXIgPSBodG1sc3JjLnNsaWNlKFxuICAgICAgICAgICAgaHRtbHNyYy5pbmRleE9mKFwiPC90ZXh0YXJlYT5cIiksXG4gICAgICAgICAgICBodG1sc3JjLmxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBodG1sc3JjID0gaHRtbHNyY0Zvcm1lciArIHBhcnNvbnNMaW5lcyArIGh0bWxzcmNMYXR0ZXI7XG5cbiAgICAgICAgYXdhaXQgdGhpcy50b2dnbGVTZXQoXG4gICAgICAgICAgICBwYXJlbnRJRCxcbiAgICAgICAgICAgIHNlbGVjdGVkUXVlc3Rpb24sXG4gICAgICAgICAgICBodG1sc3JjLFxuICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25UeXBlc1xuICAgICAgICApO1xuICAgICAgICAkKFwiI2NvbXBvbmVudC1wcmV2aWV3XCIpLmhpZGUoKTtcbiAgICB9XG59XG5cbmlmICh0eXBlb2Ygd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID0ge307XG59XG5cbndpbmRvdy5jb21wb25lbnRfZmFjdG9yeS5zZWxlY3RxdWVzdGlvbiA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBTZWxlY3RPbmUob3B0cyk7XG59O1xuXG4vKlxuICogV2hlbiB0aGUgcGFnZSBpcyBsb2FkZWQgYW5kIHRoZSBsb2dpbiBjaGVja3MgYXJlIGNvbXBsZXRlIGZpbmQgYW5kIHJlbmRlclxuICogZWFjaCBzZWxlY3RxdWVzdGlvbiBjb21wb25lbnQgdGhhdCBpcyBub3QgcGFydCBvZiBhIHRpbWVkQXNzZXNzbWVudC5cbiAqKi9cbiQoZG9jdW1lbnQpLm9uKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2VsUXVlc3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgXCJbZGF0YS1jb21wb25lbnQ9c2VsZWN0cXVlc3Rpb25dXCJcbiAgICApO1xuICAgIGZvciAobGV0IGNxIG9mIHNlbFF1ZXN0aW9ucykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCQoY3EpLmNsb3Nlc3QoXCJbZGF0YS1jb21wb25lbnQ9dGltZWRBc3Nlc3NtZW50XVwiKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgZWxlbWVudCBleGlzdHMgd2l0aGluIGEgdGltZWQgY29tcG9uZW50LCBkb24ndCByZW5kZXIgaXQgaGVyZVxuICAgICAgICAgICAgICAgIGxldCB0bXAgPSBuZXcgU2VsZWN0T25lKHsgb3JpZzogY3EgfSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdG1wLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgcmVuZGVyaW5nIE5ldyBFeGVyY2lzZSAke2NxLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgIERldGFpbHM6ICR7ZXJyfWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLnN0YWNrKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
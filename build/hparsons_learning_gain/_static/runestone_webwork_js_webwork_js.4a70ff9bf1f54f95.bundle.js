"use strict";
(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_webwork_js_webwork_js"],{

/***/ 66142:
/*!*****************************************!*\
  !*** ./runestone/webwork/js/webwork.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase */ 2568);


window.wwList = {}; // Multiple Choice dictionary


class WebWork extends _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(opts) {
        super(opts);
        this.useRunestoneServices = true;
        this.multipleanswers = false;
        this.divid = opts.orig.id;
        this.correct = null;
        this.optional = false;
        this.answerList = [];
        this.correctList = [];
        this.question = null;
        this.caption = "WebWork";
        this.containerDiv = opts.orig
        //this.addCaption("runestone");
        if (this.divid !== "fakeww-ww-rs") {
            this.checkServer("webwork", true);
        }
    }

    restoreAnswers(data) {
        // Restore answers from storage retrieval done in RunestoneBase
        // sometimes data.answer can be null
        if (!data.answer) {
            data.answer = "";
        }
        // data.answers comes from postgresql as a JSON column type so no need to parse it.
        this.answers = data.answer;
        this.correct = data.correct;
        this.percent = data.percent;
        this.decorateStatus();
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
        var ex = localStorage.getItem(this.localStorageKey());

        if (ex !== null) {
            try {
                storedData = JSON.parse(ex);
                answers = storedData.answer.split(":");
            } catch (err) {
                // error while parsing; likely due to bad value stored in storage
                console.log(err.message);
                localStorage.removeItem(this.localStorageKey());
                return;
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

    processCurrentAnswers(data) {
        let correctCount = 0;
        let qCount = 0;
        let actString = "check:";
        this.answerObj = {}
        this.lastAnswerRaw = data;

        for (let k of Object.keys(data.rh_result.answers)) {
            qCount += 1;
            if (data.rh_result.answers[k].score == 1) {
                correctCount += 1;
            }
            this.answerObj[k] = `${data.rh_result.answers[k].original_student_ans}`
            actString += `actual:${data.rh_result.answers[k].original_student_ans}:expected:${data.rh_result.answers[k].correct_value}:`;
        }
        let pct = correctCount / qCount;
        // If this.percent is set, then runestonebase will transmit it as part of
        // the logBookEvent API.
        this.percent = pct;
        this.actString = actString + `correct:${correctCount}:count:${qCount}:pct:${pct}`;
        if (pct == 1.0) {
            this.correct = true;
        } else {
            this.correct = false;
        }

    }

    async logCurrentAnswer(sid) {
        this.logBookEvent({
            event: "webwork",
            div_id: this.divid, //todo unmangle problemid
            act: this.actString,
            correct: this.correct,
            answer: JSON.stringify(this.answerObj),
        });

    }

    checkCurrentAnswer() {

    }

}


//
// These are functions that get called in response to webwork generated events.
// submitting the work, or showing an answer.
function logWebWork(e, data) {
    if (eBookConfig.useRunestoneServices) {
        let wwObj = wwList[data.inputs_ref.problemUUID.replace("-ww-rs","")]
        if (wwObj) {
            wwObj.processCurrentAnswers(data);
            wwObj.logCurrentAnswer();
        } else {
            console.log(`Error: Could not find webwork object ${data.inputs_ref.problemUUID}`)
        }
    }
}

function logShowCorrect(e, data) {
    if (eBookConfig.useRunestoneServices) {
        let wwObj = wwList[data.inputs_ref.problemUUID.replace("-ww-rs","")]
        if (wwObj) {
            wwObj.logBookEvent({
                event: "webwork",
                div_id: data.inputs_ref.problemUUID,
                act: "show",
            });
        } else {
            console.log(`Error: Could not find webwork object ${data.inputs_ref.problemUUID}`)
        }
    }
}

async function getScores(sid, wwId) {

}

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}

window.component_factory.webwork = function(opts) {
    return new WebWork();
};

$(function() {
    $("body").on("runestone_ww_check", logWebWork);
    $("body").on("runestone_show_correct", logShowCorrect);
});


$(document).on("runestone:login-complete", function () {
    $("[data-component=webwork]").each(function (index) {
        // MC
        var opts = {
            orig: this,
            useRunestoneServices: eBookConfig.useRunestoneServices,
        };
        if ($(this).closest("[data-component=timedAssessment]").length == 0) {
            // If this element exists within a timed component, don't render it here
            window.wwList[this.id] = new WebWork(opts);
        }
    });
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX3dlYndvcmtfanNfd2Vid29ya19qcy40YTcwZmY5YmYxZjU0Zjk1LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwRDs7QUFFMUQsb0JBQW9COzs7QUFHcEIsc0JBQXNCLGdFQUFhOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywrQ0FBK0M7QUFDbEYsbUNBQW1DLCtDQUErQyxZQUFZLHdDQUF3QztBQUN0STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGFBQWEsU0FBUyxPQUFPLE9BQU8sSUFBSTtBQUN4RjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsZ0VBQWdFLDRCQUE0QjtBQUM1RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixVQUFVO0FBQ1YsZ0VBQWdFLDRCQUE0QjtBQUM1RjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3dlYndvcmsvanMvd2Vid29yay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUnVuZXN0b25lQmFzZSBmcm9tIFwiLi4vLi4vY29tbW9uL2pzL3J1bmVzdG9uZWJhc2VcIjtcblxud2luZG93Lnd3TGlzdCA9IHt9OyAvLyBNdWx0aXBsZSBDaG9pY2UgZGljdGlvbmFyeVxuXG5cbmNsYXNzIFdlYldvcmsgZXh0ZW5kcyBSdW5lc3RvbmVCYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIob3B0cyk7XG4gICAgICAgIHRoaXMudXNlUnVuZXN0b25lU2VydmljZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLm11bHRpcGxlYW5zd2VycyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpdmlkID0gb3B0cy5vcmlnLmlkO1xuICAgICAgICB0aGlzLmNvcnJlY3QgPSBudWxsO1xuICAgICAgICB0aGlzLm9wdGlvbmFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW5zd2VyTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmNvcnJlY3RMaXN0ID0gW107XG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmNhcHRpb24gPSBcIldlYldvcmtcIjtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYgPSBvcHRzLm9yaWdcbiAgICAgICAgLy90aGlzLmFkZENhcHRpb24oXCJydW5lc3RvbmVcIik7XG4gICAgICAgIGlmICh0aGlzLmRpdmlkICE9PSBcImZha2V3dy13dy1yc1wiKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrU2VydmVyKFwid2Vid29ya1wiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RvcmVBbnN3ZXJzKGRhdGEpIHtcbiAgICAgICAgLy8gUmVzdG9yZSBhbnN3ZXJzIGZyb20gc3RvcmFnZSByZXRyaWV2YWwgZG9uZSBpbiBSdW5lc3RvbmVCYXNlXG4gICAgICAgIC8vIHNvbWV0aW1lcyBkYXRhLmFuc3dlciBjYW4gYmUgbnVsbFxuICAgICAgICBpZiAoIWRhdGEuYW5zd2VyKSB7XG4gICAgICAgICAgICBkYXRhLmFuc3dlciA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGF0YS5hbnN3ZXJzIGNvbWVzIGZyb20gcG9zdGdyZXNxbCBhcyBhIEpTT04gY29sdW1uIHR5cGUgc28gbm8gbmVlZCB0byBwYXJzZSBpdC5cbiAgICAgICAgdGhpcy5hbnN3ZXJzID0gZGF0YS5hbnN3ZXI7XG4gICAgICAgIHRoaXMuY29ycmVjdCA9IGRhdGEuY29ycmVjdDtcbiAgICAgICAgdGhpcy5wZXJjZW50ID0gZGF0YS5wZXJjZW50O1xuICAgICAgICB0aGlzLmRlY29yYXRlU3RhdHVzKCk7XG4gICAgfVxuXG4gICAgY2hlY2tMb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIC8vIFJlcG9wdWxhdGVzIE1DTUEgcXVlc3Rpb25zIHdpdGggYSB1c2VyJ3MgcHJldmlvdXMgYW5zd2VycyxcbiAgICAgICAgLy8gd2hpY2ggd2VyZSBzdG9yZWQgaW50byBsb2NhbCBzdG9yYWdlLlxuICAgICAgICB2YXIgc3RvcmVkRGF0YTtcbiAgICAgICAgdmFyIGFuc3dlcnM7XG4gICAgICAgIGlmICh0aGlzLmdyYWRlcmFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsZW4gPSBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xuICAgICAgICB2YXIgZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcblxuICAgICAgICBpZiAoZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc3RvcmVkRGF0YSA9IEpTT04ucGFyc2UoZXgpO1xuICAgICAgICAgICAgICAgIGFuc3dlcnMgPSBzdG9yZWREYXRhLmFuc3dlci5zcGxpdChcIjpcIik7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAvLyBlcnJvciB3aGlsZSBwYXJzaW5nOyBsaWtlbHkgZHVlIHRvIGJhZCB2YWx1ZSBzdG9yZWQgaW4gc3RvcmFnZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRMb2NhbFN0b3JhZ2UoZGF0YSkge1xuICAgICAgICB2YXIgdGltZVN0YW1wID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIHN0b3JhZ2VPYmogPSB7XG4gICAgICAgICAgICBhbnN3ZXI6IGRhdGEuYW5zd2VyLFxuICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1lU3RhbXAsXG4gICAgICAgICAgICBjb3JyZWN0OiBkYXRhLmNvcnJlY3QsXG4gICAgICAgIH07XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VPYmopXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvY2Vzc0N1cnJlbnRBbnN3ZXJzKGRhdGEpIHtcbiAgICAgICAgbGV0IGNvcnJlY3RDb3VudCA9IDA7XG4gICAgICAgIGxldCBxQ291bnQgPSAwO1xuICAgICAgICBsZXQgYWN0U3RyaW5nID0gXCJjaGVjazpcIjtcbiAgICAgICAgdGhpcy5hbnN3ZXJPYmogPSB7fVxuICAgICAgICB0aGlzLmxhc3RBbnN3ZXJSYXcgPSBkYXRhO1xuXG4gICAgICAgIGZvciAobGV0IGsgb2YgT2JqZWN0LmtleXMoZGF0YS5yaF9yZXN1bHQuYW5zd2VycykpIHtcbiAgICAgICAgICAgIHFDb3VudCArPSAxO1xuICAgICAgICAgICAgaWYgKGRhdGEucmhfcmVzdWx0LmFuc3dlcnNba10uc2NvcmUgPT0gMSkge1xuICAgICAgICAgICAgICAgIGNvcnJlY3RDb3VudCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hbnN3ZXJPYmpba10gPSBgJHtkYXRhLnJoX3Jlc3VsdC5hbnN3ZXJzW2tdLm9yaWdpbmFsX3N0dWRlbnRfYW5zfWBcbiAgICAgICAgICAgIGFjdFN0cmluZyArPSBgYWN0dWFsOiR7ZGF0YS5yaF9yZXN1bHQuYW5zd2Vyc1trXS5vcmlnaW5hbF9zdHVkZW50X2Fuc306ZXhwZWN0ZWQ6JHtkYXRhLnJoX3Jlc3VsdC5hbnN3ZXJzW2tdLmNvcnJlY3RfdmFsdWV9OmA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBjdCA9IGNvcnJlY3RDb3VudCAvIHFDb3VudDtcbiAgICAgICAgLy8gSWYgdGhpcy5wZXJjZW50IGlzIHNldCwgdGhlbiBydW5lc3RvbmViYXNlIHdpbGwgdHJhbnNtaXQgaXQgYXMgcGFydCBvZlxuICAgICAgICAvLyB0aGUgbG9nQm9va0V2ZW50IEFQSS5cbiAgICAgICAgdGhpcy5wZXJjZW50ID0gcGN0O1xuICAgICAgICB0aGlzLmFjdFN0cmluZyA9IGFjdFN0cmluZyArIGBjb3JyZWN0OiR7Y29ycmVjdENvdW50fTpjb3VudDoke3FDb3VudH06cGN0OiR7cGN0fWA7XG4gICAgICAgIGlmIChwY3QgPT0gMS4wKSB7XG4gICAgICAgICAgICB0aGlzLmNvcnJlY3QgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGFzeW5jIGxvZ0N1cnJlbnRBbnN3ZXIoc2lkKSB7XG4gICAgICAgIHRoaXMubG9nQm9va0V2ZW50KHtcbiAgICAgICAgICAgIGV2ZW50OiBcIndlYndvcmtcIixcbiAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCwgLy90b2RvIHVubWFuZ2xlIHByb2JsZW1pZFxuICAgICAgICAgICAgYWN0OiB0aGlzLmFjdFN0cmluZyxcbiAgICAgICAgICAgIGNvcnJlY3Q6IHRoaXMuY29ycmVjdCxcbiAgICAgICAgICAgIGFuc3dlcjogSlNPTi5zdHJpbmdpZnkodGhpcy5hbnN3ZXJPYmopLFxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGNoZWNrQ3VycmVudEFuc3dlcigpIHtcblxuICAgIH1cblxufVxuXG5cbi8vXG4vLyBUaGVzZSBhcmUgZnVuY3Rpb25zIHRoYXQgZ2V0IGNhbGxlZCBpbiByZXNwb25zZSB0byB3ZWJ3b3JrIGdlbmVyYXRlZCBldmVudHMuXG4vLyBzdWJtaXR0aW5nIHRoZSB3b3JrLCBvciBzaG93aW5nIGFuIGFuc3dlci5cbmZ1bmN0aW9uIGxvZ1dlYldvcmsoZSwgZGF0YSkge1xuICAgIGlmIChlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcykge1xuICAgICAgICBsZXQgd3dPYmogPSB3d0xpc3RbZGF0YS5pbnB1dHNfcmVmLnByb2JsZW1VVUlELnJlcGxhY2UoXCItd3ctcnNcIixcIlwiKV1cbiAgICAgICAgaWYgKHd3T2JqKSB7XG4gICAgICAgICAgICB3d09iai5wcm9jZXNzQ3VycmVudEFuc3dlcnMoZGF0YSk7XG4gICAgICAgICAgICB3d09iai5sb2dDdXJyZW50QW5zd2VyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6IENvdWxkIG5vdCBmaW5kIHdlYndvcmsgb2JqZWN0ICR7ZGF0YS5pbnB1dHNfcmVmLnByb2JsZW1VVUlEfWApXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvZ1Nob3dDb3JyZWN0KGUsIGRhdGEpIHtcbiAgICBpZiAoZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMpIHtcbiAgICAgICAgbGV0IHd3T2JqID0gd3dMaXN0W2RhdGEuaW5wdXRzX3JlZi5wcm9ibGVtVVVJRC5yZXBsYWNlKFwiLXd3LXJzXCIsXCJcIildXG4gICAgICAgIGlmICh3d09iaikge1xuICAgICAgICAgICAgd3dPYmoubG9nQm9va0V2ZW50KHtcbiAgICAgICAgICAgICAgICBldmVudDogXCJ3ZWJ3b3JrXCIsXG4gICAgICAgICAgICAgICAgZGl2X2lkOiBkYXRhLmlucHV0c19yZWYucHJvYmxlbVVVSUQsXG4gICAgICAgICAgICAgICAgYWN0OiBcInNob3dcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiBDb3VsZCBub3QgZmluZCB3ZWJ3b3JrIG9iamVjdCAke2RhdGEuaW5wdXRzX3JlZi5wcm9ibGVtVVVJRH1gKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRTY29yZXMoc2lkLCB3d0lkKSB7XG5cbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPSB7fTtcbn1cblxud2luZG93LmNvbXBvbmVudF9mYWN0b3J5LndlYndvcmsgPSBmdW5jdGlvbihvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBXZWJXb3JrKCk7XG59O1xuXG4kKGZ1bmN0aW9uKCkge1xuICAgICQoXCJib2R5XCIpLm9uKFwicnVuZXN0b25lX3d3X2NoZWNrXCIsIGxvZ1dlYldvcmspO1xuICAgICQoXCJib2R5XCIpLm9uKFwicnVuZXN0b25lX3Nob3dfY29ycmVjdFwiLCBsb2dTaG93Q29ycmVjdCk7XG59KTtcblxuXG4kKGRvY3VtZW50KS5vbihcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIltkYXRhLWNvbXBvbmVudD13ZWJ3b3JrXVwiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAvLyBNQ1xuICAgICAgICB2YXIgb3B0cyA9IHtcbiAgICAgICAgICAgIG9yaWc6IHRoaXMsXG4gICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMsXG4gICAgICAgIH07XG4gICAgICAgIGlmICgkKHRoaXMpLmNsb3Nlc3QoXCJbZGF0YS1jb21wb25lbnQ9dGltZWRBc3Nlc3NtZW50XVwiKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBlbGVtZW50IGV4aXN0cyB3aXRoaW4gYSB0aW1lZCBjb21wb25lbnQsIGRvbid0IHJlbmRlciBpdCBoZXJlXG4gICAgICAgICAgICB3aW5kb3cud3dMaXN0W3RoaXMuaWRdID0gbmV3IFdlYldvcmsob3B0cyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
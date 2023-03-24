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


    // This is called when the runestone_ww_check event is triggered by the webwork problem
    // Note the webwork problem is in an iframe so we rely on this event and the data
    // compiled and passed along with the event to "grade" the answer.
    processCurrentAnswers(data) {
        let correctCount = 0;
        let qCount = 0;
        let actString = "check:";
        this.answerObj = {}
        this.lastAnswerRaw = data;
        this.answerObj.answers = {};
        this.answerObj.mqAnswers = {};
        // data.inputs_
        for (let k of Object.keys(data.rh_result.answers)) {
            qCount += 1;
            if (data.rh_result.answers[k].score == 1) {
                correctCount += 1;
            }
            this.answerObj.answers[k] = `${data.rh_result.answers[k].original_student_ans}`
            let mqKey = `MaThQuIlL_${k}`;
            this.answerObj.mqAnswers[mqKey] = data.inputs_ref[mqKey];
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
        this.decorateStatus();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX3dlYndvcmtfanNfd2Vid29ya19qcy5jMDVhYjYwNjgwYWM3NDhmLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwRDs7QUFFMUQsb0JBQW9COzs7QUFHcEIsc0JBQXNCLGdFQUFhOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrQ0FBK0M7QUFDMUYscUNBQXFDLEVBQUU7QUFDdkM7QUFDQSxtQ0FBbUMsK0NBQStDLFlBQVksd0NBQXdDO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsYUFBYSxTQUFTLE9BQU8sT0FBTyxJQUFJO0FBQ3hGO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGdFQUFnRSw0QkFBNEI7QUFDNUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWLGdFQUFnRSw0QkFBNEI7QUFDNUY7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS93ZWJ3b3JrL2pzL3dlYndvcmsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJ1bmVzdG9uZUJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlXCI7XG5cbndpbmRvdy53d0xpc3QgPSB7fTsgLy8gTXVsdGlwbGUgQ2hvaWNlIGRpY3Rpb25hcnlcblxuXG5jbGFzcyBXZWJXb3JrIGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKG9wdHMpO1xuICAgICAgICB0aGlzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tdWx0aXBsZWFuc3dlcnMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXZpZCA9IG9wdHMub3JpZy5pZDtcbiAgICAgICAgdGhpcy5jb3JyZWN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcHRpb25hbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFuc3dlckxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jb3JyZWN0TGlzdCA9IFtdO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYXB0aW9uID0gXCJXZWJXb3JrXCI7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2ID0gb3B0cy5vcmlnXG4gICAgICAgIC8vdGhpcy5hZGRDYXB0aW9uKFwicnVuZXN0b25lXCIpO1xuICAgICAgICBpZiAodGhpcy5kaXZpZCAhPT0gXCJmYWtld3ctd3ctcnNcIikge1xuICAgICAgICAgICAgdGhpcy5jaGVja1NlcnZlcihcIndlYndvcmtcIiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN0b3JlQW5zd2VycyhkYXRhKSB7XG4gICAgICAgIC8vIFJlc3RvcmUgYW5zd2VycyBmcm9tIHN0b3JhZ2UgcmV0cmlldmFsIGRvbmUgaW4gUnVuZXN0b25lQmFzZVxuICAgICAgICAvLyBzb21ldGltZXMgZGF0YS5hbnN3ZXIgY2FuIGJlIG51bGxcbiAgICAgICAgaWYgKCFkYXRhLmFuc3dlcikge1xuICAgICAgICAgICAgZGF0YS5hbnN3ZXIgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRhdGEuYW5zd2VycyBjb21lcyBmcm9tIHBvc3RncmVzcWwgYXMgYSBKU09OIGNvbHVtbiB0eXBlIHNvIG5vIG5lZWQgdG8gcGFyc2UgaXQuXG4gICAgICAgIHRoaXMuYW5zd2VycyA9IGRhdGEuYW5zd2VyO1xuICAgICAgICB0aGlzLmNvcnJlY3QgPSBkYXRhLmNvcnJlY3Q7XG4gICAgICAgIHRoaXMucGVyY2VudCA9IGRhdGEucGVyY2VudDtcbiAgICAgICAgdGhpcy5kZWNvcmF0ZVN0YXR1cygpO1xuICAgIH1cblxuICAgIGNoZWNrTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICAvLyBSZXBvcHVsYXRlcyBNQ01BIHF1ZXN0aW9ucyB3aXRoIGEgdXNlcidzIHByZXZpb3VzIGFuc3dlcnMsXG4gICAgICAgIC8vIHdoaWNoIHdlcmUgc3RvcmVkIGludG8gbG9jYWwgc3RvcmFnZS5cbiAgICAgICAgdmFyIHN0b3JlZERhdGE7XG4gICAgICAgIHZhciBhbnN3ZXJzO1xuICAgICAgICBpZiAodGhpcy5ncmFkZXJhY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGVuID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgICAgICAgdmFyIGV4ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSk7XG5cbiAgICAgICAgaWYgKGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHN0b3JlZERhdGEgPSBKU09OLnBhcnNlKGV4KTtcbiAgICAgICAgICAgICAgICBhbnN3ZXJzID0gc3RvcmVkRGF0YS5hbnN3ZXIuc3BsaXQoXCI6XCIpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gZXJyb3Igd2hpbGUgcGFyc2luZzsgbGlrZWx5IGR1ZSB0byBiYWQgdmFsdWUgc3RvcmVkIGluIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TG9jYWxTdG9yYWdlKGRhdGEpIHtcbiAgICAgICAgdmFyIHRpbWVTdGFtcCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBzdG9yYWdlT2JqID0ge1xuICAgICAgICAgICAgYW5zd2VyOiBkYXRhLmFuc3dlcixcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZVN0YW1wLFxuICAgICAgICAgICAgY29ycmVjdDogZGF0YS5jb3JyZWN0LFxuICAgICAgICB9O1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlS2V5KCksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShzdG9yYWdlT2JqKVxuICAgICAgICApO1xuICAgIH1cblxuXG4gICAgLy8gVGhpcyBpcyBjYWxsZWQgd2hlbiB0aGUgcnVuZXN0b25lX3d3X2NoZWNrIGV2ZW50IGlzIHRyaWdnZXJlZCBieSB0aGUgd2Vid29yayBwcm9ibGVtXG4gICAgLy8gTm90ZSB0aGUgd2Vid29yayBwcm9ibGVtIGlzIGluIGFuIGlmcmFtZSBzbyB3ZSByZWx5IG9uIHRoaXMgZXZlbnQgYW5kIHRoZSBkYXRhXG4gICAgLy8gY29tcGlsZWQgYW5kIHBhc3NlZCBhbG9uZyB3aXRoIHRoZSBldmVudCB0byBcImdyYWRlXCIgdGhlIGFuc3dlci5cbiAgICBwcm9jZXNzQ3VycmVudEFuc3dlcnMoZGF0YSkge1xuICAgICAgICBsZXQgY29ycmVjdENvdW50ID0gMDtcbiAgICAgICAgbGV0IHFDb3VudCA9IDA7XG4gICAgICAgIGxldCBhY3RTdHJpbmcgPSBcImNoZWNrOlwiO1xuICAgICAgICB0aGlzLmFuc3dlck9iaiA9IHt9XG4gICAgICAgIHRoaXMubGFzdEFuc3dlclJhdyA9IGRhdGE7XG4gICAgICAgIHRoaXMuYW5zd2VyT2JqLmFuc3dlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5hbnN3ZXJPYmoubXFBbnN3ZXJzID0ge307XG4gICAgICAgIC8vIGRhdGEuaW5wdXRzX1xuICAgICAgICBmb3IgKGxldCBrIG9mIE9iamVjdC5rZXlzKGRhdGEucmhfcmVzdWx0LmFuc3dlcnMpKSB7XG4gICAgICAgICAgICBxQ291bnQgKz0gMTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJoX3Jlc3VsdC5hbnN3ZXJzW2tdLnNjb3JlID09IDEpIHtcbiAgICAgICAgICAgICAgICBjb3JyZWN0Q291bnQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYW5zd2VyT2JqLmFuc3dlcnNba10gPSBgJHtkYXRhLnJoX3Jlc3VsdC5hbnN3ZXJzW2tdLm9yaWdpbmFsX3N0dWRlbnRfYW5zfWBcbiAgICAgICAgICAgIGxldCBtcUtleSA9IGBNYVRoUXVJbExfJHtrfWA7XG4gICAgICAgICAgICB0aGlzLmFuc3dlck9iai5tcUFuc3dlcnNbbXFLZXldID0gZGF0YS5pbnB1dHNfcmVmW21xS2V5XTtcbiAgICAgICAgICAgIGFjdFN0cmluZyArPSBgYWN0dWFsOiR7ZGF0YS5yaF9yZXN1bHQuYW5zd2Vyc1trXS5vcmlnaW5hbF9zdHVkZW50X2Fuc306ZXhwZWN0ZWQ6JHtkYXRhLnJoX3Jlc3VsdC5hbnN3ZXJzW2tdLmNvcnJlY3RfdmFsdWV9OmA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBjdCA9IGNvcnJlY3RDb3VudCAvIHFDb3VudDtcbiAgICAgICAgLy8gSWYgdGhpcy5wZXJjZW50IGlzIHNldCwgdGhlbiBydW5lc3RvbmViYXNlIHdpbGwgdHJhbnNtaXQgaXQgYXMgcGFydCBvZlxuICAgICAgICAvLyB0aGUgbG9nQm9va0V2ZW50IEFQSS5cbiAgICAgICAgdGhpcy5wZXJjZW50ID0gcGN0O1xuICAgICAgICB0aGlzLmFjdFN0cmluZyA9IGFjdFN0cmluZyArIGBjb3JyZWN0OiR7Y29ycmVjdENvdW50fTpjb3VudDoke3FDb3VudH06cGN0OiR7cGN0fWA7XG4gICAgICAgIGlmIChwY3QgPT0gMS4wKSB7XG4gICAgICAgICAgICB0aGlzLmNvcnJlY3QgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWNvcmF0ZVN0YXR1cygpO1xuXG4gICAgfVxuXG4gICAgYXN5bmMgbG9nQ3VycmVudEFuc3dlcihzaWQpIHtcbiAgICAgICAgdGhpcy5sb2dCb29rRXZlbnQoe1xuICAgICAgICAgICAgZXZlbnQ6IFwid2Vid29ya1wiLFxuICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLCAvL3RvZG8gdW5tYW5nbGUgcHJvYmxlbWlkXG4gICAgICAgICAgICBhY3Q6IHRoaXMuYWN0U3RyaW5nLFxuICAgICAgICAgICAgY29ycmVjdDogdGhpcy5jb3JyZWN0LFxuICAgICAgICAgICAgYW5zd2VyOiBKU09OLnN0cmluZ2lmeSh0aGlzLmFuc3dlck9iaiksXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgY2hlY2tDdXJyZW50QW5zd2VyKCkge1xuXG4gICAgfVxuXG59XG5cblxuLy9cbi8vIFRoZXNlIGFyZSBmdW5jdGlvbnMgdGhhdCBnZXQgY2FsbGVkIGluIHJlc3BvbnNlIHRvIHdlYndvcmsgZ2VuZXJhdGVkIGV2ZW50cy5cbi8vIHN1Ym1pdHRpbmcgdGhlIHdvcmssIG9yIHNob3dpbmcgYW4gYW5zd2VyLlxuZnVuY3Rpb24gbG9nV2ViV29yayhlLCBkYXRhKSB7XG4gICAgaWYgKGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzKSB7XG4gICAgICAgIGxldCB3d09iaiA9IHd3TGlzdFtkYXRhLmlucHV0c19yZWYucHJvYmxlbVVVSUQucmVwbGFjZShcIi13dy1yc1wiLFwiXCIpXVxuICAgICAgICBpZiAod3dPYmopIHtcbiAgICAgICAgICAgIHd3T2JqLnByb2Nlc3NDdXJyZW50QW5zd2VycyhkYXRhKTtcbiAgICAgICAgICAgIHd3T2JqLmxvZ0N1cnJlbnRBbnN3ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogQ291bGQgbm90IGZpbmQgd2Vid29yayBvYmplY3QgJHtkYXRhLmlucHV0c19yZWYucHJvYmxlbVVVSUR9YClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9nU2hvd0NvcnJlY3QoZSwgZGF0YSkge1xuICAgIGlmIChlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcykge1xuICAgICAgICBsZXQgd3dPYmogPSB3d0xpc3RbZGF0YS5pbnB1dHNfcmVmLnByb2JsZW1VVUlELnJlcGxhY2UoXCItd3ctcnNcIixcIlwiKV1cbiAgICAgICAgaWYgKHd3T2JqKSB7XG4gICAgICAgICAgICB3d09iai5sb2dCb29rRXZlbnQoe1xuICAgICAgICAgICAgICAgIGV2ZW50OiBcIndlYndvcmtcIixcbiAgICAgICAgICAgICAgICBkaXZfaWQ6IGRhdGEuaW5wdXRzX3JlZi5wcm9ibGVtVVVJRCxcbiAgICAgICAgICAgICAgICBhY3Q6IFwic2hvd1wiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6IENvdWxkIG5vdCBmaW5kIHdlYndvcmsgb2JqZWN0ICR7ZGF0YS5pbnB1dHNfcmVmLnByb2JsZW1VVUlEfWApXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNjb3JlcyhzaWQsIHd3SWQpIHtcblxufVxuXG5pZiAodHlwZW9mIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9IHt9O1xufVxuXG53aW5kb3cuY29tcG9uZW50X2ZhY3Rvcnkud2Vid29yayA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IFdlYldvcmsoKTtcbn07XG5cbiQoZnVuY3Rpb24oKSB7XG4gICAgJChcImJvZHlcIikub24oXCJydW5lc3RvbmVfd3dfY2hlY2tcIiwgbG9nV2ViV29yayk7XG4gICAgJChcImJvZHlcIikub24oXCJydW5lc3RvbmVfc2hvd19jb3JyZWN0XCIsIGxvZ1Nob3dDb3JyZWN0KTtcbn0pO1xuXG5cbiQoZG9jdW1lbnQpLm9uKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PXdlYndvcmtdXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIC8vIE1DXG4gICAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICAgICAgb3JpZzogdGhpcyxcbiAgICAgICAgICAgIHVzZVJ1bmVzdG9uZVNlcnZpY2VzOiBlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcyxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCQodGhpcykuY2xvc2VzdChcIltkYXRhLWNvbXBvbmVudD10aW1lZEFzc2Vzc21lbnRdXCIpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGVsZW1lbnQgZXhpc3RzIHdpdGhpbiBhIHRpbWVkIGNvbXBvbmVudCwgZG9uJ3QgcmVuZGVyIGl0IGhlcmVcbiAgICAgICAgICAgIHdpbmRvdy53d0xpc3RbdGhpcy5pZF0gPSBuZXcgV2ViV29yayhvcHRzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
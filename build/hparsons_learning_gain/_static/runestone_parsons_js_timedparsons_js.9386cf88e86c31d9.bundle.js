(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_parsons_js_timedparsons_js"],{

/***/ 44098:
/*!*******************************************!*\
  !*** ./runestone/parsons/css/parsons.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 99786:
/*!********************************************!*\
  !*** ./runestone/parsons/css/prettify.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 97430:
/*!********************************************!*\
  !*** ./runestone/parsons/js/hammer.min.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.8",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha, true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return ha}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map

/***/ }),

/***/ 21417:
/*!********************************************!*\
  !*** ./runestone/parsons/js/lineGrader.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LineBasedGrader)
/* harmony export */ });
class LineBasedGrader {
    constructor(problem) {
        this.problem = problem;
    }
    // Use a LIS (Longest Increasing Subsequence) algorithm to return the indexes
    // that are not part of that subsequence.
    inverseLISIndices(arr) {
        // Get all subsequences
        var allSubsequences = [];
        for (var i = 0; i < arr.length; i++) {
            var subsequenceForCurrent = [arr[i]],
                current = arr[i],
                lastElementAdded = -1;
            for (var j = i; j < arr.length; j++) {
                var subsequent = arr[j];
                if (subsequent > current && lastElementAdded < subsequent) {
                    subsequenceForCurrent.push(subsequent);
                    lastElementAdded = subsequent;
                }
            }
            allSubsequences.push(subsequenceForCurrent);
        }
        // Figure out the longest one
        var longestSubsequenceLength = -1;
        var longestSubsequence;
        for (let i in allSubsequences) {
            var subs = allSubsequences[i];
            if (subs.length > longestSubsequenceLength) {
                longestSubsequenceLength = subs.length;
                longestSubsequence = subs;
            }
        }
        // Create the inverse indexes
        var indexes = [];
        var lIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            if (lIndex > longestSubsequence.length) {
                indexes.push(i);
            } else {
                if (arr[i] == longestSubsequence[lIndex]) {
                    lIndex += 1;
                } else {
                    indexes.push(i);
                }
            }
        }
        return indexes;
    }
    // grade that element, returning the state
    grade() {
        var problem = this.problem;
        problem.clearFeedback();
        this.correctLines = 0;
        this.percentLines = 0;
        this.incorrectIndents = 0;
        var solutionLines = problem.solution;
        var answerLines = problem.answerLines();
        var i;
        var state;
        this.percentLines =
            Math.min(answerLines.length, solutionLines.length) /
            Math.max(answerLines.length, solutionLines.length);
        if (answerLines.length < solutionLines.length) {
            state = "incorrectTooShort";
            this.correctLength = false;
        } else if (answerLines.length == solutionLines.length) {
            this.correctLength = true;
        } else {
            this.correctLength = false;
        }

        // Determine whether the code **that is there** is in the correct order
        // If there is too much or too little code this only matters for
        // calculating a percentage score.
        let isCorrectOrder = true;
        this.correctLines = 0;
        this.solutionLength = solutionLines.length;
        let loopLimit = Math.min(solutionLines.length, answerLines.length);
        for (i = 0; i < loopLimit; i++) {
            if (answerLines[i].text !== solutionLines[i].text) {
                isCorrectOrder = false;
            } else {
                this.correctLines += 1;
            }
        }

        // Determine whether blocks are indented correctly
        this.indentLeft = [];
        this.indentRight = [];
        for (i = 0; i < loopLimit; i++) {
            if (answerLines[i].viewIndent() < solutionLines[i].indent) {
                this.indentRight.push(answerLines[i]);
            } else if (answerLines[i].viewIndent() > solutionLines[i].indent) {
                this.indentLeft.push(answerLines[i]);
            }
        }
        this.incorrectIndents =
            this.indentLeft.length + this.indentRight.length;
        if (
            this.incorrectIndents == 0 &&
            isCorrectOrder &&
            this.correctLength
        ) {
            // Perfect
            state = "correct";
        } else if (this.correctLength && isCorrectOrder) {
            state = "incorrectIndent";
        } else if (!isCorrectOrder && state != "incorrectTooShort") {
            state = "incorrectMoveBlocks";
        }
        this.calculatePercent();
        this.graderState = state;
        return state;
    }

    calculatePercent() {
        let numLines = this.percentLines * 0.2;
        let lines = this.problem.answerLines().length;
        let numCorrectBlocks = (this.correctLines / lines) * 0.4;
        let numCorrectIndents =
            ((this.correctLines - this.incorrectIndents) / lines) * 0.4;

        this.problem.percent = numLines + numCorrectBlocks + numCorrectIndents;
    }
}


/***/ }),

/***/ 59164:
/*!*************************************************!*\
  !*** ./runestone/parsons/js/parsons-i18n.en.js ***!
  \*************************************************/
/***/ (() => {

$.i18n().load({
    en: {
        msg_parson_check_me: "Check",
        msg_parson_reset: "Reset",
        msg_parson_help: "Help me",
        msg_parson_too_short: "Your program is too short. Add more blocks.",
        msg_parson_drag_from_here: "Drag from here",
        msg_parson_drag_to_here: "Drop blocks here",
        msg_parson_correct_first_try:
            "Perfect!  It took you only one try to solve this.  Great job!",
        msg_parson_correct:
            "Perfect!  It took you $1 tries to solve this.  Click Reset to try to solve it in one attempt.",
        msg_parson_wrong_indent:
            "This block is not indented correctly. Either indent it more by dragging it right or reduce the indention by dragging it left.",
        msg_parson_wrong_indents:
            "These blocks are not indented correctly. To indent a block more, drag it to the right. To reduce the indention, drag it to the left.",
        msg_parson_wrong_order:
            "Highlighted blocks in your program are wrong or are in the wrong order. This can be fixed by moving, removing, or replacing highlighted blocks.",
        msg_parson_arrow_navigate:
            "Arrow keys to navigate. Space to select / deselect block to move.",
        msg_parson_help_info:
            "Click on the Help Me button if you want to make the problem easier",
        msg_parson_not_solution:
            "Disabled an unneeded code block (one that is not part of the solution).",
        msg_parson_provided_indent: "Provided the indentation.",
        msg_parson_combined_blocks: "Combined two code blocks into one.",
        msg_parson_remove_incorrect:
            "Will remove an incorrect code block from answer area",
        msg_parson_will_combine: "Will combine two blocks",
        msg_parson_atleast_three_attempts:
            "You must make at least three distinct full attempts at a solution before you can get help",
        msg_parson_three_blocks_left:
            "There are only 3 correct blocks left.  You should be able to put them in order",
        msg_parson_will_provide_indent: "Will provide indentation",
    },
});


/***/ }),

/***/ 16432:
/*!****************************************************!*\
  !*** ./runestone/parsons/js/parsons-i18n.pt-br.js ***!
  \****************************************************/
/***/ (() => {

$.i18n().load({
    "pt-br": {
        msg_parson_check_me: "Verificar",
        msg_parson_reset: "Resetar",
        msg_parson_help:"Ajuda",
        msg_parson_too_short: "Seu programa é muito curto. Adicione mais blocos.",
        msg_parson_drag_from_here: "Arraste daqui",
        msg_parson_drag_to_here: "Largue os blocos aqui",
        msg_parson_correct_first_try:
            "Perfeito! Você levou apenas uma tentativa para resolver. Bom trabalho!",
        msg_parson_correct:
            "Perfeito! Você levou $1 tentativas para resolver. Clique em Resetar para tentar resolver em uma tentativa." ,
        msg_parson_wrong_indent:
            "Este bloco não está indentado corretamente. Indente mais arrastando-o para a direita ou reduza a indentação arrastando para a esquerda.",
        msg_parson_wrong_indents:
            "Estes blocos não estão indentados corretamente. Para indentar mais, arraste o bloco para a direita. Para reduzir a indentação, arraste para a esquerda.",
        msg_parson_wrong_order:
            "Blocos destacados no seu programa estão errados ou estão na ordem errada. Isso pode ser resolvido movendo, excluindo ou substituindo os blocos destacados.",
        msg_parson_arrow_navigate:
            "Use as teclas de setas para navegar. Espaço para selecionar/ desmarcar blocos para mover.",
        msg_parson_help_info:
            "Clique no botão Ajuda se você quiser facilitar o problema",
        msg_parson_not_solution:
            "Foi desabilitado um bloco de código desnecessário (que não faz parte da solução).",
        msg_parson_provided_indent:"Foi fornecida a indentação.",
        msg_parson_combined_blocks:"Dois blocos de códigos foram combinados em um.",
        msg_parson_remove_incorrect:
            "Será removido um bloco de código incorreto da área de resposta",
        msg_parson_will_combine:"Serão combinados dois blocos",
        msg_parson_atleast_three_attempts:
            "Você deve tentar pelo menos três vezes antes de pedir ajuda",
        msg_parson_three_blocks_left:
            "Restam apenas 3 blocos corretos. Você deve colocá-los em ordem",
        msg_parson_will_provide_indent: "Será fornecida a indentação"
    },
});


/***/ }),

/***/ 35718:
/*!*****************************************!*\
  !*** ./runestone/parsons/js/parsons.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prsList": () => (/* binding */ prsList),
/* harmony export */   "default": () => (/* binding */ Parsons)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _parsons_i18n_en_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsons-i18n.en.js */ 59164);
/* harmony import */ var _parsons_i18n_en_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_parsons_i18n_en_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parsons_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsons-i18n.pt-br.js */ 16432);
/* harmony import */ var _parsons_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_parsons_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _prettify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prettify.js */ 87904);
/* harmony import */ var _prettify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prettify_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_parsons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/parsons.css */ 44098);
/* harmony import */ var _css_prettify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/prettify.css */ 99786);
/* harmony import */ var _lineGrader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lineGrader */ 21417);
/* harmony import */ var _parsonsLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsonsLine */ 18423);
/* harmony import */ var _parsonsBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsonsBlock */ 404);
/* =====================================================================
==== Parsons Runestone Directive Javascript ============================
======== Renders a Parsons problem based on the HTML created by the
======== parsons.py script and the RST file.
==== CONTRIBUTORS ======================================================
======== Isaiah Mayerchak
======== Jeff Rick
======== Barbara Ericson
======== Cole Bowers
==== Adapted form the original JS Parsons by ===========================
======== Ville Karavirta
======== Petri Ihantola
======== Juha Helminen
======== Mike Hewner
===================================================================== */
/* =====================================================================
==== LineBasedGrader Object ============================================
======== Used for grading a Parsons problem.
==== PROPERTIES ========================================================
======== problem: the Parsons problem
===================================================================== */












/* =====================================================================
==== Parsons Object ====================================================
======== The model and view of a Parsons problem based on what is
======== specified in the HTML, which is based on what is specified
======== in the RST file
==== PROPERTIES ========================================================
======== options: options largely specified from the HTML
======== grader: a LineGrader for grading the problem
======== lines: an array of all ParsonsLine as specified in the problem
======== solution: an array of ParsonsLine in the solution
======== blocks: the current blocks
======== sourceArea: the element that contains the source blocks
======== answerArea: the element that contains the answer blocks
===================================================================== */

/* =====================================================================
==== INITIALIZATION ====================================================
===================================================================== */

var prsList = {}; // Parsons dictionary
class Parsons extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; // entire <pre> element that will be replaced by new HTML
        this.containerDiv = orig;
        this.origElem = $(orig).find("pre.parsonsblocks")[0];
        // Find the question text and store it in .question
        this.question = $(orig).find(`.parsons_question`)[0];
        this.useRunestoneServices = opts.useRunestoneServices;
        this.divid = opts.orig.id;
        // Set the storageId (key for storing data)
        var storageId = super.localStorageKey();
        this.storageId = storageId;
        this.children = this.origElem.childNodes; // this contains all of the child elements of the entire tag...
        this.contentArray = [];
        Parsons.counter++; //    Unique identifier
        this.counterId = "parsons-" + Parsons.counter;

        // for (var i = 0; i < this.children.length; i++) {
        //     if ($(this.children[i]).is("[data-question]")) {
        //         this.question = this.children[i];
        //         break;
        //     }
        // }
        this.initializeOptions();
        this.grader = new _lineGrader__WEBPACK_IMPORTED_MODULE_6__["default"](this);
        this.grader.showfeedback = this.showfeedback;
        var fulltext = $(this.origElem).html();
        this.blockIndex = 0;
        this.checkCount = 0;
        this.numDistinct = 0;
        this.hasSolved = false;
        this.initializeLines(fulltext.trim());
        this.initializeView();
        this.caption = "Parsons";
        this.addCaption("runestone");
        // Check the server for an answer to complete things
        this.checkServer("parsons", true);
    }
    // Based on the data-fields in the original HTML, initialize options
    initializeOptions() {
        var options = {
            pixelsPerIndent: 30,
        };
        // add maxdist and order if present
        var maxdist = $(this.origElem).data("maxdist");
        var order = $(this.origElem).data("order");
        var noindent = $(this.origElem).data("noindent");
        var adaptive = $(this.origElem).data("adaptive");
        var numbered = $(this.origElem).data("numbered");
        options["numbered"] = numbered;
        if (maxdist !== undefined) {
            options["maxdist"] = maxdist;
        }
        if (order !== undefined) {
            // convert order string to array of numbers
            order = order.match(/\d+/g);
            for (var i = 0; i < order.length; i++) {
                order[i] = parseInt(order[i]);
            }
            options["order"] = order;
        }
        if (noindent == undefined) {
            noindent = false;
        }
        options["noindent"] = noindent;
        this.noindent = noindent;
        if (adaptive == undefined) {
            adaptive = false;
        } else if (adaptive) {
            this.initializeAdaptive();
        }
        options["adaptive"] = adaptive;
        // add locale and language
        var locale = eBookConfig.locale;
        if (locale == undefined) {
            locale = "en";
        }
        options["locale"] = locale;
        var language = $(this.origElem).data("language");
        if (language == undefined) {
            language = eBookConfig.language;
            if (language == undefined) {
                language = "python";
            }
        }
        options["language"] = language;
        var prettifyLanguage = {
            python: "prettyprint lang-py",
            java: "prettyprint lang-java",
            javascript: "prettyprint lang-js",
            html: "prettyprint lang-html",
            c: "prettyprint lang-c",
            "c++": "prettyprint lang-cpp",
            ruby: "prettyprint lang-rb",
        }[language];
        if (prettifyLanguage == undefined) {
            prettifyLanguage = "";
        }
        options["prettifyLanguage"] = prettifyLanguage;
        this.options = options;
    }
    // Based on what is specified in the original HTML, create the HTML view
    initializeView() {
        this.outerDiv = document.createElement("div");
        $(this.outerDiv).addClass("parsons alert alert-warning");
        this.outerDiv.id = this.counterId;
        this.parsTextDiv = document.createElement("div");
        $(this.parsTextDiv).addClass("parsons-text");
        this.keyboardTip = document.createElement("div");
        $(this.keyboardTip).attr("role", "tooltip");
        this.keyboardTip.id = this.counterId + "-tip";
        this.keyboardTip.innerHTML = $.i18n("msg_parson_arrow_navigate");
        this.outerDiv.appendChild(this.keyboardTip);
        $(this.keyboardTip).hide();
        this.sortContainerDiv = document.createElement("div");
        $(this.sortContainerDiv).addClass("sortable-code-container");
        $(this.sortContainerDiv).attr(
            "aria-describedby",
            this.counterId + "-tip"
        );
        this.outerDiv.appendChild(this.sortContainerDiv);
        this.sourceRegionDiv = document.createElement("div");
        this.sourceRegionDiv.id = this.counterId + "-sourceRegion";
        $(this.sourceRegionDiv).addClass("sortable-code");
        this.sourceLabel = document.createElement("div");
        $(this.sourceLabel).attr("role", "tooltip");
        this.sourceLabel.id = this.counterId + "-sourceTip";
        this.sourceLabel.innerHTML = $.i18n("msg_parson_drag_from_here");
        this.sourceRegionDiv.appendChild(this.sourceLabel);
        this.sortContainerDiv.appendChild(this.sourceRegionDiv);
        this.sourceArea = document.createElement("div");
        this.sourceArea.id = this.counterId + "-source";
        $(this.sourceArea).addClass("source");
        $(this.sourceArea).attr(
            "aria-describedby",
            this.counterId + "-sourceTip"
        );
        this.sourceRegionDiv.appendChild(this.sourceArea);
        this.answerRegionDiv = document.createElement("div");
        this.answerRegionDiv.id = this.counterId + "-answerRegion";
        $(this.answerRegionDiv).addClass("sortable-code");
        this.answerLabel = document.createElement("div");
        $(this.answerLabel).attr("role", "tooltip");
        this.answerLabel.id = this.counterId + "-answerTip";
        this.answerLabel.innerHTML = $.i18n("msg_parson_drag_to_here");
        this.answerRegionDiv.appendChild(this.answerLabel);
        this.sortContainerDiv.appendChild(this.answerRegionDiv);
        this.answerArea = document.createElement("div");
        this.answerArea.id = this.counterId + "-answer";
        $(this.answerArea).attr(
            "aria-describedby",
            this.counterId + "-answerTip"
        );
        this.answerRegionDiv.appendChild(this.answerArea);
        this.parsonsControlDiv = document.createElement("div");
        $(this.parsonsControlDiv).addClass("parsons-controls");
        this.outerDiv.appendChild(this.parsonsControlDiv);
        var that = this;
        this.checkButton = document.createElement("button");
        $(this.checkButton).attr("class", "btn btn-success");
        this.checkButton.textContent = $.i18n("msg_parson_check_me");
        this.checkButton.id = this.counterId + "-check";
        this.parsonsControlDiv.appendChild(this.checkButton);
        this.checkButton.type = "button";
        this.checkButton.addEventListener("click", function (event) {
            event.preventDefault();
            that.checkCurrentAnswer();
            that.logCurrentAnswer();
            that.renderFeedback();
        });
        this.resetButton = document.createElement("button");
        $(this.resetButton).attr("class", "btn btn-default");
        this.resetButton.textContent = $.i18n("msg_parson_reset");
        this.resetButton.id = this.counterId + "-reset";
        this.resetButton.type = "button";
        this.parsonsControlDiv.appendChild(this.resetButton);
        this.resetButton.addEventListener("click", function (event) {
            event.preventDefault();
            that.clearFeedback();
            $(that.checkButton).prop("disabled", false);
            that.resetView();
            that.checkCount = 0;
            that.logMove("reset");
            that.setLocalStorage();
        });
        if (this.options.adaptive) {
            this.helpButton = document.createElement("button");
            $(this.helpButton).attr("class", "btn btn-primary");
            this.helpButton.textContent = $.i18n("msg_parson_help");
            this.helpButton.id = this.counterId + "-help";
            this.helpButton.disabled = false; // bje
            this.parsonsControlDiv.appendChild(this.helpButton);
            this.helpButton.addEventListener("click", function (event) {
                event.preventDefault();
                that.helpMe();
            });
        }
        this.messageDiv = document.createElement("div");
        this.messageDiv.id = this.counterId + "-message";
        this.parsonsControlDiv.appendChild(this.messageDiv);
        $(this.messageDiv).hide();
        $(this.origElem).replaceWith(this.outerDiv);
        $(this.outerDiv).closest(".sqcontainer").css("max-width", "none");
        if (this.outerDiv) {
            if ($(this.question).html().match(/^\s+$/)) {
                $(this.question).remove();
            } else {
                $(this.outerDiv).prepend(this.question);
            }
        }
    }
    // Initialize lines and solution properties
    initializeLines(text) {
        this.lines = [];
        // Create the initial blocks
        var textBlocks = text.split("---");
        if (textBlocks.length === 1) {
            // If there are no ---, then every line is its own block
            textBlocks = text.split("\n");
        }
        var solution = [];
        var indents = [];
        for (var i = 0; i < textBlocks.length; i++) {
            var textBlock = textBlocks[i];
            // Figure out options based on the #option
            // Remove the options from the code
            // only options are #paired or #distractor
            var options = {};
            var distractIndex;
            var distractHelptext = "";
            if (textBlock.includes("#paired:")) {
                distractIndex = textBlock.indexOf("#paired:");
                distractHelptext = textBlock
                    .substring(distractIndex + 8, textBlock.length)
                    .trim();
                textBlock = textBlock.substring(0, distractIndex + 7);
            } else if (textBlock.includes("#distractor:")) {
                distractIndex = textBlock.indexOf("#distractor:");
                distractHelptext = textBlock
                    .substring(distractIndex + 12, textBlock.length)
                    .trim();
                textBlock = textBlock.substring(0, distractIndex + 11);
            }
            textBlock = textBlock.replace(
                /#(paired|distractor)/,
                function (mystring, arg1) {
                    options[arg1] = true;
                    return "";
                }
            );
            // Create lines
            var lines = [];
            var split = textBlock.split("\n");
            for (var j = 0; j < split.length; j++) {
                var code = split[j];
                // discard blank rows
                if (!/^\s*$/.test(code)) {
                    var line = new _parsonsLine__WEBPACK_IMPORTED_MODULE_7__["default"](this, code);
                    lines.push(line);
                    if (options["paired"]) {
                        line.distractor = true;
                        line.paired = true;
                        line.distractHelptext = distractHelptext;
                    } else if (options["distractor"]) {
                        line.distractor = true;
                        line.paired = false;
                        line.distractHelptext = distractHelptext;
                    } else {
                        line.distractor = false;
                        line.paired = false;
                        solution.push(line);
                    }
                    if ($.inArray(line.indent, indents) == -1) {
                        indents.push(line.indent);
                    }
                }
            }
            if (lines.length > 0) {
                // Add groupWithNext
                for (j = 0; j < lines.length - 1; j++) {
                    lines[j].groupWithNext = true;
                }
                lines[lines.length - 1].groupWithNext = false;
            }
        }
        // Normalize the indents
        indents = indents.sort(function (a, b) {
            return a - b;
        });
        for (i = 0; i < this.lines.length; i++) {
            line = this.lines[i];
            line.indent = indents.indexOf(line.indent);
        }
        this.solution = solution;
    }
    // Based on the blocks, create the source and answer areas
    initializeAreas(sourceBlocks, answerBlocks, options) {
        // Create blocks property as the sum of the two
        var blocks = [];
        var i, block;
        for (i = 0; i < sourceBlocks.length; i++) {
            block = sourceBlocks[i];
            blocks.push(block);
            this.sourceArea.appendChild(block.view);
        }
        for (i = 0; i < answerBlocks.length; i++) {
            block = answerBlocks[i];
            blocks.push(block);
            this.answerArea.appendChild(block.view);
        }
        this.blocks = blocks;
        // If present, disable some blocks
        var disabled = options.disabled;
        if (disabled !== undefined) {
            for (i = 0; i < blocks.length; i++) {
                block = blocks[i];
                if (disabled.includes(block.lines[0].index)) {
                    $(block.view).addClass("disabled");
                }
            }
        }
        // Determine how much indent should be possible in the answer area
        var indent = 0;
        if (!this.noindent) {
            if (this.options.language == "natural") {
                indent = this.solutionIndent();
            } else {
                indent = Math.max(0, this.solutionIndent());
            }
        }
        this.indent = indent;
        // For rendering, place in an onscreen position
        var isHidden = this.outerDiv.offsetParent == null;
        var replaceElement;
        if (isHidden) {
            replaceElement = document.createElement("div");
            $(this.outerDiv).replaceWith(replaceElement);
            document.body.appendChild(this.outerDiv);
        }
        if (this.options.prettifyLanguage !== "") {
            prettyPrint();
        }
        for (let i = 0; i < this.lines.length; i++) {
            this.lines[i].initializeWidth();
        }
        // Layout the areas
        var areaWidth, areaHeight;
        // Establish the width and height of the droppable areas
        var item, maxFunction;
        areaHeight = 6;
        var height_add = 0;
        if (this.options.numbered != undefined) {
            height_add = 1;
        }
        if (
            this.options.language == "natural" ||
            this.options.language == "math"
        ) {
            areaWidth = 300;
            maxFunction = function (item) {
                item.width(areaWidth - 22);
                var addition = 3.8;
                if (item.outerHeight(true) != 38)
                    addition = (2.1 * (item.outerHeight(true) - 38)) / 21;
                areaHeight += item.outerHeight(true) + height_add * addition;
            };
        } else {
            areaWidth = 300;
            // This maxFunction is how Parsons areas width and height were being calculated previously,
            // but at some point .outerHeight and .outerWidth stopped returning correct values
            // causing lines to overflow and display awkwardly. - Vincent Qiu (September 2020)
            // maxFunction = function (item) {
            //     var addition = 3.8;
            //     if (item.outerHeight(true) != 38) addition = 2.1;
            //     areaHeight += item.outerHeight(true) + height_add * addition;
            //     areaWidth = Math.max(areaWidth, item.outerWidth(true));
            // };

            // This new maxFunction is how Parsons areas width and height are being calculated now manually - Vincent Qiu (September 2020)
            maxFunction = function (item) {
                var addition = 3.8;

                // Determine which index within the Parsons block JavaScript object contains the text lines and consequently the passed through data - Vincent Qiu (September 2020)
                var linesIndex;
                var linesItem = item[0].children;
                for (
                    linesIndex = 0;
                    linesIndex < item[0].children.length;
                    linesIndex++
                ) {
                    if (
                        item[0].children[linesIndex].className.includes("lines")
                    ) {
                        break;
                    }
                }

                // Create a canvas and set the passed through fontSize and fontFamily in order to measure text width - Vincent Qiu (September 2020)
                var fontSize = linesItem[linesIndex].children[0].fontSize;
                var fontFamily = linesItem[linesIndex].children[0].fontFamily;
                var tempCanvas = document.createElement("canvas");
                var tempCanvasCtx = tempCanvas.getContext("2d");
                tempCanvasCtx.font = fontSize + " " + fontFamily;

                // Increment Parsons area height based on number of lines of text in the current Parsons block - Vincent Qiu (September 2020)
                var singleHeight = 40;
                var additionalHeight = 20;
                areaHeight += Math.ceil(
                    // For future more accurate height display, this calculation should also be conditionally based on fontFamily
                    singleHeight +
                        (linesItem[linesIndex].children.length - 1) *
                            additionalHeight +
                        height_add * addition
                );

                // Determine the longest text line in the current Parsons block and calculate its width - Vincent Qiu (September 2020)
                var itemLength;
                var pixelsPerIndent;
                var indent;
                var maxInnerText;
                var maxInnerLength = 0;
                var i;
                var widthLimit = 475;
                var longCount = 0;
                for (i = 0; i < linesItem[linesIndex].children.length; i++) {
                    pixelsPerIndent =
                        linesItem[linesIndex].children[i].pixelsPerIndent;
                    indent = linesItem[linesIndex].children[i].indent;
                    itemLength = Math.ceil(
                        pixelsPerIndent * indent +
                            tempCanvasCtx.measureText(
                                linesItem[linesIndex].children[i].innerText
                            ).width
                    );
                    longCount += Math.floor(itemLength / (widthLimit - 29));
                    if (itemLength > maxInnerLength) {
                        maxInnerText =
                            linesItem[linesIndex].children[i].innerText;
                        maxInnerLength = itemLength;
                    }
                }
                areaWidth = Math.max(areaWidth, maxInnerLength + 40);
                // Set width limit and determine how much additional height is needed to accommodate the forced text overflow - Vincent Qiu (September 2020)
                if (areaWidth > widthLimit) {
                    areaWidth = widthLimit;
                    areaHeight += longCount * additionalHeight;
                }
            };
        }
        for (i = 0; i < blocks.length; i++) {
            maxFunction($(blocks[i].view));
        }
        this.areaWidth = areaWidth;
        if (this.options.numbered != undefined) {
            this.areaWidth += 25;
            //areaHeight += (blocks.length);
        }
        // + 40 to areaHeight to provide some additional buffer in case any text overflow still happens - Vincent Qiu (September 2020)
        this.areaHeight = areaHeight + 40;
        $(this.sourceArea).css({
            width: this.areaWidth + 2,
            height: areaHeight,
        });
        $(this.answerArea).css({
            width: this.options.pixelsPerIndent * indent + this.areaWidth + 2,
            height: areaHeight,
        });
        if (indent > 0 && indent <= 4) {
            $(this.answerArea).addClass("answer" + indent);
        } else {
            $(this.answerArea).addClass("answer");
        }
        // Initialize paired distractor decoration
        var bins = [];
        var bin = [];
        for (i = 0; i < this.lines.length; i++) {
            var line = this.lines[i];
            if (line.block() == undefined) {
                if (bin.length > 0) {
                    bins.push(bin);
                    bin = [];
                }
            } else {
                bin.push(line);
                if (!line.groupWithNext) {
                    bins.push(bin);
                    bin = [];
                }
            }
        }
        var pairedBins = [];
        var lineNumbers = [];
        var pairedDivs = [];
        var j;
        if (this.pairDistractors || !this.options.adaptive) {
            for (i = bins.length - 1; i > -1; i--) {
                bin = bins[i];
                if (bin[0].paired) {
                    // Add all in bin to line numbers
                    for (j = bin.length - 1; j > -1; j--) {
                        lineNumbers.unshift(bin[j].index);
                    }
                } else {
                    if (lineNumbers.length > 0) {
                        // Add all in bin to line numbers
                        for (j = bin.length - 1; j > -1; j--) {
                            lineNumbers.unshift(bin[j].index);
                        }
                        pairedBins.unshift(lineNumbers);
                        lineNumbers = [];
                    }
                }
            }
            for (i = 0; i < pairedBins.length; i++) {
                var pairedDiv = document.createElement("div");
                $(pairedDiv).addClass("paired");
                $(pairedDiv).html(
                    "<span id= 'st' style = 'vertical-align: middle; font-weight: bold'>or{</span>"
                );
                pairedDivs.push(pairedDiv);
                this.sourceArea.appendChild(pairedDiv);
            }
        } else {
            pairedBins = [];
        }
        this.pairedBins = pairedBins;
        this.pairedDivs = pairedDivs;
        if (this.options.numbered != undefined) {
            this.addBlockLabels(sourceBlocks.concat(answerBlocks));
        }
        // Update the view
        this.state = undefined; // needs to be here for loading from storage
        this.updateView();
        // Put back into the offscreen position
        if (isHidden) {
            $(replaceElement).replaceWith(this.outerDiv);
        }
    }
    // Make blocks interactive (both drag-and-drop and keyboard)
    initializeInteractivity() {
        for (var i = 0; i < this.blocks.length; i++) {
            this.blocks[i].initializeInteractivity();
        }
        this.initializeTabIndex();
        if (
            this.options.language == "natural" ||
            this.options.language == "math"
        ) {
            if (typeof MathJax !== "undefined") {
                this.queueMathJax(this.outerDiv);
            }
        }
    }
    // Make one block be keyboard accessible
    initializeTabIndex() {
        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i];
            if (block.enabled()) {
                block.makeTabIndex();
                return this;
            }
        }
    }
    /* =====================================================================
    ==== SERVER COMMUNICATION ==============================================
    ===================================================================== */
    // Return the argument that is newer based on the timestamp
    newerData(dataA, dataB) {
        var dateA = dataA.timestamp;
        var dateB = dataB.timestamp;
        if (dateA == undefined) {
            return dataB;
        }
        if (dateB == undefined) {
            return dataA;
        }
        dateA = this.dateFromTimestamp(dateA);
        dateB = this.dateFromTimestamp(dateB);
        if (dateA > dateB) {
            return dataA;
        } else {
            return dataB;
        }
    }
    // Based on the data, load
    loadData(data) {
        var sourceHash = data.source;
        if (sourceHash == undefined) {
            // maintain backwards compatibility
            sourceHash = data.trash;
        }
        var answerHash = data.answer;
        var adaptiveHash = data.adaptive;
        var options;
        if (adaptiveHash == undefined) {
            options = {};
        } else {
            options = this.optionsFromHash(adaptiveHash);
        }
        if (options.noindent !== undefined) {
            this.noindent = true;
        }
        if (options.checkCount !== undefined) {
            this.checkCount = options.checkCount;
        }
        if (options.hasSolved !== undefined) {
            this.hasSolved = options.hasSolved;
        }
        if (
            sourceHash == undefined ||
            answerHash == undefined ||
            answerHash.length == 1
        ) {
            this.initializeAreas(this.blocksFromSource(), [], options);
        } else {
            this.initializeAreas(
                this.blocksFromHash(sourceHash),
                this.blocksFromHash(answerHash),
                options
            );
            this.grade = this.grader.grade();
            this.correct = this.grade;
        }
        // Start the interface
        if (this.needsReinitialization !== true) {
            this.initializeInteractivity();
        }
    }
    // Return what is stored in local storage
    localData() {
        var data = localStorage.getItem(this.storageId);
        if (data !== null) {
            if (data.charAt(0) == "{") {
                data = JSON.parse(data);
            } else {
                data = {};
            }
        } else {
            data = {};
        }
        return data;
    }
    // RunestoneBase: Sent when the server has data
    restoreAnswers(serverData) {
        this.loadData(serverData);
    }
    // RunestoneBase: Load what is in local storage
    checkLocalStorage() {
        if (this.graderactive) {
            return;
        }
        this.loadData(this.localData());
    }
    // RunestoneBase: Set the state of the problem in local storage
    setLocalStorage(data) {
        var toStore;
        if (data == undefined) {
            toStore = {
                source: this.sourceHash(),
                answer: this.answerHash(),
                timestamp: new Date(),
            };
            var adaptiveHash = this.adaptiveHash();
            if (adaptiveHash.length > 0) {
                toStore.adaptive = adaptiveHash;
            }
        } else {
            toStore = data;
        }
        localStorage.setItem(this.storageId, JSON.stringify(toStore));
    }
    /* =====================================================================
    ==== LOGGING ===========================================================
    ===================================================================== */
    // Log the interaction with the problem to the server:
    //   start: the user started interacting with this problem
    //   move: the user moved a block to a new position
    //   reset: the reset button was pressed
    //   removeDistractor: "Help Me" removed a distractor
    //   removeIndentation: "Help Me" removed indentation
    //   combineBlocks: "Help Me" combined blocks
    logMove(activity) {
        var event = {
            event: "parsonsMove",
            div_id: this.divid,
            storageid: super.localStorageKey(),
        };
        var act = activity + "|" + this.sourceHash() + "|" + this.answerHash();
        var adaptiveHash = this.adaptiveHash();
        if (adaptiveHash !== "") {
            act = act + "|" + adaptiveHash;
        }
        event.act = act;
        this.logBookEvent(event);
    }
    // Log the answer to the problem
    //   correct: The answer given matches the solution
    //   incorrect*: The answer is wrong for various reasons
    async logCurrentAnswer(sid) {
        var event = {
            event: "parsons",
            div_id: this.divid,
        };
        var answerHash = this.answerHash();
        event.answer = answerHash;
        var sourceHash = this.sourceHash();
        event.source = sourceHash;
        var act = sourceHash + "|" + answerHash;
        var adaptiveHash = this.adaptiveHash();
        if (adaptiveHash !== "") {
            event.adaptive = adaptiveHash;
            act = act + "|" + adaptiveHash;
        }
        if (this.grade == "correct") {
            act = "correct|" + act;
            event.correct = "T";
        } else {
            act = "incorrect|" + act;
            event.correct = "F";
        }
        event.act = act;

        if (typeof sid !== "undefined") {
            event.sid = sid;
        }

        await this.logBookEvent(event);
    }
    /* =====================================================================
    ==== ACCESSING =========================================================
    ===================================================================== */
    // Answer the hash of the adaptive state
    adaptiveHash() {
        if (!this.options.adaptive) {
            return "";
        }
        var hash = [];
        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i];
            if (!block.enabled()) {
                hash.push("d" + block.lines[0].index);
            }
        }
        if (this.noindent !== this.options.noindent) {
            hash.push("i");
        }
        hash.push("c" + this.checkCount);
        if (this.hasSolved) {
            hash.push("s");
        }
        return hash.join("-");
    }
    // Create options for creating blocks based on a hash
    optionsFromHash(hash) {
        var split;
        if (hash === "-" || hash === "" || hash === null) {
            split = [];
        } else {
            split = hash.split("-");
        }
        var options = {};
        var disabled = [];
        for (var i = 0; i < split.length; i++) {
            var key = split[i];
            if (key[0] == "i") {
                options.noindent = true;
            } else if (key[0] == "d") {
                disabled.push(parseInt(key.slice(1)));
            } else if (key[0] == "s") {
                options.hasSolved = true;
            } else if (key[0] == "c") {
                options.checkCount = parseInt(key.slice(1));
            }
        }
        if (disabled.length > 0) {
            options.disabled = disabled;
        }
        return options;
    }
    // Answer the hash of the answer area
    answerHash() {
        var hash = [];
        var blocks = this.answerBlocks();
        for (var i = 0; i < blocks.length; i++) {
            hash.push(blocks[i].hash());
        }
        if (hash.length === 0) {
            return "-";
        } else {
            return hash.join("-");
        }
    }
    // Answer the hash of the source area
    sourceHash() {
        var hash = [];
        var blocks = this.sourceBlocks();
        for (var i = 0; i < blocks.length; i++) {
            hash.push(blocks[i].hash());
        }
        if (hash.length === 0) {
            return "-";
        } else {
            return hash.join("-");
        }
    }
    // Inter-problem adaptive changes
    // Based on the recentAttempts, remove distractors, add indent, combine blocks
    adaptBlocks(input) {
        var blocks = [];
        var distractors = [];
        var block;
        for (var i = 0; i < input.length; i++) {
            block = input[i];
            if (block.isDistractor()) {
                distractors.push(block);
            } else {
                blocks.push(block);
            }
        }
        this.recentAttempts = localStorage.getItem(
            this.adaptiveId + "recentAttempts"
        );
        if (this.recentAttempts == undefined || this.recentAttempts == "NaN") {
            this.recentAttempts = 3;
        }
        var lastestAttemptCount = this.recentAttempts;
        var nBlocks = blocks.length;
        var nBlocksToCombine = 0;
        var nDistractors = distractors.length;
        var nToRemove = 0;
        this.pairDistractors = true;
        var giveIndentation = false;
        if (lastestAttemptCount < 2) {
            // 1 Try
            this.pairDistractors = false;
            this.limitDistractors = false;
        } else if (lastestAttemptCount < 4) {
            // 2-3 Tries
            // Do nothing they are doing normal
            this.pairDistractors = true;
        } else if (lastestAttemptCount < 6) {
            // 4-5 Tries
            // pair distractors
            this.pairDistractors = true;
        } else if (lastestAttemptCount < 8) {
            // 6-7 Tries
            // Remove 50% of distractors
            nToRemove = 0.5 * nDistractors;
            this.pairDistractors = true;
        } else {
            // 8+ Tries
            // Remove all of distractors
            nToRemove = nDistractors;
            this.pairDistractors = true;
        }
        /*
        else if(lastestAttemptCount < 12) { //10-11
            // Remove all distractors and give indentation
            nToRemove = nDistractors;
            giveIndentation = true;
            this.pairDistractors = true;
        } else if(lastestAttemptCount < 14) { // 12-13 Tries
            // Remove all of distractors
            // give indentation
            // reduce problem to 3/4 size
            giveIndentation = true;
            nToRemove = nDistractors;
            nBlocksToCombine = .25 * nBlocks;
            this.pairDistractors = true;
        } else { // >= 14 Tries
            // Remove all of distractors
            // give indentation
            // reduce problem to 1/2 size
            giveIndentation = true;
            nToRemove = nDistractors;
            nBlocksToCombine = .5 * nBlocks;
            this.pairDistractors = true;
        }
        */
        nBlocksToCombine = Math.min(nBlocksToCombine, nBlocks - 3);
        // Never combine so where there are less than three blocks left
        // Remove distractors
        distractors = this.shuffled(distractors);
        distractors = distractors.slice(0, nToRemove);
        var output = [];
        for (i = 0; i < input.length; i++) {
            block = input[i];
            if (!block.isDistractor()) {
                output.push(block);
            } else if ($.inArray(block, distractors) == -1) {
                output.push(block);
            }
        }
        //var output = input;
        if (giveIndentation) {
            for (let i = 0; i < output.length; i++) {
                output[i].addIndent();
            }
            this.indent = 0;
            this.noindent = true;
        }
        // combine blocks
        var solution = [];
        for (i = 0; i < this.lines.length; i++) {
            for (var j = 0; j < output.length; j++) {
                if (output[j].lines[0].index == i) {
                    solution.push(output[j]);
                }
            }
        }
        for (let i = 0; i < nBlocksToCombine; i++) {
            // combine one set of blocks
            var best = -10;
            var combineIndex = -10;
            for (j = 0; j < solution.length - 1; j++) {
                block = solution[j];
                var next = solution[j + 1];
                var rating = 10 - block.lines.length - next.lines.length;
                var blockIndent = block.minimumLineIndent();
                var nextIndent = next.minimumLineIndent();
                if (blockIndent == nextIndent) {
                    rating += 2;
                } else if (blockIndent > nextIndent) {
                    rating -= 1;
                }
                if (
                    block.lines[block.lines.length - 1].indent ==
                    next.lines[0].indent
                ) {
                    rating += 1;
                }
                if (rating >= best) {
                    best = rating;
                    combineIndex = j;
                }
            }
            block = solution[combineIndex];
            next = solution[combineIndex + 1];
            for (j = 0; j < next.lines.length; j++) {
                block.addLine(next.lines[j]);
            }
            var newSolution = [];
            for (j = 0; j < solution.length; j++) {
                if (j !== combineIndex + 1) {
                    newSolution.push(solution[j]);
                }
            }
            var solution = newSolution;
        }
        // reorder
        var combinedOutput = [];
        for (i = 0; i < output.length; i++) {
            for (j = 0; j < solution.length; j++) {
                if (output[i].lines[0].index == solution[j].lines[0].index) {
                    combinedOutput.push(solution[j]);
                }
            }
        }
        return combinedOutput;
    }
    // Return an array of code blocks based on what is specified in the problem
    blocksFromSource() {
        var unorderedBlocks = [];
        var originalBlocks = [];
        var blocks = [];
        var lines = [];
        var block, line, i;
        for (i = 0; i < this.lines.length; i++) {
            line = this.lines[i];
            lines.push(line);
            if (!line.groupWithNext) {
                unorderedBlocks.push(new _parsonsBlock__WEBPACK_IMPORTED_MODULE_8__["default"](this, lines));
                lines = [];
            }
        }
        originalBlocks = unorderedBlocks;
        // Trim the distractors
        var removedBlocks = [];
        if (this.options.maxdist !== undefined) {
            var maxdist = this.options.maxdist;
            var distractors = [];
            for (i = 0; i < unorderedBlocks.length; i++) {
                block = unorderedBlocks[i];
                if (block.lines[0].distractor) {
                    distractors.push(block);
                }
            }
            if (maxdist < distractors.length) {
                distractors = this.shuffled(distractors);
                distractors = distractors.slice(0, maxdist);
                for (i = 0; i < unorderedBlocks.length; i++) {
                    block = unorderedBlocks[i];
                    if (block.lines[0].distractor) {
                        if ($.inArray(block, distractors) > -1) {
                            blocks.push(block);
                        } else {
                            removedBlocks.push(i);
                        }
                    } else {
                        blocks.push(block);
                    }
                }
                unorderedBlocks = blocks;
                blocks = [];
            }
        }

        // This is necessary, set the pairDistractors value before blocks get shuffled - William Li (August 2020)
        if (this.recentAttempts < 2) {
            // 1 Try
            this.pairDistractors = false;
        } else {
            this.pairDistractors = true;
        }

        if (this.options.order === undefined) {
            // Shuffle, respecting paired distractors
            var chunks = [],
                chunk = [];
            for (i = 0; i < unorderedBlocks.length; i++) {
                block = unorderedBlocks[i];
                if (block.lines[0].paired && this.pairDistractors) {
                    // William Li (August 2020)
                    chunk.push(block);
                } else {
                    chunk = [];
                    chunk.push(block);
                    chunks.push(chunk);
                }
            }
            chunks = this.shuffled(chunks);
            for (i = 0; i < chunks.length; i++) {
                chunk = chunks[i];
                if (chunk.length > 1) {
                    // shuffle paired distractors
                    chunk = this.shuffled(chunk);
                    for (j = 0; j < chunk.length; j++) {
                        blocks.push(chunk[j]);
                    }
                } else {
                    blocks.push(chunk[0]);
                }
            }
        } else {
            // Order according to order specified
            for (i = 0; i < this.options.order.length; i++) {
                block = originalBlocks[this.options.order[i]];
                if (
                    block !== undefined &&
                    $.inArray(this.options.order[i], removedBlocks) < 0
                ) {
                    blocks.push(block);
                }
            }
        }
        this.pairDistractors = true;
        if (this.options.adaptive) {
            this.limitDistractors = true;
            blocks = this.adaptBlocks(blocks);
            if (!this.limitDistractors) {
                for (i = 0; i < removedBlocks.length; i++) {
                    var index =
                        this.options.order == undefined
                            ? Math.random(0, blocks.length)
                            : $.inArray(removedBlocks[i], this.options.order);
                    blocks.splice(index, 0, originalBlocks[removedBlocks[i]]);
                }
            }
        }
        if (this.pairDistractors && this.options.order != undefined) {
            //move pairs together
            //Go through array looking for ditractor and its pair
            for (i = 1; i < originalBlocks.length; i++) {
                if (
                    originalBlocks[i].lines[0].paired &&
                    $.inArray(originalBlocks[i], blocks) >= 0
                ) {
                    var j = i;
                    while ($.inArray(originalBlocks[j - 1], blocks) < 0) {
                        // find the paired distractor or solution block it will be next to
                        j--;
                    }
                    var indexTo = $.inArray(originalBlocks[j - 1], blocks);
                    var indexFrom = $.inArray(originalBlocks[i], blocks);
                    blocks.splice(indexFrom, 1);
                    blocks.splice(indexTo, 0, originalBlocks[i]);
                }
            }
        }
        return blocks;
    }
    // Return a codeblock that corresponds to the hash
    blockFromHash(hash) {
        var split = hash.split("_");
        var lines = [];
        for (var i = 0; i < split.length - 1; i++) {
            lines.push(this.lines[split[i]]);
        }
        var block = new _parsonsBlock__WEBPACK_IMPORTED_MODULE_8__["default"](this, lines);
        if (this.noindent) {
            block.indent = 0;
        } else {
            block.indent = Number(split[split.length - 1]);
        }
        return block;
    }
    // Return an array of codeblocks that corresponds to the hash
    blocksFromHash(hash) {
        var split;
        if (hash === "-" || hash === "" || hash === null) {
            split = [];
        } else {
            split = hash.split("-");
        }
        var blocks = [];
        for (var i = 0; i < split.length; i++) {
            blocks.push(this.blockFromHash(split[i]));
        }
        if (this.options.adaptive) {
            return this.adaptBlocks(blocks);
        } else {
            return blocks;
        }
    }
    // Return a block object by the full id including id prefix
    getBlockById(id) {
        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i];
            if (block.view.id == id) {
                return block;
            }
        }
        return undefined;
    }
    // Return array of codeblocks that are the solution
    solutionBlocks() {
        var solutionBlocks = [];
        var solutionLines = [];
        for (var i = 0; i < this.lines.length; i++) {
            if (!this.lines[i].distractor) {
                solutionLines.push(this.lines[i]);
            }
        }
        var block = solutionLines[0].block();
        solutionBlocks.push(block);
        for (let i = 1; i < solutionLines.length; i++) {
            var nextBlock = solutionLines[i].block();
            if (block !== nextBlock) {
                block = nextBlock;
                solutionBlocks.push(block);
            }
        }
        return solutionBlocks;
    }
    // Return array of codeblocks based on what is in the source field
    sourceBlocks() {
        var sourceBlocks = [];
        var children = this.sourceArea.childNodes;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if ($(child).hasClass("block")) {
                sourceBlocks.push(this.getBlockById(child.id));
            }
        }
        return sourceBlocks;
    }
    // Return array of enabled codeblocks based on what is in the source field
    enabledSourceBlocks() {
        var all = this.sourceBlocks();
        var enabled = [];
        for (var i = 0; i < all.length; i++) {
            var block = all[i];
            if (block.enabled()) {
                enabled.push(block);
            }
        }
        return enabled;
    }
    // Return array of codeblocks based on what is in the answer field
    answerBlocks() {
        var answerBlocks = [];
        var children = this.answerArea.childNodes;
        for (var i = 0; i < children.length; i++) {
            var block = this.getBlockById(children[i].id);
            if (block !== undefined) {
                answerBlocks.push(block);
            }
        }
        return answerBlocks;
    }
    // Return array of enabled codeblocks based on what is in the answer field
    enabledAnswerBlocks() {
        var all = this.answerBlocks();
        var enabled = [];
        for (var i = 0; i < all.length; i++) {
            var block = all[i];
            if (block.enabled()) {
                enabled.push(block);
            }
        }
        return enabled;
    }
    // Return array of codelines based on what is in the answer field
    answerLines() {
        var answerLines = [];
        var blocks = this.answerBlocks();
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i];
            for (var j = 0; j < block.lines.length; j++) {
                answerLines.push(block.lines[j]);
            }
        }
        return answerLines;
    }
    // Go up the hierarchy until you get to a block; return that block element
    getBlockFor(element) {
        var check = element;
        while (!check.classList.contains("block")) {
            check = check.parentElement;
        }
        return check;
    }
    // Return the maximum indent for the solution
    solutionIndent() {
        var indent = 0;
        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i];
            indent = Math.max(indent, block.solutionIndent());
        }
        return indent;
    }
    /* =====================================================================
    ==== ACTION ============================================================
    ===================================================================== */
    // The "Check Me" button was pressed.
    checkCurrentAnswer() {
        if (!this.hasSolved) {
            this.checkCount++;
            this.clearFeedback();
            if (this.adaptiveId == undefined) {
                this.adaptiveId = this.storageId;
            }
            // TODO - rendering feedback is buried in the grader.grade method.
            // to disable feedback set this.grader.showfeedback boolean
            this.grader.showfeedback = false;
            this.grade = this.grader.grade();
            if (this.grade == "correct") {
                this.hasSolved = true;
                this.correct = true;
                $(this.checkButton).prop("disabled", true);
                localStorage.setItem(this.adaptiveId + "Solved", true);
                this.recentAttempts = this.checkCount;
                localStorage.setItem(
                    this.adaptiveId + "recentAttempts",
                    this.recentAttempts
                );
            }
            localStorage.setItem(
                this.adaptiveId + this.divid + "Count",
                this.checkCount
            );
            this.setLocalStorage();
            // if not solved and not too short then check if should provide help
            if (!this.hasSolved && this.grade !== "incorrectTooShort") {
                if (this.canHelp) {
                    // only count the attempt if the answer is different (to prevent gaming)
                    var answerHash = this.answerHash();
                    if (this.lastAnswerHash !== answerHash) {
                        this.numDistinct++;
                        this.lastAnswerHash = answerHash;
                    }
                    // if time to offer help
                    if (this.numDistinct == 3 && !this.gotHelp) {
                        alert($.i18n("msg_parson_help_info"));
                    } // end if
                } // end if can help
            } // end if not solved
        } // end outer if not solved
    }

    renderFeedback() {
        this.grader.showfeedback = true;
        this.grade = this.grader.graderState;
        var feedbackArea;
        var answerArea = $(this.answerArea);

        if (this.showfeedback === true) {
            feedbackArea = $(this.messageDiv);
        } else {
            feedbackArea = $("#doesnotexist");
        }

        if (this.grade === "correct") {
            answerArea.addClass("correct");
            feedbackArea.fadeIn(100);
            feedbackArea.attr("class", "alert alert-info");
            if (this.checkCount > 1) {
                feedbackArea.html(
                    $.i18n("msg_parson_correct", this.checkCount)
                );
            } else {
                feedbackArea.html($.i18n("msg_parson_correct_first_try"));
            }
        }

        if (this.grade === "incorrectTooShort") {
            // too little code
            answerArea.addClass("incorrect");
            feedbackArea.fadeIn(500);
            feedbackArea.attr("class", "alert alert-danger");
            feedbackArea.html($.i18n("msg_parson_too_short"));
        }

        if (this.grade === "incorrectIndent") {
            var incorrectBlocks = [];
            for (let i = 0; i < this.grader.indentLeft.length; i++) {
                block = this.grader.indentLeft[i].block();
                if (incorrectBlocks.indexOf(block) == -1) {
                    incorrectBlocks.push(block);
                    $(block.view).addClass("indentLeft");
                }
            }
            for (let i = 0; i < this.grader.indentRight.length; i++) {
                block = this.grader.indentRight[i].block();
                if (incorrectBlocks.indexOf(block) == -1) {
                    incorrectBlocks.push(block);
                    $(block.view).addClass("indentRight");
                }
            }
            feedbackArea.fadeIn(500);
            feedbackArea.attr("class", "alert alert-danger");
            if (incorrectBlocks.length == 1) {
                feedbackArea.html($.i18n("msg_parson_wrong_indent"));
            } else {
                feedbackArea.html($.i18n("msg_parson_wrong_indents"));
            }
        }

        if (this.grade === "incorrectMoveBlocks") {
            var answerBlocks = this.answerBlocks();
            var inSolution = [];
            var inSolutionIndexes = [];
            var notInSolution = [];
            for (let i = 0; i < answerBlocks.length; i++) {
                var block = answerBlocks[i];
                var index = this.solution.indexOf(block.lines[0]);
                if (index == -1) {
                    notInSolution.push(block);
                } else {
                    inSolution.push(block);
                    inSolutionIndexes.push(index);
                }
            }
            var lisIndexes = this.grader.inverseLISIndices(inSolutionIndexes);
            for (let i = 0; i < lisIndexes.length; i++) {
                notInSolution.push(inSolution[lisIndexes[i]]);
            }
            answerArea.addClass("incorrect");
            feedbackArea.fadeIn(500);
            feedbackArea.attr("class", "alert alert-danger");
            if (this.showfeedback === true) {
                for (let i = 0; i < notInSolution.length; i++) {
                    $(notInSolution[i].view).addClass("incorrectPosition");
                }
            }
            feedbackArea.html($.i18n("msg_parson_wrong_order"));
        }
    }

    /* =====================================================================
    ==== ADAPTIVE ==========================================================
    ===================================================================== */
    // Initialize this problem as adaptive
    //    helpCount = number of checks before help is given (negative)
    //    canHelp = boolean as to whether help can be provided
    //    checkCount = how many times it has been checked before correct
    //    userRating = 0..100 how good the person is at solving problems
    initializeAdaptive() {
        this.adaptiveId = super.localStorageKey();
        this.canHelp = true;
        //this.helpCount = -3; // Number of checks before help is offered
        this.checkCount = 0;
        this.numDistinct = 0; // number of distinct solution attempts (different from previous)
        this.gotHelp = false;
        // Initialize the userRating
        var storageProblem = localStorage.getItem(this.adaptiveId + "Problem");
        if (storageProblem == this.divid) {
            // Already in this problem
            this.checkCount = localStorage.getItem(
                this.adaptiveId + this.divid + "Count"
            );
            if (this.checkCount == undefined) {
                this.checkCount = 0;
            }
            return this;
        }
        var count = localStorage.getItem(
            this.adaptiveId + this.divid + "Count"
        );
        if (count == undefined || count == "NaN") {
            count = 0;
        }
        this.checkCount = count;
        this.recentAttempts = localStorage.getItem(
            this.adaptiveId + "recentAttempts"
        );
        if (this.recentAttempts == undefined || this.recentAttempts == "NaN") {
            this.recentAttempts = 3;
        }
        localStorage.setItem(
            this.adaptiveId + "recentAttempts",
            this.recentAttempts
        );
        localStorage.setItem(this.adaptiveId + "Problem", this.divid);
        localStorage.setItem(
            this.adaptiveId + this.divid + "Count",
            this.checkCount
        );
        localStorage.setItem(this.adaptiveId + "Solved", false);
    }
    // Return a boolean of whether the user must deal with indentation
    usesIndentation() {
        if (this.noindent || this.solutionIndent() == 0) {
            // was $(this.answerArea).hasClass("answer") - bje changed
            return false;
        } else {
            return true;
        }
    }
    // Find a distractor to remove to make the problem easier
    //  * try first in the answer area
    //  * if not, try the source area
    //  * if not, return undefined
    distractorToRemove() {
        var blocks = this.enabledAnswerBlocks();
        var block;
        for (let i = 0; i < blocks.length; i++) {
            block = blocks[i];
            if (block.isDistractor()) {
                return block;
            }
        }
        blocks = this.enabledSourceBlocks();
        for (let i = 0; i < blocks.length; i++) {
            block = blocks[i];
            if (block.isDistractor()) {
                return block;
            }
        }
        return undefined;
    }
    // Return the number of blocks that exist
    numberOfBlocks(fIncludeDistractors = true) {
        var numberOfBlocks = 0;
        for (var i = 0; i < this.blocks.length; i++) {
            if (
                this.blocks[i].enabled() &&
                (fIncludeDistractors || !this.blocks[i].isDistractor())
            ) {
                numberOfBlocks += 1;
            }
        }
        return numberOfBlocks;
    }
    // Remove this distractors to make the problem easier
    removeDistractor(block) {
        // Alert the user to what is happening
        var feedbackArea = $(this.messageDiv);
        feedbackArea.fadeIn(500);
        feedbackArea.attr("class", "alert alert-info");
        feedbackArea.html($.i18n("msg_parson_not_solution"));
        // Stop ability to select
        if (block.lines[0].distractHelptext) {
            block.view.setAttribute("data-toggle", "tooltip");
            block.view.setAttribute("title", block.lines[0].distractHelptext);
        }
        block.disable();
        // If in answer area, move to source area
        if (!block.inSourceArea()) {
            var sourceRect = this.sourceArea.getBoundingClientRect();
            var startX = block.pageXCenter() - 1;
            var startY = block.pageYCenter();
            var endX =
                sourceRect.left + window.pageXOffset + sourceRect.width / 2;
            var endY =
                sourceRect.top +
                window.pageYOffset +
                block.view.getBoundingClientRect().height / 2;
            var slideUnderBlock = block.slideUnderBlock();
            if (slideUnderBlock !== undefined) {
                endY +=
                    slideUnderBlock.view.getBoundingClientRect().height + 20;
                endY += parseInt($(slideUnderBlock.view).css("top"));
            }
            var that = this;
            $(block.view).css({
                "border-color": "#000",
                "background-color": "#fff",
            });
            $(block.view).animate(
                {
                    opacity: 1.0,
                },
                {
                    duration:
                        Math.sqrt(
                            Math.pow(endY - startY, 2) +
                                Math.pow(endX - startX, 2)
                        ) *
                            4 +
                        500,
                    start: function () {
                        that.moving = block;
                        that.movingX = startX;
                        that.movingY = startY;
                        that.updateView();
                    },
                    progress: function (a, p, c) {
                        that.movingX = startX * (1 - p) + endX * p;
                        that.movingY = startY * (1 - p) + endY * p;
                        that.updateView();
                    },
                    complete: function () {
                        delete that.moving;
                        delete that.movingX;
                        delete that.movingY;
                        that.updateView();
                        $(block.view).animate(
                            {
                                opacity: 0.3,
                                "border-color": "#d3d3d3",
                                "background-color": "#efefef",
                            },
                            {
                                duration: 1000,
                                complete: function () {
                                    $(block.view).css({
                                        opacity: "",
                                        "border-color": "",
                                        "background-color": "",
                                    });
                                    $(block.view).addClass("disabled");
                                },
                            }
                        );
                    },
                }
            );
        } else {
            $(block.view).css({
                "border-color": "#000",
                "background-color": "#fff",
            });
            $(block.view).animate(
                {
                    opacity: 0.3,
                    "border-color": "#d3d3d3",
                    "background-color": "#efefef",
                },
                {
                    duration: 2000,
                    complete: function () {
                        $(block.view).css({
                            "border-color": "",
                            "background-color": "",
                        });
                    },
                }
            );
        }
    }
    // Give the user the indentation
    removeIndentation() {
        // Alert the user to what is happening
        var feedbackArea = $(this.messageDiv);
        feedbackArea.fadeIn(500);
        feedbackArea.attr("class", "alert alert-info");
        feedbackArea.html($.i18n("msg_parson_provided_indent"));
        // Move and resize blocks
        var blockWidth = 200;
        for (var i = 0; i < this.lines.length; i++) {
            var line = this.lines[i];
            var expandedWidth =
                line.width + line.indent * this.options.pixelsPerIndent + 30;
            blockWidth = Math.max(blockWidth, expandedWidth);
        }
        if (this.options.numbered != undefined) {
            blockWidth += 25;
        }
        this.areaWidth = blockWidth + 22;
        var block, indent;
        var sourceBlocks = this.sourceBlocks();
        for (let i = 0; i < sourceBlocks.length; i++) {
            block = sourceBlocks[i];
            indent = block.solutionIndent();
            if (indent == 0) {
                $(block.view).animate(
                    {
                        width: blockWidth,
                    },
                    {
                        duration: 1000,
                    }
                );
            } else {
                $(block.view).animate(
                    {
                        width:
                            blockWidth - indent * this.options.pixelsPerIndent,
                        "padding-left":
                            indent * this.options.pixelsPerIndent + 10,
                    },
                    {
                        duration: 1000,
                    }
                );
            }
        }
        for (let i = 0; i < this.pairedDivs.length; i++) {
            $(this.pairedDivs[i]).animate(
                {
                    width: blockWidth + 34,
                },
                {
                    duration: 1000,
                }
            );
        }
        var answerBlocks = this.answerBlocks();
        for (let i = 0; i < answerBlocks.length; i++) {
            block = answerBlocks[i];
            indent = block.solutionIndent();
            if (indent == 0) {
                $(block.view).animate(
                    {
                        left: 0,
                        width: blockWidth,
                    },
                    {
                        duration: 1000,
                    }
                );
            } else {
                $(block.view).animate(
                    {
                        left: 0,
                        width:
                            blockWidth - indent * this.options.pixelsPerIndent,
                        "padding-left":
                            indent * this.options.pixelsPerIndent + 10,
                    },
                    {
                        duration: 1000,
                    }
                );
            }
        }
        // Resize answer and source area
        $(this.answerArea).removeClass("answer1 answer2 answer3 answer4");
        $(this.answerArea).addClass("answer");
        this.indent = 0;
        this.noindent = true;
        $(this.sourceArea).animate(
            {
                width: this.areaWidth + 2,
            },
            {
                duration: 1000,
            }
        );
        $(this.answerArea).animate(
            {
                width: this.areaWidth + 2,
            },
            {
                duration: 1000,
            }
        );
        // Change the model (with view)
        $(this.answerArea).animate(
            {
                opacity: 1.0,
            },
            {
                duration: 1100,
                complete: function () {
                    $(this.answerArea).css({
                        opacity: "",
                    });
                    // Update the model
                    for (let i = 0; i < sourceBlocks.length; i++) {
                        sourceBlocks[i].addIndent();
                    }
                    for (let i = 0; i < answerBlocks.length; i++) {
                        answerBlocks[i].addIndent();
                    }
                },
            }
        );
    }

    // first check if any solution blocks are in the source still (left side) and not
    // in the answer
    getSolutionBlockInSource() {
        var solutionBlocks = this.solutionBlocks();
        var answerBlocks = this.answerBlocks();
        var sourceBlocks = this.sourceBlocks();
        var solBlock = null;
        var currBlock = null;

        // loop through sourceBlocks and return a block if it is not in the solution
        for (var i = 0; i < sourceBlocks.length; i++) {
            // get the current block from the source
            currBlock = sourceBlocks[i];

            // if currBlock is in the solution and isn't the first block and isn't in the answer
            if (
                solutionBlocks.indexOf(currBlock) > 0 &&
                answerBlocks.indexOf(currBlock) < 0
            ) {
                return currBlock;
            }
        }
        // didn't find any block in the source that is in the solution
        return null;
    }

    // Find a block2 that is furthest from block1 in the answer
    // don't use the very first block in the solution as block2
    getFurthestBlock() {
        var solutionBlocks = this.solutionBlocks();
        var answerBlocks = this.answerBlocks();
        var maxDist = 0;
        var dist = 0;
        var maxBlock = null;
        var currBlock = null;
        var indexSol = 0;
        var prevBlock = null;
        var indexPrev = 0;

        // loop through the blocks in the answer
        for (var i = 0; i < answerBlocks.length; i++) {
            currBlock = answerBlocks[i];
            indexSol = solutionBlocks.indexOf(currBlock);
            if (indexSol > 0) {
                prevBlock = solutionBlocks[indexSol - 1];
                indexPrev = answerBlocks.indexOf(prevBlock);
                //alert("my index " + i + " index prev " + indexPrev);

                // calculate the distance in the answer
                dist = Math.abs(i - indexPrev);
                if (dist > maxDist) {
                    maxDist = dist;
                    maxBlock = currBlock;
                }
            }
        }
        return maxBlock;
    }

    // Combine blocks together
    combineBlocks() {
        var solutionBlocks = this.solutionBlocks();
        var answerBlocks = this.answerBlocks();
        var sourceBlocks = this.sourceBlocks();

        // Alert the user to what is happening
        var feedbackArea = $(this.messageDiv);
        feedbackArea.fadeIn(500);
        feedbackArea.attr("class", "alert alert-info");
        feedbackArea.html($.i18n("msg_parson_combined_blocks"));
        var block1 = null;
        var block2 = null;

        // get a solution block that is still in source (not answer), if any
        block2 = this.getSolutionBlockInSource();

        // if none in source get block that is furthest from block1
        if (block2 == null) {
            block2 = this.getFurthestBlock();
        }

        // get block1 (above block2) in solution
        var index = solutionBlocks.indexOf(block2);
        block1 = solutionBlocks[index - 1];

        // get index of each in answer
        var index1 = answerBlocks.indexOf(block1);
        var index2 = answerBlocks.indexOf(block2);
        var move = false;

        // if both in answer set move based on if directly above each other
        if (index1 >= 0 && index2 >= 0) {
            move = index1 + 1 !== index2;

            // else if both in source set move again based on if above each other
        } else if (index1 < 0 && index2 < 0) {
            index1 = sourceBlocks.indexOf(block1);
            index2 = sourceBlocks.indexOf(block2);
            move = index1 + 1 !== index2;

            // one in source and one in answer so must move
        } else {
            move = true;
            if (index1 < 0) {
                index1 = sourceBlocks.indexOf(block1);
            }
            if (index2 < 0) {
                index2 = sourceBlocks.indexOf(block2);
            }
        }

        var subtract = index2 < index1; // is block2 higher

        if (move) {
            // Move the block
            var startX = block2.pageXCenter() - 1;
            var startY = block2.pageYCenter();
            var endX = block1.pageXCenter() - 1;
            var endY =
                block1.pageYCenter() +
                block1.view.getBoundingClientRect().height / 2 +
                5;
            if (subtract) {
                endY -= block2.view.getBoundingClientRect().height / 2;
            } else {
                endY += block2.view.getBoundingClientRect().height / 2;
            }
            var that = this;
            $(block2.view).animate(
                {
                    opacity: 1,
                },
                {
                    duration: 1000, // 1 seccond
                    start: function () {
                        $(block1.view).css({
                            "border-color": "#000",
                            "background-color": "#fff",
                        });
                        $(block2.view).css({
                            "border-color": "#000",
                            "background-color": "#fff",
                        });
                        block2.lines[0].index += 1000;
                        that.moving = block2;
                        that.movingX = startX;
                        that.movingY = startY;
                        that.updateView();
                    },
                    progress: function (a, p, c) {
                        that.movingX = startX * (1 - p) + endX * p;
                        that.movingY = startY * (1 - p) + endY * p;
                        that.updateView();
                    },
                    complete: function () {
                        delete that.moving;
                        delete that.movingX;
                        delete that.movingY;
                        that.updateView();
                        block2.lines[0].index -= 1000;
                        block1.consumeBlock(block2);
                        $(block1.view).animate(
                            {
                                "border-color": "#d3d3d3",
                                "background-color": "#efefef",
                            },
                            {
                                duration: 1000,
                                complete: function () {
                                    $(block1.view).css({
                                        "border-color": "",
                                        "background-color": "",
                                    });
                                },
                            }
                        );
                    },
                }
            );
        } else {
            $(block2.view).animate(
                {
                    opacity: 1,
                },
                {
                    duration: 1000,
                    start: function () {
                        $(block1.view).css({
                            "border-color": "#000",
                            "background-color": "#fff",
                        });
                        $(block2.view).css({
                            "border-color": "#000",
                            "background-color": "#fff",
                        });
                    },
                    complete: function () {
                        block1.consumeBlock(block2);
                        $(block1.view).animate(
                            {
                                "border-color": "#d3d3d3",
                                "background-color": "#efefef",
                            },
                            {
                                duration: 1000,
                                complete: function () {
                                    $(block1.view).css({
                                        "border-color": "",
                                        "background-color": "",
                                    });
                                },
                            }
                        );
                    },
                }
            );
        }
    }
    // Adapt the problem to be easier
    //  * remove a distractor until none are present
    //  * combine blocks until 3 are left
    makeEasier() {
        var distractorToRemove = this.distractorToRemove();
        if (
            distractorToRemove !== undefined &&
            !distractorToRemove.inSourceArea()
        ) {
            alert($.i18n("msg_parson_remove_incorrect"));
            this.removeDistractor(distractorToRemove);
            this.logMove("removedDistractor-" + distractorToRemove.hash());
        } else {
            var numberOfBlocks = this.numberOfBlocks(false);
            if (numberOfBlocks > 3) {
                alert($.i18n("msg_parson_will_combine"));
                this.combineBlocks();
                this.logMove("combinedBlocks");
            } /*else if(this.numberOfBlocks(true) > 3 && distractorToRemove !==  undefined) {
                alert("Will remove an incorrect code block from source area");
                this.removeDistractor(distractorToRemove);
                this.logMove("removedDistractor-" + distractorToRemove.hash());
            } */ else {
                alert($.i18n("msg_parson_three_blocks_left"));
                this.canHelp = false;
            }
            //if (numberOfBlocks < 5) {
            //	this.canHelp = false;
            //	this.helpButton.disabled = true;
            //}
        }
    }
    // The "Help Me" button was pressed and the problem should be simplified
    helpMe() {
        this.clearFeedback();
        //this.helpCount = -1; // amount to allow for multiple helps in a row
        //if (this.helpCount < 0) {
        //	this.helpCount = Math.max(this.helpCount, -1); // min 1 attempt before more help
        //this.helpButton.disabled = true;
        //}
        // if less than 3 attempts
        if (this.numDistinct < 3) {
            alert($.i18n("msg_parson_atleast_three_attempts"));
        }
        // otherwise give help
        else {
            this.gotHelp = true;
            this.makeEasier();
        }
    }
    /* =====================================================================
    ==== UTILITY ===========================================================
    ===================================================================== */
    // Return a date from a timestamp (either mySQL or JS format)
    dateFromTimestamp(timestamp) {
        var date = new Date(timestamp);
        if (isNaN(date.getTime())) {
            var t = timestamp.split(/[- :]/);
            date = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
        }
        return date;
    }
    // A function for returning a shuffled version of an array
    shuffled(array) {
        var currentIndex = array.length;
        var returnArray = array.slice();
        var temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = returnArray[currentIndex];
            returnArray[currentIndex] = returnArray[randomIndex];
            returnArray[randomIndex] = temporaryValue;
        }
        return returnArray;
    }
    /* =====================================================================
    ==== KEYBOARD INTERACTION ==============================================
    ===================================================================== */
    // When the user has entered the Parsons problem via keyboard mode
    enterKeyboardMode() {
        $(this.keyboardTip).show();
        $(this.sourceLabel).hide();
        $(this.answerLabel).hide();
        this.clearFeedback();
    }
    // When the user leaves the Parsons problem via keyboard mode
    exitKeyboardMode() {
        $(this.keyboardTip).hide();
        $(this.sourceLabel).show();
        $(this.answerLabel).show();
    }
    /* =====================================================================
    ==== VIEW ==============================================================
    ===================================================================== */
    // Clear any feedback from the answer area
    clearFeedback() {
        $(this.answerArea).removeClass("incorrect correct");
        var children = this.answerArea.childNodes;
        for (var i = 0; i < children.length; i++) {
            $(children[i]).removeClass(
                "correctPosition incorrectPosition indentLeft indentRight"
            );
        }
        $(this.messageDiv).hide();
    }
    // Disable the interface
    async disableInteraction() {
        // Disable blocks
        await this.checkServerComplete;
        console.log("disabling blocks");
        if (this.blocks !== undefined) {
            for (var i = 0; i < this.blocks.length; i++) {
                var block = this.blocks[i];
                block.disable();
            }
        }
        // Hide buttons
        $(this.checkButton).hide();
        $(this.resetButton).hide();
    }
    // Based on the moving element, etc., establish the moving state
    //   rest: not moving
    //   source: moving inside source area
    //   answer: moving inside answer area
    //   moving: moving outside areas
    movingState() {
        if (this.moving == undefined) {
            return "rest";
        }
        var x = this.movingX - window.pageXOffset;
        var y = this.movingY - window.pageYOffset;
        // Check if in answer area
        var bounds = this.answerArea.getBoundingClientRect();
        if (
            x >= bounds.left &&
            x <= bounds.right &&
            y >= bounds.top &&
            y <= bounds.bottom
        ) {
            return "answer";
        }
        // Check if in source area
        bounds = this.sourceArea.getBoundingClientRect();
        if (
            x >= bounds.left &&
            x <= bounds.right &&
            y >= bounds.top &&
            y <= bounds.bottom
        ) {
            return "source";
        }
        return "moving";
    }
    // Update the Parsons view
    // This gets called when dragging a block
    updateView() {
        // Based on the new and the old state, figure out what to update
        var state = this.state;
        var newState = this.movingState();
        var updateSource = true;
        var updateAnswer = true;
        var updateMoving = newState == "moving";
        if (state == newState) {
            if (newState == "rest") {
                updateSource = false;
                updateAnswer = false;
            } else if (newState == "source") {
                updateAnswer = false;
            } else if (newState == "answer") {
                updateSource = false;
            } else if (newState == "moving") {
                updateAnswer = false;
                updateSource = false;
            }
        }
        var movingHeight;
        if (this.moving !== undefined) {
            // Must get height here as detached items don't have height
            movingHeight = $(this.moving.view).outerHeight(true);
            $(this.moving.view).detach();
        }
        var positionTop, width;
        var baseWidth = this.areaWidth - 22;
        // Update the Source Area
        if (updateSource) {
            positionTop = 0;
            var blocks = this.sourceBlocks();
            if (newState == "source") {
                var hasInserted = false;
                var movingBin = this.moving.pairedBin();
                var binForBlock = [];
                for (i = 0; i < blocks.length; i++) {
                    binForBlock.push(blocks[i].pairedBin());
                }
                if (!binForBlock.includes(movingBin)) {
                    movingBin = -1;
                }
                var insertPositions = [];
                if (binForBlock.length == 0) {
                    insertPositions.push(0);
                } else {
                    if (movingBin == -1) {
                        insertPositions.push(0);
                    } else if (binForBlock[0] == movingBin) {
                        insertPositions.push(0);
                    }
                    for (i = 1; i < blocks.length; i++) {
                        if (binForBlock[i - 1] == movingBin) {
                            insertPositions.push(i);
                        } else if (binForBlock[i] == movingBin) {
                            insertPositions.push(i);
                        } else if (
                            movingBin == -1 &&
                            binForBlock[i - 1] != binForBlock[i]
                        ) {
                            insertPositions.push(i);
                        }
                    }
                    if (movingBin == -1) {
                        insertPositions.push(binForBlock.length);
                    } else if (
                        binForBlock[binForBlock.length - 1] == movingBin
                    ) {
                        insertPositions.push(binForBlock.length);
                    }
                }
                var x =
                    this.movingX -
                    this.sourceArea.getBoundingClientRect().left -
                    window.pageXOffset -
                    baseWidth / 2 -
                    11;
                var y =
                    this.movingY -
                    this.sourceArea.getBoundingClientRect().top -
                    window.pageYOffset;
                for (i = 0; i < blocks.length; i++) {
                    var item = blocks[i];
                    var j;
                    if (!hasInserted && insertPositions.includes(i)) {
                        var testHeight = $(item.view).outerHeight(true);
                        for (j = i + 1; j < blocks.length; j++) {
                            if (insertPositions.includes(j)) {
                                break;
                            }
                            testHeight += $(blocks[j].view).outerHeight(true);
                        }
                        if (
                            y - positionTop < movingHeight + testHeight / 2 ||
                            i == insertPositions[insertPositions.length - 1]
                        ) {
                            hasInserted = true;
                            this.sourceArea.insertBefore(
                                this.moving.view,
                                item.view
                            );
                            $(this.moving.view).css({
                                left: x,
                                top: y - movingHeight / 2,
                                width: baseWidth,
                                "z-index": 3,
                            });
                            positionTop = positionTop + movingHeight;
                        }
                    }
                    $(item.view).css({
                        left: 0,
                        top: positionTop,
                        width: baseWidth,
                        "z-index": 2,
                    });
                    positionTop = positionTop + $(item.view).outerHeight(true);
                }
                if (!hasInserted) {
                    $(this.moving.view).appendTo(
                        "#" + this.counterId + "-source"
                    );
                    $(this.moving.view).css({
                        left: x,
                        top: y - $(this.moving.view).outerHeight(true) / 2,
                        width: baseWidth,
                        "z-index": 3,
                    });
                }
            } else {
                for (var i = 0; i < blocks.length; i++) {
                    item = blocks[i];
                    $(item.view).css({
                        left: 0,
                        top: positionTop,
                        width: baseWidth,
                        "z-index": 2,
                    });
                    positionTop = positionTop + $(item.view).outerHeight(true);
                }
            }
            // Update the Paired Distractor Indicators
            for (i = 0; i < this.pairedBins.length; i++) {
                var bin = this.pairedBins[i];
                var matching = [];
                for (j = 0; j < blocks.length; j++) {
                    block = blocks[j];
                    if (block.matchesBin(bin)) {
                        matching.push(block);
                    }
                }
                var div = this.pairedDivs[i];
                if (matching.length == 0) {
                    $(div).hide();
                } else {
                    $(div).show();
                    var height = -5;
                    height += parseInt(
                        $(matching[matching.length - 1].view).css("top")
                    );
                    height -= parseInt($(matching[0].view).css("top"));
                    height += $(matching[matching.length - 1].view).outerHeight(
                        true
                    );
                    $(div).css({
                        left: -6,
                        top: $(matching[0].view).css("top"),
                        width: baseWidth + 34,
                        height: height,
                        "z-index": 1,
                        "text-indent": -30,
                        "padding-top": (height - 70) / 2,
                        overflow: "visible",
                        "font-size": 43,
                        "vertical-align": "middle",
                        color: "#7e7ee7",
                    });
                    $(div).html(
                        "<span id= 'st' style = 'vertical-align: middle; font-weight: bold; font-size: 15px'>or</span>{"
                    );
                }
                if (matching.length == 1) {
                    $(div).html("");
                }
            }
        }
        // Update the Answer Area
        if (updateAnswer) {
            var block, indent;
            positionTop = 0;
            width =
                this.areaWidth +
                this.indent * this.options.pixelsPerIndent -
                22;
            var blocks = this.answerBlocks();
            if (newState == "answer") {
                var hasInserted = false;
                var x =
                    this.movingX -
                    this.answerArea.getBoundingClientRect().left -
                    window.pageXOffset -
                    baseWidth / 2 -
                    11;
                var movingIndent = Math.round(x / this.options.pixelsPerIndent);
                if (movingIndent < 0) {
                    movingIndent = 0;
                } else if (movingIndent > this.indent) {
                    movingIndent = this.indent;
                } else {
                    x = movingIndent * this.options.pixelsPerIndent;
                }
                var y =
                    this.movingY -
                    this.answerArea.getBoundingClientRect().top -
                    window.pageYOffset;
                this.moving.indent = movingIndent;
                for (i = 0; i < blocks.length; i++) {
                    block = blocks[i];
                    if (!hasInserted) {
                        if (
                            y - positionTop <
                            (movingHeight + $(block.view).outerHeight(true)) / 2
                        ) {
                            hasInserted = true;
                            this.answerArea.insertBefore(
                                this.moving.view,
                                block.view
                            );
                            $(this.moving.view).css({
                                left: x,
                                top: y - movingHeight / 2,
                                width: baseWidth,
                                "z-index": 3,
                            });
                            positionTop = positionTop + movingHeight;
                        }
                    }
                    indent = block.indent * this.options.pixelsPerIndent;
                    $(block.view).css({
                        left: indent,
                        top: positionTop,
                        width: width - indent,
                        "z-index": 2,
                    });
                    positionTop = positionTop + $(block.view).outerHeight(true);
                }
                if (!hasInserted) {
                    $(this.moving.view).appendTo(
                        "#" + this.counterId + "-answer"
                    );
                    $(this.moving.view).css({
                        left: x,
                        top: y - $(this.moving.view).outerHeight(true) / 2,
                        width: baseWidth,
                        "z-index": 3,
                    });
                }
            } else {
                for (let i = 0; i < blocks.length; i++) {
                    block = blocks[i];
                    indent = block.indent * this.options.pixelsPerIndent;
                    $(block.view).css({
                        left: indent,
                        top: positionTop,
                        width: width - indent,
                        "z-index": 2,
                    });
                    positionTop = positionTop + $(block.view).outerHeight(true);
                }
            }
        }
        // Update the Moving Area
        if (updateMoving) {
            // Add it to the lowest place in the source area
            movingBin = this.moving.pairedBin();
            if (movingBin == -1) {
                $(this.moving.view).appendTo("#" + this.counterId + "-source");
            } else {
                var before;
                blocks = this.sourceBlocks;
                for (i = 0; i < blocks.length; i++) {
                    block = blocks[i];
                    if (block.pairedBin() == movingBin) {
                        before = i + 1;
                    }
                }
                if (before == undefined || before == blocks.length) {
                    $(this.moving.view).appendTo(
                        "#" + this.counterId + "-source"
                    );
                } else {
                    this.sourceArea.insertBefore(
                        this.moving.view,
                        blocks[before].view
                    );
                }
            }
            // Place in the middle of the mouse cursor
            $(this.moving.view).css({
                left:
                    this.movingX -
                    this.sourceArea.getBoundingClientRect().left -
                    window.pageXOffset -
                    $(this.moving.view).outerWidth(true) / 2,
                top:
                    this.movingY -
                    this.sourceArea.getBoundingClientRect().top -
                    window.pageYOffset -
                    movingHeight / 2,
                width: baseWidth,
                "z-index": 3,
            });
        }
        state = newState;
        this.state = state;
    }
    addBlockLabels(blocks) {
        var bin = -1;
        var binCount = 0;
        var binChildren = 0;
        var blocksNotInBins = 0;
        for (let i = 0; i < blocks.length; i++) {
            if (blocks[i].pairedBin() == -1) {
                blocksNotInBins++;
            }
        }
        for (let i = 0; i < blocks.length; i++) {
            var currentBin = blocks[i].pairedBin();
            if (currentBin == -1 || currentBin != bin) {
                bin = currentBin;
                binChildren = 0;
                binCount++;
            }
            var label =
                "" +
                binCount +
                (currentBin != -1
                    ? String.fromCharCode(97 + binChildren)
                    : " ");
            if (
                binCount < 10 &&
                blocksNotInBins + this.pairedBins.length >= 10
            ) {
                label += " ";
            }
            blocks[i].addLabel(label, 0);
            binChildren++;
        }
        if (blocksNotInBins + this.pairedBins.length >= 10) {
            this.areaWidth += 5;
            $(this.sourceArea).css({
                width: $(this.sourceArea).width() + 5,
            });
            $(this.answerArea).css({
                width: $(this.answerArea).width() + 5,
            });
        }
    }
    // Put all the blocks back into the source area, reshuffling as necessary
    resetView() {
        // Clear everything
        this.clearFeedback();
        var scrollTop = document.body.scrollTop;
        var block;
        for (let i = 0; i < this.blocks.length; i++) {
            block = this.blocks[i];
            for (var j = 0; j < block.lines.length; j++) {
                var children = $(block.lines[j].view).find(".block-label");
                for (var c = 0; c < children.length; c++) {
                    children[c].remove();
                }
            }
            block.destroy();
            $(this.blocks[i].view).detach();
        }
        delete this.blocks;
        this.blockIndex = 0;
        for (let i = 0; i < this.pairedDivs.length; i++) {
            $(this.pairedDivs[i]).detach();
        }
        $(this.sourceArea).attr("style", "");
        $(this.answerArea).removeClass();
        $(this.answerArea).attr("style", "");
        this.noindent = this.options.noindent;
        // Reinitialize
        if (this.hasSolved) {
            this.checkCount = 0;
            this.numDistinct = 0;
            this.hasSolved = false;
            if (this.options.adaptive) {
                this.canHelp = true;
            }
            //this.helpCount = -3; // enable after 3 failed attempts
            //this.helpButton.disabled = true;
            localStorage.setItem(this.adaptiveId + "Problem", this.divid);
            localStorage.setItem(
                this.adaptiveId + this.divid + "Count",
                this.checkCount
            );
            localStorage.setItem(this.adaptiveId + "Solved", false);
        }
        this.initializeAreas(this.blocksFromSource(), [], {});
        this.initializeInteractivity();
        document.body.scrollTop = scrollTop;
    }
}

Parsons.counter = 0;

$(document).bind("runestone:login-complete", function () {
    $("[data-component=parsons]").each(function (index) {
        if ($(this).closest("[data-component=timedAssessment]").length == 0) {
            try {
                prsList[this.id] = new Parsons({
                    orig: this,
                    useRunestoneServices: eBookConfig.useRunestoneServices,
                });
            } catch (err) {
                console.log(`Error rendering Parsons Problem ${this.id}
                             Details: ${err}`);
                console.log(err.stack);
            }
        }
    });
});


/***/ }),

/***/ 404:
/*!**********************************************!*\
  !*** ./runestone/parsons/js/parsonsBlock.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ParsonsBlock)
/* harmony export */ });
/* harmony import */ var _hammer_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hammer.min.js */ 97430);
/* harmony import */ var _hammer_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hammer_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* =====================================================================
==== ParsonsBlock Object ===============================================
======== The model and view of a code block.
==== PROPERTIES ========================================================
======== problem: the Parsons problem
======== lines: an array of ParsonsLine in this block
======== indent: indent based on movement
======== view: an element for viewing this object
======== labels: [label, line] the labels numbering the block and the lines they go on
======== hammer: the controller based on hammer.js
===================================================================== */



// Initialize based on the problem and the lines
class ParsonsBlock {
    constructor(problem, lines) {
        this.problem = problem;
        this.lines = lines;
        this.indent = 0;
        this.labels = [];
        // Create view, adding view of lines and updating indent
        var view = document.createElement("div");
        view.id = problem.counterId + "-block-" + problem.blockIndex;
        problem.blockIndex += 1;
        $(view).addClass("block");
        var sharedIndent = lines[0].indent;
        for (let i = 1; i < lines.length; i++) {
            sharedIndent = Math.min(sharedIndent, lines[i].indent);
        }
        var lineDiv = document.createElement("div");
        $(lineDiv).addClass("lines");
        $(view).append(lineDiv);
        for (let i = 0; i < lines.length; i++) {
            var line = lines[i];
            var lineIndent;
            if (problem.noindent) {
                lineIndent = line.indent;
            } else {
                lineIndent = line.indent - sharedIndent;
            }
            $(line.view).removeClass("indent1 indent2 indent3 indent4");
            if (lineIndent > 0) {
                $(line.view).addClass("indent" + lineIndent);
            }
            lineDiv.appendChild(line.view);
        }
        var labelDiv = document.createElement("div");
        $(labelDiv).addClass("labels");
        if (this.problem.options.numbered == "left") {
            $(lineDiv).addClass("border_left");
            $(view).prepend(labelDiv);
            $(view).css({
                "justify-content": "flex-start",
            });
        } else if (this.problem.options.numbered == "right") {
            $(labelDiv).addClass("border_left");
            $(labelDiv).css({
                float: "right",
            });
            $(view).css({
                "justify-content": "space-between",
            });
            $(view).append(labelDiv);
        }
        this.view = view;
    }
    // Add a line (from another block) to this block
    addLine(line) {
        $(line.view).removeClass("indent1 indent2 indent3 indent4");
        if (this.problem.noindent) {
            if (line.indent > 0) {
                $(line.view).addClass("indent" + line.indent);
            }
        } else {
            var lines = this.lines;
            var sharedIndent = lines[0].indent;
            for (let i = 1; i < lines.length; i++) {
                sharedIndent = Math.min(sharedIndent, lines[i].indent);
            }
            if (sharedIndent < line.indent) {
                $(line.view).addClass("indent" + (line.indent - sharedIndent));
            } else if (sharedIndent > line.indent) {
                for (let i = 0; i < lines.length; i++) {
                    $(lines[i].view).removeClass(
                        "indent1 indent2 indent3 indent4"
                    );
                    $(lines[i].view).addClass(
                        "indent" + (lines[i].indent - line.indent)
                    );
                }
            }
        }
        this.lines.push(line);
        $(this.view).children(".lines")[0].appendChild(line.view);
    }
    // Add the contents of that block to myself and then delete that block
    consumeBlock(block) {
        for (let i = 0; i < block.lines.length; i++) {
            this.addLine(block.lines[i]);
        }
        if ($(block.view).attr("tabindex") == "0") {
            this.makeTabIndex();
        }
        $(block.view).detach();
        var newBlocks = [];
        for (let i = 0; i < this.problem.blocks.length; i++) {
            if (this.problem.blocks[i] !== block) {
                newBlocks.push(this.problem.blocks[i]);
            }
        }
        for (let i = 0; i < block.labels.length; i++) {
            this.addLabel(
                block.labels[i][0],
                this.lines.length - block.lines.length + block.labels[i][1]
            );
        }
        this.problem.blocks = newBlocks;
        this.problem.state = undefined;
        this.problem.updateView();
    }
    // Update the model and view when block is converted to contain indent
    addIndent() {
        // Update the lines model / view
        for (let i = 0; i < this.lines.length; i++) {
            var line = this.lines[i];
            if (line.indent > 0) {
                $(line.view).removeClass("indent1 indent2 indent3 indent4");
                $(line.view).addClass("indent" + line.indent);
            }
        }
        // Update the block model / view
        this.indent = 0;
        $(this.view).css({
            "padding-left": "",
            width: this.problem.areaWidth - 22,
        });
    }
    // Add a label to block and update its view
    addLabel(label, line) {
        var div = document.createElement("div");
        $(div).addClass("block-label");
        if (this.problem.options.numbered == "right") {
            $(div).addClass("right-label");
        }
        if (this.problem.options.numbered == "left") {
            $(div).addClass("left-label");
        }
        $(div).append(document.createTextNode(label));
        $(this.view).children(".labels")[0].append(div);
        if (this.labels.length != 0) {
            $(div).css(
                "margin-top",
                (line - this.labels[this.labels.length - 1][1] - 1) *
                    this.lines[line].view.offsetHeight
            );
        }
        this.labels.push([label, line]);
    }
    // Initialize Interactivity
    initializeInteractivity() {
        if ($(this.view).hasClass("disabled")) {
            return this;
        }
        $(this.view).attr("tabindex", "-1");
        this.hammer = new (_hammer_min_js__WEBPACK_IMPORTED_MODULE_0___default().Manager)(this.view, {
            recognizers: [
                [
                    (_hammer_min_js__WEBPACK_IMPORTED_MODULE_0___default().Pan),
                    {
                        direction: (_hammer_min_js__WEBPACK_IMPORTED_MODULE_0___default().DIRECTION_ALL),
                        threshold: 0,
                        pointers: 1,
                    },
                ],
            ],
        });
        var that = this;
        this.hammer.on("panstart", function (event) {
            that.panStart(event);
        });
        this.hammer.on("panend", function (event) {
            that.panEnd(event);
        });
        this.hammer.on("panmove", function (event) {
            that.panMove(event);
        });
    }
    // Return a boolean as to whether this block is able to be selected
    enabled() {
        return $(this.view).attr("tabindex") !== undefined;
    }
    // Return a boolean as to whether this block is a distractor
    isDistractor() {
        return this.lines[0].distractor;
    }
    // Return a boolean as to whether this block is in the source area
    inSourceArea() {
        var children = this.problem.sourceArea.childNodes;
        for (let i = 0; i < children.length; i++) {
            var item = children[i];
            if (item.id == this.view.id) {
                return true;
            }
        }
        return false;
    }
    // Return the page X position of the center of the view
    pageXCenter() {
        var boundingRect = this.view.getBoundingClientRect();
        var pageXCenter =
            window.pageXOffset + boundingRect.left + boundingRect.width / 2;
        return pageXCenter;
    }
    // Return the page Y position of the center of the view
    pageYCenter() {
        var boundingRect = this.view.getBoundingClientRect();
        var pageYCenter =
            window.pageYOffset + boundingRect.top + boundingRect.height / 2;
        return pageYCenter;
    }
    // Of all the line indents, return the minimum value
    minimumLineIndent() {
        var minimumLineIndent = this.lines[0].indent;
        for (let i = 1; i < this.lines.length; i++) {
            minimumLineIndent = Math.min(
                this.lines[i].indent,
                minimumLineIndent
            );
        }
        return minimumLineIndent;
    }
    // Return the last block in the source area that matches the paired bin it is in
    slideUnderBlock() {
        var sourceBlocks = this.problem.sourceBlocks();
        if (sourceBlocks.length == 0) {
            return undefined;
        }
        var pairedBin = this.pairedBin();
        if (pairedBin == -1) {
            return sourceBlocks[sourceBlocks.length - 1];
        }
        for (let i = sourceBlocks.length - 1; i >= 0; i--) {
            var block = sourceBlocks[i];
            if (block.pairedBin() == pairedBin) {
                return block;
            }
        }
        return sourceBlocks[sourceBlocks.length - 1];
    }
    // Return which paired bin it is in (-1) if not
    pairedBin() {
        var pairedBins = this.problem.pairedBins;
        for (var i = 0; i < pairedBins.length; i++) {
            if (this.matchesBin(pairedBins[i])) {
                return i;
            }
        }
        return -1;
    }
    // Return true if all lines are in that bin
    matchesBin(bin) {
        for (var i = 0; i < this.lines.length; i++) {
            var test = this.lines[i].index;
            if (bin.indexOf(test) == -1) {
                return false;
            }
        }
        return true;
    }
    // Return a list of indexes where this block could be inserted before
    validSourceIndexes() {
        var blocks = this.problem.sourceBlocks();
        var indexes = [];
        var pairedBin = this.pairedBin();
        var i, lastBin;
        if (pairedBin >= 0) {
            for (i = 0; i < blocks.length; i++) {
                var block = blocks[i];
                if (block.view.id !== this.view.id) {
                    var blockBin = block.pairedBin();
                    if (blockBin == pairedBin) {
                        indexes.push(i);
                    } else if (lastBin == pairedBin) {
                        indexes.push(i);
                    }
                    lastBin = blockBin;
                }
            }
            if (lastBin == pairedBin) {
                indexes.push(blocks.length);
            }
            if (indexes.length > 0) {
                return indexes;
            }
        }
        for (i = 0; i < blocks.length; i++) {
            let block = blocks[i];
            if (block.view.id !== this.view.id) {
                let blockBin = block.pairedBin();
                if (blockBin !== lastBin) {
                    indexes.push(i);
                } else if (blockBin == -1) {
                    indexes.push(i);
                }
                lastBin = blockBin;
            }
        }
        indexes.push(blocks.length);
        return indexes;
    }
    // A measure of how far the middle of this block is vertically positioned
    verticalOffset() {
        var verticalOffset;
        if (this.inSourceArea()) {
            verticalOffset = this.problem.sourceArea.getBoundingClientRect()
                .top;
        } else {
            verticalOffset = this.problem.answerArea.getBoundingClientRect()
                .top;
        }
        verticalOffset =
            this.view.getBoundingClientRect().top +
            this.view.getBoundingClientRect().bottom -
            verticalOffset * 2;
        return verticalOffset;
    }
    // This block just gained textual focus
    newFocus() {
        if (this.problem.textFocus == undefined) {
            this.problem.enterKeyboardMode();
            this.problem.textFocus = this;
            this.problem.textMove = false;
            $(this.view).addClass("down");
        } else if (this.problem.textFocus == this) {
            if (this.problem.textMove) {
                $(this.view).addClass("up");
            } else {
                $(this.view).addClass("down");
            }
        } else {
            // already in keyboard mode
            this.problem.textFocus = this;
            this.problem.textMove = false;
            $(this.view).addClass("down");
        }
        this.problem.textMoving = false;
    }
    // This block just lost textual focus
    releaseFocus() {
        $(this.view).removeClass("down up");
        if (this.problem.textFocus == this) {
            if (!this.problem.textMoving) {
                // exit out of problem but stay way into problem
                this.problem.textFocus = undefined;
                if (this.problem.textMove) {
                    this.problem.logMove("kmove");
                    this.problem.textMove = false;
                }
                this.problem.exitKeyboardMode();
            }
        } else {
            // become selectable, but not active
            $(this.view).attr("tabindex", "-1");
            $(this.view).unbind("focus");
            $(this.view).unbind("blur");
            $(this.view).unbind("keydown");
        }
    }
    // Make this block into the keyboard entry point
    makeTabIndex() {
        $(this.view).attr("tabindex", "0");
        var that = this;
        $(this.view).focus(function () {
            that.newFocus();
        });
        $(this.view).blur(function () {
            that.releaseFocus();
        });
        $(this.view).keydown(function (event) {
            that.keyDown(event);
        });
    }
    // Called to disable interaction for the future
    disable() {
        if (this.hammer !== undefined) {
            this.hammer.set({ enable: false });
        }
        if ($(this.view).attr("tabindex") == "0") {
            this.releaseFocus();
            $(this.view).removeAttr("tabindex");
            this.problem.initializeTabIndex();
        } else {
            $(this.view).removeAttr("tabindex");
        }
    }
    // Enable functionality after reset button has been pressed
    resetView() {
        if (this.hammer !== undefined) {
            this.hammer.set({ enable: true });
        }
        if (!$(this.view)[0].hasAttribute("tabindex")) {
            $(this.view).attr("tabindex", "-1");
        }
        $(this.view).css({ opacity: "" });
    }
    // Called to destroy interaction for the future
    destroy() {
        if (this.hammer !== undefined) {
            this.hammer.destroy();
            delete this.hammer;
        }
        if ($(this.view).attr("tabindex") == "0") {
            this.releaseFocus();
        }
        $(this.view).removeAttr("tabindex");
    }
    // Called when a block is picked up
    panStart(event) {
        this.problem.clearFeedback();
        if (this.problem.started == undefined) {
            // log the first time that something gets moved
            this.problem.started = true;
            this.problem.logMove("start");
        }
        if (this.problem.textFocus !== undefined) {
            // stop text focus when dragging
            this.problem.textFocus.releaseFocus();
        }
        this.problem.moving = this;
        // Update the view
        this.problem.movingX = event.srcEvent.pageX;
        this.problem.movingY = event.srcEvent.pageY;
        this.problem.updateView();
    }
    // Called when a block is dropped
    panEnd(event) {
        this.problem.isAnswered = true;
        delete this.problem.moving;
        delete this.problem.movingX;
        delete this.problem.movingY;
        this.problem.updateView();
        this.problem.logMove("move");
    }
    // Called when a block is moved
    panMove(event) {
        // Update the view
        this.problem.movingX = event.srcEvent.pageX;
        this.problem.movingY = event.srcEvent.pageY;
        this.problem.updateView();
    }
    // Handle a keypress event when in focus
    keyDown(event) {
        if (this.problem.started == undefined) {
            // log the first time that something gets moved
            this.problem.started = true;
            this.problem.logMove("kstart");
        }
        switch (event.keyCode) {
            case 37: // left
                if (this.problem.textMove) {
                    this.moveLeft();
                } else {
                    this.selectLeft();
                }
                break;
            case 38: // up
                if (this.problem.textMove) {
                    this.moveUp();
                } else {
                    this.selectUp();
                }
                event.preventDefault();
                break;
            case 39: // right
                if (this.problem.textMove) {
                    this.moveRight();
                } else {
                    this.selectRight();
                }
                event.preventDefault();
                break;
            case 40: // down
                if (this.problem.textMove) {
                    this.moveDown();
                } else {
                    this.selectDown();
                }
                event.preventDefault();
                break;
            case 32: // space
                this.toggleMove();
                event.preventDefault();
                break;
            case 13: // enter
                this.toggleMove();
                event.preventDefault();
                break;
        }
    }
    // Move block left
    moveLeft() {
        var index, block;
        if (!this.inSourceArea()) {
            if (this.indent == 0) {
                // move to source area
                var blocks = this.problem.sourceBlocks();
                var offset = this.verticalOffset();
                var validSourceIndexes = this.validSourceIndexes();
                for (var i = 0; i < validSourceIndexes.length; i++) {
                    index = validSourceIndexes[i];
                    if (index == blocks.length) {
                        this.problem.textMoving = true;
                        this.problem.sourceArea.appendChild(this.view);
                        $(this.view).focus();
                        this.problem.state = undefined;
                        this.problem.updateView();
                        return this;
                    } else {
                        block = blocks[index];
                        if (block.verticalOffset() >= offset) {
                            break;
                        }
                    }
                }
                this.problem.textMoving = true;
                this.problem.sourceArea.insertBefore(this.view, block.view);
                $(this.view).focus();
            } else {
                // reduce indent
                this.indent = this.indent - 1;
            }
            this.problem.state = undefined;
            this.problem.updateView();
        }
    }
    // Move block up
    moveUp() {
        if (this.inSourceArea()) {
            let blocks = this.problem.sourceBlocks();
            var offset = this.verticalOffset();
            var validSourceIndexes = this.validSourceIndexes();
            for (let i = 0; i < validSourceIndexes.length; i++) {
                var index =
                    validSourceIndexes[validSourceIndexes.length - 1 - i];
                if (index < blocks.length) {
                    var block = blocks[index];
                    if (block.verticalOffset() < offset) {
                        this.problem.textMoving = true;
                        this.problem.sourceArea.insertBefore(
                            this.view,
                            block.view
                        );
                        $(this.view).focus();
                        this.problem.state = undefined;
                        this.problem.updateView();
                        return this;
                    }
                }
            }
        } else {
            let blocks = this.problem.answerBlocks();
            for (let i = 0; i < blocks.length; i++) {
                if (blocks[i].view.id == this.view.id) {
                    if (i == 0) {
                        return this;
                    }
                    this.problem.textMoving = true;
                    this.problem.answerArea.insertBefore(
                        this.view,
                        blocks[i - 1].view
                    );
                    $(this.view).focus();
                    this.problem.state = undefined;
                    this.problem.updateView();
                }
            }
        }
    }
    // Move block right
    moveRight() {
        if (this.inSourceArea()) {
            // move to answer area
            this.indent = 0;
            var offset = this.verticalOffset();
            var answerBlocks = this.problem.answerBlocks();
            for (var i = 0; i < answerBlocks.length; i++) {
                var item = answerBlocks[i];
                var itemOffset = item.verticalOffset();
                if (itemOffset >= offset) {
                    this.problem.textMoving = true;
                    this.problem.answerArea.insertBefore(this.view, item.view);
                    $(this.view).focus();
                    this.problem.state = undefined;
                    this.problem.updateView();
                    return this;
                }
            }
            this.problem.textMoving = true;
            this.problem.answerArea.appendChild(this.view);
            $(this.view).focus();
            this.problem.state = undefined;
            this.problem.updateView();
        } else {
            // in answer area: increase the indent
            if (this.indent !== this.problem.indent) {
                this.indent = this.indent + 1;
                this.problem.state = undefined;
                this.problem.updateView();
            }
        }
    }
    // Move block down
    moveDown() {
        if (this.inSourceArea()) {
            let blocks = this.problem.sourceBlocks();
            var validSourceIndexes = this.validSourceIndexes();
            for (let i = 0; i < blocks.length; i++) {
                if (blocks[i].view.id == this.view.id) {
                    var myIndex = i;
                }
            }
            for (let i = 0; i < validSourceIndexes.length; i++) {
                var index = validSourceIndexes[i];
                if (index == blocks.length) {
                    this.problem.textMoving = true;
                    this.problem.sourceArea.appendChild(this.view);
                    $(this.view).focus();
                    this.problem.state = undefined;
                    this.problem.updateView();
                    return this;
                } else if (index - myIndex > 1) {
                    this.problem.textMoving = true;
                    this.problem.sourceArea.insertBefore(
                        this.view,
                        blocks[index].view
                    );
                    $(this.view).focus();
                    this.problem.state = undefined;
                    this.problem.updateView();
                    return this;
                }
            }
        } else {
            let blocks = this.problem.answerBlocks();
            for (var i = 0; i < blocks.length; i++) {
                if (blocks[i].view.id == this.view.id) {
                    if (i == blocks.length - 1) {
                        return this;
                    } else if (i == blocks.length - 2) {
                        this.problem.textMoving = true;
                        this.problem.answerArea.appendChild(this.view);
                    } else {
                        this.problem.textMoving = true;
                        this.problem.answerArea.insertBefore(
                            this.view,
                            blocks[i + 2].view
                        );
                    }
                    $(this.view).focus();
                    this.problem.state = undefined;
                    this.problem.updateView();
                }
            }
        }
    }
    // Move selection left
    selectLeft() {
        if (!this.inSourceArea()) {
            var offset = this.verticalOffset();
            var sourceBlocks = this.problem.enabledSourceBlocks();
            if (sourceBlocks.length == 0) {
                return this;
            }
            var chooseNext = sourceBlocks[0];
            var chooseOffset = chooseNext.verticalOffset() - offset;
            for (var i = 1; i < sourceBlocks.length; i++) {
                var item = sourceBlocks[i];
                var itemOffset = item.verticalOffset() - offset;
                if (Math.abs(itemOffset) < Math.abs(chooseOffset)) {
                    chooseNext = item;
                    chooseOffset = itemOffset;
                }
            }
            this.problem.textFocus = chooseNext;
            chooseNext.makeTabIndex();
            $(chooseNext.view).focus();
        }
    }
    // Move selection up
    selectUp() {
        var chooseNext = false;
        var blocks;
        if (this.inSourceArea()) {
            blocks = this.problem.enabledSourceBlocks();
        } else {
            blocks = this.problem.enabledAnswerBlocks();
        }
        for (var i = blocks.length - 1; i >= 0; i--) {
            var item = blocks[i];
            if (chooseNext) {
                this.problem.textFocus = item;
                item.makeTabIndex();
                $(item.view).focus();
                return this;
            } else {
                if (item.view.id == this.view.id) {
                    chooseNext = true;
                }
            }
        }
    }
    // Move selection right
    selectRight() {
        if (this.inSourceArea()) {
            var offset = this.verticalOffset();
            var blocks = this.problem.enabledAnswerBlocks();
            if (blocks.length == 0) {
                return this;
            }
            var chooseNext = blocks[0];
            var chooseOffset = chooseNext.verticalOffset() - offset;
            for (var i = 1; i < blocks.length; i++) {
                var item = blocks[i];
                var itemOffset = item.verticalOffset() - offset;
                if (Math.abs(itemOffset) < Math.abs(chooseOffset)) {
                    chooseNext = item;
                    chooseOffset = itemOffset;
                }
            }
            this.problem.textFocus = chooseNext;
            chooseNext.makeTabIndex();
            $(chooseNext.view).focus();
        }
    }
    // Move selection down
    selectDown() {
        var chooseNext = false;
        var blocks;
        if (this.inSourceArea()) {
            blocks = this.problem.enabledSourceBlocks();
        } else {
            blocks = this.problem.enabledAnswerBlocks();
        }
        for (var i = 0; i < blocks.length; i++) {
            var item = blocks[i];
            if (chooseNext) {
                this.problem.textFocus = item;
                item.makeTabIndex();
                $(item.view).focus();
                return this;
            } else {
                if (item.view.id == this.view.id) {
                    chooseNext = true;
                }
            }
        }
    }
    // Toggle whether to move this block
    toggleMove() {
        if (this.problem.textMove) {
            $(this.view).removeClass("up");
            $(this.view).addClass("down");
            this.problem.textMove = false;
            this.problem.logMove("kmove");
        } else {
            $(this.view).removeClass("down");
            $(this.view).addClass("up");
            this.problem.textMove = true;
        }
    }
    // Answer a string that represents this codeblock for saving
    hash() {
        var hash = "";
        for (var i = 0; i < this.lines.length; i++) {
            hash += this.lines[i].index + "_";
        }
        hash += this.indent;
        return hash;
    }
    // Answer what the indent should be for the solution
    solutionIndent() {
        var sharedIndent = this.lines[0].indent;
        for (var i = 1; i < this.lines.length; i++) {
            sharedIndent = Math.min(sharedIndent, this.lines[i].indent);
        }
        return sharedIndent;
    }
}


/***/ }),

/***/ 18423:
/*!*********************************************!*\
  !*** ./runestone/parsons/js/parsonsLine.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ParsonsLine)
/* harmony export */ });
/* =====================================================================
==== ParsonsLine Object ================================================
======== The model and view of a line of code.
======== Based on what is specified in the problem.
======== ParsonBlock objects have one or more of these.
==== PROPERTIES ========================================================
======== problem: the Parsons problem
======== index: the index of the line in the problem
======== text: the text of the code line
======== indent: the indent level
======== view: an element for viewing this object
======== distractor: whether it is a distractor
======== paired: whether it is a paired distractor
======== groupWithNext: whether it is grouped with the following line
======== width: the pixel width when rendered
============ in the initial grouping
===================================================================== */
// Initialize from codestring

class ParsonsLine {
    constructor(problem, codestring) {
        this.problem = problem;
        this.index = problem.lines.length;
        var trimmed = codestring.replace(/\s*$/, "");
        this.text = trimmed.replace(/^\s*/, "");
        this.indent = trimmed.length - this.text.length;
        // Create the View
        var view;
        if (problem.options.language == "natural" || problem.options.language == "math") {
            view = document.createElement("p");
        } else {
            view = document.createElement("code");
            $(view).addClass(problem.options.prettifyLanguage);
        }
        view.id = problem.counterId + "-line-" + this.index;
        view.innerHTML += this.text;
        this.view = view;
        problem.lines.push(this);
    }
    // Initialize what width the line would naturally have (without indent)
    initializeWidth() {
        // this.width does not appear to be used anywhere later
        // since changing the value of this.width appears to have no effect. - Vincent Qiu (September 2020)
        this.width =
            $(this.view).outerWidth(true) -
            this.problem.options.pixelsPerIndent * this.indent;

        // Pass this information on to be used in class Parsons function initializeAreas
        // to manually determine appropriate widths - Vincent Qiu (September 2020)
        this.view.fontSize = window
            .getComputedStyle(this.view, null)
            .getPropertyValue("font-size");
        this.view.pixelsPerIndent = this.problem.options.pixelsPerIndent;
        this.view.indent = this.indent;

        // Figure out which typeface will be rendered by comparing text widths to browser default - Vincent Qiu (September 2020)
        var tempCanvas = document.createElement("canvas");
        var tempCanvasCtx = tempCanvas.getContext("2d");
        var possibleFonts = window
            .getComputedStyle(this.view, null)
            .getPropertyValue("font-family")
            .split(", ");
        var fillerText = "abcdefghijklmnopqrstuvwxyz0123456789,./!@#$%^&*-+";
        tempCanvasCtx.font = this.view.fontSize + " serif";
        var serifWidth = tempCanvasCtx.measureText(fillerText).width;
        for (let i = 0; i < possibleFonts.length; i++) {
            if (possibleFonts[i].includes('"')) {
                possibleFonts[i] = possibleFonts[i].replaceAll('"', "");
            }
            if (possibleFonts[i].includes("'")) {
                possibleFonts[i] = possibleFonts[i].replaceAll("'", "");
            }
            tempCanvasCtx.font = this.view.fontSize + " " + possibleFonts[i];
            if (tempCanvasCtx.measureText(fillerText).width !== serifWidth) {
                this.view.fontFamily = possibleFonts[i];
                break;
            }
        }
    }
    // Answer the block that this line is currently in
    block() {
        for (let i = 0; i < this.problem.blocks.length; i++) {
            var block = this.problem.blocks[i];
            for (var j = 0; j < block.lines.length; j++) {
                if (block.lines[j] === this) {
                    return block;
                }
            }
        }
        return undefined;
    }
    // Answer the indent based on the view
    viewIndent() {
        if (this.problem.noindent) {
            return this.indent;
        } else {
            var block = this.block();
            return this.indent - block.solutionIndent() + block.indent;
        }
    }
}


/***/ }),

/***/ 87904:
/*!******************************************!*\
  !*** ./runestone/parsons/js/prettify.js ***!
  \******************************************/
/***/ (() => {

function H() {
    var x =
        navigator &&
        navigator.userAgent &&
        /\bMSIE 6\./.test(navigator.userAgent);
    H = function() {
        return x;
    };
    return x;
}
(function() {
    function x(b) {
        b = b.split(/ /g);
        var a = {};
        for (var c = b.length; --c >= 0; ) {
            var d = b[c];
            if (d) a[d] = null;
        }
        return a;
    }
    var y = "break continue do else for if return while ",
        U =
            y +
            "auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile ",
        D =
            U +
            "catch class delete false import new operator private protected public this throw true try ",
        I =
            D +
            "alignof align_union asm axiom bool concept concept_map const_cast constexpr decltype dynamic_cast explicit export friend inline late_check mutable namespace nullptr reinterpret_cast static_assert static_cast template typeid typename typeof using virtual wchar_t where ",
        J =
            D +
            "boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient ",
        V =
            J +
            "as base by checked decimal delegate descending event fixed foreach from group implicit in interface internal into is lock object out override orderby params readonly ref sbyte sealed stackalloc string select uint ulong unchecked unsafe ushort var ",
        K =
            D +
            "debugger eval export function get null set undefined var with Infinity NaN ",
        L =
            "caller delete die do dump elsif eval exit foreach for goto if import last local my next no our print package redo require sub undef unless until use wantarray while BEGIN END ",
        M =
            y +
            "and as assert class def del elif except exec finally from global import in is lambda nonlocal not or pass print raise try with yield False True None ",
        N =
            y +
            "alias and begin case class def defined elsif end ensure false in module next nil not or redo rescue retry self super then true undef unless until when yield BEGIN END ",
        O = y + "case done elif esac eval fi function in local set then until ",
        W = I + V + K + L + M + N + O;
    function X(b) {
        return (b >= "a" && b <= "z") || (b >= "A" && b <= "Z");
    }
    function u(b, a, c, d) {
        b.unshift(c, d || 0);
        try {
            a.splice.apply(a, b);
        } finally {
            b.splice(0, 2);
        }
    }
    var Y = (function() {
            var b = [
                    "!",
                    "!=",
                    "!==",
                    "#",
                    "%",
                    "%=",
                    "&",
                    "&&",
                    "&&=",
                    "&=",
                    "(",
                    "*",
                    "*=",
                    "+=",
                    ",",
                    "-=",
                    "->",
                    "/",
                    "/=",
                    ":",
                    "::",
                    ";",
                    "<",
                    "<<",
                    "<<=",
                    "<=",
                    "=",
                    "==",
                    "===",
                    ">",
                    ">=",
                    ">>",
                    ">>=",
                    ">>>",
                    ">>>=",
                    "?",
                    "@",
                    "[",
                    "^",
                    "^=",
                    "^^",
                    "^^=",
                    "{",
                    "|",
                    "|=",
                    "||",
                    "||=",
                    "~",
                    "break",
                    "case",
                    "continue",
                    "delete",
                    "do",
                    "else",
                    "finally",
                    "instanceof",
                    "return",
                    "throw",
                    "try",
                    "typeof"
                ],
                a =
                    "(?:(?:(?:^|[^0-9.])\\.{1,3})|(?:(?:^|[^\\+])\\+)|(?:(?:^|[^\\-])-)";
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                a += X(d.charAt(0))
                    ? "|\\b" + d
                    : "|" + d.replace(/([^=<>:&])/g, "\\$1");
            }
            a += "|^)\\s*$";
            return new RegExp(a);
        })(),
        P = /&/g,
        Q = /</g,
        R = />/g,
        Z = /\"/g;
    function $(b) {
        return b
            .replace(P, "&amp;")
            .replace(Q, "&lt;")
            .replace(R, "&gt;")
            .replace(Z, "&quot;");
    }
    function E(b) {
        return b
            .replace(P, "&amp;")
            .replace(Q, "&lt;")
            .replace(R, "&gt;");
    }
    var aa = /&lt;/g,
        ba = /&gt;/g,
        ca = /&apos;/g,
        da = /&quot;/g,
        ea = /&amp;/g,
        fa = /&nbsp;/g;
    function ga(b) {
        var a = b.indexOf("&");
        if (a < 0) return b;
        for (--a; (a = b.indexOf("&#", a + 1)) >= 0; ) {
            var c = b.indexOf(";", a);
            if (c >= 0) {
                var d = b.substring(a + 3, c),
                    g = 10;
                if (d && d.charAt(0) === "x") {
                    d = d.substring(1);
                    g = 16;
                }
                var e = parseInt(d, g);
                if (!isNaN(e))
                    b =
                        b.substring(0, a) +
                        String.fromCharCode(e) +
                        b.substring(c + 1);
            }
        }
        return b
            .replace(aa, "<")
            .replace(ba, ">")
            .replace(ca, "'")
            .replace(da, '"')
            .replace(ea, "&")
            .replace(fa, " ");
    }
    function S(b) {
        return "XMP" === b.tagName;
    }
    function z(b, a) {
        switch (b.nodeType) {
            case 1:
                var c = b.tagName.toLowerCase();
                a.push("<", c);
                for (var d = 0; d < b.attributes.length; ++d) {
                    var g = b.attributes[d];
                    if (!g.specified) continue;
                    a.push(" ");
                    z(g, a);
                }
                a.push(">");
                for (var e = b.firstChild; e; e = e.nextSibling) z(e, a);
                if (b.firstChild || !/^(?:br|link|img)$/.test(c))
                    a.push("</", c, ">");
                break;
            case 2:
                a.push(b.name.toLowerCase(), '="', $(b.value), '"');
                break;
            case 3:
            case 4:
                a.push(E(b.nodeValue));
                break;
        }
    }
    var F = null;
    function ha(b) {
        if (null === F) {
            var a = document.createElement("PRE");
            a.appendChild(
                document.createTextNode(
                    '<!DOCTYPE foo PUBLIC "foo bar">\n<foo />'
                )
            );
            F = !/</.test(a.innerHTML);
        }
        if (F) {
            var c = b.innerHTML;
            if (S(b)) c = E(c);
            return c;
        }
        var d = [];
        for (var g = b.firstChild; g; g = g.nextSibling) z(g, d);
        return d.join("");
    }
    function ia(b) {
        var a = 0;
        return function(c) {
            var d = null,
                g = 0;
            for (var e = 0, h = c.length; e < h; ++e) {
                var f = c.charAt(e);
                switch (f) {
                    case "\t":
                        if (!d) d = [];
                        d.push(c.substring(g, e));
                        var i = b - (a % b);
                        a += i;
                        for (; i >= 0; i -= "                ".length)
                            d.push("                ".substring(0, i));
                        g = e + 1;
                        break;
                    case "\n":
                        a = 0;
                        break;
                    default:
                        ++a;
                }
            }
            if (!d) return c;
            d.push(c.substring(g));
            return d.join("");
        };
    }
    var ja = /(?:[^<]+|<!--[\s\S]*?--\>|<!\[CDATA\[([\s\S]*?)\]\]>|<\/?[a-zA-Z][^>]*>|<)/g,
        ka = /^<!--/,
        la = /^<\[CDATA\[/,
        ma = /^<br\b/i;
    function na(b) {
        var a = b.match(ja),
            c = [],
            d = 0,
            g = [];
        if (a)
            for (var e = 0, h = a.length; e < h; ++e) {
                var f = a[e];
                if (f.length > 1 && f.charAt(0) === "<") {
                    if (ka.test(f)) continue;
                    if (la.test(f)) {
                        c.push(f.substring(9, f.length - 3));
                        d += f.length - 12;
                    } else if (ma.test(f)) {
                        c.push("\n");
                        ++d;
                    } else g.push(d, f);
                } else {
                    var i = ga(f);
                    c.push(i);
                    d += i.length;
                }
            }
        return {
            source: c.join(""),
            tags: g
        };
    }
    function v(b, a) {
        var c = {};
        (function() {
            var g = b.concat(a);
            for (var e = g.length; --e >= 0; ) {
                var h = g[e],
                    f = h[3];
                if (f) for (var i = f.length; --i >= 0; ) c[f.charAt(i)] = h;
            }
        })();
        var d = a.length;
        return function(g, e) {
            e = e || 0;
            var h = [e, "pln"],
                f = "",
                i = 0,
                j = g;
            while (j.length) {
                var o,
                    m = null,
                    k,
                    l = c[j.charAt(0)];
                if (l) {
                    k = j.match(l[1]);
                    m = k[0];
                    o = l[0];
                } else {
                    for (var n = 0; n < d; ++n) {
                        l = a[n];
                        var p = l[2];
                        if (p && !p.test(f)) continue;
                        k = j.match(l[1]);
                        if (k) {
                            m = k[0];
                            o = l[0];
                            break;
                        }
                    }
                    if (!m) {
                        o = "pln";
                        m = j.substring(0, 1);
                    }
                }
                h.push(e + i, o);
                i += m.length;
                j = j.substring(m.length);
                if (o !== "com" && /\S/.test(m)) f = m;
            }
            return h;
        };
    }
    var oa = v(
        [],
        [
            ["pln", /^[^<]+/, null],
            ["dec", /^<!\w[^>]*(?:>|$)/, null],
            ["com", /^<!--[\s\S]*?(?:--\>|$)/, null],
            ["src", /^<\?[\s\S]*?(?:\?>|$)/, null],
            ["src", /^<%[\s\S]*?(?:%>|$)/, null],
            ["src", /^<(script|style|xmp)\b[^>]*>[\s\S]*?<\/\1\b[^>]*>/i, null],
            ["tag", /^<\/?\w[^<>]*>/, null]
        ]
    );
    function pa(b) {
        var a = oa(b);
        for (var c = 0; c < a.length; c += 2)
            if (a[c + 1] === "src") {
                var d, g;
                d = a[c];
                g = c + 2 < a.length ? a[c + 2] : b.length;
                var e = b.substring(d, g),
                    h = e.match(/^(<[^>]*>)([\s\S]*)(<\/[^>]*>)$/);
                if (h)
                    a.splice(
                        c,
                        2,
                        d,
                        "tag",
                        d + h[1].length,
                        "src",
                        d + h[1].length + (h[2] || "").length,
                        "tag"
                    );
            }
        return a;
    }
    var qa = v(
        [
            ["atv", /^\'[^\']*(?:\'|$)/, null, "'"],
            ["atv", /^\"[^\"]*(?:\"|$)/, null, '"'],
            ["pun", /^[<>\/=]+/, null, "<>/="]
        ],
        [
            ["tag", /^[\w:\-]+/, /^</],
            ["atv", /^[\w\-]+/, /^=/],
            ["atn", /^[\w:\-]+/, null],
            ["pln", /^\s+/, null, " \t\r\n"]
        ]
    );
    function ra(b, a) {
        for (var c = 0; c < a.length; c += 2) {
            var d = a[c + 1];
            if (d === "tag") {
                var g, e;
                g = a[c];
                e = c + 2 < a.length ? a[c + 2] : b.length;
                var h = b.substring(g, e),
                    f = qa(h, g);
                u(f, a, c, 2);
                c += f.length - 2;
            }
        }
        return a;
    }
    function r(b) {
        var a = [],
            c = [];
        if (b.tripleQuotedStrings)
            a.push([
                "str",
                /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
                null,
                "'\""
            ]);
        else if (b.multiLineStrings)
            a.push([
                "str",
                /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,
                null,
                "'\"`"
            ]);
        else
            a.push([
                "str",
                /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,
                null,
                "\"'"
            ]);
        c.push(["pln", /^(?:[^\'\"\`\/\#]+)/, null, " \r\n"]);
        if (b.hashComments) a.push(["com", /^#[^\r\n]*/, null, "#"]);
        if (b.cStyleComments) c.push(["com", /^\/\/[^\r\n]*/, null]);
        if (b.regexLiterals)
            c.push([
                "str",
                /^\/(?:[^\\\*\/\[]|\\[\s\S]|\[(?:[^\]\\]|\\.)*(?:\]|$))+(?:\/|$)/,
                Y
            ]);
        if (b.cStyleComments) c.push(["com", /^\/\*[\s\S]*?(?:\*\/|$)/, null]);
        var d = x(b.keywords);
        b = null;
        var g = v(a, c),
            e = v(
                [],
                [
                    ["pln", /^\s+/, null, " \r\n"],
                    ["pln", /^[a-z_$@][a-z_$@0-9]*/i, null],
                    ["lit", /^0x[a-f0-9]+[a-z]/i, null],
                    [
                        "lit",
                        /^(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d+)(?:e[+\-]?\d+)?[a-z]*/i,
                        null,
                        "123456789"
                    ],
                    ["pun", /^[^\s\w\.$@]+/, null]
                ]
            );
        function h(f, i) {
            for (var j = 0; j < i.length; j += 2) {
                var o = i[j + 1];
                if (o === "pln") {
                    var m, k, l, n;
                    m = i[j];
                    k = j + 2 < i.length ? i[j + 2] : f.length;
                    l = f.substring(m, k);
                    n = e(l, m);
                    for (var p = 0, t = n.length; p < t; p += 2) {
                        var w = n[p + 1];
                        if (w === "pln") {
                            var A = n[p],
                                B = p + 2 < t ? n[p + 2] : l.length,
                                s = f.substring(A, B);
                            if (s === ".") n[p + 1] = "pun";
                            else if (s in d) n[p + 1] = "kwd";
                            else if (/^@?[A-Z][A-Z$]*[a-z][A-Za-z$]*$/.test(s))
                                n[p + 1] = s.charAt(0) === "@" ? "lit" : "typ";
                        }
                    }
                    u(n, i, j, 2);
                    j += n.length - 2;
                }
            }
            return i;
        }
        return function(f) {
            var i = g(f);
            i = h(f, i);
            return i;
        };
    }
    var G = r({
        keywords: W,
        hashComments: true,
        cStyleComments: true,
        multiLineStrings: true,
        regexLiterals: true
    });
    function sa(b, a) {
        for (var c = 0; c < a.length; c += 2) {
            var d = a[c + 1];
            if (d === "src") {
                var g, e;
                g = a[c];
                e = c + 2 < a.length ? a[c + 2] : b.length;
                var h = G(b.substring(g, e));
                for (var f = 0, i = h.length; f < i; f += 2) h[f] += g;
                u(h, a, c, 2);
                c += h.length - 2;
            }
        }
        return a;
    }
    function ta(b, a) {
        var c = false;
        for (var d = 0; d < a.length; d += 2) {
            var g = a[d + 1],
                e,
                h;
            if (g === "atn") {
                e = a[d];
                h = d + 2 < a.length ? a[d + 2] : b.length;
                c = /^on|^style$/i.test(b.substring(e, h));
            } else if (g === "atv") {
                if (c) {
                    e = a[d];
                    h = d + 2 < a.length ? a[d + 2] : b.length;
                    var f = b.substring(e, h),
                        i = f.length,
                        j =
                            i >= 2 &&
                            /^[\"\']/.test(f) &&
                            f.charAt(0) === f.charAt(i - 1),
                        o,
                        m,
                        k;
                    if (j) {
                        m = e + 1;
                        k = h - 1;
                        o = f;
                    } else {
                        m = e + 1;
                        k = h - 1;
                        o = f.substring(1, f.length - 1);
                    }
                    var l = G(o);
                    for (var n = 0, p = l.length; n < p; n += 2) l[n] += m;
                    if (j) {
                        l.push(k, "atv");
                        u(l, a, d + 2, 0);
                    } else u(l, a, d, 2);
                }
                c = false;
            }
        }
        return a;
    }
    function ua(b) {
        var a = pa(b);
        a = ra(b, a);
        a = sa(b, a);
        a = ta(b, a);
        return a;
    }
    function va(b, a, c) {
        var d = [],
            g = 0,
            e = null,
            h = null,
            f = 0,
            i = 0,
            j = ia(8);
        function o(k) {
            if (k > g) {
                if (e && e !== h) {
                    d.push("</span>");
                    e = null;
                }
                if (!e && h) {
                    e = h;
                    d.push('<span class="', e, '">');
                }
                var l = E(j(b.substring(g, k)))
                    .replace(/(\r\n?|\n| ) /g, "$1&nbsp;")
                    .replace(/\r\n?|\n/g, "<br />");
                d.push(l);
                g = k;
            }
        }
        while (true) {
            var m;
            m = f < a.length ? (i < c.length ? a[f] <= c[i] : true) : false;
            if (m) {
                o(a[f]);
                if (e) {
                    d.push("</span>");
                    e = null;
                }
                d.push(a[f + 1]);
                f += 2;
            } else if (i < c.length) {
                o(c[i]);
                h = c[i + 1];
                i += 2;
            } else break;
        }
        o(b.length);
        if (e) d.push("</span>");
        return d.join("");
    }
    var C = {};
    function q(b, a) {
        for (var c = a.length; --c >= 0; ) {
            var d = a[c];
            if (!C.hasOwnProperty(d)) C[d] = b;
            else if ("console" in window)
                console.log("cannot override language handler %s", d);
        }
    }
    q(G, ["default-code"]);
    q(ua, ["default-markup", "html", "htm", "xhtml", "xml", "xsl"]);
    q(
        r({
            keywords: I,
            hashComments: true,
            cStyleComments: true
        }),
        ["c", "cc", "cpp", "cs", "cxx", "cyc"]
    );
    q(
        r({
            keywords: J,
            cStyleComments: true
        }),
        ["java"]
    );
    q(
        r({
            keywords: O,
            hashComments: true,
            multiLineStrings: true
        }),
        ["bsh", "csh", "sh"]
    );
    q(
        r({
            keywords: M,
            hashComments: true,
            multiLineStrings: true,
            tripleQuotedStrings: true
        }),
        ["cv", "py"]
    );
    q(
        r({
            keywords: L,
            hashComments: true,
            multiLineStrings: true,
            regexLiterals: true
        }),
        ["perl", "pl", "pm"]
    );
    q(
        r({
            keywords: N,
            hashComments: true,
            multiLineStrings: true,
            regexLiterals: true
        }),
        ["rb"]
    );
    q(
        r({
            keywords: K,
            cStyleComments: true,
            regexLiterals: true
        }),
        ["js"]
    );
    function T(b, a) {
        try {
            var c = na(b),
                d = c.source,
                g = c.tags;
            if (!C.hasOwnProperty(a))
                a = /^\s*</.test(d) ? "default-markup" : "default-code";
            var e = C[a].call({}, d);
            return va(d, g, e);
        } catch (h) {
            if ("console" in window) {
                console.log(h);
                console.trace();
            }
            return b;
        }
    }
    function wa(b) {
        var a = H(),
            c = [
                document.getElementsByTagName("pre"),
                document.getElementsByTagName("code"),
                document.getElementsByTagName("li"),
                document.getElementsByTagName("xmp")
            ],
            d = [];
        for (var g = 0; g < c.length; ++g)
            for (var e = 0; e < c[g].length; ++e) d.push(c[g][e]);
        c = null;
        var h = 0;
        function f() {
            var i = new Date().getTime() + 250;
            for (; h < d.length && new Date().getTime() < i; h++) {
                var j = d[h];
                if (j.className && j.className.indexOf("prettyprint") >= 0) {
                    var o = j.className.match(/\blang-(\w+)\b/);
                    if (o) o = o[1];
                    var m = false;
                    for (var k = j.parentNode; k; k = k.parentNode)
                        if (
                            (k.tagName === "pre" ||
                                k.tagName === "code" ||
                                k.tagName === "xmp") &&
                            k.className &&
                            k.className.indexOf("prettyprint") >= 0
                        ) {
                            m = true;
                            break;
                        }
                    if (!m) {
                        var l = ha(j);
                        l = l.replace(/(?:\r\n?|\n)$/, "");
                        var n = T(l, o);
                        if (!S(j)) j.innerHTML = n;
                        else {
                            var p = document.createElement("PRE");
                            for (var t = 0; t < j.attributes.length; ++t) {
                                var w = j.attributes[t];
                                if (w.specified)
                                    p.setAttribute(w.name, w.value);
                            }
                            p.innerHTML = n;
                            j.parentNode.replaceChild(p, j);
                            p = j;
                        }
                        if (a && j.tagName === "PRE") {
                            var A = j.getElementsByTagName("br");
                            for (var B = A.length; --B >= 0; ) {
                                var s = A[B];
                                s.parentNode.replaceChild(
                                    document.createTextNode("\r\n"),
                                    s
                                );
                            }
                        }
                    }
                }
            }
            if (h < d.length) setTimeout(f, 250);
            else if (b) b();
        }
        f();
    }
    window.PR_normalizedHtml = z;
    window.prettyPrintOne = T;
    window.prettyPrint = wa;
    window.PR = {
        createSimpleLexer: v,
        registerLangHandler: q,
        sourceDecorator: r,
        PR_ATTRIB_NAME: "atn",
        PR_ATTRIB_VALUE: "atv",
        PR_COMMENT: "com",
        PR_DECLARATION: "dec",
        PR_KEYWORD: "kwd",
        PR_LITERAL: "lit",
        PR_PLAIN: "pln",
        PR_PUNCTUATION: "pun",
        PR_SOURCE: "src",
        PR_STRING: "str",
        PR_TAG: "tag",
        PR_TYPE: "typ"
    };
})();


/***/ }),

/***/ 79661:
/*!**********************************************!*\
  !*** ./runestone/parsons/js/timedparsons.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimedParsons)
/* harmony export */ });
/* harmony import */ var _parsons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsons */ 35718);


class TimedParsons extends _parsons__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        // todo -- make this configurable
        if (opts.timedfeedback) {
            this.showfeedback = true;
        } else {
            this.showfeedback = false;
        }
        this.grader.showfeedback = this.showfeedback;
        this.hideFeedback();
        $(this.checkButton).hide();
        $(this.helpButton).hide();
        $(this.resetButton).hide();
    }
    checkCorrectTimed() {
        return this.correct ? "T" : "F";
    }
    hideFeedback() {
        $(this.messageDiv).hide();
    }
}

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}
window.component_factory["parsons"] = function (opts) {
    if (opts.timed) {
        return new TimedParsons(opts);
    }
    return new _parsons__WEBPACK_IMPORTED_MODULE_0__["default"](opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX3BhcnNvbnNfanNfdGltZWRwYXJzb25zX2pzLjkzODZjZjg4ZTg2YzMxZDkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsYUFBYSxrQkFBa0IsNEJBQTRCLGtCQUFrQiw0Q0FBNEMsa0JBQWtCLE1BQU0saUNBQWlDLDZCQUE2QixXQUFXLHdCQUF3Qix3REFBd0Qsa0JBQWtCLDhDQUE4QyxrQkFBa0IsdUpBQXVKLFVBQVUseUVBQXlFLHlEQUF5RCxrQkFBa0Isb0JBQW9CLHFFQUFxRSxnQkFBZ0Isa0JBQWtCLDZCQUE2QixnQkFBZ0IsNkNBQTZDLGdCQUFnQixpQkFBaUIsa0JBQWtCLG1CQUFtQiwyQkFBMkIsRUFBRSxrQkFBa0IsbUJBQW1CLDhCQUE4QixFQUFFLGdCQUFnQixLQUFLLEVBQUUsRUFBRSxpQkFBaUIsZUFBZSxTQUFTLGdCQUFnQix1QkFBdUIsY0FBYyw4QkFBOEIsa0JBQWtCLHFDQUFxQyxZQUFZLFdBQVcsRUFBRSx3Q0FBd0MsSUFBSSxTQUFTLGNBQWMsdUNBQXVDLGtCQUFrQixzQkFBc0IsV0FBVyxFQUFFLHFCQUFxQixrQ0FBa0Msb0NBQW9DLGlCQUFpQixjQUFjLGdCQUFnQixnREFBZ0QsWUFBWSxFQUFFLHFDQUFxQyxJQUFJLFNBQVMsYUFBYSxZQUFZLGNBQWMseUJBQXlCLHdDQUF3QyxnQkFBZ0IsV0FBVyxvSEFBb0gsc0NBQXNDLGFBQWEsY0FBYyw2QkFBNkIsd0NBQXdDLGtCQUFrQix3RkFBd0YsNENBQTRDLHFGQUFxRixnQkFBZ0Isd0NBQXdDLHlHQUF5RywyRUFBMkUsb0lBQW9JLHVDQUF1QywwUkFBMFIsZ0JBQWdCLHlEQUF5RCxnQkFBZ0Isa0NBQWtDLGtCQUFrQixtQkFBbUIsb0RBQW9ELDRCQUE0QixrQkFBa0IsWUFBWSxnREFBZ0QsZ0JBQWdCLDBEQUEwRCw0Q0FBNEMsdURBQXVELGdFQUFnRSw0REFBNEQsdURBQXVELGNBQWMsaUJBQWlCLG9CQUFvQixPQUFPLG9FQUFvRSxLQUFLLE9BQU8sdUVBQXVFLGNBQWMsZUFBZSxnQkFBZ0IsdUNBQXVDLG9CQUFvQixJQUFJLHFDQUFxQyxPQUFPLHFCQUFxQixrQkFBa0IsT0FBTyxtQkFBbUIsZ0JBQWdCLGlEQUFpRCxrQkFBa0IsVUFBVSx3Q0FBd0MsMEJBQTBCLGtCQUFrQixVQUFVLHdDQUF3QyxtQ0FBbUMsZ0JBQWdCLHVDQUF1QyxnQkFBZ0IsdUNBQXVDLGFBQWEsbUVBQW1FLGFBQWEsb0dBQW9HLGFBQWEsdUVBQXVFLGdCQUFnQix5Q0FBeUMsMkRBQTJELGFBQWEsa0NBQWtDLHlCQUF5QixnQkFBZ0Isb0NBQW9DLDhEQUE4RCxpREFBaUQsMEJBQTBCLHFCQUFxQixpQkFBaUIsV0FBVywyQkFBMkIsUUFBUSxXQUFXLDJFQUEyRSwwREFBMEQsYUFBYSx3QkFBd0IsMkJBQTJCLDZHQUE2RyxnQkFBZ0Isa0dBQWtHLGNBQWMsMkJBQTJCLHFDQUFxQyxPQUFPLHlCQUF5Qix5QkFBeUIsb0NBQW9DLG1CQUFtQixxQkFBcUIsa0JBQWtCLGNBQWMsc0RBQXNELDBCQUEwQixLQUFLLDhEQUE4RCx5QkFBeUIsU0FBUyxnQkFBZ0IsMkJBQTJCLGNBQWMscUJBQXFCLHdCQUF3QiwwQ0FBMEMsYUFBYSxnQkFBZ0IsUUFBUSx5QkFBeUIsdUZBQXVGLDJDQUEyQyxJQUFJLGNBQWMsa0JBQWtCLG9CQUFvQixnSEFBZ0gscUJBQXFCLGNBQWMsNERBQTRELGNBQWMsNkRBQTZELGdCQUFnQixnQkFBZ0Isb0JBQW9CLGNBQWMsd0JBQXdCLGNBQWMsbURBQW1ELGNBQWMseUJBQXlCLGNBQWMsMERBQTBELGNBQWMseUJBQXlCLGNBQWMseUJBQXlCLGNBQWMscUdBQXFHLGlCQUFpQixjQUFjLCtEQUErRCxpQkFBaUIsa0JBQWtCLGtCQUFrQix1RUFBdUUsZ0JBQWdCLHdDQUF3Qyw0SUFBNEksK0JBQStCLHlEQUF5RCxPQUFPLGlCQUFpQixnQkFBZ0IsWUFBWSxNQUFNLG1DQUFtQyw0RkFBNEYsc0JBQXNCLEdBQUcsaUJBQWlCLDZCQUE2QiwyREFBMkQsMEhBQTBILGdEQUFnRCxxRkFBcUYsd0JBQXdCLG1CQUFtQixLQUFLLG1CQUFtQixtRUFBbUUsU0FBUyxlQUFlLHlCQUF5Qiw2QkFBNkIsV0FBVyw2Q0FBNkMsU0FBUyw4Q0FBOEMsa0JBQWtCLCtUQUErVCxhQUFhLG9CQUFvQixpQkFBaUIsMktBQTJLLG9CQUFvQiw2S0FBNkssUUFBUSxxQ0FBcUMsdUNBQXVDLE9BQU8sb0JBQW9CLGlCQUFpQixxSUFBcUksMkRBQTJELElBQUksRUFBRSxRQUFRLDBFQUEwRSxLQUFLLG9CQUFvQiwyREFBMkQsOEdBQThHLG9CQUFvQixnSkFBZ0osbUhBQW1ILHdEQUF3RCxxQkFBcUIsRUFBRSxRQUFRLHNEQUFzRCxnRUFBZ0UsT0FBTyxvQkFBb0IsaUJBQWlCLDJDQUEyQyx1QkFBdUIsd0ZBQXdGLDZEQUE2RCxJQUFJLEVBQUUsUUFBUSxzREFBc0QsZ0RBQWdELE9BQU8sb0JBQW9CLG9DQUFvQyxpQ0FBaUMsNkRBQTZELEdBQUcsRUFBRSxrQkFBa0IsT0FBTyx3QkFBd0IsNENBQTRDLHNFQUFzRSxzQkFBc0IsaUNBQWlDLHNCQUFzQixvQkFBb0IsMkNBQTJDLEVBQUUsMkhBQTJILGFBQWEsZ0JBQWdCLHdJQUF3SSxtQkFBbUIsMkNBQTJDLG9CQUFvQixTQUFTLDhDQUE4QywwREFBMEQsaUJBQWlCLDZCQUE2QixxQ0FBcUMsaUVBQWlFLDRFQUE0RSxNQUFNLDZEQUE2RCxrQkFBa0IsaUVBQWlFLHdCQUF3Qix1REFBdUQsMENBQTBDLGFBQWEsV0FBVyxpQkFBaUIsK0VBQStFLDJCQUEyQix5Q0FBeUMsd0JBQXdCLG1FQUFtRSwrQkFBK0IsNEZBQTRGLDRCQUE0QiwwQ0FBMEMsdUJBQXVCLHdFQUF3RSxnQ0FBZ0MsOENBQThDLFlBQVksNEJBQTRCLCtDQUErQywrQkFBK0IsaUNBQWlDLDhCQUE4QixnQ0FBZ0Msa0JBQWtCLGNBQWMsb0JBQW9CLHdCQUF3Qix3SEFBd0gscUJBQXFCLHVEQUF1RCxvQkFBb0IsWUFBWSwwQkFBMEIsRUFBRSxpREFBaUQsSUFBSSxTQUFTLHVCQUF1QixXQUFXLElBQUksOExBQThMLHNCQUFzQiw0QkFBNEIsb0JBQW9CLFNBQVMsVUFBVSxXQUFXLHNCQUFzQiw0QkFBNEIsb0NBQW9DLHFCQUFxQiw4REFBOEQsMERBQTBELFdBQVcsVUFBVSxpREFBaUQsMkJBQTJCLGtDQUFrQywyQ0FBMkMsMkJBQTJCLHlFQUF5RSx1TUFBdU0sc0JBQXNCLG9HQUFvRyxrQkFBa0Isa0NBQWtDLHFCQUFxQiwyRUFBMkUsV0FBVyxVQUFVLHFDQUFxQywyQkFBMkIsV0FBVyxzQkFBc0Isc0dBQXNHLGtCQUFrQixnQkFBZ0IsMkJBQTJCLHVDQUF1QywrQkFBK0IsVUFBVSxVQUFVLDhDQUE4QywyQkFBMkIsV0FBVyxxQkFBcUIsa0dBQWtHLDhEQUE4RCw2REFBNkQsNkJBQTZCLGNBQWMsaUNBQWlDLFVBQVUsa0JBQWtCLDBCQUEwQixrQkFBa0Isa0tBQWtLLFdBQVcsVUFBVSxzQ0FBc0MsMkJBQTJCLFdBQVcsc0JBQXNCLHdHQUF3RyxXQUFXLFVBQVUsa0VBQWtFLDJCQUEyQiw4Q0FBOEMsc0JBQXNCLCtCQUErQix5UUFBeVEsa0JBQWtCLDJCQUEyQixzRkFBc0YsVUFBVSxVQUFVLGdGQUFnRiwyQkFBMkIsV0FBVyxxQkFBcUIsa0dBQWtHLHlFQUF5RSxZQUFZLDZDQUE2QywrR0FBK0csMkZBQTJGLHdCQUF3QixvRUFBb0UsNkJBQTZCLHlCQUF5QixVQUFVLHdCQUF3QixnQ0FBZ0MsY0FBYyxnQ0FBZ0Msa0JBQWtCLDBCQUEwQixpQkFBaUIscUdBQXFHLGtDQUFrQyxvRkFBb0YsVUFBVSxPQUFPLFVBQVUsa0JBQWtCLGFBQWEsT0FBTyxhQUFhLHNCQUFzQix5QkFBeUIsMEJBQTBCLG1JQUFtSSxjQUFjLGNBQWMsZ0JBQWdCLGdLQUFnSyxrQkFBa0IsNkJBQTZCLHVCQUF1QixtQkFBbUIsZUFBZSxvQ0FBb0MsMkNBQTJDLDhDQUE4QyxZQUFZLFdBQVcsb0lBQW9JLGlCQUFpQiwyQkFBMkIsK0JBQStCLFdBQVcseUNBQXlDLFlBQVksaUJBQWlCLCtCQUErQixnQ0FBZ0MsNkZBQTZGLG9CQUFvQixrQ0FBa0Msa0JBQWtCLGdDQUFnQyxrREFBa0QsWUFBWSxrQkFBa0IsaUJBQWlCLG9CQUFvQiwwQkFBMEIsMkJBQTJCLFFBQVEsbUJBQW1CLFVBQVUsb0JBQW9CLDBCQUEwQiw2Q0FBNkMsUUFBUSxvQkFBb0IsZ0NBQWdDLGlEQUFpRCxnQkFBZ0IscUNBQXFDLDZCQUE2QixZQUFZLFdBQVcsY0FBYyxvQkFBb0IsMENBQTBDLGdCQUFnQix5Q0FBeUMsUUFBUSw2bEJBQTZsQixFQUFFLGdFQUFnRSxhQUFhLEtBQXFDLENBQUMsbUNBQU8sV0FBVyxVQUFVO0FBQUEsa0dBQUMsQ0FBQyxDQUFvRSxDQUFDO0FBQzFrb0I7Ozs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQztBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQztBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7QUNuQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7O0FBRWdEO0FBQy9CO0FBQ0c7QUFDVjtBQUNLO0FBQ0M7QUFDYztBQUNIO0FBQ0U7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPLGtCQUFrQjtBQUNWLHNCQUFzQixtRUFBYTtBQUNsRDtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBLDJCQUEyQjtBQUMzQjs7QUFFQSwyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtREFBZTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdDQUFnQztBQUN4RDtBQUNBLDRCQUE0Qix3QkFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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N0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxHQUFHO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMseUJBQXlCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFVBQVU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaHhCK0I7O0FBRWpCLDJCQUEyQixnREFBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0RBQU87QUFDdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3BhcnNvbnMvY3NzL3BhcnNvbnMuY3NzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcGFyc29ucy9jc3MvcHJldHRpZnkuY3NzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcGFyc29ucy9qcy9oYW1tZXIubWluLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcGFyc29ucy9qcy9saW5lR3JhZGVyLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcGFyc29ucy9qcy9wYXJzb25zLWkxOG4uZW4uanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9wYXJzb25zL2pzL3BhcnNvbnMtaTE4bi5wdC1ici5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3BhcnNvbnMvanMvcGFyc29ucy5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3BhcnNvbnMvanMvcGFyc29uc0Jsb2NrLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcGFyc29ucy9qcy9wYXJzb25zTGluZS5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3BhcnNvbnMvanMvcHJldHRpZnkuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9wYXJzb25zL2pzL3RpbWVkcGFyc29ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiEgSGFtbWVyLkpTIC0gdjIuMC44IC0gMjAxNi0wNC0yM1xuICogaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby9cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgSm9yaWsgVGFuZ2VsZGVyO1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlICovXG4hZnVuY3Rpb24oYSxiLGMsZCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShhLGIsYyl7cmV0dXJuIHNldFRpbWVvdXQoaihhLGMpLGIpfWZ1bmN0aW9uIGYoYSxiLGMpe3JldHVybiBBcnJheS5pc0FycmF5KGEpPyhnKGEsY1tiXSxjKSwhMCk6ITF9ZnVuY3Rpb24gZyhhLGIsYyl7dmFyIGU7aWYoYSlpZihhLmZvckVhY2gpYS5mb3JFYWNoKGIsYyk7ZWxzZSBpZihhLmxlbmd0aCE9PWQpZm9yKGU9MDtlPGEubGVuZ3RoOyliLmNhbGwoYyxhW2VdLGUsYSksZSsrO2Vsc2UgZm9yKGUgaW4gYSlhLmhhc093blByb3BlcnR5KGUpJiZiLmNhbGwoYyxhW2VdLGUsYSl9ZnVuY3Rpb24gaChiLGMsZCl7dmFyIGU9XCJERVBSRUNBVEVEIE1FVEhPRDogXCIrYytcIlxcblwiK2QrXCIgQVQgXFxuXCI7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9bmV3IEVycm9yKFwiZ2V0LXN0YWNrLXRyYWNlXCIpLGQ9YyYmYy5zdGFjaz9jLnN0YWNrLnJlcGxhY2UoL15bXlxcKF0rP1tcXG4kXS9nbSxcIlwiKS5yZXBsYWNlKC9eXFxzK2F0XFxzKy9nbSxcIlwiKS5yZXBsYWNlKC9eT2JqZWN0Ljxhbm9ueW1vdXM+XFxzKlxcKC9nbSxcInthbm9ueW1vdXN9KClAXCIpOlwiVW5rbm93biBTdGFjayBUcmFjZVwiLGY9YS5jb25zb2xlJiYoYS5jb25zb2xlLndhcm58fGEuY29uc29sZS5sb2cpO3JldHVybiBmJiZmLmNhbGwoYS5jb25zb2xlLGUsZCksYi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGkoYSxiLGMpe3ZhciBkLGU9Yi5wcm90b3R5cGU7ZD1hLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUpLGQuY29uc3RydWN0b3I9YSxkLl9zdXBlcj1lLGMmJmxhKGQsYyl9ZnVuY3Rpb24gaihhLGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24gayhhLGIpe3JldHVybiB0eXBlb2YgYT09b2E/YS5hcHBseShiP2JbMF18fGQ6ZCxiKTphfWZ1bmN0aW9uIGwoYSxiKXtyZXR1cm4gYT09PWQ/YjphfWZ1bmN0aW9uIG0oYSxiLGMpe2cocShiKSxmdW5jdGlvbihiKXthLmFkZEV2ZW50TGlzdGVuZXIoYixjLCExKX0pfWZ1bmN0aW9uIG4oYSxiLGMpe2cocShiKSxmdW5jdGlvbihiKXthLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjLCExKX0pfWZ1bmN0aW9uIG8oYSxiKXtmb3IoO2E7KXtpZihhPT1iKXJldHVybiEwO2E9YS5wYXJlbnROb2RlfXJldHVybiExfWZ1bmN0aW9uIHAoYSxiKXtyZXR1cm4gYS5pbmRleE9mKGIpPi0xfWZ1bmN0aW9uIHEoYSl7cmV0dXJuIGEudHJpbSgpLnNwbGl0KC9cXHMrL2cpfWZ1bmN0aW9uIHIoYSxiLGMpe2lmKGEuaW5kZXhPZiYmIWMpcmV0dXJuIGEuaW5kZXhPZihiKTtmb3IodmFyIGQ9MDtkPGEubGVuZ3RoOyl7aWYoYyYmYVtkXVtjXT09Ynx8IWMmJmFbZF09PT1iKXJldHVybiBkO2QrK31yZXR1cm4tMX1mdW5jdGlvbiBzKGEpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhLDApfWZ1bmN0aW9uIHQoYSxiLGMpe2Zvcih2YXIgZD1bXSxlPVtdLGY9MDtmPGEubGVuZ3RoOyl7dmFyIGc9Yj9hW2ZdW2JdOmFbZl07cihlLGcpPDAmJmQucHVzaChhW2ZdKSxlW2ZdPWcsZisrfXJldHVybiBjJiYoZD1iP2Quc29ydChmdW5jdGlvbihhLGMpe3JldHVybiBhW2JdPmNbYl19KTpkLnNvcnQoKSksZH1mdW5jdGlvbiB1KGEsYil7Zm9yKHZhciBjLGUsZj1iWzBdLnRvVXBwZXJDYXNlKCkrYi5zbGljZSgxKSxnPTA7ZzxtYS5sZW5ndGg7KXtpZihjPW1hW2ddLGU9Yz9jK2Y6YixlIGluIGEpcmV0dXJuIGU7ZysrfXJldHVybiBkfWZ1bmN0aW9uIHYoKXtyZXR1cm4gdWErK31mdW5jdGlvbiB3KGIpe3ZhciBjPWIub3duZXJEb2N1bWVudHx8YjtyZXR1cm4gYy5kZWZhdWx0Vmlld3x8Yy5wYXJlbnRXaW5kb3d8fGF9ZnVuY3Rpb24geChhLGIpe3ZhciBjPXRoaXM7dGhpcy5tYW5hZ2VyPWEsdGhpcy5jYWxsYmFjaz1iLHRoaXMuZWxlbWVudD1hLmVsZW1lbnQsdGhpcy50YXJnZXQ9YS5vcHRpb25zLmlucHV0VGFyZ2V0LHRoaXMuZG9tSGFuZGxlcj1mdW5jdGlvbihiKXtrKGEub3B0aW9ucy5lbmFibGUsW2FdKSYmYy5oYW5kbGVyKGIpfSx0aGlzLmluaXQoKX1mdW5jdGlvbiB5KGEpe3ZhciBiLGM9YS5vcHRpb25zLmlucHV0Q2xhc3M7cmV0dXJuIG5ldyhiPWM/Yzp4YT9NOnlhP1A6d2E/UjpMKShhLHopfWZ1bmN0aW9uIHooYSxiLGMpe3ZhciBkPWMucG9pbnRlcnMubGVuZ3RoLGU9Yy5jaGFuZ2VkUG9pbnRlcnMubGVuZ3RoLGY9YiZFYSYmZC1lPT09MCxnPWImKEdhfEhhKSYmZC1lPT09MDtjLmlzRmlyc3Q9ISFmLGMuaXNGaW5hbD0hIWcsZiYmKGEuc2Vzc2lvbj17fSksYy5ldmVudFR5cGU9YixBKGEsYyksYS5lbWl0KFwiaGFtbWVyLmlucHV0XCIsYyksYS5yZWNvZ25pemUoYyksYS5zZXNzaW9uLnByZXZJbnB1dD1jfWZ1bmN0aW9uIEEoYSxiKXt2YXIgYz1hLnNlc3Npb24sZD1iLnBvaW50ZXJzLGU9ZC5sZW5ndGg7Yy5maXJzdElucHV0fHwoYy5maXJzdElucHV0PUQoYikpLGU+MSYmIWMuZmlyc3RNdWx0aXBsZT9jLmZpcnN0TXVsdGlwbGU9RChiKToxPT09ZSYmKGMuZmlyc3RNdWx0aXBsZT0hMSk7dmFyIGY9Yy5maXJzdElucHV0LGc9Yy5maXJzdE11bHRpcGxlLGg9Zz9nLmNlbnRlcjpmLmNlbnRlcixpPWIuY2VudGVyPUUoZCk7Yi50aW1lU3RhbXA9cmEoKSxiLmRlbHRhVGltZT1iLnRpbWVTdGFtcC1mLnRpbWVTdGFtcCxiLmFuZ2xlPUkoaCxpKSxiLmRpc3RhbmNlPUgoaCxpKSxCKGMsYiksYi5vZmZzZXREaXJlY3Rpb249RyhiLmRlbHRhWCxiLmRlbHRhWSk7dmFyIGo9RihiLmRlbHRhVGltZSxiLmRlbHRhWCxiLmRlbHRhWSk7Yi5vdmVyYWxsVmVsb2NpdHlYPWoueCxiLm92ZXJhbGxWZWxvY2l0eVk9ai55LGIub3ZlcmFsbFZlbG9jaXR5PXFhKGoueCk+cWEoai55KT9qLng6ai55LGIuc2NhbGU9Zz9LKGcucG9pbnRlcnMsZCk6MSxiLnJvdGF0aW9uPWc/SihnLnBvaW50ZXJzLGQpOjAsYi5tYXhQb2ludGVycz1jLnByZXZJbnB1dD9iLnBvaW50ZXJzLmxlbmd0aD5jLnByZXZJbnB1dC5tYXhQb2ludGVycz9iLnBvaW50ZXJzLmxlbmd0aDpjLnByZXZJbnB1dC5tYXhQb2ludGVyczpiLnBvaW50ZXJzLmxlbmd0aCxDKGMsYik7dmFyIGs9YS5lbGVtZW50O28oYi5zcmNFdmVudC50YXJnZXQsaykmJihrPWIuc3JjRXZlbnQudGFyZ2V0KSxiLnRhcmdldD1rfWZ1bmN0aW9uIEIoYSxiKXt2YXIgYz1iLmNlbnRlcixkPWEub2Zmc2V0RGVsdGF8fHt9LGU9YS5wcmV2RGVsdGF8fHt9LGY9YS5wcmV2SW5wdXR8fHt9O2IuZXZlbnRUeXBlIT09RWEmJmYuZXZlbnRUeXBlIT09R2F8fChlPWEucHJldkRlbHRhPXt4OmYuZGVsdGFYfHwwLHk6Zi5kZWx0YVl8fDB9LGQ9YS5vZmZzZXREZWx0YT17eDpjLngseTpjLnl9KSxiLmRlbHRhWD1lLngrKGMueC1kLngpLGIuZGVsdGFZPWUueSsoYy55LWQueSl9ZnVuY3Rpb24gQyhhLGIpe3ZhciBjLGUsZixnLGg9YS5sYXN0SW50ZXJ2YWx8fGIsaT1iLnRpbWVTdGFtcC1oLnRpbWVTdGFtcDtpZihiLmV2ZW50VHlwZSE9SGEmJihpPkRhfHxoLnZlbG9jaXR5PT09ZCkpe3ZhciBqPWIuZGVsdGFYLWguZGVsdGFYLGs9Yi5kZWx0YVktaC5kZWx0YVksbD1GKGksaixrKTtlPWwueCxmPWwueSxjPXFhKGwueCk+cWEobC55KT9sLng6bC55LGc9RyhqLGspLGEubGFzdEludGVydmFsPWJ9ZWxzZSBjPWgudmVsb2NpdHksZT1oLnZlbG9jaXR5WCxmPWgudmVsb2NpdHlZLGc9aC5kaXJlY3Rpb247Yi52ZWxvY2l0eT1jLGIudmVsb2NpdHlYPWUsYi52ZWxvY2l0eVk9ZixiLmRpcmVjdGlvbj1nfWZ1bmN0aW9uIEQoYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGEucG9pbnRlcnMubGVuZ3RoOyliW2NdPXtjbGllbnRYOnBhKGEucG9pbnRlcnNbY10uY2xpZW50WCksY2xpZW50WTpwYShhLnBvaW50ZXJzW2NdLmNsaWVudFkpfSxjKys7cmV0dXJue3RpbWVTdGFtcDpyYSgpLHBvaW50ZXJzOmIsY2VudGVyOkUoYiksZGVsdGFYOmEuZGVsdGFYLGRlbHRhWTphLmRlbHRhWX19ZnVuY3Rpb24gRShhKXt2YXIgYj1hLmxlbmd0aDtpZigxPT09YilyZXR1cm57eDpwYShhWzBdLmNsaWVudFgpLHk6cGEoYVswXS5jbGllbnRZKX07Zm9yKHZhciBjPTAsZD0wLGU9MDtiPmU7KWMrPWFbZV0uY2xpZW50WCxkKz1hW2VdLmNsaWVudFksZSsrO3JldHVybnt4OnBhKGMvYikseTpwYShkL2IpfX1mdW5jdGlvbiBGKGEsYixjKXtyZXR1cm57eDpiL2F8fDAseTpjL2F8fDB9fWZ1bmN0aW9uIEcoYSxiKXtyZXR1cm4gYT09PWI/SWE6cWEoYSk+PXFhKGIpPzA+YT9KYTpLYTowPmI/TGE6TWF9ZnVuY3Rpb24gSChhLGIsYyl7Y3x8KGM9UWEpO3ZhciBkPWJbY1swXV0tYVtjWzBdXSxlPWJbY1sxXV0tYVtjWzFdXTtyZXR1cm4gTWF0aC5zcXJ0KGQqZCtlKmUpfWZ1bmN0aW9uIEkoYSxiLGMpe2N8fChjPVFhKTt2YXIgZD1iW2NbMF1dLWFbY1swXV0sZT1iW2NbMV1dLWFbY1sxXV07cmV0dXJuIDE4MCpNYXRoLmF0YW4yKGUsZCkvTWF0aC5QSX1mdW5jdGlvbiBKKGEsYil7cmV0dXJuIEkoYlsxXSxiWzBdLFJhKStJKGFbMV0sYVswXSxSYSl9ZnVuY3Rpb24gSyhhLGIpe3JldHVybiBIKGJbMF0sYlsxXSxSYSkvSChhWzBdLGFbMV0sUmEpfWZ1bmN0aW9uIEwoKXt0aGlzLmV2RWw9VGEsdGhpcy5ldldpbj1VYSx0aGlzLnByZXNzZWQ9ITEseC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gTSgpe3RoaXMuZXZFbD1YYSx0aGlzLmV2V2luPVlhLHguYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuc3RvcmU9dGhpcy5tYW5hZ2VyLnNlc3Npb24ucG9pbnRlckV2ZW50cz1bXX1mdW5jdGlvbiBOKCl7dGhpcy5ldlRhcmdldD0kYSx0aGlzLmV2V2luPV9hLHRoaXMuc3RhcnRlZD0hMSx4LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBPKGEsYil7dmFyIGM9cyhhLnRvdWNoZXMpLGQ9cyhhLmNoYW5nZWRUb3VjaGVzKTtyZXR1cm4gYiYoR2F8SGEpJiYoYz10KGMuY29uY2F0KGQpLFwiaWRlbnRpZmllclwiLCEwKSksW2MsZF19ZnVuY3Rpb24gUCgpe3RoaXMuZXZUYXJnZXQ9YmIsdGhpcy50YXJnZXRJZHM9e30seC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gUShhLGIpe3ZhciBjPXMoYS50b3VjaGVzKSxkPXRoaXMudGFyZ2V0SWRzO2lmKGImKEVhfEZhKSYmMT09PWMubGVuZ3RoKXJldHVybiBkW2NbMF0uaWRlbnRpZmllcl09ITAsW2MsY107dmFyIGUsZixnPXMoYS5jaGFuZ2VkVG91Y2hlcyksaD1bXSxpPXRoaXMudGFyZ2V0O2lmKGY9Yy5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIG8oYS50YXJnZXQsaSl9KSxiPT09RWEpZm9yKGU9MDtlPGYubGVuZ3RoOylkW2ZbZV0uaWRlbnRpZmllcl09ITAsZSsrO2ZvcihlPTA7ZTxnLmxlbmd0aDspZFtnW2VdLmlkZW50aWZpZXJdJiZoLnB1c2goZ1tlXSksYiYoR2F8SGEpJiZkZWxldGUgZFtnW2VdLmlkZW50aWZpZXJdLGUrKztyZXR1cm4gaC5sZW5ndGg/W3QoZi5jb25jYXQoaCksXCJpZGVudGlmaWVyXCIsITApLGhdOnZvaWQgMH1mdW5jdGlvbiBSKCl7eC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGE9aih0aGlzLmhhbmRsZXIsdGhpcyk7dGhpcy50b3VjaD1uZXcgUCh0aGlzLm1hbmFnZXIsYSksdGhpcy5tb3VzZT1uZXcgTCh0aGlzLm1hbmFnZXIsYSksdGhpcy5wcmltYXJ5VG91Y2g9bnVsbCx0aGlzLmxhc3RUb3VjaGVzPVtdfWZ1bmN0aW9uIFMoYSxiKXthJkVhPyh0aGlzLnByaW1hcnlUb3VjaD1iLmNoYW5nZWRQb2ludGVyc1swXS5pZGVudGlmaWVyLFQuY2FsbCh0aGlzLGIpKTphJihHYXxIYSkmJlQuY2FsbCh0aGlzLGIpfWZ1bmN0aW9uIFQoYSl7dmFyIGI9YS5jaGFuZ2VkUG9pbnRlcnNbMF07aWYoYi5pZGVudGlmaWVyPT09dGhpcy5wcmltYXJ5VG91Y2gpe3ZhciBjPXt4OmIuY2xpZW50WCx5OmIuY2xpZW50WX07dGhpcy5sYXN0VG91Y2hlcy5wdXNoKGMpO3ZhciBkPXRoaXMubGFzdFRvdWNoZXMsZT1mdW5jdGlvbigpe3ZhciBhPWQuaW5kZXhPZihjKTthPi0xJiZkLnNwbGljZShhLDEpfTtzZXRUaW1lb3V0KGUsY2IpfX1mdW5jdGlvbiBVKGEpe2Zvcih2YXIgYj1hLnNyY0V2ZW50LmNsaWVudFgsYz1hLnNyY0V2ZW50LmNsaWVudFksZD0wO2Q8dGhpcy5sYXN0VG91Y2hlcy5sZW5ndGg7ZCsrKXt2YXIgZT10aGlzLmxhc3RUb3VjaGVzW2RdLGY9TWF0aC5hYnMoYi1lLngpLGc9TWF0aC5hYnMoYy1lLnkpO2lmKGRiPj1mJiZkYj49ZylyZXR1cm4hMH1yZXR1cm4hMX1mdW5jdGlvbiBWKGEsYil7dGhpcy5tYW5hZ2VyPWEsdGhpcy5zZXQoYil9ZnVuY3Rpb24gVyhhKXtpZihwKGEsamIpKXJldHVybiBqYjt2YXIgYj1wKGEsa2IpLGM9cChhLGxiKTtyZXR1cm4gYiYmYz9qYjpifHxjP2I/a2I6bGI6cChhLGliKT9pYjpoYn1mdW5jdGlvbiBYKCl7aWYoIWZiKXJldHVybiExO3ZhciBiPXt9LGM9YS5DU1MmJmEuQ1NTLnN1cHBvcnRzO3JldHVybltcImF1dG9cIixcIm1hbmlwdWxhdGlvblwiLFwicGFuLXlcIixcInBhbi14XCIsXCJwYW4teCBwYW4teVwiLFwibm9uZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGQpe2JbZF09Yz9hLkNTUy5zdXBwb3J0cyhcInRvdWNoLWFjdGlvblwiLGQpOiEwfSksYn1mdW5jdGlvbiBZKGEpe3RoaXMub3B0aW9ucz1sYSh7fSx0aGlzLmRlZmF1bHRzLGF8fHt9KSx0aGlzLmlkPXYoKSx0aGlzLm1hbmFnZXI9bnVsbCx0aGlzLm9wdGlvbnMuZW5hYmxlPWwodGhpcy5vcHRpb25zLmVuYWJsZSwhMCksdGhpcy5zdGF0ZT1uYix0aGlzLnNpbXVsdGFuZW91cz17fSx0aGlzLnJlcXVpcmVGYWlsPVtdfWZ1bmN0aW9uIFooYSl7cmV0dXJuIGEmc2I/XCJjYW5jZWxcIjphJnFiP1wiZW5kXCI6YSZwYj9cIm1vdmVcIjphJm9iP1wic3RhcnRcIjpcIlwifWZ1bmN0aW9uICQoYSl7cmV0dXJuIGE9PU1hP1wiZG93blwiOmE9PUxhP1widXBcIjphPT1KYT9cImxlZnRcIjphPT1LYT9cInJpZ2h0XCI6XCJcIn1mdW5jdGlvbiBfKGEsYil7dmFyIGM9Yi5tYW5hZ2VyO3JldHVybiBjP2MuZ2V0KGEpOmF9ZnVuY3Rpb24gYWEoKXtZLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBiYSgpe2FhLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnBYPW51bGwsdGhpcy5wWT1udWxsfWZ1bmN0aW9uIGNhKCl7YWEuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGRhKCl7WS5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5fdGltZXI9bnVsbCx0aGlzLl9pbnB1dD1udWxsfWZ1bmN0aW9uIGVhKCl7YWEuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGZhKCl7YWEuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGdhKCl7WS5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5wVGltZT0hMSx0aGlzLnBDZW50ZXI9ITEsdGhpcy5fdGltZXI9bnVsbCx0aGlzLl9pbnB1dD1udWxsLHRoaXMuY291bnQ9MH1mdW5jdGlvbiBoYShhLGIpe3JldHVybiBiPWJ8fHt9LGIucmVjb2duaXplcnM9bChiLnJlY29nbml6ZXJzLGhhLmRlZmF1bHRzLnByZXNldCksbmV3IGlhKGEsYil9ZnVuY3Rpb24gaWEoYSxiKXt0aGlzLm9wdGlvbnM9bGEoe30saGEuZGVmYXVsdHMsYnx8e30pLHRoaXMub3B0aW9ucy5pbnB1dFRhcmdldD10aGlzLm9wdGlvbnMuaW5wdXRUYXJnZXR8fGEsdGhpcy5oYW5kbGVycz17fSx0aGlzLnNlc3Npb249e30sdGhpcy5yZWNvZ25pemVycz1bXSx0aGlzLm9sZENzc1Byb3BzPXt9LHRoaXMuZWxlbWVudD1hLHRoaXMuaW5wdXQ9eSh0aGlzKSx0aGlzLnRvdWNoQWN0aW9uPW5ldyBWKHRoaXMsdGhpcy5vcHRpb25zLnRvdWNoQWN0aW9uKSxqYSh0aGlzLCEwKSxnKHRoaXMub3B0aW9ucy5yZWNvZ25pemVycyxmdW5jdGlvbihhKXt2YXIgYj10aGlzLmFkZChuZXcgYVswXShhWzFdKSk7YVsyXSYmYi5yZWNvZ25pemVXaXRoKGFbMl0pLGFbM10mJmIucmVxdWlyZUZhaWx1cmUoYVszXSl9LHRoaXMpfWZ1bmN0aW9uIGphKGEsYil7dmFyIGM9YS5lbGVtZW50O2lmKGMuc3R5bGUpe3ZhciBkO2coYS5vcHRpb25zLmNzc1Byb3BzLGZ1bmN0aW9uKGUsZil7ZD11KGMuc3R5bGUsZiksYj8oYS5vbGRDc3NQcm9wc1tkXT1jLnN0eWxlW2RdLGMuc3R5bGVbZF09ZSk6Yy5zdHlsZVtkXT1hLm9sZENzc1Byb3BzW2RdfHxcIlwifSksYnx8KGEub2xkQ3NzUHJvcHM9e30pfX1mdW5jdGlvbiBrYShhLGMpe3ZhciBkPWIuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtkLmluaXRFdmVudChhLCEwLCEwKSxkLmdlc3R1cmU9YyxjLnRhcmdldC5kaXNwYXRjaEV2ZW50KGQpfXZhciBsYSxtYT1bXCJcIixcIndlYmtpdFwiLFwiTW96XCIsXCJNU1wiLFwibXNcIixcIm9cIl0sbmE9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLG9hPVwiZnVuY3Rpb25cIixwYT1NYXRoLnJvdW5kLHFhPU1hdGguYWJzLHJhPURhdGUubm93O2xhPVwiZnVuY3Rpb25cIiE9dHlwZW9mIE9iamVjdC5hc3NpZ24/ZnVuY3Rpb24oYSl7aWYoYT09PWR8fG51bGw9PT1hKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3RcIik7Zm9yKHZhciBiPU9iamVjdChhKSxjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyl7dmFyIGU9YXJndW1lbnRzW2NdO2lmKGUhPT1kJiZudWxsIT09ZSlmb3IodmFyIGYgaW4gZSllLmhhc093blByb3BlcnR5KGYpJiYoYltmXT1lW2ZdKX1yZXR1cm4gYn06T2JqZWN0LmFzc2lnbjt2YXIgc2E9aChmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBlPU9iamVjdC5rZXlzKGIpLGY9MDtmPGUubGVuZ3RoOykoIWN8fGMmJmFbZVtmXV09PT1kKSYmKGFbZVtmXV09YltlW2ZdXSksZisrO3JldHVybiBhfSxcImV4dGVuZFwiLFwiVXNlIGBhc3NpZ25gLlwiKSx0YT1oKGZ1bmN0aW9uKGEsYil7cmV0dXJuIHNhKGEsYiwhMCl9LFwibWVyZ2VcIixcIlVzZSBgYXNzaWduYC5cIiksdWE9MSx2YT0vbW9iaWxlfHRhYmxldHxpcChhZHxob25lfG9kKXxhbmRyb2lkL2ksd2E9XCJvbnRvdWNoc3RhcnRcImluIGEseGE9dShhLFwiUG9pbnRlckV2ZW50XCIpIT09ZCx5YT13YSYmdmEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSx6YT1cInRvdWNoXCIsQWE9XCJwZW5cIixCYT1cIm1vdXNlXCIsQ2E9XCJraW5lY3RcIixEYT0yNSxFYT0xLEZhPTIsR2E9NCxIYT04LElhPTEsSmE9MixLYT00LExhPTgsTWE9MTYsTmE9SmF8S2EsT2E9TGF8TWEsUGE9TmF8T2EsUWE9W1wieFwiLFwieVwiXSxSYT1bXCJjbGllbnRYXCIsXCJjbGllbnRZXCJdO3gucHJvdG90eXBlPXtoYW5kbGVyOmZ1bmN0aW9uKCl7fSxpbml0OmZ1bmN0aW9uKCl7dGhpcy5ldkVsJiZtKHRoaXMuZWxlbWVudCx0aGlzLmV2RWwsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2VGFyZ2V0JiZtKHRoaXMudGFyZ2V0LHRoaXMuZXZUYXJnZXQsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2V2luJiZtKHcodGhpcy5lbGVtZW50KSx0aGlzLmV2V2luLHRoaXMuZG9tSGFuZGxlcil9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmV2RWwmJm4odGhpcy5lbGVtZW50LHRoaXMuZXZFbCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZUYXJnZXQmJm4odGhpcy50YXJnZXQsdGhpcy5ldlRhcmdldCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZXaW4mJm4odyh0aGlzLmVsZW1lbnQpLHRoaXMuZXZXaW4sdGhpcy5kb21IYW5kbGVyKX19O3ZhciBTYT17bW91c2Vkb3duOkVhLG1vdXNlbW92ZTpGYSxtb3VzZXVwOkdhfSxUYT1cIm1vdXNlZG93blwiLFVhPVwibW91c2Vtb3ZlIG1vdXNldXBcIjtpKEwseCx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1TYVthLnR5cGVdO2ImRWEmJjA9PT1hLmJ1dHRvbiYmKHRoaXMucHJlc3NlZD0hMCksYiZGYSYmMSE9PWEud2hpY2gmJihiPUdhKSx0aGlzLnByZXNzZWQmJihiJkdhJiYodGhpcy5wcmVzc2VkPSExKSx0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpbYV0sY2hhbmdlZFBvaW50ZXJzOlthXSxwb2ludGVyVHlwZTpCYSxzcmNFdmVudDphfSkpfX0pO3ZhciBWYT17cG9pbnRlcmRvd246RWEscG9pbnRlcm1vdmU6RmEscG9pbnRlcnVwOkdhLHBvaW50ZXJjYW5jZWw6SGEscG9pbnRlcm91dDpIYX0sV2E9ezI6emEsMzpBYSw0OkJhLDU6Q2F9LFhhPVwicG9pbnRlcmRvd25cIixZYT1cInBvaW50ZXJtb3ZlIHBvaW50ZXJ1cCBwb2ludGVyY2FuY2VsXCI7YS5NU1BvaW50ZXJFdmVudCYmIWEuUG9pbnRlckV2ZW50JiYoWGE9XCJNU1BvaW50ZXJEb3duXCIsWWE9XCJNU1BvaW50ZXJNb3ZlIE1TUG9pbnRlclVwIE1TUG9pbnRlckNhbmNlbFwiKSxpKE0seCx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnN0b3JlLGM9ITEsZD1hLnR5cGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwibXNcIixcIlwiKSxlPVZhW2RdLGY9V2FbYS5wb2ludGVyVHlwZV18fGEucG9pbnRlclR5cGUsZz1mPT16YSxoPXIoYixhLnBvaW50ZXJJZCxcInBvaW50ZXJJZFwiKTtlJkVhJiYoMD09PWEuYnV0dG9ufHxnKT8wPmgmJihiLnB1c2goYSksaD1iLmxlbmd0aC0xKTplJihHYXxIYSkmJihjPSEwKSwwPmh8fChiW2hdPWEsdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsZSx7cG9pbnRlcnM6YixjaGFuZ2VkUG9pbnRlcnM6W2FdLHBvaW50ZXJUeXBlOmYsc3JjRXZlbnQ6YX0pLGMmJmIuc3BsaWNlKGgsMSkpfX0pO3ZhciBaYT17dG91Y2hzdGFydDpFYSx0b3VjaG1vdmU6RmEsdG91Y2hlbmQ6R2EsdG91Y2hjYW5jZWw6SGF9LCRhPVwidG91Y2hzdGFydFwiLF9hPVwidG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWxcIjtpKE4seCx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1aYVthLnR5cGVdO2lmKGI9PT1FYSYmKHRoaXMuc3RhcnRlZD0hMCksdGhpcy5zdGFydGVkKXt2YXIgYz1PLmNhbGwodGhpcyxhLGIpO2ImKEdhfEhhKSYmY1swXS5sZW5ndGgtY1sxXS5sZW5ndGg9PT0wJiYodGhpcy5zdGFydGVkPSExKSx0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpjWzBdLGNoYW5nZWRQb2ludGVyczpjWzFdLHBvaW50ZXJUeXBlOnphLHNyY0V2ZW50OmF9KX19fSk7dmFyIGFiPXt0b3VjaHN0YXJ0OkVhLHRvdWNobW92ZTpGYSx0b3VjaGVuZDpHYSx0b3VjaGNhbmNlbDpIYX0sYmI9XCJ0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbFwiO2koUCx4LHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPWFiW2EudHlwZV0sYz1RLmNhbGwodGhpcyxhLGIpO2MmJnRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOmNbMF0sY2hhbmdlZFBvaW50ZXJzOmNbMV0scG9pbnRlclR5cGU6emEsc3JjRXZlbnQ6YX0pfX0pO3ZhciBjYj0yNTAwLGRiPTI1O2koUix4LHtoYW5kbGVyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1jLnBvaW50ZXJUeXBlPT16YSxlPWMucG9pbnRlclR5cGU9PUJhO2lmKCEoZSYmYy5zb3VyY2VDYXBhYmlsaXRpZXMmJmMuc291cmNlQ2FwYWJpbGl0aWVzLmZpcmVzVG91Y2hFdmVudHMpKXtpZihkKVMuY2FsbCh0aGlzLGIsYyk7ZWxzZSBpZihlJiZVLmNhbGwodGhpcyxjKSlyZXR1cm47dGhpcy5jYWxsYmFjayhhLGIsYyl9fSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy50b3VjaC5kZXN0cm95KCksdGhpcy5tb3VzZS5kZXN0cm95KCl9fSk7dmFyIGViPXUobmEuc3R5bGUsXCJ0b3VjaEFjdGlvblwiKSxmYj1lYiE9PWQsZ2I9XCJjb21wdXRlXCIsaGI9XCJhdXRvXCIsaWI9XCJtYW5pcHVsYXRpb25cIixqYj1cIm5vbmVcIixrYj1cInBhbi14XCIsbGI9XCJwYW4teVwiLG1iPVgoKTtWLnByb3RvdHlwZT17c2V0OmZ1bmN0aW9uKGEpe2E9PWdiJiYoYT10aGlzLmNvbXB1dGUoKSksZmImJnRoaXMubWFuYWdlci5lbGVtZW50LnN0eWxlJiZtYlthXSYmKHRoaXMubWFuYWdlci5lbGVtZW50LnN0eWxlW2ViXT1hKSx0aGlzLmFjdGlvbnM9YS50b0xvd2VyQ2FzZSgpLnRyaW0oKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5zZXQodGhpcy5tYW5hZ2VyLm9wdGlvbnMudG91Y2hBY3Rpb24pfSxjb21wdXRlOmZ1bmN0aW9uKCl7dmFyIGE9W107cmV0dXJuIGcodGhpcy5tYW5hZ2VyLnJlY29nbml6ZXJzLGZ1bmN0aW9uKGIpe2soYi5vcHRpb25zLmVuYWJsZSxbYl0pJiYoYT1hLmNvbmNhdChiLmdldFRvdWNoQWN0aW9uKCkpKX0pLFcoYS5qb2luKFwiIFwiKSl9LHByZXZlbnREZWZhdWx0czpmdW5jdGlvbihhKXt2YXIgYj1hLnNyY0V2ZW50LGM9YS5vZmZzZXREaXJlY3Rpb247aWYodGhpcy5tYW5hZ2VyLnNlc3Npb24ucHJldmVudGVkKXJldHVybiB2b2lkIGIucHJldmVudERlZmF1bHQoKTt2YXIgZD10aGlzLmFjdGlvbnMsZT1wKGQsamIpJiYhbWJbamJdLGY9cChkLGxiKSYmIW1iW2xiXSxnPXAoZCxrYikmJiFtYltrYl07aWYoZSl7dmFyIGg9MT09PWEucG9pbnRlcnMubGVuZ3RoLGk9YS5kaXN0YW5jZTwyLGo9YS5kZWx0YVRpbWU8MjUwO2lmKGgmJmkmJmopcmV0dXJufXJldHVybiBnJiZmP3ZvaWQgMDplfHxmJiZjJk5hfHxnJiZjJk9hP3RoaXMucHJldmVudFNyYyhiKTp2b2lkIDB9LHByZXZlbnRTcmM6ZnVuY3Rpb24oYSl7dGhpcy5tYW5hZ2VyLnNlc3Npb24ucHJldmVudGVkPSEwLGEucHJldmVudERlZmF1bHQoKX19O3ZhciBuYj0xLG9iPTIscGI9NCxxYj04LHJiPXFiLHNiPTE2LHRiPTMyO1kucHJvdG90eXBlPXtkZWZhdWx0czp7fSxzZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGxhKHRoaXMub3B0aW9ucyxhKSx0aGlzLm1hbmFnZXImJnRoaXMubWFuYWdlci50b3VjaEFjdGlvbi51cGRhdGUoKSx0aGlzfSxyZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe2lmKGYoYSxcInJlY29nbml6ZVdpdGhcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnNpbXVsdGFuZW91cztyZXR1cm4gYT1fKGEsdGhpcyksYlthLmlkXXx8KGJbYS5pZF09YSxhLnJlY29nbml6ZVdpdGgodGhpcykpLHRoaXN9LGRyb3BSZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe3JldHVybiBmKGEsXCJkcm9wUmVjb2duaXplV2l0aFwiLHRoaXMpP3RoaXM6KGE9XyhhLHRoaXMpLGRlbGV0ZSB0aGlzLnNpbXVsdGFuZW91c1thLmlkXSx0aGlzKX0scmVxdWlyZUZhaWx1cmU6ZnVuY3Rpb24oYSl7aWYoZihhLFwicmVxdWlyZUZhaWx1cmVcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnJlcXVpcmVGYWlsO3JldHVybiBhPV8oYSx0aGlzKSwtMT09PXIoYixhKSYmKGIucHVzaChhKSxhLnJlcXVpcmVGYWlsdXJlKHRoaXMpKSx0aGlzfSxkcm9wUmVxdWlyZUZhaWx1cmU6ZnVuY3Rpb24oYSl7aWYoZihhLFwiZHJvcFJlcXVpcmVGYWlsdXJlXCIsdGhpcykpcmV0dXJuIHRoaXM7YT1fKGEsdGhpcyk7dmFyIGI9cih0aGlzLnJlcXVpcmVGYWlsLGEpO3JldHVybiBiPi0xJiZ0aGlzLnJlcXVpcmVGYWlsLnNwbGljZShiLDEpLHRoaXN9LGhhc1JlcXVpcmVGYWlsdXJlczpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJlcXVpcmVGYWlsLmxlbmd0aD4wfSxjYW5SZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe3JldHVybiEhdGhpcy5zaW11bHRhbmVvdXNbYS5pZF19LGVtaXQ6ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihiKXtjLm1hbmFnZXIuZW1pdChiLGEpfXZhciBjPXRoaXMsZD10aGlzLnN0YXRlO3FiPmQmJmIoYy5vcHRpb25zLmV2ZW50K1ooZCkpLGIoYy5vcHRpb25zLmV2ZW50KSxhLmFkZGl0aW9uYWxFdmVudCYmYihhLmFkZGl0aW9uYWxFdmVudCksZD49cWImJmIoYy5vcHRpb25zLmV2ZW50K1ooZCkpfSx0cnlFbWl0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmNhbkVtaXQoKT90aGlzLmVtaXQoYSk6dm9pZCh0aGlzLnN0YXRlPXRiKX0sY2FuRW1pdDpmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8dGhpcy5yZXF1aXJlRmFpbC5sZW5ndGg7KXtpZighKHRoaXMucmVxdWlyZUZhaWxbYV0uc3RhdGUmKHRifG5iKSkpcmV0dXJuITE7YSsrfXJldHVybiEwfSxyZWNvZ25pemU6ZnVuY3Rpb24oYSl7dmFyIGI9bGEoe30sYSk7cmV0dXJuIGsodGhpcy5vcHRpb25zLmVuYWJsZSxbdGhpcyxiXSk/KHRoaXMuc3RhdGUmKHJifHNifHRiKSYmKHRoaXMuc3RhdGU9bmIpLHRoaXMuc3RhdGU9dGhpcy5wcm9jZXNzKGIpLHZvaWQodGhpcy5zdGF0ZSYob2J8cGJ8cWJ8c2IpJiZ0aGlzLnRyeUVtaXQoYikpKToodGhpcy5yZXNldCgpLHZvaWQodGhpcy5zdGF0ZT10YikpfSxwcm9jZXNzOmZ1bmN0aW9uKGEpe30sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXt9LHJlc2V0OmZ1bmN0aW9uKCl7fX0saShhYSxZLHtkZWZhdWx0czp7cG9pbnRlcnM6MX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLnBvaW50ZXJzO3JldHVybiAwPT09Ynx8YS5wb2ludGVycy5sZW5ndGg9PT1ifSxwcm9jZXNzOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc3RhdGUsYz1hLmV2ZW50VHlwZSxkPWImKG9ifHBiKSxlPXRoaXMuYXR0clRlc3QoYSk7cmV0dXJuIGQmJihjJkhhfHwhZSk/YnxzYjpkfHxlP2MmR2E/YnxxYjpiJm9iP2J8cGI6b2I6dGJ9fSksaShiYSxhYSx7ZGVmYXVsdHM6e2V2ZW50OlwicGFuXCIsdGhyZXNob2xkOjEwLHBvaW50ZXJzOjEsZGlyZWN0aW9uOlBhfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3B0aW9ucy5kaXJlY3Rpb24sYj1bXTtyZXR1cm4gYSZOYSYmYi5wdXNoKGxiKSxhJk9hJiZiLnB1c2goa2IpLGJ9LGRpcmVjdGlvblRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9ITAsZD1hLmRpc3RhbmNlLGU9YS5kaXJlY3Rpb24sZj1hLmRlbHRhWCxnPWEuZGVsdGFZO3JldHVybiBlJmIuZGlyZWN0aW9ufHwoYi5kaXJlY3Rpb24mTmE/KGU9MD09PWY/SWE6MD5mP0phOkthLGM9ZiE9dGhpcy5wWCxkPU1hdGguYWJzKGEuZGVsdGFYKSk6KGU9MD09PWc/SWE6MD5nP0xhOk1hLGM9ZyE9dGhpcy5wWSxkPU1hdGguYWJzKGEuZGVsdGFZKSkpLGEuZGlyZWN0aW9uPWUsYyYmZD5iLnRocmVzaG9sZCYmZSZiLmRpcmVjdGlvbn0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGFhLnByb3RvdHlwZS5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJih0aGlzLnN0YXRlJm9ifHwhKHRoaXMuc3RhdGUmb2IpJiZ0aGlzLmRpcmVjdGlvblRlc3QoYSkpfSxlbWl0OmZ1bmN0aW9uKGEpe3RoaXMucFg9YS5kZWx0YVgsdGhpcy5wWT1hLmRlbHRhWTt2YXIgYj0kKGEuZGlyZWN0aW9uKTtiJiYoYS5hZGRpdGlvbmFsRXZlbnQ9dGhpcy5vcHRpb25zLmV2ZW50K2IpLHRoaXMuX3N1cGVyLmVtaXQuY2FsbCh0aGlzLGEpfX0pLGkoY2EsYWEse2RlZmF1bHRzOntldmVudDpcInBpbmNoXCIsdGhyZXNob2xkOjAscG9pbnRlcnM6Mn0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bamJdfSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYoTWF0aC5hYnMoYS5zY2FsZS0xKT50aGlzLm9wdGlvbnMudGhyZXNob2xkfHx0aGlzLnN0YXRlJm9iKX0sZW1pdDpmdW5jdGlvbihhKXtpZigxIT09YS5zY2FsZSl7dmFyIGI9YS5zY2FsZTwxP1wiaW5cIjpcIm91dFwiO2EuYWRkaXRpb25hbEV2ZW50PXRoaXMub3B0aW9ucy5ldmVudCtifXRoaXMuX3N1cGVyLmVtaXQuY2FsbCh0aGlzLGEpfX0pLGkoZGEsWSx7ZGVmYXVsdHM6e2V2ZW50OlwicHJlc3NcIixwb2ludGVyczoxLHRpbWU6MjUxLHRocmVzaG9sZDo5fSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltoYl19LHByb2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9YS5wb2ludGVycy5sZW5ndGg9PT1iLnBvaW50ZXJzLGQ9YS5kaXN0YW5jZTxiLnRocmVzaG9sZCxmPWEuZGVsdGFUaW1lPmIudGltZTtpZih0aGlzLl9pbnB1dD1hLCFkfHwhY3x8YS5ldmVudFR5cGUmKEdhfEhhKSYmIWYpdGhpcy5yZXNldCgpO2Vsc2UgaWYoYS5ldmVudFR5cGUmRWEpdGhpcy5yZXNldCgpLHRoaXMuX3RpbWVyPWUoZnVuY3Rpb24oKXt0aGlzLnN0YXRlPXJiLHRoaXMudHJ5RW1pdCgpfSxiLnRpbWUsdGhpcyk7ZWxzZSBpZihhLmV2ZW50VHlwZSZHYSlyZXR1cm4gcmI7cmV0dXJuIHRifSxyZXNldDpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lcil9LGVtaXQ6ZnVuY3Rpb24oYSl7dGhpcy5zdGF0ZT09PXJiJiYoYSYmYS5ldmVudFR5cGUmR2E/dGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K1widXBcIixhKToodGhpcy5faW5wdXQudGltZVN0YW1wPXJhKCksdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LHRoaXMuX2lucHV0KSkpfX0pLGkoZWEsYWEse2RlZmF1bHRzOntldmVudDpcInJvdGF0ZVwiLHRocmVzaG9sZDowLHBvaW50ZXJzOjJ9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW2piXX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3N1cGVyLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmKE1hdGguYWJzKGEucm90YXRpb24pPnRoaXMub3B0aW9ucy50aHJlc2hvbGR8fHRoaXMuc3RhdGUmb2IpfX0pLGkoZmEsYWEse2RlZmF1bHRzOntldmVudDpcInN3aXBlXCIsdGhyZXNob2xkOjEwLHZlbG9jaXR5Oi4zLGRpcmVjdGlvbjpOYXxPYSxwb2ludGVyczoxfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybiBiYS5wcm90b3R5cGUuZ2V0VG91Y2hBY3Rpb24uY2FsbCh0aGlzKX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLm9wdGlvbnMuZGlyZWN0aW9uO3JldHVybiBjJihOYXxPYSk/Yj1hLm92ZXJhbGxWZWxvY2l0eTpjJk5hP2I9YS5vdmVyYWxsVmVsb2NpdHlYOmMmT2EmJihiPWEub3ZlcmFsbFZlbG9jaXR5WSksdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiZjJmEub2Zmc2V0RGlyZWN0aW9uJiZhLmRpc3RhbmNlPnRoaXMub3B0aW9ucy50aHJlc2hvbGQmJmEubWF4UG9pbnRlcnM9PXRoaXMub3B0aW9ucy5wb2ludGVycyYmcWEoYik+dGhpcy5vcHRpb25zLnZlbG9jaXR5JiZhLmV2ZW50VHlwZSZHYX0sZW1pdDpmdW5jdGlvbihhKXt2YXIgYj0kKGEub2Zmc2V0RGlyZWN0aW9uKTtiJiZ0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrYixhKSx0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsYSl9fSksaShnYSxZLHtkZWZhdWx0czp7ZXZlbnQ6XCJ0YXBcIixwb2ludGVyczoxLHRhcHM6MSxpbnRlcnZhbDozMDAsdGltZToyNTAsdGhyZXNob2xkOjkscG9zVGhyZXNob2xkOjEwfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltpYl19LHByb2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9YS5wb2ludGVycy5sZW5ndGg9PT1iLnBvaW50ZXJzLGQ9YS5kaXN0YW5jZTxiLnRocmVzaG9sZCxmPWEuZGVsdGFUaW1lPGIudGltZTtpZih0aGlzLnJlc2V0KCksYS5ldmVudFR5cGUmRWEmJjA9PT10aGlzLmNvdW50KXJldHVybiB0aGlzLmZhaWxUaW1lb3V0KCk7aWYoZCYmZiYmYyl7aWYoYS5ldmVudFR5cGUhPUdhKXJldHVybiB0aGlzLmZhaWxUaW1lb3V0KCk7dmFyIGc9dGhpcy5wVGltZT9hLnRpbWVTdGFtcC10aGlzLnBUaW1lPGIuaW50ZXJ2YWw6ITAsaD0hdGhpcy5wQ2VudGVyfHxIKHRoaXMucENlbnRlcixhLmNlbnRlcik8Yi5wb3NUaHJlc2hvbGQ7dGhpcy5wVGltZT1hLnRpbWVTdGFtcCx0aGlzLnBDZW50ZXI9YS5jZW50ZXIsaCYmZz90aGlzLmNvdW50Kz0xOnRoaXMuY291bnQ9MSx0aGlzLl9pbnB1dD1hO3ZhciBpPXRoaXMuY291bnQlYi50YXBzO2lmKDA9PT1pKXJldHVybiB0aGlzLmhhc1JlcXVpcmVGYWlsdXJlcygpPyh0aGlzLl90aW1lcj1lKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT1yYix0aGlzLnRyeUVtaXQoKX0sYi5pbnRlcnZhbCx0aGlzKSxvYik6cmJ9cmV0dXJuIHRifSxmYWlsVGltZW91dDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl90aW1lcj1lKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT10Yn0sdGhpcy5vcHRpb25zLmludGVydmFsLHRoaXMpLHRifSxyZXNldDpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lcil9LGVtaXQ6ZnVuY3Rpb24oKXt0aGlzLnN0YXRlPT1yYiYmKHRoaXMuX2lucHV0LnRhcENvdW50PXRoaXMuY291bnQsdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LHRoaXMuX2lucHV0KSl9fSksaGEuVkVSU0lPTj1cIjIuMC44XCIsaGEuZGVmYXVsdHM9e2RvbUV2ZW50czohMSx0b3VjaEFjdGlvbjpnYixlbmFibGU6ITAsaW5wdXRUYXJnZXQ6bnVsbCxpbnB1dENsYXNzOm51bGwscHJlc2V0OltbZWEse2VuYWJsZTohMX1dLFtjYSx7ZW5hYmxlOiExfSxbXCJyb3RhdGVcIl1dLFtmYSx7ZGlyZWN0aW9uOk5hfV0sW2JhLHtkaXJlY3Rpb246TmF9LFtcInN3aXBlXCJdXSxbZ2FdLFtnYSx7ZXZlbnQ6XCJkb3VibGV0YXBcIix0YXBzOjJ9LFtcInRhcFwiXV0sW2RhXV0sY3NzUHJvcHM6e3VzZXJTZWxlY3Q6XCJub25lXCIsdG91Y2hTZWxlY3Q6XCJub25lXCIsdG91Y2hDYWxsb3V0Olwibm9uZVwiLGNvbnRlbnRab29taW5nOlwibm9uZVwiLHVzZXJEcmFnOlwibm9uZVwiLHRhcEhpZ2hsaWdodENvbG9yOlwicmdiYSgwLDAsMCwwKVwifX07dmFyIHViPTEsdmI9MjtpYS5wcm90b3R5cGU9e3NldDpmdW5jdGlvbihhKXtyZXR1cm4gbGEodGhpcy5vcHRpb25zLGEpLGEudG91Y2hBY3Rpb24mJnRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksYS5pbnB1dFRhcmdldCYmKHRoaXMuaW5wdXQuZGVzdHJveSgpLHRoaXMuaW5wdXQudGFyZ2V0PWEuaW5wdXRUYXJnZXQsdGhpcy5pbnB1dC5pbml0KCkpLHRoaXN9LHN0b3A6ZnVuY3Rpb24oYSl7dGhpcy5zZXNzaW9uLnN0b3BwZWQ9YT92Yjp1Yn0scmVjb2duaXplOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc2Vzc2lvbjtpZighYi5zdG9wcGVkKXt0aGlzLnRvdWNoQWN0aW9uLnByZXZlbnREZWZhdWx0cyhhKTt2YXIgYyxkPXRoaXMucmVjb2duaXplcnMsZT1iLmN1clJlY29nbml6ZXI7KCFlfHxlJiZlLnN0YXRlJnJiKSYmKGU9Yi5jdXJSZWNvZ25pemVyPW51bGwpO2Zvcih2YXIgZj0wO2Y8ZC5sZW5ndGg7KWM9ZFtmXSxiLnN0b3BwZWQ9PT12Ynx8ZSYmYyE9ZSYmIWMuY2FuUmVjb2duaXplV2l0aChlKT9jLnJlc2V0KCk6Yy5yZWNvZ25pemUoYSksIWUmJmMuc3RhdGUmKG9ifHBifHFiKSYmKGU9Yi5jdXJSZWNvZ25pemVyPWMpLGYrK319LGdldDpmdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgWSlyZXR1cm4gYTtmb3IodmFyIGI9dGhpcy5yZWNvZ25pemVycyxjPTA7YzxiLmxlbmd0aDtjKyspaWYoYltjXS5vcHRpb25zLmV2ZW50PT1hKXJldHVybiBiW2NdO3JldHVybiBudWxsfSxhZGQ6ZnVuY3Rpb24oYSl7aWYoZihhLFwiYWRkXCIsdGhpcykpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5nZXQoYS5vcHRpb25zLmV2ZW50KTtyZXR1cm4gYiYmdGhpcy5yZW1vdmUoYiksdGhpcy5yZWNvZ25pemVycy5wdXNoKGEpLGEubWFuYWdlcj10aGlzLHRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksYX0scmVtb3ZlOmZ1bmN0aW9uKGEpe2lmKGYoYSxcInJlbW92ZVwiLHRoaXMpKXJldHVybiB0aGlzO2lmKGE9dGhpcy5nZXQoYSkpe3ZhciBiPXRoaXMucmVjb2duaXplcnMsYz1yKGIsYSk7LTEhPT1jJiYoYi5zcGxpY2UoYywxKSx0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpKX1yZXR1cm4gdGhpc30sb246ZnVuY3Rpb24oYSxiKXtpZihhIT09ZCYmYiE9PWQpe3ZhciBjPXRoaXMuaGFuZGxlcnM7cmV0dXJuIGcocShhKSxmdW5jdGlvbihhKXtjW2FdPWNbYV18fFtdLGNbYV0ucHVzaChiKX0pLHRoaXN9fSxvZmY6ZnVuY3Rpb24oYSxiKXtpZihhIT09ZCl7dmFyIGM9dGhpcy5oYW5kbGVycztyZXR1cm4gZyhxKGEpLGZ1bmN0aW9uKGEpe2I/Y1thXSYmY1thXS5zcGxpY2UocihjW2FdLGIpLDEpOmRlbGV0ZSBjW2FdfSksdGhpc319LGVtaXQ6ZnVuY3Rpb24oYSxiKXt0aGlzLm9wdGlvbnMuZG9tRXZlbnRzJiZrYShhLGIpO3ZhciBjPXRoaXMuaGFuZGxlcnNbYV0mJnRoaXMuaGFuZGxlcnNbYV0uc2xpY2UoKTtpZihjJiZjLmxlbmd0aCl7Yi50eXBlPWEsYi5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe2Iuc3JjRXZlbnQucHJldmVudERlZmF1bHQoKX07Zm9yKHZhciBkPTA7ZDxjLmxlbmd0aDspY1tkXShiKSxkKyt9fSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50JiZqYSh0aGlzLCExKSx0aGlzLmhhbmRsZXJzPXt9LHRoaXMuc2Vzc2lvbj17fSx0aGlzLmlucHV0LmRlc3Ryb3koKSx0aGlzLmVsZW1lbnQ9bnVsbH19LGxhKGhhLHtJTlBVVF9TVEFSVDpFYSxJTlBVVF9NT1ZFOkZhLElOUFVUX0VORDpHYSxJTlBVVF9DQU5DRUw6SGEsU1RBVEVfUE9TU0lCTEU6bmIsU1RBVEVfQkVHQU46b2IsU1RBVEVfQ0hBTkdFRDpwYixTVEFURV9FTkRFRDpxYixTVEFURV9SRUNPR05JWkVEOnJiLFNUQVRFX0NBTkNFTExFRDpzYixTVEFURV9GQUlMRUQ6dGIsRElSRUNUSU9OX05PTkU6SWEsRElSRUNUSU9OX0xFRlQ6SmEsRElSRUNUSU9OX1JJR0hUOkthLERJUkVDVElPTl9VUDpMYSxESVJFQ1RJT05fRE9XTjpNYSxESVJFQ1RJT05fSE9SSVpPTlRBTDpOYSxESVJFQ1RJT05fVkVSVElDQUw6T2EsRElSRUNUSU9OX0FMTDpQYSxNYW5hZ2VyOmlhLElucHV0OngsVG91Y2hBY3Rpb246VixUb3VjaElucHV0OlAsTW91c2VJbnB1dDpMLFBvaW50ZXJFdmVudElucHV0Ok0sVG91Y2hNb3VzZUlucHV0OlIsU2luZ2xlVG91Y2hJbnB1dDpOLFJlY29nbml6ZXI6WSxBdHRyUmVjb2duaXplcjphYSxUYXA6Z2EsUGFuOmJhLFN3aXBlOmZhLFBpbmNoOmNhLFJvdGF0ZTplYSxQcmVzczpkYSxvbjptLG9mZjpuLGVhY2g6ZyxtZXJnZTp0YSxleHRlbmQ6c2EsYXNzaWduOmxhLGluaGVyaXQ6aSxiaW5kRm46aixwcmVmaXhlZDp1fSk7dmFyIHdiPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhP2E6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp7fTt3Yi5IYW1tZXI9aGEsXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBoYX0pOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWhhOmFbY109aGF9KHdpbmRvdyxkb2N1bWVudCxcIkhhbW1lclwiKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhhbW1lci5taW4uanMubWFwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZUJhc2VkR3JhZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9ibGVtKSB7XG4gICAgICAgIHRoaXMucHJvYmxlbSA9IHByb2JsZW07XG4gICAgfVxuICAgIC8vIFVzZSBhIExJUyAoTG9uZ2VzdCBJbmNyZWFzaW5nIFN1YnNlcXVlbmNlKSBhbGdvcml0aG0gdG8gcmV0dXJuIHRoZSBpbmRleGVzXG4gICAgLy8gdGhhdCBhcmUgbm90IHBhcnQgb2YgdGhhdCBzdWJzZXF1ZW5jZS5cbiAgICBpbnZlcnNlTElTSW5kaWNlcyhhcnIpIHtcbiAgICAgICAgLy8gR2V0IGFsbCBzdWJzZXF1ZW5jZXNcbiAgICAgICAgdmFyIGFsbFN1YnNlcXVlbmNlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHN1YnNlcXVlbmNlRm9yQ3VycmVudCA9IFthcnJbaV1dLFxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBhcnJbaV0sXG4gICAgICAgICAgICAgICAgbGFzdEVsZW1lbnRBZGRlZCA9IC0xO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IGk7IGogPCBhcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc3Vic2VxdWVudCA9IGFycltqXTtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2VxdWVudCA+IGN1cnJlbnQgJiYgbGFzdEVsZW1lbnRBZGRlZCA8IHN1YnNlcXVlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2VxdWVuY2VGb3JDdXJyZW50LnB1c2goc3Vic2VxdWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RFbGVtZW50QWRkZWQgPSBzdWJzZXF1ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsbFN1YnNlcXVlbmNlcy5wdXNoKHN1YnNlcXVlbmNlRm9yQ3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlndXJlIG91dCB0aGUgbG9uZ2VzdCBvbmVcbiAgICAgICAgdmFyIGxvbmdlc3RTdWJzZXF1ZW5jZUxlbmd0aCA9IC0xO1xuICAgICAgICB2YXIgbG9uZ2VzdFN1YnNlcXVlbmNlO1xuICAgICAgICBmb3IgKGxldCBpIGluIGFsbFN1YnNlcXVlbmNlcykge1xuICAgICAgICAgICAgdmFyIHN1YnMgPSBhbGxTdWJzZXF1ZW5jZXNbaV07XG4gICAgICAgICAgICBpZiAoc3Vicy5sZW5ndGggPiBsb25nZXN0U3Vic2VxdWVuY2VMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsb25nZXN0U3Vic2VxdWVuY2VMZW5ndGggPSBzdWJzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBsb25nZXN0U3Vic2VxdWVuY2UgPSBzdWJzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgaW52ZXJzZSBpbmRleGVzXG4gICAgICAgIHZhciBpbmRleGVzID0gW107XG4gICAgICAgIHZhciBsSW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGxJbmRleCA+IGxvbmdlc3RTdWJzZXF1ZW5jZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpbmRleGVzLnB1c2goaSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChhcnJbaV0gPT0gbG9uZ2VzdFN1YnNlcXVlbmNlW2xJbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgbEluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXhlcztcbiAgICB9XG4gICAgLy8gZ3JhZGUgdGhhdCBlbGVtZW50LCByZXR1cm5pbmcgdGhlIHN0YXRlXG4gICAgZ3JhZGUoKSB7XG4gICAgICAgIHZhciBwcm9ibGVtID0gdGhpcy5wcm9ibGVtO1xuICAgICAgICBwcm9ibGVtLmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgdGhpcy5jb3JyZWN0TGluZXMgPSAwO1xuICAgICAgICB0aGlzLnBlcmNlbnRMaW5lcyA9IDA7XG4gICAgICAgIHRoaXMuaW5jb3JyZWN0SW5kZW50cyA9IDA7XG4gICAgICAgIHZhciBzb2x1dGlvbkxpbmVzID0gcHJvYmxlbS5zb2x1dGlvbjtcbiAgICAgICAgdmFyIGFuc3dlckxpbmVzID0gcHJvYmxlbS5hbnN3ZXJMaW5lcygpO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIHN0YXRlO1xuICAgICAgICB0aGlzLnBlcmNlbnRMaW5lcyA9XG4gICAgICAgICAgICBNYXRoLm1pbihhbnN3ZXJMaW5lcy5sZW5ndGgsIHNvbHV0aW9uTGluZXMubGVuZ3RoKSAvXG4gICAgICAgICAgICBNYXRoLm1heChhbnN3ZXJMaW5lcy5sZW5ndGgsIHNvbHV0aW9uTGluZXMubGVuZ3RoKTtcbiAgICAgICAgaWYgKGFuc3dlckxpbmVzLmxlbmd0aCA8IHNvbHV0aW9uTGluZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IFwiaW5jb3JyZWN0VG9vU2hvcnRcIjtcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdExlbmd0aCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGFuc3dlckxpbmVzLmxlbmd0aCA9PSBzb2x1dGlvbkxpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5jb3JyZWN0TGVuZ3RoID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdExlbmd0aCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGNvZGUgKip0aGF0IGlzIHRoZXJlKiogaXMgaW4gdGhlIGNvcnJlY3Qgb3JkZXJcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgdG9vIG11Y2ggb3IgdG9vIGxpdHRsZSBjb2RlIHRoaXMgb25seSBtYXR0ZXJzIGZvclxuICAgICAgICAvLyBjYWxjdWxhdGluZyBhIHBlcmNlbnRhZ2Ugc2NvcmUuXG4gICAgICAgIGxldCBpc0NvcnJlY3RPcmRlciA9IHRydWU7XG4gICAgICAgIHRoaXMuY29ycmVjdExpbmVzID0gMDtcbiAgICAgICAgdGhpcy5zb2x1dGlvbkxlbmd0aCA9IHNvbHV0aW9uTGluZXMubGVuZ3RoO1xuICAgICAgICBsZXQgbG9vcExpbWl0ID0gTWF0aC5taW4oc29sdXRpb25MaW5lcy5sZW5ndGgsIGFuc3dlckxpbmVzLmxlbmd0aCk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsb29wTGltaXQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFuc3dlckxpbmVzW2ldLnRleHQgIT09IHNvbHV0aW9uTGluZXNbaV0udGV4dCkge1xuICAgICAgICAgICAgICAgIGlzQ29ycmVjdE9yZGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdExpbmVzICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXRlcm1pbmUgd2hldGhlciBibG9ja3MgYXJlIGluZGVudGVkIGNvcnJlY3RseVxuICAgICAgICB0aGlzLmluZGVudExlZnQgPSBbXTtcbiAgICAgICAgdGhpcy5pbmRlbnRSaWdodCA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbG9vcExpbWl0OyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhbnN3ZXJMaW5lc1tpXS52aWV3SW5kZW50KCkgPCBzb2x1dGlvbkxpbmVzW2ldLmluZGVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZW50UmlnaHQucHVzaChhbnN3ZXJMaW5lc1tpXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFuc3dlckxpbmVzW2ldLnZpZXdJbmRlbnQoKSA+IHNvbHV0aW9uTGluZXNbaV0uaW5kZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRlbnRMZWZ0LnB1c2goYW5zd2VyTGluZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5jb3JyZWN0SW5kZW50cyA9XG4gICAgICAgICAgICB0aGlzLmluZGVudExlZnQubGVuZ3RoICsgdGhpcy5pbmRlbnRSaWdodC5sZW5ndGg7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0SW5kZW50cyA9PSAwICYmXG4gICAgICAgICAgICBpc0NvcnJlY3RPcmRlciAmJlxuICAgICAgICAgICAgdGhpcy5jb3JyZWN0TGVuZ3RoXG4gICAgICAgICkge1xuICAgICAgICAgICAgLy8gUGVyZmVjdFxuICAgICAgICAgICAgc3RhdGUgPSBcImNvcnJlY3RcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvcnJlY3RMZW5ndGggJiYgaXNDb3JyZWN0T3JkZXIpIHtcbiAgICAgICAgICAgIHN0YXRlID0gXCJpbmNvcnJlY3RJbmRlbnRcIjtcbiAgICAgICAgfSBlbHNlIGlmICghaXNDb3JyZWN0T3JkZXIgJiYgc3RhdGUgIT0gXCJpbmNvcnJlY3RUb29TaG9ydFwiKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IFwiaW5jb3JyZWN0TW92ZUJsb2Nrc1wiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUGVyY2VudCgpO1xuICAgICAgICB0aGlzLmdyYWRlclN0YXRlID0gc3RhdGU7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVQZXJjZW50KCkge1xuICAgICAgICBsZXQgbnVtTGluZXMgPSB0aGlzLnBlcmNlbnRMaW5lcyAqIDAuMjtcbiAgICAgICAgbGV0IGxpbmVzID0gdGhpcy5wcm9ibGVtLmFuc3dlckxpbmVzKCkubGVuZ3RoO1xuICAgICAgICBsZXQgbnVtQ29ycmVjdEJsb2NrcyA9ICh0aGlzLmNvcnJlY3RMaW5lcyAvIGxpbmVzKSAqIDAuNDtcbiAgICAgICAgbGV0IG51bUNvcnJlY3RJbmRlbnRzID1cbiAgICAgICAgICAgICgodGhpcy5jb3JyZWN0TGluZXMgLSB0aGlzLmluY29ycmVjdEluZGVudHMpIC8gbGluZXMpICogMC40O1xuXG4gICAgICAgIHRoaXMucHJvYmxlbS5wZXJjZW50ID0gbnVtTGluZXMgKyBudW1Db3JyZWN0QmxvY2tzICsgbnVtQ29ycmVjdEluZGVudHM7XG4gICAgfVxufVxuIiwiJC5pMThuKCkubG9hZCh7XG4gICAgZW46IHtcbiAgICAgICAgbXNnX3BhcnNvbl9jaGVja19tZTogXCJDaGVja1wiLFxuICAgICAgICBtc2dfcGFyc29uX3Jlc2V0OiBcIlJlc2V0XCIsXG4gICAgICAgIG1zZ19wYXJzb25faGVscDogXCJIZWxwIG1lXCIsXG4gICAgICAgIG1zZ19wYXJzb25fdG9vX3Nob3J0OiBcIllvdXIgcHJvZ3JhbSBpcyB0b28gc2hvcnQuIEFkZCBtb3JlIGJsb2Nrcy5cIixcbiAgICAgICAgbXNnX3BhcnNvbl9kcmFnX2Zyb21faGVyZTogXCJEcmFnIGZyb20gaGVyZVwiLFxuICAgICAgICBtc2dfcGFyc29uX2RyYWdfdG9faGVyZTogXCJEcm9wIGJsb2NrcyBoZXJlXCIsXG4gICAgICAgIG1zZ19wYXJzb25fY29ycmVjdF9maXJzdF90cnk6XG4gICAgICAgICAgICBcIlBlcmZlY3QhICBJdCB0b29rIHlvdSBvbmx5IG9uZSB0cnkgdG8gc29sdmUgdGhpcy4gIEdyZWF0IGpvYiFcIixcbiAgICAgICAgbXNnX3BhcnNvbl9jb3JyZWN0OlxuICAgICAgICAgICAgXCJQZXJmZWN0ISAgSXQgdG9vayB5b3UgJDEgdHJpZXMgdG8gc29sdmUgdGhpcy4gIENsaWNrIFJlc2V0IHRvIHRyeSB0byBzb2x2ZSBpdCBpbiBvbmUgYXR0ZW1wdC5cIixcbiAgICAgICAgbXNnX3BhcnNvbl93cm9uZ19pbmRlbnQ6XG4gICAgICAgICAgICBcIlRoaXMgYmxvY2sgaXMgbm90IGluZGVudGVkIGNvcnJlY3RseS4gRWl0aGVyIGluZGVudCBpdCBtb3JlIGJ5IGRyYWdnaW5nIGl0IHJpZ2h0IG9yIHJlZHVjZSB0aGUgaW5kZW50aW9uIGJ5IGRyYWdnaW5nIGl0IGxlZnQuXCIsXG4gICAgICAgIG1zZ19wYXJzb25fd3JvbmdfaW5kZW50czpcbiAgICAgICAgICAgIFwiVGhlc2UgYmxvY2tzIGFyZSBub3QgaW5kZW50ZWQgY29ycmVjdGx5LiBUbyBpbmRlbnQgYSBibG9jayBtb3JlLCBkcmFnIGl0IHRvIHRoZSByaWdodC4gVG8gcmVkdWNlIHRoZSBpbmRlbnRpb24sIGRyYWcgaXQgdG8gdGhlIGxlZnQuXCIsXG4gICAgICAgIG1zZ19wYXJzb25fd3Jvbmdfb3JkZXI6XG4gICAgICAgICAgICBcIkhpZ2hsaWdodGVkIGJsb2NrcyBpbiB5b3VyIHByb2dyYW0gYXJlIHdyb25nIG9yIGFyZSBpbiB0aGUgd3Jvbmcgb3JkZXIuIFRoaXMgY2FuIGJlIGZpeGVkIGJ5IG1vdmluZywgcmVtb3ZpbmcsIG9yIHJlcGxhY2luZyBoaWdobGlnaHRlZCBibG9ja3MuXCIsXG4gICAgICAgIG1zZ19wYXJzb25fYXJyb3dfbmF2aWdhdGU6XG4gICAgICAgICAgICBcIkFycm93IGtleXMgdG8gbmF2aWdhdGUuIFNwYWNlIHRvIHNlbGVjdCAvIGRlc2VsZWN0IGJsb2NrIHRvIG1vdmUuXCIsXG4gICAgICAgIG1zZ19wYXJzb25faGVscF9pbmZvOlxuICAgICAgICAgICAgXCJDbGljayBvbiB0aGUgSGVscCBNZSBidXR0b24gaWYgeW91IHdhbnQgdG8gbWFrZSB0aGUgcHJvYmxlbSBlYXNpZXJcIixcbiAgICAgICAgbXNnX3BhcnNvbl9ub3Rfc29sdXRpb246XG4gICAgICAgICAgICBcIkRpc2FibGVkIGFuIHVubmVlZGVkIGNvZGUgYmxvY2sgKG9uZSB0aGF0IGlzIG5vdCBwYXJ0IG9mIHRoZSBzb2x1dGlvbikuXCIsXG4gICAgICAgIG1zZ19wYXJzb25fcHJvdmlkZWRfaW5kZW50OiBcIlByb3ZpZGVkIHRoZSBpbmRlbnRhdGlvbi5cIixcbiAgICAgICAgbXNnX3BhcnNvbl9jb21iaW5lZF9ibG9ja3M6IFwiQ29tYmluZWQgdHdvIGNvZGUgYmxvY2tzIGludG8gb25lLlwiLFxuICAgICAgICBtc2dfcGFyc29uX3JlbW92ZV9pbmNvcnJlY3Q6XG4gICAgICAgICAgICBcIldpbGwgcmVtb3ZlIGFuIGluY29ycmVjdCBjb2RlIGJsb2NrIGZyb20gYW5zd2VyIGFyZWFcIixcbiAgICAgICAgbXNnX3BhcnNvbl93aWxsX2NvbWJpbmU6IFwiV2lsbCBjb21iaW5lIHR3byBibG9ja3NcIixcbiAgICAgICAgbXNnX3BhcnNvbl9hdGxlYXN0X3RocmVlX2F0dGVtcHRzOlxuICAgICAgICAgICAgXCJZb3UgbXVzdCBtYWtlIGF0IGxlYXN0IHRocmVlIGRpc3RpbmN0IGZ1bGwgYXR0ZW1wdHMgYXQgYSBzb2x1dGlvbiBiZWZvcmUgeW91IGNhbiBnZXQgaGVscFwiLFxuICAgICAgICBtc2dfcGFyc29uX3RocmVlX2Jsb2Nrc19sZWZ0OlxuICAgICAgICAgICAgXCJUaGVyZSBhcmUgb25seSAzIGNvcnJlY3QgYmxvY2tzIGxlZnQuICBZb3Ugc2hvdWxkIGJlIGFibGUgdG8gcHV0IHRoZW0gaW4gb3JkZXJcIixcbiAgICAgICAgbXNnX3BhcnNvbl93aWxsX3Byb3ZpZGVfaW5kZW50OiBcIldpbGwgcHJvdmlkZSBpbmRlbnRhdGlvblwiLFxuICAgIH0sXG59KTtcbiIsIiQuaTE4bigpLmxvYWQoe1xuICAgIFwicHQtYnJcIjoge1xuICAgICAgICBtc2dfcGFyc29uX2NoZWNrX21lOiBcIlZlcmlmaWNhclwiLFxuICAgICAgICBtc2dfcGFyc29uX3Jlc2V0OiBcIlJlc2V0YXJcIixcbiAgICAgICAgbXNnX3BhcnNvbl9oZWxwOlwiQWp1ZGFcIixcbiAgICAgICAgbXNnX3BhcnNvbl90b29fc2hvcnQ6IFwiU2V1IHByb2dyYW1hIMOpIG11aXRvIGN1cnRvLiBBZGljaW9uZSBtYWlzIGJsb2Nvcy5cIixcbiAgICAgICAgbXNnX3BhcnNvbl9kcmFnX2Zyb21faGVyZTogXCJBcnJhc3RlIGRhcXVpXCIsXG4gICAgICAgIG1zZ19wYXJzb25fZHJhZ190b19oZXJlOiBcIkxhcmd1ZSBvcyBibG9jb3MgYXF1aVwiLFxuICAgICAgICBtc2dfcGFyc29uX2NvcnJlY3RfZmlyc3RfdHJ5OlxuICAgICAgICAgICAgXCJQZXJmZWl0byEgVm9jw6ogbGV2b3UgYXBlbmFzIHVtYSB0ZW50YXRpdmEgcGFyYSByZXNvbHZlci4gQm9tIHRyYWJhbGhvIVwiLFxuICAgICAgICBtc2dfcGFyc29uX2NvcnJlY3Q6XG4gICAgICAgICAgICBcIlBlcmZlaXRvISBWb2PDqiBsZXZvdSAkMSB0ZW50YXRpdmFzIHBhcmEgcmVzb2x2ZXIuIENsaXF1ZSBlbSBSZXNldGFyIHBhcmEgdGVudGFyIHJlc29sdmVyIGVtIHVtYSB0ZW50YXRpdmEuXCIgLFxuICAgICAgICBtc2dfcGFyc29uX3dyb25nX2luZGVudDpcbiAgICAgICAgICAgIFwiRXN0ZSBibG9jbyBuw6NvIGVzdMOhIGluZGVudGFkbyBjb3JyZXRhbWVudGUuIEluZGVudGUgbWFpcyBhcnJhc3RhbmRvLW8gcGFyYSBhIGRpcmVpdGEgb3UgcmVkdXphIGEgaW5kZW50YcOnw6NvIGFycmFzdGFuZG8gcGFyYSBhIGVzcXVlcmRhLlwiLFxuICAgICAgICBtc2dfcGFyc29uX3dyb25nX2luZGVudHM6XG4gICAgICAgICAgICBcIkVzdGVzIGJsb2NvcyBuw6NvIGVzdMOjbyBpbmRlbnRhZG9zIGNvcnJldGFtZW50ZS4gUGFyYSBpbmRlbnRhciBtYWlzLCBhcnJhc3RlIG8gYmxvY28gcGFyYSBhIGRpcmVpdGEuIFBhcmEgcmVkdXppciBhIGluZGVudGHDp8OjbywgYXJyYXN0ZSBwYXJhIGEgZXNxdWVyZGEuXCIsXG4gICAgICAgIG1zZ19wYXJzb25fd3Jvbmdfb3JkZXI6XG4gICAgICAgICAgICBcIkJsb2NvcyBkZXN0YWNhZG9zIG5vIHNldSBwcm9ncmFtYSBlc3TDo28gZXJyYWRvcyBvdSBlc3TDo28gbmEgb3JkZW0gZXJyYWRhLiBJc3NvIHBvZGUgc2VyIHJlc29sdmlkbyBtb3ZlbmRvLCBleGNsdWluZG8gb3Ugc3Vic3RpdHVpbmRvIG9zIGJsb2NvcyBkZXN0YWNhZG9zLlwiLFxuICAgICAgICBtc2dfcGFyc29uX2Fycm93X25hdmlnYXRlOlxuICAgICAgICAgICAgXCJVc2UgYXMgdGVjbGFzIGRlIHNldGFzIHBhcmEgbmF2ZWdhci4gRXNwYcOnbyBwYXJhIHNlbGVjaW9uYXIvIGRlc21hcmNhciBibG9jb3MgcGFyYSBtb3Zlci5cIixcbiAgICAgICAgbXNnX3BhcnNvbl9oZWxwX2luZm86XG4gICAgICAgICAgICBcIkNsaXF1ZSBubyBib3TDo28gQWp1ZGEgc2Ugdm9jw6ogcXVpc2VyIGZhY2lsaXRhciBvIHByb2JsZW1hXCIsXG4gICAgICAgIG1zZ19wYXJzb25fbm90X3NvbHV0aW9uOlxuICAgICAgICAgICAgXCJGb2kgZGVzYWJpbGl0YWRvIHVtIGJsb2NvIGRlIGPDs2RpZ28gZGVzbmVjZXNzw6FyaW8gKHF1ZSBuw6NvIGZheiBwYXJ0ZSBkYSBzb2x1w6fDo28pLlwiLFxuICAgICAgICBtc2dfcGFyc29uX3Byb3ZpZGVkX2luZGVudDpcIkZvaSBmb3JuZWNpZGEgYSBpbmRlbnRhw6fDo28uXCIsXG4gICAgICAgIG1zZ19wYXJzb25fY29tYmluZWRfYmxvY2tzOlwiRG9pcyBibG9jb3MgZGUgY8OzZGlnb3MgZm9yYW0gY29tYmluYWRvcyBlbSB1bS5cIixcbiAgICAgICAgbXNnX3BhcnNvbl9yZW1vdmVfaW5jb3JyZWN0OlxuICAgICAgICAgICAgXCJTZXLDoSByZW1vdmlkbyB1bSBibG9jbyBkZSBjw7NkaWdvIGluY29ycmV0byBkYSDDoXJlYSBkZSByZXNwb3N0YVwiLFxuICAgICAgICBtc2dfcGFyc29uX3dpbGxfY29tYmluZTpcIlNlcsOjbyBjb21iaW5hZG9zIGRvaXMgYmxvY29zXCIsXG4gICAgICAgIG1zZ19wYXJzb25fYXRsZWFzdF90aHJlZV9hdHRlbXB0czpcbiAgICAgICAgICAgIFwiVm9jw6ogZGV2ZSB0ZW50YXIgcGVsbyBtZW5vcyB0csOqcyB2ZXplcyBhbnRlcyBkZSBwZWRpciBhanVkYVwiLFxuICAgICAgICBtc2dfcGFyc29uX3RocmVlX2Jsb2Nrc19sZWZ0OlxuICAgICAgICAgICAgXCJSZXN0YW0gYXBlbmFzIDMgYmxvY29zIGNvcnJldG9zLiBWb2PDqiBkZXZlIGNvbG9jw6EtbG9zIGVtIG9yZGVtXCIsXG4gICAgICAgIG1zZ19wYXJzb25fd2lsbF9wcm92aWRlX2luZGVudDogXCJTZXLDoSBmb3JuZWNpZGEgYSBpbmRlbnRhw6fDo29cIlxuICAgIH0sXG59KTtcbiIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PSBQYXJzb25zIFJ1bmVzdG9uZSBEaXJlY3RpdmUgSmF2YXNjcmlwdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PT09PSBSZW5kZXJzIGEgUGFyc29ucyBwcm9ibGVtIGJhc2VkIG9uIHRoZSBIVE1MIGNyZWF0ZWQgYnkgdGhlXG49PT09PT09PSBwYXJzb25zLnB5IHNjcmlwdCBhbmQgdGhlIFJTVCBmaWxlLlxuPT09PSBDT05UUklCVVRPUlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PT09PSBJc2FpYWggTWF5ZXJjaGFrXG49PT09PT09PSBKZWZmIFJpY2tcbj09PT09PT09IEJhcmJhcmEgRXJpY3NvblxuPT09PT09PT0gQ29sZSBCb3dlcnNcbj09PT0gQWRhcHRlZCBmb3JtIHRoZSBvcmlnaW5hbCBKUyBQYXJzb25zIGJ5ID09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PT09PT0gVmlsbGUgS2FyYXZpcnRhXG49PT09PT09PSBQZXRyaSBJaGFudG9sYVxuPT09PT09PT0gSnVoYSBIZWxtaW5lblxuPT09PT09PT0gTWlrZSBIZXduZXJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09IExpbmVCYXNlZEdyYWRlciBPYmplY3QgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT09IFVzZWQgZm9yIGdyYWRpbmcgYSBQYXJzb25zIHByb2JsZW0uXG49PT09IFBST1BFUlRJRVMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT09IHByb2JsZW06IHRoZSBQYXJzb25zIHByb2JsZW1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZS5qc1wiO1xuaW1wb3J0IFwiLi9wYXJzb25zLWkxOG4uZW4uanNcIjtcbmltcG9ydCBcIi4vcGFyc29ucy1pMThuLnB0LWJyLmpzXCI7XG5pbXBvcnQgXCIuL3ByZXR0aWZ5LmpzXCI7XG5pbXBvcnQgXCIuLi9jc3MvcGFyc29ucy5jc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9wcmV0dGlmeS5jc3NcIjtcbmltcG9ydCBMaW5lQmFzZWRHcmFkZXIgZnJvbSBcIi4vbGluZUdyYWRlclwiO1xuaW1wb3J0IFBhcnNvbnNMaW5lIGZyb20gXCIuL3BhcnNvbnNMaW5lXCI7XG5pbXBvcnQgUGFyc29uc0Jsb2NrIGZyb20gXCIuL3BhcnNvbnNCbG9ja1wiO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT0gUGFyc29ucyBPYmplY3QgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PT09PT0gVGhlIG1vZGVsIGFuZCB2aWV3IG9mIGEgUGFyc29ucyBwcm9ibGVtIGJhc2VkIG9uIHdoYXQgaXNcbj09PT09PT09IHNwZWNpZmllZCBpbiB0aGUgSFRNTCwgd2hpY2ggaXMgYmFzZWQgb24gd2hhdCBpcyBzcGVjaWZpZWRcbj09PT09PT09IGluIHRoZSBSU1QgZmlsZVxuPT09PSBQUk9QRVJUSUVTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PT09PSBvcHRpb25zOiBvcHRpb25zIGxhcmdlbHkgc3BlY2lmaWVkIGZyb20gdGhlIEhUTUxcbj09PT09PT09IGdyYWRlcjogYSBMaW5lR3JhZGVyIGZvciBncmFkaW5nIHRoZSBwcm9ibGVtXG49PT09PT09PSBsaW5lczogYW4gYXJyYXkgb2YgYWxsIFBhcnNvbnNMaW5lIGFzIHNwZWNpZmllZCBpbiB0aGUgcHJvYmxlbVxuPT09PT09PT0gc29sdXRpb246IGFuIGFycmF5IG9mIFBhcnNvbnNMaW5lIGluIHRoZSBzb2x1dGlvblxuPT09PT09PT0gYmxvY2tzOiB0aGUgY3VycmVudCBibG9ja3Ncbj09PT09PT09IHNvdXJjZUFyZWE6IHRoZSBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIHNvdXJjZSBibG9ja3Ncbj09PT09PT09IGFuc3dlckFyZWE6IHRoZSBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIGFuc3dlciBibG9ja3Ncbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT0gSU5JVElBTElaQVRJT04gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbmV4cG9ydCB2YXIgcHJzTGlzdCA9IHt9OyAvLyBQYXJzb25zIGRpY3Rpb25hcnlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNvbnMgZXh0ZW5kcyBSdW5lc3RvbmVCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKG9wdHMpO1xuICAgICAgICB2YXIgb3JpZyA9IG9wdHMub3JpZzsgLy8gZW50aXJlIDxwcmU+IGVsZW1lbnQgdGhhdCB3aWxsIGJlIHJlcGxhY2VkIGJ5IG5ldyBIVE1MXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2ID0gb3JpZztcbiAgICAgICAgdGhpcy5vcmlnRWxlbSA9ICQob3JpZykuZmluZChcInByZS5wYXJzb25zYmxvY2tzXCIpWzBdO1xuICAgICAgICAvLyBGaW5kIHRoZSBxdWVzdGlvbiB0ZXh0IGFuZCBzdG9yZSBpdCBpbiAucXVlc3Rpb25cbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9ICQob3JpZykuZmluZChgLnBhcnNvbnNfcXVlc3Rpb25gKVswXTtcbiAgICAgICAgdGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcyA9IG9wdHMudXNlUnVuZXN0b25lU2VydmljZXM7XG4gICAgICAgIHRoaXMuZGl2aWQgPSBvcHRzLm9yaWcuaWQ7XG4gICAgICAgIC8vIFNldCB0aGUgc3RvcmFnZUlkIChrZXkgZm9yIHN0b3JpbmcgZGF0YSlcbiAgICAgICAgdmFyIHN0b3JhZ2VJZCA9IHN1cGVyLmxvY2FsU3RvcmFnZUtleSgpO1xuICAgICAgICB0aGlzLnN0b3JhZ2VJZCA9IHN0b3JhZ2VJZDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMub3JpZ0VsZW0uY2hpbGROb2RlczsgLy8gdGhpcyBjb250YWlucyBhbGwgb2YgdGhlIGNoaWxkIGVsZW1lbnRzIG9mIHRoZSBlbnRpcmUgdGFnLi4uXG4gICAgICAgIHRoaXMuY29udGVudEFycmF5ID0gW107XG4gICAgICAgIFBhcnNvbnMuY291bnRlcisrOyAvLyAgICBVbmlxdWUgaWRlbnRpZmllclxuICAgICAgICB0aGlzLmNvdW50ZXJJZCA9IFwicGFyc29ucy1cIiArIFBhcnNvbnMuY291bnRlcjtcblxuICAgICAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgIGlmICgkKHRoaXMuY2hpbGRyZW5baV0pLmlzKFwiW2RhdGEtcXVlc3Rpb25dXCIpKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5xdWVzdGlvbiA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXplT3B0aW9ucygpO1xuICAgICAgICB0aGlzLmdyYWRlciA9IG5ldyBMaW5lQmFzZWRHcmFkZXIodGhpcyk7XG4gICAgICAgIHRoaXMuZ3JhZGVyLnNob3dmZWVkYmFjayA9IHRoaXMuc2hvd2ZlZWRiYWNrO1xuICAgICAgICB2YXIgZnVsbHRleHQgPSAkKHRoaXMub3JpZ0VsZW0pLmh0bWwoKTtcbiAgICAgICAgdGhpcy5ibG9ja0luZGV4ID0gMDtcbiAgICAgICAgdGhpcy5jaGVja0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5udW1EaXN0aW5jdCA9IDA7XG4gICAgICAgIHRoaXMuaGFzU29sdmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUxpbmVzKGZ1bGx0ZXh0LnRyaW0oKSk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVZpZXcoKTtcbiAgICAgICAgdGhpcy5jYXB0aW9uID0gXCJQYXJzb25zXCI7XG4gICAgICAgIHRoaXMuYWRkQ2FwdGlvbihcInJ1bmVzdG9uZVwiKTtcbiAgICAgICAgLy8gQ2hlY2sgdGhlIHNlcnZlciBmb3IgYW4gYW5zd2VyIHRvIGNvbXBsZXRlIHRoaW5nc1xuICAgICAgICB0aGlzLmNoZWNrU2VydmVyKFwicGFyc29uc1wiLCB0cnVlKTtcbiAgICB9XG4gICAgLy8gQmFzZWQgb24gdGhlIGRhdGEtZmllbGRzIGluIHRoZSBvcmlnaW5hbCBIVE1MLCBpbml0aWFsaXplIG9wdGlvbnNcbiAgICBpbml0aWFsaXplT3B0aW9ucygpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwaXhlbHNQZXJJbmRlbnQ6IDMwLFxuICAgICAgICB9O1xuICAgICAgICAvLyBhZGQgbWF4ZGlzdCBhbmQgb3JkZXIgaWYgcHJlc2VudFxuICAgICAgICB2YXIgbWF4ZGlzdCA9ICQodGhpcy5vcmlnRWxlbSkuZGF0YShcIm1heGRpc3RcIik7XG4gICAgICAgIHZhciBvcmRlciA9ICQodGhpcy5vcmlnRWxlbSkuZGF0YShcIm9yZGVyXCIpO1xuICAgICAgICB2YXIgbm9pbmRlbnQgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJub2luZGVudFwiKTtcbiAgICAgICAgdmFyIGFkYXB0aXZlID0gJCh0aGlzLm9yaWdFbGVtKS5kYXRhKFwiYWRhcHRpdmVcIik7XG4gICAgICAgIHZhciBudW1iZXJlZCA9ICQodGhpcy5vcmlnRWxlbSkuZGF0YShcIm51bWJlcmVkXCIpO1xuICAgICAgICBvcHRpb25zW1wibnVtYmVyZWRcIl0gPSBudW1iZXJlZDtcbiAgICAgICAgaWYgKG1heGRpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1tcIm1heGRpc3RcIl0gPSBtYXhkaXN0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBjb252ZXJ0IG9yZGVyIHN0cmluZyB0byBhcnJheSBvZiBudW1iZXJzXG4gICAgICAgICAgICBvcmRlciA9IG9yZGVyLm1hdGNoKC9cXGQrL2cpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG9yZGVyW2ldID0gcGFyc2VJbnQob3JkZXJbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9uc1tcIm9yZGVyXCJdID0gb3JkZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vaW5kZW50ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbm9pbmRlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zW1wibm9pbmRlbnRcIl0gPSBub2luZGVudDtcbiAgICAgICAgdGhpcy5ub2luZGVudCA9IG5vaW5kZW50O1xuICAgICAgICBpZiAoYWRhcHRpdmUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhZGFwdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGFkYXB0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVBZGFwdGl2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnNbXCJhZGFwdGl2ZVwiXSA9IGFkYXB0aXZlO1xuICAgICAgICAvLyBhZGQgbG9jYWxlIGFuZCBsYW5ndWFnZVxuICAgICAgICB2YXIgbG9jYWxlID0gZUJvb2tDb25maWcubG9jYWxlO1xuICAgICAgICBpZiAobG9jYWxlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbG9jYWxlID0gXCJlblwiO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnNbXCJsb2NhbGVcIl0gPSBsb2NhbGU7XG4gICAgICAgIHZhciBsYW5ndWFnZSA9ICQodGhpcy5vcmlnRWxlbSkuZGF0YShcImxhbmd1YWdlXCIpO1xuICAgICAgICBpZiAobGFuZ3VhZ2UgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsYW5ndWFnZSA9IGVCb29rQ29uZmlnLmxhbmd1YWdlO1xuICAgICAgICAgICAgaWYgKGxhbmd1YWdlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxhbmd1YWdlID0gXCJweXRob25cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zW1wibGFuZ3VhZ2VcIl0gPSBsYW5ndWFnZTtcbiAgICAgICAgdmFyIHByZXR0aWZ5TGFuZ3VhZ2UgPSB7XG4gICAgICAgICAgICBweXRob246IFwicHJldHR5cHJpbnQgbGFuZy1weVwiLFxuICAgICAgICAgICAgamF2YTogXCJwcmV0dHlwcmludCBsYW5nLWphdmFcIixcbiAgICAgICAgICAgIGphdmFzY3JpcHQ6IFwicHJldHR5cHJpbnQgbGFuZy1qc1wiLFxuICAgICAgICAgICAgaHRtbDogXCJwcmV0dHlwcmludCBsYW5nLWh0bWxcIixcbiAgICAgICAgICAgIGM6IFwicHJldHR5cHJpbnQgbGFuZy1jXCIsXG4gICAgICAgICAgICBcImMrK1wiOiBcInByZXR0eXByaW50IGxhbmctY3BwXCIsXG4gICAgICAgICAgICBydWJ5OiBcInByZXR0eXByaW50IGxhbmctcmJcIixcbiAgICAgICAgfVtsYW5ndWFnZV07XG4gICAgICAgIGlmIChwcmV0dGlmeUxhbmd1YWdlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJldHRpZnlMYW5ndWFnZSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uc1tcInByZXR0aWZ5TGFuZ3VhZ2VcIl0gPSBwcmV0dGlmeUxhbmd1YWdlO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICAvLyBCYXNlZCBvbiB3aGF0IGlzIHNwZWNpZmllZCBpbiB0aGUgb3JpZ2luYWwgSFRNTCwgY3JlYXRlIHRoZSBIVE1MIHZpZXdcbiAgICBpbml0aWFsaXplVmlldygpIHtcbiAgICAgICAgdGhpcy5vdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICQodGhpcy5vdXRlckRpdikuYWRkQ2xhc3MoXCJwYXJzb25zIGFsZXJ0IGFsZXJ0LXdhcm5pbmdcIik7XG4gICAgICAgIHRoaXMub3V0ZXJEaXYuaWQgPSB0aGlzLmNvdW50ZXJJZDtcbiAgICAgICAgdGhpcy5wYXJzVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICQodGhpcy5wYXJzVGV4dERpdikuYWRkQ2xhc3MoXCJwYXJzb25zLXRleHRcIik7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRUaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAkKHRoaXMua2V5Ym9hcmRUaXApLmF0dHIoXCJyb2xlXCIsIFwidG9vbHRpcFwiKTtcbiAgICAgICAgdGhpcy5rZXlib2FyZFRpcC5pZCA9IHRoaXMuY291bnRlcklkICsgXCItdGlwXCI7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRUaXAuaW5uZXJIVE1MID0gJC5pMThuKFwibXNnX3BhcnNvbl9hcnJvd19uYXZpZ2F0ZVwiKTtcbiAgICAgICAgdGhpcy5vdXRlckRpdi5hcHBlbmRDaGlsZCh0aGlzLmtleWJvYXJkVGlwKTtcbiAgICAgICAgJCh0aGlzLmtleWJvYXJkVGlwKS5oaWRlKCk7XG4gICAgICAgIHRoaXMuc29ydENvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICQodGhpcy5zb3J0Q29udGFpbmVyRGl2KS5hZGRDbGFzcyhcInNvcnRhYmxlLWNvZGUtY29udGFpbmVyXCIpO1xuICAgICAgICAkKHRoaXMuc29ydENvbnRhaW5lckRpdikuYXR0cihcbiAgICAgICAgICAgIFwiYXJpYS1kZXNjcmliZWRieVwiLFxuICAgICAgICAgICAgdGhpcy5jb3VudGVySWQgKyBcIi10aXBcIlxuICAgICAgICApO1xuICAgICAgICB0aGlzLm91dGVyRGl2LmFwcGVuZENoaWxkKHRoaXMuc29ydENvbnRhaW5lckRpdik7XG4gICAgICAgIHRoaXMuc291cmNlUmVnaW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5zb3VyY2VSZWdpb25EaXYuaWQgPSB0aGlzLmNvdW50ZXJJZCArIFwiLXNvdXJjZVJlZ2lvblwiO1xuICAgICAgICAkKHRoaXMuc291cmNlUmVnaW9uRGl2KS5hZGRDbGFzcyhcInNvcnRhYmxlLWNvZGVcIik7XG4gICAgICAgIHRoaXMuc291cmNlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAkKHRoaXMuc291cmNlTGFiZWwpLmF0dHIoXCJyb2xlXCIsIFwidG9vbHRpcFwiKTtcbiAgICAgICAgdGhpcy5zb3VyY2VMYWJlbC5pZCA9IHRoaXMuY291bnRlcklkICsgXCItc291cmNlVGlwXCI7XG4gICAgICAgIHRoaXMuc291cmNlTGFiZWwuaW5uZXJIVE1MID0gJC5pMThuKFwibXNnX3BhcnNvbl9kcmFnX2Zyb21faGVyZVwiKTtcbiAgICAgICAgdGhpcy5zb3VyY2VSZWdpb25EaXYuYXBwZW5kQ2hpbGQodGhpcy5zb3VyY2VMYWJlbCk7XG4gICAgICAgIHRoaXMuc29ydENvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLnNvdXJjZVJlZ2lvbkRpdik7XG4gICAgICAgIHRoaXMuc291cmNlQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuc291cmNlQXJlYS5pZCA9IHRoaXMuY291bnRlcklkICsgXCItc291cmNlXCI7XG4gICAgICAgICQodGhpcy5zb3VyY2VBcmVhKS5hZGRDbGFzcyhcInNvdXJjZVwiKTtcbiAgICAgICAgJCh0aGlzLnNvdXJjZUFyZWEpLmF0dHIoXG4gICAgICAgICAgICBcImFyaWEtZGVzY3JpYmVkYnlcIixcbiAgICAgICAgICAgIHRoaXMuY291bnRlcklkICsgXCItc291cmNlVGlwXCJcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zb3VyY2VSZWdpb25EaXYuYXBwZW5kQ2hpbGQodGhpcy5zb3VyY2VBcmVhKTtcbiAgICAgICAgdGhpcy5hbnN3ZXJSZWdpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmFuc3dlclJlZ2lvbkRpdi5pZCA9IHRoaXMuY291bnRlcklkICsgXCItYW5zd2VyUmVnaW9uXCI7XG4gICAgICAgICQodGhpcy5hbnN3ZXJSZWdpb25EaXYpLmFkZENsYXNzKFwic29ydGFibGUtY29kZVwiKTtcbiAgICAgICAgdGhpcy5hbnN3ZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICQodGhpcy5hbnN3ZXJMYWJlbCkuYXR0cihcInJvbGVcIiwgXCJ0b29sdGlwXCIpO1xuICAgICAgICB0aGlzLmFuc3dlckxhYmVsLmlkID0gdGhpcy5jb3VudGVySWQgKyBcIi1hbnN3ZXJUaXBcIjtcbiAgICAgICAgdGhpcy5hbnN3ZXJMYWJlbC5pbm5lckhUTUwgPSAkLmkxOG4oXCJtc2dfcGFyc29uX2RyYWdfdG9faGVyZVwiKTtcbiAgICAgICAgdGhpcy5hbnN3ZXJSZWdpb25EaXYuYXBwZW5kQ2hpbGQodGhpcy5hbnN3ZXJMYWJlbCk7XG4gICAgICAgIHRoaXMuc29ydENvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLmFuc3dlclJlZ2lvbkRpdik7XG4gICAgICAgIHRoaXMuYW5zd2VyQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuYW5zd2VyQXJlYS5pZCA9IHRoaXMuY291bnRlcklkICsgXCItYW5zd2VyXCI7XG4gICAgICAgICQodGhpcy5hbnN3ZXJBcmVhKS5hdHRyKFxuICAgICAgICAgICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCIsXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXJJZCArIFwiLWFuc3dlclRpcFwiXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYW5zd2VyUmVnaW9uRGl2LmFwcGVuZENoaWxkKHRoaXMuYW5zd2VyQXJlYSk7XG4gICAgICAgIHRoaXMucGFyc29uc0NvbnRyb2xEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAkKHRoaXMucGFyc29uc0NvbnRyb2xEaXYpLmFkZENsYXNzKFwicGFyc29ucy1jb250cm9sc1wiKTtcbiAgICAgICAgdGhpcy5vdXRlckRpdi5hcHBlbmRDaGlsZCh0aGlzLnBhcnNvbnNDb250cm9sRGl2KTtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB0aGlzLmNoZWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgJCh0aGlzLmNoZWNrQnV0dG9uKS5hdHRyKFwiY2xhc3NcIiwgXCJidG4gYnRuLXN1Y2Nlc3NcIik7XG4gICAgICAgIHRoaXMuY2hlY2tCdXR0b24udGV4dENvbnRlbnQgPSAkLmkxOG4oXCJtc2dfcGFyc29uX2NoZWNrX21lXCIpO1xuICAgICAgICB0aGlzLmNoZWNrQnV0dG9uLmlkID0gdGhpcy5jb3VudGVySWQgKyBcIi1jaGVja1wiO1xuICAgICAgICB0aGlzLnBhcnNvbnNDb250cm9sRGl2LmFwcGVuZENoaWxkKHRoaXMuY2hlY2tCdXR0b24pO1xuICAgICAgICB0aGlzLmNoZWNrQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICB0aGlzLmNoZWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGF0LmNoZWNrQ3VycmVudEFuc3dlcigpO1xuICAgICAgICAgICAgdGhhdC5sb2dDdXJyZW50QW5zd2VyKCk7XG4gICAgICAgICAgICB0aGF0LnJlbmRlckZlZWRiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgJCh0aGlzLnJlc2V0QnV0dG9uKS5hdHRyKFwiY2xhc3NcIiwgXCJidG4gYnRuLWRlZmF1bHRcIik7XG4gICAgICAgIHRoaXMucmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSAkLmkxOG4oXCJtc2dfcGFyc29uX3Jlc2V0XCIpO1xuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uLmlkID0gdGhpcy5jb3VudGVySWQgKyBcIi1yZXNldFwiO1xuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICB0aGlzLnBhcnNvbnNDb250cm9sRGl2LmFwcGVuZENoaWxkKHRoaXMucmVzZXRCdXR0b24pO1xuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGF0LmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgICAgICQodGhhdC5jaGVja0J1dHRvbikucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoYXQucmVzZXRWaWV3KCk7XG4gICAgICAgICAgICB0aGF0LmNoZWNrQ291bnQgPSAwO1xuICAgICAgICAgICAgdGhhdC5sb2dNb3ZlKFwicmVzZXRcIik7XG4gICAgICAgICAgICB0aGF0LnNldExvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hZGFwdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5oZWxwQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICQodGhpcy5oZWxwQnV0dG9uKS5hdHRyKFwiY2xhc3NcIiwgXCJidG4gYnRuLXByaW1hcnlcIik7XG4gICAgICAgICAgICB0aGlzLmhlbHBCdXR0b24udGV4dENvbnRlbnQgPSAkLmkxOG4oXCJtc2dfcGFyc29uX2hlbHBcIik7XG4gICAgICAgICAgICB0aGlzLmhlbHBCdXR0b24uaWQgPSB0aGlzLmNvdW50ZXJJZCArIFwiLWhlbHBcIjtcbiAgICAgICAgICAgIHRoaXMuaGVscEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlOyAvLyBiamVcbiAgICAgICAgICAgIHRoaXMucGFyc29uc0NvbnRyb2xEaXYuYXBwZW5kQ2hpbGQodGhpcy5oZWxwQnV0dG9uKTtcbiAgICAgICAgICAgIHRoaXMuaGVscEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGF0LmhlbHBNZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZXNzYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlRGl2LmlkID0gdGhpcy5jb3VudGVySWQgKyBcIi1tZXNzYWdlXCI7XG4gICAgICAgIHRoaXMucGFyc29uc0NvbnRyb2xEaXYuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlRGl2KTtcbiAgICAgICAgJCh0aGlzLm1lc3NhZ2VEaXYpLmhpZGUoKTtcbiAgICAgICAgJCh0aGlzLm9yaWdFbGVtKS5yZXBsYWNlV2l0aCh0aGlzLm91dGVyRGl2KTtcbiAgICAgICAgJCh0aGlzLm91dGVyRGl2KS5jbG9zZXN0KFwiLnNxY29udGFpbmVyXCIpLmNzcyhcIm1heC13aWR0aFwiLCBcIm5vbmVcIik7XG4gICAgICAgIGlmICh0aGlzLm91dGVyRGl2KSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzLnF1ZXN0aW9uKS5odG1sKCkubWF0Y2goL15cXHMrJC8pKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnF1ZXN0aW9uKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLm91dGVyRGl2KS5wcmVwZW5kKHRoaXMucXVlc3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemUgbGluZXMgYW5kIHNvbHV0aW9uIHByb3BlcnRpZXNcbiAgICBpbml0aWFsaXplTGluZXModGV4dCkge1xuICAgICAgICB0aGlzLmxpbmVzID0gW107XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgaW5pdGlhbCBibG9ja3NcbiAgICAgICAgdmFyIHRleHRCbG9ja3MgPSB0ZXh0LnNwbGl0KFwiLS0tXCIpO1xuICAgICAgICBpZiAodGV4dEJsb2Nrcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyAtLS0sIHRoZW4gZXZlcnkgbGluZSBpcyBpdHMgb3duIGJsb2NrXG4gICAgICAgICAgICB0ZXh0QmxvY2tzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc29sdXRpb24gPSBbXTtcbiAgICAgICAgdmFyIGluZGVudHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0QmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGV4dEJsb2NrID0gdGV4dEJsb2Nrc1tpXTtcbiAgICAgICAgICAgIC8vIEZpZ3VyZSBvdXQgb3B0aW9ucyBiYXNlZCBvbiB0aGUgI29wdGlvblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBvcHRpb25zIGZyb20gdGhlIGNvZGVcbiAgICAgICAgICAgIC8vIG9ubHkgb3B0aW9ucyBhcmUgI3BhaXJlZCBvciAjZGlzdHJhY3RvclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIHZhciBkaXN0cmFjdEluZGV4O1xuICAgICAgICAgICAgdmFyIGRpc3RyYWN0SGVscHRleHQgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKHRleHRCbG9jay5pbmNsdWRlcyhcIiNwYWlyZWQ6XCIpKSB7XG4gICAgICAgICAgICAgICAgZGlzdHJhY3RJbmRleCA9IHRleHRCbG9jay5pbmRleE9mKFwiI3BhaXJlZDpcIik7XG4gICAgICAgICAgICAgICAgZGlzdHJhY3RIZWxwdGV4dCA9IHRleHRCbG9ja1xuICAgICAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKGRpc3RyYWN0SW5kZXggKyA4LCB0ZXh0QmxvY2subGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAudHJpbSgpO1xuICAgICAgICAgICAgICAgIHRleHRCbG9jayA9IHRleHRCbG9jay5zdWJzdHJpbmcoMCwgZGlzdHJhY3RJbmRleCArIDcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0ZXh0QmxvY2suaW5jbHVkZXMoXCIjZGlzdHJhY3RvcjpcIikpIHtcbiAgICAgICAgICAgICAgICBkaXN0cmFjdEluZGV4ID0gdGV4dEJsb2NrLmluZGV4T2YoXCIjZGlzdHJhY3RvcjpcIik7XG4gICAgICAgICAgICAgICAgZGlzdHJhY3RIZWxwdGV4dCA9IHRleHRCbG9ja1xuICAgICAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKGRpc3RyYWN0SW5kZXggKyAxMiwgdGV4dEJsb2NrLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB0ZXh0QmxvY2sgPSB0ZXh0QmxvY2suc3Vic3RyaW5nKDAsIGRpc3RyYWN0SW5kZXggKyAxMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZXh0QmxvY2sgPSB0ZXh0QmxvY2sucmVwbGFjZShcbiAgICAgICAgICAgICAgICAvIyhwYWlyZWR8ZGlzdHJhY3RvcikvLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChteXN0cmluZywgYXJnMSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zW2FyZzFdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBsaW5lc1xuICAgICAgICAgICAgdmFyIGxpbmVzID0gW107XG4gICAgICAgICAgICB2YXIgc3BsaXQgPSB0ZXh0QmxvY2suc3BsaXQoXCJcXG5cIik7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNwbGl0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzcGxpdFtqXTtcbiAgICAgICAgICAgICAgICAvLyBkaXNjYXJkIGJsYW5rIHJvd3NcbiAgICAgICAgICAgICAgICBpZiAoIS9eXFxzKiQvLnRlc3QoY29kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmUgPSBuZXcgUGFyc29uc0xpbmUodGhpcywgY29kZSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zW1wicGFpcmVkXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLmRpc3RyYWN0b3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5wYWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5kaXN0cmFjdEhlbHB0ZXh0ID0gZGlzdHJhY3RIZWxwdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zW1wiZGlzdHJhY3RvclwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5kaXN0cmFjdG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUucGFpcmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLmRpc3RyYWN0SGVscHRleHQgPSBkaXN0cmFjdEhlbHB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5kaXN0cmFjdG9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLnBhaXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc29sdXRpb24ucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJC5pbkFycmF5KGxpbmUuaW5kZW50LCBpbmRlbnRzKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZW50cy5wdXNoKGxpbmUuaW5kZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsaW5lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIGdyb3VwV2l0aE5leHRcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbGluZXMubGVuZ3RoIC0gMTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzW2pdLmdyb3VwV2l0aE5leHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5ncm91cFdpdGhOZXh0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm9ybWFsaXplIHRoZSBpbmRlbnRzXG4gICAgICAgIGluZGVudHMgPSBpbmRlbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsaW5lID0gdGhpcy5saW5lc1tpXTtcbiAgICAgICAgICAgIGxpbmUuaW5kZW50ID0gaW5kZW50cy5pbmRleE9mKGxpbmUuaW5kZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvbHV0aW9uID0gc29sdXRpb247XG4gICAgfVxuICAgIC8vIEJhc2VkIG9uIHRoZSBibG9ja3MsIGNyZWF0ZSB0aGUgc291cmNlIGFuZCBhbnN3ZXIgYXJlYXNcbiAgICBpbml0aWFsaXplQXJlYXMoc291cmNlQmxvY2tzLCBhbnN3ZXJCbG9ja3MsIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGJsb2NrcyBwcm9wZXJ0eSBhcyB0aGUgc3VtIG9mIHRoZSB0d29cbiAgICAgICAgdmFyIGJsb2NrcyA9IFtdO1xuICAgICAgICB2YXIgaSwgYmxvY2s7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJsb2NrID0gc291cmNlQmxvY2tzW2ldO1xuICAgICAgICAgICAgYmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VBcmVhLmFwcGVuZENoaWxkKGJsb2NrLnZpZXcpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhbnN3ZXJCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJsb2NrID0gYW5zd2VyQmxvY2tzW2ldO1xuICAgICAgICAgICAgYmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgdGhpcy5hbnN3ZXJBcmVhLmFwcGVuZENoaWxkKGJsb2NrLnZpZXcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxvY2tzID0gYmxvY2tzO1xuICAgICAgICAvLyBJZiBwcmVzZW50LCBkaXNhYmxlIHNvbWUgYmxvY2tzXG4gICAgICAgIHZhciBkaXNhYmxlZCA9IG9wdGlvbnMuZGlzYWJsZWQ7XG4gICAgICAgIGlmIChkaXNhYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYmxvY2sgPSBibG9ja3NbaV07XG4gICAgICAgICAgICAgICAgaWYgKGRpc2FibGVkLmluY2x1ZGVzKGJsb2NrLmxpbmVzWzBdLmluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIERldGVybWluZSBob3cgbXVjaCBpbmRlbnQgc2hvdWxkIGJlIHBvc3NpYmxlIGluIHRoZSBhbnN3ZXIgYXJlYVxuICAgICAgICB2YXIgaW5kZW50ID0gMDtcbiAgICAgICAgaWYgKCF0aGlzLm5vaW5kZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxhbmd1YWdlID09IFwibmF0dXJhbFwiKSB7XG4gICAgICAgICAgICAgICAgaW5kZW50ID0gdGhpcy5zb2x1dGlvbkluZGVudCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmRlbnQgPSBNYXRoLm1heCgwLCB0aGlzLnNvbHV0aW9uSW5kZW50KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kZW50ID0gaW5kZW50O1xuICAgICAgICAvLyBGb3IgcmVuZGVyaW5nLCBwbGFjZSBpbiBhbiBvbnNjcmVlbiBwb3NpdGlvblxuICAgICAgICB2YXIgaXNIaWRkZW4gPSB0aGlzLm91dGVyRGl2Lm9mZnNldFBhcmVudCA9PSBudWxsO1xuICAgICAgICB2YXIgcmVwbGFjZUVsZW1lbnQ7XG4gICAgICAgIGlmIChpc0hpZGRlbikge1xuICAgICAgICAgICAgcmVwbGFjZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgJCh0aGlzLm91dGVyRGl2KS5yZXBsYWNlV2l0aChyZXBsYWNlRWxlbWVudCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMub3V0ZXJEaXYpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJldHRpZnlMYW5ndWFnZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgcHJldHR5UHJpbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGluZXNbaV0uaW5pdGlhbGl6ZVdpZHRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGF5b3V0IHRoZSBhcmVhc1xuICAgICAgICB2YXIgYXJlYVdpZHRoLCBhcmVhSGVpZ2h0O1xuICAgICAgICAvLyBFc3RhYmxpc2ggdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGRyb3BwYWJsZSBhcmVhc1xuICAgICAgICB2YXIgaXRlbSwgbWF4RnVuY3Rpb247XG4gICAgICAgIGFyZWFIZWlnaHQgPSA2O1xuICAgICAgICB2YXIgaGVpZ2h0X2FkZCA9IDA7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubnVtYmVyZWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBoZWlnaHRfYWRkID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubGFuZ3VhZ2UgPT0gXCJuYXR1cmFsXCIgfHxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5sYW5ndWFnZSA9PSBcIm1hdGhcIlxuICAgICAgICApIHtcbiAgICAgICAgICAgIGFyZWFXaWR0aCA9IDMwMDtcbiAgICAgICAgICAgIG1heEZ1bmN0aW9uID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLndpZHRoKGFyZWFXaWR0aCAtIDIyKTtcbiAgICAgICAgICAgICAgICB2YXIgYWRkaXRpb24gPSAzLjg7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ub3V0ZXJIZWlnaHQodHJ1ZSkgIT0gMzgpXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uID0gKDIuMSAqIChpdGVtLm91dGVySGVpZ2h0KHRydWUpIC0gMzgpKSAvIDIxO1xuICAgICAgICAgICAgICAgIGFyZWFIZWlnaHQgKz0gaXRlbS5vdXRlckhlaWdodCh0cnVlKSArIGhlaWdodF9hZGQgKiBhZGRpdGlvbjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcmVhV2lkdGggPSAzMDA7XG4gICAgICAgICAgICAvLyBUaGlzIG1heEZ1bmN0aW9uIGlzIGhvdyBQYXJzb25zIGFyZWFzIHdpZHRoIGFuZCBoZWlnaHQgd2VyZSBiZWluZyBjYWxjdWxhdGVkIHByZXZpb3VzbHksXG4gICAgICAgICAgICAvLyBidXQgYXQgc29tZSBwb2ludCAub3V0ZXJIZWlnaHQgYW5kIC5vdXRlcldpZHRoIHN0b3BwZWQgcmV0dXJuaW5nIGNvcnJlY3QgdmFsdWVzXG4gICAgICAgICAgICAvLyBjYXVzaW5nIGxpbmVzIHRvIG92ZXJmbG93IGFuZCBkaXNwbGF5IGF3a3dhcmRseS4gLSBWaW5jZW50IFFpdSAoU2VwdGVtYmVyIDIwMjApXG4gICAgICAgICAgICAvLyBtYXhGdW5jdGlvbiA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAvLyAgICAgdmFyIGFkZGl0aW9uID0gMy44O1xuICAgICAgICAgICAgLy8gICAgIGlmIChpdGVtLm91dGVySGVpZ2h0KHRydWUpICE9IDM4KSBhZGRpdGlvbiA9IDIuMTtcbiAgICAgICAgICAgIC8vICAgICBhcmVhSGVpZ2h0ICs9IGl0ZW0ub3V0ZXJIZWlnaHQodHJ1ZSkgKyBoZWlnaHRfYWRkICogYWRkaXRpb247XG4gICAgICAgICAgICAvLyAgICAgYXJlYVdpZHRoID0gTWF0aC5tYXgoYXJlYVdpZHRoLCBpdGVtLm91dGVyV2lkdGgodHJ1ZSkpO1xuICAgICAgICAgICAgLy8gfTtcblxuICAgICAgICAgICAgLy8gVGhpcyBuZXcgbWF4RnVuY3Rpb24gaXMgaG93IFBhcnNvbnMgYXJlYXMgd2lkdGggYW5kIGhlaWdodCBhcmUgYmVpbmcgY2FsY3VsYXRlZCBub3cgbWFudWFsbHkgLSBWaW5jZW50IFFpdSAoU2VwdGVtYmVyIDIwMjApXG4gICAgICAgICAgICBtYXhGdW5jdGlvbiA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFkZGl0aW9uID0gMy44O1xuXG4gICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHdoaWNoIGluZGV4IHdpdGhpbiB0aGUgUGFyc29ucyBibG9jayBKYXZhU2NyaXB0IG9iamVjdCBjb250YWlucyB0aGUgdGV4dCBsaW5lcyBhbmQgY29uc2VxdWVudGx5IHRoZSBwYXNzZWQgdGhyb3VnaCBkYXRhIC0gVmluY2VudCBRaXUgKFNlcHRlbWJlciAyMDIwKVxuICAgICAgICAgICAgICAgIHZhciBsaW5lc0luZGV4O1xuICAgICAgICAgICAgICAgIHZhciBsaW5lc0l0ZW0gPSBpdGVtWzBdLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lc0luZGV4IDwgaXRlbVswXS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzSW5kZXgrK1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtWzBdLmNoaWxkcmVuW2xpbmVzSW5kZXhdLmNsYXNzTmFtZS5pbmNsdWRlcyhcImxpbmVzXCIpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBjYW52YXMgYW5kIHNldCB0aGUgcGFzc2VkIHRocm91Z2ggZm9udFNpemUgYW5kIGZvbnRGYW1pbHkgaW4gb3JkZXIgdG8gbWVhc3VyZSB0ZXh0IHdpZHRoIC0gVmluY2VudCBRaXUgKFNlcHRlbWJlciAyMDIwKVxuICAgICAgICAgICAgICAgIHZhciBmb250U2l6ZSA9IGxpbmVzSXRlbVtsaW5lc0luZGV4XS5jaGlsZHJlblswXS5mb250U2l6ZTtcbiAgICAgICAgICAgICAgICB2YXIgZm9udEZhbWlseSA9IGxpbmVzSXRlbVtsaW5lc0luZGV4XS5jaGlsZHJlblswXS5mb250RmFtaWx5O1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcENhbnZhc0N0eCA9IHRlbXBDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgICAgIHRlbXBDYW52YXNDdHguZm9udCA9IGZvbnRTaXplICsgXCIgXCIgKyBmb250RmFtaWx5O1xuXG4gICAgICAgICAgICAgICAgLy8gSW5jcmVtZW50IFBhcnNvbnMgYXJlYSBoZWlnaHQgYmFzZWQgb24gbnVtYmVyIG9mIGxpbmVzIG9mIHRleHQgaW4gdGhlIGN1cnJlbnQgUGFyc29ucyBibG9jayAtIFZpbmNlbnQgUWl1IChTZXB0ZW1iZXIgMjAyMClcbiAgICAgICAgICAgICAgICB2YXIgc2luZ2xlSGVpZ2h0ID0gNDA7XG4gICAgICAgICAgICAgICAgdmFyIGFkZGl0aW9uYWxIZWlnaHQgPSAyMDtcbiAgICAgICAgICAgICAgICBhcmVhSGVpZ2h0ICs9IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGZ1dHVyZSBtb3JlIGFjY3VyYXRlIGhlaWdodCBkaXNwbGF5LCB0aGlzIGNhbGN1bGF0aW9uIHNob3VsZCBhbHNvIGJlIGNvbmRpdGlvbmFsbHkgYmFzZWQgb24gZm9udEZhbWlseVxuICAgICAgICAgICAgICAgICAgICBzaW5nbGVIZWlnaHQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGxpbmVzSXRlbVtsaW5lc0luZGV4XS5jaGlsZHJlbi5sZW5ndGggLSAxKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbEhlaWdodCArXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHRfYWRkICogYWRkaXRpb25cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBsb25nZXN0IHRleHQgbGluZSBpbiB0aGUgY3VycmVudCBQYXJzb25zIGJsb2NrIGFuZCBjYWxjdWxhdGUgaXRzIHdpZHRoIC0gVmluY2VudCBRaXUgKFNlcHRlbWJlciAyMDIwKVxuICAgICAgICAgICAgICAgIHZhciBpdGVtTGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBwaXhlbHNQZXJJbmRlbnQ7XG4gICAgICAgICAgICAgICAgdmFyIGluZGVudDtcbiAgICAgICAgICAgICAgICB2YXIgbWF4SW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgIHZhciBtYXhJbm5lckxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoTGltaXQgPSA0NzU7XG4gICAgICAgICAgICAgICAgdmFyIGxvbmdDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxpbmVzSXRlbVtsaW5lc0luZGV4XS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBwaXhlbHNQZXJJbmRlbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZXNJdGVtW2xpbmVzSW5kZXhdLmNoaWxkcmVuW2ldLnBpeGVsc1BlckluZGVudDtcbiAgICAgICAgICAgICAgICAgICAgaW5kZW50ID0gbGluZXNJdGVtW2xpbmVzSW5kZXhdLmNoaWxkcmVuW2ldLmluZGVudDtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUxlbmd0aCA9IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsc1BlckluZGVudCAqIGluZGVudCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcENhbnZhc0N0eC5tZWFzdXJlVGV4dChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXNJdGVtW2xpbmVzSW5kZXhdLmNoaWxkcmVuW2ldLmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgbG9uZ0NvdW50ICs9IE1hdGguZmxvb3IoaXRlbUxlbmd0aCAvICh3aWR0aExpbWl0IC0gMjkpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1MZW5ndGggPiBtYXhJbm5lckxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4SW5uZXJUZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lc0l0ZW1bbGluZXNJbmRleF0uY2hpbGRyZW5baV0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4SW5uZXJMZW5ndGggPSBpdGVtTGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyZWFXaWR0aCA9IE1hdGgubWF4KGFyZWFXaWR0aCwgbWF4SW5uZXJMZW5ndGggKyA0MCk7XG4gICAgICAgICAgICAgICAgLy8gU2V0IHdpZHRoIGxpbWl0IGFuZCBkZXRlcm1pbmUgaG93IG11Y2ggYWRkaXRpb25hbCBoZWlnaHQgaXMgbmVlZGVkIHRvIGFjY29tbW9kYXRlIHRoZSBmb3JjZWQgdGV4dCBvdmVyZmxvdyAtIFZpbmNlbnQgUWl1IChTZXB0ZW1iZXIgMjAyMClcbiAgICAgICAgICAgICAgICBpZiAoYXJlYVdpZHRoID4gd2lkdGhMaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBhcmVhV2lkdGggPSB3aWR0aExpbWl0O1xuICAgICAgICAgICAgICAgICAgICBhcmVhSGVpZ2h0ICs9IGxvbmdDb3VudCAqIGFkZGl0aW9uYWxIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtYXhGdW5jdGlvbigkKGJsb2Nrc1tpXS52aWV3KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcmVhV2lkdGggPSBhcmVhV2lkdGg7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubnVtYmVyZWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmFyZWFXaWR0aCArPSAyNTtcbiAgICAgICAgICAgIC8vYXJlYUhlaWdodCArPSAoYmxvY2tzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gKyA0MCB0byBhcmVhSGVpZ2h0IHRvIHByb3ZpZGUgc29tZSBhZGRpdGlvbmFsIGJ1ZmZlciBpbiBjYXNlIGFueSB0ZXh0IG92ZXJmbG93IHN0aWxsIGhhcHBlbnMgLSBWaW5jZW50IFFpdSAoU2VwdGVtYmVyIDIwMjApXG4gICAgICAgIHRoaXMuYXJlYUhlaWdodCA9IGFyZWFIZWlnaHQgKyA0MDtcbiAgICAgICAgJCh0aGlzLnNvdXJjZUFyZWEpLmNzcyh7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy5hcmVhV2lkdGggKyAyLFxuICAgICAgICAgICAgaGVpZ2h0OiBhcmVhSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzLmFuc3dlckFyZWEpLmNzcyh7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy5vcHRpb25zLnBpeGVsc1BlckluZGVudCAqIGluZGVudCArIHRoaXMuYXJlYVdpZHRoICsgMixcbiAgICAgICAgICAgIGhlaWdodDogYXJlYUhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbmRlbnQgPiAwICYmIGluZGVudCA8PSA0KSB7XG4gICAgICAgICAgICAkKHRoaXMuYW5zd2VyQXJlYSkuYWRkQ2xhc3MoXCJhbnN3ZXJcIiArIGluZGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMuYW5zd2VyQXJlYSkuYWRkQ2xhc3MoXCJhbnN3ZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwYWlyZWQgZGlzdHJhY3RvciBkZWNvcmF0aW9uXG4gICAgICAgIHZhciBiaW5zID0gW107XG4gICAgICAgIHZhciBiaW4gPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBsaW5lID0gdGhpcy5saW5lc1tpXTtcbiAgICAgICAgICAgIGlmIChsaW5lLmJsb2NrKCkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJpbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJpbnMucHVzaChiaW4pO1xuICAgICAgICAgICAgICAgICAgICBiaW4gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJpbi5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgIGlmICghbGluZS5ncm91cFdpdGhOZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGJpbnMucHVzaChiaW4pO1xuICAgICAgICAgICAgICAgICAgICBiaW4gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhaXJlZEJpbnMgPSBbXTtcbiAgICAgICAgdmFyIGxpbmVOdW1iZXJzID0gW107XG4gICAgICAgIHZhciBwYWlyZWREaXZzID0gW107XG4gICAgICAgIHZhciBqO1xuICAgICAgICBpZiAodGhpcy5wYWlyRGlzdHJhY3RvcnMgfHwgIXRoaXMub3B0aW9ucy5hZGFwdGl2ZSkge1xuICAgICAgICAgICAgZm9yIChpID0gYmlucy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgICAgICAgICAgICAgIGJpbiA9IGJpbnNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGJpblswXS5wYWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGFsbCBpbiBiaW4gdG8gbGluZSBudW1iZXJzXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGJpbi5sZW5ndGggLSAxOyBqID4gLTE7IGotLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcnMudW5zaGlmdChiaW5bal0uaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmVOdW1iZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBhbGwgaW4gYmluIHRvIGxpbmUgbnVtYmVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gYmluLmxlbmd0aCAtIDE7IGogPiAtMTsgai0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcnMudW5zaGlmdChiaW5bal0uaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFpcmVkQmlucy51bnNoaWZ0KGxpbmVOdW1iZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXJzID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcmVkQmlucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBwYWlyZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICQocGFpcmVkRGl2KS5hZGRDbGFzcyhcInBhaXJlZFwiKTtcbiAgICAgICAgICAgICAgICAkKHBhaXJlZERpdikuaHRtbChcbiAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBpZD0gJ3N0JyBzdHlsZSA9ICd2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBmb250LXdlaWdodDogYm9sZCc+b3J7PC9zcGFuPlwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBwYWlyZWREaXZzLnB1c2gocGFpcmVkRGl2KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZUFyZWEuYXBwZW5kQ2hpbGQocGFpcmVkRGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhaXJlZEJpbnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhaXJlZEJpbnMgPSBwYWlyZWRCaW5zO1xuICAgICAgICB0aGlzLnBhaXJlZERpdnMgPSBwYWlyZWREaXZzO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm51bWJlcmVkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5hZGRCbG9ja0xhYmVscyhzb3VyY2VCbG9ja3MuY29uY2F0KGFuc3dlckJsb2NrcykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdmlld1xuICAgICAgICB0aGlzLnN0YXRlID0gdW5kZWZpbmVkOyAvLyBuZWVkcyB0byBiZSBoZXJlIGZvciBsb2FkaW5nIGZyb20gc3RvcmFnZVxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgLy8gUHV0IGJhY2sgaW50byB0aGUgb2Zmc2NyZWVuIHBvc2l0aW9uXG4gICAgICAgIGlmIChpc0hpZGRlbikge1xuICAgICAgICAgICAgJChyZXBsYWNlRWxlbWVudCkucmVwbGFjZVdpdGgodGhpcy5vdXRlckRpdik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gTWFrZSBibG9ja3MgaW50ZXJhY3RpdmUgKGJvdGggZHJhZy1hbmQtZHJvcCBhbmQga2V5Ym9hcmQpXG4gICAgaW5pdGlhbGl6ZUludGVyYWN0aXZpdHkoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzW2ldLmluaXRpYWxpemVJbnRlcmFjdGl2aXR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXplVGFiSW5kZXgoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmxhbmd1YWdlID09IFwibmF0dXJhbFwiIHx8XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubGFuZ3VhZ2UgPT0gXCJtYXRoXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIE1hdGhKYXggIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlTWF0aEpheCh0aGlzLm91dGVyRGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBNYWtlIG9uZSBibG9jayBiZSBrZXlib2FyZCBhY2Nlc3NpYmxlXG4gICAgaW5pdGlhbGl6ZVRhYkluZGV4KCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYmxvY2sgPSB0aGlzLmJsb2Nrc1tpXTtcbiAgICAgICAgICAgIGlmIChibG9jay5lbmFibGVkKCkpIHtcbiAgICAgICAgICAgICAgICBibG9jay5tYWtlVGFiSW5kZXgoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09IFNFUlZFUiBDT01NVU5JQ0FUSU9OID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICAvLyBSZXR1cm4gdGhlIGFyZ3VtZW50IHRoYXQgaXMgbmV3ZXIgYmFzZWQgb24gdGhlIHRpbWVzdGFtcFxuICAgIG5ld2VyRGF0YShkYXRhQSwgZGF0YUIpIHtcbiAgICAgICAgdmFyIGRhdGVBID0gZGF0YUEudGltZXN0YW1wO1xuICAgICAgICB2YXIgZGF0ZUIgPSBkYXRhQi50aW1lc3RhbXA7XG4gICAgICAgIGlmIChkYXRlQSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhQjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZUIgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YUE7XG4gICAgICAgIH1cbiAgICAgICAgZGF0ZUEgPSB0aGlzLmRhdGVGcm9tVGltZXN0YW1wKGRhdGVBKTtcbiAgICAgICAgZGF0ZUIgPSB0aGlzLmRhdGVGcm9tVGltZXN0YW1wKGRhdGVCKTtcbiAgICAgICAgaWYgKGRhdGVBID4gZGF0ZUIpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhQTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhQjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBCYXNlZCBvbiB0aGUgZGF0YSwgbG9hZFxuICAgIGxvYWREYXRhKGRhdGEpIHtcbiAgICAgICAgdmFyIHNvdXJjZUhhc2ggPSBkYXRhLnNvdXJjZTtcbiAgICAgICAgaWYgKHNvdXJjZUhhc2ggPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBtYWludGFpbiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICAgICAgc291cmNlSGFzaCA9IGRhdGEudHJhc2g7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFuc3dlckhhc2ggPSBkYXRhLmFuc3dlcjtcbiAgICAgICAgdmFyIGFkYXB0aXZlSGFzaCA9IGRhdGEuYWRhcHRpdmU7XG4gICAgICAgIHZhciBvcHRpb25zO1xuICAgICAgICBpZiAoYWRhcHRpdmVIYXNoID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9uc0Zyb21IYXNoKGFkYXB0aXZlSGFzaCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMubm9pbmRlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5ub2luZGVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuY2hlY2tDb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQ291bnQgPSBvcHRpb25zLmNoZWNrQ291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzU29sdmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzU29sdmVkID0gb3B0aW9ucy5oYXNTb2x2ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgc291cmNlSGFzaCA9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGFuc3dlckhhc2ggPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBhbnN3ZXJIYXNoLmxlbmd0aCA9PSAxXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplQXJlYXModGhpcy5ibG9ja3NGcm9tU291cmNlKCksIFtdLCBvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUFyZWFzKFxuICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tzRnJvbUhhc2goc291cmNlSGFzaCksXG4gICAgICAgICAgICAgICAgdGhpcy5ibG9ja3NGcm9tSGFzaChhbnN3ZXJIYXNoKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5ncmFkZSA9IHRoaXMuZ3JhZGVyLmdyYWRlKCk7XG4gICAgICAgICAgICB0aGlzLmNvcnJlY3QgPSB0aGlzLmdyYWRlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0YXJ0IHRoZSBpbnRlcmZhY2VcbiAgICAgICAgaWYgKHRoaXMubmVlZHNSZWluaXRpYWxpemF0aW9uICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVJbnRlcmFjdGl2aXR5KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUmV0dXJuIHdoYXQgaXMgc3RvcmVkIGluIGxvY2FsIHN0b3JhZ2VcbiAgICBsb2NhbERhdGEoKSB7XG4gICAgICAgIHZhciBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdG9yYWdlSWQpO1xuICAgICAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGRhdGEuY2hhckF0KDApID09IFwie1wiKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgLy8gUnVuZXN0b25lQmFzZTogU2VudCB3aGVuIHRoZSBzZXJ2ZXIgaGFzIGRhdGFcbiAgICByZXN0b3JlQW5zd2VycyhzZXJ2ZXJEYXRhKSB7XG4gICAgICAgIHRoaXMubG9hZERhdGEoc2VydmVyRGF0YSk7XG4gICAgfVxuICAgIC8vIFJ1bmVzdG9uZUJhc2U6IExvYWQgd2hhdCBpcyBpbiBsb2NhbCBzdG9yYWdlXG4gICAgY2hlY2tMb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyYWRlcmFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZERhdGEodGhpcy5sb2NhbERhdGEoKSk7XG4gICAgfVxuICAgIC8vIFJ1bmVzdG9uZUJhc2U6IFNldCB0aGUgc3RhdGUgb2YgdGhlIHByb2JsZW0gaW4gbG9jYWwgc3RvcmFnZVxuICAgIHNldExvY2FsU3RvcmFnZShkYXRhKSB7XG4gICAgICAgIHZhciB0b1N0b3JlO1xuICAgICAgICBpZiAoZGF0YSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRvU3RvcmUgPSB7XG4gICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZUhhc2goKSxcbiAgICAgICAgICAgICAgICBhbnN3ZXI6IHRoaXMuYW5zd2VySGFzaCgpLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgYWRhcHRpdmVIYXNoID0gdGhpcy5hZGFwdGl2ZUhhc2goKTtcbiAgICAgICAgICAgIGlmIChhZGFwdGl2ZUhhc2gubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRvU3RvcmUuYWRhcHRpdmUgPSBhZGFwdGl2ZUhhc2g7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b1N0b3JlID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnN0b3JhZ2VJZCwgSlNPTi5zdHJpbmdpZnkodG9TdG9yZSkpO1xuICAgIH1cbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09IExPR0dJTkcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICAvLyBMb2cgdGhlIGludGVyYWN0aW9uIHdpdGggdGhlIHByb2JsZW0gdG8gdGhlIHNlcnZlcjpcbiAgICAvLyAgIHN0YXJ0OiB0aGUgdXNlciBzdGFydGVkIGludGVyYWN0aW5nIHdpdGggdGhpcyBwcm9ibGVtXG4gICAgLy8gICBtb3ZlOiB0aGUgdXNlciBtb3ZlZCBhIGJsb2NrIHRvIGEgbmV3IHBvc2l0aW9uXG4gICAgLy8gICByZXNldDogdGhlIHJlc2V0IGJ1dHRvbiB3YXMgcHJlc3NlZFxuICAgIC8vICAgcmVtb3ZlRGlzdHJhY3RvcjogXCJIZWxwIE1lXCIgcmVtb3ZlZCBhIGRpc3RyYWN0b3JcbiAgICAvLyAgIHJlbW92ZUluZGVudGF0aW9uOiBcIkhlbHAgTWVcIiByZW1vdmVkIGluZGVudGF0aW9uXG4gICAgLy8gICBjb21iaW5lQmxvY2tzOiBcIkhlbHAgTWVcIiBjb21iaW5lZCBibG9ja3NcbiAgICBsb2dNb3ZlKGFjdGl2aXR5KSB7XG4gICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgIGV2ZW50OiBcInBhcnNvbnNNb3ZlXCIsXG4gICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2aWQsXG4gICAgICAgICAgICBzdG9yYWdlaWQ6IHN1cGVyLmxvY2FsU3RvcmFnZUtleSgpLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgYWN0ID0gYWN0aXZpdHkgKyBcInxcIiArIHRoaXMuc291cmNlSGFzaCgpICsgXCJ8XCIgKyB0aGlzLmFuc3dlckhhc2goKTtcbiAgICAgICAgdmFyIGFkYXB0aXZlSGFzaCA9IHRoaXMuYWRhcHRpdmVIYXNoKCk7XG4gICAgICAgIGlmIChhZGFwdGl2ZUhhc2ggIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFjdCA9IGFjdCArIFwifFwiICsgYWRhcHRpdmVIYXNoO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LmFjdCA9IGFjdDtcbiAgICAgICAgdGhpcy5sb2dCb29rRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICAvLyBMb2cgdGhlIGFuc3dlciB0byB0aGUgcHJvYmxlbVxuICAgIC8vICAgY29ycmVjdDogVGhlIGFuc3dlciBnaXZlbiBtYXRjaGVzIHRoZSBzb2x1dGlvblxuICAgIC8vICAgaW5jb3JyZWN0KjogVGhlIGFuc3dlciBpcyB3cm9uZyBmb3IgdmFyaW91cyByZWFzb25zXG4gICAgYXN5bmMgbG9nQ3VycmVudEFuc3dlcihzaWQpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0ge1xuICAgICAgICAgICAgZXZlbnQ6IFwicGFyc29uc1wiLFxuICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgYW5zd2VySGFzaCA9IHRoaXMuYW5zd2VySGFzaCgpO1xuICAgICAgICBldmVudC5hbnN3ZXIgPSBhbnN3ZXJIYXNoO1xuICAgICAgICB2YXIgc291cmNlSGFzaCA9IHRoaXMuc291cmNlSGFzaCgpO1xuICAgICAgICBldmVudC5zb3VyY2UgPSBzb3VyY2VIYXNoO1xuICAgICAgICB2YXIgYWN0ID0gc291cmNlSGFzaCArIFwifFwiICsgYW5zd2VySGFzaDtcbiAgICAgICAgdmFyIGFkYXB0aXZlSGFzaCA9IHRoaXMuYWRhcHRpdmVIYXNoKCk7XG4gICAgICAgIGlmIChhZGFwdGl2ZUhhc2ggIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGV2ZW50LmFkYXB0aXZlID0gYWRhcHRpdmVIYXNoO1xuICAgICAgICAgICAgYWN0ID0gYWN0ICsgXCJ8XCIgKyBhZGFwdGl2ZUhhc2g7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ3JhZGUgPT0gXCJjb3JyZWN0XCIpIHtcbiAgICAgICAgICAgIGFjdCA9IFwiY29ycmVjdHxcIiArIGFjdDtcbiAgICAgICAgICAgIGV2ZW50LmNvcnJlY3QgPSBcIlRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdCA9IFwiaW5jb3JyZWN0fFwiICsgYWN0O1xuICAgICAgICAgICAgZXZlbnQuY29ycmVjdCA9IFwiRlwiO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LmFjdCA9IGFjdDtcblxuICAgICAgICBpZiAodHlwZW9mIHNpZCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZXZlbnQuc2lkID0gc2lkO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdGhpcy5sb2dCb29rRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09IEFDQ0VTU0lORyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICAvLyBBbnN3ZXIgdGhlIGhhc2ggb2YgdGhlIGFkYXB0aXZlIHN0YXRlXG4gICAgYWRhcHRpdmVIYXNoKCkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5hZGFwdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhhc2ggPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5ibG9ja3NbaV07XG4gICAgICAgICAgICBpZiAoIWJsb2NrLmVuYWJsZWQoKSkge1xuICAgICAgICAgICAgICAgIGhhc2gucHVzaChcImRcIiArIGJsb2NrLmxpbmVzWzBdLmluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ub2luZGVudCAhPT0gdGhpcy5vcHRpb25zLm5vaW5kZW50KSB7XG4gICAgICAgICAgICBoYXNoLnB1c2goXCJpXCIpO1xuICAgICAgICB9XG4gICAgICAgIGhhc2gucHVzaChcImNcIiArIHRoaXMuY2hlY2tDb3VudCk7XG4gICAgICAgIGlmICh0aGlzLmhhc1NvbHZlZCkge1xuICAgICAgICAgICAgaGFzaC5wdXNoKFwic1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFzaC5qb2luKFwiLVwiKTtcbiAgICB9XG4gICAgLy8gQ3JlYXRlIG9wdGlvbnMgZm9yIGNyZWF0aW5nIGJsb2NrcyBiYXNlZCBvbiBhIGhhc2hcbiAgICBvcHRpb25zRnJvbUhhc2goaGFzaCkge1xuICAgICAgICB2YXIgc3BsaXQ7XG4gICAgICAgIGlmIChoYXNoID09PSBcIi1cIiB8fCBoYXNoID09PSBcIlwiIHx8IGhhc2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNwbGl0ID0gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzcGxpdCA9IGhhc2guc3BsaXQoXCItXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcHRpb25zID0ge307XG4gICAgICAgIHZhciBkaXNhYmxlZCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwbGl0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gc3BsaXRbaV07XG4gICAgICAgICAgICBpZiAoa2V5WzBdID09IFwiaVwiKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5ub2luZGVudCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleVswXSA9PSBcImRcIikge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkLnB1c2gocGFyc2VJbnQoa2V5LnNsaWNlKDEpKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleVswXSA9PSBcInNcIikge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuaGFzU29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5WzBdID09IFwiY1wiKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5jaGVja0NvdW50ID0gcGFyc2VJbnQoa2V5LnNsaWNlKDEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlzYWJsZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgb3B0aW9ucy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbiAgICAvLyBBbnN3ZXIgdGhlIGhhc2ggb2YgdGhlIGFuc3dlciBhcmVhXG4gICAgYW5zd2VySGFzaCgpIHtcbiAgICAgICAgdmFyIGhhc2ggPSBbXTtcbiAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuYW5zd2VyQmxvY2tzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYXNoLnB1c2goYmxvY2tzW2ldLmhhc2goKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc2gubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCItXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaGFzaC5qb2luKFwiLVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBbnN3ZXIgdGhlIGhhc2ggb2YgdGhlIHNvdXJjZSBhcmVhXG4gICAgc291cmNlSGFzaCgpIHtcbiAgICAgICAgdmFyIGhhc2ggPSBbXTtcbiAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuc291cmNlQmxvY2tzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYXNoLnB1c2goYmxvY2tzW2ldLmhhc2goKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc2gubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCItXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaGFzaC5qb2luKFwiLVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJbnRlci1wcm9ibGVtIGFkYXB0aXZlIGNoYW5nZXNcbiAgICAvLyBCYXNlZCBvbiB0aGUgcmVjZW50QXR0ZW1wdHMsIHJlbW92ZSBkaXN0cmFjdG9ycywgYWRkIGluZGVudCwgY29tYmluZSBibG9ja3NcbiAgICBhZGFwdEJsb2NrcyhpbnB1dCkge1xuICAgICAgICB2YXIgYmxvY2tzID0gW107XG4gICAgICAgIHZhciBkaXN0cmFjdG9ycyA9IFtdO1xuICAgICAgICB2YXIgYmxvY2s7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJsb2NrID0gaW5wdXRbaV07XG4gICAgICAgICAgICBpZiAoYmxvY2suaXNEaXN0cmFjdG9yKCkpIHtcbiAgICAgICAgICAgICAgICBkaXN0cmFjdG9ycy5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVjZW50QXR0ZW1wdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICAgICAgICAgIHRoaXMuYWRhcHRpdmVJZCArIFwicmVjZW50QXR0ZW1wdHNcIlxuICAgICAgICApO1xuICAgICAgICBpZiAodGhpcy5yZWNlbnRBdHRlbXB0cyA9PSB1bmRlZmluZWQgfHwgdGhpcy5yZWNlbnRBdHRlbXB0cyA9PSBcIk5hTlwiKSB7XG4gICAgICAgICAgICB0aGlzLnJlY2VudEF0dGVtcHRzID0gMztcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGFzdGVzdEF0dGVtcHRDb3VudCA9IHRoaXMucmVjZW50QXR0ZW1wdHM7XG4gICAgICAgIHZhciBuQmxvY2tzID0gYmxvY2tzLmxlbmd0aDtcbiAgICAgICAgdmFyIG5CbG9ja3NUb0NvbWJpbmUgPSAwO1xuICAgICAgICB2YXIgbkRpc3RyYWN0b3JzID0gZGlzdHJhY3RvcnMubGVuZ3RoO1xuICAgICAgICB2YXIgblRvUmVtb3ZlID0gMDtcbiAgICAgICAgdGhpcy5wYWlyRGlzdHJhY3RvcnMgPSB0cnVlO1xuICAgICAgICB2YXIgZ2l2ZUluZGVudGF0aW9uID0gZmFsc2U7XG4gICAgICAgIGlmIChsYXN0ZXN0QXR0ZW1wdENvdW50IDwgMikge1xuICAgICAgICAgICAgLy8gMSBUcnlcbiAgICAgICAgICAgIHRoaXMucGFpckRpc3RyYWN0b3JzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxpbWl0RGlzdHJhY3RvcnMgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0ZXN0QXR0ZW1wdENvdW50IDwgNCkge1xuICAgICAgICAgICAgLy8gMi0zIFRyaWVzXG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nIHRoZXkgYXJlIGRvaW5nIG5vcm1hbFxuICAgICAgICAgICAgdGhpcy5wYWlyRGlzdHJhY3RvcnMgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3Rlc3RBdHRlbXB0Q291bnQgPCA2KSB7XG4gICAgICAgICAgICAvLyA0LTUgVHJpZXNcbiAgICAgICAgICAgIC8vIHBhaXIgZGlzdHJhY3RvcnNcbiAgICAgICAgICAgIHRoaXMucGFpckRpc3RyYWN0b3JzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0ZXN0QXR0ZW1wdENvdW50IDwgOCkge1xuICAgICAgICAgICAgLy8gNi03IFRyaWVzXG4gICAgICAgICAgICAvLyBSZW1vdmUgNTAlIG9mIGRpc3RyYWN0b3JzXG4gICAgICAgICAgICBuVG9SZW1vdmUgPSAwLjUgKiBuRGlzdHJhY3RvcnM7XG4gICAgICAgICAgICB0aGlzLnBhaXJEaXN0cmFjdG9ycyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyA4KyBUcmllc1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGFsbCBvZiBkaXN0cmFjdG9yc1xuICAgICAgICAgICAgblRvUmVtb3ZlID0gbkRpc3RyYWN0b3JzO1xuICAgICAgICAgICAgdGhpcy5wYWlyRGlzdHJhY3RvcnMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgIGVsc2UgaWYobGFzdGVzdEF0dGVtcHRDb3VudCA8IDEyKSB7IC8vMTAtMTFcbiAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgZGlzdHJhY3RvcnMgYW5kIGdpdmUgaW5kZW50YXRpb25cbiAgICAgICAgICAgIG5Ub1JlbW92ZSA9IG5EaXN0cmFjdG9ycztcbiAgICAgICAgICAgIGdpdmVJbmRlbnRhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBhaXJEaXN0cmFjdG9ycyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZihsYXN0ZXN0QXR0ZW1wdENvdW50IDwgMTQpIHsgLy8gMTItMTMgVHJpZXNcbiAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgb2YgZGlzdHJhY3RvcnNcbiAgICAgICAgICAgIC8vIGdpdmUgaW5kZW50YXRpb25cbiAgICAgICAgICAgIC8vIHJlZHVjZSBwcm9ibGVtIHRvIDMvNCBzaXplXG4gICAgICAgICAgICBnaXZlSW5kZW50YXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgblRvUmVtb3ZlID0gbkRpc3RyYWN0b3JzO1xuICAgICAgICAgICAgbkJsb2Nrc1RvQ29tYmluZSA9IC4yNSAqIG5CbG9ja3M7XG4gICAgICAgICAgICB0aGlzLnBhaXJEaXN0cmFjdG9ycyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7IC8vID49IDE0IFRyaWVzXG4gICAgICAgICAgICAvLyBSZW1vdmUgYWxsIG9mIGRpc3RyYWN0b3JzXG4gICAgICAgICAgICAvLyBnaXZlIGluZGVudGF0aW9uXG4gICAgICAgICAgICAvLyByZWR1Y2UgcHJvYmxlbSB0byAxLzIgc2l6ZVxuICAgICAgICAgICAgZ2l2ZUluZGVudGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIG5Ub1JlbW92ZSA9IG5EaXN0cmFjdG9ycztcbiAgICAgICAgICAgIG5CbG9ja3NUb0NvbWJpbmUgPSAuNSAqIG5CbG9ja3M7XG4gICAgICAgICAgICB0aGlzLnBhaXJEaXN0cmFjdG9ycyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgKi9cbiAgICAgICAgbkJsb2Nrc1RvQ29tYmluZSA9IE1hdGgubWluKG5CbG9ja3NUb0NvbWJpbmUsIG5CbG9ja3MgLSAzKTtcbiAgICAgICAgLy8gTmV2ZXIgY29tYmluZSBzbyB3aGVyZSB0aGVyZSBhcmUgbGVzcyB0aGFuIHRocmVlIGJsb2NrcyBsZWZ0XG4gICAgICAgIC8vIFJlbW92ZSBkaXN0cmFjdG9yc1xuICAgICAgICBkaXN0cmFjdG9ycyA9IHRoaXMuc2h1ZmZsZWQoZGlzdHJhY3RvcnMpO1xuICAgICAgICBkaXN0cmFjdG9ycyA9IGRpc3RyYWN0b3JzLnNsaWNlKDAsIG5Ub1JlbW92ZSk7XG4gICAgICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBibG9jayA9IGlucHV0W2ldO1xuICAgICAgICAgICAgaWYgKCFibG9jay5pc0Rpc3RyYWN0b3IoKSkge1xuICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJC5pbkFycmF5KGJsb2NrLCBkaXN0cmFjdG9ycykgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChibG9jayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy92YXIgb3V0cHV0ID0gaW5wdXQ7XG4gICAgICAgIGlmIChnaXZlSW5kZW50YXRpb24pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0cHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0W2ldLmFkZEluZGVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRlbnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5ub2luZGVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29tYmluZSBibG9ja3NcbiAgICAgICAgdmFyIHNvbHV0aW9uID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG91dHB1dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChvdXRwdXRbal0ubGluZXNbMF0uaW5kZXggPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICBzb2x1dGlvbi5wdXNoKG91dHB1dFtqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbkJsb2Nrc1RvQ29tYmluZTsgaSsrKSB7XG4gICAgICAgICAgICAvLyBjb21iaW5lIG9uZSBzZXQgb2YgYmxvY2tzXG4gICAgICAgICAgICB2YXIgYmVzdCA9IC0xMDtcbiAgICAgICAgICAgIHZhciBjb21iaW5lSW5kZXggPSAtMTA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgc29sdXRpb24ubGVuZ3RoIC0gMTsgaisrKSB7XG4gICAgICAgICAgICAgICAgYmxvY2sgPSBzb2x1dGlvbltqXTtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IHNvbHV0aW9uW2ogKyAxXTtcbiAgICAgICAgICAgICAgICB2YXIgcmF0aW5nID0gMTAgLSBibG9jay5saW5lcy5sZW5ndGggLSBuZXh0LmxpbmVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgYmxvY2tJbmRlbnQgPSBibG9jay5taW5pbXVtTGluZUluZGVudCgpO1xuICAgICAgICAgICAgICAgIHZhciBuZXh0SW5kZW50ID0gbmV4dC5taW5pbXVtTGluZUluZGVudCgpO1xuICAgICAgICAgICAgICAgIGlmIChibG9ja0luZGVudCA9PSBuZXh0SW5kZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJhdGluZyArPSAyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmxvY2tJbmRlbnQgPiBuZXh0SW5kZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJhdGluZyAtPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmxpbmVzW2Jsb2NrLmxpbmVzLmxlbmd0aCAtIDFdLmluZGVudCA9PVxuICAgICAgICAgICAgICAgICAgICBuZXh0LmxpbmVzWzBdLmluZGVudFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByYXRpbmcgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJhdGluZyA+PSBiZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGJlc3QgPSByYXRpbmc7XG4gICAgICAgICAgICAgICAgICAgIGNvbWJpbmVJbmRleCA9IGo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2sgPSBzb2x1dGlvbltjb21iaW5lSW5kZXhdO1xuICAgICAgICAgICAgbmV4dCA9IHNvbHV0aW9uW2NvbWJpbmVJbmRleCArIDFdO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5leHQubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBibG9jay5hZGRMaW5lKG5leHQubGluZXNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG5ld1NvbHV0aW9uID0gW107XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgc29sdXRpb24ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaiAhPT0gY29tYmluZUluZGV4ICsgMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdTb2x1dGlvbi5wdXNoKHNvbHV0aW9uW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc29sdXRpb24gPSBuZXdTb2x1dGlvbjtcbiAgICAgICAgfVxuICAgICAgICAvLyByZW9yZGVyXG4gICAgICAgIHZhciBjb21iaW5lZE91dHB1dCA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb3V0cHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgc29sdXRpb24ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3V0cHV0W2ldLmxpbmVzWzBdLmluZGV4ID09IHNvbHV0aW9uW2pdLmxpbmVzWzBdLmluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkT3V0cHV0LnB1c2goc29sdXRpb25bal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tYmluZWRPdXRwdXQ7XG4gICAgfVxuICAgIC8vIFJldHVybiBhbiBhcnJheSBvZiBjb2RlIGJsb2NrcyBiYXNlZCBvbiB3aGF0IGlzIHNwZWNpZmllZCBpbiB0aGUgcHJvYmxlbVxuICAgIGJsb2Nrc0Zyb21Tb3VyY2UoKSB7XG4gICAgICAgIHZhciB1bm9yZGVyZWRCbG9ja3MgPSBbXTtcbiAgICAgICAgdmFyIG9yaWdpbmFsQmxvY2tzID0gW107XG4gICAgICAgIHZhciBibG9ja3MgPSBbXTtcbiAgICAgICAgdmFyIGxpbmVzID0gW107XG4gICAgICAgIHZhciBibG9jaywgbGluZSwgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxpbmUgPSB0aGlzLmxpbmVzW2ldO1xuICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgIGlmICghbGluZS5ncm91cFdpdGhOZXh0KSB7XG4gICAgICAgICAgICAgICAgdW5vcmRlcmVkQmxvY2tzLnB1c2gobmV3IFBhcnNvbnNCbG9jayh0aGlzLCBsaW5lcykpO1xuICAgICAgICAgICAgICAgIGxpbmVzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb3JpZ2luYWxCbG9ja3MgPSB1bm9yZGVyZWRCbG9ja3M7XG4gICAgICAgIC8vIFRyaW0gdGhlIGRpc3RyYWN0b3JzXG4gICAgICAgIHZhciByZW1vdmVkQmxvY2tzID0gW107XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWF4ZGlzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgbWF4ZGlzdCA9IHRoaXMub3B0aW9ucy5tYXhkaXN0O1xuICAgICAgICAgICAgdmFyIGRpc3RyYWN0b3JzID0gW107XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdW5vcmRlcmVkQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYmxvY2sgPSB1bm9yZGVyZWRCbG9ja3NbaV07XG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrLmxpbmVzWzBdLmRpc3RyYWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdHJhY3RvcnMucHVzaChibG9jayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1heGRpc3QgPCBkaXN0cmFjdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBkaXN0cmFjdG9ycyA9IHRoaXMuc2h1ZmZsZWQoZGlzdHJhY3RvcnMpO1xuICAgICAgICAgICAgICAgIGRpc3RyYWN0b3JzID0gZGlzdHJhY3RvcnMuc2xpY2UoMCwgbWF4ZGlzdCk7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHVub3JkZXJlZEJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBibG9jayA9IHVub3JkZXJlZEJsb2Nrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrLmxpbmVzWzBdLmRpc3RyYWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkLmluQXJyYXkoYmxvY2ssIGRpc3RyYWN0b3JzKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkQmxvY2tzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja3MucHVzaChibG9jayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdW5vcmRlcmVkQmxvY2tzID0gYmxvY2tzO1xuICAgICAgICAgICAgICAgIGJsb2NrcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnksIHNldCB0aGUgcGFpckRpc3RyYWN0b3JzIHZhbHVlIGJlZm9yZSBibG9ja3MgZ2V0IHNodWZmbGVkIC0gV2lsbGlhbSBMaSAoQXVndXN0IDIwMjApXG4gICAgICAgIGlmICh0aGlzLnJlY2VudEF0dGVtcHRzIDwgMikge1xuICAgICAgICAgICAgLy8gMSBUcnlcbiAgICAgICAgICAgIHRoaXMucGFpckRpc3RyYWN0b3JzID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhaXJEaXN0cmFjdG9ycyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9yZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFNodWZmbGUsIHJlc3BlY3RpbmcgcGFpcmVkIGRpc3RyYWN0b3JzXG4gICAgICAgICAgICB2YXIgY2h1bmtzID0gW10sXG4gICAgICAgICAgICAgICAgY2h1bmsgPSBbXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB1bm9yZGVyZWRCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBibG9jayA9IHVub3JkZXJlZEJsb2Nrc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2subGluZXNbMF0ucGFpcmVkICYmIHRoaXMucGFpckRpc3RyYWN0b3JzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdpbGxpYW0gTGkgKEF1Z3VzdCAyMDIwKVxuICAgICAgICAgICAgICAgICAgICBjaHVuay5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaHVuayA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBjaHVuay5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgICAgICAgICAgY2h1bmtzLnB1c2goY2h1bmspO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNodW5rcyA9IHRoaXMuc2h1ZmZsZWQoY2h1bmtzKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaHVua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjaHVuayA9IGNodW5rc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoY2h1bmsubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBzaHVmZmxlIHBhaXJlZCBkaXN0cmFjdG9yc1xuICAgICAgICAgICAgICAgICAgICBjaHVuayA9IHRoaXMuc2h1ZmZsZWQoY2h1bmspO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY2h1bmsubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrcy5wdXNoKGNodW5rW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2Nrcy5wdXNoKGNodW5rWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBPcmRlciBhY2NvcmRpbmcgdG8gb3JkZXIgc3BlY2lmaWVkXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLm9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYmxvY2sgPSBvcmlnaW5hbEJsb2Nrc1t0aGlzLm9wdGlvbnMub3JkZXJbaV1dO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgYmxvY2sgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICAkLmluQXJyYXkodGhpcy5vcHRpb25zLm9yZGVyW2ldLCByZW1vdmVkQmxvY2tzKSA8IDBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhaXJEaXN0cmFjdG9ycyA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYWRhcHRpdmUpIHtcbiAgICAgICAgICAgIHRoaXMubGltaXREaXN0cmFjdG9ycyA9IHRydWU7XG4gICAgICAgICAgICBibG9ja3MgPSB0aGlzLmFkYXB0QmxvY2tzKGJsb2Nrcyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMubGltaXREaXN0cmFjdG9ycykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByZW1vdmVkQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub3JkZXIgPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBNYXRoLnJhbmRvbSgwLCBibG9ja3MubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJC5pbkFycmF5KHJlbW92ZWRCbG9ja3NbaV0sIHRoaXMub3B0aW9ucy5vcmRlcik7XG4gICAgICAgICAgICAgICAgICAgIGJsb2Nrcy5zcGxpY2UoaW5kZXgsIDAsIG9yaWdpbmFsQmxvY2tzW3JlbW92ZWRCbG9ja3NbaV1dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGFpckRpc3RyYWN0b3JzICYmIHRoaXMub3B0aW9ucy5vcmRlciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vbW92ZSBwYWlycyB0b2dldGhlclxuICAgICAgICAgICAgLy9HbyB0aHJvdWdoIGFycmF5IGxvb2tpbmcgZm9yIGRpdHJhY3RvciBhbmQgaXRzIHBhaXJcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBvcmlnaW5hbEJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxCbG9ja3NbaV0ubGluZXNbMF0ucGFpcmVkICYmXG4gICAgICAgICAgICAgICAgICAgICQuaW5BcnJheShvcmlnaW5hbEJsb2Nrc1tpXSwgYmxvY2tzKSA+PSAwXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBqID0gaTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCQuaW5BcnJheShvcmlnaW5hbEJsb2Nrc1tqIC0gMV0sIGJsb2NrcykgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSBwYWlyZWQgZGlzdHJhY3RvciBvciBzb2x1dGlvbiBibG9jayBpdCB3aWxsIGJlIG5leHQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhUbyA9ICQuaW5BcnJheShvcmlnaW5hbEJsb2Nrc1tqIC0gMV0sIGJsb2Nrcyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleEZyb20gPSAkLmluQXJyYXkob3JpZ2luYWxCbG9ja3NbaV0sIGJsb2Nrcyk7XG4gICAgICAgICAgICAgICAgICAgIGJsb2Nrcy5zcGxpY2UoaW5kZXhGcm9tLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tzLnNwbGljZShpbmRleFRvLCAwLCBvcmlnaW5hbEJsb2Nrc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibG9ja3M7XG4gICAgfVxuICAgIC8vIFJldHVybiBhIGNvZGVibG9jayB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBoYXNoXG4gICAgYmxvY2tGcm9tSGFzaChoYXNoKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGhhc2guc3BsaXQoXCJfXCIpO1xuICAgICAgICB2YXIgbGluZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGxpdC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGxpbmVzLnB1c2godGhpcy5saW5lc1tzcGxpdFtpXV0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBibG9jayA9IG5ldyBQYXJzb25zQmxvY2sodGhpcywgbGluZXMpO1xuICAgICAgICBpZiAodGhpcy5ub2luZGVudCkge1xuICAgICAgICAgICAgYmxvY2suaW5kZW50ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJsb2NrLmluZGVudCA9IE51bWJlcihzcGxpdFtzcGxpdC5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJsb2NrO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYW4gYXJyYXkgb2YgY29kZWJsb2NrcyB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBoYXNoXG4gICAgYmxvY2tzRnJvbUhhc2goaGFzaCkge1xuICAgICAgICB2YXIgc3BsaXQ7XG4gICAgICAgIGlmIChoYXNoID09PSBcIi1cIiB8fCBoYXNoID09PSBcIlwiIHx8IGhhc2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNwbGl0ID0gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzcGxpdCA9IGhhc2guc3BsaXQoXCItXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBibG9ja3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGxpdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYmxvY2tzLnB1c2godGhpcy5ibG9ja0Zyb21IYXNoKHNwbGl0W2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hZGFwdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRCbG9ja3MoYmxvY2tzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBibG9ja3M7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUmV0dXJuIGEgYmxvY2sgb2JqZWN0IGJ5IHRoZSBmdWxsIGlkIGluY2x1ZGluZyBpZCBwcmVmaXhcbiAgICBnZXRCbG9ja0J5SWQoaWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5ibG9ja3NbaV07XG4gICAgICAgICAgICBpZiAoYmxvY2sudmlldy5pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYXJyYXkgb2YgY29kZWJsb2NrcyB0aGF0IGFyZSB0aGUgc29sdXRpb25cbiAgICBzb2x1dGlvbkJsb2NrcygpIHtcbiAgICAgICAgdmFyIHNvbHV0aW9uQmxvY2tzID0gW107XG4gICAgICAgIHZhciBzb2x1dGlvbkxpbmVzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxpbmVzW2ldLmRpc3RyYWN0b3IpIHtcbiAgICAgICAgICAgICAgICBzb2x1dGlvbkxpbmVzLnB1c2godGhpcy5saW5lc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJsb2NrID0gc29sdXRpb25MaW5lc1swXS5ibG9jaygpO1xuICAgICAgICBzb2x1dGlvbkJsb2Nrcy5wdXNoKGJsb2NrKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzb2x1dGlvbkxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmV4dEJsb2NrID0gc29sdXRpb25MaW5lc1tpXS5ibG9jaygpO1xuICAgICAgICAgICAgaWYgKGJsb2NrICE9PSBuZXh0QmxvY2spIHtcbiAgICAgICAgICAgICAgICBibG9jayA9IG5leHRCbG9jaztcbiAgICAgICAgICAgICAgICBzb2x1dGlvbkJsb2Nrcy5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc29sdXRpb25CbG9ja3M7XG4gICAgfVxuICAgIC8vIFJldHVybiBhcnJheSBvZiBjb2RlYmxvY2tzIGJhc2VkIG9uIHdoYXQgaXMgaW4gdGhlIHNvdXJjZSBmaWVsZFxuICAgIHNvdXJjZUJsb2NrcygpIHtcbiAgICAgICAgdmFyIHNvdXJjZUJsb2NrcyA9IFtdO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnNvdXJjZUFyZWEuY2hpbGROb2RlcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoJChjaGlsZCkuaGFzQ2xhc3MoXCJibG9ja1wiKSkge1xuICAgICAgICAgICAgICAgIHNvdXJjZUJsb2Nrcy5wdXNoKHRoaXMuZ2V0QmxvY2tCeUlkKGNoaWxkLmlkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvdXJjZUJsb2NrcztcbiAgICB9XG4gICAgLy8gUmV0dXJuIGFycmF5IG9mIGVuYWJsZWQgY29kZWJsb2NrcyBiYXNlZCBvbiB3aGF0IGlzIGluIHRoZSBzb3VyY2UgZmllbGRcbiAgICBlbmFibGVkU291cmNlQmxvY2tzKCkge1xuICAgICAgICB2YXIgYWxsID0gdGhpcy5zb3VyY2VCbG9ja3MoKTtcbiAgICAgICAgdmFyIGVuYWJsZWQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBibG9jayA9IGFsbFtpXTtcbiAgICAgICAgICAgIGlmIChibG9jay5lbmFibGVkKCkpIHtcbiAgICAgICAgICAgICAgICBlbmFibGVkLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbmFibGVkO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYXJyYXkgb2YgY29kZWJsb2NrcyBiYXNlZCBvbiB3aGF0IGlzIGluIHRoZSBhbnN3ZXIgZmllbGRcbiAgICBhbnN3ZXJCbG9ja3MoKSB7XG4gICAgICAgIHZhciBhbnN3ZXJCbG9ja3MgPSBbXTtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5hbnN3ZXJBcmVhLmNoaWxkTm9kZXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBibG9jayA9IHRoaXMuZ2V0QmxvY2tCeUlkKGNoaWxkcmVuW2ldLmlkKTtcbiAgICAgICAgICAgIGlmIChibG9jayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYW5zd2VyQmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbnN3ZXJCbG9ja3M7XG4gICAgfVxuICAgIC8vIFJldHVybiBhcnJheSBvZiBlbmFibGVkIGNvZGVibG9ja3MgYmFzZWQgb24gd2hhdCBpcyBpbiB0aGUgYW5zd2VyIGZpZWxkXG4gICAgZW5hYmxlZEFuc3dlckJsb2NrcygpIHtcbiAgICAgICAgdmFyIGFsbCA9IHRoaXMuYW5zd2VyQmxvY2tzKCk7XG4gICAgICAgIHZhciBlbmFibGVkID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYmxvY2sgPSBhbGxbaV07XG4gICAgICAgICAgICBpZiAoYmxvY2suZW5hYmxlZCgpKSB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZC5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW5hYmxlZDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGFycmF5IG9mIGNvZGVsaW5lcyBiYXNlZCBvbiB3aGF0IGlzIGluIHRoZSBhbnN3ZXIgZmllbGRcbiAgICBhbnN3ZXJMaW5lcygpIHtcbiAgICAgICAgdmFyIGFuc3dlckxpbmVzID0gW107XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmFuc3dlckJsb2NrcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gYmxvY2tzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBibG9jay5saW5lcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGFuc3dlckxpbmVzLnB1c2goYmxvY2subGluZXNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbnN3ZXJMaW5lcztcbiAgICB9XG4gICAgLy8gR28gdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCB5b3UgZ2V0IHRvIGEgYmxvY2s7IHJldHVybiB0aGF0IGJsb2NrIGVsZW1lbnRcbiAgICBnZXRCbG9ja0ZvcihlbGVtZW50KSB7XG4gICAgICAgIHZhciBjaGVjayA9IGVsZW1lbnQ7XG4gICAgICAgIHdoaWxlICghY2hlY2suY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmxvY2tcIikpIHtcbiAgICAgICAgICAgIGNoZWNrID0gY2hlY2sucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgfVxuICAgIC8vIFJldHVybiB0aGUgbWF4aW11bSBpbmRlbnQgZm9yIHRoZSBzb2x1dGlvblxuICAgIHNvbHV0aW9uSW5kZW50KCkge1xuICAgICAgICB2YXIgaW5kZW50ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5ibG9ja3NbaV07XG4gICAgICAgICAgICBpbmRlbnQgPSBNYXRoLm1heChpbmRlbnQsIGJsb2NrLnNvbHV0aW9uSW5kZW50KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRlbnQ7XG4gICAgfVxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PT0gQUNUSU9OID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgIC8vIFRoZSBcIkNoZWNrIE1lXCIgYnV0dG9uIHdhcyBwcmVzc2VkLlxuICAgIGNoZWNrQ3VycmVudEFuc3dlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1NvbHZlZCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0NvdW50Kys7XG4gICAgICAgICAgICB0aGlzLmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmFkYXB0aXZlSWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGl2ZUlkID0gdGhpcy5zdG9yYWdlSWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUT0RPIC0gcmVuZGVyaW5nIGZlZWRiYWNrIGlzIGJ1cmllZCBpbiB0aGUgZ3JhZGVyLmdyYWRlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIHRvIGRpc2FibGUgZmVlZGJhY2sgc2V0IHRoaXMuZ3JhZGVyLnNob3dmZWVkYmFjayBib29sZWFuXG4gICAgICAgICAgICB0aGlzLmdyYWRlci5zaG93ZmVlZGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZ3JhZGUgPSB0aGlzLmdyYWRlci5ncmFkZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JhZGUgPT0gXCJjb3JyZWN0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1NvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAkKHRoaXMuY2hlY2tCdXR0b24pLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmFkYXB0aXZlSWQgKyBcIlNvbHZlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY2VudEF0dGVtcHRzID0gdGhpcy5jaGVja0NvdW50O1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkYXB0aXZlSWQgKyBcInJlY2VudEF0dGVtcHRzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjZW50QXR0ZW1wdHNcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGl2ZUlkICsgdGhpcy5kaXZpZCArIFwiQ291bnRcIixcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ291bnRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgLy8gaWYgbm90IHNvbHZlZCBhbmQgbm90IHRvbyBzaG9ydCB0aGVuIGNoZWNrIGlmIHNob3VsZCBwcm92aWRlIGhlbHBcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNTb2x2ZWQgJiYgdGhpcy5ncmFkZSAhPT0gXCJpbmNvcnJlY3RUb29TaG9ydFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FuSGVscCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGNvdW50IHRoZSBhdHRlbXB0IGlmIHRoZSBhbnN3ZXIgaXMgZGlmZmVyZW50ICh0byBwcmV2ZW50IGdhbWluZylcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFuc3dlckhhc2ggPSB0aGlzLmFuc3dlckhhc2goKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdEFuc3dlckhhc2ggIT09IGFuc3dlckhhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubnVtRGlzdGluY3QrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEFuc3dlckhhc2ggPSBhbnN3ZXJIYXNoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRpbWUgdG8gb2ZmZXIgaGVscFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5udW1EaXN0aW5jdCA9PSAzICYmICF0aGlzLmdvdEhlbHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCQuaTE4bihcIm1zZ19wYXJzb25faGVscF9pbmZvXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfSAvLyBlbmQgaWZcbiAgICAgICAgICAgICAgICB9IC8vIGVuZCBpZiBjYW4gaGVscFxuICAgICAgICAgICAgfSAvLyBlbmQgaWYgbm90IHNvbHZlZFxuICAgICAgICB9IC8vIGVuZCBvdXRlciBpZiBub3Qgc29sdmVkXG4gICAgfVxuXG4gICAgcmVuZGVyRmVlZGJhY2soKSB7XG4gICAgICAgIHRoaXMuZ3JhZGVyLnNob3dmZWVkYmFjayA9IHRydWU7XG4gICAgICAgIHRoaXMuZ3JhZGUgPSB0aGlzLmdyYWRlci5ncmFkZXJTdGF0ZTtcbiAgICAgICAgdmFyIGZlZWRiYWNrQXJlYTtcbiAgICAgICAgdmFyIGFuc3dlckFyZWEgPSAkKHRoaXMuYW5zd2VyQXJlYSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvd2ZlZWRiYWNrID09PSB0cnVlKSB7XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEgPSAkKHRoaXMubWVzc2FnZURpdik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEgPSAkKFwiI2RvZXNub3RleGlzdFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdyYWRlID09PSBcImNvcnJlY3RcIikge1xuICAgICAgICAgICAgYW5zd2VyQXJlYS5hZGRDbGFzcyhcImNvcnJlY3RcIik7XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEuZmFkZUluKDEwMCk7XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtaW5mb1wiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrQ291bnQgPiAxKSB7XG4gICAgICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmh0bWwoXG4gICAgICAgICAgICAgICAgICAgICQuaTE4bihcIm1zZ19wYXJzb25fY29ycmVjdFwiLCB0aGlzLmNoZWNrQ291bnQpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmh0bWwoJC5pMThuKFwibXNnX3BhcnNvbl9jb3JyZWN0X2ZpcnN0X3RyeVwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ncmFkZSA9PT0gXCJpbmNvcnJlY3RUb29TaG9ydFwiKSB7XG4gICAgICAgICAgICAvLyB0b28gbGl0dGxlIGNvZGVcbiAgICAgICAgICAgIGFuc3dlckFyZWEuYWRkQ2xhc3MoXCJpbmNvcnJlY3RcIik7XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEuZmFkZUluKDUwMCk7XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIpO1xuICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmh0bWwoJC5pMThuKFwibXNnX3BhcnNvbl90b29fc2hvcnRcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ3JhZGUgPT09IFwiaW5jb3JyZWN0SW5kZW50XCIpIHtcbiAgICAgICAgICAgIHZhciBpbmNvcnJlY3RCbG9ja3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmFkZXIuaW5kZW50TGVmdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJsb2NrID0gdGhpcy5ncmFkZXIuaW5kZW50TGVmdFtpXS5ibG9jaygpO1xuICAgICAgICAgICAgICAgIGlmIChpbmNvcnJlY3RCbG9ja3MuaW5kZXhPZihibG9jaykgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jb3JyZWN0QmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmFkZENsYXNzKFwiaW5kZW50TGVmdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ3JhZGVyLmluZGVudFJpZ2h0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYmxvY2sgPSB0aGlzLmdyYWRlci5pbmRlbnRSaWdodFtpXS5ibG9jaygpO1xuICAgICAgICAgICAgICAgIGlmIChpbmNvcnJlY3RCbG9ja3MuaW5kZXhPZihibG9jaykgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jb3JyZWN0QmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmFkZENsYXNzKFwiaW5kZW50UmlnaHRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmZhZGVJbig1MDApO1xuICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiKTtcbiAgICAgICAgICAgIGlmIChpbmNvcnJlY3RCbG9ja3MubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICBmZWVkYmFja0FyZWEuaHRtbCgkLmkxOG4oXCJtc2dfcGFyc29uX3dyb25nX2luZGVudFwiKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZlZWRiYWNrQXJlYS5odG1sKCQuaTE4bihcIm1zZ19wYXJzb25fd3JvbmdfaW5kZW50c1wiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ncmFkZSA9PT0gXCJpbmNvcnJlY3RNb3ZlQmxvY2tzXCIpIHtcbiAgICAgICAgICAgIHZhciBhbnN3ZXJCbG9ja3MgPSB0aGlzLmFuc3dlckJsb2NrcygpO1xuICAgICAgICAgICAgdmFyIGluU29sdXRpb24gPSBbXTtcbiAgICAgICAgICAgIHZhciBpblNvbHV0aW9uSW5kZXhlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIG5vdEluU29sdXRpb24gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5zd2VyQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gYW5zd2VyQmxvY2tzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuc29sdXRpb24uaW5kZXhPZihibG9jay5saW5lc1swXSk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vdEluU29sdXRpb24ucHVzaChibG9jayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5Tb2x1dGlvbi5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgICAgICAgICAgaW5Tb2x1dGlvbkluZGV4ZXMucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxpc0luZGV4ZXMgPSB0aGlzLmdyYWRlci5pbnZlcnNlTElTSW5kaWNlcyhpblNvbHV0aW9uSW5kZXhlcyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc0luZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBub3RJblNvbHV0aW9uLnB1c2goaW5Tb2x1dGlvbltsaXNJbmRleGVzW2ldXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbnN3ZXJBcmVhLmFkZENsYXNzKFwiaW5jb3JyZWN0XCIpO1xuICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmZhZGVJbig1MDApO1xuICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dmZWVkYmFjayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm90SW5Tb2x1dGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAkKG5vdEluU29sdXRpb25baV0udmlldykuYWRkQ2xhc3MoXCJpbmNvcnJlY3RQb3NpdGlvblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEuaHRtbCgkLmkxOG4oXCJtc2dfcGFyc29uX3dyb25nX29yZGVyXCIpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PT0gQURBUFRJVkUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgIC8vIEluaXRpYWxpemUgdGhpcyBwcm9ibGVtIGFzIGFkYXB0aXZlXG4gICAgLy8gICAgaGVscENvdW50ID0gbnVtYmVyIG9mIGNoZWNrcyBiZWZvcmUgaGVscCBpcyBnaXZlbiAobmVnYXRpdmUpXG4gICAgLy8gICAgY2FuSGVscCA9IGJvb2xlYW4gYXMgdG8gd2hldGhlciBoZWxwIGNhbiBiZSBwcm92aWRlZFxuICAgIC8vICAgIGNoZWNrQ291bnQgPSBob3cgbWFueSB0aW1lcyBpdCBoYXMgYmVlbiBjaGVja2VkIGJlZm9yZSBjb3JyZWN0XG4gICAgLy8gICAgdXNlclJhdGluZyA9IDAuLjEwMCBob3cgZ29vZCB0aGUgcGVyc29uIGlzIGF0IHNvbHZpbmcgcHJvYmxlbXNcbiAgICBpbml0aWFsaXplQWRhcHRpdmUoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRpdmVJZCA9IHN1cGVyLmxvY2FsU3RvcmFnZUtleSgpO1xuICAgICAgICB0aGlzLmNhbkhlbHAgPSB0cnVlO1xuICAgICAgICAvL3RoaXMuaGVscENvdW50ID0gLTM7IC8vIE51bWJlciBvZiBjaGVja3MgYmVmb3JlIGhlbHAgaXMgb2ZmZXJlZFxuICAgICAgICB0aGlzLmNoZWNrQ291bnQgPSAwO1xuICAgICAgICB0aGlzLm51bURpc3RpbmN0ID0gMDsgLy8gbnVtYmVyIG9mIGRpc3RpbmN0IHNvbHV0aW9uIGF0dGVtcHRzIChkaWZmZXJlbnQgZnJvbSBwcmV2aW91cylcbiAgICAgICAgdGhpcy5nb3RIZWxwID0gZmFsc2U7XG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIHVzZXJSYXRpbmdcbiAgICAgICAgdmFyIHN0b3JhZ2VQcm9ibGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5hZGFwdGl2ZUlkICsgXCJQcm9ibGVtXCIpO1xuICAgICAgICBpZiAoc3RvcmFnZVByb2JsZW0gPT0gdGhpcy5kaXZpZCkge1xuICAgICAgICAgICAgLy8gQWxyZWFkeSBpbiB0aGlzIHByb2JsZW1cbiAgICAgICAgICAgIHRoaXMuY2hlY2tDb3VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRpdmVJZCArIHRoaXMuZGl2aWQgKyBcIkNvdW50XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja0NvdW50ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb3VudCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB2YXIgY291bnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICAgICAgICAgIHRoaXMuYWRhcHRpdmVJZCArIHRoaXMuZGl2aWQgKyBcIkNvdW50XCJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGNvdW50ID09IHVuZGVmaW5lZCB8fCBjb3VudCA9PSBcIk5hTlwiKSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja0NvdW50ID0gY291bnQ7XG4gICAgICAgIHRoaXMucmVjZW50QXR0ZW1wdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICAgICAgICAgIHRoaXMuYWRhcHRpdmVJZCArIFwicmVjZW50QXR0ZW1wdHNcIlxuICAgICAgICApO1xuICAgICAgICBpZiAodGhpcy5yZWNlbnRBdHRlbXB0cyA9PSB1bmRlZmluZWQgfHwgdGhpcy5yZWNlbnRBdHRlbXB0cyA9PSBcIk5hTlwiKSB7XG4gICAgICAgICAgICB0aGlzLnJlY2VudEF0dGVtcHRzID0gMztcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgIHRoaXMuYWRhcHRpdmVJZCArIFwicmVjZW50QXR0ZW1wdHNcIixcbiAgICAgICAgICAgIHRoaXMucmVjZW50QXR0ZW1wdHNcbiAgICAgICAgKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5hZGFwdGl2ZUlkICsgXCJQcm9ibGVtXCIsIHRoaXMuZGl2aWQpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgIHRoaXMuYWRhcHRpdmVJZCArIHRoaXMuZGl2aWQgKyBcIkNvdW50XCIsXG4gICAgICAgICAgICB0aGlzLmNoZWNrQ291bnRcbiAgICAgICAgKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5hZGFwdGl2ZUlkICsgXCJTb2x2ZWRcIiwgZmFsc2UpO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYSBib29sZWFuIG9mIHdoZXRoZXIgdGhlIHVzZXIgbXVzdCBkZWFsIHdpdGggaW5kZW50YXRpb25cbiAgICB1c2VzSW5kZW50YXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLm5vaW5kZW50IHx8IHRoaXMuc29sdXRpb25JbmRlbnQoKSA9PSAwKSB7XG4gICAgICAgICAgICAvLyB3YXMgJCh0aGlzLmFuc3dlckFyZWEpLmhhc0NsYXNzKFwiYW5zd2VyXCIpIC0gYmplIGNoYW5nZWRcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEZpbmQgYSBkaXN0cmFjdG9yIHRvIHJlbW92ZSB0byBtYWtlIHRoZSBwcm9ibGVtIGVhc2llclxuICAgIC8vICAqIHRyeSBmaXJzdCBpbiB0aGUgYW5zd2VyIGFyZWFcbiAgICAvLyAgKiBpZiBub3QsIHRyeSB0aGUgc291cmNlIGFyZWFcbiAgICAvLyAgKiBpZiBub3QsIHJldHVybiB1bmRlZmluZWRcbiAgICBkaXN0cmFjdG9yVG9SZW1vdmUoKSB7XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmVuYWJsZWRBbnN3ZXJCbG9ja3MoKTtcbiAgICAgICAgdmFyIGJsb2NrO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYmxvY2sgPSBibG9ja3NbaV07XG4gICAgICAgICAgICBpZiAoYmxvY2suaXNEaXN0cmFjdG9yKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYmxvY2tzID0gdGhpcy5lbmFibGVkU291cmNlQmxvY2tzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBibG9jayA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgIGlmIChibG9jay5pc0Rpc3RyYWN0b3IoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gdGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBleGlzdFxuICAgIG51bWJlck9mQmxvY2tzKGZJbmNsdWRlRGlzdHJhY3RvcnMgPSB0cnVlKSB7XG4gICAgICAgIHZhciBudW1iZXJPZkJsb2NrcyA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2Nrc1tpXS5lbmFibGVkKCkgJiZcbiAgICAgICAgICAgICAgICAoZkluY2x1ZGVEaXN0cmFjdG9ycyB8fCAhdGhpcy5ibG9ja3NbaV0uaXNEaXN0cmFjdG9yKCkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBudW1iZXJPZkJsb2NrcyArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW1iZXJPZkJsb2NrcztcbiAgICB9XG4gICAgLy8gUmVtb3ZlIHRoaXMgZGlzdHJhY3RvcnMgdG8gbWFrZSB0aGUgcHJvYmxlbSBlYXNpZXJcbiAgICByZW1vdmVEaXN0cmFjdG9yKGJsb2NrKSB7XG4gICAgICAgIC8vIEFsZXJ0IHRoZSB1c2VyIHRvIHdoYXQgaXMgaGFwcGVuaW5nXG4gICAgICAgIHZhciBmZWVkYmFja0FyZWEgPSAkKHRoaXMubWVzc2FnZURpdik7XG4gICAgICAgIGZlZWRiYWNrQXJlYS5mYWRlSW4oNTAwKTtcbiAgICAgICAgZmVlZGJhY2tBcmVhLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LWluZm9cIik7XG4gICAgICAgIGZlZWRiYWNrQXJlYS5odG1sKCQuaTE4bihcIm1zZ19wYXJzb25fbm90X3NvbHV0aW9uXCIpKTtcbiAgICAgICAgLy8gU3RvcCBhYmlsaXR5IHRvIHNlbGVjdFxuICAgICAgICBpZiAoYmxvY2subGluZXNbMF0uZGlzdHJhY3RIZWxwdGV4dCkge1xuICAgICAgICAgICAgYmxvY2sudmlldy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZ2dsZVwiLCBcInRvb2x0aXBcIik7XG4gICAgICAgICAgICBibG9jay52aWV3LnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIGJsb2NrLmxpbmVzWzBdLmRpc3RyYWN0SGVscHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGJsb2NrLmRpc2FibGUoKTtcbiAgICAgICAgLy8gSWYgaW4gYW5zd2VyIGFyZWEsIG1vdmUgdG8gc291cmNlIGFyZWFcbiAgICAgICAgaWYgKCFibG9jay5pblNvdXJjZUFyZWEoKSkge1xuICAgICAgICAgICAgdmFyIHNvdXJjZVJlY3QgPSB0aGlzLnNvdXJjZUFyZWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB2YXIgc3RhcnRYID0gYmxvY2sucGFnZVhDZW50ZXIoKSAtIDE7XG4gICAgICAgICAgICB2YXIgc3RhcnRZID0gYmxvY2sucGFnZVlDZW50ZXIoKTtcbiAgICAgICAgICAgIHZhciBlbmRYID1cbiAgICAgICAgICAgICAgICBzb3VyY2VSZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgKyBzb3VyY2VSZWN0LndpZHRoIC8gMjtcbiAgICAgICAgICAgIHZhciBlbmRZID1cbiAgICAgICAgICAgICAgICBzb3VyY2VSZWN0LnRvcCArXG4gICAgICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ICtcbiAgICAgICAgICAgICAgICBibG9jay52aWV3LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAvIDI7XG4gICAgICAgICAgICB2YXIgc2xpZGVVbmRlckJsb2NrID0gYmxvY2suc2xpZGVVbmRlckJsb2NrKCk7XG4gICAgICAgICAgICBpZiAoc2xpZGVVbmRlckJsb2NrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBlbmRZICs9XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlVW5kZXJCbG9jay52aWV3LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArIDIwO1xuICAgICAgICAgICAgICAgIGVuZFkgKz0gcGFyc2VJbnQoJChzbGlkZVVuZGVyQmxvY2sudmlldykuY3NzKFwidG9wXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICQoYmxvY2sudmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIiMwMDBcIixcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjZmZmXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoYmxvY2sudmlldykuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEuMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnNxcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5wb3coZW5kWSAtIHN0YXJ0WSwgMikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdyhlbmRYIC0gc3RhcnRYLCAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNCArXG4gICAgICAgICAgICAgICAgICAgICAgICA1MDAsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmluZyA9IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZpbmdYID0gc3RhcnRYO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZpbmdZID0gc3RhcnRZO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiBmdW5jdGlvbiAoYSwgcCwgYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZpbmdYID0gc3RhcnRYICogKDEgLSBwKSArIGVuZFggKiBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZpbmdZID0gc3RhcnRZICogKDEgLSBwKSArIGVuZFkgKiBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhhdC5tb3Zpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhhdC5tb3ZpbmdYO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoYXQubW92aW5nWTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlVmlldygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChibG9jay52aWV3KS5hbmltYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC4zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIiNkM2QzZDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI2VmZWZlZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoYmxvY2sudmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoYmxvY2sudmlldykuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjMDAwXCIsXG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjMsXG4gICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiI2QzZDNkM1wiLFxuICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjZWZlZmVmXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChibG9jay52aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEdpdmUgdGhlIHVzZXIgdGhlIGluZGVudGF0aW9uXG4gICAgcmVtb3ZlSW5kZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEFsZXJ0IHRoZSB1c2VyIHRvIHdoYXQgaXMgaGFwcGVuaW5nXG4gICAgICAgIHZhciBmZWVkYmFja0FyZWEgPSAkKHRoaXMubWVzc2FnZURpdik7XG4gICAgICAgIGZlZWRiYWNrQXJlYS5mYWRlSW4oNTAwKTtcbiAgICAgICAgZmVlZGJhY2tBcmVhLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LWluZm9cIik7XG4gICAgICAgIGZlZWRiYWNrQXJlYS5odG1sKCQuaTE4bihcIm1zZ19wYXJzb25fcHJvdmlkZWRfaW5kZW50XCIpKTtcbiAgICAgICAgLy8gTW92ZSBhbmQgcmVzaXplIGJsb2Nrc1xuICAgICAgICB2YXIgYmxvY2tXaWR0aCA9IDIwMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbGluZSA9IHRoaXMubGluZXNbaV07XG4gICAgICAgICAgICB2YXIgZXhwYW5kZWRXaWR0aCA9XG4gICAgICAgICAgICAgICAgbGluZS53aWR0aCArIGxpbmUuaW5kZW50ICogdGhpcy5vcHRpb25zLnBpeGVsc1BlckluZGVudCArIDMwO1xuICAgICAgICAgICAgYmxvY2tXaWR0aCA9IE1hdGgubWF4KGJsb2NrV2lkdGgsIGV4cGFuZGVkV2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubnVtYmVyZWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBibG9ja1dpZHRoICs9IDI1O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXJlYVdpZHRoID0gYmxvY2tXaWR0aCArIDIyO1xuICAgICAgICB2YXIgYmxvY2ssIGluZGVudDtcbiAgICAgICAgdmFyIHNvdXJjZUJsb2NrcyA9IHRoaXMuc291cmNlQmxvY2tzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBibG9jayA9IHNvdXJjZUJsb2Nrc1tpXTtcbiAgICAgICAgICAgIGluZGVudCA9IGJsb2NrLnNvbHV0aW9uSW5kZW50KCk7XG4gICAgICAgICAgICBpZiAoaW5kZW50ID09IDApIHtcbiAgICAgICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBibG9ja1dpZHRoLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoYmxvY2sudmlldykuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tXaWR0aCAtIGluZGVudCAqIHRoaXMub3B0aW9ucy5waXhlbHNQZXJJbmRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctbGVmdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGVudCAqIHRoaXMub3B0aW9ucy5waXhlbHNQZXJJbmRlbnQgKyAxMCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYWlyZWREaXZzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAkKHRoaXMucGFpcmVkRGl2c1tpXSkuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBibG9ja1dpZHRoICsgMzQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFuc3dlckJsb2NrcyA9IHRoaXMuYW5zd2VyQmxvY2tzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5zd2VyQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBibG9jayA9IGFuc3dlckJsb2Nrc1tpXTtcbiAgICAgICAgICAgIGluZGVudCA9IGJsb2NrLnNvbHV0aW9uSW5kZW50KCk7XG4gICAgICAgICAgICBpZiAoaW5kZW50ID09IDApIHtcbiAgICAgICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYmxvY2tXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1dpZHRoIC0gaW5kZW50ICogdGhpcy5vcHRpb25zLnBpeGVsc1BlckluZGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy1sZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZW50ICogdGhpcy5vcHRpb25zLnBpeGVsc1BlckluZGVudCArIDEwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzaXplIGFuc3dlciBhbmQgc291cmNlIGFyZWFcbiAgICAgICAgJCh0aGlzLmFuc3dlckFyZWEpLnJlbW92ZUNsYXNzKFwiYW5zd2VyMSBhbnN3ZXIyIGFuc3dlcjMgYW5zd2VyNFwiKTtcbiAgICAgICAgJCh0aGlzLmFuc3dlckFyZWEpLmFkZENsYXNzKFwiYW5zd2VyXCIpO1xuICAgICAgICB0aGlzLmluZGVudCA9IDA7XG4gICAgICAgIHRoaXMubm9pbmRlbnQgPSB0cnVlO1xuICAgICAgICAkKHRoaXMuc291cmNlQXJlYSkuYW5pbWF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5hcmVhV2lkdGggKyAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgJCh0aGlzLmFuc3dlckFyZWEpLmFuaW1hdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuYXJlYVdpZHRoICsgMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIC8vIENoYW5nZSB0aGUgbW9kZWwgKHdpdGggdmlldylcbiAgICAgICAgJCh0aGlzLmFuc3dlckFyZWEpLmFuaW1hdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMS4wLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTEwMCxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMuYW5zd2VyQXJlYSkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIG1vZGVsXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCbG9ja3NbaV0uYWRkSW5kZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnN3ZXJCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlckJsb2Nrc1tpXS5hZGRJbmRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gZmlyc3QgY2hlY2sgaWYgYW55IHNvbHV0aW9uIGJsb2NrcyBhcmUgaW4gdGhlIHNvdXJjZSBzdGlsbCAobGVmdCBzaWRlKSBhbmQgbm90XG4gICAgLy8gaW4gdGhlIGFuc3dlclxuICAgIGdldFNvbHV0aW9uQmxvY2tJblNvdXJjZSgpIHtcbiAgICAgICAgdmFyIHNvbHV0aW9uQmxvY2tzID0gdGhpcy5zb2x1dGlvbkJsb2NrcygpO1xuICAgICAgICB2YXIgYW5zd2VyQmxvY2tzID0gdGhpcy5hbnN3ZXJCbG9ja3MoKTtcbiAgICAgICAgdmFyIHNvdXJjZUJsb2NrcyA9IHRoaXMuc291cmNlQmxvY2tzKCk7XG4gICAgICAgIHZhciBzb2xCbG9jayA9IG51bGw7XG4gICAgICAgIHZhciBjdXJyQmxvY2sgPSBudWxsO1xuXG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCBzb3VyY2VCbG9ja3MgYW5kIHJldHVybiBhIGJsb2NrIGlmIGl0IGlzIG5vdCBpbiB0aGUgc29sdXRpb25cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2VCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBibG9jayBmcm9tIHRoZSBzb3VyY2VcbiAgICAgICAgICAgIGN1cnJCbG9jayA9IHNvdXJjZUJsb2Nrc1tpXTtcblxuICAgICAgICAgICAgLy8gaWYgY3VyckJsb2NrIGlzIGluIHRoZSBzb2x1dGlvbiBhbmQgaXNuJ3QgdGhlIGZpcnN0IGJsb2NrIGFuZCBpc24ndCBpbiB0aGUgYW5zd2VyXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc29sdXRpb25CbG9ja3MuaW5kZXhPZihjdXJyQmxvY2spID4gMCAmJlxuICAgICAgICAgICAgICAgIGFuc3dlckJsb2Nrcy5pbmRleE9mKGN1cnJCbG9jaykgPCAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VyckJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGRpZG4ndCBmaW5kIGFueSBibG9jayBpbiB0aGUgc291cmNlIHRoYXQgaXMgaW4gdGhlIHNvbHV0aW9uXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIEZpbmQgYSBibG9jazIgdGhhdCBpcyBmdXJ0aGVzdCBmcm9tIGJsb2NrMSBpbiB0aGUgYW5zd2VyXG4gICAgLy8gZG9uJ3QgdXNlIHRoZSB2ZXJ5IGZpcnN0IGJsb2NrIGluIHRoZSBzb2x1dGlvbiBhcyBibG9jazJcbiAgICBnZXRGdXJ0aGVzdEJsb2NrKCkge1xuICAgICAgICB2YXIgc29sdXRpb25CbG9ja3MgPSB0aGlzLnNvbHV0aW9uQmxvY2tzKCk7XG4gICAgICAgIHZhciBhbnN3ZXJCbG9ja3MgPSB0aGlzLmFuc3dlckJsb2NrcygpO1xuICAgICAgICB2YXIgbWF4RGlzdCA9IDA7XG4gICAgICAgIHZhciBkaXN0ID0gMDtcbiAgICAgICAgdmFyIG1heEJsb2NrID0gbnVsbDtcbiAgICAgICAgdmFyIGN1cnJCbG9jayA9IG51bGw7XG4gICAgICAgIHZhciBpbmRleFNvbCA9IDA7XG4gICAgICAgIHZhciBwcmV2QmxvY2sgPSBudWxsO1xuICAgICAgICB2YXIgaW5kZXhQcmV2ID0gMDtcblxuICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIGJsb2NrcyBpbiB0aGUgYW5zd2VyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5zd2VyQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjdXJyQmxvY2sgPSBhbnN3ZXJCbG9ja3NbaV07XG4gICAgICAgICAgICBpbmRleFNvbCA9IHNvbHV0aW9uQmxvY2tzLmluZGV4T2YoY3VyckJsb2NrKTtcbiAgICAgICAgICAgIGlmIChpbmRleFNvbCA+IDApIHtcbiAgICAgICAgICAgICAgICBwcmV2QmxvY2sgPSBzb2x1dGlvbkJsb2Nrc1tpbmRleFNvbCAtIDFdO1xuICAgICAgICAgICAgICAgIGluZGV4UHJldiA9IGFuc3dlckJsb2Nrcy5pbmRleE9mKHByZXZCbG9jayk7XG4gICAgICAgICAgICAgICAgLy9hbGVydChcIm15IGluZGV4IFwiICsgaSArIFwiIGluZGV4IHByZXYgXCIgKyBpbmRleFByZXYpO1xuXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBpbiB0aGUgYW5zd2VyXG4gICAgICAgICAgICAgICAgZGlzdCA9IE1hdGguYWJzKGkgLSBpbmRleFByZXYpO1xuICAgICAgICAgICAgICAgIGlmIChkaXN0ID4gbWF4RGlzdCkge1xuICAgICAgICAgICAgICAgICAgICBtYXhEaXN0ID0gZGlzdDtcbiAgICAgICAgICAgICAgICAgICAgbWF4QmxvY2sgPSBjdXJyQmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXhCbG9jaztcbiAgICB9XG5cbiAgICAvLyBDb21iaW5lIGJsb2NrcyB0b2dldGhlclxuICAgIGNvbWJpbmVCbG9ja3MoKSB7XG4gICAgICAgIHZhciBzb2x1dGlvbkJsb2NrcyA9IHRoaXMuc29sdXRpb25CbG9ja3MoKTtcbiAgICAgICAgdmFyIGFuc3dlckJsb2NrcyA9IHRoaXMuYW5zd2VyQmxvY2tzKCk7XG4gICAgICAgIHZhciBzb3VyY2VCbG9ja3MgPSB0aGlzLnNvdXJjZUJsb2NrcygpO1xuXG4gICAgICAgIC8vIEFsZXJ0IHRoZSB1c2VyIHRvIHdoYXQgaXMgaGFwcGVuaW5nXG4gICAgICAgIHZhciBmZWVkYmFja0FyZWEgPSAkKHRoaXMubWVzc2FnZURpdik7XG4gICAgICAgIGZlZWRiYWNrQXJlYS5mYWRlSW4oNTAwKTtcbiAgICAgICAgZmVlZGJhY2tBcmVhLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LWluZm9cIik7XG4gICAgICAgIGZlZWRiYWNrQXJlYS5odG1sKCQuaTE4bihcIm1zZ19wYXJzb25fY29tYmluZWRfYmxvY2tzXCIpKTtcbiAgICAgICAgdmFyIGJsb2NrMSA9IG51bGw7XG4gICAgICAgIHZhciBibG9jazIgPSBudWxsO1xuXG4gICAgICAgIC8vIGdldCBhIHNvbHV0aW9uIGJsb2NrIHRoYXQgaXMgc3RpbGwgaW4gc291cmNlIChub3QgYW5zd2VyKSwgaWYgYW55XG4gICAgICAgIGJsb2NrMiA9IHRoaXMuZ2V0U29sdXRpb25CbG9ja0luU291cmNlKCk7XG5cbiAgICAgICAgLy8gaWYgbm9uZSBpbiBzb3VyY2UgZ2V0IGJsb2NrIHRoYXQgaXMgZnVydGhlc3QgZnJvbSBibG9jazFcbiAgICAgICAgaWYgKGJsb2NrMiA9PSBudWxsKSB7XG4gICAgICAgICAgICBibG9jazIgPSB0aGlzLmdldEZ1cnRoZXN0QmxvY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldCBibG9jazEgKGFib3ZlIGJsb2NrMikgaW4gc29sdXRpb25cbiAgICAgICAgdmFyIGluZGV4ID0gc29sdXRpb25CbG9ja3MuaW5kZXhPZihibG9jazIpO1xuICAgICAgICBibG9jazEgPSBzb2x1dGlvbkJsb2Nrc1tpbmRleCAtIDFdO1xuXG4gICAgICAgIC8vIGdldCBpbmRleCBvZiBlYWNoIGluIGFuc3dlclxuICAgICAgICB2YXIgaW5kZXgxID0gYW5zd2VyQmxvY2tzLmluZGV4T2YoYmxvY2sxKTtcbiAgICAgICAgdmFyIGluZGV4MiA9IGFuc3dlckJsb2Nrcy5pbmRleE9mKGJsb2NrMik7XG4gICAgICAgIHZhciBtb3ZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gaWYgYm90aCBpbiBhbnN3ZXIgc2V0IG1vdmUgYmFzZWQgb24gaWYgZGlyZWN0bHkgYWJvdmUgZWFjaCBvdGhlclxuICAgICAgICBpZiAoaW5kZXgxID49IDAgJiYgaW5kZXgyID49IDApIHtcbiAgICAgICAgICAgIG1vdmUgPSBpbmRleDEgKyAxICE9PSBpbmRleDI7XG5cbiAgICAgICAgICAgIC8vIGVsc2UgaWYgYm90aCBpbiBzb3VyY2Ugc2V0IG1vdmUgYWdhaW4gYmFzZWQgb24gaWYgYWJvdmUgZWFjaCBvdGhlclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4MSA8IDAgJiYgaW5kZXgyIDwgMCkge1xuICAgICAgICAgICAgaW5kZXgxID0gc291cmNlQmxvY2tzLmluZGV4T2YoYmxvY2sxKTtcbiAgICAgICAgICAgIGluZGV4MiA9IHNvdXJjZUJsb2Nrcy5pbmRleE9mKGJsb2NrMik7XG4gICAgICAgICAgICBtb3ZlID0gaW5kZXgxICsgMSAhPT0gaW5kZXgyO1xuXG4gICAgICAgICAgICAvLyBvbmUgaW4gc291cmNlIGFuZCBvbmUgaW4gYW5zd2VyIHNvIG11c3QgbW92ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW92ZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaW5kZXgxIDwgMCkge1xuICAgICAgICAgICAgICAgIGluZGV4MSA9IHNvdXJjZUJsb2Nrcy5pbmRleE9mKGJsb2NrMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5kZXgyIDwgMCkge1xuICAgICAgICAgICAgICAgIGluZGV4MiA9IHNvdXJjZUJsb2Nrcy5pbmRleE9mKGJsb2NrMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3VidHJhY3QgPSBpbmRleDIgPCBpbmRleDE7IC8vIGlzIGJsb2NrMiBoaWdoZXJcblxuICAgICAgICBpZiAobW92ZSkge1xuICAgICAgICAgICAgLy8gTW92ZSB0aGUgYmxvY2tcbiAgICAgICAgICAgIHZhciBzdGFydFggPSBibG9jazIucGFnZVhDZW50ZXIoKSAtIDE7XG4gICAgICAgICAgICB2YXIgc3RhcnRZID0gYmxvY2syLnBhZ2VZQ2VudGVyKCk7XG4gICAgICAgICAgICB2YXIgZW5kWCA9IGJsb2NrMS5wYWdlWENlbnRlcigpIC0gMTtcbiAgICAgICAgICAgIHZhciBlbmRZID1cbiAgICAgICAgICAgICAgICBibG9jazEucGFnZVlDZW50ZXIoKSArXG4gICAgICAgICAgICAgICAgYmxvY2sxLnZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC8gMiArXG4gICAgICAgICAgICAgICAgNTtcbiAgICAgICAgICAgIGlmIChzdWJ0cmFjdCkge1xuICAgICAgICAgICAgICAgIGVuZFkgLT0gYmxvY2syLnZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kWSArPSBibG9jazIudmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgJChibG9jazIudmlldykuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLCAvLyAxIHNlY2NvbmRcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYmxvY2sxLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjMDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGJsb2NrMi52aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiIzAwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2syLmxpbmVzWzBdLmluZGV4ICs9IDEwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmluZyA9IGJsb2NrMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92aW5nWCA9IHN0YXJ0WDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92aW5nWSA9IHN0YXJ0WTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlVmlldygpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogZnVuY3Rpb24gKGEsIHAsIGMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92aW5nWCA9IHN0YXJ0WCAqICgxIC0gcCkgKyBlbmRYICogcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92aW5nWSA9IHN0YXJ0WSAqICgxIC0gcCkgKyBlbmRZICogcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlVmlldygpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoYXQubW92aW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoYXQubW92aW5nWDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGF0Lm1vdmluZ1k7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrMi5saW5lc1swXS5pbmRleCAtPSAxMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2sxLmNvbnN1bWVCbG9jayhibG9jazIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChibG9jazEudmlldykuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiI2QzZDNkM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjZWZlZmVmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChibG9jazEudmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChibG9jazIudmlldykuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChibG9jazEudmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIiMwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYmxvY2syLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjMDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jazEuY29uc3VtZUJsb2NrKGJsb2NrMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGJsb2NrMS52aWV3KS5hbmltYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjZDNkM2QzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNlZmVmZWZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGJsb2NrMS52aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQWRhcHQgdGhlIHByb2JsZW0gdG8gYmUgZWFzaWVyXG4gICAgLy8gICogcmVtb3ZlIGEgZGlzdHJhY3RvciB1bnRpbCBub25lIGFyZSBwcmVzZW50XG4gICAgLy8gICogY29tYmluZSBibG9ja3MgdW50aWwgMyBhcmUgbGVmdFxuICAgIG1ha2VFYXNpZXIoKSB7XG4gICAgICAgIHZhciBkaXN0cmFjdG9yVG9SZW1vdmUgPSB0aGlzLmRpc3RyYWN0b3JUb1JlbW92ZSgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBkaXN0cmFjdG9yVG9SZW1vdmUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgIWRpc3RyYWN0b3JUb1JlbW92ZS5pblNvdXJjZUFyZWEoKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGFsZXJ0KCQuaTE4bihcIm1zZ19wYXJzb25fcmVtb3ZlX2luY29ycmVjdFwiKSk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZURpc3RyYWN0b3IoZGlzdHJhY3RvclRvUmVtb3ZlKTtcbiAgICAgICAgICAgIHRoaXMubG9nTW92ZShcInJlbW92ZWREaXN0cmFjdG9yLVwiICsgZGlzdHJhY3RvclRvUmVtb3ZlLmhhc2goKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZCbG9ja3MgPSB0aGlzLm51bWJlck9mQmxvY2tzKGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChudW1iZXJPZkJsb2NrcyA+IDMpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgkLmkxOG4oXCJtc2dfcGFyc29uX3dpbGxfY29tYmluZVwiKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21iaW5lQmxvY2tzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dNb3ZlKFwiY29tYmluZWRCbG9ja3NcIik7XG4gICAgICAgICAgICB9IC8qZWxzZSBpZih0aGlzLm51bWJlck9mQmxvY2tzKHRydWUpID4gMyAmJiBkaXN0cmFjdG9yVG9SZW1vdmUgIT09ICB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIldpbGwgcmVtb3ZlIGFuIGluY29ycmVjdCBjb2RlIGJsb2NrIGZyb20gc291cmNlIGFyZWFcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVEaXN0cmFjdG9yKGRpc3RyYWN0b3JUb1JlbW92ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dNb3ZlKFwicmVtb3ZlZERpc3RyYWN0b3ItXCIgKyBkaXN0cmFjdG9yVG9SZW1vdmUuaGFzaCgpKTtcbiAgICAgICAgICAgIH0gKi8gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJC5pMThuKFwibXNnX3BhcnNvbl90aHJlZV9ibG9ja3NfbGVmdFwiKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5IZWxwID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmIChudW1iZXJPZkJsb2NrcyA8IDUpIHtcbiAgICAgICAgICAgIC8vXHR0aGlzLmNhbkhlbHAgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vXHR0aGlzLmhlbHBCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgLy99XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVGhlIFwiSGVscCBNZVwiIGJ1dHRvbiB3YXMgcHJlc3NlZCBhbmQgdGhlIHByb2JsZW0gc2hvdWxkIGJlIHNpbXBsaWZpZWRcbiAgICBoZWxwTWUoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJGZWVkYmFjaygpO1xuICAgICAgICAvL3RoaXMuaGVscENvdW50ID0gLTE7IC8vIGFtb3VudCB0byBhbGxvdyBmb3IgbXVsdGlwbGUgaGVscHMgaW4gYSByb3dcbiAgICAgICAgLy9pZiAodGhpcy5oZWxwQ291bnQgPCAwKSB7XG4gICAgICAgIC8vXHR0aGlzLmhlbHBDb3VudCA9IE1hdGgubWF4KHRoaXMuaGVscENvdW50LCAtMSk7IC8vIG1pbiAxIGF0dGVtcHQgYmVmb3JlIG1vcmUgaGVscFxuICAgICAgICAvL3RoaXMuaGVscEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIC8vfVxuICAgICAgICAvLyBpZiBsZXNzIHRoYW4gMyBhdHRlbXB0c1xuICAgICAgICBpZiAodGhpcy5udW1EaXN0aW5jdCA8IDMpIHtcbiAgICAgICAgICAgIGFsZXJ0KCQuaTE4bihcIm1zZ19wYXJzb25fYXRsZWFzdF90aHJlZV9hdHRlbXB0c1wiKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gb3RoZXJ3aXNlIGdpdmUgaGVscFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ290SGVscCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm1ha2VFYXNpZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09IFVUSUxJVFkgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICAvLyBSZXR1cm4gYSBkYXRlIGZyb20gYSB0aW1lc3RhbXAgKGVpdGhlciBteVNRTCBvciBKUyBmb3JtYXQpXG4gICAgZGF0ZUZyb21UaW1lc3RhbXAodGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcbiAgICAgICAgaWYgKGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aW1lc3RhbXAuc3BsaXQoL1stIDpdLyk7XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUodFswXSwgdFsxXSAtIDEsIHRbMl0sIHRbM10sIHRbNF0sIHRbNV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgICAvLyBBIGZ1bmN0aW9uIGZvciByZXR1cm5pbmcgYSBzaHVmZmxlZCB2ZXJzaW9uIG9mIGFuIGFycmF5XG4gICAgc2h1ZmZsZWQoYXJyYXkpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aDtcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gYXJyYXkuc2xpY2UoKTtcbiAgICAgICAgdmFyIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cbiAgICAgICAgd2hpbGUgKDAgIT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gcmV0dXJuQXJyYXlbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIHJldHVybkFycmF5W2N1cnJlbnRJbmRleF0gPSByZXR1cm5BcnJheVtyYW5kb21JbmRleF07XG4gICAgICAgICAgICByZXR1cm5BcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XG4gICAgfVxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PT0gS0VZQk9BUkQgSU5URVJBQ1RJT04gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgIC8vIFdoZW4gdGhlIHVzZXIgaGFzIGVudGVyZWQgdGhlIFBhcnNvbnMgcHJvYmxlbSB2aWEga2V5Ym9hcmQgbW9kZVxuICAgIGVudGVyS2V5Ym9hcmRNb2RlKCkge1xuICAgICAgICAkKHRoaXMua2V5Ym9hcmRUaXApLnNob3coKTtcbiAgICAgICAgJCh0aGlzLnNvdXJjZUxhYmVsKS5oaWRlKCk7XG4gICAgICAgICQodGhpcy5hbnN3ZXJMYWJlbCkuaGlkZSgpO1xuICAgICAgICB0aGlzLmNsZWFyRmVlZGJhY2soKTtcbiAgICB9XG4gICAgLy8gV2hlbiB0aGUgdXNlciBsZWF2ZXMgdGhlIFBhcnNvbnMgcHJvYmxlbSB2aWEga2V5Ym9hcmQgbW9kZVxuICAgIGV4aXRLZXlib2FyZE1vZGUoKSB7XG4gICAgICAgICQodGhpcy5rZXlib2FyZFRpcCkuaGlkZSgpO1xuICAgICAgICAkKHRoaXMuc291cmNlTGFiZWwpLnNob3coKTtcbiAgICAgICAgJCh0aGlzLmFuc3dlckxhYmVsKS5zaG93KCk7XG4gICAgfVxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PT0gVklFVyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgIC8vIENsZWFyIGFueSBmZWVkYmFjayBmcm9tIHRoZSBhbnN3ZXIgYXJlYVxuICAgIGNsZWFyRmVlZGJhY2soKSB7XG4gICAgICAgICQodGhpcy5hbnN3ZXJBcmVhKS5yZW1vdmVDbGFzcyhcImluY29ycmVjdCBjb3JyZWN0XCIpO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmFuc3dlckFyZWEuY2hpbGROb2RlcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgJChjaGlsZHJlbltpXSkucmVtb3ZlQ2xhc3MoXG4gICAgICAgICAgICAgICAgXCJjb3JyZWN0UG9zaXRpb24gaW5jb3JyZWN0UG9zaXRpb24gaW5kZW50TGVmdCBpbmRlbnRSaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgICQodGhpcy5tZXNzYWdlRGl2KS5oaWRlKCk7XG4gICAgfVxuICAgIC8vIERpc2FibGUgdGhlIGludGVyZmFjZVxuICAgIGFzeW5jIGRpc2FibGVJbnRlcmFjdGlvbigpIHtcbiAgICAgICAgLy8gRGlzYWJsZSBibG9ja3NcbiAgICAgICAgYXdhaXQgdGhpcy5jaGVja1NlcnZlckNvbXBsZXRlO1xuICAgICAgICBjb25zb2xlLmxvZyhcImRpc2FibGluZyBibG9ja3NcIik7XG4gICAgICAgIGlmICh0aGlzLmJsb2NrcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5ibG9ja3NbaV07XG4gICAgICAgICAgICAgICAgYmxvY2suZGlzYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEhpZGUgYnV0dG9uc1xuICAgICAgICAkKHRoaXMuY2hlY2tCdXR0b24pLmhpZGUoKTtcbiAgICAgICAgJCh0aGlzLnJlc2V0QnV0dG9uKS5oaWRlKCk7XG4gICAgfVxuICAgIC8vIEJhc2VkIG9uIHRoZSBtb3ZpbmcgZWxlbWVudCwgZXRjLiwgZXN0YWJsaXNoIHRoZSBtb3Zpbmcgc3RhdGVcbiAgICAvLyAgIHJlc3Q6IG5vdCBtb3ZpbmdcbiAgICAvLyAgIHNvdXJjZTogbW92aW5nIGluc2lkZSBzb3VyY2UgYXJlYVxuICAgIC8vICAgYW5zd2VyOiBtb3ZpbmcgaW5zaWRlIGFuc3dlciBhcmVhXG4gICAgLy8gICBtb3Zpbmc6IG1vdmluZyBvdXRzaWRlIGFyZWFzXG4gICAgbW92aW5nU3RhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vdmluZyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBcInJlc3RcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeCA9IHRoaXMubW92aW5nWCAtIHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLm1vdmluZ1kgLSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgIC8vIENoZWNrIGlmIGluIGFuc3dlciBhcmVhXG4gICAgICAgIHZhciBib3VuZHMgPSB0aGlzLmFuc3dlckFyZWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHggPj0gYm91bmRzLmxlZnQgJiZcbiAgICAgICAgICAgIHggPD0gYm91bmRzLnJpZ2h0ICYmXG4gICAgICAgICAgICB5ID49IGJvdW5kcy50b3AgJiZcbiAgICAgICAgICAgIHkgPD0gYm91bmRzLmJvdHRvbVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBcImFuc3dlclwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGlmIGluIHNvdXJjZSBhcmVhXG4gICAgICAgIGJvdW5kcyA9IHRoaXMuc291cmNlQXJlYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgeCA+PSBib3VuZHMubGVmdCAmJlxuICAgICAgICAgICAgeCA8PSBib3VuZHMucmlnaHQgJiZcbiAgICAgICAgICAgIHkgPj0gYm91bmRzLnRvcCAmJlxuICAgICAgICAgICAgeSA8PSBib3VuZHMuYm90dG9tXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIFwic291cmNlXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwibW92aW5nXCI7XG4gICAgfVxuICAgIC8vIFVwZGF0ZSB0aGUgUGFyc29ucyB2aWV3XG4gICAgLy8gVGhpcyBnZXRzIGNhbGxlZCB3aGVuIGRyYWdnaW5nIGEgYmxvY2tcbiAgICB1cGRhdGVWaWV3KCkge1xuICAgICAgICAvLyBCYXNlZCBvbiB0aGUgbmV3IGFuZCB0aGUgb2xkIHN0YXRlLCBmaWd1cmUgb3V0IHdoYXQgdG8gdXBkYXRlXG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IHRoaXMubW92aW5nU3RhdGUoKTtcbiAgICAgICAgdmFyIHVwZGF0ZVNvdXJjZSA9IHRydWU7XG4gICAgICAgIHZhciB1cGRhdGVBbnN3ZXIgPSB0cnVlO1xuICAgICAgICB2YXIgdXBkYXRlTW92aW5nID0gbmV3U3RhdGUgPT0gXCJtb3ZpbmdcIjtcbiAgICAgICAgaWYgKHN0YXRlID09IG5ld1N0YXRlKSB7XG4gICAgICAgICAgICBpZiAobmV3U3RhdGUgPT0gXCJyZXN0XCIpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVTb3VyY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB1cGRhdGVBbnN3ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3U3RhdGUgPT0gXCJzb3VyY2VcIikge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUFuc3dlciA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdTdGF0ZSA9PSBcImFuc3dlclwiKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlU291cmNlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1N0YXRlID09IFwibW92aW5nXCIpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVBbnN3ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB1cGRhdGVTb3VyY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbW92aW5nSGVpZ2h0O1xuICAgICAgICBpZiAodGhpcy5tb3ZpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gTXVzdCBnZXQgaGVpZ2h0IGhlcmUgYXMgZGV0YWNoZWQgaXRlbXMgZG9uJ3QgaGF2ZSBoZWlnaHRcbiAgICAgICAgICAgIG1vdmluZ0hlaWdodCA9ICQodGhpcy5tb3Zpbmcudmlldykub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICAkKHRoaXMubW92aW5nLnZpZXcpLmRldGFjaCgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb3NpdGlvblRvcCwgd2lkdGg7XG4gICAgICAgIHZhciBiYXNlV2lkdGggPSB0aGlzLmFyZWFXaWR0aCAtIDIyO1xuICAgICAgICAvLyBVcGRhdGUgdGhlIFNvdXJjZSBBcmVhXG4gICAgICAgIGlmICh1cGRhdGVTb3VyY2UpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uVG9wID0gMDtcbiAgICAgICAgICAgIHZhciBibG9ja3MgPSB0aGlzLnNvdXJjZUJsb2NrcygpO1xuICAgICAgICAgICAgaWYgKG5ld1N0YXRlID09IFwic291cmNlXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFzSW5zZXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgbW92aW5nQmluID0gdGhpcy5tb3ZpbmcucGFpcmVkQmluKCk7XG4gICAgICAgICAgICAgICAgdmFyIGJpbkZvckJsb2NrID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBiaW5Gb3JCbG9jay5wdXNoKGJsb2Nrc1tpXS5wYWlyZWRCaW4oKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghYmluRm9yQmxvY2suaW5jbHVkZXMobW92aW5nQmluKSkge1xuICAgICAgICAgICAgICAgICAgICBtb3ZpbmdCaW4gPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGluc2VydFBvc2l0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChiaW5Gb3JCbG9jay5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRQb3NpdGlvbnMucHVzaCgwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobW92aW5nQmluID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRQb3NpdGlvbnMucHVzaCgwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiaW5Gb3JCbG9ja1swXSA9PSBtb3ZpbmdCaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFBvc2l0aW9ucy5wdXNoKDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiaW5Gb3JCbG9ja1tpIC0gMV0gPT0gbW92aW5nQmluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0UG9zaXRpb25zLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJpbkZvckJsb2NrW2ldID09IG1vdmluZ0Jpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFBvc2l0aW9ucy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZpbmdCaW4gPT0gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5Gb3JCbG9ja1tpIC0gMV0gIT0gYmluRm9yQmxvY2tbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFBvc2l0aW9ucy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3ZpbmdCaW4gPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFBvc2l0aW9ucy5wdXNoKGJpbkZvckJsb2NrLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5Gb3JCbG9ja1tiaW5Gb3JCbG9jay5sZW5ndGggLSAxXSA9PSBtb3ZpbmdCaW5cbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRQb3NpdGlvbnMucHVzaChiaW5Gb3JCbG9jay5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB4ID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmdYIC1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VBcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucGFnZVhPZmZzZXQgLVxuICAgICAgICAgICAgICAgICAgICBiYXNlV2lkdGggLyAyIC1cbiAgICAgICAgICAgICAgICAgICAgMTE7XG4gICAgICAgICAgICAgICAgdmFyIHkgPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZ1kgLVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZUFyZWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBibG9ja3NbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBqO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0luc2VydGVkICYmIGluc2VydFBvc2l0aW9ucy5pbmNsdWRlcyhpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3RIZWlnaHQgPSAkKGl0ZW0udmlldykub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGJsb2Nrcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnNlcnRQb3NpdGlvbnMuaW5jbHVkZXMoaikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RIZWlnaHQgKz0gJChibG9ja3Nbal0udmlldykub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSAtIHBvc2l0aW9uVG9wIDwgbW92aW5nSGVpZ2h0ICsgdGVzdEhlaWdodCAvIDIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID09IGluc2VydFBvc2l0aW9uc1tpbnNlcnRQb3NpdGlvbnMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0luc2VydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZUFyZWEuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZy52aWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcy5tb3ZpbmcudmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB5IC0gbW92aW5nSGVpZ2h0IC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGJhc2VXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ6LWluZGV4XCI6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Ub3AgPSBwb3NpdGlvblRvcCArIG1vdmluZ0hlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkKGl0ZW0udmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHBvc2l0aW9uVG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGJhc2VXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiei1pbmRleFwiOiAyLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Ub3AgPSBwb3NpdGlvblRvcCArICQoaXRlbS52aWV3KS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNJbnNlcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMubW92aW5nLnZpZXcpLmFwcGVuZFRvKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIjXCIgKyB0aGlzLmNvdW50ZXJJZCArIFwiLXNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy5tb3ZpbmcudmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHgsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHkgLSAkKHRoaXMubW92aW5nLnZpZXcpLm91dGVySGVpZ2h0KHRydWUpIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBiYXNlV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogMyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0gYmxvY2tzW2ldO1xuICAgICAgICAgICAgICAgICAgICAkKGl0ZW0udmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHBvc2l0aW9uVG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGJhc2VXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiei1pbmRleFwiOiAyLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Ub3AgPSBwb3NpdGlvblRvcCArICQoaXRlbS52aWV3KS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIFBhaXJlZCBEaXN0cmFjdG9yIEluZGljYXRvcnNcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnBhaXJlZEJpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYmluID0gdGhpcy5wYWlyZWRCaW5zW2ldO1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaGluZyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBibG9ja3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2sgPSBibG9ja3Nbal07XG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9jay5tYXRjaGVzQmluKGJpbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkaXYgPSB0aGlzLnBhaXJlZERpdnNbaV07XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoaW5nLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICQoZGl2KS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJChkaXYpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IC01O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgKz0gcGFyc2VJbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAkKG1hdGNoaW5nW21hdGNoaW5nLmxlbmd0aCAtIDFdLnZpZXcpLmNzcyhcInRvcFwiKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgLT0gcGFyc2VJbnQoJChtYXRjaGluZ1swXS52aWV3KS5jc3MoXCJ0b3BcIikpO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgKz0gJChtYXRjaGluZ1ttYXRjaGluZy5sZW5ndGggLSAxXS52aWV3KS5vdXRlckhlaWdodChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgJChkaXYpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogJChtYXRjaGluZ1swXS52aWV3KS5jc3MoXCJ0b3BcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYmFzZVdpZHRoICsgMzQsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiei1pbmRleFwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWluZGVudFwiOiAtMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctdG9wXCI6IChoZWlnaHQgLSA3MCkgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwidmlzaWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogNDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsLWFsaWduXCI6IFwibWlkZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjN2U3ZWU3XCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAkKGRpdikuaHRtbChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gaWQ9ICdzdCcgc3R5bGUgPSAndmVydGljYWwtYWxpZ246IG1pZGRsZTsgZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTVweCc+b3I8L3NwYW4+e1wiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtYXRjaGluZy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAkKGRpdikuaHRtbChcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBBbnN3ZXIgQXJlYVxuICAgICAgICBpZiAodXBkYXRlQW5zd2VyKSB7XG4gICAgICAgICAgICB2YXIgYmxvY2ssIGluZGVudDtcbiAgICAgICAgICAgIHBvc2l0aW9uVG9wID0gMDtcbiAgICAgICAgICAgIHdpZHRoID1cbiAgICAgICAgICAgICAgICB0aGlzLmFyZWFXaWR0aCArXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRlbnQgKiB0aGlzLm9wdGlvbnMucGl4ZWxzUGVySW5kZW50IC1cbiAgICAgICAgICAgICAgICAyMjtcbiAgICAgICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmFuc3dlckJsb2NrcygpO1xuICAgICAgICAgICAgaWYgKG5ld1N0YXRlID09IFwiYW5zd2VyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFzSW5zZXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgeCA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nWCAtXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyQXJlYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnBhZ2VYT2Zmc2V0IC1cbiAgICAgICAgICAgICAgICAgICAgYmFzZVdpZHRoIC8gMiAtXG4gICAgICAgICAgICAgICAgICAgIDExO1xuICAgICAgICAgICAgICAgIHZhciBtb3ZpbmdJbmRlbnQgPSBNYXRoLnJvdW5kKHggLyB0aGlzLm9wdGlvbnMucGl4ZWxzUGVySW5kZW50KTtcbiAgICAgICAgICAgICAgICBpZiAobW92aW5nSW5kZW50IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBtb3ZpbmdJbmRlbnQgPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW92aW5nSW5kZW50ID4gdGhpcy5pbmRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgbW92aW5nSW5kZW50ID0gdGhpcy5pbmRlbnQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IG1vdmluZ0luZGVudCAqIHRoaXMub3B0aW9ucy5waXhlbHNQZXJJbmRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB5ID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmdZIC1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJBcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZy5pbmRlbnQgPSBtb3ZpbmdJbmRlbnQ7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBibG9jayA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNJbnNlcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgLSBwb3NpdGlvblRvcCA8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1vdmluZ0hlaWdodCArICQoYmxvY2sudmlldykub3V0ZXJIZWlnaHQodHJ1ZSkpIC8gMlxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzSW5zZXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyQXJlYS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nLnZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLnZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcy5tb3ZpbmcudmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB5IC0gbW92aW5nSGVpZ2h0IC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGJhc2VXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ6LWluZGV4XCI6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Ub3AgPSBwb3NpdGlvblRvcCArIG1vdmluZ0hlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbmRlbnQgPSBibG9jay5pbmRlbnQgKiB0aGlzLm9wdGlvbnMucGl4ZWxzUGVySW5kZW50O1xuICAgICAgICAgICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBpbmRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHBvc2l0aW9uVG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoIC0gaW5kZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ6LWluZGV4XCI6IDIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblRvcCA9IHBvc2l0aW9uVG9wICsgJChibG9jay52aWV3KS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNJbnNlcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMubW92aW5nLnZpZXcpLmFwcGVuZFRvKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIjXCIgKyB0aGlzLmNvdW50ZXJJZCArIFwiLWFuc3dlclwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy5tb3ZpbmcudmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHgsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHkgLSAkKHRoaXMubW92aW5nLnZpZXcpLm91dGVySGVpZ2h0KHRydWUpIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBiYXNlV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogMyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBibG9jayA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaW5kZW50ID0gYmxvY2suaW5kZW50ICogdGhpcy5vcHRpb25zLnBpeGVsc1BlckluZGVudDtcbiAgICAgICAgICAgICAgICAgICAgJChibG9jay52aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogaW5kZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBwb3NpdGlvblRvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCAtIGluZGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiei1pbmRleFwiOiAyLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Ub3AgPSBwb3NpdGlvblRvcCArICQoYmxvY2sudmlldykub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgTW92aW5nIEFyZWFcbiAgICAgICAgaWYgKHVwZGF0ZU1vdmluZykge1xuICAgICAgICAgICAgLy8gQWRkIGl0IHRvIHRoZSBsb3dlc3QgcGxhY2UgaW4gdGhlIHNvdXJjZSBhcmVhXG4gICAgICAgICAgICBtb3ZpbmdCaW4gPSB0aGlzLm1vdmluZy5wYWlyZWRCaW4oKTtcbiAgICAgICAgICAgIGlmIChtb3ZpbmdCaW4gPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMubW92aW5nLnZpZXcpLmFwcGVuZFRvKFwiI1wiICsgdGhpcy5jb3VudGVySWQgKyBcIi1zb3VyY2VcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBiZWZvcmU7XG4gICAgICAgICAgICAgICAgYmxvY2tzID0gdGhpcy5zb3VyY2VCbG9ja3M7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBibG9jayA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrLnBhaXJlZEJpbigpID09IG1vdmluZ0Jpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGJlZm9yZSA9PSB1bmRlZmluZWQgfHwgYmVmb3JlID09IGJsb2Nrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLm1vdmluZy52aWV3KS5hcHBlbmRUbyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiI1wiICsgdGhpcy5jb3VudGVySWQgKyBcIi1zb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlQXJlYS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZy52aWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzW2JlZm9yZV0udmlld1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFBsYWNlIGluIHRoZSBtaWRkbGUgb2YgdGhlIG1vdXNlIGN1cnNvclxuICAgICAgICAgICAgJCh0aGlzLm1vdmluZy52aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgIGxlZnQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nWCAtXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlQXJlYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnBhZ2VYT2Zmc2V0IC1cbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLm1vdmluZy52aWV3KS5vdXRlcldpZHRoKHRydWUpIC8gMixcbiAgICAgICAgICAgICAgICB0b3A6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nWSAtXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlQXJlYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXQgLVxuICAgICAgICAgICAgICAgICAgICBtb3ZpbmdIZWlnaHQgLyAyLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBiYXNlV2lkdGgsXG4gICAgICAgICAgICAgICAgXCJ6LWluZGV4XCI6IDMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgfVxuICAgIGFkZEJsb2NrTGFiZWxzKGJsb2Nrcykge1xuICAgICAgICB2YXIgYmluID0gLTE7XG4gICAgICAgIHZhciBiaW5Db3VudCA9IDA7XG4gICAgICAgIHZhciBiaW5DaGlsZHJlbiA9IDA7XG4gICAgICAgIHZhciBibG9ja3NOb3RJbkJpbnMgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGJsb2Nrc1tpXS5wYWlyZWRCaW4oKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIGJsb2Nrc05vdEluQmlucysrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudEJpbiA9IGJsb2Nrc1tpXS5wYWlyZWRCaW4oKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50QmluID09IC0xIHx8IGN1cnJlbnRCaW4gIT0gYmluKSB7XG4gICAgICAgICAgICAgICAgYmluID0gY3VycmVudEJpbjtcbiAgICAgICAgICAgICAgICBiaW5DaGlsZHJlbiA9IDA7XG4gICAgICAgICAgICAgICAgYmluQ291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsYWJlbCA9XG4gICAgICAgICAgICAgICAgXCJcIiArXG4gICAgICAgICAgICAgICAgYmluQ291bnQgK1xuICAgICAgICAgICAgICAgIChjdXJyZW50QmluICE9IC0xXG4gICAgICAgICAgICAgICAgICAgID8gU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIGJpbkNoaWxkcmVuKVxuICAgICAgICAgICAgICAgICAgICA6IFwiIFwiKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBiaW5Db3VudCA8IDEwICYmXG4gICAgICAgICAgICAgICAgYmxvY2tzTm90SW5CaW5zICsgdGhpcy5wYWlyZWRCaW5zLmxlbmd0aCA+PSAxMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwgKz0gXCIgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9ja3NbaV0uYWRkTGFiZWwobGFiZWwsIDApO1xuICAgICAgICAgICAgYmluQ2hpbGRyZW4rKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmxvY2tzTm90SW5CaW5zICsgdGhpcy5wYWlyZWRCaW5zLmxlbmd0aCA+PSAxMCkge1xuICAgICAgICAgICAgdGhpcy5hcmVhV2lkdGggKz0gNTtcbiAgICAgICAgICAgICQodGhpcy5zb3VyY2VBcmVhKS5jc3Moe1xuICAgICAgICAgICAgICAgIHdpZHRoOiAkKHRoaXMuc291cmNlQXJlYSkud2lkdGgoKSArIDUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQodGhpcy5hbnN3ZXJBcmVhKS5jc3Moe1xuICAgICAgICAgICAgICAgIHdpZHRoOiAkKHRoaXMuYW5zd2VyQXJlYSkud2lkdGgoKSArIDUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBQdXQgYWxsIHRoZSBibG9ja3MgYmFjayBpbnRvIHRoZSBzb3VyY2UgYXJlYSwgcmVzaHVmZmxpbmcgYXMgbmVjZXNzYXJ5XG4gICAgcmVzZXRWaWV3KCkge1xuICAgICAgICAvLyBDbGVhciBldmVyeXRoaW5nXG4gICAgICAgIHRoaXMuY2xlYXJGZWVkYmFjaygpO1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIHZhciBibG9jaztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYmxvY2sgPSB0aGlzLmJsb2Nrc1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYmxvY2subGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSAkKGJsb2NrLmxpbmVzW2pdLnZpZXcpLmZpbmQoXCIuYmxvY2stbGFiZWxcIik7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBjaGlsZHJlbi5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltjXS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9jay5kZXN0cm95KCk7XG4gICAgICAgICAgICAkKHRoaXMuYmxvY2tzW2ldLnZpZXcpLmRldGFjaCgpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSB0aGlzLmJsb2NrcztcbiAgICAgICAgdGhpcy5ibG9ja0luZGV4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhaXJlZERpdnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICQodGhpcy5wYWlyZWREaXZzW2ldKS5kZXRhY2goKTtcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMuc291cmNlQXJlYSkuYXR0cihcInN0eWxlXCIsIFwiXCIpO1xuICAgICAgICAkKHRoaXMuYW5zd2VyQXJlYSkucmVtb3ZlQ2xhc3MoKTtcbiAgICAgICAgJCh0aGlzLmFuc3dlckFyZWEpLmF0dHIoXCJzdHlsZVwiLCBcIlwiKTtcbiAgICAgICAgdGhpcy5ub2luZGVudCA9IHRoaXMub3B0aW9ucy5ub2luZGVudDtcbiAgICAgICAgLy8gUmVpbml0aWFsaXplXG4gICAgICAgIGlmICh0aGlzLmhhc1NvbHZlZCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0NvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMubnVtRGlzdGluY3QgPSAwO1xuICAgICAgICAgICAgdGhpcy5oYXNTb2x2ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYWRhcHRpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkhlbHAgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy90aGlzLmhlbHBDb3VudCA9IC0zOyAvLyBlbmFibGUgYWZ0ZXIgMyBmYWlsZWQgYXR0ZW1wdHNcbiAgICAgICAgICAgIC8vdGhpcy5oZWxwQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuYWRhcHRpdmVJZCArIFwiUHJvYmxlbVwiLCB0aGlzLmRpdmlkKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRpdmVJZCArIHRoaXMuZGl2aWQgKyBcIkNvdW50XCIsXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0NvdW50XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5hZGFwdGl2ZUlkICsgXCJTb2x2ZWRcIiwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUFyZWFzKHRoaXMuYmxvY2tzRnJvbVNvdXJjZSgpLCBbXSwge30pO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVJbnRlcmFjdGl2aXR5KCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICAgIH1cbn1cblxuUGFyc29ucy5jb3VudGVyID0gMDtcblxuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIltkYXRhLWNvbXBvbmVudD1wYXJzb25zXVwiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5jbG9zZXN0KFwiW2RhdGEtY29tcG9uZW50PXRpbWVkQXNzZXNzbWVudF1cIikubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcHJzTGlzdFt0aGlzLmlkXSA9IG5ldyBQYXJzb25zKHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZzogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgdXNlUnVuZXN0b25lU2VydmljZXM6IGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIHJlbmRlcmluZyBQYXJzb25zIFByb2JsZW0gJHt0aGlzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXRhaWxzOiAke2Vycn1gKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PSBQYXJzb25zQmxvY2sgT2JqZWN0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PT09PSBUaGUgbW9kZWwgYW5kIHZpZXcgb2YgYSBjb2RlIGJsb2NrLlxuPT09PSBQUk9QRVJUSUVTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PT09PSBwcm9ibGVtOiB0aGUgUGFyc29ucyBwcm9ibGVtXG49PT09PT09PSBsaW5lczogYW4gYXJyYXkgb2YgUGFyc29uc0xpbmUgaW4gdGhpcyBibG9ja1xuPT09PT09PT0gaW5kZW50OiBpbmRlbnQgYmFzZWQgb24gbW92ZW1lbnRcbj09PT09PT09IHZpZXc6IGFuIGVsZW1lbnQgZm9yIHZpZXdpbmcgdGhpcyBvYmplY3Rcbj09PT09PT09IGxhYmVsczogW2xhYmVsLCBsaW5lXSB0aGUgbGFiZWxzIG51bWJlcmluZyB0aGUgYmxvY2sgYW5kIHRoZSBsaW5lcyB0aGV5IGdvIG9uXG49PT09PT09PSBoYW1tZXI6IHRoZSBjb250cm9sbGVyIGJhc2VkIG9uIGhhbW1lci5qc1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbmltcG9ydCBIYW1tZXIgZnJvbSBcIi4vaGFtbWVyLm1pbi5qc1wiO1xuXG4vLyBJbml0aWFsaXplIGJhc2VkIG9uIHRoZSBwcm9ibGVtIGFuZCB0aGUgbGluZXNcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNvbnNCbG9jayB7XG4gICAgY29uc3RydWN0b3IocHJvYmxlbSwgbGluZXMpIHtcbiAgICAgICAgdGhpcy5wcm9ibGVtID0gcHJvYmxlbTtcbiAgICAgICAgdGhpcy5saW5lcyA9IGxpbmVzO1xuICAgICAgICB0aGlzLmluZGVudCA9IDA7XG4gICAgICAgIHRoaXMubGFiZWxzID0gW107XG4gICAgICAgIC8vIENyZWF0ZSB2aWV3LCBhZGRpbmcgdmlldyBvZiBsaW5lcyBhbmQgdXBkYXRpbmcgaW5kZW50XG4gICAgICAgIHZhciB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmlldy5pZCA9IHByb2JsZW0uY291bnRlcklkICsgXCItYmxvY2stXCIgKyBwcm9ibGVtLmJsb2NrSW5kZXg7XG4gICAgICAgIHByb2JsZW0uYmxvY2tJbmRleCArPSAxO1xuICAgICAgICAkKHZpZXcpLmFkZENsYXNzKFwiYmxvY2tcIik7XG4gICAgICAgIHZhciBzaGFyZWRJbmRlbnQgPSBsaW5lc1swXS5pbmRlbnQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNoYXJlZEluZGVudCA9IE1hdGgubWluKHNoYXJlZEluZGVudCwgbGluZXNbaV0uaW5kZW50KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGluZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICQobGluZURpdikuYWRkQ2xhc3MoXCJsaW5lc1wiKTtcbiAgICAgICAgJCh2aWV3KS5hcHBlbmQobGluZURpdik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICB2YXIgbGluZUluZGVudDtcbiAgICAgICAgICAgIGlmIChwcm9ibGVtLm5vaW5kZW50KSB7XG4gICAgICAgICAgICAgICAgbGluZUluZGVudCA9IGxpbmUuaW5kZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaW5lSW5kZW50ID0gbGluZS5pbmRlbnQgLSBzaGFyZWRJbmRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKGxpbmUudmlldykucmVtb3ZlQ2xhc3MoXCJpbmRlbnQxIGluZGVudDIgaW5kZW50MyBpbmRlbnQ0XCIpO1xuICAgICAgICAgICAgaWYgKGxpbmVJbmRlbnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgJChsaW5lLnZpZXcpLmFkZENsYXNzKFwiaW5kZW50XCIgKyBsaW5lSW5kZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbmVEaXYuYXBwZW5kQ2hpbGQobGluZS52aWV3KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGFiZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAkKGxhYmVsRGl2KS5hZGRDbGFzcyhcImxhYmVsc1wiKTtcbiAgICAgICAgaWYgKHRoaXMucHJvYmxlbS5vcHRpb25zLm51bWJlcmVkID09IFwibGVmdFwiKSB7XG4gICAgICAgICAgICAkKGxpbmVEaXYpLmFkZENsYXNzKFwiYm9yZGVyX2xlZnRcIik7XG4gICAgICAgICAgICAkKHZpZXcpLnByZXBlbmQobGFiZWxEaXYpO1xuICAgICAgICAgICAgJCh2aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgIFwianVzdGlmeS1jb250ZW50XCI6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9ibGVtLm9wdGlvbnMubnVtYmVyZWQgPT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAkKGxhYmVsRGl2KS5hZGRDbGFzcyhcImJvcmRlcl9sZWZ0XCIpO1xuICAgICAgICAgICAgJChsYWJlbERpdikuY3NzKHtcbiAgICAgICAgICAgICAgICBmbG9hdDogXCJyaWdodFwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKHZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQodmlldykuYXBwZW5kKGxhYmVsRGl2KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgIH1cbiAgICAvLyBBZGQgYSBsaW5lIChmcm9tIGFub3RoZXIgYmxvY2spIHRvIHRoaXMgYmxvY2tcbiAgICBhZGRMaW5lKGxpbmUpIHtcbiAgICAgICAgJChsaW5lLnZpZXcpLnJlbW92ZUNsYXNzKFwiaW5kZW50MSBpbmRlbnQyIGluZGVudDMgaW5kZW50NFwiKTtcbiAgICAgICAgaWYgKHRoaXMucHJvYmxlbS5ub2luZGVudCkge1xuICAgICAgICAgICAgaWYgKGxpbmUuaW5kZW50ID4gMCkge1xuICAgICAgICAgICAgICAgICQobGluZS52aWV3KS5hZGRDbGFzcyhcImluZGVudFwiICsgbGluZS5pbmRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGxpbmVzID0gdGhpcy5saW5lcztcbiAgICAgICAgICAgIHZhciBzaGFyZWRJbmRlbnQgPSBsaW5lc1swXS5pbmRlbnQ7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2hhcmVkSW5kZW50ID0gTWF0aC5taW4oc2hhcmVkSW5kZW50LCBsaW5lc1tpXS5pbmRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNoYXJlZEluZGVudCA8IGxpbmUuaW5kZW50KSB7XG4gICAgICAgICAgICAgICAgJChsaW5lLnZpZXcpLmFkZENsYXNzKFwiaW5kZW50XCIgKyAobGluZS5pbmRlbnQgLSBzaGFyZWRJbmRlbnQpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hhcmVkSW5kZW50ID4gbGluZS5pbmRlbnQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICQobGluZXNbaV0udmlldykucmVtb3ZlQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImluZGVudDEgaW5kZW50MiBpbmRlbnQzIGluZGVudDRcIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAkKGxpbmVzW2ldLnZpZXcpLmFkZENsYXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmRlbnRcIiArIChsaW5lc1tpXS5pbmRlbnQgLSBsaW5lLmluZGVudClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAkKHRoaXMudmlldykuY2hpbGRyZW4oXCIubGluZXNcIilbMF0uYXBwZW5kQ2hpbGQobGluZS52aWV3KTtcbiAgICB9XG4gICAgLy8gQWRkIHRoZSBjb250ZW50cyBvZiB0aGF0IGJsb2NrIHRvIG15c2VsZiBhbmQgdGhlbiBkZWxldGUgdGhhdCBibG9ja1xuICAgIGNvbnN1bWVCbG9jayhibG9jaykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2NrLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkZExpbmUoYmxvY2subGluZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkKGJsb2NrLnZpZXcpLmF0dHIoXCJ0YWJpbmRleFwiKSA9PSBcIjBcIikge1xuICAgICAgICAgICAgdGhpcy5tYWtlVGFiSW5kZXgoKTtcbiAgICAgICAgfVxuICAgICAgICAkKGJsb2NrLnZpZXcpLmRldGFjaCgpO1xuICAgICAgICB2YXIgbmV3QmxvY2tzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9ibGVtLmJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvYmxlbS5ibG9ja3NbaV0gIT09IGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgbmV3QmxvY2tzLnB1c2godGhpcy5wcm9ibGVtLmJsb2Nrc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBibG9jay5sYWJlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTGFiZWwoXG4gICAgICAgICAgICAgICAgYmxvY2subGFiZWxzW2ldWzBdLFxuICAgICAgICAgICAgICAgIHRoaXMubGluZXMubGVuZ3RoIC0gYmxvY2subGluZXMubGVuZ3RoICsgYmxvY2subGFiZWxzW2ldWzFdXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvYmxlbS5ibG9ja3MgPSBuZXdCbG9ja3M7XG4gICAgICAgIHRoaXMucHJvYmxlbS5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5wcm9ibGVtLnVwZGF0ZVZpZXcoKTtcbiAgICB9XG4gICAgLy8gVXBkYXRlIHRoZSBtb2RlbCBhbmQgdmlldyB3aGVuIGJsb2NrIGlzIGNvbnZlcnRlZCB0byBjb250YWluIGluZGVudFxuICAgIGFkZEluZGVudCgpIHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBsaW5lcyBtb2RlbCAvIHZpZXdcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbGluZSA9IHRoaXMubGluZXNbaV07XG4gICAgICAgICAgICBpZiAobGluZS5pbmRlbnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgJChsaW5lLnZpZXcpLnJlbW92ZUNsYXNzKFwiaW5kZW50MSBpbmRlbnQyIGluZGVudDMgaW5kZW50NFwiKTtcbiAgICAgICAgICAgICAgICAkKGxpbmUudmlldykuYWRkQ2xhc3MoXCJpbmRlbnRcIiArIGxpbmUuaW5kZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGUgdGhlIGJsb2NrIG1vZGVsIC8gdmlld1xuICAgICAgICB0aGlzLmluZGVudCA9IDA7XG4gICAgICAgICQodGhpcy52aWV3KS5jc3Moe1xuICAgICAgICAgICAgXCJwYWRkaW5nLWxlZnRcIjogXCJcIixcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnByb2JsZW0uYXJlYVdpZHRoIC0gMjIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBBZGQgYSBsYWJlbCB0byBibG9jayBhbmQgdXBkYXRlIGl0cyB2aWV3XG4gICAgYWRkTGFiZWwobGFiZWwsIGxpbmUpIHtcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICQoZGl2KS5hZGRDbGFzcyhcImJsb2NrLWxhYmVsXCIpO1xuICAgICAgICBpZiAodGhpcy5wcm9ibGVtLm9wdGlvbnMubnVtYmVyZWQgPT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAkKGRpdikuYWRkQ2xhc3MoXCJyaWdodC1sYWJlbFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9ibGVtLm9wdGlvbnMubnVtYmVyZWQgPT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgICQoZGl2KS5hZGRDbGFzcyhcImxlZnQtbGFiZWxcIik7XG4gICAgICAgIH1cbiAgICAgICAgJChkaXYpLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYWJlbCkpO1xuICAgICAgICAkKHRoaXMudmlldykuY2hpbGRyZW4oXCIubGFiZWxzXCIpWzBdLmFwcGVuZChkaXYpO1xuICAgICAgICBpZiAodGhpcy5sYWJlbHMubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgICQoZGl2KS5jc3MoXG4gICAgICAgICAgICAgICAgXCJtYXJnaW4tdG9wXCIsXG4gICAgICAgICAgICAgICAgKGxpbmUgLSB0aGlzLmxhYmVsc1t0aGlzLmxhYmVscy5sZW5ndGggLSAxXVsxXSAtIDEpICpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5lc1tsaW5lXS52aWV3Lm9mZnNldEhlaWdodFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhYmVscy5wdXNoKFtsYWJlbCwgbGluZV0pO1xuICAgIH1cbiAgICAvLyBJbml0aWFsaXplIEludGVyYWN0aXZpdHlcbiAgICBpbml0aWFsaXplSW50ZXJhY3Rpdml0eSgpIHtcbiAgICAgICAgaWYgKCQodGhpcy52aWV3KS5oYXNDbGFzcyhcImRpc2FibGVkXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMudmlldykuYXR0cihcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgICAgIHRoaXMuaGFtbWVyID0gbmV3IEhhbW1lci5NYW5hZ2VyKHRoaXMudmlldywge1xuICAgICAgICAgICAgcmVjb2duaXplcnM6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIEhhbW1lci5QYW4sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9BTEwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyczogMSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhpcy5oYW1tZXIub24oXCJwYW5zdGFydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoYXQucGFuU3RhcnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5oYW1tZXIub24oXCJwYW5lbmRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGF0LnBhbkVuZChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhhbW1lci5vbihcInBhbm1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGF0LnBhbk1vdmUoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGEgYm9vbGVhbiBhcyB0byB3aGV0aGVyIHRoaXMgYmxvY2sgaXMgYWJsZSB0byBiZSBzZWxlY3RlZFxuICAgIGVuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiAkKHRoaXMudmlldykuYXR0cihcInRhYmluZGV4XCIpICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIFJldHVybiBhIGJvb2xlYW4gYXMgdG8gd2hldGhlciB0aGlzIGJsb2NrIGlzIGEgZGlzdHJhY3RvclxuICAgIGlzRGlzdHJhY3RvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGluZXNbMF0uZGlzdHJhY3RvcjtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGEgYm9vbGVhbiBhcyB0byB3aGV0aGVyIHRoaXMgYmxvY2sgaXMgaW4gdGhlIHNvdXJjZSBhcmVhXG4gICAgaW5Tb3VyY2VBcmVhKCkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb2JsZW0uc291cmNlQXJlYS5jaGlsZE5vZGVzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gdGhpcy52aWV3LmlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gdGhlIHBhZ2UgWCBwb3NpdGlvbiBvZiB0aGUgY2VudGVyIG9mIHRoZSB2aWV3XG4gICAgcGFnZVhDZW50ZXIoKSB7XG4gICAgICAgIHZhciBib3VuZGluZ1JlY3QgPSB0aGlzLnZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBwYWdlWENlbnRlciA9XG4gICAgICAgICAgICB3aW5kb3cucGFnZVhPZmZzZXQgKyBib3VuZGluZ1JlY3QubGVmdCArIGJvdW5kaW5nUmVjdC53aWR0aCAvIDI7XG4gICAgICAgIHJldHVybiBwYWdlWENlbnRlcjtcbiAgICB9XG4gICAgLy8gUmV0dXJuIHRoZSBwYWdlIFkgcG9zaXRpb24gb2YgdGhlIGNlbnRlciBvZiB0aGUgdmlld1xuICAgIHBhZ2VZQ2VudGVyKCkge1xuICAgICAgICB2YXIgYm91bmRpbmdSZWN0ID0gdGhpcy52aWV3LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgcGFnZVlDZW50ZXIgPVxuICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ICsgYm91bmRpbmdSZWN0LnRvcCArIGJvdW5kaW5nUmVjdC5oZWlnaHQgLyAyO1xuICAgICAgICByZXR1cm4gcGFnZVlDZW50ZXI7XG4gICAgfVxuICAgIC8vIE9mIGFsbCB0aGUgbGluZSBpbmRlbnRzLCByZXR1cm4gdGhlIG1pbmltdW0gdmFsdWVcbiAgICBtaW5pbXVtTGluZUluZGVudCgpIHtcbiAgICAgICAgdmFyIG1pbmltdW1MaW5lSW5kZW50ID0gdGhpcy5saW5lc1swXS5pbmRlbnQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5saW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWluaW11bUxpbmVJbmRlbnQgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVzW2ldLmluZGVudCxcbiAgICAgICAgICAgICAgICBtaW5pbXVtTGluZUluZGVudFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluaW11bUxpbmVJbmRlbnQ7XG4gICAgfVxuICAgIC8vIFJldHVybiB0aGUgbGFzdCBibG9jayBpbiB0aGUgc291cmNlIGFyZWEgdGhhdCBtYXRjaGVzIHRoZSBwYWlyZWQgYmluIGl0IGlzIGluXG4gICAgc2xpZGVVbmRlckJsb2NrKCkge1xuICAgICAgICB2YXIgc291cmNlQmxvY2tzID0gdGhpcy5wcm9ibGVtLnNvdXJjZUJsb2NrcygpO1xuICAgICAgICBpZiAoc291cmNlQmxvY2tzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYWlyZWRCaW4gPSB0aGlzLnBhaXJlZEJpbigpO1xuICAgICAgICBpZiAocGFpcmVkQmluID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gc291cmNlQmxvY2tzW3NvdXJjZUJsb2Nrcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gc291cmNlQmxvY2tzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgYmxvY2sgPSBzb3VyY2VCbG9ja3NbaV07XG4gICAgICAgICAgICBpZiAoYmxvY2sucGFpcmVkQmluKCkgPT0gcGFpcmVkQmluKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb3VyY2VCbG9ja3Nbc291cmNlQmxvY2tzLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gd2hpY2ggcGFpcmVkIGJpbiBpdCBpcyBpbiAoLTEpIGlmIG5vdFxuICAgIHBhaXJlZEJpbigpIHtcbiAgICAgICAgdmFyIHBhaXJlZEJpbnMgPSB0aGlzLnByb2JsZW0ucGFpcmVkQmlucztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlyZWRCaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaGVzQmluKHBhaXJlZEJpbnNbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gdHJ1ZSBpZiBhbGwgbGluZXMgYXJlIGluIHRoYXQgYmluXG4gICAgbWF0Y2hlc0JpbihiaW4pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGVzdCA9IHRoaXMubGluZXNbaV0uaW5kZXg7XG4gICAgICAgICAgICBpZiAoYmluLmluZGV4T2YodGVzdCkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIFJldHVybiBhIGxpc3Qgb2YgaW5kZXhlcyB3aGVyZSB0aGlzIGJsb2NrIGNvdWxkIGJlIGluc2VydGVkIGJlZm9yZVxuICAgIHZhbGlkU291cmNlSW5kZXhlcygpIHtcbiAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMucHJvYmxlbS5zb3VyY2VCbG9ja3MoKTtcbiAgICAgICAgdmFyIGluZGV4ZXMgPSBbXTtcbiAgICAgICAgdmFyIHBhaXJlZEJpbiA9IHRoaXMucGFpcmVkQmluKCk7XG4gICAgICAgIHZhciBpLCBsYXN0QmluO1xuICAgICAgICBpZiAocGFpcmVkQmluID49IDApIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYmxvY2sgPSBibG9ja3NbaV07XG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrLnZpZXcuaWQgIT09IHRoaXMudmlldy5pZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYmxvY2tCaW4gPSBibG9jay5wYWlyZWRCaW4oKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrQmluID09IHBhaXJlZEJpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxhc3RCaW4gPT0gcGFpcmVkQmluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGFzdEJpbiA9IGJsb2NrQmluO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsYXN0QmluID09IHBhaXJlZEJpbikge1xuICAgICAgICAgICAgICAgIGluZGV4ZXMucHVzaChibG9ja3MubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbmRleGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXhlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYmxvY2sgPSBibG9ja3NbaV07XG4gICAgICAgICAgICBpZiAoYmxvY2sudmlldy5pZCAhPT0gdGhpcy52aWV3LmlkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJsb2NrQmluID0gYmxvY2sucGFpcmVkQmluKCk7XG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrQmluICE9PSBsYXN0QmluKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ZXMucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJsb2NrQmluID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ZXMucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFzdEJpbiA9IGJsb2NrQmluO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGluZGV4ZXMucHVzaChibG9ja3MubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG4gICAgfVxuICAgIC8vIEEgbWVhc3VyZSBvZiBob3cgZmFyIHRoZSBtaWRkbGUgb2YgdGhpcyBibG9jayBpcyB2ZXJ0aWNhbGx5IHBvc2l0aW9uZWRcbiAgICB2ZXJ0aWNhbE9mZnNldCgpIHtcbiAgICAgICAgdmFyIHZlcnRpY2FsT2Zmc2V0O1xuICAgICAgICBpZiAodGhpcy5pblNvdXJjZUFyZWEoKSkge1xuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSB0aGlzLnByb2JsZW0uc291cmNlQXJlYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgICAgIC50b3A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IHRoaXMucHJvYmxlbS5hbnN3ZXJBcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICAgICAgLnRvcDtcbiAgICAgICAgfVxuICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICtcbiAgICAgICAgICAgIHRoaXMudmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gLVxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgKiAyO1xuICAgICAgICByZXR1cm4gdmVydGljYWxPZmZzZXQ7XG4gICAgfVxuICAgIC8vIFRoaXMgYmxvY2sganVzdCBnYWluZWQgdGV4dHVhbCBmb2N1c1xuICAgIG5ld0ZvY3VzKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9ibGVtLnRleHRGb2N1cyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvYmxlbS5lbnRlcktleWJvYXJkTW9kZSgpO1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRGb2N1cyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dE1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICQodGhpcy52aWV3KS5hZGRDbGFzcyhcImRvd25cIik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9ibGVtLnRleHRGb2N1cyA9PSB0aGlzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ibGVtLnRleHRNb3ZlKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnZpZXcpLmFkZENsYXNzKFwidXBcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcy52aWV3KS5hZGRDbGFzcyhcImRvd25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhbHJlYWR5IGluIGtleWJvYXJkIG1vZGVcbiAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0Rm9jdXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRNb3ZlID0gZmFsc2U7XG4gICAgICAgICAgICAkKHRoaXMudmlldykuYWRkQ2xhc3MoXCJkb3duXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92aW5nID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIFRoaXMgYmxvY2sganVzdCBsb3N0IHRleHR1YWwgZm9jdXNcbiAgICByZWxlYXNlRm9jdXMoKSB7XG4gICAgICAgICQodGhpcy52aWV3KS5yZW1vdmVDbGFzcyhcImRvd24gdXBcIik7XG4gICAgICAgIGlmICh0aGlzLnByb2JsZW0udGV4dEZvY3VzID09IHRoaXMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9ibGVtLnRleHRNb3ZpbmcpIHtcbiAgICAgICAgICAgICAgICAvLyBleGl0IG91dCBvZiBwcm9ibGVtIGJ1dCBzdGF5IHdheSBpbnRvIHByb2JsZW1cbiAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dEZvY3VzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2JsZW0udGV4dE1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLmxvZ01vdmUoXCJrbW92ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRNb3ZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS5leGl0S2V5Ym9hcmRNb2RlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBiZWNvbWUgc2VsZWN0YWJsZSwgYnV0IG5vdCBhY3RpdmVcbiAgICAgICAgICAgICQodGhpcy52aWV3KS5hdHRyKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICAgICAgICAgICQodGhpcy52aWV3KS51bmJpbmQoXCJmb2N1c1wiKTtcbiAgICAgICAgICAgICQodGhpcy52aWV3KS51bmJpbmQoXCJibHVyXCIpO1xuICAgICAgICAgICAgJCh0aGlzLnZpZXcpLnVuYmluZChcImtleWRvd25cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gTWFrZSB0aGlzIGJsb2NrIGludG8gdGhlIGtleWJvYXJkIGVudHJ5IHBvaW50XG4gICAgbWFrZVRhYkluZGV4KCkge1xuICAgICAgICAkKHRoaXMudmlldykuYXR0cihcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAkKHRoaXMudmlldykuZm9jdXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC5uZXdGb2N1cygpO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzLnZpZXcpLmJsdXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC5yZWxlYXNlRm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQodGhpcy52aWV3KS5rZXlkb3duKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhhdC5rZXlEb3duKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIENhbGxlZCB0byBkaXNhYmxlIGludGVyYWN0aW9uIGZvciB0aGUgZnV0dXJlXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFtbWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFtbWVyLnNldCh7IGVuYWJsZTogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCQodGhpcy52aWV3KS5hdHRyKFwidGFiaW5kZXhcIikgPT0gXCIwXCIpIHtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZUZvY3VzKCk7XG4gICAgICAgICAgICAkKHRoaXMudmlldykucmVtb3ZlQXR0cihcInRhYmluZGV4XCIpO1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLmluaXRpYWxpemVUYWJJbmRleCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzLnZpZXcpLnJlbW92ZUF0dHIoXCJ0YWJpbmRleFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBFbmFibGUgZnVuY3Rpb25hbGl0eSBhZnRlciByZXNldCBidXR0b24gaGFzIGJlZW4gcHJlc3NlZFxuICAgIHJlc2V0VmlldygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFtbWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFtbWVyLnNldCh7IGVuYWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISQodGhpcy52aWV3KVswXS5oYXNBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKSkge1xuICAgICAgICAgICAgJCh0aGlzLnZpZXcpLmF0dHIoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICAgICAgICB9XG4gICAgICAgICQodGhpcy52aWV3KS5jc3MoeyBvcGFjaXR5OiBcIlwiIH0pO1xuICAgIH1cbiAgICAvLyBDYWxsZWQgdG8gZGVzdHJveSBpbnRlcmFjdGlvbiBmb3IgdGhlIGZ1dHVyZVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmhhbW1lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhbW1lci5kZXN0cm95KCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5oYW1tZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCQodGhpcy52aWV3KS5hdHRyKFwidGFiaW5kZXhcIikgPT0gXCIwXCIpIHtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZUZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzLnZpZXcpLnJlbW92ZUF0dHIoXCJ0YWJpbmRleFwiKTtcbiAgICB9XG4gICAgLy8gQ2FsbGVkIHdoZW4gYSBibG9jayBpcyBwaWNrZWQgdXBcbiAgICBwYW5TdGFydChldmVudCkge1xuICAgICAgICB0aGlzLnByb2JsZW0uY2xlYXJGZWVkYmFjaygpO1xuICAgICAgICBpZiAodGhpcy5wcm9ibGVtLnN0YXJ0ZWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBsb2cgdGhlIGZpcnN0IHRpbWUgdGhhdCBzb21ldGhpbmcgZ2V0cyBtb3ZlZFxuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLmxvZ01vdmUoXCJzdGFydFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9ibGVtLnRleHRGb2N1cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBzdG9wIHRleHQgZm9jdXMgd2hlbiBkcmFnZ2luZ1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRGb2N1cy5yZWxlYXNlRm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2JsZW0ubW92aW5nID0gdGhpcztcbiAgICAgICAgLy8gVXBkYXRlIHRoZSB2aWV3XG4gICAgICAgIHRoaXMucHJvYmxlbS5tb3ZpbmdYID0gZXZlbnQuc3JjRXZlbnQucGFnZVg7XG4gICAgICAgIHRoaXMucHJvYmxlbS5tb3ZpbmdZID0gZXZlbnQuc3JjRXZlbnQucGFnZVk7XG4gICAgICAgIHRoaXMucHJvYmxlbS51cGRhdGVWaWV3KCk7XG4gICAgfVxuICAgIC8vIENhbGxlZCB3aGVuIGEgYmxvY2sgaXMgZHJvcHBlZFxuICAgIHBhbkVuZChldmVudCkge1xuICAgICAgICB0aGlzLnByb2JsZW0uaXNBbnN3ZXJlZCA9IHRydWU7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnByb2JsZW0ubW92aW5nO1xuICAgICAgICBkZWxldGUgdGhpcy5wcm9ibGVtLm1vdmluZ1g7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnByb2JsZW0ubW92aW5nWTtcbiAgICAgICAgdGhpcy5wcm9ibGVtLnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgdGhpcy5wcm9ibGVtLmxvZ01vdmUoXCJtb3ZlXCIpO1xuICAgIH1cbiAgICAvLyBDYWxsZWQgd2hlbiBhIGJsb2NrIGlzIG1vdmVkXG4gICAgcGFuTW92ZShldmVudCkge1xuICAgICAgICAvLyBVcGRhdGUgdGhlIHZpZXdcbiAgICAgICAgdGhpcy5wcm9ibGVtLm1vdmluZ1ggPSBldmVudC5zcmNFdmVudC5wYWdlWDtcbiAgICAgICAgdGhpcy5wcm9ibGVtLm1vdmluZ1kgPSBldmVudC5zcmNFdmVudC5wYWdlWTtcbiAgICAgICAgdGhpcy5wcm9ibGVtLnVwZGF0ZVZpZXcoKTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGEga2V5cHJlc3MgZXZlbnQgd2hlbiBpbiBmb2N1c1xuICAgIGtleURvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvYmxlbS5zdGFydGVkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gbG9nIHRoZSBmaXJzdCB0aW1lIHRoYXQgc29tZXRoaW5nIGdldHMgbW92ZWRcbiAgICAgICAgICAgIHRoaXMucHJvYmxlbS5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJvYmxlbS5sb2dNb3ZlKFwia3N0YXJ0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSAzNzogLy8gbGVmdFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2JsZW0udGV4dE1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlTGVmdCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0TGVmdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzg6IC8vIHVwXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvYmxlbS50ZXh0TW92ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVVcCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzk6IC8vIHJpZ2h0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvYmxlbS50ZXh0TW92ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDA6IC8vIGRvd25cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9ibGVtLnRleHRNb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURvd24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdERvd24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzI6IC8vIHNwYWNlXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNb3ZlKCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTM6IC8vIGVudGVyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNb3ZlKCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBNb3ZlIGJsb2NrIGxlZnRcbiAgICBtb3ZlTGVmdCgpIHtcbiAgICAgICAgdmFyIGluZGV4LCBibG9jaztcbiAgICAgICAgaWYgKCF0aGlzLmluU291cmNlQXJlYSgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbmRlbnQgPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIG1vdmUgdG8gc291cmNlIGFyZWFcbiAgICAgICAgICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5wcm9ibGVtLnNvdXJjZUJsb2NrcygpO1xuICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLnZlcnRpY2FsT2Zmc2V0KCk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkU291cmNlSW5kZXhlcyA9IHRoaXMudmFsaWRTb3VyY2VJbmRleGVzKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWxpZFNvdXJjZUluZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB2YWxpZFNvdXJjZUluZGV4ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSBibG9ja3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dE1vdmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0uc291cmNlQXJlYS5hcHBlbmRDaGlsZCh0aGlzLnZpZXcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzLnZpZXcpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0uc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0udXBkYXRlVmlldygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jayA9IGJsb2Nrc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2sudmVydGljYWxPZmZzZXQoKSA+PSBvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dE1vdmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnNvdXJjZUFyZWEuaW5zZXJ0QmVmb3JlKHRoaXMudmlldywgYmxvY2sudmlldyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnZpZXcpLmZvY3VzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHJlZHVjZSBpbmRlbnRcbiAgICAgICAgICAgICAgICB0aGlzLmluZGVudCA9IHRoaXMuaW5kZW50IC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvYmxlbS5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMucHJvYmxlbS51cGRhdGVWaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gTW92ZSBibG9jayB1cFxuICAgIG1vdmVVcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5Tb3VyY2VBcmVhKCkpIHtcbiAgICAgICAgICAgIGxldCBibG9ja3MgPSB0aGlzLnByb2JsZW0uc291cmNlQmxvY2tzKCk7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy52ZXJ0aWNhbE9mZnNldCgpO1xuICAgICAgICAgICAgdmFyIHZhbGlkU291cmNlSW5kZXhlcyA9IHRoaXMudmFsaWRTb3VyY2VJbmRleGVzKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkU291cmNlSW5kZXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkU291cmNlSW5kZXhlc1t2YWxpZFNvdXJjZUluZGV4ZXMubGVuZ3RoIC0gMSAtIGldO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IGJsb2Nrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gYmxvY2tzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrLnZlcnRpY2FsT2Zmc2V0KCkgPCBvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS5zb3VyY2VBcmVhLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2sudmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcy52aWV3KS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGJsb2NrcyA9IHRoaXMucHJvYmxlbS5hbnN3ZXJCbG9ja3MoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJsb2Nrc1tpXS52aWV3LmlkID09IHRoaXMudmlldy5pZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dE1vdmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS5hbnN3ZXJBcmVhLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrc1tpIC0gMV0udmlld1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMudmlldykuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0udXBkYXRlVmlldygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBNb3ZlIGJsb2NrIHJpZ2h0XG4gICAgbW92ZVJpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5pblNvdXJjZUFyZWEoKSkge1xuICAgICAgICAgICAgLy8gbW92ZSB0byBhbnN3ZXIgYXJlYVxuICAgICAgICAgICAgdGhpcy5pbmRlbnQgPSAwO1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMudmVydGljYWxPZmZzZXQoKTtcbiAgICAgICAgICAgIHZhciBhbnN3ZXJCbG9ja3MgPSB0aGlzLnByb2JsZW0uYW5zd2VyQmxvY2tzKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFuc3dlckJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gYW5zd2VyQmxvY2tzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtT2Zmc2V0ID0gaXRlbS52ZXJ0aWNhbE9mZnNldCgpO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtT2Zmc2V0ID49IG9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dE1vdmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS5hbnN3ZXJBcmVhLmluc2VydEJlZm9yZSh0aGlzLnZpZXcsIGl0ZW0udmlldyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy52aWV3KS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0uc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS51cGRhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJvYmxlbS5hbnN3ZXJBcmVhLmFwcGVuZENoaWxkKHRoaXMudmlldyk7XG4gICAgICAgICAgICAkKHRoaXMudmlldykuZm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMucHJvYmxlbS5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMucHJvYmxlbS51cGRhdGVWaWV3KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpbiBhbnN3ZXIgYXJlYTogaW5jcmVhc2UgdGhlIGluZGVudFxuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZW50ICE9PSB0aGlzLnByb2JsZW0uaW5kZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRlbnQgPSB0aGlzLmluZGVudCArIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS51cGRhdGVWaWV3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gTW92ZSBibG9jayBkb3duXG4gICAgbW92ZURvd24oKSB7XG4gICAgICAgIGlmICh0aGlzLmluU291cmNlQXJlYSgpKSB7XG4gICAgICAgICAgICBsZXQgYmxvY2tzID0gdGhpcy5wcm9ibGVtLnNvdXJjZUJsb2NrcygpO1xuICAgICAgICAgICAgdmFyIHZhbGlkU291cmNlSW5kZXhlcyA9IHRoaXMudmFsaWRTb3VyY2VJbmRleGVzKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChibG9ja3NbaV0udmlldy5pZCA9PSB0aGlzLnZpZXcuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG15SW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsaWRTb3VyY2VJbmRleGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdmFsaWRTb3VyY2VJbmRleGVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSBibG9ja3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnNvdXJjZUFyZWEuYXBwZW5kQ2hpbGQodGhpcy52aWV3KTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLnZpZXcpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCAtIG15SW5kZXggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnNvdXJjZUFyZWEuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzW2luZGV4XS52aWV3XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy52aWV3KS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0uc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS51cGRhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBibG9ja3MgPSB0aGlzLnByb2JsZW0uYW5zd2VyQmxvY2tzKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChibG9ja3NbaV0udmlldy5pZCA9PSB0aGlzLnZpZXcuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gYmxvY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT0gYmxvY2tzLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS5hbnN3ZXJBcmVhLmFwcGVuZENoaWxkKHRoaXMudmlldyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dE1vdmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0uYW5zd2VyQXJlYS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrc1tpICsgMl0udmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMudmlldykuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0udXBkYXRlVmlldygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBNb3ZlIHNlbGVjdGlvbiBsZWZ0XG4gICAgc2VsZWN0TGVmdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluU291cmNlQXJlYSgpKSB7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy52ZXJ0aWNhbE9mZnNldCgpO1xuICAgICAgICAgICAgdmFyIHNvdXJjZUJsb2NrcyA9IHRoaXMucHJvYmxlbS5lbmFibGVkU291cmNlQmxvY2tzKCk7XG4gICAgICAgICAgICBpZiAoc291cmNlQmxvY2tzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY2hvb3NlTmV4dCA9IHNvdXJjZUJsb2Nrc1swXTtcbiAgICAgICAgICAgIHZhciBjaG9vc2VPZmZzZXQgPSBjaG9vc2VOZXh0LnZlcnRpY2FsT2Zmc2V0KCkgLSBvZmZzZXQ7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHNvdXJjZUJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gc291cmNlQmxvY2tzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtT2Zmc2V0ID0gaXRlbS52ZXJ0aWNhbE9mZnNldCgpIC0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhpdGVtT2Zmc2V0KSA8IE1hdGguYWJzKGNob29zZU9mZnNldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hvb3NlTmV4dCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgIGNob29zZU9mZnNldCA9IGl0ZW1PZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRGb2N1cyA9IGNob29zZU5leHQ7XG4gICAgICAgICAgICBjaG9vc2VOZXh0Lm1ha2VUYWJJbmRleCgpO1xuICAgICAgICAgICAgJChjaG9vc2VOZXh0LnZpZXcpLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gTW92ZSBzZWxlY3Rpb24gdXBcbiAgICBzZWxlY3RVcCgpIHtcbiAgICAgICAgdmFyIGNob29zZU5leHQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGJsb2NrcztcbiAgICAgICAgaWYgKHRoaXMuaW5Tb3VyY2VBcmVhKCkpIHtcbiAgICAgICAgICAgIGJsb2NrcyA9IHRoaXMucHJvYmxlbS5lbmFibGVkU291cmNlQmxvY2tzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBibG9ja3MgPSB0aGlzLnByb2JsZW0uZW5hYmxlZEFuc3dlckJsb2NrcygpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSBibG9ja3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gYmxvY2tzW2ldO1xuICAgICAgICAgICAgaWYgKGNob29zZU5leHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dEZvY3VzID0gaXRlbTtcbiAgICAgICAgICAgICAgICBpdGVtLm1ha2VUYWJJbmRleCgpO1xuICAgICAgICAgICAgICAgICQoaXRlbS52aWV3KS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS52aWV3LmlkID09IHRoaXMudmlldy5pZCkge1xuICAgICAgICAgICAgICAgICAgICBjaG9vc2VOZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gTW92ZSBzZWxlY3Rpb24gcmlnaHRcbiAgICBzZWxlY3RSaWdodCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5Tb3VyY2VBcmVhKCkpIHtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLnZlcnRpY2FsT2Zmc2V0KCk7XG4gICAgICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5wcm9ibGVtLmVuYWJsZWRBbnN3ZXJCbG9ja3MoKTtcbiAgICAgICAgICAgIGlmIChibG9ja3MubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjaG9vc2VOZXh0ID0gYmxvY2tzWzBdO1xuICAgICAgICAgICAgdmFyIGNob29zZU9mZnNldCA9IGNob29zZU5leHQudmVydGljYWxPZmZzZXQoKSAtIG9mZnNldDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBibG9ja3NbaV07XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1PZmZzZXQgPSBpdGVtLnZlcnRpY2FsT2Zmc2V0KCkgLSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGl0ZW1PZmZzZXQpIDwgTWF0aC5hYnMoY2hvb3NlT2Zmc2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBjaG9vc2VOZXh0ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgY2hvb3NlT2Zmc2V0ID0gaXRlbU9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dEZvY3VzID0gY2hvb3NlTmV4dDtcbiAgICAgICAgICAgIGNob29zZU5leHQubWFrZVRhYkluZGV4KCk7XG4gICAgICAgICAgICAkKGNob29zZU5leHQudmlldykuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBNb3ZlIHNlbGVjdGlvbiBkb3duXG4gICAgc2VsZWN0RG93bigpIHtcbiAgICAgICAgdmFyIGNob29zZU5leHQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGJsb2NrcztcbiAgICAgICAgaWYgKHRoaXMuaW5Tb3VyY2VBcmVhKCkpIHtcbiAgICAgICAgICAgIGJsb2NrcyA9IHRoaXMucHJvYmxlbS5lbmFibGVkU291cmNlQmxvY2tzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBibG9ja3MgPSB0aGlzLnByb2JsZW0uZW5hYmxlZEFuc3dlckJsb2NrcygpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgIGlmIChjaG9vc2VOZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRGb2N1cyA9IGl0ZW07XG4gICAgICAgICAgICAgICAgaXRlbS5tYWtlVGFiSW5kZXgoKTtcbiAgICAgICAgICAgICAgICAkKGl0ZW0udmlldykuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udmlldy5pZCA9PSB0aGlzLnZpZXcuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hvb3NlTmV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFRvZ2dsZSB3aGV0aGVyIHRvIG1vdmUgdGhpcyBibG9ja1xuICAgIHRvZ2dsZU1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2JsZW0udGV4dE1vdmUpIHtcbiAgICAgICAgICAgICQodGhpcy52aWV3KS5yZW1vdmVDbGFzcyhcInVwXCIpO1xuICAgICAgICAgICAgJCh0aGlzLnZpZXcpLmFkZENsYXNzKFwiZG93blwiKTtcbiAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLmxvZ01vdmUoXCJrbW92ZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcy52aWV3KS5yZW1vdmVDbGFzcyhcImRvd25cIik7XG4gICAgICAgICAgICAkKHRoaXMudmlldykuYWRkQ2xhc3MoXCJ1cFwiKTtcbiAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQW5zd2VyIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGlzIGNvZGVibG9jayBmb3Igc2F2aW5nXG4gICAgaGFzaCgpIHtcbiAgICAgICAgdmFyIGhhc2ggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhhc2ggKz0gdGhpcy5saW5lc1tpXS5pbmRleCArIFwiX1wiO1xuICAgICAgICB9XG4gICAgICAgIGhhc2ggKz0gdGhpcy5pbmRlbnQ7XG4gICAgICAgIHJldHVybiBoYXNoO1xuICAgIH1cbiAgICAvLyBBbnN3ZXIgd2hhdCB0aGUgaW5kZW50IHNob3VsZCBiZSBmb3IgdGhlIHNvbHV0aW9uXG4gICAgc29sdXRpb25JbmRlbnQoKSB7XG4gICAgICAgIHZhciBzaGFyZWRJbmRlbnQgPSB0aGlzLmxpbmVzWzBdLmluZGVudDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzaGFyZWRJbmRlbnQgPSBNYXRoLm1pbihzaGFyZWRJbmRlbnQsIHRoaXMubGluZXNbaV0uaW5kZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hhcmVkSW5kZW50O1xuICAgIH1cbn1cbiIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PSBQYXJzb25zTGluZSBPYmplY3QgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PT09PSBUaGUgbW9kZWwgYW5kIHZpZXcgb2YgYSBsaW5lIG9mIGNvZGUuXG49PT09PT09PSBCYXNlZCBvbiB3aGF0IGlzIHNwZWNpZmllZCBpbiB0aGUgcHJvYmxlbS5cbj09PT09PT09IFBhcnNvbkJsb2NrIG9iamVjdHMgaGF2ZSBvbmUgb3IgbW9yZSBvZiB0aGVzZS5cbj09PT0gUFJPUEVSVElFUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PT09PT0gcHJvYmxlbTogdGhlIFBhcnNvbnMgcHJvYmxlbVxuPT09PT09PT0gaW5kZXg6IHRoZSBpbmRleCBvZiB0aGUgbGluZSBpbiB0aGUgcHJvYmxlbVxuPT09PT09PT0gdGV4dDogdGhlIHRleHQgb2YgdGhlIGNvZGUgbGluZVxuPT09PT09PT0gaW5kZW50OiB0aGUgaW5kZW50IGxldmVsXG49PT09PT09PSB2aWV3OiBhbiBlbGVtZW50IGZvciB2aWV3aW5nIHRoaXMgb2JqZWN0XG49PT09PT09PSBkaXN0cmFjdG9yOiB3aGV0aGVyIGl0IGlzIGEgZGlzdHJhY3RvclxuPT09PT09PT0gcGFpcmVkOiB3aGV0aGVyIGl0IGlzIGEgcGFpcmVkIGRpc3RyYWN0b3Jcbj09PT09PT09IGdyb3VwV2l0aE5leHQ6IHdoZXRoZXIgaXQgaXMgZ3JvdXBlZCB3aXRoIHRoZSBmb2xsb3dpbmcgbGluZVxuPT09PT09PT0gd2lkdGg6IHRoZSBwaXhlbCB3aWR0aCB3aGVuIHJlbmRlcmVkXG49PT09PT09PT09PT0gaW4gdGhlIGluaXRpYWwgZ3JvdXBpbmdcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLy8gSW5pdGlhbGl6ZSBmcm9tIGNvZGVzdHJpbmdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc29uc0xpbmUge1xuICAgIGNvbnN0cnVjdG9yKHByb2JsZW0sIGNvZGVzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wcm9ibGVtID0gcHJvYmxlbTtcbiAgICAgICAgdGhpcy5pbmRleCA9IHByb2JsZW0ubGluZXMubGVuZ3RoO1xuICAgICAgICB2YXIgdHJpbW1lZCA9IGNvZGVzdHJpbmcucmVwbGFjZSgvXFxzKiQvLCBcIlwiKTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdHJpbW1lZC5yZXBsYWNlKC9eXFxzKi8sIFwiXCIpO1xuICAgICAgICB0aGlzLmluZGVudCA9IHRyaW1tZWQubGVuZ3RoIC0gdGhpcy50ZXh0Lmxlbmd0aDtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBWaWV3XG4gICAgICAgIHZhciB2aWV3O1xuICAgICAgICBpZiAocHJvYmxlbS5vcHRpb25zLmxhbmd1YWdlID09IFwibmF0dXJhbFwiIHx8IHByb2JsZW0ub3B0aW9ucy5sYW5ndWFnZSA9PSBcIm1hdGhcIikge1xuICAgICAgICAgICAgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIpO1xuICAgICAgICAgICAgJCh2aWV3KS5hZGRDbGFzcyhwcm9ibGVtLm9wdGlvbnMucHJldHRpZnlMYW5ndWFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmlldy5pZCA9IHByb2JsZW0uY291bnRlcklkICsgXCItbGluZS1cIiArIHRoaXMuaW5kZXg7XG4gICAgICAgIHZpZXcuaW5uZXJIVE1MICs9IHRoaXMudGV4dDtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgcHJvYmxlbS5saW5lcy5wdXNoKHRoaXMpO1xuICAgIH1cbiAgICAvLyBJbml0aWFsaXplIHdoYXQgd2lkdGggdGhlIGxpbmUgd291bGQgbmF0dXJhbGx5IGhhdmUgKHdpdGhvdXQgaW5kZW50KVxuICAgIGluaXRpYWxpemVXaWR0aCgpIHtcbiAgICAgICAgLy8gdGhpcy53aWR0aCBkb2VzIG5vdCBhcHBlYXIgdG8gYmUgdXNlZCBhbnl3aGVyZSBsYXRlclxuICAgICAgICAvLyBzaW5jZSBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgdGhpcy53aWR0aCBhcHBlYXJzIHRvIGhhdmUgbm8gZWZmZWN0LiAtIFZpbmNlbnQgUWl1IChTZXB0ZW1iZXIgMjAyMClcbiAgICAgICAgdGhpcy53aWR0aCA9XG4gICAgICAgICAgICAkKHRoaXMudmlldykub3V0ZXJXaWR0aCh0cnVlKSAtXG4gICAgICAgICAgICB0aGlzLnByb2JsZW0ub3B0aW9ucy5waXhlbHNQZXJJbmRlbnQgKiB0aGlzLmluZGVudDtcblxuICAgICAgICAvLyBQYXNzIHRoaXMgaW5mb3JtYXRpb24gb24gdG8gYmUgdXNlZCBpbiBjbGFzcyBQYXJzb25zIGZ1bmN0aW9uIGluaXRpYWxpemVBcmVhc1xuICAgICAgICAvLyB0byBtYW51YWxseSBkZXRlcm1pbmUgYXBwcm9wcmlhdGUgd2lkdGhzIC0gVmluY2VudCBRaXUgKFNlcHRlbWJlciAyMDIwKVxuICAgICAgICB0aGlzLnZpZXcuZm9udFNpemUgPSB3aW5kb3dcbiAgICAgICAgICAgIC5nZXRDb21wdXRlZFN0eWxlKHRoaXMudmlldywgbnVsbClcbiAgICAgICAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zaXplXCIpO1xuICAgICAgICB0aGlzLnZpZXcucGl4ZWxzUGVySW5kZW50ID0gdGhpcy5wcm9ibGVtLm9wdGlvbnMucGl4ZWxzUGVySW5kZW50O1xuICAgICAgICB0aGlzLnZpZXcuaW5kZW50ID0gdGhpcy5pbmRlbnQ7XG5cbiAgICAgICAgLy8gRmlndXJlIG91dCB3aGljaCB0eXBlZmFjZSB3aWxsIGJlIHJlbmRlcmVkIGJ5IGNvbXBhcmluZyB0ZXh0IHdpZHRocyB0byBicm93c2VyIGRlZmF1bHQgLSBWaW5jZW50IFFpdSAoU2VwdGVtYmVyIDIwMjApXG4gICAgICAgIHZhciB0ZW1wQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgdmFyIHRlbXBDYW52YXNDdHggPSB0ZW1wQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdmFyIHBvc3NpYmxlRm9udHMgPSB3aW5kb3dcbiAgICAgICAgICAgIC5nZXRDb21wdXRlZFN0eWxlKHRoaXMudmlldywgbnVsbClcbiAgICAgICAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1mYW1pbHlcIilcbiAgICAgICAgICAgIC5zcGxpdChcIiwgXCIpO1xuICAgICAgICB2YXIgZmlsbGVyVGV4dCA9IFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5LC4vIUAjJCVeJiotK1wiO1xuICAgICAgICB0ZW1wQ2FudmFzQ3R4LmZvbnQgPSB0aGlzLnZpZXcuZm9udFNpemUgKyBcIiBzZXJpZlwiO1xuICAgICAgICB2YXIgc2VyaWZXaWR0aCA9IHRlbXBDYW52YXNDdHgubWVhc3VyZVRleHQoZmlsbGVyVGV4dCkud2lkdGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zc2libGVGb250cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBvc3NpYmxlRm9udHNbaV0uaW5jbHVkZXMoJ1wiJykpIHtcbiAgICAgICAgICAgICAgICBwb3NzaWJsZUZvbnRzW2ldID0gcG9zc2libGVGb250c1tpXS5yZXBsYWNlQWxsKCdcIicsIFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBvc3NpYmxlRm9udHNbaV0uaW5jbHVkZXMoXCInXCIpKSB7XG4gICAgICAgICAgICAgICAgcG9zc2libGVGb250c1tpXSA9IHBvc3NpYmxlRm9udHNbaV0ucmVwbGFjZUFsbChcIidcIiwgXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZW1wQ2FudmFzQ3R4LmZvbnQgPSB0aGlzLnZpZXcuZm9udFNpemUgKyBcIiBcIiArIHBvc3NpYmxlRm9udHNbaV07XG4gICAgICAgICAgICBpZiAodGVtcENhbnZhc0N0eC5tZWFzdXJlVGV4dChmaWxsZXJUZXh0KS53aWR0aCAhPT0gc2VyaWZXaWR0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5mb250RmFtaWx5ID0gcG9zc2libGVGb250c1tpXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBbnN3ZXIgdGhlIGJsb2NrIHRoYXQgdGhpcyBsaW5lIGlzIGN1cnJlbnRseSBpblxuICAgIGJsb2NrKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvYmxlbS5ibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBibG9jayA9IHRoaXMucHJvYmxlbS5ibG9ja3NbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJsb2NrLmxpbmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrLmxpbmVzW2pdID09PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gQW5zd2VyIHRoZSBpbmRlbnQgYmFzZWQgb24gdGhlIHZpZXdcbiAgICB2aWV3SW5kZW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9ibGVtLm5vaW5kZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbmRlbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgYmxvY2sgPSB0aGlzLmJsb2NrKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbmRlbnQgLSBibG9jay5zb2x1dGlvbkluZGVudCgpICsgYmxvY2suaW5kZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZnVuY3Rpb24gSCgpIHtcbiAgICB2YXIgeCA9XG4gICAgICAgIG5hdmlnYXRvciAmJlxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50ICYmXG4gICAgICAgIC9cXGJNU0lFIDZcXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgSCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9O1xuICAgIHJldHVybiB4O1xufVxuKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIHgoYikge1xuICAgICAgICBiID0gYi5zcGxpdCgvIC9nKTtcbiAgICAgICAgdmFyIGEgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgYyA9IGIubGVuZ3RoOyAtLWMgPj0gMDsgKSB7XG4gICAgICAgICAgICB2YXIgZCA9IGJbY107XG4gICAgICAgICAgICBpZiAoZCkgYVtkXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIHZhciB5ID0gXCJicmVhayBjb250aW51ZSBkbyBlbHNlIGZvciBpZiByZXR1cm4gd2hpbGUgXCIsXG4gICAgICAgIFUgPVxuICAgICAgICAgICAgeSArXG4gICAgICAgICAgICBcImF1dG8gY2FzZSBjaGFyIGNvbnN0IGRlZmF1bHQgZG91YmxlIGVudW0gZXh0ZXJuIGZsb2F0IGdvdG8gaW50IGxvbmcgcmVnaXN0ZXIgc2hvcnQgc2lnbmVkIHNpemVvZiBzdGF0aWMgc3RydWN0IHN3aXRjaCB0eXBlZGVmIHVuaW9uIHVuc2lnbmVkIHZvaWQgdm9sYXRpbGUgXCIsXG4gICAgICAgIEQgPVxuICAgICAgICAgICAgVSArXG4gICAgICAgICAgICBcImNhdGNoIGNsYXNzIGRlbGV0ZSBmYWxzZSBpbXBvcnQgbmV3IG9wZXJhdG9yIHByaXZhdGUgcHJvdGVjdGVkIHB1YmxpYyB0aGlzIHRocm93IHRydWUgdHJ5IFwiLFxuICAgICAgICBJID1cbiAgICAgICAgICAgIEQgK1xuICAgICAgICAgICAgXCJhbGlnbm9mIGFsaWduX3VuaW9uIGFzbSBheGlvbSBib29sIGNvbmNlcHQgY29uY2VwdF9tYXAgY29uc3RfY2FzdCBjb25zdGV4cHIgZGVjbHR5cGUgZHluYW1pY19jYXN0IGV4cGxpY2l0IGV4cG9ydCBmcmllbmQgaW5saW5lIGxhdGVfY2hlY2sgbXV0YWJsZSBuYW1lc3BhY2UgbnVsbHB0ciByZWludGVycHJldF9jYXN0IHN0YXRpY19hc3NlcnQgc3RhdGljX2Nhc3QgdGVtcGxhdGUgdHlwZWlkIHR5cGVuYW1lIHR5cGVvZiB1c2luZyB2aXJ0dWFsIHdjaGFyX3Qgd2hlcmUgXCIsXG4gICAgICAgIEogPVxuICAgICAgICAgICAgRCArXG4gICAgICAgICAgICBcImJvb2xlYW4gYnl0ZSBleHRlbmRzIGZpbmFsIGZpbmFsbHkgaW1wbGVtZW50cyBpbXBvcnQgaW5zdGFuY2VvZiBudWxsIG5hdGl2ZSBwYWNrYWdlIHN0cmljdGZwIHN1cGVyIHN5bmNocm9uaXplZCB0aHJvd3MgdHJhbnNpZW50IFwiLFxuICAgICAgICBWID1cbiAgICAgICAgICAgIEogK1xuICAgICAgICAgICAgXCJhcyBiYXNlIGJ5IGNoZWNrZWQgZGVjaW1hbCBkZWxlZ2F0ZSBkZXNjZW5kaW5nIGV2ZW50IGZpeGVkIGZvcmVhY2ggZnJvbSBncm91cCBpbXBsaWNpdCBpbiBpbnRlcmZhY2UgaW50ZXJuYWwgaW50byBpcyBsb2NrIG9iamVjdCBvdXQgb3ZlcnJpZGUgb3JkZXJieSBwYXJhbXMgcmVhZG9ubHkgcmVmIHNieXRlIHNlYWxlZCBzdGFja2FsbG9jIHN0cmluZyBzZWxlY3QgdWludCB1bG9uZyB1bmNoZWNrZWQgdW5zYWZlIHVzaG9ydCB2YXIgXCIsXG4gICAgICAgIEsgPVxuICAgICAgICAgICAgRCArXG4gICAgICAgICAgICBcImRlYnVnZ2VyIGV2YWwgZXhwb3J0IGZ1bmN0aW9uIGdldCBudWxsIHNldCB1bmRlZmluZWQgdmFyIHdpdGggSW5maW5pdHkgTmFOIFwiLFxuICAgICAgICBMID1cbiAgICAgICAgICAgIFwiY2FsbGVyIGRlbGV0ZSBkaWUgZG8gZHVtcCBlbHNpZiBldmFsIGV4aXQgZm9yZWFjaCBmb3IgZ290byBpZiBpbXBvcnQgbGFzdCBsb2NhbCBteSBuZXh0IG5vIG91ciBwcmludCBwYWNrYWdlIHJlZG8gcmVxdWlyZSBzdWIgdW5kZWYgdW5sZXNzIHVudGlsIHVzZSB3YW50YXJyYXkgd2hpbGUgQkVHSU4gRU5EIFwiLFxuICAgICAgICBNID1cbiAgICAgICAgICAgIHkgK1xuICAgICAgICAgICAgXCJhbmQgYXMgYXNzZXJ0IGNsYXNzIGRlZiBkZWwgZWxpZiBleGNlcHQgZXhlYyBmaW5hbGx5IGZyb20gZ2xvYmFsIGltcG9ydCBpbiBpcyBsYW1iZGEgbm9ubG9jYWwgbm90IG9yIHBhc3MgcHJpbnQgcmFpc2UgdHJ5IHdpdGggeWllbGQgRmFsc2UgVHJ1ZSBOb25lIFwiLFxuICAgICAgICBOID1cbiAgICAgICAgICAgIHkgK1xuICAgICAgICAgICAgXCJhbGlhcyBhbmQgYmVnaW4gY2FzZSBjbGFzcyBkZWYgZGVmaW5lZCBlbHNpZiBlbmQgZW5zdXJlIGZhbHNlIGluIG1vZHVsZSBuZXh0IG5pbCBub3Qgb3IgcmVkbyByZXNjdWUgcmV0cnkgc2VsZiBzdXBlciB0aGVuIHRydWUgdW5kZWYgdW5sZXNzIHVudGlsIHdoZW4geWllbGQgQkVHSU4gRU5EIFwiLFxuICAgICAgICBPID0geSArIFwiY2FzZSBkb25lIGVsaWYgZXNhYyBldmFsIGZpIGZ1bmN0aW9uIGluIGxvY2FsIHNldCB0aGVuIHVudGlsIFwiLFxuICAgICAgICBXID0gSSArIFYgKyBLICsgTCArIE0gKyBOICsgTztcbiAgICBmdW5jdGlvbiBYKGIpIHtcbiAgICAgICAgcmV0dXJuIChiID49IFwiYVwiICYmIGIgPD0gXCJ6XCIpIHx8IChiID49IFwiQVwiICYmIGIgPD0gXCJaXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1KGIsIGEsIGMsIGQpIHtcbiAgICAgICAgYi51bnNoaWZ0KGMsIGQgfHwgMCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhLnNwbGljZS5hcHBseShhLCBiKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGIuc3BsaWNlKDAsIDIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBZID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGIgPSBbXG4gICAgICAgICAgICAgICAgICAgIFwiIVwiLFxuICAgICAgICAgICAgICAgICAgICBcIiE9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiIT09XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICBcIiVcIixcbiAgICAgICAgICAgICAgICAgICAgXCIlPVwiLFxuICAgICAgICAgICAgICAgICAgICBcIiZcIixcbiAgICAgICAgICAgICAgICAgICAgXCImJlwiLFxuICAgICAgICAgICAgICAgICAgICBcIiYmPVwiLFxuICAgICAgICAgICAgICAgICAgICBcIiY9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiKFwiLFxuICAgICAgICAgICAgICAgICAgICBcIipcIixcbiAgICAgICAgICAgICAgICAgICAgXCIqPVwiLFxuICAgICAgICAgICAgICAgICAgICBcIis9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiLFwiLFxuICAgICAgICAgICAgICAgICAgICBcIi09XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiLT5cIixcbiAgICAgICAgICAgICAgICAgICAgXCIvXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiLz1cIixcbiAgICAgICAgICAgICAgICAgICAgXCI6XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiOjpcIixcbiAgICAgICAgICAgICAgICAgICAgXCI7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiPFwiLFxuICAgICAgICAgICAgICAgICAgICBcIjw8XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiPDw9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiPD1cIixcbiAgICAgICAgICAgICAgICAgICAgXCI9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiPT1cIixcbiAgICAgICAgICAgICAgICAgICAgXCI9PT1cIixcbiAgICAgICAgICAgICAgICAgICAgXCI+XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiPj1cIixcbiAgICAgICAgICAgICAgICAgICAgXCI+PlwiLFxuICAgICAgICAgICAgICAgICAgICBcIj4+PVwiLFxuICAgICAgICAgICAgICAgICAgICBcIj4+PlwiLFxuICAgICAgICAgICAgICAgICAgICBcIj4+Pj1cIixcbiAgICAgICAgICAgICAgICAgICAgXCI/XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQFwiLFxuICAgICAgICAgICAgICAgICAgICBcIltcIixcbiAgICAgICAgICAgICAgICAgICAgXCJeXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiXj1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJeXlwiLFxuICAgICAgICAgICAgICAgICAgICBcIl5ePVwiLFxuICAgICAgICAgICAgICAgICAgICBcIntcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ8XCIsXG4gICAgICAgICAgICAgICAgICAgIFwifD1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ8fFwiLFxuICAgICAgICAgICAgICAgICAgICBcInx8PVwiLFxuICAgICAgICAgICAgICAgICAgICBcIn5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJicmVha1wiLFxuICAgICAgICAgICAgICAgICAgICBcImNhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb250aW51ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImRvXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImZpbmFsbHlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpbnN0YW5jZW9mXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmV0dXJuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGhyb3dcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0cnlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlb2ZcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYSA9XG4gICAgICAgICAgICAgICAgICAgIFwiKD86KD86KD86XnxbXjAtOS5dKVxcXFwuezEsM30pfCg/Oig/Ol58W15cXFxcK10pXFxcXCspfCg/Oig/Ol58W15cXFxcLV0pLSlcIjtcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgYi5sZW5ndGg7ICsrYykge1xuICAgICAgICAgICAgICAgIHZhciBkID0gYltjXTtcbiAgICAgICAgICAgICAgICBhICs9IFgoZC5jaGFyQXQoMCkpXG4gICAgICAgICAgICAgICAgICAgID8gXCJ8XFxcXGJcIiArIGRcbiAgICAgICAgICAgICAgICAgICAgOiBcInxcIiArIGQucmVwbGFjZSgvKFtePTw+OiZdKS9nLCBcIlxcXFwkMVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEgKz0gXCJ8XilcXFxccyokXCI7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChhKTtcbiAgICAgICAgfSkoKSxcbiAgICAgICAgUCA9IC8mL2csXG4gICAgICAgIFEgPSAvPC9nLFxuICAgICAgICBSID0gLz4vZyxcbiAgICAgICAgWiA9IC9cXFwiL2c7XG4gICAgZnVuY3Rpb24gJChiKSB7XG4gICAgICAgIHJldHVybiBiXG4gICAgICAgICAgICAucmVwbGFjZShQLCBcIiZhbXA7XCIpXG4gICAgICAgICAgICAucmVwbGFjZShRLCBcIiZsdDtcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKFIsIFwiJmd0O1wiKVxuICAgICAgICAgICAgLnJlcGxhY2UoWiwgXCImcXVvdDtcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIEUoYikge1xuICAgICAgICByZXR1cm4gYlxuICAgICAgICAgICAgLnJlcGxhY2UoUCwgXCImYW1wO1wiKVxuICAgICAgICAgICAgLnJlcGxhY2UoUSwgXCImbHQ7XCIpXG4gICAgICAgICAgICAucmVwbGFjZShSLCBcIiZndDtcIik7XG4gICAgfVxuICAgIHZhciBhYSA9IC8mbHQ7L2csXG4gICAgICAgIGJhID0gLyZndDsvZyxcbiAgICAgICAgY2EgPSAvJmFwb3M7L2csXG4gICAgICAgIGRhID0gLyZxdW90Oy9nLFxuICAgICAgICBlYSA9IC8mYW1wOy9nLFxuICAgICAgICBmYSA9IC8mbmJzcDsvZztcbiAgICBmdW5jdGlvbiBnYShiKSB7XG4gICAgICAgIHZhciBhID0gYi5pbmRleE9mKFwiJlwiKTtcbiAgICAgICAgaWYgKGEgPCAwKSByZXR1cm4gYjtcbiAgICAgICAgZm9yICgtLWE7IChhID0gYi5pbmRleE9mKFwiJiNcIiwgYSArIDEpKSA+PSAwOyApIHtcbiAgICAgICAgICAgIHZhciBjID0gYi5pbmRleE9mKFwiO1wiLCBhKTtcbiAgICAgICAgICAgIGlmIChjID49IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgZCA9IGIuc3Vic3RyaW5nKGEgKyAzLCBjKSxcbiAgICAgICAgICAgICAgICAgICAgZyA9IDEwO1xuICAgICAgICAgICAgICAgIGlmIChkICYmIGQuY2hhckF0KDApID09PSBcInhcIikge1xuICAgICAgICAgICAgICAgICAgICBkID0gZC5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICAgICAgICAgIGcgPSAxNjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBwYXJzZUludChkLCBnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKGUpKVxuICAgICAgICAgICAgICAgICAgICBiID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGIuc3Vic3RyaW5nKDAsIGEpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZy5mcm9tQ2hhckNvZGUoZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYi5zdWJzdHJpbmcoYyArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiXG4gICAgICAgICAgICAucmVwbGFjZShhYSwgXCI8XCIpXG4gICAgICAgICAgICAucmVwbGFjZShiYSwgXCI+XCIpXG4gICAgICAgICAgICAucmVwbGFjZShjYSwgXCInXCIpXG4gICAgICAgICAgICAucmVwbGFjZShkYSwgJ1wiJylcbiAgICAgICAgICAgIC5yZXBsYWNlKGVhLCBcIiZcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKGZhLCBcIiBcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFMoYikge1xuICAgICAgICByZXR1cm4gXCJYTVBcIiA9PT0gYi50YWdOYW1lO1xuICAgIH1cbiAgICBmdW5jdGlvbiB6KGIsIGEpIHtcbiAgICAgICAgc3dpdGNoIChiLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBiLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBhLnB1c2goXCI8XCIsIGMpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGQgPSAwOyBkIDwgYi5hdHRyaWJ1dGVzLmxlbmd0aDsgKytkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBnID0gYi5hdHRyaWJ1dGVzW2RdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWcuc3BlY2lmaWVkKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgYS5wdXNoKFwiIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgeihnLCBhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYS5wdXNoKFwiPlwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBlID0gYi5maXJzdENoaWxkOyBlOyBlID0gZS5uZXh0U2libGluZykgeihlLCBhKTtcbiAgICAgICAgICAgICAgICBpZiAoYi5maXJzdENoaWxkIHx8ICEvXig/OmJyfGxpbmt8aW1nKSQvLnRlc3QoYykpXG4gICAgICAgICAgICAgICAgICAgIGEucHVzaChcIjwvXCIsIGMsIFwiPlwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBhLnB1c2goYi5uYW1lLnRvTG93ZXJDYXNlKCksICc9XCInLCAkKGIudmFsdWUpLCAnXCInKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBhLnB1c2goRShiLm5vZGVWYWx1ZSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBGID0gbnVsbDtcbiAgICBmdW5jdGlvbiBoYShiKSB7XG4gICAgICAgIGlmIChudWxsID09PSBGKSB7XG4gICAgICAgICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQUkVcIik7XG4gICAgICAgICAgICBhLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgICAgICAgICAgICAgICAnPCFET0NUWVBFIGZvbyBQVUJMSUMgXCJmb28gYmFyXCI+XFxuPGZvbyAvPidcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgRiA9ICEvPC8udGVzdChhLmlubmVySFRNTCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEYpIHtcbiAgICAgICAgICAgIHZhciBjID0gYi5pbm5lckhUTUw7XG4gICAgICAgICAgICBpZiAoUyhiKSkgYyA9IEUoYyk7XG4gICAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgfVxuICAgICAgICB2YXIgZCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBnID0gYi5maXJzdENoaWxkOyBnOyBnID0gZy5uZXh0U2libGluZykgeihnLCBkKTtcbiAgICAgICAgcmV0dXJuIGQuam9pbihcIlwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaWEoYikge1xuICAgICAgICB2YXIgYSA9IDA7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgICAgICAgICB2YXIgZCA9IG51bGwsXG4gICAgICAgICAgICAgICAgZyA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBlID0gMCwgaCA9IGMubGVuZ3RoOyBlIDwgaDsgKytlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGYgPSBjLmNoYXJBdChlKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGYpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlxcdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkKSBkID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBkLnB1c2goYy5zdWJzdHJpbmcoZywgZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBiIC0gKGEgJSBiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgKz0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyBpID49IDA7IGkgLT0gXCIgICAgICAgICAgICAgICAgXCIubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQucHVzaChcIiAgICAgICAgICAgICAgICBcIi5zdWJzdHJpbmcoMCwgaSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZyA9IGUgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJcXG5cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICArK2E7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFkKSByZXR1cm4gYztcbiAgICAgICAgICAgIGQucHVzaChjLnN1YnN0cmluZyhnKSk7XG4gICAgICAgICAgICByZXR1cm4gZC5qb2luKFwiXCIpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICB2YXIgamEgPSAvKD86W148XSt8PCEtLVtcXHNcXFNdKj8tLVxcPnw8IVxcW0NEQVRBXFxbKFtcXHNcXFNdKj8pXFxdXFxdPnw8XFwvP1thLXpBLVpdW14+XSo+fDwpL2csXG4gICAgICAgIGthID0gL148IS0tLyxcbiAgICAgICAgbGEgPSAvXjxcXFtDREFUQVxcWy8sXG4gICAgICAgIG1hID0gL148YnJcXGIvaTtcbiAgICBmdW5jdGlvbiBuYShiKSB7XG4gICAgICAgIHZhciBhID0gYi5tYXRjaChqYSksXG4gICAgICAgICAgICBjID0gW10sXG4gICAgICAgICAgICBkID0gMCxcbiAgICAgICAgICAgIGcgPSBbXTtcbiAgICAgICAgaWYgKGEpXG4gICAgICAgICAgICBmb3IgKHZhciBlID0gMCwgaCA9IGEubGVuZ3RoOyBlIDwgaDsgKytlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGYgPSBhW2VdO1xuICAgICAgICAgICAgICAgIGlmIChmLmxlbmd0aCA+IDEgJiYgZi5jaGFyQXQoMCkgPT09IFwiPFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrYS50ZXN0KGYpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhLnRlc3QoZikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMucHVzaChmLnN1YnN0cmluZyg5LCBmLmxlbmd0aCAtIDMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQgKz0gZi5sZW5ndGggLSAxMjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYS50ZXN0KGYpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLnB1c2goXCJcXG5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICArK2Q7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBnLnB1c2goZCwgZik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBnYShmKTtcbiAgICAgICAgICAgICAgICAgICAgYy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICBkICs9IGkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNvdXJjZTogYy5qb2luKFwiXCIpLFxuICAgICAgICAgICAgdGFnczogZ1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiB2KGIsIGEpIHtcbiAgICAgICAgdmFyIGMgPSB7fTtcbiAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGcgPSBiLmNvbmNhdChhKTtcbiAgICAgICAgICAgIGZvciAodmFyIGUgPSBnLmxlbmd0aDsgLS1lID49IDA7ICkge1xuICAgICAgICAgICAgICAgIHZhciBoID0gZ1tlXSxcbiAgICAgICAgICAgICAgICAgICAgZiA9IGhbM107XG4gICAgICAgICAgICAgICAgaWYgKGYpIGZvciAodmFyIGkgPSBmLmxlbmd0aDsgLS1pID49IDA7ICkgY1tmLmNoYXJBdChpKV0gPSBoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgICAgICB2YXIgZCA9IGEubGVuZ3RoO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZywgZSkge1xuICAgICAgICAgICAgZSA9IGUgfHwgMDtcbiAgICAgICAgICAgIHZhciBoID0gW2UsIFwicGxuXCJdLFxuICAgICAgICAgICAgICAgIGYgPSBcIlwiLFxuICAgICAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgICAgIGogPSBnO1xuICAgICAgICAgICAgd2hpbGUgKGoubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG8sXG4gICAgICAgICAgICAgICAgICAgIG0gPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICBrLFxuICAgICAgICAgICAgICAgICAgICBsID0gY1tqLmNoYXJBdCgwKV07XG4gICAgICAgICAgICAgICAgaWYgKGwpIHtcbiAgICAgICAgICAgICAgICAgICAgayA9IGoubWF0Y2gobFsxXSk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSBrWzBdO1xuICAgICAgICAgICAgICAgICAgICBvID0gbFswXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGQ7ICsrbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbCA9IGFbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IGxbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocCAmJiAhcC50ZXN0KGYpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPSBqLm1hdGNoKGxbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtID0ga1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gbFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBcInBsblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgbSA9IGouc3Vic3RyaW5nKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgucHVzaChlICsgaSwgbyk7XG4gICAgICAgICAgICAgICAgaSArPSBtLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBqID0gai5zdWJzdHJpbmcobS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmIChvICE9PSBcImNvbVwiICYmIC9cXFMvLnRlc3QobSkpIGYgPSBtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGg7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBvYSA9IHYoXG4gICAgICAgIFtdLFxuICAgICAgICBbXG4gICAgICAgICAgICBbXCJwbG5cIiwgL15bXjxdKy8sIG51bGxdLFxuICAgICAgICAgICAgW1wiZGVjXCIsIC9ePCFcXHdbXj5dKig/Oj58JCkvLCBudWxsXSxcbiAgICAgICAgICAgIFtcImNvbVwiLCAvXjwhLS1bXFxzXFxTXSo/KD86LS1cXD58JCkvLCBudWxsXSxcbiAgICAgICAgICAgIFtcInNyY1wiLCAvXjxcXD9bXFxzXFxTXSo/KD86XFw/PnwkKS8sIG51bGxdLFxuICAgICAgICAgICAgW1wic3JjXCIsIC9ePCVbXFxzXFxTXSo/KD86JT58JCkvLCBudWxsXSxcbiAgICAgICAgICAgIFtcInNyY1wiLCAvXjwoc2NyaXB0fHN0eWxlfHhtcClcXGJbXj5dKj5bXFxzXFxTXSo/PFxcL1xcMVxcYltePl0qPi9pLCBudWxsXSxcbiAgICAgICAgICAgIFtcInRhZ1wiLCAvXjxcXC8/XFx3W148Pl0qPi8sIG51bGxdXG4gICAgICAgIF1cbiAgICApO1xuICAgIGZ1bmN0aW9uIHBhKGIpIHtcbiAgICAgICAgdmFyIGEgPSBvYShiKTtcbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBhLmxlbmd0aDsgYyArPSAyKVxuICAgICAgICAgICAgaWYgKGFbYyArIDFdID09PSBcInNyY1wiKSB7XG4gICAgICAgICAgICAgICAgdmFyIGQsIGc7XG4gICAgICAgICAgICAgICAgZCA9IGFbY107XG4gICAgICAgICAgICAgICAgZyA9IGMgKyAyIDwgYS5sZW5ndGggPyBhW2MgKyAyXSA6IGIubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBlID0gYi5zdWJzdHJpbmcoZCwgZyksXG4gICAgICAgICAgICAgICAgICAgIGggPSBlLm1hdGNoKC9eKDxbXj5dKj4pKFtcXHNcXFNdKikoPFxcL1tePl0qPikkLyk7XG4gICAgICAgICAgICAgICAgaWYgKGgpXG4gICAgICAgICAgICAgICAgICAgIGEuc3BsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGQgKyBoWzFdLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkICsgaFsxXS5sZW5ndGggKyAoaFsyXSB8fCBcIlwiKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRhZ1wiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICB2YXIgcWEgPSB2KFxuICAgICAgICBbXG4gICAgICAgICAgICBbXCJhdHZcIiwgL15cXCdbXlxcJ10qKD86XFwnfCQpLywgbnVsbCwgXCInXCJdLFxuICAgICAgICAgICAgW1wiYXR2XCIsIC9eXFxcIlteXFxcIl0qKD86XFxcInwkKS8sIG51bGwsICdcIiddLFxuICAgICAgICAgICAgW1wicHVuXCIsIC9eWzw+XFwvPV0rLywgbnVsbCwgXCI8Pi89XCJdXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAgIFtcInRhZ1wiLCAvXltcXHc6XFwtXSsvLCAvXjwvXSxcbiAgICAgICAgICAgIFtcImF0dlwiLCAvXltcXHdcXC1dKy8sIC9ePS9dLFxuICAgICAgICAgICAgW1wiYXRuXCIsIC9eW1xcdzpcXC1dKy8sIG51bGxdLFxuICAgICAgICAgICAgW1wicGxuXCIsIC9eXFxzKy8sIG51bGwsIFwiIFxcdFxcclxcblwiXVxuICAgICAgICBdXG4gICAgKTtcbiAgICBmdW5jdGlvbiByYShiLCBhKSB7XG4gICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgYS5sZW5ndGg7IGMgKz0gMikge1xuICAgICAgICAgICAgdmFyIGQgPSBhW2MgKyAxXTtcbiAgICAgICAgICAgIGlmIChkID09PSBcInRhZ1wiKSB7XG4gICAgICAgICAgICAgICAgdmFyIGcsIGU7XG4gICAgICAgICAgICAgICAgZyA9IGFbY107XG4gICAgICAgICAgICAgICAgZSA9IGMgKyAyIDwgYS5sZW5ndGggPyBhW2MgKyAyXSA6IGIubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBoID0gYi5zdWJzdHJpbmcoZywgZSksXG4gICAgICAgICAgICAgICAgICAgIGYgPSBxYShoLCBnKTtcbiAgICAgICAgICAgICAgICB1KGYsIGEsIGMsIDIpO1xuICAgICAgICAgICAgICAgIGMgKz0gZi5sZW5ndGggLSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICBmdW5jdGlvbiByKGIpIHtcbiAgICAgICAgdmFyIGEgPSBbXSxcbiAgICAgICAgICAgIGMgPSBbXTtcbiAgICAgICAgaWYgKGIudHJpcGxlUXVvdGVkU3RyaW5ncylcbiAgICAgICAgICAgIGEucHVzaChbXG4gICAgICAgICAgICAgICAgXCJzdHJcIixcbiAgICAgICAgICAgICAgICAvXig/OlxcJ1xcJ1xcJyg/OlteXFwnXFxcXF18XFxcXFtcXHNcXFNdfFxcJ3sxLDJ9KD89W15cXCddKSkqKD86XFwnXFwnXFwnfCQpfFxcXCJcXFwiXFxcIig/OlteXFxcIlxcXFxdfFxcXFxbXFxzXFxTXXxcXFwiezEsMn0oPz1bXlxcXCJdKSkqKD86XFxcIlxcXCJcXFwifCQpfFxcJyg/OlteXFxcXFxcJ118XFxcXFtcXHNcXFNdKSooPzpcXCd8JCl8XFxcIig/OlteXFxcXFxcXCJdfFxcXFxbXFxzXFxTXSkqKD86XFxcInwkKSkvLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgXCInXFxcIlwiXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgZWxzZSBpZiAoYi5tdWx0aUxpbmVTdHJpbmdzKVxuICAgICAgICAgICAgYS5wdXNoKFtcbiAgICAgICAgICAgICAgICBcInN0clwiLFxuICAgICAgICAgICAgICAgIC9eKD86XFwnKD86W15cXFxcXFwnXXxcXFxcW1xcc1xcU10pKig/OlxcJ3wkKXxcXFwiKD86W15cXFxcXFxcIl18XFxcXFtcXHNcXFNdKSooPzpcXFwifCQpfFxcYCg/OlteXFxcXFxcYF18XFxcXFtcXHNcXFNdKSooPzpcXGB8JCkpLyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIFwiJ1xcXCJgXCJcbiAgICAgICAgICAgIF0pO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBhLnB1c2goW1xuICAgICAgICAgICAgICAgIFwic3RyXCIsXG4gICAgICAgICAgICAgICAgL14oPzpcXCcoPzpbXlxcXFxcXCdcXHJcXG5dfFxcXFwuKSooPzpcXCd8JCl8XFxcIig/OlteXFxcXFxcXCJcXHJcXG5dfFxcXFwuKSooPzpcXFwifCQpKS8sXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBcIlxcXCInXCJcbiAgICAgICAgICAgIF0pO1xuICAgICAgICBjLnB1c2goW1wicGxuXCIsIC9eKD86W15cXCdcXFwiXFxgXFwvXFwjXSspLywgbnVsbCwgXCIgXFxyXFxuXCJdKTtcbiAgICAgICAgaWYgKGIuaGFzaENvbW1lbnRzKSBhLnB1c2goW1wiY29tXCIsIC9eI1teXFxyXFxuXSovLCBudWxsLCBcIiNcIl0pO1xuICAgICAgICBpZiAoYi5jU3R5bGVDb21tZW50cykgYy5wdXNoKFtcImNvbVwiLCAvXlxcL1xcL1teXFxyXFxuXSovLCBudWxsXSk7XG4gICAgICAgIGlmIChiLnJlZ2V4TGl0ZXJhbHMpXG4gICAgICAgICAgICBjLnB1c2goW1xuICAgICAgICAgICAgICAgIFwic3RyXCIsXG4gICAgICAgICAgICAgICAgL15cXC8oPzpbXlxcXFxcXCpcXC9cXFtdfFxcXFxbXFxzXFxTXXxcXFsoPzpbXlxcXVxcXFxdfFxcXFwuKSooPzpcXF18JCkpKyg/OlxcL3wkKS8sXG4gICAgICAgICAgICAgICAgWVxuICAgICAgICAgICAgXSk7XG4gICAgICAgIGlmIChiLmNTdHlsZUNvbW1lbnRzKSBjLnB1c2goW1wiY29tXCIsIC9eXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS8sIG51bGxdKTtcbiAgICAgICAgdmFyIGQgPSB4KGIua2V5d29yZHMpO1xuICAgICAgICBiID0gbnVsbDtcbiAgICAgICAgdmFyIGcgPSB2KGEsIGMpLFxuICAgICAgICAgICAgZSA9IHYoXG4gICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXCJwbG5cIiwgL15cXHMrLywgbnVsbCwgXCIgXFxyXFxuXCJdLFxuICAgICAgICAgICAgICAgICAgICBbXCJwbG5cIiwgL15bYS16XyRAXVthLXpfJEAwLTldKi9pLCBudWxsXSxcbiAgICAgICAgICAgICAgICAgICAgW1wibGl0XCIsIC9eMHhbYS1mMC05XStbYS16XS9pLCBudWxsXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC9eKD86XFxkKD86X1xcZCspKlxcZCooPzpcXC5cXGQqKT98XFwuXFxkKykoPzplWytcXC1dP1xcZCspP1thLXpdKi9pLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMTIzNDU2Nzg5XCJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1wicHVuXCIsIC9eW15cXHNcXHdcXC4kQF0rLywgbnVsbF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuICAgICAgICBmdW5jdGlvbiBoKGYsIGkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaS5sZW5ndGg7IGogKz0gMikge1xuICAgICAgICAgICAgICAgIHZhciBvID0gaVtqICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKG8gPT09IFwicGxuXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG0sIGssIGwsIG47XG4gICAgICAgICAgICAgICAgICAgIG0gPSBpW2pdO1xuICAgICAgICAgICAgICAgICAgICBrID0gaiArIDIgPCBpLmxlbmd0aCA/IGlbaiArIDJdIDogZi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGwgPSBmLnN1YnN0cmluZyhtLCBrKTtcbiAgICAgICAgICAgICAgICAgICAgbiA9IGUobCwgbSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHAgPSAwLCB0ID0gbi5sZW5ndGg7IHAgPCB0OyBwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ID0gbltwICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodyA9PT0gXCJwbG5cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBBID0gbltwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQiA9IHAgKyAyIDwgdCA/IG5bcCArIDJdIDogbC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBmLnN1YnN0cmluZyhBLCBCKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocyA9PT0gXCIuXCIpIG5bcCArIDFdID0gXCJwdW5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzIGluIGQpIG5bcCArIDFdID0gXCJrd2RcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgvXkA/W0EtWl1bQS1aJF0qW2Etel1bQS1aYS16JF0qJC8udGVzdChzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbltwICsgMV0gPSBzLmNoYXJBdCgwKSA9PT0gXCJAXCIgPyBcImxpdFwiIDogXCJ0eXBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB1KG4sIGksIGosIDIpO1xuICAgICAgICAgICAgICAgICAgICBqICs9IG4ubGVuZ3RoIC0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZikge1xuICAgICAgICAgICAgdmFyIGkgPSBnKGYpO1xuICAgICAgICAgICAgaSA9IGgoZiwgaSk7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIEcgPSByKHtcbiAgICAgICAga2V5d29yZHM6IFcsXG4gICAgICAgIGhhc2hDb21tZW50czogdHJ1ZSxcbiAgICAgICAgY1N0eWxlQ29tbWVudHM6IHRydWUsXG4gICAgICAgIG11bHRpTGluZVN0cmluZ3M6IHRydWUsXG4gICAgICAgIHJlZ2V4TGl0ZXJhbHM6IHRydWVcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBzYShiLCBhKSB7XG4gICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgYS5sZW5ndGg7IGMgKz0gMikge1xuICAgICAgICAgICAgdmFyIGQgPSBhW2MgKyAxXTtcbiAgICAgICAgICAgIGlmIChkID09PSBcInNyY1wiKSB7XG4gICAgICAgICAgICAgICAgdmFyIGcsIGU7XG4gICAgICAgICAgICAgICAgZyA9IGFbY107XG4gICAgICAgICAgICAgICAgZSA9IGMgKyAyIDwgYS5sZW5ndGggPyBhW2MgKyAyXSA6IGIubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBoID0gRyhiLnN1YnN0cmluZyhnLCBlKSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGkgPSBoLmxlbmd0aDsgZiA8IGk7IGYgKz0gMikgaFtmXSArPSBnO1xuICAgICAgICAgICAgICAgIHUoaCwgYSwgYywgMik7XG4gICAgICAgICAgICAgICAgYyArPSBoLmxlbmd0aCAtIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRhKGIsIGEpIHtcbiAgICAgICAgdmFyIGMgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCBhLmxlbmd0aDsgZCArPSAyKSB7XG4gICAgICAgICAgICB2YXIgZyA9IGFbZCArIDFdLFxuICAgICAgICAgICAgICAgIGUsXG4gICAgICAgICAgICAgICAgaDtcbiAgICAgICAgICAgIGlmIChnID09PSBcImF0blwiKSB7XG4gICAgICAgICAgICAgICAgZSA9IGFbZF07XG4gICAgICAgICAgICAgICAgaCA9IGQgKyAyIDwgYS5sZW5ndGggPyBhW2QgKyAyXSA6IGIubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGMgPSAvXm9ufF5zdHlsZSQvaS50ZXN0KGIuc3Vic3RyaW5nKGUsIGgpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZyA9PT0gXCJhdHZcIikge1xuICAgICAgICAgICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgICAgICAgICAgIGUgPSBhW2RdO1xuICAgICAgICAgICAgICAgICAgICBoID0gZCArIDIgPCBhLmxlbmd0aCA/IGFbZCArIDJdIDogYi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmID0gYi5zdWJzdHJpbmcoZSwgaCksXG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gZi5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBqID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID49IDIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvXltcXFwiXFwnXS8udGVzdChmKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYuY2hhckF0KDApID09PSBmLmNoYXJBdChpIC0gMSksXG4gICAgICAgICAgICAgICAgICAgICAgICBvLFxuICAgICAgICAgICAgICAgICAgICAgICAgbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGs7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtID0gZSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gaCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gZjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0gPSBlICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPSBoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBmLnN1YnN0cmluZygxLCBmLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gRyhvKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDAsIHAgPSBsLmxlbmd0aDsgbiA8IHA7IG4gKz0gMikgbFtuXSArPSBtO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbC5wdXNoKGssIFwiYXR2XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdShsLCBhLCBkICsgMiwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB1KGwsIGEsIGQsIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVhKGIpIHtcbiAgICAgICAgdmFyIGEgPSBwYShiKTtcbiAgICAgICAgYSA9IHJhKGIsIGEpO1xuICAgICAgICBhID0gc2EoYiwgYSk7XG4gICAgICAgIGEgPSB0YShiLCBhKTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHZhKGIsIGEsIGMpIHtcbiAgICAgICAgdmFyIGQgPSBbXSxcbiAgICAgICAgICAgIGcgPSAwLFxuICAgICAgICAgICAgZSA9IG51bGwsXG4gICAgICAgICAgICBoID0gbnVsbCxcbiAgICAgICAgICAgIGYgPSAwLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBqID0gaWEoOCk7XG4gICAgICAgIGZ1bmN0aW9uIG8oaykge1xuICAgICAgICAgICAgaWYgKGsgPiBnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUgJiYgZSAhPT0gaCkge1xuICAgICAgICAgICAgICAgICAgICBkLnB1c2goXCI8L3NwYW4+XCIpO1xuICAgICAgICAgICAgICAgICAgICBlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlICYmIGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZSA9IGg7XG4gICAgICAgICAgICAgICAgICAgIGQucHVzaCgnPHNwYW4gY2xhc3M9XCInLCBlLCAnXCI+Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBsID0gRShqKGIuc3Vic3RyaW5nKGcsIGspKSlcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyhcXHJcXG4/fFxcbnwgKSAvZywgXCIkMSZuYnNwO1wiKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxyXFxuP3xcXG4vZywgXCI8YnIgLz5cIik7XG4gICAgICAgICAgICAgICAgZC5wdXNoKGwpO1xuICAgICAgICAgICAgICAgIGcgPSBrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgIG0gPSBmIDwgYS5sZW5ndGggPyAoaSA8IGMubGVuZ3RoID8gYVtmXSA8PSBjW2ldIDogdHJ1ZSkgOiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICAgICAgbyhhW2ZdKTtcbiAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBkLnB1c2goXCI8L3NwYW4+XCIpO1xuICAgICAgICAgICAgICAgICAgICBlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZC5wdXNoKGFbZiArIDFdKTtcbiAgICAgICAgICAgICAgICBmICs9IDI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCBjLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG8oY1tpXSk7XG4gICAgICAgICAgICAgICAgaCA9IGNbaSArIDFdO1xuICAgICAgICAgICAgICAgIGkgKz0gMjtcbiAgICAgICAgICAgIH0gZWxzZSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBvKGIubGVuZ3RoKTtcbiAgICAgICAgaWYgKGUpIGQucHVzaChcIjwvc3Bhbj5cIik7XG4gICAgICAgIHJldHVybiBkLmpvaW4oXCJcIik7XG4gICAgfVxuICAgIHZhciBDID0ge307XG4gICAgZnVuY3Rpb24gcShiLCBhKSB7XG4gICAgICAgIGZvciAodmFyIGMgPSBhLmxlbmd0aDsgLS1jID49IDA7ICkge1xuICAgICAgICAgICAgdmFyIGQgPSBhW2NdO1xuICAgICAgICAgICAgaWYgKCFDLmhhc093blByb3BlcnR5KGQpKSBDW2RdID0gYjtcbiAgICAgICAgICAgIGVsc2UgaWYgKFwiY29uc29sZVwiIGluIHdpbmRvdylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbm5vdCBvdmVycmlkZSBsYW5ndWFnZSBoYW5kbGVyICVzXCIsIGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHEoRywgW1wiZGVmYXVsdC1jb2RlXCJdKTtcbiAgICBxKHVhLCBbXCJkZWZhdWx0LW1hcmt1cFwiLCBcImh0bWxcIiwgXCJodG1cIiwgXCJ4aHRtbFwiLCBcInhtbFwiLCBcInhzbFwiXSk7XG4gICAgcShcbiAgICAgICAgcih7XG4gICAgICAgICAgICBrZXl3b3JkczogSSxcbiAgICAgICAgICAgIGhhc2hDb21tZW50czogdHJ1ZSxcbiAgICAgICAgICAgIGNTdHlsZUNvbW1lbnRzOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBbXCJjXCIsIFwiY2NcIiwgXCJjcHBcIiwgXCJjc1wiLCBcImN4eFwiLCBcImN5Y1wiXVxuICAgICk7XG4gICAgcShcbiAgICAgICAgcih7XG4gICAgICAgICAgICBrZXl3b3JkczogSixcbiAgICAgICAgICAgIGNTdHlsZUNvbW1lbnRzOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBbXCJqYXZhXCJdXG4gICAgKTtcbiAgICBxKFxuICAgICAgICByKHtcbiAgICAgICAgICAgIGtleXdvcmRzOiBPLFxuICAgICAgICAgICAgaGFzaENvbW1lbnRzOiB0cnVlLFxuICAgICAgICAgICAgbXVsdGlMaW5lU3RyaW5nczogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgW1wiYnNoXCIsIFwiY3NoXCIsIFwic2hcIl1cbiAgICApO1xuICAgIHEoXG4gICAgICAgIHIoe1xuICAgICAgICAgICAga2V5d29yZHM6IE0sXG4gICAgICAgICAgICBoYXNoQ29tbWVudHM6IHRydWUsXG4gICAgICAgICAgICBtdWx0aUxpbmVTdHJpbmdzOiB0cnVlLFxuICAgICAgICAgICAgdHJpcGxlUXVvdGVkU3RyaW5nczogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgW1wiY3ZcIiwgXCJweVwiXVxuICAgICk7XG4gICAgcShcbiAgICAgICAgcih7XG4gICAgICAgICAgICBrZXl3b3JkczogTCxcbiAgICAgICAgICAgIGhhc2hDb21tZW50czogdHJ1ZSxcbiAgICAgICAgICAgIG11bHRpTGluZVN0cmluZ3M6IHRydWUsXG4gICAgICAgICAgICByZWdleExpdGVyYWxzOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBbXCJwZXJsXCIsIFwicGxcIiwgXCJwbVwiXVxuICAgICk7XG4gICAgcShcbiAgICAgICAgcih7XG4gICAgICAgICAgICBrZXl3b3JkczogTixcbiAgICAgICAgICAgIGhhc2hDb21tZW50czogdHJ1ZSxcbiAgICAgICAgICAgIG11bHRpTGluZVN0cmluZ3M6IHRydWUsXG4gICAgICAgICAgICByZWdleExpdGVyYWxzOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBbXCJyYlwiXVxuICAgICk7XG4gICAgcShcbiAgICAgICAgcih7XG4gICAgICAgICAgICBrZXl3b3JkczogSyxcbiAgICAgICAgICAgIGNTdHlsZUNvbW1lbnRzOiB0cnVlLFxuICAgICAgICAgICAgcmVnZXhMaXRlcmFsczogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgW1wianNcIl1cbiAgICApO1xuICAgIGZ1bmN0aW9uIFQoYiwgYSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGMgPSBuYShiKSxcbiAgICAgICAgICAgICAgICBkID0gYy5zb3VyY2UsXG4gICAgICAgICAgICAgICAgZyA9IGMudGFncztcbiAgICAgICAgICAgIGlmICghQy5oYXNPd25Qcm9wZXJ0eShhKSlcbiAgICAgICAgICAgICAgICBhID0gL15cXHMqPC8udGVzdChkKSA/IFwiZGVmYXVsdC1tYXJrdXBcIiA6IFwiZGVmYXVsdC1jb2RlXCI7XG4gICAgICAgICAgICB2YXIgZSA9IENbYV0uY2FsbCh7fSwgZCk7XG4gICAgICAgICAgICByZXR1cm4gdmEoZCwgZywgZSk7XG4gICAgICAgIH0gY2F0Y2ggKGgpIHtcbiAgICAgICAgICAgIGlmIChcImNvbnNvbGVcIiBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB3YShiKSB7XG4gICAgICAgIHZhciBhID0gSCgpLFxuICAgICAgICAgICAgYyA9IFtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInByZVwiKSxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNvZGVcIiksXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaVwiKSxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInhtcFwiKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgZyA9IDA7IGcgPCBjLmxlbmd0aDsgKytnKVxuICAgICAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCBjW2ddLmxlbmd0aDsgKytlKSBkLnB1c2goY1tnXVtlXSk7XG4gICAgICAgIGMgPSBudWxsO1xuICAgICAgICB2YXIgaCA9IDA7XG4gICAgICAgIGZ1bmN0aW9uIGYoKSB7XG4gICAgICAgICAgICB2YXIgaSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgMjUwO1xuICAgICAgICAgICAgZm9yICg7IGggPCBkLmxlbmd0aCAmJiBuZXcgRGF0ZSgpLmdldFRpbWUoKSA8IGk7IGgrKykge1xuICAgICAgICAgICAgICAgIHZhciBqID0gZFtoXTtcbiAgICAgICAgICAgICAgICBpZiAoai5jbGFzc05hbWUgJiYgai5jbGFzc05hbWUuaW5kZXhPZihcInByZXR0eXByaW50XCIpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBqLmNsYXNzTmFtZS5tYXRjaCgvXFxibGFuZy0oXFx3KylcXGIvKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8pIG8gPSBvWzFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gai5wYXJlbnROb2RlOyBrOyBrID0gay5wYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrLnRhZ05hbWUgPT09IFwicHJlXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgay50YWdOYW1lID09PSBcImNvZGVcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrLnRhZ05hbWUgPT09IFwieG1wXCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgay5jbGFzc05hbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrLmNsYXNzTmFtZS5pbmRleE9mKFwicHJldHR5cHJpbnRcIikgPj0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBoYShqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBsLnJlcGxhY2UoLyg/Olxcclxcbj98XFxuKSQvLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gVChsLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghUyhqKSkgai5pbm5lckhUTUwgPSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFJFXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgai5hdHRyaWJ1dGVzLmxlbmd0aDsgKyt0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ID0gai5hdHRyaWJ1dGVzW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAody5zcGVjaWZpZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLnNldEF0dHJpYnV0ZSh3Lm5hbWUsIHcudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgai5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChwLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gajtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhICYmIGoudGFnTmFtZSA9PT0gXCJQUkVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBBID0gai5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIEIgPSBBLmxlbmd0aDsgLS1CID49IDA7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IEFbQl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaCA8IGQubGVuZ3RoKSBzZXRUaW1lb3V0KGYsIDI1MCk7XG4gICAgICAgICAgICBlbHNlIGlmIChiKSBiKCk7XG4gICAgICAgIH1cbiAgICAgICAgZigpO1xuICAgIH1cbiAgICB3aW5kb3cuUFJfbm9ybWFsaXplZEh0bWwgPSB6O1xuICAgIHdpbmRvdy5wcmV0dHlQcmludE9uZSA9IFQ7XG4gICAgd2luZG93LnByZXR0eVByaW50ID0gd2E7XG4gICAgd2luZG93LlBSID0ge1xuICAgICAgICBjcmVhdGVTaW1wbGVMZXhlcjogdixcbiAgICAgICAgcmVnaXN0ZXJMYW5nSGFuZGxlcjogcSxcbiAgICAgICAgc291cmNlRGVjb3JhdG9yOiByLFxuICAgICAgICBQUl9BVFRSSUJfTkFNRTogXCJhdG5cIixcbiAgICAgICAgUFJfQVRUUklCX1ZBTFVFOiBcImF0dlwiLFxuICAgICAgICBQUl9DT01NRU5UOiBcImNvbVwiLFxuICAgICAgICBQUl9ERUNMQVJBVElPTjogXCJkZWNcIixcbiAgICAgICAgUFJfS0VZV09SRDogXCJrd2RcIixcbiAgICAgICAgUFJfTElURVJBTDogXCJsaXRcIixcbiAgICAgICAgUFJfUExBSU46IFwicGxuXCIsXG4gICAgICAgIFBSX1BVTkNUVUFUSU9OOiBcInB1blwiLFxuICAgICAgICBQUl9TT1VSQ0U6IFwic3JjXCIsXG4gICAgICAgIFBSX1NUUklORzogXCJzdHJcIixcbiAgICAgICAgUFJfVEFHOiBcInRhZ1wiLFxuICAgICAgICBQUl9UWVBFOiBcInR5cFwiXG4gICAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgUGFyc29ucyBmcm9tIFwiLi9wYXJzb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVkUGFyc29ucyBleHRlbmRzIFBhcnNvbnMge1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIob3B0cyk7XG4gICAgICAgIC8vIHRvZG8gLS0gbWFrZSB0aGlzIGNvbmZpZ3VyYWJsZVxuICAgICAgICBpZiAob3B0cy50aW1lZGZlZWRiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dmZWVkYmFjayA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dmZWVkYmFjayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3JhZGVyLnNob3dmZWVkYmFjayA9IHRoaXMuc2hvd2ZlZWRiYWNrO1xuICAgICAgICB0aGlzLmhpZGVGZWVkYmFjaygpO1xuICAgICAgICAkKHRoaXMuY2hlY2tCdXR0b24pLmhpZGUoKTtcbiAgICAgICAgJCh0aGlzLmhlbHBCdXR0b24pLmhpZGUoKTtcbiAgICAgICAgJCh0aGlzLnJlc2V0QnV0dG9uKS5oaWRlKCk7XG4gICAgfVxuICAgIGNoZWNrQ29ycmVjdFRpbWVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb3JyZWN0ID8gXCJUXCIgOiBcIkZcIjtcbiAgICB9XG4gICAgaGlkZUZlZWRiYWNrKCkge1xuICAgICAgICAkKHRoaXMubWVzc2FnZURpdikuaGlkZSgpO1xuICAgIH1cbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPSB7fTtcbn1cbndpbmRvdy5jb21wb25lbnRfZmFjdG9yeVtcInBhcnNvbnNcIl0gPSBmdW5jdGlvbiAob3B0cykge1xuICAgIGlmIChvcHRzLnRpbWVkKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGltZWRQYXJzb25zKG9wdHMpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFBhcnNvbnMob3B0cyk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
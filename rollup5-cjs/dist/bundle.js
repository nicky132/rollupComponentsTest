(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('the-answer')) :
  typeof define === 'function' && define.amd ? define(['the-answer'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.experience = factory(global.answer));
})(this, (function (answer) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var answer__default = /*#__PURE__*/_interopDefaultLegacy(answer);

  function index () {
    console.log("the answer is " + answer__default["default"]);
  }

  return index;

}));

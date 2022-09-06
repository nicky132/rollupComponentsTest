(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.experience = factory());
})(this, (function () { 'use strict';

  var index$1 = 42;

  function index () {
    console.log("the answer is " + index$1);
  }

  return index;

}));

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.experience = factory());
})(this, (function () { 'use strict';

  var a = 1;
  function index () {
    console.log(a);
  }

  return index;

}));

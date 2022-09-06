(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.experience = factory());
})(this, (function () { 'use strict';

  var a = 1;
  var b = 2;
  console.log(a, b);
  var es6 = (function () {
    return a + b;
  });

  return es6;

}));

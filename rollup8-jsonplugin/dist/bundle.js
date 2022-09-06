(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.experience = factory());
})(this, (function () { 'use strict';

  const a = 1;
  const b = 2;
  console.log(a, b);
  var es6 = () => {
    return a + b;
  };

  return es6;

}));

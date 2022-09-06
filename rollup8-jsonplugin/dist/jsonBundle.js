(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  var name = "npminitdemo";
  var version = "1.0.0";
  var description = "";
  var main = "src/index.js";
  var scripts = {
  	test: "echo \"Error: no test specified\" && exit 1",
  	build: "rollup -c -w"
  };
  var author = "==";
  var license = "ISC";
  var dependencies = {
  	"@babel/core": "^7.19.0",
  	"@babel/preset-env": "^7.19.0",
  	"the-answer": "^1.0.0"
  };
  var devDependencies = {
  	"@rollup/plugin-babel": "^5.3.1",
  	"@rollup/plugin-commonjs": "^22.0.2",
  	"@rollup/plugin-json": "^4.1.0",
  	"@rollup/plugin-node-resolve": "^14.0.0"
  };
  var json = {
  	name: name,
  	version: version,
  	description: description,
  	main: main,
  	scripts: scripts,
  	author: author,
  	license: license,
  	dependencies: dependencies,
  	devDependencies: devDependencies
  };

  console.log(json.author);

}));

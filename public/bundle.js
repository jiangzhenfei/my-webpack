 (function(modules) {
 	function __webpack_require__(moduleId) {
 		var module = installedModules[moduleId] = {
 			exports: {}
 		};
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
 		return module.exports;
 	}
 	return __webpack_require__( "./js/index.js");
 })
/************************************************************************/
 ({

    "./css/style.css":
    (function(module, exports) {

    eval("1//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jc3Mvc3R5bGUuY3NzPzUxMzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9jc3Mvc3R5bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./css/style.css\n");}),

    "./js/index.js":
    (function(module, exports, __webpack_require__) {
    eval("\n\nvar _people = __webpack_require__(/*! ./people */ \"./js/people.js\");\n\nvar _people2 = _interopRequireDefault(_people);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n__webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n\nvar lily = new _people2.default('Lily');\nlily.sayName();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vaW5kZXguanM/MDQ5NyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwibGlseSIsIlBlb3BsZSIsInNheU5hbWUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQUNBQSxtQkFBT0EsQ0FBQyx5Q0FBUjs7QUFFQSxJQUFNQyxPQUFPLElBQUlDLGdCQUFKLENBQVcsTUFBWCxDQUFiO0FBQ0FELEtBQUtFLE9BQUwiLCJmaWxlIjoiLi9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQZW9wbGUgZnJvbSAnLi9wZW9wbGUnXG5yZXF1aXJlKCcuLi9jc3Mvc3R5bGUuY3NzJylcblxuY29uc3QgbGlseSA9IG5ldyBQZW9wbGUoJ0xpbHknKVxubGlseS5zYXlOYW1lKCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/index.js\n");

    }),

    "./js/people.js":
    (function(module, exports, __webpack_require__) {
    eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar People = function () {\n  function People(name) {\n    _classCallCheck(this, People);\n\n    this.name = name;\n  }\n\n  _createClass(People, [{\n    key: \"sayName\",\n    value: function sayName() {\n      console.log(\"Hello there, I'm \" + this.name);\n    }\n  }]);\n\n  return People;\n}();\n\nexports.default = People;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcGVvcGxlLmpzP2M1MDkiXSwibmFtZXMiOlsiUGVvcGxlIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBcUJBLE07QUFDakIsa0JBQWFDLElBQWIsRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7OEJBRVU7QUFDVEMsY0FBUUMsR0FBUix1QkFBZ0MsS0FBS0YsSUFBckM7QUFDRDs7Ozs7O2tCQVBnQkQsTSIsImZpbGUiOiIuL2pzL3Blb3BsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZSB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUpIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB9XG4gIFxuICAgIHNheU5hbWUgKCkge1xuICAgICAgY29uc29sZS5sb2coYEhlbGxvIHRoZXJlLCBJJ20gJHt0aGlzLm5hbWV9YClcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/people.js\n");

    })

});
webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(1);

	__webpack_require__(4);

	var _get_github_users_use_case = __webpack_require__(6);

	var _get_github_users_use_case2 = _interopRequireDefault(_get_github_users_use_case);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Domain = function () {
	    function Domain() {
	        _classCallCheck(this, Domain);

	        this._usesCases = {};
	        this._usesCases['get_github_users_use_case'] = new _get_github_users_use_case2.default();
	    }

	    _createClass(Domain, [{
	        key: 'get',
	        value: function get(key) {
	            return this._usesCases[key];
	        }
	    }]);

	    return Domain;
	}();

	exports.default = new Domain();

/***/ }
])
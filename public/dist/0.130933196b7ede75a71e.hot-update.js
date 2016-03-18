webpackHotUpdate(0,{

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _github_api_user_repository = __webpack_require__(7);

	var _github_api_user_repository2 = _interopRequireDefault(_github_api_user_repository);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GetGitHubUsersUseCase = function () {
	    function GetGitHubUsersUseCase() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var _ref$repository = _ref.repository;
	        var repository = _ref$repository === undefined ? new _github_api_user_repository2.default() : _ref$repository;

	        _classCallCheck(this, GetGitHubUsersUseCase);

	        this._repository = repository;
	    }

	    _createClass(GetGitHubUsersUseCase, [{
	        key: 'execute',
	        value: function execute() {
	            return this._repository.all();
	        }
	    }]);

	    return GetGitHubUsersUseCase;
	}();

	exports.default = GetGitHubUsersUseCase;

/***/ }

})
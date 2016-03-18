webpackHotUpdate(0,{

/***/ 7:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GithubApiUserRepository = function () {
	    function GithubApiUserRepository() {
	        _classCallCheck(this, GithubApiUserRepository);
	    }

	    _createClass(GithubApiUserRepository, [{
	        key: 'construct',
	        value: function construct() {}
	    }, {
	        key: 'all',
	        value: function all() {
	            var requestStream = Rx.Observable.just('https://api.github.com/users');

	            var table = document.createElement('table');
	            equestStream.subscribe(function (requestUrl) {
	                jQuery.getJSON(requestUrl, function (responseData) {
	                    console.log(responseData);
	                });
	            });
	            return [{ "name": "test" }, { "name": "test2" }, { "name": "test3" }];
	        }
	    }]);

	    return GithubApiUserRepository;
	}();

	exports.default = GithubApiUserRepository;

/***/ }

})
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var axios = __webpack_require__(4);
var Config = __webpack_require__(13);

/**
 * @function 接口请求方法
 * @param url 请求连接
 * @param params 请求参数
 * @param method 请求方式
 */
var ajax = function ajax(url, method, params, headers) {

    return new Promise(function (resolve, reject) {
        axios(url, {
            method: method,
            params: params,
            headers: headers
        }).then(function (response) {
            // console.log("当前Ajax发送请求返回状态码为:"+response.status)
            // console.log("接口为：" +url)

            resolve(response);
        }).catch(function (err) {
            console.log('ajax错误拦截:');
            // console.log(url);
            // console.log(method)
            // console.log(err)
            reject(err);
        });
    });
};
module.exports = {
    ajax: ajax,
    get: function get(url, params) {
        return ajax(url, 'GET', params);
    },
    post: function post(url, params) {
        return ajax(url, 'POST', params);
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Background = function (_React$Component) {
	_inherits(Background, _React$Component);

	function Background(props) {
		_classCallCheck(this, Background);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

		_this.state = {
			number: 0
		};
		_this.click = _this.click.bind(_this);
		_this.tick = _this.tick.bind(_this);
		return _this;
	}

	// 注册成功之后的跳转页面事件


	Background.prototype.tick = function tick() {
		this.setState(function (prevState) {
			return {
				number: prevState.number + 4
			};
		});
		this.refs.waveBox.style.bottom = this.state.number + "px";
		this.refs.waveBottomBox.style.height = this.state.number + "px";
		// console.log(this.refs.name.offsetTop);
		if (this.refs.waveBox.offsetTop == 0) {
			clearInterval(this.timer);
			this.props.history.push('./');
		}
	};

	// 设置定时器增加waveBottomBox的高度


	Background.prototype.click = function click() {
		var _this2 = this;

		this.timer = setInterval(function () {
			return _this2.tick();
		}, 5);
	};

	Background.prototype.render = function render() {
		var componentParams = {
			openModal: this.openModal
		};
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'div',
				{ className: 'wave-box', ref: 'waveBox' },
				_react2.default.createElement('div', { className: 'wave waveTop' }),
				_react2.default.createElement('div', { className: 'wave waveMiddle' }),
				_react2.default.createElement('div', { className: 'wave waveBottom' })
			),
			_react2.default.createElement('div', { className: 'waveBottom-box', ref: 'waveBottomBox' })
		);
	};

	return Background;
}(_react2.default.Component);

exports.default = Background;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "/static/images/6aaa51ac.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CreateStoreMap = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(9);

var _App2 = _interopRequireDefault(_App);

var _reactRouterDom = __webpack_require__(1);

var _mobxReact = __webpack_require__(2);

var _store = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 让mobx在服务器端渲染的时候，不会重复的数据变换
(0, _mobxReact.useStaticRendering)(true);

// stores:{storeA:{},storeB:{}}

var render = function render(stores, routerContext, currentUrl) {
    return _react2.default.createElement(
        _mobxReact.Provider,
        stores,
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { context: routerContext, location: currentUrl },
            _react2.default.createElement(_App2.default, null)
        )
    );
};
exports.default = render;
exports.CreateStoreMap = _store.CreateStoreMap;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _router = __webpack_require__(10);

var _router2 = _interopRequireDefault(_router);

__webpack_require__(26);

__webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component.call(this));
  }

  App.prototype.render = function render() {
    return _react2.default.createElement(_router2.default, null);
  };

  return App;
}(_react2.default.Component);
// import PropTypes from 'prop-types'
// 先不使用proptypes验证
// App.PropTypes = {
//   demoState:PropTypes.instanceOf(DemoState).isRequired
// }


exports.default = App;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(17);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(20);

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return [_react2.default.createElement(_reactRouterDom.Route, { key: '1', path: '/', component: _index2.default, exact: true }), _react2.default.createElement(_reactRouterDom.Route, { key: '5', path: '/user/', render: function render() {
      return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/user/login' });
    }, exact: true }), _react2.default.createElement(_reactRouterDom.Route, { key: '6', path: '/user/login', component: _index4.default }), _react2.default.createElement(_reactRouterDom.Route, { key: '7', path: '/user/register', component: _index6.default })];
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(4);

var _axios2 = _interopRequireDefault(_axios);

var _mobxReact = __webpack_require__(2);

var _reactHelmet = __webpack_require__(12);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _http = __webpack_require__(5);

var _http2 = _interopRequireDefault(_http);

var _index_header = __webpack_require__(14);

var _index_header2 = _interopRequireDefault(_index_header);

__webpack_require__(16);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageIndex = function (_React$Component) {
  _inherits(PageIndex, _React$Component);

  function PageIndex() {
    _classCallCheck(this, PageIndex);

    return _possibleConstructorReturn(this, _React$Component.call(this));
  }

  PageIndex.prototype.asyncBootstrap = function asyncBootstrap() {
    // return new Promise((resolve,reject)=>{


    // })
  };

  PageIndex.prototype.componentDidMount = function componentDidMount() {
    _http2.default.get('/api/user/get_normal_info').then(function (res) {
      console.log('首页接口请求成功！返回值为：');
      console.log(res);
      return true;
    }).catch(function (err) {
      return false;
    });
  };

  PageIndex.prototype.componentWillMount = function componentWillMount() {
    // this.props.contestListStore.getContestList();
  };

  PageIndex.prototype.render = function render() {
    return _react2.default.createElement(
      'main',
      { className: 'page-index' },
      _react2.default.createElement(
        _reactHelmet2.default,
        null,
        _react2.default.createElement(
          'title',
          null,
          '\u9996\u9875'
        )
      ),
      _react2.default.createElement(_index_header2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'component-banner' },
        '\u9996\u9875',
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/user/login' },
          '\u767B\u9646'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/user/register' },
          '\u6CE8\u518C'
        )
      )
    );
  };

  return PageIndex;
}(_react2.default.Component);

exports.default = PageIndex;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  port: {
    client: 8088,
    develop: 3000,
    product: 3306
  },
  isDev: process.env.NODE_ENV === 'develop',
  domain: {
    dev: "http://php.wangerniu.org",
    prod: "http://api.whalesdesign.com"
  },
  GetHostByRequest: function GetHostByRequest(req) {
    var isApiDev = req.headers.host.indexOf('whalesdesign') > -1 ? false : true;
    var ApiDomain = isApiDev ? this.domain.dev : this.domain.prod;
    return ApiDomain;
  },

  appid: "test appid",
  apptoken: "test app token"
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(15);

var _mobxReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentIndexHeader = (_dec = (0, _mobxReact.inject)(function (stores) {
    return {
        UserState: stores.UserState
    };
}), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    _inherits(ComponentIndexHeader, _React$Component);

    function ComponentIndexHeader() {
        _classCallCheck(this, ComponentIndexHeader);

        return _possibleConstructorReturn(this, _React$Component.call(this));
    }

    ComponentIndexHeader.prototype.componentDidMount = function componentDidMount() {};

    ComponentIndexHeader.prototype.render = function render() {
        // console.log(this.props.user)
        return _react2.default.createElement(
            'header',
            { className: 'component-index-header' },
            _react2.default.createElement(
                'div',
                { className: 'main-container' },
                _react2.default.createElement(
                    'button',
                    { className: 'test-btn' },
                    '\u9996\u9875\u5BFC\u822A1'
                ),
                _react2.default.createElement(
                    'button',
                    { className: 'test-btn' },
                    '\u9996\u9875\u5BFC\u822A2'
                ),
                _react2.default.createElement(
                    'button',
                    { className: 'test-btn' },
                    '\u9996\u9875\u5BFC\u822A3'
                )
            ),
            this.props.UserState.user.isLogin ? _react2.default.createElement(
                'button',
                null,
                'this.props.UserState.user.info.username'
            ) : _react2.default.createElement(
                'button',
                { className: 'test-btn' },
                '\u767B\u9646/\u6CE8\u518C'
            )
        );
    };

    return ComponentIndexHeader;
}(_react2.default.Component)) || _class) || _class);
exports.default = ComponentIndexHeader;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

__webpack_require__(3);

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(19);

var _user_logo = __webpack_require__(7);

var _user_logo2 = _interopRequireDefault(_user_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageLogin = function (_React$Component) {
	_inherits(PageLogin, _React$Component);

	function PageLogin(props) {
		_classCallCheck(this, PageLogin);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

		_this.state = {
			loginMethodFlag: 1
		};
		_this.changeLoginMethod = _this.changeLoginMethod.bind(_this);
		_this.changeMethod = _this.changeMethod.bind(_this);
		return _this;
	}

	PageLogin.prototype.changeLoginMethod = function changeLoginMethod() {
		this.setState({
			loginMethodFlag: 2
		});
	};

	PageLogin.prototype.changeMethod = function changeMethod() {
		this.setState({
			loginMethodFlag: 1
		});
	};

	PageLogin.prototype.render = function render() {
		return _react2.default.createElement(
			'div',
			{ className: 'box' },
			_react2.default.createElement(
				'div',
				{ className: 'main-box' },
				_react2.default.createElement(
					'div',
					{ className: 'main-logo' },
					_react2.default.createElement('img', { src: _user_logo2.default })
				),
				_react2.default.createElement(
					'div',
					{ className: 'main-tab' },
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: '/user/register', className: 'login-common login-register-title' },
						'\u6CE8\u518C'
					),
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: '/user/login', className: 'login-common login-title' },
						'\u767B\u5F55'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'login-tail', ref: 'tail' },
					_react2.default.createElement(
						'i',
						{ className: 'icon iconfont' },
						'\uE639'
					)
				),
				this.state.loginMethodFlag == 1 ? _react2.default.createElement(
					'div',
					{ className: 'main-login-box' },
					_react2.default.createElement('input', { type: 'text', placeholder: '\u624B\u673A\u53F7' }),
					_react2.default.createElement('input', { type: 'text', placeholder: '\u77ED\u4FE1\u9A8C\u8BC1\u7801' }),
					_react2.default.createElement('span', { className: 'login-lever' }),
					_react2.default.createElement(
						'span',
						{ className: 'login-verification-code' },
						'\u53D1\u9001\u9A8C\u8BC1\u7801'
					),
					_react2.default.createElement(
						'button',
						{ className: 'page-button' },
						_react2.default.createElement(
							'span',
							null,
							'\u767B\u5F55'
						)
					),
					_react2.default.createElement(
						'p',
						{ className: 'login-method' },
						_react2.default.createElement(
							'span',
							{ onClick: this.changeLoginMethod, className: 'login-password' },
							'\u5BC6\u7801\u767B\u5F55\uFF08\u624B\u673A\u53F7\u6216\u90AE\u7BB1\uFF09'
						)
					),
					_react2.default.createElement(
						'p',
						{ className: 'login-title' },
						_react2.default.createElement(
							'span',
							null,
							'\u793E\u4EA4\u8D26\u6237\u767B\u5F55'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'login-image' },
						_react2.default.createElement(
							'div',
							{ className: '' },
							'\u56FE\u72471'
						),
						_react2.default.createElement(
							'div',
							{ className: '' },
							'\u56FE\u72472'
						),
						_react2.default.createElement(
							'div',
							{ className: '' },
							'\u56FE\u72473'
						)
					)
				) : _react2.default.createElement(
					'div',
					{ className: 'main-login-box' },
					_react2.default.createElement('input', { type: 'text', placeholder: '\u624B\u673A\u53F7\u6216\u90AE\u7BB1' }),
					_react2.default.createElement('input', { type: 'text', placeholder: '\u5BC6\u7801' }),
					_react2.default.createElement(
						'button',
						{ className: 'page-button ' },
						'\u767B\u5F55'
					),
					_react2.default.createElement(
						'p',
						{ className: 'login-method' },
						_react2.default.createElement(
							'span',
							{ className: 'login-verification', onClick: this.changeMethod },
							'\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55'
						),
						_react2.default.createElement(
							'span',
							{ className: 'login-failure', onClick: this.props.changeFalseLogin },
							'\u65E0\u6CD5\u767B\u5F55'
						)
					),
					_react2.default.createElement(
						'p',
						{ className: 'login-title' },
						_react2.default.createElement(
							'span',
							null,
							'\u793E\u4EA4\u8D26\u6237\u767B\u5F55'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'login-image' },
						_react2.default.createElement(
							'div',
							{ className: '' },
							'\u56FE\u72471'
						),
						_react2.default.createElement(
							'div',
							{ className: '' },
							'\u56FE\u72472'
						),
						_react2.default.createElement(
							'div',
							{ className: '' },
							'\u56FE\u72473'
						)
					)
				)
			),
			_react2.default.createElement(_index2.default, null)
		);
	};

	return PageLogin;
}(_react2.default.Component);

exports.default = PageLogin;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(3);

__webpack_require__(21);

__webpack_require__(22);

var _user_logo = __webpack_require__(7);

var _user_logo2 = _interopRequireDefault(_user_logo);

var _regexp = __webpack_require__(23);

var _regexp2 = _interopRequireDefault(_regexp);

var _index3 = __webpack_require__(24);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageRegister = function (_React$Component) {
	_inherits(PageRegister, _React$Component);

	function PageRegister(props) {
		_classCallCheck(this, PageRegister);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

		_this.getUserName = function (e) {
			console.log(_this);
			_this.refs.userNameHelp.style.display = "none";
			_this.setState({
				verifyStatus: true
			});
			_this.setState({
				userName: e.target.value
			});
		};

		_this.getUserNumber = function (e) {
			_this.refs.userNumberHelp1.style.display = "none";
			_this.setState({
				verifyStatus: true
			});
			_this.setState({
				userNumber: e.target.value
			}, function () {

				// 验证手机号不能为空
				if (_this.state.userNumber == "") {
					_this.refs.userNumberHelp1.style.display = "block";
					_this.setState({
						userNumberHelp: "请输入手机号",
						verifyStatus: false
					});
				} else if (!_regexp2.default.mobile.test(_this.state.userNumber)) {
					_this.refs.userNumberHelp1.style.display = "block";
					_this.setState({
						userNumberHelp: "请填写格式正确的手机号",
						verifyStatus: false
					});
				}
			});
		};

		_this.getUserAbroadNumber = function (e) {
			_this.setState({
				verifyStatus: true
			});
			_this.setState({
				userAbroadNumber: e.target.value
			}, function () {
				// 验证手机号不能为空
				var patternuserAbroadNumber = /[0-9a-zA-Z\+@]{1,32}/;
				if (_this.state.userAbroadNumber == "") {
					_this.refs.userNumberHelp2.style.display = "block";
					_this.setState({
						userAbroadNumberHelp: "请输入手机号或邮箱",
						verifyStatus: false
					});
				} else if (!patternuserAbroadNumber.test(_this.state.userAbroadNumber)) {
					_this.refs.userNumberHelp2.style.display = "block";
					_this.setState({
						userAbroadNumberHelp: "请填写格式正确的手机号或邮箱",
						verifyStatus: false
					});
				}
			});
			// console.log(this.state.userAbroadNumber);
		};

		_this.getUserPassword = function (e) {
			_this.refs.userPasswordHelp.style.display = "none";
			_this.setState({
				verifyStatus: true
			});
			_this.setState({
				userPassword: e.target.value
			});
		};

		_this.getUserDesigner = function () {
			_this.refs.register_customer.style.borderColor = "rgba(204,204,204,1)";
			_this.refs.register_customer_text.style.color = "rgba(153,153,153,1)";
			_this.refs.register_designer.style.borderColor = "rgba(101,180,255,1)";
			_this.refs.register_designer_text.style.color = "rgba(101,180,255,1)";
			_this.setState({
				userCharacter: 1
			});
		};

		_this.getUserCustomer = function () {
			_this.refs.register_designer.style.borderColor = "rgba(204,204,204,1)";
			_this.refs.register_designer_text.style.color = "rgba(153,153,153,1)";
			_this.refs.register_customer.style.borderColor = "rgba(101,180,255,1)";
			_this.refs.register_customer_text.style.color = "rgba(101,180,255,1)";
			_this.setState({
				userCharacter: 2
			});
		};

		_this.getUserAgreest = function () {
			_this.setState(function (prevState) {
				return {
					userAgreest: !prevState.userAgreest
				};
			}, function () {
				if (_this.state.userAgreest) {
					_this.refs.register_agree_tick.style.backgroundColor = "rgba(101,180,255,1)";
					_this.refs.register_tick.style.display = "block";
				} else {
					_this.refs.register_tick.style.display = "none";
					_this.refs.register_agree_tick.style.backgroundColor = "#ffffff";
				}
				// console.log(this.state.userAgreest);
			});
		};

		_this.registerVerify = function () {
			// 用户名验证
			var userNameArray = _this.state.userName.split("");
			var patternUserName = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/;
			if (_this.state.userName == "") {
				_this.refs.userNameHelp.style.display = "block";
				_this.setState({
					userNameHelp: "请输入姓名",
					verifyStatus: false
				});
				// return false;
			} else if (patternUserName.test(_this.state.userName)) {
				var length = 0;
				userNameArray.map(function (item, index) {
					var chinese = /[\u4E00-\u9FA5]/;
					if (chinese.test(item)) {
						length += 2;
					} else {
						length += 1;
					}
				});
				if (length > 20) {
					_this.refs.userNameHelp.style.display = "block";
					_this.setState({
						userNameHelp: "姓名应小于10汉字或20英文字符",
						verifyStatus: false
					});
					// return false;
				} else {
					_this.refs.userNameHelp.style.display = "none";
				}
			} else {
				_this.refs.userNameHelp.style.display = "block";
				_this.setState({
					userNameHelp: "姓名只支持汉字、数字、字母及emoji",
					verifyStatus: false
				});
				// return false;
			}

			// 先判断是国内还是国外
			if (_this.state.overseas) {
				// 验证手机号不能为空
				if (_this.state.userNumber == "") {
					_this.refs.userNumberHelp1.style.display = "block";
					_this.setState({
						userNumberHelp: "请输入手机号",
						verifyStatus: false
					});
					// return false;
				}
			} else {
				// 验证国外手机号不能为空
				if (_this.state.userAbroadNumber == "") {
					_this.refs.userNumberHelp2.style.display = "block";
					_this.setState({
						userNumberHelp: "请输入手机号或邮箱",
						verifyStatus: false
					});
					// return false;
				}
			}

			// 验证密码不能为空
			var patternUserPassword = /^\S{6,}$/;
			if (_this.state.userPassword == "") {
				_this.refs.userPasswordHelp.style.display = "block";
				_this.setState({
					userPasswordHelp: "请输入密码",
					verifyStatus: false
				});
				// return false;
			} else if (!patternUserPassword.test(_this.state.userPassword)) {
				_this.refs.userPasswordHelp.style.display = "block";
				_this.setState({
					userPasswordHelp: "密码应不少于6位字符",
					verifyStatus: false
				});
				// return false;
			}

			// 判断用户身份
			// this.state.userCharacter

			// 判断是否勾选精于设计用户协议
			// this.state.userAgreest

			// 判断全部正确时候弹出手机验证码的弹框
			// if (this.state.userAgreest && this.state.verifyStatus) {
			// 	this.setState({
			// 		moduleStatus:true,
			// 	})
			// }
		};

		_this.state = {
			overseas: true,
			flag: false,
			userName: "", // 姓名
			userNameHelp: "", // 姓名错误提示
			userNumber: "", // 手机号
			userNumberHelp: "", // 手机号错误提示
			userAbroadNumber: "", // 国外手机号码
			userAbroadNumberHelp: "", // 国外手机号码错误提示
			userPassword: "", // 密码
			userPasswordHelp: "", // 密码错误提示
			userCharacter: 1, // 用户角色：设计师(1), 企业(2) 
			userAgreest: false, // 用户是否同意精于协议
			verifyStatus: true, // 验证状态
			moduleStatus: true // 手机验证码的状态
		};
		_this.registerWhale = _this.registerWhale.bind(_this);
		_this.closeModal = _this.closeModal.bind(_this);
		return _this;
	}

	// 获取用户姓名


	// 获取手机号码


	// 获取用户国外手机号码


	// 获取用户密码


	// 获取设计师用户角色


	// 获取企业用户角色


	// 获取用户是否同意精于协议的状态


	// 点击注册精于的验证


	// 点击注册精于的验证手机弹框
	PageRegister.prototype.registerWhale = function registerWhale() {
		var _this2 = this;

		this.setState({
			flag: true
		}, function () {
			console.log(_this2.state.flag);
		});
		console.log(this.state.flag);
	};

	// 点击x关闭弹窗


	PageRegister.prototype.closeModal = function closeModal() {
		this.setState({
			moduleStatus: false
		});
	};

	// onClick={(e) => this.handleClick(e)}
	// onChange={(e) => this.changeName(e)}


	PageRegister.prototype.render = function render() {
		var _this3 = this;

		var componentParams = {
			// moduleStatus:this.state.moduleStatus,
			closeModal: this.closeModal

		};
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'div',
				{ className: 'box' },
				_react2.default.createElement(
					'div',
					{ className: 'main-box' },
					_react2.default.createElement(
						'div',
						{ className: 'main-logo' },
						_react2.default.createElement('img', { src: _user_logo2.default })
					),
					_react2.default.createElement(
						'div',
						{ className: 'main-tab' },
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ to: '/user/register', className: 'register-common register-title' },
							'\u6CE8\u518C'
						),
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ to: '/user/login', className: 'register-common' },
							'\u767B\u5F55'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'register-tail', ref: 'tail' },
						_react2.default.createElement(
							'i',
							{ className: 'icon1 iconfont' },
							'\uE639'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'main-register-box' },
						_react2.default.createElement('input', { type: 'text', placeholder: '\u59D3\u540D', onChange: function onChange(e) {
								return _this3.getUserName(e);
							} }),
						_react2.default.createElement(
							'span',
							{ className: 'userHelpTitle userNameHelp', ref: 'userNameHelp' },
							this.state.userNameHelp
						),
						this.state.overseas ? _react2.default.createElement('input', { type: 'text', placeholder: '\u624B\u673A\u53F7', onChange: function onChange(e) {
								return _this3.getUserNumber(e);
							} }) : _react2.default.createElement('input', { type: 'text', placeholder: '\u624B\u673A\u53F7\u6216\u90AE\u7BB1\uFF08\u56FD\u5916\u624B\u673A\u8BF7\u5199\u56FD\u9645\u533A\u53F7\uFF09', onChange: function onChange(e) {
								return _this3.getUserAbroadNumber(e);
							} }),
						this.state.overseas ? _react2.default.createElement(
							'span',
							{ className: 'userHelpTitle userNumberHelp1', ref: 'userNumberHelp1' },
							this.state.userNumberHelp
						) : _react2.default.createElement(
							'span',
							{ className: 'userHelpTitle userNumberHelp2', ref: 'userNumberHelp2' },
							this.state.userAbroadNumberHelp
						),
						_react2.default.createElement('input', { type: 'password', placeholder: '\u5BC6\u7801\uFF08\u4E0D\u5C11\u4E8E6\u4F4D\uFF09', className: 'sInput', onChange: function onChange(e) {
								return _this3.getUserPassword(e);
							} }),
						_react2.default.createElement(
							'span',
							{ className: 'userHelpTitle userPasswordHelp', ref: 'userPasswordHelp' },
							this.state.userPasswordHelp
						),
						_react2.default.createElement(
							'div',
							{ className: 'register-identity' },
							_react2.default.createElement(
								'p',
								{ className: 'register_identity-p1', onClick: this.getUserDesigner, ref: 'register_designer' },
								_react2.default.createElement(
									'span',
									{ className: 'register_identity-one', ref: 'register_designer_text' },
									' \u6211\u662F\u8BBE\u8BA1\u5E08 '
								)
							),
							_react2.default.createElement(
								'p',
								{ onClick: this.getUserCustomer, className: 'register_identity-p2', ref: 'register_customer' },
								_react2.default.createElement(
									'span',
									{ className: 'register-identity-two', ref: 'register_customer_text' },
									' \u6211\u4EE3\u8868\u4F01\u4E1A '
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'register-agree' },
							_react2.default.createElement(
								'p',
								{ className: 'register-agree-tick', onClick: this.getUserAgreest, ref: 'register_agree_tick' },
								_react2.default.createElement(
									'i',
									{ className: 'iconfont', style: { 'color': "white", "display": "none" }, ref: 'register_tick' },
									'\uE626'
								)
							),
							_react2.default.createElement(
								'p',
								{ className: 'register-agree-text' },
								_react2.default.createElement(
									'span',
									null,
									' \u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F '
								),
								_react2.default.createElement(
									'span',
									{ className: 'sColor' },
									' \u300A\u7CBE\u4E8E\u8BBE\u8BA1\u7528\u6237\u534F\u8BAE\u300B '
								)
							)
						),
						_react2.default.createElement(
							'button',
							{ className: 'page-button register-button', onClick: this.registerVerify },
							'\u6CE8\u518C\u7CBE\u4E8E\u8BBE\u8BA1'
						)
					)
				),
				_react2.default.createElement(_index2.default, null)
			),
			this.state.moduleStatus ? _react2.default.createElement(_index4.default, componentParams) : null
		);
	};

	return PageRegister;
}(_react2.default.Component);

exports.default = PageRegister;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
    mobile: /^1[3|4|5|7|8][0-9]{9}$/,
    email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
    number: /^[0-9]$/,
    chinese: /^[\u4E00-\u9FA5]+$/,
    letter: /^[a-zA-Z]+$/
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(25);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import closeSrc from '@image/user_.png';

var Module = function (_Component) {
    _inherits(Module, _Component);

    function Module(props) {
        _classCallCheck(this, Module);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.clocking = function () {
            _this.setState(function (prevState) {
                return {
                    number: prevState.number - 1
                };
            });

            if (_this.state.number == 0) {
                clearInterval(_this.timer);
                _this.setState({
                    vCodeTitle: "重发验证码",
                    vFlag: 2
                });
                if (_this.state.vFlag == 2) {
                    _this.refs.verify_timer1.style.color = "rgba(101,180,255,1)";
                }
            }
        };

        _this.againSend = function () {
            _this.setState({
                vFlag: 1,
                number: 5
            }, function () {
                _this.refs.verify_timer.style.color = "rgba(102,102,102,1)";
                _this.timer = setInterval(function () {
                    return _this.clocking();
                }, 1000);
            });
        };

        _this.click = function (e, item) {
            console.log(item);
        };

        _this.state = {
            number: 5,
            flag: 1,
            vCodeTitle: "",
            vFlag: 1
            // this.clocking = this.clocking.bind(this);
        };return _this;
    }

    // 点击重发验证码


    Module.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        this.timer = setInterval(function () {
            return _this2.clocking();
        }, 1000);
    };

    Module.prototype.render = function render() {
        var _this3 = this;

        var aaa = [1, 2, 34, 4];
        var option = aaa.map(function (item, index) {
            return _react2.default.createElement(
                'li',
                { key: index, onClick: function onClick(e) {
                        _this3.click(e, item);
                    } },
                item
            );
        });
        return _react2.default.createElement(
            'div',
            { className: 'page-modal' },
            this.state.flag == 1 ? _react2.default.createElement(
                'div',
                { className: 'page-modal-box' },
                _react2.default.createElement(
                    'i',
                    { className: 'icon1 iconfont', onClick: this.props.closeModal },
                    '\uE633'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'page-modal-main' },
                    _react2.default.createElement(
                        'p',
                        { className: 'verify-cellphone' },
                        '\u9A8C\u8BC1\u624B\u673A'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'in-messages' },
                        '\u8BF7\u8F93\u5165\u60A8\u6536\u5230\u76846\u4F4D\u6570\u77ED\u4FE1\u9A8C\u8BC1\u7801'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'page-modal-qp' },
                        _react2.default.createElement(
                            'i',
                            { className: 'icon_qp iconfont' },
                            '\uE639'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'main-verify-box' },
                        _react2.default.createElement('input', { type: 'text', className: 'main-verify-input1' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'verify_select_box' },
                            option
                        ),
                        _react2.default.createElement('input', { type: 'text', placeholder: '\u77ED\u4FE1\u9A8C\u8BC1\u7801', className: 'main-verify-input2' }),
                        _react2.default.createElement('span', { className: 'verify-lever' }),
                        this.state.vFlag == 1 ? _react2.default.createElement(
                            'span',
                            { className: 'verify-timer', ref: 'verify_timer' },
                            this.state.number,
                            '\u79D2\u540E\u91CD\u53D1'
                        ) : _react2.default.createElement(
                            'span',
                            { className: 'verify-timer', ref: 'verify_timer1', onClick: this.againSend },
                            this.state.vCodeTitle
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: 'page-button verify-button' },
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u8FDB\u5165\u7CBE\u4E8E'
                            )
                        )
                    )
                )
            ) : _react2.default.createElement(
                'div',
                { className: 'page-modal-box' },
                _react2.default.createElement('img', { src: '../../../static/image/Combined Shape.png', className: 'page-modal-close', onClick: this.props.closeModal }),
                _react2.default.createElement(
                    'div',
                    { className: 'page-modal-main' },
                    _react2.default.createElement(
                        'p',
                        { className: 'verify-cellphone' },
                        '\u9A8C\u8BC1\u90AE\u7BB1'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'in-messages' },
                        '\u8BF7\u8F93\u5165\u60A8\u6536\u5230\u76846\u4F4D\u6570\u90AE\u7BB1\u9A8C\u8BC1\u7801'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'page-modal-qp' },
                        _react2.default.createElement('img', { src: '../../../static/image/qp.png' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'main-verify-box' },
                        _react2.default.createElement('input', { type: 'text', className: 'main-verify-input1' }),
                        _react2.default.createElement('input', { type: 'text', placeholder: '\u90AE\u7BB1\u9A8C\u8BC1\u7801', className: 'main-verify-input2' }),
                        _react2.default.createElement('span', { className: 'verify-lever' }),
                        _react2.default.createElement(
                            'span',
                            { className: 'verify-timer', ref: 'verify_timer' },
                            this.state.number,
                            '\u79D2\u540E\u91CD\u53D1'
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: 'page-button verify-button' },
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u8FDB\u5165\u7CBE\u4E8E'
                            )
                        )
                    )
                )
            )
        );
    };

    return Module;
}(_react.Component);

exports.default = Module;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CreateStoreMap = exports.UserState = undefined;

var _userinfo = __webpack_require__(29);

var _userinfo2 = _interopRequireDefault(_userinfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.UserState = _userinfo2.default;
var CreateStoreMap = exports.CreateStoreMap = function CreateStoreMap() {
  return {
    UserState: new _userinfo2.default()
  };
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _desc, _value, _class, _descriptor;

var _mobx = __webpack_require__(30);

var _http = __webpack_require__(5);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var UserState = (_class = function () {
    function UserState() {
        _classCallCheck(this, UserState);

        _initDefineProp(this, 'user', _descriptor, this);
    }

    UserState.prototype.toJson = function toJson() {
        return {
            user: (0, _mobx.toJS)(this.user)
        };
    };

    return UserState;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'user', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return {
            isLogin: false,
            info: {
                username: "123"
            }
        };
    }
})), _class);
exports.default = UserState;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ })
/******/ ]);
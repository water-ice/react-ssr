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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _mobxReact = __webpack_require__(2);

__webpack_require__(18);

var _http = __webpack_require__(8);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentHeader = (_dec = (0, _mobxReact.inject)(function (stores) {
  return {
    UserStore: stores.UserStore
  };
}), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(ComponentHeader, _React$Component);

  function ComponentHeader(props) {
    _classCallCheck(this, ComponentHeader);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      user: props.UserStore.user
    };
    return _this;
  }

  ComponentHeader.prototype.componentDidMount = function componentDidMount() {
    console.log(this.props.UserStore.user.name);
  };

  ComponentHeader.prototype.Logout = function Logout() {
    var _this2 = this;

    _http2.default.post('/api/user/user/logout').then(function (response) {
      if (response.data.status == 1) {
        _this2.props.UserStore.clearUserInfo();
        _this2.setState({
          user: {}
        });
      } else {
        alert(response.data.message);
      }
    });
  };

  ComponentHeader.prototype.render = function render() {
    var user = this.state.user || {};
    return _react2.default.createElement(
      'header',
      { className: 'component-header' },
      _react2.default.createElement(
        'a',
        { href: '/' },
        _react2.default.createElement('img', { className: 'logo', src: '', alt: 'LOGO' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'main' },
        _react2.default.createElement(
          'nav',
          { className: 'nav' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/list' },
            '\u5217\u8868'
          ),
          _react2.default.createElement(
            'a',
            { href: '/list' },
            '\u5217\u8868'
          )
        ),
        user.uid ? _react2.default.createElement(
          'div',
          { className: 'user hand' },
          _react2.default.createElement('img', { src: user.avatar, width: '40', alt: '' }),
          _react2.default.createElement(
            'ul',
            { className: 'operate' },
            _react2.default.createElement(
              'li',
              { onClick: this.Logout.bind(this) },
              '\u9000\u51FA'
            )
          )
        ) : _react2.default.createElement(
          'div',
          { className: 'account' },
          _react2.default.createElement(
            'a',
            { href: '/user/login' },
            '\u767B\u5F55'
          ),
          '/',
          _react2.default.createElement(
            'a',
            { href: '/user/register' },
            '\u6CE8\u518C'
          )
        )
      )
    );
  };

  return ComponentHeader;
}(_react2.default.Component)) || _class) || _class);
exports.default = ComponentHeader;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

__webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GlobalFooter = function (_React$Component) {
  _inherits(GlobalFooter, _React$Component);

  function GlobalFooter() {
    _classCallCheck(this, GlobalFooter);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {};
    return _this;
  }

  GlobalFooter.prototype.render = function render() {
    return _react2.default.createElement(
      'footer',
      { className: 'component-footer' },
      '@copyright 2017  @wangerniu'
    );
  };

  return GlobalFooter;
}(_react2.default.Component);

exports.default = GlobalFooter;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var axios = __webpack_require__(3);
var Config = __webpack_require__(10);
var qs = __webpack_require__(9);
/**
 * @function 接口请求方法
 * @param url 请求连接
 * @param data 请求参数
 * @param method 请求方式
 */
axios.interceptors.request.use(function (config) {
    // console.log(config)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

var ApiDomain = Config.getDomain();
var ajax = function ajax(realPath, method, data, params, headers) {
    return new Promise(function (resolve, reject) {
        axios({
            url: realPath,
            method: method,
            data: data,
            params: params,
            headers: headers
        }).then(function (response) {
            // console.log("当前Ajax发送请求返回状态码为:"+response.status)
            // console.log("接口为：" +url)
            // console.log('【http接口返回值】')
            // console.log(response.data)
            resolve(response);
        }).catch(function (err) {
            console.log('【http.js报错】');
            console.log(err);
            console.log(realPath);
            console.log(method);
            console.log(headers);
            console.log(data);
            reject(err);
        });
    });
};
module.exports = {
    ajax: ajax,
    get: function get(url, data, params) {
        var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        return ajax(url, 'GET', data, headers);
    },
    post: function post(url, data, params) {
        var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        return ajax(url, 'POST', data, headers);
    },
    upload: function upload(url, data, params, progress) {
        var path = url.replace('/api', '');
        return new Promise(function (resolve, reject) {
            axios({
                url: '' + Config.getDomain() + path,
                data: data,
                method: "POST",
                params: params,
                onUploadProgress: function onUploadProgress(progressEvent) {
                    var current = progressEvent.loaded / progressEvent.total;
                    progress(current.toFixed(2));
                }
            }).then(function (response) {
                resolve(response.data);
            }).catch(function (error) {
                console.log('----------上传接口错误-------------');
                console.log(error);
                console.log('----------上传接口错误-------------');
                reject(error);
            });
        });
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var axios = __webpack_require__(3);
var qs = __webpack_require__(9);
/**
 * @function 接口请求方法
 * @param url 相对路径链接：/api/login/loginMobile
 * @param data 请求参数
 * @param parmas 请求参数
 * @param method 请求方式
 * @explain 客户端http请求方法
 */
axios.interceptors.request.use(function (config) {
    // console.log(config)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

var ajax = function ajax(relativePath, method, data, headers) {
    return new Promise(function (resolve, reject) {
        axios({
            url: relativePath,
            method: method,
            data: data,
            headers: headers
        }).then(function (response) {
            resolve(response);
        }).catch(function (err) {
            console.log('【http.js报错】');
            console.log(err);
            console.log(realPath);
            console.log(method);
            console.log(headers);
            console.log(data);
            reject(err);
        });
    });
};
module.exports = {
    ajax: ajax,
    get: function get(url, data) {
        var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return ajax(url, 'GET', data, headers);
    },
    post: function post(url, data) {
        var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return ajax(url, 'POST', data, headers);
    },
    upload: function upload(relativePath, data, params, progress) {
        return new Promise(function (resolve, reject) {
            axios({
                url: relativePath,
                data: data,
                method: "POST",
                params: params,
                onUploadProgress: function onUploadProgress(progressEvent) {
                    var current = progressEvent.loaded / progressEvent.total;
                    progress(current.toFixed(2));
                }
            }).then(function (response) {
                resolve(response.data);
            }).catch(function (error) {
                console.log('----------上传接口错误-------------');
                console.log(error);
                console.log('----------上传接口错误-------------');
                reject(error);
            });
        });
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  port: {
    client: 8087,
    develop: 3002,
    product: 3001
  },
  isDev: process.env.NODE_ENV === 'develop',
  isNode: typeof window === "undefined",
  domain: {
    dev: "http://php.wangerniu.org",
    prod: "http://php.wangerniu.org"
  },
  appid: "test appid",
  apptoken: "test app token",
  getDomain: function getDomain() {
    return process.env.API_ENV == 'production' ? this.domain.prod : this.domain.dev;
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CreateStoreMap = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(13);

var _App2 = _interopRequireDefault(_App);

var _reactRouterDom = __webpack_require__(1);

var _mobxReact = __webpack_require__(2);

var _store = __webpack_require__(32);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(1);

__webpack_require__(14);

__webpack_require__(15);

var _router = __webpack_require__(16);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (_dec = (0, _mobxReact.inject)(function (stores) {
  return {
    UserStore: stores.UserStore
  };
}), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component.call(this));
  }

  App.prototype.render = function render() {
    return _react2.default.createElement(_router2.default, null);
  };

  return App;
}(_react2.default.Component)) || _class) || _class);
exports.default = (0, _reactRouterDom.withRouter)(App);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _index = __webpack_require__(17);

var _index2 = _interopRequireDefault(_index);

var _register = __webpack_require__(21);

var _register2 = _interopRequireDefault(_register);

var _login = __webpack_require__(26);

var _login2 = _interopRequireDefault(_login);

var _test = __webpack_require__(28);

var _test2 = _interopRequireDefault(_test);

var _ = __webpack_require__(30);

var _2 = _interopRequireDefault(_);

var _list = __webpack_require__(31);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouterMap = function (_React$Component) {
  _inherits(RouterMap, _React$Component);

  function RouterMap(props) {
    _classCallCheck(this, RouterMap);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  RouterMap.prototype.render = function render() {
    return _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { key: '1', path: '/', component: _index2.default, exact: true }),
      ', // \u767B\u5F55\u6CE8\u518C\u90E8\u5206',
      _react2.default.createElement(_reactRouterDom.Route, { key: 'user', path: '/user/register', component: _register2.default }),
      ',',
      _react2.default.createElement(_reactRouterDom.Route, { key: 'user', path: '/user/login', component: _login2.default }),
      ',',
      _react2.default.createElement(_reactRouterDom.Route, { key: 'test', path: '/test', component: _test2.default }),
      ',',
      _react2.default.createElement(_reactRouterDom.Route, { key: 'list', path: '/list', component: _list2.default }),
      ',',
      _react2.default.createElement(_reactRouterDom.Route, { component: _2.default }),
      ','
    );
  };

  return RouterMap;
}(_react2.default.Component);

exports.default = RouterMap;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _mobxReact = __webpack_require__(2);

var _reactHelmet = __webpack_require__(4);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouterDom = __webpack_require__(1);

var _header = __webpack_require__(5);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(6);

var _footer2 = _interopRequireDefault(_footer);

__webpack_require__(20);

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

  PageIndex.prototype.render = function render() {
    return _react2.default.createElement(
      'main',
      null,
      _react2.default.createElement(
        _reactHelmet2.default,
        null,
        _react2.default.createElement(
          'title',
          null,
          '\u7CBE\u4E8E\u8BBE\u8BA1-\u4E16\u754C\u8BBE\u8BA1\u5E08\u8D4F\u91D1\u6E38\u620F\u5E73\u53F0'
        )
      ),
      _react2.default.createElement(_header2.default, { history: this.props.history }),
      _react2.default.createElement(
        'div',
        { className: 'page-index' },
        '\u9996\u9875'
      ),
      _react2.default.createElement(_footer2.default, null)
    );
  };

  return PageIndex;
}(_react2.default.Component);

exports.default = PageIndex;

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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactHelmet = __webpack_require__(4);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _mobxReact = __webpack_require__(2);

var _header = __webpack_require__(5);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(6);

var _footer2 = _interopRequireDefault(_footer);

var _message = __webpack_require__(22);

var _message2 = _interopRequireDefault(_message);

var _http = __webpack_require__(7);

var _http2 = _interopRequireDefault(_http);

var _string = __webpack_require__(24);

__webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageRegister = (_dec = (0, _mobxReact.inject)('UserStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(PageRegister, _React$Component);

	function PageRegister(props) {
		_classCallCheck(this, PageRegister);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

		_this.state = {
			account: "",
			password: "",
			passwordTwice: ""
		};
		return _this;
	}

	PageRegister.prototype.EditAccount = function EditAccount(ev) {
		var account = (0, _string.trim)(ev.target.value);
		this.setState({
			account: account
		});
	};

	PageRegister.prototype.EditPassword = function EditPassword(ev) {
		var password = (0, _string.trim)(ev.target.value);
		this.setState({
			password: password
		});
	};

	PageRegister.prototype.EditPasswordTwice = function EditPasswordTwice(ev) {
		var passwordTwice = (0, _string.trim)(ev.target.value);
		this.setState({
			passwordTwice: passwordTwice
		});
	};

	PageRegister.prototype.Commit = function Commit() {
		var account = this.state.account,
		    password = this.state.password,
		    passwordTwice = this.state.passwordTwice;
		_http2.default.post('/api/user/user/register', {
			account: account,
			password: password,
			passwordTwice: passwordTwice
		}).then(function (response) {
			if (response.data.status == 0) {
				alert(response.data.errMsg);
			} else {
				_http2.default.post('/api/user/user/getUserInfo').then(function (response) {
					if (response) {
						window.location.href = '/';
					}
				});
			}
		});
	};

	PageRegister.prototype.render = function render() {

		return _react2.default.createElement(
			'div',
			{ className: 'page-register' },
			_react2.default.createElement(
				_reactHelmet2.default,
				null,
				_react2.default.createElement(
					'title',
					null,
					'\u6CE8\u518C'
				)
			),
			_react2.default.createElement(_header2.default, null),
			_react2.default.createElement(
				'main',
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'text-center mt10' },
					_react2.default.createElement('input', { onChange: this.EditAccount.bind(this), className: 'input bg-fff', type: 'text', placeholder: '\u8D26\u53F7' })
				),
				_react2.default.createElement(
					'div',
					{ className: 'text-center mt10' },
					_react2.default.createElement('input', { onChange: this.EditPassword.bind(this), className: 'input bg-fff', type: 'password', placeholder: '\u5BC6\u7801' })
				),
				_react2.default.createElement(
					'div',
					{ className: 'text-center mt10' },
					_react2.default.createElement('input', { onChange: this.EditPasswordTwice.bind(this), className: 'input bg-fff', type: 'password', placeholder: '\u786E\u8BA4\u5BC6\u7801' })
				),
				_react2.default.createElement(
					'div',
					{ className: 'text-center mt40' },
					_react2.default.createElement(
						'button',
						{ onClick: this.Commit.bind(this), className: 'btn' },
						'\u6CE8\u518C'
					)
				)
			),
			_react2.default.createElement(_footer2.default, null)
		);
	};

	return PageRegister;
}(_react2.default.Component)) || _class) || _class);
exports.default = PageRegister;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iconType = {
    info: _react2.default.createElement(
        'i',
        { className: 'iconfont message-info' },
        '\uE8BE'
    ),
    success: _react2.default.createElement(
        'i',
        { className: 'iconfont message-success' },
        '\uE602'
    ),
    error: _react2.default.createElement(
        'i',
        { className: 'iconfont message-error' },
        '\uE71A'
    )
};

var PluginMessage = function (_Component) {
    _inherits(PluginMessage, _Component);

    function PluginMessage(props) {
        _classCallCheck(this, PluginMessage);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            content: ""
        };
        return _this;
    }

    PluginMessage.prototype.info = function info(content) {
        this.setState({
            content: content
        });
    };

    PluginMessage.prototype.render = function render() {
        // const icon = iconType[type];

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { className: 'plugin-message' },
                _react2.default.createElement(
                    'span',
                    null,
                    this.state.content
                )
            )
        );
    };

    return PluginMessage;
}(_react.Component);

exports.default = PluginMessage;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.trim = trim;
exports.replaceSymbol = replaceSymbol;
exports.getSearchParam = getSearchParam;
/**
 * 字符串工具方法
 * @author 王磊
 * @date 2017/12/13
 */

/**
 * @method 去除字符串前后空格
 * @param {String} str 参数字符串
 * @returns {String} 去除前后空格的字符串
 */
function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * @method 符号替换字符
 * @param { String } str      替换字符串
 * @param { Number } start    替换起始位置
 * @param { Number } length   替换长度
 * @param { String } symbol   替换成为的内容，默认为*
 * @example replaceSymbol('15929485111',3,4,'*') => 159****5111
 */
function replaceSymbol(str, start, length, symbol) {
  var regexpStr = '([\\w\\W]{' + start + '})' + '([\\w\\W]{' + length + '})' + '(.*?)';
  var regexp = new RegExp(regexpStr);
  // 此处应该有优化
  var symbolStr = '';
  for (var i = 0; i < length; i++) {
    symbolStr += Symbol;
  }
  return str.replace(regexp, "$1" + symbolStr + "$3");
}

/**
 * 获取usearch上的参数
 * @param { String } search 路由的search值
 * @param { String } key 想要获取的参数
 * @example getSearchParam(this.props.location.search,'type') => 1
 * search的传递：this.props.history.push({pathname:"/index",search:"&a=1&b=2"})
 */
function getSearchParam(search, key) {
  // 去掉前面默认的问号
  var params = search.replace('?', '');
  var regexp = RegExp("(^|&)" + key + "=([^&]*)(&|$)");
  var values = params.match(regexp);
  return values[2] || null;
}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactHelmet = __webpack_require__(4);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _header = __webpack_require__(5);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(6);

var _footer2 = _interopRequireDefault(_footer);

var _http = __webpack_require__(7);

var _http2 = _interopRequireDefault(_http);

var _http3 = __webpack_require__(8);

var _http4 = _interopRequireDefault(_http3);

__webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentLogin = function (_React$Component) {
	_inherits(ComponentLogin, _React$Component);

	function ComponentLogin(props) {
		_classCallCheck(this, ComponentLogin);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

		_this.state = {};
		return _this;
	}

	ComponentLogin.prototype.test = function test() {};

	ComponentLogin.prototype.render = function render() {

		return _react2.default.createElement(
			'div',
			{ className: 'page-login' },
			_react2.default.createElement(
				_reactHelmet2.default,
				null,
				_react2.default.createElement(
					'title',
					null,
					'\u767B\u5F55'
				)
			),
			_react2.default.createElement(_header2.default, null),
			_react2.default.createElement(
				'main',
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'text-center mt10' },
					_react2.default.createElement('input', { className: 'input bg-fff', type: 'text', placeholder: '\u8D26\u53F7' })
				),
				_react2.default.createElement(
					'div',
					{ className: 'text-center mt10' },
					_react2.default.createElement('input', { className: 'input bg-fff', type: 'text', placeholder: '\u5BC6\u7801' })
				),
				_react2.default.createElement(
					'div',
					{ className: 'text-center mt40' },
					_react2.default.createElement(
						'button',
						{ onClick: this.test.bind(this), className: 'btn' },
						'\u767B\u5F55'
					)
				)
			),
			_react2.default.createElement(_footer2.default, null)
		);
	};

	return ComponentLogin;
}(_react2.default.Component);

exports.default = ComponentLogin;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(2);

var _reactAsyncBootstrapper = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestIndex = (_dec = (0, _mobxReact.inject)('TestStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    _inherits(TestIndex, _Component);

    function TestIndex(props) {
        _classCallCheck(this, TestIndex);

        // console.log(this.props.TestStore.datas.status)
        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            list: props.TestStore.datas.info
        };
        return _this;
    }

    TestIndex.prototype.asyncBootstrap = function asyncBootstrap() {
        return this.props.TestStore.getData().then(function (response) {
            return true;
        });
    };

    TestIndex.prototype.componentDidMount = function componentDidMount() {
        console.log(this.state.list);
    };

    TestIndex.prototype.render = function render() {
        var list1 = this.state.list;
        return _react2.default.createElement(
            'div',
            null,
            list1 ? list1.map(function (item) {
                return _react2.default.createElement(
                    'div',
                    { key: item.title },
                    item.title,
                    _react2.default.createElement('br', null),
                    item.type
                );
            }) : _react2.default.createElement(
                'div',
                null,
                'loading'
            )
        );
    };

    return TestIndex;
}(_react.Component)) || _class) || _class);
exports.default = TestIndex;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-async-bootstrapper");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page404 = function (_Component) {
    _inherits(Page404, _Component);

    function Page404() {
        _classCallCheck(this, Page404);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Page404.prototype.render = function render() {
        return _react2.default.createElement(
            'h1',
            null,
            '404'
        );
    };

    return Page404;
}(_react.Component);

exports.default = Page404;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _mobxReact = __webpack_require__(2);

var _reactHelmet = __webpack_require__(4);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _header = __webpack_require__(5);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(6);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageList = function (_Component) {
    _inherits(PageList, _Component);

    function PageList() {
        _classCallCheck(this, PageList);

        return _possibleConstructorReturn(this, _Component.call(this));
    }

    PageList.prototype.render = function render() {
        return _react2.default.createElement(
            'div',
            { className: 'page-list' },
            _react2.default.createElement(
                _reactHelmet2.default,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    '\u5217\u8868\u9875'
                )
            ),
            _react2.default.createElement(_header2.default, { history: this.props.history }),
            _react2.default.createElement(
                'div',
                { className: 'list-container' },
                '\u5217\u8868'
            ),
            _react2.default.createElement(_footer2.default, null)
        );
    };

    return PageList;
}(_react.Component);

exports.default = PageList;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CreateStoreMap = exports.TestStore = exports.UserStore = undefined;

var _user = __webpack_require__(33);

var _user2 = _interopRequireDefault(_user);

var _test = __webpack_require__(34);

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.UserStore = _user2.default;
exports.TestStore = _test2.default;
var CreateStoreMap = exports.CreateStoreMap = function CreateStoreMap() {
  return {
    UserStore: new _user2.default(),
    TestStore: new _test2.default()
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _desc, _value, _class, _descriptor;

var _mobx = __webpack_require__(11);

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

var UserStore = (_class = function () {
    function UserStore(data) {
        _classCallCheck(this, UserStore);

        _initDefineProp(this, 'user', _descriptor, this);

        this.user = data || {};
    }

    UserStore.prototype.setUserInfo = function setUserInfo(userInfo) {
        this.user = userInfo || {};
    };

    UserStore.prototype.getUserInfo = function getUserInfo() {
        return this.user;
    };

    UserStore.prototype.clearUserInfo = function clearUserInfo() {
        this.user = {};
    };

    UserStore.prototype.toJson = function toJson() {
        return {
            user: (0, _mobx.toJS)(this.user)
        };
    };

    return UserStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'user', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return {};
    }
}), _applyDecoratedDescriptor(_class.prototype, 'setUserInfo', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setUserInfo'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getUserInfo', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getUserInfo'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'clearUserInfo', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'clearUserInfo'), _class.prototype)), _class);
exports.default = UserStore;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _desc, _value, _class, _descriptor;

var _mobx = __webpack_require__(11);

var _http = __webpack_require__(7);

var _http2 = _interopRequireDefault(_http);

var _index = __webpack_require__(10);

var _index2 = _interopRequireDefault(_index);

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

var TestStore = (_class = function () {
    function TestStore(data) {
        _classCallCheck(this, TestStore);

        _initDefineProp(this, 'datas', _descriptor, this);

        this.datas = data || {};
    }

    TestStore.prototype.getData = function getData() {
        var _this = this;

        return new Promise(function (resolve, reject) {
            _http2.default.post(_index2.default.getDomain() + '/contest/get_contest_list').then(function (response) {
                _this.datas = response.data;
                // console.log(response.status)
                // console.log(this.datas.status)
                // console.log(this.datas.info[0].thumb)
                resolve();
            });
        });
    };

    TestStore.prototype.toJson = function toJson() {
        return {
            datas: (0, _mobx.toJS)(this.datas)
        };
    };

    return TestStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'datas', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return {};
    }
}), _applyDecoratedDescriptor(_class.prototype, 'getData', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getData'), _class.prototype)), _class);
exports.default = TestStore;

/***/ })
/******/ ]);
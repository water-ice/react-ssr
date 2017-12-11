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

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var axios = __webpack_require__(3);
var Config = __webpack_require__(15);

var BaseUrl = Config.isApiDev ? Config.domain.dev : Config.domain.prod;
/**
 * @function 接口请求方法
 * @param url 请求连接
 * @param params 请求参数
 * @param method 请求方式
 */
var ajax = function ajax(url, method, params) {
    return new Promise(function (resolve, reject) {
        axios(url, {
            method: method,
            params: params,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            // console.log("当前Ajax发送请求返回状态码为:"+response.status)
            resolve(response);
        }).catch(reject);
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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("mobx");

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

var _store = __webpack_require__(29);

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

var _header = __webpack_require__(10);

var _header2 = _interopRequireDefault(_header);

var _router = __webpack_require__(13);

var _router2 = _interopRequireDefault(_router);

var _reactRouterDom = __webpack_require__(1);

var _reactRouter = __webpack_require__(26);

__webpack_require__(27);

__webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import PropTypes from 'prop-types'

// import ComponentFooter from './components/footer/footer'

// ,
// <RouterMap key="2"  key='router' />,
// <ComponentFooter key='footer'/>


var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component.call(this));
  }

  App.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_header2.default, null),
      _react2.default.createElement(_router2.default, null)
    );
  };

  return App;
}(_react2.default.Component);
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
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

__webpack_require__(11);

var _logo = __webpack_require__(12);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentHeader = function (_React$Component) {
  _inherits(ComponentHeader, _React$Component);

  function ComponentHeader(props) {
    _classCallCheck(this, ComponentHeader);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  ComponentHeader.prototype.render = function render() {
    return _react2.default.createElement(
      'header',
      { className: 'component-header' },
      _react2.default.createElement(
        'section',
        { className: 'main-container clearfix' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/', className: 'module-logo' },
          _react2.default.createElement('img', { src: _logo2.default })
        ),
        _react2.default.createElement(
          'div',
          { className: 'module-nav' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'nav-anchor', to: '/' },
            '\u9996\u9875'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'nav-anchor', to: '/battle' },
            '\u8D5B\u4E8B'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'nav-anchor', to: '/battle' },
            '\u73A9\u6CD5'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'nav-anchor', to: '/battle' },
            '\u89C2\u6218'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'nav-anchor', to: '/battle' },
            '\u6D3B\u52A8'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'nav-anchor', to: '/battle' },
            '\u6392\u884C'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'nav-anchor', to: '/battle' },
            '\u4E86\u89E3\u7CBE\u4E8E'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'nav-anchor', to: '/cooperation' },
            '\u5546\u52A1\u5408\u4F5C'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'nav-anchor', to: '/battle' },
            '\u6211\u6709\u9700\u6C42'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'module-account' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/account' },
            _react2.default.createElement(
              'i',
              { className: 'icon iconfont' },
              '\uE605'
            )
          )
        )
      )
    );
  };

  return ComponentHeader;
}(_react2.default.Component);

exports.default = ComponentHeader;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "/static/images/ca7f9e50.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(17);

var _index4 = _interopRequireDefault(_index3);

var _picture = __webpack_require__(18);

var _picture2 = _interopRequireDefault(_picture);

var _name = __webpack_require__(19);

var _name2 = _interopRequireDefault(_name);

var _login = __webpack_require__(20);

var _login2 = _interopRequireDefault(_login);

var _register = __webpack_require__(22);

var _register2 = _interopRequireDefault(_register);

var _index5 = __webpack_require__(24);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(25);

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return [_react2.default.createElement(_reactRouterDom.Route, { key: '1', path: '/', component: _index2.default, exact: true }), _react2.default.createElement(_reactRouterDom.Route, { key: '2', path: '/battle', component: _index4.default }), _react2.default.createElement(_reactRouterDom.Route, { key: '3', path: '/battle_name', component: _name2.default }), _react2.default.createElement(_reactRouterDom.Route, { key: '4', path: '/battle_picture', component: _picture2.default }), _react2.default.createElement(_reactRouterDom.Route, { key: '5', path: '/account/', render: function render() {
      return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/account/login' });
    }, exact: true }), _react2.default.createElement(_reactRouterDom.Route, { key: '6', path: '/account/login', component: _login2.default }), _react2.default.createElement(_reactRouterDom.Route, { key: '7', path: '/account/register', component: _register2.default }), _react2.default.createElement(_reactRouterDom.Route, { key: '8', path: '/cooperation', component: _index8.default }), _react2.default.createElement(_reactRouterDom.Route, { key: '9', path: '/test_api', component: _index6.default })];
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

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _mobxReact = __webpack_require__(2);

var _reactHelmet = __webpack_require__(4);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _http = __webpack_require__(5);

var _http2 = _interopRequireDefault(_http);

__webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageIndex = (_dec = (0, _mobxReact.inject)(function (stores) {
  return {
    contestListStore: stores.contestListStore
  };
}), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(PageIndex, _React$Component);

  function PageIndex(props) {
    _classCallCheck(this, PageIndex);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      designers: [],
      contests: [],
      enties: []
    };
    return _this;
  }

  PageIndex.prototype.asyncBootstrap = function asyncBootstrap() {};

  PageIndex.prototype.componentDidMount = function componentDidMount() {
    // this.props.contestsStore.getContestList()
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
          '\u9996\u9875111'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'component-banner' },
        '\u9996\u9875'
      )
    );
  };

  return PageIndex;
}(_react2.default.Component)) || _class) || _class);
exports.default = PageIndex;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  port: {
    client: 8088,
    develop: 3000,
    product: 3306
  },
  isDev: process.env.NODE_ENV === 'develop',
  isApiDev: process.env.API_ENV === 'develop',
  domain: {
    dev: "http://php.wangerniu.org",
    prod: "http://api.whalesdesign.com"
  }
};

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

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(4);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

__webpack_require__(6);

var _mobxReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageContest = (_dec = (0, _mobxReact.inject)("battleState"), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(PageContest, _React$Component);

  function PageContest(props) {
    _classCallCheck(this, PageContest);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  PageContest.prototype.asyncBootstrap = function asyncBootstrap() {
    return this.props.battleState.GetBattleList().then(function () {
      return true;
    }).catch(function () {
      return false;
    });
  };

  PageContest.prototype.DeleteBattle = function DeleteBattle() {
    this.props.battleState.DeleteBattleList();
  };

  PageContest.prototype.componentDidMount = function componentDidMount() {
    this.props.battleState.GetBattleList();
  };

  PageContest.prototype.render = function render() {
    return _react2.default.createElement(
      'main',
      { className: 'page-battle' },
      _react2.default.createElement(
        _reactHelmet2.default,
        null,
        _react2.default.createElement(
          'title',
          null,
          '\u6240\u6709\u8D5B\u4E8B'
        )
      ),
      _react2.default.createElement(
        'button',
        { onClick: this.DeleteBattle.bind(this) },
        '\u5220\u9664\u4E00\u4E2A'
      ),
      _react2.default.createElement(
        'ul',
        null,
        this.props.battleState.BattleList.map(function (item) {
          return _react2.default.createElement(
            'li',
            { key: item.id },
            _react2.default.createElement(
              'p',
              null,
              item.title
            )
          );
        })
      )
    );
  };

  return PageContest;
}(_react2.default.Component)) || _class) || _class);
exports.default = PageContest;

/***/ }),
/* 18 */
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

var PagePictureBattleDetail = function (_React$Component) {
    _inherits(PagePictureBattleDetail, _React$Component);

    function PagePictureBattleDetail() {
        _classCallCheck(this, PagePictureBattleDetail);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    PagePictureBattleDetail.prototype.render = function render() {
        return _react2.default.createElement(
            'div',
            null,
            '\u5F81\u56FE\u6BD4\u8D5B'
        );
    };

    return PagePictureBattleDetail;
}(_react2.default.Component);

exports.default = PagePictureBattleDetail;

/***/ }),
/* 19 */
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

var PageNameBattleDetail = function (_React$Component) {
    _inherits(PageNameBattleDetail, _React$Component);

    function PageNameBattleDetail() {
        _classCallCheck(this, PageNameBattleDetail);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    PageNameBattleDetail.prototype.render = function render() {
        return _react2.default.createElement(
            'div',
            null,
            '\u5F81\u540D\u6BD4\u8D5B'
        );
    };

    return PageNameBattleDetail;
}(_react2.default.Component);

exports.default = PageNameBattleDetail;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _index = __webpack_require__(21);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageLogin = function (_React$Component) {
  _inherits(PageLogin, _React$Component);

  function PageLogin() {
    _classCallCheck(this, PageLogin);

    return _possibleConstructorReturn(this, _React$Component.call(this));
  }

  PageLogin.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, null)
    );
  };

  return PageLogin;
}(_react2.default.Component);

exports.default = PageLogin;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageLogin = function (_React$Component) {
  _inherits(PageLogin, _React$Component);

  function PageLogin() {
    _classCallCheck(this, PageLogin);

    return _possibleConstructorReturn(this, _React$Component.call(this));
  }

  PageLogin.prototype.render = function render() {
    return _react2.default.createElement(
      'main',
      { style: { "background": "#6CA6CD", "height": "500px", "textAlign": "center" } },
      _react2.default.createElement(
        'nav',
        { style: { padding: "20px 0" } },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { style: { margin: "0 20px" }, to: '/account/register' },
          '\u6CE8\u518C'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { style: { margin: "0 20px" }, to: '/account/login' },
          '\u767B\u9646'
        )
      ),
      _react2.default.createElement('input', { type: 'text', placeholder: '\u624B\u673A' }),
      _react2.default.createElement('br', null),
      _react2.default.createElement('input', { type: 'password', placeholder: '\u5BC6\u7801' }),
      _react2.default.createElement('br', null),
      _react2.default.createElement('input', { type: 'button', value: '\u767B\u9646' })
    );
  };

  return PageLogin;
}(_react2.default.Component);

exports.default = PageLogin;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _register = __webpack_require__(23);

var _register2 = _interopRequireDefault(_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageRegister = function (_React$Component) {
  _inherits(PageRegister, _React$Component);

  function PageRegister(props) {
    _classCallCheck(this, PageRegister);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  PageRegister.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_register2.default, null)
    );
  };

  return PageRegister;
}(_react2.default.Component);

exports.default = PageRegister;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageRegister = function (_React$Component) {
  _inherits(PageRegister, _React$Component);

  function PageRegister(props) {
    _classCallCheck(this, PageRegister);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  PageRegister.prototype.render = function render() {
    return _react2.default.createElement(
      'main',
      { style: { "background": "#CD69C9", "height": "500px", "textAlign": "center" } },
      _react2.default.createElement(
        'nav',
        { style: { padding: "20px 0" } },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { style: { margin: "0 20px" }, to: '/account/register' },
          '\u6CE8\u518C'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { style: { margin: "0 20px" }, to: '/account/login' },
          '\u767B\u9646'
        )
      ),
      _react2.default.createElement('input', { type: 'text', placeholder: '\u624B\u673A' }),
      _react2.default.createElement('br', null),
      _react2.default.createElement('input', { type: 'text', placeholder: '\u59D3\u540D' }),
      _react2.default.createElement('br', null),
      _react2.default.createElement('input', { type: 'password', placeholder: '\u5BC6\u7801' }),
      _react2.default.createElement('br', null),
      _react2.default.createElement('input', { type: 'button', value: '\u6CE8\u518C1' })
    );
  };

  return PageRegister;
}(_react2.default.Component);

exports.default = PageRegister;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestApi = function (_React$Component) {
    _inherits(TestApi, _React$Component);

    function TestApi() {
        _classCallCheck(this, TestApi);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    TestApi.prototype.getTopics = function getTopics() {
        _axios2.default.get('/api/topics').then(function (resp) {
            console.log(resp);
        }).catch(function (err) {
            console.log(err);
        });
    };

    TestApi.prototype.login = function login() {
        _axios2.default.post('/api/user/login', {
            accessToken: '1c58a4af-0cc7-4197-b854-d8eb9f463d68'
        }).then(function (resp) {
            console.log(resp);
        }).catch(function (err) {
            console.log(err);
        });
    };

    TestApi.prototype.markAll = function markAll() {
        _axios2.default.post('/api/message/markAll?needAccessToken=true').then(function (resp) {
            console.log(resp);
        }).catch(function (err) {
            console.log(err);
        });
    };

    TestApi.prototype.render = function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'button',
                { onClick: this.getTopics },
                'topics'
            ),
            _react2.default.createElement(
                'button',
                { onClick: this.login },
                'login'
            ),
            _react2.default.createElement(
                'button',
                { onClick: this.markAll },
                'markAll'
            )
        );
    };

    return TestApi;
}(_react2.default.Component);

exports.default = TestApi;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(4);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

__webpack_require__(6);

var _mobxReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageCooperation = (_dec = (0, _mobxReact.inject)("cooperationState"), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(PageCooperation, _React$Component);

  function PageCooperation(props) {
    _classCallCheck(this, PageCooperation);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  PageCooperation.prototype.asyncBootstrap = function asyncBootstrap() {
    return this.props.cooperationState.GetCooperationList().then(function () {
      return true;
    }).catch(function () {
      return false;
    });
  };

  PageCooperation.prototype.componentDidMount = function componentDidMount() {
    this.props.cooperationState.GetCooperationList();
  };

  PageCooperation.prototype.render = function render() {
    return _react2.default.createElement(
      'main',
      { className: 'page-battle' },
      _react2.default.createElement(
        _reactHelmet2.default,
        null,
        _react2.default.createElement(
          'title',
          null,
          '\u5546\u52A1\u5408\u4F5C'
        )
      ),
      _react2.default.createElement(
        'h1',
        null,
        '\u8FD9\u91CC\u662F\u5546\u52A1\u5408\u4F5C\u9875\u9762'
      ),
      _react2.default.createElement(
        'ul',
        null,
        this.props.cooperationState.cooperationList.map(function (item) {
          return _react2.default.createElement(
            'li',
            { key: item.name },
            _react2.default.createElement(
              'p',
              null,
              item.name
            ),
            _react2.default.createElement(
              'p',
              null,
              item.desciption
            )
          );
        })
      )
    );
  };

  return PageCooperation;
}(_react2.default.Component)) || _class) || _class);
exports.default = PageCooperation;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CreateStoreMap = exports.CooperationState = exports.BattleState = undefined;

var _battle_list = __webpack_require__(30);

var _battle_list2 = _interopRequireDefault(_battle_list);

var _cooperation_list = __webpack_require__(31);

var _cooperation_list2 = _interopRequireDefault(_cooperation_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BattleState = _battle_list2.default;
exports.CooperationState = _cooperation_list2.default;
exports.default = {
  BattleState: _battle_list2.default,
  CooperationState: _cooperation_list2.default
};
var CreateStoreMap = exports.CreateStoreMap = function CreateStoreMap() {
  return {
    battleState: new _battle_list2.default(),
    cooperationState: new _cooperation_list2.default()
  };
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(7);

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

var BattleState = (_class = function () {
    function BattleState() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$BattleList = _ref.BattleList,
            BattleList = _ref$BattleList === undefined ? [] : _ref$BattleList,
            _ref$testInfo = _ref.testInfo,
            testInfo = _ref$testInfo === undefined ? "" : _ref$testInfo;

        _classCallCheck(this, BattleState);

        _initDefineProp(this, 'BattleList', _descriptor, this);

        _initDefineProp(this, 'testInfo', _descriptor2, this);

        this.BattleList = BattleList;
        this.testInfo = testInfo;
    }

    BattleState.prototype.GetBattleList = function GetBattleList() {
        var _this = this;

        return new Promise(function (resolve, reject) {
            _http2.default.get('/api/contest/get_contest_list').then(function (response) {
                // console.log(response.data)
                if (response.status == 200 && response.data.status == 1) {
                    _this.BattleList = response.data.info;
                } else {
                    _this.BattleList = [{
                        "error": "接口获取错误"
                    }];
                }
                resolve();
            }).catch(function (err) {
                console.log(err);
                reject();
            });
        });
    };

    BattleState.prototype.DeleteBattleList = function DeleteBattleList() {
        this.BattleList.splice(1, 1);
    };

    BattleState.prototype.toJson = function toJson() {
        return {
            BattleList: this.BattleList,
            testInfo: this.testInfo
        };
    };

    return BattleState;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'BattleList', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'testInfo', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _applyDecoratedDescriptor(_class.prototype, 'GetBattleList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'GetBattleList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'DeleteBattleList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'DeleteBattleList'), _class.prototype)), _class);
exports.default = BattleState;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _desc, _value, _class, _descriptor;

var _mobx = __webpack_require__(7);

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

var CooperationState = (_class = function () {
    function CooperationState() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$cooperationList = _ref.cooperationList,
            cooperationList = _ref$cooperationList === undefined ? [] : _ref$cooperationList;

        _classCallCheck(this, CooperationState);

        _initDefineProp(this, 'cooperationList', _descriptor, this);

        this.cooperationList = cooperationList;
    }

    CooperationState.prototype.GetCooperationList = function GetCooperationList() {
        var _this = this;

        return new Promise(function (resolve, reject) {
            _http2.default.get('/api/user/get_user_list').then(function (response) {
                if (response.status == 200) {
                    _this.cooperationList = response.data.info;
                }
                resolve();
            }).catch(function (err) {
                console.log("老师列表信息报错：" + err);
                reject();
            });
        });
    };

    CooperationState.prototype.toJson = function toJson() {
        return {
            cooperationList: this.cooperationList
        };
    };

    return CooperationState;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'cooperationList', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _applyDecoratedDescriptor(_class.prototype, 'GetCooperationList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'GetCooperationList'), _class.prototype)), _class);
exports.default = CooperationState;

/***/ })
/******/ ]);
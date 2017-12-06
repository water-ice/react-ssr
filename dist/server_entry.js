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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

module.exports = require("axios");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CreateStoreMap = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(6);

var _App2 = _interopRequireDefault(_App);

var _reactRouterDom = __webpack_require__(1);

var _mobxReact = __webpack_require__(3);

var _store = __webpack_require__(23);

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
var _default = render;
exports.default = _default;
exports.CreateStoreMap = _store.CreateStoreMap;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(render, 'render', 'D:/github/react-ssr2/client/entry_server.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'D:/github/react-ssr2/client/entry_server.js');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(7);

var _header2 = _interopRequireDefault(_header);

var _router = __webpack_require__(10);

var _router2 = _interopRequireDefault(_router);

var _reactRouterDom = __webpack_require__(1);

var _reactRouter = __webpack_require__(21);

__webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import PropTypes from 'prop-types'

// import ComponentFooter from './components/footer/footer'


// import './static/fonts/iconfont.css'
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', 'D:/github/react-ssr2/client/App.jsx');
}();

;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

__webpack_require__(8);

var _logo = __webpack_require__(9);

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
        { className: 'main-container' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/', className: 'logo-link' },
          _react2.default.createElement('img', { src: _logo2.default })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            '\u9996\u9875'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/battle' },
            '\u5168\u90E8\u8D5B\u4E8B'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/battle_name' },
            '\u5F81\u540D\u6BD4\u8D5B'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/battle_picture' },
            '\u5F81\u56FE\u6BD4\u8D5B'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/account' },
            '\u8D26\u53F7'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/account/login' },
            '\u767B\u9646'
          )
        )
      )
    );
  };

  return ComponentHeader;
}(_react2.default.Component);

exports.default = ComponentHeader;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ComponentHeader, 'ComponentHeader', 'D:/github/react-ssr2/client/components/header/header.jsx');
}();

;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAzCAMAAAAwwWM7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowODUwNWE4Ni03YzAwLTZlNGItOWM4Ny0xYjFiODExMmJmNGYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUZDNzgwNDVCNDhFMTFFNzgxMUNFRTU4RUU3NTg0MjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUZDNzgwNDRCNDhFMTFFNzgxMUNFRTU4RUU3NTg0MjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YTRmNmY1NTAtYjkyNi0wZjQ5LWFiNjAtZDBiNmMwMWNhODUxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MjE5ODBhOGQtN2U2ZS0xMWU3LThjNTQtOTAyNmI4OTg0YmFlIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+BgRDHgAAAYBQTFRFOZj08/j+R5noKYLXy+T8nsftzuP2EYPzJ4jmirzrr9DxCnnki8P55PD8Vqj5wtz0Oo3cvtr0FoLrA23SG3rUXqLh7fX90uX3BnLbPJPnQ5314e36ZbD5qMzvbqvkhL73DHzposvyFX7kfLLmJYzyu9v7tNPy+fz+KJD4kcP0c63lqdH50Ob8YKv18Pf9TKDyDnPSNYnZ3+z5DX7r/P3/NIzghbrsfrr1VJ3jWqTrncz7RJLd2en5VJvfwN77FXrdxuD6Y6TiFXfTl8LsIH3VHYjzCHXe6/T9CXfhGn3dncr2drLruNbz1en9S5bd6PP99/r+6fL7dbb13u79frz5grfqHYz4E4b2FIj5Dn/tb67sZqvtj77q3Ov4mMbzttj6VKPxdrj5GYbx2+z9e7Tspc/5l8n7T5jecbb6L4XZBW/VlMf4X6ftaKfj2Ov8f7TnrtT5DnjeDHrnP4/b1uf4EIHx7PT7d7DmyN/2AmzQL5Hwj8DxEXbXHYDfAGrP////MqobYAAAAIB0Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wA4BUtnAAAI8UlEQVR42uyZ+1fayhbHAwgiiIASeeMLDSoGlCBYfBPRVopQH6CN1trb2lAVC1IBlfnXz0wmICDBs9Zderzrnv2Dk4yZ8GHP3t/ZMxDgf8aIf1HfFOrgnfW3xbJi3daju+QIqcgOZGf37W8P9WTlYVujUmn2gxZDCShXVtZGSiojV8i6ZK+Jmtz1Lq96r3SM5DDm4ncPJV6r5JbIfU9SvCvxipvXQZV92fN5isgODw+LFV/oy2C7YUexhdLjFxkxPE57csK/fvzyqMnpvrNuaBuE79TnI9yQNhAI2H7pWkdRH7blv1cWjE9eVwr718l91Uuj7uwdpNPdxND4Zn2ar66HbIh2YfXpSCp+EQs2w+rCA6SeefG0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"

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

var _index3 = __webpack_require__(13);

var _index4 = _interopRequireDefault(_index3);

var _picture = __webpack_require__(15);

var _picture2 = _interopRequireDefault(_picture);

var _name = __webpack_require__(16);

var _name2 = _interopRequireDefault(_name);

var _login = __webpack_require__(17);

var _login2 = _interopRequireDefault(_login);

var _register = __webpack_require__(18);

var _register2 = _interopRequireDefault(_register);

var _index5 = __webpack_require__(20);

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return [_react2.default.createElement(_reactRouterDom.Route, { key: '1', path: '/', component: _index2.default, exact: true }), _react2.default.createElement(_reactRouterDom.Route, { key: '2', path: '/battle', component: _index4.default }), _react2.default.createElement(_reactRouterDom.Route, { key: '3', path: '/battle_name', component: _name2.default }), _react2.default.createElement(_reactRouterDom.Route, { key: '4', path: '/battle_picture', component: _picture2.default }), _react2.default.createElement(_reactRouterDom.Route, { key: '5', path: '/account/', render: function render() {
      return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/account/login' });
    }, exact: true }), _react2.default.createElement(_reactRouterDom.Route, { key: '6', path: '/account/login', component: _login2.default }), _react2.default.createElement(_reactRouterDom.Route, { key: '7', path: '/account/register', component: _register2.default }), _react2.default.createElement(_reactRouterDom.Route, { key: '8', path: '/test_api', component: _index6.default })];
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/github/react-ssr2/client/config/router.jsx');
}();

;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _mobxReact = __webpack_require__(3);

var _reactHelmet = __webpack_require__(4);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

__webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageIndex = (_dec = (0, _mobxReact.inject)('demoState'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(PageIndex, _React$Component);

  function PageIndex() {
    _classCallCheck(this, PageIndex);

    return _possibleConstructorReturn(this, _React$Component.call(this));
  }

  PageIndex.prototype.changeName = function changeName(ev) {
    // console.log(this.props)
    this.props.demoState.changeName(ev.target.value);
  };

  PageIndex.prototype.asyncBootstrap = function asyncBootstrap() {
    var _this2 = this;

    return new Promise(function (resolve) {
      setTimeout(function () {
        _this2.props.demoState.count = 3;
        // 必须是true
        resolve(true);
      }, 1000);
    });
  };

  PageIndex.prototype.componentWillMount = function componentWillMount() {};

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
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', { type: 'text', onChange: this.changeName.bind(this) }),
        _react2.default.createElement(
          'span',
          null,
          this.props.demoState.msg
        )
      ),
      _react2.default.createElement(
        'h1',
        null,
        '\u9996\u9875'
      )
    );
  };

  return PageIndex;
}(_react2.default.Component)) || _class) || _class);
exports.default = PageIndex;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PageIndex, 'PageIndex', 'D:/github/react-ssr2/client/pages/index/index.jsx');
}();

;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(4);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

__webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageContest = function (_React$Component) {
  _inherits(PageContest, _React$Component);

  function PageContest(props) {
    _classCallCheck(this, PageContest);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

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
        'h1',
        null,
        '\u8FD9\u91CC\u662F\u8D5B\u4E8B\u9875\u976223321'
      )
    );
  };

  return PageContest;
}(_react2.default.Component);

exports.default = PageContest;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PageContest, 'PageContest', 'D:/github/react-ssr2/client/pages/battle/index.jsx');
}();

;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
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
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(PagePictureBattleDetail, 'PagePictureBattleDetail', 'D:/github/react-ssr2/client/pages/battle_detail/picture.jsx');
}();

;

/***/ }),
/* 16 */
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
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(PageNameBattleDetail, 'PageNameBattleDetail', 'D:/github/react-ssr2/client/pages/battle_detail/name.jsx');
}();

;

/***/ }),
/* 17 */
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

var PageLogin = function (_React$Component) {
  _inherits(PageLogin, _React$Component);

  function PageLogin() {
    _classCallCheck(this, PageLogin);

    return _possibleConstructorReturn(this, _React$Component.call(this));
  }

  PageLogin.prototype.render = function render() {
    return _react2.default.createElement(
      "main",
      { style: { "background": "#6CA6CD", "height": "500px", "textAlign": "center" } },
      _react2.default.createElement("input", { type: "text", placeholder: "\u624B\u673A" }),
      _react2.default.createElement("br", null),
      _react2.default.createElement("input", { type: "password", placeholder: "\u5BC6\u7801" }),
      _react2.default.createElement("br", null),
      _react2.default.createElement("input", { type: "button", value: "\u767B\u9646" })
    );
  };

  return PageLogin;
}(_react2.default.Component);

exports.default = PageLogin;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PageLogin, "PageLogin", "D:/github/react-ssr2/client/pages/account/login.jsx");
}();

;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageRegister = function (_React$Component) {
  _inherits(PageRegister, _React$Component);

  function PageRegister(props) {
    _classCallCheck(this, PageRegister);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      mobile: "",
      name: "",
      password: ""
    };
    return _this;
  }

  PageRegister.prototype.BindMobile = function BindMobile(event) {
    this.setState({
      mobile: event.target.value
    });
  };

  PageRegister.prototype.BindName = function BindName(event) {
    this.setState({
      name: event.target.value
    });
  };

  PageRegister.prototype.BindPassword = function BindPassword(event) {
    this.setState({
      password: event.target.value
    });
  };

  PageRegister.prototype.componentWillMount = function componentWillMount() {};

  PageRegister.prototype.Register = function Register() {
    var UserState = {
      name: this.state.name,
      mobile: this.state.mobile
    };
    console.log(UserState);
    this.props.dispatch({
      type: 'SaveUserInfo',
      state: UserState
    });
  };

  PageRegister.prototype.render = function render() {
    return _react2.default.createElement(
      'main',
      { style: { "background": "#CD69C9", "height": "500px", "textAlign": "center" } },
      _react2.default.createElement('input', { onChange: this.BindMobile.bind(this), type: 'text', placeholder: '\u624B\u673A' }),
      _react2.default.createElement('br', null),
      _react2.default.createElement('input', { onChange: this.BindName.bind(this), type: 'text', placeholder: '\u59D3\u540D' }),
      _react2.default.createElement('br', null),
      _react2.default.createElement('input', { onChange: this.BindPassword.bind(this), type: 'password', placeholder: '\u5BC6\u7801' }),
      _react2.default.createElement('br', null),
      _react2.default.createElement('input', { onClick: this.Register.bind(this), type: 'button', value: '\u6CE8\u518C' })
    );
  };

  return PageRegister;
}(_react2.default.Component);

var getUserInfoFromRedux = function getUserInfoFromRedux(state) {
  return {
    user: state.USER_STATE
  };
};

var _default = (0, _reactRedux.connect)(getUserInfoFromRedux)(PageRegister);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PageRegister, 'PageRegister', 'D:/github/react-ssr2/client/pages/account/register.jsx');

  __REACT_HOT_LOADER__.register(getUserInfoFromRedux, 'getUserInfoFromRedux', 'D:/github/react-ssr2/client/pages/account/register.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/github/react-ssr2/client/pages/account/register.jsx');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(2);

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
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(TestApi, 'TestApi', 'D:/github/react-ssr2/client/pages/test_api/index.jsx');
}();

;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CreateStoreMap = exports.demoState = undefined;

var _demo_state = __webpack_require__(24);

var _demo_state2 = _interopRequireDefault(_demo_state);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demoState = exports.demoState = _demo_state2.default;

var _default = {
  demoState: demoState
};
exports.default = _default;
var CreateStoreMap = exports.CreateStoreMap = function CreateStoreMap() {
  return {
    demoState: new demoState()
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(demoState, 'demoState', 'D:/github/react-ssr2/client/store/store.js');

  __REACT_HOT_LOADER__.register(CreateStoreMap, 'CreateStoreMap', 'D:/github/react-ssr2/client/store/store.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/github/react-ssr2/client/store/store.js');
}();

;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(25);

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

var DemoState = (_class = function () {
    function DemoState() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { count: 0, name: "test name" },
            count = _ref.count,
            name = _ref.name;

        _classCallCheck(this, DemoState);

        _initDefineProp(this, "count", _descriptor, this);

        _initDefineProp(this, "name", _descriptor2, this);

        this.count = count;
        this.name = name;
    }
    // 初始化数据


    DemoState.prototype.addCount = function addCount() {
        this.count += 1;
    };

    DemoState.prototype.changeName = function changeName(name) {
        this.name = name;
    };
    // 为服务器端渲染准备


    DemoState.prototype.toJson = function toJson() {
        return {
            count: this.count,
            name: this.name
        };
    };

    _createClass(DemoState, [{
        key: "msg",

        // 获取
        get: function get() {
            return this.name + " say count is " + this.count;
        }
        // 修改

    }]);

    return DemoState;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "count", [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "name", [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "msg", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "msg"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addCount", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "addCount"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeName", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeName"), _class.prototype)), _class);

// const state = new AppState();

// // 数据变化后的钩子函数
// autorun(()=>{
//     console.log(state.msg)
// },1000)

// setInterval(()=>{
//     state.count += 1;
// },1000)

// export default state;

exports.default = DemoState;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(DemoState, "DemoState", "D:/github/react-ssr2/client/store/demo_state.js");
}();

;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ })
/******/ ]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var axios = __webpack_require__(3);
var Config = __webpack_require__(14);

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
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CreateStoreMap = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(7);

var _App2 = _interopRequireDefault(_App);

var _reactRouterDom = __webpack_require__(1);

var _mobxReact = __webpack_require__(4);

var _store = __webpack_require__(19);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(8);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(10);

var _footer2 = _interopRequireDefault(_footer);

var _router = __webpack_require__(11);

var _router2 = _interopRequireDefault(_router);

var _reactRouterDom = __webpack_require__(1);

var _reactRouter = __webpack_require__(16);

__webpack_require__(17);

__webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import PropTypes from 'prop-types'


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
      _react2.default.createElement(_router2.default, null),
      _react2.default.createElement(_footer2.default, { key: 'footer' })
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

__webpack_require__(9);

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
        'div',
        { className: 'header-container' },
        _react2.default.createElement(
          'div',
          { className: 'left ' },
          _react2.default.createElement(
            'a',
            { className: 'inline-block pl10 pr10 br-3a', href: 'http://app.toutiao.com/news_article/', target: 'blank' },
            '\u4E0B\u8F7DAPP'
          ),
          _react2.default.createElement(
            'span',
            { className: 'pl10' },
            '\xA0\u5317\u4EAC'
          ),
          _react2.default.createElement(
            'span',
            { className: 'pl13 pr14' },
            '\u6674'
          ),
          _react2.default.createElement(
            'span',
            { className: 'mr2' },
            '-8'
          ),
          '\xB0',
          _react2.default.createElement(
            'span',
            null,
            '\xA0\xA0/\xA0\xA0'
          ),
          _react2.default.createElement(
            'span',
            { className: 'mr2' },
            '0'
          ),
          '\xB0',
          _react2.default.createElement(
            'i',
            { className: 'icon iconfont fs13 bold' },
            '\uE6A6'
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'right' },
          _react2.default.createElement(
            'li',
            { className: 'left ph10 pr14 br-3a' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' },
              _react2.default.createElement(
                'div',
                { className: 'login-btn' },
                '\u767B\u5F55'
              )
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'left ph10 br-3a' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' },
              _react2.default.createElement(
                'span',
                null,
                '\u53CD\u9988'
              )
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'left ph10 br-3a' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' },
              _react2.default.createElement(
                'span',
                null,
                '\u6295\u8BC9\u4FB5\u6743'
              )
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'left ph10' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' },
              _react2.default.createElement(
                'span',
                null,
                '\u5934\u6761\u4EA7\u54C1'
              )
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
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
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

var GlobalFooter = function (_React$Component) {
  _inherits(GlobalFooter, _React$Component);

  function GlobalFooter() {
    _classCallCheck(this, GlobalFooter);

    return _possibleConstructorReturn(this, _React$Component.call(this));
  }

  GlobalFooter.prototype.render = function render() {
    return _react2.default.createElement(
      "footer",
      { style: { "background": "#836FFF", "height": "200px" } },
      _react2.default.createElement(
        "h1",
        { style: { "textAlign": "center" } },
        "Global Footer Component"
      )
    );
  };

  return GlobalFooter;
}(_react2.default.Component);

exports.default = GlobalFooter;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _index = __webpack_require__(12);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return [_react2.default.createElement(_reactRouterDom.Route, { key: '1', path: '/', component: _index2.default, exact: true })];
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _mobxReact = __webpack_require__(4);

var _reactHelmet = __webpack_require__(13);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _http = __webpack_require__(2);

var _http2 = _interopRequireDefault(_http);

__webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageIndex = function (_React$Component) {
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
          '\u4ECA\u65E5\u5934\u6761'
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
}(_react2.default.Component);

exports.default = PageIndex;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CreateStoreMap = exports.CooperationState = exports.BattleState = undefined;

var _battle_list = __webpack_require__(20);

var _battle_list2 = _interopRequireDefault(_battle_list);

var _cooperation_list = __webpack_require__(21);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(5);

var _http = __webpack_require__(2);

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _desc, _value, _class, _descriptor;

var _mobx = __webpack_require__(5);

var _http = __webpack_require__(2);

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
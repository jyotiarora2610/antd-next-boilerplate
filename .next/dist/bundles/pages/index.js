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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CharacterInfo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
var _jsxFileName = '/Users/sachinkumar/Documents/Projects/my-app/components/CharacterInfo.js';




var CharacterInfo = function CharacterInfo(_ref) {
  var character = _ref.character,
      error = _ref.error,
      fetchCharacter = _ref.fetchCharacter,
      _ref$isFetchedOnServe = _ref.isFetchedOnServer,
      isFetchedOnServer = _ref$isFetchedOnServe === undefined ? false : _ref$isFetchedOnServe;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-3002092771' + ' ' + 'CharacterInfo',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    error ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      {
        className: 'jsx-3002092771',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      'We encountered and error.'
    ) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'article',
      {
        className: 'jsx-3002092771',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'h3',
        {
          className: 'jsx-3002092771',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        'Character: ',
        character.name
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'p',
        {
          className: 'jsx-3002092771',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        'birth year: ',
        character.birth_year
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'p',
        {
          className: 'jsx-3002092771',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        'gender: ',
        character.gender
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'p',
        {
          className: 'jsx-3002092771',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        'skin color: ',
        character.skin_color
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'p',
        {
          className: 'jsx-3002092771',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        'eye color: ',
        character.eye_color
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      {
        className: 'jsx-3002092771',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
      '( was character fetched on server? -',
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'b',
        {
          className: 'jsx-3002092771',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        isFetchedOnServer.toString(),
        ')'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '3002092771',
      css: 'article.jsx-3002092771{background-color:#528CE0;border-radius:15px;padding:15px;width:250px;margin:15px 0;color:white;}button.jsx-3002092771{margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhcmFjdGVySW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmdCLEFBR2tDLEFBUVAsa0JBQ3BCLE9BUnFCLG1CQUNOLGFBQ0QsWUFDRSxjQUNGLFlBQ2QiLCJmaWxlIjoiY29tcG9uZW50cy9DaGFyYWN0ZXJJbmZvLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYWNoaW5rdW1hci9Eb2N1bWVudHMvUHJvamVjdHMvbXktYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jb25zdCBDaGFyYWN0ZXJJbmZvID0gKHtjaGFyYWN0ZXIsIGVycm9yLCBmZXRjaENoYXJhY3RlciwgaXNGZXRjaGVkT25TZXJ2ZXIgPSBmYWxzZX0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9J0NoYXJhY3RlckluZm8nPlxuICAgIHtcbiAgICAgIGVycm9yID8gPHA+V2UgZW5jb3VudGVyZWQgYW5kIGVycm9yLjwvcD5cbiAgICAgICAgOiA8YXJ0aWNsZT5cbiAgICAgICAgICA8aDM+Q2hhcmFjdGVyOiB7Y2hhcmFjdGVyLm5hbWV9PC9oMz5cbiAgICAgICAgICA8cD5iaXJ0aCB5ZWFyOiB7Y2hhcmFjdGVyLmJpcnRoX3llYXJ9PC9wPlxuICAgICAgICAgIDxwPmdlbmRlcjoge2NoYXJhY3Rlci5nZW5kZXJ9PC9wPlxuICAgICAgICAgIDxwPnNraW4gY29sb3I6IHtjaGFyYWN0ZXIuc2tpbl9jb2xvcn08L3A+XG4gICAgICAgICAgPHA+ZXllIGNvbG9yOiB7Y2hhcmFjdGVyLmV5ZV9jb2xvcn08L3A+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICB9XG4gICAgPHA+XG4gICAgICAoIHdhcyBjaGFyYWN0ZXIgZmV0Y2hlZCBvbiBzZXJ2ZXI/IC1cbiAgICAgIDxiPntpc0ZldGNoZWRPblNlcnZlci50b1N0cmluZygpfSk8L2I+XG4gICAgPC9wPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGFydGljbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI4Q0UwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICBjaGFyYWN0ZXI6IHN0YXRlLmNoYXJhY3RlcixcbiAgICBlcnJvcjogc3RhdGUuZXJyb3IsXG4gICAgaXNGZXRjaGVkT25TZXJ2ZXI6IHN0YXRlLmlzRmV0Y2hlZE9uU2VydmVyXG4gIH0pXG4pKENoYXJhY3RlckluZm8pXG4iXX0= */\n/*@ sourceURL=components/CharacterInfo.js */'
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
  return {
    character: state.character,
    error: state.error,
    isFetchedOnServer: state.isFetchedOnServer
  };
})(CharacterInfo));

/***/ }),

/***/ "./index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = '/Users/sachinkumar/Documents/Projects/my-app/index.js';



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-3261881544',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 4
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-3261881544',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { charSet: 'utf-8', className: 'jsx-3261881544',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: '/_next/static/style.css', className: 'jsx-3261881544',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '3261881544',
      css: '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVF1QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FjaGlua3VtYXIvRG9jdW1lbnRzL1Byb2plY3RzL215LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+XG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nL19uZXh0L3N0YXRpYy9zdHlsZS5jc3MnIC8+XG4gICAgPC9IZWFkPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBib2R5IHtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAge2NoaWxkcmVufVxuICA8L2Rpdj5cbiJdfQ== */\n/*@ sourceURL=index.js */'
    }),
    children
  );
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button_style_css__ = __webpack_require__("antd/lib/button/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_button__ = __webpack_require__("antd/lib/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_date_picker_style_css__ = __webpack_require__("antd/lib/date-picker/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_date_picker_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_date_picker_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_date_picker__ = __webpack_require__("antd/lib/date-picker");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_date_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_date_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_slider_style_css__ = __webpack_require__("antd/lib/slider/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_slider_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_slider_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_slider__ = __webpack_require__("antd/lib/slider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_antd_lib_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_switch_style_css__ = __webpack_require__("antd/lib/switch/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_switch_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_antd_lib_switch_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_switch__ = __webpack_require__("antd/lib/switch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_antd_lib_switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_input_number_style_css__ = __webpack_require__("antd/lib/input-number/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_input_number_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_antd_lib_input_number_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_antd_lib_input_number__ = __webpack_require__("antd/lib/input-number");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_antd_lib_input_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_antd_lib_input_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_antd_lib_select_style_css__ = __webpack_require__("antd/lib/select/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_antd_lib_select_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_antd_lib_select_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_antd_lib_select__ = __webpack_require__("antd/lib/select");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_antd_lib_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_antd_lib_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_antd_lib_form_style_css__ = __webpack_require__("antd/lib/form/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_antd_lib_form_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_antd_lib_form_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_antd_lib_form__ = __webpack_require__("antd/lib/form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__index_js__ = __webpack_require__("./index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_CharacterInfo__ = __webpack_require__("./components/CharacterInfo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__redux__ = __webpack_require__("./redux/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__redux_epics__ = __webpack_require__("./redux/epics.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__redux_actions__ = __webpack_require__("./redux/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_rxjs_observable_of__ = __webpack_require__("rxjs/observable/of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_rxjs_observable_of__);















var _jsxFileName = '/Users/sachinkumar/Documents/Projects/my-app/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var FormItem = __WEBPACK_IMPORTED_MODULE_14_antd_lib_form___default.a.Item;
var Option = __WEBPACK_IMPORTED_MODULE_12_antd_lib_select___default.a.Option;

var TestPage = function (_React$Component) {
  _inherits(TestPage, _React$Component);

  function TestPage() {
    _classCallCheck(this, TestPage);

    return _possibleConstructorReturn(this, (TestPage.__proto__ || Object.getPrototypeOf(TestPage)).apply(this, arguments));
  }

  _createClass(TestPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.startFetchingCharacters();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.stopFetchingCharacters();
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_16__index_js__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        },
        __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
          'div',
          { style: { marginTop: 100 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          },
          __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__components_CharacterInfo__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }),
          __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_14_antd_lib_form___default.a,
            { layout: 'horizontal', __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            },
            __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
              FormItem,
              {
                label: 'Input Number',
                labelCol: { span: 8 },
                wrapperCol: { span: 8 },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                }
              },
              __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_antd_lib_input_number___default.a, { size: 'large', min: 1, max: 10, style: { width: 100 }, defaultValue: 3, name: 'inputNumber', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                }
              }),
              __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
                'a',
                { href: '#', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                  }
                },
                'Link'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
              FormItem,
              {
                label: 'Switch',
                labelCol: { span: 8 },
                wrapperCol: { span: 8 },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                }
              },
              __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_antd_lib_switch___default.a, { defaultChecked: true, name: 'switch', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
              FormItem,
              {
                label: 'Slider',
                labelCol: { span: 8 },
                wrapperCol: { span: 8 },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                }
              },
              __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_antd_lib_slider___default.a, { defaultValue: 70, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
              FormItem,
              {
                label: 'Select',
                labelCol: { span: 8 },
                wrapperCol: { span: 8 },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                }
              },
              __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_12_antd_lib_select___default.a,
                { size: 'large', defaultValue: 'lucy', style: { width: 192 }, name: 'select', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  }
                },
                __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
                  Option,
                  { value: 'jack', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 70
                    }
                  },
                  'jack'
                ),
                __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
                  Option,
                  { value: 'lucy', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 71
                    }
                  },
                  'lucy'
                ),
                __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
                  Option,
                  { value: 'disabled', disabled: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 72
                    }
                  },
                  'disabled'
                ),
                __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
                  Option,
                  { value: 'yiminghe', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 73
                    }
                  },
                  'yiminghe'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
              FormItem,
              {
                label: 'DatePicker',
                labelCol: { span: 8 },
                wrapperCol: { span: 8 },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 77
                }
              },
              __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_date_picker___default.a, { name: 'startDate', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 82
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
              FormItem,
              {
                style: { marginTop: 48 },
                wrapperCol: { span: 8, offset: 8 },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                }
              },
              __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd_lib_button___default.a,
                { size: 'large', type: 'primary', htmlType: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                  }
                },
                'OK'
              ),
              __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd_lib_button___default.a,
                { size: 'large', style: { marginLeft: 8 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                },
                'Cancel'
              )
            )
          )
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var store = _ref.store,
            isServer = _ref.isServer;
        var resultAction;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_20__redux_epics__["a" /* rootEpic */])(Object(__WEBPACK_IMPORTED_MODULE_22_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_21__redux_actions__["a" /* fetchCharacter */](isServer)), store).toPromise();

              case 2:
                resultAction = _context.sent;
                // we need to convert Observable to Promise
                store.dispatch(resultAction);

                return _context.abrupt('return', { isServer: isServer });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return TestPage;
}(__WEBPACK_IMPORTED_MODULE_15_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_18_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_19__redux__["a" /* default */], null, {
  startFetchingCharacters: __WEBPACK_IMPORTED_MODULE_21__redux_actions__["d" /* startFetchingCharacters */],
  stopFetchingCharacters: __WEBPACK_IMPORTED_MODULE_21__redux_actions__["e" /* stopFetchingCharacters */]
})(TestPage));

/***/ }),

/***/ "./redux/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_CHARACTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_CHARACTER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return START_FETCHING_CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return STOP_FETCHING_CHARACTERS; });
var FETCH_CHARACTER = 'FETCH_CHARACTER';
var FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
var FETCH_CHARACTER_FAILURE = 'FETCH_CHARACTER_FAILURE';
var START_FETCHING_CHARACTERS = 'START_FETCHING_CHARACTERS';
var STOP_FETCHING_CHARACTERS = 'STOP_FETCHING_CHARACTERS';

/***/ }),

/***/ "./redux/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return startFetchingCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return stopFetchingCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchCharacterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchCharacterFailure; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__("./redux/actionTypes.js");


var startFetchingCharacters = function startFetchingCharacters() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["d" /* START_FETCHING_CHARACTERS */]
  };
};
var stopFetchingCharacters = function stopFetchingCharacters() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["e" /* STOP_FETCHING_CHARACTERS */]
  };
};
var fetchCharacter = function fetchCharacter(isServer) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["a" /* FETCH_CHARACTER */],
    payload: { isServer: isServer }
  };
};
var fetchCharacterSuccess = function fetchCharacterSuccess(response, isServer) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["c" /* FETCH_CHARACTER_SUCCESS */],
    payload: { response: response, isServer: isServer }
  };
};

var fetchCharacterFailure = function fetchCharacterFailure(error, isServer) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["b" /* FETCH_CHARACTER_FAILURE */],
    payload: { error: error, isServer: isServer }
  };
};

/***/ }),

/***/ "./redux/epics.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fetchUserEpic */
/* unused harmony export fetchCharacterEpic */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootEpic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_interval__ = __webpack_require__("rxjs/observable/interval");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("rxjs/observable/of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("rxjs/operators");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_observable__ = __webpack_require__("redux-observable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_universal_rx_request__ = __webpack_require__("universal-rx-request");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_universal_rx_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_universal_rx_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__("./redux/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actionTypes__ = __webpack_require__("./redux/actionTypes.js");




 // because standard AjaxObservable only works in browser




var fetchUserEpic = function fetchUserEpic(action$, store) {
  return action$.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_redux_observable__["ofType"])(__WEBPACK_IMPORTED_MODULE_6__actionTypes__["d" /* START_FETCHING_CHARACTERS */]), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["mergeMap"])(function (action) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_interval__["interval"])(3000).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["mergeMap"])(function (x) {
      return __WEBPACK_IMPORTED_MODULE_5__actions__["a" /* fetchCharacter */]({
        isServer: store.getState().isServer
      });
    }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["takeUntil"])(action$.ofType(__WEBPACK_IMPORTED_MODULE_6__actionTypes__["e" /* STOP_FETCHING_CHARACTERS */])));
  }));
};

var fetchCharacterEpic = function fetchCharacterEpic(action$, store) {
  return action$.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_redux_observable__["ofType"])(__WEBPACK_IMPORTED_MODULE_6__actionTypes__["a" /* FETCH_CHARACTER */]), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["mergeMap"])(function (action) {
    return __WEBPACK_IMPORTED_MODULE_4_universal_rx_request___default()({
      url: 'https://swapi.co/api/people/' + store.getState().nextCharacterId
    }).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (response) {
      return __WEBPACK_IMPORTED_MODULE_5__actions__["c" /* fetchCharacterSuccess */](response.body, store.getState().isServer);
    }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (error) {
      return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_5__actions__["b" /* fetchCharacterFailure */](error.response.body, store.getState().isServer));
    }));
  }));
};

var rootEpic = Object(__WEBPACK_IMPORTED_MODULE_3_redux_observable__["combineEpics"])(fetchUserEpic, fetchCharacterEpic);

/***/ }),

/***/ "./redux/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_logger__ = __webpack_require__("redux-logger");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_observable__ = __webpack_require__("redux-observable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducer__ = __webpack_require__("./redux/reducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__epics__ = __webpack_require__("./redux/epics.js");







function initStore(initialState) {
  var epicMiddleware = Object(__WEBPACK_IMPORTED_MODULE_3_redux_observable__["createEpicMiddleware"])(__WEBPACK_IMPORTED_MODULE_5__epics__["a" /* rootEpic */]);
  var logger = Object(__WEBPACK_IMPORTED_MODULE_2_redux_logger__["createLogger"])({ collapsed: true }); // log every action to see what's happening behind the scenes.
  var reduxMiddleware = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a, epicMiddleware, logger);

  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */], initialState, reduxMiddleware);
};

/***/ }),

/***/ "./redux/reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__("./redux/actionTypes.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var INITIAL_STATE = {
  nextCharacterId: 1,
  character: {},
  isFetchedOnServer: false,
  error: null
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["c" /* FETCH_CHARACTER_SUCCESS */]:
      return _extends({}, state, {
        character: payload.response,
        isFetchedOnServer: payload.isServer,
        nextCharacterId: state.nextCharacterId + 1
      });
    case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["b" /* FETCH_CHARACTER_FAILURE */]:
      return _extends({}, state, { error: payload.error, isFetchedOnServer: payload.isServer });
    default:
      return state;
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "antd/lib/button":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/button/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style/css");

/***/ }),

/***/ "antd/lib/date-picker":
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker");

/***/ }),

/***/ "antd/lib/date-picker/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker/style/css");

/***/ }),

/***/ "antd/lib/form":
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "antd/lib/form/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/form/style/css");

/***/ }),

/***/ "antd/lib/input-number":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input-number");

/***/ }),

/***/ "antd/lib/input-number/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input-number/style/css");

/***/ }),

/***/ "antd/lib/select":
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "antd/lib/select/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/select/style/css");

/***/ }),

/***/ "antd/lib/slider":
/***/ (function(module, exports) {

module.exports = require("antd/lib/slider");

/***/ }),

/***/ "antd/lib/slider/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/slider/style/css");

/***/ }),

/***/ "antd/lib/switch":
/***/ (function(module, exports) {

module.exports = require("antd/lib/switch");

/***/ }),

/***/ "antd/lib/switch/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/switch/style/css");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-observable":
/***/ (function(module, exports) {

module.exports = require("redux-observable");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "rxjs/observable/interval":
/***/ (function(module, exports) {

module.exports = require("rxjs/observable/interval");

/***/ }),

/***/ "rxjs/observable/of":
/***/ (function(module, exports) {

module.exports = require("rxjs/observable/of");

/***/ }),

/***/ "rxjs/operators":
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "universal-rx-request":
/***/ (function(module, exports) {

module.exports = require("universal-rx-request");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
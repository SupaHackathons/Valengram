module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(2);

	var _Root = __webpack_require__(3);

	var _Root2 = _interopRequireDefault(_Root);

	var _ValenForm = __webpack_require__(4);

	var _ValenForm2 = _interopRequireDefault(_ValenForm);

	var _Valentine = __webpack_require__(11);

	var _Valentine2 = _interopRequireDefault(_Valentine);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactRouter.Router,
	        { history: _reactRouter.hashHistory },
	        _react2.default.createElement(
	          _reactRouter.Route,
	          { path: '/', component: _Root2.default },
	          _react2.default.createElement(_reactRouter.Route, { path: 'valentine/', component: _Valentine2.default }),
	          _react2.default.createElement(_reactRouter.IndexRoute, { component: _ValenForm2.default })
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Root = function (_Component) {
	  _inherits(Root, _Component);

	  function Root() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Root);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Root)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.onFormSubmit = function (val) {
	      _this.setState({
	        valData: val
	      });
	    }, _this.state = {
	      valData: {}
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Root, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Create your Valengram'
	        ),
	        this.props.children && (0, _react.cloneElement)(this.props.children, { onFormSubmit: this.onFormSubmit, valData: this.state.valData })
	      );
	    }
	  }]);

	  return Root;
	}(_react.Component);

	exports.default = Root;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _image = __webpack_require__(5);

	var _image2 = _interopRequireDefault(_image);

	var _Valengram = __webpack_require__(6);

	var _Valengram2 = _interopRequireDefault(_Valengram);

	var _reactDropzone = __webpack_require__(10);

	var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var func = _react.PropTypes.func;

	var ValenForm = function (_Component) {
	  _inherits(ValenForm, _Component);

	  function ValenForm() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ValenForm);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ValenForm)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.onClick = function (e) {
	      _this.props.onFormSubmit(_this.state);
	      console.log('E', e);
	      e.preventDefault();
	      _this.props.history.push('/valentine/');

	      console.log('VALFORM STATE', _this.state);
	    }, _this.state = {
	      files: [],
	      text: []
	    }, _this.onDrop = function (file) {
	      _this.setState(function (prevState, currProps) {
	        console.log('previous state files', prevState.files);
	        return { files: prevState.files.concat(file) };
	      });
	    }, _this.handleName = function (event) {
	      _this.setState(function (prevState, currProps) {
	        prevState.text[0] = event.target.value;
	        return { text: prevState.text };
	      });
	    }, _this.handlePlace = function (event) {
	      _this.setState(function (prevState, currProps) {
	        prevState.text[1] = event.target.value;
	        return { text: prevState.text };
	      });
	    }, _this.handleLove = function (event) {
	      _this.setState(function (prevState, currProps) {
	        prevState.text[2] = event.target.value;
	        return { text: prevState.text };
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ValenForm, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Make a Valengram!'
	        ),
	        _react2.default.createElement(
	          _reactDropzone2.default,
	          { onDrop: this.onDrop },
	          _react2.default.createElement(
	            'div',
	            null,
	            'Drop A Photo of your Valentine into here'
	          )
	        ),
	        this.state.files.length > 0 ? _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h2',
	            null,
	            'Uploading ',
	            this.state.files.length,
	            ' files...'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _Valengram2.default.valImageContainer },
	            this.state.files.map(function (file, idx) {
	              return _react2.default.createElement(_image2.default, { img: file.preview, key: idx });
	            })
	          )
	        ) : _react2.default.createElement(
	          'div',
	          null,
	          'Waiting for file'
	        ),
	        _react2.default.createElement(
	          'form',
	          null,
	          _react2.default.createElement('input', { onChange: this.handleName, type: 'text', className: _Valengram2.default.questionInput,
	            placeholder: 'What is your valentine\'s name/nickname?' }),
	          _react2.default.createElement('input', { onChange: this.handlePlace, type: 'text', className: _Valengram2.default.questionInput,
	            placeholder: 'Where did you first meet?' }),
	          _react2.default.createElement('input', { onChange: this.handleLove, type: 'text', className: _Valengram2.default.questionInput,
	            placeholder: 'What do you love most about your valetine' }),
	          _react2.default.createElement('input', { type: 'submit', onClick: this.onClick })
	        )
	      );
	    }
	  }]);

	  return ValenForm;
	}(_react.Component);

	ValenForm.propTypes = {
	  onFormSubmit: func
	};
	exports.default = ValenForm;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Valengram = __webpack_require__(6);

	var _Valengram2 = _interopRequireDefault(_Valengram);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Image = function (_Component) {
	  _inherits(Image, _Component);

	  function Image() {
	    _classCallCheck(this, Image);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Image).apply(this, arguments));
	  }

	  _createClass(Image, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('img', { className: _Valengram2.default.valImage, src: this.props.img })
	      );
	    }
	  }]);

	  return Image;
	}(_react.Component);

	Image.propTypes = {
	  img: _react2.default.PropTypes.string
	};
	exports.default = Image;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"questionInput":"Valengram__questionInput___1Wemo","valImage":"Valengram__valImage___Mjwn1","valImageContainer":"Valengram__valImageContainer___1CEnQ"};

/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	module.exports = require("react-dropzone");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ScrollItem = __webpack_require__(12);

	var _ScrollItem2 = _interopRequireDefault(_ScrollItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var array = _react.PropTypes.array;
	var shape = _react.PropTypes.shape;

	var ValenForm = function (_Component) {
	  _inherits(ValenForm, _Component);

	  function ValenForm() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ValenForm);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ValenForm)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      transform: 0
	    }, _this.componentDidMount = function () {
	      window.addEventListener('scroll', _this.handleScroll);
	    }, _this.componentWillUnmount = function () {
	      window.removeEventListener('scroll', _this.handleScroll);
	    }, _this.handleScroll = function (event) {
	      console.log(_this.state.transform);
	      var scrollTop = event.srcElement.body.scrollTop;
	      var itemTranslate = Math.min(0, scrollTop);

	      _this.setState({
	        transform: itemTranslate
	      });
	    }, _this._mkValImage = function (source, idx) {
	      var text = _this.props.valData.text;

	      return _react2.default.createElement(_ScrollItem2.default, { source: source,
	        text: text[idx],
	        idx: idx });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ValenForm, [{
	    key: 'render',
	    value: function render() {
	      var files = this.props.valData.files;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'here\'s your Valengram!'
	        ),
	        files.map(this._mkValImage)
	      );
	    }
	  }]);

	  return ValenForm;
	}(_react.Component);

	ValenForm.propTypes = {
	  valData: shape({
	    files: array,
	    text: array
	  })
	};
	ValenForm.defaultProps = {
	  valData: {
	    files: ['http://i.imgur.com/duKgcOv.jpg', 'http://i.imgur.com/Eo02jkb.jpg', 'http://i.imgur.com/xOH0u58.jpg'],
	    text: ['1', '2', '3']
	  }
	};
	exports.default = ValenForm;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(13);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _ScrollItem = __webpack_require__(14);

	var _ScrollItem2 = _interopRequireDefault(_ScrollItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var string = _react.PropTypes.string;
	var number = _react.PropTypes.number;

	// var SCROLL_TIMEOUT = 240;
	// var CHECK_INTERVAL = SCROLL_TIMEOUT / 6;

	var ScrollItem = function (_Component) {
	  _inherits(ScrollItem, _Component);

	  function ScrollItem() {
	    _classCallCheck(this, ScrollItem);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ScrollItem).apply(this, arguments));
	  }

	  _createClass(ScrollItem, [{
	    key: 'render',

	    //
	    // state = {
	    //   top: 1,
	    //   height: -1,
	    //   scrolling: false
	    // };
	    // checkInterval = null;
	    // scrolling = false;
	    // proxiedScrollTime = Date.now();
	    //
	    // checkScroll = () => {
	    //   if (Date.now() - this.lastScrollTime > SCROLL_TIMEOUT && this.scrolling) {
	    //     this.scrolling = false;
	    //     this.onScrollEnd();
	    //   }
	    // };
	    //
	    // proxiedScroll = () => {
	    //   if (Date.now() - this.proxiedScrollTime > CHECK_INTERVAL && this.scrolling) {
	    //     this.proxiedScrollTime = Date.now();
	    //     this.onScrollProxy();
	    //   }
	    // };
	    //
	    // onScroll = () => {
	    //   if (!this.scrolling) {
	    //     this.scrolling = true;
	    //     this.onScrollStart();
	    //   }
	    //   this.lastScrollTime = Date.now();
	    //   this.proxiedScroll();
	    // };
	    //
	    // handleScroll = () => {
	    //   this.updateTopPosition();
	    // };
	    //
	    // updateTopPosition = () => {
	    //   var box = this.node.getBoundingClientRect();
	    //   this.setState({
	    //     top: box.top,
	    //     height: box.height
	    //   });
	    // };
	    //
	    // onScrollStart = () => {
	    //   this.setState({scrolling: true});
	    //   this.handleScroll();
	    // };
	    //
	    // onScrollProxy = () => {
	    //   this.handleScroll();
	    // };
	    //
	    // onScrollEnd = () => {
	    //   this.setState({scrolling: false});
	    //   this.handleScroll();
	    // };
	    //
	    // getState = () => {
	    //   return this.state;
	    // };
	    //
	    // isFrozen = () => {
	    //   return this.state.top < 1 && this.state.top < window.document.body.scrollTop;
	    // };

	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var idx = _props.idx;
	      var source = _props.source;
	      var text = _props.text;
	      // let isFrozen = this.isFrozen();

	      var argsClass = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, _ScrollItem2.default.sticky, true), _defineProperty(_classnames, _ScrollItem2.default.frozen, false), _classnames));
	      var argsStyle = {
	        // height: isFrozen ? this.state.height : 'auto',
	        zIndex: idx
	      };

	      return _react2.default.createElement(
	        'div',
	        { key: idx,
	          className: argsClass,
	          style: argsStyle },
	        _react2.default.createElement('img', { src: source, className: _ScrollItem2.default.images }),
	        _react2.default.createElement(
	          'div',
	          { className: _ScrollItem2.default.textWrapper },
	          _react2.default.createElement(
	            'span',
	            { className: _ScrollItem2.default.text },
	            text
	          )
	        )
	      );
	    }
	    // componentDidMount () {
	    //   this.node = findDOMNode();
	    //   this.updateTopPosition();
	    // }

	  }]);

	  return ScrollItem;
	}(_react.Component);

	ScrollItem.propTypes = {
	  source: string,
	  text: string,
	  idx: number
	};
	exports.default = ScrollItem;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"wrapper":"ScrollItem__wrapper___21zQX","images":"ScrollItem__images___oeyqB","text":"ScrollItem__text___1hOnM","frozen":"ScrollItem__frozen___1HS0d","sticky":"ScrollItem__sticky___itkVR"};

/***/ }
/******/ ]);
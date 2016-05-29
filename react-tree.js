this["ReactTree"] =
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

	module.exports = {
	  Grid: __webpack_require__(1)
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {HeaderRow = __webpack_require__(3);

	module.exports = React.createClass({
	  propTypes: {
	    columns: React.PropTypes.array,
	    collection: React.PropTypes.array,
	  },

	  getDefaultProps: function() {
	    return {
	      columns: [],
	      collection: [],
	    };
	  },

	  render: function() {
	    return React.DOM.div({
	        className: 'react-tree-grid'
	      },
	      React.createElement(HeaderRow, {
	        columns: this.props.columns,
	        collection: this.props.collection,
	      })
	    );
	  },
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	(function() { module.exports = this["React"]; }());

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {HeaderCell = __webpack_require__(4);

	module.exports = React.createClass({
	  propTypes: {
	    columns: React.PropTypes.array,
	    collection: React.PropTypes.array,
	  },

	  createHeaderCell: function(column) {
	    return React.createElement(HeaderCell, {
	      column: column,
	      collection: this.props.collection,
	    });
	  },

	  render: function() {
	    return React.DOM.div({
	        className: 'react-tree-header-row'
	      },
	      this.props.columns.map(this.createHeaderCell)
	    );
	  },
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {module.exports = React.createClass({
	  propTypes: {
	    column: React.PropTypes.object,
	    collection: React.PropTypes.array,
	  },

	  render: function() {
	    return React.DOM.div({
	        className: 'react-tree-header-cell'
	      }
	    );
	  },
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }
/******/ ]);
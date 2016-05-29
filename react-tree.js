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
	HeaderCell = __webpack_require__(4);
	Body = __webpack_require__(5);
	BodyCell = __webpack_require__(7);

	module.exports = React.createClass({
	  propTypes: {
	    columns: React.PropTypes.array,
	    collection: React.PropTypes.array,
	  },

	  getDefaultProps: function() {
	    return {
	      columns: [{
	        label: 'Boopin',
	        attribute: 'boop',
	        headerCell: HeaderCell,
	        cell: BodyCell,
	      }, {
	        label: 'Wootin',
	        attribute: 'woot',
	        headerCell: HeaderCell,
	        cell: BodyCell,
	      }],
	      collection: [{
	        boop: 'beep',
	        woot: 'woot',
	      }, {
	        boop: 'beeeep',
	        woot: 'woooooot',
	      }],
	    };
	  },

	  render: function() {
	    return React.DOM.div({
	        className: 'react-tree-grid'
	      },
	      React.createElement(HeaderRow, {
	        columns: this.props.columns,
	        collection: this.props.collection,
	      }),
	      React.createElement(Body, {
	        collection: this.props.collection,
	        columns: this.props.columns,
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

	/* WEBPACK VAR INJECTION */(function(React) {module.exports = React.createClass({
	  propTypes: {
	    columns: React.PropTypes.array,
	    collection: React.PropTypes.array,
	  },

	  createHeaderCell: function(column) {
	    return React.createElement(column.headerCell, {
	      column: column,
	      collection: this.props.collection,
	    });
	  },

	  render: function() {
	    return React.DOM.div({
	        className: 'react-tree-header-row',
	        style: {
	          display: 'flex',
	        },
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
	        className: 'react-tree-header-cell',
	        style: {
	          flexBasis: 0,
	          flexGrow: 1,
	          flexShrink: 0,
	          textAlign: 'center',
	        },
	      },
	      this.props.column.label
	    );
	  },
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {BodyRow = __webpack_require__(6);

	module.exports = React.createClass({
	  propTypes: {
	    collection: React.PropTypes.array,
	    columns: React.PropTypes.array,
	  },

	  createBodyRow: function(model) {
	    return React.createElement(BodyRow, {
	      columns: this.props.columns,
	      model: model,
	    });
	  },

	  render: function() {
	    return React.DOM.div({
	        className: 'react-tree-body',
	      },
	      this.props.collection.map(this.createBodyRow)
	    );
	  },
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {module.exports = React.createClass({
	  propTypes: {
	    columns: React.PropTypes.array,
	    model: React.PropTypes.object,
	  },

	  createBodyCell: function(column) {
	    return React.createElement(column.cell, {
	      column: column,
	      model: this.props.model,
	    });
	  },

	  render: function() {
	    return React.DOM.div({
	        className: 'react-tree-body-row',
	        style: {
	          display: 'flex',
	        },
	      },
	      this.props.columns.map(this.createBodyCell)
	    );
	  },
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {module.exports = React.createClass({
	  propTypes: {
	    column: React.PropTypes.object,
	    model: React.PropTypes.model,
	  },

	  render: function() {
	    return React.DOM.div({
	        className: 'react-tree-body-cell',
	        style: {
	          flexBasis: 0,
	          flexGrow: 1,
	          flexShrink: 0,
	        },
	      },
	      this.props.model[this.props.column.attribute]
	    );
	  },
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }
/******/ ]);
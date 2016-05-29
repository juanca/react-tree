HeaderRow = require('./header-row');
HeaderCell = require('./header-cell');
Body = require('./body');
BodyCell = require('./body-cell');

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

  createHeaderRow: function() {
    return React.createElement(HeaderRow, {
      columns: this.props.columns,
      collection: this.props.collection,
    });
  },

  createBody: function() {
    return React.createElement(Body, {
      collection: this.props.collection,
      columns: this.props.columns,
    });
  },

  render: function() {
    return React.DOM.div({
        className: 'react-tree-grid'
      },
      this.createHeaderRow(),
      this.createBody()
    );
  },
});

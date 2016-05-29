HeaderCell = require('./header-cell');

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

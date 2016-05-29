module.exports = React.createClass({
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
        className: 'react-tree-header-row'
      },
      this.props.columns.map(this.createHeaderCell)
    );
  },
});

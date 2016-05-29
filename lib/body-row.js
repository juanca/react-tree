module.exports = React.createClass({
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

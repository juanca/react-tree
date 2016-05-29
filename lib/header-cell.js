module.exports = React.createClass({
  propTypes: {
    column: React.PropTypes.object,
    collection: React.PropTypes.array,
  },

  render: function() {
    return React.DOM.div({
        className: 'react-tree-header-cell',
        style: {
          flexGrow: 1,
          flexShrink: 0,
          textAlign: 'center',
        },
      },
      this.props.column.label
    );
  },
});

module.exports = React.createClass({
  propTypes: {
    column: React.PropTypes.object,
    model: React.PropTypes.object,
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

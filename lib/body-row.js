module.exports = React.createClass({
  propTypes: {
    columns: React.PropTypes.array,
    model: React.PropTypes.object,
  },

  render: function() {
    return React.DOM.div({
        className: 'react-tree-body-row',
      }
    );
  },
});

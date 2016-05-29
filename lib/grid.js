module.exports = React.createClass({
  getInitialState: function() {
    return {
      columns: [],
      collection: []
    };
  },

  render: function() {
    return React.DOM.div({
        className: 'react-tree-grid'
      }
    );
  }
});

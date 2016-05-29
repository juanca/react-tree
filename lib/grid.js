HeaderRow = require('./header-row');

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

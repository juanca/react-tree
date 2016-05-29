HeaderRow = require('./header-row');
HeaderCell = require('./header-cell');

module.exports = React.createClass({
  propTypes: {
    columns: React.PropTypes.array,
    collection: React.PropTypes.array,
  },

  getDefaultProps: function() {
    return {
      columns: [{
        label: 'Some Header Cell',
        headerCell: HeaderCell,
      }, {
        label: 'Another Header Cell',
        headerCell: HeaderCell,
      }],
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

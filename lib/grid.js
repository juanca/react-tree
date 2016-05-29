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
      columns: [{
        label: 'Some Header Cell',
        headerCell: HeaderCell,
        cell: BodyCell,
      }, {
        label: 'Another Header Cell',
        headerCell: HeaderCell,
        cell: BodyCell,
      }],
      collection: [{}, {}],
    };
  },

  render: function() {
    return React.DOM.div({
        className: 'react-tree-grid'
      },
      React.createElement(HeaderRow, {
        columns: this.props.columns,
        collection: this.props.collection,
      }),
      React.createElement(Body, {
        collection: this.props.collection,
        columns: this.props.columns,
      })
    );
  },
});

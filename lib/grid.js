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
        label: 'Boopin',
        attribute: 'boop',
        headerCell: HeaderCell,
        cell: BodyCell,
      }, {
        label: 'Wootin',
        attribute: 'woot',
        headerCell: HeaderCell,
        cell: BodyCell,
      }],
      collection: [{
        boop: 'beep',
        woot: 'woot',
      }, {
        boop: 'beeeep',
        woot: 'woooooot',
      }],
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

const BodyRow = require('./body-row.js');

const Body = React.createClass({
  propTypes: {
    collection: React.PropTypes.array,
    columns: React.PropTypes.array,
  },

  createBodyRow: function(model) {
    return React.createElement(BodyRow, {
      Body: Body,
      columns: this.props.columns,
      model: model,
    });
  },

  render: function() {
    return React.DOM.div({
        className: 'react-tree-body',
      },
      this.props.collection.map(this.createBodyRow)
    );
  },
});

module.exports = Body;

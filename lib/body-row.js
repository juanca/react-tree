BodyRowCells = require('./body-row-cells');

module.exports = React.createClass({
  propTypes: {
    Body: React.PropTypes.element,
    columns: React.PropTypes.array,
    model: React.PropTypes.object,
  },

  createBodyRowCells: function() {
    return React.createElement(BodyRowCells, {
      columns: columns,
      model: this.props.model,
    });
  },

  createBody: function() {
    return React.createElement(this.props.Body, {
      collection: this.getBodyCollection(),
      columns: columns,
    });
  },

  getBodyCollection: function() {
    return this.props.model.collection || [];
  },

  render: function() {
    return React.DOM.div({
        className: 'react-tree-body-row',
      },
      this.createBodyRowCells(),
      this.createBody()
    );
  },
});

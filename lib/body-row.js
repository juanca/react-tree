const BodyRowCells = require('./body-row-cells');

module.exports = React.createClass({
  propTypes: {
    Body: React.PropTypes.element,
    columns: React.PropTypes.array,
    model: React.PropTypes.object,
  },

  createBodyRowCells: function() {
    return React.createElement(BodyRowCells, {
      columns: this.props.columns,
      model: this.props.model,
    });
  },

  createBody: function() {
    if (this.getBodyCollection().length == 0) return;

    return React.createElement(this.props.Body, {
      collection: this.getBodyCollection(),
      columns: this.props.columns,
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

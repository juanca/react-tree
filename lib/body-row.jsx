import React from 'react';
import BodyRowCells from './body-row-cells';
import Body from './body';
import columnsPropType from './prop-type/columns';
import modelPropType from './prop-type/model';

class BodyRow extends React.Component {
  constructor(props) {
    super(props);
    this.hasManyColumnSets = Array.isArray(this.props.columns[0]);
  }
  getBodyCollection() {
    return this.props.model.collection || [];
  }

  createBodyRowCells() {
    const columns = this.hasManyColumnSets ?
      this.props.columns[0] :
      this.props.columns;

    return (
      <BodyRowCells columns={columns} model={this.props.model} />
    );
  }

  createBody() {
    if (this.getBodyCollection().length === 0) return null;

    const nestedCollection = this.getBodyCollection();
    const columns = this.hasManyColumnSets ?
      this.props.columns.slice(1) :
      this.props.columns;

    return (
      <Body collection={nestedCollection} columns={columns} />
    );
  }

  render() {
    return (
      <div className="react-tree-body-row">
        {this.createBodyRowCells()}
        {this.createBody()}
      </div>
    );
  }
}

BodyRow.propTypes = {
  columns: columnsPropType,
  model: modelPropType,
};

BodyRow.defaultProps = {};

export default BodyRow;

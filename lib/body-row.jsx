import React from 'react';
import BodyRowCells from './body-row-cells';
import Body from './body';
import columnsPropType from './prop-type/columns';
import modelPropType from './prop-type/model';

class BodyRow extends React.Component {
  getBodyCollection() {
    return this.props.model.collection || [];
  }

  createBodyRowCells() {
    return (
      <BodyRowCells columns={this.props.columns} model={this.props.model} />
    );
  }

  createBody() {
    if (this.getBodyCollection().length === 0) return null;

    const nestedCollection = this.getBodyCollection();

    return (
      <Body collection={nestedCollection} columns={this.props.columns} />
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

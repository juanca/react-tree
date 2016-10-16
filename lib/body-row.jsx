import React from 'react';
import BodyRowCells from './body-row-cells';

class BodyRow extends React.Component {
  constructor(props) {
    super(props);
  }

  createBodyRowCells() {
    return (
      <BodyRowCells columns={this.props.columns} model={this.props.model} />
    );
  }

  createBody() {
    if (this.getBodyCollection().length == 0) return;

    const Body = this.props.Body;
    const nestedCollection = this.getBodyCollection();

    return (
      <Body collection={nestedCollection} columns={this.props.columns} />
    );
  }

  getBodyCollection() {
    return this.props.model.collection || [];
  }

  render() {
    return (
      <div className='react-tree-body-row'>
        {this.createBodyRowCells()}
        {this.createBody()}
      </div>
    );
  }
}

BodyRow.propTypes = {
  Body: React.PropTypes.element,
  columns: React.PropTypes.array,
  model: React.PropTypes.object,
};

BodyRow.defaultProps = {};

export default BodyRow;

import React from 'react';
import columnsPropType from './prop-type/columns';
import modelPropType from './prop-type/model';

class BodyRowCells extends React.Component {
  static getStyles() {
    return {
      display: 'flex',
    };
  }

  constructor(props) {
    super(props);
    this.createBodyCell = this.createBodyCell.bind(this);
  }

  createBodyCell(column) {
    const Cell = column.cell;
    const key = column.key || column.attribute;

    return (
      <Cell key={key} column={column} model={this.props.model} />
    );
  }

  render() {
    return (
      <div className="react-tree-body-row-cells" style={this.constructor.getStyles()}>
        {this.props.columns.map(this.createBodyCell)}
      </div>
    );
  }
}

BodyRowCells.propTypes = {
  columns: columnsPropType,
  model: modelPropType,
};

BodyRowCells.defaultProps = {};


export default BodyRowCells;

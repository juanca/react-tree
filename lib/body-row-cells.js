import React from 'react';

class BodyRowCells extends React.Component {
  constructor(props) {
    super(props);
  }

  createBodyCell(column) {
    const Cell = column.cell;

    return (
      <Cell column={column} model={this.props.model} />
    );
  }

  getStyles() {
    return {
      display: 'flex',
    };
  }

  render() {
    return (
      <div className='react-tree-body-row-cells' style={this.getStyles()}>
        {this.props.columns.map(this.createBodyCell.bind(this))}
      </div>
    );
  }
}

BodyRowCells.propTypes = {
  columns: React.PropTypes.array,
  model: React.PropTypes.object,
};

BodyRowCells.defaultProps = {};


export default BodyRowCells;

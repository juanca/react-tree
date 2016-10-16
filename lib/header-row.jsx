import React from 'react';

class HeaderRow extends React.Component {
  constructor(props) {
    super(props);
  }

  createHeaderCell(column) {
    const HeaderCell = column.headerCell;

    return (
      <HeaderCell column={column} collection={this.props.collection} />
    );
  }

  getStyles() {
    return {
      display: 'flex',
    };
  }

  render() {
    return (
      <div className='react-tree-header-row' style={this.getStyles()}>
        {this.props.columns.map(this.createHeaderCell.bind(this))}
      </div>
    );
  }
}

HeaderRow.propTypes = {
  columns: React.PropTypes.array,
  collection: React.PropTypes.array,
};

HeaderRow.defaultProps = {};

export default HeaderRow;

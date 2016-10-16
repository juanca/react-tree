import React from 'react';
import collectionPropType from './prop-type/collection';
import columnsPropType from './prop-type/columns';

class HeaderRow extends React.Component {
  static getStyles() {
    return {
      display: 'flex',
    };
  }

  constructor(props) {
    super(props);
    this.createHeaderCell = this.createHeaderCell.bind(this);
  }

  createHeaderCell(column) {
    const HeaderCell = column.headerCell;
    const key = column.key || column.attribute;

    return (
      <HeaderCell key={key} column={column} collection={this.props.collection} />
    );
  }

  render() {
    return (
      <div className="react-tree-header-row" style={this.constructor.getStyles()}>
        {this.props.columns.map(this.createHeaderCell)}
      </div>
    );
  }
}

HeaderRow.propTypes = {
  collection: collectionPropType,
  columns: columnsPropType,
};

HeaderRow.defaultProps = {};

export default HeaderRow;

import React from 'react';
import columnPropType from './prop-type/column';

class HeaderCell extends React.Component {
  static getStyles() {
    return {
      flexBasis: 0,
      flexGrow: 1,
      flexShrink: 0,
      textAlign: 'center',
    };
  }

  render() {
    return (
      <div className="react-tree-header-cell" style={this.constructor.getStyles()}>
        {this.props.column.label}
      </div>
    );
  }
}

HeaderCell.propTypes = {
  column: columnPropType,
};

HeaderCell.defaultProps = {};

export default HeaderCell;

import React from 'react';

class HeaderCell extends React.Component {
  constructor(props) {
    super(props);
  }
  
  getStyles() {
    return {
      flexBasis: 0,
      flexGrow: 1,
      flexShrink: 0,
      textAlign: 'center',
    };
  }

  render() {
    return (
      <div className='react-tree-header-cell' style={this.getStyles()}>
        {this.props.column.label}
      </div>
    );
  }
};

HeaderCell.propTypes = {
  column: React.PropTypes.object,
  collection: React.PropTypes.array,
};

HeaderCell.defaultProps = {};

export default HeaderCell;

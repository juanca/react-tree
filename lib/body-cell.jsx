import React from 'react';

class BodyCell extends React.Component {
  constructor(props) {
    super(props);
  }

  getModelAttribute() {
    return this.props.model[this.props.column.attribute];
  }

  getStyles() {
    return {
      flexBasis: 0,
      flexGrow: 1,
      flexShrink: 0,
    };
  }

  render() {
    return (
      <div className='react-tree-body-cell' style={this.getStyles()}>
        {this.getModelAttribute()}
      </div>
    );
  }
}

BodyCell.propTypes = {
  column: React.PropTypes.object,
  model: React.PropTypes.object,
};

BodyCell.defaultProps = {};

export default BodyCell;

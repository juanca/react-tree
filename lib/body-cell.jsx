import React from 'react';
import columnPropType from './prop-type/column';
import modelPropType from './prop-type/model';

class BodyCell extends React.Component {
  static getStyles() {
    return {
      flexBasis: 0,
      flexGrow: 1,
      flexShrink: 0,
    };
  }

  getModelAttribute() {
    return this.props.model[this.props.column.attribute];
  }

  render() {
    return (
      <div className="react-tree-body-cell" style={this.constructor.getStyles()}>
        {this.getModelAttribute()}
      </div>
    );
  }
}

BodyCell.propTypes = {
  column: columnPropType,
  model: modelPropType,
};

BodyCell.defaultProps = {};

export default BodyCell;

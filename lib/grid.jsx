import React from 'react';
import HeaderRow from './header-row';
import Body from './body';
import collectionPropType from './prop-type/collection';
import columnsPropType from './prop-type/columns';

class Grid extends React.Component {
  createHeaderRow() {
    const columns = Array.isArray(this.props.columns[0]) ?
      this.props.columns[0] :
      this.props.columns;

    return (
      <HeaderRow columns={columns} collection={this.props.collection} />
    );
  }

  createBody() {
    return (
      <Body collection={this.props.collection} columns={this.props.columns} />
    );
  }

  render() {
    return (
      <div className="react-tree-grid">
        {this.createHeaderRow()}
        {this.createBody()}
      </div>
    );
  }
}

Grid.propTypes = {
  collection: collectionPropType,
  columns: React.PropTypes.oneOfType([
    columnsPropType,
    React.PropTypes.arrayOf(columnsPropType),
  ]),
};

Grid.defaultProps = {
  collection: [],
  columns: [],
};

export default Grid;

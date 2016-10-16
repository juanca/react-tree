import React from 'react';
import HeaderRow from './header-row';
import Body from './body';
import collectionPropType from './prop-type/collection';
import columnsPropType from './prop-type/columns';

class Grid extends React.Component {
  createHeaderRow() {
    return (
      <HeaderRow columns={this.props.columns} collection={this.props.collection} />
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
  columns: columnsPropType,
};

Grid.defaultProps = {
  collection: [],
  columns: [],
};

export default Grid;

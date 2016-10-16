import React from 'react';
import HeaderRow from './header-row';
import Body from './body';

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

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
      <div className='react-tree-grid'>
        {this.createHeaderRow()}
        {this.createBody()}
      </div>
    );
  }
}

Grid.propTypes = {
  columns: React.PropTypes.array,
  collection: React.PropTypes.array,
};

Grid.defaultProps = {
  columns: [],
  collection: [],
};

export default Grid;

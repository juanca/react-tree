import React from 'react';
import BodyRow from './body-row'

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  createBodyRow(model) {
    return (
      <BodyRow Body={Body} columns={this.props.columns} model={model} />
    );
  }

  render() {
    return (
      <div className='react-tree-body'>
        {this.props.collection.map(this.createBodyRow.bind(this))}
      </div>
    );
  }
}

Body.propTypes = {
  collection: React.PropTypes.array,
  columns: React.PropTypes.array,
};

Body.defaultProps = {};

export default Body;

import React from 'react';
import BodyRow from './body-row';
import collectionPropType from './prop-type/collection';
import columnsPropType from './prop-type/columns';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.createBodyRow = this.createBodyRow.bind(this);
  }

  createBodyRow(model) {
    const key = model.key || model.id;

    return (
      <BodyRow key={key} columns={this.props.columns} model={model} />
    );
  }

  render() {
    return (
      <div className="react-tree-body">
        {this.props.collection.map(this.createBodyRow)}
      </div>
    );
  }
}

Body.propTypes = {
  collection: collectionPropType,
  columns: columnsPropType,
};

Body.defaultProps = {};

export default Body;

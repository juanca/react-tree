import React from 'react';

export default React.PropTypes.shape({
  attribute: React.PropTypes.string,
  key: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string,
  ]),
  label: React.PropTypes.string,
  // headerCell: ,
  // cell: ,
});

import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

const HeaderRow = require('../lib/header-row');
const HeaderCell = require('../lib/header-cell');

describe('<HeaderRow />', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('has a <HeaderCell />', () => {
    const wrapper = shallow(<HeaderRow
      columns={[
        { headerCell: HeaderCell, label: 'Label One' },
      ]}
    />);
    expect(wrapper.find(HeaderCell).length).toBe(1);
  });

  it('has many <HeaderCell />', () => {
    const wrapper = shallow(<HeaderRow
      columns={[
        { headerCell: HeaderCell, label: 'Label One' },
        { headerCell: HeaderCell, label: 'Label Two' },
      ]}
    />);
    expect(wrapper.find(HeaderCell).length).not.toBeEmpty(2);
  });
});

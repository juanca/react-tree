import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import HeaderRow from '../lib/header-row';
import HeaderCell from '../lib/header-cell';

describe('<HeaderRow />', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('has a <HeaderCell />', () => {
    const wrapper = shallow(<HeaderRow
      columns={[
        { key: 'some-key', headerCell: HeaderCell, label: 'Label One' },
      ]}
    />);
    expect(wrapper.find(HeaderCell).length).toBe(1);
  });

  it('has many <HeaderCell />', () => {
    const wrapper = shallow(<HeaderRow
      columns={[
        { key: 'a', headerCell: HeaderCell, label: 'Label One' },
        { key: 'b', headerCell: HeaderCell, label: 'Label Two' },
      ]}
    />);
    expect(wrapper.find(HeaderCell).length).not.toBeEmpty(2);
  });
});

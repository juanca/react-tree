import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import HeaderCell from '../lib/header-cell';

describe('<HeaderCell />', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('renders the label', () => {
    const wrapper = shallow(<HeaderCell
      column={{ label: 'Some Header' }}
    />);
    expect(wrapper).toHaveText('Some Header');
  });
});

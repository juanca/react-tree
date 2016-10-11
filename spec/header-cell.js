import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

const HeaderCell = require('../lib/header-cell');

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

import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

const Grid = require('../lib/grid');
const HeaderRow = require('../lib/header-row');
const Body = require('../lib/body');

describe('<Grid />', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('has a <HeaderRow />', () => {
    const wrapper = shallow(<Grid
      collection={[]}
      columns={[]}
    />);
    expect(wrapper.find(HeaderRow).length).toBe(1);
  });

  it('has a <Body />', () => {
    const wrapper = shallow(<Grid
      collection={[]}
      columns={[]}
    />);
    expect(wrapper.find(Body).length).toBe(1);
  });
});

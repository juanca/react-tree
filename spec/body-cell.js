import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

const BodyCell = require('../lib/body-cell');

describe('<BodyCell />', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('renders text', () => {
    const wrapper = shallow(<BodyCell
      model={{ name: 'Hello world!' }}
      column={{ attribute: 'name' }}
    />);
    expect(wrapper).toHaveText('Hello world!');
  });
});

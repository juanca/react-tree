import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

const Body = require('../lib/body');
const BodyRow = require('../lib/body-row');

describe('<Body />', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('can be empty', () => {
    const wrapper = shallow(<Body
      collection={[]}
      columns={[]}
    />);
    expect(wrapper.find(BodyRow)).toBeEmpty();
  });

  it('has a <BodyRow />', () => {
    const wrapper = shallow(<Body
      collection={[
        { name: 'Hello world!' },
      ]}
      columns={[]}
    />);
    expect(wrapper.find(BodyRow).length).toBe(1);
  });

  it('has many <BodyRow />', () => {
    const wrapper = shallow(<Body
      collection={[
        { name: 'Hello world!' },
        { name: 'Hola mundo!' }
      ]}
      columns={[]}
    />);
    expect(wrapper.find(BodyRow).length).not.toBeEmpty(2);
  });
});

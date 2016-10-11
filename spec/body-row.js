import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

const BodyRow = require('../lib/body-row');
const BodyRowCells = require('../lib/body-row-cells');
const Body = require('../lib/body');

describe('<BodyRow />', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('has <BodyRowCells />', () => {
    const wrapper = shallow(<BodyRow
      model={{ name: 'Hello world!' }}
      columns={[]}
    />);
    expect(wrapper.find(BodyRowCells)).not.toBeEmpty();
  });

  describe('without a nested collection', () => {
    it('does not have a <Body />', () => {
      const wrapper = shallow(<BodyRow
        model={{ name: 'Hello world!' }}
        columns={[]}
        Body={Body}
      />);
      expect(wrapper.find(Body)).toBeEmpty();
    });
  });

  describe('with a nested collection', () => {
    it('has a <Body />', () => {
      const wrapper = shallow(<BodyRow
        model={{
          name: 'Hello world!',
          collection: [{ name: 'Hola mundo!' }]
        }}
        columns={[]}
        Body={Body}
      />);
      expect(wrapper.find(Body)).not.toBeEmpty();
    });
  });
});

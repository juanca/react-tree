import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

const BodyRowCells = require('../lib/body-row-cells');
const BodyCell = require('../lib/body-cell');

describe('<BodyRowCells />', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('renders empty', () => {
    const wrapper = shallow(<BodyRowCells
      model={{}}
      columns={[]}
    />);
    expect(wrapper.find(BodyCell)).toBeEmpty();
  });

  it('renders one <BodyCell /> components', () => {
    const wrapper = shallow(<BodyRowCells
      model={{}}
      columns={[
        { cell: BodyCell },
      ]}
    />);
    expect(wrapper.find(BodyCell).length).toBe(1);
  });

  it('renders multiple <BodyCell /> components', () => {
    const wrapper = shallow(<BodyRowCells
      model={{}}
      columns={[
        { cell: BodyCell },
        { cell: BodyCell },
        { cell: BodyCell },
      ]}
    />);
    expect(wrapper.find(BodyCell).length).toBe(3);
  });
});

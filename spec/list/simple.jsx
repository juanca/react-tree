import React from 'react';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import {
  BodyCell,
  BodyRow,
  Body,
  Grid,
  HeaderCell,
  HeaderRow,
} from '../../react-tree-entry';

describe('list', () => {
  let wrapper;

  beforeAll(() => {
    jasmineEnzyme();
    wrapper = mount(<Grid
      collection={[{
        id: 1,
        someAttribute: 'Hello!',
        anotherAttribute: 'Good bye!',
      }, {
        id: 2,
        someAttribute: 'Hola!',
        anotherAttribute: 'Adios!',
      }]}
      columns={[{
        label: 'First Label',
        attribute: 'someAttribute',
        headerCell: HeaderCell,
        cell: BodyCell,
      }, {
        label: 'Second Label',
        attribute: 'anotherAttribute',
        headerCell: HeaderCell,
        cell: BodyCell,
      }]}
    />);
  });

  it('has header cell for each column', () => {
    const headerRows = wrapper.find(HeaderRow);
    expect(headerRows.length).toBe(1);
    expect(headerRows.find(HeaderCell).length).toBe(2);
  });

  it('has a body row for each model', () => {
    expect(wrapper.find(BodyRow).length).toBe(2);
  });

  describe('body row', () => {
    it('has a cell for each column', () => {
      const body = wrapper.find(Body);
      expect(body.childAt(0).find(BodyCell).length).toBe(2);
      expect(body.childAt(1).find(BodyCell).length).toBe(2);
    });
  });
});

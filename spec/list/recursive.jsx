import React from 'react';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import {
  BodyCell,
  BodyRow,
  Body,
  Grid,
  HeaderCell,
} from '../../react-tree-entry';

describe('recursive list', () => {
  let wrapper;

  beforeAll(() => {
    jasmineEnzyme();
    wrapper = mount(<Grid
      collection={[{
        id: 1,
        someAttribute: 'Hello!',
        anotherAttribute: 'Good bye!',
        collection: [{
          id: 3,
          someAttribute: 'Hi!',
          anotherAttribute: 'Bye!',
        }, {
          id: 4,
          someAttribute: 'Hey!',
          collection: [{
            id: 5,
            anotherAttribute: 'N/A',
          }],
        }],
      }, {
        id: 2,
        someAttribute: 'Hola!',
        anotherAttribute: 'Adios!',
      }, {
        id: 10,
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

  it('has a body row for each top-level model', () => {
    const bodyWrapper = wrapper.childAt(1);
    expect(bodyWrapper.children().length).toBe(3);
  });

  describe('body row', () => {
    it('has a cell for each column', () => {
      const bodyRowCells = wrapper.childAt(1).childAt(0).childAt(0);
      expect(bodyRowCells.children().length).toBe(2);
    });
  });

  describe('nested collection', () => {
    it('has a body row for each model', () => {
      const nestedBodyWrapper = wrapper.childAt(1).childAt(0).childAt(1);
      expect(nestedBodyWrapper.children().length).toBe(2);
    });

    it('has a cell for each column', () => {
      const nestedBodyRowCellsWrapper = wrapper.childAt(1).childAt(0).childAt(1).childAt(0).childAt(0);
      expect(nestedBodyRowCellsWrapper.children().length).toBe(2);
    });
  });

  describe('deeply nested collection', () => {
    it('has a body row for each model', () => {
      const deeplyNestedBodyWrapper = wrapper.childAt(1).childAt(0).childAt(1).childAt(1).childAt(1);
      expect(deeplyNestedBodyWrapper.children().length).toBe(1);
    });

    it('has a cell for each column', () => {
      const deeplyNestedBodyRowCellsWrapper = wrapper.childAt(1).childAt(0).childAt(1).childAt(1).childAt(1).childAt(0).childAt(0);
      expect(deeplyNestedBodyRowCellsWrapper.children().length).toBe(2);
    });
  });
});

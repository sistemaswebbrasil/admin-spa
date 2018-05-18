import React from 'react';
import { shallow } from 'enzyme';
import { Master } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Master />);
  expect(renderedComponent.find('.home-master').length).toBe(1);
});

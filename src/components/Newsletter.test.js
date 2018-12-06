import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Newsletter from './Newsletter';

configure({ adapter: new Adapter() });

it('render without crash', () => {
  const push = jest.fn();
  mount(<Newsletter />).find('Newsletter');
});
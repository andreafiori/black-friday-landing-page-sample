import React from 'react';
import { mount } from 'enzyme';
import Newsletter from './Newsletter';

it('render without crash', () => {
  mount(<Newsletter />).find('Newsletter');
});
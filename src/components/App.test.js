import React from 'react';
import { mount } from 'enzyme';
import App from './App';

it('render without crash', () => {
  mount(<App />).find('App');
});
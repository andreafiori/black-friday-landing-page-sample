import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WebPushNotification from './WebPushNotification';

configure({ adapter: new Adapter() });

it('render without crash', () => {
  const push = jest.fn();
  mount(<WebPushNotification />).find('WebPushNotification');
});
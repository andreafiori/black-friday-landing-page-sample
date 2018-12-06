import React from 'react';
import { mount } from 'enzyme';
import WebPushNotification from './WebPushNotification';

it('render without crash', () => {
  mount(<WebPushNotification />).find('WebPushNotification');
});
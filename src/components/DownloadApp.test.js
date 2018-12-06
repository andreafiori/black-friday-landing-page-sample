import React from 'react';
import { mount } from 'enzyme';
import DownloadApp from './DownloadApp';

it('render without crash', () => {
  mount(<DownloadApp />).find('DownloadApp');
});
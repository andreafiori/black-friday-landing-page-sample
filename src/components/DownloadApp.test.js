import React from 'react';
import { mount, configure } from 'enzyme';
import DownloadApp from './DownloadApp';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('render without crash', () => {
  const push = jest.fn();
  mount(<DownloadApp />).find('DownloadApp');
});
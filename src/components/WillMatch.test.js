import React from 'react';
import ReactDOM from 'react-dom';
import WillMatch from './WillMatch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WillMatch />, div);
  ReactDOM.unmountComponentAtNode(div);
});

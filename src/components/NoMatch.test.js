import React from 'react';
import ReactDOM from 'react-dom';
import NoMatch from './NoMatch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const location = {
    pathname: ''
  };
  ReactDOM.render(<NoMatch location={location} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

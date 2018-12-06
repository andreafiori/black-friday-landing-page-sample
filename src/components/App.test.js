import React from 'react';
import { Route } from 'react-router-dom';
import MockRouter from 'react-mock-router';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

it('test first usage with Enzyme', () => {

  const testProps = {};
  
  const push = jest.fn();
 
  const todoItemWrapper = mount(
    <MockRouter push={push}>
      <Route render={(props) => (
        <App {...props} {...testProps}/>
      )}/>
    </MockRouter>
  ).find('App');

});
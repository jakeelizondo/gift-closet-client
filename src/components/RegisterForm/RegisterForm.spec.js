import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './RegisterForm';
import { BrowserRouter, Route } from 'react-router-dom';

describe('RegisterForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/register'} component={RegisterForm} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

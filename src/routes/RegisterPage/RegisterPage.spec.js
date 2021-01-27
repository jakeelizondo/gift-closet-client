import React from 'react';
import ReactDOM from 'react-dom';
import RegisterPage from './RegisterPage';
import { BrowserRouter, Route } from 'react-router-dom';

describe('RegisterPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/register'} component={RegisterPage} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

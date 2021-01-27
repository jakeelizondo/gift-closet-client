import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';

describe('Header component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/'} component={Header} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

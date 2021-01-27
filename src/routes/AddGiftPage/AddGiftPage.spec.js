import React from 'react';
import ReactDOM from 'react-dom';
import AddGiftPage from './AddGiftPage';
import { BrowserRouter, Route } from 'react-router-dom';

describe('AddGiftPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/add-gift'} component={AddGiftPage} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

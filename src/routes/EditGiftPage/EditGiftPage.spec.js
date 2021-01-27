import React from 'react';
import ReactDOM from 'react-dom';
import EditGiftPage from './EditGiftPage';
import { BrowserRouter, Route } from 'react-router-dom';

describe('EditGiftPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit-gift'} component={EditGiftPage} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import GiftListPage from './GiftListPage';
import { BrowserRouter, Route } from 'react-router-dom';

describe('GiftListPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/my-gifts'} component={GiftListPage} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

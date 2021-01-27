import React from 'react';
import ReactDOM from 'react-dom';
import GiftDetailPage from './GiftDetailPage';
import { BrowserRouter, Route } from 'react-router-dom';

describe('GiftDetailPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/my-gifts/1'} component={GiftDetailPage} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

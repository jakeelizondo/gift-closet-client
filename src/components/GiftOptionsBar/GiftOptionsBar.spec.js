import React from 'react';
import ReactDOM from 'react-dom';
import GiftOptionsBar from './GiftOptionsBar';
import { BrowserRouter, Route } from 'react-router-dom';

describe('GiftOptionsBar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <GiftOptionsBar />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

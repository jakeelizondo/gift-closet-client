import React from 'react';
import ReactDOM from 'react-dom';
import EditGiftForm from './EditGiftForm';
import { BrowserRouter, Route } from 'react-router-dom';

describe('EditGiftForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit-gift'} component={EditGiftForm} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import AddTagPage from './AddTagPage';
import { BrowserRouter, Route } from 'react-router-dom';

describe('AddTagPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/add-tag'} component={AddTagPage} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

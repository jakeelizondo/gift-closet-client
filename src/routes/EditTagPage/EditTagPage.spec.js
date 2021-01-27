import React from 'react';
import ReactDOM from 'react-dom';
import EditTagPage from './EditTagPage';
import { BrowserRouter, Route } from 'react-router-dom';

describe('EditTagPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit-tag'} component={EditTagPage} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

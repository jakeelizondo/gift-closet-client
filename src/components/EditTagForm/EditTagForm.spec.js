import React from 'react';
import ReactDOM from 'react-dom';
import EditTagForm from './EditTagForm';
import { BrowserRouter, Route } from 'react-router-dom';

describe('EditTagForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit-tag'} component={EditTagForm} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

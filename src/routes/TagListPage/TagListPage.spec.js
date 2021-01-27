import React from 'react';
import ReactDOM from 'react-dom';
import TagListPage from './TagListPage';
import { BrowserRouter, Route } from 'react-router-dom';

describe('TagListPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/my-tags'} component={TagListPage} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

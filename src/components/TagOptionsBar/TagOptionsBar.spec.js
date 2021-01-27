import React from 'react';
import ReactDOM from 'react-dom';
import TagOptionsBar from './TagOptionsBar';
import { BrowserRouter, Route } from 'react-router-dom';

describe('TagOptionsBar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/my-gifts'} component={TagOptionsBar} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import AddTagForm from './AddTagForm';

describe('AddTagForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddTagForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

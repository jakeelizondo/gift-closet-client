import React from 'react';
import ReactDOM from 'react-dom';
import AddGiftForm from './AddGiftForm';

describe('AddGiftForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddGiftForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

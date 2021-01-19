import React from 'react';
import AddGiftForm from '../../components/AddGiftForm/AddGiftForm';

export default class AddGiftPage extends React.Component {
  render() {
    return (
      <section className="add-new-gift-section">
        <div className="back-button-bar">
          <button>Back</button>
        </div>
        <AddGiftForm />
      </section>
    );
  }
}

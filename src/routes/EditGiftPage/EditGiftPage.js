import React from 'react';
import EditGiftForm from '../../components/EditGiftForm/EditGiftForm';
import './EditGiftPage.css';

export default class EditGiftPage extends React.Component {
  state = { error: true };
  onGiftEditSuccess = () => {
    this.props.history.push('/my-gifts');
  };

  render() {
    return (
      <section className="edit-gift-section">
        <div className="back-button-bar">
          <button onClick={this.props.history.goBack}>Back</button>
        </div>
        <EditGiftForm
          {...this.props}
          onGiftEditSuccess={this.onGiftEditSuccess}
        />
      </section>
    );
  }
}

import React from 'react';
import EditGiftForm from '../../components/EditGiftForm/EditGiftForm';
import GiftOptionsBar from '../../components/GiftOptionsBar/GiftOptionsBar';
import './EditGiftPage.css';

export default class EditGiftPage extends React.Component {
  state = { error: true };
  onGiftEditSuccess = () => {
    this.props.history.push('/my-gifts');
  };

  render() {
    return (
      <React.Fragment>
        <GiftOptionsBar />
        <section className="edit-gift-section">
          <div className="back-button-bar">
            <button onClick={this.props.history.goBack}>Back</button>
          </div>
          <EditGiftForm
            {...this.props}
            onGiftEditSuccess={this.onGiftEditSuccess}
          />
        </section>
      </React.Fragment>
    );
  }
}

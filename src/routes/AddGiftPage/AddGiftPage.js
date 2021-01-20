import React from 'react';
import AddGiftForm from '../../components/AddGiftForm/AddGiftForm';
import './AddGiftPage.css';

export default class AddGiftPage extends React.Component {
  onGiftPostSuccess = () => {
    this.props.history.push('/my-gifts');
  };
  render() {
    return (
      <section className="add-new-gift-section">
        <div className="back-button-bar">
          <button onClick={this.props.history.goBack}>Back</button>
        </div>
        <AddGiftForm onGiftPostSuccess={this.onGiftPostSuccess} />
      </section>
    );
  }
}

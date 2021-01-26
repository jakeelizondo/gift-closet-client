import React from 'react';
import AddGiftForm from '../../components/AddGiftForm/AddGiftForm';
import GiftOptionsBar from '../../components/GiftOptionsBar/GiftOptionsBar';
import AppContext from '../../contexts/AppContext';
import TagsService from '../../services/tags-api-service';
import './AddGiftPage.css';

export default class AddGiftPage extends React.Component {
  static contextType = AppContext;
  onGiftPostSuccess = () => {
    this.props.history.push('/my-gifts');
  };

  componentDidMount() {
    TagsService.getAllTags().then((tags) => {
      this.context.setTags(tags);
    });
  }

  render() {
    return (
      <React.Fragment>
        <GiftOptionsBar />
        <div className="back-button-bar">
          <button onClick={this.props.history.goBack}>Back</button>
        </div>
        <section className="add-new-gift-section">
          <AddGiftForm onGiftPostSuccess={this.onGiftPostSuccess} />
        </section>
      </React.Fragment>
    );
  }
}

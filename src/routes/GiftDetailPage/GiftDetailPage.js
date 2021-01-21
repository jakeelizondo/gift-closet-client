import React from 'react';
import { Link } from 'react-router-dom';
import GiftOptionsBar from '../../components/GiftOptionsBar/GiftOptionsBar';
import GiftsApiService from '../../services/gifts-api-service';
import './GiftDetailPage.css';

export default class GiftDetailPage extends React.Component {
  state = { error: false };

  componentDidMount() {
    GiftsApiService.getGiftById(this.props.match.params.giftId).then(
      (response) => {
        this.setState({ gift: response });
      }
    );
  }

  handleGiftDelete = () => {
    GiftsApiService.deleteGift(this.props.match.params.giftId).then((res) => {
      this.props.history.goBack();
    });
  };

  generateGift() {
    const gift = this.state.gift;
    return (
      <section className="gift-section">
        <div className="gift">
          <div className="gift-id-name">
            <h3>{gift.gift_name}</h3>
          </div>
          <div className="gift-details">
            {gift.gift_cost && (
              <div className="gift-cost">
                <h3>Cost:</h3>
                <p>${gift.gift_cost}</p>
              </div>
            )}
            {gift.gift_url && (
              <div className="gift-url">
                <h3>URL:</h3>
                <p>{gift.gift_url}</p>
              </div>
            )}
            {gift.gift_description && (
              <div>
                <h3>Gift description:</h3>
                <p>{gift.gift_description}</p>
              </div>
            )}
          </div>
          <div>
            <h3>Tag:</h3>
            <ul className="gift-id-tags">
              <li>Tag name</li>
            </ul>
          </div>
          <div className="gift-buttons">
            <Link to={`/edit-gift/${gift.id}`}>
              <button>Edit Gift</button>
            </Link>
            <button onClick={this.handleGiftDelete}>Delete Gift</button>
          </div>
        </div>
      </section>
    );
  }
  render() {
    return (
      <React.Fragment>
        <GiftOptionsBar />
        <div>
          <button onClick={this.props.history.goBack}> Back</button>
        </div>
        {(this.state.gift && this.generateGift()) || <p>Loading gift!</p>}
      </React.Fragment>
    );
  }
}

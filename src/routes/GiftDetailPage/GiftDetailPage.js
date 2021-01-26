import React from 'react';
import { Link } from 'react-router-dom';
import GiftOptionsBar from '../../components/GiftOptionsBar/GiftOptionsBar';
import GiftsApiService from '../../services/gifts-api-service';
import TagsApiService from '../../services/tags-api-service';
import './GiftDetailPage.css';
import tagIcon from '../../images/012-bookmark.png';

export default class GiftDetailPage extends React.Component {
  state = { error: false };

  componentDidMount() {
    GiftsApiService.getGiftById(this.props.match.params.giftId)
      .then((response) => {
        this.setState({ gift: response });
      })
      .then(() => {
        TagsApiService.getTagById(this.state.gift.tag_id).then((tag) => {
          if (tag.tag_name !== '') {
            this.setState({ tag });
          } else {
            this.setState({ tag: null });
          }
        });
      });
  }

  handleGiftDelete = () => {
    GiftsApiService.deleteGift(this.props.match.params.giftId).then((res) => {
      this.props.history.goBack();
    });
  };

  generateGift() {
    const gift = this.state.gift;
    const tag = this.state.tag || null;
    return (
      <section className="detail-gift-section">
        <div className="detail-gift">
          <div className="detail-gift-id-name">
            <h3>{gift.gift_name}</h3>
          </div>
          <div className="detail-gift-details">
            {gift.gift_cost && (
              <div className="detail-gift-cost">
                <h3>Cost:</h3>
                <p>${gift.gift_cost}</p>
              </div>
            )}
            {gift.gift_url && (
              <div className="detail-gift-url">
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
            <ul className="detail-gift-id-tags">
              {tag ? (
                <li>
                  <img src={tagIcon} alt={'tag-icon'} />
                  {tag.tag_name}
                </li>
              ) : (
                <p>No tags yet!</p>
              )}
            </ul>
          </div>
          <div className="detail-gift-buttons">
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
        <div className={'back-button-bar'}>
          <button onClick={this.props.history.goBack}> Back</button>
        </div>
        {(this.state.gift && this.generateGift()) || <p>Loading gift!</p>}
      </React.Fragment>
    );
  }
}

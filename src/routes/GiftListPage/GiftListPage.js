import React from 'react';
import AppContext from '../../contexts/AppContext';
import GiftsApiService from '../../services/gifts-api-service';
import { Link } from 'react-router-dom';
import './GiftListPage.css';
import GiftOptionsBar from '../../components/GiftOptionsBar/GiftOptionsBar';
import TagOptionsBar from '../../components/TagOptionsBar/TagOptionsBar';
import TagsApiService from '../../services/tags-api-service';

export default class GiftListPage extends React.Component {
  static contextType = AppContext;

  componentDidMount() {
    GiftsApiService.getAllUserGifts()
      .then((gifts) => {
        this.context.setGifts(gifts);
      })
      .catch((error) => {
        this.setState({ error });
      });

    TagsApiService.getAllTags()
      .then((tags) => {
        this.context.setTags(tags);
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  getTagNameForGift(tagId) {
    console.log(tagId);
    //loop through tags in context, find tag by id, get name

    const giftTag = this.context.tags.find((tag) => tag.id === tagId);
    console.log(giftTag);
    if (giftTag) {
      return <li>{giftTag.tag_name}</li>;
    } else {
      return null;
    }

    //if no tag, return 'no tags for this gift yet!'
  }

  generateGifts = () => {
    const userGifts = this.context.gifts.map((gift) => {
      return (
        <div className="gift" id={gift.id} key={gift.id}>
          <div className="gift-id-name">
            <h3>{gift.gift_name}</h3>
            <Link to={`/my-gifts/${gift.id}`}>
              <button>View Details</button>
            </Link>
          </div>
          <div>
            <h4>Tags:</h4>
            <ul className="gift-id-tags">
              {this.getTagNameForGift(gift.tag_id)}
            </ul>
          </div>
        </div>
      );
    });

    return userGifts;
  };

  render() {
    return (
      <React.Fragment>
        <GiftOptionsBar />
        <TagOptionsBar />
        <section className="gift-section">
          <div id="gift-list">{this.generateGifts()}</div>
        </section>
      </React.Fragment>
    );
  }
}

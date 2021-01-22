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

  state = { error: false, filter: false, filterTag: '' };

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
    //loop through tags in context, find tag by id, get name
    const giftTag = this.context.tags.find((tag) => tag.id === tagId);

    if (giftTag) {
      return <li>{giftTag.tag_name}</li>;
    } else {
      return null;
    }
  }

  handleFilterClear = () => {
    this.setState({ filter: false, filterTag: '' });
  };

  handleFilterClick = (tagId) => {
    this.setState({ filter: true, filterTag: tagId });
  };

  generateFilteredGifts = () => {
    //isolate tag id to filter on
    const userSelectedTag =
      this.context.tags.filter(
        (tag) => tag.id === Number(this.state.filterTag)
      )[0] || {};

    // console.log('userSelectedTag', userSelectedTag);

    const filteredGifts = this.context.gifts.filter((gift) => {
      // console.log(gift);
      // console.log(userSelectedTag);
      return gift.tag_id === userSelectedTag.id;
    });

    console.log('filtered gifts', filteredGifts);

    const userGifts = filteredGifts.map((gift) => {
      return (
        <div className="gift" id={gift.id} key={gift.id}>
          <div className="gift-id-name">
            <h3>{gift.gift_name}</h3>
            <Link to={`/my-gifts/${gift.id}`}>
              <button>View Details</button>
            </Link>
          </div>
          <div>
            <h4>Tag:</h4>
            <ul className="gift-id-tags">
              {this.getTagNameForGift(gift.tag_id)}
            </ul>
          </div>
        </div>
      );
    });

    console.log(userGifts);
    return userGifts;
  };

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
            <h4>Tag:</h4>
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
        <TagOptionsBar
          handleFilterClick={this.handleFilterClick}
          filterState={this.state.filter}
        />
        {this.state.filter && (
          <div className="clear-filter">
            <button onClick={this.handleFilterClear}>Clear Filter</button>
          </div>
        )}
        <section className="gift-section">
          <div id="gift-list">
            {(this.state.filter && this.generateFilteredGifts()) ||
              this.generateGifts()}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

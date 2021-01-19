import React from 'react';
import AppContext from '../../contexts/AppContext';
import GiftsApiService from '../../services/gifts-api-service';
import './GiftListPage.css';

export default class GiftListPage extends React.Component {
  static contextType = AppContext;

  componentDidMount() {
    GiftsApiService.getAllUserGifts().then((gifts) => {
      this.context.setGifts(gifts);
    });
  }

  generateGifts = () => {
    const userGifts = this.context.gifts.map((gift) => {
      return (
        <div className="gift">
          <div className="gift-id-name">
            <h3>{gift.gift_name}</h3>
            <button>View Details</button>
          </div>
          <div>
            <ul className="gift-id-tags">
              <li>Tag name</li>
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
        <section className="add-new-buttons">
          <button id="add-new-gift">Add New Gift</button>
          <button id="add-new-tag">Add New Tag</button>
        </section>
        <section className="filter-section">
          <div>
            <label htmlFor="filter-tag">Filter Gifts by Tag:</label>
            <select id="filter-tag" name="filter-tag">
              <option value=""></option>
              <option value="">TAG HERE</option>
              <option value="">TAG HERE</option>
              <option value="">TAG HERE</option>
            </select>
            <button>Filter</button>
          </div>
        </section>
        <section className="gift-section">
          <div id="gift-list">{this.generateGifts()}</div>
        </section>
      </React.Fragment>
    );
  }
}

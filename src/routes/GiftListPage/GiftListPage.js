import React from 'react';
import AppContext from '../../contexts/AppContext';
import GiftsApiService from '../../services/gifts-api-service';
import { Link } from 'react-router-dom';
import './GiftListPage.css';
import GiftOptionsBar from '../../components/GiftOptionsBar/GiftOptionsBar';

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
        <GiftOptionsBar />
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

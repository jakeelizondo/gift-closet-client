import React from 'react';
import AppContext from '../../contexts/AppContext';
import GiftsApiService from '../../services/gifts-api-service';
import boxIcon from '../../images/019-box.png';

export default class AddGiftFrom extends React.Component {
  static defaultProps = {
    onGiftPostSuccess: () => {},
  };

  static contextType = AppContext;

  state = { error: false };

  generateTagOptions = () => {
    const tagOptions = this.context.tags.map((tag) => {
      return (
        <option value={tag.id} key={tag.id}>
          {tag.tag_name}
        </option>
      );
    });
    return tagOptions;
  };

  handleFormChange = (event) => {
    this.setState({ touched: true });
    this.setState({ [event.target.id]: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const newGift = {
      gift_name: this.state.giftName,
      gift_cost: this.state.giftCost,
      gift_description: this.state.giftNotes,
      gift_url: this.state.giftUrl,
      tag_id: this.state.giftTag,
    };
    GiftsApiService.addGift(newGift)
      .then((gift) => {
        if (gift) {
          this.setState({ success: true });
          setTimeout(this.props.onGiftPostSuccess, 1500);
        } else {
          this.setState({
            error:
              'Oops, looks like something went wrong...please refresh the page to try again',
          });
        }
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });
  };

  render() {
    return (
      <form id="add-gift" onSubmit={(event) => this.handleFormSubmit(event)}>
        <div className="stack">
          <label htmlFor="gift-name">Gift Name (required):</label>
          <input
            placeholder="Gift Name Here"
            type="text"
            name="gift-name"
            id="giftName"
            required
            onChange={(event) => this.handleFormChange(event)}
          />
          {this.state.touched && this.state.giftName === '' && (
            <p style={{ color: 'red' }}>Gift name is required</p>
          )}
        </div>
        <div className="stack">
          <label htmlFor="gift-cost">Gift Cost: $</label>
          <input
            type="number"
            step=".01"
            name="gift-cost"
            id="giftCost"
            placeholder="00.00"
            onChange={(event) => this.handleFormChange(event)}
          />
        </div>
        <div className="stack">
          <label htmlFor="gift-notes">Notes/Description:</label>
          <textarea
            name="gift-notes"
            id="giftNotes"
            rows="5"
            style={{ width: '100%', maxWidth: '100%' }}
            onChange={(event) => this.handleFormChange(event)}
          ></textarea>
        </div>
        <div className="stack">
          <label htmlFor="gift-url">URL:</label>
          <input
            type="gift-url"
            name="gift-url"
            id="giftUrl"
            placeholder="https://"
            onChange={(event) => this.handleFormChange(event)}
          />
        </div>
        <div className="add-gift-add-tag">
          <label htmlFor="add-tag-new-gift">Add tag to gift:</label>
          <select
            id="giftTag"
            name="add-tag-new-gift"
            onChange={(event) => this.handleFormChange(event)}
          >
            <option value=""></option>
            {this.generateTagOptions()}
          </select>
        </div>
        {this.state.success && (
          <p style={{ color: 'green', textAlign: 'center', fontSize: '20px' }}>
            Your gift was created!
          </p>
        )}
        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
        <button
          type="submit"
          disabled={!this.state.giftName || this.state.giftName === ''}
        >
          <img src={boxIcon} alt={'gift-box-icon'} />
          Add Gift
        </button>
      </form>
    );
  }
}

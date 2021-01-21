import React from 'react';
import GiftsApiService from '../../services/gifts-api-service';

export default class EditGiftFrom extends React.Component {
  static defaultProps = {
    onGiftEditSuccess: () => {},
  };
  state = {
    error: false,
    giftName: '',
    giftCost: '',
    giftNotes: '',
    giftUrl: '',
  };

  componentDidMount() {
    GiftsApiService.getGiftById(this.props.match.params.giftId).then((gift) => {
      this.setState({
        giftName: gift.gift_name,
        giftCost: gift.gift_cost,
        giftNotes: gift.gift_description,
        giftUrl: gift.gift_url,
      });
    });
  }

  handleFormChange = (event) => {
    this.setState({ touched: true });
    this.setState({ [event.target.id]: event.target.value });
  };

  handleEditSubmit = (event) => {
    event.preventDefault();

    const gift = {
      gift_name: this.state.giftName,
      gift_cost: this.state.giftCost,
      gift_description: this.state.giftNotes,
      gift_url: this.state.giftUrl,
    };
    GiftsApiService.editGift(gift, this.props.match.params.giftId)
      .then((response) => {
        if (response) {
          this.props.onGiftEditSuccess();
        } else {
          this.setState({
            error:
              'Oops, looks like something went wrong...please refresh the page to try again',
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <form id="edit-gift" onSubmit={(event) => this.handleEditSubmit(event)}>
        <div>
          <label htmlFor="gift-name">Gift Name:</label>
          <input
            value={this.state.giftName}
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
        <div>
          <label htmlFor="gift-cost">Gift Cost: $</label>
          <input
            type="float"
            name="gift-cost"
            id="giftCost"
            value={this.state.giftCost}
            onChange={(event) => this.handleFormChange(event)}
          />
        </div>
        <div>
          <label htmlFor="gift-notes">Notes/Description:</label>
          <textarea
            name="gift-notes"
            id="giftNotes"
            rows="5"
            style={{ width: '100%', maxWidth: '100%' }}
            value={this.state.giftNotes}
            onChange={(event) => this.handleFormChange(event)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="gift-url">URL:</label>
          <input
            type="gift-url"
            name="gift-url"
            id="giftUrl"
            placeholder="giftwebsite.com/awesome-gift"
            value={this.state.giftUrl}
            onChange={(event) => this.handleFormChange(event)}
          />
        </div>
        <div className="edit-gift-edit-tag">
          <label htmlFor="edit-tag-gift">Add/change gift tag:</label>
          <select
            id="giftTag"
            name="edit-tag-new-gift"
            onChange={(event) => this.handleFormChange(event)}
          >
            <option value=""></option>
            <option value="1">GIFT TAG HERE</option>
            <option value="2">GIFT TAG HERE</option>
            <option value="3">GIFT TAG HERE</option>
          </select>
        </div>
        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
        <button
          type="submit-new-gift"
          disabled={!this.state.giftName || this.state.giftName === ''}
        >
          Edit Gift
        </button>
      </form>
    );
  }
}

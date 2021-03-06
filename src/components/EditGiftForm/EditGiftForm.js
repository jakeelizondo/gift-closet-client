import React from 'react';
import AppContext from '../../contexts/AppContext';
import GiftsApiService from '../../services/gifts-api-service';
import TagsApiService from '../../services/tags-api-service';
import editGiftIcon from '../../images/021-gift-9.png';

export default class EditGiftFrom extends React.Component {
  static defaultProps = {
    onGiftEditSuccess: () => {},
  };
  static contextType = AppContext;
  state = {
    error: false,
    giftName: '',
    giftCost: '',
    giftNotes: '',
    giftUrl: '',
    giftTag: '',
  };

  componentDidMount() {
    GiftsApiService.getGiftById(this.props.match.params.giftId).then((gift) => {
      this.setState({
        giftName: gift.gift_name,
        giftCost: gift.gift_cost,
        giftNotes: gift.gift_description,
        giftUrl: gift.gift_url,
        giftTag: gift.tag_id,
      });
    });
    TagsApiService.getAllTags().then((tags) => {
      this.context.setTags(tags);
    });
  }

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

  handleEditSubmit = (event) => {
    event.preventDefault();

    const gift = {
      gift_name: this.state.giftName,
      gift_cost: this.state.giftCost,
      gift_description: this.state.giftNotes,
      gift_url: this.state.giftUrl,
      tag_id: this.state.giftTag,
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
        this.setState({ error });
      });
  };

  render() {
    return (
      <form id="edit-gift" onSubmit={(event) => this.handleEditSubmit(event)}>
        <div className="stack">
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
        <div className="stack">
          <label htmlFor="gift-cost">Gift Cost: $</label>
          <input
            type="number"
            step=".01"
            name="gift-cost"
            id="giftCost"
            value={this.state.giftCost}
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
            value={this.state.giftNotes}
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
            <option value="">No change</option>
            <option value="delete">NO TAG</option>
            {this.generateTagOptions()}
          </select>
        </div>
        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
        <button
          type="submit-new-gift"
          disabled={!this.state.giftName || this.state.giftName === ''}
        >
          <img src={editGiftIcon} alt={'edit-gift-icon'} />
          Submit
        </button>
      </form>
    );
  }
}

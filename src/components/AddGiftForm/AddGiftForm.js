import React from 'react';

export default class AddGiftFrom extends React.Component {
  render() {
    return (
      <form id="add-gift">
        <div>
          <label for="gift-name">Gift Name:</label>
          <input
            placeholder="Gift Name Here"
            type="text"
            name="gift-name"
            id="gift-name"
            required
          />
        </div>
        <div>
          <label for="gift-cost">Gift Cost: $</label>
          <input
            type="number"
            name="gift-cost"
            id="gift-cost"
            placeholder="34.99"
          />
        </div>
        <div>
          <label for="gift-notes">Notes/Description:</label>
          <textarea
            name="gift-notes"
            id="gift-notes"
            rows="5"
            style="width: 100%; max-width: 100%"
          ></textarea>
        </div>
        <div>
          <label for="gift-url">URL:</label>
          <input
            type="gift-url"
            name="gift-url"
            id="gift-url"
            placeholder="giftwebsite.com/awesome-gift"
          />
        </div>
        <div className="add-gift-add-tag">
          <label for="add-tag-new-gift">Add tag to gift:</label>
          <select id="add-tag-new-gift" name="add-tag-new-gift">
            <option value=""></option>
            <option value="">GIFT TAG HERE</option>
            <option value="">GIFT TAG HERE</option>
            <option value="">GIFT TAG HERE</option>
          </select>
        </div>
        <button type="submit-new-gift">Add Gift</button>
      </form>
    );
  }
}

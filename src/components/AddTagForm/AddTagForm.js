import React from 'react';
import TagsApiService from '../../services/tags-api-service';

export default class AddTagFrom extends React.Component {
  static defaultProps = {
    onTagPostSuccess: () => {},
  };
  state = { error: false };

  handleFormChange = (event) => {
    this.setState({ touched: true });
    this.setState({ [event.target.id]: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const newTag = {
      tag_name: this.state.tagName,
    };
    TagsApiService.addTag(newTag)
      .then((tag) => {
        if (tag) {
          this.props.onTagPostSuccess();
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
      <form id="add-tag" onSubmit={(event) => this.handleFormSubmit(event)}>
        <div>
          <label htmlFor="tag-name">Tag Name:</label>
          <input
            placeholder="super cool tag name"
            type="text"
            name="tag-name"
            id="tagName"
            required
            onChange={(event) => this.handleFormChange(event)}
          />
          {this.state.touched && this.state.tagName === '' && (
            <p style={{ color: 'red' }}>Tag name is required</p>
          )}
        </div>

        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
        <button
          type="submit-new-tag"
          disabled={!this.state.tagName || this.state.tagName === ''}
        >
          Add tag
        </button>
      </form>
    );
  }
}

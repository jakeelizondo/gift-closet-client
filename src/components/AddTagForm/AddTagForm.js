import React from 'react';
import TagsApiService from '../../services/tags-api-service';
import tagIcon from '../../images/012-bookmark.png';

export default class AddTagFrom extends React.Component {
  static defaultProps = {
    onTagPostSuccess: () => {},
  };
  state = { error: false, success: false };

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
          this.setState({ success: true });
          setTimeout(this.props.onTagPostSuccess, 1500);
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
          <label htmlFor="tag-name">Tag Name (required):</label>
          <input
            placeholder=" Your tag name here"
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
        {this.state.success && (
          <p style={{ color: 'green', textAlign: 'center', fontSize: '20px' }}>
            Your tag was created!
          </p>
        )}

        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
        <button
          type="submit"
          disabled={!this.state.tagName || this.state.tagName === ''}
        >
          <img src={tagIcon} alt={'tag-icon'} />
          Add tag
        </button>
      </form>
    );
  }
}

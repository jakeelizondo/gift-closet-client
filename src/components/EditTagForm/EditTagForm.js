import React from 'react';
import AppContext from '../../contexts/AppContext';
import TagsApiService from '../../services/tags-api-service';
import editTagIcon from '../../images/050-tag.png';

export default class EditTagFrom extends React.Component {
  static defaultProps = {
    onTagEditSuccess: () => {},
  };
  static contextType = AppContext;
  state = {
    error: false,
    tagName: '',
  };

  componentDidMount() {
    TagsApiService.getTagById(this.props.match.params.tagId)
      .then((tag) => {
        this.setState({ tagName: tag.tag_name });
      })
      .catch((error) => {
        this.setState({ error: error.error.message });
      });
  }

  handleFormChange = (event) => {
    this.setState({ touched: true });
    this.setState({ [event.target.id]: event.target.value });
  };

  handleEditSubmit = (event) => {
    event.preventDefault();

    const tag = {
      tag_name: this.state.tagName,
    };
    TagsApiService.updateTag(tag, this.props.match.params.tagId)
      .then((response) => {
        if (response) {
          this.props.onTagEditSuccess();
        }
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    return (
      <form id="edit-gift" onSubmit={(event) => this.handleEditSubmit(event)}>
        <div>
          <label htmlFor="gift-name">Tag Name:</label>
          <input
            value={this.state.tagName}
            type="text"
            name="gift-name"
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
          type="submit"
          disabled={!this.state.tagName || this.state.tagName === ''}
        >
          <img src={editTagIcon} alt={'edit-tag-icon'} />
          Submit
        </button>
      </form>
    );
  }
}

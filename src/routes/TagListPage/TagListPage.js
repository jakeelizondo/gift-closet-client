import React from 'react';
import AppContext from '../../contexts/AppContext';
import TagsApiService from '../../services/tags-api-service';
import { Link } from 'react-router-dom';
import './TagListPage.css';
import GiftOptionsBar from '../../components/GiftOptionsBar/GiftOptionsBar';

export default class TagsListPage extends React.Component {
  static contextType = AppContext;
  componentDidMount() {
    TagsApiService.getAllTags().then((tags) => {
      this.context.setTags(tags);
    });
  }

  generateTags = () => {
    const userTags = this.context.tags.map((tag) => {
      return (
        <div className="tag" id={tag.id} key={tag.id}>
          <div className="tag-id-name">
            <h3>{tag.tag_name}</h3>
          </div>
          <div className="tag-buttons">
            <Link to={`/edit-tag/${tag.id}`}>
              <button>Edit Tag</button>
            </Link>
            <button>Delete Tag</button>
          </div>
        </div>
      );
    });

    return userTags;
  };

  render() {
    return (
      <React.Fragment>
        <GiftOptionsBar />

        <section className="tag-section">
          <div id="tag-list">{this.generateTags()}</div>
        </section>
      </React.Fragment>
    );
  }
}

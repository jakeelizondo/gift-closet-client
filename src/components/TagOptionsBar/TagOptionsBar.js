import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../contexts/AppContext';

export default class TagOptionsBar extends React.Component {
  static contextType = AppContext;
  state = { filter: '' };
  generateOptions = () => {
    const tagOptions = this.context.tags.map((tag) => {
      return (
        <option value={tag.id} key={tag.id}>
          {tag.tag_name}
        </option>
      );
    });
    return tagOptions;
  };

  handleChange = (e) => {
    const filterNum = e.target.value;
    this.setState({ filter: filterNum });
  };

  render() {
    return (
      <section className="filter-section">
        <div>
          <label htmlFor="filter-tag">Filter Gifts by Tag:</label>
          <select
            id="filter-tag"
            name="filter-tag"
            onChange={(e) => this.handleChange(e)}
          >
            <option value="">Choose a tag</option>
            {this.generateOptions()}
          </select>
          <button
            disabled={this.state.filter === ''}
            onClick={() => this.props.handleFilterClick(this.state.filter)}
          >
            Filter
          </button>
        </div>
        <div>
          <Link to={'/manage-tags'}>
            <button>Manage Tags</button>
          </Link>
        </div>
      </section>
    );
  }
}

import React from 'react';
import AppContext from '../../contexts/AppContext';
import './TagOptionsBar.css';

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
          <div>
            <label htmlFor="filter-tag" className="large-font">
              Filter by Tag:
            </label>
            <select
              id="filter-tag"
              name="filter-tag"
              className="large-font"
              onChange={(e) => this.handleChange(e)}
            >
              <option value="">Choose a tag</option>
              {this.generateOptions()}
            </select>
          </div>

          <button
            disabled={this.state.filter === ''}
            className="large-font"
            onClick={() => this.props.handleFilterClick(this.state.filter)}
          >
            Filter
          </button>
        </div>
      </section>
    );
  }
}

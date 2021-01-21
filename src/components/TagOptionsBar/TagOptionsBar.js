import React from 'react';
import { Link } from 'react-router-dom';

export default function TagOptionsBar() {
  return (
    <section className="filter-section">
      <div>
        <label htmlFor="filter-tag">Filter Gifts by Tag:</label>
        <select id="filter-tag" name="filter-tag">
          <option value=""></option>
          <option value="">TAG HERE</option>
          <option value="">TAG HERE</option>
          <option value="">TAG HERE</option>
        </select>
        <button>Filter</button>
      </div>
      <div>
        <Link to={'/manage-tags'}>
          <button>Manage Tags</button>
        </Link>
      </div>
    </section>
  );
}

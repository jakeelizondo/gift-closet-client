import React from 'react';
import { Link } from 'react-router-dom';
import './GiftOptionsBar.css';

export default function GiftOptionsBar() {
  return (
    <section className="add-new-buttons">
      <Link to={'/add-gift'}>
        <button id="add-new-gift">Add Gift</button>
      </Link>
      <Link to={'/add-tag'}>
        <button id="add-new-tag">Add Tag</button>
      </Link>
    </section>
  );
}

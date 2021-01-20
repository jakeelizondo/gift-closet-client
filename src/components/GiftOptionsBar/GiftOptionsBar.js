import React from 'react';
import { Link } from 'react-router-dom';

export default function GiftOptionsBar() {
  return (
    <section className="add-new-buttons">
      <Link to={'/add-gift'}>
        <button id="add-new-gift">Add New Gift</button>
      </Link>
      <button id="add-new-tag">Add New Tag</button>
    </section>
  );
}

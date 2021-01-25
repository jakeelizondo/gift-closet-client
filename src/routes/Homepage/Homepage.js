import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

export default function Homepage() {
  return (
    <div className="homepage">
      <section className="hero-1">
        <h2>Never forget a gift idea again</h2>
        <p>
          Always forgetting gift ideas for friends or loved ones? Not anymore.
          With Gift Closet you can save gift ideas throughout the year so that
          when holidays or events roll around you'll have a list of gift ideas
          to choose from.
        </p>
      </section>
      <section className="hero-2">
        <h2>Tag your gifts for easy access</h2>
        <p>
          Tag your gifts by individual, event, holiday, anything! Then later,
          filter your gifts by tag to see only the gift ideas you need for the
          occasion.
        </p>
      </section>
      <section className="hero-3">
        <h2>Manage your tags and gifts throughout the year</h2>
        <p>Add, edit, and delete your gifts and personal tags</p>
      </section>
      <section className="homepage-signup">
        <h2>Sign up today and get the gift of easy giving</h2>
        <Link to={'/register'}>
          <button>Sign me up!</button>
        </Link>
      </section>
    </div>
  );
}

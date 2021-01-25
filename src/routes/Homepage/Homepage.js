import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import giftMemoryIcon from '../../images/010-thinking.png';
import giftTagIcon from '../../images/050-tag.png';
import giftListIcon from '../../images/014-list.png';

export default function Homepage() {
  return (
    <div className="homepage">
      <section className="hero-1">
        <h2>Gift. Better.</h2>
        <div>
          <img src={giftMemoryIcon} alt={'gift-memory-icon'} />
          <p>
            Always forgetting gift ideas for friends or loved ones? Not anymore.
            With Gift Closet you can save gift ideas throughout the year so that
            when holidays or events roll around you'll have a list of gift ideas
            to choose from.
          </p>
        </div>
      </section>
      <section className="hero-2">
        <h2>Tag your gifts for easy access</h2>
        <div>
          <p>
            Tag your gifts by individual, event, holiday, anything! Later,
            filter your gifts by tag to see only the gift ideas you need for the
            occasion.
          </p>
          <img src={giftTagIcon} alt={'gift-tag-icon'} />
        </div>
      </section>
      <section className="hero-3">
        <h2>Manage your tags and gifts throughout the year</h2>
        <div>
          <img src={giftListIcon} alt={'gift-tag-icon'} />
          <p>
            Add, edit, and delete your gifts and personal tags as you need to.
          </p>
        </div>
      </section>
      <section className="homepage-signup">
        <div>
          <h2>Sign up today and get the gift of easy giving</h2>
          <Link to={'/register'}>
            <button>Sign me up!</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

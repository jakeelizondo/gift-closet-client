import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import giftMemoryIcon from '../../images/010-thinking.png';
import giftTagIcon from '../../images/050-tag.png';
import giftListIcon from '../../images/014-list.png';

export default function Homepage() {
  return (
    <div className="homepage">
      <section className="hero white-background hero-1">
        <div className="hero-image">
          <img src={giftMemoryIcon} alt={'gift-memory-icon'} />
        </div>
        <div className="hero-content">
          <h2>Gift. Smarter!</h2>

          <p>
            Always forgetting gift ideas for friends or loved ones? Not anymore!
            With Gift Closet you can save gift ideas throughout the year so that
            when holidays or events roll around you'll have a list of options in
            your virtual gift closet!
          </p>
        </div>
      </section>
      <section className="hero" style={{ 'background-color': '#f941443b' }}>
        <div className="hero-content">
          <h2>Tag your gifts for easy access</h2>
          <p>
            Organize your gifts by person, event, holiday, you pick! Later,
            filter your gifts by your custom tags to see only the gift ideas you
            need for the occasion.
          </p>
        </div>
        <div className="hero-image">
          <img src={giftTagIcon} alt={'gift-tag-icon'} />
        </div>
      </section>
      <section className="hero white-background">
        <div className="hero-image">
          <img src={giftListIcon} alt={'gift-tag-icon'} />
        </div>
        <div className="hero-content">
          <h2>Manage your gift lists throughout the year</h2>

          <p>
            Create, update, or delete gifts and personal tags as often as you'd
            like to keep your lists up to date. Add website links, price info,
            notes on preferences and more!
          </p>
        </div>
      </section>
      <section
        className="homepage-signup"
        style={{ backgroundColor: '#f941443b' }}
      >
        <div>
          <h2>Sign up today and enjoy the gift of easy giving!</h2>
          <Link to={'/register'}>
            <button>Sign me up!</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

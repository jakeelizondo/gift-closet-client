import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';
import giftClosetIcon from './../../images/003-gift-box.png';

export default class Header extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.props.history.push('/');
  };

  renderLoginLink() {
    return (
      <div className="header-links">
        <Link to={'/login'}>
          <li>Login</li>
        </Link>
        <Link to={'/register'}>
          <li>Register</li>
        </Link>
      </div>
    );
  }

  renderLogoutLink() {
    return (
      <div className="header-links">
        <Link to={'/my-gifts'}>
          <li>My Gifts</li>
        </Link>
        <Link to={'/manage-tags'}>
          <li>My Tags</li>
        </Link>
        <Link to={''} onClick={this.handleLogoutClick}>
          <li>Logout</li>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <header className="navbar">
        <div className="site-name">
          <img src={giftClosetIcon} alt={'gift-closet-logo'} />
          <h1>
            <Link to={'/'}>Gift Closet</Link>
          </h1>
        </div>

        <ul>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </ul>
      </header>
    );
  }
}

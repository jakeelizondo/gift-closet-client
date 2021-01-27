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

  getStyle = () => {
    if (this.props.location.pathname === '/') {
      return { backgroundColor: 'white' };
    } else {
      return { backgroundColor: '#fafafa' };
    }
  };

  renderLoginLink() {
    return (
      <div className="header-links">
        <Link to={'/login'}>
          <li
            className={
              this.props.location.pathname === '/login' ? 'active' : null
            }
          >
            Login
          </li>
        </Link>
        <Link to={'/register'}>
          <li
            className={
              this.props.location.pathname === '/register' ? 'active' : null
            }
          >
            Register
          </li>
        </Link>
      </div>
    );
  }

  renderLogoutLink() {
    return (
      <div className="header-links">
        <Link to={'/my-gifts'}>
          <li
            className={
              this.props.location.pathname === '/my-gifts' ? 'active' : null
            }
          >
            My Gifts
          </li>
        </Link>
        <Link to={'/manage-tags'}>
          <li
            className={
              this.props.location.pathname === '/manage-tags' ? 'active' : null
            }
          >
            My Tags
          </li>
        </Link>
        <Link to={''} onClick={this.handleLogoutClick}>
          <li>Logout</li>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <header className="navbar" style={this.getStyle()}>
        <div className="site-name">
          <img src={giftClosetIcon} alt={'gift-closet-logo'} />
          <h1>
            <Link to={TokenService.hasAuthToken() ? '/my-gifts' : '/'}>
              Gift Closet
            </Link>
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

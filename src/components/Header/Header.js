import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';

export default class Header extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.props.history.push('/');
  };

  renderLoginLink() {
    return (
      <div>
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
      <div>
        <Link to={'/my-gifts'}>
          <li>My Gifts</li>
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
        <h1>
          <Link to={'/'}>Gift Closet</Link>
        </h1>
        <ul>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </ul>
      </header>
    );
  }
}

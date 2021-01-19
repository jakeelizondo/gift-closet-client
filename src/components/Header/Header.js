import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="navbar">
        <h1>Gift Helper</h1>
        <ul>
          <li>Public: About, Login</li>
          <li>Private: Logout</li>
        </ul>
      </header>
    );
  }
}

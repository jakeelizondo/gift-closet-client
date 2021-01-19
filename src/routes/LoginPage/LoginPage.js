import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

export default class LoginPage extends React.Component {
  handleGoodLogin = () => {
    this.props.history.push('my-gifts');
  };

  render() {
    return (
      <section className="login-section">
        <h4>
          Don't have an account yet? <br />
          <Link to={'/register'}> Click here to register!</Link>
        </h4>

        <h2>Login below:</h2>
        <LoginForm handleGoodLogin={this.handleGoodLogin} />
      </section>
    );
  }
}

import React from 'react';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

export default class LoginForm extends React.Component {
  state = { error: null };

  handleSignIn = (event) => {
    event.preventDefault();
    this.setState({ error: null });
    const user_name = event.target.username;
    const password = event.target.password;

    // send username and password to server
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((response) => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(response.token);
        this.props.handleGoodLogin();
      })
      .catch((response) => {
        this.setState({ error: response.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="login-form" onSubmit={this.handleSignIn}>
        <div>{error && <p>{error}</p>}</div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            placeholder="username"
            type="text"
            name="username"
            id="username"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
          />
        </div>
        <div className="login-form-button">
          <button type="submit">Sign In</button>
        </div>
      </form>
    );
  }
}
